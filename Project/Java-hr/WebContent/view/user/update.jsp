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
	<title>update</title>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/main.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/font-awesome.min.css">
</head>
<body>
<h1>用户信息更新</h1>
	<form action="updateUser" method="post">
	<%
		UserDao userdao = new UserDaoImpl();
		User user = new User();
		user = userdao.queryBy("id",request.getParameter("id"));
		String sex = user.getGenler()==1 ? "男":"女";
	%>
		<input name="id" type="hidden" value=<%=user.getId() %>>
		<label>
			<span>账户 :</span>
			<input name="account" type="text"  value="<%=user.getAccount() %>">
		</label>
		<label>
			<span>密码 :</span>
			<input name="password" type="password"  value="<%=user.getPassword() %>">
		</label>
		<label>
			<span>性别 :</span>
			<%if (user.getGenler()==1){ %>
			<input name="genler" type="radio" value=1 checked="checked">男
			<input name="genler" type="radio" value=0>女<br>
			<%} else { %>
			<input name="genler" type="radio" value=1>男
			<input name="genler" type="radio" value=0 checked="checked">女
			<%} %>
		</label>
		<label>
			<span>出生日期 :</span>
			<input name="birthday" type="date" value="<%=user.getBirthday() %>">
		</label>
		<label>
			<span>权限 :</span>
			<%if (user.getRole().equals("1")||user.getRole().equals("2")){ %>
			<input name="role" type="radio" value=1 checked="checked">管理员
			<input name="role" type="radio" value=0>普通用户
			<%} else { %>
			<input name="role" type="radio" value=1>管理员
			<input name="role" type="radio" value=0 checked="checked">普通用户
			<%} %>
		</label>
		<label>
			<span>简介 :</span><br>
			<textarea name="intro" rows="3" cols="50"><%=user.getIntro() %></textarea>
		</label>
		<button type="submit">更新</button>
		<button type="reset">重置</button>
	</form>
</body>
</html>