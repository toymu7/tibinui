import { on } from "events";
import styles from "./Button.module.css";
import { Children } from "react";

type CustomButtonProps = {
  children?: string;
  onClick: () => void;
};
export function Button({ children, onClick }: CustomButtonProps) {
  return (
    <div>
      <Button onClick={onClick}>{children}</Button>
    </div>
  );
}
export function UpButton({ onClick }: CustomButtonProps) {
  return (
    <div className={styles.customBtnStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
        onClick={onClick}
      >
        <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
      </svg>
    </div>
  );
}
export function DownButton({ onClick }: CustomButtonProps) {
  return (
    <div className={styles.customBtnStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
        onClick={onClick}
      >
        <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
      </svg>
    </div>
  );
}
export function ExpandButton({ onClick }: CustomButtonProps) {
  return (
    <div className={styles.customBtnStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
        onClick={onClick}
      >
        <path d="m680-280-56-56 103-104H520v-80h207L624-624l56-56 200 200-200 200Zm-400 0L80-480l200-200 56 56-103 104h207v80H233l103 104-56 56Z" />
      </svg>
    </div>
  );
}
export function NarrowButton({ onClick }: CustomButtonProps) {
  return (
    <div className={styles.customBtnStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
        onClick={onClick}
      >
        <path d="m136-80-56-56 264-264H160v-80h320v320h-80v-184L136-80Zm344-400v-320h80v184l264-264 56 56-264 264h184v80H480Z" />
      </svg>
    </div>
  );
}
export function ScaleDownButton({ onClick }: CustomButtonProps) {
  return (
    <div className={styles.customBtnStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
        onClick={onClick}
      >
        <path d="m156-100-56-56 124-124H120v-80h240v240h-80v-104L156-100Zm648 0L680-224v104h-80v-240h240v80H736l124 124-56 56ZM120-600v-80h104L100-804l56-56 124 124v-104h80v240H120Zm480 0v-240h80v104l124-124 56 56-124 124h104v80H600Z" />
      </svg>
    </div>
  );
}
export function ScaleUpButton({ onClick }: CustomButtonProps) {
  return (
    <div className={styles.customBtnStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="100%"
        onClick={onClick}
      >
        <path d="M120-120v-240h80v104l124-124 56 56-124 124h104v80H120Zm480 0v-80h104L580-324l56-56 124 124v-104h80v240H600ZM324-580 200-704v104h-80v-240h240v80H256l124 124-56 56Zm312 0-56-56 124-124H600v-80h240v240h-80v-104L636-580Z" />
      </svg>
    </div>
  );
}
export function LeftRotateButton({ onClick }: CustomButtonProps) {
  return (
    <div className={styles.customBtnStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        onClick={onClick}
      >
        <path d="M19.885 5.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.074.1 2.992 2.993 2.664 7.684-.188 10.319l3.314 3.5c4.716-4.226 5.257-12.223.267-17.213z" />
      </svg>
    </div>
  );
}

export function RightRotateButton({ onClick }: CustomButtonProps) {
  return (
    <div className={styles.customBtnStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        onClick={onClick}
      >
        <path
          d="M4.115 5.515c4.617-4.618 12.056-4.676 16.756-.195l2.129-2.258v7.938h-7.484l2.066-2.191c-2.819-2.706-7.297-2.676-10.074.1-2.992 2.993-2.664 7.684.188 10.319l-3.314 3.5c-4.716-4.226-5.257-12.223-.267-17.213z"
          strokeWidth="0"
        />
      </svg>
    </div>
  );
}
