"use client";
import React, { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import styles from "./test.module.css";
import { LeftArrow, RightArrow } from "./arrows";
import { HairCard } from "./hairCard";
import { EyeblowCard } from "./eyeblowCard";
import { EyesCard } from "./eyesCard";
import { MouthCard } from "./mouthCard";
import { log } from "console";
import localbodyImg from "@/body/basebody.png";
import Image from "next/image";

// NOTE: embrace power of CSS flexbox!
// import "./hideScrollbar.css";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "Part";
const getId = (index: number) => `${elemPrefix}${index}`;
const getHairId = (index: number) => `${elemPrefix}${index}`;

// const [hairItems] = React.useState(getHairItems);

export default function App() {
  const getItems = () =>
    Array(20)
      .fill(0)
      .map((_, ind) => ({ id: getId(ind) }));
  const [items] = React.useState(getItems);
  const [hairSelected, setHairSelected] = React.useState<string>("");
  const [eyeblowSelected, setEyeblowSelected] = React.useState<string>("");
  const [eyesSelected, setEyesSelected] = React.useState<string>("");
  const [mouthSelected, setMouthSelected] = React.useState<string>("");

  console.log(hairSelected);

  // NOTE: for select item
  const handleHairItemClick = (itemId: string) => () => setHairSelected(itemId);
  const handleEyeblowItemClick = (itemId: string) => () =>
    setEyeblowSelected(itemId);
  const handleEyesItemClick = (itemId: string) => () => setEyesSelected(itemId);
  const handleMouthItemClick = (itemId: string) => () =>
    setMouthSelected(itemId);
  const [visibleDiv, setVisibleDiv] = useState<string | null>(null);

  const showDiv = (divId: string) => {
    setVisibleDiv(divId === visibleDiv ? null : divId);
  };

  // const getHairItems = () =>
  //   Array(20)
  //     .fill(0)
  //     .map((_, ind) => ({ hairId: getHairId(ind) }));

  function PartSelectName() {
    const handleClick = () => {
      alert("a");
    };
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
              {items.map(({ id }) => (
                <HairCard
                  title={id}
                  itemId={id} // NOTE: itemId is required for track items
                  key={id}
                  onClick={handleHairItemClick(id)}
                  selected={id === hairSelected}
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
              {items.map(({ id }) => (
                <EyeblowCard
                  title={id}
                  itemId={id} // NOTE: itemId is required for track items
                  key={id}
                  onClick={handleEyeblowItemClick(id)}
                  selected={id === eyeblowSelected}
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
              {items.map(({ id }) => (
                <EyesCard
                  title={id}
                  itemId={id} // NOTE: itemId is required for track items
                  key={id}
                  onClick={handleEyesItemClick(id)}
                  selected={id === eyesSelected}
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
              {items.map(({ id }) => (
                <MouthCard
                  title={id}
                  itemId={id} // NOTE: itemId is required for track items
                  key={id}
                  onClick={handleMouthItemClick(id)}
                  selected={id === mouthSelected}
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
