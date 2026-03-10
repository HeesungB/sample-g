export interface EventEntry {
  title: string;
  org: string;
  description?: string;
  time?: string;
  location?: string;
  link?: string;
  logos?: string[];
}

export interface EventDay {
  date: string;
  events: EventEntry[];
}

export const mainEvents: EventDay[] = [
  { date: 'APR 14', events: [
    { title: 'BuidlHack 2026 Builder Day', org: 'KBWA', time: '18:00pm - 22:00pm', location: 'DSRV Office, Gangnam', link: 'https://www.buidlkorea.com/buidlhack2026', logos: ['/org-kbwa.svg'] },
  ] },
  { date: 'APR 15', events: [
    { title: 'AI / Infra Con', org: 'Catalyze', time: '18:00pm - 22:00pm', location: 'To Be Announced', link: 'https://luma.com/8nzr1zec', logos: ['/org-catalyze.svg'] },
    { title: 'Buidl Asia: Next Finance Summit', org: 'ARK Point', time: '13:00pm - 18:00pm', location: 'Grandhill Convention, Gangnam', link: 'https://luma.com/cav0i3pu', logos: ['/org-arkpoint.svg'] },
  ] },
  { date: 'APR 16', events: [
    { title: 'Buidl Asia 2026 Day 1', org: 'KryptoPlanet', time: '10:00am - 18:00pm', location: 'Sofitel Ambassador, Jamsil', link: 'https://buidl.asia', logos: ['/org-kryptoplanet.svg'] },
  ] },
  { date: 'APR 17', events: [
    { title: 'Buidl Asia 2026 Day 2', org: 'KryptoPlanet', time: '10:00am - 18:00pm', location: 'Sofitel Ambassador, Jamsil', link: 'https://buidl.asia', logos: ['/org-kryptoplanet.svg'] },
    { title: 'CIS 2026 - Institutional Day', org: 'Xangle', time: '13:30pm - 21:00pm', location: 'The Plaza Seoul, Jung-Gu', link: 'https://cis2060.io/', logos: ['/org-xangle.png'] },
  ] },
  { date: 'APR 18', events: [
    { title: 'CIS 2026 - Retail Festival', org: 'Xangle', time: '10:00am - 18:00pm', location: 'S-Factory, Seong Su', link: 'https://cis2060.io/', logos: ['/org-xangle.png'] },
    { title: 'BuidlHack 2026 – Final Pitch', org: 'KBWA', time: '11:00am - 18:00pm', location: 'DSRV Office, Gangnam', link: 'https://www.buidlkorea.com/buidlhack2026', logos: ['/org-kbwa.svg'] },
  ] },
  { date: 'APR 19', events: [
    { title: 'CIS 2026 - Retail Festival', org: 'Xangle', time: '10:00am - 18:00pm', location: 'S-Factory, Seong Su', link: 'https://cis2060.io/', logos: ['/org-xangle.png'] },
  ] },
];
