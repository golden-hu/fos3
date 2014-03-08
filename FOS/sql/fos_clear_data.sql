delete from G_PORT WHERE COMP_CODE IN ('JR','CNWL','YTSH','SJW','QDLT','EST','QQLY','3213',
	'TCXY','NEW','htcs','cjtc','SXDH','shhf','SHFC','JTWL','OPL','MTX','aue','SZCM','HAIR','CDFY','2900','GTO','zjhy','SZRS','5345','JXGS');

UPDATE G_PORT SET REMOVED=1 WHERE COMP_CODE NOT IN ('JR','CNWL','YTSH','SJW','QDLT','EST','QQLY','3213',
'TCXY','NEW','htcs','cjtc','SXDH','shhf','SHFC','JTWL','OPL','MTX','aue','SZCM','HAIR','CDFY','2900','GTO','zjhy','SZRS','5345','JXGS');


