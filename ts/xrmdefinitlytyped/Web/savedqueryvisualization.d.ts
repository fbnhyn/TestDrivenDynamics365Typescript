interface SavedQueryVisualization_Base extends WebEntity {
  canbedeleted?: any | null;
  charttype?: savedqueryvisualization_charttype | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  datadescription?: string | null;
  description?: string | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  isdefault?: boolean | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  presentationdescription?: string | null;
  primaryentitytypecode?: string | null;
  savedqueryvisualizationid?: string | null;
  savedqueryvisualizationidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  type?: chart_usage | null;
  versionnumber?: number | null;
}
interface SavedQueryVisualization_Relationships {
  SavedQueryVisualization_SyncErrors?: SyncError_Result[] | null;
  userentityinstancedata_savedqueryvisualization?: UserEntityInstanceData_Result[] | null;
}
interface SavedQueryVisualization extends SavedQueryVisualization_Base, SavedQueryVisualization_Relationships {
}
interface SavedQueryVisualization_Create extends SavedQueryVisualization {
  webresourceid_bind$webresourceset?: string | null;
}
interface SavedQueryVisualization_Update extends SavedQueryVisualization {
}
interface SavedQueryVisualization_Select {
  canbedeleted: WebAttribute<SavedQueryVisualization_Select, { canbedeleted: any | null }, {  }>;
  charttype: WebAttribute<SavedQueryVisualization_Select, { charttype: savedqueryvisualization_charttype | null }, { charttype_formatted?: string }>;
  componentstate: WebAttribute<SavedQueryVisualization_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SavedQueryVisualization_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SavedQueryVisualization_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SavedQueryVisualization_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  datadescription: WebAttribute<SavedQueryVisualization_Select, { datadescription: string | null }, {  }>;
  description: WebAttribute<SavedQueryVisualization_Select, { description: string | null }, {  }>;
  introducedversion: WebAttribute<SavedQueryVisualization_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<SavedQueryVisualization_Select, { iscustomizable: any | null }, {  }>;
  isdefault: WebAttribute<SavedQueryVisualization_Select, { isdefault: boolean | null }, {  }>;
  ismanaged: WebAttribute<SavedQueryVisualization_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SavedQueryVisualization_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SavedQueryVisualization_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SavedQueryVisualization_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SavedQueryVisualization_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<SavedQueryVisualization_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SavedQueryVisualization_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  presentationdescription: WebAttribute<SavedQueryVisualization_Select, { presentationdescription: string | null }, {  }>;
  primaryentitytypecode: WebAttribute<SavedQueryVisualization_Select, { primaryentitytypecode: string | null }, {  }>;
  savedqueryvisualizationid: WebAttribute<SavedQueryVisualization_Select, { savedqueryvisualizationid: string | null }, {  }>;
  savedqueryvisualizationidunique: WebAttribute<SavedQueryVisualization_Select, { savedqueryvisualizationidunique: string | null }, {  }>;
  solutionid: WebAttribute<SavedQueryVisualization_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SavedQueryVisualization_Select, { supportingsolutionid: string | null }, {  }>;
  type: WebAttribute<SavedQueryVisualization_Select, { type: chart_usage | null }, { type_formatted?: string }>;
  versionnumber: WebAttribute<SavedQueryVisualization_Select, { versionnumber: number | null }, {  }>;
  webresourceid_guid: WebAttribute<SavedQueryVisualization_Select, { webresourceid_guid: string | null }, { webresourceid_formatted?: string }>;
}
interface SavedQueryVisualization_Filter {
  canbedeleted: any;
  charttype: savedqueryvisualization_charttype;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  datadescription: string;
  description: string;
  introducedversion: string;
  iscustomizable: any;
  isdefault: boolean;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  presentationdescription: string;
  primaryentitytypecode: string;
  savedqueryvisualizationid: XQW.Guid;
  savedqueryvisualizationidunique: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  type: chart_usage;
  versionnumber: number;
  webresourceid_guid: XQW.Guid;
}
interface SavedQueryVisualization_Expand {
  SavedQueryVisualization_SyncErrors: WebExpand<SavedQueryVisualization_Expand, SyncError_Select, SyncError_Filter, { SavedQueryVisualization_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<SavedQueryVisualization_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SavedQueryVisualization_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SavedQueryVisualization_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SavedQueryVisualization_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SavedQueryVisualization_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_savedqueryvisualization: WebExpand<SavedQueryVisualization_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_savedqueryvisualization: UserEntityInstanceData_Result[] }>;
  webresourceid: WebExpand<SavedQueryVisualization_Expand, WebResource_Select, WebResource_Filter, { webresourceid: WebResource_Result }>;
}
interface SavedQueryVisualization_FormattedResult {
  charttype_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  type_formatted?: string;
  webresourceid_formatted?: string;
}
interface SavedQueryVisualization_Result extends SavedQueryVisualization_Base, SavedQueryVisualization_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  webresourceid_guid: string | null;
}
interface SavedQueryVisualization_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  webresourceid: WebMappingRetrieve<WebResource_Select,WebResource_Expand,WebResource_Filter,WebResource_Fixed,WebResource_Result,WebResource_FormattedResult>;
}
interface SavedQueryVisualization_RelatedMany {
  SavedQueryVisualization_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_savedqueryvisualization: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  savedqueryvisualizations: WebMappingRetrieve<SavedQueryVisualization_Select,SavedQueryVisualization_Expand,SavedQueryVisualization_Filter,SavedQueryVisualization_Fixed,SavedQueryVisualization_Result,SavedQueryVisualization_FormattedResult>;
}
interface WebEntitiesRelated {
  savedqueryvisualizations: WebMappingRelated<SavedQueryVisualization_RelatedOne,SavedQueryVisualization_RelatedMany>;
}
interface WebEntitiesCUDA {
  savedqueryvisualizations: WebMappingCUDA<SavedQueryVisualization_Create,SavedQueryVisualization_Update,SavedQueryVisualization_Select>;
}
