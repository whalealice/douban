$(function(){
	var idVal = window.location.search.split('=')[1];
	$.getJSON('http://api.douban.com/v2/movie/subject/'+idVal+'?a=1&callback=?',function(data){
		// console.log(data)
		$('h1').text(data.title+data.original_title); //题目
		$('.num').text(data.rating.average); //分数
		$('.comment').text(data.ratings_count+'评分'); //评分
		//评分的星星
		var num = data.rating.stars;
		$('.rating_stars').each(function(i,elem){
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
		//海报
		var $photoImg = $('<a href=""><img src="'+data.images.large+'"></a>');
		$('.right').append($photoImg);
		//电影信息
		var directors = data.directors[0].name; //影片导演
		var casts = ''; //影片演员
		var genres = ''; //影片类型
		$.each(data.genres, function(){ 
			genres+= this+' / '; 
		}); 
		$.each(data.casts, function(i,elem){ 
			if (i<3) {
				casts+= elem.name+' / '; 
			};
		});
		$('.describe').text(genres+directors+'(导演) / '+casts);
		//剧情简介
		$('.title').text(data.title);//电影名称
		$('.intro p').text(data.summary.substr(0,75)+'...');
		//点击展开
		$('.more').on("click",function(){
			$('.more').hide();
			$('.intro p').text(data.summary);
		})
		//豆瓣常用标签
		var county = $('<li><a href="">'+data.countries[0]+'</a></li><li><a href="">'+data.genres[0]+'</a></li><li><a href="">'+data.year+'</a></li><li><a href="">'+data.genres[2]+'</a></li><li><a href="">'+data.genres[1]+'</a></li>');
		$('.subject_tag ul').append(county);
	});
});