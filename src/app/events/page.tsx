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
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Flagship conferences and technical hackathons across Seoul.</p>
      </div>

      <EventsOverview />
      
      <Footer />
    </main>
  );
}