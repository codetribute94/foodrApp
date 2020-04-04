var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, {
    onOpenStart: function () {
        console.log("I trigger as soon as the page is loaded");
    },
    onCloseEnd: function () {
        console.log("same");
    }
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {
    onOpenStart: function () {
        console.log("I trigger as soon as the page is loaded");
    }
})
});