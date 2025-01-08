"use client";

import Image from "next/image";

export interface TeamCardProps {
  name: string;
  role: string;
  supportingText: string;
  imageUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = props => {
  const { name, role, supportingText, imageUrl } = props;

  return (
    <div className='flex max-h-[516px] max-w-[311px] flex-col gap-6 md:max-w-[336px] lg:w-[280px]'>
      <div className='flex flex-col gap-6'>
        <div className='relative block h-[296px] w-[311px] md:w-[336px] lg:w-[280px]'>
          <Image
            src={imageUrl}
            alt={`Profile picture of ${name}`}
            fill
          />
        </div>
        <div className='flex flex-col justify-items-start gap-4'>
          <div className='flex flex-col justify-items-start gap-1 text-xl'>
            <p className='font-semibold text-neutral-900'>{name}</p>
            <p className='font-medium text-indigo-700'>{role}</p>
          </div>
          <p className='text-base font-normal text-neutral-600'>{supportingText}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
