import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-10">Contact <span className="text-primary">Us</span></h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-2xl text-gray-600 mb-12">
              Have questions or want to get involved? Reach out to the KBWA team.
            </p>
            
            <div className="space-y-8">
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">Secretary</div>
                <div className="text-2xl font-bold">Agwn</div>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">Email</div>
                <div className="text-2xl font-bold text-primary">agwn@formulalabs.xyz</div>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">Telegram</div>
                <div className="text-2xl font-bold">@ludium_agwn</div>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase mb-2">Location</div>
                <div className="text-2xl font-bold">Seoul, Korea</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
            <h3 className="text-3xl font-black mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="bg-white border border-gray-200 p-4 rounded-2xl w-full" />
                <input type="text" placeholder="Last Name" className="bg-white border border-gray-200 p-4 rounded-2xl w-full" />
              </div>
              <input type="email" placeholder="Email Address" className="bg-white border border-gray-200 p-4 rounded-2xl w-full" />
              <select className="bg-white border border-gray-200 p-4 rounded-2xl w-full">
                <option>Interested in Sponsorship</option>
                <option>Interested in Hosting Event</option>
                <option>General Inquiry</option>
              </select>
              <textarea placeholder="Message" rows={5} className="bg-white border border-gray-200 p-4 rounded-2xl w-full"></textarea>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-primary-600 transition-colors">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
