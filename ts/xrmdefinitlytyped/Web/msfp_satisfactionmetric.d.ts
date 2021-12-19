interface msfp_satisfactionmetric_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msfp_description?: string | null;
  msfp_historicalcomputedvalue?: string | null;
  msfp_issystemkpi?: boolean | null;
  msfp_lastcomputedon?: Date | null;
  msfp_lastcomputedvalue?: string | null;
  msfp_maximumvalue?: number | null;
  msfp_minimumvalue?: number | null;
  msfp_name?: string | null;
  msfp_questions?: string | null;
  msfp_satisfactionmetricid?: string | null;
  msfp_status?: msfp_satisfactionmetric_msfp_status | null;
  msfp_threshold?: number | null;
  msfp_type?: string | null;
  msfp_versionnumber?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msfp_satisfactionmetric_statecode | null;
  statuscode?: msfp_satisfactionmetric_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msfp_satisfactionmetric_Relationships {
  msfp_msfp_satisfactionmetric_msfp_alert?: msfp_alert_Result[] | null;
  msfp_msfp_satisfactionmetric_msfp_alertrule?: msfp_alertrule_Result[] | null;
  msfp_satisfactionmetric_AsyncOperations?: AsyncOperation_Result[] | null;
  msfp_satisfactionmetric_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msfp_satisfactionmetric_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msfp_satisfactionmetric_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msfp_satisfactionmetric_ProcessSession?: ProcessSession_Result[] | null;
  msfp_satisfactionmetric_SyncErrors?: SyncError_Result[] | null;
  msfp_satisfactionmetric_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msfp_satisfactionmetric extends msfp_satisfactionmetric_Base, msfp_satisfactionmetric_Relationships {
  msfp_project_bind$msfp_projects?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msfp_satisfactionmetric_Create extends msfp_satisfactionmetric {
}
interface msfp_satisfactionmetric_Update extends msfp_satisfactionmetric {
}
interface msfp_satisfactionmetric_Select {
  createdby_guid: WebAttribute<msfp_satisfactionmetric_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msfp_satisfactionmetric_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msfp_satisfactionmetric_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msfp_satisfactionmetric_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msfp_satisfactionmetric_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msfp_satisfactionmetric_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msfp_satisfactionmetric_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msfp_description: WebAttribute<msfp_satisfactionmetric_Select, { msfp_description: string | null }, {  }>;
  msfp_historicalcomputedvalue: WebAttribute<msfp_satisfactionmetric_Select, { msfp_historicalcomputedvalue: string | null }, {  }>;
  msfp_issystemkpi: WebAttribute<msfp_satisfactionmetric_Select, { msfp_issystemkpi: boolean | null }, {  }>;
  msfp_lastcomputedon: WebAttribute<msfp_satisfactionmetric_Select, { msfp_lastcomputedon: Date | null }, { msfp_lastcomputedon_formatted?: string }>;
  msfp_lastcomputedvalue: WebAttribute<msfp_satisfactionmetric_Select, { msfp_lastcomputedvalue: string | null }, {  }>;
  msfp_maximumvalue: WebAttribute<msfp_satisfactionmetric_Select, { msfp_maximumvalue: number | null }, {  }>;
  msfp_minimumvalue: WebAttribute<msfp_satisfactionmetric_Select, { msfp_minimumvalue: number | null }, {  }>;
  msfp_name: WebAttribute<msfp_satisfactionmetric_Select, { msfp_name: string | null }, {  }>;
  msfp_project_guid: WebAttribute<msfp_satisfactionmetric_Select, { msfp_project_guid: string | null }, { msfp_project_formatted?: string }>;
  msfp_questions: WebAttribute<msfp_satisfactionmetric_Select, { msfp_questions: string | null }, {  }>;
  msfp_satisfactionmetricid: WebAttribute<msfp_satisfactionmetric_Select, { msfp_satisfactionmetricid: string | null }, {  }>;
  msfp_status: WebAttribute<msfp_satisfactionmetric_Select, { msfp_status: msfp_satisfactionmetric_msfp_status | null }, { msfp_status_formatted?: string }>;
  msfp_threshold: WebAttribute<msfp_satisfactionmetric_Select, { msfp_threshold: number | null }, {  }>;
  msfp_type: WebAttribute<msfp_satisfactionmetric_Select, { msfp_type: string | null }, {  }>;
  msfp_versionnumber: WebAttribute<msfp_satisfactionmetric_Select, { msfp_versionnumber: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msfp_satisfactionmetric_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msfp_satisfactionmetric_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msfp_satisfactionmetric_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msfp_satisfactionmetric_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msfp_satisfactionmetric_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msfp_satisfactionmetric_Select, { statecode: msfp_satisfactionmetric_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msfp_satisfactionmetric_Select, { statuscode: msfp_satisfactionmetric_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msfp_satisfactionmetric_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msfp_satisfactionmetric_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msfp_satisfactionmetric_Select, { versionnumber: number | null }, {  }>;
}
interface msfp_satisfactionmetric_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msfp_description: string;
  msfp_historicalcomputedvalue: string;
  msfp_issystemkpi: boolean;
  msfp_lastcomputedon: Date;
  msfp_lastcomputedvalue: string;
  msfp_maximumvalue: number;
  msfp_minimumvalue: number;
  msfp_name: string;
  msfp_project_guid: XQW.Guid;
  msfp_questions: string;
  msfp_satisfactionmetricid: XQW.Guid;
  msfp_status: msfp_satisfactionmetric_msfp_status;
  msfp_threshold: number;
  msfp_type: string;
  msfp_versionnumber: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msfp_satisfactionmetric_statecode;
  statuscode: msfp_satisfactionmetric_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msfp_satisfactionmetric_Expand {
  createdby: WebExpand<msfp_satisfactionmetric_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msfp_satisfactionmetric_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msfp_satisfactionmetric_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msfp_satisfactionmetric_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msfp_msfp_satisfactionmetric_msfp_alert: WebExpand<msfp_satisfactionmetric_Expand, msfp_alert_Select, msfp_alert_Filter, { msfp_msfp_satisfactionmetric_msfp_alert: msfp_alert_Result[] }>;
  msfp_msfp_satisfactionmetric_msfp_alertrule: WebExpand<msfp_satisfactionmetric_Expand, msfp_alertrule_Select, msfp_alertrule_Filter, { msfp_msfp_satisfactionmetric_msfp_alertrule: msfp_alertrule_Result[] }>;
  msfp_project: WebExpand<msfp_satisfactionmetric_Expand, msfp_project_Select, msfp_project_Filter, { msfp_project: msfp_project_Result }>;
  msfp_satisfactionmetric_AsyncOperations: WebExpand<msfp_satisfactionmetric_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msfp_satisfactionmetric_AsyncOperations: AsyncOperation_Result[] }>;
  msfp_satisfactionmetric_BulkDeleteFailures: WebExpand<msfp_satisfactionmetric_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msfp_satisfactionmetric_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msfp_satisfactionmetric_MailboxTrackingFolders: WebExpand<msfp_satisfactionmetric_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msfp_satisfactionmetric_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msfp_satisfactionmetric_PrincipalObjectAttributeAccesses: WebExpand<msfp_satisfactionmetric_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msfp_satisfactionmetric_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msfp_satisfactionmetric_ProcessSession: WebExpand<msfp_satisfactionmetric_Expand, ProcessSession_Select, ProcessSession_Filter, { msfp_satisfactionmetric_ProcessSession: ProcessSession_Result[] }>;
  msfp_satisfactionmetric_SyncErrors: WebExpand<msfp_satisfactionmetric_Expand, SyncError_Select, SyncError_Filter, { msfp_satisfactionmetric_SyncErrors: SyncError_Result[] }>;
  msfp_satisfactionmetric_UserEntityInstanceDatas: WebExpand<msfp_satisfactionmetric_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msfp_satisfactionmetric_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msfp_satisfactionmetric_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msfp_satisfactionmetric_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msfp_satisfactionmetric_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msfp_satisfactionmetric_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msfp_satisfactionmetric_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msfp_lastcomputedon_formatted?: string;
  msfp_project_formatted?: string;
  msfp_status_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msfp_satisfactionmetric_Result extends msfp_satisfactionmetric_Base, msfp_satisfactionmetric_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msfp_project_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msfp_satisfactionmetric_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msfp_project: WebMappingRetrieve<msfp_project_Select,msfp_project_Expand,msfp_project_Filter,msfp_project_Fixed,msfp_project_Result,msfp_project_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msfp_satisfactionmetric_RelatedMany {
  msfp_msfp_satisfactionmetric_msfp_alert: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msfp_msfp_satisfactionmetric_msfp_alertrule: WebMappingRetrieve<msfp_alertrule_Select,msfp_alertrule_Expand,msfp_alertrule_Filter,msfp_alertrule_Fixed,msfp_alertrule_Result,msfp_alertrule_FormattedResult>;
  msfp_satisfactionmetric_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msfp_satisfactionmetric_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msfp_satisfactionmetric_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msfp_satisfactionmetric_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msfp_satisfactionmetric_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msfp_satisfactionmetric_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msfp_satisfactionmetric_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msfp_satisfactionmetrics: WebMappingRetrieve<msfp_satisfactionmetric_Select,msfp_satisfactionmetric_Expand,msfp_satisfactionmetric_Filter,msfp_satisfactionmetric_Fixed,msfp_satisfactionmetric_Result,msfp_satisfactionmetric_FormattedResult>;
}
interface WebEntitiesRelated {
  msfp_satisfactionmetrics: WebMappingRelated<msfp_satisfactionmetric_RelatedOne,msfp_satisfactionmetric_RelatedMany>;
}
interface WebEntitiesCUDA {
  msfp_satisfactionmetrics: WebMappingCUDA<msfp_satisfactionmetric_Create,msfp_satisfactionmetric_Update,msfp_satisfactionmetric_Select>;
}
