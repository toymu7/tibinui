import { useState } from "react";
import { DesignedPart } from "partType/part";

/**
 * パーツがクリックされたときの状態とロジックを管理するカスタムフック。
 * @returns {Part} designedPart - 現在選択されているパーツの状態。
 * @returns {function} designedPartClick - パーツを選択するための関数。
 */
export const useDesignedPartClick = () => {
  const [designedPart, setDesignedParts] = useState<DesignedPart>({
    hair: null,
    eyebrows: null,
    eyes: null,
    mouth: null,
    bodyId: 0,
  });

  /**
   * 指定されたパーツを選択するための関数。
   * @param {Part} part - 選択するパーツのデータ。
   */
  const designedPartClick = (part: DesignedPart) => {
    setDesignedParts(part);
  };

  return {
    designedPart,
    designedPartClick,
  };
};
