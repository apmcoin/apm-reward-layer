import { expect } from "chai";
import { ethers } from "hardhat";
import { PlusMemberSBT } from '../typechain-types/PlusMemberSBT';

describe('PlusMemberManager', () => {
  let SBTFactory: any;

  let sbtDeployer: any;
  let signer: any;
  let plusMemberSBT: PlusMemberSBT;
  let userCA: any;
  
  before(async () => {
    [sbtDeployer, signer] = await ethers.getSigners(), 
    SBTFactory = await ethers.getContractFactory("PlusMemberSBT", sbtDeployer.getAddress());
  })

  beforeEach(async () => {
    plusMemberSBT = await SBTFactory.deploy();
    userCA = signer.getAddress();
  });

  it('throws error if sender is not a manager', async () => {
    try {
      await plusMemberSBT.removeManager(sbtDeployer.getAddress());

      await plusMemberSBT.mintNext(userCA);
    } catch (e: any) {
      expect(e.message).contain('caller does not have the Manager role');
    }
  })

  it('throws error if userCA has already tokenId', async () => {
    await plusMemberSBT.mintNext(userCA);

    try {
      await plusMemberSBT.mintNext(userCA);
    } catch (e: any) {
      expect(e.message).contain('Member already exists');
    }
  });

  it('passes', async () => {
    const tx = await plusMemberSBT.mintNext(userCA);
    await tx.wait();

    expect((await plusMemberSBT.isPlusMember(userCA))).eq(true);
  })
})