<h1 align="center">
  <br>
  Front-end Monorepo Template
  <br>
</h1>

<h4 align="center">A typescript monorepo template for Front-End projects</h4>

## Installation

```bash
# Clone this repository
$ git clone --depth 1 --single-branch https://github.com/mlacosta/frontend-monorepo-template \ 
$ your-project-name

# Go into the repository
$ cd your-project-name

# Install dependencies
$ yarn install
```

## How to use

```bash
# Run a package script
$ yarn workspace @<your-project-name>/<package-name> <your-command>

# Run storybook
$ yarn storybook:run
```

## Packages

This repo uses the following open source packages:

- [@swc/jest](https://swc.rs/)
- [Dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)
- [Husky](https://typicode.github.io/husky)
- [Material UI](https://mui.com/)
- [Next.js](https://nextjs.org)
- [Prettier](https://www.npmjs.com/package/prettier)
- [Storybook](https://storybook.js.org/)
- [tsup](https://github.com/egoist/tsup)
- [Turborepo](https://turbo.build/)


## How to contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/newFeature`)
3. Commit your Changes (`git commit -m 'Add some newFeature'`)
4. Push to the Branch (`git push origin feature/newFeature`)
5. Open a Pull Request
