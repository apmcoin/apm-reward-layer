import { expect } from "chai";
import { ethers } from "hardhat";
import { MembersCoupon } from './../typechain-types/MembersCoupon';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe('MembersCoupon', () => {
  let MembersCouponFactory: any;

  let couponDeployer: SignerWithAddress;
  let couponDeployerAddress: string;
  let signer: SignerWithAddress;
  let membersCoupon: MembersCoupon;
  let userCA: any;
  
  before(async () => {
    [couponDeployer, signer] = await ethers.getSigners(), 
    couponDeployerAddress = await couponDeployer.getAddress()
    MembersCouponFactory = await ethers.getContractFactory("MembersCoupon", couponDeployer);
  })

  describe('mintNext', () => {
    before(async () => {
      userCA = await signer.getAddress();
    })
    beforeEach(async () => {
      membersCoupon = await MembersCouponFactory.deploy();
    });

    it('throws error if sender is not a manager', async () => {
      await membersCoupon.removeManager(couponDeployerAddress);

      try {
        await membersCoupon.mintNext(userCA);
      } catch (e: any) {
        expect(e.message).contain('caller does not have the Manager role');
      }
    })

    it('mint a token of plusMember', async () => {
      await membersCoupon.mintNext(userCA);

      expect((await membersCoupon.balanceOf(userCA))).eq(1);
    })
  })

  describe('burn', () => {
    before(async () => {
      userCA = await signer.getAddress();
    })
    beforeEach(async () => {
      membersCoupon = await MembersCouponFactory.deploy();
    });

    it('throws error if sender is not a manager', async () => {
      await membersCoupon.removeManager(couponDeployerAddress);

      try {
        await membersCoupon.burn(userCA, 1);
      } catch (e: any) {
        expect(e.message).contain('caller does not have the Manager role');
      }
    })

    it('throws error if token does not exist', async () => {
      try {
        await membersCoupon.burn(userCA, 1);
      } catch (e: any) {
        expect(e.message).contain('owner query for nonexistent token');
      }
    });

    it('throws error if user does not have a coupon', async () => {
      await membersCoupon.mintNext(userCA);
      try {
        await membersCoupon.burn(userCA, 1);
      } catch (e: any) {
        expect(e.message).contain('burn of token that is not own');
      }
    });

    it('burns the token of plusMember', async () => {
      await membersCoupon.mintNext(userCA);

      await membersCoupon.burn(userCA, 1);

      expect((await membersCoupon.balanceOf(userCA))).eq(0);
    })
  })
})