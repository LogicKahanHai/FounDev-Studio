import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Job listing data
const jobListings = [
  {
    id: 1,
    title: "Sales Executive",
    type: "Full-time",
    typeColor: "blue",
    description: "We are looking for a sales executive to generate new leads and build strong relationships with our customers. The ideal candidate will have a minimum of 1 year of experience in sales, excellent communication skills, and a proven track record of success in sales.",
    requirements: [
      "Minimum 1 year of experience in sales",
      "Excellent communication skills",
      "Proven track record of success in sales",
      "Bachelor's degree in Marketing, Business, or related field",
      "Strong negotiation and presentation skills"
    ],
    location: "Jalandhar, Punjab (Remote options available)"
  },
  {
    id: 2,
    title: "Backend Developer",
    type: "Full-time",
    typeColor: "green",
    description: "Create innovative server-side applications using Node.js, Express, and MongoDB. This is an entry-level position and we are open to recent graduates or those looking to transition into a new field. We will provide you with the training and support you need to grow as a developer.",
    requirements: [
      "Knowledge of Node.js, Express, and MongoDB",
      "Understanding of RESTful APIs",
      "Basic knowledge of Git and version control",
      "Problem-solving skills and attention to detail",
      "Willingness to learn and grow"
    ],
    location: "Jalandhar, Punjab (Remote options available)"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Contract",
    typeColor: "pink",
    description: "Design beautiful and intuitive user interfaces for web and mobile applications. You'll work closely with our development team to create visually appealing and user-friendly designs that enhance the overall user experience.",
    requirements: [
      "Proficiency in design tools like Figma, Adobe XD, or Sketch",
      "Experience creating wireframes, prototypes, and user flows",
      "Understanding of UI/UX principles and best practices",
      "Portfolio showcasing your design work",
      "Ability to collaborate with developers and stakeholders"
    ],
    location: "Jalandhar, Punjab (Remote options available)"
  },
  {
    id: 4,
    title: "DevOps Engineer",
    type: "Full-time",
    typeColor: "purple",
    description: "Manage and improve our cloud infrastructure and CI/CD pipelines. You'll be responsible for ensuring the reliability, scalability, and security of our systems while optimizing performance and costs.",
    requirements: [
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Experience with CI/CD tools (Jenkins, GitLab CI, or GitHub Actions)",
      "Understanding of infrastructure as code (Terraform, CloudFormation)",
      "Strong problem-solving and troubleshooting skills"
    ],
    location: "Jalandhar, Punjab (Remote options available)"
  }
];

const Careers = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    resume: "",
    coverLetter: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleJobSelect = (jobId: number) => {
    setSelectedJob(jobId);
    const job = jobListings.find(job => job.id === jobId);
    if (job) {
      setFormData(prev => ({
        ...prev,
        position: job.title
      }));
      
      // Scroll to application form
      setTimeout(() => {
        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    // For demo purposes, prevent the actual form submission and just show the thank you page
    e.preventDefault();
    setIsSubmitting(true);
    
    // Show toast message
    toast({
      title: "Sending application...",
      description: "Your application is being submitted.",
    });
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show success message
      toast({
        title: "Application submitted!",
        description: "FounDev Studio will review your application and get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        portfolio: "",
        resume: "",
        coverLetter: ""
      });
      setSelectedJob(null);
      
      // Navigate to thank you page
      navigate('/thank-you');
    }, 1500);
  };
  
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-logic-gray-light">
                Explore our open positions and become part of a team that's passionate about creating exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
        
        {/* Open Positions Section */}
        <div className="py-16 bg-logic-dark-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-logic-gray-light">
                We're looking for talented individuals to join our growing team. Check out our current openings below.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-logic-dark border border-white/10 rounded-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-logic-${job.typeColor}/20 text-logic-${job.typeColor}`}>
                        {job.type}
                      </span>
                    </div>
                    
                    <p className="text-logic-gray-light mb-6 line-clamp-3">
                      {job.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="space-y-1 text-sm text-logic-gray-light">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-logic-blue mr-2">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-sm text-logic-gray-light">
                            +{job.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div className="flex items-center text-sm text-logic-gray-light mb-6">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{job.location}</span>
                    </div>
                    
                    <Button
                      onClick={() => handleJobSelect(job.id)}
                      className={`w-full ${job.title === "UI/UX Designer" ? "bg-logic-pink hover:bg-logic-pink/90" : `bg-logic-${job.typeColor} hover:bg-logic-${job.typeColor}/90`} text-white`}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Application Form Section */}
        <div id="application-form" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Apply for a Position</h2>
              <p className="text-logic-gray-light">
                Fill out the form below to apply for a position at FounDev Studio. We'll review your application and get back to you soon.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-logic-dark border border-white/10 rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* FormSubmit configuration fields */}
                  <input type="hidden" name="_subject" value="New Job Application from FounDev Studio Careers" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-white/5 border-white/10 focus-visible:ring-logic-blue"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-white/5 border-white/10 focus-visible:ring-logic-blue"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="bg-white/5 border-white/10 focus-visible:ring-logic-blue"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="position">Position *</Label>
                      <Select
                        value={formData.position}
                        onValueChange={(value) => handleSelectChange("position", value)}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 focus-visible:ring-logic-blue">
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobListings.map(job => (
                            <SelectItem key={job.id} value={job.title}>{job.title}</SelectItem>
                          ))}
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="experience">Work Experience *</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Briefly describe your relevant work experience"
                      className="bg-white/5 border-white/10 focus-visible:ring-logic-blue min-h-24"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="portfolio">Portfolio/GitHub URL</Label>
                    <Input
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      placeholder="Link to your portfolio or GitHub profile"
                      className="bg-white/5 border-white/10 focus-visible:ring-logic-blue"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="resume">Resume/CV Link *</Label>
                    <Input
                      id="resume"
                      name="resume"
                      value={formData.resume}
                      onChange={handleChange}
                      placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                      className="bg-white/5 border-white/10 focus-visible:ring-logic-blue"
                      required
                    />
                    <p className="text-sm text-logic-gray-light mt-1">
                      Please provide a link to your resume hosted on Google Drive, Dropbox, or similar service
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Tell us why you're interested in this position and why you'd be a good fit"
                      className="bg-white/5 border-white/10 focus-visible:ring-logic-blue min-h-32"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="bg-logic-blue hover:bg-logic-blue/90 text-white w-full md:w-auto px-8 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Join Us Section */}
        <div className="py-16 bg-logic-dark-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Join FounDev Studio?</h2>
              <p className="text-logic-gray-light">
                We offer a collaborative and innovative environment where you can grow professionally while working on exciting projects.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-logic-dark border border-white/10 rounded-lg p-6">
                <div className="bg-logic-blue/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-logic-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-logic-gray-light">
                  We invest in our team members' professional development through training, mentorship, and challenging projects.
                </p>
              </div>
              
              <div className="bg-logic-dark border border-white/10 rounded-lg p-6">
                <div className="bg-logic-green/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-logic-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                <p className="text-logic-gray-light">
                  Work in a supportive environment where teamwork, knowledge sharing, and innovation are encouraged.
                </p>
              </div>
              
              <div className="bg-logic-dark border border-white/10 rounded-lg p-6">
                <div className="bg-logic-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-logic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-logic-gray-light">
                  We value your well-being and offer flexible working arrangements to help you maintain a healthy work-life balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
