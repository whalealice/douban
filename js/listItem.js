$(function(){
	//跳转过来的数据
	var sVal = window.location.search.split('=')[1];
	var unCode = decodeURI(decodeURI(sVal));  
	var aTag = $('<li><a href="">'+unCode+'</a></li>');
	$('.search_tags ul').append(aTag);
	$('.search_inp').val(unCode);

	var aLi = '';
	$.getJSON('http://api.douban.com/v2/movie/search?q='+unCode+'&start=0&count=3&callback=?', function(data) {
		var item = data.subjects;
		for (var i = 0; i < item.length; i++) {
			aLi += '<li class="search_results_item"><a href="subject.html?subject='+item[i].id+'"><img src="'+item[i].images.large+'"><div class="subject-info"><span class="subject-title">'+item[i].title+'</span><div class="rating" data-rating="'+item[i].rating.stars+'"><ul class="rating_stars" ><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li></ul><span>'+item[i].rating.average+'</span></div></div></a></li>';
		};
		$('.search_results_subjects').append(aLi);
		$('.rating').each(function(i,elem){
			var num = $(this).data("rating"); //存储的data-rating
			numStart($(this),num);
		});
		
	});
	function numStart(obj,num){
		if (num==00) {
			obj.html('暂无评分')
		}
		if (num>=10) {
			obj.find('li').first().addClass('yellow-star');
		};
		if (num>=20) {
			obj.find('li').eq(0).addClass('yellow-star');
			obj.find('li').eq(1).addClass('yellow-star');
		};
		if (num>=30) {
			obj.find('li').eq(0).addClass('yellow-star');
			obj.find('li').eq(1).addClass('yellow-star');
			obj.find('li').eq(2).addClass('yellow-star');
		};
		if (num>=40) {
			obj.find('li').eq(0).addClass('yellow-star');
			obj.find('li').eq(1).addClass('yellow-star');
			obj.find('li').eq(2).addClass('yellow-star');
			obj.find('li').eq(3).addClass('yellow-star');
		};
	};
});