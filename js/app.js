window.onload = function() {
/*
  Please add all Javascript code to this file.

When the application first loads display the loading container (see below on instructions to toggle this). When you successfully retrieve information from the default API hide the loader and replace the content of the #main container with that of the API. The DOM structure of each article must adhere to the .article structure.

When the user selects an article's title show the #popUp overlay. The content of the article must be inserted in the .container class inside #popUp. Make sure you remove the .loader class when toggling the article information in the pop-up.
Change the link of the "Read more from source" button to that of the respective article.
When the user selects a source from the dropdown menu on the header, replace the content of the page with articles from the newly selected source. Display the loading pop up when the user first selects the new source, and hide it on success.
Add an error message (either alert or a notification on the page) if the app cannot load from the selected feed.

*/

// select the first three articles in the articles array and save them to global variables for each of the 3 articles

// Error message -> if returns a 404 then present an error message

	var title;
	var description;

	
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

//open popup and add contents of fake article1:
	$article.on('click', function(event) {
		if(event.type == 'click') {
			$popUp.removeClass('loader hidden');
			$('#popUp h1').append(title);

			// $.append
			// $.html
		};
	});

//close popup
	$closePopUp.on('click', function(event) {
		if(event.type == 'click') {
			$popUp.addClass('loader hidden');
		};
	});


//Reddit's API
  $.ajax({
  	url: 'https://www.reddit.com/top.json',
  	success: function(response) {
  		var articles = response.data.children;
  		title = response.data.children[0].data.title
  		var first_article = articles[0]
  		console.log(response.data.children[0].data.title);
  	}
  });	




};

