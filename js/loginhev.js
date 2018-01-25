  function $(id){
  	return document.getElementById(id)
  }
  var verifyCode = new GVerify("security-img");
   $("loginBtn").onclick = function(){
            var res = verifyCode.validate(document.getElementById("code_input").value);
            if(res){
                alert("验证正确");
            }else{
                alert("验证码错误");
            }
        }