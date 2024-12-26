"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "@/utils/cn";

type CodeBlockBaseProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
};

type SingleCodeProps = {
  code: string;
  tabs?: never;
};

type TabbedCodeProps = {
  code?: never;
  tabs: Array<{
    name: string;
    code: string;
    language?: string;
    highlightLines?: number[];
  }>;
};

export type CodeBlockProps = CodeBlockBaseProps &
  (SingleCodeProps | TabbedCodeProps);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;

    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;

  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;

  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  return (
    <div className={"relative w-full rounded-lg p-4 font-mono text-sm"}>
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "!py-2 px-3 font-sans text-xs transition-colors",
                  activeTab === index
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200",
                )}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex items-center justify-between py-2">
            <div className="text-xs text-gray-400">{filename}</div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 font-sans text-xs text-gray-400 transition-colors hover:text-gray-200"
            >
              {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            </button>
          </div>
        )}
      </div>
      <SyntaxHighlighter
        language={activeLanguage}
        style={{ ...atomDark }}
        customStyle={{
          margin: 0,
          padding: 0,
          background: "transparent",
          fontSize: "0.875rem", // text-sm equivalent
          fontFamily: "Menlo, Consolas, monospace",
        }}
        wrapLines={true}
        showLineNumbers={true}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber)
              ? "rgba(255,255,255,0.1)"
              : "transparent",
            display: "block",
            width: "100%",
          },
        })}
        codeTagProps={{ style: { fontFamily: "Menlo, Consolas, monospace" } }}
        PreTag="div"
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  );
};
