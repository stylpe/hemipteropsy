function calc() {
    const form = document.getElementById("bedbugs")
    // form.elements is an HTMLFormControlsCollection.
    // It has a property for each named form input.
    let tally = Object.getOwnPropertyNames(form.elements)
        .filter(it => it.startsWith("bug_"))
        .map(it => form.elements[it].value)
        .reduce((val, it) => val * it, 1)
    form.elements.score.value = tally.toFixed(2)
}

window.addEventListener('load', calc, false);
