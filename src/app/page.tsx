import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import TrackRecord from "@/components/TrackRecord";
import Alliance from "@/components/Alliance";
import EventsOverview from "@/components/EventsOverview";
import Partners from "@/components/Partners";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Description />
      <TrackRecord />
      <Alliance />
      <EventsOverview />
      <Partners />
      <JoinUs />
      <Footer />
    </main>
  );
}