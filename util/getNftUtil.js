const Moralis = require("moralis/node");

module.exports = async function(serverUrl, appId, masterKey, address) {
  try {
    await Moralis.start({ serverUrl, appId, masterKey });
    const options = {
      //   address: "0xf07468eAd8cf26c752C676E43C814FEe9c8CF402",
      address,
    };
    return await Moralis.Web3API.account.getNFTs(options);
    //   return nft.result[nft.result.length - 2];
  } catch (err) {
    console.log('error in getNftutil.js')
    return {
      message: err,
    };
  }
}
