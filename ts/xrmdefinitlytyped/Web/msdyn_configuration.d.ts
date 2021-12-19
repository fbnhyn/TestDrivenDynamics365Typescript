interface msdyn_Configuration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_configurationid?: string | null;
  msdyn_name?: string | null;
  msdyn_type?: msdyn_configuration_msdyn_type | null;
  msdyn_value?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_configuration_statecode | null;
  statuscode?: msdyn_configuration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_Configuration_Relationships {
  msdyn_configuration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_configuration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_configuration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_configuration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_configuration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_configuration_SyncErrors?: SyncError_Result[] | null;
  msdyn_configuration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_CloneEntityQuery?: msdyn_bookingsetupmetadata_Result[] | null;
  msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveConstraintsQuery?: msdyn_bookingsetupmetadata_Result[] | null;
  msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveResourcesQuery?: msdyn_bookingsetupmetadata_Result[] | null;
  msdyn_msdyn_configuration_msdyn_scheduleboardsetting_FilterLayout?: msdyn_scheduleboardsetting_Result[] | null;
  msdyn_msdyn_configuration_msdyn_scheduleboardsetting_ResourceCellTemplate?: msdyn_scheduleboardsetting_Result[] | null;
  msdyn_msdyn_configuration_msdyn_scheduleboardsetting_RetrieveResourcesQuery?: msdyn_scheduleboardsetting_Result[] | null;
}
interface msdyn_Configuration extends msdyn_Configuration_Base, msdyn_Configuration_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_Configuration_Create extends msdyn_Configuration {
}
interface msdyn_Configuration_Update extends msdyn_Configuration {
}
interface msdyn_Configuration_Select {
  createdby_guid: WebAttribute<msdyn_Configuration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_Configuration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_Configuration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_Configuration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_Configuration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_Configuration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_Configuration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_configurationid: WebAttribute<msdyn_Configuration_Select, { msdyn_configurationid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_Configuration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_Configuration_Select, { msdyn_type: msdyn_configuration_msdyn_type | null }, { msdyn_type_formatted?: string }>;
  msdyn_value: WebAttribute<msdyn_Configuration_Select, { msdyn_value: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_Configuration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_Configuration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_Configuration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_Configuration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_Configuration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_Configuration_Select, { statecode: msdyn_configuration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_Configuration_Select, { statuscode: msdyn_configuration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_Configuration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_Configuration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_Configuration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_Configuration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_configurationid: XQW.Guid;
  msdyn_name: string;
  msdyn_type: msdyn_configuration_msdyn_type;
  msdyn_value: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_configuration_statecode;
  statuscode: msdyn_configuration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_Configuration_Expand {
  createdby: WebExpand<msdyn_Configuration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_Configuration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_Configuration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_Configuration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_configuration_AsyncOperations: WebExpand<msdyn_Configuration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_configuration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_configuration_BulkDeleteFailures: WebExpand<msdyn_Configuration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_configuration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_configuration_MailboxTrackingFolders: WebExpand<msdyn_Configuration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_configuration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_configuration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_Configuration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_configuration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_configuration_ProcessSession: WebExpand<msdyn_Configuration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_configuration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_configuration_SyncErrors: WebExpand<msdyn_Configuration_Expand, SyncError_Select, SyncError_Filter, { msdyn_configuration_SyncErrors: SyncError_Result[] }>;
  msdyn_configuration_UserEntityInstanceDatas: WebExpand<msdyn_Configuration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_configuration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_CloneEntityQuery: WebExpand<msdyn_Configuration_Expand, msdyn_bookingsetupmetadata_Select, msdyn_bookingsetupmetadata_Filter, { msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_CloneEntityQuery: msdyn_bookingsetupmetadata_Result[] }>;
  msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveConstraintsQuery: WebExpand<msdyn_Configuration_Expand, msdyn_bookingsetupmetadata_Select, msdyn_bookingsetupmetadata_Filter, { msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveConstraintsQuery: msdyn_bookingsetupmetadata_Result[] }>;
  msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveResourcesQuery: WebExpand<msdyn_Configuration_Expand, msdyn_bookingsetupmetadata_Select, msdyn_bookingsetupmetadata_Filter, { msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveResourcesQuery: msdyn_bookingsetupmetadata_Result[] }>;
  msdyn_msdyn_configuration_msdyn_scheduleboardsetting_FilterLayout: WebExpand<msdyn_Configuration_Expand, msdyn_scheduleboardsetting_Select, msdyn_scheduleboardsetting_Filter, { msdyn_msdyn_configuration_msdyn_scheduleboardsetting_FilterLayout: msdyn_scheduleboardsetting_Result[] }>;
  msdyn_msdyn_configuration_msdyn_scheduleboardsetting_ResourceCellTemplate: WebExpand<msdyn_Configuration_Expand, msdyn_scheduleboardsetting_Select, msdyn_scheduleboardsetting_Filter, { msdyn_msdyn_configuration_msdyn_scheduleboardsetting_ResourceCellTemplate: msdyn_scheduleboardsetting_Result[] }>;
  msdyn_msdyn_configuration_msdyn_scheduleboardsetting_RetrieveResourcesQuery: WebExpand<msdyn_Configuration_Expand, msdyn_scheduleboardsetting_Select, msdyn_scheduleboardsetting_Filter, { msdyn_msdyn_configuration_msdyn_scheduleboardsetting_RetrieveResourcesQuery: msdyn_scheduleboardsetting_Result[] }>;
  ownerid: WebExpand<msdyn_Configuration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_Configuration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_Configuration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_Configuration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_Configuration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_Configuration_Result extends msdyn_Configuration_Base, msdyn_Configuration_Relationships {
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
interface msdyn_Configuration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_Configuration_RelatedMany {
  msdyn_configuration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_configuration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_configuration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_configuration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_configuration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_configuration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_configuration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_CloneEntityQuery: WebMappingRetrieve<msdyn_bookingsetupmetadata_Select,msdyn_bookingsetupmetadata_Expand,msdyn_bookingsetupmetadata_Filter,msdyn_bookingsetupmetadata_Fixed,msdyn_bookingsetupmetadata_Result,msdyn_bookingsetupmetadata_FormattedResult>;
  msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveConstraintsQuery: WebMappingRetrieve<msdyn_bookingsetupmetadata_Select,msdyn_bookingsetupmetadata_Expand,msdyn_bookingsetupmetadata_Filter,msdyn_bookingsetupmetadata_Fixed,msdyn_bookingsetupmetadata_Result,msdyn_bookingsetupmetadata_FormattedResult>;
  msdyn_msdyn_configuration_msdyn_bookingsetupmetadata_RetrieveResourcesQuery: WebMappingRetrieve<msdyn_bookingsetupmetadata_Select,msdyn_bookingsetupmetadata_Expand,msdyn_bookingsetupmetadata_Filter,msdyn_bookingsetupmetadata_Fixed,msdyn_bookingsetupmetadata_Result,msdyn_bookingsetupmetadata_FormattedResult>;
  msdyn_msdyn_configuration_msdyn_scheduleboardsetting_FilterLayout: WebMappingRetrieve<msdyn_scheduleboardsetting_Select,msdyn_scheduleboardsetting_Expand,msdyn_scheduleboardsetting_Filter,msdyn_scheduleboardsetting_Fixed,msdyn_scheduleboardsetting_Result,msdyn_scheduleboardsetting_FormattedResult>;
  msdyn_msdyn_configuration_msdyn_scheduleboardsetting_ResourceCellTemplate: WebMappingRetrieve<msdyn_scheduleboardsetting_Select,msdyn_scheduleboardsetting_Expand,msdyn_scheduleboardsetting_Filter,msdyn_scheduleboardsetting_Fixed,msdyn_scheduleboardsetting_Result,msdyn_scheduleboardsetting_FormattedResult>;
  msdyn_msdyn_configuration_msdyn_scheduleboardsetting_RetrieveResourcesQuery: WebMappingRetrieve<msdyn_scheduleboardsetting_Select,msdyn_scheduleboardsetting_Expand,msdyn_scheduleboardsetting_Filter,msdyn_scheduleboardsetting_Fixed,msdyn_scheduleboardsetting_Result,msdyn_scheduleboardsetting_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_configurations: WebMappingRetrieve<msdyn_Configuration_Select,msdyn_Configuration_Expand,msdyn_Configuration_Filter,msdyn_Configuration_Fixed,msdyn_Configuration_Result,msdyn_Configuration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_configurations: WebMappingRelated<msdyn_Configuration_RelatedOne,msdyn_Configuration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_configurations: WebMappingCUDA<msdyn_Configuration_Create,msdyn_Configuration_Update,msdyn_Configuration_Select>;
}
