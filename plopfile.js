module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create fast component with the commands",
    prompts: [
      {
        type: "list",
        name: "folderType",
        choices: ["atoms", "molecules", "organisms", "templates", "pages"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter component name:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{folderType}}/{{camelCase name}}",
        templateFiles: "templates/*.hbs",
        base: "templates",
      },
      {
        type: "modify",
        path: "src/styles/app.scss",
        pattern: /(\/\/ IMPORT NEW STYLE FILE)/g,
        template: `@import "../components/{{folderType}}/{{camelCase name}}";\n$1`,
      },
    ],
  });
};
