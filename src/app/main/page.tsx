"use client";
import React, { useState, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import styles from "./test.module.css";
import { LeftArrow, RightArrow } from "./arrows";
import { PartCard } from "./partCard";
import localbodyImg from "@/body/basebody.png";
import Image from "next/image";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export default function App() {
  const [hairItems, setHairItems] = React.useState<
    { id: number; src: string }[]
  >([]);
  useEffect(() => {
    const externalData = [
      { id: 1, src: "/hair/hair01.png" },
      { id: 2, src: "/hair/hair01.png" },
      { id: 3, src: "/hair/hair01.png" },
      { id: 4, src: "/hair/hair01.png" },
      { id: 5, src: "/hair/hair01.png" },
      { id: 6, src: "/hair/hair01.png" },
      // 他の画像データ
    ];
    setHairItems(externalData);
  }, []); // 必要に応じてデータの取得方法を適切に設定
  const [eyesItems, setEyesItems] = React.useState<
    { id: number; src: string }[]
  >([]);
  useEffect(() => {
    const externalData = [
      { id: 1, src: "/eyes/eyes01.png" },
      { id: 2, src: "/eyes/eyes01.png" },
      { id: 3, src: "/eyes/eyes01.png" },
      { id: 4, src: "/eyes/eyes01.png" },
      { id: 5, src: "/eyes/eyes01.png" },
      { id: 6, src: "/eyes/eyes01.png" },
      // 他の画像データ
    ];
    setEyesItems(externalData);
  }, []); // 必要に応じてデータの取得方法を適切に設定
  const [eyeblowItems, setEyeblowItems] = React.useState<
    { id: number; src: string }[]
  >([]);
  useEffect(() => {
    const externalData = [
      { id: 1, src: "/eyebrow/eyebrow01.png" },
      { id: 2, src: "/eyebrow/eyebrow01.png" },
      { id: 3, src: "/eyebrow/eyebrow01.png" },
      { id: 4, src: "/eyebrow/eyebrow01.png" },
      { id: 5, src: "/eyebrow/eyebrow01.png" },
      { id: 6, src: "/eyebrow/eyebrow01.png" },
      // 他の画像データ
    ];
    setEyeblowItems(externalData);
  }, []); // 必要に応じてデータの取得方法を適切に設定
  const [mouthItems, setMouthItems] = React.useState<
    { id: number; src: string }[]
  >([]);
  useEffect(() => {
    const externalData = [
      { id: 1, src: "/mouth/mouth01.png" },
      { id: 2, src: "/mouth/mouth01.png" },
      { id: 3, src: "/mouth/mouth01.png" },
      { id: 4, src: "/mouth/mouth01.png" },
      { id: 5, src: "/mouth/mouth01.png" },
      { id: 6, src: "/mouth/mouth01.png" },
      // 他の画像データ
    ];
    setMouthItems(externalData);
  }, []); // 必要に応じてデータの取得方法を適切に設定
  const [hairSelected, setHairSelected] = React.useState<number>();
  const [eyeblowSelected, setEyeblowSelected] = React.useState<number>();
  const [eyesSelected, setEyesSelected] = React.useState<number>();
  const [mouthSelected, setMouthSelected] = React.useState<number>();
  // NOTE: for select item
  const hairPartClick = (imageId: number, imageSrc: string) => () => {
    setHairSelected(imageId);
    setSelectedHair(imageSrc);
  };
  const eyeblowPartClick = (itemId: number, imageSrc: string) => () => {
    setEyeblowSelected(itemId);
    setSelectedEyeblow(imageSrc);
  };
  const eyesPartClick = (itemId: number, imageSrc: string) => () => {
    setEyesSelected(itemId);
    setSelectedEyes(imageSrc);
  };
  const mouthPartClick = (itemId: number, imageSrc: string) => () => {
    setMouthSelected(itemId);
    setSelectedMouth(imageSrc);
  };
  const [visibleDiv, setVisibleDiv] = useState<string | null>(null);

  const showDiv = (divId: string) => {
    setVisibleDiv(divId === visibleDiv ? null : divId);
  };
  const [selectedHair, setSelectedHair] = useState<string | null>(null);
  const [selectedEyeblow, setSelectedEyeblow] = useState<string | null>(null);
  const [selectedEyes, setSelectedEyes] = useState<string | null>(null);
  const [selectedMouth, setSelectedMouth] = useState<string | null>(null);

  function PartSelectName() {
    return (
      <div className={styles.partsname}>
        <ul className={styles.ul}>
          <li onClick={() => showDiv("div1")}>かみのけ</li>
          <li onClick={() => showDiv("div2")}>まゆげ</li>
          <li onClick={() => showDiv("div3")}>め</li>
          <li onClick={() => showDiv("div4")}>くち</li>
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {selectedHair && (
          <div className={styles.hairPartposition}>
            <img
              src={selectedHair}
              alt="Selected HairPart"
              className={styles.hairPart}
            />
          </div>
        )}
        {selectedEyeblow && (
          <div className={styles.eyeblowPartposition}>
            <img
              src={selectedEyeblow}
              alt="Selected eyeblowPart"
              className={styles.eyeblowPart}
            />
          </div>
        )}
        {selectedEyes && (
          <div className={styles.eyesPartposition}>
            <img
              src={selectedEyes}
              alt="Selected eyeblowPart"
              className={styles.eyesPart}
            />
          </div>
        )}
        {selectedMouth && (
          <div className={styles.mouthPartposition}>
            <img
              src={selectedMouth}
              alt="Selected eyeblowPart"
              className={styles.mouthPart}
            />
          </div>
        )}
        <div>
          <Image
            src={localbodyImg}
            alt="素体"
            className={styles.baseImg}
          ></Image>
        </div>
        <PartSelectName />
        <div className={styles.partBackImg}>
          <div
            id="div1"
            className={`${styles.partContainer} ${
              visibleDiv === "div1" ? "visible" : "hidden"
            }`}
          >
            <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              onWheel={onWheel}
            >
              {hairItems.map(({ id, src }) => (
                <PartCard
                  id={id}
                  src={src}
                  selected={id === hairSelected}
                  onClick={hairPartClick(id, src)}
                />
              ))}
            </ScrollMenu>
          </div>
          <div
            id="div2"
            className={`${styles.partContainer} ${
              visibleDiv === "div2" ? "visible" : "hidden"
            }`}
          >
            <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              onWheel={onWheel}
            >
              {eyeblowItems.map(({ id, src }) => (
                <PartCard
                  id={id}
                  src={src}
                  selected={id === eyeblowSelected}
                  onClick={eyeblowPartClick(id, src)}
                />
              ))}
            </ScrollMenu>
          </div>
          <div
            id="div3"
            className={`${styles.partContainer} ${
              visibleDiv === "div3" ? "visible" : "hidden"
            }`}
          >
            <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              onWheel={onWheel}
            >
              {eyesItems.map(({ id, src }) => (
                <PartCard
                  id={id}
                  src={src}
                  selected={id === eyesSelected}
                  onClick={eyesPartClick(id, src)}
                />
              ))}
            </ScrollMenu>
          </div>
          <div
            id="div4"
            className={`${styles.partContainer} ${
              visibleDiv === "div4" ? "visible" : "hidden"
            }`}
          >
            <ScrollMenu
              LeftArrow={LeftArrow}
              RightArrow={RightArrow}
              onWheel={onWheel}
            >
              {mouthItems.map(({ id, src }) => (
                <PartCard
                  id={id}
                  src={src}
                  selected={id === mouthSelected}
                  onClick={mouthPartClick(id, src)}
                />
              ))}
            </ScrollMenu>
          </div>
        </div>
        <style jsx>
          {`
            /* 表示用のスタイル */
            .visible {
              display: block;
            }

            /* 非表示用のスタイル */
            .hidden {
              display: none;
            }
          `}
        </style>
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
