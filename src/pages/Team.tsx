
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GitBranch } from "lucide-react";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Anubhav Jaiswal",
    role: "Android Developer",
    bio: "Anubhav is a skilled Android developer with expertise in Kotlin, Java, and Jetpack Compose. He is passionate about building user-friendly mobile applications and delivering high-quality experiences.",
    skills: ["Kotlin", "Java", "Android SDK", "Firebase", "Jetpack Compose"],
    category: "android",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFI5u3AFMDjgw/profile-displayphoto-shrink_800_800/B56ZPy_BrtH0Ak-/0/1734948429837?e=1752710400&v=beta&t=Vk-7ii0n6eID-hYx-b8EsLrdQ7tV0UTC5GfayppdI9g",
    social: {
      github: "https://github.com/anubhavxdev",
      linkedin: "https://www.linkedin.com/in/anubhavxdev/",
      twitter: "https://x.com/Anubhavjai68749",
    }
  },
  {
    id: 2,
    name: "Shashank Pandey",
    role: "Backend Developer",
    bio: "Shashank is a backend developer with a strong focus on building scalable and efficient server-side applications. He is proficient in Node.js and Flask.",
    skills: ["Node.js", "Flask", "Express", "MongoDB", "PostgreSQL"],
    category: "web",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFEUIQTguyYGA/profile-displayphoto-shrink_800_800/B56ZUjYME1HsAc-/0/1740055299343?e=1752710400&v=beta&t=Rt6zWMRSH1acs0RBn9UG4FHsz8YEod2mw_gkpkZylts",
    social: {
      github: "https://github.com/shashankpandey04",
      linkedin: "https://www.linkedin.com/in/shashankpandey04/",
    }
  },
  {
    id: 3,
    name: "Saksham Jaiswal",
    role: "Frontend Developer",
    bio: "Saksham is a frontend developer with a keen eye for design and user experience. He specializes in React and has a passion for creating interactive web applications.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"],
    category: "web",
    image: "https://avatars.githubusercontent.com/u/176170295?v=4",
    social: {
      github: "https://github.com/Saksham-Jaiswal-2004",
      linkedin: "https://www.linkedin.com/in/saksham-jaiswal-220637302/"
    }
  },
  {
    id: 4,
    name: "Rishi Bhalla",
    role: "iOS Developer",
    bio: "Rishi is an iOS developer with a passion for creating seamless mobile experiences. He is skilled in Swift and SwiftUI, and enjoys working on innovative applications.",
    skills: ["Swift", "SwiftUI", "UIKit", "CoreData", "XCode"],
    category: "ios",
    image: "https://avatars.githubusercontent.com/u/90065566?v=4",
    social: {
      github: "https://github.com/LogicKahanHai",
      linkedin: "https://www.linkedin.com/in/rishi-bhalla/"
    }
  },
  // {
  //   id: 5,
  //   name: "Arjun Singh",
  //   role: "Backend Developer",
  //   bio: "Arjun is a backend developer with expertise in building scalable APIs and managing databases. He ensures the backend systems are efficient and secure.",
  //   skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker"],
  //   category: "web",
  //   image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop&q=80",
  //   social: {
  //     github: "#",
  //     linkedin: "#"
  //   }
  // },
  {
    id: 6,
    name: "Vedant Gaidhanne",
    role: "Project Manager",
    bio: "Vedant is a project manager with a strong background in Agile methodologies. He excels at coordinating teams and ensuring projects are delivered on time and within scope.",
    skills: ["Agile", "Scrum", "Team Management", "Client Communication", "Risk Management"],
    category: "management",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFg23agDGqOSQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714443215504?e=1752710400&v=beta&t=DzkBRG-1clioctzOrCYoiT7UrUU8a1wA_KMC9dUbWKY",
    social: {
      linkedin: "https://www.linkedin.com/in/vedantgaidhane/"
    }
  }
];

