function createWheels() {
  const geometry = new THREE.CylinderGeometry(1.0, 1.0, 1, 32);
  const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
  const wheel = new THREE.Mesh(geometry, material);
  wheel.rotation.z = Math.PI * 0.5;
  wheel.rotation.y = Math.PI * 0.5;
  return wheel;
}

function createCar() {
  const car = new THREE.Group();

  const backRightWheel = createWheels();
  backRightWheel.position.set(-1.8, 0.6, -1.8);
  car.add(backRightWheel);

  const backLeftWheel = createWheels();
  backLeftWheel.position.set(-1.8, 0.6, 1.8);
  car.add(backLeftWheel);

  const frontRightWheel = createWheels();
  frontRightWheel.position.set(1.8, 0.6, -1.8);
  car.add(frontRightWheel);

  const frontLeftWheel = createWheels();
  frontLeftWheel.position.set(1.8, 0.6, 1.8);
  car.add(frontLeftWheel);

  const main = new THREE.Mesh(
    new THREE.BoxBufferGeometry(6, 1.5, 3),
    new THREE.MeshLambertMaterial({ color: 0x78b14b })
  );
  main.position.y = 1.2;
  car.add(main);

  const cabin = new THREE.Mesh(
    new THREE.BoxBufferGeometry(3.3, 1.2, 2.4),
    new THREE.MeshLambertMaterial({ color: 0xfafafa })
  );
  cabin.position.x = -0.6;
  cabin.position.y = 2.55;
  car.add(cabin);

  car.position.z = -5;
  car.scale.set(0.5, 0.5, 0.5);
  car.rotation.y = -Math.PI * 0.5;
  scene.add(car);
  return car;
}
let vx = 0;
function drawCar() {
  if (speed === 0) return;
  if (vx > 0) {
    if (car.position.x < 2.5) {
      car.position.x += vx;
      if (car.position.x >= 2.5) {
        vx = 0;
      }
    }
  }
  if (vx < 0) {
    if (car.position.x > -2.5) {
      car.position.x += vx;
      if (car.position.x <= -2.5) {
        vx = 0;
      }
    }
  }
}
function dealWithKeyboard(e) {
  switch (e.keyCode) {
    case 37: //left
      vx = -0.2;
      break;
    case 39: //Right
      vx = 0.2;
      break;
    case 32:
      resetPlay();
      break;
  }
  console.log(e.keyCode);
}
