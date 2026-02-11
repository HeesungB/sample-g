import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BuidlHackPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="bg-primary text-white p-12 md:p-20 rounded-[3rem] mb-20 overflow-hidden relative">
           <div className="relative z-10">
            <h1 className="text-5xl md:text-8xl font-black mb-6">BuidlHack <br /> 2026</h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl text-primary-100">
              The flagship hackathon of Korea Buidl Week. Where builders come to ship.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-bold">Apr 14-18</div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full font-bold">Seoul, Korea</div>
              <div className="bg-white text-primary px-10 py-3 rounded-full font-bold">Apply Now</div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <h2 className="text-4xl font-black">BuidlHack 2026 Builder Day</h2>
            <p className="text-xl text-gray-600">
              Offline Builder Day for BuidlHack 2026 participants and sponsors to understand the stacks better, exchange ideas, and meet teams.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-sm font-bold text-gray-400 uppercase">Date</div>
                <div className="text-xl font-bold">Apr 14th, 6pm - 10pm</div>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <div className="text-sm font-bold text-gray-400 uppercase">Location</div>
                <div className="text-xl font-bold">Seoul</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl h-fit border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Organizer</h3>
            <p className="text-primary font-black text-2xl mb-2">KBWA</p>
            <p className="text-gray-500 text-sm mb-10">Korea Buidl Week Alliance</p>
            <button className="w-full bg-black text-white py-4 rounded-full font-bold">Register Interest</button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
