window.onload = function() {

	//hide webpage onload

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

//First Article Global Variables//
	var title;
	var url;
	var articlesArray; //array of all of the reddit articles

//Variables for jQuery Elements://
	var $main = $('#main');
	var $article = $('.article');
	var $featuredImage = $('.featuredImage');
	var $popUp = $('#popUp');
	var $closePopUp = $('.closePopUp');

//Open popup and add contents of First Article://
	$article.on('click', function(event) {
		if(event.type == 'click') {
			event.preventDefault();
			$popUp.removeClass('loader hidden');
			$('#popUp h1').html(title1);
			$('#popUp p').html(title1);
			$('.popUpAction').click(function(event){
				event.preventDefault();
				window.location.href = url;
				});

			// $.append
			// $.html
			// create a for loop and append the 'title' etc. to 'this' article in the list
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
  		articlesArray = response.data.children;

  	}
  });	

  	setTimeout(function() {
		//set article headers on load
		$.each($('.articleContent h3'), function(i) {
			// console.log(articlesArray[i].data.title);		
			$(this).html(articlesArray[i].data.title);
			return (this);
		});

		
		
	}, 1000);



        // <section id="main" class="container">
          // <article class="article">
          //   <section class="featuredImage">
          //     <img src="images/article_placeholder_1.jpg" alt="" />
          //   </section>
          //   <section class="articleContent">
          //       <a href="#"><h3>Test article title</h3></a>
          //       <h6>Lifestyle</h6>
          //   </section>
          //   <section class="impressions">
          //     526
          //   </section>
          //   <div class="clearfix"></div>
          // </article>

};
