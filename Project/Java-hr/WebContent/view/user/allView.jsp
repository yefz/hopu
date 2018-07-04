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
	<h1>用户信息表</h1> 
	<table> 
        <thead>  
            <tr>  
                <th>Id</th>
                <th>账户</th>
                <th>密码</th>
                <th>性别</th>
                <th>出生日期</th>
                <th>是否管理员</th>
                <th>简介</th>
                <th>操作</th>
        </thead>  
        <tbody>
        <%
		UserDao userdao = new UserDaoImpl();
		List<User> list = new ArrayList<User>();
		list = userdao.query();
		for (User u : list) {
			String sex = u.getGenler()==1 ? "男":"女";
			String role = u.getRole().equals("0") ? "否":"是";
		%>
            <tr>  
                <td><%=u.getId()%></td>
				<td><%=u.getAccount()%></td>
				<td><%=u.getPassword()%></td>
				<td><%=sex%></td>
				<td><%=u.getBirthday()%></td>
				<td><%=role%></td>
				<td><%=u.getIntro()%></td>
				<td>
				<% if(!u.getRole().equals("2")){ %>
					<a href="update.jsp?id=<%=u.getId()%>"><i class="fa fa-pencil"></i></a>&nbsp;&nbsp;
					<a href="remove?id=<%=u.getId()%>"><i class="fa fa-close"></i></a>
				<% } %>	
				</td>
			</tr>
		<% } %>
        </tbody>  
    </table> 
</body>
</html>