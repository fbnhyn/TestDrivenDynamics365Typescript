interface msdyn_operatinghour_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_calendarid?: string | null;
  msdyn_description?: string | null;
  msdyn_enablealldays?: boolean | null;
  msdyn_endtimestring?: string | null;
  msdyn_name?: string | null;
  msdyn_oc_daysofweek?: msdyn_oc_daysofweek | null;
  msdyn_operatinghourid?: string | null;
  msdyn_starttimestring?: string | null;
  msdyn_timezone?: number | null;
  msdyn_totalworkhours?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_operatinghour_statecode | null;
  statuscode?: msdyn_operatinghour_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_operatinghour_Relationships {
  msdyn_msdyn_operatinghour_msdyn_livechatconfig?: msdyn_livechatconfig_Result[] | null;
  msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid?: msdyn_ocsmschannelsetting_Result[] | null;
  msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours?: msdyn_smsnumber_Result[] | null;
  msdyn_msdyn_operatinghour_queue?: Queue_Result[] | null;
  msdyn_operatinghour_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_operatinghour_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_operatinghour_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_operatinghour_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_operatinghour_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_operatinghour_SyncErrors?: SyncError_Result[] | null;
  msdyn_operatinghour_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_operatinghour extends msdyn_operatinghour_Base, msdyn_operatinghour_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_operatinghour_Create extends msdyn_operatinghour {
}
interface msdyn_operatinghour_Update extends msdyn_operatinghour {
}
interface msdyn_operatinghour_Select {
  createdby_guid: WebAttribute<msdyn_operatinghour_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_operatinghour_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_operatinghour_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_operatinghour_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_operatinghour_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_operatinghour_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_operatinghour_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_calendarid: WebAttribute<msdyn_operatinghour_Select, { msdyn_calendarid: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_operatinghour_Select, { msdyn_description: string | null }, {  }>;
  msdyn_enablealldays: WebAttribute<msdyn_operatinghour_Select, { msdyn_enablealldays: boolean | null }, {  }>;
  msdyn_endtimestring: WebAttribute<msdyn_operatinghour_Select, { msdyn_endtimestring: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_operatinghour_Select, { msdyn_name: string | null }, {  }>;
  msdyn_oc_daysofweek: WebAttribute<msdyn_operatinghour_Select, { msdyn_oc_daysofweek: msdyn_oc_daysofweek | null }, { msdyn_oc_daysofweek_formatted?: string }>;
  msdyn_operatinghourid: WebAttribute<msdyn_operatinghour_Select, { msdyn_operatinghourid: string | null }, {  }>;
  msdyn_starttimestring: WebAttribute<msdyn_operatinghour_Select, { msdyn_starttimestring: string | null }, {  }>;
  msdyn_timezone: WebAttribute<msdyn_operatinghour_Select, { msdyn_timezone: number | null }, {  }>;
  msdyn_totalworkhours: WebAttribute<msdyn_operatinghour_Select, { msdyn_totalworkhours: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_operatinghour_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_operatinghour_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_operatinghour_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_operatinghour_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_operatinghour_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_operatinghour_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_operatinghour_Select, { statecode: msdyn_operatinghour_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_operatinghour_Select, { statuscode: msdyn_operatinghour_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_operatinghour_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_operatinghour_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_operatinghour_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_operatinghour_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_calendarid: string;
  msdyn_description: string;
  msdyn_enablealldays: boolean;
  msdyn_endtimestring: string;
  msdyn_name: string;
  msdyn_oc_daysofweek: msdyn_oc_daysofweek;
  msdyn_operatinghourid: XQW.Guid;
  msdyn_starttimestring: string;
  msdyn_timezone: number;
  msdyn_totalworkhours: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_operatinghour_statecode;
  statuscode: msdyn_operatinghour_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_operatinghour_Expand {
  createdby: WebExpand<msdyn_operatinghour_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_operatinghour_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_operatinghour_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_operatinghour_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_operatinghour_msdyn_livechatconfig: WebExpand<msdyn_operatinghour_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_msdyn_operatinghour_msdyn_livechatconfig: msdyn_livechatconfig_Result[] }>;
  msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid: WebExpand<msdyn_operatinghour_Expand, msdyn_ocsmschannelsetting_Select, msdyn_ocsmschannelsetting_Filter, { msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid: msdyn_ocsmschannelsetting_Result[] }>;
  msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours: WebExpand<msdyn_operatinghour_Expand, msdyn_smsnumber_Select, msdyn_smsnumber_Filter, { msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours: msdyn_smsnumber_Result[] }>;
  msdyn_msdyn_operatinghour_queue: WebExpand<msdyn_operatinghour_Expand, Queue_Select, Queue_Filter, { msdyn_msdyn_operatinghour_queue: Queue_Result[] }>;
  msdyn_operatinghour_AsyncOperations: WebExpand<msdyn_operatinghour_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_operatinghour_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_operatinghour_BulkDeleteFailures: WebExpand<msdyn_operatinghour_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_operatinghour_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_operatinghour_MailboxTrackingFolders: WebExpand<msdyn_operatinghour_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_operatinghour_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_operatinghour_PrincipalObjectAttributeAccesses: WebExpand<msdyn_operatinghour_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_operatinghour_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_operatinghour_ProcessSession: WebExpand<msdyn_operatinghour_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_operatinghour_ProcessSession: ProcessSession_Result[] }>;
  msdyn_operatinghour_SyncErrors: WebExpand<msdyn_operatinghour_Expand, SyncError_Select, SyncError_Filter, { msdyn_operatinghour_SyncErrors: SyncError_Result[] }>;
  msdyn_operatinghour_UserEntityInstanceDatas: WebExpand<msdyn_operatinghour_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_operatinghour_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_operatinghour_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_operatinghour_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_operatinghour_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_operatinghour_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_operatinghour_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_oc_daysofweek_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_operatinghour_Result extends msdyn_operatinghour_Base, msdyn_operatinghour_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_operatinghour_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_operatinghour_RelatedMany {
  msdyn_msdyn_operatinghour_msdyn_livechatconfig: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
  msdyn_msdyn_operatinghour_msdyn_ocsmschannelsetting_operatinghoursid: WebMappingRetrieve<msdyn_ocsmschannelsetting_Select,msdyn_ocsmschannelsetting_Expand,msdyn_ocsmschannelsetting_Filter,msdyn_ocsmschannelsetting_Fixed,msdyn_ocsmschannelsetting_Result,msdyn_ocsmschannelsetting_FormattedResult>;
  msdyn_msdyn_operatinghour_msdyn_smsnumber_operatinghours: WebMappingRetrieve<msdyn_smsnumber_Select,msdyn_smsnumber_Expand,msdyn_smsnumber_Filter,msdyn_smsnumber_Fixed,msdyn_smsnumber_Result,msdyn_smsnumber_FormattedResult>;
  msdyn_msdyn_operatinghour_queue: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  msdyn_operatinghour_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_operatinghour_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_operatinghour_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_operatinghour_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_operatinghour_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_operatinghour_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_operatinghour_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_operatinghours: WebMappingRetrieve<msdyn_operatinghour_Select,msdyn_operatinghour_Expand,msdyn_operatinghour_Filter,msdyn_operatinghour_Fixed,msdyn_operatinghour_Result,msdyn_operatinghour_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_operatinghours: WebMappingRelated<msdyn_operatinghour_RelatedOne,msdyn_operatinghour_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_operatinghours: WebMappingCUDA<msdyn_operatinghour_Create,msdyn_operatinghour_Update,msdyn_operatinghour_Select>;
}
