import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Header padding and title for standalone page */}
      <div className="pt-40 pb-10 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">Network of <span className="text-primary italic">Innovation</span></h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Connecting global builders with Korea&apos;s leading Web3 ecosystem.</p>
      </div>

      <Partners />

      {/* Additional Features */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-secondary">Additional <span className="text-primary italic">Features</span></h2>
        </div>

        <div className="space-y-16">
          {/* ProtoVille Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-black text-secondary tracking-tight whitespace-nowrap">ProtoVille</h3>
              <div className="h-px bg-gray-200 w-full"></div>
            </div>
            <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 md:p-10">
              <h4 className="text-2xl md:text-3xl font-black text-secondary mb-1">Prototyping Rural Futures</h4>
              <p className="text-gray-400 text-sm font-medium mb-5">April 2 &ndash; 8, 2026 &middot; Dumo Village, Namhae, South Korea</p>
              <p className="text-gray-600 mb-5">A 7-day popup village at the intersection of <span className="text-primary font-semibold">Rural Basic Income, Global-Local Co-creation, and Deep Nature</span> &mdash; co-creating the next chapter of sustainable community life.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-500 mb-6">
                <p><span className="font-semibold text-secondary">Deep Work & Radical Focus</span> &mdash; Korea&apos;s oldest Marine National Park.</p>
                <p><span className="font-semibold text-secondary">UBI-Watching</span> &mdash; Rural UBI pilot field research.</p>
                <p><span className="font-semibold text-secondary">Co-Creation</span> &mdash; Social dining, vibecoding, nomad exchanges.</p>
                <p><span className="font-semibold text-secondary">Sovereign Village</span> &mdash; Modular homes & permaculture gardens.</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <p className="text-xs text-gray-400"><span className="font-semibold text-gray-500">Cost:</span> $200&ndash;$600 USD (a la carte) &middot; 100% non-profit &middot; Free if you bring your own stay</p>
                <div className="flex gap-3 shrink-0">
                  <a href="https://protoville.xyz" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-xs hover:bg-primary-600 transition-all hover:-translate-y-0.5">Website</a>
                  <a href="https://t.me/+J_wAuOWySLUxZDY1" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white px-6 py-2.5 rounded-full font-bold text-xs hover:opacity-90 transition-all hover:-translate-y-0.5">Telegram</a>
                </div>
              </div>
            </div>
          </div>

          {/* Elixi Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-black text-secondary tracking-tight whitespace-nowrap">Elixi.</h3>
              <div className="h-px bg-gray-200 w-full"></div>
            </div>
            <div className="space-y-6">
              {/* Side Event Advisory Desk */}
              <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 md:p-10">
                <h4 className="text-2xl md:text-3xl font-black text-secondary mb-1">Official Side Event <span className="text-primary">Advisory Desk</span></h4>
                <p className="text-gray-400 text-sm font-medium mb-5">A licensed and accredited accelerator supports your successful side event in Korea.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-500 mb-6">
                  <p><span className="font-semibold text-secondary">Venue Recommendations</span> &mdash; Best-fit by size, vibe, and positioning.</p>
                  <p><span className="font-semibold text-secondary">Budget Optimization</span> &mdash; Reality check and cost optimization.</p>
                  <p><span className="font-semibold text-secondary">Local Contracts</span> &mdash; Handle contracts so you don&apos;t get wrecked.</p>
                  <p><span className="font-semibold text-secondary">Agency Referrals</span> &mdash; Trusted production and agency connections.</p>
                </div>
                <div className="flex gap-3">
                  <a href="https://t.me/min9mark" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-xs hover:bg-primary-600 transition-all hover:-translate-y-0.5">Telegram</a>
                  <a href="mailto:min9@elixi.group" className="bg-secondary text-white px-6 py-2.5 rounded-full font-bold text-xs hover:opacity-90 transition-all hover:-translate-y-0.5">Email</a>
                </div>
              </div>

              {/* Venture Studio Group */}
              <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 md:p-10">
                <h4 className="text-2xl md:text-3xl font-black text-secondary mb-1">Venture Studio <span className="text-primary">Group</span></h4>
                <p className="text-gray-400 text-sm font-medium mb-5">Government-Licensed Korea GTM Accelerator &middot; 900+ strategies &middot; 200+ mandates</p>
                <p className="text-gray-600 mb-5">Korea is a long-term, trust-driven market. Elixi. helps you establish your Korean expansion with institutional credibility.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
                  <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <h5 className="font-bold text-secondary mb-1">Institutional Trust Engine</h5>
                    <p className="text-gray-500 text-xs">License-backed GTM transforms regulatory complexity into market access.</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <h5 className="font-bold text-secondary mb-1">Data-Driven KOL Ignition</h5>
                    <p className="text-gray-500 text-xs">Web2 & Web3 KOL ecosystems through KPI-native, measurable execution.</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-gray-100">
                    <h5 className="font-bold text-secondary mb-1">Trustworthy Offline Authority</h5>
                    <p className="text-gray-500 text-xs">VVIP, government, and university activations for brand authority.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://t.me/min9mark" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-xs hover:bg-primary-600 transition-all hover:-translate-y-0.5">Telegram</a>
                  <a href="mailto:min9@elixi.group" className="bg-secondary text-white px-6 py-2.5 rounded-full font-bold text-xs hover:opacity-90 transition-all hover:-translate-y-0.5">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="bg-secondary rounded-[3rem] p-12 md:p-20">
          <h3 className="text-3xl md:text-5xl font-black mb-6 text-white">Become a <span className="text-primary italic">Partner</span></h3>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">Join the coalition of organizations shaping the future of Web3 in Asia.</p>
          <a href="/contact#message" className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 inline-block">
            Inquiry for Partnership
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}