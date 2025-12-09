export const translations = {
  en: {
    common: {
      title: "Lenga",
      motto: "Write code, not text",
      exploreStandard: "Explore the Standard",
      viewGithub: "View on GitHub",
      getInvolved: "Get Involved",
      futureOfCode: "The Future of Code",
    },
    hero: {
      description:
        "A new paradigm for source code representation. Syntax tree based serialization, optimized for parsing.",
    },
    features: {
      astFormat: {
        title: "AST-Native Format",
        description:
          "Code stored as abstract syntax trees, eliminating syntax errors and enabling deep semantic understanding.",
      },
      intelligentEditing: {
        title: "Intelligent Editing",
        description:
          "Structure-aware editing tools that understand your code's meaning, not just its text representation.",
      },
      universalStandard: {
        title: "Universal Standard",
        description:
          "Language-agnostic representation that works across all programming languages and paradigms.",
      },
    },
    vision: {
      description:
        "Plain text has served us well, but it's time for a change. Lenga format is designed arround the syntax tree, so it is abstracted from the accidental complexity that arises from using characters: syntax errors are impossible, no need for delimiter characters, no more discussions about indentation.",
    },
    installation: {
      title: "Installation",
      extensionHeading: "Install the VS Code Extension",
      extensionDescription:
        "Install the official Lenga extension for VS Code to get language support and tooling.",
      extensionCta: "View on Marketplace",
      serverHeading: "Install the Lenga Server",
      serverDescription: "Use Cargo to install the Lenga Server:",
      serverCommand: "cargo install lenga",
      serverNote: "Requires Rust and Cargo available in your PATH.",
    },
    resources: {
      githubRepo: "GitHub Repository",
      languageStandard: "Language Standard",
      discordCommunity: "Join Discord Community",
    },
  },
  es: {
    common: {
      title: "Lenga",
      motto: "Escribe código, no texto",
      exploreStandard: "Explorar el Estándar",
      viewGithub: "Ver en GitHub",
      getInvolved: "Participa",
      futureOfCode: "El Futuro del Código",
    },
    hero: {
      description:
        "Una organización de código abierto que desarrolla un nuevo estándar revolucionario para la representación de código fuente. Nuestro formato basado en AST reemplaza los archivos de texto plano tradicionales, habilitando una nueva era de desarrollo inteligente de código.",
    },
    features: {
      astFormat: {
        title: "Formato Nativo AST",
        description:
          "Código almacenado como árboles de sintaxis abstracta, eliminando errores de sintaxis y habilitando comprensión semántica profunda.",
      },
      intelligentEditing: {
        title: "Edición Inteligente",
        description:
          "Herramientas de edición conscientes de la estructura que entienden el significado de tu código, no solo su representación textual.",
      },
      universalStandard: {
        title: "Estándar Universal",
        description:
          "Representación agnóstica al lenguaje que funciona a través de todos los lenguajes de programación y paradigmas.",
      },
    },
    vision: {
      description:
        "El texto plano nos acompañó por varias décadas, pero excedió su utilidad. El formato Lenga está diseñado alrededor del árbol de sintaxis, por lo que está abstraído de la complejidad accidental que surge al usar caracteres: los errores de sintaxis son imposibles, no hay necesidad de caracteres delimitadores, no más discusiones sobre la indentación.",
    },
    installation: {
      title: "Instalación",
      extensionHeading: "Instala la extensión de VS Code",
      extensionDescription:
        "Obtén la extensión oficial de Lenga para VS Code y accede a soporte e integración con el editor.",
      extensionCta: "Abrir en Marketplace",
      serverHeading: "Instala el servidor de Lenga",
      serverDescription: "Usa Cargo para instalar el servidor de Lenga:",
      serverCommand: "cargo install lenga",
      serverNote: "Requiere tener Rust y Cargo disponibles en tu PATH.",
    },
    resources: {
      githubRepo: "Repositorio GitHub",
      languageStandard: "Estándar del Lenguaje",
      discordCommunity: "Únete a la Comunidad Discord",
    },
  },
};

export type TranslationKeys = typeof translations.en;
