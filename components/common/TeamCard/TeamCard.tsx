import React from 'react';
import { TeamDataProps } from '~/components/feature/Team/data';

interface TeamCardProps {
  data: TeamDataProps;
}

export const TeamCard: React.FC<TeamCardProps> = ({ data }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <section className="bg-brand-secondary aspect-square w-full rounded-lg p-[30px]">
        <div className="h-full w-full rounded-lg bg-[#dad4ca]" />
      </section>

      <section>
        <h1 className="font-medium">{data.name}</h1>
        <p className="text-primary/70 text-xs">{data.role}</p>
      </section>
    </div>
  );
};
