/**
 * @description define the click total
 * @type {number}
 */
let clicks = 0;

const imageFolder = "images/";

/**
 * @description set up a Class of cat
 * @constructor
 * @param name {string}, image {string}
 */

class Cat {
    constructor(name, image) {
        this._name = name;
        this._image = image;
    }
    addToPage() {
        let htmlContainer = `<li><h2>${this._name}</h2><figure><img class="cat-image" src="${this._image}" alt="${this._name}"></figure></li>`;

        $('#cats-list').append($(htmlContainer));
    };
}

/**
 * @description init image click times value
 */
function initClickTimesValue() {
    $('#clicked-times').text(clicks);
}


/**
 * Create new cat object and add them to an array
 */

let catOne = new Cat("Birdy", imageFolder + "kitten-2.jpg");
let catTwo = new Cat("Cindy", imageFolder + "kitten-7.jpg");
let cats = [catOne, catTwo];


/**
 * @description load all cats in cats array
 */
function loadCats(cats) {
    for (let cat of cats) {
        cat.addToPage();
    }
}

$(function () {
    initClickTimesValue();
    loadCats(cats);

    // Listen to click event
    $('.cat-image').click(function (e) {
        clicks += 1;
        $('#clicked-times').text(clicks);
    });
});