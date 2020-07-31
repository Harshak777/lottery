const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    <seed>,
    'https://kovan.infura.io/v3/c3ab25017a8b4f9a809b8ec402e4f3c7'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log(accounts);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data:bytecode })
        .send({ gas:'1000000', from: accounts[0] });

    console.log(interface);
    console.log('deployed to',result.options.address);
};
deploy();