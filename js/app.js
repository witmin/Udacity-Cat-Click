/**
 * @description define the click total
 * @type {number}
 */
let clicks = 0;
let selectedCatName = '';
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

        $('#cats-list').empty();

        $('#cats-list').append($(htmlContainer));
    };

    addToList() {
        let htmlContainer = `<li><a href="#" class="cat-name"  title="${this._name}">${this._name}</a></li>`;

        $('#cats-names-list').append($(htmlContainer));
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

let cat1 = new Cat("Birdy", imageFolder + "kitten-2.jpg");
let cat2 = new Cat("Cindy", imageFolder + "kitten-7.jpg");
let cat3 = new Cat("Ninja", imageFolder + "kitten-Nirzar.jpg");
let cat4 = new Cat("Thai", imageFolder + "kitten-Thai.jpg");
let cat5 = new Cat("Twins", imageFolder + "kitten-twins.jpg");
let cats = [cat1, cat2, cat3, cat4, cat5];


/**
 * @description load all cats in cats array
 */
function loadCats(cats) {
    for (let cat of cats) {
        cat.addToPage();
    }
}

/**
 * @description load cats name into a list
 */
function loadCatsList(cats) {
    for (let cat of cats) {
        cat.addToList();
    }
}

/**
 * @description show selected cat image
 */

function showSelectedCat(selectedCatName) {
    for (let cat of cats) {
        if (cat._name === selectedCatName ){
            console.log(cat._name === selectedCatName);
            cat.addToPage();
        }
    }
}

$(function () {
    initClickTimesValue();
    loadCatsList(cats);

    $('#cats-names-list').click('li', function (e) {
        let target = event.target;
        selectedCatName = $(target).attr('title');
        showSelectedCat(selectedCatName);
    });

     // Listen to click event
    $('#cats-list').click('img', function (e) {
        console.log(event.target);
        clicks += 1;
        $('#clicked-times').text(clicks);
    });

});