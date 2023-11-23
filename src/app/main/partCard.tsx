"use client";
import React, { useState, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import styles from "./test.module.css";

import PartSelectName from "./PartSelectName";

import HairPart001 from "@/hair/HairPart001";
import HairPart002 from "@/hair/HairPart002";
import EyesBrowPart001 from "@/eyebrow/EyesBrowPart001";
import EyesBrowPart002 from "@/eyebrow/EyesBrowPart002";
import EyesPart001 from "@/eyes/EyesPart001";
import EyesPart002 from "@/eyes/EyesPart002";
import MouthPart001 from "@/mouth/MouthPart001";
import MouthPart002 from "@/mouth/MouthPart002";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export default function PartCard() {
  const [hairSelected, setHairSelected] = React.useState<number>();
  const [eyebrowSelected, setEyebrowSelected] = React.useState<number>();
  const [eyesSelected, setEyesSelected] = React.useState<number>();
  const [mouthSelected, setMouthSelected] = React.useState<number>();

  // パーツ選択の状態管理
  const [HairPart, setHairPart] = useState<any>(null);
  const [EyebrowPart, setEyebrowPart] = useState<any>(null);
  const [EyesPart, setEyesPart] = useState<any>(null);
  const [MouthPart, setMouthPart] = useState<any>(null);
  //   4パーツを登録する
  const [selectedParts, setSelectedParts] = useState<{
    [key: string]: { [key: string]: number };
  }>({});

  // 活性/非活性にする要素の状態管理
  const [visibleDiv, setVisibleDiv] = useState<string | null>(null);
  // 子コンポーネントからの情報を受け取るコールバック関数
  const displayElement = (data: any) => {
    setVisibleDiv(data);
  };
  const isButtonDisabled = Object.keys(selectedParts).length !== 4;
  const checkDesign = () => {
    alert("これで良いのか");
  };

  //  ここで`circleFill`ステートを変更
  const [circleFill, setCircleFill] = useState("blue");
  const handleColorChange = () => {
    setCircleFill(circleFill === "red" ? "blue" : "red");
  };

  // コンポーネントを配列に格納
  const hairPartComponentArr = [<HairPart001 />, <HairPart002 />]; //髪
  const eyebrowPartComponentArr = [<EyesBrowPart001 />, <EyesBrowPart002 />]; //眉毛
  const eyesPartComponentArr = [<EyesPart001 />, <EyesPart002 />]; //目
  const mouthPartComponentArr = [<MouthPart001 />, <MouthPart002 />]; //口

  // パーツのクリックイベント
  const hairPartClick = (index: number, component: any) => {
    setHairSelected(index);
    setHairPart(component);
  };
  const eyebrowPartClick = (index: number, component: any) => {
    setEyebrowSelected(index);
    setEyebrowPart(component);
  };
  const eyesPartClick = (index: number, component: any) => {
    setEyesSelected(index);
    setEyesPart(component);
  };
  const mouthPartClick = (index: number, component: any) => {
    setMouthSelected(index);
    setMouthPart(component);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleColorChange}>色を変更</button>

      <div className={styles.partContainer}>
        <div className={styles.partImage}>
          {/* 素体 */}
          <img src="/body/baseBody.jpg" alt="素体" className={styles.baseImg} />

          <div className={styles.hairPartPosition}>
            <div className={styles.displayHairPart}>{HairPart}</div>
          </div>
          <div className={styles.eyebrowPartposition}>{EyebrowPart}</div>
          <div className={styles.eyesPartposition}>{EyesPart}</div>
          <div className={styles.mouthPartposition}>
            {MouthPart}
            {/* <div className={styles.displayMouthPart}>{MouthPart}</div> */}
          </div>
        </div>

        {/* <div className={styles.checkButton}>
          <button onClick={checkDesign} disabled={isButtonDisabled}>
            けってい
          </button>
        </div> */}
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
          {hairPartComponentArr.map((component, index) => (
            <div
              key={index}
              className={`${styles.part} ${
                hairSelected === index ? styles.selected : ""
              }`}
              onClick={() => hairPartClick(index, component)}
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
          {eyebrowPartComponentArr.map((component, index) => (
            <div
              key={index}
              className={`${styles.part} ${
                eyebrowSelected === index ? styles.selected : ""
              }`}
              onClick={() => eyebrowPartClick(index, component)}
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
          {eyesPartComponentArr.map((component, index) => (
            <div
              key={index}
              className={`${styles.part} ${
                eyesSelected === index ? styles.selected : ""
              }`}
              onClick={() => eyesPartClick(index, component)}
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
          {mouthPartComponentArr.map((component, index) => (
            <div
              key={index}
              className={`${styles.part} ${
                mouthSelected === index ? styles.selected : ""
              }`}
              onClick={() => mouthPartClick(index, component)}
            >
              {component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
