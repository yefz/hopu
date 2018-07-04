package com.hr.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.hr.bean.Apply;
import com.hr.util.DBUtils;

public class ApplyDaoImpl implements ApplyDao {

	@Override
	public boolean save(Apply applicant) {
		// TODO Auto-generated method stub
		Connection conn = DBUtils.init();
		String sql = "insert into apply(name,genler,age,position,major,workExp,diploma,school,tell,email,experience) values (?,?,?,?,?,?,?,?,?,?,?);";
		if (DBUtils.executeUpdate(conn, sql, applicant.getName(),applicant.getGenler(),applicant.getAge(),applicant.getPosition(),applicant.getMajor(),applicant.getWorkExp(),applicant.getDiploma(),applicant.getSchool(),applicant.getTell(),applicant.getEmail(),applicant.getExperience()) > 0) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public boolean remove(String id) {
		// TODO Auto-generated method stub
		boolean state = false;
		Connection conn = DBUtils.init();
		String sql = "delete from apply where id = ?";
		if (DBUtils.executeUpdate(conn, sql, id) > 1) {
			state = true;
		}
		DBUtils.close(conn);
		return state;
	}

	@Override
	public List<Apply> query() {
		// TODO Auto-generated method stub
		Connection conn = DBUtils.init();
		String sql = "select * from apply";
		ResultSet rs = DBUtils.executeQuery(conn, sql);
		List<Apply> list = new ArrayList<Apply>();
		try {
			while (rs.next()) {
				Apply applicant = new Apply();
				applicant.setId(Integer.parseInt(rs.getObject(1).toString()));
				applicant.setName(rs.getObject(2).toString());
				applicant.setGenler(rs.getObject(3).toString().equals("true") ? (byte) 1 : (byte) 0);
				applicant.setAge(Integer.parseInt(rs.getObject(4).toString()));
				applicant.setPosition(rs.getObject(5).toString());
				applicant.setMajor(rs.getObject(6).toString());
				applicant.setWorkExp(Integer.parseInt(rs.getObject(7).toString()));
				applicant.setDiploma(rs.getObject(8).toString());
				applicant.setSchool(rs.getObject(9).toString());
				applicant.setTell(rs.getObject(10).toString());
				applicant.setEmail(rs.getObject(11).toString());
				applicant.setExperience(rs.getObject(12).toString());
				applicant.setRetain(rs.getObject(13).toString().equals("true") ? (byte) 1 : (byte) 0);	
				list.add(applicant);
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

	@Override
	public List<Apply> queryBy(String key,String value) {
		// TODO Auto-generated method stub
		Connection conn = DBUtils.init();
		String sql = "select * from apply where " + key + " = ?";
		ResultSet rs = DBUtils.executeQuery(conn, sql, value);
		List<Apply> list = new ArrayList<Apply>();
		try {
			while (rs.next()) {
				Apply applicant = new Apply();
				applicant.setId(Integer.parseInt(rs.getObject(1).toString()));
				applicant.setName(rs.getObject(2).toString());
				applicant.setGenler(rs.getObject(3).toString().equals("true") ? (byte) 1 : (byte) 0);
				applicant.setAge(Integer.parseInt(rs.getObject(4).toString()));
				applicant.setPosition(rs.getObject(5).toString());
				applicant.setMajor(rs.getObject(6).toString());
				applicant.setWorkExp(Integer.parseInt(rs.getObject(7).toString()));
				applicant.setDiploma(rs.getObject(8).toString());
				applicant.setSchool(rs.getObject(9).toString());
				applicant.setTell(rs.getObject(10).toString());
				applicant.setEmail(rs.getObject(11).toString());
				applicant.setExperience(rs.getObject(12).toString());
				applicant.setRetain(rs.getObject(13).toString().equals("true") ? (byte) 1 : (byte) 0);	
				list.add(applicant);
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

	@Override
	public boolean input(String id) {
		// TODO Auto-generated method stub
		boolean state = false;
		Connection conn = DBUtils.init();
		String sql = "update apply set retain = 1 where id = ?";
		if (DBUtils.executeUpdate(conn, sql, id) > 0) {
			state = true;
		}
		return state;
	}

}
