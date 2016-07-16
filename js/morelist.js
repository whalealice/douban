$(function(){
	//搜索提交转码
	function go(){
        var val = $('#searchValue').val();
        var code = encodeURI(encodeURI(val));
        $('#form').attr('action','listItem.html?search='+code+'');
        return true;
    }
	var idVal = window.location.search.split('=')[1];
	$.getJSON('http://api.douban.com/v2/movie/'+idVal+'?start=0&count=12&callback=?',function(data){
		var list = data.subjects;
		for (var i = 0; i < list.length; i++) {
			var aItem = $('<a href="subject.html?subject='+list[i].id+'" class="item"><img src="'+list[i].images.large+'"><p>'+list[i].title+'</p><div class="item_rating" data-rating="'+list[i].rating.stars+'"><ul class="rating_stars"><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li></ul><span>'+list[i].rating.average+'</span></div></a>');
			$('.list').append(aItem);
		};
		$('.list .item_rating').each(function(i,elem){
			var nums = $(this).data("rating");
			numStart($(this),nums);
		});
		
	});
	function numStart(obj,num){
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
	// var data,
	// myScroll,
	// pullDownEl, pullDownOffset,
	// pullUpEl, pullUpOffset,
	// generatedCount = 0;

	// function pullDownAction () {
		
	// 	// $.getJSON('/uploads/rs/200/ptvnx6ur/test.json', function (data, state) {
	// 	// 	if (data && data.state == 1 && state == 'success') {
	// 	// 		//本地测试，为了看到加载中效果故加上定时器
	// 	// 		setTimeout(function () {
	// 	// 			$('#news-lists').before(data.data);
	// 	// 			myScroll.refresh();
	// 	// 		}, 600);
	// 	// 	}
	// 	// });
	// }

	// function pullUpAction () {
	// 	var idVal = window.location.search.split('=')[1];
	// 	$.getJSON('http://api.douban.com/v2/movie/'+idVal+'?start=12&count=20&callback=?',function(data){
	// 		var list = data.subjects;
	// 		for (var i = 0; i < list.length; i++) {
	// 			var aItem = $('<a href="subject.html?subject='+list[i].id+'" class="item"><img src="'+list[i].images.large+'"><p>'+list[i].title+'</p><div class="item_rating" data-rating="'+list[i].rating.stars+'"><ul class="rating_stars"><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li><li class="rating-star"></li></ul><span>'+list[i].rating.average+'</span></div></a>');
	// 			$('.list').append(aItem);
	// 		};
	// 		$('.list .item_rating').each(function(i,elem){
	// 			var nums = $(this).data("rating");
	// 			numStart($(this),nums);
	// 		});
	// 	})
	// 	// $.getJSON('/uploads/rs/200/ptvnx6ur/test.json', function (data, state) {
	// 	// 	if (data && data.state == 1 && state == 'success') {
	// 	// 		//本地测试，为了看到加载中效果故加上定时器
	// 	// 		setTimeout(function () {
	// 	// 			$('#news-lists').append(data.data);
	// 	// 			myScroll.refresh();
	// 	// 		}, 600);
	// 	// 	}
	// 	// });
	// }

	// //初始化绑定iScroll控件 
	// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	// document.addEventListener('DOMContentLoaded', loaded, false);

	// var myscroll;
	// function loaded(){
	// 	pullDownEl = document.getElementById('pullDown');
	// 	pullDownOffset = pullDownEl.offsetHeight;
	// 	pullUpEl = document.getElementById('pullUp');	
	// 	pullUpOffset = pullUpEl.offsetHeight;
		

	// 	myscroll=new iScroll("wrapper",{
	// 		vScrollbar : false,
	// 		topOffset : pullDownOffset,
	// 		onRefresh : function(){
	// 			if (pullDownEl.className.match('loading')) {
	// 				pullDownEl.className = '';
	// 				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
	// 			} else if (pullUpEl.className.match('loading')) {
	// 				pullUpEl.className = '';
	// 				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
	// 			}
	// 		},
	// 		onScrollMove: function () {
	// 			if (this.y > 5 && !pullDownEl.className.match('flip')) {
	// 				pullDownEl.className = 'flip';
	// 				pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
	// 				this.minScrollY = pullUpOffset;
	// 			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
	// 				pullUpEl.className = 'flip';
	// 				pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
	// 			}
	// 		},
	// 		onScrollEnd:function(){
	// 			if (pullDownEl.className.match('flip')) {
	// 				pullDownEl.className = 'loading';
	// 				pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';				
	// 				pullDownAction();
	// 			} else if (pullUpEl.className.match('flip')) {
	// 				pullUpEl.className = 'loading';
	// 				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';				
	// 				pullUpAction();
	// 			}
	// 		}
	// 	});
	// }
	// window.addEventListener("load",loaded,false);

});