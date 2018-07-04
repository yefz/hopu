<%@ page import = "javax.servlet.http.HttpSession" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/font-awesome.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/login.css">
<!--[if lt IE 9]>
    <script src="${pageContext.request.contextPath}/static/js/ie/html5shiv.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/ie/respond.min.js"></script>
<![endif]-->
</head>
<body>	
	<form action="login" class="login_form" method="post" autocomplete="off">
		<h2>人力资源管理系统</h2>
		<span><%=request.getAttribute("hint") %></span>
		<div class="form-group">
			<label class="sr-only">account</label>
			<input type="text" name="account" placeholder="用户名">
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1" class="sr-only">Password</label>
			<input type="password" name="password" id="exampleInputPassword1" placeholder="密码">
		</div>
		<div id="slider">
			<div id="slider_bg"></div>
			<span id="label" class="fa fa-angle-double-right fa-lg"></span>
			<span id="labelTip">请按住滑块，拖动到最右边</span>
		</div>
		<div class="checkbox">
			<label><input type="checkbox" id="remember">7天之内免登录</label>
		</div>
		<div class="form-group">
			<button type="submit" class="login_btn">登录</button>
		</div>
	</form>
	
	<script src="${pageContext.request.contextPath}/static/js/jquery.min.js"></script>
	<script src="${pageContext.request.contextPath}/static/js/bootstrap.min.js"></script>
	<script src="${pageContext.request.contextPath}/static/js/jquery.slideunlock.min.js"></script>
	<script>
	$(function(){
		// 滑块验证
	    $(function () {
			var slider = new SliderUnlock("#slider",{successLabelTip : "验证通过"},function(){});
			slider.init();
		})
	});
	</script>
</body>
</html>