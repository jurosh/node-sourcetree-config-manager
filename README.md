# node-sourcetree-config-manager
Configuration manager library for sourcetree written in JavaScript.

Simply add new project into sourcetree confiuguration with nodejs.

# Usage

`install --save sourcetree-config-manager`

Supported operations:

- Append new project at the end of user project listing (`appendItemToConfig(pathToGitProject, projectName)`)

See `example-usage/` folder for real project example.

**! Please close SourceTree before running script.**

# Notes

Before doing any file operation backup file will be created near to accessing config file.

*Tested with:*

- SourceTree 1.9.10
- Windows 10
- npm 3.10.9 & node v7.2.0

Please feel free to submit any compatibility or feature related pull request.