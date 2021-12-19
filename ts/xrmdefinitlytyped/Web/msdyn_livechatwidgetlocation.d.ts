interface msdyn_livechatwidgetlocation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_domainvalue?: string | null;
  msdyn_livechatwidgetlocationid?: string | null;
  msdyn_locationurlwildcard?: string | null;
  msdyn_name?: string | null;
  msdyn_ruletype?: msdyn_includeexclude | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_livechatwidgetlocation_statecode | null;
  statuscode?: msdyn_livechatwidgetlocation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_livechatwidgetlocation_Relationships {
  msdyn_livechatwidgetlocation_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_livechatwidgetlocation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_livechatwidgetlocation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_livechatwidgetlocation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_livechatwidgetlocation_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_livechatwidgetlocation_SyncErrors?: SyncError_Result[] | null;
  msdyn_livechatwidgetlocation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_livechatwidgetlocation extends msdyn_livechatwidgetlocation_Base, msdyn_livechatwidgetlocation_Relationships {
  msdyn_livechatconfigid_bind$msdyn_livechatconfigs?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_livechatwidgetlocation_Create extends msdyn_livechatwidgetlocation {
}
interface msdyn_livechatwidgetlocation_Update extends msdyn_livechatwidgetlocation {
}
interface msdyn_livechatwidgetlocation_Select {
  createdby_guid: WebAttribute<msdyn_livechatwidgetlocation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_livechatwidgetlocation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_livechatwidgetlocation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_livechatwidgetlocation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_livechatwidgetlocation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_livechatwidgetlocation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_livechatwidgetlocation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_domainvalue: WebAttribute<msdyn_livechatwidgetlocation_Select, { msdyn_domainvalue: string | null }, {  }>;
  msdyn_livechatconfigid_guid: WebAttribute<msdyn_livechatwidgetlocation_Select, { msdyn_livechatconfigid_guid: string | null }, { msdyn_livechatconfigid_formatted?: string }>;
  msdyn_livechatwidgetlocationid: WebAttribute<msdyn_livechatwidgetlocation_Select, { msdyn_livechatwidgetlocationid: string | null }, {  }>;
  msdyn_locationurlwildcard: WebAttribute<msdyn_livechatwidgetlocation_Select, { msdyn_locationurlwildcard: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_livechatwidgetlocation_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ruletype: WebAttribute<msdyn_livechatwidgetlocation_Select, { msdyn_ruletype: msdyn_includeexclude | null }, { msdyn_ruletype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_livechatwidgetlocation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_livechatwidgetlocation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_livechatwidgetlocation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_livechatwidgetlocation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_livechatwidgetlocation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_livechatwidgetlocation_Select, { statecode: msdyn_livechatwidgetlocation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_livechatwidgetlocation_Select, { statuscode: msdyn_livechatwidgetlocation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_livechatwidgetlocation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_livechatwidgetlocation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_livechatwidgetlocation_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_livechatwidgetlocation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_domainvalue: string;
  msdyn_livechatconfigid_guid: XQW.Guid;
  msdyn_livechatwidgetlocationid: XQW.Guid;
  msdyn_locationurlwildcard: string;
  msdyn_name: string;
  msdyn_ruletype: msdyn_includeexclude;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_livechatwidgetlocation_statecode;
  statuscode: msdyn_livechatwidgetlocation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_livechatwidgetlocation_Expand {
  createdby: WebExpand<msdyn_livechatwidgetlocation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_livechatwidgetlocation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_livechatwidgetlocation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_livechatwidgetlocation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_livechatconfigid: WebExpand<msdyn_livechatwidgetlocation_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_livechatconfigid: msdyn_livechatconfig_Result }>;
  msdyn_livechatwidgetlocation_AsyncOperations: WebExpand<msdyn_livechatwidgetlocation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_livechatwidgetlocation_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_livechatwidgetlocation_BulkDeleteFailures: WebExpand<msdyn_livechatwidgetlocation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_livechatwidgetlocation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_livechatwidgetlocation_MailboxTrackingFolders: WebExpand<msdyn_livechatwidgetlocation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_livechatwidgetlocation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_livechatwidgetlocation_PrincipalObjectAttributeAccesses: WebExpand<msdyn_livechatwidgetlocation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_livechatwidgetlocation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_livechatwidgetlocation_ProcessSession: WebExpand<msdyn_livechatwidgetlocation_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_livechatwidgetlocation_ProcessSession: ProcessSession_Result[] }>;
  msdyn_livechatwidgetlocation_SyncErrors: WebExpand<msdyn_livechatwidgetlocation_Expand, SyncError_Select, SyncError_Filter, { msdyn_livechatwidgetlocation_SyncErrors: SyncError_Result[] }>;
  msdyn_livechatwidgetlocation_UserEntityInstanceDatas: WebExpand<msdyn_livechatwidgetlocation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_livechatwidgetlocation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_livechatwidgetlocation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_livechatwidgetlocation_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_livechatwidgetlocation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_livechatwidgetlocation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_livechatwidgetlocation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_livechatconfigid_formatted?: string;
  msdyn_ruletype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_livechatwidgetlocation_Result extends msdyn_livechatwidgetlocation_Base, msdyn_livechatwidgetlocation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_livechatconfigid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_livechatwidgetlocation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_livechatconfigid: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_livechatwidgetlocation_RelatedMany {
  msdyn_livechatwidgetlocation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_livechatwidgetlocation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_livechatwidgetlocation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_livechatwidgetlocation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_livechatwidgetlocation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_livechatwidgetlocation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_livechatwidgetlocation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_livechatwidgetlocations: WebMappingRetrieve<msdyn_livechatwidgetlocation_Select,msdyn_livechatwidgetlocation_Expand,msdyn_livechatwidgetlocation_Filter,msdyn_livechatwidgetlocation_Fixed,msdyn_livechatwidgetlocation_Result,msdyn_livechatwidgetlocation_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_livechatwidgetlocations: WebMappingRelated<msdyn_livechatwidgetlocation_RelatedOne,msdyn_livechatwidgetlocation_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_livechatwidgetlocations: WebMappingCUDA<msdyn_livechatwidgetlocation_Create,msdyn_livechatwidgetlocation_Update,msdyn_livechatwidgetlocation_Select>;
}
