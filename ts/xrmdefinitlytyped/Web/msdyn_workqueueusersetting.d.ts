interface msdyn_workqueueusersetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_actiononmarkcomplete?: msdyn_workqueueusersetting_actiononmarkcomplete | null;
  msdyn_actiononskip?: msdyn_workqueueusersetting_actiononskip | null;
  msdyn_linkingconfiguration?: string | null;
  msdyn_name?: string | null;
  msdyn_workqueueusersettingid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_workqueueusersetting_statecode | null;
  statuscode?: msdyn_workqueueusersetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_workqueueusersetting_Relationships {
  msdyn_workqueueusersetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_workqueueusersetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_workqueueusersetting_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_workqueueusersetting_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_workqueueusersetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_workqueueusersetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_workqueueusersetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_workqueueusersetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_workqueueusersetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_workqueueusersetting extends msdyn_workqueueusersetting_Base, msdyn_workqueueusersetting_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_workqueueusersetting_Create extends msdyn_workqueueusersetting {
}
interface msdyn_workqueueusersetting_Update extends msdyn_workqueueusersetting {
}
interface msdyn_workqueueusersetting_Select {
  createdby_guid: WebAttribute<msdyn_workqueueusersetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_workqueueusersetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_workqueueusersetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_workqueueusersetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_workqueueusersetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_workqueueusersetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_workqueueusersetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actiononmarkcomplete: WebAttribute<msdyn_workqueueusersetting_Select, { msdyn_actiononmarkcomplete: msdyn_workqueueusersetting_actiononmarkcomplete | null }, { msdyn_actiononmarkcomplete_formatted?: string }>;
  msdyn_actiononskip: WebAttribute<msdyn_workqueueusersetting_Select, { msdyn_actiononskip: msdyn_workqueueusersetting_actiononskip | null }, { msdyn_actiononskip_formatted?: string }>;
  msdyn_linkingconfiguration: WebAttribute<msdyn_workqueueusersetting_Select, { msdyn_linkingconfiguration: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_workqueueusersetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_workqueueusersettingid: WebAttribute<msdyn_workqueueusersetting_Select, { msdyn_workqueueusersettingid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_workqueueusersetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_workqueueusersetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_workqueueusersetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_workqueueusersetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_workqueueusersetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_workqueueusersetting_Select, { statecode: msdyn_workqueueusersetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_workqueueusersetting_Select, { statuscode: msdyn_workqueueusersetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_workqueueusersetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_workqueueusersetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_workqueueusersetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_workqueueusersetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_actiononmarkcomplete: msdyn_workqueueusersetting_actiononmarkcomplete;
  msdyn_actiononskip: msdyn_workqueueusersetting_actiononskip;
  msdyn_linkingconfiguration: string;
  msdyn_name: string;
  msdyn_workqueueusersettingid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_workqueueusersetting_statecode;
  statuscode: msdyn_workqueueusersetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_workqueueusersetting_Expand {
  createdby: WebExpand<msdyn_workqueueusersetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_workqueueusersetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_workqueueusersetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_workqueueusersetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_workqueueusersetting_AsyncOperations: WebExpand<msdyn_workqueueusersetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_workqueueusersetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_workqueueusersetting_BulkDeleteFailures: WebExpand<msdyn_workqueueusersetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_workqueueusersetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_workqueueusersetting_DuplicateBaseRecord: WebExpand<msdyn_workqueueusersetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workqueueusersetting_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_workqueueusersetting_DuplicateMatchingRecord: WebExpand<msdyn_workqueueusersetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workqueueusersetting_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_workqueueusersetting_MailboxTrackingFolders: WebExpand<msdyn_workqueueusersetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_workqueueusersetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_workqueueusersetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_workqueueusersetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_workqueueusersetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_workqueueusersetting_ProcessSession: WebExpand<msdyn_workqueueusersetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_workqueueusersetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_workqueueusersetting_SyncErrors: WebExpand<msdyn_workqueueusersetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_workqueueusersetting_SyncErrors: SyncError_Result[] }>;
  msdyn_workqueueusersetting_UserEntityInstanceDatas: WebExpand<msdyn_workqueueusersetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_workqueueusersetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_workqueueusersetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_workqueueusersetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_workqueueusersetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_workqueueusersetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_workqueueusersetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_actiononmarkcomplete_formatted?: string;
  msdyn_actiononskip_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_workqueueusersetting_Result extends msdyn_workqueueusersetting_Base, msdyn_workqueueusersetting_Relationships {
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
interface msdyn_workqueueusersetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_workqueueusersetting_RelatedMany {
  msdyn_workqueueusersetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_workqueueusersetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_workqueueusersetting_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workqueueusersetting_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workqueueusersetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_workqueueusersetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_workqueueusersetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_workqueueusersetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_workqueueusersetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_workqueueusersettings: WebMappingRetrieve<msdyn_workqueueusersetting_Select,msdyn_workqueueusersetting_Expand,msdyn_workqueueusersetting_Filter,msdyn_workqueueusersetting_Fixed,msdyn_workqueueusersetting_Result,msdyn_workqueueusersetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_workqueueusersettings: WebMappingRelated<msdyn_workqueueusersetting_RelatedOne,msdyn_workqueueusersetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_workqueueusersettings: WebMappingCUDA<msdyn_workqueueusersetting_Create,msdyn_workqueueusersetting_Update,msdyn_workqueueusersetting_Select>;
}
