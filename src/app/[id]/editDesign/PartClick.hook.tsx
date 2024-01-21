import { ReactNode, useState } from "react";
import type { Part, PartIds } from "partType/part";

/**
 * パーツ選択時の状態管理とロジックを提供します。
 * @returns {object} partIds - アクティブパーツのIDを含むオブジェクト。
 * @returns {object} parts - 各種パーツコンポーネントを含むオブジェクト。
 * @returns {React.ReactElement} activePartName - 現在アクティブなパーツ名。
 * @returns {function} partClick - パーツ選択時に呼び出す関数。
 * @returns {function} setParts - パーツ状態を更新する関数。
 */
export const usePartClick = () => {
  const [partIds, setSelectedParts] = useState<PartIds>({
    hairId: 0,
    eyebrowsId: 0,
    eyesId: 0,
    mouthId: 0,
  });
  const [parts, setParts] = useState<Part>({
    hair: null,
    eyebrows: null,
    eyes: null,
    mouth: null,
  });
  const [activePartName, setActivePartName] = useState("");

  /**
   * 指定されたパーツを選択します。
   * @param {number} index - 設定するコンポーネントパーツのID。
   * @param {string} partName - 設定するパーツ名。
   * @param {ReactNode} component - 設定するコンポーネント。
   */
  const partClick = (index: number, partName: string, component: ReactNode) => {
    setSelectedParts((prevSelected) => ({
      ...prevSelected,
      [`${partName}Id`]: index,
    }));
    setParts((prevParts) => ({ ...prevParts, [partName]: component }));
    setActivePartName(partName);
  };
  return {
    partIds,
    parts,
    setParts,
    partClick,
    activePartName,
  };
};
