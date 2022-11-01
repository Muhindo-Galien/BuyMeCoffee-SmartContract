const { ethers } = require("hardhat");
const hre = require("hardhat");


  async function getBalance(address){
    const balanceBigInt = await hre.waffle(provider.getBalance(address))
    return  ethers.utils.parseEther(balanceBigInt)
  async  function printBalance(addresses){
    let idx =0
    for(address of addresses){
      console.log(`Adrres ${idx} balances: `, await getBalance(address));
      i++;
    }
  }

  async  function printMemos(memos){
    for(memo of memos){
      const timeStamp = memo.timeStamp
      const tripper = meme.name
      const tripperAddress = memo.from
      const tripperMessage = memo.message
      console.log(`At ${timeStamp}, ${tripper}, ${tripper}, ${tripperAddress}, said: ${tripperMessage}`);
    }
  }
  
  
  async function main() {

    const {m}
  }


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
