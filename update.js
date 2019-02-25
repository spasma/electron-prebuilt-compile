const latestVersion = require('latest-version');
const editJsonFile = require("edit-json-file");

(async () => {
  let latestElectronVersion = await latestVersion('electron');
  let packageFile = editJsonFile(`${__dirname}/package.json`);
  packageFile.set("version", latestElectronVersion);
  packageFile.set('dependencies.electron', latestElectronVersion);
  packageFile.save();
})();
