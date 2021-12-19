interface msdyn_personasecurityrolemapping_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_personasecurityrolemappingid?: string | null;
  msdyn_personatype?: msdyn_personasecurityrolemapping_msdyn_personatype | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_personasecurityrolemapping_statecode | null;
  statuscode?: msdyn_personasecurityrolemapping_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_personasecurityrolemapping_Relationships {
  msdyn_SecurityRoleId?: Role_Result | null;
  msdyn_personasecurityrolemapping_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_personasecurityrolemapping_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_personasecurityrolemapping_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_personasecurityrolemapping_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_personasecurityrolemapping_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_personasecurityrolemapping_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_personasecurityrolemapping_SyncErrors?: SyncError_Result[] | null;
  msdyn_personasecurityrolemapping_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_personasecurityrolemapping extends msdyn_personasecurityrolemapping_Base, msdyn_personasecurityrolemapping_Relationships {
}
interface msdyn_personasecurityrolemapping_Create extends msdyn_personasecurityrolemapping {
  msdyn_SecurityRoleId_bind$roles?: string | null;
}
interface msdyn_personasecurityrolemapping_Update extends msdyn_personasecurityrolemapping {
}
interface msdyn_personasecurityrolemapping_Select {
  componentidunique: WebAttribute<msdyn_personasecurityrolemapping_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_personasecurityrolemapping_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_personasecurityrolemapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_personasecurityrolemapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_personasecurityrolemapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_personasecurityrolemapping_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_personasecurityrolemapping_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_personasecurityrolemapping_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_personasecurityrolemapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_personasecurityrolemapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_personasecurityrolemapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_personasecurityrolemapping_Select, { msdyn_name: string | null }, {  }>;
  msdyn_personasecurityrolemappingid: WebAttribute<msdyn_personasecurityrolemapping_Select, { msdyn_personasecurityrolemappingid: string | null }, {  }>;
  msdyn_personatype: WebAttribute<msdyn_personasecurityrolemapping_Select, { msdyn_personatype: msdyn_personasecurityrolemapping_msdyn_personatype | null }, { msdyn_personatype_formatted?: string }>;
  msdyn_securityroleid_guid: WebAttribute<msdyn_personasecurityrolemapping_Select, { msdyn_securityroleid_guid: string | null }, { msdyn_securityroleid_formatted?: string }>;
  msdyn_uniquename: WebAttribute<msdyn_personasecurityrolemapping_Select, { msdyn_uniquename: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_personasecurityrolemapping_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_personasecurityrolemapping_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_personasecurityrolemapping_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_personasecurityrolemapping_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_personasecurityrolemapping_Select, { statecode: msdyn_personasecurityrolemapping_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_personasecurityrolemapping_Select, { statuscode: msdyn_personasecurityrolemapping_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_personasecurityrolemapping_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_personasecurityrolemapping_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_personasecurityrolemapping_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_personasecurityrolemapping_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_personasecurityrolemapping_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_personasecurityrolemappingid: XQW.Guid;
  msdyn_personatype: msdyn_personasecurityrolemapping_msdyn_personatype;
  msdyn_securityroleid_guid: XQW.Guid;
  msdyn_uniquename: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_personasecurityrolemapping_statecode;
  statuscode: msdyn_personasecurityrolemapping_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_personasecurityrolemapping_Expand {
  createdby: WebExpand<msdyn_personasecurityrolemapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_personasecurityrolemapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_personasecurityrolemapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_personasecurityrolemapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_SecurityRoleId: WebExpand<msdyn_personasecurityrolemapping_Expand, Role_Select, Role_Filter, { msdyn_SecurityRoleId: Role_Result }>;
  msdyn_personasecurityrolemapping_AsyncOperations: WebExpand<msdyn_personasecurityrolemapping_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_personasecurityrolemapping_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_personasecurityrolemapping_BulkDeleteFailures: WebExpand<msdyn_personasecurityrolemapping_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_personasecurityrolemapping_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_personasecurityrolemapping_DuplicateBaseRecord: WebExpand<msdyn_personasecurityrolemapping_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_personasecurityrolemapping_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_personasecurityrolemapping_DuplicateMatchingRecord: WebExpand<msdyn_personasecurityrolemapping_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_personasecurityrolemapping_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_personasecurityrolemapping_MailboxTrackingFolders: WebExpand<msdyn_personasecurityrolemapping_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_personasecurityrolemapping_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses: WebExpand<msdyn_personasecurityrolemapping_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_personasecurityrolemapping_ProcessSession: WebExpand<msdyn_personasecurityrolemapping_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_personasecurityrolemapping_ProcessSession: ProcessSession_Result[] }>;
  msdyn_personasecurityrolemapping_SyncErrors: WebExpand<msdyn_personasecurityrolemapping_Expand, SyncError_Select, SyncError_Filter, { msdyn_personasecurityrolemapping_SyncErrors: SyncError_Result[] }>;
  msdyn_personasecurityrolemapping_UserEntityInstanceDatas: WebExpand<msdyn_personasecurityrolemapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_personasecurityrolemapping_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_personasecurityrolemapping_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_personasecurityrolemapping_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_personatype_formatted?: string;
  msdyn_securityroleid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_personasecurityrolemapping_Result extends msdyn_personasecurityrolemapping_Base, msdyn_personasecurityrolemapping_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_securityroleid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_personasecurityrolemapping_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_SecurityRoleId: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_personasecurityrolemapping_RelatedMany {
  msdyn_personasecurityrolemapping_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_personasecurityrolemapping_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_personasecurityrolemapping_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_personasecurityrolemapping_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_personasecurityrolemapping_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_personasecurityrolemapping_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_personasecurityrolemapping_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_personasecurityrolemapping_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_personasecurityrolemapping_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_personasecurityrolemappings: WebMappingRetrieve<msdyn_personasecurityrolemapping_Select,msdyn_personasecurityrolemapping_Expand,msdyn_personasecurityrolemapping_Filter,msdyn_personasecurityrolemapping_Fixed,msdyn_personasecurityrolemapping_Result,msdyn_personasecurityrolemapping_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_personasecurityrolemappings: WebMappingRelated<msdyn_personasecurityrolemapping_RelatedOne,msdyn_personasecurityrolemapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_personasecurityrolemappings: WebMappingCUDA<msdyn_personasecurityrolemapping_Create,msdyn_personasecurityrolemapping_Update,msdyn_personasecurityrolemapping_Select>;
}
