import { expect } from "chai";
import { ethers } from "hardhat";
import { PlusMemberSBT } from '../typechain-types/PlusMemberSBT';

describe('PlusMemberManager', () => {
  let SBTFactory: any;

  let sbtDeployer: any;
  let plusMemberSBT: PlusMemberSBT;
  let userCA: string;
  
  before(async () => {
    sbtDeployer = await ethers.getSigners(), 
    SBTFactory = await ethers.getContractFactory("PlusMemberSBT", sbtDeployer );
  })

  beforeEach(async () => {
    plusMemberSBT = await SBTFactory.deploy();
    userCA = '0xDF4F39a8037174209c34DC17Eef1A4c505b11E2A';
  });

  it('throws error if sender is not a manager', async () => {
    try {
      await plusMemberSBT.mintNext(userCA);
    } catch (e: any) {
      expect(e.message).contain('caller does not have the Manager role');
    }
  })

  it.skip('throws error if userCA has already tokenId', async () => {
    await plusMemberSBT.addManager(sbtDeployer);
    const userCA = '0xDF4F39a8037174209c34DC17Eef1A4c505b11E2A';
    await plusMemberSBT.mintNext(userCA);

    try {
      await plusMemberSBT.mintNext(userCA);
    } catch (e) {
      console.log(e)
      expect(e).contain('Member already exists');
    }
  });
})