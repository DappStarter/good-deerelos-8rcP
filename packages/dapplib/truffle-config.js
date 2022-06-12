require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food edge razor sister pulse hunt office army gas'; 
let testAccounts = [
"0xfd08d5d043faa3443787d3d1452c7b4c7ac5e28039910adf0c0a1bf689f7f220",
"0x5d5ab41d00084c9e1808b4926dfe3dea873700eedcae8162682ee7047c25259b",
"0xf3a4f203c21e36e6522af859dc7cea1794222495b7fdc8eafb64c02064ff2a3a",
"0xda43bb13d49725120cf1eac75492656905c8d5b560cda4d62b1b20334ef7ac10",
"0x40a4f59fe9a183d7f3afd7d55cae2b6205f9a9ceb6bf3282c38985c917c48a11",
"0x7b2374774b2489cd08c1cc1de29001539f3cb46ed0429c9146e5e422ec101320",
"0xf1e22239e15ca398bc0751a9dfc78cfd4b150f396bd09cbb3d59f1d1b7ffbb0d",
"0xce54d8ca7d56f6d449ef7a68ac16111e979a3da1686c7658ef296114ac074089",
"0x1a52491f1595b77cb72cff331e4c1ff33a809d493e7ec42d9ff0fe1f61ed90df",
"0x303d3189d84a36ca2674526e7bd1071b6d52e3c2ea4bfc2983463e69a2ddcf9c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

