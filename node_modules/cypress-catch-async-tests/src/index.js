import { stripIndent } from 'common-tags'

// the real test function
const _it = it

const AsyncFunction = (async () => {}).constructor

it = function syncIt(title, config, callback) {
  if (arguments.length === 2) {
    callback = config
    config = {}
  }

  if (typeof callback === 'function') {
    const isAsync1 = callback[Symbol.toStringTag] === 'AsyncFunction'
    const isAsync2 = callback instanceof AsyncFunction === true

    if (isAsync1 || isAsync2) {
      throw new Error(
        stripIndent`
          You passed "async () {...}" callback for the test "${title}"

          Cypress tests run once through the test to queue all commands
          into its command queue, there is no need for "async/await" calls.

          Caught by [cypress-catch-async-tests](https://github.com/bahmutov/cypress-catch-async-tests) plugin.

          See issue [#4742](https://github.com/cypress-io/cypress/issues/4742) and [Visualize Cypress Command Queue](https://glebbahmutov.com/blog/visualize-cypress-command-queue/)
        `,
      )
    }
  }

  return _it(title, config, callback)
}
it.only = _it.only
it.skip = _it.skip
