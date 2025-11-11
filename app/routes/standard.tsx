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
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Language Standard
        </h1>
        <div className="max-w-4xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
          <p className="text-center text-gray-600 dark:text-gray-400">
            Content coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
