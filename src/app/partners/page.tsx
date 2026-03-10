'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import { useLanguage } from '@/context/LanguageContext';

export default function PartnersPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Header padding and title for standalone page */}
      <div className="pt-40 pb-10 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">{t('partnersPage.title1')} {t('partnersPage.title1') && ' '}<span className="text-primary italic">{t('partnersPage.titleHighlight')}</span></h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">{t('partnersPage.subtitle')}</p>
      </div>

      <Partners />

      {/* Additional Support */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-secondary">{t('partnersPage.additionalTitle1')} <span className="text-primary italic">{t('partnersPage.additionalHighlight')}</span></h2>
          </div>

          <div className="space-y-20">
            {/* ProtoVille - Text Left, Image Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-primary font-semibold text-sm tracking-wider mb-3">{t('partnersPage.protovilleSubtitle')}</p>
                <h3 className="text-3xl md:text-4xl font-black text-secondary mb-2 tracking-tight">{t('partnersPage.protovilleTitle')}</h3>
                <p className="text-gray-400 text-sm font-medium mb-4">{t('partnersPage.protovilleDate')}</p>
                <p className="text-gray-600 mb-4">{t('partnersPage.protovilleDesc')} <span className="text-primary font-semibold">{t('partnersPage.protovilleHighlight')}</span> {t('partnersPage.protovilleDescEnd')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-gray-500 mb-5">
                  <p><span className="font-semibold text-secondary">{t('partnersPage.deepWork')}</span> {t('partnersPage.deepWorkDesc')}</p>
                  <p><span className="font-semibold text-secondary">{t('partnersPage.ubiWatching')}</span> {t('partnersPage.ubiWatchingDesc')}</p>
                  <p><span className="font-semibold text-secondary">{t('partnersPage.coCreation')}</span> {t('partnersPage.coCreationDesc')}</p>
                  <p><span className="font-semibold text-secondary">{t('partnersPage.sovereignVillage')}</span> {t('partnersPage.sovereignVillageDesc')}</p>
                </div>
                <p className="text-xs text-gray-400 mb-5"><span className="font-semibold text-gray-500">{t('partnersPage.protoCost')}</span> {t('partnersPage.protoCostDesc')}</p>
                <a href="https://protoville.xyz" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-primary-600 transition-all hover:-translate-y-0.5">
                  {t('partnersPage.protovilleBtnText')}
                </a>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative w-full aspect-[5/3] rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-[#0a1f0a] via-[#1B2F1B] to-[#0d260d]">
                  <div className="absolute inset-0 opacity-[0.06]" style={{background: 'radial-gradient(circle at 75% 25%, #2d8a4e 0%, transparent 60%)'}} />
                  <div className="absolute inset-0 opacity-[0.04]" style={{background: 'radial-gradient(circle at 20% 85%, #2d8a4e 0%, transparent 50%)'}} />
                  <div className="absolute top-[20%] right-[8%] w-[180px] h-[180px] rounded-xl border border-[#2d8a4e]/15" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2d8a4e]/20" />
                  <div className="absolute top-[20%] left-0 right-0 h-px bg-[#2d8a4e]/10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full shrink-0">
                        <img src="/partner-protoville.svg" alt="" className="h-12 md:h-16 max-w-none" />
                      </div>
                      <span className="text-[#e8f5e9] text-2xl md:text-4xl font-bold tracking-wide" style={{fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", letterSpacing: '0.3px'}}>ProtoVille</span>
                    </div>
                    <p className="text-[#a5d6a7] text-[10px] md:text-xs tracking-[3px] font-medium">PROTOTYPING RURAL FUTURES</p>
                    <p className="text-[#81c784]/60 text-[9px] md:text-[10px] tracking-[2px]">APRIL 2-8, 2026 | NAMHAE, SOUTH KOREA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Elixi - Image Left, Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1">
                <div className="relative w-full aspect-[5/3] rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-[#1a0f05] via-[#2a1810] to-[#1a0a00]">
                  <div className="absolute inset-0 opacity-[0.04]" style={{background: 'radial-gradient(circle at 70% 30%, #e67e22 0%, transparent 55%)'}} />
                  <div className="absolute inset-0 opacity-[0.03]" style={{background: 'radial-gradient(circle at 25% 80%, #e67e22 0%, transparent 45%)'}} />
                  <div className="absolute top-[15%] left-[30%] w-[200px] h-[200px] opacity-[0.06]" style={{background: 'linear-gradient(45deg, transparent 45%, #e67e22 45%, #e67e22 55%, transparent 55%), linear-gradient(-45deg, transparent 45%, #e67e22 45%, #e67e22 55%, transparent 55%)'}} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <img src="/partner-elixi.svg" alt="Elixi" className="h-8 md:h-12 brightness-0 invert" />
                    <p className="text-[#e67e22] text-[10px] md:text-xs tracking-[4px] font-medium">VENTURE STUDIO &amp; ADVISORY</p>
                    <p className="text-[#d4956b]/70 text-[9px] md:text-[10px] tracking-[2px]">Government-Licensed Korea GTM Accelerator</p>
                    <div className="flex items-center gap-6 mt-4">
                      <div className="text-center">
                        <p className="text-[#e67e22] text-xl md:text-2xl font-bold">900+</p>
                        <p className="text-[#d4956b]/70 text-[8px] md:text-[9px] tracking-[1px]">STRATEGIES</p>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-[#e67e22]/30" />
                      <div className="text-center">
                        <p className="text-[#e67e22] text-xl md:text-2xl font-bold">200+</p>
                        <p className="text-[#d4956b]/70 text-[8px] md:text-[9px] tracking-[1px]">MANDATES</p>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-[#e67e22]/30" />
                      <div className="text-center">
                        <p className="text-[#e67e22] text-xl md:text-2xl font-bold">50+</p>
                        <p className="text-[#d4956b]/70 text-[8px] md:text-[9px] tracking-[1px]">PARTNERS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <p className="text-primary font-semibold text-sm tracking-wider mb-3">{t('partnersPage.elixiSubtitle')}</p>
                <h3 className="text-3xl md:text-4xl font-black text-secondary mb-2 tracking-tight">{t('partnersPage.ventureTitle')} <span className="text-primary italic">{t('partnersPage.ventureHighlight')}</span></h3>
                <p className="text-gray-400 text-sm font-medium mb-4">{t('partnersPage.ventureDesc1')}</p>
                <p className="text-gray-600 mb-4">{t('partnersPage.elixiDesc')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm mb-5">
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <h5 className="font-bold text-secondary mb-1 text-xs">{t('partnersPage.instTrust')}</h5>
                    <p className="text-gray-500 text-xs">{t('partnersPage.instTrustDesc')}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <h5 className="font-bold text-secondary mb-1 text-xs">{t('partnersPage.dataKol')}</h5>
                    <p className="text-gray-500 text-xs">{t('partnersPage.dataKolDesc')}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <h5 className="font-bold text-secondary mb-1 text-xs">{t('partnersPage.offlineAuth')}</h5>
                    <p className="text-gray-500 text-xs">{t('partnersPage.offlineAuthDesc')}</p>
                  </div>
                </div>
                <a href="https://elixiland-w3o6frgk.manus.space/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-primary-600 transition-all hover:-translate-y-0.5">
                  {t('partnersPage.elixiBtnText')}
                </a>
              </div>
            </div>

            {/* O-SEAN - Text Left, Image Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-primary font-semibold text-sm tracking-wider mb-3">{t('partnersPage.oseanSubtitle')}</p>
                <h3 className="text-3xl md:text-4xl font-black text-secondary mb-2 tracking-tight">{t('partnersPage.oseanTitle')} <span className="text-primary italic">{t('partnersPage.oseanHighlight')}</span></h3>
                <p className="text-gray-600 mb-6">{t('partnersPage.oseanDesc')}</p>
                <a href="https://o-sean.io/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-primary-600 transition-all hover:-translate-y-0.5">
                  {t('partnersPage.oseanBtnText')}
                </a>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative w-full aspect-[5/3] rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-[#050d1a] via-[#0a1628] to-[#071020]">
                  <div className="absolute inset-0 opacity-[0.04]" style={{background: 'radial-gradient(circle at 75% 25%, #1565c0 0%, transparent 55%)'}} />
                  <div className="absolute inset-0 opacity-[0.03]" style={{background: 'radial-gradient(circle at 20% 85%, #1565c0 0%, transparent 45%)'}} />
                  <svg className="absolute bottom-[25%] left-0 right-0 w-full opacity-[0.12]" viewBox="0 0 800 100" preserveAspectRatio="none">
                    <path d="M0,50 Q200,10 400,50 Q600,90 800,50" fill="none" stroke="#1565c0" strokeWidth="1.5"/>
                    <path d="M0,65 Q200,25 400,65 Q600,105 800,65" fill="none" stroke="#1976d2" strokeWidth="1"/>
                    <path d="M0,80 Q200,40 400,80 Q600,120 800,80" fill="none" stroke="#2196f3" strokeWidth="0.7"/>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <p className="text-[#42a5f5]/70 text-[9px] md:text-[10px] tracking-[5px] font-medium">ALL-IN-ONE MERCH &amp; EVENT PRODUCTION</p>
                    <img src="/partner-osean.png" alt="O-SEAN" className="h-5 md:h-7" />
                    <p className="text-[#64b5f6] text-[10px] md:text-xs tracking-[3px] mt-1">MERCH &amp; EVENT PRODUCTION</p>
                    <div className="w-20 h-0.5 rounded bg-[#1565c0]/40 mt-2" />
                  </div>
                </div>
              </div>
            </div>
            {/* ATH - Image Left, Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-1">
                <div className="relative w-full aspect-[5/3] rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#0a0a0a]">
                  <div className="absolute inset-0 opacity-[0.06]" style={{background: 'radial-gradient(circle at 70% 30%, #f5e642 0%, transparent 55%)'}} />
                  <div className="absolute inset-0 opacity-[0.04]" style={{background: 'radial-gradient(circle at 25% 80%, #f5e642 0%, transparent 45%)'}} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                      <img src="/partner-ath.png" alt="ATH" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-white text-2xl md:text-3xl font-black tracking-wider">ATH</p>
                    <p className="text-[#f5e642] text-[10px] md:text-xs tracking-[3px] font-medium">FULL-CYCLE CREATIVE PRODUCTION</p>
                    <div className="w-20 h-0.5 rounded bg-[#f5e642]/30 mt-1" />
                    <div className="flex items-center gap-6 mt-2">
                      <p className="text-gray-400 text-[9px] md:text-[10px] tracking-[2px]">CONCEPT</p>
                      <div className="w-1 h-1 rounded-full bg-[#f5e642]/30" />
                      <p className="text-gray-400 text-[9px] md:text-[10px] tracking-[2px]">PRODUCTION</p>
                      <div className="w-1 h-1 rounded-full bg-[#f5e642]/30" />
                      <p className="text-gray-400 text-[9px] md:text-[10px] tracking-[2px]">PUBLISHING</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <p className="text-primary font-semibold text-sm tracking-wider mb-3">{t('partnersPage.athSubtitle')}</p>
                <h3 className="text-3xl md:text-4xl font-black text-secondary mb-2 tracking-tight">{t('partnersPage.athTitle')} <span className="text-primary italic">{t('partnersPage.athHighlight')}</span></h3>
                <p className="text-gray-600 mb-6">{t('partnersPage.athDesc')}</p>
                <a href="https://ath.camera/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-primary-600 transition-all hover:-translate-y-0.5">
                  {t('partnersPage.athBtnText')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="bg-secondary rounded-[3rem] p-12 md:p-20">
          <h3 className="text-3xl md:text-5xl font-black mb-6 text-white">{t('partnersPage.becomePartnerTitle')} {t('partnersPage.becomePartnerTitle') && ' '}<span className="text-primary italic">{t('partnersPage.becomePartnerHighlight')}</span></h3>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">{t('partnersPage.becomePartnerDesc')}</p>
          <a href="/contact#message" className="min-w-[200px] text-center bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 inline-block">
            {t('partnersPage.inquiryBtn')}
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
