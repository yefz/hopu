<%@ page import="com.hr.bean.Apply"%>
<%@ page import="com.hr.dao.ApplyDao"%>
<%@ page import="com.hr.dao.ApplyDaoImpl"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="javax.servlet.http.HttpServlet"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
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
	<h1>应聘信息录入</h1>
	<%
		ApplyDao applydao = new ApplyDaoImpl();
		List<Apply> list = new ArrayList<Apply>();
		list = applydao.queryBy("id",request.getParameter("id"));
		for (Apply u : list) {
			String sex = u.getGenler()==1 ? "男":"女";
	%>
	<label>
		<span>Id :</span>
		<%=u.getId() %>
	</label>
	<label>
		<span>姓名 :</span>
		<%=u.getName() %>
	</label>	
	<label>
		<span>性别 :</span>
		<%=u.getGenler() %>
	</label>
	<label>
		<span>年龄 :</span>
		<%=u.getAge() %>
	</label>
	<label>
		<span>职位 :</span>
		<%=u.getPosition() %>
	</label>
	<label>
		<span>专业 :</span>
		<%=u.getMajor() %>
	</label>
	<label>
		<span>工作经验 :</span>
		<%=u.getWorkExp() %>
	</label>
	<label>
		<span>学历 :</span>
		<%=u.getDiploma() %>
	</label>
	<label>
		<span>毕业院校 :</span>
		<%=u.getSchool() %>
	</label>
	<label>
		<span>电话 :</span>
		<%=u.getTell() %>
	</label>
	<label>
		<span>电子邮件 :</span>
		<%=u.getEmail() %>
	</label>
	<label>
		<span>详细经历 :</span><br>
		<%=u.getExperience() %>
	</label>
	<%} %>
</body>
</html>