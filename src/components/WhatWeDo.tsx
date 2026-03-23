import {
  Users,
  Sprout,
  Heart,
  Handshake,
  Building2,
  Link2,
  Home,
  Droplet,
  Scale,
} from "lucide-react";

const objectives = [
  {
    icon: Users,
    title: "Empowerment & Livelihoods",
    description:
      "We build economic independence through skills development. We provide individuals—especially youth, women, and persons with disabilities—with market-relevant training, entrepreneurial support, and tools for sustainable income generation.",
    color: "#0c6708",
  },
  {
    icon: Sprout,
    title: "Environmental Sustainability",
    description:
      "We promote climate-smart agriculture and ecological resilience. Our work supports environmentally sound farming practices, natural resource protection, and green innovations that strengthen food systems and community resilience.",
    color: "#068c09",
  },
  {
    icon: Heart,
    title: "Psychosocial Well-being",
    description:
      "We strengthen emotional health and social recovery. Through trauma-informed programs, counseling, and peer support, we help individuals and communities heal, cope, and grow after adversity.",
    color: "#c94d33",
  },
  {
    icon: Handshake,
    title: "Humanitarian Response",
    description:
      "We provide timely support in emergencies. In times of disaster, displacement, or conflict, we deliver essential relief and protection services—helping communities rebuild with dignity.",
    color: "#c5ba80",
  },
  {
    icon: Building2,
    title: "Local Capacity Building",
    description:
      "We support communities to lead their own development. We invest in grassroots leaders, institutions, and innovations to build skills, enhance governance, and scale locally owned solutions.",
    color: "#0c6708",
  },
  {
    icon: Link2,
    title: "Strategic Partnerships",
    description:
      "We collaborate for deeper impact. Through alliances with government, civil society, academia, and international partners, we align resources and expertise to solve complex challenges.",
    color: "#068c09",
  },
  {
    icon: Home,
    title: "Social Harmony & Inclusion",
    description:
      "We foster unity and diversity in action. We run initiatives that promote peaceful coexistence, tackle discrimination, and celebrate differences as a strength for community development.",
    color: "#ccbb88",
  },
  {
    icon: Droplet,
    title: "Access to Basic Necessities",
    description:
      "We ensure no one is left behind. We work to guarantee access to clean water, nutritious food, quality healthcare, and inclusive education—fundamentals for human dignity and development.",
    color: "#c94d33",
  },
  {
    icon: Scale,
    title: "Civic Accountability & Inclusive Governance",
    description:
      "We empower communities to engage in transparent development. Through participatory learning, civic dialogue, and inclusive planning processes, we promote public accountability, ethical leadership, and citizen voice in shaping systems that serve all.",
    color: "#0c6708",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-[#0c6708] mb-4">
            WHAT WE DO
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At The BEACON OF TRANSFORMATIVE AND INCLUSIVE DEVELOPMENT CENTER, we
            are committed to transforming lives and building inclusive,
            resilient communities. Our work is guided by nine strategic
            objectives—each designed to address systemic inequality, promote
            dignity, and drive sustainable development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-t-4"
                style={{ borderTopColor: objective.color }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${objective.color}15` }}
                >
                  <Icon size={28} style={{ color: objective.color }} />
                </div>
                <h3
                  className="text-xl mb-3"
                  style={{ color: objective.color }}
                >
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
