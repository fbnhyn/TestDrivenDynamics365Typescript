interface msdyn_resourcerequirementdetail_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_duration?: number | null;
  msdyn_from?: Date | null;
  msdyn_hours?: number | null;
  msdyn_name?: string | null;
  msdyn_resourcerequirementdetailid?: string | null;
  msdyn_to?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_resourcerequirementdetail_statecode | null;
  statuscode?: msdyn_resourcerequirementdetail_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_resourcerequirementdetail_Relationships {
  msdyn_resourcerequirementdetail_Annotations?: Annotation_Result[] | null;
  msdyn_resourcerequirementdetail_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_resourcerequirementdetail_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_resourcerequirementdetail_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_resourcerequirementdetail_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_resourcerequirementdetail_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_resourcerequirementdetail_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_resourcerequirementdetail_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_resourcerequirementdetail_SyncErrors?: SyncError_Result[] | null;
  msdyn_resourcerequirementdetail_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_resourcerequirementdetail extends msdyn_resourcerequirementdetail_Base, msdyn_resourcerequirementdetail_Relationships {
  msdyn_resourcerequirementid_bind$msdyn_resourcerequirements?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_resourcerequirementdetail_Create extends msdyn_resourcerequirementdetail {
}
interface msdyn_resourcerequirementdetail_Update extends msdyn_resourcerequirementdetail {
}
interface msdyn_resourcerequirementdetail_Select {
  createdby_guid: WebAttribute<msdyn_resourcerequirementdetail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_resourcerequirementdetail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_resourcerequirementdetail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_resourcerequirementdetail_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_resourcerequirementdetail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_resourcerequirementdetail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_resourcerequirementdetail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_duration: WebAttribute<msdyn_resourcerequirementdetail_Select, { msdyn_duration: number | null }, {  }>;
  msdyn_from: WebAttribute<msdyn_resourcerequirementdetail_Select, { msdyn_from: Date | null }, { msdyn_from_formatted?: string }>;
  msdyn_hours: WebAttribute<msdyn_resourcerequirementdetail_Select, { msdyn_hours: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_resourcerequirementdetail_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resourcerequirementdetailid: WebAttribute<msdyn_resourcerequirementdetail_Select, { msdyn_resourcerequirementdetailid: string | null }, {  }>;
  msdyn_resourcerequirementid_guid: WebAttribute<msdyn_resourcerequirementdetail_Select, { msdyn_resourcerequirementid_guid: string | null }, { msdyn_resourcerequirementid_formatted?: string }>;
  msdyn_to: WebAttribute<msdyn_resourcerequirementdetail_Select, { msdyn_to: Date | null }, { msdyn_to_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_resourcerequirementdetail_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_resourcerequirementdetail_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_resourcerequirementdetail_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_resourcerequirementdetail_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_resourcerequirementdetail_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_resourcerequirementdetail_Select, { statecode: msdyn_resourcerequirementdetail_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_resourcerequirementdetail_Select, { statuscode: msdyn_resourcerequirementdetail_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_resourcerequirementdetail_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_resourcerequirementdetail_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_resourcerequirementdetail_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_resourcerequirementdetail_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_duration: number;
  msdyn_from: Date;
  msdyn_hours: any;
  msdyn_name: string;
  msdyn_resourcerequirementdetailid: XQW.Guid;
  msdyn_resourcerequirementid_guid: XQW.Guid;
  msdyn_to: Date;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_resourcerequirementdetail_statecode;
  statuscode: msdyn_resourcerequirementdetail_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_resourcerequirementdetail_Expand {
  createdby: WebExpand<msdyn_resourcerequirementdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_resourcerequirementdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_resourcerequirementdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_resourcerequirementdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_resourcerequirementdetail_Annotations: WebExpand<msdyn_resourcerequirementdetail_Expand, Annotation_Select, Annotation_Filter, { msdyn_resourcerequirementdetail_Annotations: Annotation_Result[] }>;
  msdyn_resourcerequirementdetail_AsyncOperations: WebExpand<msdyn_resourcerequirementdetail_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_resourcerequirementdetail_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_resourcerequirementdetail_BulkDeleteFailures: WebExpand<msdyn_resourcerequirementdetail_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_resourcerequirementdetail_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_resourcerequirementdetail_DuplicateBaseRecord: WebExpand<msdyn_resourcerequirementdetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resourcerequirementdetail_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_resourcerequirementdetail_DuplicateMatchingRecord: WebExpand<msdyn_resourcerequirementdetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resourcerequirementdetail_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_resourcerequirementdetail_MailboxTrackingFolders: WebExpand<msdyn_resourcerequirementdetail_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_resourcerequirementdetail_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_resourcerequirementdetail_PrincipalObjectAttributeAccesses: WebExpand<msdyn_resourcerequirementdetail_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_resourcerequirementdetail_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_resourcerequirementdetail_ProcessSession: WebExpand<msdyn_resourcerequirementdetail_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_resourcerequirementdetail_ProcessSession: ProcessSession_Result[] }>;
  msdyn_resourcerequirementdetail_SyncErrors: WebExpand<msdyn_resourcerequirementdetail_Expand, SyncError_Select, SyncError_Filter, { msdyn_resourcerequirementdetail_SyncErrors: SyncError_Result[] }>;
  msdyn_resourcerequirementdetail_UserEntityInstanceDatas: WebExpand<msdyn_resourcerequirementdetail_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_resourcerequirementdetail_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_resourcerequirementid: WebExpand<msdyn_resourcerequirementdetail_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_resourcerequirementid: msdyn_resourcerequirement_Result }>;
  ownerid: WebExpand<msdyn_resourcerequirementdetail_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_resourcerequirementdetail_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_resourcerequirementdetail_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_resourcerequirementdetail_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_resourcerequirementdetail_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_from_formatted?: string;
  msdyn_resourcerequirementid_formatted?: string;
  msdyn_to_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_resourcerequirementdetail_Result extends msdyn_resourcerequirementdetail_Base, msdyn_resourcerequirementdetail_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_resourcerequirementid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_resourcerequirementdetail_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_resourcerequirementid: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_resourcerequirementdetail_RelatedMany {
  msdyn_resourcerequirementdetail_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_resourcerequirementdetail_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_resourcerequirementdetail_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_resourcerequirementdetail_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resourcerequirementdetail_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resourcerequirementdetail_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_resourcerequirementdetail_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_resourcerequirementdetail_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_resourcerequirementdetail_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_resourcerequirementdetail_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_resourcerequirementdetails: WebMappingRetrieve<msdyn_resourcerequirementdetail_Select,msdyn_resourcerequirementdetail_Expand,msdyn_resourcerequirementdetail_Filter,msdyn_resourcerequirementdetail_Fixed,msdyn_resourcerequirementdetail_Result,msdyn_resourcerequirementdetail_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_resourcerequirementdetails: WebMappingRelated<msdyn_resourcerequirementdetail_RelatedOne,msdyn_resourcerequirementdetail_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_resourcerequirementdetails: WebMappingCUDA<msdyn_resourcerequirementdetail_Create,msdyn_resourcerequirementdetail_Update,msdyn_resourcerequirementdetail_Select>;
}
