/*
* Quadernity Model Label Descriptions.
* Author: Paul T. Saletzki
* Date: March 2019
* This one file represents just one category only.  
* Please edit this file to add or remove labels to each position for this category.
* The Labels below represent the positions on the model.  You have control over which lines get displayed and how many.
* Labels can be added with a 'some verbage here...' around the label to denote the start and end of the label. 
* Blank labels are permitted: ''
* Each Label must be demarked with a comma ,
* Font Size can be adjusted from 1 up to 25.
*/
var categoryTitle = 'Quadernity';

var categoryLabels = [{
    id: 1,
    position: 'Outside Green lg L',
    fontsize: 4,
    labels: [
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ]
},
{
    id: 2,
    position: 'Inside Blue lg L',
    fontsize: 4,
    labels: [
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ]
},
{
    id: 3,
    position: 'Inside Blue sm L',
    fontsize: 4,
    labels: [
        '',
        '',
        '',
        '',
        '',
        ''
    ]
}
    ,
{
    id: 4,
    position: 'Inside Green sm L',
    fontsize: 4,
    labels: [
        '',
        '',
        '',
        '',
        '',
        ''
    ]
}
    ,
{
    id: 5,
    position: 'Front Seam',
    fontsize: 4,
    labels: [
        '',
        '',
        '',
        '',
        '',
        ''
    ]
},
{
    id: 6,
    position: 'Inside Blue sm R',
    fontsize: 4,
    labels: [
        '',
        '',
        '',
        '',
        '',
        ''
    ]
},
{
    id: 7,
    position: 'Inside Green sm R',
    fontsize: 4,
    labels: [
        '',
        '',
        '',
        '',
        '',
        ''
    ]
},
{
    id: 8,
    position: 'Inside Green lg R',
    fontsize: 4,
    labels: [
        '',
        '',
        '',
        '',
        '',
        ''
    ]
},
{
    id: 9,
    position: 'Outside Blue lg R',
    fontsize: 4,
    labels: [
        '',
        '',
        '',
        '',
        '',
        ''
    ]
},
{
    id: 10,
    position: 'Back Gap',
    fontsize: 4,
    labels: [
        '',
        '',
        '',
        '',
        '',
        ''
    ]
}
];

// *** Do NOT Edit below...
var posParms = [
    {
        id: 1,
        name: 'Left Large Outside Green',
        vec: [-80, 0, -1],
        rot: [0, -PIhalf, 0],
        centerAxis: 'z'
    }, {
        id: 2,
        name: 'Left Large Outside Blue',
        vec: [-70, 0, 1],
        rot: [0, PIhalf, 0],
        centerAxis: 'z'
    }, {
        id: 3,
        name: 'Left Small Outside Blue',
        vec: [-23, -1, 3.5],
        rot: [0, -PIhalf, PIhalf],
        centerAxis: 'y'
    },
    {
        id: 4,
        name: 'Left Small Inside Green',
        vec: [-15, -0.5, -2],
        rot: [PIhalf, PIhalf, 0],
        centerAxis: 'y'
    },
    {
        id: 5,
        name: 'Bottom',
        vec: [-1, -65, 0],
        rot: [0, 0, 0],
        centerAxis: 'x'
    },
    {
        id: 6,
        name: 'Right Small Inside Blue',
        vec: [15, -0.5, 2],
        rot: [-PIhalf, -PIhalf, 0],
        centerAxis: 'y'
    },
    {
        id: 7,
        name: 'Right Small Outside Green',
        vec: [23, -1, -3.5],
        rot: [0, PIhalf, PIhalf],
        centerAxis: 'y'
    },
    {
        id: 8,
        name: 'Right Large Inside Green',
        vec: [70, 0, -1],
        rot: [0, -PIhalf, 0],
        centerAxis: 'z'
    },
    {
        id: 9,
        name: 'Left Large Outside Blue',
        vec: [80, 0, 1],
        rot: [0, PIhalf, 0],
        centerAxis: 'z'
    },
    {
        id: 10,
        name: 'Top',
        vec: [-1, 65, 0],
        rot: [0, 0, 0],
        centerAxis: 'x'
    }
];