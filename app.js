// import functions

// reference needed DOM elements
const adj01 = document.getElementById(`adj01`);
const adj02 = document.getElementById(`adj02`);
const adj03 = document.getElementById(`adj03`);
const adj04 = document.getElementById(`adj04`);
const adj05 = document.getElementById(`adj05`);
const adj06 = document.getElementById(`adj06`);
const adj07 = document.getElementById(`adj07`);
const noun01 = document.getElementById(`noun01`);
const noun02 = document.getElementById(`noun02`);
const noun03 = document.getElementById(`noun03`);
const noun04 = document.getElementById(`noun04`);
const noun05 = document.getElementById(`noun05`);
const noun06 = document.getElementById(`noun06`);
const verbEd01 = document.getElementById(`verb-ed01`);
const verbEd02 = document.getElementById(`verb-ed02`);
const place01 = document.getElementById(`place01`);
const verbIng01 = document.getElementById(`verb-ing01`);
const adverb01 = document.getElementById(`adverb01`);
const nounS01 = document.getElementById(`noun-s01`);
const femName = document.getElementById(`fem-name`);

const fillAdj01 = document.getElementById(`fill-adj01`);
fillAdj01.textContent = adj01.value;

const fillAdj02 = document.getElementById(`fill-adj02`);
fillAdj02.textContent = adj02.value;

const fillAdj03 = document.getElementById(`fill-adj03`);
fillAdj03.textContent = adj03.value;

const fillAdj04 = document.getElementById(`fill-adj04`);
fillAdj04.textContent = adj04.value;

const fillAdj05 = document.getElementById(`fill-adj05`);
fillAdj05.textContent = adj05.value;

const fillAdj06 = document.getElementById(`fill-adj06`);
fillAdj06.textContent = adj06.value;

const fillAdj07 = document.getElementById(`fill-adj07`);
fillAdj07.textContent = adj07.value;

const fillNoun01 = document.getElementById(`fill-noun01`);
fillNoun01.textContent = noun01.value;

const fillNoun02 = document.getElementById(`fill-noun02`);
fillNoun02.textContent = noun02.value;

const fillNoun03 = document.getElementById(`fill-noun03`);
fillNoun03.textContent = noun03.value;

const fillNoun04 = document.getElementById(`fill-noun04`);
fillNoun04.textContent = noun04.value;

const fillNoun05 = document.getElementById(`fill-noun05`);
fillNoun05.textContent = noun05.value;

const fillNoun06 = document.getElementById(`fill-noun06`);
fillNoun06.textContent = noun06.value;

const fillVerbEd01 = document.getElementById(`fill-verb-ed01`);
fillVerbEd01.textContent = verbEd01.value;

const fillVerbEd02 = document.getElementById(`fill-verb-ed02`);
fillVerbEd02.textContent = verbEd02.value; 

const fillPlace01 = document.getElementById(`fill-place01`);
fillPlace01.textContent = place01.value;

const fillPlace02 = document.getElementById(`fill-place02`);
fillPlace02.textContent = place01.value;

const fillVerbIng01 = document.getElementById(`fill-verb-ing01`);
fillVerbIng01.textContent = verbIng01.value;

const fillAdverb01 = document.getElementById(`fill-adverb01`);
fillAdverb01.textContent = adverb01.value;

const fillNounS01 = document.getElementById(`fill-noun-s01`);
fillNounS01.textContent = nounS01.value;

const fillFemName = document.getElementById(`fill-fem-name`);
fillFemName.textContent = femName.value;

const madlib = document.getElementById(`mad-lib`);
const leftWrapper = document.getElementById(`left-wrapper`);

const madlibify = document.getElementById(`madlibify`);
const returnButton = document.getElementById(`return`);

madlibify.addEventListener('click', () => {
    leftWrapper.style.visibility = `hidden`;
    madlibify.style.visibility = `hidden`; 
    madlib.style.visibility = `visible`;
    returnButton.style.visibility = 'visible';
});

returnButton.addEventListener('click', () => {
    leftWrapper.style.visibility = `visible`;
    madlibify.style.visibility = `visible`; 
    madlib.style.visibility = `hidden`;
    returnButton.style.visibility = 'hidden';
});
// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)