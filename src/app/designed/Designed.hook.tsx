import React, { useState } from "react";

import { HairPartComponentArr } from "../components/Part/HairPart";
import { EyebrowsPartComponentArr } from "../components/Part/EyebrowsPart";
import { EyesPartComponentArr } from "../components/Part/EyesPart";
import { MouthPartComponentArr } from "../components/Part/MouthPart";

import { DesignedPart } from "partType/part";

export const useDesigned = () => {
  const [designedArr, setDesignedArr] = useState<DesignedPart[]>([]);

  /**
   * デザインされたパーツを設定する関数。
   * @param designedPart - デザインされたパーツのデータ。
   */
  const setDesinged = (designedPart: any) => {
    console.log(designedPart);

    const newData: DesignedPart[] = designedPart.map((partData: any) => ({
      hair: getComponentPart(HairPartComponentArr, partData.hair),
      eyebrows: getComponentPart(EyebrowsPartComponentArr, partData.eyebrows),
      eyes: getComponentPart(EyesPartComponentArr, partData.eyes),
      mouth: getComponentPart(MouthPartComponentArr, partData.mouth),
      bodyId: partData.id,
    }));
    setDesignedArr(newData);
  };

  /**
   * 特定のパーツのReact要素を取得する。
   * @param partArray - パーツの配列。
   * @param partData - パーツのデータ。
   * @return {React.ReactNode} - パーツのReact要素。
   */
  const getComponentPart = (partArray: any[], partData: any) => {
    const component = partArray.find((item) => item.id === partData.part_id);
    return component
      ? React.cloneElement(component.part, partData.style)
      : null;
  };

  return {
    setDesinged,
    designedArr,
  };
};
