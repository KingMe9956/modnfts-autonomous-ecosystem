# Deploy to modNFTs network
npx hardhat deploy --network modnfts --tags core

# Verify contracts
REACT_APP_AUTOMOTIVE_ADDR=0x... \
REACT_APP_REPUTATION_ADDR=0x... \
npx hardhat run scripts/verify.ts --network modnfts

# Post-Deploy Configuration
# (Add additional mechanics after deployment)
npx hardhat console --network modnfts
> const rep = await ethers.getContractAt("MechanicReputation", "0x...");
> await rep.verifyMechanic("0xNEWMECH", ["Diesel"], ["HeavyDuty"]);# Deploy to modNFTs network
npx hardhat deploy --network modnfts --tags MechanicReputation,ModNFTsAutomotive

# Verify contracts
npx hardhat etherscan-verify --network modnfts

# Add additional verifiers
VERIFIERS="0xabc,0xdef" npx hardhat run deploy/01_configure_roles.ts --network modnfts# Install Certora Prover
pip install certora-cli
export CERTORAKEY=<your-api-key>  # Get from certora.com

# Create verification directory
mkdir certora
touch certora/{specs,conf}npx hardhat coverage --network hardhat$ npx hardhat test

  ModNFTs Automotive
    Vehicle Title Minting
      ✓ Should mint a classic car NFT
      ✓ Should prevent minting with invalid VIN (45ms)
      ✓ Should store EV specifications correctly
    Service Records
      ✓ Should add verified mechanic service (56ms)
      ✓ Should block unverified mechanics
    Ownership Transfers
      ✓ Should track ownership history (54ms)
      ✓ Should enforce transfer permissions
    Royalty System
      ✓ Should calculate 7.5% royalty
    Mechanic Reputation
      ✓ Should allow owner to verify mechanics
      ✓ Should prevent unauthorized verification

  10 passing (2s)$ npx hardhat test

  ModNFTsAutomotive
    Vehicle Title Minting
      ✓ Should mint a classic car NFT
      ✓ Should prevent minting with invalid VIN (45ms)
      ✓ Should store EV specifications correctly
    Service Records
      ✓ Should add verified mechanic service (56ms)
      ✓ Should block unverified mechanics
    Ownership Transfers
      ✓ Should track ownership history (54ms)
      ✓ Should enforce transfer permissions
    Royalty System
      ✓ Should calculate 7.5% royalty
    Mechanic Reputation
      ✓ Should allow owner to verify mechanics
      ✓ Should prevent unauthorized verification

  10 passing (2s)