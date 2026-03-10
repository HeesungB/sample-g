import { NextResponse } from 'next/server';
import { mainEvents } from '@/data/mainEvents';

export async function GET() {
  return NextResponse.json({ success: true, data: { events: mainEvents } });
}
