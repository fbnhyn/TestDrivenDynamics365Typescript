interface msdyn_approvalset_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_actiontype?: msdyn_approvalaction | null;
  msdyn_approvalsetid?: string | null;
  msdyn_entrytype?: msdyn_approvalentrytype | null;
  msdyn_lifetime?: number | null;
  msdyn_name?: string | null;
  msdyn_systemjobid?: string | null;
  msdyn_targetstatus?: msdyn_approvalentrystatus | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_approvalset_statecode | null;
  statuscode?: msdyn_approvalset_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_approvalset_Relationships {
  msdyn_Approver?: SystemUser_Result | null;
  msdyn_Project?: msdyn_project_Result | null;
  msdyn_approvalset_Annotations?: Annotation_Result[] | null;
  msdyn_approvalset_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_approvalset_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_approvalset_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_approvalset_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_approvalset_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_approvalset_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_approvalset_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_approvalset_SyncErrors?: SyncError_Result[] | null;
  msdyn_approvalset_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet?: msdyn_projectapproval_Result[] | null;
}
interface msdyn_approvalset extends msdyn_approvalset_Base, msdyn_approvalset_Relationships {
  msdyn_Approver_bind$systemusers?: string | null;
  msdyn_Project_bind$msdyn_projects?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_approvalset_Create extends msdyn_approvalset {
}
interface msdyn_approvalset_Update extends msdyn_approvalset {
}
interface msdyn_approvalset_Select {
  createdby_guid: WebAttribute<msdyn_approvalset_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_approvalset_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_approvalset_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_approvalset_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_approvalset_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_approvalset_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_approvalset_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actiontype: WebAttribute<msdyn_approvalset_Select, { msdyn_actiontype: msdyn_approvalaction | null }, { msdyn_actiontype_formatted?: string }>;
  msdyn_approvalsetid: WebAttribute<msdyn_approvalset_Select, { msdyn_approvalsetid: string | null }, {  }>;
  msdyn_approver_guid: WebAttribute<msdyn_approvalset_Select, { msdyn_approver_guid: string | null }, { msdyn_approver_formatted?: string }>;
  msdyn_entrytype: WebAttribute<msdyn_approvalset_Select, { msdyn_entrytype: msdyn_approvalentrytype | null }, { msdyn_entrytype_formatted?: string }>;
  msdyn_lifetime: WebAttribute<msdyn_approvalset_Select, { msdyn_lifetime: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_approvalset_Select, { msdyn_name: string | null }, {  }>;
  msdyn_project_guid: WebAttribute<msdyn_approvalset_Select, { msdyn_project_guid: string | null }, { msdyn_project_formatted?: string }>;
  msdyn_systemjobid: WebAttribute<msdyn_approvalset_Select, { msdyn_systemjobid: string | null }, {  }>;
  msdyn_targetstatus: WebAttribute<msdyn_approvalset_Select, { msdyn_targetstatus: msdyn_approvalentrystatus | null }, { msdyn_targetstatus_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_approvalset_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_approvalset_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_approvalset_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_approvalset_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_approvalset_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_approvalset_Select, { statecode: msdyn_approvalset_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_approvalset_Select, { statuscode: msdyn_approvalset_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_approvalset_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_approvalset_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_approvalset_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_approvalset_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_actiontype: msdyn_approvalaction;
  msdyn_approvalsetid: XQW.Guid;
  msdyn_approver_guid: XQW.Guid;
  msdyn_entrytype: msdyn_approvalentrytype;
  msdyn_lifetime: number;
  msdyn_name: string;
  msdyn_project_guid: XQW.Guid;
  msdyn_systemjobid: string;
  msdyn_targetstatus: msdyn_approvalentrystatus;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_approvalset_statecode;
  statuscode: msdyn_approvalset_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_approvalset_Expand {
  createdby: WebExpand<msdyn_approvalset_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_approvalset_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_approvalset_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_approvalset_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Approver: WebExpand<msdyn_approvalset_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_Approver: SystemUser_Result }>;
  msdyn_Project: WebExpand<msdyn_approvalset_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_Project: msdyn_project_Result }>;
  msdyn_approvalset_Annotations: WebExpand<msdyn_approvalset_Expand, Annotation_Select, Annotation_Filter, { msdyn_approvalset_Annotations: Annotation_Result[] }>;
  msdyn_approvalset_AsyncOperations: WebExpand<msdyn_approvalset_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_approvalset_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_approvalset_BulkDeleteFailures: WebExpand<msdyn_approvalset_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_approvalset_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_approvalset_DuplicateBaseRecord: WebExpand<msdyn_approvalset_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_approvalset_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_approvalset_DuplicateMatchingRecord: WebExpand<msdyn_approvalset_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_approvalset_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_approvalset_MailboxTrackingFolders: WebExpand<msdyn_approvalset_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_approvalset_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_approvalset_PrincipalObjectAttributeAccesses: WebExpand<msdyn_approvalset_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_approvalset_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_approvalset_ProcessSession: WebExpand<msdyn_approvalset_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_approvalset_ProcessSession: ProcessSession_Result[] }>;
  msdyn_approvalset_SyncErrors: WebExpand<msdyn_approvalset_Expand, SyncError_Select, SyncError_Filter, { msdyn_approvalset_SyncErrors: SyncError_Result[] }>;
  msdyn_approvalset_UserEntityInstanceDatas: WebExpand<msdyn_approvalset_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_approvalset_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet: WebExpand<msdyn_approvalset_Expand, msdyn_projectapproval_Select, msdyn_projectapproval_Filter, { msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet: msdyn_projectapproval_Result[] }>;
  ownerid: WebExpand<msdyn_approvalset_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_approvalset_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_approvalset_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_approvalset_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_approvalset_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_actiontype_formatted?: string;
  msdyn_approver_formatted?: string;
  msdyn_entrytype_formatted?: string;
  msdyn_project_formatted?: string;
  msdyn_targetstatus_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_approvalset_Result extends msdyn_approvalset_Base, msdyn_approvalset_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_approver_guid: string | null;
  msdyn_project_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_approvalset_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Approver: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_approvalset_RelatedMany {
  msdyn_approvalset_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_approvalset_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_approvalset_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_approvalset_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_approvalset_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_approvalset_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_approvalset_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_approvalset_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_approvalset_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_approvalset_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_approvalset_msdyn_projectapproval_ApprovalSet: WebMappingRetrieve<msdyn_projectapproval_Select,msdyn_projectapproval_Expand,msdyn_projectapproval_Filter,msdyn_projectapproval_Fixed,msdyn_projectapproval_Result,msdyn_projectapproval_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_approvalsets: WebMappingRetrieve<msdyn_approvalset_Select,msdyn_approvalset_Expand,msdyn_approvalset_Filter,msdyn_approvalset_Fixed,msdyn_approvalset_Result,msdyn_approvalset_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_approvalsets: WebMappingRelated<msdyn_approvalset_RelatedOne,msdyn_approvalset_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_approvalsets: WebMappingCUDA<msdyn_approvalset_Create,msdyn_approvalset_Update,msdyn_approvalset_Select>;
}
