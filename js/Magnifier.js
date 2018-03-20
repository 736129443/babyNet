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
		// //吸顶效果
		// $(window).scroll(function(){
		// 	if($(document).scrollTop() >= 126){
		// 		// console.log(sc.scrollTop());
		// 		$('.sub-fixed-top').css('display','block');
		// 	}else{
		// 		$('.sub-fixed-top').css('display','none');
		// 	}
		// });
		
		style('.view','.list-top');
		
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