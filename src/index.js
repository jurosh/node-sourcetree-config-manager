
const username = 'jurosh';
const configPath = `C:\\Users\\${username}\\AppData\\Local\\Atlassian\\SourceTree\\bookmarks.xml`;

const fs = require('fs');
const {makeFileBackup, replaceFile} = require('./fileUtils');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const builder = new xml2js.Builder();

function makeNewTreeViewNode (path, name) {
  return {
    $: {"xsi:type": "BookmarkNode"},
    Level: 0,
    Name: name,
    Children: [],
    CanSelect: true,
    Path: path,
    RepoType: 'Git'
  };
}

function appendItemToConfig (path, name = 'New Project') {
  console.log('Make sure SourceTree application is not running, as it may rewrite changes made by this tool.');

  // Just in case something bad, make sure we have always fresh backup
  makeFileBackup(configPath);

  fs.readFile(configPath, function(err, data) {
    if (err) {
      throw err;
    } else {
      parser.parseString(data, function (err, result) {
        // TODO: make sure it's working with empty listing
        const treeViewsListing = result.ArrayOfTreeViewNode.TreeViewNode;
        const newBookmark = makeNewTreeViewNode(path, name);
        treeViewsListing.push(newBookmark);
        const updatedXml = builder.buildObject(result);
        replaceFile(configPath, updatedXml);
      });
    }
  });
}

module.exports = {
  appendItemToConfig
};

