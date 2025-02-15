import Image from "next/image";
import { Skill } from "@/utils/utils";

export function Tile({ skill }: { skill: Skill }) {
  return (
    <div
      className={`flex w-[160px] items-center justify-center gap-4 rounded-[5px] border-solid border-[1px] border-gray-700 p-3 text-md md:w-[200px]`}
      style={{ 
        boxShadow: `6px 6px 1px ${skill.color}`,
       }}
    >
      <Image src={skill.image} alt="javascript" width={30} height={30} />
      <div>{skill.skill}</div>
    </div>
  );
}
