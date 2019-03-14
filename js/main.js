if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

// *************************************************************************************************************
// Can look at the tear drop equation on: http://paulbourke.net/geometry/teardrop/
// Used the equation for the Tear Drop parametric equation from: http://mathworld.wolfram.com/TeardropCurve.html
// *************************************************************************************************************

var camera, scene, renderer, stats, controls;
var _gui = new dat.GUI();
var _groupAxis = new THREE.Group();
var _groupText = new THREE.Group();
var _group = new THREE.Group();
var _matBlueBack;
var _matBlueFront;
var _matGreenFront;
var _matGreenBack;
var _matText;
var _font;

//var xFlip = 1; // factor for flipping across the axis for the Parametric Equations.
//var paraFlip = 1; // factor for flipping across the axis for the Parametric Equations.
// var cfa = 0.92;  // Angle of the 1st ellipse.
// var cfb = 0.92; // Angle of the 2nd ellipse.
// var osb = 1.25;
// var osa = 1.9;
// var xOffset = 0.4;
// var ellipseBLen = 0.7; // ellipse axis length for elongation.  B axis length.
// var ellipseALen = 1.2; // ellipse axis length for elongation.  A Axis length.
//var endAngleB = 1.80; // Ending angle for 2nd side of ellipse.
var TWOPI = 2 * Math.PI;

initCamera();
drawGeometry();
setupRender();
scaleCamera();

animate();

function initCamera() {
    camera = null;
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.y = 400;
}

function drawGeometry() {
    scene = null;

    scene = new THREE.Scene();
    //
    var ambientLight = new THREE.AmbientLight(0xcccccc, 1.09);
    scene.add(ambientLight);
    // var pointLight = new THREE.PointLight(0xffffff, 0.7);

    // camera.add(pointLight);

    scene.add(camera);

    var lightLeft = new THREE.PointLight(0xcccccc, 1, 100);
    lightLeft.position.set(-50, 300, 0);
    scene.add(lightLeft);

    var lightRight = new THREE.PointLight(0xff0000, 1, 100);
    lightRight.position.set(50, 300, 0);
    scene.add(lightRight);

    //drawBox();
    drawParametricGeometry();
    drawAxis();

    loadFont();
}

function setupRender() {
    var container = document.getElementById('container');

    renderer = null;
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // stats = new Stats();
    // container.appendChild(stats.dom);

    window.addEventListener('resize', onWindowResize, false);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
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
    _groupAxis.add(xLine);

    var geoY = new THREE.Geometry();
    geoY.vertices.push(new THREE.Vector3(0, 0, 0));
    geoY.vertices.push(new THREE.Vector3(0, lineLen, 0));
    var yLine = new THREE.Line(geoY, new THREE.LineBasicMaterial({
        color: 0x00ffff
    })); // cyan Y-Axis
    _groupAxis.add(yLine);

    var geoZ = new THREE.Geometry();
    geoZ.vertices.push(new THREE.Vector3(0, 0, 0));
    geoZ.vertices.push(new THREE.Vector3(0, 0, lineLen));
    var zLine = new THREE.Line(geoZ, new THREE.LineBasicMaterial({
        color: 0xff0000
    })); // red Z-Axis
    _groupAxis.add(zLine);
    scene.add(_groupAxis);
}

function showAxis(visible) {
    for (var i = 0; i < _groupAxis.children.length; i++) {
        _groupAxis.children[i].visible = visible;
    }
}

