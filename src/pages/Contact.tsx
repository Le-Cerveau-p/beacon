import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Create mailto link with pre-filled data
    const mailtoLink = `mailto:info@beacondev.org?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open user's email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0c6708] to-[#068c09] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto">
              Get in touch with us - we're here to help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <h2 className="text-3xl text-[#0c6708] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c6708] focus:border-transparent outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c6708] focus:border-transparent outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c6708] focus:border-transparent outline-none"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0c6708] focus:border-transparent outline-none resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#068c09] hover:bg-[#0c6708] text-white py-3 px-6 rounded-lg transition-colors text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl text-[#0c6708] mb-6">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We'd love to hear from you! Whether you have questions about our
                programs, want to get involved, or need support, feel free to
                reach out to us using the contact details below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0c6708]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#0c6708]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#0c6708] mb-1">
                      Our Location
                    </h3>
                    <p className="text-gray-700">
                      No 6, Ibrahim Yerima Street U/Pama Narayi Chikun, Kaduna
                      State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#068c09]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#068c09]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#068c09] mb-1">
                      Phone Number
                    </h3>
                    <a
                      href="tel:+2347038001614"
                      className="text-gray-700 hover:text-[#068c09] transition-colors"
                    >
                      +234 703 800 1614
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c94d33]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#c94d33]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#c94d33] mb-1">
                      Email Address
                    </h3>
                    <a
                      href="mailto:info@beacondev.org"
                      className="text-gray-700 hover:text-[#c94d33] transition-colors"
                    >
                      info@beacondev.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl text-[#0c6708] mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">Monday - Friday:</span> 8:00
                    AM - 5:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Saturday:</span> 9:00 AM -
                    1:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
