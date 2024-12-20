const desc = [
{
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "time",
        "type": "uint256"
    }, {
        "indexed": true,
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "sent",
        "type": "int256"
    }, {
        "indexed": false,
        "name": "tax",
        "type": "int256"
    }, {
        "indexed": false,
        "name": "recieved",
        "type": "int256"
    }],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "time",
        "type": "uint256"
    }, {
        "indexed": true,
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "sent",
        "type": "int256"
    }, {
        "indexed": false,
        "name": "tax",
        "type": "int256"
    }, {
        "indexed": false,
        "name": "recieved",
        "type": "int256"
    }],
    "name": "TransferCredit",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "time",
        "type": "uint256"
    }, {
        "indexed": true,
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "int256"
    }],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "time",
        "type": "uint256"
    }, {
        "indexed": true,
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value",
        "type": "int256"
    }],
    "name": "Delegation",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "time",
        "type": "uint256"
    }, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "recieved",
        "type": "int256"
    }],
    "name": "Pledge",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "time",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "target",
        "type": "address"
    }, {
        "indexed": false,
        "name": "accstatus",
        "type": "bool"
    }, {
        "indexed": false,
        "name": "acctype",
        "type": "int256"
    }, {
        "indexed": false,
        "name": "debit",
        "type": "int256"
    }, {
        "indexed": false,
        "name": "credit",
        "type": "int256"
    }],
    "name": "SetAccountParams",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "time",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "target",
        "type": "address"
    }, {
        "indexed": false,
        "name": "amount",
        "type": "int256"
    }],
    "name": "CreditLimitChange",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "time",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "target",
        "type": "address"
    }, {
        "indexed": false,
        "name": "amount",
        "type": "int256"
    }],
    "name": "DebitLimitChange",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "time",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "target",
        "type": "address"
    }, {
        "indexed": false,
        "name": "balance",
        "type": "uint256"
    }, {
        "indexed": false,
        "name": "limit",
        "type": "uint256"
    }],
    "name": "Refilled",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "name": "value1",
        "type": "int256"
    }, {
        "indexed": false,
        "name": "value2",
        "type": "int256"
    }],
    "name": "DebugMsg",
    "type": "event"
}]

