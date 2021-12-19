interface msdyn_requirementdependency_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_dependencytype?: msdyn_requirementdependencytype | null;
  msdyn_name?: string | null;
  msdyn_requirementdependencyid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_requirementdependency_statecode | null;
  statuscode?: msdyn_requirementdependency_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_requirementdependency_Relationships {
  msdyn_requirementdependency_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_requirementdependency_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_requirementdependency_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementdependency_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementdependency_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_requirementdependency_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_requirementdependency_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_requirementdependency_SyncErrors?: SyncError_Result[] | null;
  msdyn_requirementdependency_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_requirementdependency extends msdyn_requirementdependency_Base, msdyn_requirementdependency_Relationships {
  msdyn_dependentrequirement_bind$msdyn_resourcerequirements?: string | null;
  msdyn_requirement_bind$msdyn_resourcerequirements?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_requirementdependency_Create extends msdyn_requirementdependency {
}
interface msdyn_requirementdependency_Update extends msdyn_requirementdependency {
}
interface msdyn_requirementdependency_Select {
  createdby_guid: WebAttribute<msdyn_requirementdependency_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_requirementdependency_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_requirementdependency_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_requirementdependency_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_requirementdependency_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_requirementdependency_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_requirementdependency_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_dependencytype: WebAttribute<msdyn_requirementdependency_Select, { msdyn_dependencytype: msdyn_requirementdependencytype | null }, { msdyn_dependencytype_formatted?: string }>;
  msdyn_dependentrequirement_guid: WebAttribute<msdyn_requirementdependency_Select, { msdyn_dependentrequirement_guid: string | null }, { msdyn_dependentrequirement_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_requirementdependency_Select, { msdyn_name: string | null }, {  }>;
  msdyn_requirement_guid: WebAttribute<msdyn_requirementdependency_Select, { msdyn_requirement_guid: string | null }, { msdyn_requirement_formatted?: string }>;
  msdyn_requirementdependencyid: WebAttribute<msdyn_requirementdependency_Select, { msdyn_requirementdependencyid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_requirementdependency_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_requirementdependency_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_requirementdependency_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_requirementdependency_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_requirementdependency_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_requirementdependency_Select, { statecode: msdyn_requirementdependency_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_requirementdependency_Select, { statuscode: msdyn_requirementdependency_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_requirementdependency_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_requirementdependency_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_requirementdependency_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_requirementdependency_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_dependencytype: msdyn_requirementdependencytype;
  msdyn_dependentrequirement_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_requirement_guid: XQW.Guid;
  msdyn_requirementdependencyid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_requirementdependency_statecode;
  statuscode: msdyn_requirementdependency_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_requirementdependency_Expand {
  createdby: WebExpand<msdyn_requirementdependency_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_requirementdependency_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_requirementdependency_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_requirementdependency_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_dependentrequirement: WebExpand<msdyn_requirementdependency_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_dependentrequirement: msdyn_resourcerequirement_Result }>;
  msdyn_requirement: WebExpand<msdyn_requirementdependency_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_requirement: msdyn_resourcerequirement_Result }>;
  msdyn_requirementdependency_AsyncOperations: WebExpand<msdyn_requirementdependency_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_requirementdependency_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_requirementdependency_BulkDeleteFailures: WebExpand<msdyn_requirementdependency_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_requirementdependency_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_requirementdependency_DuplicateBaseRecord: WebExpand<msdyn_requirementdependency_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementdependency_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementdependency_DuplicateMatchingRecord: WebExpand<msdyn_requirementdependency_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementdependency_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementdependency_MailboxTrackingFolders: WebExpand<msdyn_requirementdependency_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_requirementdependency_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_requirementdependency_PrincipalObjectAttributeAccesses: WebExpand<msdyn_requirementdependency_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_requirementdependency_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_requirementdependency_ProcessSession: WebExpand<msdyn_requirementdependency_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_requirementdependency_ProcessSession: ProcessSession_Result[] }>;
  msdyn_requirementdependency_SyncErrors: WebExpand<msdyn_requirementdependency_Expand, SyncError_Select, SyncError_Filter, { msdyn_requirementdependency_SyncErrors: SyncError_Result[] }>;
  msdyn_requirementdependency_UserEntityInstanceDatas: WebExpand<msdyn_requirementdependency_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_requirementdependency_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_requirementdependency_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_requirementdependency_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_requirementdependency_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_requirementdependency_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_requirementdependency_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_dependencytype_formatted?: string;
  msdyn_dependentrequirement_formatted?: string;
  msdyn_requirement_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_requirementdependency_Result extends msdyn_requirementdependency_Base, msdyn_requirementdependency_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_dependentrequirement_guid: string | null;
  msdyn_requirement_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_requirementdependency_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_dependentrequirement: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
  msdyn_requirement: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_requirementdependency_RelatedMany {
  msdyn_requirementdependency_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_requirementdependency_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_requirementdependency_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementdependency_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementdependency_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_requirementdependency_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_requirementdependency_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_requirementdependency_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_requirementdependency_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_requirementdependencies: WebMappingRetrieve<msdyn_requirementdependency_Select,msdyn_requirementdependency_Expand,msdyn_requirementdependency_Filter,msdyn_requirementdependency_Fixed,msdyn_requirementdependency_Result,msdyn_requirementdependency_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_requirementdependencies: WebMappingRelated<msdyn_requirementdependency_RelatedOne,msdyn_requirementdependency_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_requirementdependencies: WebMappingCUDA<msdyn_requirementdependency_Create,msdyn_requirementdependency_Update,msdyn_requirementdependency_Select>;
}
