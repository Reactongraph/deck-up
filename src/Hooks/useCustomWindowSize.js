import { useState, useEffect } from "react";

function useCustomWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return windowSize;
}

export default useCustomWindowSize;
