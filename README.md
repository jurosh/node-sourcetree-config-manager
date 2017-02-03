# node-sourcetree-config-manager
Configuration manager library for sourcetree written in JavaScript.

Simply add new project into sourcetree confiuguration with nodejs.

# Usage

`install --save sourcetree-config-manager`

Supported operations:

- Get sourcetree default configuration path - currently only for windows (`getConfigPath(userName)`)
- Append new project at the end of user project listing (`appendItemToConfig(configPath, pathToGitProject, projectName)`)

See `example-usage/` folder for real project example.

Note: you may get current username with command `process.env['USERPROFILE'].split(path.sep)[2]`

**! Please close SourceTree before running script.**

# Notes

Before doing any file operation backup file will be created near to accessing config file.

*Tested with:*

- SourceTree 1.9.10
- Windows 10
- npm 3.10.9 & node v7.2.0

Please feel free to submit any compatibility or feature related pull request.
