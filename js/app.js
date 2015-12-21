/*
  Please add all Javascript code to this file.

When the application first loads display the loading container (see below on instructions to toggle this). When you successfully retrieve information from the default API hide the loader and replace the content of the #main container with that of the API. The DOM structure of each article must adhere to the .article structure.

When the user selects an article's title show the #popUp overlay. The content of the article must be inserted in the .container class inside #popUp. Make sure you remove the .loader class when toggling the article information in the pop-up.
Change the link of the "Read more from source" button to that of the respective article.
When the user selects a source from the dropdown menu on the header, replace the content of the page with articles from the newly selected source. Display the loading pop up when the user first selects the new source, and hide it on success.
Add an error message (either alert or a notification on the page) if the app cannot load from the selected feed.

*/

/* To Do:
	1. add search icon feature
	2. add error message when JSON doesn't load
	3. fix bug when new data from reddit occasionally doesn't load

*/



//Global array that stores all of the reddit articles from the API call//
var articlesArray;

//Variables for jQuery Elements://
var $main = $('#main');
var $article = $('.article');
var $featuredImage = $('.featuredImage');
var $popUp = $('#popUp');
var $closePopUp = $('.closePopUp');


//Reddit's API
$.ajax({
	url: 'https://www.reddit.com/top.json',
	success: function(response) {
		articlesArray = response.data.children;

	}
});	

$(document).ready(function() {  

  	setTimeout(function() {
		//set article headers on load
		$.each($('.article'), function(i) {
			// console.log(articlesArray[i].data.title);	
			
			//variables that store 'this' of each thing needed
			var title = articlesArray[i].data.title;
			var url = articlesArray[i].data.url;
			var ups = articlesArray[i].data.ups;
			var topic = articlesArray[i].data.subreddit;
			var thumbnail = articlesArray[i].data.thumbnail;

			
			//populating the DOM with the data from the variables
			$(this).find('.articleContent h3').html(title);			
			$(this).find('.impressions').html(articlesArray[i].data.ups);			
			$(this).find('.articleContent h6').html(articlesArray[i].data.subreddit);
			
			//checks to see if there is a thumbnail.  If not returns yoda
			if (thumbnail !== "") {
				$(this).find('img').attr("src", articlesArray[i].data.thumbnail);
			} else {
				$(this).find('img').attr("src", "images/yoda.jpg");
			};
			
			//open popup and Display content
			$(this).on('click', function(event) {
				if(event.type == 'click') {
					event.preventDefault();
					$popUp.removeClass('loader hidden');
					$('#popUp').find('h1').html(title);
					$('#popUp').find('p').html(topic);
					$('.popUpAction').on('click', function(event) {
						if(event.type == 'click') {
							// console.log(url);
							$(this).attr("href", url);
						};
					});
				};
			});	

			return (this);


		});
	}, 400);

	//hide/ fade in webpage onload
	$('#main').fadeIn(1500);

	//close popup
	$closePopUp.on('click', function(event) {
		if(event.type == 'click') {
			event.preventDefault();		
			$popUp.addClass('loader hidden');

		};
	});

});
