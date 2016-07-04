$(function(){
	//点击出现搜索
	$('#Search').on("click",function(){
		if ($('.HeaderNav').hasClass('isActive')) {
			$('.HeaderNav').removeClass('isActive');
			$('.TalioSeach').hide();
			$('.TalioLayer').hide();
		}else{
			$('.HeaderNav').addClass('isActive');
			$('.TalioSeach').show();
			$('.TalioLayer').show();
		};
	})
});