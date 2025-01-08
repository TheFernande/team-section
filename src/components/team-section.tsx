"use client";

import TeamCard, { TeamCardProps } from "./team-card";

interface TeamSectionProps {
  data: TeamCardProps[];
}

const TeamSection: React.FC<TeamSectionProps> = props => {
  const { data } = props;

  return (
    <section className='gfe-container'>
      <header className='flex flex-col justify-center gap-5 text-center'>
        <div className='flex flex-col gap-3'>
          <span className='text-base font-semibold text-indigo-700'>Team</span>
          <span className='text-3xl font-semibold text-neutral-900 md:text-5xl'>Meet our team</span>
        </div>
        <p className='text-xl font-normal text-neutral-600'>
          From skilled designers to tech-savvy developers, each member brings a unique perspective
          and expertise to the table.
        </p>
      </header>
      {/* <div className='grid grid-cols-1 justify-items-center gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:max-w-[1440px] lg:grid-cols-4'> */}
      <div className='flex flex-row flex-wrap justify-center justify-items-center gap-12 md:gap-x-8 md:gap-y-16 lg:max-w-[1440px]'>
        {data.map((teamMember, index) => (
          <TeamCard
            key={index}
            {...teamMember}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
