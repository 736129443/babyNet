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

        style('.classification','.clearfix')
        style('.lis','.sub-list')
        
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

//轮播图

function $(id){
	return document.getElementById(id)
}
// window.onload = function(){
 	var obox = $('box'),
 	    aul = $('oul'),
 	    ali = aul.children;
 	    obtn = $('btn'),
 	    leftBtn = $('left-btn'),
 	    rightBtn = $('right-btn');
 	    obean = $('bean'),
 	    obeanUl = $('bean-ul'),
 	    obeanLi = Array.from(obeanUl.children);
 	    // console.log(obeanLi)


 	var index = 0;
 	var obeanLiIndex = 0;
 	var timer = null;
 	var iperw = 1400;

 		//复制一个li的内容放到ul中
 		 aul.innerHTML += ali[0].innerHTML;
 		 // console.log((aul.children))
 		//设置box的宽度
 		aul.style.width = ali.length * iperw + 'px';

 		obox.onmouseover = function(){
 			clearInterval(timer)
 			obtn.style.display = 'block';
 		}
 		obox.onmouseout = function(){
 			outmove();
 			obtn.style.display = 'none';
 		}

 	   	rightBtn.onclick = function(){
 	   	    rightmove();
 	   	};
 	   	leftBtn.onclick = function(){
 	   		index--;
 	   		obeanLiIndex--;
 	   		if(index < 0){
 	   			index = ali.length - 2;
 	          aul.style.left = -(ali.length - 1) * iperw + 'px';
 	   		}
 	   		bufferMove(aul,{left:-index * iperw});
 	   		setclassname();
 	   	};
 	   	function rightmove(){
 	   		index++;
 	   		obeanLiIndex++;
 	   		if(index >= ali.length){
 	   			index = 1;
 	          aul.style.left = '0px';
 	   		}
 	   		bufferMove(aul,{left:-index * iperw});
 	   		setclassname();
 	   	}
		//自动运行
 	   	outmove();
 	   	function outmove(){
 	   		timer = setInterval(function(){
 	   			rightmove();
 	   		},3000);
 	   	}


 	   	obeanLi.forEach((v,k) => {
			v.onclick = function(){
				index = k
				obeanLiIndex = k;
				bufferMove(aul,{left:- index * iperw})
				setclassname();
			}
		})

 	   	function setclassname(){
 	   		if( obeanLiIndex >= obeanLi.length){
 	   			obeanLiIndex = 0
 	   		}
 	   		if(obeanLiIndex < 0){
 	   			obeanLiIndex = obeanLi.length -1;
 	   		}
	   		obeanLi.forEach((v) => v.className = '');					
	
			obeanLi[obeanLiIndex].className = 'a';
 	   	}
 	   
// };