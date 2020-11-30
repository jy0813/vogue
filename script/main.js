$(function(){
//    alert('본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작 되었습니다. 일부 내용 및 이미지 등은 출저가 따로 있음을 밝힙니다.');
    
    //영상크기 변수
    
    var wHeight = $(window).height();
    var bgmHeight = $('.bgMovie').height();
    
    //윈도우 가로크기 변수
    
    var wSize = $(window).width();
    //패럴렉스 효과
    
   
    //브라우저의 높이가 영상의 높이가 작으면
    if(wHeight < bgmHeight){
        //영상의 높이는 == 윈도우창의 높이와 같다
        $('.bgMovie').height(wHeight+'px');
    }
    
    $(window).resize(function(){
        
        if($(window).height() < $('.bgMovie').height()){
            $('.bgMovie').height($(window).height()+'px');
        }else{
            $('.bgMovie').height('902');
        }
    });
    
    if(wSize>=1024){
    jQuery('.parallax-layer').parallax({
        mouseport:jQuery("#port"),
        xparallax:0.1, //x값의 패럴렉스
        yparallax:0, //y값의 패럴렉스
        xorigin:0.5, //기준치
    });
        }

    
    var popup = '<div class="popup"><p class="m_txt">본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 제작 되었습니다. 일부 내용 및 이미지 등은 출저가 따로 있음을 밝힙니다.</p><span><i class="fas fa-times"</span></div>';
    
    //팝업띄우기
    $('body').append(popup);
    
    var popup = $('.popup i.fas');
    
    popup.click(function(){
//        $('.popup').animate({top:'280px'},500).animate({top:'-580px'},300);
//        $('.popup i.fas').css({'transform':'rotate('+45+'deg)'});
        $('.popup').slideToggle();
    });
    
});