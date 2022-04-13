import { task } from 'hardhat/config'
import { abi } from '../artifacts/contracts/GisToken.sol/GisToken.json'


task("transferFrom", "Transfer tokens")
    .addParam("contract", "Contract address")
    .addParam("from", "Tokens owner address")
    .addParam("to", "Recipient address")
    .addParam("amount", "Amount of tokens")
    .setAction(async (taskArgs, { ethers }) => {
        const [signer] = await ethers.getSigners()
        const contract = taskArgs.contract
        const from = taskArgs.from
        const to = taskArgs.to
        const amount = taskArgs.amount

        const gisToken = new ethers.Contract(
            contract,
            abi,
            signer
        )

        const tx = await gisToken.transferFrom(from, to, BigInt(amount))
        console.log(tx)
    })