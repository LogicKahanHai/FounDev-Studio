
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppWindow, Smartphone, Apple, ChevronRight } from "lucide-react";

const services = [
  {
    id: "websites",
    title: "Website Development",
    icon: <AppWindow className="h-10 w-10 text-logic-blue mb-4" />,
    description:
      "We create responsive, high-performance websites that look stunning on any device. From simple landing pages to complex web applications, we have the expertise to bring your vision to life.",
    features: [
      "Responsive design for all devices",
      "SEO optimization",
      "Custom CMS integration",
      "E-commerce functionality",
      "Performance optimization",
      "API integrations"
    ]
  },
  {
    id: "android",
    title: "Android App Development",
    icon: <Smartphone className="h-10 w-10 text-logic-green mb-4" />,
    description:
      "Our Android development team creates native and cross-platform applications that provide seamless user experiences while leveraging the full capability of Android devices.",
    features: [
      "Native Android development",
      "Cross-platform solutions",
      "Material Design implementation",
      "API integration",
      "Google Play Store deployment",
      "Performance optimization"
    ]
  },
  {
    id: "ios",
    title: "iOS App Development",
    icon: <Apple className="h-10 w-10 text-logic-purple mb-4" />,
    description:
      "We develop elegant and intuitive iOS applications that conform to Apple's strict design guidelines while providing exceptional functionality and performance.",
    features: [
      "Native Swift development",
      "Cross-platform solutions",
      "Human Interface Guidelines",
      "API integration",
      "App Store deployment",
      "Performance optimization"
    ]
  }
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("websites");

  return (
    <div className="py-24 bg-logic-dark-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-logic-blue mx-auto mb-6"></div>
          <p className="text-xl text-logic-gray-light">
            We offer comprehensive development services to help you build and grow your digital presence.
          </p>
        </div>

        <Tabs 
          defaultValue="websites" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger 
              value="websites"
              className="data-[state=active]:bg-logic-blue/10 data-[state=active]:text-logic-blue"
            >
              Website
            </TabsTrigger>
            <TabsTrigger 
              value="android"
              className="data-[state=active]:bg-logic-green/10 data-[state=active]:text-logic-green"
            >
              Android
            </TabsTrigger>
            <TabsTrigger 
              value="ios"
              className="data-[state=active]:bg-logic-purple/10 data-[state=active]:text-logic-purple"
            >
              iOS
            </TabsTrigger>
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="focus-visible:outline-none focus-visible:ring-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div>{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-logic-gray-light mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg 
                          className={`h-6 w-6 mr-2 flex-shrink-0 ${
                            service.id === "websites" ? "text-logic-blue" : 
                            service.id === "android" ? "text-logic-green" : "text-logic-purple"
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`group ${
                      service.id === "websites" ? "bg-logic-blue hover:bg-logic-blue/90" : 
                      service.id === "android" ? "bg-logic-green hover:bg-logic-green/90" : 
                      "bg-logic-purple hover:bg-logic-purple/90"
                    } text-white`}
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="order-1 md:order-2">
                  <div 
                    className={`rounded-lg p-1 ${
                      service.id === "websites" ? "bg-logic-blue/20" : 
                      service.id === "android" ? "bg-logic-green/20" : 
                      "bg-logic-purple/20"
                    }`}
                  >
                    <div className={`aspect-video rounded-md overflow-hidden ${
                      service.id === "websites" ? "bg-logic-blue/10" : 
                      service.id === "android" ? "bg-logic-green/10" : 
                      "bg-logic-purple/10"
                    }`}>
                      <div className="flex items-center justify-center h-full">
                        {service.id === "websites" ? (
                          <div className="w-4/5 h-3/5 border-2 border-logic-blue/30 rounded flex items-center justify-center">
                            <span className="text-logic-blue">Website Demo</span>
                          </div>
                        ) : service.id === "android" ? (
                          <div className="w-1/3 h-4/5 border-2 border-logic-green/30 rounded-2xl flex items-center justify-center">
                            <span className="text-logic-green">Android Demo</span>
                          </div>
                        ) : (
                          <div className="w-1/3 h-4/5 border-2 border-logic-purple/30 rounded-2xl flex items-center justify-center">
                            <span className="text-logic-purple">iOS Demo</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-20 text-center">
          <Link to="/services">
            <Button 
              variant="outline" 
              className="text-white border-white/20 hover:bg-white/5"
            >
              View All Services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
