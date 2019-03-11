var configParms = {
    cfa: 0.92,  // Angle of the 1st ellipse. Min: 0 - Max: Pi
    cfb: 0.92, // Angle of the 2nd ellipse. Min: 0 - Max: Pi
    osb: 1.25, // Min: 1 - Max: 1.9
    osa: 1.9, // Min: 1 - Max: 1.9
    xOffset: 0.4, // Min: 0 - Max: 3 X Offset distance between the two ellipses.
    ellipseBLen: 0.7, // ellipse axis length for elongation.  B axis length.  Min: 0.1 - Max: 3
    ellipseALen: 1.2, // ellipse axis length for elongation.  A Axis length. Min: 0.1 - Max: 3
    endAngleB: 1.85, // Ellipse angle at the top for gap width.
    rotateAnimation: false,
    rotateReset: false,
    drawAxis: true,
    blueColor: 0x1f3fd4,
    greenColor: 0x8cd2b,
};

window.onload = function () {
    var ellipseFolder = _gui.addFolder('Ellipse');
    ellipseFolder.add(configParms, 'cfa').name('1st Angle').min(0).max(Math.PI).step(0.1)
        .onChange(function (newValue) {
            drawGeometry();

        });
    ellipseFolder.add(configParms, 'cfb').name('2nd Angle').min(0).max(Math.PI).step(0.1)
        .onChange(function (newValue) {
            drawGeometry();
        });
    ellipseFolder.add(configParms, 'osa').name('1st osb').min(0).max(Math.PI).step(0.1)
        .onChange(function (newValue) {
            drawGeometry();
        });
    ellipseFolder.add(configParms, 'osb').name('2nd osb').min(0).max(Math.PI).step(0.1)
        .onChange(function (newValue) {
            drawGeometry();
        });
    ellipseFolder.add(configParms, 'xOffset').name('Seperation').min(0).max(2).step(0.1)
        .onChange(function (newValue) {
            drawGeometry();
        });
    ellipseFolder.add(configParms, 'ellipseALen').name('A Length').min(0.1).max(2).step(0.1)
        .onChange(function (newValue) {
            drawGeometry();
        });

    ellipseFolder.add(configParms, 'ellipseBLen').name('B Length').min(0.1).max(2).step(0.1)
        .onChange(function (newValue) {
            drawGeometry();
        });

    ellipseFolder.add(configParms, 'endAngleB').name('Top Gap').min(1.2).max(2).step(0.1)
        .onChange(function (newValue) {
            drawGeometry();
        });

    ellipseFolder.addColor(configParms, 'blueColor')
        .onChange(function (newValue) {
            //_meshMaterial.color.set(newValue);
        });

    ellipseFolder.addColor(configParms, 'greenColor')
        .onChange(function (newValue) {
            //_meshMaterial.color.set(newValue);
        });


    var rotateFolder = _gui.addFolder('Rotation');
    rotateFolder.add(configParms, 'rotateAnimation')
        .name('Animate Rotation ')
        .onChange(function (newValue) {

        })
        .listen();

    rotateFolder.add(configParms, 'rotateReset')
        .name('Rotation Reset')
        .onChange(function (newValue) {
            if (configParms.rotateReset) {
                rotationReset();
                configParms.rotateReset = false;
            }
        })

    var miscFolder = _gui.addFolder('Misc..');
    miscFolder.add(configParms, 'drawAxis')
        .name("Draw Axis")
        .onChange(function (newValue) {
            drawGeometry();
        })
};