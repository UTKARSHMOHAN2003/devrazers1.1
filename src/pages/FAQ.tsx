import React from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the website development process?",
    answer: "Our website development process includes consultation, planning, design, development, testing, and deployment. We work closely with you at every stage to ensure the best results."
  },
  {
    question: "How much does it cost to build a website?",
    answer: "Website development costs vary based on complexity, features, and design requirements. Our pricing starts at ₹59/hr, with custom quotes available for larger projects."
  },
  {
    question: "How long does it take to develop a website?",
    answer: "The development timeline depends on the project scope. Basic websites take 1-2 weeks, while more complex sites with custom features may take 4-8 weeks."
  },
  {
    question: "Do you provide custom website designs or use templates?",
    answer: "We create fully custom websites tailored to your brand. We do not use pre-made templates unless specifically requested."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we offer website redesign services to enhance user experience, improve performance, and modernize outdated designs."
  },
  {
    question: "What if I need changes after the website is completed?",
    answer: "We offer post-launch support and maintenance plans to keep your website updated and running smoothly."
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us for a free consultation. We’ll discuss your business needs and suggest the best website solution for you."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit/debit cards, UPI, PayPal, and bank transfers. Flexible payment plans are available for long-term projects."
  }
];

const FAQItem = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-t border-border last:border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-normal text-foreground group-hover:text-accent transition-colors">
          {question}
        </span>
        <Plus
          className={`w-5 h-5 text-accent transition-transform duration-200 ease-out ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <div id ="faq" className="min-h-screen bg-background text-foreground py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-normal mb-4">Our faqs.</h1>
          <p className="text-muted">The most common questions we get asked.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-0"
        >
          {faqData.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;