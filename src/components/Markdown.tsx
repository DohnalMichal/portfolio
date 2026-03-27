import ReactMarkdown, { type Components } from "react-markdown";
import { CodeBlock } from "./CodeBlock";

const MARKDOWN_COMPONENTS: Components = {
  code({ className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");

    if (!match) {
      // Inline code — no language class present
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    // Fenced code block — always has a language-xxx className
    return (
      <CodeBlock
        language={match[1]}
        filename=""
        code={String(children).replace(/\n$/, "")}
      />
    );
  },
};

export const Markdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown components={MARKDOWN_COMPONENTS}>{content}</ReactMarkdown>
  );
};
