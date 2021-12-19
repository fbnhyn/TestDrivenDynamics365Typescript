interface msdyn_incidenttyperesolution_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_incidenttyperesolutionid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_incidenttyperesolution_statecode | null;
  statuscode?: msdyn_incidenttyperesolution_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_incidenttyperesolution_Relationships {
  msdyn_IncidentType?: msdyn_incidenttype_Result | null;
  msdyn_Resolution?: msdyn_resolution_Result | null;
  msdyn_incidenttyperesolution_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_incidenttyperesolution_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_incidenttyperesolution_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttyperesolution_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttyperesolution_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_incidenttyperesolution_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_incidenttyperesolution_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_incidenttyperesolution_SyncErrors?: SyncError_Result[] | null;
  msdyn_incidenttyperesolution_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_incidenttyperesolution extends msdyn_incidenttyperesolution_Base, msdyn_incidenttyperesolution_Relationships {
  msdyn_IncidentType_bind$msdyn_incidenttypes?: string | null;
  msdyn_Resolution_bind$msdyn_resolutions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_incidenttyperesolution_Create extends msdyn_incidenttyperesolution {
}
interface msdyn_incidenttyperesolution_Update extends msdyn_incidenttyperesolution {
}
interface msdyn_incidenttyperesolution_Select {
  createdby_guid: WebAttribute<msdyn_incidenttyperesolution_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_incidenttyperesolution_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_incidenttyperesolution_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_incidenttyperesolution_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_incidenttyperesolution_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_incidenttyperesolution_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_incidenttyperesolution_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_incidenttype_guid: WebAttribute<msdyn_incidenttyperesolution_Select, { msdyn_incidenttype_guid: string | null }, { msdyn_incidenttype_formatted?: string }>;
  msdyn_incidenttyperesolutionid: WebAttribute<msdyn_incidenttyperesolution_Select, { msdyn_incidenttyperesolutionid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_incidenttyperesolution_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resolution_guid: WebAttribute<msdyn_incidenttyperesolution_Select, { msdyn_resolution_guid: string | null }, { msdyn_resolution_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_incidenttyperesolution_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_incidenttyperesolution_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_incidenttyperesolution_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_incidenttyperesolution_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_incidenttyperesolution_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_incidenttyperesolution_Select, { statecode: msdyn_incidenttyperesolution_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_incidenttyperesolution_Select, { statuscode: msdyn_incidenttyperesolution_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_incidenttyperesolution_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_incidenttyperesolution_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_incidenttyperesolution_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_incidenttyperesolution_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_incidenttype_guid: XQW.Guid;
  msdyn_incidenttyperesolutionid: XQW.Guid;
  msdyn_name: string;
  msdyn_resolution_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_incidenttyperesolution_statecode;
  statuscode: msdyn_incidenttyperesolution_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_incidenttyperesolution_Expand {
  createdby: WebExpand<msdyn_incidenttyperesolution_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_incidenttyperesolution_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_incidenttyperesolution_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_incidenttyperesolution_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_IncidentType: WebExpand<msdyn_incidenttyperesolution_Expand, msdyn_incidenttype_Select, msdyn_incidenttype_Filter, { msdyn_IncidentType: msdyn_incidenttype_Result }>;
  msdyn_Resolution: WebExpand<msdyn_incidenttyperesolution_Expand, msdyn_resolution_Select, msdyn_resolution_Filter, { msdyn_Resolution: msdyn_resolution_Result }>;
  msdyn_incidenttyperesolution_AsyncOperations: WebExpand<msdyn_incidenttyperesolution_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_incidenttyperesolution_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_incidenttyperesolution_BulkDeleteFailures: WebExpand<msdyn_incidenttyperesolution_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_incidenttyperesolution_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_incidenttyperesolution_DuplicateBaseRecord: WebExpand<msdyn_incidenttyperesolution_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttyperesolution_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttyperesolution_DuplicateMatchingRecord: WebExpand<msdyn_incidenttyperesolution_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttyperesolution_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttyperesolution_MailboxTrackingFolders: WebExpand<msdyn_incidenttyperesolution_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_incidenttyperesolution_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_incidenttyperesolution_PrincipalObjectAttributeAccesses: WebExpand<msdyn_incidenttyperesolution_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_incidenttyperesolution_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_incidenttyperesolution_ProcessSession: WebExpand<msdyn_incidenttyperesolution_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_incidenttyperesolution_ProcessSession: ProcessSession_Result[] }>;
  msdyn_incidenttyperesolution_SyncErrors: WebExpand<msdyn_incidenttyperesolution_Expand, SyncError_Select, SyncError_Filter, { msdyn_incidenttyperesolution_SyncErrors: SyncError_Result[] }>;
  msdyn_incidenttyperesolution_UserEntityInstanceDatas: WebExpand<msdyn_incidenttyperesolution_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_incidenttyperesolution_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_incidenttyperesolution_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_incidenttyperesolution_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_incidenttyperesolution_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_incidenttyperesolution_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_incidenttyperesolution_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_incidenttype_formatted?: string;
  msdyn_resolution_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_incidenttyperesolution_Result extends msdyn_incidenttyperesolution_Base, msdyn_incidenttyperesolution_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_incidenttype_guid: string | null;
  msdyn_resolution_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_incidenttyperesolution_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_IncidentType: WebMappingRetrieve<msdyn_incidenttype_Select,msdyn_incidenttype_Expand,msdyn_incidenttype_Filter,msdyn_incidenttype_Fixed,msdyn_incidenttype_Result,msdyn_incidenttype_FormattedResult>;
  msdyn_Resolution: WebMappingRetrieve<msdyn_resolution_Select,msdyn_resolution_Expand,msdyn_resolution_Filter,msdyn_resolution_Fixed,msdyn_resolution_Result,msdyn_resolution_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_incidenttyperesolution_RelatedMany {
  msdyn_incidenttyperesolution_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_incidenttyperesolution_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_incidenttyperesolution_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttyperesolution_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttyperesolution_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_incidenttyperesolution_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_incidenttyperesolution_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_incidenttyperesolution_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_incidenttyperesolution_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_incidenttyperesolutions: WebMappingRetrieve<msdyn_incidenttyperesolution_Select,msdyn_incidenttyperesolution_Expand,msdyn_incidenttyperesolution_Filter,msdyn_incidenttyperesolution_Fixed,msdyn_incidenttyperesolution_Result,msdyn_incidenttyperesolution_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_incidenttyperesolutions: WebMappingRelated<msdyn_incidenttyperesolution_RelatedOne,msdyn_incidenttyperesolution_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_incidenttyperesolutions: WebMappingCUDA<msdyn_incidenttyperesolution_Create,msdyn_incidenttyperesolution_Update,msdyn_incidenttyperesolution_Select>;
}
