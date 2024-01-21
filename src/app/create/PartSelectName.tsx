import React from "react";
import styles from "./test.module.css";

/**
 *
 * @param props
 * @returns @type {string} 活性化させるパーツ要素
 */
export default function PartSelectName(props: any) {
  const showDiv = (divId: string) => {
    // 親コンポーネントに表示する要素情報を渡す
    props.onDisplayElement(divId);
  };
  return (
    <ul className={styles.ul}>
      <li onClick={() => showDiv("hairPart")}>かみのけ</li>
      <li onClick={() => showDiv("eyeBrowPart")}>まゆげ</li>
      <li onClick={() => showDiv("eyesPart")}>め</li>
      <li onClick={() => showDiv("mouthPart")}>くち</li>
    </ul>
  );
}
