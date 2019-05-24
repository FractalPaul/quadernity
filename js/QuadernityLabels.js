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

var categoryIndex = 1; // Use this value to determine which Category Set (below) is displayed on the model.
// 1 for the first Label Set, 2 for the second Label Set, 3 for the third, etc...

var categorySets = [{
    title: 'PTPR Labels',
    categoryId: 1,
    positions: [{
        positionId: 1,
        position: 'Outside Green lg L',
        fontsize: 2,
        xOffset: 0, // blue
        yOffset: 0, // cyan
        zOffset:0, // Red
        labels: [
            'Female Subject Rests',
            'in the Ground state',
            'Line 3 long text offset',
            'Line 4 long text offset',
            '',
            '',
            ''
        ]
    },
    {
        positionId: 2,
        position: 'Inside Blue lg L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0,
        labels: [
            'Male Subject Rests',
            'in the Ground State',
            'Line 3 long text offset',
            'Line 4 long text offset',
            '',
            '',
            ''
        ]
    },
    {
        positionId: 3,
        position: 'Inside Blue sm L',
        fontsize: 2,
        xOffset:0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Male Object Pulled;',
            'the seed is selected',
            'from the Ground',
            'of possibilities.',
            '',
            ''
        ]
    },
    {
        positionId: 4,
        position: 'Inside Green sm L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0 ,
        labels: [
            'Female Subject Pulls,',
            'selecting Male seed:',
            'inception/insemination/',
            'fertilization',
            '',
            ''
        ]
    },
    {
        positionId: 5,
        position: 'Front Seam',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Transitions,',
            '(producing Her Object, gestation).',
            'Male Subject',
            'continues to Rest.',
            '',
            'Line 4 long text offset'
        ]
    },
    {
        positionId: 6,
        position: 'Inside Blue sm R',
        fontsize: 2,
        xOffset: 0,  
        yOffset: 0,  // vertical offset
        zOffset: 0,
        labels: [
            'Male Object Pulls',
            '(via physical sensory receptors)',
            'an impression of the',
            'Created/OUTformed content.',
            '',
            ''
        ]
    },
    {
        positionId: 7,
        position: 'Inside Green sm R',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Object',
            'gets Pushed/OUTformed',
            '(inside-space and boundary',
            'of a Particularity)',
            '',
            ''
        ]
    },
    {
        positionId: 8,
        position: 'Inside Green lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Pushes',
            'Object and expands the',
            'outside-space of a',
            'Particularity.',
            '',
            ''
        ]
    },
    {
        positionId: 9,
        position: 'Outside Blue lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            '1) Male Object Transitions,',
            'producing local reactions;',
            '2) Male Subject (Environment)',
            'Pulls/receives data (global',
            'non-local reconfiguration.)',
            ''
        ]
    },
    {
        positionid: 10,
        position: 'Back Gap',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Objects disintegrate',
            'into Ground (mingled-in).',
            'Male Subject Transitions,',
            'self-sacrificing or ',
            'disrupting the Ground state.',            
        ]
    }
]},
{
    title: 'Category Title',
    categoryId: 2,
    positions: [{
        positionId: 1,
        position: 'Outside Green lg L',
        fontsize: 2,
        xOffset: 0, // blue
        yOffset: 0, // cyan
        zOffset:0, // Red
        labels: [
            'Female Subject Rests',
            'in the Ground state',
            'Line 3 long text offset',
            'Line 4 long text offset',            
        ]
    },
    {
        positionId: 2,
        position: 'Inside Blue lg L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0,
        labels: [
            'Male Subject Rests',
            'in the Ground State',
            'Line 3 long text offset',
            'Line 4 long text offset',
            '',
            '',
            ''
        ]
    },
    {
        positionId: 3,
        position: 'Inside Blue sm L',
        fontsize: 2,
        xOffset:0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Male Object Pulled;',
            'the seed is selected',
            'from the Ground',
            'of possibilities.',
            '',
            ''
        ]
    },
    {
        positionId: 4,
        position: 'Inside Green sm L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0 ,
        labels: [
            'Female Subject Pulls,',
            'selecting Male seed:',
            'inception/insemination/',
            'fertilization',
            '',
            ''
        ]
    },
    {
        positionId: 5,
        position: 'Front Seam',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Transitions,',
            '(producing Her Object, gestation).',
            'Male Subject',
            'continues to Rest.',
            '',
            'Line 4 long text offset'
        ]
    },
    {
        positionId: 6,
        position: 'Inside Blue sm R',
        fontsize: 2,
        xOffset: 0,  
        yOffset: 0,  // vertical offset
        zOffset: 0,
        labels: [
            'Male Object Pulls',
            '(via physical sensory receptors)',
            'an impression of the',
            'Created/OUTformed content.',
            '',
            ''
        ]
    },
    {
        positionId: 7,
        position: 'Inside Green sm R',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Object',
            'gets Pushed/OUTformed',
            '(inside-space and boundary',
            'of a Particularity)',
            '',
            ''
        ]
    },
    {
        positionId: 8,
        position: 'Inside Green lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Pushes',
            'Object and expands the',
            'outside-space of a',
            'Particularity.',
            '',
            ''
        ]
    },
    {
        positionId: 9,
        position: 'Outside Blue lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            '1) Male Object Transitions,',
            'producing local reactions;',
            '2) Male Subject (Environment)',
            'Pulls/receives data (global',
            'non-local reconfiguration.)',
            ''
        ]
    },
    {
        positionId: 10,
        position: 'Back Gap',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Objects disintegrate',
            'into Ground (mingled-in).',
            'Male Subject Transitions,',
            'self-sacrificing or ',
            'disrupting the Ground state.',
            ''
        ]
    }
]},
{
    title: 'Category Title',
    categoryId: 3,
    positions: [{
        positionId: 1,
        position: 'Outside Green lg L',
        fontsize: 2,
        xOffset: 0, // blue
        yOffset: 0, // cyan
        zOffset:0, // Red
        labels: [
            'Female Subject Rests',
            'in the Ground state',
            'Line 3 long text offset',
            'Line 4 long text offset',            
        ]
    },
    {
        positionId: 2,
        position: 'Inside Blue lg L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0,
        labels: [
            'Male Subject Rests',
            'in the Ground State',
            'Line 3 long text offset',
            'Line 4 long text offset',
            '',
            '',
            ''
        ]
    },
    {
        positionId: 3,
        position: 'Inside Blue sm L',
        fontsize: 2,
        xOffset:0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Male Object Pulled;',
            'the seed is selected',
            'from the Ground',
            'of possibilities.',
            '',
            ''
        ]
    },
    {
        positionId: 4,
        position: 'Inside Green sm L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0 ,
        labels: [
            'Female Subject Pulls,',
            'selecting Male seed:',
            'inception/insemination/',
            'fertilization',
            '',
            ''
        ]
    },
    {
        positionId: 5,
        position: 'Front Seam',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Transitions,',
            '(producing Her Object, gestation).',
            'Male Subject',
            'continues to Rest.',
            '',
            'Line 4 long text offset'
        ]
    },
    {
        positionId: 6,
        position: 'Inside Blue sm R',
        fontsize: 2,
        xOffset: 0,  
        yOffset: 0,  // vertical offset
        zOffset: 0,
        labels: [
            'Male Object Pulls',
            '(via physical sensory receptors)',
            'an impression of the',
            'Created/OUTformed content.',
            '',
            ''
        ]
    },
    {
        positionId: 7,
        position: 'Inside Green sm R',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Object',
            'gets Pushed/OUTformed',
            '(inside-space and boundary',
            'of a Particularity)',
            '',
            ''
        ]
    },
    {
        positionId: 8,
        position: 'Inside Green lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Pushes',
            'Object and expands the',
            'outside-space of a',
            'Particularity.',
            '',
            ''
        ]
    },
    {
        positionId: 9,
        position: 'Outside Blue lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            '1) Male Object Transitions,',
            'producing local reactions;',
            '2) Male Subject (Environment)',
            'Pulls/receives data (global',
            'non-local reconfiguration.)',
            ''
        ]
    },
    {
        positionId: 10,
        position: 'Back Gap',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Objects disintegrate',
            'into Ground (mingled-in).',
            'Male Subject Transitions,',
            'self-sacrificing or ',
            'disrupting the Ground state.',
            ''
        ]
    }
]},
{
    title: 'Category Title',
    categoryId: 4,
    positions: [{
        positionId: 1,
        position: 'Outside Green lg L',
        fontsize: 2,
        xOffset: 0, // blue
        yOffset: 0, // cyan
        zOffset:0, // Red
        labels: [
            'Female Subject Rests',
            'in the Ground state',
            'Line 3 long text offset',
            'Line 4 long text offset',            
        ]
    },
    {
        positionId: 2,
        position: 'Inside Blue lg L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0,
        labels: [
            'Male Subject Rests',
            'in the Ground State',
            'Line 3 long text offset',
            'Line 4 long text offset',
            '',
            '',
            ''
        ]
    },
    {
        positionId: 3,
        position: 'Inside Blue sm L',
        fontsize: 2,
        xOffset:0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Male Object Pulled;',
            'the seed is selected',
            'from the Ground',
            'of possibilities.',
            '',
            ''
        ]
    },
    {
        positionId: 4,
        position: 'Inside Green sm L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0 ,
        labels: [
            'Female Subject Pulls,',
            'selecting Male seed:',
            'inception/insemination/',
            'fertilization',
            '',
            ''
        ]
    },
    {
        positionId: 5,
        position: 'Front Seam',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Transitions,',
            '(producing Her Object, gestation).',
            'Male Subject',
            'continues to Rest.',
            '',
            'Line 4 long text offset'
        ]
    },
    {
        positionId: 6,
        position: 'Inside Blue sm R',
        fontsize: 2,
        xOffset: 0,  
        yOffset: 0,  // vertical offset
        zOffset: 0,
        labels: [
            'Male Object Pulls',
            '(via physical sensory receptors)',
            'an impression of the',
            'Created/OUTformed content.',
            '',
            ''
        ]
    },
    {
        positionId: 7,
        position: 'Inside Green sm R',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Object',
            'gets Pushed/OUTformed',
            '(inside-space and boundary',
            'of a Particularity)',
            '',
            ''
        ]
    },
    {
        positionId: 8,
        position: 'Inside Green lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Pushes',
            'Object and expands the',
            'outside-space of a',
            'Particularity.',
            '',
            ''
        ]
    },
    {
        positionId: 9,
        position: 'Outside Blue lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            '1) Male Object Transitions,',
            'producing local reactions;',
            '2) Male Subject (Environment)',
            'Pulls/receives data (global',
            'non-local reconfiguration.)',
            ''
        ]
    },
    {
        positionId: 10,
        position: 'Back Gap',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Objects disintegrate',
            'into Ground (mingled-in).',
            'Male Subject Transitions,',
            'self-sacrificing or ',
            'disrupting the Ground state.',
            ''
        ]
    }
]},
{
    title: 'Category Title',
    categoryId: 5,
    positions: [{
        positionId: 1,
        position: 'Outside Green lg L',
        fontsize: 2,
        xOffset: 0, // blue
        yOffset: 0, // cyan
        zOffset:0, // Red
        labels: [
            'Female Subject Rests',
            'in the Ground state',
            'Line 3 long text offset',
            'Line 4 long text offset',            
        ]
    },
    {
        positionId: 2,
        position: 'Inside Blue lg L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0,
        labels: [
            'Male Subject Rests',
            'in the Ground State',
            'Line 3 long text offset',
            'Line 4 long text offset',
            '',
            '',
            ''
        ]
    },
    {
        positionId: 3,
        position: 'Inside Blue sm L',
        fontsize: 2,
        xOffset:0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Male Object Pulled;',
            'the seed is selected',
            'from the Ground',
            'of possibilities.',
            '',
            ''
        ]
    },
    {
        positionId: 4,
        position: 'Inside Green sm L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0 ,
        labels: [
            'Female Subject Pulls,',
            'selecting Male seed:',
            'inception/insemination/',
            'fertilization',
            '',
            ''
        ]
    },
    {
        positionId: 5,
        position: 'Front Seam',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Transitions,',
            '(producing Her Object, gestation).',
            'Male Subject',
            'continues to Rest.',
            '',
            'Line 4 long text offset'
        ]
    },
    {
        positionId: 6,
        position: 'Inside Blue sm R',
        fontsize: 2,
        xOffset: 0,  
        yOffset: 0,  // vertical offset
        zOffset: 0,
        labels: [
            'Male Object Pulls',
            '(via physical sensory receptors)',
            'an impression of the',
            'Created/OUTformed content.',
            '',
            ''
        ]
    },
    {
        positionId: 7,
        position: 'Inside Green sm R',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Object',
            'gets Pushed/OUTformed',
            '(inside-space and boundary',
            'of a Particularity)',
            '',
            ''
        ]
    },
    {
        positionId: 8,
        position: 'Inside Green lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Pushes',
            'Object and expands the',
            'outside-space of a',
            'Particularity.',
            '',
            ''
        ]
    },
    {
        positionId: 9,
        position: 'Outside Blue lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            '1) Male Object Transitions,',
            'producing local reactions;',
            '2) Male Subject (Environment)',
            'Pulls/receives data (global',
            'non-local reconfiguration.)',
            ''
        ]
    },
    {
        positionId: 10,
        position: 'Back Gap',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Objects disintegrate',
            'into Ground (mingled-in).',
            'Male Subject Transitions,',
            'self-sacrificing or ',
            'disrupting the Ground state.',
            ''
        ]
    }
]},
{
    title: 'Category Title',
    categoryId: 6,
    positions: [{
        positionId: 1,
        position: 'Outside Green lg L',
        fontsize: 2,
        xOffset: 0, // blue
        yOffset: 0, // cyan
        zOffset:0, // Red
        labels: [
            'Female Subject Rests',
            'in the Ground state',
            'Line 3 long text offset',
            'Line 4 long text offset',            
        ]
    },
    {
        positionId: 2,
        position: 'Inside Blue lg L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0,
        labels: [
            'Male Subject Rests',
            'in the Ground State',
            'Line 3 long text offset',
            'Line 4 long text offset',
            '',
            '',
            ''
        ]
    },
    {
        positionId: 3,
        position: 'Inside Blue sm L',
        fontsize: 2,
        xOffset:0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Male Object Pulled;',
            'the seed is selected',
            'from the Ground',
            'of possibilities.',
            '',
            ''
        ]
    },
    {
        positionId: 4,
        position: 'Inside Green sm L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0 ,
        labels: [
            'Female Subject Pulls,',
            'selecting Male seed:',
            'inception/insemination/',
            'fertilization',
            '',
            ''
        ]
    },
    {
        positionId: 5,
        position: 'Front Seam',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Transitions,',
            '(producing Her Object, gestation).',
            'Male Subject',
            'continues to Rest.',
            '',
            'Line 4 long text offset'
        ]
    },
    {
        positionId: 6,
        position: 'Inside Blue sm R',
        fontsize: 2,
        xOffset: 0,  
        yOffset: 0,  // vertical offset
        zOffset: 0,
        labels: [
            'Male Object Pulls',
            '(via physical sensory receptors)',
            'an impression of the',
            'Created/OUTformed content.',
            '',
            ''
        ]
    },
    {
        positionId: 7,
        position: 'Inside Green sm R',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Object',
            'gets Pushed/OUTformed',
            '(inside-space and boundary',
            'of a Particularity)',
            '',
            ''
        ]
    },
    {
        positionId: 8,
        position: 'Inside Green lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Pushes',
            'Object and expands the',
            'outside-space of a',
            'Particularity.',
            '',
            ''
        ]
    },
    {
        positionId: 9,
        position: 'Outside Blue lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            '1) Male Object Transitions,',
            'producing local reactions;',
            '2) Male Subject (Environment)',
            'Pulls/receives data (global',
            'non-local reconfiguration.)',
            ''
        ]
    },
    {
        positionId: 10,
        position: 'Back Gap',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Objects disintegrate',
            'into Ground (mingled-in).',
            'Male Subject Transitions,',
            'self-sacrificing or ',
            'disrupting the Ground state.',
            ''
        ]
    }
]},
{
    title: 'Category Title',
    categoryId: 7,
    positions: [{
        positionId: 1,
        position: 'Outside Green lg L',
        fontsize: 2,
        xOffset: 0, // blue
        yOffset: 0, // cyan
        zOffset:0, // Red
        labels: [
            'Female Subject Rests',
            'in the Ground state',
            'Line 3 long text offset',
            'Line 4 long text offset',            
        ]
    },
    {
        positionId: 2,
        position: 'Inside Blue lg L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0,
        labels: [
            'Male Subject Rests',
            'in the Ground State',
            'Line 3 long text offset',
            'Line 4 long text offset',
            '',
            '',
            ''
        ]
    },
    {
        positionId: 3,
        position: 'Inside Blue sm L',
        fontsize: 2,
        xOffset:0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Male Object Pulled;',
            'the seed is selected',
            'from the Ground',
            'of possibilities.',
            '',
            ''
        ]
    },
    {
        positionId: 4,
        position: 'Inside Green sm L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0 ,
        labels: [
            'Female Subject Pulls,',
            'selecting Male seed:',
            'inception/insemination/',
            'fertilization',
            '',
            ''
        ]
    },
    {
        positionId: 5,
        position: 'Front Seam',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Transitions,',
            '(producing Her Object, gestation).',
            'Male Subject',
            'continues to Rest.',
            '',
            'Line 4 long text offset'
        ]
    },
    {
        positionId: 6,
        position: 'Inside Blue sm R',
        fontsize: 2,
        xOffset: 0,  
        yOffset: 0,  // vertical offset
        zOffset: 0,
        labels: [
            'Male Object Pulls',
            '(via physical sensory receptors)',
            'an impression of the',
            'Created/OUTformed content.',
            '',
            ''
        ]
    },
    {
        positionId: 7,
        position: 'Inside Green sm R',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Object',
            'gets Pushed/OUTformed',
            '(inside-space and boundary',
            'of a Particularity)',
            '',
            ''
        ]
    },
    {
        positionId: 8,
        position: 'Inside Green lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Pushes',
            'Object and expands the',
            'outside-space of a',
            'Particularity.',
            '',
            ''
        ]
    },
    {
        positionId: 9,
        position: 'Outside Blue lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            '1) Male Object Transitions,',
            'producing local reactions;',
            '2) Male Subject (Environment)',
            'Pulls/receives data (global',
            'non-local reconfiguration.)',
            ''
        ]
    },
    {
        positionId: 10,
        position: 'Back Gap',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Objects disintegrate',
            'into Ground (mingled-in).',
            'Male Subject Transitions,',
            'self-sacrificing or ',
            'disrupting the Ground state.',
            ''
        ]
    }
]},
{
    title: 'Category Title',
    categoryId: 8,
    positions: [{
        positionId: 1,
        position: 'Outside Green lg L',
        fontsize: 2,
        xOffset: 0, // blue
        yOffset: 0, // cyan
        zOffset:0, // Red
        labels: [
            'Female Subject Rests',
            'in the Ground state',
            'Line 3 long text offset',
            'Line 4 long text offset',            
        ]
    },
    {
        positionId: 2,
        position: 'Inside Blue lg L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0,
        labels: [
            'Male Subject Rests',
            'in the Ground State',
            'Line 3 long text offset',
            'Line 4 long text offset',
            '',
            '',
            ''
        ]
    },
    {
        positionId: 3,
        position: 'Inside Blue sm L',
        fontsize: 2,
        xOffset:0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Male Object Pulled;',
            'the seed is selected',
            'from the Ground',
            'of possibilities.',
            '',
            ''
        ]
    },
    {
        positionId: 4,
        position: 'Inside Green sm L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0 ,
        labels: [
            'Female Subject Pulls,',
            'selecting Male seed:',
            'inception/insemination/',
            'fertilization',
            '',
            ''
        ]
    },
    {
        positionId: 5,
        position: 'Front Seam',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Transitions,',
            '(producing Her Object, gestation).',
            'Male Subject',
            'continues to Rest.',
            '',
            'Line 4 long text offset'
        ]
    },
    {
        positionId: 6,
        position: 'Inside Blue sm R',
        fontsize: 2,
        xOffset: 0,  
        yOffset: 0,  // vertical offset
        zOffset: 0,
        labels: [
            'Male Object Pulls',
            '(via physical sensory receptors)',
            'an impression of the',
            'Created/OUTformed content.',
            '',
            ''
        ]
    },
    {
        positionId: 7,
        position: 'Inside Green sm R',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Object',
            'gets Pushed/OUTformed',
            '(inside-space and boundary',
            'of a Particularity)',
            '',
            ''
        ]
    },
    {
        positionId: 8,
        position: 'Inside Green lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Pushes',
            'Object and expands the',
            'outside-space of a',
            'Particularity.',
            '',
            ''
        ]
    },
    {
        positionId: 9,
        position: 'Outside Blue lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            '1) Male Object Transitions,',
            'producing local reactions;',
            '2) Male Subject (Environment)',
            'Pulls/receives data (global',
            'non-local reconfiguration.)',
            ''
        ]
    },
    {
        positionId: 10,
        position: 'Back Gap',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Objects disintegrate',
            'into Ground (mingled-in).',
            'Male Subject Transitions,',
            'self-sacrificing or ',
            'disrupting the Ground state.',
            ''
        ]
    }
]}
,
{
    title: 'Category Title',
    categoryId: 9,
    positions: [{
        positionId: 1,
        position: 'Outside Green lg L',
        fontsize: 2,
        xOffset: 0, // blue
        yOffset: 0, // cyan
        zOffset:0, // Red
        labels: [
            'Female Subject Rests',
            'in the Ground state',
            'Line 3 long text offset',
            'Line 4 long text offset',            
        ]
    },
    {
        positionId: 2,
        position: 'Inside Blue lg L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0,
        labels: [
            'Male Subject Rests',
            'in the Ground State',
            'Line 3 long text offset',
            'Line 4 long text offset',            
        ]
    },
    {
        positionId: 3,
        position: 'Inside Blue sm L',
        fontsize: 2,
        xOffset:0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Male Object Pulled;',
            'the seed is selected',
            'from the Ground',
            'of possibilities.',           
        ]
    },
    {
        positionId: 4,
        position: 'Inside Green sm L',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset:0 ,
        labels: [
            'Female Subject Pulls,',
            'selecting Male seed:',
            'inception/insemination/',
            'fertilization',            
        ]
    },
    {
        positionId: 5,
        position: 'Front Seam',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Transitions,',
            '(producing Her Object, gestation).',
            'Male Subject',
            'continues to Rest.',            
        ]
    },
    {
        positionId: 6,
        position: 'Inside Blue sm R',
        fontsize: 2,
        xOffset: 0,  
        yOffset: 0,  // vertical offset
        zOffset: 0,
        labels: [
            'Male Object Pulls',
            '(via physical sensory receptors)',
            'an impression of the',
            'Created/OUTformed content.',           
        ]
    },
    {
        positionId: 7,
        position: 'Inside Green sm R',
        fontsize: 2,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Object',
            'gets Pushed/OUTformed',
            '(inside-space and boundary',
            'of a Particularity)',           
        ]
    },
    {
        positionId: 8,
        position: 'Inside Green lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Subject Pushes',
            'Object and expands the',
            'outside-space of a',
            'Particularity.',           
        ]
    },
    {
        positionId: 9,
        position: 'Outside Blue lg R',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            '1) Male Object Transitions,',
            'producing local reactions;',
            '2) Male Subject (Environment)',
            'Pulls/receives data (global',
            'non-local reconfiguration.)',
            ''
        ]
    },
    {
        positionId: 10,
        position: 'Back Gap',
        fontsize: 4,
        xOffset: 0,
        yOffset: 0,
        zOffset: 0,
        labels: [
            'Female Objects disintegrate',
            'into Ground (mingled-in).',
            'Male Subject Transitions,',
            'self-sacrificing or ',
            'disrupting the Ground state.',
            ''
        ]
    }
]}
];