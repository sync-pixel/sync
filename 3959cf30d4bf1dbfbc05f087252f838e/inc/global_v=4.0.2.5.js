function $2(ObjID){
	return document.getElementById(ObjID);
}

function MarqueeImage(ObjDiv,Direction,Speed){
	var objdiv=document.getElementById(ObjDiv);
	var divs=document.createElement("DIV");
	var div1=document.createElement("DIV");
	var html='';
	switch(Direction){
	case "left":
	case "right":
		divs.style.width="32766px";
		div1.style.styleFloat="left";
		div1.style.cssFloat="left";
		div1.innerHTML=objdiv.innerHTML;
		objdiv.appendChild(divs);
		divs.appendChild(div1);
		var div1_width=div1.offsetWidth;
		if (div1_width<=objdiv.offsetWidth){divs.parentNode.removeChild(divs);return false;};
		html+='<div style="width:'+(div1_width*2)+'px">';
		html+='<div style="float:left;width:'+div1_width+'px;overflow:hidden;">'+div1.innerHTML+'</div>';
		html+='<div style="float:left;width:'+div1_width+'px;overflow:hidden;">'+div1.innerHTML+'</div>';
		html+'</div>';
		objdiv.innerHTML=html;
		break;
	case "top":
	case "bottom":
		div1.innerHTML=objdiv.innerHTML;
		objdiv.appendChild(div1);
		var div1_height=div1.offsetHeight;
		if (div1_height<=objdiv.offsetHeight){div1.parentNode.removeChild(div1);return false;};
		html+=div1.innerHTML;
		html+=div1.innerHTML;
		divs.style.height=div1_height*2+"px";
		divs.innerHTML=html;
		objdiv.innerHTML="";
		objdiv.appendChild(divs);
		break;
	}
    var Tid=setInterval(Marquee,Speed)
    objdiv.onmouseover=function(){clearInterval(Tid)}
    objdiv.onmouseout=function(){Tid=setInterval(Marquee,Speed)}
    function Marquee(){
		switch(Direction){
		case "left":
            if(objdiv.scrollLeft>=div1_width)
                objdiv.scrollLeft=0;
            else
                objdiv.scrollLeft++;
			break;
		case "right":
            if(objdiv.scrollLeft==0)
                objdiv.scrollLeft=div1_width;
            else
                objdiv.scrollLeft--;
			break;
		case "top":
			if(objdiv.scrollTop>=div1_height)
                objdiv.scrollTop=0;
            else
                objdiv.scrollTop++;
			break;
		case "bottom":
			if(objdiv.scrollTop==0)
                objdiv.scrollTop=div1_height;
            else
                objdiv.scrollTop--;
			break;
		}
    }
}

function AddFavorite(sURL,sTitle){
	sURL=encodeURI(sURL);
	try{
		window.external.addFavorite(sURL,sTitle);
	}catch(e){
		try{
			window.sidebar.addPanel(sTitle,sURL,"");
		}catch(e){
			alert("您好，您的浏览器不支持自动加入收藏功能，请使用Ctrl+D进行添加，或手动在浏览器里进行设置！");
		}
	}
}

function SetHome(Url){
	if (document.all){
		document.body.style.behavior='url(#default#homepage)';
		document.body.setHomePage(Url);
	}else{
		alert("您好，您的浏览器不支持自动设置页面为首页功能，请您手动在浏览器里设置该页面为首页！");
	}
}

function key(e){
	var keynum;
	if(window.event){
		keynum = e.keyCode;
	}else if(e.which){
		keynum = e.which;
	}
	if(keynum == 17){
		alert("禁止复制内容！");
		return false;
	}
}

function CheckSearch(Language){
	var SearchKey=$2("search_key");
	if (SearchKey.value=="" || SearchKey.value=="请输入搜索关键词" || SearchKey.value=="Please enter keywords"){
		if (Language=="cn"){
			alert("请输入搜索关键词！");
		}else{
			alert("Please enter keywords!");
		}
		SearchKey.focus();
		return;
	}
	location.href="products.php?search_key="+encodeURI(SearchKey.value);
}

