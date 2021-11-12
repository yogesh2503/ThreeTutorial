const roadArray = [];

function createRoad() {
  const textureLoader = new THREE.TextureLoader();
  const textureRoad = textureLoader.load("road.jpg");
  const geometry = new THREE.PlaneGeometry(10, 10);
  const material = new THREE.MeshBasicMaterial({
    map: textureRoad,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(geometry, material);
  return plane;
}
function createRoadArray() {
  const road = createRoad();
  for (let i = 0; i < 10; i++) {
    roadArray[i] = i === 0 ? road : road.clone();
    scene.add(roadArray[i]);
    roadArray[i].position.z = -i * 10;
    roadArray[i].rotation.x = Math.PI * 0.5;
  }
}
function drawRoad(spd) {
  for (let i = 0; i < roadArray.length; i++) {
    if (roadArray[i].position.z > 10)
      roadArray[i].position.z =
        roadArray[(i == 0 ? roadArray.length : i) - 1].position.z - 10;
  }
  for (let i = 0; i < roadArray.length; i++) {
    roadArray[i].position.z += spd;
  }
}
