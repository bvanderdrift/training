Template.lesson.onRendered(function(){
	var pfs = $(".lesson-teacher-pf");

	pfs.each(function(){
		$(this).height($(this).width());
	});

	$(".collapsable-info").hide();

	$(".lesson-div").click(function(){
		var cInfo = $(this).find(".collapsable-info");
		
		if(cInfo.is(':hidden')){
			cInfo.show();
		}else{
			cInfo.hide();
		}
	});
});