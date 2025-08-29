import { useRef, useEffect } from "react";
import styles from "./Bubbles.module.css";

const generateRandomHexColor = () => {
  let randomNumber = Math.floor(Math.random() * 16777215);
  let hexColor = randomNumber.toString(16);
  hexColor = hexColor.padStart(6, '0');
  return `#${hexColor.toUpperCase()}`;
}

const Bubbles = () => {
  const wrapperRef = useRef(null);
  const bubbleLifeTime = 20;
  const noOfBubbles = 100;
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    function createCircle() {
      const circle = document.createElement("div");
      circle.classList.add(styles.circle);
      circle.style.backgroundColor = generateRandomHexColor();
      circle.style.animationDelay = Math.random() * bubbleLifeTime + "s";

      const side = 5 + Math.floor(Math.random() * 5) + "px";
      circle.style.width = side;
      circle.style.height = side;

      return circle;
    }

    function createBubble() {
      const circleContainer = document.createElement("div");
      circleContainer.classList.add(styles.circle_container);
      circleContainer.style.transform =
        "rotate(" + Math.floor(Math.random() * 360) + "deg)";

      const circle = createCircle();
      circleContainer.appendChild(circle);

      return circleContainer;
    }

    function init() {
      for (let i = 0; i < noOfBubbles; i++) {
        const bubble = createBubble();
        wrapper.appendChild(bubble);
      }
    }

    init();

    return () => {
      wrapper.innerHTML = "";
    };
  }, []);

  return <div ref={wrapperRef} className={styles.bubblesWrapper}></div>
};

export default Bubbles;
