"use client";

import React, { ReactNode, useState, useRef } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import styles from "./styles.module.css";

type TabsProps = {
  children: ReactNode;
  items?: string[];
};

export const Tabs = ({ items, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setCopied(false);
  };

  const handleCopy = () => {
    if (codeRef.current) {
      const text = codeRef.current.innerText;
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 800);
      });
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        {items?.map((item, index) => (
          <button
            style={{
              borderBottom:
                activeTab === index ? "solid 2px lightblue" : "white",
              color: activeTab === index ? "skyblue" : "var(--color-heading)",
            }}
            className={styles.button_initialize}
            key={index}
            onClick={() => handleTabClick(index)}
          >
            {item}
          </button>
        ))}
        <div className={styles.tooltipWrapper}>
          <button
            onClick={handleCopy}
            onMouseEnter={() => {
              setVisible(true);
              setShowTooltip(true);
            }}
            onMouseLeave={() => {
              setVisible(false);
              setShowTooltip(false);
            }}
            className={`${
              copied
                ? styles.noactive + " " + styles.copyButton
                : styles.active + " " + styles.copyButton
            } ${visible ? styles.visible : styles.hidden}`}
          >
            <div className={styles.icon_position}>
              {copied ? (
                <FiCheck size={16} color="#555" className={styles.noactive} />
              ) : (
                <FiCopy size={16} color="gray" className={styles.active} />
              )}
            </div>
          </button>
          {showTooltip && (
            <div className={styles.tooltip}>
              {copied ? "Copied!" : "Copy to clipboard"}
            </div>
          )}
        </div>
      </div>
      <div
        ref={codeRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className={styles.code_box}
      >
        {React.Children.toArray(children)[activeTab]}
      </div>
    </>
  );
};

export const Tab = ({ children }: { children: ReactNode }) => <>{children}</>;
