import { task } from 'hardhat/config'
import { abi } from '../artifacts/contracts/GisToken.sol/GisToken.json'


task("burn", "Burn tokens (only owner)")
    .addParam("contract", "Contract address")
    .addParam("account", "Account address")
    .addParam("amount", "Amount of tokens to burn")
    .setAction(async (taskArgs, { ethers }) => {
        const [signer] = await ethers.getSigners()
        const contract = taskArgs.contract
        const account = taskArgs.account
        const amount = taskArgs.amount

        const gisToken = new ethers.Contract(
            contract,
            abi,
            signer
        )

        const tx = await gisToken.burn(account, BigInt(amount))
        console.log(tx)
    })