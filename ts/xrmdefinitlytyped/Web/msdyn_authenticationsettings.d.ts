interface msdyn_authenticationsettings_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_authenticationsettingsid?: string | null;
  msdyn_authenticationtype?: msdyn_authenticationsettings_msdyn_authenticationtype | null;
  msdyn_javascriptclientfunction?: string | null;
  msdyn_name?: string | null;
  msdyn_publickeyurl?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_authenticationsettings_statecode | null;
  statuscode?: msdyn_authenticationsettings_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_authenticationsettings_Relationships {
  msdyn_authenticationsettings_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_authenticationsettings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_authenticationsettings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_authenticationsettings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_authenticationsettings_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_authenticationsettings_SyncErrors?: SyncError_Result[] | null;
  msdyn_authenticationsettings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_authsettings_msdyn_livechatconfig?: msdyn_livechatconfig_Result[] | null;
}
interface msdyn_authenticationsettings extends msdyn_authenticationsettings_Base, msdyn_authenticationsettings_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_authenticationsettings_Create extends msdyn_authenticationsettings {
}
interface msdyn_authenticationsettings_Update extends msdyn_authenticationsettings {
}
interface msdyn_authenticationsettings_Select {
  createdby_guid: WebAttribute<msdyn_authenticationsettings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_authenticationsettings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_authenticationsettings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_authenticationsettings_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_authenticationsettings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_authenticationsettings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_authenticationsettings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_authenticationsettingsid: WebAttribute<msdyn_authenticationsettings_Select, { msdyn_authenticationsettingsid: string | null }, {  }>;
  msdyn_authenticationtype: WebAttribute<msdyn_authenticationsettings_Select, { msdyn_authenticationtype: msdyn_authenticationsettings_msdyn_authenticationtype | null }, { msdyn_authenticationtype_formatted?: string }>;
  msdyn_javascriptclientfunction: WebAttribute<msdyn_authenticationsettings_Select, { msdyn_javascriptclientfunction: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_authenticationsettings_Select, { msdyn_name: string | null }, {  }>;
  msdyn_publickeyurl: WebAttribute<msdyn_authenticationsettings_Select, { msdyn_publickeyurl: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_authenticationsettings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_authenticationsettings_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_authenticationsettings_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_authenticationsettings_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_authenticationsettings_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_authenticationsettings_Select, { statecode: msdyn_authenticationsettings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_authenticationsettings_Select, { statuscode: msdyn_authenticationsettings_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_authenticationsettings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_authenticationsettings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_authenticationsettings_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_authenticationsettings_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_authenticationsettingsid: XQW.Guid;
  msdyn_authenticationtype: msdyn_authenticationsettings_msdyn_authenticationtype;
  msdyn_javascriptclientfunction: string;
  msdyn_name: string;
  msdyn_publickeyurl: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_authenticationsettings_statecode;
  statuscode: msdyn_authenticationsettings_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_authenticationsettings_Expand {
  createdby: WebExpand<msdyn_authenticationsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_authenticationsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_authenticationsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_authenticationsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_authenticationsettings_AsyncOperations: WebExpand<msdyn_authenticationsettings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_authenticationsettings_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_authenticationsettings_BulkDeleteFailures: WebExpand<msdyn_authenticationsettings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_authenticationsettings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_authenticationsettings_MailboxTrackingFolders: WebExpand<msdyn_authenticationsettings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_authenticationsettings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_authenticationsettings_PrincipalObjectAttributeAccesses: WebExpand<msdyn_authenticationsettings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_authenticationsettings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_authenticationsettings_ProcessSession: WebExpand<msdyn_authenticationsettings_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_authenticationsettings_ProcessSession: ProcessSession_Result[] }>;
  msdyn_authenticationsettings_SyncErrors: WebExpand<msdyn_authenticationsettings_Expand, SyncError_Select, SyncError_Filter, { msdyn_authenticationsettings_SyncErrors: SyncError_Result[] }>;
  msdyn_authenticationsettings_UserEntityInstanceDatas: WebExpand<msdyn_authenticationsettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_authenticationsettings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_authsettings_msdyn_livechatconfig: WebExpand<msdyn_authenticationsettings_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_msdyn_authsettings_msdyn_livechatconfig: msdyn_livechatconfig_Result[] }>;
  ownerid: WebExpand<msdyn_authenticationsettings_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_authenticationsettings_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_authenticationsettings_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_authenticationsettings_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_authenticationsettings_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_authenticationtype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_authenticationsettings_Result extends msdyn_authenticationsettings_Base, msdyn_authenticationsettings_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_authenticationsettings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_authenticationsettings_RelatedMany {
  msdyn_authenticationsettings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_authenticationsettings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_authenticationsettings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_authenticationsettings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_authenticationsettings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_authenticationsettings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_authenticationsettings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_authsettings_msdyn_livechatconfig: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_authenticationsettingses: WebMappingRetrieve<msdyn_authenticationsettings_Select,msdyn_authenticationsettings_Expand,msdyn_authenticationsettings_Filter,msdyn_authenticationsettings_Fixed,msdyn_authenticationsettings_Result,msdyn_authenticationsettings_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_authenticationsettingses: WebMappingRelated<msdyn_authenticationsettings_RelatedOne,msdyn_authenticationsettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_authenticationsettingses: WebMappingCUDA<msdyn_authenticationsettings_Create,msdyn_authenticationsettings_Update,msdyn_authenticationsettings_Select>;
}
