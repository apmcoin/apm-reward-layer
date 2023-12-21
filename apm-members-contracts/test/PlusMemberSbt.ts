import { expect } from "chai";
import { ethers } from "hardhat";
import { PlusMemberSbt } from '../typechain-types/PlusMemberSbt';

describe('PlusMemberManager', () => {
  let SbtFactory: any;

  let sbtDeployer: any;
  let signer: any;
  let plusMemberSbt: PlusMemberSbt;
  let userCA: any;
  
  before(async () => {
    [sbtDeployer, signer] = await ethers.getSigners(), 
    SbtFactory = await ethers.getContractFactory("PlusMemberSbt", sbtDeployer.getAddress());
  })

  describe('mintNext', () => {
    before(() => {
      userCA = signer.getAddress();
    })
    beforeEach(async () => {
      plusMemberSbt = await SbtFactory.deploy();
    });

    it('throws error if sender is not a manager', async () => {
      await plusMemberSbt.removeManager(sbtDeployer.getAddress());

      try {
        await plusMemberSbt.mintNext(userCA);
      } catch (e: any) {
        expect(e.message).contain('caller does not have the Manager role');
      }
    })

    it('throws error if userCA has already tokenId', async () => {
      await plusMemberSbt.mintNext(userCA);

      try {
        await plusMemberSbt.mintNext(userCA);
      } catch (e: any) {
        expect(e.message).contain('Member already exists');
      }
    });

    it('passes', async () => {
      const tx = await plusMemberSbt.mintNext(userCA);
      await tx.wait();

      expect((await plusMemberSbt.isPlusMember(userCA))).eq(true);
    })
  })
})