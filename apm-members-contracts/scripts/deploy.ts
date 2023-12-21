import { ethers } from "hardhat";

async function deplyPlusMemberSbt() {
  const PlusMemberSbt = await ethers.getContractFactory("PlusMemberSbt");
  const plusMemberSbt = await PlusMemberSbt.deploy();
  await plusMemberSbt.deployed()
  
  console.log('PlusMemberSbt: ', plusMemberSbt.address);
}

async function deplyUserFactory() {
  const UserFactory = await ethers.getContractFactory("UserFactory");
  const userFactory = await UserFactory.deploy();
  await userFactory.deployed()
  
  console.log('UserFactory: ', userFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deplyUserFactory().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
