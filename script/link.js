$(function(){
//내비게이션 클릭시 해당하는 문서 연계하여 불러오기
	
	function pageLink(aLink){

	$('section').load(aLink);	
}
	
$('.gnb_main li:eq(0)>a').click(function(){

	pageLink("./sub/profile.html");
});

$('.gnb_main li:eq(1)>a').click(function(){

	pageLink("./sub/news.html");
});

$('.gnb_main li:eq(2)>a').click(function(){

	pageLink("./sub/gallery.html");
});

$('.gnb_main li:eq(3)>a').click(function(){
	pageLink("./sub/discography.html");
});

$('.gnb_main li:eq(4)>a').click(function(){
	pageLink("./sub/producing.html");
});

$('.gnb_main li:eq(5)>a').click(function(){
	pageLink("./sub/schedule.html");
});


//메인 메뉴에 각 메뉴 클릭시 해당페이지 나오도록 하기
$('.toggleMenu > nav li:eq(0) > a').click(function(){
	
	barAniClose();
	
	pageLink("./sub/profile.html");
});

$('.toggleMenu > nav li:eq(1) > a').click(function(){
	barAniClose();
	pageLink("./sub/news.html");
});

$('.toggleMenu > nav li:eq(2) > a').click(function(){
	barAniClose();
	pageLink("./sub/gallery.html");
});

$('.toggleMenu > nav li:eq(3) > a').click(function(){
	barAniClose();
	pageLink("./sub/discography.html");
});

$('.toggleMenu > nav li:eq(4) > a').click(function(){
	barAniClose();
	pageLink("./sub/producing.html");
});

$('.toggleMenu > nav li:eq(5) > a').click(function(){
	barAniClose();
	pageLink("./sub/schedule.html");
});

function barAniClose(){
		$('.toggle > .bar').removeClass('hover');
		$('.toggle').children('.bar:last-child').css({
			'width':'0px',
			'top':"64px"
		}).animate({width:'20px'});
		
		$('.toggle').children('.bar:eq(0)').removeClass('closeToggle_L');
		$('.toggle').children('.bar:eq(1)').removeClass('closeToggle_R');
		
		//전체메뉴 올라가게하기
		$('.toggleMenu').animate({'top':'-100%'},500);
	}
	

	
});
