package com.hr.controller.user;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hr.bean.User;
import com.hr.dao.UserDao;
import com.hr.dao.UserDaoImpl;
import com.hr.util.MD5Utils;

public class UpdateUser extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("utf-8");

		User user = new User();		
		user.setId(Integer.parseInt(req.getParameter("id")));
		user.setAccount(req.getParameter("account"));
		user.setPassword(req.getParameter("password"));
		user.setGenler(Byte.parseByte(req.getParameter("genler")));
		user.setBirthday(req.getParameter("birthday"));
		user.setRole(req.getParameter("role"));
		user.setIntro(req.getParameter("intro"));

		UserDao userdao = new UserDaoImpl();
		MD5Utils md5 =new MD5Utils();
		
		if(!req.getParameter("password").equals(userdao.queryBy("id", req.getParameter("id")).getPassword())){
			user.setPassword(md5.getMD5ofStr(req.getParameter("password")));
		}
			
		if (userdao.updateUser(user)) {
			resp.sendRedirect("allView.jsp");
		}
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}

}
