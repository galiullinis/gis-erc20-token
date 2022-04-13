import { task } from 'hardhat/config'
import { abi } from '../artifacts/contracts/GisToken.sol/GisToken.json'


task("approve", "Approve user to allow him spend your tokens")
    .addParam("contract", "Contract address")
    .addParam("spender", "Spender address")
    .addParam("amount", "Amount of tokens")
    .setAction(async (taskArgs, { ethers }) => {
        const [signer] = await ethers.getSigners()
        const contract = taskArgs.contract
        const spender = taskArgs.spender
        const amount = taskArgs.amount

        const gisToken = new ethers.Contract(
            contract,
            abi,
            signer
        )

        const tx = await gisToken.approve(spender, BigInt(amount))
        console.log(tx)
    })