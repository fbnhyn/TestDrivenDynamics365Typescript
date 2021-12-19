interface adminsettingsentity_Base extends WebEntity {
  adminsettingsentityid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  new_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: adminsettingsentity_statecode | null;
  statuscode?: adminsettingsentity_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface adminsettingsentity_Relationships {
  adminsettingsentity_AsyncOperations?: AsyncOperation_Result[] | null;
  adminsettingsentity_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  adminsettingsentity_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  adminsettingsentity_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  adminsettingsentity_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  adminsettingsentity_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  adminsettingsentity_ProcessSession?: ProcessSession_Result[] | null;
  adminsettingsentity_SyncErrors?: SyncError_Result[] | null;
  adminsettingsentity_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface adminsettingsentity extends adminsettingsentity_Base, adminsettingsentity_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface adminsettingsentity_Create extends adminsettingsentity {
}
interface adminsettingsentity_Update extends adminsettingsentity {
}
interface adminsettingsentity_Select {
  adminsettingsentityid: WebAttribute<adminsettingsentity_Select, { adminsettingsentityid: string | null }, {  }>;
  createdby_guid: WebAttribute<adminsettingsentity_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<adminsettingsentity_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<adminsettingsentity_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<adminsettingsentity_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<adminsettingsentity_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<adminsettingsentity_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<adminsettingsentity_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  new_name: WebAttribute<adminsettingsentity_Select, { new_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<adminsettingsentity_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<adminsettingsentity_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<adminsettingsentity_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<adminsettingsentity_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<adminsettingsentity_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<adminsettingsentity_Select, { statecode: adminsettingsentity_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<adminsettingsentity_Select, { statuscode: adminsettingsentity_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<adminsettingsentity_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<adminsettingsentity_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<adminsettingsentity_Select, { versionnumber: number | null }, {  }>;
}
interface adminsettingsentity_Filter {
  adminsettingsentityid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  new_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: adminsettingsentity_statecode;
  statuscode: adminsettingsentity_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface adminsettingsentity_Expand {
  adminsettingsentity_AsyncOperations: WebExpand<adminsettingsentity_Expand, AsyncOperation_Select, AsyncOperation_Filter, { adminsettingsentity_AsyncOperations: AsyncOperation_Result[] }>;
  adminsettingsentity_BulkDeleteFailures: WebExpand<adminsettingsentity_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { adminsettingsentity_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  adminsettingsentity_DuplicateBaseRecord: WebExpand<adminsettingsentity_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { adminsettingsentity_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  adminsettingsentity_DuplicateMatchingRecord: WebExpand<adminsettingsentity_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { adminsettingsentity_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  adminsettingsentity_MailboxTrackingFolders: WebExpand<adminsettingsentity_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { adminsettingsentity_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  adminsettingsentity_PrincipalObjectAttributeAccesses: WebExpand<adminsettingsentity_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { adminsettingsentity_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  adminsettingsentity_ProcessSession: WebExpand<adminsettingsentity_Expand, ProcessSession_Select, ProcessSession_Filter, { adminsettingsentity_ProcessSession: ProcessSession_Result[] }>;
  adminsettingsentity_SyncErrors: WebExpand<adminsettingsentity_Expand, SyncError_Select, SyncError_Filter, { adminsettingsentity_SyncErrors: SyncError_Result[] }>;
  adminsettingsentity_UserEntityInstanceDatas: WebExpand<adminsettingsentity_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { adminsettingsentity_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<adminsettingsentity_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<adminsettingsentity_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<adminsettingsentity_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<adminsettingsentity_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<adminsettingsentity_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<adminsettingsentity_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<adminsettingsentity_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<adminsettingsentity_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface adminsettingsentity_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface adminsettingsentity_Result extends adminsettingsentity_Base, adminsettingsentity_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface adminsettingsentity_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface adminsettingsentity_RelatedMany {
  adminsettingsentity_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  adminsettingsentity_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  adminsettingsentity_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  adminsettingsentity_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  adminsettingsentity_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  adminsettingsentity_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  adminsettingsentity_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  adminsettingsentity_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  adminsettingsentity_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  new_admin_settings_entities: WebMappingRetrieve<adminsettingsentity_Select,adminsettingsentity_Expand,adminsettingsentity_Filter,adminsettingsentity_Fixed,adminsettingsentity_Result,adminsettingsentity_FormattedResult>;
}
interface WebEntitiesRelated {
  new_admin_settings_entities: WebMappingRelated<adminsettingsentity_RelatedOne,adminsettingsentity_RelatedMany>;
}
interface WebEntitiesCUDA {
  new_admin_settings_entities: WebMappingCUDA<adminsettingsentity_Create,adminsettingsentity_Update,adminsettingsentity_Select>;
}
