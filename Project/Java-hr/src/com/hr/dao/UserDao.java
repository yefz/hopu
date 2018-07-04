package com.hr.dao;

import java.util.List;

import com.hr.bean.User;

/**
 * User
 * */
public interface UserDao {
	
	public abstract boolean register(User user);
	public abstract int login(String account, String password);
	
	public abstract boolean remove(int id);	
	public abstract boolean updateUser(User user);

	public abstract List<User> query();
	public abstract User queryBy(String key,String value);
	
}
