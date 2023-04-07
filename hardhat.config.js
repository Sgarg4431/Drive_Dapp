require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const privateKey="481725765336526f4bd6d829d032872bc17d9ab6d13939acbd3429fcea34f001";
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/eB1eCIwzpTyLcDibC_yKasIRkQb90nSs",
      accounts:[privateKey]
    }
  },
  paths: {
    artifacts: "./src/artifacts",
  },
};
