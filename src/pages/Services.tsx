
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AppWindow, Smartphone, Apple } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen w-screen bg-logic-dark text-white overflow-hidden">
      <Navbar />
      
      <main className="w-full">
        {/* Hero Section */}
        <div className="pt-32 pb-20 relative w-full">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-gradient animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-gradient animate-pulse-glow" style={{ animationDelay: "1s" }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center w-full max-w-full">
            <div className="text-center w-full mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-logic-gray-light">
                We offer a comprehensive suite of digital solutions to help your business thrive in the digital landscape.
              </p>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="py-16 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Website Development */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center bg-logic-blue/20 text-logic-blue rounded-full px-4 py-1 text-sm font-medium mb-4">
                    Website Development
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6">
                    Creating Exceptional Web Experiences
                  </h2>
                  
                  <p className="text-logic-gray-light mb-8">
                    We design and develop responsive websites and web applications that not only look 
                    stunning but also perform seamlessly across all devices. Our web development services 
                    are tailored to meet the unique needs of your business, whether you need a simple 
                    landing page or a complex web application.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">Frontend Development</h3>
                      <p className="text-sm text-logic-gray-light">
                        Modern, responsive interfaces built with React, Vue, or Angular with 
                        pixel-perfect implementation of designs.
                      </p>
                    </div>
                    
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">Backend Development</h3>
                      <p className="text-sm text-logic-gray-light">
                        Robust server-side solutions using Node.js, Python, or PHP with 
                        database integration and API development.
                      </p>
                    </div>
                    
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">E-commerce Solutions</h3>
                      <p className="text-sm text-logic-gray-light">
                        Custom online stores with secure payment processing, inventory management, and 
                        order fulfillment.
                      </p>
                    </div>
                    
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">CMS Development</h3>
                      <p className="text-sm text-logic-gray-light">
                        Easy-to-use content management systems allowing you to update your 
                        website without technical expertise.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-blue rounded-full"></span>
                      <span>React</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-blue rounded-full"></span>
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-blue rounded-full"></span>
                      <span>Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-blue rounded-full"></span>
                      <span>MongoDB</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-blue rounded-full"></span>
                      <span>Tailwind CSS</span>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="rounded-lg p-1 bg-logic-blue/20">
                    <div className="aspect-video rounded-md overflow-hidden bg-logic-blue/10 flex items-center justify-center">
                    <img src="/alexacars.png" className="w-full h-full object-cover" alt="Alexa Cars" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Android App Development */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                <div className="order-1">
                  <div className="rounded-lg p-1 bg-logic-green/20">
                    <div className="aspect-video rounded-md overflow-hidden bg-logic-green/10 flex items-center justify-center">
                    <img src="/androidapp.jpg" className="w-full h-full object-cover" alt="Android App" />
                    </div>
                  </div>
                </div>
                
                <div className="order-2">
                  <div className="inline-flex items-center bg-logic-green/20 text-logic-green rounded-full px-4 py-1 text-sm font-medium mb-4">
                    Android App Development
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6">
                    Android Applications That Perform
                  </h2>
                  
                  <p className="text-logic-gray-light mb-8">
                    We build high-performance Android applications that provide a seamless user experience
                    while taking full advantage of the platform's capabilities. Our Android development team 
                    is skilled in creating both native and cross-platform solutions that meet your business needs.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">Native Android Development</h3>
                      <p className="text-sm text-logic-gray-light">
                        Full-featured applications built with Kotlin or Java that provide optimal performance 
                        and access to all device capabilities.
                      </p>
                    </div>
                    
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">Cross-Platform Solutions</h3>
                      <p className="text-sm text-logic-gray-light">
                        Cost-effective apps using React Native or Flutter that work on both Android and iOS 
                        while maintaining near-native performance.
                      </p>
                    </div>
                    
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">App Optimization</h3>
                      <p className="text-sm text-logic-gray-light">
                        Performance tuning, memory optimization, and battery-efficient development practices 
                        for smoother user experience.
                      </p>
                    </div>
                    
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">Play Store Deployment</h3>
                      <p className="text-sm text-logic-gray-light">
                        Complete assistance with Google Play Store submission, including optimization for 
                        store visibility and compliance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-green rounded-full"></span>
                      <span>Kotlin</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-green rounded-full"></span>
                      <span>Java</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-green rounded-full"></span>
                      <span>React Native</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-green rounded-full"></span>
                      <span>Flutter</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-green rounded-full"></span>
                      <span>Firebase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* iOS App Development */}
            <div>
              <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center bg-logic-purple/20 text-logic-purple rounded-full px-4 py-1 text-sm font-medium mb-4">
                    iOS App Development
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6">
                    Elegant iOS Applications
                  </h2>
                  
                  <p className="text-logic-gray-light mb-8">
                    We create sleek, intuitive iOS applications that adhere to Apple's strict design guidelines
                    while providing exceptional functionality and performance. Our iOS development team specializes
                    in building apps that users love to use.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">Native iOS Development</h3>
                      <p className="text-sm text-logic-gray-light">
                        Beautiful applications built with Swift and SwiftUI that take full advantage
                        of iOS capabilities and provide excellent performance.
                      </p>
                    </div>
                    
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">Cross-Platform Solutions</h3>
                      <p className="text-sm text-logic-gray-light">
                        Cost-effective development using React Native or Flutter for applications
                        that need to work on both iOS and Android platforms.
                      </p>
                    </div>
                    
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">Advanced iOS Features</h3>
                      <p className="text-sm text-logic-gray-light">
                        Integration of Face ID, ARKit, CoreML, and other advanced iOS technologies
                        to create cutting-edge applications.
                      </p>
                    </div>
                    
                    <div className="bg-logic-dark-light border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">App Store Deployment</h3>
                      <p className="text-sm text-logic-gray-light">
                        Full support with App Store submission process, including optimization for 
                        store visibility and compliance with Apple guidelines.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-purple rounded-full"></span>
                      <span>Swift</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-purple rounded-full"></span>
                      <span>SwiftUI</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-purple rounded-full"></span>
                      <span>UIKit</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-purple rounded-full"></span>
                      <span>Core Data</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block w-2 h-2 bg-logic-purple rounded-full"></span>
                      <span>CloudKit</span>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="rounded-lg p-1 bg-logic-purple/20">
                    <div className="aspect-video rounded-md overflow-hidden bg-logic-purple/10 flex items-center justify-center">
                    <img src="/iosapp.png" className="w-full h-full object-cover" alt="iOS App" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Development Process */}
        <div className="py-24 bg-logic-dark-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
              <div className="h-1 w-20 bg-logic-blue mx-auto mb-6"></div>
              <p className="text-xl text-logic-gray-light">
                We follow a structured approach to ensure your project is delivered on time, within budget,
                and exceeds your expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-logic-dark border border-white/10 p-8 rounded-lg relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-logic-blue flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Discovery</h3>
                <p className="text-logic-gray-light mb-4">
                  We start by understanding your business goals, target audience, and project requirements
                  to develop a comprehensive plan for your project.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-logic-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Requirement gathering</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-logic-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Market research</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-logic-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Project scoping</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-logic-dark border border-white/10 p-8 rounded-lg relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-logic-green flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Design & Development</h3>
                <p className="text-logic-gray-light mb-4">
                  Our designers create intuitive user interfaces while our developers build robust,
                  scalable applications using the latest technologies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-logic-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">UI/UX design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-logic-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Agile development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-logic-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Regular progress updates</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-logic-dark border border-white/10 p-8 rounded-lg relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-logic-purple flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Testing & Launch</h3>
                <p className="text-logic-gray-light mb-4">
                  We rigorously test your application to ensure it's bug-free and performs optimally
                  before launching it to your users.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-logic-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Quality assurance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-logic-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Performance optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-logic-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Deployment & support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-logic-dark-light to-logic-dark border border-white/10 rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-logic-gray-light mb-8">
                  Whether you need a new website, mobile application, or a complete digital strategy, 
                  we're here to help you succeed in the digital landscape.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      className="bg-logic-blue hover:bg-logic-blue/90 text-white px-8 py-6 text-lg"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-white border-white/20 hover:bg-white/5 px-8 py-6 text-lg"
                  >
                    View Our Portfolio
                  </Button>
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

export default Services;
