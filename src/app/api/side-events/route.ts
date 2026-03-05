import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      'https://api.se.ro/v1/events/korea-buidl-week-2026/side-events',
      {
        headers: {
          Authorization: 'Bearer sk_bfd17c969c5441349f75369d0cb0a1c3',
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 },
      }
    );
    const json = await res.json();
    return NextResponse.json(json);
  } catch {
    return NextResponse.json({ success: false, data: { events: [] } }, { status: 500 });
  }
}
