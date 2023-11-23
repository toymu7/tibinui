import React from "react";
import styles from "./test.module.css";

interface PartItemProps {
  id: number;
  src: string;
  selected: boolean;
  onClick: () => void;
}

export function PartItem({ id, src, selected, onClick }: PartItemProps) {
  const handleImageClick = () => {
    onClick(); // クリック時に親コンポーネントに画像データを通知
  };
  return (
    <div
      role="button"
      className={`${styles.partCard} ${
        selected ? styles["custom-border-selected"] : styles["custom-border"]
      }`}
      tabIndex={0}
      onClick={handleImageClick}
    >
      <img key={id} src={src} alt={`Image ${id}`} style={img} />
    </div>
  );
}

const img: React.CSSProperties = {
  width: "100%",
  height: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
};
