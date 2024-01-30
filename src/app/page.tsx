"use client";

import { Button } from "@/components";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <Button
        colorScheme="primary"
        size="medium"
        onClick={() => console.log("Clicked!")}
      >
        Primary Button
      </Button>
      <Button colorScheme="danger" size="small">
        Danger Button
      </Button>
      <Button colorScheme="success" size="large" isDisabled>
        Disabled Success Button
      </Button>
    </div>
  );
};

export default App;
