interface msdyusd_auditanddiagnosticssetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_ATEnabled?: boolean | null;
  msdyusd_ATforActionCalls?: boolean | null;
  msdyusd_ATforAgentLogin?: boolean | null;
  msdyusd_ATforAgentScripts?: boolean | null;
  msdyusd_ATforCustomerSession?: boolean | null;
  msdyusd_ATforEvents?: boolean | null;
  msdyusd_ATforHostedControl?: boolean | null;
  msdyusd_ATforSubActionCalls?: boolean | null;
  msdyusd_ATforUIIAction?: boolean | null;
  msdyusd_ATforWindowsNavRules?: boolean | null;
  msdyusd_CacheSize?: number | null;
  msdyusd_CrashDumpEnabled?: boolean | null;
  msdyusd_DGTEnabled?: boolean | null;
  msdyusd_DGTVerbosityLevel?: msdyusd_auditanddiagnosticssetting_dgtverbositylevel | null;
  msdyusd_EnableCaching?: boolean | null;
  msdyusd_ExitMonitoringEnabled?: boolean | null;
  msdyusd_LogsDirectory?: string | null;
  msdyusd_MaxDiagnosticLogsSizeInMB?: number | null;
  msdyusd_ODDShortcut?: string | null;
  msdyusd_WEREnabled?: boolean | null;
  msdyusd_auditanddiagnosticssettingid?: string | null;
  msdyusd_isdefault?: boolean | null;
  msdyusd_name?: string | null;
  msdyusd_odperfbeginshortcut?: string | null;
  msdyusd_odperfendshortcut?: string | null;
  msdyusd_userschemasettings?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: msdyusd_auditanddiagnosticssetting_statecode | null;
  statuscode?: msdyusd_auditanddiagnosticssetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_auditanddiagnosticssetting_Relationships {
  msdyusd_auditanddiagnosticssetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_auditanddiagnosticssetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_auditanddiagnosticssetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_auditanddiagnosticssetting_SyncErrors?: SyncError_Result[] | null;
  msdyusd_auditanddiagnosticssetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_auditdiag_tracesourcesetting?: msdyusd_tracesourcesetting_Result[] | null;
  msdyusd_configuration_auditanddiagnostics?: msdyusd_configuration_Result[] | null;
}
interface msdyusd_auditanddiagnosticssetting extends msdyusd_auditanddiagnosticssetting_Base, msdyusd_auditanddiagnosticssetting_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
}
interface msdyusd_auditanddiagnosticssetting_Create extends msdyusd_auditanddiagnosticssetting {
}
interface msdyusd_auditanddiagnosticssetting_Update extends msdyusd_auditanddiagnosticssetting {
}
interface msdyusd_auditanddiagnosticssetting_Select {
  createdby_guid: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_ATEnabled: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ATEnabled: boolean | null }, {  }>;
  msdyusd_ATforActionCalls: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ATforActionCalls: boolean | null }, {  }>;
  msdyusd_ATforAgentLogin: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ATforAgentLogin: boolean | null }, {  }>;
  msdyusd_ATforAgentScripts: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ATforAgentScripts: boolean | null }, {  }>;
  msdyusd_ATforCustomerSession: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ATforCustomerSession: boolean | null }, {  }>;
  msdyusd_ATforEvents: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ATforEvents: boolean | null }, {  }>;
  msdyusd_ATforHostedControl: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ATforHostedControl: boolean | null }, {  }>;
  msdyusd_ATforSubActionCalls: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ATforSubActionCalls: boolean | null }, {  }>;
  msdyusd_ATforUIIAction: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ATforUIIAction: boolean | null }, {  }>;
  msdyusd_ATforWindowsNavRules: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ATforWindowsNavRules: boolean | null }, {  }>;
  msdyusd_CacheSize: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_CacheSize: number | null }, {  }>;
  msdyusd_CrashDumpEnabled: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_CrashDumpEnabled: boolean | null }, {  }>;
  msdyusd_DGTEnabled: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_DGTEnabled: boolean | null }, {  }>;
  msdyusd_DGTVerbosityLevel: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_DGTVerbosityLevel: msdyusd_auditanddiagnosticssetting_dgtverbositylevel | null }, { msdyusd_DGTVerbosityLevel_formatted?: string }>;
  msdyusd_EnableCaching: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_EnableCaching: boolean | null }, {  }>;
  msdyusd_ExitMonitoringEnabled: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ExitMonitoringEnabled: boolean | null }, {  }>;
  msdyusd_LogsDirectory: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_LogsDirectory: string | null }, {  }>;
  msdyusd_MaxDiagnosticLogsSizeInMB: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_MaxDiagnosticLogsSizeInMB: number | null }, {  }>;
  msdyusd_ODDShortcut: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_ODDShortcut: string | null }, {  }>;
  msdyusd_WEREnabled: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_WEREnabled: boolean | null }, {  }>;
  msdyusd_auditanddiagnosticssettingid: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_auditanddiagnosticssettingid: string | null }, {  }>;
  msdyusd_isdefault: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_isdefault: boolean | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_odperfbeginshortcut: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_odperfbeginshortcut: string | null }, {  }>;
  msdyusd_odperfendshortcut: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_odperfendshortcut: string | null }, {  }>;
  msdyusd_userschemasettings: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { msdyusd_userschemasettings: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { statecode: msdyusd_auditanddiagnosticssetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { statuscode: msdyusd_auditanddiagnosticssetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_auditanddiagnosticssetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_auditanddiagnosticssetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_ATEnabled: boolean;
  msdyusd_ATforActionCalls: boolean;
  msdyusd_ATforAgentLogin: boolean;
  msdyusd_ATforAgentScripts: boolean;
  msdyusd_ATforCustomerSession: boolean;
  msdyusd_ATforEvents: boolean;
  msdyusd_ATforHostedControl: boolean;
  msdyusd_ATforSubActionCalls: boolean;
  msdyusd_ATforUIIAction: boolean;
  msdyusd_ATforWindowsNavRules: boolean;
  msdyusd_CacheSize: number;
  msdyusd_CrashDumpEnabled: boolean;
  msdyusd_DGTEnabled: boolean;
  msdyusd_DGTVerbosityLevel: msdyusd_auditanddiagnosticssetting_dgtverbositylevel;
  msdyusd_EnableCaching: boolean;
  msdyusd_ExitMonitoringEnabled: boolean;
  msdyusd_LogsDirectory: string;
  msdyusd_MaxDiagnosticLogsSizeInMB: number;
  msdyusd_ODDShortcut: string;
  msdyusd_WEREnabled: boolean;
  msdyusd_auditanddiagnosticssettingid: XQW.Guid;
  msdyusd_isdefault: boolean;
  msdyusd_name: string;
  msdyusd_odperfbeginshortcut: string;
  msdyusd_odperfendshortcut: string;
  msdyusd_userschemasettings: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: msdyusd_auditanddiagnosticssetting_statecode;
  statuscode: msdyusd_auditanddiagnosticssetting_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_auditanddiagnosticssetting_Expand {
  createdby: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_auditanddiagnosticssetting_AsyncOperations: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_auditanddiagnosticssetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_auditanddiagnosticssetting_BulkDeleteFailures: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_auditanddiagnosticssetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_auditanddiagnosticssetting_ProcessSession: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_auditanddiagnosticssetting_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_auditanddiagnosticssetting_SyncErrors: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, SyncError_Select, SyncError_Filter, { msdyusd_auditanddiagnosticssetting_SyncErrors: SyncError_Result[] }>;
  msdyusd_auditanddiagnosticssetting_UserEntityInstanceDatas: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_auditanddiagnosticssetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_auditdiag_tracesourcesetting: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, msdyusd_tracesourcesetting_Select, msdyusd_tracesourcesetting_Filter, { msdyusd_auditdiag_tracesourcesetting: msdyusd_tracesourcesetting_Result[] }>;
  msdyusd_configuration_auditanddiagnostics: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_configuration_auditanddiagnostics: msdyusd_configuration_Result[] }>;
  ownerid: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<msdyusd_auditanddiagnosticssetting_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
}
interface msdyusd_auditanddiagnosticssetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_DGTVerbosityLevel_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_auditanddiagnosticssetting_Result extends msdyusd_auditanddiagnosticssetting_Base, msdyusd_auditanddiagnosticssetting_Relationships {
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
interface msdyusd_auditanddiagnosticssetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
}
interface msdyusd_auditanddiagnosticssetting_RelatedMany {
  msdyusd_auditanddiagnosticssetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_auditanddiagnosticssetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_auditanddiagnosticssetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_auditanddiagnosticssetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_auditanddiagnosticssetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_auditanddiagnosticssetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_auditanddiagnosticssetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_auditdiag_tracesourcesetting: WebMappingRetrieve<msdyusd_tracesourcesetting_Select,msdyusd_tracesourcesetting_Expand,msdyusd_tracesourcesetting_Filter,msdyusd_tracesourcesetting_Fixed,msdyusd_tracesourcesetting_Result,msdyusd_tracesourcesetting_FormattedResult>;
  msdyusd_configuration_auditanddiagnostics: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_auditanddiagnosticssettings: WebMappingRetrieve<msdyusd_auditanddiagnosticssetting_Select,msdyusd_auditanddiagnosticssetting_Expand,msdyusd_auditanddiagnosticssetting_Filter,msdyusd_auditanddiagnosticssetting_Fixed,msdyusd_auditanddiagnosticssetting_Result,msdyusd_auditanddiagnosticssetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_auditanddiagnosticssettings: WebMappingRelated<msdyusd_auditanddiagnosticssetting_RelatedOne,msdyusd_auditanddiagnosticssetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_auditanddiagnosticssettings: WebMappingCUDA<msdyusd_auditanddiagnosticssetting_Create,msdyusd_auditanddiagnosticssetting_Update,msdyusd_auditanddiagnosticssetting_Select>;
}
