package com.hr.dao;

import java.util.List;

import com.hr.bean.Apply;

public interface ApplyDao {
	
	public abstract boolean save(Apply applicant);
	public abstract boolean remove(String id);
	
	public abstract List<Apply> query();
	public abstract List<Apply> queryBy(String key,String value);
	
	public abstract boolean input(String id);
	
}
