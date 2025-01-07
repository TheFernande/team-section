import TeamSection from "@/components/team-section";
import teamData from "data/team-data";

export default function Home() {
  return (
    // `<main>` -> this is the "Page body" element in the Figma design
    <main className='gfe-main'>
      <TeamSection data={teamData} />
    </main>
  );
}
