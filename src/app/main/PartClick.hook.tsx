import { useState } from "react";
import React from "react";
/**
 * パーツ選択時にコンポーネントを設定する
 * ・パーツデザイン用コンポーネント
 * ・アクティブなコンポーネント
 * @return {number} partsIndex アクティブパーツのid
 * {object} parts 各種パーツが格納されたオブジェクト
 * {React.ReactElement} 現在アクティブのパーツコンポーネント
 *  {hooks} partClickのフックス
 */
export const usePartClick = () => {
  const [partsIndex, setSelectedParts] = useState({
    HairPart: 0,
    EyebrowsPart: 0,
    EyesPartyes: 0,
    MouthPart: 0,
  });

  const [parts, setParts] = useState<{
    HairPart: React.ComponentType<{}> | null;
    EyebrowsPart: React.ComponentType<{}> | null;
    EyesPart: React.ComponentType<{}> | null;
    MouthPart: React.ComponentType<{}> | null;
  }>({
    HairPart: null,
    EyebrowsPart: null,
    EyesPart: null,
    MouthPart: null,
  });

  const [activePartName, setActivePartName] = useState("");

  /**
   *
   * @param index {number} 設定するパーツのid
   * @param partName {string} 設定するパーツ名
   * @param component {React.ReactElement} 設定するリアクトコンポーネント
   */
  const partClick = (
    index: number,
    partName: string,
    component: React.ComponentType
  ) => {
    setSelectedParts((prevSelected) => ({
      ...prevSelected,
      [partName]: index,
    }));
    // パーツ名とコンポーネントを設定する∂
    setParts((prevParts) => ({ ...prevParts, [partName]: component }));
    setActivePartName(partName);
  };
  console.dir(partsIndex);

  return {
    partsIndex,
    parts,
    setParts,
    partClick,
    activePartName,
  };
};
