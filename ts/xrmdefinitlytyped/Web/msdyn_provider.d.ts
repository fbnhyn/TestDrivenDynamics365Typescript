interface msdyn_provider_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_providerid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_provider_statecode | null;
  statuscode?: msdyn_provider_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_provider_Relationships {
  msdyn_msdyn_provider_msdyn_channelcapability_Provider?: msdyn_channelcapability_Result[] | null;
  msdyn_provider_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_provider_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_provider_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_provider_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_provider_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_provider_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_provider_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_provider_SyncErrors?: SyncError_Result[] | null;
  msdyn_provider_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_provider extends msdyn_provider_Base, msdyn_provider_Relationships {
}
interface msdyn_provider_Create extends msdyn_provider {
}
interface msdyn_provider_Update extends msdyn_provider {
}
interface msdyn_provider_Select {
  createdby_guid: WebAttribute<msdyn_provider_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_provider_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_provider_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_provider_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_provider_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_provider_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_provider_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_provider_Select, { msdyn_name: string | null }, {  }>;
  msdyn_providerid: WebAttribute<msdyn_provider_Select, { msdyn_providerid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_provider_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_provider_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_provider_Select, { statecode: msdyn_provider_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_provider_Select, { statuscode: msdyn_provider_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_provider_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_provider_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_provider_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_provider_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_providerid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_provider_statecode;
  statuscode: msdyn_provider_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_provider_Expand {
  createdby: WebExpand<msdyn_provider_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_provider_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_provider_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_provider_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_provider_msdyn_channelcapability_Provider: WebExpand<msdyn_provider_Expand, msdyn_channelcapability_Select, msdyn_channelcapability_Filter, { msdyn_msdyn_provider_msdyn_channelcapability_Provider: msdyn_channelcapability_Result[] }>;
  msdyn_provider_AsyncOperations: WebExpand<msdyn_provider_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_provider_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_provider_BulkDeleteFailures: WebExpand<msdyn_provider_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_provider_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_provider_DuplicateBaseRecord: WebExpand<msdyn_provider_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_provider_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_provider_DuplicateMatchingRecord: WebExpand<msdyn_provider_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_provider_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_provider_MailboxTrackingFolders: WebExpand<msdyn_provider_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_provider_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_provider_PrincipalObjectAttributeAccesses: WebExpand<msdyn_provider_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_provider_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_provider_ProcessSession: WebExpand<msdyn_provider_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_provider_ProcessSession: ProcessSession_Result[] }>;
  msdyn_provider_SyncErrors: WebExpand<msdyn_provider_Expand, SyncError_Select, SyncError_Filter, { msdyn_provider_SyncErrors: SyncError_Result[] }>;
  msdyn_provider_UserEntityInstanceDatas: WebExpand<msdyn_provider_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_provider_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_provider_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_provider_FormattedResult {
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
interface msdyn_provider_Result extends msdyn_provider_Base, msdyn_provider_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_provider_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_provider_RelatedMany {
  msdyn_msdyn_provider_msdyn_channelcapability_Provider: WebMappingRetrieve<msdyn_channelcapability_Select,msdyn_channelcapability_Expand,msdyn_channelcapability_Filter,msdyn_channelcapability_Fixed,msdyn_channelcapability_Result,msdyn_channelcapability_FormattedResult>;
  msdyn_provider_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_provider_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_provider_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_provider_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_provider_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_provider_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_provider_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_provider_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_provider_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_providers: WebMappingRetrieve<msdyn_provider_Select,msdyn_provider_Expand,msdyn_provider_Filter,msdyn_provider_Fixed,msdyn_provider_Result,msdyn_provider_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_providers: WebMappingRelated<msdyn_provider_RelatedOne,msdyn_provider_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_providers: WebMappingCUDA<msdyn_provider_Create,msdyn_provider_Update,msdyn_provider_Select>;
}
