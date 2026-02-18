import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const members = [
  { name: 'Erica', org: 'KryptoPlanet', role: 'CEO', image: '/members/erica.png' },
  { name: 'Agwn', org: 'Ludium', role: 'CEO', image: '/members/agwn.png' },
  { name: 'Tae Oh', org: 'ARK Point', role: 'CEO', image: '/members/taeoh.png' },
  { name: 'Jay', org: 'Catalyze', role: 'CEO & Co-founder', image: '/members/jay.png' },
  { name: 'Jason', org: 'DeSpread', role: 'CEO', image: '/members/jason.png' },
  { name: 'Scott', org: 'Superteam / Solana Foundation', role: 'Head of Korea', image: '/members/scott.png' },
  { name: 'Ji Yun', org: 'DSRV', role: 'CEO' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-10">About <span className="text-primary">KBW 2026</span></h1>
        <div className="prose prose-xl max-w-none text-gray-600 space-y-8">
          <p className="text-2xl font-medium text-black">
            Korea Buidl Week is a distributed, multi-host, builder-centric festival.
          </p>
          <p>
            It is not a single event—it is a co-created ecosystem-level experience featuring technical conferences, retail events, hackathons, startup competitions, and cultural activations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-black">Korea, Crypto & Talent Stronghold</h3>
              <p>Korea combines deep crypto liquidity with a massive user base and a mature exchange infrastructure. Backed by world-class engineering culture and strong university pipelines, it has become a dense talent hub where builders consistently form teams and ship real products.</p>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-black">Global Builder Gateway to APAC</h3>
              <p>Korea Buidl Week turns Seoul into APAC&apos;s builder gateway by concentrating flagship conferences, builder residencies, startup competitions, and showcases into one focused week.</p>
            </div>
          </div>
        </div>

        {/* Meet the Alliance */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Meet the <span className="text-primary italic">Alliance</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
              A coalition of Korea&apos;s leading Web3 organizations providing governance, ecosystem curation, and strategic direction.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                <div className="aspect-square bg-slate-100 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    <span className="text-slate-400 text-4xl md:text-5xl font-bold">{member.name[0]}</span>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h4 className="text-lg font-bold mb-1 text-secondary">{member.name}</h4>
                  <p className="text-primary text-sm font-bold mb-1">{member.org}</p>
                  <p className="text-gray-400 text-xs font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
