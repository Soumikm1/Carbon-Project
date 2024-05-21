import { ethers } from "hardhat";
import { Functionality } from "../typechain-types";
// require("@nomiclabs/hardhat-web3");
// const Web3 = require('web3');
// npx hardhat test

const emissions = [
  {
    category: "Fuel Consumption",
    value_type: "number",
    emission_value: 4n,
    factor_name: "petrol",
    value: "2",
  },
  {
    category: "Fuel Consumption",
    value_type: "number",
    emission_value: 5n,
    factor_name: "diesel",
    value: "2",
  },
  {
    category: "Fuel Consumption",
    value_type: "number",
    emission_value: 4n,
    factor_name: "lpg/cng",
    value: "2",
  },
  {
    category: "Fuel Consumption",
    value_type: "number",
    emission_value: 5n,
    factor_name: "coal",
    value: "2",
  },
  {
    category: "Energy Consumption",
    value_type: "number",
    emission_value: 141n,
    factor_name: "electricity",
    value: "200",
  },
  {
    category: "Travel",
    value_type: "number",
    emission_value: 12n,
    factor_name: "flights",
    value: "100",
  },
  {
    category: "Travel",
    value_type: "number",
    emission_value: 0n,
    factor_name: "trains",
    value: "100",
  },
  {
    category: "Travel",
    value_type: "number",
    emission_value: 1n,
    factor_name: "metro",
    value: "100",
  },
  {
    category: "Travel",
    value_type: "number",
    emission_value: 5n,
    factor_name: "bus",
    value: "100",
  },
  {
    category: "Travel",
    value_type: "number",
    emission_value: 3n,
    factor_name: "e_bus",
    value: "100",
  },
  {
    category: "Travel",
    value_type: "number",
    emission_value: 14n,
    factor_name: "car",
    value: "100",
  },
  {
    category: "Travel",
    value_type: "number",
    emission_value: 10n,
    factor_name: "e_car",
    value: "100",
  },
  {
    category: "Food Habits",
    value_type: "number",
    emission_value: 10n,
    factor_name: "meal",
    value: "5",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
  {
    category: "",
    emission_value: 0n,
    factor_name: "",
    value: "",
    value_type: "",
  },
];

describe("Stress Testing", function () {
  this.timeout(120000); // Set the timeout to 120 seconds for this suite
  let contract: Functionality;
  const Web3 = require('web3');
  async function printAccountBalances() {
    const accounts = await ethers.getSigners();
    const provider = ethers.provider;

    console.log("Account Balances:");
    for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];
        const balanceWei = await provider.getBalance(account.address);
        // const balanceEth = ethers.utils.formatUnits(balanceWei, 'ether');
        console.log(`Account ${i + 1}:`);
        console.log(`  Address: ${account.address}`);
        console.log(`  Balance (Wei): ${balanceWei.toString()}`);
        // console.log(`  Balance (ETH): ${balanceEth}`);
    }
  }

  async function deployContract() {
    const accounts = await ethers.getSigners();

    const instance = await ethers.getContractFactory("Functionality");
    contract = await instance.deploy();
    return {
      contract,
      users: accounts.slice(1, 6),
      orgUser: accounts.slice(6, 11),
    };
  }
  console.log("Point 1");
  async function printBalance(accounts: string[]) {
    const res = await Promise.all(accounts.map(each => {
      return ethers.provider.getBalance(each);
    }))
    res.forEach((each, index) => {
      console.log(`${accounts[index]}:- ${ethers.formatEther(10000000000000000000000n - each)}`)
    })
  }
  console.log("Point 2");
  printAccountBalances();
  describe("Calling Each Function ", function () {
    it("Should call the functions", async function () {
      const { contract, users, orgUser } = await deployContract();


      const registerUserPromises = users.map((user, index) =>
        contract.connect(user).registerUser({
          first_name: `User${index + 1}`,
          last_name: `Name${index + 1}`,
          email: `user${index + 1}@gmail.com`,
          date_of_birth: new Date(1996, 10, index + 1).getTime(),
          gender: "Male",
        })
      );
      const registerUserTx = await Promise.all(registerUserPromises);
      const registerUserTxPromises = registerUserTx.map((each) => each.wait());
      await Promise.all(registerUserTxPromises);

      const registerOrgPromises = orgUser.map((user, index) =>
        contract.connect(user).registerOrganization({
          name: `Org ${index + 1}`,
          email: `org${index + 1}@gmail.com`,
        })
      );
      const registerOrgTx = await Promise.all(registerOrgPromises);
      const registerOrgTxPromises = registerOrgTx.map((each) => each.wait());
      await Promise.all(registerOrgTxPromises);

      let addProjectPromises: Promise<any>[] = [];
      let userProjectMap: { [key: string]: number[] } = {};
      console.log("Point 3");
      orgUser.forEach((user, index) => {
        userProjectMap[user.address] = []; // Initialize the array for each user
        Array(10)
          .fill(null)
          .forEach((_i, indexIn) => {
            addProjectPromises.push(
              contract.connect(user).addProject({
                name: `Project_${index + 1}_${indexIn + 1}`,
                creditQuantity: 100,
                creditType: "ABC",
                description: "Project with 100 credits of type ABC.",
              })
            );
          });
      });

      const addProjectTx = await Promise.all(addProjectPromises);
      const addProjectTxPromises = addProjectTx.map((each) => each.wait());
      const receipt = await Promise.all(addProjectTxPromises);
      console.log("Point 4");
      printAccountBalances();
      receipt.forEach((txReceipt, index) => {
        const userIndex = Math.floor(index / 10); // Assuming each user adds exactly 10 projects
        const user = orgUser[userIndex];
        if (user && txReceipt.events && txReceipt.events[0] && txReceipt.events[0].args) {
          const projectId = txReceipt.events[0].args[0].toNumber(); // Adjust this according to your contract's event structure
          userProjectMap[user.address].push(projectId);
        } else {
          console.error('Event data missing in transaction receipt:', txReceipt);
        }
      });

      console.log(userProjectMap);

      let count = 1;
      let editProjectPromises: Promise<any>[] = [];

      orgUser.forEach((user, index) => {
        const userProjects = userProjectMap[user.address] || [];

        userProjects.forEach((projectId, indexIn) => {
          editProjectPromises.push(
            contract.connect(user).editProject({
              name: `Project_${index + 1}_${indexIn + 1}`,
              creditQuantity: 100,
              creditType: "ABC",
              id: projectId,
              description: "Project with 100 credits of type ABC from Org Organization.",
              status: "ACTIVE",
            })
          );
          count = count + 1;
        });
      });
      console.log("Point 5");
      printAccountBalances();
      const editProjectTx = await Promise.all(editProjectPromises);
      const editProjectTxPromises = editProjectTx.map((each) => each.wait());
      await Promise.all(editProjectTxPromises);
      let addEmissionPromises: any[] = [];
      users.forEach((user, index) => {
        Array(10)
          .fill(null)
          .forEach((_i, indexIn) => {
            addEmissionPromises.push(
              contract.connect(user).addEmission({
                date: new Date(
                  new Date().getFullYear(),
                  new Date().getMonth(),
                  new Date().getDate() - indexIn
                ).getTime(),
                emissions,
              })
            );
          });
      });
      const addEmissionTx = await Promise.all(addEmissionPromises);
      const addEmissionTxPromises = addEmissionTx.map((each) => each.wait());
      await Promise.all(addEmissionTxPromises);
      console.log("Point 6");
      let addProjectToCartPromises: any[] = [];
      users.forEach((user, index) => {
        let projectCount = 1;
        Array(5)
          .fill(null)
          .forEach((_i, indexIn) => {
            addProjectToCartPromises.push(
              contract.connect(user).addProjectToCart({
                quantity: 10,
                projectId: projectCount
              })
            );
            projectCount = projectCount + 1;
          });
      });
      const addProjectToCartTx = await Promise.all(addProjectToCartPromises);
      const addProjectToCartTxPromises = addProjectToCartTx.map((each) => each.wait());
      await Promise.all(addProjectToCartTxPromises);
      console.log("Point 7");
      printAccountBalances();
      let makeCartEmptyPromises: any[] = [];
      users.forEach((user, index) => {
        let projectCount = 1;
        Array(5)
          .fill(null)
          .forEach((_i, indexIn) => {
            makeCartEmptyPromises.push(
              contract.connect(user).makeCartEmpty({
                projectId: projectCount
              })
            );
            projectCount = projectCount + 1;
          });
      });
      const makeCartEmptyTx = await Promise.all(makeCartEmptyPromises);
      const makeCartEmptyTxPromises = makeCartEmptyTx.map((each) => each.wait());
      await Promise.all(makeCartEmptyTxPromises);
      console.log("Point 8");
      printAccountBalances();
      let addProjectToCartPromisesAgain: any[] = [];
      users.forEach((user, index) => {
        let projectCount = 1;
        Array(5)
          .fill(null)
          .forEach((_i, indexIn) => {
            addProjectToCartPromisesAgain.push(
              contract.connect(user).addProjectToCart({
                quantity: 10,
                projectId: projectCount
              })
            );
            projectCount = projectCount + 1;
          });
      });
      console.log("Point 9 !!!");
      const addProjectToCartAgainTx = await Promise.all(addProjectToCartPromisesAgain);
      console.log("Point 10 !!!");
      const addProjectToCartAgainTxPromises = addProjectToCartAgainTx.map((each) => each.wait());
      console.log("Point 11 !!!");
      await Promise.all(addProjectToCartAgainTxPromises);
      console.log("Point 12 !!!");
      const buyCreditsFromCartPromises = users.map((user, _index) =>
        contract.connect(user).buyCreditsFromCart({ value: 50 })
      );
      console.log("Point 13 !!!");
      const buyCreditsTx = await Promise.all(buyCreditsFromCartPromises);
      console.log("Point 14 !!!");
      const buyCreditsTxPromises = buyCreditsTx.map((each) => each.wait());
      console.log("Point 15 !!!");
      await Promise.all(buyCreditsTxPromises);
      console.log("Point 16 !!!");
      printBalance(users.map(each => each.address));
      printBalance(orgUser.map(each => each.address));
    });
  });
});

// describe('Stress Testing', function() {
//   this.timeout(120000); // Set the timeout to 120 seconds for this suite

//   it('Should call the functions', async function() {
//       await addProjects();
//       await editProjects();
//   });
// });