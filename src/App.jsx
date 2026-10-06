import React from "react";
import { Navigation } from "lucide-react";
import { Petals } from "./components/Petals";
import { Butterfly } from "./components/Butterfly";
import { MusicPlayer } from "./components/MusicPlayer";
import { Envelope } from "./components/Envelope";

import { ScratchCard } from "./components/ScratchCard";

const events = [
  {
    title: "The Sangeet Night",
    desc: "A night of music, dance, laughter and cherished memories",
    date: "Fri · Nov 20, 2026",
    time: "07:00 PM onwards",
    venue: "Panorama Country Club & Resort, Asansol, West Bengal",
    image: "/images/sanget.png"
  },
  {
    title: "Haldi",
    desc: "A golden beginning to a beautiful journey",
    date: "Sat · Nov 21, 2026",
    time: "10:00 AM onwards",
    venue: "Panorama Country Club & Resort, Asansol, West Bengal",
    image: "/images/haldi.png"
  },
  {
    title: "Baarat Swagat & Varmala",
    desc: "An evening of celebration, joy \nand the beautiful union of two hearts",
    date: "Sat · Nov 21, 2026",
    time: "6:30 PM onwards",
    venue: "Panorama Country Club & Resort, Asansol, West Bengal",
    image: "/images/varmal.png"
  },
  {
    title: "Phere",
    desc: "The sacred seven vows\naround the holy fire",
    date: "Sat · Nov 21, 2026",
    time: "8:30 PM onwards",
    venue: "Panorama Country Club & Resort, Asansol, West Bengal",
    image: "/images/phere.png"
  },
  {
    title: "Reception",
    desc: "An elegant evening to celebrate our union with loved ones",
    date: "Fri · Nov 27, 2026",
    time: "07:00 PM onwards",
    venue: "Shiven Farm Banquet, Najafgarh,New Delhi",
    image: "/images/recept.jpg"
  }
];

