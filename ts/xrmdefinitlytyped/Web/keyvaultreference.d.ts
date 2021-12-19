interface KeyVaultReference_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  isvalidated?: boolean | null;
  keyname?: string | null;
  keytype?: keytype | null;
  keyvaultreferenceid?: string | null;
  keyvaulturi?: string | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  preauthorizedapplicationtype?: preauthorizedapplicationtype | null;
  solutionid?: string | null;
  statecode?: keyvaultreference_statecode | null;
  statuscode?: keyvaultreference_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface KeyVaultReference_Relationships {
  keyvaultreference_AsyncOperations?: AsyncOperation_Result[] | null;
  keyvaultreference_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  keyvaultreference_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  keyvaultreference_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  keyvaultreference_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  keyvaultreference_ManagedIdentity?: ManagedIdentity_Result[] | null;
  keyvaultreference_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  keyvaultreference_ProcessSession?: ProcessSession_Result[] | null;
  keyvaultreference_ServiceEndpoint?: ServiceEndpoint_Result[] | null;
  keyvaultreference_SyncErrors?: SyncError_Result[] | null;
  keyvaultreference_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  keyvaultreference_emailserverprofile_keyvaultreferenceid?: EmailServerProfile_Result[] | null;
}
interface KeyVaultReference extends KeyVaultReference_Base, KeyVaultReference_Relationships {
  managedidentityid_bind$managedidentities?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface KeyVaultReference_Create extends KeyVaultReference {
}
interface KeyVaultReference_Update extends KeyVaultReference {
}
interface KeyVaultReference_Select {
  componentidunique: WebAttribute<KeyVaultReference_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<KeyVaultReference_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<KeyVaultReference_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<KeyVaultReference_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<KeyVaultReference_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<KeyVaultReference_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<KeyVaultReference_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<KeyVaultReference_Select, { ismanaged: boolean | null }, {  }>;
  isvalidated: WebAttribute<KeyVaultReference_Select, { isvalidated: boolean | null }, {  }>;
  keyname: WebAttribute<KeyVaultReference_Select, { keyname: string | null }, {  }>;
  keytype: WebAttribute<KeyVaultReference_Select, { keytype: keytype | null }, { keytype_formatted?: string }>;
  keyvaultreferenceid: WebAttribute<KeyVaultReference_Select, { keyvaultreferenceid: string | null }, {  }>;
  keyvaulturi: WebAttribute<KeyVaultReference_Select, { keyvaulturi: string | null }, {  }>;
  managedidentityid_guid: WebAttribute<KeyVaultReference_Select, { managedidentityid_guid: string | null }, { managedidentityid_formatted?: string }>;
  modifiedby_guid: WebAttribute<KeyVaultReference_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<KeyVaultReference_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<KeyVaultReference_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<KeyVaultReference_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<KeyVaultReference_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<KeyVaultReference_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<KeyVaultReference_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<KeyVaultReference_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<KeyVaultReference_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  preauthorizedapplicationtype: WebAttribute<KeyVaultReference_Select, { preauthorizedapplicationtype: preauthorizedapplicationtype | null }, { preauthorizedapplicationtype_formatted?: string }>;
  solutionid: WebAttribute<KeyVaultReference_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<KeyVaultReference_Select, { statecode: keyvaultreference_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<KeyVaultReference_Select, { statuscode: keyvaultreference_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<KeyVaultReference_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<KeyVaultReference_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<KeyVaultReference_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<KeyVaultReference_Select, { versionnumber: number | null }, {  }>;
}
interface KeyVaultReference_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  isvalidated: boolean;
  keyname: string;
  keytype: keytype;
  keyvaultreferenceid: XQW.Guid;
  keyvaulturi: string;
  managedidentityid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  preauthorizedapplicationtype: preauthorizedapplicationtype;
  solutionid: XQW.Guid;
  statecode: keyvaultreference_statecode;
  statuscode: keyvaultreference_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface KeyVaultReference_Expand {
  createdby: WebExpand<KeyVaultReference_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<KeyVaultReference_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  keyvaultreference_AsyncOperations: WebExpand<KeyVaultReference_Expand, AsyncOperation_Select, AsyncOperation_Filter, { keyvaultreference_AsyncOperations: AsyncOperation_Result[] }>;
  keyvaultreference_BulkDeleteFailures: WebExpand<KeyVaultReference_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { keyvaultreference_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  keyvaultreference_DuplicateBaseRecord: WebExpand<KeyVaultReference_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { keyvaultreference_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  keyvaultreference_DuplicateMatchingRecord: WebExpand<KeyVaultReference_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { keyvaultreference_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  keyvaultreference_MailboxTrackingFolders: WebExpand<KeyVaultReference_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { keyvaultreference_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  keyvaultreference_ManagedIdentity: WebExpand<KeyVaultReference_Expand, ManagedIdentity_Select, ManagedIdentity_Filter, { keyvaultreference_ManagedIdentity: ManagedIdentity_Result[] }>;
  keyvaultreference_PrincipalObjectAttributeAccesses: WebExpand<KeyVaultReference_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { keyvaultreference_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  keyvaultreference_ProcessSession: WebExpand<KeyVaultReference_Expand, ProcessSession_Select, ProcessSession_Filter, { keyvaultreference_ProcessSession: ProcessSession_Result[] }>;
  keyvaultreference_ServiceEndpoint: WebExpand<KeyVaultReference_Expand, ServiceEndpoint_Select, ServiceEndpoint_Filter, { keyvaultreference_ServiceEndpoint: ServiceEndpoint_Result[] }>;
  keyvaultreference_SyncErrors: WebExpand<KeyVaultReference_Expand, SyncError_Select, SyncError_Filter, { keyvaultreference_SyncErrors: SyncError_Result[] }>;
  keyvaultreference_UserEntityInstanceDatas: WebExpand<KeyVaultReference_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { keyvaultreference_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  keyvaultreference_emailserverprofile_keyvaultreferenceid: WebExpand<KeyVaultReference_Expand, EmailServerProfile_Select, EmailServerProfile_Filter, { keyvaultreference_emailserverprofile_keyvaultreferenceid: EmailServerProfile_Result[] }>;
  managedidentityid: WebExpand<KeyVaultReference_Expand, ManagedIdentity_Select, ManagedIdentity_Filter, { managedidentityid: ManagedIdentity_Result }>;
  modifiedby: WebExpand<KeyVaultReference_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<KeyVaultReference_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<KeyVaultReference_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<KeyVaultReference_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<KeyVaultReference_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<KeyVaultReference_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface KeyVaultReference_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  keytype_formatted?: string;
  managedidentityid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  preauthorizedapplicationtype_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface KeyVaultReference_Result extends KeyVaultReference_Base, KeyVaultReference_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  managedidentityid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface KeyVaultReference_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  managedidentityid: WebMappingRetrieve<ManagedIdentity_Select,ManagedIdentity_Expand,ManagedIdentity_Filter,ManagedIdentity_Fixed,ManagedIdentity_Result,ManagedIdentity_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface KeyVaultReference_RelatedMany {
  keyvaultreference_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  keyvaultreference_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  keyvaultreference_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  keyvaultreference_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  keyvaultreference_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  keyvaultreference_ManagedIdentity: WebMappingRetrieve<ManagedIdentity_Select,ManagedIdentity_Expand,ManagedIdentity_Filter,ManagedIdentity_Fixed,ManagedIdentity_Result,ManagedIdentity_FormattedResult>;
  keyvaultreference_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  keyvaultreference_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  keyvaultreference_ServiceEndpoint: WebMappingRetrieve<ServiceEndpoint_Select,ServiceEndpoint_Expand,ServiceEndpoint_Filter,ServiceEndpoint_Fixed,ServiceEndpoint_Result,ServiceEndpoint_FormattedResult>;
  keyvaultreference_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  keyvaultreference_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  keyvaultreference_emailserverprofile_keyvaultreferenceid: WebMappingRetrieve<EmailServerProfile_Select,EmailServerProfile_Expand,EmailServerProfile_Filter,EmailServerProfile_Fixed,EmailServerProfile_Result,EmailServerProfile_FormattedResult>;
}
interface WebEntitiesRetrieve {
  keyvaultreferences: WebMappingRetrieve<KeyVaultReference_Select,KeyVaultReference_Expand,KeyVaultReference_Filter,KeyVaultReference_Fixed,KeyVaultReference_Result,KeyVaultReference_FormattedResult>;
}
interface WebEntitiesRelated {
  keyvaultreferences: WebMappingRelated<KeyVaultReference_RelatedOne,KeyVaultReference_RelatedMany>;
}
interface WebEntitiesCUDA {
  keyvaultreferences: WebMappingCUDA<KeyVaultReference_Create,KeyVaultReference_Update,KeyVaultReference_Select>;
}
