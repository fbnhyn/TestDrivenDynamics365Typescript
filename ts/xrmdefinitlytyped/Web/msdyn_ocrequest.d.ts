interface msdyn_ocrequest_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_ocrequestid?: string | null;
  msdyn_requestname?: string | null;
  msdyn_requestproperties?: string | null;
  msdyn_requesttype?: msdyn_ocrequest_msdyn_requesttype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocrequest_statecode | null;
  statuscode?: msdyn_ocrequest_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocrequest_Relationships {
  msdyn_LiveWorkItemId?: msdyn_ocliveworkitem_Result | null;
  msdyn_ocrequest_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocrequest_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocrequest_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocrequest_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocrequest_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocrequest_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocrequest_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocrequest_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocrequest_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocrequest extends msdyn_ocrequest_Base, msdyn_ocrequest_Relationships {
  msdyn_LiveWorkItemId_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocrequest_Create extends msdyn_ocrequest {
}
interface msdyn_ocrequest_Update extends msdyn_ocrequest {
}
interface msdyn_ocrequest_Select {
  createdby_guid: WebAttribute<msdyn_ocrequest_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocrequest_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocrequest_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocrequest_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocrequest_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocrequest_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocrequest_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_liveworkitemid_guid: WebAttribute<msdyn_ocrequest_Select, { msdyn_liveworkitemid_guid: string | null }, { msdyn_liveworkitemid_formatted?: string }>;
  msdyn_ocrequestid: WebAttribute<msdyn_ocrequest_Select, { msdyn_ocrequestid: string | null }, {  }>;
  msdyn_requestname: WebAttribute<msdyn_ocrequest_Select, { msdyn_requestname: string | null }, {  }>;
  msdyn_requestproperties: WebAttribute<msdyn_ocrequest_Select, { msdyn_requestproperties: string | null }, {  }>;
  msdyn_requesttype: WebAttribute<msdyn_ocrequest_Select, { msdyn_requesttype: msdyn_ocrequest_msdyn_requesttype | null }, { msdyn_requesttype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ocrequest_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocrequest_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocrequest_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocrequest_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocrequest_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocrequest_Select, { statecode: msdyn_ocrequest_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocrequest_Select, { statuscode: msdyn_ocrequest_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocrequest_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocrequest_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocrequest_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocrequest_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_liveworkitemid_guid: XQW.Guid;
  msdyn_ocrequestid: XQW.Guid;
  msdyn_requestname: string;
  msdyn_requestproperties: string;
  msdyn_requesttype: msdyn_ocrequest_msdyn_requesttype;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocrequest_statecode;
  statuscode: msdyn_ocrequest_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocrequest_Expand {
  createdby: WebExpand<msdyn_ocrequest_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocrequest_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocrequest_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocrequest_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_LiveWorkItemId: WebExpand<msdyn_ocrequest_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_LiveWorkItemId: msdyn_ocliveworkitem_Result }>;
  msdyn_ocrequest_AsyncOperations: WebExpand<msdyn_ocrequest_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocrequest_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocrequest_BulkDeleteFailures: WebExpand<msdyn_ocrequest_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocrequest_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocrequest_DuplicateBaseRecord: WebExpand<msdyn_ocrequest_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocrequest_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocrequest_DuplicateMatchingRecord: WebExpand<msdyn_ocrequest_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocrequest_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocrequest_MailboxTrackingFolders: WebExpand<msdyn_ocrequest_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocrequest_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocrequest_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocrequest_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocrequest_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocrequest_ProcessSession: WebExpand<msdyn_ocrequest_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocrequest_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocrequest_SyncErrors: WebExpand<msdyn_ocrequest_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocrequest_SyncErrors: SyncError_Result[] }>;
  msdyn_ocrequest_UserEntityInstanceDatas: WebExpand<msdyn_ocrequest_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocrequest_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_ocrequest_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocrequest_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocrequest_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocrequest_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocrequest_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkitemid_formatted?: string;
  msdyn_requesttype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocrequest_Result extends msdyn_ocrequest_Base, msdyn_ocrequest_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocrequest_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_LiveWorkItemId: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocrequest_RelatedMany {
  msdyn_ocrequest_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocrequest_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocrequest_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocrequest_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocrequest_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocrequest_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocrequest_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocrequest_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocrequest_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocrequests: WebMappingRetrieve<msdyn_ocrequest_Select,msdyn_ocrequest_Expand,msdyn_ocrequest_Filter,msdyn_ocrequest_Fixed,msdyn_ocrequest_Result,msdyn_ocrequest_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocrequests: WebMappingRelated<msdyn_ocrequest_RelatedOne,msdyn_ocrequest_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocrequests: WebMappingCUDA<msdyn_ocrequest_Create,msdyn_ocrequest_Update,msdyn_ocrequest_Select>;
}
