$(function(){
	//搜索提交转码
	$('#form').bind("submit",function(){
		go();
	});
	function go(){
        var val = $('#searchValue').val();
        var code = encodeURI(encodeURI(val));
        $('#form').attr('action','listItem.html?search='+code+'');
        return true;
    }
	var idVal = window.location.search.split('=')[1];
	$.getJSON('http://api.douban.com/v2/movie/'+idVal+'?start=0&count=9&callback=?',function(data){
		var list = data.subjects;
		var aItem = '';
		for (var i = 0; i < list.length; i++) {
			aItem += '<a href="subject.html?subject='+list[i].id+'" class="item">'+
						'<img src="'+list[i].images.large+'"><p>'+list[i].title+'</p>'+
						'<div class="item_rating" data-rating="'+list[i].rating.stars+'">'+
							'<ul class="rating_stars">'+
								'<li class="rating-star"></li>'+
								'<li class="rating-star"></li>'+
								'<li class="rating-star"></li>'+
								'<li class="rating-star"></li>'+
								'<li class="rating-star"></li>'+
							'</ul>'+
							'<span>'+list[i].rating.average+'</span>'+
						'</div>'+
					'</a>';
		};
		$('.list').append(aItem);
		
		$('.list .item_rating').each(function(i,elem){
			var nums = $(this).data("rating");
			numStart($(this),nums);
		});
		
	});
	var num = 1;
	loading = false;
	$(document.body).infinite().on("infinite", function() {
		if(loading) return;
		loading = true;
		$.getJSON('http://api.douban.com/v2/movie/'+idVal+'?start='+(num*9)+'&count='+(num*9+3)+'&callback=?',function(data){
			num++;
			if (num*9+3>data.total) {
				loading = true;
				$('.weui-infinite-scroll').hide();
				return ;
			}
			var list = data.subjects;
			var aItem = '';
			for (var i = 0; i < list.length; i++) {
				aItem += '<a href="subject.html?subject='+list[i].id+'" class="item">'+
							'<img src="'+list[i].images.large+'"><p>'+list[i].title+'</p>'+
							'<div class="item_rating" data-rating="'+list[i].rating.stars+'">'+
								'<ul class="rating_stars"><li class="rating-star">'+
									'</li><li class="rating-star"></li>'+
									'<li class="rating-star"></li>'+
									'<li class="rating-star"></li>'+
									'<li class="rating-star"></li>'+
								'</ul>'+
								'<span>'+list[i].rating.average+'</span>'+
							'</div>'+
						'</a>';
			};
			$('.list').append(aItem);
			$('.list .item_rating').each(function(i,elem){
				var nums = $(this).data("rating");
				numStart($(this),nums);
			});
			loading = false;
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