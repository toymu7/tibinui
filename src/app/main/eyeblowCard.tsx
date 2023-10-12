import React from "react";
import Image from "next/image";
import localeyebrowImg from "@/eyebrow/eyebrow01.png";
import styles from "./test.module.css";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function EyeblowCard({
  itemId,
  selected,
  onClick,
  title,
}: {
  itemId: string;
  selected: boolean;
  onClick: Function;
  title: string;
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      onClick={() => onClick()}
      role="button"
      style={{
        border: selected ? "2px solid blue" : "1px solid black",
        display: "inline-block",
        borderRadius: "5px",
        margin: "0 10px",
        width: "160px",
        height: "120px",
        paddingTop: "40px",
        padding: "20px",
        userSelect: "none",
        backgroundColor: "white",
      }}
      tabIndex={0}
      //   className="card"
      className={styles.gridItem}
    >
      <Image
        src={localeyebrowImg}
        alt="眉毛"
        className={styles.eyeblowImg}
      ></Image>
    </div>
  );
}