function CheckSearch2(Evt,Language){
	Evt=Evt?Evt:(window.event?window.event:"");
	var Key=Evt.keyCode?Evt.keyCode:Evt.which;
	if (Key==13){
		var SearchKey=$2("search_key");
		if (SearchKey.value=="" || SearchKey.value=="请输入搜索关键词" || SearchKey.value=="Please enter keywords"){
			if (Language=="cn"){
				alert("请输入搜索关键词！");
			}else{
				alert("Please enter keywords!");
			}
			SearchKey.focus();
			return;
		}
		location.href="products.php?search_key="+encodeURI(SearchKey.value);
	}
}

function FloatDiv(ObjID,Ch){
	var Did=$2(ObjID);
	var DidTop=parseInt(Did.style.top);
	var Diff=(document.documentElement.scrollTop+document.body.scrollTop+Ch-DidTop)*.80;
	Did.style.top=Ch+document.documentElement.scrollTop+document.body.scrollTop-Diff+"px";
	setTimeout("FloatDiv('"+ObjID+"',"+Ch+")",20);
}
function FloatDiv2(ObjID,Ch){
	var Did=$2(ObjID);
	var DidTop=parseInt(Did.style.top);
	var Diff=(document.documentElement.clientHeight-53-Ch+document.documentElement.scrollTop+document.body.scrollTop-DidTop)*.80;
	Did.style.top=document.documentElement.clientHeight-53-Ch+document.documentElement.scrollTop+document.body.scrollTop-Diff+"px";
	setTimeout("FloatDiv2('"+ObjID+"',"+Ch+")",20);
}
function PicWidth(){
	$('.editorc').each(function(){
		var editroc=$(this);
		$(editroc).find('img').each(function(){
			if (parseInt($(this).width())>=$(editroc).parent().width()) $(this).css({'width':'100%','height':'auto'});
		});
	});
	setTimeout(PicWidth,500);
}
function PicWidth2(){
	$('.editorc2 img').each(function(){if (parseInt($(this).width())>=$('.editorc2').parent().width()) $(this).css({'width':'100%','height':'auto'});});
	setTimeout(PicWidth2,500);
}
function ScrollTo(ObjID,Ch,Speed){
	$('html,body').animate({scrollTop:($(ObjID).offset().top-Ch)+'px'},Speed);
}
function ScrollTop(Speed){
	$('html,body').animate({scrollTop:'0px'},Speed);
}

function Strlen(Str){
	var realLength=0,len=Str.length,charCode=-1;
	for (var i=0;i<len;i++) {
		charCode=Str.charCodeAt(i);
		if (charCode>=0 && charCode<=128){
			realLength+=1;
		}else{
			realLength+=2;
		}
	}
	return realLength;
}
function EmptyStr(Str){
	if (Str=='') return true;
	Str=Str.replace(/^\s+/g,'');
	Str=Str.replace(/\s+$/g,'');
	if (Str==''){
		return true;
	}else{
		return false;
	}
}

function Track(){
	if (EmptyStr($('#track_code').val())){
		alert('请输入运单号！');
		$('#track_code').focus();
		return false;
	}
	var url='http://www.i-oms.cn/#/ImplantOrdertracking?to=one&serialNumber='+escape($('#track_code').val())+'&options=2&companyNo='+$('#company_no').val();
	window.open(url,'_blank','');
}

function Freight(){
	if ($('#yf_weight').val()==''){
		alert('请输入重量！');
		$('#yf_weight').focus();
		return false;
	}
	if (isNaN($('#yf_weight').val())){
		alert('重量必须为数字！');
		$('#yf_weight').focus();
		return false;
	}
	var url='http://www.i-oms.cn/#/offeraquery?to=one&chargeWeight='+$('#yf_weight').val()+'&packageType='+$('#yf_package').val()+'&transCategory=&destNo='+$('#yf_country').val()+'&companyNo='+$('#company_no').val();
	window.open(url,'_blank','');
}

function Login(ObjForm){
	if (EmptyStr($('#login_user').val())){
		alert('请输入手机号/账号！');
		$('#login_user').focus();
		return false;
	}
	if (EmptyStr($('#login_pass').val())){
		alert('请输入密码！');
		$('#login_pass').focus();
		return false;
	}
	Loading(1);
	var loginApi='http://www.i-oms.cn/user-center/tmsApiLogin/1.0';
	$.ajax({
		url:loginApi,
		type:'post',
		data:{userNo:$('#login_user').val(),password:$('#login_pass').val(),companyNo:$('#company_no').val()},
		dataType:'json',
		success:function(data){
			Loading_Remove(1);
			var code=data.result_code;
			if (code==0){
				window.location.href='http://www.i-oms.cn/'+data.body;
			}else if (code == 1001){
				alert('密码或者用户名错误!');
			}else{
				alert('登录失败！');
			}
		}
	})
	return false;
}

