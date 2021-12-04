var timer=null;
function startMove(obj,json,fn){
	      clearInterval(timer);
	      timer =setInterval(function(){
	            var flag=true;           //假设全部为真
	            for(let attr in json){   //遍历对象
	            if(attr =="opacity"){
	            var cur1 =parseInt(getStyle(obj,"opacity")*100)
	            }else{
	            var cur1 =parseInt(getStyle(obj,attr));
	              }
	                
	                target1=json[attr];
	                speed= (target1-cur1)/6;  //减速运动
	                var speed=speed>0?Math.ceil(speed):Math.floor(speed);    //判断speed的正负值
	                if(attr == "opacity"){
				obj.style.opacity = (cur1+speed)/100;
				obj.style.filter = "alpha(opacity="+(cur1+speed)+")";
			}else{
	                obj.style[attr]=cur1+speed+"px"; 
	                }
	                //console.log(cur1)
	                if(target1!=cur1){   //判断若有一处未完成 ，flag为假
	                    flag=false;
	                }
	              }
	                if(flag){
	                clearInterval(timer); 
	                if(fn){
	                      fn();
	                        }
	                }
	                
	      },30)
	     
}
function getStyle(obj,attr){
 	if(obj.currentStyle){      //支持IE
 		return obj.currentStyle[attr]
 	}else{                   //不支持IE
 		return getComputedStyle(obj,null)[attr]
 	}
 }