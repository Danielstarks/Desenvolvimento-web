const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight, 0,1, 1000);

const renderer = new THREE.WebGLRenderer (scene);
renderer.setSize (window.innerWidth / window.innerHeight);
document.body.appendChild(renderer.domElement);