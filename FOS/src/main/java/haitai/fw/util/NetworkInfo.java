package haitai.fw.util;

/** try to determine MAC address of local network card; this is done
 using a shell to run ifconfig (linux) or ipconfig (windows). The
 output of the processes will be parsed.

 <p>

 To run the whole thing, just type java NetworkInfo

 <p>

 Current restrictions:

 <ul>
 <li>Will probably not run in applets

 <li>Tested Windows / Linux only

 <li>Tested J2SDK 1.4 only

 <li>If a computer has more than one network adapters, only
 one MAC address will be returned

 <li>will not run if user does not have permissions to run
 ifconfig/ipconfig (e.g. under linux this is typically
 only permitted for root)
 </ul>

 */

import haitai.fw.exception.BusinessException;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.io.InputStream;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.text.ParseException;
import java.util.StringTokenizer;

public final class NetworkInfo {
	public static String getMacAddress() {
		String os = System.getProperty("os.name");

		try {
			if (os.startsWith("Windows")) {
				return windowsParseMacAddress(windowsRunIpConfigCommand());
			} else if (os.startsWith("Linux")) {
				return linuxParseMacAddress(linuxRunIfConfigCommand(), "HWaddr");
			} else if (os.startsWith("Mac")) {
				return linuxParseMacAddress(linuxRunIfConfigCommand(), "ether");
			} else {
				throw new BusinessException("unknown operating system: " + os);
			}
		} catch (ParseException ex) {
			ex.printStackTrace();
			throw new BusinessException(ex.getMessage());
		}
	}

	public static String getIpAddress() {
		String os = System.getProperty("os.name");

		try {
			if (os.startsWith("Windows")) {
				return InetAddress.getLocalHost().getHostAddress();
			} else if (os.startsWith("Linux")) {
				return linuxParseIpAddress(linuxRunIfConfigCommand());
			} else {
				throw new BusinessException("unknown operating system: " + os);
			}
		} catch (ParseException ex) {
			ex.printStackTrace();
			throw new BusinessException(ex.getMessage());
		} catch (UnknownHostException e) {
			e.printStackTrace();
			throw new BusinessException(e.getMessage());
		}
	}

	/*
	 * Linux stuff
	 */
	private static String linuxParseMacAddress(String ipConfigResponse, String key)
			throws ParseException {
		String localHost;
		try {
			localHost = InetAddress.getLocalHost().getHostAddress();
		} catch (java.net.UnknownHostException ex) {
			ex.printStackTrace();
			throw new ParseException(ex.getMessage(), 0);
		}

		StringTokenizer tokenizer = new StringTokenizer(ipConfigResponse, "\n");
		String lastMacAddress = null;

		while (tokenizer.hasMoreTokens()) {
			String line = tokenizer.nextToken().trim();
			boolean containsLocalHost = StringUtil.contains(line, localHost);

			// see if line contains IP address
			if (containsLocalHost && lastMacAddress != null) {
				return lastMacAddress;
			}

			// see if line contains MAC address
			int macAddressPosition = line.indexOf(key);
			if (macAddressPosition < 0)
				continue;

			String macAddressCandidate = line.substring(macAddressPosition + key.length()).trim();
			if (linuxIsMacAddress(macAddressCandidate)) {
				lastMacAddress = macAddressCandidate;
			}
		}
		//for mac os x, lo isn't the last one
		if (key.equals("ether")) {
			return lastMacAddress;
		}
		ParseException ex = new ParseException("cannot read MAC address for "
				+ localHost + " from [" + ipConfigResponse + "]", 0);
		ex.printStackTrace();
		throw ex;
	}

