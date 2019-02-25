const latestVersion = require('latest-version');
const editJsonFile = require("edit-json-file");

(async () => {
  let latestElectronVersion = await latestVersion('electron');
  var config = require('./../../package.json'); // Get electron version from root packages.json
  myElectronVersion = config.devDependencies.version;
  console.log("Compiling for "+myElectronVersion);

  let packageFile = editJsonFile(`${__dirname}/package.json`);
  packageFile.set("version", myElectronVersion);
  packageFile.set('dependencies.electron', myElectronVersion);
  packageFile.save();
})();
