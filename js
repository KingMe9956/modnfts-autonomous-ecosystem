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