const Team = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredMembers = filter === "all" 
    ? teamMembers 
    : teamMembers.filter(member => member.category === filter);
  
  return (
    <div className="min-h-screen bg-logic-dark text-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="pt-32 pb-20 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-gradient animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-gradient animate-pulse-glow" style={{ animationDelay: "1s" }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
              <p className="text-xl text-logic-gray-light">
                Our talented team of developers and designers are passionate about creating exceptional digital experiences 
                that transform ideas into reality.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Members */}
        <div className="py-16 bg-logic-dark-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" onValueChange={setFilter} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-logic-dark/50">
                  <TabsTrigger value="all" className="data-[state=active]:bg-logic-blue/20 data-[state=active]:text-logic-blue">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="web" className="data-[state=active]:bg-logic-blue/20 data-[state=active]:text-logic-blue">
                    Web
                  </TabsTrigger>
                  <TabsTrigger value="android" className="data-[state=active]:bg-logic-green/20 data-[state=active]:text-logic-green">
                    Android
                  </TabsTrigger>
                  <TabsTrigger value="ios" className="data-[state=active]:bg-logic-purple/20 data-[state=active]:text-logic-purple">
                    iOS
                  </TabsTrigger>
                  <TabsTrigger value="design" className="data-[state=active]:bg-logic-pink/20 data-[state=active]:text-logic-pink">
                    Design
                  </TabsTrigger>
                  <TabsTrigger value="management" className="data-[state=active]:bg-logic-orange/20 data-[state=active]:text-logic-orange">
                    Management
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value={filter} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredMembers.map((member) => (
                    <div 
                      key={member.id} 
                      className="bg-logic-dark border border-white/10 rounded-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300 hover:shadow-lg hover:shadow-logic-blue/10"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                          member.category === "web" ? "bg-logic-blue/20 text-logic-blue" :
                          member.category === "android" ? "bg-logic-green/20 text-logic-green" :
                          member.category === "ios" ? "bg-logic-purple/20 text-logic-purple" :
                          member.category === "design" ? "bg-logic-pink/20 text-logic-pink" :
                          "bg-logic-orange/20 text-logic-orange"
                        }`}>
                          {member.category.charAt(0).toUpperCase() + member.category.slice(1)}
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-logic-gray-light mb-4">{member.role}</p>
                        
                        <p className="text-sm text-logic-gray-light mb-4 line-clamp-3">
                          {member.bio}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.skills.slice(0, 3).map((skill, index) => (
                            <span 
                              key={index} 
                              className="bg-white/5 text-xs px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                          {member.skills.length > 3 && (
                            <span className="bg-white/5 text-xs px-2 py-1 rounded">
                              +{member.skills.length - 3}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex space-x-3">
                          {member.social.github && (
                            <a href={member.social.github} className="text-logic-gray-light hover:text-logic-blue transition-colors">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
                            </a>
                          )}
                          {member.social.linkedin && (
                            <a href={member.social.linkedin} className="text-logic-gray-light hover:text-logic-blue transition-colors">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                              </svg>
                            </a>
                          )}
                          {member.social.twitter && (
                            <a href={member.social.twitter} className="text-logic-gray-light hover:text-logic-blue transition-colors">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          )}
                          {member.social.dribbble && (
                            <a href={member.social.dribbble} className="text-logic-gray-light hover:text-logic-blue transition-colors">
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Join Our Team */}
        <div className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-logic-dark-light border border-white/10 rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                  <p className="text-logic-gray-light mb-6">
                    We're always looking for talented individuals to join our growing team. 
                    If you're passionate about technology and want to work on exciting projects, 
                    we'd love to hear from you.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-logic-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Collaborative work environment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-logic-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flexible working hours</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-logic-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Professional growth opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-logic-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Work on challenging projects</span>
                    </li>
                  </ul>
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-logic-blue hover:bg-logic-blue/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    View Open Positions
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                <div className="bg-logic-blue/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Current Openings</h3>
                  <ul className="space-y-4">
                    <li className="border-b border-white/10 pb-4">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Senior React Developer</span>
                        <span className="text-logic-blue text-sm">Full-time</span>
                      </div>
                      <p className="text-sm text-logic-gray-light">Help build modern web applications with React and TypeScript.</p>
                    </li>
                    <li className="border-b border-white/10 pb-4">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Android Developer</span>
                        <span className="text-logic-green text-sm">Full-time</span>
                      </div>
                      <p className="text-sm text-logic-gray-light">Create innovative Android applications using Kotlin.</p>
                    </li>
                    <li className="border-b border-white/10 pb-4">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">UI/UX Designer</span>
                        <span className="text-logic-pink text-sm">Contract</span>
                      </div>
                      <p className="text-sm text-logic-gray-light">Design beautiful and intuitive user interfaces for web and mobile.</p>
                    </li>
                    <li>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">DevOps Engineer</span>
                        <span className="text-logic-purple text-sm">Full-time</span>
                      </div>
                      <p className="text-sm text-logic-gray-light">Manage and improve our cloud infrastructure and CI/CD pipelines.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
