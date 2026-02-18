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
      
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-black mb-6">Become a Partner</h3>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">Join the coalition of organizations shaping the future of Web3 in Asia.</p>
          <a href="/contact#message" className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1 inline-block">
            Inquiry for Partnership
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}