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
var heightFactor = 0.9;
var windowWidth = 0;
var windowHeight = 0;

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
    cfa: 0.92, // Angle of the 1st ellipse. Min: 0 - Max: Pi
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
    maxLines: 5
};
var TWOPI = 2 * Math.PI;
var PIhalf = Math.PI / 2;

// document ready function call.
(function () {
    createCatButtons();
    initCamera();
    drawGeometry();
    setupRender();
    scaleCamera();
    //setTitle();

    animate();
})();

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

function createCatButtons() {
    for (var ci = 0; ci < categorySets.length; ci++) {
        if (categorySets[ci].title !== 'Category Title')
        createButton(categorySets[ci].title, ci);
    }
}

function setupRender() {
    var container = document.getElementById('container');

    renderer = null;
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    setDimension();
    renderer.setSize(windowWidth, windowHeight);
    container.appendChild(renderer.domElement);

    // stats = new Stats();
    // container.appendChild(stats.dom);

    window.addEventListener('resize', onWindowResize, false);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function setDimension() {
    windowWidth = window.innerWidth - 15;
    windowHeight = window.innerHeight * heightFactor;
}

function onWindowResize() {
    setDimension();
    camera.aspect = 1.61; //windowWidth / windowHeight;

    camera.updateProjectionMatrix();
    renderer.setSize(windowWidth, windowHeight);
}

function scaleCamera() {
    camera.zoom = 2;
    camera.updateProjectionMatrix();
    controls.update();
}

function setTitle() {
    var titleEl = document.getElementById('qtitle');
    titleEl.innerText = categorySets[categoryIndex - 1].title;
}

function createButton(label, catIndex) {
    var buttonContainer = document.getElementById('buttoncontainer');

    var buttonnode = document.createElement('input');
    buttonnode.setAttribute('type', 'button');
    buttonnode.setAttribute('name', 'catButton' + catIndex);
    buttonnode.setAttribute('value', label);
    buttonnode.onclick = function () {
        displayCategory(catIndex);
    };
    buttonContainer.appendChild(buttonnode);
}

function displayCategory(catIndex) {
    categoryIndex = catIndex + 1;
    displayLabels();
}

function displayLabels() {
    if (_font !== undefined) {
        drawText1(_font);
    } else {
        loadFont();
    }
}

function drawAxis() {

    var lineLen = 100;
    var matLine = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });

    var geoX = new THREE.Geometry();
    geoX.vertices.push(new THREE.Vector3(-lineLen, 0, 0));
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
    });
}

function makeGroupVisible(group, showIt) {
    for (var i = 0; i < group.children.length; i++) {
        group.children[i].visible = showIt;
    }
}

function drawText1(font) {
    setTitle();
    var displayLabels = [];
    _matText = [];
    _geoText = [];

    if (_groupText1 !== undefined) {
        scene.remove(_groupText1);
    }

    _groupText1 = new THREE.Group();

    for (var i = 0; i < categorySets[categoryIndex - 1].positions.length; i++) {
        displayLabels = extractLabels(categorySets[categoryIndex - 1].positions[i].labels);

        drawTextPos(font, categorySets[categoryIndex - 1].positions[i], _fontColorYellow, displayLabels, i, _groupText1);
    }

    scene.add(_groupText1);
}

function extractLabels(labels) {
    var dl = [];
    var tmp = '';

    if (labels != null) {
        for (var i = 0; i < labels.length; i++) {
            tmp = labels[i].trim();
            if (tmp.length > 0 && (i < configParms.maxLines || dl.length < configParms.maxLines))
                dl.push(tmp);
        }
    }
    return dl;
}

