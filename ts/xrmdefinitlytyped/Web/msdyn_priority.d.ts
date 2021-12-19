interface msdyn_priority_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_levelofimportance?: msdyn_levelofimportance | null;
  msdyn_name?: string | null;
  msdyn_prioritycolor?: string | null;
  msdyn_priorityid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_priority_statecode | null;
  statuscode?: msdyn_priority_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_priority_Relationships {
  msdyn_msdyn_priority_msdyn_agreementbookingsetup_Priority?: msdyn_agreementbookingsetup_Result[] | null;
  msdyn_msdyn_priority_msdyn_quotebookingsetup_Priority?: msdyn_quotebookingsetup_Result[] | null;
  msdyn_msdyn_priority_msdyn_resourcerequirement_Priority?: msdyn_resourcerequirement_Result[] | null;
  msdyn_msdyn_priority_msdyn_workorder_Priority?: msdyn_workorder_Result[] | null;
  msdyn_priority_Annotations?: Annotation_Result[] | null;
  msdyn_priority_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_priority_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_priority_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_priority_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_priority_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_priority_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_priority_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_priority_SyncErrors?: SyncError_Result[] | null;
  msdyn_priority_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_priority extends msdyn_priority_Base, msdyn_priority_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_priority_Create extends msdyn_priority {
}
interface msdyn_priority_Update extends msdyn_priority {
}
interface msdyn_priority_Select {
  createdby_guid: WebAttribute<msdyn_priority_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_priority_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_priority_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_priority_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_priority_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_priority_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_priority_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_levelofimportance: WebAttribute<msdyn_priority_Select, { msdyn_levelofimportance: msdyn_levelofimportance | null }, { msdyn_levelofimportance_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_priority_Select, { msdyn_name: string | null }, {  }>;
  msdyn_prioritycolor: WebAttribute<msdyn_priority_Select, { msdyn_prioritycolor: string | null }, {  }>;
  msdyn_priorityid: WebAttribute<msdyn_priority_Select, { msdyn_priorityid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_priority_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_priority_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_priority_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_priority_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_priority_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_priority_Select, { statecode: msdyn_priority_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_priority_Select, { statuscode: msdyn_priority_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_priority_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_priority_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_priority_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_priority_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_levelofimportance: msdyn_levelofimportance;
  msdyn_name: string;
  msdyn_prioritycolor: string;
  msdyn_priorityid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_priority_statecode;
  statuscode: msdyn_priority_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_priority_Expand {
  createdby: WebExpand<msdyn_priority_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_priority_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_priority_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_priority_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_priority_msdyn_agreementbookingsetup_Priority: WebExpand<msdyn_priority_Expand, msdyn_agreementbookingsetup_Select, msdyn_agreementbookingsetup_Filter, { msdyn_msdyn_priority_msdyn_agreementbookingsetup_Priority: msdyn_agreementbookingsetup_Result[] }>;
  msdyn_msdyn_priority_msdyn_quotebookingsetup_Priority: WebExpand<msdyn_priority_Expand, msdyn_quotebookingsetup_Select, msdyn_quotebookingsetup_Filter, { msdyn_msdyn_priority_msdyn_quotebookingsetup_Priority: msdyn_quotebookingsetup_Result[] }>;
  msdyn_msdyn_priority_msdyn_resourcerequirement_Priority: WebExpand<msdyn_priority_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_msdyn_priority_msdyn_resourcerequirement_Priority: msdyn_resourcerequirement_Result[] }>;
  msdyn_msdyn_priority_msdyn_workorder_Priority: WebExpand<msdyn_priority_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_msdyn_priority_msdyn_workorder_Priority: msdyn_workorder_Result[] }>;
  msdyn_priority_Annotations: WebExpand<msdyn_priority_Expand, Annotation_Select, Annotation_Filter, { msdyn_priority_Annotations: Annotation_Result[] }>;
  msdyn_priority_AsyncOperations: WebExpand<msdyn_priority_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_priority_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_priority_BulkDeleteFailures: WebExpand<msdyn_priority_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_priority_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_priority_DuplicateBaseRecord: WebExpand<msdyn_priority_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_priority_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_priority_DuplicateMatchingRecord: WebExpand<msdyn_priority_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_priority_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_priority_MailboxTrackingFolders: WebExpand<msdyn_priority_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_priority_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_priority_PrincipalObjectAttributeAccesses: WebExpand<msdyn_priority_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_priority_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_priority_ProcessSession: WebExpand<msdyn_priority_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_priority_ProcessSession: ProcessSession_Result[] }>;
  msdyn_priority_SyncErrors: WebExpand<msdyn_priority_Expand, SyncError_Select, SyncError_Filter, { msdyn_priority_SyncErrors: SyncError_Result[] }>;
  msdyn_priority_UserEntityInstanceDatas: WebExpand<msdyn_priority_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_priority_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_priority_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_priority_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_priority_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_priority_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_priority_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_levelofimportance_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_priority_Result extends msdyn_priority_Base, msdyn_priority_Relationships {
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
interface msdyn_priority_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_priority_RelatedMany {
  msdyn_msdyn_priority_msdyn_agreementbookingsetup_Priority: WebMappingRetrieve<msdyn_agreementbookingsetup_Select,msdyn_agreementbookingsetup_Expand,msdyn_agreementbookingsetup_Filter,msdyn_agreementbookingsetup_Fixed,msdyn_agreementbookingsetup_Result,msdyn_agreementbookingsetup_FormattedResult>;
  msdyn_msdyn_priority_msdyn_quotebookingsetup_Priority: WebMappingRetrieve<msdyn_quotebookingsetup_Select,msdyn_quotebookingsetup_Expand,msdyn_quotebookingsetup_Filter,msdyn_quotebookingsetup_Fixed,msdyn_quotebookingsetup_Result,msdyn_quotebookingsetup_FormattedResult>;
  msdyn_msdyn_priority_msdyn_resourcerequirement_Priority: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
  msdyn_msdyn_priority_msdyn_workorder_Priority: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_priority_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_priority_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_priority_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_priority_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_priority_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_priority_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_priority_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_priority_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_priority_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_priority_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_priorities: WebMappingRetrieve<msdyn_priority_Select,msdyn_priority_Expand,msdyn_priority_Filter,msdyn_priority_Fixed,msdyn_priority_Result,msdyn_priority_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_priorities: WebMappingRelated<msdyn_priority_RelatedOne,msdyn_priority_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_priorities: WebMappingCUDA<msdyn_priority_Create,msdyn_priority_Update,msdyn_priority_Select>;
}
