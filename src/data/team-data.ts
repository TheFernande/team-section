import { TeamCardProps } from "@/components/team-card";

const teamData: TeamCardProps[] = [
  {
    name: "Joe Jackson",
    role: "Founder & CEO",
    supportingText:
      "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
    imageUrl: "/images/joe.jpg"
  },
  {
    name: "Ash Karter",
    role: "Founder & CFO",
    supportingText:
      "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
    imageUrl: "/images/ash.png"
  },
  {
    name: "Farias Amed",
    role: "Front End AI Engineer",
    supportingText:
      "Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.",
    imageUrl: "/images/farias.png"
  },
  {
    name: "Sarah Haust",
    role: "Dev Ops",
    supportingText:
      "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
    imageUrl: "/images/sarah.png"
  }
];

export default teamData;
