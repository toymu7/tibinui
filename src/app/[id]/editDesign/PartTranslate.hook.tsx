import * as PartStyles from "../../../constants/initPartStyle";
import { useState } from "react";

/**
 * パーツの変換操作（移動、回転、スケーリングなど）に関するロジックを提供するフック。
 * @returns {object} PartStyle - 現在のパーツスタイルを含むオブジェクト。
 * @returns {function} Translate - 特定のアクションを実行する関数。
 */
export const usePartTranslate = () => {
  const [PartStyle, setPartStyle] = useState<any>(PartStyles);

  //   パーツ拡大
  const ScaleUp = (activePartName: string) => {
    const targetStyle = PartStyle[`${activePartName}Style`];
    const updatedScale = parseFloat((targetStyle.scale + 0.02).toFixed(2));
    setPartStyle({
      ...PartStyle,
      [`${activePartName}Style`]: {
        ...targetStyle,
        scale: updatedScale,
      },
    });
  };
  //   パーツ縮小
  const ScaleDown = (activePartName: string) => {
    const targetStyle = PartStyle[`${activePartName}Style`];
    const updatedScale = parseFloat((targetStyle.scale - 0.02).toFixed(2));
    setPartStyle({
      ...PartStyle,
      [`${activePartName}Style`]: {
        ...targetStyle,
        scale: updatedScale,
      },
    });
  };
  //   パーツ間隔拡大
  const Expand = (activePartName: string) => {
    const targetStyle = PartStyle[`${activePartName}Style`];
    const updateLeftX = targetStyle.leftTranslateX - 4;
    const updateRightX = targetStyle.rightTranslateX + 4;
    setPartStyle({
      ...PartStyle,
      [`${activePartName}Style`]: {
        ...targetStyle,
        leftTranslateX: updateLeftX,
        rightTranslateX: updateRightX,
      },
    });
  };
  //   パーツ間隔縮小
  const Narrow = (activePartName: string) => {
    const targetStyle = PartStyle[`${activePartName}Style`];
    const updateLeftX = targetStyle.leftTranslateX + 4;
    const updateRightX = targetStyle.rightTranslateX - 4;
    setPartStyle({
      ...PartStyle,
      [`${activePartName}Style`]: {
        ...targetStyle,
        leftTranslateX: updateLeftX,
        rightTranslateX: updateRightX,
      },
    });
  };
  //   パーツ外転
  const LeftRotate = (activePartName: string) => {
    const targetStyle = PartStyle[`${activePartName}Style`];
    const updateLeftRotate = targetStyle.leftRotate - 2;
    const updateRightRotate = targetStyle.rightRotate + 2;
    setPartStyle({
      ...PartStyle,
      [`${activePartName}Style`]: {
        ...targetStyle,
        leftRotate: updateLeftRotate,
        rightRotate: updateRightRotate,
      },
    });
  };
  //   パーツ内転
  const RightRotate = (activePartName: string) => {
    const targetStyle = PartStyle[`${activePartName}Style`];
    const updateLeftRotate = targetStyle.leftRotate + 2;
    const updateRightRotate = targetStyle.rightRotate - 2;
    setPartStyle({
      ...PartStyle,
      [`${activePartName}Style`]: {
        ...targetStyle,
        leftRotate: updateLeftRotate,
        rightRotate: updateRightRotate,
      },
    });
  };
  // パーツ上移動
  const Up = (activePartName: string) => {
    const targetStyle = PartStyle[`${activePartName}Style`];
    const updatetranslateY = targetStyle.translateY - 4;
    setPartStyle({
      ...PartStyle,
      [`${activePartName}Style`]: {
        ...targetStyle,
        translateY: updatetranslateY,
      },
    });
  };
  //   パーツ下移動
  const Down = (activePartName: string) => {
    const targetStyle = PartStyle[`${activePartName}Style`];
    const updatetranslateY = targetStyle.translateY + 4;
    setPartStyle({
      ...PartStyle,
      [`${activePartName}Style`]: {
        ...targetStyle,
        translateY: updatetranslateY,
      },
    });
  };
  // 初期化
  const Reset = () => {
    setPartStyle(PartStyles);
  };

  /**
   * 指定されたアクションに基づいてパーツを変換します。
   * @param {string} action - 実行するアクションの種類。
   * @param {string} activePartName - アクティブなパーツの名前。
   */
  const Translate = (action: string, activePartName: string) => {
    const partName = activePartName || "None";
    switch (action) {
      case "Up":
        Up(partName);
        break;
      case "Down":
        Down(partName);
        break;
      case "Expand":
        Expand(partName);
        break;
      case "Narrow":
        Narrow(partName);
        break;
      case "ScaleUp":
        ScaleUp(partName);
        break;
      case "ScaleDown":
        ScaleDown(partName);
        break;
      case "LeftRotate":
        LeftRotate(partName);
        break;
      case "RightRotate":
        RightRotate(partName);
        break;
      case "Reset":
        Reset;
        break;
    }
  };

  return {
    PartStyle,
    Translate,
  };
};
