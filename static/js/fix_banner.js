// JavaScript 코드
window.addEventListener('scroll', function() {
    var rightbanner = document.getElementById('rightbanner');

    var rightbannerRect = rightbanner.getBoundingClientRect();

    var topOffset = rightbannerRect.top + window.scrollY;

    if (topOffset <= 0) {
        rightbanner.style.position = 'fixed';
        rightbanner.style.top = '0';
    } else {
        rightbanner.style.position = 'static';
    }
});
