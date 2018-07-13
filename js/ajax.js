function ajax(method,url,json,succCb,errCb){
	
	var xml = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");

	
	var str = "";
	for(var key in json){
		str+="&"+key+"="+json[key];
	}
	str = str.slice(1);


	
	if(method == "get"){

		url = url+"?"+str;

		xml.open("get",url,true);

		xml.send();
	}else{
		xml.open("post",url,true);

	
		xml.setRequestHeader("content-type","application/x-www-form-urlencoded");
	
		xml.send(str)
	}


	xml.onreadystatechange = function(){
		if(xml.readyState == 4 && xml.status == 200){
			
			succCb&&succCb(xml.responseText)
		}else{
			errCb&&errCb(xml.status)
		}
	}


}

