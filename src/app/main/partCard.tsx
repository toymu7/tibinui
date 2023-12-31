"use client";
import React, { useState } from "react";
import styles from "./test.module.css";

import PartSelectName from "./PartSelectName";

import { HairPartComponentArr } from "../components/Part/HairPart";
import { EyebrowsPartComponentArr } from "../components/Part/EyeBrowsPart";
import { EyesPartComponentArr } from "../components/Part/EyesPart";
import { MouthPartComponentArr } from "../components/Part/MouthPart";

import {
  UpButton,
  DownButton,
  ExpandButton,
  NarrowButton,
  ScaleDownButton,
  ScaleUpButton,
  LeftRotateButton,
  RightRotateButton,
  Button,
} from "../components/Button/Button";
import { usePartClick } from "./PartClick.hook";
import { usePartTranslate } from "./PartTranslate.hook";
import { usePartsEffect } from "./MergePart.hook";

export default function PartCard() {
  const { partsIndex, parts, setParts, partClick, activePartName } =
    usePartClick();
  const {
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
  } = usePartTranslate();

  // 活性/非活性にする要素の状態管理
  const [visibleDiv, setVisibleDiv] = useState<string | null>(null);
  // 子コンポーネントからの情報を受け取るコールバック関数
  const displayElement = (data: any) => {
    setVisibleDiv(data);
  };
  const isButtonDisabled = Object.keys(partsIndex).length !== 4;
  const checkDesign = () => {
    alert("これで良いのか");
  };
  // パーツカスタムボタンが変更するとパーツにstyleを反映させる
  usePartsEffect(parts, setParts, PartStyle, activePartName);

  return (
    <div className={styles.container}>
      <div className={styles.partContainer}>
        <div className={styles.leftMenu}></div>
        <div className={styles.partImage}>
          {/* 素体 */}
          <img src="/body/baseBody.jpg" alt="素体" className={styles.baseImg} />
          <div className={styles.hairPartPosition}>
            <div className={styles.displayHairPart}>{parts.HairPart}</div>
          </div>
          <div className={styles.eyebrowPartposition}>{parts.EyebrowsPart}</div>
          <div className={styles.eyesPartposition}>{parts.EyesPart}</div>
          <div className={styles.mouthPartposition}>
            <div className={styles.displayMouthPart}>{parts.MouthPart}</div>
          </div>
        </div>
        <div className={styles.rightMenu}>
          <div className={styles.pre}></div>
          <div className={styles.partSetting}>
            <UpButton onClick={() => Up(activePartName)}></UpButton>
            <DownButton onClick={() => Down(activePartName)}></DownButton>
            <ExpandButton onClick={() => Expand(activePartName)}></ExpandButton>
            <NarrowButton onClick={() => Narrow(activePartName)}></NarrowButton>
            <ScaleUpButton
              onClick={() => ScaleUp(activePartName)}
            ></ScaleUpButton>
            <ScaleDownButton
              onClick={() => ScaleDown(activePartName)}
            ></ScaleDownButton>
            <LeftRotateButton
              onClick={() => Internal(activePartName)}
            ></LeftRotateButton>
            <RightRotateButton
              onClick={() => External(activePartName)}
            ></RightRotateButton>
            {/* <Button onClick={() => Reset()}>リセット</Button> */}
          </div>

          {/* </div> */}
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
          {HairPartComponentArr.map((component: any, index) => (
            <div
              key={index}
              className={`${styles.part} ${
                partsIndex.HairPart === index ? styles.selected : ""
              }`}
              onClick={() => partClick(index, "HairPart", component)}
            >
              {component}
            </div>
          ))}
        </div>
        <div
          id="eyeBrowPart"
          className={`${
            visibleDiv === "eyeBrowPart" ? styles.visible : styles.hidden
          }`}
        >
          {EyebrowsPartComponentArr.map((component: any, index: number) => (
            <div
              key={index + 1}
              className={`${styles.part} ${
                partsIndex.EyebrowsPart === index ? styles.selected : ""
              }`}
              onClick={() => partClick(index + 1, "EyebrowsPart", component)}
            >
              {component}
            </div>
          ))}
        </div>
        <div
          id="eyesPart"
          className={` ${
            visibleDiv === "eyesPart" ? styles.visible : styles.hidden
          }`}
        >
          {EyesPartComponentArr.map((component: any, index) => (
            <div
              key={index}
              className={`${styles.part} ${
                partsIndex.EyesPartyes === index ? styles.selected : ""
              }`}
              onClick={() => partClick(index + 1, "EyesPart", component)}
            >
              {component}
            </div>
          ))}
        </div>
        <div
          id="mouthPart"
          className={` ${
            visibleDiv === "mouthPart" ? styles.visible : styles.hidden
          }`}
        >
          {MouthPartComponentArr.map((component: any, index) => (
            <div
              key={index}
              className={`${styles.part} ${
                partsIndex.MouthPart === index ? styles.selected : ""
              }`}
              onClick={() => partClick(index + 1, "MouthPart", component)}
            >
              {component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
