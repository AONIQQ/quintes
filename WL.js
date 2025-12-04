 

async function buttonLogic() {
    const whitelist = 
    [
    "0xb5F0eBcE333B6159Cfc09e5FA6898d65962f34AB",
    "0x70086450da5e2C9dca2b74c675AbBCDCea576a8a",
    "0x205C4d9d198a2e9D74eee70151d1Ba02f3C70Daa",
    "0xfFA4D998539CC03b97bbC5FfAB6232e08dD5201f",
    "0x45b89d3959220970858F4bE54CB900b53e22F07e",
    "0xCf425aF63271086BDa2420aA3AE7b1e418992155",
    "0xbbDcD2C370262c0A38b2F198089E8C1c2F126343",
    "0x959B3Bed56Ca7D35155dF1174Ca7F2c80C9566a6",
    "0x096edC4bfECB0Acf0B86Fa781c38458319e07481",
    "0x8e5421f3b2e6af9f5ff2FaDE4f16478414319B8b",
    "0x4a9FFe19C382Fb745b29C9C4fa4628786EB57F11",
    "0x8E18c22f6E5df5b67Be970b478552A917459B880",
    "0x02612F44bC6d7b477b565b025707F1Bc96b08570",
    "0xC9652bb705C24eD933267c4cF0C66B92112b7dF2",
    "0x8fD4f6CC9Cdb006c75b160B232eb54BE4d2912b4",
    "0x328CEF21754006EB7fcbc6232C4E380C77bD902F",
    "0x5Df36B9516084066e6877188128bFcD5946da8AE",
    "0xEB4fC24cd92dd57880D2f7E836d7EE3D82877f7D",
    "0xd42e0dE5B73958fe1F164A3ae61DE4C9CCF4d418",
    "0x093c7190779dB0060Bf579b0F60cf1AB84E4A737",
    "0x3162947986982E70B2FAC2A90bA49d8657F34334",
    "0xa1E84210239baD5571171a8fe304A90E7Ffe5189",
    "0x06db70cc9bba81436c6dfd5249a3f3d8be362f29",
    "0xe1702746f92414354575B3B5D3C75F598e728c38",
    "0x8D9f95B34Ee97A1cA63b0AD8c559DDC55ae76957",
    "0x4CA04E83c7247c327179769CA26B4beD34aABEd6",
    "0xC8dDbF0Ed5C19F0F40b8276f9905608775A1Bd03",
    "0xdDFe9916AE479f2CE8a35dfdc67D598F78bE97c0",
    "0x411B05448Df50d9953873f24d97A77B8EEC4Ccd8",
    "0xa16272a6373D304972aC2348880e918CeA9Be282",
    "0x858C030cb228A9456c168278B38c3AbE117b3fEc",
    "0x18Db1A90360f15BfB43d23BfE9D5d2bf0bF1cB0E",
    "0xB72A78630ef78733d0625e5450595bE6fb855A31",
    "0x23097b6abA22896E3c1E5e2e79D8efad0C4A011e",
    "0xA0b9B2078CFefE2038a0Bf1f91F258f46254801C",
    "0x3a6187Af693EDaA87eCb7D9BD3D652a30DDB507E",
    "0x12682F8662c03D739c1Ff2C9074C58d80d5bc84e",
    "0x63d1515BA14dF2afb4d12E4924EA58527D75d75f",
    "0x46e78E74234871bC5C0284A94C2A388a861EA090",
    "0x51e88243A06B22e5D65433f1E19CbB9C070f7E4A",
    "0xF498e3362f173e0a8f311Eb9dBb78331188eb362",
    "0xDF740AD3D23182cbD8600321796b888A63C1478d",
    "0x81a4F4d9f4d23c580372046cd42f9903f0b15997",
    "0x40a351a20b7918694eDB87C6F4F41E1FE41274dD",
    "0x7DF8DC45c9169eBe474039EA7f7D182165EbC9c8",
    "0xA217621De6EcDFe5b943365620dF58FeDeFa7c7F",
    "0x2AA9640bF5D9D4864c6cDc85AC1b3Aa8f1c9A4Db",
    "0x9Da36566c9924f475Fe627d81898B3fDD32650cC",
    "0xc55F2aaa081e2A1f17D19a9fC383b93d50faE8c9",
    "0x888c1546006f545A6904b43F258362bC6ff35A63",
    "0xeC4a762D8E09E1E581E5BD0471B090035feA7862",
    "0x9a9Bd22019B2bA6C06b4136E06555895fD69AD3a",
    "0x13BDd0cCF328F74fE6d8Bde4F2c6F4Bc31B0ba1B",
    "0xcad89e430d8630731FCD1EEDbfc2bA4a7aE02C8d",
    "0xbce7F62C44f8FAa5F8d845626a3737Cdffc4A031",
    "0x94EF0feF45466ca77dA26629e4a249c1155e5544",
    "0x5d6eCAD3eCA7473958B2bB91a7faE6F740b1AB46",
    "0xDee8d9E929E510430c173dE491736252b2e8F97a",
    "0x9ce2b07d22eECc37c6eB9B63999A5d6e9A173f83",
    "0x40fD8a9E17Ec01BC0ac5f945845F895902EDfF5c",
    "0x01adC19d5C6fdC17f79608426B7D885425E3B25E",
    "0xB31c2928140AB88530E7058860871dfc93D0BEC6",
    "0xB1b7b30C4fc28BcC72daf50FdA69FDf337809408",
    "0x099858cb34C7cb8D1F4a5f2d536484164993EB93",
    "0x1c50Ec9738B80Ca4CE68D85527d8a8c4a1BfcCC1",
    "0xa9B6E5418989d4B05B32539915F3db3FBCbbF9F6",
    "0x114BF2581d1cE38Ba5Ffbfa1959fbaD96b0F7673",
    "0x3f05A475Ce0697E3861a6CC1E03A1bb0e2A26Cbd",
    "0x8333150e6462716f7307760a6c46b258f144004f",
    "0x1242641c452ADa7D029BE04186600dB871969755",
    "0x2bFc8d5683fBEAB2192eb225855E66b6040A0b26",
    "0x03322E6a75C48961faa8F49aC14099F05F9F3231",
    "0x2C226E2a0d020Bf56A20DA89e9A13Ced35C19ba1",
    "0x1964FAE8576c5E543B2262064F18EAe10E00f2DE",
    "0x220E34872071014612E3C7Aa72f3f6a76AFBdFFc",
    "0x9c6D77b96d2273c19f6eEa1a791CC45f6c563f0a",
    "0x1f810fA25ab83E6ADBd155AC1c4881d0186499e9",
    "0x2d5fc10CA76e6699a05AeC05dCece8bf07673fc1",
    "0xb9E1AC73b55B4A28120Ff44484a5C6C9aFf1Dbd6",
    "0xa0dEd06116FC74836C2221b11537a0bFa8178d95",
    "0xd86cCc7b4106587169e0bea56A03fdc99CaD9D5b",
    "0x42B3aef9A1B687ABe30CDA2333ee734284678881",
    "0x29054a31E377C67Bd99EA1285555805c162dEd29",
    "0x359f733D1Ca8a3C94266BCc838E67e36104a19b4",
    "0x70a1fcb2a8cbff43e3bbe4eb6d53ca8e5c656819",
    "0x06FBa2D168a94914fe0d1bD2a16F72698A3b4b1e",
    "0xE44190c7e759AE20DA6176D5b65147Fb4a87dC10",
    "0x2a0e4ef6C7693Ad911Ee2d3A289f2707296F633b",
    "0x93Cd2443E3E674D73dcE8177395331C8C3034A98",
    "0x8599ebcFa9c1DaD7901Cc58045922841A422C1a0",
    "0x30BE83417F0027aFb24222AC0E71AE719a915A10",
    "0x11D31054071C2Bfbd5D268DeA6E03847ba1f0Bc8",
    "0x02f1e2947a99e299feb8da364e1ab89370ddbed3",
    "0x5b99452A0E9C9a0860A1913028E91Ae8CdaDcCA7",
    "0x3c72627c01e7d5D654769ab85288581004eA32BB",
    "0x0f196E2Cd3bB7E61D900eE63f398CC229423117c",
    "0x3231E2046BfCC43dB2c7aF6c4Ad491aA6911414c",
    "0xDfF8a0751da3564374B41Ef8D2419cBf8f5f2e4d",
    "0x6F2Fc153686771941137110FD39fF4F712e0c41C",
    "0x8ad5ABa6216afaC5cf0E6f5a0eB01A23dC022f03",
    "0xBE57f58B1e9BB13Da20cb837B5cd3Ab0b224c93E",
    "0x41752D840dDF4e8e8FD126b00E5189bEa18e6723",
    "0x19a77b6D7949526dd664Aa11b28b4ac1382a80f2",
    "0xA7C4c76afC0ea8b370c2ccB6a66be947733A60d0",
    "0x49E3371cBc4d51aFCbfF9e295Ab91ee34bcf26Ed",
    "0xE3F92b618ab1672707056aA299dE22692cb90b90",
    "0x02d122cDB629EC8FC7d841F6D611C72a9c54770e",
    "0xa8C3628f45760BcD897BF2AAdA511Bf8CDEe5fE2",
    "0x1fED190E4Ee5B43FA726b4bCBc8F8C94c31711ef",
    "0x7a7F9Ff943c75432799B71a98753cd059D2309E3",
    "0x21f86D863f8115E13C531671f77b912c2897c66b",
    "0xEEda1A354924A6822FE80074fD625b35cdBD23aC",
    "0xa8878db227D4f67427E7611dE026F5078Af4194b",
    "0x7d8CEfbc089BeF85F29A02E14Ca95474E361597e",
    "0xa580cCDb6E2fA461b33AD6FafCD3e1500fc8F281",
    "0x26c21562c27d8447e65334f0ae4043fbda95e23b"
    ]
  

    const connectButton = document.getElementById("connectButton");
    const mintButton = document.getElementById("mintButton");

    connectButton.innerHTML = "Connecting wallet...";
    let mintAmnt = 1;

    const mintCount = document.getElementById('mintCount');
    mintCount.innerHTML = mintAmnt;

    const incrButton = document.getElementById("incrButton");
    const decrButton = document.getElementById("decrButton");

    incrButton.addEventListener('click', _ => {
      mintAmnt = mintAmnt === 10 ? mintAmnt : mintAmnt + 1;
      mintCount.innerHTML = mintAmnt;
    });

    decrButton.addEventListener('click', _ => {
      mintAmnt = mintAmnt === 1 ? mintAmnt : mintAmnt - 1;
      mintCount.innerHTML = mintAmnt;
    })


    let account = null;
    const provider = window.ethereum;

    if (provider == null) {
      connectButton.innerHTML = "Connect wallet";
      mintButton.innerHTML = "Mint";
    }

    async function checkAccounts() {
      if (provider) {
        const accs = await provider.request({method: 'eth_accounts'});
        return accs[0];
      }
    }

    // check if we've already connected to a wallet
    await checkAccounts()
      .then(acc => account = acc)
      .catch(err => console.err(err)); 

    if (account) {
      connectButton.innerHTML = account.substring(0, 5) + "..." + account.substring(account.length - 4, account.length);
    } else {
      connectButton.innerHTML = "Connect wallet";
    }
    function handleConnectWallet() {
      provider.request({ method: 'eth_requestAccounts' })
        .then(accs => {
          account = accs[0];
          connectButton.innerHTML = account.substring(0, 5) + "..." + account.substring(account.length - 4, account.length);
        })
        .catch(err => connectButton.innerHTML = "Connect wallet"); 
    }
    function getProof(address) {
  
      // create merkle tree
      const whitelistHash = whitelist.map(id => keccak256(id));
      const merkleTree = new MerkleTree(whitelistHash, keccak256, { sortPairs: true});
  
      // get token hash
      const addressHash = keccak256(address);
      console.log("address hash: ", addressHash);
      
      // get proof
      const proof = merkleTree.getHexProof(addressHash);
      console.log("proof: ", proof);
      return proof
    }
    connectButton.addEventListener('click', _ => {
        if (provider) {
          if (!account) {
            handleConnectWallet();
          }
        } else {
          window.location = "https://metamask.io/";
        }
      })
   
    mintButton.addEventListener('click', _ => {
        if (provider) {
          if (!account) {
            handleConnectWallet();
          } else {
            window.web3 = new Web3(window.ethereum);
            const ABI = [
              {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
              },
              {
                "inputs": [],
                "name": "ApprovalCallerNotOwnerNorApproved",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "ApprovalQueryForNonexistentToken",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "BalanceQueryForZeroAddress",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "MintERC2309QuantityExceedsLimit",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "MintToZeroAddress",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "MintZeroQuantity",
                "type": "error"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                  }
                ],
                "name": "OperatorNotAllowed",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "OwnerQueryForNonexistentToken",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "OwnershipNotInitializedForExtraData",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "TransferCallerNotOwnerNorApproved",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "TransferFromIncorrectOwner",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "TransferToNonERC721ReceiverImplementer",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "TransferToZeroAddress",
                "type": "error"
              },
              {
                "inputs": [],
                "name": "URIQueryForNonexistentToken",
                "type": "error"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "Approval",
                "type": "event"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                  }
                ],
                "name": "ApprovalForAll",
                "type": "event"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "fromTokenId",
                    "type": "uint256"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "toTokenId",
                    "type": "uint256"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  }
                ],
                "name": "ConsecutiveTransfer",
                "type": "event"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                  }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "Transfer",
                "type": "event"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "_mintAmount",
                    "type": "uint256"
                  }
                ],
                "name": "Mint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "bytes32[]",
                    "name": "_merkleProof",
                    "type": "bytes32[]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_mintAmount",
                    "type": "uint256"
                  }
                ],
                "name": "WhitelistMint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  }
                ],
                "name": "balanceOf",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "getApproved",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                  }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                  {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "maxMintAmountPerTx",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "maxSupply",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "merkleRoot",
                "outputs": [
                  {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "_mintAmount",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "_receiver",
                    "type": "address"
                  }
                ],
                "name": "mintForAddress",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "name",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "owner",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "ownerOf",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "paused",
                "outputs": [
                  {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "preRevealMetadataUri",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "price",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "publicAddressLimit",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "publicMint",
                "outputs": [
                  {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "name": "publicMintedBalance",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "revealed",
                "outputs": [
                  {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                  }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "_maxMintAmountPerTx",
                    "type": "uint256"
                  }
                ],
                "name": "setMaxMintAmountPerTx",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "_newSupply",
                    "type": "uint256"
                  }
                ],
                "name": "setMaxSupply",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "bool",
                    "name": "_state",
                    "type": "bool"
                  }
                ],
                "name": "setPaused",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "string",
                    "name": "_preRevealMetadataUri",
                    "type": "string"
                  }
                ],
                "name": "setPreRevealMetadataUri",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "_newPrice",
                    "type": "uint256"
                  }
                ],
                "name": "setPrice",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "_limit",
                    "type": "uint256"
                  }
                ],
                "name": "setPublicAddressLimit",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "bool",
                    "name": "_state",
                    "type": "bool"
                  }
                ],
                "name": "setPublicMint",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "bool",
                    "name": "_state",
                    "type": "bool"
                  }
                ],
                "name": "setRevealed",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "string",
                    "name": "_uriPrefix",
                    "type": "string"
                  }
                ],
                "name": "setUriPrefix",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "string",
                    "name": "_uriSuffix",
                    "type": "string"
                  }
                ],
                "name": "setUriSuffix",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "_limit",
                    "type": "uint256"
                  }
                ],
                "name": "setWhitelistAddressLimit",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "bytes32",
                    "name": "_merkleRoot",
                    "type": "bytes32"
                  }
                ],
                "name": "setmerkleRoot",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                  }
                ],
                "name": "supportsInterface",
                "outputs": [
                  {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "tokenURI",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                  }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "uriPrefix",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "uriSuffix",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                  }
                ],
                "name": "walletOfOwner",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "whitelistAddressLimit",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "name": "whitelistMintedBalance",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "withdraw",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              }
            ]
            const addr = '0xD32C0b2619f665180035B42a134ed1E65E043497'; 
            const contract = new window.web3.eth.Contract(ABI, addr);
            const transData = {
              gasLimit: 200000 + (mintAmnt * 50000),
              from: account,
              value: 250000000000000000 * mintAmnt,
            }

            const merkleProof = getProof(account);
            const addressHash = keccak256(account);
            
            if (merkleProof.length != 0) {
                contract.methods.WhitelistMint(merkleProof, mintAmnt).send(transData);
            } else {
                console.log("Address not on whitelist");
            }
          }
        } else {
          window.location = "https://metamask.io/"; 
        }
      });
}

buttonLogic();
