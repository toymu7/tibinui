import React, { useEffect } from "react";

/**
 * 指定されたパーツにスタイルを適用するためのエフェクトフック。
 * 指定されたパーツ名がアクティブな場合に、そのパーツにスタイルを適用します。
 *
 * @param {any} parts - パーツコンポーネントを含むオブジェクト。
 * @param {Function} setParts - パーツ状態を更新する関数。
 * @param {any} PartStyles - 各パーツに適用するスタイルを含むオブジェクト。
 * @param {string} activePartName - 現在アクティブなパーツの名前。
 */
export const usePartsEffect = (
  parts: any,
  setParts: any,
  PartStyles: any,
  activePartName: string
) => {
  useEffect(() => {
    if (parts[activePartName] != undefined) {
      setParts((prevParts: any) => ({
        ...prevParts,
        [activePartName]: React.cloneElement(parts[activePartName], {
          styleProps: PartStyles[`${activePartName}Style`],
        }),
      }));
    }
  }, [PartStyles]);
};
