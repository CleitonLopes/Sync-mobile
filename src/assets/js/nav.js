var selector, elems, makeActive, router, selecionado, hashAtual;


hashAtual = window.location.hash;

selector = 'nav li';

elems = document.querySelectorAll(selector);



elems.forEach(function(el) {
	if (el.dataset['key'] === hashAtual) {
		el.classList.add('active');
	}
});


makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');
    	this.classList.add('active');
		selecionado = this;
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);


