interface msdyn_iotsettings_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_commandnameproperty?: string | null;
  msdyn_commandparametersproperty?: string | null;
  msdyn_defaultiotsource?: msdyn_iotsource | null;
  msdyn_deploymentappurl?: string | null;
  msdyn_devicedatapullfrequency?: number | null;
  msdyn_enableiotsuggestions?: boolean | null;
  msdyn_enhancedbackgroundprocessing?: boolean | null;
  msdyn_iotalertaggregationrule?: string | null;
  msdyn_iotsettingsid?: string | null;
  msdyn_name?: string | null;
  msdyn_nextdevicedatapulltime?: Date | null;
  msdyn_scheduleddevicedatapull?: boolean | null;
  msdyn_showwelcome?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_iotsettings_statecode | null;
  statuscode?: msdyn_iotsettings_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iotsettings_Relationships {
  msdyn_DefaultIoTProviderInstance?: msdyn_iotproviderinstance_Result | null;
  msdyn_iotsettings_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iotsettings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iotsettings_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotsettings_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotsettings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iotsettings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iotsettings_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iotsettings_SyncErrors?: SyncError_Result[] | null;
  msdyn_iotsettings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_iotsettings extends msdyn_iotsettings_Base, msdyn_iotsettings_Relationships {
  msdyn_DefaultIoTProviderInstance_bind$msdyn_iotproviderinstances?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iotsettings_Create extends msdyn_iotsettings {
}
interface msdyn_iotsettings_Update extends msdyn_iotsettings {
}
interface msdyn_iotsettings_Select {
  createdby_guid: WebAttribute<msdyn_iotsettings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iotsettings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iotsettings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iotsettings_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iotsettings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iotsettings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iotsettings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_commandnameproperty: WebAttribute<msdyn_iotsettings_Select, { msdyn_commandnameproperty: string | null }, {  }>;
  msdyn_commandparametersproperty: WebAttribute<msdyn_iotsettings_Select, { msdyn_commandparametersproperty: string | null }, {  }>;
  msdyn_defaultiotproviderinstance_guid: WebAttribute<msdyn_iotsettings_Select, { msdyn_defaultiotproviderinstance_guid: string | null }, { msdyn_defaultiotproviderinstance_formatted?: string }>;
  msdyn_defaultiotsource: WebAttribute<msdyn_iotsettings_Select, { msdyn_defaultiotsource: msdyn_iotsource | null }, { msdyn_defaultiotsource_formatted?: string }>;
  msdyn_deploymentappurl: WebAttribute<msdyn_iotsettings_Select, { msdyn_deploymentappurl: string | null }, {  }>;
  msdyn_devicedatapullfrequency: WebAttribute<msdyn_iotsettings_Select, { msdyn_devicedatapullfrequency: number | null }, {  }>;
  msdyn_enableiotsuggestions: WebAttribute<msdyn_iotsettings_Select, { msdyn_enableiotsuggestions: boolean | null }, {  }>;
  msdyn_enhancedbackgroundprocessing: WebAttribute<msdyn_iotsettings_Select, { msdyn_enhancedbackgroundprocessing: boolean | null }, {  }>;
  msdyn_iotalertaggregationrule: WebAttribute<msdyn_iotsettings_Select, { msdyn_iotalertaggregationrule: string | null }, {  }>;
  msdyn_iotsettingsid: WebAttribute<msdyn_iotsettings_Select, { msdyn_iotsettingsid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_iotsettings_Select, { msdyn_name: string | null }, {  }>;
  msdyn_nextdevicedatapulltime: WebAttribute<msdyn_iotsettings_Select, { msdyn_nextdevicedatapulltime: Date | null }, { msdyn_nextdevicedatapulltime_formatted?: string }>;
  msdyn_scheduleddevicedatapull: WebAttribute<msdyn_iotsettings_Select, { msdyn_scheduleddevicedatapull: boolean | null }, {  }>;
  msdyn_showwelcome: WebAttribute<msdyn_iotsettings_Select, { msdyn_showwelcome: boolean | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_iotsettings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iotsettings_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iotsettings_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iotsettings_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iotsettings_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_iotsettings_Select, { statecode: msdyn_iotsettings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iotsettings_Select, { statuscode: msdyn_iotsettings_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iotsettings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iotsettings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotsettings_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotsettings_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_commandnameproperty: string;
  msdyn_commandparametersproperty: string;
  msdyn_defaultiotproviderinstance_guid: XQW.Guid;
  msdyn_defaultiotsource: msdyn_iotsource;
  msdyn_deploymentappurl: string;
  msdyn_devicedatapullfrequency: number;
  msdyn_enableiotsuggestions: boolean;
  msdyn_enhancedbackgroundprocessing: boolean;
  msdyn_iotalertaggregationrule: string;
  msdyn_iotsettingsid: XQW.Guid;
  msdyn_name: string;
  msdyn_nextdevicedatapulltime: Date;
  msdyn_scheduleddevicedatapull: boolean;
  msdyn_showwelcome: boolean;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_iotsettings_statecode;
  statuscode: msdyn_iotsettings_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iotsettings_Expand {
  createdby: WebExpand<msdyn_iotsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iotsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iotsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iotsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_DefaultIoTProviderInstance: WebExpand<msdyn_iotsettings_Expand, msdyn_iotproviderinstance_Select, msdyn_iotproviderinstance_Filter, { msdyn_DefaultIoTProviderInstance: msdyn_iotproviderinstance_Result }>;
  msdyn_iotsettings_AsyncOperations: WebExpand<msdyn_iotsettings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iotsettings_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iotsettings_BulkDeleteFailures: WebExpand<msdyn_iotsettings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iotsettings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iotsettings_DuplicateBaseRecord: WebExpand<msdyn_iotsettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotsettings_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iotsettings_DuplicateMatchingRecord: WebExpand<msdyn_iotsettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotsettings_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iotsettings_MailboxTrackingFolders: WebExpand<msdyn_iotsettings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iotsettings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iotsettings_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iotsettings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iotsettings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iotsettings_ProcessSession: WebExpand<msdyn_iotsettings_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iotsettings_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iotsettings_SyncErrors: WebExpand<msdyn_iotsettings_Expand, SyncError_Select, SyncError_Filter, { msdyn_iotsettings_SyncErrors: SyncError_Result[] }>;
  msdyn_iotsettings_UserEntityInstanceDatas: WebExpand<msdyn_iotsettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iotsettings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_iotsettings_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iotsettings_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iotsettings_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iotsettings_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iotsettings_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_defaultiotproviderinstance_formatted?: string;
  msdyn_defaultiotsource_formatted?: string;
  msdyn_nextdevicedatapulltime_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iotsettings_Result extends msdyn_iotsettings_Base, msdyn_iotsettings_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_defaultiotproviderinstance_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_iotsettings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_DefaultIoTProviderInstance: WebMappingRetrieve<msdyn_iotproviderinstance_Select,msdyn_iotproviderinstance_Expand,msdyn_iotproviderinstance_Filter,msdyn_iotproviderinstance_Fixed,msdyn_iotproviderinstance_Result,msdyn_iotproviderinstance_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iotsettings_RelatedMany {
  msdyn_iotsettings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iotsettings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iotsettings_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotsettings_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotsettings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iotsettings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iotsettings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iotsettings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iotsettings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotsettingses: WebMappingRetrieve<msdyn_iotsettings_Select,msdyn_iotsettings_Expand,msdyn_iotsettings_Filter,msdyn_iotsettings_Fixed,msdyn_iotsettings_Result,msdyn_iotsettings_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotsettingses: WebMappingRelated<msdyn_iotsettings_RelatedOne,msdyn_iotsettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotsettingses: WebMappingCUDA<msdyn_iotsettings_Create,msdyn_iotsettings_Update,msdyn_iotsettings_Select>;
}
