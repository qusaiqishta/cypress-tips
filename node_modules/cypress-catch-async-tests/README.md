# cypress-catch-async-tests ![cypress version](https://img.shields.io/badge/cypress-10.7.0-brightgreen) [![ci](https://github.com/bahmutov/cypress-catch-async-tests/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bahmutov/cypress-catch-async-tests/actions/workflows/ci.yml)

> Prevents accidentally passing an async function as the test callback in Cypress

## Install

Add this plugin as a dev dependency

```shell
$ npm i -D cypress-catch-async-tests
# or if using Yarn
$ yarn add -D cypress-catch-async-tests
```

## Use

Import this plugin from your support file or spec file before any tests

```js
import 'cypress-catch-async-tests'

it('works', () => { ... })

// this test will generate an error right away
it('catches async', async () => { ... })
```

## See also

- example repo [cypress-catch-async-tests-example](https://github.com/bahmutov/cypress-catch-async-tests-example)
- Cypress issue [#4742](https://github.com/cypress-io/cypress/issues/4742)
- [Visualize Cypress Command Queue](https://glebbahmutov.com/blog/visualize-cypress-command-queue/) blog post

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2022

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Tips & Tricks Newsletter](https://cypresstips.substack.com/)
- [my Cypress courses](https://cypress.tips/courses)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/cypress-catch-async-tests/issues) on Github

## MIT License

Copyright (c) 2022 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
