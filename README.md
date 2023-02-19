<h1 align="center">
  <br>
  Front-end Monorepo Template
  <br>
</h1>

<h4 align="center">A typescript monorepo template for Front-End projects</h4>

## Installation

```bash
# Clone this repository
$ git clone https://github.com/mlacosta/frontend-monorepo-template

# Go into the repository
$ cd frontend-monorepo-template

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

- [Husky](typicode.github.io/husky)
- [Jest](https://jestjs.io/)
- [Next.js](https://nextjs.org)
- [Prettier](https://www.npmjs.com/package/prettier)
- [Renovate](https://github.com/renovatebot)
- [Storybook](https://storybook.js.org/)

## How to contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/newFeature`)
3. Commit your Changes (`git commit -m 'Add some newFeature'`)
4. Push to the Branch (`git push origin feature/newFeature`)
5. Open a Pull Request
