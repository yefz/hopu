package com.hr.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.hr.util.DBUtils;
import com.hr.bean.User;

public class UserDaoImpl implements UserDao {

	@Override
	public boolean register(User user) {
		// TODO add
		Connection conn = DBUtils.init();
		String sql = "insert into user(account,password,genler,birthday,role,intro) values (?,?,?,?,?,?);";
		if (DBUtils.executeUpdate(conn, sql, user.getAccount(), user.getPassword(), user.getGenler(),
				user.getBirthday(), user.getRole(), user.getIntro()) > 0) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public int login(String account, String password) {
		// TODO login check
		Connection conn = null;
		int state = -1;
		try {
			conn = DBUtils.init();
			String sql = "select * from user where account = ?";
			ResultSet rs = DBUtils.executeQuery(conn, sql, account);
			if (rs.next()) {
				if (rs.getObject(3).toString().equals(password)) {
					state = 1;
				} else {
					state = 0;
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBUtils.close(conn);
		}
		return state;
	}

	@Override
	public boolean remove(int id) {
		// TODO remove ById
		boolean state = false;
		Connection conn = DBUtils.init();
		String sql = "delete from user where id = ?";
		if (DBUtils.executeUpdate(conn, sql, id) > 1) {
			state = true;
		}
		DBUtils.close(conn);
		return state;
	}

	@Override
	public boolean updateUser(User user) {
		// TODO update for User class		
		boolean state = false;
		Connection conn = DBUtils.init();
		String sql = "update user set account = ?,password = ?,genler = ?,birthday = ?,role = ?,intro = ? where id = ?";
		if (DBUtils.executeUpdate(conn, sql, user.getAccount(), user.getPassword(), user.getGenler(),
				user.getBirthday(), user.getRole(), user.getIntro(), user.getId()) > 0) {
			;
			state = true;
		}
		return state;
	}

	@Override
	public List<User> query() {
		// TODO ID select
		Connection conn = DBUtils.init();
		String sql = "select * from user";
		ResultSet rs = DBUtils.executeQuery(conn, sql);
		List<User> list = new ArrayList<User>();
		try {
			while (rs.next()) {
				User user = new User();
				user.setId(Integer.parseInt(rs.getObject(1).toString()));
				user.setAccount(rs.getObject(2).toString());
				user.setPassword(rs.getObject(3).toString());
				user.setGenler(rs.getObject(4).toString().equals("true") ? (byte) 1 : (byte) 0);
				user.setBirthday(rs.getObject(5).toString());
				user.setRole(rs.getObject(6).toString());
				user.setIntro(rs.getObject(7).toString());
				list.add(user);
			}
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBUtils.close(conn);
		}
		return list;
	}

	public User queryBy(String key, String value) {
		// TODO ID select
		Connection conn = DBUtils.init();
		String sql = "select * from user where " + key + " = ?";
		ResultSet rs = DBUtils.executeQuery(conn, sql, value);
		User user = new User();
		try {
			while (rs.next()) {
				user.setId(Integer.parseInt(rs.getObject(1).toString()));
				user.setAccount(rs.getObject(2).toString());
				user.setPassword(rs.getObject(3).toString());
				user.setGenler(rs.getObject(4).toString().equals("true") ? (byte) 1 : (byte) 0);
				user.setBirthday(rs.getObject(5).toString());
				user.setRole(rs.getObject(6).toString());
				user.setIntro(rs.getObject(7).toString());
			}
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBUtils.close(conn);
		}
		return user;
	}
}