export default function App() {
  return (
    <div className="relative">
      <Petals />
      <Butterfly />
      <MusicPlayer />

      <main className="relative">
        {/* Main Banner */}
        <section className="relative min-h-screen w-full overflow-hidden">
          <img
            // src="/images/mainbg.jpg"
            src={`${import.meta.env.BASE_URL}images/mainbg.jpg`}
            alt="Sweta and Gaurav wedding illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-white"></div>
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <div className="text-rose-deep">
              {/* <p className="font-serif-display italic text-xs mt-2">‖ Shri Moraimataya Namah ‖ &nbsp;&nbsp; ‖ Shree Ganeshaya Namah ‖</p>
              <p className="font-serif-display italic text-xs mt-2">‖ Shri Pithrji Namah ‖ &nbsp;&nbsp; ‖ Shri Mahaveeraiya Namah ‖</p> */}
              {/* <p className="font-serif-display italic text-xs mt-2">‖ Jai Jinendra ‖</p> */}
              {/* <p className="font-serif-display italic text-xs mt-2">‖ Shree Ganeshaya Namah ‖</p> */}
              
              {/* <p className="font-serif-display italic text-xs mt-2">॥ श्री गणेशाय नमः ॥</p>
              <p className="font-tiro italic text-sm mt-2">॥ श्री गणेशाय नमः ॥</p> */}
              <p className="font-yatra italic text-sm sm:text-base mt-2">॥ श्री गणेशाय नमः ॥</p>
            </div>
            <p className="mt-8 max-w-md font-serif-display text-base sm:text-lg text-rose-deep">
              By the grace of god and the blessings of our elders,
            </p>
            {/* <p className="font-serif-display text-base sm:text-lg text-foreground/80 font-bold">
              Smt. Jaimala &amp; Harishchand Makana
            </p> */}
            <p className="max-w-md font-serif-display text-base sm:text-lg text-rose-deep">
              we cordially invite you to grace the auspicious occasion of <br />the wedding celebration of
            </p>
            <h1 className="mt-6">
              <span className="block font-script text-5xl sm:text-8xl md:text-9xl text-rose leading-none">Sweta</span>
            </h1>
            {/* Late Sh. Sarbeshwar Upadhaya &amp; Smt. Uttara Upadhaya */}
            <p className="mt-3 font-serif-display text-sm sm:text-lg text-foreground/80">
              G/D of Late Shri. Sarbeshwar Upadhaya &amp; Smt. Uttara Upadhaya <br />
              D/O Shri. Rabin Upadhaya &amp; Smt. Minakshi Upadhaya <br />
            </p>
            <p className="mt-5 font-script text-3xl sm:text-4xl text-rose-deep italic">with</p>
            <h1 className="mt-3">
              <span className="block font-script text-5xl sm:text-8xl md:text-9xl text-rose leading-none">Gaurav</span>
            </h1>
            <p className="mt-8 font-serif-display text-sm sm:text-lg text-foreground/80 pb-12">
              G/S of Late Shri. Suraj Mal Sharma  &amp; Late Smt. Kalawati Devi <br />
              S/O Shri. Narender Kr. Sharma &amp; Smt. Savita Sharma <br />
            </p>
          </div>
        </section>

        {/* Save The Date */}
        <section className="relative py-20 px-6 bg-cream">
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="my-6 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-gold-soft"></span>
              <span className="text-gold text-lg">❀</span>
              <span className="h-px w-16 bg-gold-soft"></span>
            </div>
            {/* <div className="mb-10">
              <div className="relative mx-auto w-full max-w-md h-32 rounded-2xl overflow-hidden border-2 border-gold-soft shadow-elegant flex flex-col items-center justify-center bg-cream">
                <p className="font-cinzel tracking-[0.35em] text-sage-deep text-base">SAVE THE DATE</p>
                <p className="font-script text-4xl text-rose-deep mt-1">20th &amp; 21th Nov 2026</p>
              </div>
            </div> */}
            <div className="mb-10">
              <ScratchCard />

              {/* <p className="mt-4 text-sm text-rose-deep/70 italic">
                ✨ Scratch to reveal our wedding date ✨
              </p> */}
            </div>
          </div>
        </section>
        

        {/* Schedule */}
        <section className="relative py-20 px-6 bg-sage-soft">
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-script text-5xl sm:text-6xl text-rose-deep">Events Schedule</h2>
              <div className="my-6 flex items-center justify-center gap-3">
                <span className="h-px w-16 bg-gold-soft"></span>
                <span className="text-gold text-lg">❀</span>
                <span className="h-px w-16 bg-gold-soft"></span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <article key={index} className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 border border-gold-soft">
                  <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative p-6 sm:p-8 text-center text-slate-50 flex flex-col justify-center">
                    <h3 className="font-script text-5xl text-cream">{event.title}</h3>
                    <p className="mt-2 italic text-base text-cream/80 whitespace-pre-line">{event.desc}</p>
                    <div className="my-5 flex items-center gap-3 justify-center">
                      <span className="h-px w-10 bg-gold-soft/60"></span>
                      <span className="text-gold">❀</span>
                      <span className="h-px w-10 bg-gold-soft/60"></span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="font-cinzel text-sm text-gold-soft">Date</div>
                        <div className="font-serif-display text-xl mt-1 text-cream">{event.date}</div>
                      </div>
                      <div>
                        <div className="font-cinzel text-sm text-gold-soft">Time</div>
                        <div className="font-serif-display text-xl mt-1 text-cream">{event.time}</div>
                      </div>
                      <div>
                        <div className="font-cinzel text-sm text-gold-soft">Venue</div>
                        <div className="font-serif-display text-lg mt-1 text-cream">{event.venue}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Hosts */}
        <section className="relative py-20 px-6 bg-sage-soft">
          <div className="relative max-w-5xl mx-auto text-center">
            <p className="font-cinzel text-xs text-sage-deep tracking-widest">WITH LOVE</p>
            <h2 className="font-script text-4xl sm:text-4xl text-rose-deep mt-2">The Families</h2>
            <div className="my-6 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-gold-soft"></span>
              <span className="text-gold text-lg">❀</span>
              <span className="h-px w-16 bg-gold-soft"></span>
            </div>
            <p className="font-serif-display italic text-lg text-foreground/80 max-w-2xl mx-auto">Eagerly waiting for your presence,</p>
            <div className="mt-8">
              <div className="bg-cream/80 backdrop-blur-sm border border-gold-soft rounded-2xl p-8 shadow-soft">
                <p className="font-cinzel text-3xl text-sage-deep tracking-widest">Upadhaya and Haritas Family</p>
                <div className="my-4 flex items-center justify-center gap-2">
                  <span className="h-px w-8 bg-gold-soft"></span>
                  <span className="text-gold">❀</span>
                  <span className="h-px w-8 bg-gold-soft"></span>
                </div>
                <p className="font-serif-display text-xl text-foreground my-1">Your presence, your blessings, and your love
will make our celebration even more special</p>
                {/* <p className="font-serif-display text-xl text-foreground my-1"> &amp; Family</p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Map Location */}
        {/* <section className="relative py-20 px-6 bg-cream">
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="font-cinzel text-xs text-sage-deep tracking-widest">VENUE</p>
            <h2 className="font-script text-4xl sm:text-4xl text-rose-deep mt-2">Where We Celebrate</h2>
            <div className="my-6 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-gold-soft"></span>
              <span className="text-gold text-lg">❀</span>
              <span className="h-px w-16 bg-gold-soft"></span>
            </div>
            <p className="font-serif-display text-lg sm:text-xl text-foreground/80 max-w-xl mx-auto">Panorama Country Club & Resort</p>
            <a href="https://maps.app.goo.gl/dV9G1e6DcB2qyRJf6" target="_blank" rel="noreferrer" className="inline-block mt-8">
              <button className="inline-flex items-center justify-center gap-2 text-sm font-medium gradient-gold text-white rounded-full px-8 py-3 shadow-gold hover:opacity-90">
                <Navigation className="mr-2 h-4 w-4" /> Get Directions
              </button>
            </a>
          </div>
        </section> */}

        {/* Map Location */}
        <section className="relative py-20 px-6 bg-cream">
          <div className="relative max-w-6xl mx-auto text-center">

            <p className="font-cinzel text-xs text-sage-deep tracking-widest">
              VENUE
            </p>

            <h2 className="font-script text-4xl sm:text-4xl text-rose-deep mt-2">
              Where We Celebrate
            </h2>

            <div className="my-6 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-gold-soft"></span>
              <span className="text-gold text-lg">❀</span>
              <span className="h-px w-16 bg-gold-soft"></span>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <article>
                <h3 className="font-serif-display text-lg sm:text-xl text-foreground/80">
                  Panorama Country Club &amp; Resort, Asansol, West Bengal (Wedding)
                </h3>
                <div className="mt-4 overflow-hidden rounded-2xl border border-gold-soft shadow-elegant">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4717.016168353079!2d86.8788448!3d23.751534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6dfc1139ab281%3A0xa7608f76588b0acf!2sPanorama%20Country%20Club%20%26%20Resort.!5e1!3m2!1sen!2sin!4v1788436709867!5m2!1sen!2sin"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Panorama Country Club & Resort Location"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=23.751534%2C86.8788448&travelmode=driving&dir_action=navigate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-5 text-sm font-medium gradient-gold text-white rounded-full px-8 py-3 shadow-gold hover:opacity-90"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </article>

              <article>
                <h3 className="font-serif-display text-lg sm:text-xl text-foreground/80">
                  Shiven Farm Banquet, Najafgarh, New Delhi (Reception)
                </h3>
                {/* <p className="font-serif-display text-sm text-foreground/70 mt-1">
                  Najafgarh, New Delhi
                </p> */}
                <div className="mt-4 overflow-hidden rounded-2xl border border-gold-soft shadow-elegant">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1131.3355604615736!2d76.99592442907883!3d28.5850504634976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d110005c567e9%3A0xccbbf86b6fdeb3f7!2sShiven%20Farms!5e1!3m2!1sen!2sin!4v1788435531706!5m2!1sen!2sin"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Shiven Farms Location"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=28.5852589%2C76.9955258&travelmode=driving&dir_action=navigate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-5 text-sm font-medium gradient-gold text-white rounded-full px-8 py-3 shadow-gold hover:opacity-90"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </article>
            </div>

          </div>
        </section>


        {/* Footer */}
        <footer className="bg-foreground text-cream py-16 px-6 text-center">
          <p className="font-cinzel text-xs tracking-[0.4em] text-gold-soft">WITH LOVE</p>
          <h3 className="font-script text-5xl sm:text-6xl text-cream mt-3">Sweta &amp; Gaurav</h3>
          <div className="my-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-soft/40"></span>
            <span className="text-2xl">💐</span>
            <span className="h-px w-12 bg-gold-soft/40"></span>
          </div>
          <p className="font-serif-display text-lg italic">21st Nov 2026</p>
          <p className="mt-3 font-cinzel text-xs tracking-widest text-cream/70">#GauravSwetaKiShaadi</p>
        </footer>
      </main>
    </div>
  );
}