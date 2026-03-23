import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  GraduationCap,
  Megaphone,
  HandHeart,
  Target,
  Sprout,
  Heart,
  Handshake,
  Building2,
  Users,
  Home,
  Droplet,
} from "lucide-react";

const keyActivities = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Providing learning opportunities to empower individuals and communities, making them more self-sufficient and aware of their rights and responsibilities.",
    color: "#0c6708",
  },
  {
    icon: Megaphone,
    title: "Awareness",
    description:
      "Raising public consciousness about critical social issues like poverty, inequality, gender discrimination, and environmental sustainability, helping people make informed decisions and advocate for change.",
    color: "#068c09",
  },
  {
    icon: HandHeart,
    title: "Support Programs",
    description:
      "Offering tangible assistance, such as training, resources, or advocacy, to help marginalized communities overcome barriers to success and improve their quality of life.",
    color: "#c94d33",
  },
];

const objectives = [
  {
    icon: Target,
    title: "Economic Empowerment",
    description:
      "Implementing targeted skill development programs to create sustainable livelihoods and foster economic independence.",
  },
  {
    icon: Sprout,
    title: "Environmental Stewardship",
    description:
      "Promoting sustainable, climate-resilient agricultural practices to encourage environmental responsibility.",
  },
  {
    icon: Heart,
    title: "Psychosocial Support",
    description:
      "Delivering comprehensive support to enhance mental, emotional, and social well-being, with a focus on resilience.",
  },
  {
    icon: Handshake,
    title: "Humanitarian Services",
    description:
      "Offering crisis response and essential support during natural disasters, conflicts, and emergencies.",
  },
  {
    icon: Building2,
    title: "Capacity Building",
    description:
      "Providing technical assistance emphasizing sustainability, innovation, and community-driven development.",
  },
  {
    icon: Users,
    title: "Collaborative Partnerships",
    description:
      "Establishing alliances with local and international organizations to strengthen development initiatives.",
  },
  {
    icon: Home,
    title: "Social Harmony",
    description:
      "Promoting unity, addressing discrimination, and fostering peaceful coexistence within communities.",
  },
  {
    icon: Droplet,
    title: "Access to Essentials",
    description:
      "Ensuring equitable access to clean water, nutritious food, healthcare, and education to enhance long-term well-being.",
  },
];

const trustees = [
  {
    name: "Dr. Amina Ibrahim",
    title: "Chairperson, Board of Trustees",
    image:
      "https://images.unsplash.com/photo-1559154352-06e29e1e11aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQxMjEwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    citation:
      "Leading with vision and commitment to transformative community development.",
  },
  {
    name: "Mr. Chukwuma Okafor",
    title: "Vice Chairperson",
    image:
      "https://images.unsplash.com/photo-1668752600261-e56e7f3780b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzc0MTIxMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    citation:
      "Dedicated to sustainable economic empowerment and capacity building.",
  },
  {
    name: "Mrs. Fatima Bello",
    title: "Secretary",
    image:
      "https://images.unsplash.com/photo-1765648684630-ac9c15ac98d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwYnVzaW5lc3MlMjBwZXJzb258ZW58MXx8fHwxNzc0MTIxMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    citation:
      "Championing inclusive governance and transparent organizational practices.",
  },
  {
    name: "Dr. Emmanuel Adekunle",
    title: "Trustee",
    image:
      "https://images.unsplash.com/photo-1739300293504-234817eead52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwYWZyaWNhbnxlbnwxfHx8fDE3NzQxMjEwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    citation:
      "Expert in humanitarian response and community resilience building.",
  },
  {
    name: "Mrs. Grace Nwosu",
    title: "Trustee",
    image:
      "https://images.unsplash.com/photo-1742473716788-72ec6df8a830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuaWdlcmlhbiUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0MTIxNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    citation:
      "Passionate advocate for women's empowerment and social inclusion.",
  },
  {
    name: "Mr. Ibrahim Musa",
    title: "Trustee",
    image:
      "https://images.unsplash.com/photo-1675383094481-3e2088da943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0MTA4NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    citation:
      "Committed to environmental sustainability and climate action.",
  },
  {
    name: "Dr. Blessing Adeyemi",
    title: "Trustee",
    image:
      "https://images.unsplash.com/photo-1731093714827-ba0353e09bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0MDE3MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    citation:
      "Driving innovation in education and youth development programs.",
  },
];

