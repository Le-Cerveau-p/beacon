import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState } from "react";
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
    name: "Philip Daniel Yatai",
    title: "Chairperson, Board of Trustees",
    image: "/team/Philip-Daniel.jpg",
    citation:
      "Senior journalist and development communication specialist leading media advocacy for social protection and child rights as Board Chair of the Beacon Center",
    fullCitation:
      "Philip Daniel Yatai leads the Board of Trustees of the Beacon of Transformative and Inclusive Development Center. Since 2012 he has served with the News Agency of Nigeria (NAN), where he is Control Editor (Metro), Website Controller and FCT Correspondent. Philip’s public interest journalism and partnerships with organisations such as UNICEF, UNFPA and Save the Children have helped drive visibility and accountability for critical social programmes—from the Kaduna Emergency Nutrition Action Plan and WASH initiatives to the domestication of the Child Rights Act, budget tracking and social protection reforms. He was Citizens’ Co Chair of the OGP Technical Working Group on Social Protection (2021–2023) and Chairman of Save the Children’s State Media Working Group in Kaduna (2021–2024). Philip holds a Master’s in Development Communication (Kaduna State University, 2023) and a B.A. in History (Ahmadu Bello University, 2006) and has additional training in data and infographics journalism. He works between Abuja and Kaduna.",
  },
  {
    name: "Abigail Kikelomo Olatunde",
    title: "Secretary",
    image: "/team/Abigail-Kikelomo.jpg",
    citation:
      "Beacon Center Executive Director and inclusive education advocate combining program management, research, and Sign Language proficiency to empower the deaf-blind community.",
    fullCitation:
      "Abigail Kikelomo Olatunde serves on the Board of Trustees as Trustees’ Secretary and leads the Center as Executive Director. As Executive Director, she delivers board approved strategy, oversees programmes and budgets, ensures safeguarding and AML/SCUML & NDPR compliance, manages partnerships and fundraising, and reports performance and risk to the Board. She is pursuing an M.Sc. at Federal University, Lafia in Sign Language Communication & Interpretation (Special Needs Education); her research—“The Influence of Inclusive Practices on Attainment of Educational Needs of Learners with Deaf Blindness in Kaduna State”—concludes 2026. Abigail’s experience spans inclusive education programme design, project delivery support and M&E, disability rights advocacy and community mobilisation. At Hope for Communities and Children Initiative (2019–2022), she provided project support across education and child protection programmes (advocacy coordination, documentation and M&E). At LionHeart Ability Leaders International Foundation (2022–date), she advances advocacy and research for persons with disabilities. Earlier roles in teaching and school counselling sharpened her learner support approach. She is active in JCI, including Director of Program (2018–2019) and Director of Welfare/Logistics (2019–2020). Abigail holds an M.Ed. (Educational Psychology) and a B.Ed. (Guidance & Counselling with Economics) from the University of Ibadan and is proficient in Nigeria Sign Language.",
  },
  {
    name: "Istifanus Akau",
    title: "Advisor",
    image: "/team/Istifanus-Akau.jpg",
    citation:
      "Senior Advisor and Policy Specialist specializing in FCDO-funded programs and the strategic strengthening of government systems and citizen-led advocacy.",
    fullCitation:
      "Istifanus Akau advises the Beacon on governance, accountability and results measurement. With over 13 years’ experience on FCDO funded public sector accountability and governance programmes in Nigeria, he helps strengthen government systems, processes and mechanisms in critical sectors, including health, education and climate change. His work spans policy analysis, programme design and evaluation (M&E/MEAL), logframes and indicator development, results reviews, and capacity building for MDAs, legislatures and civil society partners. He also supports social accountability approaches that amplify citizen voice in policy, plans and budget processes through participatory budgeting and performance monitoring. Alt text (headshot): Headshot of Istifanus Akau, Advisor at the Beacon of Transformative and Inclusive Development Center.",
  },
  {
    name: "Tolu Adeniyi",
    title: "Trustee",
    image: "/team/Tolu-Adeniyi.jpg",
    citation:
      "A seasoned corporate account manager and consultant with two decades of experience spanning the telecom industry and entrepreneurial ventures in Nigeria and Canada.",
    fullCitation:
      "Tolu Adeniyi serves on the Board of Trustees of the Beacon of Transformative and Inclusive Development Center, bringing more than two decades of experience across telecommunications and consulting. As a Corporate Account Manager at jump.ca, she supports enterprise customers, drawing on strengths in corporate sales and distribution, business analysis, strategy and planning, project management, marketing and IT service management. Tolu has lived and worked across Nigeria—including Lagos, Port Harcourt, Bayelsa and Ibadan—where she founded and ran Frollicles Natural Hair Studio for seven years, pioneering natural hair care in the city. She is a committed member of Junior Chamber International, a former pioneer President of JCI Ibadan Elite, and a JCI Senator (2019). Tolu holds a B.Sc. in Computer Science from the University of Lagos and an MBA from Edinburgh Business School, Heriot Watt University.",
  },
  {
    name: "Christiana Omolara Tudonu",
    title: "Trustee",
    image: "/team/Christiana-Omolara.jpg",
    citation:
      "A seasoned Branch Service Manager and Trustee specializing in corporate governance, AML/CFT, and the strategic management of banking operations.",
    fullCitation:
      "Christiana Omolara Tudonu serves on the Board of Trustees of the Beacon of Transformative and Inclusive Development Center. In her professional career, she is a Branch Service Manager at Wema Bank PLC, responsible for branch operations, daily cash management, reconciliations and proofing of GL accounts, regulatory returns, integrity tests, and the control of teller/ATM operations to prevent fraud and uphold service quality. Since joining Wema Bank in 2010, she has held roles including Customer Service Officer, Transaction Officer (Funds Transfer), Clearing Officer, and Teller Team Lead before moving into branch operations leadership. Christiana complements experience with continuous training through the Chartered Institute of Bankers of Nigeria (CIBN) in AML/CFT, banking law & ethics, corporate governance, digital banking, information security, and customer relationship management. She earned an HND and ND in Accounting from the Federal Polytechnic, Mubi, and works across English, Yoruba and Hausa.",
  },
  {
    name: "Oluwatobi Damilola Olatunde",
    title: "Trustee",
    image: "/team/Oluwatobi-Damilola.jpg",
    citation:
      "An economist and banking professional dedicated to enhancing organizational accuracy through streamlined accounting processes and expert financial management.",
    fullCitation:
      "Oluwatobi Damilola Olatunde serves on the Board of Trustees of the Beacon of Transformative and Inclusive Development Center. She is a finance and accounting professional with over five years’ experience in banking, bringing hands on exposure to customer service and accounting operations. A 2015 Economics graduate of Bowen University, she began her career in 2017 and has continued to build breadth across bookkeeping, reconciliations, financial reporting, and corporate finance. Since 2018, she has been progressing through the Institute of Chartered Accountants of Nigeria (ICAN) professional programme, strengthening her technical foundation and professional ethics. Career highlights include excellent relationship management, streamlining accounting processes, and balancing multiple responsibilities in fast paced environments. Passionate about growth and excellence, she contributes a disciplined, controls minded perspective to the Board’s oversight of finance and organisational performance.",
  },
  {
    name: "Olufunke Olajumoke (Betty) Adegbite",
    title: "Trustee",
    image: "/team/Olufunke-Olajumoke.jpg",
    citation:
      "Beacon Center Trustee and veteran psychologist at FUNAAB dedicated to student wellbeing and professional advocacy through over 15 years of specialized guidance.",
    fullCitation:
      "Olufunke Olajumoke Betty Adegbite serves on the Board of Trustees of the Beacon of Transformative and Inclusive Development Center. In her professional role as Principal Counselling Psychologist (Student Affairs Division, FUNAAB), she provides confidential individual and group counselling, freshers’ orientation, study skills and time management clinics, therapeutic support for low CGPA students, and career guidance & fairs. Her practice emphasises early intervention, referral pathways, and collaboration with academic departments on complex cases. Olufunke’s professional development includes the Universal Treatment Curriculum (UTC 1–8) for Substance Use Disorder Professionals (2019–2020) and a Counselling Skills workshop at City, University of London (2017). She has presented at national conferences and published on counselling efficacy, psychological distress, teacher development and adolescent wellbeing. She holds an M.Ed. (Guidance & Counselling) and a B.Ed. (Guidance & Counselling/Mathematics) from the University of Ibadan, a Master of Information & Communication Technology (MICT) from FUNAAB, and an NCE from FCE Abeokuta. She is a member of CASSON, APROCON, TRCN, ANUPA and PoPAN. In 2015 she received a UN POLAC “Justice of Peace” appointment.",
  },
];

