"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useId, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
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
  const id = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabsExist = tabs.length > 0;
  const tabId = (index: number) => `${id}-tab-${index}`;
  const panelId = `${id}-panel`;

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

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex: number | null = null;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      newIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      newIndex = (index + 1) % tabs.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      newIndex = tabs.length - 1;
    }

    if (newIndex !== null) {
      setActiveTab(newIndex);
      tabRefs.current[newIndex]?.focus();
    }
  };

  const Highlighter = ({
    activeLanguage,
    activeCode,
    activeHighlightLines,
  }: {
    activeLanguage: string;
    activeCode: string | undefined;
    activeHighlightLines: number[];
  }) => (
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
  );

  const CopyButton = () => (
    <button
      type="button"
      aria-label={copied ? "Copied!" : "Copy code to clipboard"}
      onClick={copyToClipboard}
      className="font-sans flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-gray-200"
    >
      {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
    </button>
  );

  return (
    <div className={"relative w-full rounded-lg p-4 font-mono text-sm"}>
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex items-center justify-between">
            <div
              role="tablist"
              aria-label={`${activeLanguage} code examples`}
              className="flex overflow-x-auto"
            >
              {tabs.map((tab, index) => (
                <button
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={tabId(index)}
                  aria-selected={activeTab === index}
                  aria-controls={panelId}
                  tabIndex={activeTab === index ? 0 : -1}
                  key={tab.name}
                  onClick={() => setActiveTab(index)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  className={cn(
                    "font-sans !py-2 px-3 text-xs transition-colors",
                    activeTab === index
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200",
                  )}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <CopyButton />
          </div>
        )}
        {!tabsExist && (
          <div className="flex items-center justify-between py-2">
            {filename && (
              <div className="text-xs text-gray-400">{filename}</div>
            )}
            <div className="ml-auto">
              <CopyButton />
            </div>
          </div>
        )}
      </div>

      {tabsExist ? (
        // biome-ignore lint/a11y/noNoninteractiveTabindex: tabpanel should be focusable per ARIA APG tabs pattern
        <div id={panelId} role="tabpanel" aria-labelledby={tabId(activeTab)} tabIndex={0}>
          <Highlighter
            activeLanguage={activeLanguage}
            activeCode={activeCode}
            activeHighlightLines={activeHighlightLines}
          />
        </div>
      ) : (
        <section
          aria-label={`${activeLanguage}${filename ? ` — ${filename}` : ""} code`}
        >
          <Highlighter
            activeLanguage={activeLanguage}
            activeCode={activeCode}
            activeHighlightLines={activeHighlightLines}
          />
        </section>
      )}
    </div>
  );
};
