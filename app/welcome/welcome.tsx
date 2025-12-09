import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import logoUrl from "./logo.png";

const getFeatures = (t: any) => [
  {
    title: t("features.astFormat.title"),
    description: t("features.astFormat.description"),
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: t("features.intelligentEditing.title"),
    description: t("features.intelligentEditing.description"),
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: t("features.universalStandard.title"),
    description: t("features.universalStandard.description"),
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
];

const getResources = (t: any) => [
  {
    href: "https://github.com/lengalabs",
    text: t("resources.githubRepo"),
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  // {
  //   href: "/standard",
  //   text: t("resources.languageStandard"),
  //   icon: (
  //     <svg
  //       className="w-6 h-6"
  //       fill="none"
  //       stroke="currentColor"
  //       viewBox="0 0 24 24"
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth={2}
  //         d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  //       />
  //     </svg>
  //   ),
  // },
  {
    href: "https://discord.gg/ZGNFKWDM",
    text: t("resources.discordCommunity"),
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
];

export function Welcome() {
  const { t } = useTranslation();
  const features = getFeatures(t);
  const resources = getResources(t);

  return (
    <main className="min-h-screen bg-brand-50 dark:bg-surface-dark">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 max-w-6xl mx-auto mb-8">
          <div className="max-w-3xl w-full">
            <div className="mb-8 text-left">
              <h1 className="text-6xl font-bold mb-4 text-brand-600 dark:text-brand-50 text-left">
                {t("common.title")}
              </h1>
              <div className="w-24 h-1 bg-brand-600 dark:bg-brand-300 mb-6"></div>
              <p className="text-2xl font-semibold text-foreground-muted dark:text-foreground-dark-muted mb-6 text-left">
                {t("common.motto")}
              </p>
              <p className="text-lg text-foreground-muted dark:text-foreground-dark-muted leading-relaxed text-left">
                {t("hero.description")}
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mb-16">
              {/* <Link
                to="/standard"
                className="px-8 py-3 bg-brand-600 text-foreground-inverse font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-center hover:bg-brand-500 dark:bg-brand-500 dark:hover:bg-brand-300"
              >
                {t("common.exploreStandard")}
              </Link> */}
              <a
                href="https://github.com/lengalabs"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 border-2 border-brand-600 text-brand-600 dark:text-brand-50 dark:border-brand-50 font-medium rounded-lg hover:bg-brand-50 dark:hover:bg-brand-950/30 transition-all duration-200 text-center"
              >
                {t("common.viewGithub")}
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <img
              src={logoUrl}
              alt="Lenga Labs logo"
              className="max-w-xs md:max-w-sm lg:max-w-md h-auto drop-shadow-xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface/80 dark:bg-surface-dark-muted/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 dark:border-border-dark/50"
            >
              <div className="text-brand-600 dark:text-brand-50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-foreground-dark">
                {feature.title}
              </h3>
              <p className="text-foreground-muted dark:text-foreground-dark-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="mt-20 bg-surface/60 dark:bg-surface-dark-muted/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 dark:border-border-dark/50 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-foreground dark:text-foreground-dark">
            {t("common.futureOfCode")}
          </h2>
          <p className="text-lg text-foreground-muted dark:text-foreground-dark-muted text-center leading-relaxed">
            {t("vision.description")}
          </p>
        </div>

        {/* Installation Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
            {t("installation.title")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-surface/80 dark:bg-surface-dark-muted/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 dark:border-border-dark/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-foreground-dark">
                {t("installation.extensionHeading")}
              </h3>
              <p className="text-foreground-muted dark:text-foreground-dark-muted leading-relaxed mb-4">
                {t("installation.extensionDescription")}
              </p>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=lengalabs.c-lenga"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 border-2 border-brand-600 text-brand-600 dark:text-brand-50 dark:border-brand-50 font-medium rounded-lg hover:bg-brand-50 dark:hover:bg-brand-950/30 transition-all duration-200"
              >
                {t("installation.extensionCta")}
              </a>
            </div>
            <div className="bg-surface/80 dark:bg-surface-dark-muted/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 dark:border-border-dark/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-foreground-dark">
                {t("installation.serverHeading")}
              </h3>
              <p className="text-foreground-muted dark:text-foreground-dark-muted leading-relaxed mb-4">
                {t("installation.serverDescription")}
              </p>
              <div className="bg-brand-950/5 dark:bg-brand-500/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground dark:text-foreground-dark border border-border/50 dark:border-border-dark/50">
                <code>{t("installation.serverCommand")}</code>
              </div>
              <p className="mt-3 text-sm text-foreground-muted dark:text-foreground-dark-muted">
                {t("installation.serverNote")}
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground dark:text-foreground-dark">
            {t("common.getInvolved")}
          </h3>
          <div className="grid gap-4">
            {resources.map(({ href, text, icon }) => (
              <a
                key={href}
                className="group flex items-center gap-4 p-4 bg-surface/80 dark:bg-surface-dark-muted/80 backdrop-blur-sm rounded-lg border border-border/50 dark:border-border-dark/50 hover:shadow-lg transition-all duration-200 hover:border-brand-500 dark:hover:border-brand-500"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-brand-600 dark:text-brand-50 group-hover:scale-110 transition-transform duration-200">
                  {icon}
                </div>
                <span className="text-foreground dark:text-foreground-dark font-medium group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors duration-200">
                  {text}
                </span>
                <div className="ml-auto text-foreground-muted group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
