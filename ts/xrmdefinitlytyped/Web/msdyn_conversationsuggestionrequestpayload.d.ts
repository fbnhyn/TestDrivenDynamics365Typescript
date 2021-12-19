interface msdyn_conversationsuggestionrequestpayload_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_conversationsuggestionrequestpayloadid?: string | null;
  msdyn_name?: string | null;
  msdyn_requestpayload?: string | null;
  msdyn_responsepayload?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_conversationsuggestionrequestpayload_statecode | null;
  statuscode?: msdyn_conversationsuggestionrequestpayload_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_conversationsuggestionrequestpayload_Relationships {
  msdyn_conversationsuggestionrequestpayload_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_conversationsuggestionrequestpayload_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_conversationsuggestionrequestpayload_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_conversationsuggestionrequestpayload_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_conversationsuggestionrequestpayload_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_conversationsuggestionrequestpayload_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_conversationsuggestionrequestpayload_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_conversationsuggestionrequestpayload_SyncErrors?: SyncError_Result[] | null;
  msdyn_conversationsuggestionrequestpayload_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_conversationsuggestionrequestpayload extends msdyn_conversationsuggestionrequestpayload_Base, msdyn_conversationsuggestionrequestpayload_Relationships {
  msdyn_conversationid_bind$msdyn_ocliveworkitems?: string | null;
}
interface msdyn_conversationsuggestionrequestpayload_Create extends msdyn_conversationsuggestionrequestpayload {
}
interface msdyn_conversationsuggestionrequestpayload_Update extends msdyn_conversationsuggestionrequestpayload {
}
interface msdyn_conversationsuggestionrequestpayload_Select {
  createdby_guid: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_conversationid_guid: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { msdyn_conversationid_guid: string | null }, { msdyn_conversationid_formatted?: string }>;
  msdyn_conversationsuggestionrequestpayloadid: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { msdyn_conversationsuggestionrequestpayloadid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { msdyn_name: string | null }, {  }>;
  msdyn_requestpayload: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { msdyn_requestpayload: string | null }, {  }>;
  msdyn_responsepayload: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { msdyn_responsepayload: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { statecode: msdyn_conversationsuggestionrequestpayload_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { statuscode: msdyn_conversationsuggestionrequestpayload_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_conversationsuggestionrequestpayload_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_conversationsuggestionrequestpayload_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_conversationid_guid: XQW.Guid;
  msdyn_conversationsuggestionrequestpayloadid: XQW.Guid;
  msdyn_name: string;
  msdyn_requestpayload: string;
  msdyn_responsepayload: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_conversationsuggestionrequestpayload_statecode;
  statuscode: msdyn_conversationsuggestionrequestpayload_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_conversationsuggestionrequestpayload_Expand {
  createdby: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_conversationid: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_conversationid: msdyn_ocliveworkitem_Result }>;
  msdyn_conversationsuggestionrequestpayload_AsyncOperations: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_conversationsuggestionrequestpayload_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_conversationsuggestionrequestpayload_BulkDeleteFailures: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_conversationsuggestionrequestpayload_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_conversationsuggestionrequestpayload_DuplicateBaseRecord: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_conversationsuggestionrequestpayload_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_conversationsuggestionrequestpayload_DuplicateMatchingRecord: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_conversationsuggestionrequestpayload_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_conversationsuggestionrequestpayload_MailboxTrackingFolders: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_conversationsuggestionrequestpayload_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_conversationsuggestionrequestpayload_PrincipalObjectAttributeAccesses: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_conversationsuggestionrequestpayload_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_conversationsuggestionrequestpayload_ProcessSession: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_conversationsuggestionrequestpayload_ProcessSession: ProcessSession_Result[] }>;
  msdyn_conversationsuggestionrequestpayload_SyncErrors: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, SyncError_Select, SyncError_Filter, { msdyn_conversationsuggestionrequestpayload_SyncErrors: SyncError_Result[] }>;
  msdyn_conversationsuggestionrequestpayload_UserEntityInstanceDatas: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_conversationsuggestionrequestpayload_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_conversationsuggestionrequestpayload_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_conversationsuggestionrequestpayload_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_conversationid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_conversationsuggestionrequestpayload_Result extends msdyn_conversationsuggestionrequestpayload_Base, msdyn_conversationsuggestionrequestpayload_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_conversationid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_conversationsuggestionrequestpayload_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_conversationid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_conversationsuggestionrequestpayload_RelatedMany {
  msdyn_conversationsuggestionrequestpayload_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_conversationsuggestionrequestpayload_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_conversationsuggestionrequestpayload_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_conversationsuggestionrequestpayload_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_conversationsuggestionrequestpayload_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_conversationsuggestionrequestpayload_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_conversationsuggestionrequestpayload_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_conversationsuggestionrequestpayload_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_conversationsuggestionrequestpayload_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_conversationsuggestionrequestpayloads: WebMappingRetrieve<msdyn_conversationsuggestionrequestpayload_Select,msdyn_conversationsuggestionrequestpayload_Expand,msdyn_conversationsuggestionrequestpayload_Filter,msdyn_conversationsuggestionrequestpayload_Fixed,msdyn_conversationsuggestionrequestpayload_Result,msdyn_conversationsuggestionrequestpayload_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_conversationsuggestionrequestpayloads: WebMappingRelated<msdyn_conversationsuggestionrequestpayload_RelatedOne,msdyn_conversationsuggestionrequestpayload_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_conversationsuggestionrequestpayloads: WebMappingCUDA<msdyn_conversationsuggestionrequestpayload_Create,msdyn_conversationsuggestionrequestpayload_Update,msdyn_conversationsuggestionrequestpayload_Select>;
}
