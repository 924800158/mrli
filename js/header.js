$(function(){
	var lowerFlag=false;
	var designNum=staticFile.getQueryString("design");
	var codes;if(designNum){
		codes=designNum.substr(0,9);
				}
	var iframeUrl=staticFile.getDescriptionHtml(curBrandName,codes);
	var detailsImgInfo={size:["/240400/","/360640/","/317324589F10/"],extensionName:[];
						};
	function mosaicImgUrl(value,index,exten){
		var nineCode=value.substr(0,9);
		return CDN_BASE+nineCode+"/"+value+detailsImgInfo.size[index]+value+exten;
		}

		$(".ifram_box").attr("src",iframeUrl);
		$("#iframeId").load(function(){
			var mainHeight=$(this).contents().find("html").height();
			$(this).height(mainHeight)
		});
		var curGoodsColor=localStorage.getItem("storageColor");
		if(curGoodsColor){
			localStorage.removeItem("storageColor");
		}

		var imgCarousel=new Object(
			{
				dul:$("#tab-item"),imgNum:0,count:0,imgSize:"",tabItemHeight:"",init:function(){
					this.imgNum=0;
					var $cloneImg=$("#tab-item").find("li:lt(3)").clone();
					this.dul.find("ul").append($cloneImg);
					this.dul.find("ul li").eq(0).addClass("active");
					this.dul.find("ul").stop().css({top:0};)
			},
			topMove:function(){
				this.imgNum++;
				if(this.imgNum===this.imgSize+1){
					this.dul.find("ul").css({top:0});
					this.imgNum=1}
				this.dul.find("ul").stop().animate({
					top:-this.imgNum*this.tabItemHeight;
				},500)},downMove:function(){this.imgNum--;
		if(this.imgNum===-1){
			this.dul.find("ul").css({top:-this.imgSize*this.tabItemHeight});
			this.imgNum=this.imgSize-1}this.dul.find("ul").stop().animate({top:-this.imgNum*this.tabItemHeight},500)},
	imgMove:function(e){
		
		var getDetail=new Object({
			detailImgUrl:API_CDN+"/detail/"+curBrandName+"/",
			designNum:designNum,codes:codes,iframeUrl:iframeUrl,
			sellStockDatas:{},
			middleStockObj:{},
			getDetailsellStock:function(data,skuCode){
				var _this=this;
				var sellStockSum=0;
				$.ajax({type:"get",url:globalURL.GETSTOCK,headers:globalURL.headers,data:data,success:function(res){_this.middleStockObj=res.data;var sizeLis=$("#sizeNum li");var sizeLiS=$("#sizeNum li span");var sizeSkuArr=[];for(var i=0;i<sizeLis.length;i++){sizeSkuArr.push($(sizeLis[i]).attr("data-value"))}var sizeArr=[];sizeSkuArr.forEach(function(liSku){sizeArr.push(res.data[liSku])});var singleColorSum=0;sizeArr.forEach(function(v){singleColorSum+=Number(v)});if(singleColorSum<=0){$("#de-sellStock").find("span").text(0)}else{$("#de-sellStock").find("span").text(singleColorSum)}for(var i=0;i<sizeLiS.length;i++){if(sizeArr[i]<=0){$(sizeLiS[i]).text("鏆傛椂鏃犲簱瀛�");$(sizeLiS[i]).parent().addClass("sizeActiveGrey")}else if(sizeArr[i]===1){$(sizeLiS[i]).text("鏈€鍚庝竴浠�")}else{$(sizeLiS[i]).text(sizeArr[i]+" 浠�")}}_this.sellStockDatas=res.data;for(var i in res.data){if([i][0]==skuCode){var aa=res.data[i];if(Number(aa)<=0){$("#de-sellStock span").text(0)}else{$("#de-sellStock span").text(aa)}}}}})},getDetailInfo:function(){var _this=this;$.ajax({type:"get",url:_this.detailImgUrl+codes+".json",dataType:"json",success:function(res){requestStatus(res);var $colors=$("#colors");var data={goodsCode:codes,type:0};_this.getDetailsellStock(data);$(".goods-name").text(res.data.goodsName);$("#goods-infos").text(res.data.goodsInfo);var bjNum=0;var liIndex=0;var colors=res.data.color;var picurls=res.data.color[liIndex].picurls;var sizes=res.data.color[liIndex].sizes;if(colors.length){var colorAliasli="";var curIndex=0;for(var i=0;i<colors.length;i++){if(colors[i].colorCode===curGoodsColor){curIndex=i}colorAliasli+="<li data-colorCode ="+colors[i].colorCode+" data-colorname="+colors[i].color+">"+colors[i].colorAlias+"</li>"}if(colorAliasli===""){globalErr("鎵€閫夊晢鍝佸凡涓嬫灦");var timer=setTimeout(function(){window.location.href="/"},2e3)}$colors.append(colorAliasli);$colors.find("li").eq(curIndex).addClass("color-active")}var ObtainGif=function(index){picurls=colors[index].picurls;var sizes=colors[index].sizes;$(".branCode").text(colors[index].colorCode);$(".prices").text(colors[index].price);$(".originalPrice").text(colors[index].originalPrice);if(picurls.length){var list="";for(var i=0;i<4;i++){detailsImgInfo.extensionName.push("_p"+(i+1)+".jpg");list+="<li>"+'<img src="'+mosaicImgUrl(colors[index].colorCode,0,detailsImgInfo.extensionName[i])+'" class="tab-item-img" data-code="'+colors[index].colorCode+'" data-index="'+i+'"/>'+"</li>"}var tabItemList=$("#tab-item ul");tabItemList.html(list);imgCarousel.tabItemHeight=tabItemList.find("li").outerHeight(true);imgCarousel.imgSize=tabItemList.find("li").length}$imgOriginal.find("img").attr({src:mosaicImgUrl(colors[index].colorCode,1,detailsImgInfo.extensionName[0]),"data-code":colors[index].colorCode});tabItemList.find("img").error(function(){$(this).parent("li").hide()});if(sizes.length){var sizeLi="";var $select=$("#sizeNum");$select.html("");for(var i=0;i<sizes.length;i++){sizeLi+="<li value ="+i+" data-value="+sizes[i].sku+" data-size="+sizes[i].sizeAlias+">"+sizes[i].sizeAlias+"<span></span></li>"}$select.append(sizeLi)}};ObtainGif(curIndex);$colors.on("click","li",function(){var middleNine=$(this).attr("data-colorcode");var middleSum=0;for(var i in _this.middleStockObj){if(i.slice(0,12)==middleNine){middleSum+=Number(_this.middleStockObj[i])}}if(middleSum<=0){$("#de-sellStock span").text(0)}else{$("#de-sellStock span").text(middleSum)}$("#sizeNum").hide();lowerFlag=false;$("#lowerBtn span").text("璇烽€夋嫨灏虹爜");$(".size-select dl dt").text(1);liIndex=$(this).index();bjNum=0;$(this).addClass("color-active");$(this).siblings().removeClass("color-active");ObtainGif(liIndex);imgCarousel.init();$(".goods-info .goods-num").find(".staffPro").remove()});$("#lowerBtn").off("click").on("click",function(){if($(".staffPro").text()=="鍐呰喘鍟嗗搧"){var data={goodsCode:codes,type:1}}else{var data={goodsCode:codes,type:0}}_this.getDetailsellStock(data);if(!lowerFlag){$("#sizeNum").show();lowerFlag=true}else{$("#sizeNum").hide();lowerFlag=false}});$("#sizeNum").off("click").on("click","li",function(){var ulLis=$("#sizeNum li");for(var i=0;i<ulLis.length;i++){$(ulLis[i]).removeClass("sizeActive")}if(isLogin()){if(localStorage.getItem("userInfo")){var userInfo=JSON.parse(localStorage.getItem("userInfo"));if(userInfo.staffLogin=="yes"&&userInfo.EmployeeNO){_this.ajaxStaffPro($(this).attr("data-value"))}}}else{var data={goodsCode:codes,type:0};_this.getDetailsellStock(data,$(this).attr("data-value"))}$(this).addClass("sizeActive");var liSpanSum=$(this).children("span").text();if(liSpanSum==="鏆傛椂鏃犲簱瀛�"){$(this).removeClass("sizeActive");return}else if(liSpanSum==="鏈€鍚庝竴浠�"){$("#de-sellStock span").text(1)}else{if(Number(liSpanSum.substring(0,liSpanSum.length-1))<=0){$("#de-sellStock span").text(0)}else{$("#de-sellStock span").text(liSpanSum.substring(0,liSpanSum.length-1))}}$("#sizeNum").hide();lowerFlag=false;$("#lowerBtn span").text($(this).attr("data-size"));$("#lowerBtn span").attr("data-sku",$(this).attr("data-value"))});imgCarousel.init();$("#tabUp").on("click",function(){imgCarousel.topMove()});$("#tabDown").on("click",function(){imgCarousel.downMove()});$("#tab-item ul").on("click","li",function(){$(this).addClass("active").siblings().removeClass("active");imgCarousel.topMove();var dataCode=$(this).find("img").attr("data-code");var imgIndex=$(this).find("img").attr("data-index");var biggerImgUrl=mosaicImgUrl(dataCode,1,detailsImgInfo.extensionName[imgIndex]);$imgOriginal.find("img").attr("src",biggerImgUrl)});$("#addBuy").click(function(){localStorage.removeItem("useCoupons");$(".btnclose").click(function(){$("#onCoupPop").hide()});var data={goodsName:res.data.goodsName,goodsCode:res.data.projectCode,gsColorCode:res.data.color[liIndex].colorCode,gscPicmainId:"",gscPicmainPath:res.data.color[liIndex].picurls[0]};if(isLogin()){if($("#de-sellStock span").text()>0){$.ajax({type:"post",url:globalURL.SHOPPINGADD,headers:globalURL.headers,dataType:"json",data:JSON.stringify(data),success:function(res){requestStatus(res);if(res.code==0){buyCarSum();$("#onCoupPop").show()}},error:function(error){globalErr(error.responseText.msg,1)}})}else{globalErr("鏆傛椂鏃犲簱瀛�")}}else{location.href="./login.html"}var goodsObj={};goodsObj[data.gsColorCode]=data.gsColorCode;TDAPP.onEvent("pageclick_goodsdetail_shoppingcar","",goodsObj)});$(".go-Settlement").click(function(){localStorage.removeItem("useCoupons");if(isLogin()){location.href="./buyCar.html"}else{location.href="./login.html"}});$(".add-shopping").on("click",function(){localStorage.removeItem("useCoupons");localStorage.removeItem("Carmzmj");localStorage.removeItem("mjJg");localStorage.removeItem("savePSIArrys");localStorage.removeItem("orderSaveData");localStorage.removeItem("totalPs");var chooseColorClass=$(".colors li").attr("class");if($("#lowerBtn span").text()=="璇烽€夋嫨灏虹爜"){globalErr("璇烽€夋嫨灏虹爜");return}else{if($("#de-sellStock span").text()>0){var purchaseShoppingInfo={goodsName:$(".goods-title").text(),goodsCount:$(".number").text(),gscolPicPath:$("#img-original img").attr("src"),price:$(".prices").text(),originalPrice:$(".originalPrice").text(),colorName:$(".color-active").text(),sizeName:$("#lowerBtn span").text(),goodsColorCode:$(".color-active").attr("data-colorcode"),gcsSku:$("#lowerBtn span").attr("data-sku"),isGift:"N",staffPro:false};var pSIArry=new Array;pSIArry.push(purchaseShoppingInfo);if(isLogin()){if(localStorage.getItem("userInfo")){var userInfo=JSON.parse(localStorage.getItem("userInfo"));if(userInfo.staffLogin=="yes"&&userInfo.EmployeeNO){_this.ajaxStaffNums(pSIArry)}else{localStorage.setItem("pSIArrys",JSON.stringify(pSIArry));window.location.href="./buyCarStep2.html"}}}else{location.href="./login.html"}}else{globalErr("姝ゅ晢鍝佹殏鏃跺凡鏃犺揣")}}})},error:function(err){globalErr("鎵€閫夊晢鍝佷笉瀛樺湪");var timer=setTimeout(function(){window.location.href="/"},2e3)}})},ajaxStaffPro:function(skuCode){var _this=this;$.ajax({type:"get",url:globalURL.GOODSSTATUS,headers:globalURL.headers,data:{channel:6,skuCode:skuCode},success:function(msg){requestStatus(msg);if(msg.code===0){if(msg.data.supportEP===true){$(".goods-info .goods-num").find(".staffPro").remove();$(".goods-info .goods-num").append('<span class="staffPro">鍐呰喘鍟嗗搧</span>');var data={goodsCode:codes,type:1};_this.getDetailsellStock(data,skuCode)}else if(msg.data.supportEP===false){$(".goods-info .goods-num").find(".staffPro").remove();$(".goods-info .goods-num").append('<span class="staffPro">闈炲唴璐晢鍝�</span>');var data={goodsCode:codes,type:0};_this.getDetailsellStock(data,skuCode)}}},error:function(err){globalErr(err.responseText.msg,1)}})},ajaxStaffNums:function(pSIArry){var _this=this;$.ajax({type:"post",url:globalURL.ORDERVERIFY,headers:globalURL.headers,data:JSON.stringify({brandCode:curBrandName,employeeId:JSON.parse(localStorage.getItem("userInfo")).EmployeeNO,goodsList:[{gcsSku:$("#lowerBtn span").attr("data-sku"),goodsCount:$(".number").text(),clearingType:2}]}),success:function(msg){requestStatus(msg);if(msg.code=="0"){for(var i in pSIArry){pSIArry[i].staffPrice=Math.ceil(pSIArry[i].originalPrice*.5);pSIArry[i].staffPro=true;pSIArry[i].clearingType=2}localStorage.setItem("pSIArrys",JSON.stringify(pSIArry));window.location.href="./buyCarStep2.html"}else if(msg.code=="1"){$("#onStaffBuy_title").text(msg.msg+"锛屾槸鍚︽寜鏅€氱敤鎴疯喘涔帮紵");$("#onStaffBuy").show()}},error:function(err){globalErr(err.responseText.msg,1)}});$(".onCoupPop_no").click(function(){$("#onStaffBuy").hide()});$(".onCoupPop_yes").click(function(){$("#onStaffBuy").hide();localStorage.setItem("pSIArrys",JSON.stringify(pSIArry));window.location.href="./buyCarStep2.html"})}});getDetail.getDetailInfo();$(".tip-list p").on("click",function(){var $divShow=$(this).siblings("div");if($divShow.is(":hidden")){$(this).parent().siblings().find("div").slideUp();$divShow.slideDown()}else{$divShow.slideUp()}});$(".size-select dl dd").click(function(){var num=$(this).siblings("dt").text();if($(this).index()===1){if(num>$("#de-sellStock span").text()-1){return}else{num++;$(this).siblings("dt").text(num)}}else{if(num>1){num--;$(this).siblings("dt").text(num)}}});var $magnifier=$("#magnifier");var $imgOriginal=$("#img-original");var $biggerImg=$("#biggerImg");var $biggerView=$("#bigger");var magnifier=new Object({magnifierTop:$magnifier.position().top,magnifierLeft:$magnifier.position().left,magnifierH:$magnifier.outerHeight(true),magnifierW:$magnifier.outerWidth(true),imgOriginalPosT:$imgOriginal.offset().top,imgOriginalPosL:$imgOriginal.offset().left,imgOriginalHeight:$imgOriginal.outerHeight(),imgOriginalWidth:$imgOriginal.outerWidth(),setSpanPosition:function(e){var minL=this.magnifierLeft;var maxL=this.imgOriginalWidth-this.magnifierW;var mouseMaxL=this.imgOriginalPosL+this.imgOriginalWidth-this.magnifierW;var mousePosX=e.pageX-this.imgOriginalPosL;var minT=this.magnifierTop;var maxT=this.imgOriginalHeight-this.magnifierH;var mouseMaxT=this.imgOriginalPosT+this.imgOriginalHeight-this.magnifierH;var mousePosY=e.pageY-this.imgOriginalPosT;if(mousePosX<minL+50){$magnifier.css("left",0)}else if(mousePosX>maxL+50){$magnifier.css("left",maxL)}else{$magnifier.css("left",mousePosX-50)}if(mousePosY<minT+50){$magnifier.css("top",0)}else if(mousePosY>maxT+50){$magnifier.css("top",maxT)}else{$magnifier.css("top",mousePosY-50)}},setBigger:function(e){var magnifierSpan=$magnifier;var spanWidth=magnifierSpan.outerWidth(true);var spanHeight=magnifierSpan.outerHeight(true);var minL=0;var maxL=this.imgOriginalWidth-spanWidth;var minT=0;var maxT=this.imgOriginalHeight-spanHeight;var mousePosX=e.pageX-this.imgOriginalPosL;var mousePosY=e.pageY-this.imgOriginalPosT;var mouseMaxL=this.imgOriginalPosL+this.imgOriginalWidth-spanWidth/2;var mouseMaxT=this.imgOriginalPosT+this.imgOriginalHeight-spanHeight/2;if(mousePosX<=spanWidth/2){$magnifier.css("left",minL)}else if(e.pageX>=mouseMaxL){$magnifier.css("left",maxL)}else{$magnifier.css("left",mousePosX-spanWidth/2)}if(mousePosY<=spanHeight/2){$magnifier.css("top",minT)}else if(e.pageY>mouseMaxT){$magnifier.css("top",maxT)}else{$magnifier.css("top",mousePosY-spanHeight/2)}var spanX=magnifierSpan.css("left");var spanY=magnifierSpan.css("top");var scaleX=this.computerScale("x",$biggerImg,$biggerView,$imgOriginal,$magnifier);var scaleY=this.computerScale("y",$biggerImg,$biggerView,$imgOriginal,$magnifier);$biggerImg.css({left:-parseInt(spanX)*scaleX,top:-parseInt(spanY)*scaleY})},computerScale:function(point,bigImg,bigView,smallView,move){if(point==="x"){return(bigImg.outerWidth(true)-bigView.outerWidth(true))/(smallView.outerWidth(true)-move.outerWidth(true))}else{return(bigImg.outerHeight(true)-bigView.outerHeight(true))/(smallView.outerHeight()-move.outerHeight(true))}}});$imgOriginal.on("mouseover",function(){$(this).find("span").show();var tabItemUrl=$(this).find("img").attr("src");var biggerImgUrl=tabItemUrl.replace(detailsImgInfo.size[1],"/");$biggerImg.attr("src",biggerImgUrl);$biggerView.show()});$imgOriginal.on("mousemove",function(e){magnifier.setBigger(e)});$imgOriginal.on("mouseout",function(){$biggerView.hide();$(this).find("span").hide()})});