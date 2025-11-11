import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LengaLabs.org - Write Code, Not Text" },
    {
      name: "description",
      content:
        "Open source organization developing a revolutionary AST-based standard for source code representation. Replacing plain text with intelligent, structure-aware code formats.",
    },
    {
      name: "keywords",
      content:
        "AST, source code, programming language, code representation, open source, LengaLabs",
    },
    { property: "og:title", content: "LengaLabs.org - Write Code, Not Text" },
    {
      property: "og:description",
      content:
        "Revolutionary AST-based standard for source code representation",
    },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return <Welcome />;
}
