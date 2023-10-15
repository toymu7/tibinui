import React from "react";
import styles from "./test.module.css";

interface partCardProps {
    id: number;
    src: string;
    selected: boolean;
    onClick: () => void;
}

export function PartCard({ id, src, selected, onClick }: partCardProps) {
    const handleImageClick = () => {
        onClick(); // クリック時に親コンポーネントに画像データを通知
    };
    return (
        <div
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
            onClick={handleImageClick}
        >
            <img
                key={id}
                src={src}
                alt={`Image ${id}`}
                className={styles.img}
            />
        </div>
    );
}
