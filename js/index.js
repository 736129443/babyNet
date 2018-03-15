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
            
        })
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