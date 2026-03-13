import { NextResponse } from 'next/server';
import { mainEvents } from '@/data/mainEvents';

const YEAR = 2026;

const locationCoords: Record<string, { lat: number; lng: number }> = {
  'ECC Conference Hall A, Ewha Womans University': { lat: 37.5628, lng: 126.9468 },
  'DSRV Office, Gangnam': { lat: 37.4979, lng: 127.0276 },
  'Grandhill Convention, Gangnam': { lat: 37.5013, lng: 127.0266 },
  'Sofitel Ambassador, Jamsil': { lat: 37.5130, lng: 127.0597 },
  'The Plaza Seoul, Jung-Gu': { lat: 37.5652, lng: 126.9784 },
  'S-Factory, Seong Su': { lat: 37.5445, lng: 127.0557 },
};

const monthMap: Record<string, number> = {
  JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
  JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
};

function parseTime(dateStr: string, timeStr?: string) {
  const [monthStr, dayStr] = dateStr.split(' ');
  const month = monthMap[monthStr];
  const day = parseInt(dayStr, 10);

  if (!timeStr) return { start: null, end: null };

  const [startRaw, endRaw] = timeStr.split(' - ');

  const toISO = (raw: string) => {
    const match = raw.match(/^(\d{1,2}):(\d{2})(am|pm)$/i);
    if (!match) return null;
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const meridiem = match[3].toLowerCase();
    if (meridiem === 'pm' && hours < 12) hours += 12;
    if (meridiem === 'am' && hours === 12) hours = 0;
    const dt = new Date(Date.UTC(YEAR, month, day, hours - 9, minutes));
    return dt.toISOString();
  };

  return { start: toISO(startRaw), end: toISO(endRaw) };
}

export async function GET() {
  const events = mainEvents.flatMap(({ date, events: dayEvents }) =>
    dayEvents.map((event) => {
      const { start, end } = parseTime(date, event.time);
      const coords = event.location ? locationCoords[event.location] ?? null : null;
      return {
        title: event.title,
        org: event.org,
        description: event.description ?? null,
        location: event.location ?? null,
        lat: coords?.lat ?? null,
        lng: coords?.lng ?? null,
        startTime: start,
        endTime: end,
        link: event.link ?? null,
        logos: event.logos ?? [],
      };
    })
  );

  return NextResponse.json({ success: true, data: { events } });
}
