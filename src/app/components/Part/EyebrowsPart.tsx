import EyesBrowPart001 from "@/eyebrow/EyesBrowPart001";
import EyesBrowPart002 from "@/eyebrow/EyesBrowPart002";

type ComponentArr = {
  id: number;
  part: React.ReactElement;
};

export const EyebrowsPartComponentArr: ComponentArr[] = [
  { id: 1, part: <EyesBrowPart001 /> },
  { id: 2, part: <EyesBrowPart002 /> },
];
