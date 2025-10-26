
export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  category: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    dribbble?: string;
  }
}

export const TeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Anubhav Jaiswal",
    role: "Android Developer",
    bio: "Anubhav is a skilled Android developer with expertise in Kotlin, Java, and Jetpack Compose. He is passionate about building user-friendly mobile applications and delivering high-quality experiences.",
    skills: ["Kotlin", "Java", "Android SDK", "Firebase", "Jetpack Compose"],
    category: "android",
    image: "/team/anubhav.jpg",
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
    image: "/team/shashank.jpeg",
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
    image: "/team/saksham.jpeg",
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
    image: "/team/rishi.jpeg",
    social: {
      github: "https://github.com/LogicKahanHai",
      linkedin: "https://www.linkedin.com/in/rishi-bhalla/"
    }
  },

  {
    id: 5,
    name: "Gaurav Nayyar",
    role: "UI/UX Designer",
    bio: "Gaurav is a creative UI/UX designer who focuses on crafting intuitive and visually appealing user interfaces. He has a strong background in design principles and user research.",
    skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Wireframing", "Prototyping"],
    category: "design",
    image: "/team/gaurav.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/nayyar-gaurav/"
    }
  },

  {
    id: 6,
    name: "Cahal Agarwalla",
    role: "Managing Director",
    bio: "Cahal is the managing director of Logic, overseeing all operations and strategic direction. With a background in software engineering, he ensures the company delivers top-notch solutions.",
    skills: ["Leadership", "Strategic Planning", "Software Engineering", "Business Development", "Team Management"],
    category: "management",
    image: "/team/cahal.jpeg",
    social: {
      github: "https://github.com/CaHHaL",
      linkedin: "https://www.linkedin.com/in/cahal-agarwalla/"
    }
  },

]

export const TeamPreviewMembers = TeamMembers.slice(0, 4);
