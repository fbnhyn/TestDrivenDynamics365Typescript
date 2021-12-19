interface msdyn_inspectionresponse_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_inspectionresponseid?: string | null;
  msdyn_isprocessed?: boolean | null;
  msdyn_isvalidresponse?: boolean | null;
  msdyn_name?: string | null;
  msdyn_responsejsoncontent?: string | null;
  msdyn_status?: msdyn_inspectionresponse_msdyn_status | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_inspectionresponse_statecode | null;
  statuscode?: msdyn_inspectionresponse_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_inspectionresponse_Relationships {
  msdyn_InspectionDefinition?: msdyn_inspectiondefinition_Result | null;
  msdyn_inspectionresponse_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_inspectionresponse_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_inspectionresponse_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_inspectionresponse_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_inspectionresponse_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_inspectionresponse_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_inspectionresponse_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_inspectionresponse_SyncErrors?: SyncError_Result[] | null;
  msdyn_inspectionresponse_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_inspectionresponse_msdyn_inspection?: msdyn_inspectionattachment_Result[] | null;
  msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance?: msdyn_inspectioninstance_Result[] | null;
  msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid?: msdyn_workorderservicetask_Result[] | null;
}
interface msdyn_inspectionresponse extends msdyn_inspectionresponse_Base, msdyn_inspectionresponse_Relationships {
  msdyn_InspectionDefinition_bind$msdyn_inspectiondefinitions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_inspectionresponse_Create extends msdyn_inspectionresponse {
}
interface msdyn_inspectionresponse_Update extends msdyn_inspectionresponse {
}
interface msdyn_inspectionresponse_Select {
  createdby_guid: WebAttribute<msdyn_inspectionresponse_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_inspectionresponse_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_inspectionresponse_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_inspectionresponse_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_inspectionresponse_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_inspectionresponse_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_inspectionresponse_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_inspectiondefinition_guid: WebAttribute<msdyn_inspectionresponse_Select, { msdyn_inspectiondefinition_guid: string | null }, { msdyn_inspectiondefinition_formatted?: string }>;
  msdyn_inspectionresponseid: WebAttribute<msdyn_inspectionresponse_Select, { msdyn_inspectionresponseid: string | null }, {  }>;
  msdyn_isprocessed: WebAttribute<msdyn_inspectionresponse_Select, { msdyn_isprocessed: boolean | null }, {  }>;
  msdyn_isvalidresponse: WebAttribute<msdyn_inspectionresponse_Select, { msdyn_isvalidresponse: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_inspectionresponse_Select, { msdyn_name: string | null }, {  }>;
  msdyn_responsejsoncontent: WebAttribute<msdyn_inspectionresponse_Select, { msdyn_responsejsoncontent: string | null }, {  }>;
  msdyn_status: WebAttribute<msdyn_inspectionresponse_Select, { msdyn_status: msdyn_inspectionresponse_msdyn_status | null }, { msdyn_status_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_inspectionresponse_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_inspectionresponse_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_inspectionresponse_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_inspectionresponse_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_inspectionresponse_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_inspectionresponse_Select, { statecode: msdyn_inspectionresponse_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_inspectionresponse_Select, { statuscode: msdyn_inspectionresponse_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_inspectionresponse_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_inspectionresponse_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_inspectionresponse_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_inspectionresponse_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_inspectiondefinition_guid: XQW.Guid;
  msdyn_inspectionresponseid: XQW.Guid;
  msdyn_isprocessed: boolean;
  msdyn_isvalidresponse: boolean;
  msdyn_name: string;
  msdyn_responsejsoncontent: string;
  msdyn_status: msdyn_inspectionresponse_msdyn_status;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_inspectionresponse_statecode;
  statuscode: msdyn_inspectionresponse_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_inspectionresponse_Expand {
  createdby: WebExpand<msdyn_inspectionresponse_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_inspectionresponse_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_inspectionresponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_inspectionresponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_InspectionDefinition: WebExpand<msdyn_inspectionresponse_Expand, msdyn_inspectiondefinition_Select, msdyn_inspectiondefinition_Filter, { msdyn_InspectionDefinition: msdyn_inspectiondefinition_Result }>;
  msdyn_inspectionresponse_AsyncOperations: WebExpand<msdyn_inspectionresponse_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_inspectionresponse_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_inspectionresponse_BulkDeleteFailures: WebExpand<msdyn_inspectionresponse_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_inspectionresponse_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_inspectionresponse_DuplicateBaseRecord: WebExpand<msdyn_inspectionresponse_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inspectionresponse_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_inspectionresponse_DuplicateMatchingRecord: WebExpand<msdyn_inspectionresponse_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inspectionresponse_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_inspectionresponse_MailboxTrackingFolders: WebExpand<msdyn_inspectionresponse_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_inspectionresponse_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_inspectionresponse_PrincipalObjectAttributeAccesses: WebExpand<msdyn_inspectionresponse_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_inspectionresponse_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_inspectionresponse_ProcessSession: WebExpand<msdyn_inspectionresponse_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_inspectionresponse_ProcessSession: ProcessSession_Result[] }>;
  msdyn_inspectionresponse_SyncErrors: WebExpand<msdyn_inspectionresponse_Expand, SyncError_Select, SyncError_Filter, { msdyn_inspectionresponse_SyncErrors: SyncError_Result[] }>;
  msdyn_inspectionresponse_UserEntityInstanceDatas: WebExpand<msdyn_inspectionresponse_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_inspectionresponse_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_inspectionresponse_msdyn_inspection: WebExpand<msdyn_inspectionresponse_Expand, msdyn_inspectionattachment_Select, msdyn_inspectionattachment_Filter, { msdyn_msdyn_inspectionresponse_msdyn_inspection: msdyn_inspectionattachment_Result[] }>;
  msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance: WebExpand<msdyn_inspectionresponse_Expand, msdyn_inspectioninstance_Select, msdyn_inspectioninstance_Filter, { msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance: msdyn_inspectioninstance_Result[] }>;
  msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid: WebExpand<msdyn_inspectionresponse_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid: msdyn_workorderservicetask_Result[] }>;
  ownerid: WebExpand<msdyn_inspectionresponse_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_inspectionresponse_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_inspectionresponse_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_inspectionresponse_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_inspectionresponse_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_inspectiondefinition_formatted?: string;
  msdyn_status_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_inspectionresponse_Result extends msdyn_inspectionresponse_Base, msdyn_inspectionresponse_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_inspectiondefinition_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_inspectionresponse_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_InspectionDefinition: WebMappingRetrieve<msdyn_inspectiondefinition_Select,msdyn_inspectiondefinition_Expand,msdyn_inspectiondefinition_Filter,msdyn_inspectiondefinition_Fixed,msdyn_inspectiondefinition_Result,msdyn_inspectiondefinition_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_inspectionresponse_RelatedMany {
  msdyn_inspectionresponse_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_inspectionresponse_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_inspectionresponse_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inspectionresponse_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inspectionresponse_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_inspectionresponse_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_inspectionresponse_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_inspectionresponse_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_inspectionresponse_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_inspectionresponse_msdyn_inspection: WebMappingRetrieve<msdyn_inspectionattachment_Select,msdyn_inspectionattachment_Expand,msdyn_inspectionattachment_Filter,msdyn_inspectionattachment_Fixed,msdyn_inspectionattachment_Result,msdyn_inspectionattachment_FormattedResult>;
  msdyn_msdyn_inspectionresponse_msdyn_inspectioninstance: WebMappingRetrieve<msdyn_inspectioninstance_Select,msdyn_inspectioninstance_Expand,msdyn_inspectioninstance_Filter,msdyn_inspectioninstance_Fixed,msdyn_inspectioninstance_Result,msdyn_inspectioninstance_FormattedResult>;
  msdyn_msdyn_inspectionresponse_msdyn_workorderservicetask_inspectionresponseid: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_inspectionresponses: WebMappingRetrieve<msdyn_inspectionresponse_Select,msdyn_inspectionresponse_Expand,msdyn_inspectionresponse_Filter,msdyn_inspectionresponse_Fixed,msdyn_inspectionresponse_Result,msdyn_inspectionresponse_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_inspectionresponses: WebMappingRelated<msdyn_inspectionresponse_RelatedOne,msdyn_inspectionresponse_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_inspectionresponses: WebMappingCUDA<msdyn_inspectionresponse_Create,msdyn_inspectionresponse_Update,msdyn_inspectionresponse_Select>;
}
