import { Link } from "react-router-dom";
import Snowy from "@snowy-ui/react";
import CodeHighlighter from "../components/CodeHighlighter";
import { Tab, Tabs } from "../components/Tabs";

const code = `
npm install @snowy-ui/react styled-components
  `;

const codeMedia = `
const sm = "@media (max-width: 640px)";
const md = "@media (max-width: 768px)";
const lg = "@media (max-width: 1024px)";
const xl = "@media (max-width: 1280px)";
  
const Home = () => {
  return (
      <Snowy in="h2" sx={{ [md]: { fontSize: 24 } }}>
        Snowy UI
      </Snowy>
  );
};
  `;

const codePseudo = `
<Snowy in="h2" sx={{ "&:hover": { color: 'pink' } }}>
  Snowy UI
</Snowy>
  `;

const Home = () => {
  return (
    <Snowy
      in="main"
      sx={{
        position: "relative",
      }}
      melts={{
        exit: { opacity: 0, transition: { duration: 0.8 } },
        entry: { opacity: 0, transition: { duration: 0.8 } },
      }}
    >
      <Snowy
        in="h1"
        sx={{
          fontSize: 50,
          color: "aliceblue",
          width: 360,
          position: "relative",
          right: 12,
        }}
        melts={{
          exit: { rotateX: 720, scale: 0.8, transition: { duration: 0.8 } },
          entry: {
            rotateX: 720,
            scale: 1.2,
            opacity: 0,
            transition: { duration: 0.8 },
          },
        }}
      >
        ❄ Snowy UI ❄
      </Snowy>
      <h1>Installation</h1>
      <Tabs>
        <Tab>
          <CodeHighlighter code={code} language="tsx" />
        </Tab>
      </Tabs>
      integration styled-components wtih Next.js:{" "}
      <a href="https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components">
        Styling: CSS in JS | Next.js
      </a>
      <br />
      <h2>Animation Pattern Sampler</h2>
      <Link to="/animation1">Go to Animation1</Link>
      <Link to="/animation2">Animation2</Link>
      <Link to="/animation3">Animation3</Link>
      <h1>Media Query</h1>
      <Tabs>
        <Tab>
          <CodeHighlighter code={codeMedia} language="tsx" />
        </Tab>
      </Tabs>
      <h1>Pseudos</h1>
      <Tabs>
        <Tab>
          <CodeHighlighter code={codePseudo} language="tsx" />
        </Tab>
      </Tabs>
    </Snowy>
  );
};

export default Home;
