package sg.com.ccn.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.mysql.jdbc.PreparedStatement;

public class InitData {
	
	/**
	 * read initialize sql file
	 * @param compCode
	 * @param sqlPath
	 * @param userId
	 * @param roleId
	 * @return
	 */
    public List <String> readSqlFiles(String compCode,String sqlPath,
    		Integer userId,Integer roleId) {
	    List <String> sqlList = new ArrayList <String>();
		    File file = new File(sqlPath);
		    String encoding="UTF-8";
		    if (file.exists()) {
		    StringBuffer temp = new StringBuffer();
		    try {
		    	InputStreamReader myFile = new InputStreamReader(
		    			new FileInputStream(file), encoding);
		    BufferedReader in = new BufferedReader(myFile);
		    String str;
		    while ((str = in.readLine()) != null) {
		    	if(str.contains("{CC}")){str=str.replace("{CC}",compCode);}
		    	if(str.contains("{user_id}")){str=str.replace("{user_id}",userId+"");}
		    	if(str.contains("{role_id}")){str=str.replace("{role_id}",roleId+"");}
		    	temp.append(new String(str));
		    }
		    in.close();
		    } catch (IOException e) {
		    	e.getStackTrace();
		    }
		    String sqls[] = temp.toString().split(";");
		    for (String sql : sqls) {
		    	sqlList.add(sql);
		    }
	    }else{
	    //	throw new BusinessException(ExceptionEnum.INIT_FILE_NOT_EXIST);
	    }
	    return sqlList;
    }
    /**
     * initialize sql file into databases
     * @param compCode
     * @param sqlFilePath
     * @param sqlDriver
     * @param sqlUrl
     * @param sqlUserName
     * @param sqlPassword
     */
    public void initSqlFile(String compCode,
    		String sqlFilePath,String sqlDriver,String sqlUrl,
    		String sqlUserName,String sqlPassword,
    		Integer userId,Integer roleId){
    	List<String> sqlList=readSqlFiles(compCode,sqlFilePath,userId,roleId);
    	java.sql.Connection conn = null;
    	try {
				Class.forName(sqlDriver);
			}catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
			try {
				conn = java.sql.DriverManager.getConnection(sqlUrl,sqlUserName,sqlPassword);
				 for (String sql : sqlList) {
		       	    	PreparedStatement pstmt = (PreparedStatement) conn.prepareStatement(
		       	    	sql,
		       		    ResultSet.TYPE_SCROLL_INSENSITIVE,
		       		    ResultSet.CONCUR_READ_ONLY);
		       		    pstmt.execute();
		       		    pstmt.close();
		       	    }
				 conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
    }
}
