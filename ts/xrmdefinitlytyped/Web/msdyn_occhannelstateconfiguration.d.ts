interface msdyn_occhannelstateconfiguration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_autocloseliveworkitemafter?: number | null;
  msdyn_name?: string | null;
  msdyn_occhannelstateconfigurationid?: string | null;
  msdyn_ocliveworkitemstate?: msdyn_conversation_statecode | null;
  msdyn_showconfirmationonsessionclose?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_occhannelstateconfiguration_statecode | null;
  statuscode?: msdyn_occhannelstateconfiguration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_occhannelstateconfiguration_Relationships {
  msdyn_occhannelstateconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_occhannelstateconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_occhannelstateconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_occhannelstateconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_occhannelstateconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_occhannelstateconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_occhannelstateconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_occhannelstateconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_occhannelstateconfiguration extends msdyn_occhannelstateconfiguration_Base, msdyn_occhannelstateconfiguration_Relationships {
  msdyn_occhannelconfigurationid_bind$msdyn_occhannelconfigurations?: string | null;
}
interface msdyn_occhannelstateconfiguration_Create extends msdyn_occhannelstateconfiguration {
}
interface msdyn_occhannelstateconfiguration_Update extends msdyn_occhannelstateconfiguration {
}
interface msdyn_occhannelstateconfiguration_Select {
  createdby_guid: WebAttribute<msdyn_occhannelstateconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_occhannelstateconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_occhannelstateconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_occhannelstateconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_occhannelstateconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_occhannelstateconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_occhannelstateconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_autocloseliveworkitemafter: WebAttribute<msdyn_occhannelstateconfiguration_Select, { msdyn_autocloseliveworkitemafter: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_occhannelstateconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_occhannelconfigurationid_guid: WebAttribute<msdyn_occhannelstateconfiguration_Select, { msdyn_occhannelconfigurationid_guid: string | null }, { msdyn_occhannelconfigurationid_formatted?: string }>;
  msdyn_occhannelstateconfigurationid: WebAttribute<msdyn_occhannelstateconfiguration_Select, { msdyn_occhannelstateconfigurationid: string | null }, {  }>;
  msdyn_ocliveworkitemstate: WebAttribute<msdyn_occhannelstateconfiguration_Select, { msdyn_ocliveworkitemstate: msdyn_conversation_statecode | null }, { msdyn_ocliveworkitemstate_formatted?: string }>;
  msdyn_showconfirmationonsessionclose: WebAttribute<msdyn_occhannelstateconfiguration_Select, { msdyn_showconfirmationonsessionclose: boolean | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_occhannelstateconfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_occhannelstateconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_occhannelstateconfiguration_Select, { statecode: msdyn_occhannelstateconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_occhannelstateconfiguration_Select, { statuscode: msdyn_occhannelstateconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_occhannelstateconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_occhannelstateconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_occhannelstateconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_occhannelstateconfiguration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_autocloseliveworkitemafter: number;
  msdyn_name: string;
  msdyn_occhannelconfigurationid_guid: XQW.Guid;
  msdyn_occhannelstateconfigurationid: XQW.Guid;
  msdyn_ocliveworkitemstate: msdyn_conversation_statecode;
  msdyn_showconfirmationonsessionclose: boolean;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_occhannelstateconfiguration_statecode;
  statuscode: msdyn_occhannelstateconfiguration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_occhannelstateconfiguration_Expand {
  createdby: WebExpand<msdyn_occhannelstateconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_occhannelstateconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_occhannelstateconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_occhannelstateconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_occhannelconfigurationid: WebExpand<msdyn_occhannelstateconfiguration_Expand, msdyn_occhannelconfiguration_Select, msdyn_occhannelconfiguration_Filter, { msdyn_occhannelconfigurationid: msdyn_occhannelconfiguration_Result }>;
  msdyn_occhannelstateconfiguration_AsyncOperations: WebExpand<msdyn_occhannelstateconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_occhannelstateconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_occhannelstateconfiguration_BulkDeleteFailures: WebExpand<msdyn_occhannelstateconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_occhannelstateconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_occhannelstateconfiguration_DuplicateBaseRecord: WebExpand<msdyn_occhannelstateconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_occhannelstateconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_occhannelstateconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_occhannelstateconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_occhannelstateconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_occhannelstateconfiguration_MailboxTrackingFolders: WebExpand<msdyn_occhannelstateconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_occhannelstateconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_occhannelstateconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_occhannelstateconfiguration_ProcessSession: WebExpand<msdyn_occhannelstateconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_occhannelstateconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_occhannelstateconfiguration_SyncErrors: WebExpand<msdyn_occhannelstateconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_occhannelstateconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_occhannelstateconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_occhannelstateconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_occhannelstateconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_occhannelstateconfiguration_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_occhannelstateconfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_occhannelconfigurationid_formatted?: string;
  msdyn_ocliveworkitemstate_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_occhannelstateconfiguration_Result extends msdyn_occhannelstateconfiguration_Base, msdyn_occhannelstateconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_occhannelconfigurationid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_occhannelstateconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_occhannelconfigurationid: WebMappingRetrieve<msdyn_occhannelconfiguration_Select,msdyn_occhannelconfiguration_Expand,msdyn_occhannelconfiguration_Filter,msdyn_occhannelconfiguration_Fixed,msdyn_occhannelconfiguration_Result,msdyn_occhannelconfiguration_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_occhannelstateconfiguration_RelatedMany {
  msdyn_occhannelstateconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_occhannelstateconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_occhannelstateconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_occhannelstateconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_occhannelstateconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_occhannelstateconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_occhannelstateconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_occhannelstateconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_occhannelstateconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_occhannelstateconfigurations: WebMappingRetrieve<msdyn_occhannelstateconfiguration_Select,msdyn_occhannelstateconfiguration_Expand,msdyn_occhannelstateconfiguration_Filter,msdyn_occhannelstateconfiguration_Fixed,msdyn_occhannelstateconfiguration_Result,msdyn_occhannelstateconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_occhannelstateconfigurations: WebMappingRelated<msdyn_occhannelstateconfiguration_RelatedOne,msdyn_occhannelstateconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_occhannelstateconfigurations: WebMappingCUDA<msdyn_occhannelstateconfiguration_Create,msdyn_occhannelstateconfiguration_Update,msdyn_occhannelstateconfiguration_Select>;
}
