interface msfp_project_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msfp_customerinsightsconfiguration?: string | null;
  msfp_description?: string | null;
  msfp_environmentid?: string | null;
  msfp_environmentregion?: string | null;
  msfp_name?: string | null;
  msfp_permanentid?: string | null;
  msfp_projectid?: string | null;
  msfp_status?: msfp_project_msfp_status | null;
  msfp_templateid?: string | null;
  msfp_templateversion?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msfp_project_statecode | null;
  statuscode?: msfp_project_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msfp_project_Relationships {
  msfp_msfp_project_msfp_alert_project?: msfp_alert_Result[] | null;
  msfp_msfp_project_msfp_alertrule_project?: msfp_alertrule_Result[] | null;
  msfp_msfp_project_msfp_satisfactionmetric_project?: msfp_satisfactionmetric_Result[] | null;
  msfp_msfp_project_msfp_survey_project?: msfp_survey_Result[] | null;
  msfp_project_AsyncOperations?: AsyncOperation_Result[] | null;
  msfp_project_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msfp_project_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msfp_project_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msfp_project_ProcessSession?: ProcessSession_Result[] | null;
  msfp_project_SyncErrors?: SyncError_Result[] | null;
  msfp_project_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msfp_project extends msfp_project_Base, msfp_project_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msfp_project_Create extends msfp_project {
}
interface msfp_project_Update extends msfp_project {
}
interface msfp_project_Select {
  createdby_guid: WebAttribute<msfp_project_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msfp_project_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msfp_project_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msfp_project_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msfp_project_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msfp_project_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msfp_project_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msfp_customerinsightsconfiguration: WebAttribute<msfp_project_Select, { msfp_customerinsightsconfiguration: string | null }, {  }>;
  msfp_description: WebAttribute<msfp_project_Select, { msfp_description: string | null }, {  }>;
  msfp_environmentid: WebAttribute<msfp_project_Select, { msfp_environmentid: string | null }, {  }>;
  msfp_environmentregion: WebAttribute<msfp_project_Select, { msfp_environmentregion: string | null }, {  }>;
  msfp_name: WebAttribute<msfp_project_Select, { msfp_name: string | null }, {  }>;
  msfp_permanentid: WebAttribute<msfp_project_Select, { msfp_permanentid: string | null }, {  }>;
  msfp_projectid: WebAttribute<msfp_project_Select, { msfp_projectid: string | null }, {  }>;
  msfp_status: WebAttribute<msfp_project_Select, { msfp_status: msfp_project_msfp_status | null }, { msfp_status_formatted?: string }>;
  msfp_templateid: WebAttribute<msfp_project_Select, { msfp_templateid: string | null }, {  }>;
  msfp_templateversion: WebAttribute<msfp_project_Select, { msfp_templateversion: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msfp_project_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msfp_project_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msfp_project_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msfp_project_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msfp_project_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msfp_project_Select, { statecode: msfp_project_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msfp_project_Select, { statuscode: msfp_project_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msfp_project_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msfp_project_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msfp_project_Select, { versionnumber: number | null }, {  }>;
}
interface msfp_project_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msfp_customerinsightsconfiguration: string;
  msfp_description: string;
  msfp_environmentid: string;
  msfp_environmentregion: string;
  msfp_name: string;
  msfp_permanentid: string;
  msfp_projectid: XQW.Guid;
  msfp_status: msfp_project_msfp_status;
  msfp_templateid: string;
  msfp_templateversion: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msfp_project_statecode;
  statuscode: msfp_project_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msfp_project_Expand {
  createdby: WebExpand<msfp_project_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msfp_project_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msfp_project_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msfp_project_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msfp_msfp_project_msfp_alert_project: WebExpand<msfp_project_Expand, msfp_alert_Select, msfp_alert_Filter, { msfp_msfp_project_msfp_alert_project: msfp_alert_Result[] }>;
  msfp_msfp_project_msfp_alertrule_project: WebExpand<msfp_project_Expand, msfp_alertrule_Select, msfp_alertrule_Filter, { msfp_msfp_project_msfp_alertrule_project: msfp_alertrule_Result[] }>;
  msfp_msfp_project_msfp_satisfactionmetric_project: WebExpand<msfp_project_Expand, msfp_satisfactionmetric_Select, msfp_satisfactionmetric_Filter, { msfp_msfp_project_msfp_satisfactionmetric_project: msfp_satisfactionmetric_Result[] }>;
  msfp_msfp_project_msfp_survey_project: WebExpand<msfp_project_Expand, msfp_survey_Select, msfp_survey_Filter, { msfp_msfp_project_msfp_survey_project: msfp_survey_Result[] }>;
  msfp_project_AsyncOperations: WebExpand<msfp_project_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msfp_project_AsyncOperations: AsyncOperation_Result[] }>;
  msfp_project_BulkDeleteFailures: WebExpand<msfp_project_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msfp_project_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msfp_project_MailboxTrackingFolders: WebExpand<msfp_project_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msfp_project_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msfp_project_PrincipalObjectAttributeAccesses: WebExpand<msfp_project_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msfp_project_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msfp_project_ProcessSession: WebExpand<msfp_project_Expand, ProcessSession_Select, ProcessSession_Filter, { msfp_project_ProcessSession: ProcessSession_Result[] }>;
  msfp_project_SyncErrors: WebExpand<msfp_project_Expand, SyncError_Select, SyncError_Filter, { msfp_project_SyncErrors: SyncError_Result[] }>;
  msfp_project_UserEntityInstanceDatas: WebExpand<msfp_project_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msfp_project_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msfp_project_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msfp_project_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msfp_project_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msfp_project_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msfp_project_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msfp_status_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msfp_project_Result extends msfp_project_Base, msfp_project_Relationships {
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
interface msfp_project_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msfp_project_RelatedMany {
  msfp_msfp_project_msfp_alert_project: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msfp_msfp_project_msfp_alertrule_project: WebMappingRetrieve<msfp_alertrule_Select,msfp_alertrule_Expand,msfp_alertrule_Filter,msfp_alertrule_Fixed,msfp_alertrule_Result,msfp_alertrule_FormattedResult>;
  msfp_msfp_project_msfp_satisfactionmetric_project: WebMappingRetrieve<msfp_satisfactionmetric_Select,msfp_satisfactionmetric_Expand,msfp_satisfactionmetric_Filter,msfp_satisfactionmetric_Fixed,msfp_satisfactionmetric_Result,msfp_satisfactionmetric_FormattedResult>;
  msfp_msfp_project_msfp_survey_project: WebMappingRetrieve<msfp_survey_Select,msfp_survey_Expand,msfp_survey_Filter,msfp_survey_Fixed,msfp_survey_Result,msfp_survey_FormattedResult>;
  msfp_project_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msfp_project_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msfp_project_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msfp_project_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msfp_project_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msfp_project_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msfp_project_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msfp_projects: WebMappingRetrieve<msfp_project_Select,msfp_project_Expand,msfp_project_Filter,msfp_project_Fixed,msfp_project_Result,msfp_project_FormattedResult>;
}
interface WebEntitiesRelated {
  msfp_projects: WebMappingRelated<msfp_project_RelatedOne,msfp_project_RelatedMany>;
}
interface WebEntitiesCUDA {
  msfp_projects: WebMappingCUDA<msfp_project_Create,msfp_project_Update,msfp_project_Select>;
}
