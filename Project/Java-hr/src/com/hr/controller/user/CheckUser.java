package com.hr.controller.user;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.hr.dao.UserDao;
import com.hr.dao.UserDaoImpl;
import com.hr.util.MD5Utils;

public class CheckUser extends HttpServlet {

	private static final long serialVersionUID = 4629398735032836742L;
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("utf-8");
		
		UserDao userdao = new UserDaoImpl();
		
		MD5Utils md5 =new MD5Utils();
		switch(userdao.login(req.getParameter("account"), md5.getMD5ofStr(req.getParameter("password")))) {
			// login success
			case 1:
				HttpSession session = req.getSession();
				session.setAttribute("user", userdao.queryBy("account",req.getParameter("account")));//return List<User>
				if(req.getParameter("lasting")!=null) {
					session.setMaxInactiveInterval(60*60*24*7);
				}
				resp.sendRedirect("index.jsp");
				break;
			// Account or password error
			case 0:
				req.setAttribute("hint", 0);
				req.getRequestDispatcher("login.jsp").forward(req, resp);
				break;
			// No this account
			case -1:
				req.setAttribute("hint", -1);
				req.getRequestDispatcher("login.jsp").forward(req, resp);
				break;
		}
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}
	
}
