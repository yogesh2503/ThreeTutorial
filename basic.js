const playBtn = document.getElementById('centertxt');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
let speed = 0.0;
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight);
var loader = new THREE.GLTFLoader();
loader.load("./scene.glb", (obj) => {
  //scene.add(obj.scene); // uncomment if you req to show gltf file
  obj.scene.scale.set(5, 5, 5);
  obj.scene.position.set(0, 0, -5);
});
// cube.position.z = -8;
// scene.add(cube);
const car = createCar();
createRoadArray();
createHurdle();
camera.position.z = 0;
camera.position.y = 5;
camera.rotation.x = -Math.PI * 0.23;
document.addEventListener("keydown", dealWithKeyboard);
const animate = function () {
  requestAnimationFrame(animate);
  // car.rotation.x += 0.01;
  // car.rotation.y += 0.01;
  drawCar();
  drawRoad(speed);
  drawHurdle(speed);
  renderer.render(scene, camera);
};

animate();
