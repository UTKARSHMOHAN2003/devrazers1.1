import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Calendly from  "../pages/Calendly"

const Navbar = () => {
   const [showWidget, setShowWidget] = useState(false);//calendly
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 10 });
  const springY = useSpring(y, { stiffness: 100, damping: 10 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX - 200);
      y.set(event.clientY - 30);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <>
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl text-accent font-bold"
              style={{ x: springX, y: springY, position: "absolute", pointerEvents: "none" }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              ◯
            </motion.div>
            <div className="text-2xl font-bold">◯</div>

            <div className="hidden md:flex items-center gap-8">
              <Link to="process" smooth={true} duration={800} className="nav-link cursor-pointer">Process</Link>
              <Link to="work" smooth={true} duration={800} className="nav-link cursor-pointer">Work</Link>
              <Link to="service" smooth={true} duration={800} className="nav-link cursor-pointer">Services</Link>
              <Link to="team" smooth={true} duration={800} className="nav-link cursor-pointer">About</Link>
              <Link to="faq" smooth={true} duration={800} className="nav-link cursor-pointer">FAQs</Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn-primary"
              onClick={() => setShowWidget(true)}
            >
              Book a call
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Calendly Widget */}
      <Calendly showWidget={showWidget} setShowWidget={setShowWidget} />
    </>
  );
};

export default Navbar;
