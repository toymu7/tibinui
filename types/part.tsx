import { ReactNode } from "react";
export type Part = {
  hair: ReactNode;
  eyebrows: ReactNode;
  eyes: ReactNode;
  mouth: ReactNode;
};
export type PartIds = {
  hairId: number;
  eyebrowsId: number;
  eyesId: number;
  mouthId: number;
};
export type PartStyles = {
  hairStyle: object;
  eyebrowsStyle: object;
  eyesStyle: object;
  mouthStyle: object;
};

export type DesignedPart = {
  hair: ReactNode;
  eyebrows: ReactNode;
  eyes: ReactNode;
  mouth: ReactNode;
  bodyId: number;
};
