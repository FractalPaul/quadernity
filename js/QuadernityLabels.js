"use strict";
/*
* Quadernity Model Text Descriptions.
* Author: Paul T. Saletzki
* Date: March 2019
*/
function showDescriptions(labelSet) {
    if (labelSet > 0 && labelSet <= textdescs.length) {
        var indx = labelSet -1;
        for (var i = 0; i < textdescs[indx].labels.length; i++) {
            var divId = '#textdesc' + (i+1);
            var control = $(divId);
            control.removeClass();
            control.addClass('col-2').addClass(textdescs[indx].css);
            control.text(textdescs[indx].labels[i]);
        }
    }
};

var textdescs = [{
    id: 1,
    name: 'Createble',
    css: 'textgreen',
    labels: [
        'Female Subject Rests in the Ground State.',
        'Tao, the Waters, gateway to heaven and earth',
        'N/A since patriarchal times',
        'Raw Substance, Super-conducting Plasma, Supersaturated Solution, the luminiferous aether, a field of energy',
        '√-1 NEITHER +1 nor -1',
        'Upper Quadrants, Metaphysical Domain']
},
{
    id: 2,
    name: 'Informed',
    css: 'textblue',
    labels: [
        'Male Subject Rests in the Ground State.',
        'Omniscient God',
        'Unconsciousness, Turiya, Collective Consciousness',
        'Holographic Space Memory Network, a field of bits of data',
        '√-1 NEITHER +1 nor -1',
        'Upper Quadrants, Metaphysical Domain']
},
{
    id: 3,
    name: 'Creative',
    css: 'textblue',
    labels: [
        'Male Object, seed selected from the Ground of Possibilities.',
        'Spirit-Breath moves on the waters; heat/movement/desire arises in that One, who breathes windlessly.',
        'Deeply-Sleeping Mind (M), no individual vantage point for externality.',
        'Probabilities without position or momentum',
        '0/1 the Infinitesimal, and all the internal dimensions up to, but not including, the central unit',
        'Upper Quadrants, Metaphysical Domain']
},
{
    id: 4,
    name: 'Informer',
    css: 'textgreen',
    labels: [
        'Female Subject selectively Pulls Male seed.',
        'Omnipotent Female/Mother Lies Low, Non-Resistant Receptivity, Virgin Mother',
        'N/A since patriarchal times',
        'Virtual particles, 0D point-particles, singularity inside a black hole, gravity, yin, centripetal force',
        '0/1 the Infinitesimal, and all the internal dimensions up to, but not including, the central unit.',
        'Upper Quadrants, Metaphysical Domain']
},
{
    id: 5,
    name: 'Creating/OUTforming',
    css: 'textturq',
    labels: [
        'Female Subject Transitions, (producing Her Object, gestation); Male Subject continues to Rest.',
        'Inception/ Insemination/ Fertilization/ Direct Encounter',
        'Sensory stimuli at boundary Re-Minds Consciousness.',
        '‘Looking For’ at event horizon, beyond which one cannot see, vibratory disturbance that gives Structure to Substance, cymatics, electromagnetic oscillation',
        '√1 is BOTH +1 and -1, which cancel to 0, the exponent of the central unit 1.',
        'Public Daytime Relationship']
},
{
    id: 6,
    name: 'Informable',
    css: 'textblue',
    labels: [
        'Male Objects Pull (via physical sensory apparatuses) an impression of Created/OUTformed content (Female Object Pushed), along with INformative context (Female Subject’s Push)',
        'Male Pulls,“Let there be Light.”',
        'Receptivity (Male Pull) by the Dreaming Mind (U).',
        'Sequencers of temporal experiences Observers, scientists, attention payers, users of microscopes, telescopes, computer algorithms, gas traps, absorbers of photons, charged particles and fields',
        'The 10,000 things that come to pass as units or Particularities.',
        'Lower Quadrants, Physical Domain']
},
{
    id: 7,
    name: 'Created',
    css: 'textgreen',
    labels: [
        'The Female Object that was Pushed (inside-space and the boundary of a Particular Entity)',
        'Then there is light: The offspring is Sun/Light/Sol/Soul/Son/Christ born from Mother; Chrystal falls from Solution.',
        'That which is seen/perceived/measured/calculated.',
        'Fractally organized emitters of radiation, photons, charged particles and fields, falling from solution',
        'The 10,000 things that come to pass as units or Particularities.',
        'Lower Quadrants, Physical Domain']
},
{
    id: 8,
    name: 'Informative',
    css: 'textgreen',
    labels: [
        'Female Subject Pushes (expanding the outside-space surrounding Her Object).',
        'Akashic Record, Interference Patterns between layers of space, the Heavens.',
        'An encounter, during which Attention is ‘Paid;’ the context in which content is assumed to take place, mental rather than physical space.',
        'The expanding outside-spaces of the cosmos, yang, centripetal force.',
        'Not including the unit 1, all the external dimensions up to and including the infinitude, 1/0.',
        'Lower Quadrants, Physical Domain']
},
{
    id: 9,
    name: 'Creator',
    css: 'textblue',
    labels: [
        '1) Male Objects Transition (producing local reactions; 2) Male Subject (the Environment) Pulls/receives data re: global, non-local reconfiguration.',
        'God sees the light, that it is good, divides light from darkness, names Day and Night. Father Sky, Father who art in Heaven, the Omniscient Observer/Overseer, the Creator of Heaven (context) and Earth (content), the judge of character who divides spaces, names the 10K things and appends memories in time.',
        'Recognition by Waking Mind (A) of qualia re-presenting the quantity encountered. Patterns are 1)Reviewed and 2)Recognized in mental, or psycho-spatial context',
        '‘Looking At’ from the outside toward the boundary, which expands and contracts (“like a bellows”), deBroglie waves, or the atmosphere as an Observer.',
        'Not including the unit 1, all the external dimensions up to and including the infinitude, 1/0.',
        'Lower Quadrants, Physical Domain']
},
{
    id: 10,
    name: 'INforming',
    css: 'textturq',
    labels: [
        'Female Objects are resorbed into Ground (mingled-in); Male Subject Transitions, either self-sacrificing or disrupting the Ground state.',
        'Resolution: Solutes and Solvent are again mingled-in Solution.',
        'The personal vantage point is sacrificed and perceptions are disregarded in enlightenment',
        'Energy borrowed for mass/matter is returned through the disintegration of matter and the reintegration of energy.',
        '√-1, which is NEITHER +1 nor -1.',
        'Private Nighttime Relationship']
}];