const templatesPath = "templates/component";
const componentsPath = "../src/components";

export default {
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
      templateFiles: `${templatesPath}/*.tsx`,
      skipIfExists: true,
    },
    {
      type: "append",
      path: `${componentsPath}/index.ts`,
      templateFile: `${templatesPath}/indexAppend.txt`,
    },
  ],
};
