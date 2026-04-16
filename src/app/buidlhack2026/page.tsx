'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from '@/context/LanguageContext';

const COMMUNITY_LINK = 'https://bit.ly/KBW_Community';

type JudgePerson = { src: string; name: string; org: string; role: string; explanation?: string; objectPosition?: string };

export default function BuidlHackPage() {
  const { t } = useLanguage();
  const [modalPerson, setModalPerson] = useState<JudgePerson | null>(null);

  const stats = [
    { value: '2018', label: t('buidlhack.sinceLbl'), desc: t('buidlhack.sinceDesc') },
    { value: '150+', label: t('buidlhack.sideEventsLbl'), desc: t('buidlhack.sideEventsDesc') },
    { value: '20K+', label: t('buidlhack.attendeesLbl'), desc: t('buidlhack.attendeesDesc') },
    { value: '100+', label: t('buidlhack.orgsLbl'), desc: t('buidlhack.orgsDesc') },
  ];

  const prizes = [
    { sponsor: 'BNB Chain', amount: '$5,000', logo: '/prize-bnb-chain.svg' },
    { sponsor: 'Status Network', amount: '$5,000', logo: '/prize-status-network.png' },
    { sponsor: 'Near AI', amount: '$5,000', logo: '/prize-near-ai.webp' },
    { sponsor: 'YGG & Verse8', amount: '$5,000', logo: '/prize-ygg-play.svg', logo2: '/prize-verse8.png' },
    { sponsor: 'General Track', amount: '$6,000', logo: '/logo-horizontal.png' },
  ];

  const judgeGroups: { group: string; people: JudgePerson[] }[] = [
    {
      group: 'General Track Judges',
      people: [
        { src: '/judge-hyung-kyu-choi.png', name: 'Hyung-Kyu Choi', org: 'DSRV', role: 'Co-founder / VP of Research' },
        { src: '/judge-dmitry-serdyuk.png', name: 'Dmitry Serdyuk', org: 'SigIntZero', role: 'Chief Digital Officer' },
        { src: '/judge-logan-kang.png', name: 'Logan Kang', org: 'Base Korea', role: 'Devrel Ambassador' },
        { src: '/judge-advait-jayant.png', name: 'Advait Jayant', org: 'OpenGradient', role: 'Chief Strategy Officer' },
        { src: '/judge-mashal-waqar.png', name: 'Mashal Waqar', org: 'Octant', role: 'CMO' },
        { src: '/judge-seri-choi.png', name: 'Seri Choi', org: 'EigenCloud', role: 'Senior Software Engineer' },
        { src: '/judge-lena-kang.png', name: 'Lena Kang', org: 'Core Contributor', role: 'Virtuals Protocol', objectPosition: 'top' },
      ],
    },
    {
      group: 'YGG & Verse 8 Judges',
      people: [
        { src: '/judge-abby-dizon.png', name: 'Gabby Dizon', org: 'YGG', role: 'Co-founder' },
        { src: '/judge-jc-kim.png', name: 'JC Kim', org: 'Verse 8', role: 'Founder/CEO of Planetarium Labs, Founding builder of various web3 L1 tech. (LINE Blockchain, Nine Chronicles)' },
        { src: '/judge-hakyong-tae.png', name: 'Hakyong Tae', org: 'Verse 8', role: 'VP of Business Development' },
        { src: '/judge-kevin-lee.png', name: 'Kevin Lee', org: 'Verse 8', role: 'CEO, Verse Eight' },
      ],
    },
    {
      group: 'Status Network Judge',
      people: [
        { src: '/judge-kelly.png', name: 'Kelly', org: 'Status Network', role: 'DevRel' },
      ],
    },
    {
      group: 'NEAR AI Judges',
      people: [
        { src: '/judge-elliot-braem.png', name: 'Elliot Braem', org: 'NEAR Foundation', role: 'DevRel' },
        { src: '/judge-cameron-dennis.png', name: 'Cameron Dennis', org: 'NEAR Foundation', role: 'Director of AI' },
      ],
    },
    {
      group: 'BNB Judges',
      people: [
        { src: '/judge-hyung-kyu-choi-bnb.png', name: 'Hyung-Kyu Choi', org: 'BNB', role: 'BD' },
        { src: '/judge-gwen.png', name: 'Gwen', org: 'BNB', role: 'DevRel · Online Judge Only' },
      ],
    },
    {
      group: 'AMA Speakers',
      people: [
        { src: '/ama-elliot-braem.png', name: 'Elliot Braem', org: 'Near AI', role: 'Builder Ops' },
        { src: '/ama-kelly.png', name: 'Kelly', org: 'Status Network', role: 'DevRel' },
        { src: '/ama-yena.png', name: 'Yena', org: 'BNB Chain', role: 'Marketing Manager' },
        { src: '/ama-gabby-dizon.png', name: 'Gabby Dizon', org: 'YGG', role: 'Co-founder' },
        { src: '/ama-wise.png', name: 'Wise', org: 'Verse8', role: 'Builder Ops' },
      ],
    },
  ];

  const schedule = [
    { date: 'MAR 11', day: 'Wed', title: t('buidlhack.kickoffTitle'), time: '20:00 – 21:00 PM', desc: t('buidlhack.kickoffDesc') },
    { date: 'MAR 19', day: 'Thu', title: t('buidlhack.bnbWorkshopTitle'), time: '21:00 – 22:00 PM', desc: t('buidlhack.bnbWorkshopDesc') },
    { date: 'MAR 25', day: 'Wed', title: t('buidlhack.yggWorkshopTitle'), time: '20:00 – 21:00 PM', desc: t('buidlhack.yggWorkshopDesc') },
    { date: 'APR 1', day: 'Wed', title: t('buidlhack.nearWorkshopTitle'), time: '20:00 – 21:00 PM', desc: t('buidlhack.nearWorkshopDesc') },
    { date: 'APR 7', day: 'Tue', title: t('buidlhack.statusWorkshopTitle'), time: '20:00 – 21:00 PM', desc: t('buidlhack.statusWorkshopDesc') },
    { date: 'APR 14', day: 'Tue', title: t('buidlhack.builderDayTitle'), time: '18:00 – 22:00 PM', desc: t('buidlhack.builderDayDesc') },
    { date: 'APR 15\n– APR 17', day: 'Wed–Fri', title: t('buidlhack.hackingTitle'), time: t('buidlhack.hackingTime'), desc: t('buidlhack.hackingDesc') },
    { date: 'APR 17', day: 'Fri', title: t('buidlhack.submissionTitle'), time: t('buidlhack.submissionTime'), desc: t('buidlhack.submissionDesc') },
    { date: 'APR 18', day: 'Sat', title: t('buidlhack.pitchTitle'), time: '11:00 AM – 18:00 PM', desc: t('buidlhack.pitchDesc') },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero - Full Screen */}
      <section className="relative h-screen w-full overflow-hidden flex items-end">
        <img
          src="/buidlhack-hero.jpg"
          alt="Korea Buidl Week 2026"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight">
              {t('buidlhack.title1')} <span className="text-primary italic">{t('buidlhack.title2')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-4">{t('buidlhack.subtitle')}</p>
            <p className="text-white/60 max-w-2xl text-lg mb-10">
              {t('buidlhack.desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 inline-block"
              >
                {t('buidlhack.joinCommunity')}
              </a>
              <a
                href="https://www.ludium.world/programs/hackathon/f8a6bb25-671a-44c3-a8c3-293a5d048e51"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/20 transition-all hover:-translate-y-1 inline-block"
              >
                {t('buidlhack.applyToHack')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white opacity-50"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Track Record */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{t('buidlhack.trackRecordTitle1')} <span className="text-primary italic">{t('buidlhack.trackRecordHighlight')}</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">{t('buidlhack.trackRecordDesc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 h-auto md:h-56"
              >
                <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-tighter">{stat.label}</div>
                <div className="text-5xl font-black text-primary mb-4">{stat.value}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{t('buidlhack.prizeTitle1')} <span className="text-primary italic">{t('buidlhack.prizeHighlight')}</span></h2>
            <p className="text-4xl md:text-6xl lg:text-7xl font-black text-primary mt-4">$26,000</p>
            <p className="text-gray-500 text-lg font-medium mt-4">{t('buidlhack.prizeAvailable')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-5xl mx-auto">
            {prizes.map((prize, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 flex flex-col items-center justify-center text-center w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] aspect-[1/0.85] md:aspect-[1/0.9] hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all"
              >
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">{prize.sponsor}</h4>
                <p className="text-2xl md:text-4xl font-black text-primary">{prize.amount}</p>
                {prize.logo && (
                  <div className={`flex items-center mt-4 opacity-30 ${prize.logo2 ? 'flex-col gap-3' : 'gap-2'}`}>
                    <img src={prize.logo} alt="" className={`${prize.logo2 ? 'h-8' : prize.sponsor === 'Near AI' ? 'h-4' : prize.sponsor === 'BNB Chain' ? 'h-[21px]' : prize.sponsor === 'General Track' ? 'h-[23px]' : prize.sponsor === 'Status Network' ? 'h-[28px] md:h-[31px]' : 'h-5'} w-auto brightness-0`} />
                    {prize.logo2 && <img src={prize.logo2} alt="" className="h-4 w-auto brightness-0" />}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{t('buidlhack.scheduleTitle1')} {t('buidlhack.scheduleTitle1') && ' '}<span className="text-primary italic">{t('buidlhack.scheduleHighlight')}</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">{t('buidlhack.scheduleDesc')}</p>
          </div>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-start bg-gray-50/50 p-5 md:p-8 rounded-2xl md:rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/10 transition-all group"
              >
                <div className="flex items-center gap-4 w-full md:w-44 flex-shrink-0 mb-3 md:mb-0">
                  <span className="text-primary font-black text-xl whitespace-pre-line">{item.date}</span>
                  <span className="text-gray-300 font-bold text-sm uppercase">{item.day}</span>
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-1 font-medium">{item.desc}</p>
                </div>
                <div className="flex-shrink-0 mt-2 md:mt-0 md:ml-6">
                  <span className="text-primary font-bold text-sm md:text-base">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{t('buidlhack.sponsorsTitle1')} {t('buidlhack.sponsorsTitle1') && ' '}<span className="text-primary italic">{t('buidlhack.sponsorsHighlight')}</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">{t('buidlhack.sponsorsDesc')}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 max-w-5xl mx-auto">
            {[
              { src: '/sponsor-bnb-chain-color.svg', name: 'BNB Chain', h: 'max-h-10 md:max-h-12' },
              { src: '/sponsor-status-network-color.png', name: 'Status Network', h: 'max-h-[58px] md:max-h-[72px]' },
              { src: '/sponsor-near-ai.webp', name: 'Near AI', h: 'max-h-[19px] md:max-h-5' },
              { src: '/sponsor-verse8-color.svg', name: 'Verse8', h: 'max-h-[19px] md:max-h-5' },
              { src: '/sponsor-ygg-play-color.svg', name: 'YGG Play', h: 'max-h-[38px] md:max-h-10' },
            ].map((logo, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between p-6 md:p-8 aspect-square"
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`max-w-full w-auto object-contain transition-all duration-300 ${logo.h}`}
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judges, Speakers & Mentors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{t('buidlhack.judgesTitle1')} {t('buidlhack.judgesTitle1') && ' '}<span className="text-primary italic">{t('buidlhack.judgesHighlight')}</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">{t('buidlhack.judgesDesc')}</p>
          </div>
          <div className="space-y-14 md:space-y-20 max-w-5xl mx-auto">
            {judgeGroups.map((group, gi) => (
              <div key={gi}>
                <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
                  <span className="h-px flex-1 max-w-[80px] bg-gray-200" />
                  <h3 className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-[0.2em]">{group.group}</h3>
                  <span className="h-px flex-1 max-w-[80px] bg-gray-200" />
                </div>
                <div className={`grid gap-4 md:gap-6 mx-auto ${
                  group.people.length === 1 ? 'grid-cols-1 max-w-[260px]' :
                  group.people.length === 2 ? 'grid-cols-2 max-w-[544px]' :
                  group.people.length === 3 ? 'grid-cols-2 lg:grid-cols-3 max-w-[820px]' :
                  group.people.length === 5 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' :
                  'grid-cols-2 lg:grid-cols-4'
                }`}>
                  {group.people.map((person, i) => {
                    const clickable = !!person.explanation;
                    return (
                      <div
                        key={i}
                        onClick={clickable ? () => setModalPerson(person) : undefined}
                        className={`group bg-white rounded-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-stretch overflow-hidden w-full${clickable ? ' cursor-pointer' : ''}`}
                      >
                        <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                          <img
                            src={person.src}
                            alt={person.name}
                            style={person.objectPosition ? { objectPosition: person.objectPosition } : undefined}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {clickable && (
                            <div className="absolute inset-0 bg-secondary/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-white text-xs md:text-sm font-semibold mb-2">View full bio</p>
                              <div className="w-8 h-0.5 bg-primary" />
                            </div>
                          )}
                        </div>
                        <div className="text-center px-4 py-5 md:px-5 md:py-6">
                          <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">{person.name}</h4>
                          <p className="text-sm font-semibold text-primary mb-0.5">{person.org}</p>
                          <p className="text-xs md:text-sm text-gray-500 line-clamp-2">{person.role}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{t('buidlhack.communityTitle1')} {t('buidlhack.communityTitle1') && ' '}<span className="text-primary italic">{t('buidlhack.communityHighlight')}</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">{t('buidlhack.communityDesc')}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {[
              { src: '/community-aidenteti.svg', name: 'Aidenteti Crew', h: 'max-h-11 md:max-h-14 lg:max-h-12' },
              { src: '/community-bay.svg', name: 'BAY', h: 'max-h-11 md:max-h-14 lg:max-h-12' },
              { src: '/community-blockchain-valley.svg', name: 'Blockchain Valley', h: 'max-h-11 md:max-h-14 lg:max-h-12' },
              { src: '/community-ewha-chain.png', name: 'EWHA CHAIN', h: 'max-h-[59px] md:max-h-[75px] lg:max-h-16', invert: true },
              { src: '/community-pdao.png', name: 'PDAO', h: 'max-h-11 md:max-h-14 lg:max-h-12', invert: true },
              { src: '/community-sol3hacker.png', name: 'Sol3Hacker', h: 'max-h-11 md:max-h-14 lg:max-h-12', rounded: true },
              { src: '/community-bluenode.png', name: 'Bluenode', h: 'max-h-11 md:max-h-14 lg:max-h-12', invert: true },
              { src: '/community-skkrypto.svg', name: 'Skkrypto', h: 'max-h-16 md:max-h-[84px] lg:max-h-[70px]', invert: true },
            ].map((logo, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between p-6 md:p-8 aspect-square"
              >
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`max-w-full w-auto object-contain transition-all duration-300 ${logo.h}${logo.invert ? ' brightness-0' : ''}${logo.rounded ? ' rounded-xl' : ''}`}
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{t('buidlhack.partnersTitle1')} {t('buidlhack.partnersTitle1') && ' '}<span className="text-primary italic">{t('buidlhack.partnersHighlight')}</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">{t('buidlhack.partnersDesc')}</p>
          </div>
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-8 md:gap-x-20 max-w-md md:max-w-none mx-auto">
            {[
              { src: '/partner-01.svg', h: 'h-10 md:h-12', className: 'translate-x-2' },
              { src: '/partner-02.svg', h: 'h-10 md:h-12' },
              { src: '/partner-03.svg', h: 'h-6 md:h-7' },
              { src: '/partner-ludium.svg', h: 'h-10 md:h-12' },
            ].map((logo, i) => (
              <div
                key={i}
                className={`flex items-center justify-center brightness-0 opacity-40 hover:opacity-100 transition-all duration-300 ${logo.className || ''}`}
              >
                <img
                  src={logo.src}
                  alt="Partner Logo"
                  className={`w-auto object-contain ${logo.h}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-2xl md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <svg width="100%" height="100%">
                <pattern id="cta-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">{t('buidlhack.ctaTitle1')} {t('buidlhack.ctaTitle1') && ' '}<span className="text-primary italic">{t('buidlhack.ctaHighlight')}</span></h3>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
                {t('buidlhack.ctaDesc')}
              </p>
              <a
                href={COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 inline-block"
              >
                {t('buidlhack.joinCommunity')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {modalPerson && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm"
          onClick={() => setModalPerson(null)}
        >
          <div
            className="relative bg-white rounded-3xl w-full max-w-3xl h-[85vh] md:h-[520px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setModalPerson(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors z-10"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </button>
            <div className="md:w-2/5 shrink-0 aspect-square md:aspect-auto bg-gray-100">
              <img src={modalPerson.src} alt={modalPerson.name} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-3/5 p-6 md:p-8 overflow-y-auto">
              <p className="text-sm font-semibold text-primary mb-1">{modalPerson.org}</p>
              <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-1 tracking-tight">{modalPerson.name}</h4>
              <p className="text-sm md:text-base text-gray-500 mb-6">{modalPerson.role}</p>
              <div className="h-px bg-gray-200 mb-5" />
              <div className="space-y-4">
                {modalPerson.explanation?.split('\n\n').map((para, i) => (
                  <p key={i} className="text-sm md:text-base text-gray-700 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
