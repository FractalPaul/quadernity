if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

var camera, scene, renderer, stats, controls;
var xFlip = 1; // factor for flipping across the axis for the Parametric Equations.
var paraFlip = 1; // factor for flipping across the axis for the Parametric Equations.

init();
scaleCamera();

animate();

function init() {
    var container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.y = 400;
    scene = new THREE.Scene();

    //
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);
    var pointLight = new THREE.PointLight(0xffffff, 0.8);

    camera.add(pointLight);

    scene.add(camera);
    //

    //drawBox();
    drawParametricGeometry();
    drawAxis();

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    stats = new Stats();
    container.appendChild(stats.dom);

    window.addEventListener('resize', onWindowResize, false);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    //controls.update() must be called after any manual changes to the camera's transform
    //camera.position.set( 0, 20, 100 );
    //controls.update();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function scaleCamera() {
    camera.zoom = 1.5;
    camera.updateProjectionMatrix();
    controls.update();
}

function drawAxis() {
    var lineLen = 70;
    var matLine = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });

    var geoX = new THREE.Geometry();
    geoX.vertices.push(new THREE.Vector3(0, 0, 0));
    geoX.vertices.push(new THREE.Vector3(lineLen, 0, 0));
    var xLine = new THREE.Line(geoX, matLine); // blue X-Axis
    scene.add(xLine);

    var geoY = new THREE.Geometry();
    geoY.vertices.push(new THREE.Vector3(0, 0, 0));
    geoY.vertices.push(new THREE.Vector3(0, lineLen, 0));
    var yLine = new THREE.Line(geoY, new THREE.LineBasicMaterial({
        color: 0x00ffff
    }));                                        // cyan Y-Axis
    scene.add(yLine);

    var geoZ = new THREE.Geometry();
    geoZ.vertices.push(new THREE.Vector3(0, 0, 0));
    geoZ.vertices.push(new THREE.Vector3(0, 0, lineLen));
    var zLine = new THREE.Line(geoZ, new THREE.LineBasicMaterial({
        color: 0xff0000
    }));                                        // red Z-Axis
    scene.add(zLine);
}

function animate() {
    requestAnimationFrame(animate);

    render();

    stats.update();
}

function render() {


    scene.traverse(function (object) {
        if (object.isMesh === true) {
            object.rotation.x = 0.01;

            //object.rotation.y = 0.01;
        }
    });

    renderer.render(scene, camera);
}

function drawParametricGeometry() {
    var sizeFactor = 50;
    var angleFactor = 14;
    var group = new THREE.Group();

    var map = new THREE.TextureLoader().load('textures/UV_Grid_Sm.jpg');
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 16;

    var material = new THREE.MeshPhongMaterial({
        map: map,
        side: THREE.DoubleSide,
        color: 0x2194ce
    });

    var geometry, object;

    //for (var i = 0; i < 4; i++) {
    //         geometry = new THREE.ParametricBufferGeometry(parametricQuad, 20, 20);
    //         object = new THREE.Mesh(geometry, material);
    //         object.scale.multiplyScalar(sizeFactor);
    //  object.rotateX(Math.PI/4);

    //         scene.add(object);
    //         xFlip *= -1;
    //         if (i >= 1) paraFlip = -1;
    //     //}

    // one quarter of the Quadternity. (1 side)
    geometry = new THREE.ParametricBufferGeometry(parametricQuad1, 20, 20);
    object = new THREE.Mesh(geometry, material);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(-Math.PI / angleFactor);
    // object.translateX(sizeFactor);
    group.add(object);

    // 2nd quarter of the Quadternity (1 side)
    geometry = new THREE.ParametricBufferGeometry(parametricQuad2, 20, 20);
    object = new THREE.Mesh(geometry, material);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(-Math.PI / angleFactor);
    // object.translateX(sizeFactor); 

    group.add(object);

    // 3rd quarter of the Quadternity (2nd side)
    geometry = new THREE.ParametricBufferGeometry(parametricQuad3, 20, 20);
    object = new THREE.Mesh(geometry, material);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(Math.PI / angleFactor);
    //object.rotation.x = 1;
    //object.translateX(sizeFactor);        

    group.add(object);

    // 4th quarter of the Quadternity (2nd side).
    geometry = new THREE.ParametricBufferGeometry(parametricQuad4, 20, 20);
    object = new THREE.Mesh(geometry, material);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(Math.PI / angleFactor);
    //object.translateX(sizeFactor);    

    group.add(object);

    scene.add(group);
    
    group.rotateX(Math.PI/2);
    group.rotateY(Math.PI/2);
    group.translateX(sizeFactor);
}

function parametricQuad(u, t, target) {
    //u *= Math.PI;
    var v = t * 2 * Math.PI;

    var x, y, z;

    y = xFlip * v * paraFunc1(u);
    x = paraFunc2(v);
    z = paraFlip * paraFunc3(v);

    target.set(x, y, z);
}

function parametricQuad1(u, t, target) {
    //u *= Math.PI;
    var v = t * 2 * Math.PI;

    var x, y, z;

    y = v * paraFunc1(u);
    x = paraFunc2(v);
    z = paraFunc3(v);
    x -= 1;
    target.set(x, y, z);
}

function parametricQuad2(u, t, target) {
    //u *= Math.PI;
    var v = t * 2 * Math.PI;

    var x, y, z;

    y = -v * paraFunc1(u);
    x = paraFunc2(v);
    z = paraFunc3(v);
    x -= 1;
    target.set(x, y, z);
}

function parametricQuad3(u, t, target) {
    //u *= Math.PI;
    var v = t * 2 * Math.PI;

    var x, y, z;

    y = v * paraFunc1(u);
    x = paraFunc2(v);
    z = -paraFunc3(v);
    x -= 1;
    target.set(x, y, z);
}

function parametricQuad4(u, t, target) {
    //u *= Math.PI;
    var v = t * 2 * Math.PI;

    var x, y, z;

    y = -v * paraFunc1(u);
    x = paraFunc2(v);
    z = -paraFunc3(v);
    x -= 1;
    target.set(x, y, z);
}

function paraFunc1(t) {
    return t / 6; //Math.sin(t) * Math.sin(t / 2);
}

function paraFunc2(t) {
    // math comes from : http://mathworld.wolfram.com/TeardropCurve.html
    return Math.cos(t);
}

function paraFunc3(t) {
    // math comes from : http://mathworld.wolfram.com/TeardropCurve.html
    return Math.sin(t) * Math.pow(Math.sin(t / 2), 2);
}