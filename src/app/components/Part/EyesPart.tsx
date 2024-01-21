import EyesPart001 from "@/eyes/EyesPart001";
import EyesPart002 from "@/eyes/EyesPart002";

type ComponentArr = {
  id: number;
  part: React.ReactElement;
};

export const EyesPartComponentArr: ComponentArr[] = [
  { id: 1, part: <EyesPart001 /> },
  { id: 2, part: <EyesPart002 /> },
];
