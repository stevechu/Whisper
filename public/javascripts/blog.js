$(document).ready(function(){
   $("#removePost").click(function(){
	   	alertify.confirm("确定删除吗?",function(e){
			if(e){
				var url = window.location.href.replace(/u/,"remove");
				window.location.href=url;
			}else{
				alertify.log("取消删除","success");
			}
		});
   });
});

