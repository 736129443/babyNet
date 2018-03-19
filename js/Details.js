//加载模块

//总结
/**
 * 模块查找路径
 * 1.如果有 baseURL 参数:baseURL + paths模块路径；
 * 2：如果没有 baseURL 参数，主入口js 文件所在路径 + paths模块 路径
 * 3；如果指定的模块名是绝对路径，或者带有.js扩展名，则不会才用上两条；  
 */
require.config({
    baseURL:'./js',
    paths:{//配置模块的路径
        'jquery':'jquery'
    }
});
require(['jquery'],function($){
    //页面加载完毕后执行
    $(function(){
        style('.view-7','.wx1');
        $('.view-7').on({
            mouseover:function(){
                $(this).css({
                    'border':'1px solid #CECCCF',
                    'background': '#fff'
                })
            },
            mouseout:function(){
                $(this).css({
                    'border':'1px solid #f4f4f4',
                    'background': '#f4f4f4'
                })
            }
        });

        style('.view-5','.kf');
        $('.view-5').on({
            mouseover:function(){
                $(this).css({
                    'background':'#fff',
                    'border': '1px solid #CECCCF'
                })
            },
            mouseout:function(){
                $(this).css({
                    'border': '1px solid #f4f4f4',
                    'border-bottom':'1px solid #e8e8e8',
                    'background':'#f4f4f4'           
                })
            }
        });

        style('.Shopping','.ShoppingCar'); 

        $('.input-x').on({
            click:function(){
                $('.list').css({
                    'display':'block',
                })
            },
            blur:function(){
                $('.list').css({
                    'display':'none',
                })
            }
        });

        style('.classification','.clearfix');
        style('.lis','.sub-list');
		
		//右边内容绝对定位选项卡效果
		$('.m-brand-tad li').bind('mouseover',function(){
			let iIndex = $(this).index();
			// console.log(iIndex)
			$('.m-brand-tad li').removeClass('a').eq(iIndex).addClass('a');
			$('.m-brand-list').css('display', 'none').eq(iIndex).css({display: 'block'});
		})
		//右边内容绝对定位选项卡效果 (热卖排行)
		$('.m-hotsort-con-ul li').bind('mouseover',function(){
			let iIndex = $(this).index();
			$('.m-hotsort-con-ul li').removeClass('a').eq(iIndex).addClass('a');
			$('.m-01020').css('display', 'none').eq(iIndex).css({display: 'block'});
		})
		//返回顶部的效果
		homeStyle('.Customer-service','.sp1','#ifont');
		homeStyle('.top','.sp2','#ifont2');
		home('.iphone','#sp3','.iphone-side');
		home('.car','#sp4','.cart');
		//点击 返回顶部事件
		$('.top').click(function(){
			var iSpeed = 1000;
			$('body,html').animate({'scrollTop': 0}, iSpeed) 
		});
		//吸顶效果
		$(window).scroll(function(){
			if($(document).scrollTop() >= 126){
				// console.log(sc.scrollTop());
				$('.sub-fixed-top').css('display','block');
			}else{
				$('.sub-fixed-top').css('display','none');
			}
		});
		
		style('.view','.list-top');
		
       
        showTime();
        
    });
});
//v : 鼠标进入的事件对象  
//k : 触发事件后的对象

function style(v,k){
    $(v).on({
        mouseover:function(){
            $(k).css('display','block');
        },
        mouseout:function(){ 
            $(k).css('display','none')
        }
    })
}

//回到顶部 
function homeStyle(v,k,n,s){
	$(v).on({
		mouseover:function(){
			$(this).css({
				'background':'#ff4965'
			})
			$(k).css({
				'display':'block'
			})
			$(n).css({
				'display':'none'
			})
			
			
		},
		mouseout:function(){
			$(this).css({
				'background': '#fff'
			})
			$(k).css({
				'display':'none'
			})
			$(n).css({
				'display':'block'
			})
			$(s).css({
				'display':'none'
			})
		}
	});
}
function home(v,k,s){
	$(v).on({
		mouseover:function(){
			$(this).css('background','#ff4965'),
			$(k).css('color','#fff'),
			$(s).css('display','block')
		},
		mouseout:function(){
			$(this).css('background','#fff'),
			$(k).css('color','#ff4965'),
			$(s).css('display','none')
		}
	})
}
//倒计时
function showTime(){ 
    var time_start = new Date().getTime(); //设定当前时间
    // console.log(time_start)
	var time_end =  new Date("2018/03/24 09:00:00").getTime(); //设定目标时间
	// 计算时间差 
	var time_distance = time_end - time_start; 
	// 天
	var int_day = Math.floor(time_distance/86400000) 
	time_distance -= int_day * 86400000; 
	// 时
	var int_hour = Math.floor(time_distance/3600000) 
	time_distance -= int_hour * 3600000; 
	// 分
	var int_minute = Math.floor(time_distance/60000) 
	time_distance -= int_minute * 60000; 
	// 秒 
	var int_second = Math.floor(time_distance/1000) 
	// 时分秒为单数时、前面加零 
	if(int_day < 10){ 
		int_day = "0" + int_day; 
	} 
	if(int_hour < 10){ 
		int_hour = "0" + int_hour; 
	} 
	if(int_minute < 10){ 
		int_minute = "0" + int_minute; 
	} 
	if(int_second < 10){
		int_second = "0" + int_second; 
	} 
    // 显示时间 
    // console.log(int_day)
    // console.log(int_hour)
    // console.log(int_minute)
    
    $("#time_d").html(int_day); 
	$("#time_h").html(int_hour); 
	$("#time_m").html(int_minute);   
	$("#time_s").html(int_second); 
	// 设置定时器
    setTimeout("showTime()",1000);
}