const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  paths: function(paths, env) {
    paths.appBuild = resolveApp("dist/react");
    paths.appHtml = resolveApp("public/react.html");
    return paths;
  }
};