var posParms = [{
        id: 1,
        name: 'Left Large Outside Green',
        vec: [-80, 0, 0],
        rot: [0, -PIhalf, 0],
        offset: [0, 0, -1]
    }, {
        id: 2,
        name: 'Left Large Outside Blue',
        vec: [-70, 0, 0],
        rot: [0, PIhalf, 0],
        offset: [0, 0, 1]
    }, {
        id: 3,
        name: 'Left Small Outside Blue',
        vec: [-23, 0, 3.5],
        rot: [0, -PIhalf, PIhalf],
        offset: [0, -1, 0]
    },
    {
        id: 4,
        name: 'Left Small Inside Green',
        vec: [-13, 0, -2],
        rot: [PIhalf, PIhalf, 0],
        offset: [0, -1, 0]
    },
    {
        id: 5,
        name: 'Bottom',
        vec: [0, -65, 0],
        rot: [0, 0, 0],
        offset: [-1, 0, 0]
    },
    {
        id: 6,
        name: 'Right Small Inside Blue',
        vec: [13, 0, 2],
        rot: [-PIhalf, -PIhalf, 0],
        offset: [0, -1, 0]
    },
    {
        id: 7,
        name: 'Right Small Outside Green',
        vec: [23, 0, -3.5],
        rot: [0, PIhalf, PIhalf],
        offset: [0, -1, 0]
    },
    {
        id: 8,
        name: 'Right Large Inside Green',
        vec: [70, 0, 0],
        rot: [0, -PIhalf, 0],
        offset: [0, 0, -1]
    },
    {
        id: 9,
        name: 'Left Large Outside Blue',
        vec: [80, 0, 1],
        rot: [0, PIhalf, 0],
        offset: [0, 0, 1]
    },
    {
        id: 10,
        name: 'Top',
        vec: [0, 75, 0],
        rot: [0, 0, 0],
        offset: [-1, 0, 0]
    }
];

function drawTextPos(font, config, fontColor, texts, posId, group) {
    // console.log('config fontsize: ' + config.fontsize);
    // console.log('texts leng:' + texts.length);

    for (var i = 0; i < texts.length; i++) {
        var geometry = new THREE.TextBufferGeometry(texts[i], {
            font: font,
            size: config.fontsize,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 1,
            bevelSegments: 1
        });

        geometry.computeBoundingBox();
        geometry.computeVertexNormals();
        var centerX = 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
        //var centerY = 0.5 * (geometry.boundingBox.max.y - geometry.boundingBox.min.y);

        var matText = new THREE.MeshBasicMaterial({
            color: fontColor,
            flatShading: true
        });
        _matText.push(matText);
        _geoText.push(geometry);

        var textMesh1 = new THREE.Mesh(geometry, matText);
        var indx = posId;
        var pX = posParms[indx].vec[0];
        var pY = posParms[indx].vec[1];
        var pZ = posParms[indx].vec[2];
        var offset = posParms[indx].offset;

        textMesh1.position.x = offset[0] * centerX + pX + config.xOffset;
        textMesh1.position.y = offset[1] * centerX + pY + config.yOffset;
        textMesh1.position.z = offset[2] * centerX + pZ + config.zOffset;

        var posOffset = calcOffset(texts.length, i, posId);

        if (offset[2] != 0) {
            textMesh1.position.y -= posOffset * 1.5 * config.fontsize;
        } else if (offset[1] != 0) {
            textMesh1.position.z -= posOffset * 1.5 * config.fontsize;
        } else if (offset[0] != 0) {
            textMesh1.position.y -= posOffset * 1.5 * config.fontsize;
        } else {
            textMesh1.position.y -= posoffset * 1.5 * config.fontsize;
        }

        textMesh1.rotation.x = posParms[indx].rot[0];
        textMesh1.rotation.y = posParms[indx].rot[1];
        textMesh1.rotation.z = posParms[indx].rot[2];

        textMesh1.visible = true;
        group.add(textMesh1);
    }
}

function calcOffset(totalLines, indx, posId) {
    // if total texts is 1 then offset is [0] => f(1, i)
    // if total texts is 2 then offset is [-2, -1] =>  f(2, i)
    // if total texts is 3 then offset is [-2.5, -1.5, -0.5] => f(3, i)
    // if total texts is 4 then offset is [-3, -2, -1, 0] => f(4, i)
    // if total texts is 5 then offset is [-3.5, -2.5, -1.5,-0.5,0.5] => f(5, i)   
    // This is for the special case of the labels flipped opposite and therefore need to be reverse sequenced.

    if ((totalLines == 1 || totalLines === 1)) {
        if (posId == 6 || posId === 6) {
            return -0.3;
        }
        if (posId == 2 || posId === 2) {
            return 0.4;
        }
        if (posId == 3 || posId === 3 || posId == 5 || posId === 5) {
            return 0.0;
        } else {
            return 0.3;
        }
    }

    var offset = 0;
    if (posId == 2 || posId === 2) {
        offset = totalLines / 2 - indx + 0.3;
    } else if (posId == 5 || posId === 5) {
        offset = totalLines / 2 - indx - 0.3;
    } else if (posId == 6 || posId === 6) {
        offset = indx - totalLines / 2 - 0.3;
    } else if (posId == 3 || posId === 3) {
        offset = indx - totalLines / 2;
    } else {
        offset = indx - totalLines / 2 + 0.9;
    }

    return offset;
}

function areEqual(t1, t2) {
    return t1 == t2 || t1 === t2;
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