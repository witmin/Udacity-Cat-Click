'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @description define the click total
 * @type {number}
 */
var clicks = 0;

var imageFolder = "images/";

/**
 * @description set up a Class of cat
 * @constructor
 * @param name {string}, image {string}
 */

var Cat = function () {
    function Cat(name, image) {
        _classCallCheck(this, Cat);

        this._name = name;
        this._image = image;
    }

    _createClass(Cat, [{
        key: 'addToPage',
        value: function addToPage() {
            var htmlContainer = '<li><h2>' + this._name + '</h2><figure><img class="cat-image" src="' + this._image + '" alt="' + this._name + '"></figure></li>';

            $('#cats-list').append($(htmlContainer));
        }
    }]);

    return Cat;
}();

/**
 * @description init image click times value
 */


function initClickTimesValue() {
    $('#clicked-times').text(clicks);
}

/**
 * Create new cat object and add them to an array
 */

var catOne = new Cat("Birdy", imageFolder + "kitten-2.jpg");
var catTwo = new Cat("Cindy", imageFolder + "kitten-7.jpg");
var cats = [catOne, catTwo];

/**
 * @description load all cats in cats array
 */
function loadCats(cats) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = cats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var cat = _step.value;

            cat.addToPage();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
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
