import React,{useState}from 'react';
import Navbar from '../components/Navbar';
import ProcessStep from '../components/ProcessStep';
import utkarshImage from "../assets/u1.jpg";
import adityaImage from "../assets/aditya.jpg";
import sahilImage from "../assets/Sahil_cool-removebg.png";
import FAQ from './FAQ';
import { Link as RouterLink } from 'react-router-dom'; // Alias for react-router-dom Link
import { Link as ScrollLink } from 'react-scroll'; // Alias for react-scroll Link
import { FaReact, FaNodeJs, FaJs,  FaGitAlt } from "react-icons/fa";
import { SiMongodb,  SiOpenai, SiTailwindcss, SiSolidity, SiTypescript, SiFirebase, SiRedux, SiNextdotjs } from "react-icons/si";
import Calendly from './Calendly';


const Index = () => {
    
  const [showWidget, setShowWidget] = useState(false);//calendly
  const testimonials = [
    {
      rating: "★★★★★",
      quote: "Our website looks stunning and functions flawlessly—truly impressive work!",
      author: "Aarav Mehta",
      role: "Startup Founder"
    },
    {
      rating: "★★★★★",
      quote: "Devrazers transformed our vision into a sleek and professional website!",
      author: "Priya Sharma",
      role: "Small Business Owner"
    },
    {
      rating: "★★★★★",
      quote: "The attention to detail and smooth user experience exceeded our expectations!",
      author: "Rohan Iyer",
      role: "eCommerce Entrepreneur"
    },
    {
      rating: "★★★★★",
      quote: "A perfect blend of creativity and functionality—our website has never looked better!",
      author: "Ananya Verma",
      role: "Digital Marketer"
    },
    {
      rating: "★★★★★",
      quote: "Seamless, modern, and user-friendly—Derazers delivered beyond what we imagined!",
      author: "Vikram Khanna",
      role: "Tech Consultant"
    }
]
;
  const logos = [
    { text: <FaJs className="text-yellow-500 text-3xl" />, key: "1" }, // JavaScript
    { text: <SiTypescript className="text-blue-500 text-3xl" />, key: "2" }, // TypeScript
    { text: <FaReact className="text-blue-400 text-3xl" />, key: "3" }, // React.js
    { text: <FaNodeJs className="text-green-500 text-3xl" />, key: "4" }, // Node.js
    { text: <SiMongodb className="text-green-400 text-3xl" />, key: "5" }, // MongoDB
    { text: <SiSolidity className="text-gray-500 text-3xl" />, key: "6" }, // Solidity
    { text: <SiTailwindcss className="text-blue-500 text-3xl" />, key: "7" }, // Tailwind CSS
    { text: <SiOpenai className="text-green-400 text-3xl" />, key: "8" }, // OpenAI
  
    { text: <SiFirebase className="text-orange-500 text-3xl" />, key: "9" }, // Firebase
  { text: <SiRedux className="text-purple-500 text-3xl" />, key: "10" }, // Redux Toolkit
  { text: <SiNextdotjs className="text-black text-3xl" />, key: "11" }, // Next.js 
  { text: <FaGitAlt className="text-red-500 text-3xl" />, key: "12" }, // Git
  ];
  return (
    <div className="min-h-screen bg-primary ">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
  {/* Gradient Background */}
  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/30 to-transparent  blur-[100px] pointer-events-none"></div>

  <div className="container mx-auto text-center relative z-10">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
      Elevate your brand with a<br />timeless minimal website.
    </h1>
    <p
      className="text-muted text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up"
      style={{ animationDelay: "0.2s" }}
    >
      Web development agency building minimal, impactful websites that speak volumes.
    </p>
    <div
      className="flex gap-4 justify-center animate-fade-in-up"
      style={{ animationDelay: "0.4s" }}
    >
      <button className="btn-primary">Get started</button>
      <button className="btn-secondary">Learn more</button>
    </div>
    <div className="relative overflow-hidden w-full mt-20">
      <div className="flex animate-marquee">
        {logos.map((logo) => (
          <div
            key={logo.key}
            className="text-4xl  font-semibold opacity-50 min-w-[200px] flex items-center justify-center"
          >
            {logo.text}
          </div>
        ))}
      </div>
    </div>  
  </div>
</section>


      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="section-heading animate-fade-in-up">
          We specialize in creating minimal websites <br/> that capture the essence of your brand.
          </h2>
          <p className="section-subheading animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            First impressions matter. That's why our focus is to create clean, enduring designs that elevate your brand with simplicity and presence. Captivate your audience with your timeless presence.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="section-heading mb-2">Our process.</h2>
          <p className="section-subheading mb-16">Reliable process for achieving distinctiveness.</p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <ProcessStep
              number="01"
              title="Discovery and Research."
              items={[
                "Understand the client's values and audience",
                "Conduct market research",
                "Identify key design elements"
              ]}
            />
            <ProcessStep
              number="02"
              title="Concept Development."
              items={[
                "Brainstorm and sketch initial concepts",
                "Focus on simplicity",
                "Prioritize ideas for further development"
              ]}
            />
            <ProcessStep
              number="03"
              title="Design and Refinement."
              items={[
                "Create digital versions of prioritized concepts",
                "Refine line details, ensuring clarity",
                "Incorporate client feedback in fine-tuning"
              ]}
            />
            <ProcessStep
              number="04"
              title="Finalization and Delivery."
              items={[
                "Prepare the final website in various formats",
                "Provide a comprehensive brand guide",
                "Deliver the final assets and support"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id = "work" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Our work.</h2>
          <p className="section-subheading text-center mb-16">
            View our expertly crafted minimal websites, designed to convey simplicity and elegance.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-white/5 rounded-lg p-8 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl font-light text-white/80">
                  {['LogoIpsum', '◇', '○', 'IPSUM', 'LOGO', '⬡'][index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-black/30 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">Our results.</h2>
        <p className="section-subheading text-center mb-16">
          Hear what our clients have to say about our team and our services.
        </p>
        
        <div className="relative w-full">
          <div className="flex gap-8 animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[350px] p-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-accent mb-4">{testimonial.rating}</div>
                <p className="text-lg font-medium mb-6 whitespace-pre-line">{testimonial.quote}</p>
                <div className="text-sm text-muted">
                  <div>{testimonial.author}</div>
                  <div>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Pricing Section */}
      <section id = "service" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="section-heading text-center">Our services.</h2>
          <p className="section-subheading text-center mb-16">
            Fixed-cost plans to avoid negotiations and start creating.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Lite Plan */}
            <div className="p-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 text-muted">Lite</div>
              <div className="text-4xl font-semibold mb-4">  ₹59/hr</div>
              <p className="text-muted mb-8">
              Get a professionally designed website to establish your online presence and grow your business.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
              <li>• 5-page responsive website</li>
               <li>• Custom UI/UX design</li>
             <li>• SEO-friendly structure</li>
            <li>• 10-day delivery</li>
             <li>• 2 revisions</li>
            <li>• Hosting & domain setup</li>

              </ul>
              <button className="btn-secondary w-full" onClick={() => setShowWidget(true)}>Get started</button>
         
            </div>

           
      {/* Standard Plan */}
              <div className="p-8 rounded-lg bg-accent/20 border border-accent hover:bg-accent/30 transition-all duration-300">
  <div className="mb-4 text-muted">Standard </div>
  <div className="text-4xl font-semibold mb-4">₹149/hr</div>
  <p className="text-muted mb-8">
    A professionally designed website with essential features to engage your audience.
  </p>
  <ul className="space-y-3 mb-8 text-sm">
    <li>• 10-page responsive website</li>
    <li>• Custom UI/UX design</li>
    <li>•  SEO optimization</li>
    <li>• 2-week delivery</li>
    <li>• Max 4 revisions</li>
    <li>• CMS integration (WordPress or custom)</li>
  </ul>
  <button className="btn-primary w-full" onClick={() => setShowWidget(true)} >Get Started</button>
</div>


            {/* Premium Plan */}
            <div className="p-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="mb-4 text-muted"> Premium</div>
              <div className="text-4xl font-semibold mb-4">₹249/hr</div>
              <p className="text-muted mb-8">
              Get a dedicated team to design, develop, and maintain your website on a monthly basis.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
              <li>• Fully customized website (15+ pages)</li>
              <li>• Advanced UI/UX design</li>
              <li>• SEO optimization & analytics setup</li>
              <li>• eCommerce integration (if needed)</li>
              <li>• Unlimited revisions</li>
              <li>• Ongoing maintenance & support</li>
    <li>• Priority updates & feature enhancements</li>

              </ul>
              <button className="btn-secondary w-full" onClick={() => setShowWidget(true)} >Get started</button>
            </div>
          </div>
        </div>
        <Calendly showWidget={showWidget} setShowWidget={setShowWidget} />
      </section>

      {/* Team Section */}
      <section id='team' className="py-20 px-6">
  <div className="container mx-auto">
    <h2 className="section-heading text-center">Our team.</h2>
    <p className="section-subheading text-center mb-16">
      Meet our talented team proud in delivering your brand's website.
    </p>
    <div className="grid md:grid-cols-3 gap-8">
      {[
         {
          name: "Utkarsh Mohan",
          role: "CEO & Founder",
          image: utkarshImage,
          linkedin: "https://www.linkedin.com/in/utkarsh-mohan-256b2a226/"
        },
        {
          name: "Aditya Thakur",
          role: "Creative Director",
          image: adityaImage,
          linkedin: "https://www.linkedin.com/in/aditya-thakur-5246a1227/"
        },
        {
          name: "Sahil Gupta",
          role: "Head of Marketing",
          image: sahilImage,
          linkedin: "https://www.linkedin.com/in/sahil-gupta-581649223/"
        }
      ].map((member, index) => (
        <a 
          key={index}
          href={member.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-white/5 border border-white/10 hover:border-accent/50 transition-all duration-300"
        >
          <div className="relative w-full h-full">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
            {/* Hover effect for LinkedIn button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-center bg-accent text-white px-4 py-2 rounded-md text-sm font-semibold">
                View on LinkedIn
              </div>
            </div>
          </div>
          {/* Name & Role */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-xl font-medium mb-1">{member.name}</h3>
            <p className="text-sm text-muted">{member.role}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
      {/* FAQSection */}
      <FAQ/>



   {/* footer Section */}
   <footer className="w-full bg-background py-16 relative">
      {/* Orange gradient effect */}
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-tl from-accent/30 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-12">
          {/* Left side */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8  flex items-center justify-center">
                <span className="text-foreground text-xl font-semibold">    ◯</span>
              </div>
              <span className="text-foreground text-xl">devrazers</span>
            </div>
            <button className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-md transition-colors">
              Book FREE discovery call
            </button>
          </div>
          {/* Right side - Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Main Links */}
            <div className="space-y-4">
            <ScrollLink to="process" smooth={true} duration={800} offset={-50} className="nav-link cursor-pointer block text-foreground hover:text-accent transition-colors">
    Process
  </ScrollLink>
  <ScrollLink to="work" smooth={true} duration={800} offset={-50} className="nav-link cursor-pointer block text-foreground hover:text-accent transition-colors">
    Work
  </ScrollLink>
  <ScrollLink to="service" smooth={true} duration={800} offset={-50} className="nav-link cursor-pointer block text-foreground hover:text-accent transition-colors">
    Services
  </ScrollLink>
  <ScrollLink to="team" smooth={true} duration={800} offset={-50} className="nav-link cursor-pointer block text-foreground hover:text-accent transition-colors">
    About
  </ScrollLink>
  <ScrollLink to="faq" smooth={true} duration={800} offset={-50} className="nav-link cursor-pointer block text-foreground hover:text-accent transition-colors">
    FAQs
  </ScrollLink>
  
            </div>
            {/* Social Links */}
            <div className="space-y-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-accent transition-colors">X(Twitter)</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-accent transition-colors">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-accent transition-colors">LinkedIn</a>
            </div>
            {/* Additional Links */}
            {/* <div className="space-y-4">
              <a href="#" className="block text-foreground hover:text-accent transition-colors">Use this template</a>
              <a href="#" className="block text-foreground hover:text-accent transition-colors">Built in Framer</a>
              <a href="#" className="block text-foreground hover:text-accent transition-colors">View more templates</a>
            </div> */}
          </div>
        </div>
        {/* Creator Attribution */}
        <div className="flex items-center justify-end gap-2 text-sm text-foreground/80">
          <span>Created by devrazers</span>
        </div>
      </div>
    </footer>




    </div>
  );
};

export default Index;
