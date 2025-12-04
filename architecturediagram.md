graph TD

%% Layers
subgraph L4[Layer 4 – Storage / Metadata]
  IPFSBase["IPFS Base URI\n(Revealed metadata)"]
  IPFSPre["IPFS Pre-Reveal URI\n(Placeholder JSON)"]
end

subgraph L3[Layer 3 – Frontend]
  MintSite["Public Mint Website\n(GTD + FCFS Mint Page)"]
  Wallet["User Wallet\n(MetaMask / WalletConnect)"]
end

subgraph L2[Layer 2 – Admin / Backend]
  AdminPanel["Admin Panel / Scripts"]
  CSV["Allowlist CSV\n(GTD wallets)"]
  Merkle["Merkle Tree Generator"]
end

subgraph L1[Layer 1 – Contract]
  Contract["QuintesNFT\n(ERC721A + Ownable)"]
end

%% Flows: Admin & Allowlist
CSV --> Merkle
Merkle -->|Merkle Root| AdminPanel
AdminPanel -->|setGtdMerkleRoot| Contract
AdminPanel -->|setGtdPhaseActive / setFcfsPhaseActive| Contract
AdminPanel -->|ownerMint\n(company reserve)| Contract
AdminPanel -->|airdropGTD\n(collabs / ambassadors)| Contract

%% Flows: Frontend & Users
MintSite -->|Connect Wallet| Wallet
Wallet -->|mintGTD / mintFCFS\n(contract calls)| Contract
MintSite -->|Fetch status\n(phase, supply)| Contract
MintSite -->|Merkle proof\n(generate or fetch)| Merkle
Merkle -->|Proof| MintSite

%% Flows: Metadata
Contract -->|tokenURI()| IPFSBase
Contract -->|preRevealMetadataUri| IPFSPre
