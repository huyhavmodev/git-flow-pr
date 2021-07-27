module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'function-rules/scope-enum': [
      2,
      'always',
      (parsed) => {
        // TODO: update scopes = screen name, jira task ID, epic name, ...
        const scopes = ['TTM'];
        if (!parsed.scope || scopes.some((scope) => parsed.scope.startsWith(scope))) {
          return [true];
        }

        return [false, `scope must start with one of [${scopes.join(', ')}]`];
      },
    ],
  },
};
