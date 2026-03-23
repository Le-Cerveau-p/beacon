import { HandCoins, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0c6708] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-2xl border border-white/15 bg-white/10 px-6 py-8 text-center shadow-lg backdrop-blur-sm">
          <HandCoins size={36} className="mx-auto mb-4 text-[#c5ba80]" />
          <h2 className="text-2xl sm:text-3xl mb-3">Support Our Mission</h2>
          <p className="mx-auto mb-6 max-w-2xl text-white/90">
            Your donation helps us continue our programs, expand our impact,
            and support more people in our community.
          </p>
          <a
            href="mailto:info@beacondev.org?subject=Donation%20and%20Support%20Inquiry"
            className="inline-flex items-center justify-center rounded-full bg-[#c5ba80] px-6 py-3 text-sm font-semibold text-[#0c6708] transition-colors hover:bg-white"
          >
            Donate or Support
          </a>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl mb-8">CONTACT INFORMATION</h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-start gap-3 justify-center">
              <MapPin size={24} className="flex-shrink-0 mt-1" />
              <p className="text-left">
                No 6, Ibrahim Yerima Street U/Pama Narayi Chikun, Kaduna State,
                Nigeria
              </p>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <Phone size={24} className="flex-shrink-0" />
              <a
                href="tel:+2347038001614"
                className="hover:text-[#c5ba80] transition-colors"
              >
                +234 703 800 1614
              </a>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <Mail size={24} className="flex-shrink-0" />
              <a
                href="mailto:info@beacondev.org"
                className="hover:text-[#c5ba80] transition-colors"
              >
                info@beacondev.org
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            Copyright © 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
