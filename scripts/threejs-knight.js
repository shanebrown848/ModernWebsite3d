// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("chessCanvas"), alpha: true });

// Adjust the renderer size
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Brighter light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1.5);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Load 3D model
const loader = new THREE.GLTFLoader();
let knightModel;

loader.load("images/chess_piece_-_knight.glb", function (gltf) {
    knightModel = gltf.scene;
    
    // Increase size and center it
    knightModel.scale.set(25, 25, 25); // Bigger size
    knightModel.position.set(0, 2, 0); // Move it up slightly

    scene.add(knightModel);
}, undefined, function (error) {
    console.error("Error loading the model:", error);
});

// Move camera back to make model visible
camera.position.set(0, 1.5, 6);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    if (knightModel) {
        knightModel.rotation.y += 0.015; // Smooth spinning effect
    }

    renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start animation
animate();

