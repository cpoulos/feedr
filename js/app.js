window.onload = function() {
/*
  Please add all Javascript code to this file.

When the application first loads display the loading container (see below on instructions to toggle this). When you successfully retrieve information from the default API hide the loader and replace the content of the #main container with that of the API. The DOM structure of each article must adhere to the .article structure.

When the user selects an article's title show the #popUp overlay. The content of the article must be inserted in the .container class inside #popUp. Make sure you remove the .loader class when toggling the article information in the pop-up.
Change the link of the "Read more from source" button to that of the respective article.
When the user selects a source from the dropdown menu on the header, replace the content of the page with articles from the newly selected source. Display the loading pop up when the user first selects the new source, and hide it on success.
Add an error message (either alert or a notification on the page) if the app cannot load from the selected feed.

*/

	var article1 = {
		"title": "Fake Title",
		"description" : "blah blah",
		"url" : "http://www.bbc.com/news/world-europe-35102595",
		"image" : "article_placeholder_1.jpg" 
	};

	var $main = $('#main');
	var $article = $('.article');
	var $featuredImage = $('.featuredImage');
	var $popUp = $('#popUp');
	var $closePopUp = $('.closePopUp');

//open popup
	$article.on('click', function(event) {
		if(event.type == 'click') {
			$popUp.removeClass('loader hidden');
		};
	});

//close popup
	$closePopUp.on('click', function(event) {
		if(event.type == 'click') {
			$popUp.addClass('loader hidden');
		};
	});




};

