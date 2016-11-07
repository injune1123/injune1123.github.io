$(document).ready(function(){
	setTimeout(fade_out, 16000);

function fade_out() {
  $(".type-wrap").fadeOut().empty();
}
});

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}


function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            addClass(header,"smaller");
        } else {
            if (hasClass(header,"smaller")) {
                removeClass(header,"smaller");
            }
        }
    });
}
window.onload = init();
