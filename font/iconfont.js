(function(window){var svgSprite='<svg><symbol id="icon-fangdajing" viewBox="0 0 1024 1024"><path d="M939.904756 905.321487 685.013561 650.430293c27.446389-29.671163 49.319585-63.491009 65.076186-100.738071 18.178883-42.974782 27.396244-88.604147 27.396244-135.620159 0-47.020105-9.217361-92.652541-27.395221-135.630393-17.550543-41.493987-42.668799-78.751283-74.656838-110.737276-31.98804-31.985993-69.247382-57.103225-110.743416-74.653768-42.979899-18.17786-88.617451-27.394198-135.64165-27.394198-47.020105 0-92.652541 9.217361-135.629369 27.395221-41.492963 17.54952-78.750259 42.666752-110.736252 74.653768s-57.103225 69.244312-74.653768 110.737276c-18.17786 42.977852-27.395221 88.609264-27.395221 135.629369 0 47.016012 9.217361 92.644354 27.395221 135.619136 17.550543 41.490917 42.666752 78.746166 74.653768 110.731135s69.243289 57.101178 110.736252 74.649675c42.977852 18.17786 88.610288 27.395221 135.629369 27.395221 47.025222 0 92.660728-9.216338 135.64165-27.394198 23.60062-9.980784 45.823803-22.416598 66.493533-37.164171l258.067689 258.067689c6.994633 6.99361 16.160827 10.490415 25.32702 10.490415s18.332387-3.496805 25.32702-10.490415C953.891976 941.987284 953.891976 919.309731 939.904756 905.321487zM429.047844 690.831336c-152.617067 0-276.779741-124.153463-276.779741-276.760297 0-152.617067 124.162674-276.780764 276.779741-276.780764 152.629348 0 276.802255 124.163697 276.802255 276.780764C705.850098 566.677873 581.677191 690.831336 429.047844 690.831336z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)