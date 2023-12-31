import * as fs from "fs";
import * as readline from "readline";
import * as path from "path";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createReactComponent(componentName: string) {
  const componentNameCamelCase =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);

  // Create a directory with the component name
  fs.mkdirSync(path.join("src", componentNameCamelCase));

  // Create an index.tsx file with the specified content
  const componentContent = `
export interface ${componentNameCamelCase}Props {
}

export function ${componentNameCamelCase}({}: ${componentNameCamelCase}Props) {
  return <></>;
}
`;
  fs.writeFileSync(`src/${componentNameCamelCase}/index.tsx`, componentContent);

  // Create a "stories" subfolder
  const storiesFolder = `src/${componentNameCamelCase}/stories`;
  fs.mkdirSync(storiesFolder);

  // Create a story file within the "stories" folder
  const storyContent = `
import { ${componentNameCamelCase} } from '..';
import type { Meta, StoryFn } from '@storybook/react';

const Template: StoryFn<typeof ${componentNameCamelCase}> = (args) => {
  return <${componentNameCamelCase} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};

const story = {
  title: 'Components/${componentNameCamelCase}',
  component: ${componentNameCamelCase},
  argTypes: {},
} as Meta<typeof ${componentNameCamelCase}>;

export default story;
`;

  fs.writeFileSync(`${storiesFolder}/index.stories.tsx`, storyContent);

  // Create "elements" and "constants" subfolders
  const elementsFolder = `src/${componentNameCamelCase}/elements`;
  const constantsFolder = `src/${componentNameCamelCase}/constants`;
  const testsFolder = `src/${componentNameCamelCase}/__tests__`;
  fs.mkdirSync(elementsFolder);
  fs.mkdirSync(constantsFolder);
  fs.mkdirSync(testsFolder);

  // Create an index.tsx file in the "elements" folder
  const elementsIndexContent = `
export * from './types';
`;
  fs.writeFileSync(`${elementsFolder}/index.tsx`, elementsIndexContent);

  // Create an index.tsx file in the "constants" folder
  const constantsIndexContent = `
export {};
`;
  fs.writeFileSync(`${constantsFolder}/index.tsx`, constantsIndexContent);

  // Create a types.ts file in the "elements" folder
  fs.writeFileSync(`${elementsFolder}/types.ts`, "export {};");

  // Update src/index.ts to export the created component
  const indexPath = "src/index.ts";
  fs.appendFileSync(
    indexPath,
    `export * from './${componentNameCamelCase}';\n`
  );

  console.log(
    `React component '${componentNameCamelCase}' and Storybook story created successfully!`
  );
}

rl.question(
  "Enter the name of the React component (CamelCase): ",
  (componentName) => {
    createReactComponent(componentName);
    rl.close();
  }
);
