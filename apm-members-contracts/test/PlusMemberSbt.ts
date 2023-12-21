import { expect } from "chai";
import { ethers } from "hardhat";
import { PlusMemberAddedEventFilter } from '../typechain-types/PlusMemberManager';
import { ApmMembersPlusSBT } from '../typechain-types/ApMMembersPlusSBT';

describe('PlusMemberManager', () => {
  let PlusMemberManagerFactory: any;
  let SBTFactory: any;

  let user: any;
  let apmMembersPlusSbt: ApmMembersPlusSBT
  
  before(async () => {
    // factory, buyer, seller 초기화
    [[user], PlusMemberManagerFactory, SBTFactory] = await Promise.all([
      ethers.getSigners(), 
      ethers.getContractFactory("PlusMemberManager"), 
      ethers.getContractFactory("ApmMembersPlusSBT")
    ]);
  })

  beforeEach(async () => {
    apmMembersPlusSbt = await SBTFactory.deploy();
  });

  it('통과한다', async () => {
  });
})