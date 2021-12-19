interface UserQueryVisualization_Base extends WebEntity {
  charttype?: userqueryvisualization_charttype | null;
  createdon?: Date | null;
  datadescription?: string | null;
  description?: string | null;
  isdefault?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  presentationdescription?: string | null;
  primaryentitytypecode?: string | null;
  userqueryvisualizationid?: string | null;
  versionnumber?: number | null;
}
interface UserQueryVisualization_Relationships {
  UserQueryVisualization_SyncErrors?: SyncError_Result[] | null;
  userentityinstancedata_userqueryvisualization?: UserEntityInstanceData_Result[] | null;
}
interface UserQueryVisualization extends UserQueryVisualization_Base, UserQueryVisualization_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface UserQueryVisualization_Create extends UserQueryVisualization {
  webresourceid_bind$webresourceset?: string | null;
}
interface UserQueryVisualization_Update extends UserQueryVisualization {
}
interface UserQueryVisualization_Select {
  charttype: WebAttribute<UserQueryVisualization_Select, { charttype: userqueryvisualization_charttype | null }, { charttype_formatted?: string }>;
  createdby_guid: WebAttribute<UserQueryVisualization_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UserQueryVisualization_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UserQueryVisualization_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  datadescription: WebAttribute<UserQueryVisualization_Select, { datadescription: string | null }, {  }>;
  description: WebAttribute<UserQueryVisualization_Select, { description: string | null }, {  }>;
  isdefault: WebAttribute<UserQueryVisualization_Select, { isdefault: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<UserQueryVisualization_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UserQueryVisualization_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UserQueryVisualization_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<UserQueryVisualization_Select, { name: string | null }, {  }>;
  ownerid_guid: WebAttribute<UserQueryVisualization_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UserQueryVisualization_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UserQueryVisualization_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UserQueryVisualization_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  presentationdescription: WebAttribute<UserQueryVisualization_Select, { presentationdescription: string | null }, {  }>;
  primaryentitytypecode: WebAttribute<UserQueryVisualization_Select, { primaryentitytypecode: string | null }, {  }>;
  userqueryvisualizationid: WebAttribute<UserQueryVisualization_Select, { userqueryvisualizationid: string | null }, {  }>;
  versionnumber: WebAttribute<UserQueryVisualization_Select, { versionnumber: number | null }, {  }>;
  webresourceid_guid: WebAttribute<UserQueryVisualization_Select, { webresourceid_guid: string | null }, { webresourceid_formatted?: string }>;
}
interface UserQueryVisualization_Filter {
  charttype: userqueryvisualization_charttype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  datadescription: string;
  description: string;
  isdefault: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  presentationdescription: string;
  primaryentitytypecode: string;
  userqueryvisualizationid: XQW.Guid;
  versionnumber: number;
  webresourceid_guid: XQW.Guid;
}
interface UserQueryVisualization_Expand {
  UserQueryVisualization_SyncErrors: WebExpand<UserQueryVisualization_Expand, SyncError_Select, SyncError_Filter, { UserQueryVisualization_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<UserQueryVisualization_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UserQueryVisualization_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UserQueryVisualization_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UserQueryVisualization_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<UserQueryVisualization_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UserQueryVisualization_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<UserQueryVisualization_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<UserQueryVisualization_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  userentityinstancedata_userqueryvisualization: WebExpand<UserQueryVisualization_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_userqueryvisualization: UserEntityInstanceData_Result[] }>;
  webresourceid: WebExpand<UserQueryVisualization_Expand, WebResource_Select, WebResource_Filter, { webresourceid: WebResource_Result }>;
}
interface UserQueryVisualization_FormattedResult {
  charttype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  webresourceid_formatted?: string;
}
interface UserQueryVisualization_Result extends UserQueryVisualization_Base, UserQueryVisualization_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  webresourceid_guid: string | null;
}
interface UserQueryVisualization_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  webresourceid: WebMappingRetrieve<WebResource_Select,WebResource_Expand,WebResource_Filter,WebResource_Fixed,WebResource_Result,WebResource_FormattedResult>;
}
interface UserQueryVisualization_RelatedMany {
  UserQueryVisualization_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_userqueryvisualization: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  userqueryvisualizations: WebMappingRetrieve<UserQueryVisualization_Select,UserQueryVisualization_Expand,UserQueryVisualization_Filter,UserQueryVisualization_Fixed,UserQueryVisualization_Result,UserQueryVisualization_FormattedResult>;
}
interface WebEntitiesRelated {
  userqueryvisualizations: WebMappingRelated<UserQueryVisualization_RelatedOne,UserQueryVisualization_RelatedMany>;
}
interface WebEntitiesCUDA {
  userqueryvisualizations: WebMappingCUDA<UserQueryVisualization_Create,UserQueryVisualization_Update,UserQueryVisualization_Select>;
}
