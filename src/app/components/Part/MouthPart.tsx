import MouthPart001 from "@/mouth/MouthPart001";
import MouthPart002 from "@/mouth/MouthPart002";

type ComponentArr = {
  id: number;
  part: React.ReactElement;
};

export const MouthPartComponentArr: ComponentArr[] = [
  { id: 1, part: <MouthPart001 /> },
  { id: 2, part: <MouthPart002 /> },
];
