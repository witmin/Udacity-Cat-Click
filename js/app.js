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
        let htmlContainer = `<li><h2>${this._name}</h2>
            <figure><img src="${this._image}" alt="${this._name}"></figure>
            </li>`;

        $('#cats-list').append($(htmlContainer));
    };

    imageClicked() {
        clicks += 1;
    };
}

/**
 * @description init image click times value
 */
function initClickTimesValue() {
    $('#clicked-times').text(clickTime);
}


$(document).ready(function () {
    initClickTimesValue();



    let cat_one = new Cat("Birdy", "")

    $('.cat-image').click(function (e) {
        clicks += 1;
        $('#clicked-times').text(clickTime);
    });
});
