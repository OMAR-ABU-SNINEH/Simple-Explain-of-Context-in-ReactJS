import React, { useEffect, useRef } from "react";

function Input() {
  const theRef = useRef(null);
  useEffect(() => {
    console.log("hahahaha");
    theRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={theRef} />
    </div>
  );
}

export default Input;
