$(function(){
	//跳转过来的数据
	var sVal = window.location.search.split('=')[1];
	var unCode = decodeURI(decodeURI(sVal));  
	var aTag = $('<li><a href="">'+unCode+'</a></li>');
	$('.search_tags ul').append(aTag);
	$('.search_inp').val(unCode);

	$.getJSON('http://api.douban.com/v2/movie/search?q='+unCode+'&start=0&count=3&callback=?', function(data) {
		// console.log(data.subjects);
		var item = data.subjects;
		for (var i = 0; i < item.length; i++) {
			var aLi = $('<li class="search_results_item"><a href="'+item[i].alt+'"><img src="'+item[i].images.large+'"><div class="subject-info"><span class="subject-title">'+item[i].title+'</span><div class="rating"><ul class="rating_stars" data-rating="'+item[i].rating.stars+'"><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li></ul><span>'+item[i].rating.average+'</span></div></div></a></li>');
			$('.search_results_subjects').append(aLi);
		};

		$('.rating_stars').each(function(i,elem){
			var num = $(this).data("rating"); //存储的data-rating
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
		});
		
	});
});