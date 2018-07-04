<%@ page import="javax.servlet.http.HttpSession"%>
<%@ page import="java.util.List"%>
<%@ page import="com.hr.bean.User"%>
<%@ page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/font-awesome.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/master.css">
<!--[if lt IE 9]>
    <script src="${pageContext.request.contextPath}/static/js/ie/html5shiv.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/ie/respond.min.js"></script>
<![endif]-->
</head>
<body>
	<%
		if (session.getAttribute("user") == null || request.getSession(true) == null) {
			response.sendRedirect("login.jsp");
		}
		User user = new User();
		user = (User) session.getAttribute("user");
	%>
	<aside>
    <h1>人力资源管理系统</h1>
    <p>欢迎，
      <span><%=user.getAccount() %></span>
    </p>
    <p>
      <a href="login.jsp"><i class="fa fa-reply"></i>退出</a>
    </p>
    <nav id="nav">
      <ul>
        <li>
          <a><i class="fa fa-user"></i>人员管理</a>
          <ul>
            <li><a href="view/user/add.jsp" target="content">人员信息录入</a></li>
            <li><a href="view/user/allView.jsp" target="content">人员信息查看</a></li>
          </ul>
        </li>
        <li>
          <a><i class="fa fa-user-plus"></i>招聘管理</a>
          <ul>
            <li><a href="view/apply/add.jsp" target="content">应聘信息录入</a></li>
            <li><a href="view/apply/allView.jsp" target="content">应聘信息查看</a></li>
            <li><a href="view/apply/allLib.jsp" target="content">人才库浏览</a></li>
          </ul>
        </li>
        <li>
          <a><i class="fa fa-tasks"></i>培训管理</a>
          <ul>
            <li><a href="view/train/add.jsp" target="content">培训计划录入</a></li>
            <li><a href="view/train/allView.jsp" target="content">培训计划查看</a></li>
            <li><a href="view/train/allSum.jsp" target="content">培训总结查看</a></li>
          </ul>
        </li>
        <li>
          <a><i class="fa fa-star-half-empty"></i>奖惩管理</a>
          <ul>
            <li><a href="view/award/add.jsp" target="content">奖惩信息登记</a></li>
            <li><a href="view/award/allView.jsp" target="content">奖惩查看</a></li>
          </ul>
        </li>
        <li>
          <a><i class="fa fa-cny"></i>薪金管理</a>
          <ul>
            <li><a href="view/pay/add.jsp" target="content">薪金数据录入</a></li>
            <li><a href="view/pay/allView.jsp" target="content">薪金数据查看</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>

  <section>
    <iframe name="content" id="frame" scrolling="no" frameborder="0" style="overflow: auto; margin: auto; width: 100%;">
      <p>您的浏览器不支持 iframe 标签</p>
    </iframe>
  </section>
	<script src="${pageContext.request.contextPath}/static/js/jquery.min.js"></script>
	<script src="${pageContext.request.contextPath}/static/js/bootstrap.min.js"></script>
	<script src="${pageContext.request.contextPath}/static/js/master.js"></script>
	<script>
	function reinitIframe() {
        var iframe = document.getElementById("frame");
        try {
            var bHeight = iframe.contentWindow.document.body.scrollHeight;
            var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
            var height = Math.max(bHeight, dHeight);
            iframe.height = height;
        } catch (ex) {}
    }
    window.setInterval("reinitIframe()", 200);
	</script>
</body>
</html>