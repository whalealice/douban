$(function(){
	
	//判断点击的是哪一个选项的更多
	$('#move_show a').attr({
		'href': 'morelist.html?search=in_theaters'
	});
	//院线热映的数据
	// $.getJSON('http://api.douban.com/v2/movie/in_theaters?start=0&count=8&callback=?', function(data) {
	// 	var itemArr = data.subjects;	
	// 	for (var i = 0; i < itemArr.length; i++) {
	// 		var aLi = $('<li class="item item_movie"><a href="subject.html?subject='+itemArr[i].id+'"><img src="'+itemArr[i].images.large+'"><p>'+itemArr[i].title+'</p><div class="item_rating" data-rating="'+itemArr[i].rating.stars+'"><ul class="rating_stars"><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li></ul><span>'+itemArr[i].rating.average+'</span></div></a></li>');
	// 		$('#move_show .items').append(aLi);
	// 	};
	// 	$('#move_show .item_rating').each(function(i,elem){
	// 		var num = $(this).data("rating");
	// 		numStart($(this),num);
	// 	});
	// });
	// //即将上映的数据
	// $.getJSON('http://api.douban.com/v2/movie/coming_soon?start=0&count=8&callback=?', function(data) {
	// 	var itemArr = data.subjects;
	// 	for (var i = 0; i < itemArr.length; i++) {
	// 		var aLi = $('<li class="item item_movie"><a href="subject.html?subject='+itemArr[i].id+'"><img src="'+itemArr[i].images.large+'"><p>'+itemArr[i].title+'</p><div class="item_rating" data-rating="'+itemArr[i].rating.stars+'"><ul class="rating_stars"><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li></ul><span>'+itemArr[i].rating.average+'</span></div></a></li>');
	// 		$('#move_soon .items').append(aLi);	
	// 	};
	// });
	// //新片的数据
	// $.getJSON('http://api.douban.com/v2/movie/us_box?callback=?', function(data) {
	// 	var itemArr = data.subjects;
	// 	for (var i = 0; i < itemArr.length; i++) {
	// 		var aLi = $('<li class="item item_movie"><a href="subject.html?subject='+itemArr[i].subject.id+'"><img src="'+itemArr[i].subject.images.large+'"><p>'+itemArr[i].subject.title+'</p><div class="item_rating" data-rating="'+itemArr[i].subject.rating.stars+'"><ul class="rating_stars"><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li></ul><span>'+itemArr[i].subject.rating.average+'</span></div></a></li>');
	// 		$('#new_move .items').append(aLi);
	// 	};
	// 	$('#new_move .item_rating').each(function(i,elem){
	// 		var num = $(this).data("rating");
	// 		numStart($(this),num);
	// 	});
	// });
	// function numStart(obj,num){
	// 	if (num==00) {
	// 		obj.html('暂无评分')
	// 	}
	// 	if (num>=10) {
	// 		obj.find('li').first().addClass('yellow-star');
	// 	};
	// 	if (num>=20) {
	// 		obj.find('li').eq(0).addClass('yellow-star');
	// 		obj.find('li').eq(1).addClass('yellow-star');
	// 	};
	// 	if (num>=30) {
	// 		obj.find('li').eq(0).addClass('yellow-star');
	// 		obj.find('li').eq(1).addClass('yellow-star');
	// 		obj.find('li').eq(2).addClass('yellow-star');
	// 	};
	// 	if (num>=40) {
	// 		obj.find('li').eq(0).addClass('yellow-star');
	// 		obj.find('li').eq(1).addClass('yellow-star');
	// 		obj.find('li').eq(2).addClass('yellow-star');
	// 		obj.find('li').eq(3).addClass('yellow-star');
	// 	};
	// };
	
});