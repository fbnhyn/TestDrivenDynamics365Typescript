interface msdyn_octag_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_octagid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_octag_statecode | null;
  statuscode?: msdyn_octag_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_octag_Relationships {
  msdyn_msdyn_cannedmessage_msdyn_octag?: msdyn_cannedmessage_Result[] | null;
  msdyn_msdyn_personalmessage_msdyn_octag?: msdyn_personalmessage_Result[] | null;
  msdyn_octag_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_octag_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_octag_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_octag_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_octag_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_octag_SyncErrors?: SyncError_Result[] | null;
  msdyn_octag_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_octag extends msdyn_octag_Base, msdyn_octag_Relationships {
}
interface msdyn_octag_Create extends msdyn_octag {
}
interface msdyn_octag_Update extends msdyn_octag {
}
interface msdyn_octag_Select {
  createdby_guid: WebAttribute<msdyn_octag_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_octag_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_octag_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_octag_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_octag_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_octag_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_octag_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_octag_Select, { msdyn_name: string | null }, {  }>;
  msdyn_octagid: WebAttribute<msdyn_octag_Select, { msdyn_octagid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_octag_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_octag_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_octag_Select, { statecode: msdyn_octag_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_octag_Select, { statuscode: msdyn_octag_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_octag_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_octag_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_octag_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_octag_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_octagid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_octag_statecode;
  statuscode: msdyn_octag_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_octag_Expand {
  createdby: WebExpand<msdyn_octag_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_octag_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_octag_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_octag_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_cannedmessage_msdyn_octag: WebExpand<msdyn_octag_Expand, msdyn_cannedmessage_Select, msdyn_cannedmessage_Filter, { msdyn_msdyn_cannedmessage_msdyn_octag: msdyn_cannedmessage_Result[] }>;
  msdyn_msdyn_personalmessage_msdyn_octag: WebExpand<msdyn_octag_Expand, msdyn_personalmessage_Select, msdyn_personalmessage_Filter, { msdyn_msdyn_personalmessage_msdyn_octag: msdyn_personalmessage_Result[] }>;
  msdyn_octag_AsyncOperations: WebExpand<msdyn_octag_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_octag_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_octag_BulkDeleteFailures: WebExpand<msdyn_octag_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_octag_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_octag_MailboxTrackingFolders: WebExpand<msdyn_octag_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_octag_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_octag_PrincipalObjectAttributeAccesses: WebExpand<msdyn_octag_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_octag_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_octag_ProcessSession: WebExpand<msdyn_octag_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_octag_ProcessSession: ProcessSession_Result[] }>;
  msdyn_octag_SyncErrors: WebExpand<msdyn_octag_Expand, SyncError_Select, SyncError_Filter, { msdyn_octag_SyncErrors: SyncError_Result[] }>;
  msdyn_octag_UserEntityInstanceDatas: WebExpand<msdyn_octag_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_octag_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_octag_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_octag_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_octag_Result extends msdyn_octag_Base, msdyn_octag_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_octag_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_octag_RelatedMany {
  msdyn_msdyn_cannedmessage_msdyn_octag: WebMappingRetrieve<msdyn_cannedmessage_Select,msdyn_cannedmessage_Expand,msdyn_cannedmessage_Filter,msdyn_cannedmessage_Fixed,msdyn_cannedmessage_Result,msdyn_cannedmessage_FormattedResult>;
  msdyn_msdyn_personalmessage_msdyn_octag: WebMappingRetrieve<msdyn_personalmessage_Select,msdyn_personalmessage_Expand,msdyn_personalmessage_Filter,msdyn_personalmessage_Fixed,msdyn_personalmessage_Result,msdyn_personalmessage_FormattedResult>;
  msdyn_octag_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_octag_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_octag_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_octag_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_octag_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_octag_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_octag_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_octags: WebMappingRetrieve<msdyn_octag_Select,msdyn_octag_Expand,msdyn_octag_Filter,msdyn_octag_Fixed,msdyn_octag_Result,msdyn_octag_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_octags: WebMappingRelated<msdyn_octag_RelatedOne,msdyn_octag_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_octags: WebMappingCUDA<msdyn_octag_Create,msdyn_octag_Update,msdyn_octag_Select>;
}
