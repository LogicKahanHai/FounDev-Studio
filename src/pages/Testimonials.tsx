import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

// Layout components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "D.K Naidu",
    position: "CEO",
    company: " Code Matrix Trading & Contracting (CMTC), Qatar",
    image: "/testimonials/DK.png",
    rating: 5,
    text: "Partnering with FounDev Studio was a fantastic experience. Their team demonstrated exceptional professionalism, creativity, and technical expertise in building our company website. From design to deployment, everything was handled seamlessly and with great attention to detail. The final product perfectly reflects our brand and business goals. Highly impressed and would definitely recommend them to anyone looking for reliable digital solutions.",
    featured: true
  },
  {
    id: 2,
    name: "Mohit Soni",
    position: "Founder",
    company: "Alexa Car, Jaipur",
    image: "/testimonials/mohit.png",
    rating: 5,
    text: "Working with FounDev Studio was an absolute pleasure. They truly understood our vision and translated it into a sleek, user-friendly website that perfectly represents AlexaCar. The team was responsive, innovative, and delivered everything on time. We've already started seeing positive customer feedback. Highly recommended for any business looking to go digital!",
    featured: true
  },
  {
    id: 3,
    name: "Prabhjot Kaur",
    position: "Marketing Director",
    company: "Elevate Media",
    image: "/testimonials/emily.jpg",
    rating: 5,
    text: "The e-commerce solution developed by FounDev Studio increased our online sales by 40% in just three months. Their team understood our brand vision perfectly and created an intuitive shopping experience for our customers.",
    featured: true
  },
  {
    id: 4,
    name: "Dhruv Agrawal",
    position: "CTO",
    company: "InnovateTech",
    image: "/testimonials/david.jpg",
    rating: 4,
    text: "FounDev Studio provided excellent technical support during our digital transformation. Their developers are highly skilled and were able to integrate complex systems seamlessly. I highly recommend their services."
  },
  {
    id: 5,
    name: "Priya Patel",
    position: "Product Manager",
    company: "NextWave Solutions",
    image: "/testimonials/priya.jpg",
    rating: 5,
    text: "The UI/UX design work from FounDev Studio completely revitalized our application. Their designers took the time to understand our users' needs and created an interface that's both beautiful and functional."
  },
  {
    id: 6,
    name: "Surrebdar Malik",
    position: "Operations Director",
    company: "Global Logistics",
    image: "/testimonials/james.jpg",
    rating: 5,
    text: "FounDev Studio developed a custom logistics management system that has streamlined our operations and reduced processing time by 60%. Their team was collaborative and responsive throughout the entire project."
  },
  {
    id: 7,
    name: "Hitesh Verma",
    position: "E-commerce Manager",
    company: "StyleHouse",
    image: "/testimonials/sophia.jpg",
    rating: 4,
    text: "Our online store redesign by FounDev Studio has received fantastic feedback from our customers. The checkout process is now seamless, and we've seen a significant reduction in cart abandonment rates."
  },
  {
    id: 8,
    name: "Ishita Singh",
    position: "IT Director",
    company: "HealthTech Solutions",
    image: "/testimonials/robert.jpg",
    rating: 5,
    text: "FounDev Studio helped us develop a secure patient portal that complies with all healthcare regulations. Their expertise in both security and user experience was invaluable to our project's success."
  }
];

const Testimonials = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredTestimonials = testimonials.filter(t => t.featured);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredTestimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredTestimonials.length - 1 : prev - 1));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-logic-dark flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-logic-dark to-logic-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-logic-blue to-logic-purple">Clients</span> Say
            </motion.h1>
            <motion.p
              className="text-lg text-logic-gray-light mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover why businesses trust FounDev Studio for their digital transformation needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                onClick={() => navigate("/contact")}
                className="bg-logic-blue hover:bg-logic-blue/90 text-white"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-16 bg-logic-dark-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Testimonials</h2>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="border-logic-gray-light text-logic-gray-light hover:text-white hover:border-white"
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="border-logic-gray-light text-logic-gray-light hover:text-white hover:border-white"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>

            <div className="relative md:min-h-[890px] lg:min-h-[690px] xl:min-h-[590px] 2xl:h-[400px] overflow-hidden rounded-xl bg-logic-dark p-8">
              {featuredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="absolute inset-0 p-8 flex flex-col justify-center"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : 100,
                    zIndex: currentSlide === index ? 10 : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote className="text-logic-blue/30 w-16 h-16 mb-4" />
                  <p className="text-lg md:text-xl text-white mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4 border-2 border-logic-blue">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-logic-blue/20 text-white">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-logic-gray-light">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-logic-blue fill-logic-blue' : 'text-logic-gray-light'}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-logic-blue' : 'bg-logic-gray-light/30'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-logic-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            All Client Testimonials
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-logic-dark-light rounded-xl p-6 shadow-lg hover:shadow-logic-blue/5 transition-shadow"
                variants={itemVariants}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3 border border-logic-blue/30">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-logic-blue/20 text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-xs text-logic-gray-light">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-logic-blue fill-logic-blue' : 'text-logic-gray-light'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-logic-gray-light mb-4">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-logic-dark-light to-logic-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-logic-blue/10 to-logic-purple/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-logic-gray-light mb-8">
                Let's discuss how we can help transform your digital presence and deliver exceptional results for your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => navigate("/contact")}
                  className="bg-logic-blue hover:bg-logic-blue/90 text-white"
                >
                  Contact Us
                </Button>
                <Button
                  onClick={() => navigate("/services")}
                  variant="outline"
                  className="border-logic-gray-light text-white hover:bg-white/5"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
