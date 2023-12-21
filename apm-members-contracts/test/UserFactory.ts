import { expect } from "chai";
import { ethers } from "hardhat";
import { UserFactory } from './../typechain-types/UserFactory';
import { utils } from 'ethers';

describe('UserFactory', () => {
  let UserFactoryFactory: any;

  let sbtDeployer: any;
  let userUuid: string;
  let userFactory: UserFactory;

  const zeroAddress = '0x0000000000000000000000000000000000000000';
  
  before(async () => {
    [sbtDeployer] = await ethers.getSigners(), 
    UserFactoryFactory = await ethers.getContractFactory("UserFactory", sbtDeployer.getAddress());
  })

  describe('createUser', () => {
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

    it('throws error if userUuid has already registered', async () => {
      await userFactory.createUser(userUuid);

      try {
        await userFactory.createUser(userUuid);
      } catch (e: any) {
        expect(e.message).contain('userId already exists');
      }
    });

    it('passes', async () => {
      await userFactory.createUser(userUuid);
      
      expect(await userFactory.getUserCA(userUuid) !== zeroAddress).eq(true)
    })
  })

  describe('removeUser', () => {
    before(() => {
      userUuid = utils.formatBytes32String('user_uuid_for_test');
    })
    beforeEach(async () => {
      userFactory = await UserFactoryFactory.deploy();
    });
  
    it('throws error if sender is not a manager', async () => {
      await userFactory.removeManager(sbtDeployer.getAddress());

      try {
        await userFactory.removeUser(userUuid);
      } catch (e: any) {
        expect(e.message).contain('caller does not have the Manager role');
      }
    });

    it('throws error if userUuid has not registered', async () => {
      try {
        await userFactory.removeUser(userUuid);
      } catch (e: any) {
        expect(e.message).contain('userId does not exists');
      }
    });

    it('passes', async () => {
      await userFactory.createUser(userUuid);

      await userFactory.removeUser(userUuid);
      
      expect(await userFactory.getUserCA(userUuid) === zeroAddress).eq(true)
    })
  })
})