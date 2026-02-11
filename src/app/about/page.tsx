import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
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
      </div>
      <Footer />
    </main>
  );
}
