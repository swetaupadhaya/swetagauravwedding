import React, { useState } from "react";
import { Mail, Heart } from "lucide-react";

export const Envelope = ({ children, recipientName = "Guest" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-sage-soft flex items-center justify-center p-4">
      {/* Background overlay when closed */}
      <div
        className={`fixed inset-0 bg-foreground/30 backdrop-blur-sm transition-opacity duration-700 z-30 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      {/* Main Container */}
      <div className="relative w-full max-w-xl flex flex-col items-center justify-center">
        {/* The Envelope Card Wrapper */}
        <div
          className={`relative w-full transition-all duration-1000 transform ${
            isOpen
              ? "scale-100 opacity-100 translate-y-0 z-0"
              : "scale-95 z-40"
          }`}
        >
          {/* Envelope Body (Visible when closed) */}
          {!isOpen && (
            <div className="relative w-full bg-cream border-2 border-gold-soft rounded-xl shadow-elegant p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[380px] z-40 transition-all">
              {/* Decorative border frame */}
              <div className="absolute inset-3 border border-dashed border-gold-soft/60 rounded-lg pointer-events-none" />

              <Mail className="h-10 w-10 text-rose mb-4 animate-bounce" />

              <span className="font-script text-3xl md:text-4xl text-rose-deep mb-2">
                You are Cordially Invited
              </span>

              <p className="font-cinzel text-sm tracking-widest uppercase text-foreground/70 my-2">
                Special Invitation For
              </p>

              <h2 className="font-serif-display text-2xl md:text-3xl font-semibold text-primary mb-6">
                {recipientName}
              </h2>

              {/* Wax Seal / Open Button */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose text-cream font-cinzel text-sm tracking-wider shadow-gold hover:bg-rose-deep hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Heart className="h-4 w-4 fill-current text-cream group-hover:scale-110 transition-transform" />
                <span>Open Invitation</span>
              </button>
            </div>
          )}

          {/* Unfolded Content Container (Revealed on Open) */}
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isOpen
                ? "opacity-100 translate-y-0 max-h-[none]"
                : "opacity-0 translate-y-12 max-h-0 overflow-hidden"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};