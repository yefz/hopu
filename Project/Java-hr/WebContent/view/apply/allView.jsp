<%@ page import="com.hr.bean.Apply"%>
<%@ page import="com.hr.dao.ApplyDao"%>
<%@ page import="com.hr.dao.ApplyDaoImpl"%>
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
	<h1>人才信息列表</h1>
	<table>
        <thead>
            <tr>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
                <th>职位</th>
                <th>所学专业</th>
                <th>工作经验</th>
                <th>操作</th>
        </thead>
        <tbody>
        <%
		ApplyDao applydao = new ApplyDaoImpl();
		List<Apply> list = new ArrayList<Apply>();
		list = applydao.queryBy("retain","0");
		for (Apply u : list) {
			String sex = u.getGenler()==1 ? "男":"女";
		%>
            <tr>  
                <td><%=u.getName()%></td>
				<td><%=sex%></td>
				<td><%=u.getAge()%></td>
				<td><%=u.getPosition()%></td>
				<td><%=u.getMajor()%></td>
				<td><%=u.getWorkExp()%></td>
				<td>
					<a href="minute.jsp?id=<%=u.getId()%>"><i class="fa fa-eye"></i></a>&nbsp;&nbsp;
					<a href="remove?id=<%=u.getId()%>"><i class="fa fa-close"></i></a>&nbsp;&nbsp;
					<a href="saveApply?id=<%=u.getId()%>"><i class="fa fa-mail-forward"></i></a>
				</td>
			</tr>
		<% } %>
        </tbody>  
    </table> 
</body>
</html>