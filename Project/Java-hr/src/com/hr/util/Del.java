package com.hr.util;

import java.sql.Connection;

public class Del {
	public boolean remove(String chart,int id) {
		// TODO remove ById
		boolean state = false;
		Connection conn = DBUtils.init();
		String sql = "delete from " + chart + " where id = ?";
		if (DBUtils.executeUpdate(conn, sql, id) > 0) {
			state = true;
		}
		DBUtils.close(conn);
		return state;
	}
}
