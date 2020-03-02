const templatesPath = "templates/component";
const componentsPath = "../src/components";

module.exports = {
  description: "presentational component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name",
    },
  ],
  actions: [
    {
      type: "addMany",
      destination: `${componentsPath}/{{ name }}`,
      base: templatesPath,
      templateFiles: `${templatesPath}/*.ts?(x).hbs`,
      skipIfExists: true,
    },
    {
      type: "append",
      path: `${componentsPath}/index.ts`,
      templateFile: `${templatesPath}/indexAppend.hbs`,
    },
  ],
};