	/*
	 * Linux stuff
	 */
	private static String linuxParseIpAddress(String ipConfigResponse) throws ParseException {
		String localHost;
		try {
			localHost = InetAddress.getLocalHost().getHostAddress();
		} catch (java.net.UnknownHostException ex) {
			ex.printStackTrace();
			throw new ParseException(ex.getMessage(), 0);
		}

		StringTokenizer tokenizer = new StringTokenizer(ipConfigResponse, "\n");
		String lastIpAddress = null;

		while (tokenizer.hasMoreTokens()) {
			String line = tokenizer.nextToken().trim();
			boolean containsLocalHost = StringUtil.contains(line, localHost);

			// see if line contains IP address
			if (containsLocalHost && lastIpAddress != null) {
				return lastIpAddress;
			}

			// see if line contains IP address
			int ipAddressPosition = line.indexOf("inet addr:");
			if (ipAddressPosition < 0)
				continue;
            if(line.indexOf("Bcast:") < 0)
                continue;

			String ipAddressCandidate = line.substring(ipAddressPosition + 10,
					line.indexOf("Bcast:")).trim();
			if (linuxIsIpAddress(ipAddressCandidate)) {
				lastIpAddress = ipAddressCandidate;
			}
		}

		return "0";
	}

	private static boolean linuxIsMacAddress(String macAddressCandidate) {
		return macAddressCandidate.length() == 17;
	}

	private static boolean linuxIsIpAddress(String ipAddressCandidate) {
		return ipAddressCandidate.split(".").length != 4;
	}

	private static String linuxRunIfConfigCommand() {
		Process p;
		String outputText;
		try {
			p = Runtime.getRuntime().exec("/sbin/ifconfig");
			InputStream stdoutStream = new BufferedInputStream(p
					.getInputStream());

			StringBuilder buffer = new StringBuilder();
			for (; ; ) {
				int c = stdoutStream.read();
				if (c == -1)
					break;
				buffer.append((char) c);
			}
			outputText = buffer.toString();

			stdoutStream.close();
		} catch (IOException e) {
			throw new BusinessException(e.getMessage());
		}

		return outputText;
	}

	/*
	 * Windows stuff
	 */
	private static String windowsParseMacAddress(String ipConfigResponse) throws ParseException {
		String localHost;
		try {
			localHost = InetAddress.getLocalHost().getHostAddress();
		} catch (java.net.UnknownHostException ex) {
			ex.printStackTrace();
			throw new ParseException(ex.getMessage(), 0);
		}

		StringTokenizer tokenizer = new StringTokenizer(ipConfigResponse, "\n");
		String lastMacAddress = null;

		while (tokenizer.hasMoreTokens()) {
			String line = tokenizer.nextToken().trim();

			// see if line contains IP address
			if (line.contains(localHost) && lastMacAddress != null) {
				return lastMacAddress;
			}

			// see if line contains MAC address
			int macAddressPosition = line.indexOf(ConstUtil.STRING_COLON);
			if (macAddressPosition <= 0)
				continue;

			String macAddressCandidate = line.substring(macAddressPosition + 1).trim();
			if (windowsIsMacAddress(macAddressCandidate)) {
				lastMacAddress = macAddressCandidate;
			}
		}

		BusinessException ex = new BusinessException(
				"cannot read MAC address from [" + ipConfigResponse + "]");
		ex.printStackTrace();
		throw ex;
	}

	private static boolean windowsIsMacAddress(String macAddressCandidate) {
		return macAddressCandidate.length() == 17;
	}

	private static String windowsRunIpConfigCommand() {
		Process p;
		String outputText;
		try {
			p = Runtime.getRuntime().exec("ipconfig /all");
			InputStream stdoutStream = new BufferedInputStream(p.getInputStream());

			StringBuilder buffer = new StringBuilder();
			for (; ; ) {
				int c = stdoutStream.read();
				if (c == -1)
					break;
				buffer.append((char) c);
			}
			outputText = buffer.toString();
			stdoutStream.close();
		} catch (IOException e) {
			e.printStackTrace();
			throw new BusinessException(e.getMessage());
		}
		return outputText;
	}

	/*
	 * Main
	 */
	public static void main(String[] args) {
		try {
			System.out.println("Network infos");
			System.out.println("  Operating System: " + System.getProperty("os.name"));
			System.out.println("  IP/Localhost: " + getIpAddress());
			System.out.println("  MAC Address: " + getMacAddress());
			System.out.println("  md5: " + CryptoUtil.MD5Encode(getMacAddress()));
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}
}
