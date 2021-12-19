interface msdyn_solutioncomponentsummary_Base extends WebEntity {
  msdyn_canvasappuniqueid?: string | null;
  msdyn_componentlogicalname?: string | null;
  msdyn_componenttype?: number | null;
  msdyn_componenttypename?: string | null;
  msdyn_connectorinternalid?: string | null;
  msdyn_createdon?: string | null;
  msdyn_culture?: string | null;
  msdyn_deployment?: string | null;
  msdyn_description?: string | null;
  msdyn_displayname?: string | null;
  msdyn_eventhandler?: string | null;
  msdyn_executionorder?: string | null;
  msdyn_executionstage?: string | null;
  msdyn_fieldsecurity?: string | null;
  msdyn_fieldtype?: string | null;
  msdyn_isappaware?: string | null;
  msdyn_isappawarename?: string | null;
  msdyn_isauditenabled?: string | null;
  msdyn_isauditenabledname?: string | null;
  msdyn_iscustom?: string | null;
  msdyn_iscustomizable?: string | null;
  msdyn_iscustomizablename?: string | null;
  msdyn_iscustomname?: string | null;
  msdyn_isdefault?: string | null;
  msdyn_isdefaultname?: string | null;
  msdyn_ismanaged?: string | null;
  msdyn_ismanagedname?: string | null;
  msdyn_isolationmode?: string | null;
  msdyn_istableenabled?: string | null;
  msdyn_logicalcollectionname?: string | null;
  msdyn_modifiedon?: string | null;
  msdyn_name?: string | null;
  msdyn_objectid?: string | null;
  msdyn_objecttypecode?: string | null;
  msdyn_owner?: string | null;
  msdyn_owningbusinessunit?: string | null;
  msdyn_primaryentityname?: string | null;
  msdyn_primaryidattribute?: string | null;
  msdyn_publickeytoken?: string | null;
  msdyn_relatedentity?: string | null;
  msdyn_relatedentityattribute?: string | null;
  msdyn_schemaname?: string | null;
  msdyn_sdkmessagename?: string | null;
  msdyn_solutioncomponentsummaryid?: string | null;
  msdyn_solutionid?: string | null;
  msdyn_status?: string | null;
  msdyn_statusname?: string | null;
  msdyn_subtype?: string | null;
  msdyn_synctoexternalsearchindex?: string | null;
  msdyn_total?: number | null;
  msdyn_typename?: string | null;
  msdyn_uniquename?: string | null;
  msdyn_version?: string | null;
  msdyn_workflowcategory?: string | null;
  msdyn_workflowcategoryname?: string | null;
  msdyn_workflowidunique?: string | null;
  organizationid?: string | null;
}
interface msdyn_solutioncomponentsummary_Relationships {
}
interface msdyn_solutioncomponentsummary extends msdyn_solutioncomponentsummary_Base, msdyn_solutioncomponentsummary_Relationships {
}
interface msdyn_solutioncomponentsummary_Create extends msdyn_solutioncomponentsummary {
}
interface msdyn_solutioncomponentsummary_Update extends msdyn_solutioncomponentsummary {
}
interface msdyn_solutioncomponentsummary_Select {
  msdyn_canvasappuniqueid: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_canvasappuniqueid: string | null }, {  }>;
  msdyn_componentlogicalname: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_componentlogicalname: string | null }, {  }>;
  msdyn_componenttype: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_componenttype: number | null }, {  }>;
  msdyn_componenttypename: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_componenttypename: string | null }, {  }>;
  msdyn_connectorinternalid: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_connectorinternalid: string | null }, {  }>;
  msdyn_createdon: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_createdon: string | null }, {  }>;
  msdyn_culture: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_culture: string | null }, {  }>;
  msdyn_deployment: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_deployment: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_description: string | null }, {  }>;
  msdyn_displayname: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_displayname: string | null }, {  }>;
  msdyn_eventhandler: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_eventhandler: string | null }, {  }>;
  msdyn_executionorder: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_executionorder: string | null }, {  }>;
  msdyn_executionstage: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_executionstage: string | null }, {  }>;
  msdyn_fieldsecurity: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_fieldsecurity: string | null }, {  }>;
  msdyn_fieldtype: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_fieldtype: string | null }, {  }>;
  msdyn_isappaware: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_isappaware: string | null }, {  }>;
  msdyn_isappawarename: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_isappawarename: string | null }, {  }>;
  msdyn_isauditenabled: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_isauditenabled: string | null }, {  }>;
  msdyn_isauditenabledname: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_isauditenabledname: string | null }, {  }>;
  msdyn_iscustom: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_iscustom: string | null }, {  }>;
  msdyn_iscustomizable: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_iscustomizable: string | null }, {  }>;
  msdyn_iscustomizablename: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_iscustomizablename: string | null }, {  }>;
  msdyn_iscustomname: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_iscustomname: string | null }, {  }>;
  msdyn_isdefault: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_isdefault: string | null }, {  }>;
  msdyn_isdefaultname: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_isdefaultname: string | null }, {  }>;
  msdyn_ismanaged: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_ismanaged: string | null }, {  }>;
  msdyn_ismanagedname: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_ismanagedname: string | null }, {  }>;
  msdyn_isolationmode: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_isolationmode: string | null }, {  }>;
  msdyn_istableenabled: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_istableenabled: string | null }, {  }>;
  msdyn_logicalcollectionname: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_logicalcollectionname: string | null }, {  }>;
  msdyn_modifiedon: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_modifiedon: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_name: string | null }, {  }>;
  msdyn_objectid: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_objectid: string | null }, {  }>;
  msdyn_objecttypecode: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_objecttypecode: string | null }, {  }>;
  msdyn_owner: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_owner: string | null }, {  }>;
  msdyn_owningbusinessunit: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_owningbusinessunit: string | null }, {  }>;
  msdyn_primaryentityname: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_primaryentityname: string | null }, {  }>;
  msdyn_primaryidattribute: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_primaryidattribute: string | null }, {  }>;
  msdyn_publickeytoken: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_publickeytoken: string | null }, {  }>;
  msdyn_relatedentity: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_relatedentity: string | null }, {  }>;
  msdyn_relatedentityattribute: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_relatedentityattribute: string | null }, {  }>;
  msdyn_schemaname: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_schemaname: string | null }, {  }>;
  msdyn_sdkmessagename: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_sdkmessagename: string | null }, {  }>;
  msdyn_solutioncomponentsummaryid: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_solutioncomponentsummaryid: string | null }, {  }>;
  msdyn_solutionid: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_solutionid: string | null }, {  }>;
  msdyn_status: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_status: string | null }, {  }>;
  msdyn_statusname: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_statusname: string | null }, {  }>;
  msdyn_subtype: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_subtype: string | null }, {  }>;
  msdyn_synctoexternalsearchindex: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_synctoexternalsearchindex: string | null }, {  }>;
  msdyn_total: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_total: number | null }, {  }>;
  msdyn_typename: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_typename: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_uniquename: string | null }, {  }>;
  msdyn_version: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_version: string | null }, {  }>;
  msdyn_workflowcategory: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_workflowcategory: string | null }, {  }>;
  msdyn_workflowcategoryname: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_workflowcategoryname: string | null }, {  }>;
  msdyn_workflowidunique: WebAttribute<msdyn_solutioncomponentsummary_Select, { msdyn_workflowidunique: string | null }, {  }>;
  organizationid: WebAttribute<msdyn_solutioncomponentsummary_Select, { organizationid: string | null }, {  }>;
}
interface msdyn_solutioncomponentsummary_Filter {
  msdyn_canvasappuniqueid: string;
  msdyn_componentlogicalname: string;
  msdyn_componenttype: any;
  msdyn_componenttypename: string;
  msdyn_connectorinternalid: string;
  msdyn_createdon: string;
  msdyn_culture: string;
  msdyn_deployment: string;
  msdyn_description: string;
  msdyn_displayname: string;
  msdyn_eventhandler: string;
  msdyn_executionorder: string;
  msdyn_executionstage: string;
  msdyn_fieldsecurity: string;
  msdyn_fieldtype: string;
  msdyn_isappaware: string;
  msdyn_isappawarename: string;
  msdyn_isauditenabled: string;
  msdyn_isauditenabledname: string;
  msdyn_iscustom: string;
  msdyn_iscustomizable: string;
  msdyn_iscustomizablename: string;
  msdyn_iscustomname: string;
  msdyn_isdefault: string;
  msdyn_isdefaultname: string;
  msdyn_ismanaged: string;
  msdyn_ismanagedname: string;
  msdyn_isolationmode: string;
  msdyn_istableenabled: string;
  msdyn_logicalcollectionname: string;
  msdyn_modifiedon: string;
  msdyn_name: string;
  msdyn_objectid: string;
  msdyn_objecttypecode: string;
  msdyn_owner: string;
  msdyn_owningbusinessunit: string;
  msdyn_primaryentityname: string;
  msdyn_primaryidattribute: string;
  msdyn_publickeytoken: string;
  msdyn_relatedentity: string;
  msdyn_relatedentityattribute: string;
  msdyn_schemaname: string;
  msdyn_sdkmessagename: string;
  msdyn_solutioncomponentsummaryid: XQW.Guid;
  msdyn_solutionid: string;
  msdyn_status: string;
  msdyn_statusname: string;
  msdyn_subtype: string;
  msdyn_synctoexternalsearchindex: string;
  msdyn_total: any;
  msdyn_typename: string;
  msdyn_uniquename: string;
  msdyn_version: string;
  msdyn_workflowcategory: string;
  msdyn_workflowcategoryname: string;
  msdyn_workflowidunique: string;
  organizationid: XQW.Guid;
}
interface msdyn_solutioncomponentsummary_Expand {
}
interface msdyn_solutioncomponentsummary_FormattedResult {
}
interface msdyn_solutioncomponentsummary_Result extends msdyn_solutioncomponentsummary_Base, msdyn_solutioncomponentsummary_Relationships {
  "@odata.etag": string;
}
interface msdyn_solutioncomponentsummary_RelatedOne {
}
interface msdyn_solutioncomponentsummary_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_solutioncomponentsummaries: WebMappingRetrieve<msdyn_solutioncomponentsummary_Select,msdyn_solutioncomponentsummary_Expand,msdyn_solutioncomponentsummary_Filter,msdyn_solutioncomponentsummary_Fixed,msdyn_solutioncomponentsummary_Result,msdyn_solutioncomponentsummary_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_solutioncomponentsummaries: WebMappingRelated<msdyn_solutioncomponentsummary_RelatedOne,msdyn_solutioncomponentsummary_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_solutioncomponentsummaries: WebMappingCUDA<msdyn_solutioncomponentsummary_Create,msdyn_solutioncomponentsummary_Update,msdyn_solutioncomponentsummary_Select>;
}
