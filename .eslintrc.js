module.exports = {
  root: true,
  env: {
    node: true
  },
  extends:
    process.env.PLATFORM_ENV === "react"
      ? ["react-app"]
      : ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "one-var": "off",
    "no-mixed-operators": "off",
    "no-template-curly-in-string": "off",
    "space-before-function-paren": "off",
    "arrow-parens": "off",
    "generator-star-spacing": "off",
    "no-debugger": "off",
    "vue/require-prop-types": "off",
    "vue/max-attributes-per-line": "off",
    "vue/require-default-prop": "off",
    "vue/html-self-closing": "off",
    "vue/attributes-order": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
