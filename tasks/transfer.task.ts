import { task } from 'hardhat/config'
import { abi } from '../artifacts/contracts/GisToken.sol/GisToken.json'


task("transfer", "Transfer tokens")
    .addParam("contract", "Contract address")
    .addParam("to", "Recipient address")
    .addParam("amount", "Amount of tokens")
    .setAction(async (taskArgs, { ethers }) => {
        const [signer] = await ethers.getSigners()
        const contract = taskArgs.contract
        const to = taskArgs.to
        const amount = taskArgs.amount

        const gisToken = new ethers.Contract(
            contract,
            abi,
            signer
        )

        const tx = await gisToken.transfer(to, BigInt(amount))
        console.log(tx)
    })