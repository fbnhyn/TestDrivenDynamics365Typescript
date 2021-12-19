interface msdyn_resourceassignmentdetail_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_duration?: number | null;
  msdyn_from?: Date | null;
  msdyn_name?: string | null;
  msdyn_resourceassignmentdetailid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_resourceassignmentdetail_statecode | null;
  statuscode?: msdyn_resourceassignmentdetail_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_resourceassignmentdetail_Relationships {
  msdyn_resourceassignmentdetail_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_resourceassignmentdetail_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_resourceassignmentdetail_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_resourceassignmentdetail_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_resourceassignmentdetail_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_resourceassignmentdetail_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_resourceassignmentdetail_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_resourceassignmentdetail_SyncErrors?: SyncError_Result[] | null;
  msdyn_resourceassignmentdetail_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_resourceassignmentdetail extends msdyn_resourceassignmentdetail_Base, msdyn_resourceassignmentdetail_Relationships {
  msdyn_resourceassignmentid_bind$msdyn_resourceassignments?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_resourceassignmentdetail_Create extends msdyn_resourceassignmentdetail {
}
interface msdyn_resourceassignmentdetail_Update extends msdyn_resourceassignmentdetail {
}
interface msdyn_resourceassignmentdetail_Select {
  createdby_guid: WebAttribute<msdyn_resourceassignmentdetail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_resourceassignmentdetail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_resourceassignmentdetail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_resourceassignmentdetail_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_resourceassignmentdetail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_resourceassignmentdetail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_resourceassignmentdetail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_duration: WebAttribute<msdyn_resourceassignmentdetail_Select, { msdyn_duration: number | null }, {  }>;
  msdyn_from: WebAttribute<msdyn_resourceassignmentdetail_Select, { msdyn_from: Date | null }, { msdyn_from_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_resourceassignmentdetail_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resourceassignmentdetailid: WebAttribute<msdyn_resourceassignmentdetail_Select, { msdyn_resourceassignmentdetailid: string | null }, {  }>;
  msdyn_resourceassignmentid_guid: WebAttribute<msdyn_resourceassignmentdetail_Select, { msdyn_resourceassignmentid_guid: string | null }, { msdyn_resourceassignmentid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_resourceassignmentdetail_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_resourceassignmentdetail_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_resourceassignmentdetail_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_resourceassignmentdetail_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_resourceassignmentdetail_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_resourceassignmentdetail_Select, { statecode: msdyn_resourceassignmentdetail_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_resourceassignmentdetail_Select, { statuscode: msdyn_resourceassignmentdetail_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_resourceassignmentdetail_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_resourceassignmentdetail_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_resourceassignmentdetail_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_resourceassignmentdetail_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_duration: number;
  msdyn_from: Date;
  msdyn_name: string;
  msdyn_resourceassignmentdetailid: XQW.Guid;
  msdyn_resourceassignmentid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_resourceassignmentdetail_statecode;
  statuscode: msdyn_resourceassignmentdetail_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_resourceassignmentdetail_Expand {
  createdby: WebExpand<msdyn_resourceassignmentdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_resourceassignmentdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_resourceassignmentdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_resourceassignmentdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_resourceassignmentdetail_AsyncOperations: WebExpand<msdyn_resourceassignmentdetail_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_resourceassignmentdetail_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_resourceassignmentdetail_BulkDeleteFailures: WebExpand<msdyn_resourceassignmentdetail_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_resourceassignmentdetail_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_resourceassignmentdetail_DuplicateBaseRecord: WebExpand<msdyn_resourceassignmentdetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resourceassignmentdetail_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_resourceassignmentdetail_DuplicateMatchingRecord: WebExpand<msdyn_resourceassignmentdetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resourceassignmentdetail_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_resourceassignmentdetail_MailboxTrackingFolders: WebExpand<msdyn_resourceassignmentdetail_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_resourceassignmentdetail_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_resourceassignmentdetail_PrincipalObjectAttributeAccesses: WebExpand<msdyn_resourceassignmentdetail_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_resourceassignmentdetail_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_resourceassignmentdetail_ProcessSession: WebExpand<msdyn_resourceassignmentdetail_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_resourceassignmentdetail_ProcessSession: ProcessSession_Result[] }>;
  msdyn_resourceassignmentdetail_SyncErrors: WebExpand<msdyn_resourceassignmentdetail_Expand, SyncError_Select, SyncError_Filter, { msdyn_resourceassignmentdetail_SyncErrors: SyncError_Result[] }>;
  msdyn_resourceassignmentdetail_UserEntityInstanceDatas: WebExpand<msdyn_resourceassignmentdetail_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_resourceassignmentdetail_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_resourceassignmentid: WebExpand<msdyn_resourceassignmentdetail_Expand, msdyn_resourceassignment_Select, msdyn_resourceassignment_Filter, { msdyn_resourceassignmentid: msdyn_resourceassignment_Result }>;
  ownerid: WebExpand<msdyn_resourceassignmentdetail_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_resourceassignmentdetail_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_resourceassignmentdetail_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_resourceassignmentdetail_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_resourceassignmentdetail_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_from_formatted?: string;
  msdyn_resourceassignmentid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_resourceassignmentdetail_Result extends msdyn_resourceassignmentdetail_Base, msdyn_resourceassignmentdetail_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_resourceassignmentid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_resourceassignmentdetail_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_resourceassignmentid: WebMappingRetrieve<msdyn_resourceassignment_Select,msdyn_resourceassignment_Expand,msdyn_resourceassignment_Filter,msdyn_resourceassignment_Fixed,msdyn_resourceassignment_Result,msdyn_resourceassignment_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_resourceassignmentdetail_RelatedMany {
  msdyn_resourceassignmentdetail_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_resourceassignmentdetail_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_resourceassignmentdetail_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resourceassignmentdetail_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resourceassignmentdetail_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_resourceassignmentdetail_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_resourceassignmentdetail_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_resourceassignmentdetail_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_resourceassignmentdetail_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_resourceassignmentdetails: WebMappingRetrieve<msdyn_resourceassignmentdetail_Select,msdyn_resourceassignmentdetail_Expand,msdyn_resourceassignmentdetail_Filter,msdyn_resourceassignmentdetail_Fixed,msdyn_resourceassignmentdetail_Result,msdyn_resourceassignmentdetail_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_resourceassignmentdetails: WebMappingRelated<msdyn_resourceassignmentdetail_RelatedOne,msdyn_resourceassignmentdetail_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_resourceassignmentdetails: WebMappingCUDA<msdyn_resourceassignmentdetail_Create,msdyn_resourceassignmentdetail_Update,msdyn_resourceassignmentdetail_Select>;
}
