import hre from 'hardhat';
import "dotenv/config";

const ethers = hre.ethers
const tokenName = process.env.TOKEN_DEPLOY_NAME
const tokenSymbol = process.env.TOKEN_DEPLOY_SYMBOL

async function main() {
    const [signer] = await ethers.getSigners()
    const GisToken = await ethers.getContractFactory('GisToken', signer)
    const gisToken = await GisToken.deploy(tokenName, tokenSymbol)
    await gisToken.deployed()
    console.log(gisToken.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });