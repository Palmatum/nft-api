const util = require("../util/util");

const getNftUtil = util.getNftUtil;
const moralisUtil = util.moralisUtil;

module.exports = async function (req, res, next) {
  try {
    let nftData = await getNftUtil(
      moralisUtil.serverUrl,
      moralisUtil.appId,
      moralisUtil.masterKey,
      req.query.address
    );
    let nfts = [];
    let count = 0;
    let results = nftData.result;
    for (let result of results) {
      let nft = {
        result_id: count,
        name: result.name,
        symbol: result.symbol,
        token_address: result.token_address,
        token_id: result.token_id,
        owner_address: result.owner_of,
        token_uri: result.token_uri,
        token_metadata: result.metadata,
      };
      nfts.push(nft);
      count++;
    }
    res.send(nfts);
  } catch {
    res.status(500).send({
      message: "Error getting NFT",
    });
  }
};
