import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";

export const Markdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          const language = match ? match[1] : "plaintext";

          if (inline || !match) {
            // It's an inline code block like `const a = 1;`
            // Just render a basic <code> for inline usage:
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }

          // It's a fenced code block, e.g. ```js ... ```
          return (
            <CodeBlock
              language={language}
              filename={""}
              code={String(children).replace(/\n$/, "")}
            />
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
