$(function(){
	
	//搜索
	$('#form').bind("submit",function(){
		go();
	});
	function go(){
        var val = $('#searchValue').val();
        var code = encodeURI(encodeURI(val));
        $('#form').attr('action','listItem.html?search='+code+'');
        return true;
    }
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