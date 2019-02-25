const Generator = require('yeoman-generator');
const _fs = require('fs');

const Bootstrap = {
  BOTTOM_TABS: 1,
  STACK: 2,
  SIDE_MENU: 3,
}

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Enter project name'
      }, {
        type: "list",
        name: "bootstrap",
        message: "Choose your desired template",
        choices: [{
          name: 'Bootstrap Bottom Tabs',
          value: Bootstrap.BOTTOM_TABS
        },
        {
          name: 'Bootstrap Stack',
          value: Bootstrap.STACK
        },
        {
          name: 'Bootstrap Side Menu',
          value: Bootstrap.SIDE_MENU
        }]
      }
    ]);
  }

  writing() {
    const projectName = this.answers.projectName;
    _fs.mkdirSync(projectName);
    this.destinationRoot(projectName);

    // Copy configuration
    this.fs.copyTpl(
      this.templatePath(`_package.json`),
      this.destinationPath(`package.json`), {
        name: projectName
      }
    );

    this.fs.copyTpl(
      this.templatePath(`babel.config.js`),
      this.destinationPath(`babel.config.js`)
    );

    // Copy android files
    this.fs.copyTpl(
      this.templatePath(`android`),
      this.destinationPath(`android`)
    );

    // Copy iOS files
    this.fs.copyTpl(
      this.templatePath(`ios`),
      this.destinationPath(`ios`)
    );

    // Copy source files
    this.fs.copyTpl(
      this.templatePath(`src`),
      this.destinationPath(`src`)
    );

    this.fs.copyTpl(
      this.templatePath(`index.js`),
      this.destinationPath(`index.js`)
    );

    // Manipulate layout
    let appFilePath;
    switch (this.answers.bootstrap) {
      case Bootstrap.STACK:
        appFilePath = 'appTemplates/stack.js'
        break;
      case Bootstrap.BOTTOM_TABS:
        appFilePath = 'appTemplates/bottomTabs.js'
        break;
      case Bootstrap.SIDE_MENU:
        appFilePath = 'appTemplates/sideMenu.js'
        break;
      default:
        break;
    }

    this.fs.copyTpl(
      this.templatePath(appFilePath),
      this.destinationPath(`src/app.js`)
    );
  }

  install() {
    this.installDependencies();
  }
};