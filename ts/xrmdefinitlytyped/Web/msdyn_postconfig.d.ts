interface msdyn_PostConfig_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_configurewall?: boolean | null;
  msdyn_entitydisplayname?: string | null;
  msdyn_entityname?: string | null;
  msdyn_followingviewid?: string | null;
  msdyn_followingviewid2?: string | null;
  msdyn_otc?: number | null;
  msdyn_postconfigid?: string | null;
  msdyn_status?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_postconfig_statecode | null;
  statuscode?: msdyn_postconfig_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_PostConfig_Relationships {
  msdyn_postconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_postconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_postconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_postconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_postconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_postconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_postconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_postconfig_msdyn_postruleconfig?: msdyn_PostRuleConfig_Result[] | null;
  msdyn_postconfig_wallsavedquery?: msdyn_wallsavedquery_Result[] | null;
}
interface msdyn_PostConfig extends msdyn_PostConfig_Base, msdyn_PostConfig_Relationships {
}
interface msdyn_PostConfig_Create extends msdyn_PostConfig {
}
interface msdyn_PostConfig_Update extends msdyn_PostConfig {
}
interface msdyn_PostConfig_Select {
  createdby_guid: WebAttribute<msdyn_PostConfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_PostConfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_PostConfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_PostConfig_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_PostConfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_PostConfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_PostConfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_configurewall: WebAttribute<msdyn_PostConfig_Select, { msdyn_configurewall: boolean | null }, {  }>;
  msdyn_entitydisplayname: WebAttribute<msdyn_PostConfig_Select, { msdyn_entitydisplayname: string | null }, {  }>;
  msdyn_entityname: WebAttribute<msdyn_PostConfig_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_followingviewid: WebAttribute<msdyn_PostConfig_Select, { msdyn_followingviewid: string | null }, {  }>;
  msdyn_followingviewid2: WebAttribute<msdyn_PostConfig_Select, { msdyn_followingviewid2: string | null }, {  }>;
  msdyn_otc: WebAttribute<msdyn_PostConfig_Select, { msdyn_otc: number | null }, {  }>;
  msdyn_postconfigid: WebAttribute<msdyn_PostConfig_Select, { msdyn_postconfigid: string | null }, {  }>;
  msdyn_status: WebAttribute<msdyn_PostConfig_Select, { msdyn_status: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_PostConfig_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_PostConfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_PostConfig_Select, { statecode: msdyn_postconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_PostConfig_Select, { statuscode: msdyn_postconfig_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_PostConfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_PostConfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_PostConfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_PostConfig_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_configurewall: boolean;
  msdyn_entitydisplayname: string;
  msdyn_entityname: string;
  msdyn_followingviewid: string;
  msdyn_followingviewid2: string;
  msdyn_otc: number;
  msdyn_postconfigid: XQW.Guid;
  msdyn_status: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_postconfig_statecode;
  statuscode: msdyn_postconfig_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_PostConfig_Expand {
  createdby: WebExpand<msdyn_PostConfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_PostConfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_PostConfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_PostConfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_postconfig_AsyncOperations: WebExpand<msdyn_PostConfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_postconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_postconfig_BulkDeleteFailures: WebExpand<msdyn_PostConfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_postconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_postconfig_MailboxTrackingFolders: WebExpand<msdyn_PostConfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_postconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_postconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_PostConfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_postconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_postconfig_ProcessSession: WebExpand<msdyn_PostConfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_postconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_postconfig_SyncErrors: WebExpand<msdyn_PostConfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_postconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_postconfig_UserEntityInstanceDatas: WebExpand<msdyn_PostConfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_postconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_postconfig_msdyn_postruleconfig: WebExpand<msdyn_PostConfig_Expand, msdyn_PostRuleConfig_Select, msdyn_PostRuleConfig_Filter, { msdyn_postconfig_msdyn_postruleconfig: msdyn_PostRuleConfig_Result[] }>;
  msdyn_postconfig_wallsavedquery: WebExpand<msdyn_PostConfig_Expand, msdyn_wallsavedquery_Select, msdyn_wallsavedquery_Filter, { msdyn_postconfig_wallsavedquery: msdyn_wallsavedquery_Result[] }>;
  organizationid: WebExpand<msdyn_PostConfig_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_PostConfig_FormattedResult {
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
interface msdyn_PostConfig_Result extends msdyn_PostConfig_Base, msdyn_PostConfig_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_PostConfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_PostConfig_RelatedMany {
  msdyn_postconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_postconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_postconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_postconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_postconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_postconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_postconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_postconfig_msdyn_postruleconfig: WebMappingRetrieve<msdyn_PostRuleConfig_Select,msdyn_PostRuleConfig_Expand,msdyn_PostRuleConfig_Filter,msdyn_PostRuleConfig_Fixed,msdyn_PostRuleConfig_Result,msdyn_PostRuleConfig_FormattedResult>;
  msdyn_postconfig_wallsavedquery: WebMappingRetrieve<msdyn_wallsavedquery_Select,msdyn_wallsavedquery_Expand,msdyn_wallsavedquery_Filter,msdyn_wallsavedquery_Fixed,msdyn_wallsavedquery_Result,msdyn_wallsavedquery_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_postconfigs: WebMappingRetrieve<msdyn_PostConfig_Select,msdyn_PostConfig_Expand,msdyn_PostConfig_Filter,msdyn_PostConfig_Fixed,msdyn_PostConfig_Result,msdyn_PostConfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_postconfigs: WebMappingRelated<msdyn_PostConfig_RelatedOne,msdyn_PostConfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_postconfigs: WebMappingCUDA<msdyn_PostConfig_Create,msdyn_PostConfig_Update,msdyn_PostConfig_Select>;
}
