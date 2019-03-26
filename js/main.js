"use strict";
/*
* Quadernity Model.
* Math model for geometric shape and text labels to placed in areas on the model.
* Author: Paul T. Saletzki
* Date: March 2019
*/

if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

// *************************************************************************************************************
// Can look at the tear drop equation on: http://paulbourke.net/geometry/teardrop/
// Used the equation for the Tear Drop parametric equation from: http://mathworld.wolfram.com/TeardropCurve.html
// *************************************************************************************************************

var camera, scene, renderer, stats, controls;
var heightFactor = 0.75;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight * heightFactor;
//var _gui = new dat.GUI();
var _groupAxis = new THREE.Group();
var _groupText1 = new THREE.Group();
var _fontColorYellow = 0xc7d93e;
var _fontColorWhite = 0xffffff;

var _group = new THREE.Group();
var _matBlueBack;
var _matBlueFront;
var _matGreenFront;
var _matGreenBack;
var _matText = [];
var _geoText = [];
var _font;

var _largeFontSize = 9;
var _smallFontSize = 7;

var configParms = {
    cfa: 0.92,  // Angle of the 1st ellipse. Min: 0 - Max: Pi
    cfb: 0.92, // Angle of the 2nd ellipse. Min: 0 - Max: Pi
    osb: 1.25, // Min: 1 - Max: 1.9
    osa: 1.9, // Min: 1 - Max: 1.9
    xOffset: 0.4, // Min: 0 - Max: 3 X Offset distance between the two ellipses.
    ellipseBLen: 0.7, // ellipse axis length for elongation.  B axis length.  Min: 0.1 - Max: 3
    ellipseALen: 1.2, // ellipse axis length for elongation.  A Axis length. Min: 0.1 - Max: 3
    endAngleB: 1.85, // Ellipse angle at the top for gap width.
    // rotateAnimation: false,
    // rotateReset: false,
    drawAxis: false,
    blueColor: 0x1f3fd4,
    greenColor: 0x8cd2b,
    textOrientation: false,
    labelSet: 1
};
var TWOPI = 2 * Math.PI;
var PIhalf = Math.PI / 2;

$(document).ready(function () {
    initCamera();
    drawGeometry();
    setupRender();
    scaleCamera();

    animate();
});

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
    showAxis(configParms.drawAxis);

    loadFont();
}

function setupRender() {
    var container = document.getElementById('container');

    renderer = null;
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(windowWidth, windowHeight);
    container.appendChild(renderer.domElement);

    // stats = new Stats();
    // container.appendChild(stats.dom);

    window.addEventListener('resize', onWindowResize, false);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function onWindowResize() {
    camera.aspect = 1.61; //windowWidth / windowHeight;
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight * heightFactor;
    camera.updateProjectionMatrix();

    renderer.setSize(windowWidth, windowHeight);
}

function scaleCamera() {
    camera.zoom = 2;
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

function toggleAxis() {
    configParms.drawAxis = !configParms.drawAxis;

    showAxis(configParms.drawAxis);
}

function animate() {
    requestAnimationFrame(animate);

    render();

    //stats.update();
}

function render() {
    // scene.traverse(function (object) {
    //     if (object.isMesh === true) {
    //         object.rotation.x = 0.01;

    //         //object.rotation.y = 0.01;
    //     }
    // });

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

function loadFont() {
    var loader = new THREE.FontLoader();
    loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
        _font = font;
        drawText1(font);

        showLabelSet(configParms.labelSet);
    });
}

function showLabelSet(labelSet) {
    if (labelSet >= 0 && labelSet <= _matText.length) {
        for (var i = 0; i < _matText.length; i++) {
            if (i === labelSet - 1) {
                _matText[i].color.set(_fontColorYellow);
            } else {
                _matText[i].color.set(_fontColorWhite);
            }
        }
        for (var i = 0; i < _geoText.length; i++) {
            if (i === labelSet - 1) {
                //_geoText[i].size = _largeFontSize;
            } else {
                // _geoText[i].size = _smallFontSize;
            }
        }
    }
    showDescriptions(labelSet);
}

function makeGroupVisible(group, showIt) {
    for (var i = 0; i < group.children.length; i++) {
        group.children[i].visible = showIt;
    }
}

function drawText1(font) {
    // Creatable is on the Green outside of the ellipse.
    _groupText1.add(drawTextPos(font, _smallFontSize, _fontColorWhite, 'Createable', -80, 0, -1, 0, -PIhalf, 0, 'z'));

    // INformed goes on the inside of the outside fold on Blue side.
    _groupText1.add(drawTextPos(font, _smallFontSize, _fontColorWhite, 'INformed', -70, 0, 1, 0, PIhalf, 0, 'z'));

    // Creative goes on the inside fold on the outside of the blue side.
    _groupText1.add(drawTextPos(font, _smallFontSize, _fontColorWhite, 'Creative', -23, -1, 3.5, 0, -PIhalf, PIhalf, 'y'));

    // INformer goes on the inside fold inside on the Green side.
    _groupText1.add(drawTextPos(font, _smallFontSize, _fontColorWhite, 'INformer', -15, -0.5, -2, PIhalf, PIhalf, 0, 'y'));

    // Creating/OUTforming goes at the bottom where the two intersect to form the crease.
    _groupText1.add(drawTextPos(font, _smallFontSize, _fontColorWhite, 'Creating/OUTforming', -1, -65, 0, 0, 0, 0, 'x'));

    // INformable goes on the Inside fold inside on the Blue side.
    _groupText1.add(drawTextPos(font, _smallFontSize, _fontColorWhite, 'INformable', 15, -0.5, 2, -PIhalf, -PIhalf, 0, 'y'));

    // Created goes on the inside fold on the outside of the green side.
    _groupText1.add(drawTextPos(font, _smallFontSize, _fontColorWhite, 'Created', 23, -1, -3.5, 0, PIhalf, PIhalf, 'y'));

    // INformative goes on the inside of the outside fold on Blue side.
    _groupText1.add(drawTextPos(font, _smallFontSize, _fontColorWhite, 'Informative', 70, 0, -1, 0, -PIhalf, 0, 'z'));

    // Creator label goes on the outside on the Blue.
    _groupText1.add(drawTextPos(font, _smallFontSize, _fontColorWhite, 'Creator', 80, 0, 1, 0, PIhalf, 0, 'z'));

    // INforming goes at the top in the gap.
    _groupText1.add(drawTextPos(font, _smallFontSize, _fontColorWhite, 'INforming', -1, 65, 0, 0, 0, 0, 'x'));

    scene.add(_groupText1);
}

function drawTextPos(font, fontSize, fontColor, text, pX, pY, pZ, rotX, rotY, rotZ, centerAxis) {
    var geometry = new THREE.TextBufferGeometry(text, {
        font: font,
        size: fontSize,
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

    var matText = new THREE.MeshBasicMaterial({ color: fontColor, flatShading: true });
    _matText.push(matText);
    _geoText.push(geometry);
    var textMesh1 = new THREE.Mesh(geometry, matText);

    textMesh1.position.x = centerAxis == 'x' ? pX * centerOffset : pX;
    textMesh1.position.y = centerAxis == 'y' ? pY * centerOffset : pY;
    textMesh1.position.z = centerAxis == 'z' ? pZ * centerOffset : pZ;

    textMesh1.rotation.x = rotX;
    textMesh1.rotation.y = rotY;
    textMesh1.rotation.z = rotZ;

    textMesh1.visible = true;

    return textMesh1;
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