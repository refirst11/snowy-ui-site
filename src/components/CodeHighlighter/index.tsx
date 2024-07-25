import React, { useLayoutEffect, useState } from "react";
import { createHighlighter } from "shiki";

type CodeHighlighterProps = {
  code: string;
  language: string;
  theme?: string;
};

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  code,
  language,
  theme = "aurora-x",
}) => {
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
      setHighlightedCode(html);
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
  return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
};

export default CodeHighlighter;
