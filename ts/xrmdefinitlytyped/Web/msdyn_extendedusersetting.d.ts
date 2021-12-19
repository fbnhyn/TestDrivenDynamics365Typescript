interface msdyn_extendedusersetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_calendarid?: string | null;
  msdyn_extendedusersettingid?: string | null;
  msdyn_name?: string | null;
  msdyn_userid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_extendedusersetting_statecode | null;
  statuscode?: msdyn_extendedusersetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_extendedusersetting_Relationships {
  msdyn_extendedusersetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_extendedusersetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_extendedusersetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_extendedusersetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_extendedusersetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_extendedusersetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_extendedusersetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_extendedusersetting extends msdyn_extendedusersetting_Base, msdyn_extendedusersetting_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_extendedusersetting_Create extends msdyn_extendedusersetting {
}
interface msdyn_extendedusersetting_Update extends msdyn_extendedusersetting {
}
interface msdyn_extendedusersetting_Select {
  createdby_guid: WebAttribute<msdyn_extendedusersetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_extendedusersetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_extendedusersetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_extendedusersetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_extendedusersetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_extendedusersetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_extendedusersetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_calendarid: WebAttribute<msdyn_extendedusersetting_Select, { msdyn_calendarid: string | null }, {  }>;
  msdyn_extendedusersettingid: WebAttribute<msdyn_extendedusersetting_Select, { msdyn_extendedusersettingid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_extendedusersetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_userid: WebAttribute<msdyn_extendedusersetting_Select, { msdyn_userid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_extendedusersetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_extendedusersetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_extendedusersetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_extendedusersetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_extendedusersetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_extendedusersetting_Select, { statecode: msdyn_extendedusersetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_extendedusersetting_Select, { statuscode: msdyn_extendedusersetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_extendedusersetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_extendedusersetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_extendedusersetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_extendedusersetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_calendarid: string;
  msdyn_extendedusersettingid: XQW.Guid;
  msdyn_name: string;
  msdyn_userid: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_extendedusersetting_statecode;
  statuscode: msdyn_extendedusersetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_extendedusersetting_Expand {
  createdby: WebExpand<msdyn_extendedusersetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_extendedusersetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_extendedusersetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_extendedusersetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_extendedusersetting_AsyncOperations: WebExpand<msdyn_extendedusersetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_extendedusersetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_extendedusersetting_BulkDeleteFailures: WebExpand<msdyn_extendedusersetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_extendedusersetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_extendedusersetting_MailboxTrackingFolders: WebExpand<msdyn_extendedusersetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_extendedusersetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_extendedusersetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_extendedusersetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_extendedusersetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_extendedusersetting_ProcessSession: WebExpand<msdyn_extendedusersetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_extendedusersetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_extendedusersetting_SyncErrors: WebExpand<msdyn_extendedusersetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_extendedusersetting_SyncErrors: SyncError_Result[] }>;
  msdyn_extendedusersetting_UserEntityInstanceDatas: WebExpand<msdyn_extendedusersetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_extendedusersetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_extendedusersetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_extendedusersetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_extendedusersetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_extendedusersetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_extendedusersetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_extendedusersetting_Result extends msdyn_extendedusersetting_Base, msdyn_extendedusersetting_Relationships {
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
interface msdyn_extendedusersetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_extendedusersetting_RelatedMany {
  msdyn_extendedusersetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_extendedusersetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_extendedusersetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_extendedusersetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_extendedusersetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_extendedusersetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_extendedusersetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_extendedusersettings: WebMappingRetrieve<msdyn_extendedusersetting_Select,msdyn_extendedusersetting_Expand,msdyn_extendedusersetting_Filter,msdyn_extendedusersetting_Fixed,msdyn_extendedusersetting_Result,msdyn_extendedusersetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_extendedusersettings: WebMappingRelated<msdyn_extendedusersetting_RelatedOne,msdyn_extendedusersetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_extendedusersettings: WebMappingCUDA<msdyn_extendedusersetting_Create,msdyn_extendedusersetting_Update,msdyn_extendedusersetting_Select>;
}
