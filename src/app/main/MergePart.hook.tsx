import { useEffect } from "react";
import React from "react";

export const usePartsEffect = (
  parts: any,
  setParts: any,
  PartStyles: any,
  activePartName: string
) => {
  useEffect(() => {
    if (parts[activePartName] != undefined) {
      setParts((prevParts: any) => ({
        ...prevParts,
        [activePartName]: React.cloneElement(parts[activePartName], {
          styleProps: PartStyles[`${activePartName}Style`],
        }),
      }));
    }
  }, [PartStyles]);
};
