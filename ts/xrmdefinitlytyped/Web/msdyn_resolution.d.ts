interface msdyn_resolution_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_name?: string | null;
  msdyn_resolutionid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_resolution_statecode | null;
  statuscode?: msdyn_resolution_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_resolution_Relationships {
  msdyn_msdyn_resolution_msdyn_incidenttyperesolution_Resolution?: msdyn_incidenttyperesolution_Result[] | null;
  msdyn_msdyn_resolution_msdyn_workorder_PrimaryResolution?: msdyn_workorder_Result[] | null;
  msdyn_msdyn_resolution_msdyn_workorderincident_PrimaryResolution?: msdyn_workorderincident_Result[] | null;
  msdyn_msdyn_resolution_msdyn_workorderresolution_Resolution?: msdyn_workorderresolution_Result[] | null;
  msdyn_resolution_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_resolution_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_resolution_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_resolution_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_resolution_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_resolution_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_resolution_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_resolution_SyncErrors?: SyncError_Result[] | null;
  msdyn_resolution_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_resolution extends msdyn_resolution_Base, msdyn_resolution_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_resolution_Create extends msdyn_resolution {
}
interface msdyn_resolution_Update extends msdyn_resolution {
}
interface msdyn_resolution_Select {
  createdby_guid: WebAttribute<msdyn_resolution_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_resolution_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_resolution_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_resolution_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_resolution_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_resolution_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_resolution_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_resolution_Select, { msdyn_description: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_resolution_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resolutionid: WebAttribute<msdyn_resolution_Select, { msdyn_resolutionid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_resolution_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_resolution_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_resolution_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_resolution_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_resolution_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_resolution_Select, { statecode: msdyn_resolution_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_resolution_Select, { statuscode: msdyn_resolution_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_resolution_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_resolution_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_resolution_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_resolution_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_name: string;
  msdyn_resolutionid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_resolution_statecode;
  statuscode: msdyn_resolution_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_resolution_Expand {
  createdby: WebExpand<msdyn_resolution_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_resolution_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_resolution_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_resolution_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_resolution_msdyn_incidenttyperesolution_Resolution: WebExpand<msdyn_resolution_Expand, msdyn_incidenttyperesolution_Select, msdyn_incidenttyperesolution_Filter, { msdyn_msdyn_resolution_msdyn_incidenttyperesolution_Resolution: msdyn_incidenttyperesolution_Result[] }>;
  msdyn_msdyn_resolution_msdyn_workorder_PrimaryResolution: WebExpand<msdyn_resolution_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_msdyn_resolution_msdyn_workorder_PrimaryResolution: msdyn_workorder_Result[] }>;
  msdyn_msdyn_resolution_msdyn_workorderincident_PrimaryResolution: WebExpand<msdyn_resolution_Expand, msdyn_workorderincident_Select, msdyn_workorderincident_Filter, { msdyn_msdyn_resolution_msdyn_workorderincident_PrimaryResolution: msdyn_workorderincident_Result[] }>;
  msdyn_msdyn_resolution_msdyn_workorderresolution_Resolution: WebExpand<msdyn_resolution_Expand, msdyn_workorderresolution_Select, msdyn_workorderresolution_Filter, { msdyn_msdyn_resolution_msdyn_workorderresolution_Resolution: msdyn_workorderresolution_Result[] }>;
  msdyn_resolution_AsyncOperations: WebExpand<msdyn_resolution_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_resolution_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_resolution_BulkDeleteFailures: WebExpand<msdyn_resolution_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_resolution_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_resolution_DuplicateBaseRecord: WebExpand<msdyn_resolution_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resolution_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_resolution_DuplicateMatchingRecord: WebExpand<msdyn_resolution_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resolution_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_resolution_MailboxTrackingFolders: WebExpand<msdyn_resolution_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_resolution_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_resolution_PrincipalObjectAttributeAccesses: WebExpand<msdyn_resolution_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_resolution_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_resolution_ProcessSession: WebExpand<msdyn_resolution_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_resolution_ProcessSession: ProcessSession_Result[] }>;
  msdyn_resolution_SyncErrors: WebExpand<msdyn_resolution_Expand, SyncError_Select, SyncError_Filter, { msdyn_resolution_SyncErrors: SyncError_Result[] }>;
  msdyn_resolution_UserEntityInstanceDatas: WebExpand<msdyn_resolution_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_resolution_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_resolution_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_resolution_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_resolution_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_resolution_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_resolution_FormattedResult {
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
interface msdyn_resolution_Result extends msdyn_resolution_Base, msdyn_resolution_Relationships {
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
interface msdyn_resolution_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_resolution_RelatedMany {
  msdyn_msdyn_resolution_msdyn_incidenttyperesolution_Resolution: WebMappingRetrieve<msdyn_incidenttyperesolution_Select,msdyn_incidenttyperesolution_Expand,msdyn_incidenttyperesolution_Filter,msdyn_incidenttyperesolution_Fixed,msdyn_incidenttyperesolution_Result,msdyn_incidenttyperesolution_FormattedResult>;
  msdyn_msdyn_resolution_msdyn_workorder_PrimaryResolution: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_msdyn_resolution_msdyn_workorderincident_PrimaryResolution: WebMappingRetrieve<msdyn_workorderincident_Select,msdyn_workorderincident_Expand,msdyn_workorderincident_Filter,msdyn_workorderincident_Fixed,msdyn_workorderincident_Result,msdyn_workorderincident_FormattedResult>;
  msdyn_msdyn_resolution_msdyn_workorderresolution_Resolution: WebMappingRetrieve<msdyn_workorderresolution_Select,msdyn_workorderresolution_Expand,msdyn_workorderresolution_Filter,msdyn_workorderresolution_Fixed,msdyn_workorderresolution_Result,msdyn_workorderresolution_FormattedResult>;
  msdyn_resolution_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_resolution_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_resolution_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resolution_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resolution_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_resolution_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_resolution_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_resolution_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_resolution_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_resolutions: WebMappingRetrieve<msdyn_resolution_Select,msdyn_resolution_Expand,msdyn_resolution_Filter,msdyn_resolution_Fixed,msdyn_resolution_Result,msdyn_resolution_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_resolutions: WebMappingRelated<msdyn_resolution_RelatedOne,msdyn_resolution_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_resolutions: WebMappingCUDA<msdyn_resolution_Create,msdyn_resolution_Update,msdyn_resolution_Select>;
}
