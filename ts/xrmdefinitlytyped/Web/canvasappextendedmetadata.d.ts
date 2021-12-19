interface CanvasAppExtendedMetadata_Base extends WebEntity {
  canvasappextendedmetadataid?: string | null;
  canvasappuniqueid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: canvasappextendedmetadata_statecode | null;
  statuscode?: canvasappextendedmetadata_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface CanvasAppExtendedMetadata_Relationships {
  CanvasAppId?: CanvasApp_Result | null;
  canvasappextendedmetadata_AsyncOperations?: AsyncOperation_Result[] | null;
  canvasappextendedmetadata_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  canvasappextendedmetadata_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  canvasappextendedmetadata_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  canvasappextendedmetadata_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  canvasappextendedmetadata_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  canvasappextendedmetadata_ProcessSession?: ProcessSession_Result[] | null;
  canvasappextendedmetadata_SyncErrors?: SyncError_Result[] | null;
  canvasappextendedmetadata_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface CanvasAppExtendedMetadata extends CanvasAppExtendedMetadata_Base, CanvasAppExtendedMetadata_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface CanvasAppExtendedMetadata_Create extends CanvasAppExtendedMetadata {
  CanvasAppId_bind$canvasapps?: string | null;
}
interface CanvasAppExtendedMetadata_Update extends CanvasAppExtendedMetadata {
}
interface CanvasAppExtendedMetadata_Select {
  canvasappextendedmetadataid: WebAttribute<CanvasAppExtendedMetadata_Select, { canvasappextendedmetadataid: string | null }, {  }>;
  canvasappid_guid: WebAttribute<CanvasAppExtendedMetadata_Select, { canvasappid_guid: string | null }, { canvasappid_formatted?: string }>;
  canvasappuniqueid: WebAttribute<CanvasAppExtendedMetadata_Select, { canvasappuniqueid: string | null }, {  }>;
  createdby_guid: WebAttribute<CanvasAppExtendedMetadata_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CanvasAppExtendedMetadata_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CanvasAppExtendedMetadata_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<CanvasAppExtendedMetadata_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<CanvasAppExtendedMetadata_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CanvasAppExtendedMetadata_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CanvasAppExtendedMetadata_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<CanvasAppExtendedMetadata_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<CanvasAppExtendedMetadata_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<CanvasAppExtendedMetadata_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<CanvasAppExtendedMetadata_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<CanvasAppExtendedMetadata_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<CanvasAppExtendedMetadata_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<CanvasAppExtendedMetadata_Select, { statecode: canvasappextendedmetadata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<CanvasAppExtendedMetadata_Select, { statuscode: canvasappextendedmetadata_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<CanvasAppExtendedMetadata_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CanvasAppExtendedMetadata_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<CanvasAppExtendedMetadata_Select, { versionnumber: number | null }, {  }>;
}
interface CanvasAppExtendedMetadata_Filter {
  canvasappextendedmetadataid: XQW.Guid;
  canvasappid_guid: XQW.Guid;
  canvasappuniqueid: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
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
  statecode: canvasappextendedmetadata_statecode;
  statuscode: canvasappextendedmetadata_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface CanvasAppExtendedMetadata_Expand {
  CanvasAppId: WebExpand<CanvasAppExtendedMetadata_Expand, CanvasApp_Select, CanvasApp_Filter, { CanvasAppId: CanvasApp_Result }>;
  canvasappextendedmetadata_AsyncOperations: WebExpand<CanvasAppExtendedMetadata_Expand, AsyncOperation_Select, AsyncOperation_Filter, { canvasappextendedmetadata_AsyncOperations: AsyncOperation_Result[] }>;
  canvasappextendedmetadata_BulkDeleteFailures: WebExpand<CanvasAppExtendedMetadata_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { canvasappextendedmetadata_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  canvasappextendedmetadata_DuplicateBaseRecord: WebExpand<CanvasAppExtendedMetadata_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { canvasappextendedmetadata_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  canvasappextendedmetadata_DuplicateMatchingRecord: WebExpand<CanvasAppExtendedMetadata_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { canvasappextendedmetadata_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  canvasappextendedmetadata_MailboxTrackingFolders: WebExpand<CanvasAppExtendedMetadata_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { canvasappextendedmetadata_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  canvasappextendedmetadata_PrincipalObjectAttributeAccesses: WebExpand<CanvasAppExtendedMetadata_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { canvasappextendedmetadata_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  canvasappextendedmetadata_ProcessSession: WebExpand<CanvasAppExtendedMetadata_Expand, ProcessSession_Select, ProcessSession_Filter, { canvasappextendedmetadata_ProcessSession: ProcessSession_Result[] }>;
  canvasappextendedmetadata_SyncErrors: WebExpand<CanvasAppExtendedMetadata_Expand, SyncError_Select, SyncError_Filter, { canvasappextendedmetadata_SyncErrors: SyncError_Result[] }>;
  canvasappextendedmetadata_UserEntityInstanceDatas: WebExpand<CanvasAppExtendedMetadata_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { canvasappextendedmetadata_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<CanvasAppExtendedMetadata_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CanvasAppExtendedMetadata_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<CanvasAppExtendedMetadata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CanvasAppExtendedMetadata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<CanvasAppExtendedMetadata_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<CanvasAppExtendedMetadata_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<CanvasAppExtendedMetadata_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<CanvasAppExtendedMetadata_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface CanvasAppExtendedMetadata_FormattedResult {
  canvasappid_formatted?: string;
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
interface CanvasAppExtendedMetadata_Result extends CanvasAppExtendedMetadata_Base, CanvasAppExtendedMetadata_Relationships {
  "@odata.etag": string;
  canvasappid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface CanvasAppExtendedMetadata_RelatedOne {
  CanvasAppId: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface CanvasAppExtendedMetadata_RelatedMany {
  canvasappextendedmetadata_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  canvasappextendedmetadata_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  canvasappextendedmetadata_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  canvasappextendedmetadata_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  canvasappextendedmetadata_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  canvasappextendedmetadata_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  canvasappextendedmetadata_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  canvasappextendedmetadata_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  canvasappextendedmetadata_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  canvasappextendedmetadata: WebMappingRetrieve<CanvasAppExtendedMetadata_Select,CanvasAppExtendedMetadata_Expand,CanvasAppExtendedMetadata_Filter,CanvasAppExtendedMetadata_Fixed,CanvasAppExtendedMetadata_Result,CanvasAppExtendedMetadata_FormattedResult>;
}
interface WebEntitiesRelated {
  canvasappextendedmetadata: WebMappingRelated<CanvasAppExtendedMetadata_RelatedOne,CanvasAppExtendedMetadata_RelatedMany>;
}
interface WebEntitiesCUDA {
  canvasappextendedmetadata: WebMappingCUDA<CanvasAppExtendedMetadata_Create,CanvasAppExtendedMetadata_Update,CanvasAppExtendedMetadata_Select>;
}
