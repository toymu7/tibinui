"use client";
import React, { useState } from "react";
import styles from "./test.module.css";

import PartSelectName from "./PartSelectName";

import { HairPartComponentArr } from "../components/Part/HairPart";
import { EyebrowsPartComponentArr } from "../components/Part/EyebrowsPart";
import { EyesPartComponentArr } from "../components/Part/EyesPart";
import { MouthPartComponentArr } from "../components/Part/MouthPart";

import { Button } from "../components/Button/Button";
import { usePartClick } from "./PartClick.hook";
import { usePartTranslate } from "./PartTranslate.hook";
import { usePartsEffect } from "./MergePart.hook";
import { PartIds, PartStyles } from "partType/part";

export default function CreateDesign() {
  const { partIds, parts, setParts, partClick, activePartName } =
    usePartClick();
  const { Translate, PartStyle } = usePartTranslate();

  // 活性/非活性にする要素の状態管理
  const [visibleDiv, setVisibleDiv] = useState<string | null>(null);
  // 子コンポーネントからの情報を受け取るコールバック関数
  const displayElement = (data: any) => {
    setVisibleDiv(data);
  };
  // パーツカスタムボタンが変更するとパーツにstyleを反映させる
  usePartsEffect(parts, setParts, PartStyle, activePartName);

  // DB登録
  const onSubmit = async (requestId: PartIds, requestStyles: PartStyles) => {
    // パーツ新規登録
    const resRegisterParts = await fetch(
      "http://localhost:3000/api/registerParts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hair_id: requestId.hairId,
          eyebrows_id: requestId.eyebrowsId,
          eyes_id: requestId.eyesId,
          mouth_id: requestId.mouthId,
          hair_style: requestStyles.hairStyle,
          eyebrows_style: requestStyles.eyebrowsStyle,
          eyes_style: requestStyles.eyesStyle,
          mouth_style: requestStyles.mouthStyle,
        }),
        cache: "no-store",
      }
    );
    const partRegisterData = await resRegisterParts.json();
  };
  return (
    <div className={styles.container}>
      <div className={styles.partContainer}>
        <div className={styles.leftMenu}></div>
        <div className={styles.partImage}>
          {/* 素体 */}
          <img src="/body/baseBody.jpg" alt="素体" className={styles.baseImg} />
          <div className={styles.hairPartPosition}>
            <div className={styles.displayHairPart}>{parts.hair}</div>
          </div>
          <div className={styles.eyebrowPartposition}>{parts.eyebrows}</div>
          <div className={styles.eyesPartposition}>{parts.eyes}</div>
          <div className={styles.mouthPartposition}>
            <div className={styles.displayMouthPart}>{parts.mouth}</div>
          </div>
        </div>
        <div className={styles.rightMenu}>
          <div className={styles.pre}></div>
          <div className={styles.partSetting}>
            <button onClick={() => Translate("Up", activePartName)}>Up</button>
            <button onClick={() => Translate("Down", activePartName)}>
              Down
            </button>
            <button onClick={() => Translate("Expand", activePartName)}>
              Expand
            </button>
            <button onClick={() => Translate("Narrow", activePartName)}>
              Narrow
            </button>
            <button onClick={() => Translate("ScaleUp", activePartName)}>
              ScaleUp
            </button>
            <button onClick={() => Translate("ScaleDown", activePartName)}>
              ScaleDown
            </button>
            <button onClick={() => Translate("LeftRotate", activePartName)}>
              LeftRotate
            </button>
            <button onClick={() => Translate("RightRotate", activePartName)}>
              RightRotate
            </button>
            {/* <button onClick={() => Translate("Reset")}>リセット</button> */}
            <button onClick={() => onSubmit(partIds, PartStyle)}>決定</button>
          </div>
        </div>
      </div>

      <div className={styles.partMenuContainer}>
        {/* パーツ名 */}
        <PartSelectName onDisplayElement={displayElement} />
      </div>
      <div className={styles.partListContainer}>
        <div
          id="hairPart"
          className={`${
            visibleDiv === "hairPart" ? styles.visible : styles.hidden
          }`}
        >
          {HairPartComponentArr.map((componentObj) => (
            <div
              key={componentObj.id}
              className={`${styles.part} ${
                partIds.hairId === componentObj.id ? styles.selected : ""
              }`}
              onClick={() =>
                partClick(componentObj.id, "hair", componentObj.part)
              }
            >
              {componentObj.part}
            </div>
          ))}
        </div>
        <div
          id="eyeBrowPart"
          className={`${
            visibleDiv === "eyeBrowPart" ? styles.visible : styles.hidden
          }`}
        >
          {EyebrowsPartComponentArr.map((componentObj) => (
            <div
              key={componentObj.id}
              className={`${styles.part} ${
                partIds.eyebrowsId === componentObj.id ? styles.selected : ""
              }`}
              onClick={() =>
                partClick(componentObj.id, "eyebrows", componentObj.part)
              }
            >
              {componentObj.part}
            </div>
          ))}
        </div>
        <div
          id="eyesPart"
          className={` ${
            visibleDiv === "eyesPart" ? styles.visible : styles.hidden
          }`}
        >
          {EyesPartComponentArr.map((componentObj) => (
            <div
              key={componentObj.id}
              className={`${styles.part} ${
                partIds.eyesId === componentObj.id ? styles.selected : ""
              }`}
              onClick={() =>
                partClick(componentObj.id, "eyes", componentObj.part)
              }
            >
              {componentObj.part}
            </div>
          ))}
        </div>
        <div
          id="mouthPart"
          className={` ${
            visibleDiv === "mouthPart" ? styles.visible : styles.hidden
          }`}
        >
          {MouthPartComponentArr.map((componentObj) => (
            <div
              key={componentObj.id}
              className={`${styles.part} ${
                partIds.mouthId === componentObj.id ? styles.selected : ""
              }`}
              onClick={() =>
                partClick(componentObj.id, "mouth", componentObj.part)
              }
            >
              {componentObj.part}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
