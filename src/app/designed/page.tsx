"use client";
import React, { useState, useContext } from "react";
import styles from "./designed.module.css";

import { useRouter } from "next/navigation";
import { useDesigned } from "./Designed.hook";
import { useDesignedPartClick } from "./PartClick.hook";

export default function DesignedList() {
  const router = useRouter();

  const { designedArr, setDesinged } = useDesigned();
  const { designedPart, designedPartClick } = useDesignedPartClick();
  // デザイン済みを取得
  const getDesingedData = async (request: number) => {
    console.log("request", request);
    // パーツ取得
    const resDesinged = await fetch("http://localhost:3000/api/designed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: request,
      }),
      cache: "no-store",
    });
    const designedData = await resDesinged.json();
    if (designedData.token) {
      setDesinged(designedData.data);
    }
  };
  // デザイン済み編集
  const editDesigned = () => {
    if (designedPart != null) {
      const id = designedPart.bodyId;
      router.push(`/${id}/editDesign`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.partContainer}>
        <div className={styles.leftMenu}></div>
        <div className={styles.partImage}>
          {/* 素体 */}
          <img src="/body/baseBody.jpg" alt="素体" className={styles.baseImg} />
          <div className={styles.hairPartPosition}>
            <div className={styles.displayHairPart}>{designedPart.hair}</div>
          </div>
          <div className={styles.eyebrowPartposition}>
            {designedPart.eyebrows}
          </div>
          <div className={styles.eyesPartposition}>{designedPart.eyes}</div>
          <div className={styles.mouthPartposition}>
            <div className={styles.displayMouthPart}>{designedPart.mouth}</div>
          </div>
        </div>
        <div className={styles.rightMenu}>
          <div className={styles.pre}></div>
          <div className={styles.partSetting}>
            <button onClick={() => getDesingedData(1)}>データ取得</button>
            <button onClick={editDesigned}>編集</button>
            {/* <button onClick={() => onSubmit(partIds)}>決定</button> */}
          </div>
        </div>
      </div>

      <div className={styles.partListContainer}>
        {/* <div className={styles.designedPart}> */}
        {designedArr.map((body, index) => (
          <div
            key={index}
            className={styles.designedPart}
            onClick={() => designedPartClick(body)}
          >
            <React.Fragment key={index}>
              <div className={styles.hair}>{body.hair}</div>
              <div className={styles.eyebrows}>{body.eyebrows}</div>
              <div className={styles.eyes}>{body.eyes}</div>
              <div className={styles.mouth}>{body.mouth}</div>
            </React.Fragment>
            <img
              src="/body/baseBody.jpg"
              alt="素体"
              className={styles.baseBody}
            />
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}
