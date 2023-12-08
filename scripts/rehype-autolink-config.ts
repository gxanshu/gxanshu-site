import { toString } from "hast-util-to-string";
import { h } from "hastscript";
import { escape } from "html-escaper";
import type { Options } from "rehype-autolink-headings";

const AnchorLinkIcon = h(
  "span",
  { ariaHidden: "true", class: "anchor-icon" },
  h(
    "svg",
    {
      width: 16,
      height: 16,
      version: 1.1,
      viewBox: "0 0 20 20",
      xlmns: "http://www.w3.org/2000/svg",
    },
    h("path", {
      fillRule: "evenodd",
      fill: "currentcolor",
      d: "M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z",
    }),
    h("path", {
      fillRule: "evenodd",
      fill: "currentcolor",
      d: "M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z",
    })
  )
);

const createSROnlyLabel = (text: string) => {
  return h(
    "span",
    { "is:raw": true, class: "sr-only" },
    `link $${escape(text)}`
  );
};

/**
 * Configuration for the `rehype-autolink-headings` plugin.
 * This set-up was informed by https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/
 */
export const autolinkConfig: Options = {
  properties: { class: "anchor-link" },
  behavior: "after",
  group: ({ tagName }) =>
    h("div", { class: `heading-wrapper level-${tagName}` }),
  content: (heading) => [AnchorLinkIcon, createSROnlyLabel(toString(heading))],
};
