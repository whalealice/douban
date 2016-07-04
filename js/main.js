$(function(){
	//院线热映的数据
	$.getJSON('http://api.douban.com/v2/movie/in_theaters?start=0&count=8&callback=?', function(data) {
		var itemArr = data.subjects;
		for (var i = 0; i < itemArr.length; i++) {
			var aLi = $('<li class="item item_movie"><a href=""><img src="'+itemArr[i].images.large+'"><p>'+itemArr[i].title+'</p><div class="item_rating" data-rating="'+itemArr[i].rating.stars+'"><ul class="rating_stars"><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li></ul><span>'+itemArr[i].rating.average+'</span></div></a></li>');
			$('#move_show .items').append(aLi);
			
		};
		$('#move_show .item_rating').each(function(i,elem){
			var num = $(this).data("rating");
			if (num>=10) {
				$(this).find('li:lt(1)').addClass('yellow-star');
			}
			if (num>=20) {
				$(this).find('li:lt(2)').addClass('yellow-star');
			}
			if (num>=30) {
				$(this).find('li:lt(3)').addClass('yellow-star');
			}
			if (num>=40) {
				$(this).find('li:lt(4)').addClass('yellow-star');
			}
		})
	});
	//即将上映的数据
	$.getJSON('http://api.douban.com/v2/movie/coming_soon?start=0&count=8&callback=?', function(data) {
		var itemArr = data.subjects;

		for (var i = 0; i < itemArr.length; i++) {
			var aLi = $('<li class="item item_movie"><a href=""><img src="'+itemArr[i].images.large+'"><p>'+itemArr[i].title+'</p><div class="item_rating" data-rating="'+itemArr[i].rating.stars+'"><ul class="rating_stars"><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li></ul><span>'+itemArr[i].rating.average+'</span></div></a></li>');
			$('#move_soon .items').append(aLi);
			
		};
		// $('#move_soon .item_rating').each(function(i,elem){
		// 	var num = $(this).data("rating");
		// 	if (num>=10) {
		// 		$(this).find('li:lt(1)').addClass('yellow-star');
		// 	}
		// 	if (num>=20) {
		// 		$(this).find('li:lt(2)').addClass('yellow-star');
		// 	}
		// 	if (num>=30) {
		// 		$(this).find('li:lt(3)').addClass('yellow-star');
		// 	}
		// 	if (num>=40) {
		// 		$(this).find('li:lt(4)').addClass('yellow-star');
		// 	}
		// })
	});
	//新片的数据
	$.getJSON('http://api.douban.com/v2/movie/us_box?callback=?', function(data) {
		
		var itemArr = data.subjects;

		for (var i = 0; i < itemArr.length; i++) {
			// console.log(itemArr[i].subject.rating)
			var aLi = $('<li class="item item_movie"><a href=""><img src="'+itemArr[i].subject.images.large+'"><p>'+itemArr[i].subject.title+'</p><div class="item_rating" data-rating="'+itemArr[i].subject.rating.stars+'"><ul class="rating_stars"><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li></ul><span>'+itemArr[i].subject.rating.average+'</span></div></a></li>');
			$('#new_move .items').append(aLi);
			
		};
		$('#new_move .item_rating').each(function(i,elem){
			var num = $(this).data("rating");
			if (num>=10) {
				$(this).find('li:lt(1)').addClass('yellow-star');
			}
			if (num>=20) {
				$(this).find('li:lt(2)').addClass('yellow-star');
			}
			if (num>=30) {
				$(this).find('li:lt(3)').addClass('yellow-star');
			}
			if (num>=40) {
				$(this).find('li:lt(4)').addClass('yellow-star');
			}
		})
	});
	
});