import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.
    PerspectiveCamera(
        75,
        innerWidth / innerHeight,
        0.1,
        1000
    )

const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth,innerHeight)
document.body.appendChild(renderer.domElement);

const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00F0F0, wireframe:true})
const boxGeometry = new THREE.BoxGeometry(1,1,1)
    boxGeometry.rotateZ(25)
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
    scene.add(boxMesh)


const octaMaterial = new THREE.MeshBasicMaterial({color: 0xFF00FF, wireframe:true})
const octaGeometry = new THREE.OctahedronGeometry(1,1,1)
    const octaMesh = new THREE.Mesh(octaGeometry, octaMaterial)
    scene.add(octaMesh)

camera.position.z = 5


function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    boxMesh.rotation.x += .01;
    boxMesh.rotation.y += .01;
    octaMesh.rotation.x += .015;
    octaMesh.rotation.y += .015;
}

animate()