function animate() {
    requestAnimationFrame(animate);

    render();

    //stats.update();
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
    var angleFactor = 18;

    var geoSlices = 20;
    var geoStacks = 80;
    // var blueColor = 0x1f3fd4;
    // var greenColor = 0x8cd2b;
    var gap = 0;
    _matBlueBack = new THREE.MeshStandardMaterial({
        color: configParms.blueColor,
        side: THREE.BackSide
    });
    _matBlueFront = new THREE.MeshStandardMaterial({
        color: configParms.blueColor,
        side: THREE.FrontSide
    });

    _matGreenFront = new THREE.MeshStandardMaterial({
        color: configParms.greenColor,
        side: THREE.FrontSide
    });
    _matGreenBack = new THREE.MeshStandardMaterial({
        color: configParms.greenColor,
        side: THREE.BackSide
    });
    var geometry, object;

    _group = null;
    _group = new THREE.Group();

    // one quarter of the Quadternity. (1 side outside)
    geometry = new THREE.ParametricBufferGeometry(parametricQuad1, geoSlices, geoStacks);
    object = new THREE.Mesh(geometry, _matBlueBack);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(-Math.PI / angleFactor);
    object.translateZ(-gap);
    _group.add(object);

    // 1st Quarter of the Quadternity. (1 side inside).
    geometry = new THREE.ParametricBufferGeometry(parametricQuad1, geoSlices, geoStacks);
    object = new THREE.Mesh(geometry, _matGreenFront);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(-Math.PI / angleFactor);
    object.translateZ(-gap);
    _group.add(object);

    // 2nd quarter of the Quadternity (1 side outside)
    geometry = new THREE.ParametricBufferGeometry(parametricQuad2, geoSlices, geoStacks);
    object = new THREE.Mesh(geometry, _matGreenBack);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(-Math.PI / angleFactor);
    object.translateZ(-gap);
    _group.add(object);

    // 2nd Quarter of the Quadternity (1 side inside).
    geometry = new THREE.ParametricBufferGeometry(parametricQuad2, geoSlices, geoStacks);
    object = new THREE.Mesh(geometry, _matBlueFront);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(-Math.PI / angleFactor);
    object.translateZ(-gap);
    _group.add(object);

    // 3rd quarter of the Quadternity (2nd side inside)
    geometry = new THREE.ParametricBufferGeometry(parametricQuad3, geoSlices, geoStacks);
    object = new THREE.Mesh(geometry, _matBlueBack);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(Math.PI / angleFactor);
    object.translateZ(gap);
    _group.add(object);

    // 3rd quarter of the Quadternity (2nd side outside)
    geometry = new THREE.ParametricBufferGeometry(parametricQuad3, geoSlices, geoStacks);
    object = new THREE.Mesh(geometry, _matGreenFront);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(Math.PI / angleFactor);
    object.translateZ(gap);
    _group.add(object);

    // 4th quarter of the Quadternity (2nd side inside).
    geometry = new THREE.ParametricBufferGeometry(parametricQuad4, geoSlices, geoStacks);
    object = new THREE.Mesh(geometry, _matBlueFront);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(Math.PI / angleFactor);
    object.translateZ(gap);
    _group.add(object);

    // 4th quarter of the Quadternity (2nd side outside).
    geometry = new THREE.ParametricBufferGeometry(parametricQuad4, geoSlices, geoStacks);
    object = new THREE.Mesh(geometry, _matGreenBack);
    object.scale.multiplyScalar(sizeFactor);
    object.rotateY(Math.PI / angleFactor);
    object.translateZ(gap);
    _group.add(object);

    scene.add(_group);

    _group.rotateX(Math.PI / 2);
    _group.rotateY(Math.PI / 2);
    _group.translateX(sizeFactor);
}

function setBlueColor(newValue) {
    _matBlueBack.color.set(newValue);
    _matBlueFront.color.set(newValue);
}

function setGreenColor(newValue) {
    _matGreenBack.color.set(newValue);
    _matGreenFront.color.set(newValue);
}

// function parametricQuad(u, t, target) {
//     //u *= Math.PI;
//     var v = t * 2 * Math.PI;
//     var x, y, z;

//     y = xFlip * v * paraFunc1(u);
//     x = paraFunc2(v);
//     z = paraFlip * paraFunc3(v);

//     target.set(x, y, z);
// }
function loadFont() {
    var loader = new THREE.FontLoader();
    loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
        _font = font;
        drawText(font);
    });
}

