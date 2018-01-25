	function $(id){
		return document.getElementById(id)
	}
$("username").onblur = function(){
		//1、定义规则：
		//手机号码的规则，1开头，第二位是（3,4,5,7,8,9），一共十一位纯数字
		var regObj = /^1[345789]\d{9}$/i;
		if(regObj.test(this.value)){
			$("color-red").innerHTML = "";
			$("username").style.borderColor ='#C7B9B9';
			$("security-mart10").style.display  = 'block';
			$("security-img").style.display  = 'block';
			
		}else{
			$("color-red").innerHTML = "请输入正确的手机号";
			$("username").style.borderColor ='red';
			$("security-mart10").style.display  = 'none';
			$("security-img").style.display  = 'none';
			 $("errmsg").style.display = 'none';
		}
	}
