import HairPart001 from "@/hair/HairPart001";
import HairPart002 from "@/hair/HairPart002";

type ComponentArr = {
  id: number;
  part: React.ReactElement;
};

export const HairPartComponentArr: ComponentArr[] = [
  { id: 1, part: <HairPart001 /> },
  { id: 2, part: <HairPart002 /> },
];
