export type Article = {
  id: number;
  slug: string;
  date: string;
  title: string;
  description: string;
};

// TODO: Move to Strapi
export const ARTICLES: Article[] = [
  {
    id: 1,
    date: "2024-04-10T00:00:00Z",
    title: "Operator Precedence of Nullish Coalescing and Ternary Operators",
    slug: "operator-precedence-nullish-coalescing-ternary",
    description:
      "Learn about how operator precedence affects the combination of nullish coalescing and ternary operators in JavaScript.",
  },
  {
    id: 2,
    date: "2024-07-15T00:00:00Z",
    title: "Preventing Text Overflow in Flex Layouts with Unknown Width",
    slug: "preventing-text-overflow-flex-layouts",
    description:
      "A quick solution to handle text overflow when flex items have unknown or dynamic widths.",
  },
];

export const ARTICLE_CONTENTS: Record<string, string> = {
  "operator-precedence-nullish-coalescing-ternary":
    "# Operator Precedence of Nullish Coalescing and Ternary Operators\n\n## The Problem\n\nToday, I learned that you simply cannot combine the nullish coalescing operator (`??`) with the ternary operator (`? :`) without being cautious. Or rather, you can, but the evaluation may lead to results you don't expect.\n\n> **Important Note**: The issue I faced here was largely due to my incomplete knowledge of operator precedence. If you’re not familiar with how JavaScript decides which operations to evaluate first, you can easily end up with surprising behaviors. Understanding operator precedence is crucial for writing reliable code—and everyone should take time to learn it thoroughly!\n\n### Example\n\n```tsx\nlet result = 10 ?? true ? 20 : 30;\n```\n\nThis is a simplified example, but I initially expected that since `10` is not a nullish value (`null` or `undefined`), the statement would evaluate to `10`.\n\nHowever, it does not. It actually evaluates to `20`.\n\n## Why is That?\n\nThis happens because the [nullish coalescing operator (`??`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) has a higher [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) than the [conditional (ternary) operator (`? :`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). This means the `??` operator executes first.\n\nThe example essentially evaluates as follows:\n\n```tsx\nlet result = (10 ?? true) ? 20 : 30; // => 10 ? 20 : 30\n```\n\nSince `10` is a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value, the ternary operation (`10 ? 20 : 30`) evaluates to `20`.\n\n## The Solution\n\nTo achieve the expected result of `10`, you need to wrap the ternary operation in parentheses:\n\n```tsx\nlet result = 10 ?? (true ? 20 : 30); // result = 10\n```\n\n## The Importance of Operator Precedence\n\nAs mentioned, the unexpected outcome happened because the nullish coalescing operator was evaluated before the ternary operator, leading to a different result than anticipated. This highlights the significance of thoroughly understanding how JavaScript handles operator precedence. By knowing which operations occur first, you can write more predictable and maintainable code.\n\n## Summary\n\nCombining the nullish coalescing operator with the ternary operator in JavaScript can lead to unexpected results due to operator precedence. The nullish coalescing operator has a higher precedence and is executed first. To ensure the correct result, wrap the ternary operation in parentheses. Most importantly, make sure to deepen your knowledge of operator precedence to avoid similar pitfalls in the future!",
  "preventing-text-overflow-flex-layouts":
    '# Preventing Text Overflow in Flex Layouts with Unknown Width\n\n## Overview\n\nWhen working with flex layouts, you might encounter text content that overflows its container, especially when the container width is unknown or varies based on dynamic content. A commonly used technique—sometimes referred to as a hack—can help mitigate these overflow issues:\n\n```css\n.flex-item {\n  flex-grow: 1; /* Allow the container to take available space */\n  min-width: 0; /* Prevent the container from expanding beyond its allowed width */\n}\n```\n\nSetting `flex-grow` allows items to expand to fill unused space, while `min-width: 0` ensures the container won’t grow so large that it forces other flex items (or the viewport) to resize in unexpected ways.\n\n## Why `min-width: 0`?\n\nBrowsers often assign a minimum width to flex items that is larger than zero, even if you don\'t explicitly set one. This can force items to take more space than you intend, leading to unpredictable text overflow or line breaks. By explicitly defining `min-width: 0`, you allow the flex item to shrink within the available space in a more predictable manner.\n\n## Examples\n\n### Example 1: A Simple Flex Layout with Overflowing Text\n\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .container {\n        display: flex;\n        width: 300px;\n        border: 1px solid #ccc;\n      }\n      .flex-item {\n        flex-grow: 1;\n        min-width: 0;\n        background: #f3f3f3;\n        padding: 8px;\n        margin: 4px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="flex-item">This is a very long text that might otherwise overflow beyond the box boundaries!</div>\n      <div class="flex-item">Another item</div>\n    </div>\n  </body>\n</html>\n```\n\nIn the code above:\n- The `.container` is set to a fixed width of `300px` to demonstrate the overflow behavior.\n- Each `.flex-item` uses `flex-grow` and `min-width: 0` to keep the text from overflowing.\n- `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` ensures that overflowing text is replaced with an ellipsis.\n\n### Example 2: Dynamic Width with Responsive Flex Layout\n\n```html\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <style>\n      .container {\n        display: flex;\n        max-width: 600px;\n        margin: 0 auto;\n        border: 1px solid #ddd;\n      }\n      .flex-item {\n        flex-grow: 1;\n        min-width: 0;\n        padding: 16px;\n        border-right: 1px solid #ddd;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .flex-item:last-child {\n        border-right: none;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>Responsive Flex Layout</h1>\n    <div class="container">\n      <div class="flex-item">Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n      <div class="flex-item">Item 2: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</div>\n      <div class="flex-item">Item 3: Praesent tincidunt purus id convallis viverra.</div>\n    </div>\n  </body>\n</html>\n```\n\nHere, the width of the container is capped at `600px`, but the design remains responsive. Each `.flex-item` can shrink or grow to accommodate changing viewport sizes, without overflowing text.\n\n## Conclusion\n\nUsing `flex-grow: 1;` and `min-width: 0;` is a straightforward, proven approach to manage text overflow in flex layouts with dynamic or unknown widths. While some developers refer to it as a hack, it\'s a well-established best practice for ensuring your design remains flexible and text remains legible without unintended overflow.',
};

export function getArticleBySlug(slug: string) {
  // Combine data from ARTICLES and ARTICLE_CONTENTS
  const metadata = ARTICLES.find((article) => article.slug === slug);
  if (!metadata) return null;

  const content = ARTICLE_CONTENTS[slug] || "";
  return { ...metadata, content };
}
