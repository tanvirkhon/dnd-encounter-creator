/************************************************************************
 Variables for 3D setup
 ***********************************************************************/
// Variables for dragon scene
let container;
let camera;
let renderer;
let scene;
let dragon;

/************************************************************************
Functions for 3D setup
***********************************************************************/

function init() {
  container = document.querySelector(".scene");

  // Create Scene
  scene = new THREE.Scene();

  //Camera
  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 400;

  // Camera Setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(-10, 10, 69);

  // Lighting
  const ambient = new THREE.AmbientLight(0x404040, 5);
  scene.add(ambient);

  const directionLighting = new THREE.DirectionalLight(0xffffff, 12);
  directionLighting.position.set(10, 10, 10);
  scene.add(directionLighting);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  // Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./assets/3D-models/deathwing/scene.gltf", function (gltf) {
    scene.add(gltf.scene);
    dragon = gltf.scene.children[0];
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  dragon.rotation.z += 0.003;
  renderer.render(scene, camera);
}

init();

// Resize function to fit screens
function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

/************************************************************************
Event Listener
***********************************************************************/

window.addEventListener("resize", onWindowResize);
