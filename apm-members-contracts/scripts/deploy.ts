import { ethers } from "hardhat";

async function main() {
  // const plusMemberSbt = await ethers("PlusMemberSbt");
  // const deployed = await plusMemberSbt.waitForDeployment();

  const PlusMemberSbt = await ethers.getContractFactory("PlusMemberSbt");
  const plusMemberSbt = await PlusMemberSbt.deploy();
  await plusMemberSbt.deployed()
  
  console.log(plusMemberSbt.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
