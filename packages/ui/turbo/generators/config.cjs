// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

module.exports = function generator(plop) {
  plop.setGenerator("ReactComponent", {
    description: "Adds a new React component with Storybook stories",
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
        path: "src/{{pascalCase name}}/index.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/{{pascalCase name}}/index.stories.tsx",
        templateFile: "templates/stories.hbs",
      },
      {
        type: "append",
        path: "src/index.ts",
        pattern: /(?<insertion>.*)/g,
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  });
};
