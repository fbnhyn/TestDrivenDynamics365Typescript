interface msdyn_forecastconfiguration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_addedweekindex?: number | null;
  msdyn_additionalfilter?: string | null;
  msdyn_advancedsettings?: string | null;
  msdyn_calendartemplate?: msdyn_msdyn_forecastconfiguration_msdyn_calendartemplate | null;
  msdyn_columns?: string | null;
  msdyn_enddate?: Date | null;
  msdyn_errormessage?: string | null;
  msdyn_fiscalyearstartdate?: Date | null;
  msdyn_forecastcategoryattribute?: string | null;
  msdyn_forecastconfigurationid?: string | null;
  msdyn_forecasttimezone?: string | null;
  msdyn_hierarchyentity?: string | null;
  msdyn_hierarchyrelationship?: string | null;
  msdyn_issnapshotscheduled?: boolean | null;
  msdyn_name?: string | null;
  msdyn_numberofrecurrences?: number | null;
  msdyn_periodtype?: msdyn_forecastconfiguration_msdyn_periodtype | null;
  msdyn_permissionsdata?: string | null;
  msdyn_pivots?: string | null;
  msdyn_previewflags?: string | null;
  msdyn_publisheddatetime?: Date | null;
  msdyn_rollupdefaultviewid?: string | null;
  msdyn_rollupentity?: string | null;
  msdyn_rootentityrecordid?: string | null;
  msdyn_snapshotschedule?: string | null;
  msdyn_startdate?: Date | null;
  msdyn_startingfiscalmonth?: msdyn_forecastconfiguration_msdyn_startingfiscalmonth | null;
  msdyn_startingfiscalquarter?: msdyn_forecastconfiguration_msdyn_startingfiscalquarter | null;
  msdyn_startingfiscalyear?: msdyn_forecastconfiguration_msdyn_startingfiscalyear | null;
  msdyn_templatetype?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_forecastconfiguration_statecode | null;
  statuscode?: msdyn_forecastconfiguration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_forecastconfiguration_Relationships {
  msdyn_forecastconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_forecastconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_forecastconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_forecastconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_forecastconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_forecastconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_forecastconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_forecastconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_forecastconfiguration extends msdyn_forecastconfiguration_Base, msdyn_forecastconfiguration_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_forecastconfiguration_Create extends msdyn_forecastconfiguration {
}
interface msdyn_forecastconfiguration_Update extends msdyn_forecastconfiguration {
}
interface msdyn_forecastconfiguration_Select {
  createdby_guid: WebAttribute<msdyn_forecastconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_forecastconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_forecastconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_forecastconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_forecastconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_forecastconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_forecastconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_addedweekindex: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_addedweekindex: number | null }, {  }>;
  msdyn_additionalfilter: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_additionalfilter: string | null }, {  }>;
  msdyn_advancedsettings: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_advancedsettings: string | null }, {  }>;
  msdyn_calendartemplate: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_calendartemplate: msdyn_msdyn_forecastconfiguration_msdyn_calendartemplate | null }, { msdyn_calendartemplate_formatted?: string }>;
  msdyn_columns: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_columns: string | null }, {  }>;
  msdyn_enddate: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_enddate: Date | null }, { msdyn_enddate_formatted?: string }>;
  msdyn_errormessage: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_errormessage: string | null }, {  }>;
  msdyn_fiscalyearstartdate: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_fiscalyearstartdate: Date | null }, { msdyn_fiscalyearstartdate_formatted?: string }>;
  msdyn_forecastcategoryattribute: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_forecastcategoryattribute: string | null }, {  }>;
  msdyn_forecastconfigurationid: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_forecastconfigurationid: string | null }, {  }>;
  msdyn_forecasttimezone: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_forecasttimezone: string | null }, {  }>;
  msdyn_hierarchyentity: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_hierarchyentity: string | null }, {  }>;
  msdyn_hierarchyrelationship: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_hierarchyrelationship: string | null }, {  }>;
  msdyn_issnapshotscheduled: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_issnapshotscheduled: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_numberofrecurrences: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_numberofrecurrences: number | null }, {  }>;
  msdyn_periodtype: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_periodtype: msdyn_forecastconfiguration_msdyn_periodtype | null }, { msdyn_periodtype_formatted?: string }>;
  msdyn_permissionsdata: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_permissionsdata: string | null }, {  }>;
  msdyn_pivots: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_pivots: string | null }, {  }>;
  msdyn_previewflags: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_previewflags: string | null }, {  }>;
  msdyn_publisheddatetime: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_publisheddatetime: Date | null }, { msdyn_publisheddatetime_formatted?: string }>;
  msdyn_rollupdefaultviewid: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_rollupdefaultviewid: string | null }, {  }>;
  msdyn_rollupentity: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_rollupentity: string | null }, {  }>;
  msdyn_rootentityrecordid: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_rootentityrecordid: string | null }, {  }>;
  msdyn_snapshotschedule: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_snapshotschedule: string | null }, {  }>;
  msdyn_startdate: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_startdate: Date | null }, { msdyn_startdate_formatted?: string }>;
  msdyn_startingfiscalmonth: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_startingfiscalmonth: msdyn_forecastconfiguration_msdyn_startingfiscalmonth | null }, { msdyn_startingfiscalmonth_formatted?: string }>;
  msdyn_startingfiscalquarter: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_startingfiscalquarter: msdyn_forecastconfiguration_msdyn_startingfiscalquarter | null }, { msdyn_startingfiscalquarter_formatted?: string }>;
  msdyn_startingfiscalyear: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_startingfiscalyear: msdyn_forecastconfiguration_msdyn_startingfiscalyear | null }, { msdyn_startingfiscalyear_formatted?: string }>;
  msdyn_templatetype: WebAttribute<msdyn_forecastconfiguration_Select, { msdyn_templatetype: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_forecastconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_forecastconfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_forecastconfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_forecastconfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_forecastconfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_forecastconfiguration_Select, { statecode: msdyn_forecastconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_forecastconfiguration_Select, { statuscode: msdyn_forecastconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_forecastconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_forecastconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_forecastconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_forecastconfiguration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_addedweekindex: number;
  msdyn_additionalfilter: string;
  msdyn_advancedsettings: string;
  msdyn_calendartemplate: msdyn_msdyn_forecastconfiguration_msdyn_calendartemplate;
  msdyn_columns: string;
  msdyn_enddate: Date;
  msdyn_errormessage: string;
  msdyn_fiscalyearstartdate: Date;
  msdyn_forecastcategoryattribute: string;
  msdyn_forecastconfigurationid: XQW.Guid;
  msdyn_forecasttimezone: string;
  msdyn_hierarchyentity: string;
  msdyn_hierarchyrelationship: string;
  msdyn_issnapshotscheduled: boolean;
  msdyn_name: string;
  msdyn_numberofrecurrences: number;
  msdyn_periodtype: msdyn_forecastconfiguration_msdyn_periodtype;
  msdyn_permissionsdata: string;
  msdyn_pivots: string;
  msdyn_previewflags: string;
  msdyn_publisheddatetime: Date;
  msdyn_rollupdefaultviewid: string;
  msdyn_rollupentity: string;
  msdyn_rootentityrecordid: string;
  msdyn_snapshotschedule: string;
  msdyn_startdate: Date;
  msdyn_startingfiscalmonth: msdyn_forecastconfiguration_msdyn_startingfiscalmonth;
  msdyn_startingfiscalquarter: msdyn_forecastconfiguration_msdyn_startingfiscalquarter;
  msdyn_startingfiscalyear: msdyn_forecastconfiguration_msdyn_startingfiscalyear;
  msdyn_templatetype: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_forecastconfiguration_statecode;
  statuscode: msdyn_forecastconfiguration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_forecastconfiguration_Expand {
  createdby: WebExpand<msdyn_forecastconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_forecastconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_forecastconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_forecastconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_forecastconfiguration_AsyncOperations: WebExpand<msdyn_forecastconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_forecastconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_forecastconfiguration_BulkDeleteFailures: WebExpand<msdyn_forecastconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_forecastconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_forecastconfiguration_DuplicateBaseRecord: WebExpand<msdyn_forecastconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_forecastconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_forecastconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_forecastconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_forecastconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_forecastconfiguration_MailboxTrackingFolders: WebExpand<msdyn_forecastconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_forecastconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_forecastconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_forecastconfiguration_ProcessSession: WebExpand<msdyn_forecastconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_forecastconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_forecastconfiguration_SyncErrors: WebExpand<msdyn_forecastconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_forecastconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_forecastconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_forecastconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_forecastconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_forecastconfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_forecastconfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_forecastconfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_forecastconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_forecastconfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_calendartemplate_formatted?: string;
  msdyn_enddate_formatted?: string;
  msdyn_fiscalyearstartdate_formatted?: string;
  msdyn_periodtype_formatted?: string;
  msdyn_publisheddatetime_formatted?: string;
  msdyn_startdate_formatted?: string;
  msdyn_startingfiscalmonth_formatted?: string;
  msdyn_startingfiscalquarter_formatted?: string;
  msdyn_startingfiscalyear_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_forecastconfiguration_Result extends msdyn_forecastconfiguration_Base, msdyn_forecastconfiguration_Relationships {
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
interface msdyn_forecastconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_forecastconfiguration_RelatedMany {
  msdyn_forecastconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_forecastconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_forecastconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_forecastconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_forecastconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_forecastconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_forecastconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_forecastconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_forecastconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_forecastconfigurations: WebMappingRetrieve<msdyn_forecastconfiguration_Select,msdyn_forecastconfiguration_Expand,msdyn_forecastconfiguration_Filter,msdyn_forecastconfiguration_Fixed,msdyn_forecastconfiguration_Result,msdyn_forecastconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_forecastconfigurations: WebMappingRelated<msdyn_forecastconfiguration_RelatedOne,msdyn_forecastconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_forecastconfigurations: WebMappingCUDA<msdyn_forecastconfiguration_Create,msdyn_forecastconfiguration_Update,msdyn_forecastconfiguration_Select>;
}
