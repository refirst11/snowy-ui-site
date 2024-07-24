import { Link } from "react-router-dom";
import CodeHighlighter from "../components/CodeHighlighter";
import { Tab, Tabs } from "../components/Tabs";
import Snowy from "@snowy-ui/react";

const code = `
<Snowy 
  in="div" 
  melts={{
    exit: { opacity: 0, y: -40, transition: { duration: 0.2 } },
    entry: { opacity: 0, y: -40, transition: { duration: 1 } },
  }}>
  Snowy UI
</Snowy>
  `;

const Animation1 = () => {
  return (
    <main>
      <Snowy
        in="div"
        melts={{
          exit: { opacity: 0, y: -40, transition: { duration: 0.2 } },
          entry: { opacity: 0, y: -40, transition: { duration: 1 } },
        }}
      >
        <h1>Animation1 Page</h1>
        <Tabs>
          <Tab>
            <CodeHighlighter code={code} language="tsx" />
          </Tab>
        </Tabs>
      </Snowy>
      <Link to="/">Go to Home</Link>
    </main>
  );
};

export default Animation1;
