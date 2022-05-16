require("dotenv").config();

module.exports = {
  serverUrl: process.env.SERVER_URL,
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  moralisSecret: process.env.MORALIS_SECRET,
  cliApiKey: process.env.CLI_API_KEY,
  cliApiKeySecret: process.env.CLI_API_KEY_SECRET,
  web3ApiKey: process.env.WEB3_API_KEY,
  speedyNodeKey: process.env.SPEEDY_NODE_KEY,
};
