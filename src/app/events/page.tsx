import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsOverview from "@/components/EventsOverview";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Page Header */}
      <div className="pt-40 pb-10 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">The <span className="text-primary italic">Schedule</span></h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Flagship conferences, technical hackathons, and 150+ side events.</p>
      </div>

      <EventsOverview />
      
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 border border-gray-100 text-center">
           <h3 className="text-3xl md:text-4xl font-black mb-6">Want to host an event?</h3>
           <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">Register your side event to be featured on our official calendar and reach 20K+ attendees during Korea Buidl Week.</p>
           <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary/20 hover:-translate-y-1">
            Register Side Event
           </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}