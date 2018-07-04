<%@ page import="com.hr.bean.User"%>
<%@ page import="com.hr.dao.UserDao"%>
<%@ page import="com.hr.dao.UserDaoImpl"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>在此处插入标题</title>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/main.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/font-awesome.min.css">
</head>
<body>
	<h1>用户信息录入</h1>
	<form action="saveUser" method="post">
		<label>
			<span>账户 :</span>
			<input name="account" type="text"  placeholder="Account" value="test">
		</label>
		<label>
			<span>密码 :</span>
			<input name="password" type="password"  placeholder="password" value="test">
		</label>
		<label>
			<span>性别 :</span>
			<input name="genler" type="radio" value=1 checked="checked">男
			<input name="genler" type="radio" value=0>女
		</label>
		<label>
			<span>出生日期 :</span>
			<input name="birthday" type="date" value="2008-08-08">
		</label>
		<label>
			<span>权限 :</span>
			<input name="role" type="radio" value=1>管理员
			<input name="role" type="radio" value=0 checked="checked">普通用户
		</label>
		<label>
			<span>简介 :</span><br>
			<textarea name="intro" rows="3" cols="50">测试中......</textarea>
		</label>
		<button type="submit">录入</button>
		<button type="reset">重置</button>
	</form>
</body>
</html>