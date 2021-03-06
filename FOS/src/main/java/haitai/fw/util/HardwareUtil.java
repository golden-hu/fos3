package haitai.fw.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStreamReader;

public class HardwareUtil {
	public static String getMotherBoard() {
		String vbs = "Set objWMIService = GetObject(\"winmgmts:\\\\.\\root\\cimv2\")\n"
				+ "Set colItems = objWMIService.ExecQuery _ \n" + "   (\"Select * from Win32_BaseBoard\") \n"
				+ "For Each objItem in colItems \n" + "    Wscript.Echo objItem.SerialNumber \n"
				+ "    exit for  ' do the first cpu only! \n" + "Next \n";
		return execute(vbs);
	}

	public static String getHardDisk(String drive) {
		String vbs = "Set objFSO = CreateObject(\"Scripting.FileSystemObject\")\n"
				+ "Set colDrives = objFSO.Drives\n" + "Set objDrive = colDrives.item(\"" + drive + "\")\n"
				+ "Wscript.Echo objDrive.SerialNumber"; // see note
		return execute(vbs);
	}

	private static String execute(String vbs) {
		String result = "";
		try {
			File file = File.createTempFile("realhowto", ".vbs");
			file.deleteOnExit();
			FileWriter fw = new FileWriter(file);

			fw.write(vbs);
			fw.close();
			Process p = Runtime.getRuntime().exec("cscript //NoLogo " + file.getPath());
			BufferedReader input = new BufferedReader(new InputStreamReader(p.getInputStream()));
			String line;
			while ((line = input.readLine()) != null) {
				result += line;
			}
			input.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result.trim();
	}

	public static void main(String[] args) {
		String cpuId = getMotherBoard();
		System.out.println("Motherboard serial number: " + cpuId);

		String sn = getHardDisk("C");
		System.out.println("Serial Number of C: " + sn);
	}
}
