import * as PartStyles from "../../constants/initPartStyle";
import { useState } from "react";

// 対象プロパティを変更する際に、ボタン押下の制御を加える

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
  const External = (activePartName: string) => {
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
  const Internal = (activePartName: string) => {
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
  // const Reset = () => {
  //   setPartStyle(PartStyles);
  // };

  return {
    ScaleUp,
    ScaleDown,
    Expand,
    Narrow,
    External,
    Internal,
    Up,
    Down,
    PartStyle,
    // Reset,
  };
};
