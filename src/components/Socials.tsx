import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Socials() {
  const socials = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "#0c6708",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "#068c09",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "#c94d33",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "#c5ba80",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      color: "#ccbb88",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-[#0c6708] mb-4">
            OUR SOCIALS
          </h2>
          <p className="text-gray-600">Connect with us on social media</p>
        </div>

        <div className="flex justify-center items-center gap-6 flex-wrap">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg"
                style={{ backgroundColor: social.color }}
              >
                <Icon size={28} className="text-white" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
