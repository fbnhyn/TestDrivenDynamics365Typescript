interface msdyn_workorderresolution_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_internalflags?: string | null;
  msdyn_name?: string | null;
  msdyn_workorderresolutionid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_workorderresolution_statecode | null;
  statuscode?: msdyn_workorderresolution_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_workorderresolution_Relationships {
  msdyn_CustomerAsset?: msdyn_customerasset_Result | null;
  msdyn_Resolution?: msdyn_resolution_Result | null;
  msdyn_WorkOrder?: msdyn_workorder_Result | null;
  msdyn_WorkOrderIncident?: msdyn_workorderincident_Result | null;
  msdyn_workorderresolution_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_workorderresolution_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_workorderresolution_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_workorderresolution_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_workorderresolution_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_workorderresolution_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_workorderresolution_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_workorderresolution_SyncErrors?: SyncError_Result[] | null;
  msdyn_workorderresolution_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_workorderresolution extends msdyn_workorderresolution_Base, msdyn_workorderresolution_Relationships {
  msdyn_CustomerAsset_bind$msdyn_customerassets?: string | null;
  msdyn_Resolution_bind$msdyn_resolutions?: string | null;
  msdyn_WorkOrderIncident_bind$msdyn_workorderincidents?: string | null;
  msdyn_WorkOrder_bind$msdyn_workorders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_workorderresolution_Create extends msdyn_workorderresolution {
}
interface msdyn_workorderresolution_Update extends msdyn_workorderresolution {
}
interface msdyn_workorderresolution_Select {
  createdby_guid: WebAttribute<msdyn_workorderresolution_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_workorderresolution_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_workorderresolution_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_workorderresolution_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_workorderresolution_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_workorderresolution_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_workorderresolution_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_customerasset_guid: WebAttribute<msdyn_workorderresolution_Select, { msdyn_customerasset_guid: string | null }, { msdyn_customerasset_formatted?: string }>;
  msdyn_internalflags: WebAttribute<msdyn_workorderresolution_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_workorderresolution_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resolution_guid: WebAttribute<msdyn_workorderresolution_Select, { msdyn_resolution_guid: string | null }, { msdyn_resolution_formatted?: string }>;
  msdyn_workorder_guid: WebAttribute<msdyn_workorderresolution_Select, { msdyn_workorder_guid: string | null }, { msdyn_workorder_formatted?: string }>;
  msdyn_workorderincident_guid: WebAttribute<msdyn_workorderresolution_Select, { msdyn_workorderincident_guid: string | null }, { msdyn_workorderincident_formatted?: string }>;
  msdyn_workorderresolutionid: WebAttribute<msdyn_workorderresolution_Select, { msdyn_workorderresolutionid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_workorderresolution_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_workorderresolution_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_workorderresolution_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_workorderresolution_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_workorderresolution_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_workorderresolution_Select, { statecode: msdyn_workorderresolution_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_workorderresolution_Select, { statuscode: msdyn_workorderresolution_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_workorderresolution_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_workorderresolution_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_workorderresolution_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_workorderresolution_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_customerasset_guid: XQW.Guid;
  msdyn_internalflags: string;
  msdyn_name: string;
  msdyn_resolution_guid: XQW.Guid;
  msdyn_workorder_guid: XQW.Guid;
  msdyn_workorderincident_guid: XQW.Guid;
  msdyn_workorderresolutionid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_workorderresolution_statecode;
  statuscode: msdyn_workorderresolution_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_workorderresolution_Expand {
  createdby: WebExpand<msdyn_workorderresolution_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_workorderresolution_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_workorderresolution_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_workorderresolution_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_CustomerAsset: WebExpand<msdyn_workorderresolution_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_CustomerAsset: msdyn_customerasset_Result }>;
  msdyn_Resolution: WebExpand<msdyn_workorderresolution_Expand, msdyn_resolution_Select, msdyn_resolution_Filter, { msdyn_Resolution: msdyn_resolution_Result }>;
  msdyn_WorkOrder: WebExpand<msdyn_workorderresolution_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_WorkOrder: msdyn_workorder_Result }>;
  msdyn_WorkOrderIncident: WebExpand<msdyn_workorderresolution_Expand, msdyn_workorderincident_Select, msdyn_workorderincident_Filter, { msdyn_WorkOrderIncident: msdyn_workorderincident_Result }>;
  msdyn_workorderresolution_AsyncOperations: WebExpand<msdyn_workorderresolution_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_workorderresolution_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_workorderresolution_BulkDeleteFailures: WebExpand<msdyn_workorderresolution_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_workorderresolution_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_workorderresolution_DuplicateBaseRecord: WebExpand<msdyn_workorderresolution_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workorderresolution_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_workorderresolution_DuplicateMatchingRecord: WebExpand<msdyn_workorderresolution_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workorderresolution_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_workorderresolution_MailboxTrackingFolders: WebExpand<msdyn_workorderresolution_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_workorderresolution_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_workorderresolution_PrincipalObjectAttributeAccesses: WebExpand<msdyn_workorderresolution_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_workorderresolution_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_workorderresolution_ProcessSession: WebExpand<msdyn_workorderresolution_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_workorderresolution_ProcessSession: ProcessSession_Result[] }>;
  msdyn_workorderresolution_SyncErrors: WebExpand<msdyn_workorderresolution_Expand, SyncError_Select, SyncError_Filter, { msdyn_workorderresolution_SyncErrors: SyncError_Result[] }>;
  msdyn_workorderresolution_UserEntityInstanceDatas: WebExpand<msdyn_workorderresolution_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_workorderresolution_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_workorderresolution_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_workorderresolution_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_workorderresolution_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_workorderresolution_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_workorderresolution_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_customerasset_formatted?: string;
  msdyn_resolution_formatted?: string;
  msdyn_workorder_formatted?: string;
  msdyn_workorderincident_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_workorderresolution_Result extends msdyn_workorderresolution_Base, msdyn_workorderresolution_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_customerasset_guid: string | null;
  msdyn_resolution_guid: string | null;
  msdyn_workorder_guid: string | null;
  msdyn_workorderincident_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_workorderresolution_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_CustomerAsset: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  msdyn_Resolution: WebMappingRetrieve<msdyn_resolution_Select,msdyn_resolution_Expand,msdyn_resolution_Filter,msdyn_resolution_Fixed,msdyn_resolution_Result,msdyn_resolution_FormattedResult>;
  msdyn_WorkOrder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_WorkOrderIncident: WebMappingRetrieve<msdyn_workorderincident_Select,msdyn_workorderincident_Expand,msdyn_workorderincident_Filter,msdyn_workorderincident_Fixed,msdyn_workorderincident_Result,msdyn_workorderincident_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_workorderresolution_RelatedMany {
  msdyn_workorderresolution_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_workorderresolution_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_workorderresolution_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workorderresolution_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workorderresolution_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_workorderresolution_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_workorderresolution_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_workorderresolution_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_workorderresolution_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_workorderresolutions: WebMappingRetrieve<msdyn_workorderresolution_Select,msdyn_workorderresolution_Expand,msdyn_workorderresolution_Filter,msdyn_workorderresolution_Fixed,msdyn_workorderresolution_Result,msdyn_workorderresolution_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_workorderresolutions: WebMappingRelated<msdyn_workorderresolution_RelatedOne,msdyn_workorderresolution_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_workorderresolutions: WebMappingCUDA<msdyn_workorderresolution_Create,msdyn_workorderresolution_Update,msdyn_workorderresolution_Select>;
}
