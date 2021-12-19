interface msdyn_resourcerequest_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_positiondescription?: string | null;
  msdyn_resourcerequestid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_resourcerequest_statecode | null;
  statuscode?: msdyn_resourcerequest_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_resourcerequest_Relationships {
  msdyn_resourcerequest_Annotations?: Annotation_Result[] | null;
  msdyn_resourcerequest_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_resourcerequest_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_resourcerequest_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_resourcerequest_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_resourcerequest_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_resourcerequest_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_resourcerequest_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_resourcerequest_QueueItems?: QueueItem_Result[] | null;
  msdyn_resourcerequest_SyncErrors?: SyncError_Result[] | null;
  msdyn_resourcerequest_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_resourcerequest extends msdyn_resourcerequest_Base, msdyn_resourcerequest_Relationships {
  msdyn_claimedby_bind$systemusers?: string | null;
  msdyn_requestedby_bind$systemusers?: string | null;
  msdyn_resourcerequirementid_bind$msdyn_resourcerequirements?: string | null;
  msdyn_roleid_bind$bookableresourcecategories?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_resourcerequest_Create extends msdyn_resourcerequest {
}
interface msdyn_resourcerequest_Update extends msdyn_resourcerequest {
}
interface msdyn_resourcerequest_Select {
  createdby_guid: WebAttribute<msdyn_resourcerequest_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_resourcerequest_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_resourcerequest_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_resourcerequest_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_resourcerequest_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_resourcerequest_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_resourcerequest_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_claimedby_guid: WebAttribute<msdyn_resourcerequest_Select, { msdyn_claimedby_guid: string | null }, { msdyn_claimedby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_resourcerequest_Select, { msdyn_name: string | null }, {  }>;
  msdyn_positiondescription: WebAttribute<msdyn_resourcerequest_Select, { msdyn_positiondescription: string | null }, {  }>;
  msdyn_requestedby_guid: WebAttribute<msdyn_resourcerequest_Select, { msdyn_requestedby_guid: string | null }, { msdyn_requestedby_formatted?: string }>;
  msdyn_resourcerequestid: WebAttribute<msdyn_resourcerequest_Select, { msdyn_resourcerequestid: string | null }, {  }>;
  msdyn_resourcerequirementid_guid: WebAttribute<msdyn_resourcerequest_Select, { msdyn_resourcerequirementid_guid: string | null }, { msdyn_resourcerequirementid_formatted?: string }>;
  msdyn_roleid_guid: WebAttribute<msdyn_resourcerequest_Select, { msdyn_roleid_guid: string | null }, { msdyn_roleid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_resourcerequest_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_resourcerequest_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_resourcerequest_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_resourcerequest_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_resourcerequest_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_resourcerequest_Select, { statecode: msdyn_resourcerequest_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_resourcerequest_Select, { statuscode: msdyn_resourcerequest_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_resourcerequest_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_resourcerequest_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_resourcerequest_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_resourcerequest_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_claimedby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_positiondescription: string;
  msdyn_requestedby_guid: XQW.Guid;
  msdyn_resourcerequestid: XQW.Guid;
  msdyn_resourcerequirementid_guid: XQW.Guid;
  msdyn_roleid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_resourcerequest_statecode;
  statuscode: msdyn_resourcerequest_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_resourcerequest_Expand {
  createdby: WebExpand<msdyn_resourcerequest_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_resourcerequest_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_resourcerequest_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_resourcerequest_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_claimedby: WebExpand<msdyn_resourcerequest_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_claimedby: SystemUser_Result }>;
  msdyn_requestedby: WebExpand<msdyn_resourcerequest_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_requestedby: SystemUser_Result }>;
  msdyn_resourcerequest_Annotations: WebExpand<msdyn_resourcerequest_Expand, Annotation_Select, Annotation_Filter, { msdyn_resourcerequest_Annotations: Annotation_Result[] }>;
  msdyn_resourcerequest_AsyncOperations: WebExpand<msdyn_resourcerequest_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_resourcerequest_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_resourcerequest_BulkDeleteFailures: WebExpand<msdyn_resourcerequest_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_resourcerequest_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_resourcerequest_DuplicateBaseRecord: WebExpand<msdyn_resourcerequest_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resourcerequest_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_resourcerequest_DuplicateMatchingRecord: WebExpand<msdyn_resourcerequest_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resourcerequest_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_resourcerequest_MailboxTrackingFolders: WebExpand<msdyn_resourcerequest_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_resourcerequest_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_resourcerequest_PrincipalObjectAttributeAccesses: WebExpand<msdyn_resourcerequest_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_resourcerequest_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_resourcerequest_ProcessSession: WebExpand<msdyn_resourcerequest_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_resourcerequest_ProcessSession: ProcessSession_Result[] }>;
  msdyn_resourcerequest_QueueItems: WebExpand<msdyn_resourcerequest_Expand, QueueItem_Select, QueueItem_Filter, { msdyn_resourcerequest_QueueItems: QueueItem_Result[] }>;
  msdyn_resourcerequest_SyncErrors: WebExpand<msdyn_resourcerequest_Expand, SyncError_Select, SyncError_Filter, { msdyn_resourcerequest_SyncErrors: SyncError_Result[] }>;
  msdyn_resourcerequest_UserEntityInstanceDatas: WebExpand<msdyn_resourcerequest_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_resourcerequest_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_resourcerequirementid: WebExpand<msdyn_resourcerequest_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_resourcerequirementid: msdyn_resourcerequirement_Result }>;
  msdyn_roleid: WebExpand<msdyn_resourcerequest_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_roleid: BookableResourceCategory_Result }>;
  ownerid: WebExpand<msdyn_resourcerequest_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_resourcerequest_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_resourcerequest_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_resourcerequest_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_resourcerequest_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_claimedby_formatted?: string;
  msdyn_requestedby_formatted?: string;
  msdyn_resourcerequirementid_formatted?: string;
  msdyn_roleid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_resourcerequest_Result extends msdyn_resourcerequest_Base, msdyn_resourcerequest_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_claimedby_guid: string | null;
  msdyn_requestedby_guid: string | null;
  msdyn_resourcerequirementid_guid: string | null;
  msdyn_roleid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_resourcerequest_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_claimedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_requestedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_resourcerequirementid: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
  msdyn_roleid: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_resourcerequest_RelatedMany {
  msdyn_resourcerequest_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_resourcerequest_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_resourcerequest_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_resourcerequest_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resourcerequest_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resourcerequest_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_resourcerequest_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_resourcerequest_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_resourcerequest_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  msdyn_resourcerequest_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_resourcerequest_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_resourcerequests: WebMappingRetrieve<msdyn_resourcerequest_Select,msdyn_resourcerequest_Expand,msdyn_resourcerequest_Filter,msdyn_resourcerequest_Fixed,msdyn_resourcerequest_Result,msdyn_resourcerequest_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_resourcerequests: WebMappingRelated<msdyn_resourcerequest_RelatedOne,msdyn_resourcerequest_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_resourcerequests: WebMappingCUDA<msdyn_resourcerequest_Create,msdyn_resourcerequest_Update,msdyn_resourcerequest_Select>;
}
