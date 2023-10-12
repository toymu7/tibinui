import React from "react";
import Image from "next/image";
import localhairImg from "@/hair/hair.png";
import styles from "./test.module.css";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function HairCard({
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
      // className={`${styles.partFrame} ${selected ? styles.selectedFrame : ''}`}
      style={{
        border: selected ? "2px solid blue" : "1px solid black",
        borderRadius: "5px",
        display: "inline-block",
        margin: "0 10px",
        width: "160px",
        height: "120px",
        padding: "10px",
        userSelect: "none",
        backgroundColor: "white",
      }}
      tabIndex={0}
    >
      <Image src={localhairImg} alt="髪" className={styles.img}></Image>
    </div>
  );
}
