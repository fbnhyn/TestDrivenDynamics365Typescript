interface EntitlementEntityAllocationTypeMapping_Base extends WebEntity {
  allocationtype?: allocationtype | null;
  createdon?: Date | null;
  entitlemententityallocationtypemappingid?: string | null;
  entitytype?: entitytype | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: entitlemententityallocationtypemapping_statecode | null;
  statuscode?: entitlemententityallocationtypemapping_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface EntitlementEntityAllocationTypeMapping_Relationships {
  entitlemententityallocationtypemapping_AsyncOperations?: AsyncOperation_Result[] | null;
  entitlemententityallocationtypemapping_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  entitlemententityallocationtypemapping_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  entitlemententityallocationtypemapping_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  entitlemententityallocationtypemapping_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  entitlemententityallocationtypemapping_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  entitlemententityallocationtypemapping_ProcessSession?: ProcessSession_Result[] | null;
  entitlemententityallocationtypemapping_SyncErrors?: SyncError_Result[] | null;
  entitlemententityallocationtypemapping_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface EntitlementEntityAllocationTypeMapping extends EntitlementEntityAllocationTypeMapping_Base, EntitlementEntityAllocationTypeMapping_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface EntitlementEntityAllocationTypeMapping_Create extends EntitlementEntityAllocationTypeMapping {
}
interface EntitlementEntityAllocationTypeMapping_Update extends EntitlementEntityAllocationTypeMapping {
}
interface EntitlementEntityAllocationTypeMapping_Select {
  allocationtype: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { allocationtype: allocationtype | null }, { allocationtype_formatted?: string }>;
  createdby_guid: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entitlemententityallocationtypemappingid: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { entitlemententityallocationtypemappingid: string | null }, {  }>;
  entitytype: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { entitytype: entitytype | null }, { entitytype_formatted?: string }>;
  importsequencenumber: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { statecode: entitlemententityallocationtypemapping_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { statuscode: entitlemententityallocationtypemapping_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<EntitlementEntityAllocationTypeMapping_Select, { versionnumber: number | null }, {  }>;
}
interface EntitlementEntityAllocationTypeMapping_Filter {
  allocationtype: allocationtype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entitlemententityallocationtypemappingid: XQW.Guid;
  entitytype: entitytype;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: entitlemententityallocationtypemapping_statecode;
  statuscode: entitlemententityallocationtypemapping_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface EntitlementEntityAllocationTypeMapping_Expand {
  createdby: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entitlemententityallocationtypemapping_AsyncOperations: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, AsyncOperation_Select, AsyncOperation_Filter, { entitlemententityallocationtypemapping_AsyncOperations: AsyncOperation_Result[] }>;
  entitlemententityallocationtypemapping_BulkDeleteFailures: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { entitlemententityallocationtypemapping_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  entitlemententityallocationtypemapping_DuplicateBaseRecord: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { entitlemententityallocationtypemapping_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  entitlemententityallocationtypemapping_DuplicateMatchingRecord: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { entitlemententityallocationtypemapping_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  entitlemententityallocationtypemapping_MailboxTrackingFolders: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { entitlemententityallocationtypemapping_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  entitlemententityallocationtypemapping_PrincipalObjectAttributeAccesses: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { entitlemententityallocationtypemapping_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  entitlemententityallocationtypemapping_ProcessSession: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, ProcessSession_Select, ProcessSession_Filter, { entitlemententityallocationtypemapping_ProcessSession: ProcessSession_Result[] }>;
  entitlemententityallocationtypemapping_SyncErrors: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, SyncError_Select, SyncError_Filter, { entitlemententityallocationtypemapping_SyncErrors: SyncError_Result[] }>;
  entitlemententityallocationtypemapping_UserEntityInstanceDatas: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { entitlemententityallocationtypemapping_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<EntitlementEntityAllocationTypeMapping_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface EntitlementEntityAllocationTypeMapping_FormattedResult {
  allocationtype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  entitytype_formatted?: string;
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
interface EntitlementEntityAllocationTypeMapping_Result extends EntitlementEntityAllocationTypeMapping_Base, EntitlementEntityAllocationTypeMapping_Relationships {
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
interface EntitlementEntityAllocationTypeMapping_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface EntitlementEntityAllocationTypeMapping_RelatedMany {
  entitlemententityallocationtypemapping_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  entitlemententityallocationtypemapping_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  entitlemententityallocationtypemapping_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  entitlemententityallocationtypemapping_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  entitlemententityallocationtypemapping_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  entitlemententityallocationtypemapping_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  entitlemententityallocationtypemapping_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  entitlemententityallocationtypemapping_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  entitlemententityallocationtypemapping_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entitlemententityallocationtypemappings: WebMappingRetrieve<EntitlementEntityAllocationTypeMapping_Select,EntitlementEntityAllocationTypeMapping_Expand,EntitlementEntityAllocationTypeMapping_Filter,EntitlementEntityAllocationTypeMapping_Fixed,EntitlementEntityAllocationTypeMapping_Result,EntitlementEntityAllocationTypeMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  entitlemententityallocationtypemappings: WebMappingRelated<EntitlementEntityAllocationTypeMapping_RelatedOne,EntitlementEntityAllocationTypeMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  entitlemententityallocationtypemappings: WebMappingCUDA<EntitlementEntityAllocationTypeMapping_Create,EntitlementEntityAllocationTypeMapping_Update,EntitlementEntityAllocationTypeMapping_Select>;
}
