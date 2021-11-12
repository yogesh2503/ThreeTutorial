const hurdleArray = [];
function createHurdle() {
  // radiusTop,radiusBottom,height,radialSegments,heightSegments
  const cylinder = new THREE.Mesh(
    new THREE.CylinderGeometry(0.6, 1.4, 2, 32),
    new THREE.MeshLambertMaterial({ color: 0xdd2c00 })
  );
  scene.add(cylinder);
  hurdleArray.push(cylinder);

  //radius,widthSegments,heightSegments
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.0, 32, 16),
    new THREE.MeshLambertMaterial({ color: 0xff6d00 })
  );
  scene.add(sphere);
  hurdleArray.push(sphere);

  const box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(2, 2, 2),
    new THREE.MeshLambertMaterial({ color: 0xff6d00 })
  );
  scene.add(box);
  hurdleArray.push(box);

  for (let i = 0; i < 12; i++) {
    const cloneObj = hurdleArray[i % 3].clone();
    hurdleArray.push(cloneObj);
    scene.add(cloneObj);
  }

  for (let i = 0; i < hurdleArray.length; i++) {
    hurdleArray[i].position.set(
      (Math.floor(Math.random() * 3) - 1) * 2.5,
      0.65,
      -20 - i * 10
    );
  }
}
function drawHurdle(spd) {
  for (let i = 0; i < hurdleArray.length; i++) {
    if (hurdleArray[i].position.z > 10) {
      hurdleArray[i].position.z =
        hurdleArray[(i == 0 ? hurdleArray.length : i) - 1].position.z - 10;
      hurdleArray[i].position.x = (Math.floor(Math.random() * 3) - 1) * 2.5;
    }
  }
  for (let i = 0; i < hurdleArray.length; i++) {
    hurdleArray[i].position.z += spd;
    
    const dist = hurdleArray[i].position.distanceTo(car.position)
    if(dist < 2){
        speed = 0;
        playBtn.style.display = 'block';
    }
  }
}

function resetPlay(){
  playBtn.style.display = 'none';
  speed = 0.3;
  for (let i = 0; i < hurdleArray.length; i++) {
    hurdleArray[i].position.set(
      (Math.floor(Math.random() * 3) - 1) * 2.5,
      0.65,
      -50 - i * 10
    );
  }
}
