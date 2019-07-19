/*
 * Quadernity Model Label Descriptions.
 * Author: Paul T. Saletzki
 * Date: March 2019
 * This one file represents just one category only. 
 * Please edit this file to add or remove labels to each position for this category.
 * The Labels below represent the positions on the model. You have control over which lines get displayed and how many.
 * Labels can be added with a 'some verbage here...' around the label to denote the start and end of the label. 
 * Blank labels are permitted: ''
 * Each Label must be demarked with a comma ,
 * Font Size can be adjusted from 1 up to 25.
 */

var categoryIndex = 1; // Use this value to determine which Category Set (below) is displayed on the model.
// 1 for the first Label Set, 2 for the second Label Set, 3 for the third, etc...

var categorySets = [{
        title: 'Quadernity Labels',
        categoryId: 1,
        visible: true,
        positions: [{
                positionId: 1,
                position: 'Outside Green lg L',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Creatable',
                    'ULQ',
                    'Ground State',
                    'Female',
                ]
            },
            {
                positionId: 2,
                position: 'Inside Blue lg L',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'INformed',
                    'URQ',
                    'Ground State',
                    'Male',
                ]
            },
            {
                positionId: 3,
                position: 'Inside Blue sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 2, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Creative',
                    'URQ',
                    'Passively Influential',
                    'Potentially Structuring',
                ]
            },
            {
                positionId: 4,
                position: 'Inside Green sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 3, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4.5, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'INformer',
                    'ULQ',
                    'Selectively Substantiating',
                    'Causally Subjective',
                ]
            },
            {
                positionId: 5,
                position: 'Front Seam',
                fontsize: 4,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Creating/OUTforming',
                    'Female to Male Exchange',
                    '',
                ]
            },
            {
                positionId: 6,
                position: 'Inside Blue sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 2, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 3, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'INformable',
                    'LLQ',
                    'Individually Selective',
                    'Casually Subjective',
                ]
            },
            {
                positionId: 7,
                position: 'Inside Green sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Created',
                    'LRQ',
                    'Objective Matter appears passive and',
                    'static from external vantage points.',
                ]
            },
            {
                positionId: 8,
                position: 'Inside Green lg R',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'INformative',
                    'LRQ',
                    'Objective Patterns',
                    'Reflectively Influential',
                ]
            },
            {
                positionId: 9,
                position: 'Outside Blue lg R',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Creator',
                    'URQ',
                    'Collectively Decisive',
                    'Causally Subjective',
                ]
            },
            {
                positionId: 10,
                position: 'Back Gap',
                fontsize: 4,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'INforming',
                    'Male to Female Exchange',
                    '',
                    '',
                ]
            }
        ]
    },
    {
        title: 'PTPR Labels',
        categoryId: 2,
        visible: true,
        positions: [{
                positionId: 1,
                position: 'Outside Green lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Female TRANSITIONS.',
                    'The Structuring of Substance',
                    'is similar to gestation in pregnancy.',
                    '',
                ]
            },
            {
                positionId: 2,
                position: 'Inside Blue lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Male RESTS',
                    'as a Pattern of potentiality,',
                    'mingled-in with the',
                    'unformed Substance.',
                ]
            },
            {
                positionId: 3,
                position: 'Inside Blue sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Male RESTS',
                    'as His seed/Pattern',
                    'influences the otherwise',
                    'quiescent prime aether field.',
                ]
            },
            {
                positionId: 4,
                position: 'Inside Green sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 5, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Female TRANSITIONS,',
                    'organizing Matter',
                    'according to Pattern.'
                ]
            },
            {
                positionId: 5,
                position: 'Front Seam',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Male PULLS, Female PUSHES.',
                    'Creating/OUTforming',
                    'requires an Observer with sensory receptors',
                    'to receive the output/offspring.',
                ]
            },
            {
                positionId: 6,
                position: 'Inside Blue sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 3, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 3, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Male TRANSITIONS,',
                    'making some meaning',
                    'out of His impression of the',
                    'Created/OUTformed expression.',
                ]
            },
            {
                positionId: 7,
                position: 'Inside Green sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 3, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Female RESTS as Matter, or as a',
                    'Created/OUTformed Particularity,',
                    'bound by conditions that are',
                    'specified by the local INformables',
                    'and the universal omniscience.'
                ]
            },
            {
                positionId: 8,
                position: 'Inside Green lg R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Female RESTS',
                    'as the OUTside-spaces of',
                    'Particularities reflect ',
                    'the reactions of their Observers.',

                ]
            },
            {
                positionId: 9,
                position: 'Outside Blue lg R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Male TRANSITIONS,',
                    'recording His insights',
                    'into the Akashic Records/Collective Consciousness.',
                    '',
                    '',
                ]
            },
            {
                positionid: 10,
                position: 'Back Gap',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Female PULLS/selects/singles-out a seed',
                    'for inception/insemination/fertilization.',
                    'Male PUSHES his Creative seed.',
                ]
            }
        ]
    },
    {
        title: 'Labels from Various Scriptures',
        categoryId: 3,
        visible: true,
        positions: [{
                positionId: 1,
                position: 'Outside Green lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Tao, the Waters, gateway to Heaven and Earth.',
                    'Virgin Mother is with child.',
                    'Heat/movement/desire arises in',
                    'that One who breathes windlessly.',
                    '',
                ]
            },
            {
                positionId: 2,
                position: 'Inside Blue lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'The Word that was with God',
                    'and was God',
                    '(mingled-in as potentiality).',
                    '',
                ]
            },
            {
                positionId: 3,
                position: 'Inside Blue sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Let there be light.',
                ]
            },
            {
                positionId: 4,
                position: 'Inside Green sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Omnipotent Female/Mother',
                    'lies low (in lowly manger).',
                ]
            },
            {
                positionId: 5,
                position: 'Front Seam',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    '1) The Virgin Birth',
                    'And there is light, the offspring of Mary,',
                    'Sun/Light/Sol/Soul/Christ is',
                    'born of a Virgin, yet untouched by man',
                    '2+) Emergence of Matter.',
                    '(or reactions of the waking mind).',
                    '',
                ]
            },
            {
                positionId: 6,
                position: 'Inside Blue sm R',
                fontsize: 1.75,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 5, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 3, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Father/Observer sees the light',
                    'that it is good.',
                    'He divides content from context',
                    'and names the 10,000 things.',
                ]
            },
            {
                positionId: 7,
                position: 'Inside Green sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Observed is as a solute, ',
                    'fallen from solution/grace.',
                    'Chrystal, Christ.'
                ]
            },
            {
                positionId: 8,
                position: 'Inside Green lg R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Reactions of Observer emanate',
                    'as interference Patterns;',
                    'these angles/angels',
                    'enter the heavens,',
                    'or outside-spaces.',
                ]
            },
            {
                positionId: 9,
                position: 'Outside Blue lg R',
                fontsize: 1.5,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Father Sky/Father who art in Heaven/',
                    'the Omniscient Observer/,',
                    'Overseer of this field-in-flux/',
                    'the Environment disturbed by local Observers.',
                ]
            },
            {
                positionId: 10,
                position: 'Back Gap',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    '1) Spirit/Breath moves on the face of the waters/',
                    'Virgin Mary/non-resistant carrier of yin.',
                    '2+) Re-Solution: Solutes and Solvent',
                    'become again a mingled-in Solution.',
                    '',
                    '',
                    '',
                ]
            }
        ]
    },
    {
        title: 'Labels from Consciousness Studies Including Yogic Philosophy',
        categoryId: 4,
        visible: true,
        positions: [{
                positionId: 1,
                position: 'Outside Green lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Shakti',
                    'Prakriti',
                    '',
                ]
            },
            {
                positionId: 2,
                position: 'Inside Blue lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Brahman, Purusha,',
                    'Mind of the universe that manages all things;',
                    'without individual vantage point,',
                    'self and other remain indifferentiated.',
                    'Instinctive, Sleeping, Unconscious Mind (M)'
                ]
            },
            {
                positionId: 3,
                position: 'Inside Blue sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Dreaming Mind (U),',
                    'uncensored, impulsive, emotive. ',
                ]
            },
            {
                positionId: 4,
                position: 'Inside Green sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 2, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'The great Intelligence',
                    'that produces all things.',
                    'Coordinator of internal Parts.',
                    '',
                    '',
                    '',
                ]
            },
            {
                positionId: 5,
                position: 'Front Seam',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Sensory stimuli at boundary',
                    're-Minds the wakeful consciousness.',
                    '',
                    '',
                ]
            },
            {
                positionId: 6,
                position: 'Inside Blue sm R',
                fontsize: 1.75,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 5, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 2, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Attention is "paid" to sensations.',
                    'As quantities are imagined',
                    'in the waking mind (A)',
                    'meanings are deduced',
                    'and qualia is experienced.',
                ]
            },
            {
                positionId: 7,
                position: 'Inside Green sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'That which is seen/',
                    'perceived/measured/calculated/',
                    'rationalized/divided.',
                    'This Particularity becomes part of',
                    'the INside-space of the Observer.',
                    ''
                ]
            },
            {
                positionId: 8,
                position: 'Inside Green lg R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Reactions to those meanings made',
                    'emanate as field projections',
                    'throughout the aether/waters,',
                    'producing the OUTside-space',
                    'of each Particularity.',
                ]
            },
            {
                positionId: 9,
                position: 'Outside Blue lg R',
                fontsize: 1.75,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Patterns are re-cognized, re-viewed, compared, contrasted.',
                    'Memories are accessed via vibratory resonance,',
                    'not from brain, but from',
                    'holographic Consciousness/the Akashic Records/Turiya/',
                    'INformative waves that are ever-present in space.',
                ]
            },
            {
                positionId: 10,
                position: 'Back Gap',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Effects of the collective field disturbances',
                    'are fed-forward to the Concealed Unity/Shakti-Brahman',
                    'via the re-seeding/INforming of Creatable Substance.',
                    ' ',
                    ''
                ]
            }
        ]
    },
    {
        title: 'Labels from Physics According to Measurability by Human Standards',
        categoryId: 5,
        visible: true,
        positions: [{
                positionId: 1,
                position: 'Outside Green lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Raw Substance',
                    'Super-Conducting Plasma',
                    'Super-Saturated Solution',
                    'Luminiferous Aether',
                ]
            },
            {
                positionId: 2,
                position: 'Inside Blue lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Holographic Space Memory Network,',
                    'an emanating field that',
                    'INforms holographically.',
                    '',
                ]
            },
            {
                positionId: 3,
                position: 'Inside Blue sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 1, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'The probability to become...',
                    '(without position or momentum).',
                    'An aptitude, a tendency to ...',
                    '',
                ]
            },
            {
                positionId: 4,
                position: 'Inside Green sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Center of mass,',
                    'INside-space,',
                    'centripetal acceleration',
                    'within a bi-polar toroid.',
                ]
            },
            {
                positionId: 5,
                position: 'Front Seam',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Event horizon;',
                    'oscillation gives Structure to Substance.',
                    'Patterns Matter, as seen in cymatics.',
                    '',
                    '',
                ]
            },
            {
                positionId: 6,
                position: 'Inside Blue sm R',
                fontsize: 2,
                xOffset: -3, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 2, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'The Observers, algorithms, gas traps',
                    'photon absorbers, charged particles or',
                    'attendees in the aether field, etc. that',
                    'quantize Particularities in space and ',
                    'sequence experiences in time.',
                ]
            },
            {
                positionId: 7,
                position: 'Inside Green sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: -3, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 3, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Fractal organizations,',
                    'Solutes falling from Solution,',
                    'fields forming in Aether,',
                    'boundaries dividing',
                    'INside and OUTside spaces.',
                ]
            },
            {
                positionId: 8,
                position: 'Inside Green lg R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Reflecting the reactions of their Observers,',
                    'Particularities appear to emit radiation',
                    'in/as their outside-space.',
                ]
            },
            {
                positionId: 9,
                position: 'Outside Blue lg R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Environments/atmospheres as Observers;',
                    'deBroglie waves, pilot waves;',
                    'global, non-local perspective.',
                    '',
                ]
            },
            {
                positionId: 10,
                position: 'Back Gap',
                fontsize: 2.75,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Energy of mass (inertia of relationship) is returned in the',
                    'disintegration (entropy) of Matter-Patterns.',
                    'RESToration of the quiescent, indeterminate INformed-Creatable.',
                    '',
                    '',
                ]
            }
        ]
    },
    {
        title: 'Dielectric-Magnetic Field Labels',
        categoryId: 6,
        visible: false,
        positions: [{
                positionId: 1,
                position: 'Outside Green lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Dielectric Potential',
                    '',
                    '',
                    '',
                ]
            },
            {
                positionId: 2,
                position: 'Inside Blue lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    '',
                    '',
                    '',
                    '',
                ]
            },
            {
                positionId: 3,
                position: 'Inside Blue sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Initial Aether-field disturbance (Prime Mover)',
                    '',
                    '',
                    '',
                ]
            },
            {
                positionId: 4,
                position: 'Inside Green sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Aether field',
                    'absorbs disturbance',
                    'Forms INside space of',
                    'dielectric field.',
                ]
            },
            {
                positionId: 5,
                position: 'Front Seam',
                fontsize: 4,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Bow-shock of Dielectric Field forms.',
                    '',
                    '',
                    '',
                ]
            },
            {
                positionId: 6,
                position: 'Inside Blue sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Object acquires charge.',
                    'Electrification by field perturbance.',
                    '',
                    '',
                ]
            },
            {
                positionId: 7,
                position: 'Inside Green sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Object is Polarized, magnetic field',
                    'discharges the dielectric disturbance.',
                    '',
                    '',
                ]
            },
            {
                positionId: 8,
                position: 'Inside Green lg R',
                fontsize: 4,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Magnetic field Pushes/extends.',
                    '',
                    '',
                    '',
                ]
            },
            {
                positionId: 9,
                position: 'Outside Blue lg R',
                fontsize: 4,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Magnetic field interferes with',
                    'dielectric plane.',
                    '',
                    '',
                    '',
                ]
            },
            {
                positionId: 10,
                position: 'Back Gap',
                fontsize: 4,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Magneto-dielectric disturbs the otherwise neutral dielectric potential.',
                    '',
                    '',
                    '',
                    '',
                    ''
                ]
            }
        ]
    },
    {
        title: 'Mathematical Labels',
        categoryId: 7,
        visible: true,
        positions: [{
                positionId: 1,
                position: 'Outside Green lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2) 
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Everything 1/0',
                    'Raw Substance is unlimited.',
                    '',
                    '',
                ]
            },
            {
                positionId: 2,
                position: 'Inside Blue lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Nothing 0/1',
                    'Consciousness has no self',
                    'or distinct vantage point.',
                    '',
                ]
            },
            {
                positionId: 3,
                position: 'Inside Blue sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Powers of base .618...',
                    '',
                    '',
                    '',
                ]
            },
            {
                positionId: 4,
                position: 'Inside Green sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'The internal/pre-spatial,',
                    'hierarchical dimensions:',
                    'within/below the',
                    'central unit 1/1.',
                ]
            },
            {
                positionId: 5,
                position: 'Front Seam',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Sq.rt. of +1 is BOTH +1 and -1.',
                    'Combined, they cancel to 0.',
                    'Exponent of 0 on base of .618 or 1.618',
                    'makes the central unit 1/1.',
                ]
            },
            {
                positionId: 6,
                position: 'Inside Blue sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'The one who ',
                    'counts and discounts.',
                    '',
                    '',
                ]
            },
            {
                positionId: 7,
                position: 'Inside Green sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'The 10,000 things',
                    'that temporarily express',
                    'the diversity of 1/1.',
                    '',
                ]
            },
            {
                positionId: 8,
                position: 'Inside Green lg R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'The external/spatial',
                    'hierarchical dimensions',
                    'outside/beyond the unit 1/1.',
                    '',
                ]
            },
            {
                positionId: 9,
                position: 'Outside Blue lg R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Powers of base 1.618...',
                    '',
                    '',
                    '',
                    '',
                ]
            },
            {
                positionId: 10,
                position: 'Back Gap',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Sq.rt. of -1,',
                    'is NEITHER +1 nor -1;',
                    'indeterminacy, 0/0.',
                    '',
                    '',
                ]
            }
        ]
    },
    {
        title: 'Domains and Relationships',
        categoryId: 8,
        visible: true,
        positions: [{
                positionId: 1,
                position: 'Outside Green lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2) 
                labels: [
                    'Upper Quadrants',
                    'Metaphysical Domain',
                    '',
                    '',
                ]
            },
            {
                positionId: 2,
                position: 'Inside Blue lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Upper Quadrants',
                    'Metaphysical Domain',
                    '',
                    '',
                ]
            },
            {
                positionId: 3,
                position: 'Inside Blue sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 3, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Upper Quadrants',
                    'Metaphysical Domain',
                    '',
                    '',
                ]
            },
            {
                positionId: 4,
                position: 'Inside Green sm L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 3, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Upper Quadrants',
                    'Metaphysical Domain',
                    '',
                    '',
                ]
            },
            {
                positionId: 5,
                position: 'Front Seam',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Public Daytime Relationship',
                    'Male Pulls, Female Pushes',
                    '',
                    '',
                ]
            },
            {
                positionId: 6,
                position: 'Inside Blue sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 4, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Lower Quadrants',
                    'Physical Domain',
                    '',
                    '',
                ]
            },
            {
                positionId: 7,
                position: 'Inside Green sm R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 3, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Lower Quadrants',
                    'Physical Domain',
                    '',
                    '',
                ]
            },
            {
                positionId: 8,
                position: 'Inside Green lg R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Lower Quadrants',
                    'Physical Domain',
                    '',
                    '',
                ]
            },
            {
                positionId: 9,
                position: 'Outside Blue lg R',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Lower Quadrants',
                    'Physical Domain',
                    '',
                    '',
                    '',
                ]
            },
            {
                positionId: 10,
                position: 'Back Gap',
                fontsize: 3,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Private Nighttime Relationship',
                    'Female Pulls, Male Pushes.',
                    '',
                    '',
                    '',
                ]
            }
        ]
    },
    {
        title: 'Category Title',
        categoryId: 9,
        visible: false,
        positions: [{
                positionId: 1,
                position: 'Outside Green lg L',
                fontsize: 2,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2) 
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2) 
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
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
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
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
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
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
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
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
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
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
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
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
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
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
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
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    '1) Male Object Transitions,',
                    'producing local reactions;',
                    '2) Male Subject (Environment)',
                    'Pulls/receives data (global',
                    'non-local reconfiguration.)',
                ]
            },
            {
                positionId: 10,
                position: 'Back Gap',
                fontsize: 4,
                xOffset: 0, // blue Axis line LEFT or RIGHT (-, 0, + such as 0.5 or -1.2)
                yOffset: 0, // cyan Axis Line Vertical (-, 0, + such as 0.5 or -1.2)
                zOffset: 0, // Red Axis line In or Out (-, 0, + such as 0.5 or -1.2)
                labels: [
                    'Female Objects disintegrate',
                    'into Ground (mingled-in).',
                    'Male Subject Transitions,',
                    'self-sacrificing or ',
                    'disrupting the Ground state.',
                ]
            }
        ]
    }
];