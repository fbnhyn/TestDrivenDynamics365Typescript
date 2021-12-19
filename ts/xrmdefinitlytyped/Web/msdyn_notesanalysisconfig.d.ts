interface msdyn_notesanalysisconfig_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_aretermsaccepted?: boolean | null;
  msdyn_isadminsettingenabled?: boolean | null;
  msdyn_name?: string | null;
  msdyn_notesanalysisconfigid?: string | null;
  msdyn_throttlelimit?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_notesanalysisconfig_statecode | null;
  statuscode?: msdyn_notesanalysisconfig_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_notesanalysisconfig_Relationships {
  msdyn_notesanalysisconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_notesanalysisconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_notesanalysisconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_notesanalysisconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_notesanalysisconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_notesanalysisconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_notesanalysisconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_notesanalysisconfig extends msdyn_notesanalysisconfig_Base, msdyn_notesanalysisconfig_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_notesanalysisconfig_Create extends msdyn_notesanalysisconfig {
}
interface msdyn_notesanalysisconfig_Update extends msdyn_notesanalysisconfig {
}
interface msdyn_notesanalysisconfig_Select {
  createdby_guid: WebAttribute<msdyn_notesanalysisconfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_notesanalysisconfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_notesanalysisconfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_notesanalysisconfig_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_notesanalysisconfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_notesanalysisconfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_notesanalysisconfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aretermsaccepted: WebAttribute<msdyn_notesanalysisconfig_Select, { msdyn_aretermsaccepted: boolean | null }, {  }>;
  msdyn_isadminsettingenabled: WebAttribute<msdyn_notesanalysisconfig_Select, { msdyn_isadminsettingenabled: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_notesanalysisconfig_Select, { msdyn_name: string | null }, {  }>;
  msdyn_notesanalysisconfigid: WebAttribute<msdyn_notesanalysisconfig_Select, { msdyn_notesanalysisconfigid: string | null }, {  }>;
  msdyn_throttlelimit: WebAttribute<msdyn_notesanalysisconfig_Select, { msdyn_throttlelimit: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_notesanalysisconfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_notesanalysisconfig_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_notesanalysisconfig_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_notesanalysisconfig_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_notesanalysisconfig_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_notesanalysisconfig_Select, { statecode: msdyn_notesanalysisconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_notesanalysisconfig_Select, { statuscode: msdyn_notesanalysisconfig_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_notesanalysisconfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_notesanalysisconfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_notesanalysisconfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_notesanalysisconfig_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aretermsaccepted: boolean;
  msdyn_isadminsettingenabled: boolean;
  msdyn_name: string;
  msdyn_notesanalysisconfigid: XQW.Guid;
  msdyn_throttlelimit: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_notesanalysisconfig_statecode;
  statuscode: msdyn_notesanalysisconfig_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_notesanalysisconfig_Expand {
  createdby: WebExpand<msdyn_notesanalysisconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_notesanalysisconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_notesanalysisconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_notesanalysisconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_notesanalysisconfig_AsyncOperations: WebExpand<msdyn_notesanalysisconfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_notesanalysisconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_notesanalysisconfig_BulkDeleteFailures: WebExpand<msdyn_notesanalysisconfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_notesanalysisconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_notesanalysisconfig_MailboxTrackingFolders: WebExpand<msdyn_notesanalysisconfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_notesanalysisconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_notesanalysisconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_notesanalysisconfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_notesanalysisconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_notesanalysisconfig_ProcessSession: WebExpand<msdyn_notesanalysisconfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_notesanalysisconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_notesanalysisconfig_SyncErrors: WebExpand<msdyn_notesanalysisconfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_notesanalysisconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_notesanalysisconfig_UserEntityInstanceDatas: WebExpand<msdyn_notesanalysisconfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_notesanalysisconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_notesanalysisconfig_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_notesanalysisconfig_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_notesanalysisconfig_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_notesanalysisconfig_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_notesanalysisconfig_FormattedResult {
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
interface msdyn_notesanalysisconfig_Result extends msdyn_notesanalysisconfig_Base, msdyn_notesanalysisconfig_Relationships {
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
interface msdyn_notesanalysisconfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_notesanalysisconfig_RelatedMany {
  msdyn_notesanalysisconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_notesanalysisconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_notesanalysisconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_notesanalysisconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_notesanalysisconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_notesanalysisconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_notesanalysisconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_notesanalysisconfigs: WebMappingRetrieve<msdyn_notesanalysisconfig_Select,msdyn_notesanalysisconfig_Expand,msdyn_notesanalysisconfig_Filter,msdyn_notesanalysisconfig_Fixed,msdyn_notesanalysisconfig_Result,msdyn_notesanalysisconfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_notesanalysisconfigs: WebMappingRelated<msdyn_notesanalysisconfig_RelatedOne,msdyn_notesanalysisconfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_notesanalysisconfigs: WebMappingCUDA<msdyn_notesanalysisconfig_Create,msdyn_notesanalysisconfig_Update,msdyn_notesanalysisconfig_Select>;
}
