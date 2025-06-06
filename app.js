document.addEventListener('DOMContentLoaded', () => {
    // Mock 3D Viewer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, 600);
    document.getElementById('editor').appendChild(renderer.domElement);

    // Mock Car
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Wallet Connection
    document.querySelector('.wallet-btn').addEventListener('click', () => {
        document.getElementById('mintCount').textContent = 
            parseInt(document.getElementById('mintCount').textContent) + 1;
        alert("You NFTEED IT! 🎉\n(Simulated mint - add Web3 integration)");
    });
});