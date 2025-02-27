
import React from 'react';

interface ProcessStepProps {
  number: string;
  title: string;
  items: string[];
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, items }) => {
  return (
    <div className="process-card animate-fade-in-up">
      <div className="text-accent mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-muted text-sm">• {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProcessStep;
