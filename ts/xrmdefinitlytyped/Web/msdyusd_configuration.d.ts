interface msdyusd_configuration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_Description?: string | null;
  msdyusd_clientconfigcacheversionnumber?: string | null;
  msdyusd_configurationid?: string | null;
  msdyusd_isdefault?: boolean | null;
  msdyusd_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_configuration_statecode | null;
  statuscode?: msdyusd_configuration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_Relationships {
  lk_msdyusd_configuration_msdyusd_configuration?: msdyusd_configuration_Result[] | null;
  msdyusd_configuration_Annotations?: Annotation_Result[] | null;
  msdyusd_configuration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_configuration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_configuration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_configuration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_configuration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_configuration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_configuration_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_configuration_SyncErrors?: SyncError_Result[] | null;
  msdyusd_configuration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_configuration_actioncalls?: msdyusd_agentscriptaction_Result[] | null;
  msdyusd_configuration_agentscript?: msdyusd_task_Result[] | null;
  msdyusd_configuration_entitysearch?: msdyusd_entitysearch_Result[] | null;
  msdyusd_configuration_event?: msdyusd_uiievent_Result[] | null;
  msdyusd_configuration_form?: msdyusd_form_Result[] | null;
  msdyusd_configuration_hostedcontrol?: UII_hostedapplication_Result[] | null;
  msdyusd_configuration_option?: uii_option_Result[] | null;
  msdyusd_configuration_scriptlet?: msdyusd_scriptlet_Result[] | null;
  msdyusd_configuration_sessionlines?: msdyusd_sessioninformation_Result[] | null;
  msdyusd_configuration_toolbar?: msdyusd_toolbarstrip_Result[] | null;
  msdyusd_configuration_users?: SystemUser_Result[] | null;
  msdyusd_configuration_windowroute?: msdyusd_windowroute_Result[] | null;
  msdyusd_customizationfiles_configuration?: msdyusd_customizationfiles_Result[] | null;
}
interface msdyusd_configuration extends msdyusd_configuration_Base, msdyusd_configuration_Relationships {
  msdyusd_auditanddiagnosticssettingfield_bind$msdyusd_auditanddiagnosticssettings?: string | null;
  msdyusd_parentconfigurationid_bind$msdyusd_configurations?: string | null;
  msdyusd_ucisettingsid_bind$msdyusd_ucisettingses?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_configuration_Create extends msdyusd_configuration {
}
interface msdyusd_configuration_Update extends msdyusd_configuration {
}
interface msdyusd_configuration_Select {
  createdby_guid: WebAttribute<msdyusd_configuration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_configuration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_configuration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_configuration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_configuration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_configuration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_configuration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_Description: WebAttribute<msdyusd_configuration_Select, { msdyusd_Description: string | null }, {  }>;
  msdyusd_auditanddiagnosticssettingfield_guid: WebAttribute<msdyusd_configuration_Select, { msdyusd_auditanddiagnosticssettingfield_guid: string | null }, { msdyusd_auditanddiagnosticssettingfield_formatted?: string }>;
  msdyusd_clientconfigcacheversionnumber: WebAttribute<msdyusd_configuration_Select, { msdyusd_clientconfigcacheversionnumber: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_Select, { msdyusd_configurationid: string | null }, {  }>;
  msdyusd_isdefault: WebAttribute<msdyusd_configuration_Select, { msdyusd_isdefault: boolean | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_configuration_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_parentconfigurationid_guid: WebAttribute<msdyusd_configuration_Select, { msdyusd_parentconfigurationid_guid: string | null }, { msdyusd_parentconfigurationid_formatted?: string }>;
  msdyusd_ucisettingsid_guid: WebAttribute<msdyusd_configuration_Select, { msdyusd_ucisettingsid_guid: string | null }, { msdyusd_ucisettingsid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyusd_configuration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_configuration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_configuration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_configuration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_configuration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_configuration_Select, { statecode: msdyusd_configuration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_configuration_Select, { statuscode: msdyusd_configuration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_configuration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_configuration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_Description: string;
  msdyusd_auditanddiagnosticssettingfield_guid: XQW.Guid;
  msdyusd_clientconfigcacheversionnumber: string;
  msdyusd_configurationid: XQW.Guid;
  msdyusd_isdefault: boolean;
  msdyusd_name: string;
  msdyusd_parentconfigurationid_guid: XQW.Guid;
  msdyusd_ucisettingsid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_configuration_statecode;
  statuscode: msdyusd_configuration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_configuration_Expand {
  createdby: WebExpand<msdyusd_configuration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_configuration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  lk_msdyusd_configuration_msdyusd_configuration: WebExpand<msdyusd_configuration_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { lk_msdyusd_configuration_msdyusd_configuration: msdyusd_configuration_Result[] }>;
  modifiedby: WebExpand<msdyusd_configuration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_configuration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_auditanddiagnosticssettingfield: WebExpand<msdyusd_configuration_Expand, msdyusd_auditanddiagnosticssetting_Select, msdyusd_auditanddiagnosticssetting_Filter, { msdyusd_auditanddiagnosticssettingfield: msdyusd_auditanddiagnosticssetting_Result }>;
  msdyusd_configuration_Annotations: WebExpand<msdyusd_configuration_Expand, Annotation_Select, Annotation_Filter, { msdyusd_configuration_Annotations: Annotation_Result[] }>;
  msdyusd_configuration_AsyncOperations: WebExpand<msdyusd_configuration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_configuration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_configuration_BulkDeleteFailures: WebExpand<msdyusd_configuration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_configuration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_configuration_DuplicateBaseRecord: WebExpand<msdyusd_configuration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_configuration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_configuration_DuplicateMatchingRecord: WebExpand<msdyusd_configuration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_configuration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_configuration_MailboxTrackingFolders: WebExpand<msdyusd_configuration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_configuration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_configuration_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_configuration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_configuration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_configuration_ProcessSession: WebExpand<msdyusd_configuration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_configuration_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_configuration_SyncErrors: WebExpand<msdyusd_configuration_Expand, SyncError_Select, SyncError_Filter, { msdyusd_configuration_SyncErrors: SyncError_Result[] }>;
  msdyusd_configuration_UserEntityInstanceDatas: WebExpand<msdyusd_configuration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_configuration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_configuration_actioncalls: WebExpand<msdyusd_configuration_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_configuration_actioncalls: msdyusd_agentscriptaction_Result[] }>;
  msdyusd_configuration_agentscript: WebExpand<msdyusd_configuration_Expand, msdyusd_task_Select, msdyusd_task_Filter, { msdyusd_configuration_agentscript: msdyusd_task_Result[] }>;
  msdyusd_configuration_entitysearch: WebExpand<msdyusd_configuration_Expand, msdyusd_entitysearch_Select, msdyusd_entitysearch_Filter, { msdyusd_configuration_entitysearch: msdyusd_entitysearch_Result[] }>;
  msdyusd_configuration_event: WebExpand<msdyusd_configuration_Expand, msdyusd_uiievent_Select, msdyusd_uiievent_Filter, { msdyusd_configuration_event: msdyusd_uiievent_Result[] }>;
  msdyusd_configuration_form: WebExpand<msdyusd_configuration_Expand, msdyusd_form_Select, msdyusd_form_Filter, { msdyusd_configuration_form: msdyusd_form_Result[] }>;
  msdyusd_configuration_hostedcontrol: WebExpand<msdyusd_configuration_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_configuration_hostedcontrol: UII_hostedapplication_Result[] }>;
  msdyusd_configuration_option: WebExpand<msdyusd_configuration_Expand, uii_option_Select, uii_option_Filter, { msdyusd_configuration_option: uii_option_Result[] }>;
  msdyusd_configuration_scriptlet: WebExpand<msdyusd_configuration_Expand, msdyusd_scriptlet_Select, msdyusd_scriptlet_Filter, { msdyusd_configuration_scriptlet: msdyusd_scriptlet_Result[] }>;
  msdyusd_configuration_sessionlines: WebExpand<msdyusd_configuration_Expand, msdyusd_sessioninformation_Select, msdyusd_sessioninformation_Filter, { msdyusd_configuration_sessionlines: msdyusd_sessioninformation_Result[] }>;
  msdyusd_configuration_toolbar: WebExpand<msdyusd_configuration_Expand, msdyusd_toolbarstrip_Select, msdyusd_toolbarstrip_Filter, { msdyusd_configuration_toolbar: msdyusd_toolbarstrip_Result[] }>;
  msdyusd_configuration_users: WebExpand<msdyusd_configuration_Expand, SystemUser_Select, SystemUser_Filter, { msdyusd_configuration_users: SystemUser_Result[] }>;
  msdyusd_configuration_windowroute: WebExpand<msdyusd_configuration_Expand, msdyusd_windowroute_Select, msdyusd_windowroute_Filter, { msdyusd_configuration_windowroute: msdyusd_windowroute_Result[] }>;
  msdyusd_customizationfiles_configuration: WebExpand<msdyusd_configuration_Expand, msdyusd_customizationfiles_Select, msdyusd_customizationfiles_Filter, { msdyusd_customizationfiles_configuration: msdyusd_customizationfiles_Result[] }>;
  msdyusd_parentconfigurationid: WebExpand<msdyusd_configuration_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_parentconfigurationid: msdyusd_configuration_Result }>;
  msdyusd_ucisettingsid: WebExpand<msdyusd_configuration_Expand, msdyusd_ucisettings_Select, msdyusd_ucisettings_Filter, { msdyusd_ucisettingsid: msdyusd_ucisettings_Result }>;
  ownerid: WebExpand<msdyusd_configuration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_configuration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_configuration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_configuration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_configuration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_auditanddiagnosticssettingfield_formatted?: string;
  msdyusd_parentconfigurationid_formatted?: string;
  msdyusd_ucisettingsid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_configuration_Result extends msdyusd_configuration_Base, msdyusd_configuration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_auditanddiagnosticssettingfield_guid: string | null;
  msdyusd_parentconfigurationid_guid: string | null;
  msdyusd_ucisettingsid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_configuration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_auditanddiagnosticssettingfield: WebMappingRetrieve<msdyusd_auditanddiagnosticssetting_Select,msdyusd_auditanddiagnosticssetting_Expand,msdyusd_auditanddiagnosticssetting_Filter,msdyusd_auditanddiagnosticssetting_Fixed,msdyusd_auditanddiagnosticssetting_Result,msdyusd_auditanddiagnosticssetting_FormattedResult>;
  msdyusd_parentconfigurationid: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  msdyusd_ucisettingsid: WebMappingRetrieve<msdyusd_ucisettings_Select,msdyusd_ucisettings_Expand,msdyusd_ucisettings_Filter,msdyusd_ucisettings_Fixed,msdyusd_ucisettings_Result,msdyusd_ucisettings_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_configuration_RelatedMany {
  lk_msdyusd_configuration_msdyusd_configuration: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  msdyusd_configuration_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_configuration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_configuration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_configuration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_configuration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_configuration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_configuration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_configuration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_configuration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_configuration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_configuration_actioncalls: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
  msdyusd_configuration_agentscript: WebMappingRetrieve<msdyusd_task_Select,msdyusd_task_Expand,msdyusd_task_Filter,msdyusd_task_Fixed,msdyusd_task_Result,msdyusd_task_FormattedResult>;
  msdyusd_configuration_entitysearch: WebMappingRetrieve<msdyusd_entitysearch_Select,msdyusd_entitysearch_Expand,msdyusd_entitysearch_Filter,msdyusd_entitysearch_Fixed,msdyusd_entitysearch_Result,msdyusd_entitysearch_FormattedResult>;
  msdyusd_configuration_event: WebMappingRetrieve<msdyusd_uiievent_Select,msdyusd_uiievent_Expand,msdyusd_uiievent_Filter,msdyusd_uiievent_Fixed,msdyusd_uiievent_Result,msdyusd_uiievent_FormattedResult>;
  msdyusd_configuration_form: WebMappingRetrieve<msdyusd_form_Select,msdyusd_form_Expand,msdyusd_form_Filter,msdyusd_form_Fixed,msdyusd_form_Result,msdyusd_form_FormattedResult>;
  msdyusd_configuration_hostedcontrol: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
  msdyusd_configuration_option: WebMappingRetrieve<uii_option_Select,uii_option_Expand,uii_option_Filter,uii_option_Fixed,uii_option_Result,uii_option_FormattedResult>;
  msdyusd_configuration_scriptlet: WebMappingRetrieve<msdyusd_scriptlet_Select,msdyusd_scriptlet_Expand,msdyusd_scriptlet_Filter,msdyusd_scriptlet_Fixed,msdyusd_scriptlet_Result,msdyusd_scriptlet_FormattedResult>;
  msdyusd_configuration_sessionlines: WebMappingRetrieve<msdyusd_sessioninformation_Select,msdyusd_sessioninformation_Expand,msdyusd_sessioninformation_Filter,msdyusd_sessioninformation_Fixed,msdyusd_sessioninformation_Result,msdyusd_sessioninformation_FormattedResult>;
  msdyusd_configuration_toolbar: WebMappingRetrieve<msdyusd_toolbarstrip_Select,msdyusd_toolbarstrip_Expand,msdyusd_toolbarstrip_Filter,msdyusd_toolbarstrip_Fixed,msdyusd_toolbarstrip_Result,msdyusd_toolbarstrip_FormattedResult>;
  msdyusd_configuration_users: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_configuration_windowroute: WebMappingRetrieve<msdyusd_windowroute_Select,msdyusd_windowroute_Expand,msdyusd_windowroute_Filter,msdyusd_windowroute_Fixed,msdyusd_windowroute_Result,msdyusd_windowroute_FormattedResult>;
  msdyusd_customizationfiles_configuration: WebMappingRetrieve<msdyusd_customizationfiles_Select,msdyusd_customizationfiles_Expand,msdyusd_customizationfiles_Filter,msdyusd_customizationfiles_Fixed,msdyusd_customizationfiles_Result,msdyusd_customizationfiles_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configurations: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configurations: WebMappingRelated<msdyusd_configuration_RelatedOne,msdyusd_configuration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configurations: WebMappingCUDA<msdyusd_configuration_Create,msdyusd_configuration_Update,msdyusd_configuration_Select>;
}
