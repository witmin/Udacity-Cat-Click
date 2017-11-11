var clickTime = 0;

function initClickTimesValue() {
    $('#clicked-times').text(clickTime);
}


$(document).ready(function () {
    initClickTimesValue();

    $('#kitten-image').click(function (e) {
        clickTime += 1;
        $('#clicked-times').text(clickTime);
    });
});
