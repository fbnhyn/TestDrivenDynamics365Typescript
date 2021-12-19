interface msdyn_inspection_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_effectivedate?: Date | null;
  msdyn_inspectionid?: string | null;
  msdyn_name?: string | null;
  msdyn_publishedon?: Date | null;
  msdyn_state?: msdyn_inspection_msdyn_state | null;
  msdyn_surveydefinition?: string | null;
  msdyn_version?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_inspection_statecode | null;
  statuscode?: msdyn_inspection_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_inspection_Relationships {
  msdyn_inspection_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_inspection_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_inspection_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_inspection_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_inspection_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_inspection_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_inspection_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_inspection_SyncErrors?: SyncError_Result[] | null;
  msdyn_inspection_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_inspection_msdyn_agreementbookingservicetask_Inspection?: msdyn_agreementbookingservicetask_Result[] | null;
  msdyn_msdyn_inspection_msdyn_incidenttypeservicetask_Inspection?: msdyn_incidenttypeservicetask_Result[] | null;
  msdyn_msdyn_inspection_msdyn_inspectiondefinition?: msdyn_inspectiondefinition_Result[] | null;
  msdyn_msdyn_inspection_msdyn_inspectioninstance?: msdyn_inspectioninstance_Result[] | null;
  msdyn_msdyn_inspection_msdyn_servicetasktype_Inspection?: msdyn_servicetasktype_Result[] | null;
  msdyn_msdyn_inspection_msdyn_workorderservicetask_Inspection?: msdyn_workorderservicetask_Result[] | null;
  msdyn_msdyn_inspection_msfp_survey_Inspection?: msfp_survey_Result[] | null;
}
interface msdyn_inspection extends msdyn_inspection_Base, msdyn_inspection_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_inspection_Create extends msdyn_inspection {
}
interface msdyn_inspection_Update extends msdyn_inspection {
}
interface msdyn_inspection_Select {
  createdby_guid: WebAttribute<msdyn_inspection_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_inspection_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_inspection_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_inspection_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_inspection_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_inspection_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_inspection_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_inspection_Select, { msdyn_description: string | null }, {  }>;
  msdyn_effectivedate: WebAttribute<msdyn_inspection_Select, { msdyn_effectivedate: Date | null }, { msdyn_effectivedate_formatted?: string }>;
  msdyn_inspectionid: WebAttribute<msdyn_inspection_Select, { msdyn_inspectionid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_inspection_Select, { msdyn_name: string | null }, {  }>;
  msdyn_publishedby_guid: WebAttribute<msdyn_inspection_Select, { msdyn_publishedby_guid: string | null }, { msdyn_publishedby_formatted?: string }>;
  msdyn_publishedon: WebAttribute<msdyn_inspection_Select, { msdyn_publishedon: Date | null }, { msdyn_publishedon_formatted?: string }>;
  msdyn_state: WebAttribute<msdyn_inspection_Select, { msdyn_state: msdyn_inspection_msdyn_state | null }, { msdyn_state_formatted?: string }>;
  msdyn_surveydefinition: WebAttribute<msdyn_inspection_Select, { msdyn_surveydefinition: string | null }, {  }>;
  msdyn_version: WebAttribute<msdyn_inspection_Select, { msdyn_version: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_inspection_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_inspection_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_inspection_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_inspection_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_inspection_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_inspection_Select, { statecode: msdyn_inspection_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_inspection_Select, { statuscode: msdyn_inspection_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_inspection_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_inspection_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_inspection_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_inspection_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_effectivedate: Date;
  msdyn_inspectionid: XQW.Guid;
  msdyn_name: string;
  msdyn_publishedby_guid: XQW.Guid;
  msdyn_publishedon: Date;
  msdyn_state: msdyn_inspection_msdyn_state;
  msdyn_surveydefinition: string;
  msdyn_version: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_inspection_statecode;
  statuscode: msdyn_inspection_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_inspection_Expand {
  createdby: WebExpand<msdyn_inspection_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_inspection_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_inspection_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_inspection_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_inspection_AsyncOperations: WebExpand<msdyn_inspection_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_inspection_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_inspection_BulkDeleteFailures: WebExpand<msdyn_inspection_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_inspection_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_inspection_DuplicateBaseRecord: WebExpand<msdyn_inspection_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inspection_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_inspection_DuplicateMatchingRecord: WebExpand<msdyn_inspection_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inspection_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_inspection_MailboxTrackingFolders: WebExpand<msdyn_inspection_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_inspection_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_inspection_PrincipalObjectAttributeAccesses: WebExpand<msdyn_inspection_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_inspection_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_inspection_ProcessSession: WebExpand<msdyn_inspection_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_inspection_ProcessSession: ProcessSession_Result[] }>;
  msdyn_inspection_SyncErrors: WebExpand<msdyn_inspection_Expand, SyncError_Select, SyncError_Filter, { msdyn_inspection_SyncErrors: SyncError_Result[] }>;
  msdyn_inspection_UserEntityInstanceDatas: WebExpand<msdyn_inspection_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_inspection_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_inspection_msdyn_agreementbookingservicetask_Inspection: WebExpand<msdyn_inspection_Expand, msdyn_agreementbookingservicetask_Select, msdyn_agreementbookingservicetask_Filter, { msdyn_msdyn_inspection_msdyn_agreementbookingservicetask_Inspection: msdyn_agreementbookingservicetask_Result[] }>;
  msdyn_msdyn_inspection_msdyn_incidenttypeservicetask_Inspection: WebExpand<msdyn_inspection_Expand, msdyn_incidenttypeservicetask_Select, msdyn_incidenttypeservicetask_Filter, { msdyn_msdyn_inspection_msdyn_incidenttypeservicetask_Inspection: msdyn_incidenttypeservicetask_Result[] }>;
  msdyn_msdyn_inspection_msdyn_inspectiondefinition: WebExpand<msdyn_inspection_Expand, msdyn_inspectiondefinition_Select, msdyn_inspectiondefinition_Filter, { msdyn_msdyn_inspection_msdyn_inspectiondefinition: msdyn_inspectiondefinition_Result[] }>;
  msdyn_msdyn_inspection_msdyn_inspectioninstance: WebExpand<msdyn_inspection_Expand, msdyn_inspectioninstance_Select, msdyn_inspectioninstance_Filter, { msdyn_msdyn_inspection_msdyn_inspectioninstance: msdyn_inspectioninstance_Result[] }>;
  msdyn_msdyn_inspection_msdyn_servicetasktype_Inspection: WebExpand<msdyn_inspection_Expand, msdyn_servicetasktype_Select, msdyn_servicetasktype_Filter, { msdyn_msdyn_inspection_msdyn_servicetasktype_Inspection: msdyn_servicetasktype_Result[] }>;
  msdyn_msdyn_inspection_msdyn_workorderservicetask_Inspection: WebExpand<msdyn_inspection_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { msdyn_msdyn_inspection_msdyn_workorderservicetask_Inspection: msdyn_workorderservicetask_Result[] }>;
  msdyn_msdyn_inspection_msfp_survey_Inspection: WebExpand<msdyn_inspection_Expand, msfp_survey_Select, msfp_survey_Filter, { msdyn_msdyn_inspection_msfp_survey_Inspection: msfp_survey_Result[] }>;
  ownerid: WebExpand<msdyn_inspection_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_inspection_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_inspection_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_inspection_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_inspection_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_effectivedate_formatted?: string;
  msdyn_publishedby_formatted?: string;
  msdyn_publishedon_formatted?: string;
  msdyn_state_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_inspection_Result extends msdyn_inspection_Base, msdyn_inspection_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_publishedby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_inspection_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_inspection_RelatedMany {
  msdyn_inspection_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_inspection_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_inspection_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inspection_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inspection_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_inspection_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_inspection_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_inspection_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_inspection_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_inspection_msdyn_agreementbookingservicetask_Inspection: WebMappingRetrieve<msdyn_agreementbookingservicetask_Select,msdyn_agreementbookingservicetask_Expand,msdyn_agreementbookingservicetask_Filter,msdyn_agreementbookingservicetask_Fixed,msdyn_agreementbookingservicetask_Result,msdyn_agreementbookingservicetask_FormattedResult>;
  msdyn_msdyn_inspection_msdyn_incidenttypeservicetask_Inspection: WebMappingRetrieve<msdyn_incidenttypeservicetask_Select,msdyn_incidenttypeservicetask_Expand,msdyn_incidenttypeservicetask_Filter,msdyn_incidenttypeservicetask_Fixed,msdyn_incidenttypeservicetask_Result,msdyn_incidenttypeservicetask_FormattedResult>;
  msdyn_msdyn_inspection_msdyn_inspectiondefinition: WebMappingRetrieve<msdyn_inspectiondefinition_Select,msdyn_inspectiondefinition_Expand,msdyn_inspectiondefinition_Filter,msdyn_inspectiondefinition_Fixed,msdyn_inspectiondefinition_Result,msdyn_inspectiondefinition_FormattedResult>;
  msdyn_msdyn_inspection_msdyn_inspectioninstance: WebMappingRetrieve<msdyn_inspectioninstance_Select,msdyn_inspectioninstance_Expand,msdyn_inspectioninstance_Filter,msdyn_inspectioninstance_Fixed,msdyn_inspectioninstance_Result,msdyn_inspectioninstance_FormattedResult>;
  msdyn_msdyn_inspection_msdyn_servicetasktype_Inspection: WebMappingRetrieve<msdyn_servicetasktype_Select,msdyn_servicetasktype_Expand,msdyn_servicetasktype_Filter,msdyn_servicetasktype_Fixed,msdyn_servicetasktype_Result,msdyn_servicetasktype_FormattedResult>;
  msdyn_msdyn_inspection_msdyn_workorderservicetask_Inspection: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
  msdyn_msdyn_inspection_msfp_survey_Inspection: WebMappingRetrieve<msfp_survey_Select,msfp_survey_Expand,msfp_survey_Filter,msfp_survey_Fixed,msfp_survey_Result,msfp_survey_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_inspections: WebMappingRetrieve<msdyn_inspection_Select,msdyn_inspection_Expand,msdyn_inspection_Filter,msdyn_inspection_Fixed,msdyn_inspection_Result,msdyn_inspection_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_inspections: WebMappingRelated<msdyn_inspection_RelatedOne,msdyn_inspection_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_inspections: WebMappingCUDA<msdyn_inspection_Create,msdyn_inspection_Update,msdyn_inspection_Select>;
}
