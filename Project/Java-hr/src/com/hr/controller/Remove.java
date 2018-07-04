package com.hr.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hr.util.Del;

public class Remove extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO public remove
		String path = new String();
		Del del = new Del();
		
		path = req.getServletPath();

		// /view/user/remove
		String chart = path.substring(path.indexOf("/",1)+1,path.lastIndexOf("/"));
		if(del.remove(chart, Integer.parseInt(req.getParameter("id")))){
			resp.sendRedirect("allView.jsp");
		}
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}
	
}