function Reg(){
	if (EmptyStr($('#reg_user').val())){
		alert('请输入账号！');
		$('#reg_user').focus();
		return false;
	}
	Loading(1);
	var regApi='http://www.i-oms.cn/oms-web/useUserNocreateInviteCode/1.0';
	$.ajax({
		url:regApi,
		type:'post',
		data:{userNo:$('#reg_user').val(),companyNo:$('#company_no').val()},
		dataType:'json',
		success:function(data){
			Loading_Remove(1);
			var code=data.result_code;
			if (code==0){
				window.location.href='http://www.i-oms.cn/'+data.body;
			}else if (code == 1001){
				alert('用户名错误!');
			}else{
				alert('注册失败！');
			}
		}
	})
}

function CheckFeedback(ObjForm,Language){
	var Str1,Str2,Str3,Str4,Str5,Str6,Str7;
	if (Language=="cn"){
		Str1="请输入您的姓名！";
		Str2="请输入联系电话！";
		Str3="请输入电子邮箱！";
		Str4="请输入留言主题！";
		Str5="请输入留言内容！";
		Str6="请输入验证码！";
		Str7="无效的验证码！";
	}else{
		Str1="Please enter the name!";
		Str2="Please enter the tel!";
		Str3="Please enter the E-mail!";
		Str4="Please enter the subject!";
		Str5="Please enter the message!";
		Str6="Please enter the verification code!";
		Str7="Invalid verification code!";
	}
	if (ObjForm.f_name.value==""){
		alert(Str1);
		ObjForm.f_name.focus();
		return false;
	}
	if (ObjForm.f_tel.value==""){
		alert(Str2);
		ObjForm.f_tel.focus();
		return false;
	}
	if (ObjForm.f_email.value==""){
		alert(Str3);
		ObjForm.f_email.focus();
		return false;
	}
	if (ObjForm.f_title.value==""){
		alert(Str4);
		ObjForm.f_title.focus();
		return false;
	}
	if (ObjForm.f_content.value==""){
		alert(Str5);
		ObjForm.f_content.focus();
		return false;
	}
	if (ObjForm.f_code.value==""){
		alert(Str6);
		ObjForm.f_code.focus();
		return false;
	}
	Reg=/^\w{4}$/;
	if (!Reg.test(ObjForm.f_code.value)){
		alert(Str7);
		return false;
	}
	Loading(1);
	ObjForm.submit();
}

/*===================================================================================*/

function Loading(ShowBg){
	if ($("#win_loading").length==0){
		var Div=$("<div id=\"win_loading\"></div>");
		$("body").append(Div);
		if (ShowBg==1){
			if ($("#win_loading_bg").length==0){
				var Div_Bg=$("<div id=\"win_loading_bg\"></div>");
				$("body").append(Div_Bg);
			}
		}
	}
}
function Loading_Remove(Val){
	if ($("#win_loading").length>0) $("#win_loading").remove();
	if (Val==1) if ($("#win_loading_bg").length>0) $("#win_loading_bg").remove();
}

var win_ts_tid1;
var win_ts_tid2;
function Wints(Content){
	if (win_ts_tid1) clearTimeout(win_ts_tid1);
	if (win_ts_tid2) clearTimeout(win_ts_tid2);
	if ($("#win_ts").length>0) $("#win_ts").remove();
	var Div=$("<div id=\"win_ts\"></div>").html(Content);
	$("body").append(Div);
	$("#win_ts").css({"top":"40%","opacity":"1","marginTop":"-"+parseInt($("#win_ts").outerHeight()/2)+"px"});
	win_ts_tid1=setTimeout(function(){$("#win_ts").css({"top":"20%","opacity":"0"});},1500);
	win_ts_tid2=setTimeout(function(){$("#win_ts").remove();},2500);
}

/*===================================================================================*/

$(function(){
	if ($(".editorc").length>0) PicWidth();
	if ($(".editorc2").length>0) PicWidth2();
});
