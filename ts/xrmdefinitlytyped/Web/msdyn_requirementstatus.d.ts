interface msdyn_requirementstatus_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_requirementstatusid?: string | null;
  msdyn_status?: msdyn_requirementstatus_Enum | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_requirementstatus_statecode | null;
  statuscode?: msdyn_requirementstatus_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_requirementstatus_Relationships {
  msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementActiveStatus?: msdyn_bookingsetupmetadata_Result[] | null;
  msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCanceledStatus?: msdyn_bookingsetupmetadata_Result[] | null;
  msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCompletedStatus?: msdyn_bookingsetupmetadata_Result[] | null;
  msdyn_requirementstatus_Annotations?: Annotation_Result[] | null;
  msdyn_requirementstatus_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_requirementstatus_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_requirementstatus_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementstatus_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementstatus_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_requirementstatus_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_requirementstatus_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_requirementstatus_SyncErrors?: SyncError_Result[] | null;
  msdyn_requirementstatus_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_requirementstatus_resourcerequirement_status?: msdyn_resourcerequirement_Result[] | null;
}
interface msdyn_requirementstatus extends msdyn_requirementstatus_Base, msdyn_requirementstatus_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_requirementstatus_Create extends msdyn_requirementstatus {
}
interface msdyn_requirementstatus_Update extends msdyn_requirementstatus {
}
interface msdyn_requirementstatus_Select {
  createdby_guid: WebAttribute<msdyn_requirementstatus_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_requirementstatus_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_requirementstatus_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_requirementstatus_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_requirementstatus_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_requirementstatus_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_requirementstatus_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_requirementstatus_Select, { msdyn_name: string | null }, {  }>;
  msdyn_requirementstatusid: WebAttribute<msdyn_requirementstatus_Select, { msdyn_requirementstatusid: string | null }, {  }>;
  msdyn_status: WebAttribute<msdyn_requirementstatus_Select, { msdyn_status: msdyn_requirementstatus_Enum | null }, { msdyn_status_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_requirementstatus_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_requirementstatus_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_requirementstatus_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_requirementstatus_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_requirementstatus_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_requirementstatus_Select, { statecode: msdyn_requirementstatus_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_requirementstatus_Select, { statuscode: msdyn_requirementstatus_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_requirementstatus_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_requirementstatus_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_requirementstatus_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_requirementstatus_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_requirementstatusid: XQW.Guid;
  msdyn_status: msdyn_requirementstatus_Enum;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_requirementstatus_statecode;
  statuscode: msdyn_requirementstatus_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_requirementstatus_Expand {
  createdby: WebExpand<msdyn_requirementstatus_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_requirementstatus_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_requirementstatus_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_requirementstatus_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementActiveStatus: WebExpand<msdyn_requirementstatus_Expand, msdyn_bookingsetupmetadata_Select, msdyn_bookingsetupmetadata_Filter, { msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementActiveStatus: msdyn_bookingsetupmetadata_Result[] }>;
  msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCanceledStatus: WebExpand<msdyn_requirementstatus_Expand, msdyn_bookingsetupmetadata_Select, msdyn_bookingsetupmetadata_Filter, { msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCanceledStatus: msdyn_bookingsetupmetadata_Result[] }>;
  msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCompletedStatus: WebExpand<msdyn_requirementstatus_Expand, msdyn_bookingsetupmetadata_Select, msdyn_bookingsetupmetadata_Filter, { msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCompletedStatus: msdyn_bookingsetupmetadata_Result[] }>;
  msdyn_requirementstatus_Annotations: WebExpand<msdyn_requirementstatus_Expand, Annotation_Select, Annotation_Filter, { msdyn_requirementstatus_Annotations: Annotation_Result[] }>;
  msdyn_requirementstatus_AsyncOperations: WebExpand<msdyn_requirementstatus_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_requirementstatus_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_requirementstatus_BulkDeleteFailures: WebExpand<msdyn_requirementstatus_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_requirementstatus_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_requirementstatus_DuplicateBaseRecord: WebExpand<msdyn_requirementstatus_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementstatus_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementstatus_DuplicateMatchingRecord: WebExpand<msdyn_requirementstatus_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementstatus_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementstatus_MailboxTrackingFolders: WebExpand<msdyn_requirementstatus_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_requirementstatus_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_requirementstatus_PrincipalObjectAttributeAccesses: WebExpand<msdyn_requirementstatus_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_requirementstatus_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_requirementstatus_ProcessSession: WebExpand<msdyn_requirementstatus_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_requirementstatus_ProcessSession: ProcessSession_Result[] }>;
  msdyn_requirementstatus_SyncErrors: WebExpand<msdyn_requirementstatus_Expand, SyncError_Select, SyncError_Filter, { msdyn_requirementstatus_SyncErrors: SyncError_Result[] }>;
  msdyn_requirementstatus_UserEntityInstanceDatas: WebExpand<msdyn_requirementstatus_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_requirementstatus_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_requirementstatus_resourcerequirement_status: WebExpand<msdyn_requirementstatus_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_requirementstatus_resourcerequirement_status: msdyn_resourcerequirement_Result[] }>;
  ownerid: WebExpand<msdyn_requirementstatus_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_requirementstatus_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_requirementstatus_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_requirementstatus_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_requirementstatus_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_status_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_requirementstatus_Result extends msdyn_requirementstatus_Base, msdyn_requirementstatus_Relationships {
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
interface msdyn_requirementstatus_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_requirementstatus_RelatedMany {
  msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementActiveStatus: WebMappingRetrieve<msdyn_bookingsetupmetadata_Select,msdyn_bookingsetupmetadata_Expand,msdyn_bookingsetupmetadata_Filter,msdyn_bookingsetupmetadata_Fixed,msdyn_bookingsetupmetadata_Result,msdyn_bookingsetupmetadata_FormattedResult>;
  msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCanceledStatus: WebMappingRetrieve<msdyn_bookingsetupmetadata_Select,msdyn_bookingsetupmetadata_Expand,msdyn_bookingsetupmetadata_Filter,msdyn_bookingsetupmetadata_Fixed,msdyn_bookingsetupmetadata_Result,msdyn_bookingsetupmetadata_FormattedResult>;
  msdyn_msdyn_requirementstatus_msdyn_bookingsetupmetadata_DefaultRequirementCompletedStatus: WebMappingRetrieve<msdyn_bookingsetupmetadata_Select,msdyn_bookingsetupmetadata_Expand,msdyn_bookingsetupmetadata_Filter,msdyn_bookingsetupmetadata_Fixed,msdyn_bookingsetupmetadata_Result,msdyn_bookingsetupmetadata_FormattedResult>;
  msdyn_requirementstatus_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_requirementstatus_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_requirementstatus_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_requirementstatus_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementstatus_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementstatus_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_requirementstatus_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_requirementstatus_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_requirementstatus_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_requirementstatus_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_requirementstatus_resourcerequirement_status: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_requirementstatuses: WebMappingRetrieve<msdyn_requirementstatus_Select,msdyn_requirementstatus_Expand,msdyn_requirementstatus_Filter,msdyn_requirementstatus_Fixed,msdyn_requirementstatus_Result,msdyn_requirementstatus_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_requirementstatuses: WebMappingRelated<msdyn_requirementstatus_RelatedOne,msdyn_requirementstatus_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_requirementstatuses: WebMappingCUDA<msdyn_requirementstatus_Create,msdyn_requirementstatus_Update,msdyn_requirementstatus_Select>;
}
