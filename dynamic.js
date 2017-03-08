// An overly complicated way of getting some on the page!

// IIFE ton initiate

setTimeout(function(){ insertText(); }, 2000);

function insertText(){

    // hide loader

    var loaderBox  = document.getElementById('loaderbox');

    loaderBox.style.display = "none";

    // text A

    var textInserts = [
        'Para 1 - Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.', 
        'Para 2 - Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.'];

    //Reverse Array

    textInserts.reverse();

    // create container for text;
    var vessel = document.createElement('div');

    // find heading component
    var heading = document.querySelector('h1');

    // for each item
    for (var i = 0, len = textInserts.length; i < len; i++) {
        var paragraph = document.createElement('p');
        paragraph.textContent = textInserts[i];
        insertAfter(heading, paragraph);
    }

    // function to insert items after a specific Node

    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

};