var add_Currency = function(data, currency) {
    data['currency']=currency;
    return data;
} 
 
 
// Agnel
const addr_Agnel = "0xe8d123afaf9104c7b1c454d32b04176f7d78a711"
var contract_Agnel = eth.contract(desc).at(addr_Agnel)
var evt_Agnel_Transfer = contract_Agnel({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Agnel_Transfer.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Agnel")))});
var evt_Agnel_TransferCredit = contract_Agnel({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Agnel_TransferCredit.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Agnel")))});
var evt_Agnel_Pledge = contract_Agnel({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Agnel_Pledge.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Agnel")))}); 









 
 
// COEUR
const addr_COEUR = "0x45485Baa9C594D21A1B131d38Bba48bC830fD041"
var contract_COEUR = eth.contract(desc).at(addr_COEUR)
var evt_COEUR_Transfer = contract_COEUR({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_COEUR_Transfer.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"COEUR")))});
var evt_COEUR_TransferCredit = contract_COEUR({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_COEUR_TransferCredit.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"COEUR")))});
var evt_COEUR_Pledge = contract_COEUR({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_COEUR_Pledge.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"COEUR")))}); 
 
 
// Gemme
const addr_Gemme = "0x2297f43487d4269c5a41de128a89d9067770c7dc"
var contract_Gemme = eth.contract(desc).at(addr_Gemme)
var evt_Gemme_Transfer = contract_Gemme({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Gemme_Transfer.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Gemme")))});
var evt_Gemme_TransferCredit = contract_Gemme({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Gemme_TransferCredit.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Gemme")))});
var evt_Gemme_Pledge = contract_Gemme({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Gemme_Pledge.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Gemme")))}); 
 
 
// LaPive
const addr_LaPive = "0xd6278113fd7f50dbd8b7ff78287459a9849387c8"
var contract_LaPive = eth.contract(desc).at(addr_LaPive)
var evt_LaPive_Transfer = contract_LaPive({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_LaPive_Transfer.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"LaPive")))});
var evt_LaPive_TransferCredit = contract_LaPive({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_LaPive_TransferCredit.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"LaPive")))});
var evt_LaPive_Pledge = contract_LaPive({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_LaPive_Pledge.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"LaPive")))}); 
 
 
// Leman-EU
const addr_LemanEU = "0xbf0c1eab5ee44a8feca229958078b5ffd34ba87c"
var contract_LemanEU = eth.contract(desc).at(addr_LemanEU)
var evt_LemanEU_Transfer = contract_LemanEU({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_LemanEU_Transfer.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Leman-EU")))});
var evt_LemanEU_TransferCredit = contract_LemanEU({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_LemanEU_TransferCredit.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Leman-EU")))});
var evt_LemanEU_Pledge = contract_LemanEU({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_LemanEU_Pledge.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Leman-EU")))}); 
 
 
// Lemanopolis
const addr_Lemanopolis = "0x85291865Ac4b11b086EAf901E6116eba014244cE"
var contract_Lemanopolis = eth.contract(desc).at(addr_Lemanopolis)
var evt_Lemanopolis_Transfer = contract_Lemanopolis({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Lemanopolis_Transfer.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Lemanopolis")))});
var evt_Lemanopolis_TransferCredit = contract_Lemanopolis({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Lemanopolis_TransferCredit.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Lemanopolis")))});
var evt_Lemanopolis_Pledge = contract_Lemanopolis({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Lemanopolis_Pledge.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Lemanopolis")))}); 
 
 
// Lokacoin
const addr_Lokacoin = "0x8a05db0410be3fdaf8b2f65db899dc101b6d781f"
var contract_Lokacoin = eth.contract(desc).at(addr_Lokacoin)
var evt_Lokacoin_Transfer = contract_Lokacoin({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Lokacoin_Transfer.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Lokacoin")))});
var evt_Lokacoin_TransferCredit = contract_Lokacoin({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Lokacoin_TransferCredit.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Lokacoin")))});
var evt_Lokacoin_Pledge = contract_Lokacoin({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Lokacoin_Pledge.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Lokacoin")))}); 
 
 
// Monnaie-Leman
const addr_MonnaieLeman = "0xB86C066396A6f21F17301E9acfec2a0Fc5c76116"
var contract_MonnaieLeman = eth.contract(desc).at(addr_MonnaieLeman)
var evt_MonnaieLeman_Transfer = contract_MonnaieLeman({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_MonnaieLeman_Transfer.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Monnaie-Leman")))});
var evt_MonnaieLeman_TransferCredit = contract_MonnaieLeman({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_MonnaieLeman_TransferCredit.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Monnaie-Leman")))});
var evt_MonnaieLeman_Pledge = contract_MonnaieLeman({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_MonnaieLeman_Pledge.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Monnaie-Leman")))}); 
 
 
// Racine
const addr_Racine = "0x1041e2bb0bbf987f09b83da40dabd2d2182152e3"
var contract_Racine = eth.contract(desc).at(addr_Racine)
var evt_Racine_Transfer = contract_Racine({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Racine_Transfer.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Racine")))});
var evt_Racine_TransferCredit = contract_Racine({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Racine_TransferCredit.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Racine")))});
var evt_Racine_Pledge = contract_Racine({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Racine_Pledge.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Racine")))}); 
 
 
// Tissou
const addr_Tissou = "0xf170c6161e973660140db5357d2acdf598e3b1df"
var contract_Tissou = eth.contract(desc).at(addr_Tissou)
var evt_Tissou_Transfer = contract_Tissou({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Tissou_Transfer.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Tissou")))});
var evt_Tissou_TransferCredit = contract_Tissou({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Tissou_TransferCredit.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Tissou")))});
var evt_Tissou_Pledge = contract_Tissou({}, {fromBlock: FBLOCK, toBlock: 'LBLOCK'});
evt_Tissou_Pledge.watch(function(error, result) {console.log(JSON.stringify(add_Currency(result,"Tissou")))});
