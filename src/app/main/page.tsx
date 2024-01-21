import React, { useState, createContext } from "react";
import CreateDesign from "../create/page";
import DesignedList from "../designed/page";

export const App = () => {
  return (
    <>
      <CreateDesign />
      <DesignedList />
    </>
  );
};
