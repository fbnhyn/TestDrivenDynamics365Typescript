interface msfp_alertrule_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msfp_alertruleid?: string | null;
  msfp_expression?: string | null;
  msfp_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msfp_alertrule_statecode | null;
  statuscode?: msfp_alertrule_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msfp_alertrule_Relationships {
  msfp_alertrule_AsyncOperations?: AsyncOperation_Result[] | null;
  msfp_alertrule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msfp_alertrule_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msfp_alertrule_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msfp_alertrule_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msfp_alertrule_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msfp_alertrule_ProcessSession?: ProcessSession_Result[] | null;
  msfp_alertrule_SyncErrors?: SyncError_Result[] | null;
  msfp_alertrule_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msfp_msfp_alertrule_msfp_alert_alertrule?: msfp_alert_Result[] | null;
}
interface msfp_alertrule extends msfp_alertrule_Base, msfp_alertrule_Relationships {
  msfp_project_bind$msfp_projects?: string | null;
  msfp_satisfactionmetric_bind$msfp_satisfactionmetrics?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msfp_alertrule_Create extends msfp_alertrule {
}
interface msfp_alertrule_Update extends msfp_alertrule {
}
interface msfp_alertrule_Select {
  createdby_guid: WebAttribute<msfp_alertrule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msfp_alertrule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msfp_alertrule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msfp_alertrule_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msfp_alertrule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msfp_alertrule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msfp_alertrule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msfp_alertruleid: WebAttribute<msfp_alertrule_Select, { msfp_alertruleid: string | null }, {  }>;
  msfp_expression: WebAttribute<msfp_alertrule_Select, { msfp_expression: string | null }, {  }>;
  msfp_name: WebAttribute<msfp_alertrule_Select, { msfp_name: string | null }, {  }>;
  msfp_project_guid: WebAttribute<msfp_alertrule_Select, { msfp_project_guid: string | null }, { msfp_project_formatted?: string }>;
  msfp_satisfactionmetric_guid: WebAttribute<msfp_alertrule_Select, { msfp_satisfactionmetric_guid: string | null }, { msfp_satisfactionmetric_formatted?: string }>;
  overriddencreatedon: WebAttribute<msfp_alertrule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msfp_alertrule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msfp_alertrule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msfp_alertrule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msfp_alertrule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msfp_alertrule_Select, { statecode: msfp_alertrule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msfp_alertrule_Select, { statuscode: msfp_alertrule_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msfp_alertrule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msfp_alertrule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msfp_alertrule_Select, { versionnumber: number | null }, {  }>;
}
interface msfp_alertrule_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msfp_alertruleid: XQW.Guid;
  msfp_expression: string;
  msfp_name: string;
  msfp_project_guid: XQW.Guid;
  msfp_satisfactionmetric_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msfp_alertrule_statecode;
  statuscode: msfp_alertrule_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msfp_alertrule_Expand {
  createdby: WebExpand<msfp_alertrule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msfp_alertrule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msfp_alertrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msfp_alertrule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msfp_alertrule_AsyncOperations: WebExpand<msfp_alertrule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msfp_alertrule_AsyncOperations: AsyncOperation_Result[] }>;
  msfp_alertrule_BulkDeleteFailures: WebExpand<msfp_alertrule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msfp_alertrule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msfp_alertrule_DuplicateBaseRecord: WebExpand<msfp_alertrule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msfp_alertrule_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msfp_alertrule_DuplicateMatchingRecord: WebExpand<msfp_alertrule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msfp_alertrule_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msfp_alertrule_MailboxTrackingFolders: WebExpand<msfp_alertrule_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msfp_alertrule_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msfp_alertrule_PrincipalObjectAttributeAccesses: WebExpand<msfp_alertrule_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msfp_alertrule_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msfp_alertrule_ProcessSession: WebExpand<msfp_alertrule_Expand, ProcessSession_Select, ProcessSession_Filter, { msfp_alertrule_ProcessSession: ProcessSession_Result[] }>;
  msfp_alertrule_SyncErrors: WebExpand<msfp_alertrule_Expand, SyncError_Select, SyncError_Filter, { msfp_alertrule_SyncErrors: SyncError_Result[] }>;
  msfp_alertrule_UserEntityInstanceDatas: WebExpand<msfp_alertrule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msfp_alertrule_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msfp_msfp_alertrule_msfp_alert_alertrule: WebExpand<msfp_alertrule_Expand, msfp_alert_Select, msfp_alert_Filter, { msfp_msfp_alertrule_msfp_alert_alertrule: msfp_alert_Result[] }>;
  msfp_project: WebExpand<msfp_alertrule_Expand, msfp_project_Select, msfp_project_Filter, { msfp_project: msfp_project_Result }>;
  msfp_satisfactionmetric: WebExpand<msfp_alertrule_Expand, msfp_satisfactionmetric_Select, msfp_satisfactionmetric_Filter, { msfp_satisfactionmetric: msfp_satisfactionmetric_Result }>;
  ownerid: WebExpand<msfp_alertrule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msfp_alertrule_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msfp_alertrule_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msfp_alertrule_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msfp_alertrule_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msfp_project_formatted?: string;
  msfp_satisfactionmetric_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msfp_alertrule_Result extends msfp_alertrule_Base, msfp_alertrule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msfp_project_guid: string | null;
  msfp_satisfactionmetric_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msfp_alertrule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msfp_project: WebMappingRetrieve<msfp_project_Select,msfp_project_Expand,msfp_project_Filter,msfp_project_Fixed,msfp_project_Result,msfp_project_FormattedResult>;
  msfp_satisfactionmetric: WebMappingRetrieve<msfp_satisfactionmetric_Select,msfp_satisfactionmetric_Expand,msfp_satisfactionmetric_Filter,msfp_satisfactionmetric_Fixed,msfp_satisfactionmetric_Result,msfp_satisfactionmetric_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msfp_alertrule_RelatedMany {
  msfp_alertrule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msfp_alertrule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msfp_alertrule_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msfp_alertrule_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msfp_alertrule_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msfp_alertrule_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msfp_alertrule_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msfp_alertrule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msfp_alertrule_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msfp_msfp_alertrule_msfp_alert_alertrule: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msfp_alertrules: WebMappingRetrieve<msfp_alertrule_Select,msfp_alertrule_Expand,msfp_alertrule_Filter,msfp_alertrule_Fixed,msfp_alertrule_Result,msfp_alertrule_FormattedResult>;
}
interface WebEntitiesRelated {
  msfp_alertrules: WebMappingRelated<msfp_alertrule_RelatedOne,msfp_alertrule_RelatedMany>;
}
interface WebEntitiesCUDA {
  msfp_alertrules: WebMappingCUDA<msfp_alertrule_Create,msfp_alertrule_Update,msfp_alertrule_Select>;
}
