const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
cats.push("Ralph")
};
function destructivelyPrependCat(name) {
cats.unshift("Bob")
};
function destructivelyRemoveLastCat(name) {
cats.pop()
}
function destructivelyRemoveFirstCat(name) {
cats.shift()
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats]
}
function removeLastCat(name) {
    const copyCats = cats.slice()
    return copyCats.slice(0, copyCats.length - 1) ;
}function removeFirstCat(name) {
    const copyCats = cats.slice()
    return cats.slice(1)
}