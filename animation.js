



// THIS IS A ROBOT

// Set up the Three.js scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

// Set up the Three.js renderer
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("canvas"), antialias: true});
renderer.setClearColor("#000000");
renderer.setSize(window.innerWidth / 2, window.innerHeight);

// Create a robot model
var robot = new THREE.Group();

var bodyGeometry = new THREE.BoxGeometry(2, 2, 2);
var bodyMaterial = new THREE.MeshBasicMaterial({color: "#ff0000"});
var body = new THREE.Mesh(bodyGeometry, bodyMaterial);
robot.add(body);

var headGeometry = new THREE.BoxGeometry(1, 1, 1);
var headMaterial = new THREE.MeshBasicMaterial({color: "#00ff00"});
var head = new THREE.Mesh(headGeometry, headMaterial);
head.position.y = 1.5;
robot.add(head);

var armGeometry = new THREE.BoxGeometry(0.5, 1.5, 0.5);
var armMaterial = new THREE.MeshBasicMaterial({color: "#0000ff"});
var leftArm = new THREE.Mesh(armGeometry, armMaterial);
leftArm.position.x = -1;
leftArm.position.y = 0.5;
robot.add(leftArm);

var rightArm = new THREE.Mesh(armGeometry, armMaterial);
rightArm.position.x = 1;
rightArm.position.y = 0.5;
robot.add(rightArm);

var legGeometry = new THREE.BoxGeometry(0.5, 1.5, 0.5);
var legMaterial = new THREE.MeshBasicMaterial({color: "#ffff00"});
var leftLeg = new THREE.Mesh(legGeometry, legMaterial);
leftLeg.position.x = -0.5;
leftLeg.position.y = -1;
robot.add(leftLeg);

var rightLeg = new THREE.Mesh(legGeometry, legMaterial);
rightLeg.position.x = 0.5;
rightLeg.position.y = -1;
robot.add(rightLeg);

scene.add(robot);

// Animate the robot moving around
var speed = 0.1;
var direction = new THREE.Vector3(1, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  robot.position.add(direction.clone().multiplyScalar(speed));
  
  if (robot.position.x > 5 || robot.position.x < -5) {
    direction.multiplyScalar(-1);
  }
  
  renderer.render(scene, camera);
}
animate();









// // Set up the Three.js scene and camera
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Set up the Three.js renderer
// var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("canvas"), antialias: true});
// renderer.setClearColor("#000000");
// renderer.setSize(window.innerWidth / 2, window.innerHeight);

// // Create a Three.js mesh to display
// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshBasicMaterial({color: "#ffffff"});
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Create a plane to serve as the ground
// var planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
// var planeMaterial = new THREE.MeshBasicMaterial({color: "#00ff00", wireframe: true});
// var plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.rotation.x = -Math.PI / 2;
// plane.position.y = -1;
// scene.add(plane);

// // Add lighting and shadows
// var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);
// var pointLight = new THREE.PointLight(0xffffff, 1, 100);
// pointLight.position.set(5, 5, 5);
// scene.add(pointLight);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// cube.castShadow = true
// cube.receiveShadow = true;
// plane.receiveShadow = true;
// pointLight.castShadow = true;

// // Set up an animation loop to rotate the mesh
// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();









// // Set up the Three.js scene and camera
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Set up the Three.js renderer
// var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("canvas"), antialias: true});
// renderer.setClearColor("#000000");
// renderer.setSize(window.innerWidth / 2, window.innerHeight);

// // Create a Three.js mesh to display
// var geometry = new THREE.TorusGeometry(1, 0.5, 16, 100);
// var material = new THREE.MeshPhongMaterial({color: "#ff00ff", specular: "#ffffff", shininess: 100, flatShading: false});
// var torus = new THREE.Mesh(geometry, material);
// scene.add(torus);

// // Add lighting and shadows
// var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);
// var pointLight = new THREE.PointLight(0xffffff, 1, 100);
// pointLight.position.set(5, 5, 5);
// scene.add(pointLight);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// torus.castShadow = true;
// torus.receiveShadow = true;
// pointLight.castShadow = true;

// // Set up an animation loop to rotate the mesh
// function animate() {
//   requestAnimationFrame(animate);
//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();



// // Set up the Three.js scene and camera
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Set up the Three.js renderer
// var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("canvas"), antialias: true});
// renderer.setClearColor("#000000");
// renderer.setSize(window.innerWidth / 2, window.innerHeight);

// // Create a Three.js mesh to display
// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshBasicMaterial({color: "#ffffff"});
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Set up an animation loop to rotate the mesh
// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// animate();
