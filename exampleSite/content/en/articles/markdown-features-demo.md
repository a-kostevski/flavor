---
title: "Markdown Features Demo"
date: 2024-12-05
tags: ["markdown", "documentation"]
categories: ["reference"]
description: "A complete reference for all markdown features and shortcodes available in this theme."
toc: true
---

This article demonstrates all the markdown and shortcode features available in the Flavor theme.

## Text Formatting

Standard markdown formatting works as expected:

- **Bold text** with `**bold**`
- _Italic text_ with `*italic*`
- ~~Strikethrough~~ with `~~strikethrough~~`
- `Inline code` with backticks
- [Links](https://example.com) with `[text](url)`

## Wikilinks

Link to other notes using double brackets:

- [[The Atomic Notes Principle]] - Link by title
- [[atomic notes|Atomic Notes]] - Custom display text
- [[Note-Taking]] - Link to MOC pages

Or use the shortcode directly: {{< wikilink "Evergreen Notes" >}}

## Admonitions

Five types of admonition callouts:

{{< admonition type="note" title="Note" >}}
General information or clarification.
{{< /admonition >}}

{{< admonition type="tip" title="Tip" >}}
Helpful suggestions or best practices.
{{< /admonition >}}

{{< admonition type="info" title="Info" >}}
Additional context or background information.
{{< /admonition >}}

{{< admonition type="warning" title="Warning" >}}
Important cautions to be aware of.
{{< /admonition >}}

{{< admonition type="danger" title="Danger" >}}
Critical warnings about potential problems.
{{< /admonition >}}

## Sidenotes

rkdown
Add margin notes that appear alongside content.{{< sidenote >}}This is a sidenote. On wide screens, it floats in the margin. On narrow screens, it appears inline.{{< /sidenote >}}

Sidenotes are great for tangential information that might interrupt the main flow.

## Spoilers

Hide content until the reader clicks to reveal:

{{< spoiler title="Click to reveal answer" >}}
The answer is 42. Sidenotes and spoilers can be combined for progressive disclosure.
{{< /spoiler >}}

## Code Blocks

Syntax highlighting for many languages:

```python
def fibonacci(n: int) -> int:
    """Calculate the nth Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
n
```

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
```

## Tables

| Feature   | Status   | Notes                            |
| --------- | -------- | -------------------------------- |
| Wikilinks | Complete | Both `[[]]` and shortcode syntax |
| Backlinks | Complete | Auto-detected with context       |
| Graph     | Complete | D3.js force-directed             |
| Search    | Complete | Fuse.js fuzzy search             |
| Dark Mode | Complete | Auto or manual toggle            |

## Blockquotes

> "The slip-box is designed to present you with ideas you have already forgotten."
>
> — Sönke Ahrens, _How to Take Smart Notes_

## Lists

Ordered lists:

1. First item
2. Second item
3. Third item

Unordered lists:

- Item one
- Item two
  - Nested item
  - Another nested item
- Item three

Task lists:

- [x] Set up knowledge base
- [x] Create initial notes
- [ ] Add more permanent notes
- [ ] Review and refine

## Images

Images are supported with standard markdown syntax. Add them to the `static` folder or use external URLs.

## Horizontal Rules

Use `---` to create a horizontal rule:

---

## Transclusion

Embed content from another note:

{{< transclude "The Atomic Notes Principle" >}}

## Math (if enabled)

Inline math: $E = mc^2$

Block math:

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

## Footnotes

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.

## Conclusion

This theme supports a rich set of markdown features designed for knowledge management. Combine them to create well-structured, interconnected content.

See [[Note-Taking]] for the broader system these features support.
