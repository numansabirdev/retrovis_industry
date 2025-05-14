import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-secondary">{title.split(' ')[0]}</span>
        <span className="text-primary"> {title.split(' ').slice(1).join(' ')}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;