interface msdyn_problematicassetfeedback_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_additionalfeedback?: string | null;
  msdyn_assetid?: string | null;
  msdyn_name?: string | null;
  msdyn_numberofdays?: msdyn_numberofdays | null;
  msdyn_otherfeedback?: msdyn_problematicassetfeedback_msdyn_otherfeedback | null;
  msdyn_problematicassetfeedback?: msdyn_problematicassetfeedback_msdyn_problematicassetfeedback | null;
  msdyn_problematicassetfeedbackid?: string | null;
  msdyn_problematicassetid?: string | null;
  msdyn_suggestion?: msdyn_problematicassetfeedback_msdyn_suggestion | null;
  msdyn_suggestionfeedback?: msdyn_problematicassetfeedback_msdyn_suggestionfeedback | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_problematicassetfeedback_statecode | null;
  statuscode?: msdyn_problematicassetfeedback_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_problematicassetfeedback_Relationships {
  msdyn_problematicassetfeedback_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_problematicassetfeedback_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_problematicassetfeedback_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_problematicassetfeedback_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_problematicassetfeedback_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_problematicassetfeedback_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_problematicassetfeedback_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_problematicassetfeedback_SyncErrors?: SyncError_Result[] | null;
  msdyn_problematicassetfeedback_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_problematicassetfeedback extends msdyn_problematicassetfeedback_Base, msdyn_problematicassetfeedback_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_problematicassetfeedback_Create extends msdyn_problematicassetfeedback {
}
interface msdyn_problematicassetfeedback_Update extends msdyn_problematicassetfeedback {
}
interface msdyn_problematicassetfeedback_Select {
  createdby_guid: WebAttribute<msdyn_problematicassetfeedback_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_problematicassetfeedback_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_problematicassetfeedback_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_problematicassetfeedback_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_problematicassetfeedback_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_problematicassetfeedback_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_problematicassetfeedback_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_additionalfeedback: WebAttribute<msdyn_problematicassetfeedback_Select, { msdyn_additionalfeedback: string | null }, {  }>;
  msdyn_assetid: WebAttribute<msdyn_problematicassetfeedback_Select, { msdyn_assetid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_problematicassetfeedback_Select, { msdyn_name: string | null }, {  }>;
  msdyn_numberofdays: WebAttribute<msdyn_problematicassetfeedback_Select, { msdyn_numberofdays: msdyn_numberofdays | null }, { msdyn_numberofdays_formatted?: string }>;
  msdyn_otherfeedback: WebAttribute<msdyn_problematicassetfeedback_Select, { msdyn_otherfeedback: msdyn_problematicassetfeedback_msdyn_otherfeedback | null }, { msdyn_otherfeedback_formatted?: string }>;
  msdyn_problematicassetfeedback1;
  msdyn_problematicassetfeedbackid: WebAttribute<msdyn_problematicassetfeedback_Select, { msdyn_problematicassetfeedbackid: string | null }, {  }>;
  msdyn_problematicassetid: WebAttribute<msdyn_problematicassetfeedback_Select, { msdyn_problematicassetid: string | null }, {  }>;
  msdyn_suggestion: WebAttribute<msdyn_problematicassetfeedback_Select, { msdyn_suggestion: msdyn_problematicassetfeedback_msdyn_suggestion | null }, { msdyn_suggestion_formatted?: string }>;
  msdyn_suggestionfeedback: WebAttribute<msdyn_problematicassetfeedback_Select, { msdyn_suggestionfeedback: msdyn_problematicassetfeedback_msdyn_suggestionfeedback | null }, { msdyn_suggestionfeedback_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_problematicassetfeedback_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_problematicassetfeedback_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_problematicassetfeedback_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_problematicassetfeedback_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_problematicassetfeedback_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_problematicassetfeedback_Select, { statecode: msdyn_problematicassetfeedback_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_problematicassetfeedback_Select, { statuscode: msdyn_problematicassetfeedback_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_problematicassetfeedback_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_problematicassetfeedback_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_problematicassetfeedback_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_problematicassetfeedback_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_additionalfeedback: string;
  msdyn_assetid: string;
  msdyn_name: string;
  msdyn_numberofdays: msdyn_numberofdays;
  msdyn_otherfeedback: msdyn_problematicassetfeedback_msdyn_otherfeedback;
  msdyn_problematicassetfeedback: msdyn_problematicassetfeedback_msdyn_problematicassetfeedback;
  msdyn_problematicassetfeedbackid: XQW.Guid;
  msdyn_problematicassetid: string;
  msdyn_suggestion: msdyn_problematicassetfeedback_msdyn_suggestion;
  msdyn_suggestionfeedback: msdyn_problematicassetfeedback_msdyn_suggestionfeedback;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_problematicassetfeedback_statecode;
  statuscode: msdyn_problematicassetfeedback_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_problematicassetfeedback_Expand {
  createdby: WebExpand<msdyn_problematicassetfeedback_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_problematicassetfeedback_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_problematicassetfeedback_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_problematicassetfeedback_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_problematicassetfeedback_AsyncOperations: WebExpand<msdyn_problematicassetfeedback_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_problematicassetfeedback_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_problematicassetfeedback_BulkDeleteFailures: WebExpand<msdyn_problematicassetfeedback_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_problematicassetfeedback_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_problematicassetfeedback_DuplicateBaseRecord: WebExpand<msdyn_problematicassetfeedback_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_problematicassetfeedback_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_problematicassetfeedback_DuplicateMatchingRecord: WebExpand<msdyn_problematicassetfeedback_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_problematicassetfeedback_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_problematicassetfeedback_MailboxTrackingFolders: WebExpand<msdyn_problematicassetfeedback_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_problematicassetfeedback_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_problematicassetfeedback_PrincipalObjectAttributeAccesses: WebExpand<msdyn_problematicassetfeedback_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_problematicassetfeedback_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_problematicassetfeedback_ProcessSession: WebExpand<msdyn_problematicassetfeedback_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_problematicassetfeedback_ProcessSession: ProcessSession_Result[] }>;
  msdyn_problematicassetfeedback_SyncErrors: WebExpand<msdyn_problematicassetfeedback_Expand, SyncError_Select, SyncError_Filter, { msdyn_problematicassetfeedback_SyncErrors: SyncError_Result[] }>;
  msdyn_problematicassetfeedback_UserEntityInstanceDatas: WebExpand<msdyn_problematicassetfeedback_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_problematicassetfeedback_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_problematicassetfeedback_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_problematicassetfeedback_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_problematicassetfeedback_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_problematicassetfeedback_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_problematicassetfeedback_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_numberofdays_formatted?: string;
  msdyn_otherfeedback_formatted?: string;
  msdyn_problematicassetfeedback_formatted?: string;
  msdyn_suggestion_formatted?: string;
  msdyn_suggestionfeedback_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_problematicassetfeedback_Result extends msdyn_problematicassetfeedback_Base, msdyn_problematicassetfeedback_Relationships {
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
interface msdyn_problematicassetfeedback_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_problematicassetfeedback_RelatedMany {
  msdyn_problematicassetfeedback_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_problematicassetfeedback_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_problematicassetfeedback_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_problematicassetfeedback_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_problematicassetfeedback_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_problematicassetfeedback_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_problematicassetfeedback_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_problematicassetfeedback_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_problematicassetfeedback_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_problematicassetfeedbacks: WebMappingRetrieve<msdyn_problematicassetfeedback_Select,msdyn_problematicassetfeedback_Expand,msdyn_problematicassetfeedback_Filter,msdyn_problematicassetfeedback_Fixed,msdyn_problematicassetfeedback_Result,msdyn_problematicassetfeedback_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_problematicassetfeedbacks: WebMappingRelated<msdyn_problematicassetfeedback_RelatedOne,msdyn_problematicassetfeedback_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_problematicassetfeedbacks: WebMappingCUDA<msdyn_problematicassetfeedback_Create,msdyn_problematicassetfeedback_Update,msdyn_problematicassetfeedback_Select>;
}
