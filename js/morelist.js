$(function(){
	var idVal = window.location.search.split('=')[1];
	$.getJSON('http://api.douban.com/v2/movie/'+idVal+'?start=0&count=9&callback=?',function(data){
		var list = data.subjects;
		for (var i = 0; i < list.length; i++) {
			var aItem = $('<a href="subject.html?subject='+list[i].id+'" class="item"><img src="'+list[i].images.large+'"><p>'+list[i].title+'</p><div class="item_rating" data-rating="'+list[i].rating.stars+'"><ul class="rating_stars"><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li></ul><span>'+list[i].rating.average+'</span></div></a>');
			$('.list').append(aItem);
		};
		$('.list .item_rating').each(function(i,elem){
			var num = $(this).data("rating");
			if (num>=10) {
				$(this).find('li').first().addClass('yellow-star');
			};
			if (num>=20) {
				$(this).find('li').eq(0).addClass('yellow-star');
				$(this).find('li').eq(1).addClass('yellow-star');
			};
			if (num>=30) {
				$(this).find('li').eq(0).addClass('yellow-star');
				$(this).find('li').eq(1).addClass('yellow-star');
				$(this).find('li').eq(2).addClass('yellow-star');
			};
			if (num>=40) {
				$(this).find('li').eq(0).addClass('yellow-star');
				$(this).find('li').eq(1).addClass('yellow-star');
				$(this).find('li').eq(2).addClass('yellow-star');
				$(this).find('li').eq(3).addClass('yellow-star');
			};
		});
		
	});
});