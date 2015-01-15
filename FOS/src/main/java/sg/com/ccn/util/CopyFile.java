package sg.com.ccn.util;

import haitai.fw.util.FileUtil;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.nio.channels.FileChannel;
import java.util.Vector;

public class CopyFile {
    String  filePath="",aimFilePath="";
	Vector<String> vec=null;
	public CopyFile(){
	    filePath="";
	    aimFilePath="";
	    vec=new Vector<String>();
    }
	
    public CopyFile(String filePath,String aimFilePath){
	    this.filePath=filePath;
	    this.aimFilePath=aimFilePath;
	    vec=new Vector<String>();
    }
    
    private void getFileName(){
	    File f=new File(filePath);
	    String str[]=f.list();
	    for(int i=0;i<str.length;i++){
	    	vec.addElement(str[i]);
	    }
    }
    
   /* private boolean bakFile(String fileName){
	    try{
	    	File inFile=new File(filePath+fileName);
	    	 InputStreamReader isr = new InputStreamReader(
		    			new FileInputStream(inFile),"UTF-8");
		    BufferedReader buff = new BufferedReader(isr);
		    String detail="";
		    String temp=buff.readLine();
		    while(temp!=null){
			    detail+=temp+"\n";
			    temp=buff.readLine();
		    }
		    isr.close();
		    File file=new File(aimFilePath+fileName);
		    PrintWriter out=new PrintWriter(new FileWriter(file));
		    out.print(detail);
		    out.close();
	    }catch(FileNotFoundException e){
	    	System.out.println( "文件没有找到 ");
	    } catch (IOException e){
	    	System.out.println( "copyFile 出错 ");
	    }
	    return true;
    }*/
    
    /**
     * @author liuyong
     * @param fileName 文件名全称
     */
    public void fileChannelCopy(String fileName){
    	File s=new File(filePath+fileName);
    	File t=new File(aimFilePath+fileName);
    	FileInputStream fi=null;
    	FileOutputStream fo=null;
    	FileChannel in = null;
    	FileChannel out = null;
    	try {
	         fi = new FileInputStream(s);
	         fo = new FileOutputStream(t);
	          //得到对应的文件通道
	         in = fi.getChannel();
	          //得到对应的文件通道
	         out = fo.getChannel();
	          //连接两个通道，并且从in通道读取，然后写入out通道
	         in.transferTo(0, in.size(), out);
	        }catch (IOException e) {
	            e.printStackTrace();
	        }finally {
	        	try {
		            fi.close();
		            in.close();
		            fo.close();
		            out.close();
		        } catch (IOException e) {
		            e.printStackTrace();
		        }
	        }
    }
    
    /**
     * @author liuyong
     * @param s 原文件
     * @param t 目标文件
     */
    public void fileCopy(String s,String t){
    	FileUtil.createDirs(t);
    	CopyFile confile= new CopyFile(s,t);
	    confile.getFileName();
	    Vector<String> ve=new Vector<String>();
	    ve =confile.vec;
	    if(ve!=null)
	    for(int i=0;i<ve.size();i++){
	    	confile.fileChannelCopy((String) ve.elementAt(i));
	    }
    }
    
	public static void main(String[] args){
		CopyFile confile= new CopyFile();
		String s="C:\\Users\\JOHN\\Desktop\\部署\\fos\\initData\\FOS\\";
		String t="C:\\Users\\JOHN\\Desktop\\部署\\fos\\initData\\data\\JAH\\template\\";
		confile.fileCopy(s, t);
	}
}
