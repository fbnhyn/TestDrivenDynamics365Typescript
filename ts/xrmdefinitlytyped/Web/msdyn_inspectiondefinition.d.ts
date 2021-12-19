interface msdyn_inspectiondefinition_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_effectivedate?: Date | null;
  msdyn_inspectiondefinitionid?: string | null;
  msdyn_isdefault?: boolean | null;
  msdyn_isprocessed?: boolean | null;
  msdyn_isrequiredtoanswer?: boolean | null;
  msdyn_jsoncontent?: string | null;
  msdyn_name?: string | null;
  msdyn_state?: msdyn_inspectiondefinition_msdyn_state | null;
  msdyn_version?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_inspectiondefinition_statecode | null;
  statuscode?: msdyn_inspectiondefinition_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_inspectiondefinition_Relationships {
  msdyn_ParentInspectionId?: msdyn_inspection_Result | null;
  msdyn_inspectiondefinition_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_inspectiondefinition_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_inspectiondefinition_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_inspectiondefinition_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_inspectiondefinition_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_inspectiondefinition_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_inspectiondefinition_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_inspectiondefinition_SyncErrors?: SyncError_Result[] | null;
  msdyn_inspectiondefinition_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_inspectiondefinition_msdyn_inspectioninstance?: msdyn_inspectioninstance_Result[] | null;
  msdyn_msdyn_inspectiondefinition_msdyn_inspectionresponse_InspectionDefinition?: msdyn_inspectionresponse_Result[] | null;
  msdyn_msdyn_inspectiondefinition_msdyn_workorderservicetask_inspectiondefinitionid?: msdyn_workorderservicetask_Result[] | null;
}
interface msdyn_inspectiondefinition extends msdyn_inspectiondefinition_Base, msdyn_inspectiondefinition_Relationships {
  msdyn_ParentInspectionId_bind$msdyn_inspections?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_inspectiondefinition_Create extends msdyn_inspectiondefinition {
}
interface msdyn_inspectiondefinition_Update extends msdyn_inspectiondefinition {
}
interface msdyn_inspectiondefinition_Select {
  createdby_guid: WebAttribute<msdyn_inspectiondefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_inspectiondefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_inspectiondefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_inspectiondefinition_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_inspectiondefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_inspectiondefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_inspectiondefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_inspectiondefinition_Select, { msdyn_description: string | null }, {  }>;
  msdyn_effectivedate: WebAttribute<msdyn_inspectiondefinition_Select, { msdyn_effectivedate: Date | null }, { msdyn_effectivedate_formatted?: string }>;
  msdyn_inspectiondefinitionid: WebAttribute<msdyn_inspectiondefinition_Select, { msdyn_inspectiondefinitionid: string | null }, {  }>;
  msdyn_isdefault: WebAttribute<msdyn_inspectiondefinition_Select, { msdyn_isdefault: boolean | null }, {  }>;
  msdyn_isprocessed: WebAttribute<msdyn_inspectiondefinition_Select, { msdyn_isprocessed: boolean | null }, {  }>;
  msdyn_isrequiredtoanswer: WebAttribute<msdyn_inspectiondefinition_Select, { msdyn_isrequiredtoanswer: boolean | null }, {  }>;
  msdyn_jsoncontent: WebAttribute<msdyn_inspectiondefinition_Select, { msdyn_jsoncontent: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_inspectiondefinition_Select, { msdyn_name: string | null }, {  }>;
  msdyn_parentinspectionid_guid: WebAttribute<msdyn_inspectiondefinition_Select, { msdyn_parentinspectionid_guid: string | null }, { msdyn_parentinspectionid_formatted?: string }>;
  msdyn_state: WebAttribute<msdyn_inspectiondefinition_Select, { msdyn_state: msdyn_inspectiondefinition_msdyn_state | null }, { msdyn_state_formatted?: string }>;
  msdyn_version: WebAttribute<msdyn_inspectiondefinition_Select, { msdyn_version: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_inspectiondefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_inspectiondefinition_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_inspectiondefinition_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_inspectiondefinition_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_inspectiondefinition_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_inspectiondefinition_Select, { statecode: msdyn_inspectiondefinition_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_inspectiondefinition_Select, { statuscode: msdyn_inspectiondefinition_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_inspectiondefinition_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_inspectiondefinition_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_inspectiondefinition_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_inspectiondefinition_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_effectivedate: Date;
  msdyn_inspectiondefinitionid: XQW.Guid;
  msdyn_isdefault: boolean;
  msdyn_isprocessed: boolean;
  msdyn_isrequiredtoanswer: boolean;
  msdyn_jsoncontent: string;
  msdyn_name: string;
  msdyn_parentinspectionid_guid: XQW.Guid;
  msdyn_state: msdyn_inspectiondefinition_msdyn_state;
  msdyn_version: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_inspectiondefinition_statecode;
  statuscode: msdyn_inspectiondefinition_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_inspectiondefinition_Expand {
  createdby: WebExpand<msdyn_inspectiondefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_inspectiondefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_inspectiondefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_inspectiondefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ParentInspectionId: WebExpand<msdyn_inspectiondefinition_Expand, msdyn_inspection_Select, msdyn_inspection_Filter, { msdyn_ParentInspectionId: msdyn_inspection_Result }>;
  msdyn_inspectiondefinition_AsyncOperations: WebExpand<msdyn_inspectiondefinition_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_inspectiondefinition_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_inspectiondefinition_BulkDeleteFailures: WebExpand<msdyn_inspectiondefinition_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_inspectiondefinition_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_inspectiondefinition_DuplicateBaseRecord: WebExpand<msdyn_inspectiondefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inspectiondefinition_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_inspectiondefinition_DuplicateMatchingRecord: WebExpand<msdyn_inspectiondefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inspectiondefinition_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_inspectiondefinition_MailboxTrackingFolders: WebExpand<msdyn_inspectiondefinition_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_inspectiondefinition_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_inspectiondefinition_PrincipalObjectAttributeAccesses: WebExpand<msdyn_inspectiondefinition_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_inspectiondefinition_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_inspectiondefinition_ProcessSession: WebExpand<msdyn_inspectiondefinition_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_inspectiondefinition_ProcessSession: ProcessSession_Result[] }>;
  msdyn_inspectiondefinition_SyncErrors: WebExpand<msdyn_inspectiondefinition_Expand, SyncError_Select, SyncError_Filter, { msdyn_inspectiondefinition_SyncErrors: SyncError_Result[] }>;
  msdyn_inspectiondefinition_UserEntityInstanceDatas: WebExpand<msdyn_inspectiondefinition_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_inspectiondefinition_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_inspectiondefinition_msdyn_inspectioninstance: WebExpand<msdyn_inspectiondefinition_Expand, msdyn_inspectioninstance_Select, msdyn_inspectioninstance_Filter, { msdyn_msdyn_inspectiondefinition_msdyn_inspectioninstance: msdyn_inspectioninstance_Result[] }>;
  msdyn_msdyn_inspectiondefinition_msdyn_inspectionresponse_InspectionDefinition: WebExpand<msdyn_inspectiondefinition_Expand, msdyn_inspectionresponse_Select, msdyn_inspectionresponse_Filter, { msdyn_msdyn_inspectiondefinition_msdyn_inspectionresponse_InspectionDefinition: msdyn_inspectionresponse_Result[] }>;
  msdyn_msdyn_inspectiondefinition_msdyn_workorderservicetask_inspectiondefinitionid: WebExpand<msdyn_inspectiondefinition_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { msdyn_msdyn_inspectiondefinition_msdyn_workorderservicetask_inspectiondefinitionid: msdyn_workorderservicetask_Result[] }>;
  ownerid: WebExpand<msdyn_inspectiondefinition_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_inspectiondefinition_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_inspectiondefinition_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_inspectiondefinition_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_inspectiondefinition_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_effectivedate_formatted?: string;
  msdyn_parentinspectionid_formatted?: string;
  msdyn_state_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_inspectiondefinition_Result extends msdyn_inspectiondefinition_Base, msdyn_inspectiondefinition_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_parentinspectionid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_inspectiondefinition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ParentInspectionId: WebMappingRetrieve<msdyn_inspection_Select,msdyn_inspection_Expand,msdyn_inspection_Filter,msdyn_inspection_Fixed,msdyn_inspection_Result,msdyn_inspection_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_inspectiondefinition_RelatedMany {
  msdyn_inspectiondefinition_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_inspectiondefinition_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_inspectiondefinition_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inspectiondefinition_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inspectiondefinition_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_inspectiondefinition_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_inspectiondefinition_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_inspectiondefinition_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_inspectiondefinition_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_inspectiondefinition_msdyn_inspectioninstance: WebMappingRetrieve<msdyn_inspectioninstance_Select,msdyn_inspectioninstance_Expand,msdyn_inspectioninstance_Filter,msdyn_inspectioninstance_Fixed,msdyn_inspectioninstance_Result,msdyn_inspectioninstance_FormattedResult>;
  msdyn_msdyn_inspectiondefinition_msdyn_inspectionresponse_InspectionDefinition: WebMappingRetrieve<msdyn_inspectionresponse_Select,msdyn_inspectionresponse_Expand,msdyn_inspectionresponse_Filter,msdyn_inspectionresponse_Fixed,msdyn_inspectionresponse_Result,msdyn_inspectionresponse_FormattedResult>;
  msdyn_msdyn_inspectiondefinition_msdyn_workorderservicetask_inspectiondefinitionid: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_inspectiondefinitions: WebMappingRetrieve<msdyn_inspectiondefinition_Select,msdyn_inspectiondefinition_Expand,msdyn_inspectiondefinition_Filter,msdyn_inspectiondefinition_Fixed,msdyn_inspectiondefinition_Result,msdyn_inspectiondefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_inspectiondefinitions: WebMappingRelated<msdyn_inspectiondefinition_RelatedOne,msdyn_inspectiondefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_inspectiondefinitions: WebMappingCUDA<msdyn_inspectiondefinition_Create,msdyn_inspectiondefinition_Update,msdyn_inspectiondefinition_Select>;
}
