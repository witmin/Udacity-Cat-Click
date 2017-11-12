$(function () {
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
     * Create new cat object and add them to an array
     */
    let imageFolder = "images/";
    let cat1 = new Cat("Birdy", imageFolder + "kitten-2.jpg");
    let cat2 = new Cat("Cindy", imageFolder + "kitten-7.jpg");
    let cat3 = new Cat("Ninja", imageFolder + "kitten-Nirzar.jpg");
    let cat4 = new Cat("Thai", imageFolder + "kitten-Thai.jpg");
    let cat5 = new Cat("Twins", imageFolder + "kitten-twins.jpg");
    let cats = [cat1, cat2, cat3, cat4, cat5];

    let modal = {
        clicks: 0,
        selectedCatName: '',
    };


    let view = {
        initClickTimesValue: function (clicks) {
            $('#clicked-times').text(clicks);
        },

        loadCatsList: function (cats) {
            for (let cat of cats) {
                cat.addToList();
            }
        },
        /**
         * @description show selected cat image
         */
        showSelectedCat: function (selectedCatName) {
            for (let cat of cats) {
                if (cat._name === selectedCatName) {
                    console.log(cat._name === selectedCatName);
                    cat.addToPage();
                }
            }
        }
    };

    /**
     * @description initial the click value and load cats list
     */

    let octopus = {
        render: function () {
            view.initClickTimesValue(modal.clicks);
            view.loadCatsList(cats);

            /**
             * Listen to click events
             */
            $('#cats-names-list').click('li', function (e) {
                let target = event.target;
                modal.selectedCatName = $(target).attr('title');
                view.showSelectedCat(modal.selectedCatName);
            });

            $('#cats-list').click('img', function (e) {
                console.log(event.target);
                modal.clicks += 1;
                $('#clicked-times').text(modal.clicks);
            });
        }
    };

    octopus.render();

});