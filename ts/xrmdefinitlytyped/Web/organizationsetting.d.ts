interface OrganizationSetting_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  displayname?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  organizationsettingid?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: organizationsetting_statecode | null;
  statuscode?: organizationsetting_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  uniquename?: string | null;
  utcconversiontimezonecode?: number | null;
  value?: string | null;
  versionnumber?: number | null;
}
interface OrganizationSetting_Relationships {
  organizationsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  organizationsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  organizationsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  organizationsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  organizationsetting_ProcessSession?: ProcessSession_Result[] | null;
  organizationsetting_SyncErrors?: SyncError_Result[] | null;
  organizationsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface OrganizationSetting extends OrganizationSetting_Base, OrganizationSetting_Relationships {
}
interface OrganizationSetting_Create extends OrganizationSetting {
  settingdefinitionid_bind$settingdefinitions?: string | null;
}
interface OrganizationSetting_Update extends OrganizationSetting {
}
interface OrganizationSetting_Select {
  componentidunique: WebAttribute<OrganizationSetting_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<OrganizationSetting_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<OrganizationSetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<OrganizationSetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<OrganizationSetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  displayname: WebAttribute<OrganizationSetting_Select, { displayname: string | null }, {  }>;
  importsequencenumber: WebAttribute<OrganizationSetting_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<OrganizationSetting_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<OrganizationSetting_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<OrganizationSetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<OrganizationSetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<OrganizationSetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<OrganizationSetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  organizationsettingid: WebAttribute<OrganizationSetting_Select, { organizationsettingid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<OrganizationSetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<OrganizationSetting_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  settingdefinitionid_guid: WebAttribute<OrganizationSetting_Select, { settingdefinitionid_guid: string | null }, { settingdefinitionid_formatted?: string }>;
  solutionid: WebAttribute<OrganizationSetting_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<OrganizationSetting_Select, { statecode: organizationsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<OrganizationSetting_Select, { statuscode: organizationsetting_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<OrganizationSetting_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<OrganizationSetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uniquename: WebAttribute<OrganizationSetting_Select, { uniquename: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<OrganizationSetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  value: WebAttribute<OrganizationSetting_Select, { value: string | null }, {  }>;
  versionnumber: WebAttribute<OrganizationSetting_Select, { versionnumber: number | null }, {  }>;
}
interface OrganizationSetting_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  displayname: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  organizationsettingid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  settingdefinitionid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: organizationsetting_statecode;
  statuscode: organizationsetting_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  uniquename: string;
  utcconversiontimezonecode: number;
  value: string;
  versionnumber: number;
}
interface OrganizationSetting_Expand {
  createdby: WebExpand<OrganizationSetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<OrganizationSetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<OrganizationSetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<OrganizationSetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<OrganizationSetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  organizationsetting_AsyncOperations: WebExpand<OrganizationSetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { organizationsetting_AsyncOperations: AsyncOperation_Result[] }>;
  organizationsetting_BulkDeleteFailures: WebExpand<OrganizationSetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { organizationsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  organizationsetting_MailboxTrackingFolders: WebExpand<OrganizationSetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { organizationsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  organizationsetting_PrincipalObjectAttributeAccesses: WebExpand<OrganizationSetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { organizationsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  organizationsetting_ProcessSession: WebExpand<OrganizationSetting_Expand, ProcessSession_Select, ProcessSession_Filter, { organizationsetting_ProcessSession: ProcessSession_Result[] }>;
  organizationsetting_SyncErrors: WebExpand<OrganizationSetting_Expand, SyncError_Select, SyncError_Filter, { organizationsetting_SyncErrors: SyncError_Result[] }>;
  organizationsetting_UserEntityInstanceDatas: WebExpand<OrganizationSetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { organizationsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  settingdefinitionid: WebExpand<OrganizationSetting_Expand, SettingDefinition_Select, SettingDefinition_Filter, { settingdefinitionid: SettingDefinition_Result }>;
}
interface OrganizationSetting_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  settingdefinitionid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface OrganizationSetting_Result extends OrganizationSetting_Base, OrganizationSetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  settingdefinitionid_guid: string | null;
}
interface OrganizationSetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  settingdefinitionid: WebMappingRetrieve<SettingDefinition_Select,SettingDefinition_Expand,SettingDefinition_Filter,SettingDefinition_Fixed,SettingDefinition_Result,SettingDefinition_FormattedResult>;
}
interface OrganizationSetting_RelatedMany {
  organizationsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  organizationsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  organizationsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  organizationsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  organizationsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  organizationsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  organizationsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  organizationsettings: WebMappingRetrieve<OrganizationSetting_Select,OrganizationSetting_Expand,OrganizationSetting_Filter,OrganizationSetting_Fixed,OrganizationSetting_Result,OrganizationSetting_FormattedResult>;
}
interface WebEntitiesRelated {
  organizationsettings: WebMappingRelated<OrganizationSetting_RelatedOne,OrganizationSetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  organizationsettings: WebMappingCUDA<OrganizationSetting_Create,OrganizationSetting_Update,OrganizationSetting_Select>;
}