function drawText(font) {
    var PIhalf = Math.PI / 2;

    scene.remove(_groupText);

    _groupText = null;
    _groupText = new THREE.Group();

    // Creator label goes on the outside on the Blue.
    if (configParms.textOrientation)
        drawTextPos(font, 'Creator', 80, 0, 1, PIhalf, 'z');
    else
        drawTextPos(font, 'Creator', 85, 0, 0, 0, 'z');

    // Creatable is on the Green outside of the ellipse.
    if (configParms.textOrientation)
        drawTextPos(font, 'Createable', -80, 0, -1, -PIhalf, 'z');
    else
        drawTextPos(font, 'Createable', -120, 0, 0, 0, 'z');

    // Creating/OUTforming goes at the bottom where the two intersect to form the crease.
    drawTextPos(font, 'Creating/OUTforming', -1, -65, 0, 0, 'x');

    // INforming goes at the top in the gap.
    drawTextPos(font, 'INforming', -1, 65, 0, 0, 'x');

    // INformed goes on the inside of the outside fold on Blue side.
    if (configParms.textOrientation)
        drawTextPos(font, 'INformed', -70, 0, 1, PIhalf, 'z');
    else
        drawTextPos(font, 'INformed', -70, 0, 0, 0, 'z');

    // INformative goes on the inside of the outside fold on Blue side.
    if (configParms.textOrientation)
        drawTextPos(font, 'INformative', 70, 0, -1, -PIhalf, 'z');
    else
        drawTextPos(font, 'INformative', 40, 0, 0, 0, 'z');

    // Creative goes on the inside fold on the outside of the blue side.
    if (configParms.textOrientation)
        drawTextPos(font, 'Creative', -25, 0, -1, -PIhalf, 'z');
    else
        drawTextPos(font, 'Creative', -45, -20, 0, 0, 'z');

    // Created goes on the inside fold on the outside of the green side.
    if (configParms.textOrientation)
        drawTextPos(font, 'Created', 25, 0, 1, PIhalf, 'z');
    else
        drawTextPos(font, 'Created', 20, -20, 0, 0, 'z');

    // INformable goes on the Inside fold inside on the Blue side.
    if (configParms.textOrientation)
        drawTextPos(font, 'INformable', 15, 15, -1, -PIhalf, 'z');
    else
        drawTextPos(font, 'INformable', -15, 0, 0, 0, 'z');

    // INformer goes on the inside fold inside on the Green side.
    if (configParms.textOrientation)
        drawTextPos(font, 'INformer', -15, 15, 1, PIhalf, 'z');
    else
        drawTextPos(font, 'INformer', -18, 20, 0, 0, 'z');
}

function drawTextPos(font, text, pX, pY, pZ, rotY, centerAxis) {
    var geometry = new THREE.TextBufferGeometry(text, {
        font: font,
        size: 5,
        height: 0.4,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 1,
        bevelSegments: 1
    });

    geometry.computeBoundingBox();
    geometry.computeVertexNormals();
    var centerOffset = 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

    _matText = new THREE.MeshBasicMaterial({ color: 0xc7d93e, flatShading: true });

    var textMesh1 = new THREE.Mesh(geometry, _matText);

    textMesh1.position.x = centerAxis == 'x' ? pX * centerOffset : pX;
    textMesh1.position.y = centerAxis == 'y' ? pY * centerOffset : pY;
    textMesh1.position.z = centerAxis == 'z' ? pZ * centerOffset : pZ;

    textMesh1.rotation.y = rotY;

    _groupText.add(textMesh1);
    scene.add(_groupText);
}

function parametricQuad1(u, t, target) {
    //u *= Math.PI;
    var v = t * configParms.endAngleB * Math.PI;
    var x, y, z;

    y = t * TWOPI * paraFunc1(u);
    x = configParms.ellipseALen * paraFunc2(v);
    z = configParms.ellipseBLen * paraFunc3(v) - configParms.xOffset;
    x -= 1;
    target.set(x, y, z);
}

function parametricQuad2(u, t, target) {
    //u *= Math.PI;
    var v = t * configParms.endAngleB * Math.PI;
    var x, y, z;

    y = -t * TWOPI * paraFunc1(u);
    x = configParms.ellipseALen * paraFunc2(v);
    z = configParms.ellipseBLen * paraFunc3(v) - configParms.xOffset;
    x -= 1;

    target.set(x, y, z);
}

function parametricQuad3(u, t, target) {
    //u *= Math.PI;
    var v = t * configParms.endAngleB * Math.PI;
    var x, y, z;

    y = t * TWOPI * paraFunc1(u);
    x = configParms.ellipseALen * paraFunc2(v);
    z = -configParms.ellipseBLen * paraFunc3(v) + configParms.xOffset;
    x -= 1;
    target.set(x, y, z);
}

function parametricQuad4(u, t, target) {
    //u *= Math.PI;
    var v = t * configParms.endAngleB * Math.PI;
    var x, y, z;

    y = -t * TWOPI * paraFunc1(u);
    x = configParms.ellipseALen * paraFunc2(v);
    z = -configParms.ellipseBLen * paraFunc3(v) + configParms.xOffset;
    x -= 1;
    target.set(x, y, z);
}

function paraFunc1(t) {
    return t / 6; //Math.sin(t) * Math.sin(t / 2);
}

function paraFunc3(t) {
    return configParms.cfa * Math.sin(t + configParms.osb) - Math.cos(t + configParms.osb);
}

function paraFunc2(t) {
    return configParms.cfb * Math.sin(t + configParms.osa);
}