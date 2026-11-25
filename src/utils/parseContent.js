// بتحوّل نص المقال لقايمة بلوكات: عنوان فرعي أو فقرة
export function parseContent(content) {
  let headingIndex = 0;

  return content
    .split("\n\n")
    .map((block) =>
      block.startsWith("## ")
        ? {
            type: "heading",
            text: block.replace("## ", ""),
            id: `section-${headingIndex++}`,
          }
        : { type: "paragraph", text: block },
    );
}

// بترجّع العناوين بس (لمحتويات المقال)
export function getHeadings(content) {
  return parseContent(content).filter((block) => block.type === "heading");
}
