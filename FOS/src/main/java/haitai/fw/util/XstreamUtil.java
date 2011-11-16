package haitai.fw.util;

import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.json.JettisonMappedXmlDriver;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.Map;

@Component
public class XstreamUtil implements InitializingBean {
	private static XStream xstreamXML;
	private static XStream xstreamJSON;

	@Override
	public void afterPropertiesSet() throws Exception {
		xstreamXML = new XStream();
		xstreamJSON = new XStream(new JettisonMappedXmlDriver());
		xstreamJSON.setMode(XStream.NO_REFERENCES);
		alias(xstreamXML);
		alias(xstreamJSON);
		xstreamXML.registerConverter(new FosDateConverter());
		xstreamXML.registerConverter(new FosTimeConverter());
		xstreamXML.registerConverter(new DoubleConverter());
		xstreamJSON.registerConverter(new FosDateConverter());
		xstreamJSON.registerConverter(new FosTimeConverter());
		xstreamJSON.registerConverter(new DoubleConverter());
		xstreamJSON.registerConverter(new RowActionConverter());
	}

	private void alias(XStream xstream) {
		JpaEntityMapper mapper = SpringContextHolder.getBean(JpaEntityMapper.class);
		Map<String, Class<?>> classMap = mapper.getMapper();
		for (String clazzName : classMap.keySet()) {
			xstream.alias(clazzName, classMap.get(clazzName));
		}
		xstream.alias("FosRequest", haitai.fw.entity.FosRequest.class);
		xstream.alias("FosResponse", haitai.fw.entity.FosResponse.class);
		xstream.alias("fosQuery", haitai.fw.entity.FosQuery.class);
		xstream.alias("date", java.sql.Date.class);
		xstream.alias("date", java.sql.Time.class);
		xstream.alias("date", java.sql.Timestamp.class);
		xstream.alias("rowAction", RowAction.class);
	}

	public static String entity2XML(Object srcObj) {
		return xstreamXML.toXML(srcObj);
	}

	public static Object XML2Entity(String xml) {
		return xstreamXML.fromXML(xml);
	}

	public static Object XML2Entity(InputStream in) {
		return xstreamXML.fromXML(in);
	}

	public static String entity2JSON(Object srcObj) {
		return xstreamJSON.toXML(srcObj);
	}

	public static Object JSON2Entity(String xml) {
		return xstreamJSON.fromXML(xml);
	}

	public static Object JSON2Entity(InputStream in) {
		return xstreamJSON.fromXML(in);
	}

}
