interface msdyn_consoleapplicationnotificationtemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_acceptbuttontext?: string | null;
  msdyn_actionbuttons?: msdyn_consoleapplicationnotificationaction | null;
  msdyn_autoacceptnotification?: boolean | null;
  msdyn_consoleapplicationnotificationtemplateid?: string | null;
  msdyn_icon?: string | null;
  msdyn_name?: string | null;
  msdyn_notificationbuttons?: string | null;
  msdyn_notificationfieldsplaceholder?: string | null;
  msdyn_rejectbuttonautoaccept?: boolean | null;
  msdyn_rejectbuttontext?: string | null;
  msdyn_renderingorder?: number | null;
  msdyn_showtimeout?: msdyn_consoleapplicationnotificationtemplate_msdyn_showtimeout | null;
  msdyn_theme?: msdyn_consoleapplicationnotificationtemplate_msdyn_theme | null;
  msdyn_timeout?: number | null;
  msdyn_title?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_consoleapplicationnotificationtemplate_statecode | null;
  statuscode?: msdyn_consoleapplicationnotificationtemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_consoleapplicationnotificationtemplate_Relationships {
  msdyn_consoleapplicationnotificationtemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_consoleapplicationnotificationtemplate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_consoleapplicationnotificationtemplate_SyncErrors?: SyncError_Result[] | null;
  msdyn_consoleapplicationnotificationtemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_consoleapplicationnotificationtag?: msdyn_templatetags_Result[] | null;
  msdyn_msdyn_consoleapplicationnotificationtempl?: msdyn_consoleapplicationnotificationfield_Result[] | null;
  msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate?: msdyn_scenario_Result[] | null;
}
interface msdyn_consoleapplicationnotificationtemplate extends msdyn_consoleapplicationnotificationtemplate_Base, msdyn_consoleapplicationnotificationtemplate_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_consoleapplicationnotificationtemplate_Create extends msdyn_consoleapplicationnotificationtemplate {
}
interface msdyn_consoleapplicationnotificationtemplate_Update extends msdyn_consoleapplicationnotificationtemplate {
}
interface msdyn_consoleapplicationnotificationtemplate_Select {
  createdby_guid: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_acceptbuttontext: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_acceptbuttontext: string | null }, {  }>;
  msdyn_actionbuttons: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_actionbuttons: msdyn_consoleapplicationnotificationaction | null }, { msdyn_actionbuttons_formatted?: string }>;
  msdyn_autoacceptnotification: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_autoacceptnotification: boolean | null }, {  }>;
  msdyn_consoleapplicationnotificationtemplateid: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_consoleapplicationnotificationtemplateid: string | null }, {  }>;
  msdyn_icon: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_icon: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_notificationbuttons: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_notificationbuttons: string | null }, {  }>;
  msdyn_notificationfieldsplaceholder: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_notificationfieldsplaceholder: string | null }, {  }>;
  msdyn_rejectbuttonautoaccept: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_rejectbuttonautoaccept: boolean | null }, {  }>;
  msdyn_rejectbuttontext: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_rejectbuttontext: string | null }, {  }>;
  msdyn_renderingorder: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_renderingorder: number | null }, {  }>;
  msdyn_showtimeout: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_showtimeout: msdyn_consoleapplicationnotificationtemplate_msdyn_showtimeout | null }, { msdyn_showtimeout_formatted?: string }>;
  msdyn_theme: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_theme: msdyn_consoleapplicationnotificationtemplate_msdyn_theme | null }, { msdyn_theme_formatted?: string }>;
  msdyn_timeout: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_timeout: number | null }, {  }>;
  msdyn_title: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { msdyn_title: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { statecode: msdyn_consoleapplicationnotificationtemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { statuscode: msdyn_consoleapplicationnotificationtemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_consoleapplicationnotificationtemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_consoleapplicationnotificationtemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_acceptbuttontext: string;
  msdyn_actionbuttons: msdyn_consoleapplicationnotificationaction;
  msdyn_autoacceptnotification: boolean;
  msdyn_consoleapplicationnotificationtemplateid: XQW.Guid;
  msdyn_icon: string;
  msdyn_name: string;
  msdyn_notificationbuttons: string;
  msdyn_notificationfieldsplaceholder: string;
  msdyn_rejectbuttonautoaccept: boolean;
  msdyn_rejectbuttontext: string;
  msdyn_renderingorder: number;
  msdyn_showtimeout: msdyn_consoleapplicationnotificationtemplate_msdyn_showtimeout;
  msdyn_theme: msdyn_consoleapplicationnotificationtemplate_msdyn_theme;
  msdyn_timeout: number;
  msdyn_title: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_consoleapplicationnotificationtemplate_statecode;
  statuscode: msdyn_consoleapplicationnotificationtemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_consoleapplicationnotificationtemplate_Expand {
  createdby: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_consoleapplicationnotificationtemplate_AsyncOperations: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_consoleapplicationnotificationtemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_consoleapplicationnotificationtemplate_ProcessSession: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_consoleapplicationnotificationtemplate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_consoleapplicationnotificationtemplate_SyncErrors: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, SyncError_Select, SyncError_Filter, { msdyn_consoleapplicationnotificationtemplate_SyncErrors: SyncError_Result[] }>;
  msdyn_consoleapplicationnotificationtemplate_UserEntityInstanceDatas: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_consoleapplicationnotificationtemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_consoleapplicationnotificationtag: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, msdyn_templatetags_Select, msdyn_templatetags_Filter, { msdyn_msdyn_consoleapplicationnotificationtag: msdyn_templatetags_Result[] }>;
  msdyn_msdyn_consoleapplicationnotificationtempl: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, msdyn_consoleapplicationnotificationfield_Select, msdyn_consoleapplicationnotificationfield_Filter, { msdyn_msdyn_consoleapplicationnotificationtempl: msdyn_consoleapplicationnotificationfield_Result[] }>;
  msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, msdyn_scenario_Select, msdyn_scenario_Filter, { msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate: msdyn_scenario_Result[] }>;
  ownerid: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_consoleapplicationnotificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_consoleapplicationnotificationtemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_actionbuttons_formatted?: string;
  msdyn_showtimeout_formatted?: string;
  msdyn_theme_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_consoleapplicationnotificationtemplate_Result extends msdyn_consoleapplicationnotificationtemplate_Base, msdyn_consoleapplicationnotificationtemplate_Relationships {
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
interface msdyn_consoleapplicationnotificationtemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_consoleapplicationnotificationtemplate_RelatedMany {
  msdyn_consoleapplicationnotificationtemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_consoleapplicationnotificationtemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_consoleapplicationnotificationtemplate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationnotificationtemplate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationnotificationtemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_consoleapplicationnotificationtemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_consoleapplicationnotificationtemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_consoleapplicationnotificationtemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_consoleapplicationnotificationtemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_consoleapplicationnotificationtag: WebMappingRetrieve<msdyn_templatetags_Select,msdyn_templatetags_Expand,msdyn_templatetags_Filter,msdyn_templatetags_Fixed,msdyn_templatetags_Result,msdyn_templatetags_FormattedResult>;
  msdyn_msdyn_consoleapplicationnotificationtempl: WebMappingRetrieve<msdyn_consoleapplicationnotificationfield_Select,msdyn_consoleapplicationnotificationfield_Expand,msdyn_consoleapplicationnotificationfield_Filter,msdyn_consoleapplicationnotificationfield_Fixed,msdyn_consoleapplicationnotificationfield_Result,msdyn_consoleapplicationnotificationfield_FormattedResult>;
  msdyn_msdyn_consoleapplicationnotificationtemplate_msdyn_scenario_NotificationTemplate: WebMappingRetrieve<msdyn_scenario_Select,msdyn_scenario_Expand,msdyn_scenario_Filter,msdyn_scenario_Fixed,msdyn_scenario_Result,msdyn_scenario_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_consoleapplicationnotificationtemplates: WebMappingRetrieve<msdyn_consoleapplicationnotificationtemplate_Select,msdyn_consoleapplicationnotificationtemplate_Expand,msdyn_consoleapplicationnotificationtemplate_Filter,msdyn_consoleapplicationnotificationtemplate_Fixed,msdyn_consoleapplicationnotificationtemplate_Result,msdyn_consoleapplicationnotificationtemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_consoleapplicationnotificationtemplates: WebMappingRelated<msdyn_consoleapplicationnotificationtemplate_RelatedOne,msdyn_consoleapplicationnotificationtemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_consoleapplicationnotificationtemplates: WebMappingCUDA<msdyn_consoleapplicationnotificationtemplate_Create,msdyn_consoleapplicationnotificationtemplate_Update,msdyn_consoleapplicationnotificationtemplate_Select>;
}
