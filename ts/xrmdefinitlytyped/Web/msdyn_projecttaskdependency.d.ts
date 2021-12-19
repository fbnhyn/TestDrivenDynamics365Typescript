interface msdyn_projecttaskdependency_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_linktype?: msdyn_activitylinktype | null;
  msdyn_projecttaskdependencyid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_projecttaskdependency_statecode | null;
  statuscode?: msdyn_projecttaskdependency_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_projecttaskdependency_Relationships {
  msdyn_PredecessorTask?: msdyn_projecttask_Result | null;
  msdyn_Project?: msdyn_project_Result | null;
  msdyn_SuccessorTask?: msdyn_projecttask_Result | null;
  msdyn_projecttaskdependency_Annotations?: Annotation_Result[] | null;
  msdyn_projecttaskdependency_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_projecttaskdependency_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_projecttaskdependency_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_projecttaskdependency_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_projecttaskdependency_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_projecttaskdependency_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_projecttaskdependency_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_projecttaskdependency_SyncErrors?: SyncError_Result[] | null;
  msdyn_projecttaskdependency_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_projecttaskdependency extends msdyn_projecttaskdependency_Base, msdyn_projecttaskdependency_Relationships {
  msdyn_PredecessorTask_bind$msdyn_projecttasks?: string | null;
  msdyn_Project_bind$msdyn_projects?: string | null;
  msdyn_SuccessorTask_bind$msdyn_projecttasks?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_projecttaskdependency_Create extends msdyn_projecttaskdependency {
}
interface msdyn_projecttaskdependency_Update extends msdyn_projecttaskdependency {
}
interface msdyn_projecttaskdependency_Select {
  createdby_guid: WebAttribute<msdyn_projecttaskdependency_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_projecttaskdependency_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_projecttaskdependency_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_projecttaskdependency_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_projecttaskdependency_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_projecttaskdependency_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_projecttaskdependency_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_projecttaskdependency_Select, { msdyn_description: string | null }, {  }>;
  msdyn_linktype: WebAttribute<msdyn_projecttaskdependency_Select, { msdyn_linktype: msdyn_activitylinktype | null }, { msdyn_linktype_formatted?: string }>;
  msdyn_predecessortask_guid: WebAttribute<msdyn_projecttaskdependency_Select, { msdyn_predecessortask_guid: string | null }, { msdyn_predecessortask_formatted?: string }>;
  msdyn_project_guid: WebAttribute<msdyn_projecttaskdependency_Select, { msdyn_project_guid: string | null }, { msdyn_project_formatted?: string }>;
  msdyn_projecttaskdependencyid: WebAttribute<msdyn_projecttaskdependency_Select, { msdyn_projecttaskdependencyid: string | null }, {  }>;
  msdyn_successortask_guid: WebAttribute<msdyn_projecttaskdependency_Select, { msdyn_successortask_guid: string | null }, { msdyn_successortask_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_projecttaskdependency_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_projecttaskdependency_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_projecttaskdependency_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_projecttaskdependency_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_projecttaskdependency_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_projecttaskdependency_Select, { statecode: msdyn_projecttaskdependency_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_projecttaskdependency_Select, { statuscode: msdyn_projecttaskdependency_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_projecttaskdependency_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_projecttaskdependency_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_projecttaskdependency_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_projecttaskdependency_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_linktype: msdyn_activitylinktype;
  msdyn_predecessortask_guid: XQW.Guid;
  msdyn_project_guid: XQW.Guid;
  msdyn_projecttaskdependencyid: XQW.Guid;
  msdyn_successortask_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_projecttaskdependency_statecode;
  statuscode: msdyn_projecttaskdependency_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_projecttaskdependency_Expand {
  createdby: WebExpand<msdyn_projecttaskdependency_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_projecttaskdependency_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_projecttaskdependency_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_projecttaskdependency_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_PredecessorTask: WebExpand<msdyn_projecttaskdependency_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_PredecessorTask: msdyn_projecttask_Result }>;
  msdyn_Project: WebExpand<msdyn_projecttaskdependency_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_Project: msdyn_project_Result }>;
  msdyn_SuccessorTask: WebExpand<msdyn_projecttaskdependency_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_SuccessorTask: msdyn_projecttask_Result }>;
  msdyn_projecttaskdependency_Annotations: WebExpand<msdyn_projecttaskdependency_Expand, Annotation_Select, Annotation_Filter, { msdyn_projecttaskdependency_Annotations: Annotation_Result[] }>;
  msdyn_projecttaskdependency_AsyncOperations: WebExpand<msdyn_projecttaskdependency_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_projecttaskdependency_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_projecttaskdependency_BulkDeleteFailures: WebExpand<msdyn_projecttaskdependency_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_projecttaskdependency_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_projecttaskdependency_DuplicateBaseRecord: WebExpand<msdyn_projecttaskdependency_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projecttaskdependency_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_projecttaskdependency_DuplicateMatchingRecord: WebExpand<msdyn_projecttaskdependency_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projecttaskdependency_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_projecttaskdependency_MailboxTrackingFolders: WebExpand<msdyn_projecttaskdependency_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_projecttaskdependency_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_projecttaskdependency_PrincipalObjectAttributeAccesses: WebExpand<msdyn_projecttaskdependency_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_projecttaskdependency_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_projecttaskdependency_ProcessSession: WebExpand<msdyn_projecttaskdependency_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_projecttaskdependency_ProcessSession: ProcessSession_Result[] }>;
  msdyn_projecttaskdependency_SyncErrors: WebExpand<msdyn_projecttaskdependency_Expand, SyncError_Select, SyncError_Filter, { msdyn_projecttaskdependency_SyncErrors: SyncError_Result[] }>;
  msdyn_projecttaskdependency_UserEntityInstanceDatas: WebExpand<msdyn_projecttaskdependency_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_projecttaskdependency_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_projecttaskdependency_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_projecttaskdependency_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_projecttaskdependency_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_projecttaskdependency_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_projecttaskdependency_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_linktype_formatted?: string;
  msdyn_predecessortask_formatted?: string;
  msdyn_project_formatted?: string;
  msdyn_successortask_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_projecttaskdependency_Result extends msdyn_projecttaskdependency_Base, msdyn_projecttaskdependency_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_predecessortask_guid: string | null;
  msdyn_project_guid: string | null;
  msdyn_successortask_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_projecttaskdependency_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_PredecessorTask: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  msdyn_Project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_SuccessorTask: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_projecttaskdependency_RelatedMany {
  msdyn_projecttaskdependency_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_projecttaskdependency_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_projecttaskdependency_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_projecttaskdependency_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projecttaskdependency_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projecttaskdependency_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_projecttaskdependency_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_projecttaskdependency_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_projecttaskdependency_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_projecttaskdependency_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_projecttaskdependencies: WebMappingRetrieve<msdyn_projecttaskdependency_Select,msdyn_projecttaskdependency_Expand,msdyn_projecttaskdependency_Filter,msdyn_projecttaskdependency_Fixed,msdyn_projecttaskdependency_Result,msdyn_projecttaskdependency_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_projecttaskdependencies: WebMappingRelated<msdyn_projecttaskdependency_RelatedOne,msdyn_projecttaskdependency_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_projecttaskdependencies: WebMappingCUDA<msdyn_projecttaskdependency_Create,msdyn_projecttaskdependency_Update,msdyn_projecttaskdependency_Select>;
}
