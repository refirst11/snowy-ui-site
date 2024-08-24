import { Link } from "react-router-dom";
import CodeHighlighter from "../components/CodeHighlighter";
import { Tab, Tabs } from "../components/Tabs";
import Snowy from "@snowy-ui/react";

const code = `
<Snowy
  in="main"
  melts={{
    exit: { opacity: 0, scale: 1.07, transition: { duration: 0.2 } },
    entry: { opacity: 0, scale: 0.93, transition: { duration: 0.8 } },
  }}
>
  Snowy UI
</Snowy>
  `;

const Animation2 = () => {
  return (
    <Snowy
      in="main"
      melts={{
        exit: { opacity: 0, scale: 1.07, transition: { duration: 0.2 } },
        entry: { opacity: 0, scale: 0.93, transition: { duration: 0.8 } },
      }}
      sx={{
        zIndex: 2,
        position: "relative",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Snowy
        in="div"
        sx={{
          position: "absolute",
          top: "calc(50% - 24px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      >
        <h1>Animation2 Scale In Out</h1>
        <Tabs>
          <Tab>
            <CodeHighlighter code={code} language="tsx" />
          </Tab>
        </Tabs>
        <Link to="/">Go to Home</Link>
      </Snowy>
    </Snowy>
  );
};

export default Animation2;
