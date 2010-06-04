package haitai.fos.cms.service;

import haitai.fos.cms.entity.idao.IHcmsResourceDAO;
import haitai.fos.cms.entity.table.HcmsResource;
import haitai.fos.cms.util.ConfigUtil;
import haitai.fos.cms.util.ImageUtil;
import haitai.fw.exception.BusinessException;
import haitai.fw.log.FosLogger;
import haitai.fw.platform.AppConfig;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fw.util.CompanyConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.FileUtil;
import haitai.fw.util.MessageUtil;
import haitai.fw.util.StringUtil;
import haitai.fw.util.TimeUtil;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;

import org.apache.commons.fileupload.FileItem;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class HcmsResourceService {
	private IHcmsResourceDAO dao = null;
	public Map<Integer, String> channelMap = new HashMap<Integer, String>();
	private static FosLogger logger = new FosLogger(HcmsResourceService.class);
	private int smallImageSize = 160;

	@Transactional
	public List<HcmsResource> save(List<HcmsResource> entityList) {
		List<HcmsResource> retList = new ArrayList<HcmsResource>();
		for (HcmsResource entity : entityList) {
			if (ConstUtil.ROW_N.equalsIgnoreCase(entity.getRowAction())) {
				entity.setNo(null);
				dao.save(entity);
				if (ConstUtil.CMS_TYPE_ARTICLE.equals(entity.getType())) {
					entity.setUrl(getCmsHtmlDir() + entity.getPno()
							+ ConstUtil.DIR_SEP + entity.getNo() + ".html");
					entity.setPurl(getCmsHtmlDir() + entity.getPno()
							+ ConstUtil.DIR_SEP +  "index.html");
					entity = dao.update(entity);
				} else if (ConstUtil.CMS_TYPE_CATEGORY.equals(entity.getType())) {
					entity.setUrl(getCmsHtmlDir() + entity.getNo()
							+ ConstUtil.DIR_SEP + "index.html");
					entity.setPurl(getCmsHtmlDir() + entity.getPno()
							+ ConstUtil.DIR_SEP + "index.html");
					entity.setLurl(getCmsHtmlDir() + entity.getNo()
							+ ConstUtil.DIR_SEP + "list_1.html");
					entity = dao.update(entity);
				}
				retList.add(entity);
			} else if (ConstUtil.ROW_M.equalsIgnoreCase(entity.getRowAction())) {
				retList.add(dao.update(entity));
			} else if (ConstUtil.ROW_R.equalsIgnoreCase(entity.getRowAction())) {
				HcmsResource delEntity = dao.findById(entity.getNo());
				delEntity.setRowAction(ConstUtil.ROW_R);
				if (ConstUtil.CMS_TYPE_CATEGORY.equals(delEntity.getType())
						|| ConstUtil.CMS_TYPE_DIRECTORY.equals(delEntity
								.getType())) {
					// 删除分类或者目录, 要把下面的子类也一起删除
					List<HcmsResource> childList = dao.complexQueryByPid(entity
							.getNo());
					for (HcmsResource item : childList) {
						item.setRowAction(ConstUtil.ROW_R);
						dao.update(item);
					}
				}
				dao.update(delEntity);
			} else {
				throw new BusinessException(
						MessageUtil.FW_ERROR_ROW_ACTION_NULL);
			}
		}
		return retList;
	}

	@Transactional(readOnly = true)
	public List<HcmsResource> query(Map<String, Object> queryMap) {
		return dao.findByProperties(queryMap);
	}

	@Transactional
	public List<HcmsResource> upload(Map<String, Object> queryMap) {
		List<HcmsResource> retList = new ArrayList<HcmsResource>();
		String strNo = (String) queryMap.get("no");
		String strPno = (String) queryMap.get("pno");
		String pnos = (String) queryMap.get("pnos");
		String pname = (String) queryMap.get("pname");
		String type = (String) queryMap.get("type");
		String rowAction = (String) queryMap.get("rowAction");
		List<FileItem> items = SessionManager.getFileItems();
		if (items != null) {
			for (FileItem item : items) {
				boolean isImage = item.getContentType().toLowerCase().contains(
						"image");

				String dir = ConfigUtil.getRealCmsResourceDir();
				File fdir = new File(dir);
				if (!fdir.exists())
					fdir.mkdirs();

				String fileName = item.getName();
				if (StringUtil.contains(fileName, "/")) {
					fileName = fileName
							.substring(fileName.lastIndexOf("/") + 1);
				} else {
					fileName = fileName
							.substring(fileName.lastIndexOf("\\") + 1);
				}
				String extName = fileName
						.substring(fileName.lastIndexOf(".") + 1);
				fileName = fileName.substring(0, fileName.lastIndexOf("."));

				File f = new File(dir + ConstUtil.DIR_SEP
						+ TimeUtil.getMillis());
				int width = 0;
				int height = 0;
				try {
					item.write(f);
					if (isImage) {
						BufferedImage Bi = ImageIO.read(f);
						width = Bi.getWidth();
						height = Bi.getHeight();
					}
				} catch (Exception e) {
					throw new BusinessException("file write error", e);
				}
				HcmsResource file = null;
				// 新增
				if (ConstUtil.ROW_N.equals(rowAction)) {
					file = new HcmsResource();
					file.setName(fileName);
					file.setType(type);
					file.setPno(Integer.parseInt(strPno));
					file.setPnos(pnos);
					file.setPname(pname);
					file.setPath(ConfigUtil.getCmsResourceDir());
					file.setFiletype(isImage ? ConstUtil.TrueShort
							: ConstUtil.FalseShort);
					file.setExt(extName);
					file.setSize(new Double(Math
							.ceil(1.0 * item.getSize() / 1024)).intValue());
					file.setWidth(width);
					file.setHeight(height);
					file.setActive(ConstUtil.TrueShort);
					dao.save(file);
				} else if (ConstUtil.ROW_M.equals(rowAction)) {
					// 修改
					file = dao.findById(Integer.parseInt(strNo));
					file.setFiletype(isImage ? ConstUtil.TrueShort
							: ConstUtil.FalseShort);
					file.setExt(extName);
					file.setSize(new Double(Math
							.ceil(1.0 * item.getSize() / 1024)).intValue());
					file.setWidth(width);
					file.setHeight(height);
					file.setActive(ConstUtil.TrueShort);
					dao.update(file);
				}
				retList.add(file);
				saveImageAndIcon(f, file);
			}
		}
		return retList;
	}

	private void saveImageAndIcon(File f, HcmsResource file) {
		String dir = ConfigUtil.getRealCmsResourceDir();
		String bigF = dir + ConstUtil.DIR_SEP + file.getNo() + "."
				+ file.getExt();
		String smallF = dir + ConstUtil.DIR_SEP + "t_" + file.getNo()
				+ "." + file.getExt();
		File target = new File(bigF);
		if (target.exists())
			target.delete();
		f.renameTo(target);
		//生成小图
		ImageUtil.saveImageAsJpg(bigF, smallF, smallImageSize, smallImageSize, true);
	}
	
	@Transactional
	public List<HcmsResource> cutImage(Map<String, Object> queryMap) {
		List<HcmsResource> retList = new ArrayList<HcmsResource>();
		Integer no = Integer.parseInt((String) queryMap.get("no"));
		int x = Integer.parseInt((String) queryMap.get("x"));
		int y = Integer.parseInt((String) queryMap.get("y"));
		int width = Integer.parseInt((String) queryMap.get("width"));
		int height = Integer.parseInt((String) queryMap.get("height"));
		short replace = Short.parseShort((String) queryMap.get("replace"));
		logger.info(queryMap);
		String dir = ConfigUtil.getRealCmsResourceDir();
		
		HcmsResource src = dao.findById(no);
		String srcPath = dir + ConstUtil.DIR_SEP + src.getNo() + "."
				+ src.getExt();
		//GIF文件的剪切有bug, 所以都用PNG
		String destPath = dir + ConstUtil.DIR_SEP + TimeUtil.getMillis() + ".png";
		ImageUtil.saveSubImage(srcPath, destPath, x, y, width, height);
		File destFile = new File(destPath);
		//新增
		if (replace == ConstUtil.False) {
			HcmsResource dest = new HcmsResource();
			BeanUtils.copyProperties(src, dest);
			dest.setNo(null);
			dest.setName(dest.getName() + "-1");
			dest.setRowAction(ConstUtil.ROW_N);
			src = dest;
		}
		src.setSize(new Double(Math
				.ceil(1.0 * destFile.length() / 1024)).intValue());
		src.setWidth(width);
		src.setHeight(height);
		src.setActive(ConstUtil.TrueShort);
		if (replace == ConstUtil.False) {
			dao.save(src);
			src.setId("" + src.getNo());
		}else{
			src = dao.update(src);
		}
		//生成小图片
		saveImageAndIcon(destFile, src);
		retList.add(src);
		return retList;
	}

	@Transactional
	public HcmsResource publish(Map<String, String> queryMap) {
		HcmsResource resource = dao.findById(Integer.parseInt(queryMap
				.get("no")));
		// 判断是文章还是频道?
		if (ConstUtil.CMS_TYPE_ARTICLE.equals(resource.getType())) {
			resource = buildArticle(resource);
		} else {
			resource = buildChannel(resource);
		}
		return resource;
	}

	@Transactional
	private HcmsResource buildChannel(HcmsResource resource) {
		// 首页
		resource = buildChannelTop(resource);
		// 列表页
		String total = channelMap.get(resource.getNo());
		int iTotal = 0;
		try {
			iTotal = Integer.parseInt(total);
		} catch (NumberFormatException e) {
			iTotal = 0;
		}
		if (iTotal > 1) {
			for (int i = 1; i <= iTotal; i++) {
				resource = buildChannelList(resource, i);
			}
		}
		// 文章页
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("pno", resource.getNo());
		map.put("type", ConstUtil.CMS_TYPE_ARTICLE);
		List<HcmsResource> articles = dao.findByProperties(map);
		for (HcmsResource article : articles) {
			buildArticle(article);
		}
		// 循环子频道
		map.clear();
		map.put("pno", resource.getNo());
		map.put("type", ConstUtil.CMS_TYPE_CATEGORY);
		List<HcmsResource> channels = dao.findByProperties(map);
		for (HcmsResource channel : channels) {
			buildChannel(channel);
		}
		return resource;
	}

	@Transactional
	private HcmsResource buildChannelTop(HcmsResource resource) {
		String targetFileName = getDocRoot() + resource.getNo()
				+ ConstUtil.DIR_SEP;
		String strUrl = getPreviewUrl() + "&no=" + resource.getNo();
		targetFileName += "index.html";
		writeFile(targetFileName, strUrl);
		resource.setPublisher(SessionManager
				.getStringAttr(SessionKeyType.USERNAME));
		resource.setPublishtime(TimeUtil.getNow());
		resource = dao.update(resource);
		return resource;
	}

	@Transactional
	private HcmsResource buildChannelList(HcmsResource resource, int i) {
		String targetFileName = getDocRoot() + resource.getNo()
				+ ConstUtil.DIR_SEP;
		String strUrl = getPreviewUrl() + "&mode=list&no=" + resource.getNo();
		targetFileName += "list_" + i + ".html";
		strUrl += "&page=" + i;
		writeFile(targetFileName, strUrl);
		resource.setPublisher(SessionManager
				.getStringAttr(SessionKeyType.USERNAME));
		resource.setPublishtime(TimeUtil.getNow());
		resource = dao.update(resource);
		return resource;
	}

	@Transactional
	private HcmsResource buildArticle(HcmsResource resource) {
		String targetFileName = getDocRoot() + resource.getPno()
				+ ConstUtil.DIR_SEP + resource.getNo() + ".html";
		logger.debug(targetFileName);
		String strUrl = getPreviewUrl() + "&no=" + resource.getNo();
		writeFile(targetFileName, strUrl);
		resource.setPublisher(SessionManager
				.getStringAttr(SessionKeyType.USERNAME));
		resource.setPublishtime(TimeUtil.getNow());
		resource = dao.update(resource);
		return resource;
	}

	private void writeFile(String targetFileName, String strUrl) {
		URL url = null;
		URLConnection urlConn = null;
		File f = new File(targetFileName);
		FileUtil.createDirs(f.getParent());
		try {
			url = new URL(strUrl);
			urlConn = url.openConnection();
			urlConn.setDoInput(true);
			urlConn.setDoOutput(true);
			urlConn.setUseCaches(false);
			InputStream stream = urlConn.getInputStream();
			OutputStream bos = new FileOutputStream(targetFileName);
			int bytesRead = 0;
			byte[] buffer = new byte[8192];
			while ((bytesRead = stream.read(buffer, 0, 8192)) != -1) {
				bos.write(buffer, 0, bytesRead);
			}
			bos.close();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private String getPreviewUrl() {
		String previewUrl = "http://localhost:8080/hcms/preview?compCode="
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE);
		return previewUrl;
	}

	private String getDocRoot() {
		//站点的信息
		String docRoot = CompanyConfigUtil.getCompanyConfig("SITE_DOC_ROOT");
		if(!docRoot.endsWith("/")){
			docRoot += "/";
		}
		return docRoot;
	}

	public String getCmsHtmlDir() {
		return AppConfig.getConfig(ConstUtil.CONFIG_CMS_DATA_DIR)
				+ ConstUtil.DIR_SEP
				+ SessionManager.getStringAttr(SessionKeyType.COMPCODE)
				+ ConstUtil.DIR_SEP;
	}

	public IHcmsResourceDAO getDao() {
		return dao;
	}

	@Autowired
	public void setDao(IHcmsResourceDAO dao) {
		this.dao = dao;
	}
}
