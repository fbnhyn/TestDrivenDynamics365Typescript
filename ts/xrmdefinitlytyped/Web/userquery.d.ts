interface UserQuery_Base extends WebEntity {
  advancedgroupby?: string | null;
  columnsetxml?: string | null;
  conditionalformatting?: string | null;
  createdon?: Date | null;
  description?: string | null;
  fetchxml?: string | null;
  layoutjson?: string | null;
  layoutxml?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  offlinesqlquery?: string | null;
  querytype?: number | null;
  returnedtypecode?: string | null;
  statecode?: userquery_statecode | null;
  statuscode?: userquery_statuscode | null;
  userqueryid?: string | null;
  versionnumber?: number | null;
}
interface UserQuery_Relationships {
  UserQuery_AsyncOperations?: AsyncOperation_Result[] | null;
  UserQuery_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  UserQuery_SyncErrors?: SyncError_Result[] | null;
  userentityinstancedata_userquery?: UserEntityInstanceData_Result[] | null;
}
interface UserQuery extends UserQuery_Base, UserQuery_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface UserQuery_Create extends UserQuery {
}
interface UserQuery_Update extends UserQuery {
}
interface UserQuery_Select {
  advancedgroupby: WebAttribute<UserQuery_Select, { advancedgroupby: string | null }, {  }>;
  columnsetxml: WebAttribute<UserQuery_Select, { columnsetxml: string | null }, {  }>;
  conditionalformatting: WebAttribute<UserQuery_Select, { conditionalformatting: string | null }, {  }>;
  createdby_guid: WebAttribute<UserQuery_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UserQuery_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UserQuery_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<UserQuery_Select, { description: string | null }, {  }>;
  fetchxml: WebAttribute<UserQuery_Select, { fetchxml: string | null }, {  }>;
  layoutjson: WebAttribute<UserQuery_Select, { layoutjson: string | null }, {  }>;
  layoutxml: WebAttribute<UserQuery_Select, { layoutxml: string | null }, {  }>;
  modifiedby_guid: WebAttribute<UserQuery_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UserQuery_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UserQuery_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<UserQuery_Select, { name: string | null }, {  }>;
  offlinesqlquery: WebAttribute<UserQuery_Select, { offlinesqlquery: string | null }, {  }>;
  ownerid_guid: WebAttribute<UserQuery_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UserQuery_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UserQuery_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UserQuery_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentqueryid_guid: WebAttribute<UserQuery_Select, { parentqueryid_guid: string | null }, { parentqueryid_formatted?: string }>;
  querytype: WebAttribute<UserQuery_Select, { querytype: number | null }, {  }>;
  returnedtypecode: WebAttribute<UserQuery_Select, { returnedtypecode: string | null }, {  }>;
  statecode: WebAttribute<UserQuery_Select, { statecode: userquery_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<UserQuery_Select, { statuscode: userquery_statuscode | null }, { statuscode_formatted?: string }>;
  userqueryid: WebAttribute<UserQuery_Select, { userqueryid: string | null }, {  }>;
  versionnumber: WebAttribute<UserQuery_Select, { versionnumber: number | null }, {  }>;
}
interface UserQuery_Filter {
  advancedgroupby: string;
  columnsetxml: string;
  conditionalformatting: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  fetchxml: string;
  layoutjson: string;
  layoutxml: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  offlinesqlquery: string;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentqueryid_guid: XQW.Guid;
  querytype: number;
  returnedtypecode: string;
  statecode: userquery_statecode;
  statuscode: userquery_statuscode;
  userqueryid: XQW.Guid;
  versionnumber: number;
}
interface UserQuery_Expand {
  UserQuery_AsyncOperations: WebExpand<UserQuery_Expand, AsyncOperation_Select, AsyncOperation_Filter, { UserQuery_AsyncOperations: AsyncOperation_Result[] }>;
  UserQuery_BulkDeleteFailures: WebExpand<UserQuery_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { UserQuery_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  UserQuery_SyncErrors: WebExpand<UserQuery_Expand, SyncError_Select, SyncError_Filter, { UserQuery_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<UserQuery_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UserQuery_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UserQuery_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UserQuery_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<UserQuery_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UserQuery_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<UserQuery_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<UserQuery_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  userentityinstancedata_userquery: WebExpand<UserQuery_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_userquery: UserEntityInstanceData_Result[] }>;
}
interface UserQuery_FormattedResult {
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
  parentqueryid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface UserQuery_Result extends UserQuery_Base, UserQuery_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentqueryid_guid: string | null;
}
interface UserQuery_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface UserQuery_RelatedMany {
  UserQuery_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  UserQuery_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  UserQuery_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_userquery: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  userqueries: WebMappingRetrieve<UserQuery_Select,UserQuery_Expand,UserQuery_Filter,UserQuery_Fixed,UserQuery_Result,UserQuery_FormattedResult>;
}
interface WebEntitiesRelated {
  userqueries: WebMappingRelated<UserQuery_RelatedOne,UserQuery_RelatedMany>;
}
interface WebEntitiesCUDA {
  userqueries: WebMappingCUDA<UserQuery_Create,UserQuery_Update,UserQuery_Select>;
}
