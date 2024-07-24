import { Link } from "react-router-dom";
import Snowy from "@snowy-ui/react";
import CodeHighlighter from "../components/CodeHighlighter";
import { Tab, Tabs } from "../components/Tabs";

const code = `
npm install @snowy-ui/react styled-components
  `;

const Home = () => {
  return (
    <main>
      <Snowy in="h1" sx={{ fontSize: 50 }}>
        Snowy UI
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
      <Link to="/animation1">Go to Animation1</Link>
    </main>
  );
};

export default Home;
