import React from "react";
import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="font-bold">My Project</span>,
  project: {
    link: "https://github.com/Vancrown/story",
  },
  docsRepositoryBase: "https://github.com/Vancrown/story/tree/main",
  footer: {
    content: <span>My Project Docs</span>,
  },
  feedback: {
    content: null,
  },
};

export default config;
