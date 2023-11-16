import React, { useState, forwardRef, useImperativeHandle } from "react";

const ChildComponent = forwardRef((props,ref) => {
  const [showText, setShowText] = useState(false);

  // useImperativeHandle hook allows to define a function based on ref, so we can call from parent using ref
  useImperativeHandle(ref, () => ({
    // we cant direclty use setShowText here, needs to create a function
    showTextFunc() {
      setShowText(!showText);
    },
  }));
  return (
    <div>
      <button>Button from child</button>
      <h2>ShowText Value : {showText?"True":"false"}</h2>
    </div>
  );
});

export default ChildComponent;