export function About() {
  const [selectedTrustee, setSelectedTrustee] = useState<
    (typeof trustees)[number] | null
  >(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0c6708] to-[#068c09] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">About Us</h1>
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
                  <button
                    type="button"
                    onClick={() => setSelectedTrustee(trustees[0])}
                    className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#0c6708] shadow-xl transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#c5ba80]/40"
                    aria-label={`Open profile for ${trustees[0].name}`}
                  >
                    <img
                      src={trustees[0].image}
                      alt={trustees[0].name}
                      className="w-full h-full object-cover"
                    />
                  </button>
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
                    <button
                      type="button"
                      onClick={() => setSelectedTrustee(trustee)}
                      className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#068c09] shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#c5ba80]/40"
                      aria-label={`Open profile for ${trustee.name}`}
                    >
                      <img
                        src={trustee.image}
                        alt={trustee.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  </div>
                  <h3 className="text-xl text-[#0c6708] mb-1">
                    {trustee.name}
                  </h3>
                  <p className="text-sm text-[#068c09] mb-3">{trustee.title}</p>
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
                    <button
                      type="button"
                      onClick={() => setSelectedTrustee(trustee)}
                      className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#c5ba80] shadow-md transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#c5ba80]/40"
                      aria-label={`Open profile for ${trustee.name}`}
                    >
                      <img
                        src={trustee.image}
                        alt={trustee.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  </div>
                  <h3 className="text-lg text-[#0c6708] mb-1">
                    {trustee.name}
                  </h3>
                  <p className="text-xs text-[#068c09] mb-2">{trustee.title}</p>
                  <p className="text-gray-600 text-xs italic leading-relaxed">
                    "{trustee.citation}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedTrustee && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
          onClick={() => setSelectedTrustee(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="trustee-modal-title"
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedTrustee(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-700 shadow hover:bg-white"
              aria-label="Close trustee profile"
            >
              <span className="block text-xl leading-none">&times;</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
              <div className="bg-[#0c6708]/5 p-6 md:p-0">
                <div className="mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-[#0c6708] shadow-xl md:my-10 md:h-56 md:w-56">
                  <img
                    src={selectedTrustee.image}
                    alt={selectedTrustee.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#068c09]">
                  Trustee Profile
                </p>
                <h3
                  id="trustee-modal-title"
                  className="text-3xl text-[#0c6708]"
                >
                  {selectedTrustee.name}
                </h3>
                <p className="mt-2 text-lg text-[#068c09]">
                  {selectedTrustee.title}
                </p>

                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                    Full Citation
                  </h4>
                  <div className="max-h-[45vh] overflow-y-auto rounded-2xl bg-gray-50 p-5">
                    <p className="text-sm leading-7 text-gray-700">
                      {selectedTrustee.fullCitation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
