import React, { useLayoutEffect, useState } from "react";
import { createHighlighter } from "shiki";

type CodeHighlighterProps = {
  code: string;
  language: string;
  theme?: string;
};

const CodeHighlighter = ({
  code,
  language,
  theme = "snazzy-light",
}: CodeHighlighterProps) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useLayoutEffect(() => {
    const highlightCode = async () => {
      const highlighter = await createHighlighter({
        langs: [language],
        themes: [theme],
      });
      const html = highlighter.codeToHtml(code, {
        lang: language,
        theme: theme,
      });

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const preElement = doc.querySelector("pre");
      const codeElement = preElement ? preElement.innerHTML : code;

      setHighlightedCode(codeElement);
    };

    highlightCode();
  }, [code, language, theme]);

  if (!highlightedCode) {
    return (
      <pre>
        <code>{code}</code>
      </pre>
    );
  }

  return <pre dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
};

export default CodeHighlighter;