export function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0c6708] to-[#068c09] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              About Us
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto">
              Beacon of Transformative and Inclusive Development Center
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            The Beacon of Transformative and Inclusive Development Center is an
            NGO dedicated to promoting equitable and inclusive development and
            empowering marginalized communities. Its mission is to foster
            transformative growth through education, awareness, and support
            programs that address critical social issues. The organization plans
            to achieve this vision. It focuses on fostering transformative
            growth by engaging in key activities:
          </p>
        </div>
      </section>

      {/* Key Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-8 text-center border-t-4"
                  style={{ borderTopColor: activity.color }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${activity.color}15` }}
                  >
                    <Icon size={32} style={{ color: activity.color }} />
                  </div>
                  <h3
                    className="text-2xl mb-3"
                    style={{ color: activity.color }}
                  >
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Aims and Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl text-[#0c6708] mb-4">
              Aims and Objectives
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The Beacon of Transformative and Inclusive Development Center is
              dedicated to empowering marginalized and underrepresented
              communities through innovative and sustainable initiatives. Key
              objectives include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0c6708]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#0c6708]" />
                  </div>
                  <h3 className="text-lg text-[#0c6708] mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl text-[#0c6708] mb-4">
              Board of Trustees
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our dedicated team of leaders committed to transformative and
              inclusive development.
            </p>
          </div>

          {/* Hierarchical Layout */}
          <div className="space-y-12">
            {/* Chairperson - Top Level */}
            <div className="flex justify-center">
              <div className="text-center max-w-xs">
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#0c6708] shadow-xl">
                    <img
                      src={trustees[0].image}
                      alt={trustees[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#0c6708] rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                </div>
                <h3 className="text-2xl text-[#0c6708] mb-1">
                  {trustees[0].name}
                </h3>
                <p className="text-sm text-[#068c09] mb-3 font-medium">
                  {trustees[0].title}
                </p>
                <p className="text-gray-600 text-sm italic leading-relaxed">
                  "{trustees[0].citation}"
                </p>
              </div>
            </div>

            {/* Vice Chairperson and Secretary - Second Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {trustees.slice(1, 3).map((trustee, index) => (
                <div key={index} className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#068c09] shadow-lg">
                      <img
                        src={trustee.image}
                        alt={trustee.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl text-[#0c6708] mb-1">
                    {trustee.name}
                  </h3>
                  <p className="text-sm text-[#068c09] mb-3">
                    {trustee.title}
                  </p>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "{trustee.citation}"
                  </p>
                </div>
              ))}
            </div>

            {/* Other Trustees - Third Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustees.slice(3).map((trustee, index) => (
                <div key={index} className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c5ba80] shadow-md">
                      <img
                        src={trustee.image}
                        alt={trustee.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg text-[#0c6708] mb-1">
                    {trustee.name}
                  </h3>
                  <p className="text-xs text-[#068c09] mb-2">
                    {trustee.title}
                  </p>
                  <p className="text-gray-600 text-xs italic leading-relaxed">
                    "{trustee.citation}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Funding and Governance */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl text-[#0c6708] mb-4">
                Sources of Income
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The Center funds its activities through member contributions,
                donations, and grants from local and international entities.
              </p>
            </div>
            <div>
              <h3 className="text-3xl text-[#0c6708] mb-4">
                Governance and Membership
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The organization is governed by elected Trustees who serve
                renewable terms and oversee operations in accordance with its
                constitution, which ensures transparency and democratic
                decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}