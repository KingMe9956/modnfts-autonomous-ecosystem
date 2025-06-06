// Request body
{
  "signature": "0x...",
  "message": "NFTEED IT! Login: 123456",
  "publicAddress": "0x..."
}
// Example of part swapping
async function swapPart(partName, newPartUrl) {
  const loader = new GLTFLoader();
  const oldPart = currentCar.getObjectByName(partName);
  
  try {
    const gltf = await loader.loadAsync(newPartUrl);
    const newPart = gltf.scene.children[0];
    newPart.position.copy(oldPart.position);
    newPart.rotation.copy(oldPart.rotation);
    currentCar.remove(oldPart);
    currentCar.add(newPart);
  } catch (error) {
    console.error('Error swapping part:', error);
  }
}
// In your app
import { create } from 'ipfs-core';

const ipfs = await create();
async function uploadToIPFS(data) {
    const { cid } = await ipfs.add(data);
    return cid.toString();
}
// Example mint function
async function mintNFT(metadataCID) {
    const contract = new ethers.Contract(
        modNFTsContractAddress,
        modNFTsABI,
        signer
    );
    
    const tx = await contract.mintNFT(
        `ipfs://${metadataCID}`,
        { value: mintFee }
    );
    
    return tx.wait();
}