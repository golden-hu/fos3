package haitai.fw.util;

import java.io.File;

public class FileUtil {

	public static void createDirs(String dir) {
		File fdir = new File(dir);
		if (!fdir.exists())
			fdir.mkdirs();
	}

}
