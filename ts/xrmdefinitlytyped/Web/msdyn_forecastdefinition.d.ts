interface msdyn_forecastdefinition_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_fiscalmonth?: msdyn_fcdefinition_msdyn_fiscalmonth | null;
  msdyn_fiscalquarter?: msdyn_fcdefinition_msdyn_fiscalquarter | null;
  msdyn_fiscalyear?: msdyn_forecastdefinition_msdyn_fiscalyear | null;
  msdyn_forecastdefinitionid?: string | null;
  msdyn_forecastdefinitionname?: string | null;
  msdyn_forecastperiodtype?: msdyn_forecastdefinition_msdyn_forecastperiodtype | null;
  msdyn_numberofrecurrences?: number | null;
  msdyn_quotasource?: msdyn_forecastdefinition_msdyn_quotasource | null;
  msdyn_validfrom?: Date | null;
  msdyn_validto?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_forecastdefinition_statecode | null;
  statuscode?: msdyn_forecastdefinition_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_forecastdefinition_Relationships {
  msdyn_forecastdefinition_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_forecastdefinition_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_forecastdefinition_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_forecastdefinition_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_forecastdefinition_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_forecastdefinition_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_forecastdefinition_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_forecastdefinition_SyncErrors?: SyncError_Result[] | null;
  msdyn_forecastdefinition_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_forecastdefinition_msdyn_forecastinstance?: msdyn_forecastinstance_Result[] | null;
  msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence?: msdyn_forecastrecurrence_Result[] | null;
}
interface msdyn_forecastdefinition extends msdyn_forecastdefinition_Base, msdyn_forecastdefinition_Relationships {
  msdyn_metricid_bind$metrics?: string | null;
  msdyn_rollupquery_bind$goalrollupqueries?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_forecastdefinition_Create extends msdyn_forecastdefinition {
}
interface msdyn_forecastdefinition_Update extends msdyn_forecastdefinition {
}
interface msdyn_forecastdefinition_Select {
  createdby_guid: WebAttribute<msdyn_forecastdefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_forecastdefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_forecastdefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_forecastdefinition_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_forecastdefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_forecastdefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_forecastdefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_fiscalmonth: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_fiscalmonth: msdyn_fcdefinition_msdyn_fiscalmonth | null }, { msdyn_fiscalmonth_formatted?: string }>;
  msdyn_fiscalquarter: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_fiscalquarter: msdyn_fcdefinition_msdyn_fiscalquarter | null }, { msdyn_fiscalquarter_formatted?: string }>;
  msdyn_fiscalyear: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_fiscalyear: msdyn_forecastdefinition_msdyn_fiscalyear | null }, { msdyn_fiscalyear_formatted?: string }>;
  msdyn_forecastdefinitionid: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_forecastdefinitionid: string | null }, {  }>;
  msdyn_forecastdefinitionname: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_forecastdefinitionname: string | null }, {  }>;
  msdyn_forecastperiodtype: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_forecastperiodtype: msdyn_forecastdefinition_msdyn_forecastperiodtype | null }, { msdyn_forecastperiodtype_formatted?: string }>;
  msdyn_metricid_guid: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_metricid_guid: string | null }, { msdyn_metricid_formatted?: string }>;
  msdyn_numberofrecurrences: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_numberofrecurrences: number | null }, {  }>;
  msdyn_quotasource: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_quotasource: msdyn_forecastdefinition_msdyn_quotasource | null }, { msdyn_quotasource_formatted?: string }>;
  msdyn_rollupquery_guid: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_rollupquery_guid: string | null }, { msdyn_rollupquery_formatted?: string }>;
  msdyn_validfrom: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_validfrom: Date | null }, { msdyn_validfrom_formatted?: string }>;
  msdyn_validto: WebAttribute<msdyn_forecastdefinition_Select, { msdyn_validto: Date | null }, { msdyn_validto_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_forecastdefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_forecastdefinition_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_forecastdefinition_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_forecastdefinition_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_forecastdefinition_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_forecastdefinition_Select, { statecode: msdyn_forecastdefinition_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_forecastdefinition_Select, { statuscode: msdyn_forecastdefinition_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_forecastdefinition_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_forecastdefinition_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_forecastdefinition_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_forecastdefinition_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_fiscalmonth: msdyn_fcdefinition_msdyn_fiscalmonth;
  msdyn_fiscalquarter: msdyn_fcdefinition_msdyn_fiscalquarter;
  msdyn_fiscalyear: msdyn_forecastdefinition_msdyn_fiscalyear;
  msdyn_forecastdefinitionid: XQW.Guid;
  msdyn_forecastdefinitionname: string;
  msdyn_forecastperiodtype: msdyn_forecastdefinition_msdyn_forecastperiodtype;
  msdyn_metricid_guid: XQW.Guid;
  msdyn_numberofrecurrences: number;
  msdyn_quotasource: msdyn_forecastdefinition_msdyn_quotasource;
  msdyn_rollupquery_guid: XQW.Guid;
  msdyn_validfrom: Date;
  msdyn_validto: Date;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_forecastdefinition_statecode;
  statuscode: msdyn_forecastdefinition_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_forecastdefinition_Expand {
  createdby: WebExpand<msdyn_forecastdefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_forecastdefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_forecastdefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_forecastdefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_forecastdefinition_AsyncOperations: WebExpand<msdyn_forecastdefinition_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_forecastdefinition_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_forecastdefinition_BulkDeleteFailures: WebExpand<msdyn_forecastdefinition_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_forecastdefinition_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_forecastdefinition_DuplicateBaseRecord: WebExpand<msdyn_forecastdefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_forecastdefinition_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_forecastdefinition_DuplicateMatchingRecord: WebExpand<msdyn_forecastdefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_forecastdefinition_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_forecastdefinition_MailboxTrackingFolders: WebExpand<msdyn_forecastdefinition_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_forecastdefinition_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_forecastdefinition_PrincipalObjectAttributeAccesses: WebExpand<msdyn_forecastdefinition_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_forecastdefinition_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_forecastdefinition_ProcessSession: WebExpand<msdyn_forecastdefinition_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_forecastdefinition_ProcessSession: ProcessSession_Result[] }>;
  msdyn_forecastdefinition_SyncErrors: WebExpand<msdyn_forecastdefinition_Expand, SyncError_Select, SyncError_Filter, { msdyn_forecastdefinition_SyncErrors: SyncError_Result[] }>;
  msdyn_forecastdefinition_UserEntityInstanceDatas: WebExpand<msdyn_forecastdefinition_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_forecastdefinition_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_metricid: WebExpand<msdyn_forecastdefinition_Expand, Metric_Select, Metric_Filter, { msdyn_metricid: Metric_Result }>;
  msdyn_msdyn_forecastdefinition_msdyn_forecastinstance: WebExpand<msdyn_forecastdefinition_Expand, msdyn_forecastinstance_Select, msdyn_forecastinstance_Filter, { msdyn_msdyn_forecastdefinition_msdyn_forecastinstance: msdyn_forecastinstance_Result[] }>;
  msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence: WebExpand<msdyn_forecastdefinition_Expand, msdyn_forecastrecurrence_Select, msdyn_forecastrecurrence_Filter, { msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence: msdyn_forecastrecurrence_Result[] }>;
  msdyn_rollupquery: WebExpand<msdyn_forecastdefinition_Expand, GoalRollupQuery_Select, GoalRollupQuery_Filter, { msdyn_rollupquery: GoalRollupQuery_Result }>;
  ownerid: WebExpand<msdyn_forecastdefinition_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_forecastdefinition_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_forecastdefinition_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_forecastdefinition_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_forecastdefinition_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_fiscalmonth_formatted?: string;
  msdyn_fiscalquarter_formatted?: string;
  msdyn_fiscalyear_formatted?: string;
  msdyn_forecastperiodtype_formatted?: string;
  msdyn_metricid_formatted?: string;
  msdyn_quotasource_formatted?: string;
  msdyn_rollupquery_formatted?: string;
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
interface msdyn_forecastdefinition_Result extends msdyn_forecastdefinition_Base, msdyn_forecastdefinition_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_metricid_guid: string | null;
  msdyn_rollupquery_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_forecastdefinition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_metricid: WebMappingRetrieve<Metric_Select,Metric_Expand,Metric_Filter,Metric_Fixed,Metric_Result,Metric_FormattedResult>;
  msdyn_rollupquery: WebMappingRetrieve<GoalRollupQuery_Select,GoalRollupQuery_Expand,GoalRollupQuery_Filter,GoalRollupQuery_Fixed,GoalRollupQuery_Result,GoalRollupQuery_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_forecastdefinition_RelatedMany {
  msdyn_forecastdefinition_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_forecastdefinition_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_forecastdefinition_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_forecastdefinition_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_forecastdefinition_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_forecastdefinition_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_forecastdefinition_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_forecastdefinition_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_forecastdefinition_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_forecastdefinition_msdyn_forecastinstance: WebMappingRetrieve<msdyn_forecastinstance_Select,msdyn_forecastinstance_Expand,msdyn_forecastinstance_Filter,msdyn_forecastinstance_Fixed,msdyn_forecastinstance_Result,msdyn_forecastinstance_FormattedResult>;
  msdyn_msdyn_forecastdefinition_msdyn_forecastrecurrence: WebMappingRetrieve<msdyn_forecastrecurrence_Select,msdyn_forecastrecurrence_Expand,msdyn_forecastrecurrence_Filter,msdyn_forecastrecurrence_Fixed,msdyn_forecastrecurrence_Result,msdyn_forecastrecurrence_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_forecastdefinitions: WebMappingRetrieve<msdyn_forecastdefinition_Select,msdyn_forecastdefinition_Expand,msdyn_forecastdefinition_Filter,msdyn_forecastdefinition_Fixed,msdyn_forecastdefinition_Result,msdyn_forecastdefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_forecastdefinitions: WebMappingRelated<msdyn_forecastdefinition_RelatedOne,msdyn_forecastdefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_forecastdefinitions: WebMappingCUDA<msdyn_forecastdefinition_Create,msdyn_forecastdefinition_Update,msdyn_forecastdefinition_Select>;
}
