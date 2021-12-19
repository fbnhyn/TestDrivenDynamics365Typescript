interface msdyn_forecastrecurrence_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_actualparticipatingrecordsfetchxml?: string | null;
  msdyn_failureinfo?: string | null;
  msdyn_forecastrecurrenceid?: string | null;
  msdyn_inprogressparticipatingrecordsfetchxml?: string | null;
  msdyn_ishierarchylocked?: boolean | null;
  msdyn_lastrecalculatedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_recalculatestatuschangedon?: Date | null;
  msdyn_recalculationstarttime?: Date | null;
  msdyn_recalculationstatus?: number | null;
  msdyn_recalculationstatusdescription?: string | null;
  msdyn_recurrenceindex?: number | null;
  msdyn_validfrom?: Date | null;
  msdyn_validto?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_forecastrecurrence_statecode | null;
  statuscode?: msdyn_forecastrecurrence_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_forecastrecurrence_Relationships {
  msdyn_ForecastDefinitionId?: msdyn_forecastdefinition_Result | null;
  msdyn_forecastrecurrence_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_forecastrecurrence_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_forecastrecurrence_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_forecastrecurrence_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_forecastrecurrence_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_forecastrecurrence_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_forecastrecurrence_SyncErrors?: SyncError_Result[] | null;
  msdyn_forecastrecurrence_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance?: msdyn_forecastinstance_Result[] | null;
}
interface msdyn_forecastrecurrence extends msdyn_forecastrecurrence_Base, msdyn_forecastrecurrence_Relationships {
  msdyn_ForecastDefinitionId_bind$msdyn_forecastdefinitions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_forecastrecurrence_Create extends msdyn_forecastrecurrence {
}
interface msdyn_forecastrecurrence_Update extends msdyn_forecastrecurrence {
}
interface msdyn_forecastrecurrence_Select {
  createdby_guid: WebAttribute<msdyn_forecastrecurrence_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_forecastrecurrence_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_forecastrecurrence_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_forecastrecurrence_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_forecastrecurrence_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_forecastrecurrence_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_forecastrecurrence_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actualparticipatingrecordsfetchxml: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_actualparticipatingrecordsfetchxml: string | null }, {  }>;
  msdyn_failureinfo: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_failureinfo: string | null }, {  }>;
  msdyn_forecastdefinitionid_guid: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_forecastdefinitionid_guid: string | null }, { msdyn_forecastdefinitionid_formatted?: string }>;
  msdyn_forecastrecurrenceid: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_forecastrecurrenceid: string | null }, {  }>;
  msdyn_inprogressparticipatingrecordsfetchxml: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_inprogressparticipatingrecordsfetchxml: string | null }, {  }>;
  msdyn_ishierarchylocked: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_ishierarchylocked: boolean | null }, {  }>;
  msdyn_lastrecalculatedon: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_lastrecalculatedon: Date | null }, { msdyn_lastrecalculatedon_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_name: string | null }, {  }>;
  msdyn_recalculatestatuschangedon: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_recalculatestatuschangedon: Date | null }, { msdyn_recalculatestatuschangedon_formatted?: string }>;
  msdyn_recalculationstarttime: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_recalculationstarttime: Date | null }, { msdyn_recalculationstarttime_formatted?: string }>;
  msdyn_recalculationstatus: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_recalculationstatus: number | null }, {  }>;
  msdyn_recalculationstatusdescription: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_recalculationstatusdescription: string | null }, {  }>;
  msdyn_recurrenceindex: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_recurrenceindex: number | null }, {  }>;
  msdyn_validfrom: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_validfrom: Date | null }, { msdyn_validfrom_formatted?: string }>;
  msdyn_validto: WebAttribute<msdyn_forecastrecurrence_Select, { msdyn_validto: Date | null }, { msdyn_validto_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_forecastrecurrence_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_forecastrecurrence_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_forecastrecurrence_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_forecastrecurrence_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_forecastrecurrence_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_forecastrecurrence_Select, { statecode: msdyn_forecastrecurrence_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_forecastrecurrence_Select, { statuscode: msdyn_forecastrecurrence_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_forecastrecurrence_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_forecastrecurrence_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_forecastrecurrence_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_forecastrecurrence_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_actualparticipatingrecordsfetchxml: string;
  msdyn_failureinfo: string;
  msdyn_forecastdefinitionid_guid: XQW.Guid;
  msdyn_forecastrecurrenceid: XQW.Guid;
  msdyn_inprogressparticipatingrecordsfetchxml: string;
  msdyn_ishierarchylocked: boolean;
  msdyn_lastrecalculatedon: Date;
  msdyn_name: string;
  msdyn_recalculatestatuschangedon: Date;
  msdyn_recalculationstarttime: Date;
  msdyn_recalculationstatus: number;
  msdyn_recalculationstatusdescription: string;
  msdyn_recurrenceindex: number;
  msdyn_validfrom: Date;
  msdyn_validto: Date;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_forecastrecurrence_statecode;
  statuscode: msdyn_forecastrecurrence_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_forecastrecurrence_Expand {
  createdby: WebExpand<msdyn_forecastrecurrence_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_forecastrecurrence_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_forecastrecurrence_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_forecastrecurrence_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ForecastDefinitionId: WebExpand<msdyn_forecastrecurrence_Expand, msdyn_forecastdefinition_Select, msdyn_forecastdefinition_Filter, { msdyn_ForecastDefinitionId: msdyn_forecastdefinition_Result }>;
  msdyn_forecastrecurrence_AsyncOperations: WebExpand<msdyn_forecastrecurrence_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_forecastrecurrence_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_forecastrecurrence_BulkDeleteFailures: WebExpand<msdyn_forecastrecurrence_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_forecastrecurrence_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_forecastrecurrence_DuplicateBaseRecord: WebExpand<msdyn_forecastrecurrence_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_forecastrecurrence_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_forecastrecurrence_DuplicateMatchingRecord: WebExpand<msdyn_forecastrecurrence_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_forecastrecurrence_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_forecastrecurrence_MailboxTrackingFolders: WebExpand<msdyn_forecastrecurrence_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_forecastrecurrence_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses: WebExpand<msdyn_forecastrecurrence_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_forecastrecurrence_ProcessSession: WebExpand<msdyn_forecastrecurrence_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_forecastrecurrence_ProcessSession: ProcessSession_Result[] }>;
  msdyn_forecastrecurrence_SyncErrors: WebExpand<msdyn_forecastrecurrence_Expand, SyncError_Select, SyncError_Filter, { msdyn_forecastrecurrence_SyncErrors: SyncError_Result[] }>;
  msdyn_forecastrecurrence_UserEntityInstanceDatas: WebExpand<msdyn_forecastrecurrence_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_forecastrecurrence_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance: WebExpand<msdyn_forecastrecurrence_Expand, msdyn_forecastinstance_Select, msdyn_forecastinstance_Filter, { msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance: msdyn_forecastinstance_Result[] }>;
  ownerid: WebExpand<msdyn_forecastrecurrence_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_forecastrecurrence_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_forecastrecurrence_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_forecastrecurrence_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_forecastrecurrence_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_forecastdefinitionid_formatted?: string;
  msdyn_lastrecalculatedon_formatted?: string;
  msdyn_recalculatestatuschangedon_formatted?: string;
  msdyn_recalculationstarttime_formatted?: string;
  msdyn_validfrom_formatted?: string;
  msdyn_validto_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_forecastrecurrence_Result extends msdyn_forecastrecurrence_Base, msdyn_forecastrecurrence_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_forecastdefinitionid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_forecastrecurrence_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ForecastDefinitionId: WebMappingRetrieve<msdyn_forecastdefinition_Select,msdyn_forecastdefinition_Expand,msdyn_forecastdefinition_Filter,msdyn_forecastdefinition_Fixed,msdyn_forecastdefinition_Result,msdyn_forecastdefinition_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_forecastrecurrence_RelatedMany {
  msdyn_forecastrecurrence_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_forecastrecurrence_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_forecastrecurrence_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_forecastrecurrence_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_forecastrecurrence_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_forecastrecurrence_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_forecastrecurrence_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_forecastrecurrence_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_forecastrecurrence_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_forecastrecurrence_msdyn_forecastinstance: WebMappingRetrieve<msdyn_forecastinstance_Select,msdyn_forecastinstance_Expand,msdyn_forecastinstance_Filter,msdyn_forecastinstance_Fixed,msdyn_forecastinstance_Result,msdyn_forecastinstance_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_forecastrecurrences: WebMappingRetrieve<msdyn_forecastrecurrence_Select,msdyn_forecastrecurrence_Expand,msdyn_forecastrecurrence_Filter,msdyn_forecastrecurrence_Fixed,msdyn_forecastrecurrence_Result,msdyn_forecastrecurrence_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_forecastrecurrences: WebMappingRelated<msdyn_forecastrecurrence_RelatedOne,msdyn_forecastrecurrence_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_forecastrecurrences: WebMappingCUDA<msdyn_forecastrecurrence_Create,msdyn_forecastrecurrence_Update,msdyn_forecastrecurrence_Select>;
}
