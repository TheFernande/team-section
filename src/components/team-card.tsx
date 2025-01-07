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
    <div className='flex max-h-[516px] flex-col gap-6'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col'>
          <Image
            src={imageUrl}
            alt={`Profile picture of ${name}`}
            className='object-cover'
            width={311}
            height={311}
          />
        </div>
        <div className='flex flex-col justify-items-start'>
          <p className='text-xl font-semibold text-neutral-900'>{name}</p>
          <p className='text-xl font-medium text-indigo-700'>{role}</p>
        </div>
      </div>
      <p className='text-base font-normal text-neutral-600'>{supportingText}</p>
    </div>
  );
};

export default TeamCard;
