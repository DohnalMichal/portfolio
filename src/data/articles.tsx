// TODO: Move to Strapi
export const ARTICLES = [
  {
    id: 1,
    date: "2024-04-10T00:00:00Z",
    title: "Operator Precedence of Nullish Coalescing and Ternary Operators",
    slug: "operator-precedence-nullish-coalescing-ternary",
    description:
      "Learn about how operator precedence affects the combination of nullish coalescing and ternary operators in JavaScript.",
  },
];

export const ARTICLE_CONTENTS: Record<string, string> = {
  "operator-precedence-nullish-coalescing-ternary":
    "# Operator Precedence of Nullish Coalescing and Ternary Operators\n\n## The Problem\n\nToday, I learned that you simply cannot combine the nullish coalescing operator (`??`) with the ternary operator (`? :`) without being cautious. Or rather, you can, but the evaluation may lead to results you don't expect.\n\n> **Important Note**: The issue I faced here was largely due to my incomplete knowledge of operator precedence. If you’re not familiar with how JavaScript decides which operations to evaluate first, you can easily end up with surprising behaviors. Understanding operator precedence is crucial for writing reliable code—and everyone should take time to learn it thoroughly!\n\n### Example\n\n```tsx\nlet result = 10 ?? true ? 20 : 30;\n```\n\nThis is a simplified example, but I initially expected that since `10` is not a nullish value (`null` or `undefined`), the statement would evaluate to `10`.\n\nHowever, it does not. It actually evaluates to `20`.\n\n## Why is That?\n\nThis happens because the [nullish coalescing operator (`??`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) has a higher [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) than the [conditional (ternary) operator (`? :`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). This means the `??` operator executes first.\n\nThe example essentially evaluates as follows:\n\n```tsx\nlet result = (10 ?? true) ? 20 : 30; // => 10 ? 20 : 30\n```\n\nSince `10` is a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value, the ternary operation (`10 ? 20 : 30`) evaluates to `20`.\n\n## The Solution\n\nTo achieve the expected result of `10`, you need to wrap the ternary operation in parentheses:\n\n```tsx\nlet result = 10 ?? (true ? 20 : 30); // result = 10\n```\n\n## The Importance of Operator Precedence\n\nAs mentioned, the unexpected outcome happened because the nullish coalescing operator was evaluated before the ternary operator, leading to a different result than anticipated. This highlights the significance of thoroughly understanding how JavaScript handles operator precedence. By knowing which operations occur first, you can write more predictable and maintainable code.\n\n## Summary\n\nCombining the nullish coalescing operator with the ternary operator in JavaScript can lead to unexpected results due to operator precedence. The nullish coalescing operator has a higher precedence and is executed first. To ensure the correct result, wrap the ternary operation in parentheses. Most importantly, make sure to deepen your knowledge of operator precedence to avoid similar pitfalls in the future!",
};

export function getArticleBySlug(slug: string) {
  // Combine data from ARTICLES and ARTICLE_CONTENTS
  const metadata = ARTICLES.find((article) => article.slug === slug);
  if (!metadata) return null;

  const content = ARTICLE_CONTENTS[slug] || "";
  return { ...metadata, content };
}
