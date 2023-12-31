import React, { useState, useRef } from "react";
import style from "./Color.module.css";

interface ColorPickerProps {
  onColorChange: (color: string) => void;
}

export function ColorPicker({ onColorChange }: ColorPickerProps) {
  const [selectedColor, setSelectedColor] = useState<string>("#000000");
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    setSelectedColor(color);
    onColorChange(color); // 親コンポーネントに選択された色を伝える
  };

  const handleImageClick = () => {
    if (colorPickerRef.current) {
      colorPickerRef.current.click();
    }
  };

  return (
    <div>
      <img
        src={"/assets/color-palette.png"}
        className={style.img}
        alt="color-palette"
        onClick={handleImageClick}
      />
      <input
        type="color"
        ref={colorPickerRef}
        onChange={handleColorChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
