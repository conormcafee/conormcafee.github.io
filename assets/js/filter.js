document.getElementById('case-study-btn').addEventListener('click', function (e) {
    apollo.toggleClass(e.target, 'js-active js-inactive');
    //
    var y = document.querySelectorAll('[data-post="case-study"]');
		for (var i = 0; i < y.length; i++)
		apollo.toggleClass(y[i], 'is-hidden is-visible');
}, false);

document.getElementById('journal-btn').addEventListener('click', function (e) {
	apollo.toggleClass(e.target, 'js-active js-inactive');
    //
	var y = document.querySelectorAll('[data-post="journal"]');
		for (var i = 0; i < y.length; i++)
		apollo.toggleClass(y[i], 'is-hidden is-visible');
}, false);