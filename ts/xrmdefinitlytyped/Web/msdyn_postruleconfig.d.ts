interface msdyn_PostRuleConfig_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_formatid?: string | null;
  msdyn_name?: string | null;
  msdyn_postruleconfigid?: string | null;
  msdyn_posttoyammer?: boolean | null;
  msdyn_ruleid?: string | null;
  msdyn_rulesource?: string | null;
  msdyn_stepid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_postruleconfig_statecode | null;
  statuscode?: msdyn_postruleconfig_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_PostRuleConfig_Relationships {
  msdyn_PostConfigId?: msdyn_PostConfig_Result | null;
  msdyn_postruleconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_postruleconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_postruleconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_postruleconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_postruleconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_postruleconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_postruleconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_PostRuleConfig extends msdyn_PostRuleConfig_Base, msdyn_PostRuleConfig_Relationships {
  msdyn_PostConfigId_bind$msdyn_postconfigs?: string | null;
}
interface msdyn_PostRuleConfig_Create extends msdyn_PostRuleConfig {
}
interface msdyn_PostRuleConfig_Update extends msdyn_PostRuleConfig {
}
interface msdyn_PostRuleConfig_Select {
  createdby_guid: WebAttribute<msdyn_PostRuleConfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_PostRuleConfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_PostRuleConfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_PostRuleConfig_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_PostRuleConfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_PostRuleConfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_PostRuleConfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_formatid: WebAttribute<msdyn_PostRuleConfig_Select, { msdyn_formatid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_PostRuleConfig_Select, { msdyn_name: string | null }, {  }>;
  msdyn_postconfigid_guid: WebAttribute<msdyn_PostRuleConfig_Select, { msdyn_postconfigid_guid: string | null }, { msdyn_postconfigid_formatted?: string }>;
  msdyn_postruleconfigid: WebAttribute<msdyn_PostRuleConfig_Select, { msdyn_postruleconfigid: string | null }, {  }>;
  msdyn_posttoyammer: WebAttribute<msdyn_PostRuleConfig_Select, { msdyn_posttoyammer: boolean | null }, {  }>;
  msdyn_ruleid: WebAttribute<msdyn_PostRuleConfig_Select, { msdyn_ruleid: string | null }, {  }>;
  msdyn_rulesource: WebAttribute<msdyn_PostRuleConfig_Select, { msdyn_rulesource: string | null }, {  }>;
  msdyn_stepid: WebAttribute<msdyn_PostRuleConfig_Select, { msdyn_stepid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_PostRuleConfig_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_PostRuleConfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_PostRuleConfig_Select, { statecode: msdyn_postruleconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_PostRuleConfig_Select, { statuscode: msdyn_postruleconfig_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_PostRuleConfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_PostRuleConfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_PostRuleConfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_PostRuleConfig_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_formatid: string;
  msdyn_name: string;
  msdyn_postconfigid_guid: XQW.Guid;
  msdyn_postruleconfigid: XQW.Guid;
  msdyn_posttoyammer: boolean;
  msdyn_ruleid: string;
  msdyn_rulesource: string;
  msdyn_stepid: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_postruleconfig_statecode;
  statuscode: msdyn_postruleconfig_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_PostRuleConfig_Expand {
  createdby: WebExpand<msdyn_PostRuleConfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_PostRuleConfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_PostRuleConfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_PostRuleConfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_PostConfigId: WebExpand<msdyn_PostRuleConfig_Expand, msdyn_PostConfig_Select, msdyn_PostConfig_Filter, { msdyn_PostConfigId: msdyn_PostConfig_Result }>;
  msdyn_postruleconfig_AsyncOperations: WebExpand<msdyn_PostRuleConfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_postruleconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_postruleconfig_BulkDeleteFailures: WebExpand<msdyn_PostRuleConfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_postruleconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_postruleconfig_MailboxTrackingFolders: WebExpand<msdyn_PostRuleConfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_postruleconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_postruleconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_PostRuleConfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_postruleconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_postruleconfig_ProcessSession: WebExpand<msdyn_PostRuleConfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_postruleconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_postruleconfig_SyncErrors: WebExpand<msdyn_PostRuleConfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_postruleconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_postruleconfig_UserEntityInstanceDatas: WebExpand<msdyn_PostRuleConfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_postruleconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_PostRuleConfig_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_PostRuleConfig_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_postconfigid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_PostRuleConfig_Result extends msdyn_PostRuleConfig_Base, msdyn_PostRuleConfig_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_postconfigid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_PostRuleConfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_PostConfigId: WebMappingRetrieve<msdyn_PostConfig_Select,msdyn_PostConfig_Expand,msdyn_PostConfig_Filter,msdyn_PostConfig_Fixed,msdyn_PostConfig_Result,msdyn_PostConfig_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_PostRuleConfig_RelatedMany {
  msdyn_postruleconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_postruleconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_postruleconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_postruleconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_postruleconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_postruleconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_postruleconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_postruleconfigs: WebMappingRetrieve<msdyn_PostRuleConfig_Select,msdyn_PostRuleConfig_Expand,msdyn_PostRuleConfig_Filter,msdyn_PostRuleConfig_Fixed,msdyn_PostRuleConfig_Result,msdyn_PostRuleConfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_postruleconfigs: WebMappingRelated<msdyn_PostRuleConfig_RelatedOne,msdyn_PostRuleConfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_postruleconfigs: WebMappingCUDA<msdyn_PostRuleConfig_Create,msdyn_PostRuleConfig_Update,msdyn_PostRuleConfig_Select>;
}
