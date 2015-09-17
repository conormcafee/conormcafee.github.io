document.getElementById('case-study-btn').addEventListener('click', function (e) {
    var x = document.getElementsByClassName('filter-list--case-study');
    	for (var i = 0; i < x.length; i++)
       	apollo.toggleClass(x[i], 'js-active js-inactive');
    //
    var y = document.querySelectorAll('[data-post="case-study"]');
		for (var i = 0; i < y.length; i++)
		apollo.toggleClass(y[i], 'is-hidden is-visible');
}, false);

document.getElementById('journal-btn').addEventListener('click', function (e) {
	var x = document.getElementsByClassName('filter-list--journal');
    	for (var i = 0; i < x.length; i++)
        apollo.toggleClass(x[i], 'js-active js-inactive');
    //
	var y = document.querySelectorAll('[data-post="journal"]');
		for (var i = 0; i < y.length; i++)
		apollo.toggleClass(y[i], 'is-hidden is-visible');
}, false);

document.getElementById('labs-btn').addEventListener('click', function (e) {
	var x = document.getElementsByClassName('filter-list--labs');
    	for (var i = 0; i < x.length; i++)
        apollo.toggleClass(x[i], 'js-active js-inactive');
    //
	var y = document.querySelectorAll('[data-post="labs"]');
		for (var i = 0; i < y.length; i++)
		apollo.toggleClass(y[i], 'is-hidden is-visible');
}, false);