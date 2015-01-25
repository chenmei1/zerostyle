/**
* Created with JetBrains WebStorm.
* User: P.S.
* Date: 14-3-5
* Time: 下午4:49
* To change this template use File | Settings | File Templates.
*/
/*$(function() {

    //首页教材专区、格子铺图片延迟加载
   $(".i_pic_list>li").each(function(){
       $(this).wraplazyload($(this).html())  ;
       $(".i_pic_list").datalazyload({dataItem:"img",loadType:"image",effect: "fadeIn",effectTime: 1000});
   });

    window.onload = function(){
        var ad_btn   = $("#ad_btn");
        var ads      = $("#ads");
        var main_nav = $("#main_nav");
        var ad_close = $("#ad_close");
        if(navigator.cookieEnabled){
            if(document.cookie.length > 0){
                var adsCookie = document.cookie.indexOf("showAds" + "=");
                if(adsCookie == -1){
                    var overdue = 1;
                    var exdate = new Date();
                    exdate.setHours(exdate.getHours() + overdue);
                    document.cookie = "showAds" + "=" + escape("existed") + ";expires="+exdate.toGMTString();
                    main_nav.animate({top:"+=400px"},'slow');
                    ads.animate({height:'400px'},'slow');
                    
                }

            }else{
                var exdate = new Date();
                var overdue = 1;
                exdate.setHours(exdate.getHours() + overdue);
                document.cookie = "showAds" + "=" + escape("existed") + ";expires="+exdate.toGMTString();
                main_nav.animate({top:"+=400px"},'slow');
                ads.animate({height:'400px'},'slow');
            }
            
        }else{
            console.log("浏览器不支持cookie");
        }
        
        if(navigator.cookieEnabled){
            if(document.cookie.length > 0){
                var adsCookie = document.cookie.indexOf("showAds" + "=");
                if(adsCookie == -1){
                    var overdue = 1;
                    var exdate = new Date();
                    exdate.setHours(exdate.getHours() + overdue);
                    document.cookie = "showAds" + "=" + escape("existed") + ";expires="+exdate.toGMTString();
                    main_nav.animate({top:"+=400px"},'slow');
                    ads.animate({height:'400px'},'slow');
                    
                }

            }else{
                var exdate = new Date();
                var overdue = 1;
                exdate.setHours(exdate.getHours() + overdue);
                document.cookie = "showAds" + "=" + escape("existed") + ";expires="+exdate.toGMTString();
                main_nav.animate({top:"+=400px"},'slow');
                ads.animate({height:'400px'},'slow');
            }
            
        }else{
            console.log("浏览器不支持cookie");
        }

        ad_btn.click(function(){
            if(ads.css("height") == '400px'){
                main_nav.animate({top:"-=400px"},'slow');
                ads.animate({height:'0px'},'slow');
            }else{
                main_nav.animate({top:"+=400px"},'slow');
                ads.animate({height:'400px'},'slow');
            }
        });
        ad_close.click(function(){
            main_nav.animate({top:"-=400px"},'slow');
            ads.animate({height:'0px'},'slow');
        });
        new AdsSwich("ads");
    };

  var list = $(".list");
   var part_num = list.length;
   var each_num = [];
   for(var i=0;i<part_num;i++){
       if(i == 0){
           each_num[i] = list.eq(i).children().length;
       }else {
           each_num[i] = list.eq(i).children().length + list.eq(i-1).children().length;
       }

   }

   list.each(function(){
       $(this).wraplazyload($(this).html());
   });


   list.eq(0).datalazyload({dataItem: '.issue_fall',loadType: 'item',effect: 'fadeIn',effectTime: 1000});

   var index=0;
   //隐藏分页按钮
   $("#pagination").hide();
   if (window.addEventListener) {

       index=0;
       window.addEventListener("scroll", function() {
           var nums = $(".issue_fall:visible").length;
           var scroll_top = document.body.scrollTop || document.documentElement.scrollTop;
           var mul_height = document.body.scrollHeight - scroll_top - window.innerHeight;

           if ((mul_height <= 200) && (nums == each_num[index]) && (index<part_num-1)) {

               $("#pagination").hide();
               $("#loading").show();

               setTimeout(function(){
                   $("#loading").hide();
                   list.eq(index).datalazyload({dataItem: '.issue_fall',loadType: 'item',effect: 'fadeIn',effectTime: 1000});
                   $("#pagination").show();
               },2000);

               ++index;
           }

       }, false)
   } else if(window.attachEvent){
       window.attachEvent("onscroll", function() {

           var nums = $(".issue_fall:visible").length;
           var scroll_top = document.documentElement.scrollTop;
           var mul_height = document.body.scrollHeight - scroll_top - window.document.body.parentElement.clientHeight + 30;



           if ((mul_height <= 200) && (nums == each_num[index]) && (index<part_num-1)) {

               $("#pagination").hide();
               $("#loading").show();
               setTimeout(function(){
                   $("#loading").hide();
                   list.eq(index).datalazyload({dataItem: '.issue_fall',loadType: 'item',effect: 'fadeIn',effectTime: 1000});
                   $("#pagination").show();
               },2000);

               ++index;
           }
       });
   }
});*/
$(function() {
  var list = $(".list");
    var part_num = list.length;
    var each_num = [];
    for(var i=0;i<part_num;i++){
        if(i == 0){
            each_num[i] = list.eq(i).children().length;
        }else {
            each_num[i] = list.eq(i).children().length + list.eq(i-1).children().length;
        }

    }

    list.each(function(){
        $(this).wraplazyload($(this).html());
    });


    list.eq(0).datalazyload({dataItem: '.column',loadType: 'item',effect: 'fadeIn',effectTime: 1000});
});