import { Route, Routes } from "react-router-dom";
import Installation from "./pages/Installation";
import Animation1 from "./pages/Animation1";
import Animation2 from "./pages/Animation2";
import Animation3 from "./pages/Animation3";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const element = document.querySelector("body");

    if (element) {
      element.className = "background_01";
    }
    (function () {
      const COUNT = 200;
      const masthead = document.querySelector(
        ".background_01"
      ) as HTMLElement | null;
      if (!masthead) return;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      if (!ctx) return;

      let width = masthead.clientWidth;
      let height = masthead.clientHeight;
      let active = false;

      function onResize() {
        width = masthead?.clientWidth as number;
        height = masthead?.clientHeight as number;
        canvas.width = width;
        canvas.height = height;
        ctx.fillStyle = "#FFF";

        const wasActive = active;
        active = width > 200;

        if (!wasActive && active) requestAnimationFrame(update);
      }

      class Snowflake {
        x: number;
        y: number;
        vy: number;
        vx: number;
        r: number;
        o: number;

        constructor() {
          this.x = 0;
          this.y = 0;
          this.vy = 0;
          this.vx = 0;
          this.r = 0;
          this.o = 0;

          this.reset();
        }

        reset() {
          this.x = Math.random() * width;
          this.y = Math.random() * -height;
          this.vy = 0.5 + Math.random() * 2;
          this.vx = 0.3 - Math.random();
          this.r = 0.5 + Math.random() * 1.5;
          this.o = 0.3 + Math.random() * 0.5;
        }
      }

      canvas.style.position = "absolute";
      canvas.style.left = canvas.style.top = "0";

      const snowflakes: Snowflake[] = [];
      for (let i = 0; i < COUNT; i++) {
        const snowflake = new Snowflake();
        snowflakes.push(snowflake);
      }

      function update() {
        ctx.clearRect(0, 0, width, height);

        if (!active) return;

        snowflakes.forEach((snowflake) => {
          snowflake.y += snowflake.vy;
          snowflake.x += snowflake.vx;

          ctx.globalAlpha = snowflake.o;
          ctx.beginPath();
          ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
          ctx.closePath();
          ctx.fill();

          if (snowflake.y > height) {
            snowflake.reset();
          }
        });

        requestAnimFrame(update);
      }

      const requestAnimFrame = (() => {
        return (
          window.requestAnimationFrame ||
          function (callback: FrameRequestCallback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();

      onResize();
      window.addEventListener("resize", onResize);

      masthead.appendChild(canvas);
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Installation />} />
      <Route path="/animation1" element={<Animation1 />} />
      <Route path="/animation2" element={<Animation2 />} />
      <Route path="/animation3" element={<Animation3 />} />
    </Routes>
  );
};

export default App;
