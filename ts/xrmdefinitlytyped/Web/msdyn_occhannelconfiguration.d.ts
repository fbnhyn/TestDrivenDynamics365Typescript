interface msdyn_occhannelconfiguration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_closeconversationifoooh?: boolean | null;
  msdyn_enabletransfertoooohqueue?: boolean | null;
  msdyn_engagementcontext?: string | null;
  msdyn_name?: string | null;
  msdyn_occhannelconfigurationid?: string | null;
  msdyn_privacytermsaccepted?: boolean | null;
  msdyn_privacytermsversion?: string | null;
  msdyn_streamsource?: msdyn_streamsource | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_occhannelconfiguration_statecode | null;
  statuscode?: msdyn_occhannelconfiguration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_occhannelconfiguration_Relationships {
  msdyn_msdyn_occhannelconfiguration_msdyn_occhannelstateconfiguration_occhannelconfigurationid?: msdyn_occhannelstateconfiguration_Result[] | null;
  msdyn_occhannelconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_occhannelconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_occhannelconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_occhannelconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_occhannelconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_occhannelconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_occhannelconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_occhannelconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_occhannelconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_occhannelconfiguration extends msdyn_occhannelconfiguration_Base, msdyn_occhannelconfiguration_Relationships {
}
interface msdyn_occhannelconfiguration_Create extends msdyn_occhannelconfiguration {
}
interface msdyn_occhannelconfiguration_Update extends msdyn_occhannelconfiguration {
}
interface msdyn_occhannelconfiguration_Select {
  createdby_guid: WebAttribute<msdyn_occhannelconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_occhannelconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_occhannelconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_occhannelconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_occhannelconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_occhannelconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_occhannelconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_closeconversationifoooh: WebAttribute<msdyn_occhannelconfiguration_Select, { msdyn_closeconversationifoooh: boolean | null }, {  }>;
  msdyn_enabletransfertoooohqueue: WebAttribute<msdyn_occhannelconfiguration_Select, { msdyn_enabletransfertoooohqueue: boolean | null }, {  }>;
  msdyn_engagementcontext: WebAttribute<msdyn_occhannelconfiguration_Select, { msdyn_engagementcontext: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_occhannelconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_occhannelconfigurationid: WebAttribute<msdyn_occhannelconfiguration_Select, { msdyn_occhannelconfigurationid: string | null }, {  }>;
  msdyn_privacytermsaccepted: WebAttribute<msdyn_occhannelconfiguration_Select, { msdyn_privacytermsaccepted: boolean | null }, {  }>;
  msdyn_privacytermsversion: WebAttribute<msdyn_occhannelconfiguration_Select, { msdyn_privacytermsversion: string | null }, {  }>;
  msdyn_streamsource: WebAttribute<msdyn_occhannelconfiguration_Select, { msdyn_streamsource: msdyn_streamsource | null }, { msdyn_streamsource_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_occhannelconfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_occhannelconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_occhannelconfiguration_Select, { statecode: msdyn_occhannelconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_occhannelconfiguration_Select, { statuscode: msdyn_occhannelconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_occhannelconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_occhannelconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_occhannelconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_occhannelconfiguration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_closeconversationifoooh: boolean;
  msdyn_enabletransfertoooohqueue: boolean;
  msdyn_engagementcontext: string;
  msdyn_name: string;
  msdyn_occhannelconfigurationid: XQW.Guid;
  msdyn_privacytermsaccepted: boolean;
  msdyn_privacytermsversion: string;
  msdyn_streamsource: msdyn_streamsource;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_occhannelconfiguration_statecode;
  statuscode: msdyn_occhannelconfiguration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_occhannelconfiguration_Expand {
  createdby: WebExpand<msdyn_occhannelconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_occhannelconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_occhannelconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_occhannelconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_occhannelconfiguration_msdyn_occhannelstateconfiguration_occhannelconfigurationid: WebExpand<msdyn_occhannelconfiguration_Expand, msdyn_occhannelstateconfiguration_Select, msdyn_occhannelstateconfiguration_Filter, { msdyn_msdyn_occhannelconfiguration_msdyn_occhannelstateconfiguration_occhannelconfigurationid: msdyn_occhannelstateconfiguration_Result[] }>;
  msdyn_occhannelconfiguration_AsyncOperations: WebExpand<msdyn_occhannelconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_occhannelconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_occhannelconfiguration_BulkDeleteFailures: WebExpand<msdyn_occhannelconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_occhannelconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_occhannelconfiguration_DuplicateBaseRecord: WebExpand<msdyn_occhannelconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_occhannelconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_occhannelconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_occhannelconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_occhannelconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_occhannelconfiguration_MailboxTrackingFolders: WebExpand<msdyn_occhannelconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_occhannelconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_occhannelconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_occhannelconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_occhannelconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_occhannelconfiguration_ProcessSession: WebExpand<msdyn_occhannelconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_occhannelconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_occhannelconfiguration_SyncErrors: WebExpand<msdyn_occhannelconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_occhannelconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_occhannelconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_occhannelconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_occhannelconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_occhannelconfiguration_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_occhannelconfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_streamsource_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_occhannelconfiguration_Result extends msdyn_occhannelconfiguration_Base, msdyn_occhannelconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_occhannelconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_occhannelconfiguration_RelatedMany {
  msdyn_msdyn_occhannelconfiguration_msdyn_occhannelstateconfiguration_occhannelconfigurationid: WebMappingRetrieve<msdyn_occhannelstateconfiguration_Select,msdyn_occhannelstateconfiguration_Expand,msdyn_occhannelstateconfiguration_Filter,msdyn_occhannelstateconfiguration_Fixed,msdyn_occhannelstateconfiguration_Result,msdyn_occhannelstateconfiguration_FormattedResult>;
  msdyn_occhannelconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_occhannelconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_occhannelconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_occhannelconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_occhannelconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_occhannelconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_occhannelconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_occhannelconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_occhannelconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_occhannelconfigurations: WebMappingRetrieve<msdyn_occhannelconfiguration_Select,msdyn_occhannelconfiguration_Expand,msdyn_occhannelconfiguration_Filter,msdyn_occhannelconfiguration_Fixed,msdyn_occhannelconfiguration_Result,msdyn_occhannelconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_occhannelconfigurations: WebMappingRelated<msdyn_occhannelconfiguration_RelatedOne,msdyn_occhannelconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_occhannelconfigurations: WebMappingCUDA<msdyn_occhannelconfiguration_Create,msdyn_occhannelconfiguration_Update,msdyn_occhannelconfiguration_Select>;
}
