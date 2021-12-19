interface msdyn_kalanguagesetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_agentid?: string | null;
  msdyn_kalanguagesettingid?: string | null;
  msdyn_languagelocaleid?: string | null;
  msdyn_name?: string | null;
  msdyn_useOrgUILanguage?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_kalanguagesetting_statecode | null;
  statuscode?: msdyn_kalanguagesetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_kalanguagesetting_Relationships {
  msdyn_kalanguagesetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_kalanguagesetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_kalanguagesetting_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_kalanguagesetting_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_kalanguagesetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_kalanguagesetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_kalanguagesetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_kalanguagesetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_kalanguagesetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_kalanguagesetting extends msdyn_kalanguagesetting_Base, msdyn_kalanguagesetting_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_kalanguagesetting_Create extends msdyn_kalanguagesetting {
}
interface msdyn_kalanguagesetting_Update extends msdyn_kalanguagesetting {
}
interface msdyn_kalanguagesetting_Select {
  createdby_guid: WebAttribute<msdyn_kalanguagesetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_kalanguagesetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_kalanguagesetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_kalanguagesetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_kalanguagesetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_kalanguagesetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_kalanguagesetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_agentid: WebAttribute<msdyn_kalanguagesetting_Select, { msdyn_agentid: string | null }, {  }>;
  msdyn_kalanguagesettingid: WebAttribute<msdyn_kalanguagesetting_Select, { msdyn_kalanguagesettingid: string | null }, {  }>;
  msdyn_languagelocaleid: WebAttribute<msdyn_kalanguagesetting_Select, { msdyn_languagelocaleid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_kalanguagesetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_useOrgUILanguage: WebAttribute<msdyn_kalanguagesetting_Select, { msdyn_useOrgUILanguage: boolean | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_kalanguagesetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_kalanguagesetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_kalanguagesetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_kalanguagesetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_kalanguagesetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_kalanguagesetting_Select, { statecode: msdyn_kalanguagesetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_kalanguagesetting_Select, { statuscode: msdyn_kalanguagesetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_kalanguagesetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_kalanguagesetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_kalanguagesetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_kalanguagesetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_agentid: string;
  msdyn_kalanguagesettingid: XQW.Guid;
  msdyn_languagelocaleid: string;
  msdyn_name: string;
  msdyn_useOrgUILanguage: boolean;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_kalanguagesetting_statecode;
  statuscode: msdyn_kalanguagesetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_kalanguagesetting_Expand {
  createdby: WebExpand<msdyn_kalanguagesetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_kalanguagesetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_kalanguagesetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_kalanguagesetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_kalanguagesetting_AsyncOperations: WebExpand<msdyn_kalanguagesetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_kalanguagesetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_kalanguagesetting_BulkDeleteFailures: WebExpand<msdyn_kalanguagesetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_kalanguagesetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_kalanguagesetting_DuplicateBaseRecord: WebExpand<msdyn_kalanguagesetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_kalanguagesetting_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_kalanguagesetting_DuplicateMatchingRecord: WebExpand<msdyn_kalanguagesetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_kalanguagesetting_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_kalanguagesetting_MailboxTrackingFolders: WebExpand<msdyn_kalanguagesetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_kalanguagesetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_kalanguagesetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_kalanguagesetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_kalanguagesetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_kalanguagesetting_ProcessSession: WebExpand<msdyn_kalanguagesetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_kalanguagesetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_kalanguagesetting_SyncErrors: WebExpand<msdyn_kalanguagesetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_kalanguagesetting_SyncErrors: SyncError_Result[] }>;
  msdyn_kalanguagesetting_UserEntityInstanceDatas: WebExpand<msdyn_kalanguagesetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_kalanguagesetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_kalanguagesetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_kalanguagesetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_kalanguagesetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_kalanguagesetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_kalanguagesetting_FormattedResult {
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
interface msdyn_kalanguagesetting_Result extends msdyn_kalanguagesetting_Base, msdyn_kalanguagesetting_Relationships {
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
interface msdyn_kalanguagesetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_kalanguagesetting_RelatedMany {
  msdyn_kalanguagesetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_kalanguagesetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_kalanguagesetting_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_kalanguagesetting_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_kalanguagesetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_kalanguagesetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_kalanguagesetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_kalanguagesetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_kalanguagesetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_kalanguagesettings: WebMappingRetrieve<msdyn_kalanguagesetting_Select,msdyn_kalanguagesetting_Expand,msdyn_kalanguagesetting_Filter,msdyn_kalanguagesetting_Fixed,msdyn_kalanguagesetting_Result,msdyn_kalanguagesetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_kalanguagesettings: WebMappingRelated<msdyn_kalanguagesetting_RelatedOne,msdyn_kalanguagesetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_kalanguagesettings: WebMappingCUDA<msdyn_kalanguagesetting_Create,msdyn_kalanguagesetting_Update,msdyn_kalanguagesetting_Select>;
}
