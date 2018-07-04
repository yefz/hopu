package com.hr.controller.apply;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hr.bean.Apply;
import com.hr.dao.ApplyDao;
import com.hr.dao.ApplyDaoImpl;

public class AddApply extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("UTF-8");
		resp.setCharacterEncoding("utf-8");

		Apply apply = new Apply();
		apply.setName(req.getParameter("name"));
		apply.setGenler(Byte.parseByte(req.getParameter("genler")));
		apply.setAge(Integer.parseInt(req.getParameter("age")));
		apply.setPosition(req.getParameter("position"));
		apply.setMajor(req.getParameter("major"));
		apply.setWorkExp(Integer.parseInt(req.getParameter("workExp")));
		apply.setDiploma(req.getParameter("diploma"));
		apply.setSchool(req.getParameter("school"));
		apply.setTell(req.getParameter("tell"));
		apply.setEmail(req.getParameter("email"));
		apply.setExperience(req.getParameter("experience"));	

		
		ApplyDao applydao = new ApplyDaoImpl();
		if (applydao.save(apply)) {
			resp.sendRedirect("allView.jsp");
		}
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}
}
