interface ManagedIdentity_Base extends WebEntity {
  applicationid?: string | null;
  clientsecret?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  credentialsource?: credentialsource | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  managedidentityid?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  objectid?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: managedidentity_statecode | null;
  statuscode?: managedidentity_statuscode | null;
  supportingsolutionid?: string | null;
  tenantid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ManagedIdentity_Relationships {
  managedidentity_AsyncOperations?: AsyncOperation_Result[] | null;
  managedidentity_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  managedidentity_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  managedidentity_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  managedidentity_KeyVaultReference?: KeyVaultReference_Result[] | null;
  managedidentity_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  managedidentity_PluginAssembly?: PluginAssembly_Result[] | null;
  managedidentity_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  managedidentity_ProcessSession?: ProcessSession_Result[] | null;
  managedidentity_SyncErrors?: SyncError_Result[] | null;
  managedidentity_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  managedidentity_emailserverprofile_managedidentityid?: EmailServerProfile_Result[] | null;
}
interface ManagedIdentity extends ManagedIdentity_Base, ManagedIdentity_Relationships {
  keyvaultreferenceid_bind$keyvaultreferences?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface ManagedIdentity_Create extends ManagedIdentity {
}
interface ManagedIdentity_Update extends ManagedIdentity {
}
interface ManagedIdentity_Select {
  applicationid: WebAttribute<ManagedIdentity_Select, { applicationid: string | null }, {  }>;
  clientsecret: WebAttribute<ManagedIdentity_Select, { clientsecret: string | null }, {  }>;
  componentidunique: WebAttribute<ManagedIdentity_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<ManagedIdentity_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ManagedIdentity_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ManagedIdentity_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ManagedIdentity_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  credentialsource: WebAttribute<ManagedIdentity_Select, { credentialsource: credentialsource | null }, { credentialsource_formatted?: string }>;
  importsequencenumber: WebAttribute<ManagedIdentity_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<ManagedIdentity_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<ManagedIdentity_Select, { ismanaged: boolean | null }, {  }>;
  keyvaultreferenceid_guid: WebAttribute<ManagedIdentity_Select, { keyvaultreferenceid_guid: string | null }, { keyvaultreferenceid_formatted?: string }>;
  managedidentityid: WebAttribute<ManagedIdentity_Select, { managedidentityid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<ManagedIdentity_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ManagedIdentity_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ManagedIdentity_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ManagedIdentity_Select, { name: string | null }, {  }>;
  objectid: WebAttribute<ManagedIdentity_Select, { objectid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ManagedIdentity_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<ManagedIdentity_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ManagedIdentity_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ManagedIdentity_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ManagedIdentity_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ManagedIdentity_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<ManagedIdentity_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<ManagedIdentity_Select, { statecode: managedidentity_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ManagedIdentity_Select, { statuscode: managedidentity_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<ManagedIdentity_Select, { supportingsolutionid: string | null }, {  }>;
  tenantid: WebAttribute<ManagedIdentity_Select, { tenantid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ManagedIdentity_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ManagedIdentity_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ManagedIdentity_Select, { versionnumber: number | null }, {  }>;
}
interface ManagedIdentity_Filter {
  applicationid: XQW.Guid;
  clientsecret: string;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  credentialsource: credentialsource;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  keyvaultreferenceid_guid: XQW.Guid;
  managedidentityid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  objectid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: managedidentity_statecode;
  statuscode: managedidentity_statuscode;
  supportingsolutionid: XQW.Guid;
  tenantid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ManagedIdentity_Expand {
  createdby: WebExpand<ManagedIdentity_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ManagedIdentity_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  keyvaultreferenceid: WebExpand<ManagedIdentity_Expand, KeyVaultReference_Select, KeyVaultReference_Filter, { keyvaultreferenceid: KeyVaultReference_Result }>;
  managedidentity_AsyncOperations: WebExpand<ManagedIdentity_Expand, AsyncOperation_Select, AsyncOperation_Filter, { managedidentity_AsyncOperations: AsyncOperation_Result[] }>;
  managedidentity_BulkDeleteFailures: WebExpand<ManagedIdentity_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { managedidentity_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  managedidentity_DuplicateBaseRecord: WebExpand<ManagedIdentity_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { managedidentity_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  managedidentity_DuplicateMatchingRecord: WebExpand<ManagedIdentity_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { managedidentity_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  managedidentity_KeyVaultReference: WebExpand<ManagedIdentity_Expand, KeyVaultReference_Select, KeyVaultReference_Filter, { managedidentity_KeyVaultReference: KeyVaultReference_Result[] }>;
  managedidentity_MailboxTrackingFolders: WebExpand<ManagedIdentity_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { managedidentity_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  managedidentity_PluginAssembly: WebExpand<ManagedIdentity_Expand, PluginAssembly_Select, PluginAssembly_Filter, { managedidentity_PluginAssembly: PluginAssembly_Result[] }>;
  managedidentity_PrincipalObjectAttributeAccesses: WebExpand<ManagedIdentity_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { managedidentity_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  managedidentity_ProcessSession: WebExpand<ManagedIdentity_Expand, ProcessSession_Select, ProcessSession_Filter, { managedidentity_ProcessSession: ProcessSession_Result[] }>;
  managedidentity_SyncErrors: WebExpand<ManagedIdentity_Expand, SyncError_Select, SyncError_Filter, { managedidentity_SyncErrors: SyncError_Result[] }>;
  managedidentity_UserEntityInstanceDatas: WebExpand<ManagedIdentity_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { managedidentity_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  managedidentity_emailserverprofile_managedidentityid: WebExpand<ManagedIdentity_Expand, EmailServerProfile_Select, EmailServerProfile_Filter, { managedidentity_emailserverprofile_managedidentityid: EmailServerProfile_Result[] }>;
  modifiedby: WebExpand<ManagedIdentity_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ManagedIdentity_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<ManagedIdentity_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<ManagedIdentity_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<ManagedIdentity_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ManagedIdentity_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface ManagedIdentity_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  credentialsource_formatted?: string;
  keyvaultreferenceid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ManagedIdentity_Result extends ManagedIdentity_Base, ManagedIdentity_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  keyvaultreferenceid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface ManagedIdentity_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  keyvaultreferenceid: WebMappingRetrieve<KeyVaultReference_Select,KeyVaultReference_Expand,KeyVaultReference_Filter,KeyVaultReference_Fixed,KeyVaultReference_Result,KeyVaultReference_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ManagedIdentity_RelatedMany {
  managedidentity_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  managedidentity_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  managedidentity_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  managedidentity_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  managedidentity_KeyVaultReference: WebMappingRetrieve<KeyVaultReference_Select,KeyVaultReference_Expand,KeyVaultReference_Filter,KeyVaultReference_Fixed,KeyVaultReference_Result,KeyVaultReference_FormattedResult>;
  managedidentity_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  managedidentity_PluginAssembly: WebMappingRetrieve<PluginAssembly_Select,PluginAssembly_Expand,PluginAssembly_Filter,PluginAssembly_Fixed,PluginAssembly_Result,PluginAssembly_FormattedResult>;
  managedidentity_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  managedidentity_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  managedidentity_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  managedidentity_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  managedidentity_emailserverprofile_managedidentityid: WebMappingRetrieve<EmailServerProfile_Select,EmailServerProfile_Expand,EmailServerProfile_Filter,EmailServerProfile_Fixed,EmailServerProfile_Result,EmailServerProfile_FormattedResult>;
}
interface WebEntitiesRetrieve {
  managedidentities: WebMappingRetrieve<ManagedIdentity_Select,ManagedIdentity_Expand,ManagedIdentity_Filter,ManagedIdentity_Fixed,ManagedIdentity_Result,ManagedIdentity_FormattedResult>;
}
interface WebEntitiesRelated {
  managedidentities: WebMappingRelated<ManagedIdentity_RelatedOne,ManagedIdentity_RelatedMany>;
}
interface WebEntitiesCUDA {
  managedidentities: WebMappingCUDA<ManagedIdentity_Create,ManagedIdentity_Update,ManagedIdentity_Select>;
}
