import React from 'react';

const SkillChip: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <div
      className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition-colors duration-300 hover:bg-accent/20"
    >
      {skill}
    </div>
  );
};

export default SkillChip;