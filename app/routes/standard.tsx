import type { Route } from "./+types/standard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Language Standard - LengaLabs.org" },
    {
      name: "description",
      content:
        "Explore the LengaLabs language standard for AST-based code representation.",
    },
  ];
}

export default function Standard() {
  return (
    <div className="min-h-screen bg-brand-50 dark:bg-surface-dark">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
          Language Standard
        </h1>
        <div className="max-w-4xl mx-auto bg-surface/60 dark:bg-surface-dark-muted/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 dark:border-border-dark/50">
          <p className="text-center text-foreground-subtle dark:text-foreground-dark-subtle">
            Content coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
