interface msdyn_cannedmessage_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_cannedmessageid?: string | null;
  msdyn_locale_field?: msdyn_cannedmessage_msdyn_locale_field | null;
  msdyn_message?: string | null;
  msdyn_tagscontrolfield?: string | null;
  msdyn_title?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_cannedmessage_statecode | null;
  statuscode?: msdyn_cannedmessage_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_cannedmessage_Relationships {
  msdyn_cannedmessage_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_cannedmessage_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_cannedmessage_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_cannedmessage_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_cannedmessage_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_cannedmessage_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_cannedmessage_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_cannedmessage_SyncErrors?: SyncError_Result[] | null;
  msdyn_cannedmessage_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_cannedmessage_liveworkstream?: msdyn_liveworkstream_Result[] | null;
  msdyn_msdyn_cannedmessage_msdyn_octag?: msdyn_octag_Result[] | null;
}
interface msdyn_cannedmessage extends msdyn_cannedmessage_Base, msdyn_cannedmessage_Relationships {
}
interface msdyn_cannedmessage_Create extends msdyn_cannedmessage {
}
interface msdyn_cannedmessage_Update extends msdyn_cannedmessage {
}
interface msdyn_cannedmessage_Select {
  createdby_guid: WebAttribute<msdyn_cannedmessage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_cannedmessage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_cannedmessage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_cannedmessage_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_cannedmessage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_cannedmessage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_cannedmessage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_cannedmessageid: WebAttribute<msdyn_cannedmessage_Select, { msdyn_cannedmessageid: string | null }, {  }>;
  msdyn_locale_field: WebAttribute<msdyn_cannedmessage_Select, { msdyn_locale_field: msdyn_cannedmessage_msdyn_locale_field | null }, { msdyn_locale_field_formatted?: string }>;
  msdyn_message: WebAttribute<msdyn_cannedmessage_Select, { msdyn_message: string | null }, {  }>;
  msdyn_tagscontrolfield: WebAttribute<msdyn_cannedmessage_Select, { msdyn_tagscontrolfield: string | null }, {  }>;
  msdyn_title: WebAttribute<msdyn_cannedmessage_Select, { msdyn_title: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_cannedmessage_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_cannedmessage_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_cannedmessage_Select, { statecode: msdyn_cannedmessage_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_cannedmessage_Select, { statuscode: msdyn_cannedmessage_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_cannedmessage_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_cannedmessage_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_cannedmessage_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_cannedmessage_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_cannedmessageid: XQW.Guid;
  msdyn_locale_field: msdyn_cannedmessage_msdyn_locale_field;
  msdyn_message: string;
  msdyn_tagscontrolfield: string;
  msdyn_title: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_cannedmessage_statecode;
  statuscode: msdyn_cannedmessage_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_cannedmessage_Expand {
  createdby: WebExpand<msdyn_cannedmessage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_cannedmessage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_cannedmessage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_cannedmessage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_cannedmessage_AsyncOperations: WebExpand<msdyn_cannedmessage_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_cannedmessage_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_cannedmessage_BulkDeleteFailures: WebExpand<msdyn_cannedmessage_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_cannedmessage_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_cannedmessage_DuplicateBaseRecord: WebExpand<msdyn_cannedmessage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_cannedmessage_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_cannedmessage_DuplicateMatchingRecord: WebExpand<msdyn_cannedmessage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_cannedmessage_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_cannedmessage_MailboxTrackingFolders: WebExpand<msdyn_cannedmessage_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_cannedmessage_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_cannedmessage_PrincipalObjectAttributeAccesses: WebExpand<msdyn_cannedmessage_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_cannedmessage_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_cannedmessage_ProcessSession: WebExpand<msdyn_cannedmessage_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_cannedmessage_ProcessSession: ProcessSession_Result[] }>;
  msdyn_cannedmessage_SyncErrors: WebExpand<msdyn_cannedmessage_Expand, SyncError_Select, SyncError_Filter, { msdyn_cannedmessage_SyncErrors: SyncError_Result[] }>;
  msdyn_cannedmessage_UserEntityInstanceDatas: WebExpand<msdyn_cannedmessage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_cannedmessage_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_cannedmessage_liveworkstream: WebExpand<msdyn_cannedmessage_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_msdyn_cannedmessage_liveworkstream: msdyn_liveworkstream_Result[] }>;
  msdyn_msdyn_cannedmessage_msdyn_octag: WebExpand<msdyn_cannedmessage_Expand, msdyn_octag_Select, msdyn_octag_Filter, { msdyn_msdyn_cannedmessage_msdyn_octag: msdyn_octag_Result[] }>;
  organizationid: WebExpand<msdyn_cannedmessage_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_cannedmessage_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_locale_field_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_cannedmessage_Result extends msdyn_cannedmessage_Base, msdyn_cannedmessage_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_cannedmessage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_cannedmessage_RelatedMany {
  msdyn_cannedmessage_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_cannedmessage_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_cannedmessage_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_cannedmessage_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_cannedmessage_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_cannedmessage_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_cannedmessage_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_cannedmessage_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_cannedmessage_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_cannedmessage_liveworkstream: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  msdyn_msdyn_cannedmessage_msdyn_octag: WebMappingRetrieve<msdyn_octag_Select,msdyn_octag_Expand,msdyn_octag_Filter,msdyn_octag_Fixed,msdyn_octag_Result,msdyn_octag_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_cannedmessages: WebMappingRetrieve<msdyn_cannedmessage_Select,msdyn_cannedmessage_Expand,msdyn_cannedmessage_Filter,msdyn_cannedmessage_Fixed,msdyn_cannedmessage_Result,msdyn_cannedmessage_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_cannedmessages: WebMappingRelated<msdyn_cannedmessage_RelatedOne,msdyn_cannedmessage_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_cannedmessages: WebMappingCUDA<msdyn_cannedmessage_Create,msdyn_cannedmessage_Update,msdyn_cannedmessage_Select>;
}
