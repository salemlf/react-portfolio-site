## What is this?

An unrelentingly harsh ESLint configuration that incorporates the following:

- [ESLint core rules](https://eslint.org/docs/rules/)
- [`eslint-plugin-array-func`](https://github.com/freaktechnik/eslint-plugin-array-func)
- [`eslint-plugin-eslint-comments`](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [`eslint-plugin-filenames`](https://github.com/selaux/eslint-plugin-filenames)
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
- [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
- [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [`eslint-plugin-lean-imports`](https://github.com/eslint-plugins/eslint-plugin-lean-imports)
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
- [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise)
- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)

## What problem does it solve?

You probably don't need this. It's a maximally severe linting setup that enables most of the rules defined by ESLint, along with those rules defined by the above plugins. It helps when collaborators who have minimal experience with JS come crashing into your code and you find yourself with an urgent need to automate some good practices and consistent formatting.

## Installation

`eslint-config-severe` is intended to be installed from NPM and then configured into a React project. Its dependencies are peer dependencies and must be installed explicitly in the project where you're using it.

```
yarn add eslint-config-severe babel-eslint eslint eslint-config-prettier eslint-plugin-array-func eslint-plugin-eslint-comments eslint-plugin-filenames eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-lean-imports eslint-plugin-promise eslint-plugin-react
```

Once installation is complete, in the root of your project, create an `.eslintrc.js` file containing this:

```
module.exports = {
  extends: ['severe'],
};
```

Of course, in `.eslintrc.js` you can add whatever other configuration items you want. You can include other plugins, for example, or override any of the rules coming from `severe`. If you're not sure how this works, check out the [ESLint configuration docs](https://eslint.org/docs/user-guide/configuring).

## Usage

I write code in Atom, and I configure the `atom-prettier` package to run Prettier and then ESLint every time I hit save. This works well enough for me, but of course there are many other ways to do it. Perhaps you prefer some other one. Merry linting!
