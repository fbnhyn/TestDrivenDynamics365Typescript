interface msdyn_msteamssetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_msteamssettingid?: string | null;
  msdyn_msteamssettingsid?: string | null;
  msdyn_msteamssettingsname?: string | null;
  msdyn_tabserviceurl?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_msteamssetting_statecode | null;
  statuscode?: msdyn_msteamssetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_msteamssetting_Relationships {
  msdyn_msteamssetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_msteamssetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_msteamssetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_msteamssetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_msteamssetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_msteamssetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_msteamssetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_msteamssetting extends msdyn_msteamssetting_Base, msdyn_msteamssetting_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_msteamssetting_Create extends msdyn_msteamssetting {
  createdby_bind$systemusers?: string | null;
}
interface msdyn_msteamssetting_Update extends msdyn_msteamssetting {
}
interface msdyn_msteamssetting_Select {
  createdby_guid: WebAttribute<msdyn_msteamssetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_msteamssetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_msteamssetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_msteamssetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_msteamssetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_msteamssetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_msteamssetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_msteamssettingid: WebAttribute<msdyn_msteamssetting_Select, { msdyn_msteamssettingid: string | null }, {  }>;
  msdyn_msteamssettingsid: WebAttribute<msdyn_msteamssetting_Select, { msdyn_msteamssettingsid: string | null }, {  }>;
  msdyn_msteamssettingsname: WebAttribute<msdyn_msteamssetting_Select, { msdyn_msteamssettingsname: string | null }, {  }>;
  msdyn_tabserviceurl: WebAttribute<msdyn_msteamssetting_Select, { msdyn_tabserviceurl: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_msteamssetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_msteamssetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_msteamssetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_msteamssetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_msteamssetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_msteamssetting_Select, { statecode: msdyn_msteamssetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_msteamssetting_Select, { statuscode: msdyn_msteamssetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_msteamssetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_msteamssetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msteamssetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msteamssetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_msteamssettingid: XQW.Guid;
  msdyn_msteamssettingsid: XQW.Guid;
  msdyn_msteamssettingsname: string;
  msdyn_tabserviceurl: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_msteamssetting_statecode;
  statuscode: msdyn_msteamssetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_msteamssetting_Expand {
  createdby: WebExpand<msdyn_msteamssetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_msteamssetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_msteamssetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_msteamssetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msteamssetting_AsyncOperations: WebExpand<msdyn_msteamssetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_msteamssetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_msteamssetting_BulkDeleteFailures: WebExpand<msdyn_msteamssetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_msteamssetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_msteamssetting_MailboxTrackingFolders: WebExpand<msdyn_msteamssetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_msteamssetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_msteamssetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_msteamssetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_msteamssetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_msteamssetting_ProcessSession: WebExpand<msdyn_msteamssetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_msteamssetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_msteamssetting_SyncErrors: WebExpand<msdyn_msteamssetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_msteamssetting_SyncErrors: SyncError_Result[] }>;
  msdyn_msteamssetting_UserEntityInstanceDatas: WebExpand<msdyn_msteamssetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_msteamssetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_msteamssetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_msteamssetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_msteamssetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_msteamssetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_msteamssetting_FormattedResult {
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
interface msdyn_msteamssetting_Result extends msdyn_msteamssetting_Base, msdyn_msteamssetting_Relationships {
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
interface msdyn_msteamssetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_msteamssetting_RelatedMany {
  msdyn_msteamssetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_msteamssetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_msteamssetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_msteamssetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_msteamssetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_msteamssetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_msteamssetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msteamssettings: WebMappingRetrieve<msdyn_msteamssetting_Select,msdyn_msteamssetting_Expand,msdyn_msteamssetting_Filter,msdyn_msteamssetting_Fixed,msdyn_msteamssetting_Result,msdyn_msteamssetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msteamssettings: WebMappingRelated<msdyn_msteamssetting_RelatedOne,msdyn_msteamssetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msteamssettings: WebMappingCUDA<msdyn_msteamssetting_Create,msdyn_msteamssetting_Update,msdyn_msteamssetting_Select>;
}
