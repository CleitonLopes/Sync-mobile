var theToggle = document.getElementById('toggle');
var boxConfig = document.getElementById('button-config');


// based on Todd Motto functions
// http://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

window.onload = function() {

    theToggle.onclick = function() {

       toggleClass(this, 'on');

       return false;

   }


   document.getElementById('menu').onclick = function() {

     removeClass(theToggle, 'on');

    }


 boxConfig.onclick = function() {

    toggleClass(document.getElementById('box-config'), 'active2');

    return false;

    }

}





    window.onresize = function(event) {
    voltaConfig();
    };

    function voltaConfig() {
        if (document.body.clientWidth < 700) {
               addClass(document.getElementById('box-config'), 'active2');
            } else {
                removeClass(theToggle, 'on');
            };
    }



