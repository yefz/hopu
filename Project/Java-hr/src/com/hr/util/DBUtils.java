package com.hr.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * JDBC Utils
 * @author
 */
public class DBUtils {
	
	// 定义常量字符串存放数据库连接的信�??
	private static final String USER = "root", PASSWORD = "root";
	private static final String URL = "jdbc:mysql://localhost:3306/hr?useUnicode=true&characterEncoding=UTF8";
	
	/**
	 * 连接数据�?? Connection database
	 * @return
	 */
	public static Connection init() {
		Connection conn = null;
		try {
			// 加载驱动
			Class.forName("com.mysql.jdbc.Driver");			
			// 在驱动管理器的基�??上获得连�??
			conn = DriverManager.getConnection(URL, USER, PASSWORD);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}

	/**
	 * 关闭连接  Close database
	 * @param conn
	 */
	public static void close(Connection conn) {
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * 设置SQL语句中不定量传参 
	 * @param ps
	 * @param values
	 */
	private static void setParam(PreparedStatement ps, Object... values) {
		// 判断SQL语句中是否有�??
		if (values != null && values.length > 0) {
			// 循环设置参数的�??
			for (int i = 0; i < values.length; i++) {
				try {
					ps.setObject(i + 1, values[i]);
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}

	/**
	 * 执行 insert delete update
	 * @param conn
	 * @param sql
	 * @param values
	 * @return
	 */
	public static int executeUpdate(Connection conn, String sql, Object... values) {
		int alter = 0;
		try {
			// 编写SQL语句
			PreparedStatement ps = conn.prepareStatement(sql);
			// 设置参数的�??
			setParam(ps, values);
			// 执行SQL语句
			alter = ps.executeUpdate();			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return alter;
	}

	/**
	 * 执行 select
	 * @param conn
	 * @param sql
	 * @param values
	 * @return
	 */
	public static ResultSet executeQuery(Connection conn, String sql, Object... values) {
		ResultSet rs = null;
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			setParam(ps, values);
			rs = ps.executeQuery();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return rs;
	}
}
