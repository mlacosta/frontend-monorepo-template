import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("ReactComponent", {
    description: "Adds a new React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{pascalCase name}}/index.ts",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "src/index.tsx",
        pattern: /(?<insertion>.*)/g,
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  });
}
