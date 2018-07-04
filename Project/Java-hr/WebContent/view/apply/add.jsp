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
	<form action="addApply" method="post">	
		<label>
			<span>姓名 :</span>
			<input name="name" type="text"  placeholder="name" value="张三">
		</label>	
		<label>
			<span>性别 :</span>
			<input name="genler" type="radio" value=1 checked="checked">男
			<input name="genler" type="radio" value=0>女
		</label>
		<label>
			<span>年龄 :</span>
			<input name="age" type="number" placeholder="年龄" value=18>
		</label>
		<label>
			<span>职位 :</span>
			<input name="position" type="text"  placeholder="position" value="H5工程师">
		</label>
		<label>
			<span>专业 :</span>
			<input name="major" type="text"  placeholder="major" value="Web前端">
		</label>
		<label>
			<span>工作经验 :</span>
			<input name="workExp" type="number"  placeholder="workExp" value=5>
		</label>
		<label>
			<span>学历 :</span>
			<input name="diploma" type="text"  placeholder="diploma" value="大学">
		</label>
		<label>
			<span>毕业院校 :</span>
			<input name="school" type="text"  placeholder="school" value="武职">
		</label>
		<label>
			<span>电话 :</span>
			<input name="tell" type="number"  placeholder="tell" value=12345678910>
		</label>
		<label>
			<span>电子邮件 :</span>
			<input name="email" type="text"  placeholder="email" value="123@sina.cn">
		</label>
		<label>
			<span>详细经历 :</span><br>
			<textarea name="experience" rows="3" cols="50">...</textarea>
		</label>
		<button type="submit">录入</button>
		<button type="reset">重置</button>
	</form>
</body>
</html>