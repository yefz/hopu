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

/**
 * 
 * */
public class SaveUser extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("utf-8");

		User user = new User();
		MD5Utils md5 =new MD5Utils();
		user.setAccount(req.getParameter("account"));
		user.setPassword(md5.getMD5ofStr(req.getParameter("password")));
		user.setGenler(Byte.parseByte(req.getParameter("genler")));
		user.setBirthday(req.getParameter("birthday"));
		user.setRole(req.getParameter("role"));
		user.setIntro(req.getParameter("intro"));

		UserDao userdao = new UserDaoImpl();
		if (userdao.register(user)) {
			resp.sendRedirect("allView.jsp");
		}
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}

}
