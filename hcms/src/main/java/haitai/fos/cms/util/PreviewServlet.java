package haitai.fos.cms.util;

import haitai.fos.cms.entity.idao.IHcmsResourceDAO;
import haitai.fos.cms.entity.table.HcmsResource;
import haitai.fw.log.FosLogger;
import haitai.fw.session.SessionKeyType;
import haitai.fw.session.SessionManager;
import haitai.fos.cms.util.ConfigUtil;
import haitai.fw.util.ConstUtil;
import haitai.fw.util.SpringContextUtil;
import haitai.fw.util.StringUtil;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PreviewServlet extends HttpServlet {

	private static final long serialVersionUID = 340922543344781565L;
	private static final FosLogger logger = new FosLogger(PreviewServlet.class);

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		SessionManager.regSession(req.getSession());
		Integer no = null;
		no = Integer.parseInt(req.getParameter("no"));
		String compCode = req.getParameter("compCode");
		String mode = req.getParameter("mode");
		if (StringUtil.isNotBlank(compCode))
			SessionManager.setAttr(SessionKeyType.COMPCODE, compCode);

		IHcmsResourceDAO dao = SpringContextUtil.getBean("hcmsResourceDAO");
		HcmsResource resource = dao.findById(no);
		String uri = null;
		Integer tempId = null;
		//判断是文章还是频道?
		if (ConstUtil.CMS_TYPE_ARTICLE.equals(resource.getType())) {
			tempId = resource.getTempa();
			Integer pno = resource.getPno();
			HcmsResource channel = dao.findById(pno);
			if (tempId == null) {
				tempId = channel.getTempa();
			}
			req.setAttribute("article", resource);
			req.setAttribute("channel", channel);
		} else {
			tempId = resource.getTempc();
			// 列表页
			if ("list".equals(mode)) {
				tempId = resource.getTempl();
			}
			req.setAttribute("channel", resource);
		}
		if(tempId == null){
			resp.getWriter().print("template not found!");
			resp.flushBuffer();
			SessionManager.unregSession();
			return;
		}
		uri = ConstUtil.DIR_SEP + ConfigUtil.getCmsTemplateDir()
				+ ConstUtil.DIR_SEP + tempId + ConstUtil.STRING_DOT + "jsp";
		
		RequestDispatcher rd = getServletContext().getRequestDispatcher(uri);
		if (rd == null) {
			logger.error("rd RequestDispatcher is null");
			resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, uri);
			SessionManager.unregSession();
			return;
		}
		rd.forward(req, resp);
		SessionManager.unregSession();
	}

}
