import { expect } from "chai";
import { ethers } from "hardhat";
import { UserFactory } from './../typechain-types/UserFactory';
import { utils } from 'ethers';

describe('UserFactory', () => {
  let UserFactoryFactory: any;

  let sbtDeployer: any;
  let userUuid: string;
  let userFactory: UserFactory;
  
  before(async () => {
    [sbtDeployer] = await ethers.getSigners(), 
    UserFactoryFactory = await ethers.getContractFactory("UserFactory", sbtDeployer.getAddress());
  })

  describe('createUser', () => {
    const zeroAddress = '0x0000000000000000000000000000000000000000';

    before(() => {
      userUuid = utils.formatBytes32String('user_uuid_for_test');
    })
    beforeEach(async () => {
      userFactory = await UserFactoryFactory.deploy();
    });
  
    it('throws error if sender is not a manager', async () => {
      await userFactory.removeManager(sbtDeployer.getAddress());

      try {
        await userFactory.createUser(userUuid);
      } catch (e: any) {
        expect(e.message).contain('caller does not have the Manager role');
      }
    });

    it('throws error if userCA has already tokenId', async () => {
      await userFactory.createUser(userUuid);

      try {
        await userFactory.createUser(userUuid);
      } catch (e: any) {
        expect(e.message).contain('userId already exists');
      }
    });

    it('passes', async () => {
      const tx = await userFactory.createUser(userUuid);
      await tx.wait()
      
      expect(await userFactory.getUserCA(userUuid) !== zeroAddress).eq(true)
    })
  })
})