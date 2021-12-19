interface msdyn_estimate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_estimateheadertype?: msdyn_estimateheadertype | null;
  msdyn_estimateid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_estimate_statecode | null;
  statuscode?: msdyn_estimate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_estimate_Relationships {
  msdyn_Project?: msdyn_project_Result | null;
  msdyn_estimate_Annotations?: Annotation_Result[] | null;
  msdyn_estimate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_estimate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_estimate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_estimate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_estimate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_estimate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_estimate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_estimate_SyncErrors?: SyncError_Result[] | null;
  msdyn_estimate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_estimate_msdyn_estimateline_Estimate?: msdyn_estimateline_Result[] | null;
  msdyn_msdyn_estimate_msdyn_fact_Estimate?: msdyn_fact_Result[] | null;
}
interface msdyn_estimate extends msdyn_estimate_Base, msdyn_estimate_Relationships {
  msdyn_Project_bind$msdyn_projects?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_estimate_Create extends msdyn_estimate {
}
interface msdyn_estimate_Update extends msdyn_estimate {
}
interface msdyn_estimate_Select {
  createdby_guid: WebAttribute<msdyn_estimate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_estimate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_estimate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_estimate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_estimate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_estimate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_estimate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_estimate_Select, { msdyn_description: string | null }, {  }>;
  msdyn_estimateheadertype: WebAttribute<msdyn_estimate_Select, { msdyn_estimateheadertype: msdyn_estimateheadertype | null }, { msdyn_estimateheadertype_formatted?: string }>;
  msdyn_estimateid: WebAttribute<msdyn_estimate_Select, { msdyn_estimateid: string | null }, {  }>;
  msdyn_project_guid: WebAttribute<msdyn_estimate_Select, { msdyn_project_guid: string | null }, { msdyn_project_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_estimate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_estimate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_estimate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_estimate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_estimate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_estimate_Select, { statecode: msdyn_estimate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_estimate_Select, { statuscode: msdyn_estimate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_estimate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_estimate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_estimate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_estimate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_estimateheadertype: msdyn_estimateheadertype;
  msdyn_estimateid: XQW.Guid;
  msdyn_project_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_estimate_statecode;
  statuscode: msdyn_estimate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_estimate_Expand {
  createdby: WebExpand<msdyn_estimate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_estimate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_estimate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_estimate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Project: WebExpand<msdyn_estimate_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_Project: msdyn_project_Result }>;
  msdyn_estimate_Annotations: WebExpand<msdyn_estimate_Expand, Annotation_Select, Annotation_Filter, { msdyn_estimate_Annotations: Annotation_Result[] }>;
  msdyn_estimate_AsyncOperations: WebExpand<msdyn_estimate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_estimate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_estimate_BulkDeleteFailures: WebExpand<msdyn_estimate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_estimate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_estimate_DuplicateBaseRecord: WebExpand<msdyn_estimate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_estimate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_estimate_DuplicateMatchingRecord: WebExpand<msdyn_estimate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_estimate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_estimate_MailboxTrackingFolders: WebExpand<msdyn_estimate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_estimate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_estimate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_estimate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_estimate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_estimate_ProcessSession: WebExpand<msdyn_estimate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_estimate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_estimate_SyncErrors: WebExpand<msdyn_estimate_Expand, SyncError_Select, SyncError_Filter, { msdyn_estimate_SyncErrors: SyncError_Result[] }>;
  msdyn_estimate_UserEntityInstanceDatas: WebExpand<msdyn_estimate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_estimate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_estimate_msdyn_estimateline_Estimate: WebExpand<msdyn_estimate_Expand, msdyn_estimateline_Select, msdyn_estimateline_Filter, { msdyn_msdyn_estimate_msdyn_estimateline_Estimate: msdyn_estimateline_Result[] }>;
  msdyn_msdyn_estimate_msdyn_fact_Estimate: WebExpand<msdyn_estimate_Expand, msdyn_fact_Select, msdyn_fact_Filter, { msdyn_msdyn_estimate_msdyn_fact_Estimate: msdyn_fact_Result[] }>;
  ownerid: WebExpand<msdyn_estimate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_estimate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_estimate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_estimate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_estimate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_estimateheadertype_formatted?: string;
  msdyn_project_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_estimate_Result extends msdyn_estimate_Base, msdyn_estimate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_project_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_estimate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_estimate_RelatedMany {
  msdyn_estimate_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_estimate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_estimate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_estimate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_estimate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_estimate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_estimate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_estimate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_estimate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_estimate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_estimate_msdyn_estimateline_Estimate: WebMappingRetrieve<msdyn_estimateline_Select,msdyn_estimateline_Expand,msdyn_estimateline_Filter,msdyn_estimateline_Fixed,msdyn_estimateline_Result,msdyn_estimateline_FormattedResult>;
  msdyn_msdyn_estimate_msdyn_fact_Estimate: WebMappingRetrieve<msdyn_fact_Select,msdyn_fact_Expand,msdyn_fact_Filter,msdyn_fact_Fixed,msdyn_fact_Result,msdyn_fact_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_estimates: WebMappingRetrieve<msdyn_estimate_Select,msdyn_estimate_Expand,msdyn_estimate_Filter,msdyn_estimate_Fixed,msdyn_estimate_Result,msdyn_estimate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_estimates: WebMappingRelated<msdyn_estimate_RelatedOne,msdyn_estimate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_estimates: WebMappingCUDA<msdyn_estimate_Create,msdyn_estimate_Update,msdyn_estimate_Select>;
}
