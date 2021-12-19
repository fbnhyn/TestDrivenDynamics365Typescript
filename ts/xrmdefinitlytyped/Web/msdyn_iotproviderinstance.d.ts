interface msdyn_iotproviderinstance_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_iotproviderinstanceid?: string | null;
  msdyn_name?: string | null;
  msdyn_providerinstanceid?: string | null;
  msdyn_timeseriesinsightsurl?: string | null;
  msdyn_url?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_iotproviderinstance_statecode | null;
  statuscode?: msdyn_iotproviderinstance_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iotproviderinstance_Relationships {
  msdyn_IoTProvider?: msdyn_iotprovider_Result | null;
  msdyn_iotproviderinstance_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iotproviderinstance_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iotproviderinstance_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotproviderinstance_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotproviderinstance_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iotproviderinstance_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iotproviderinstance_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iotproviderinstance_SyncErrors?: SyncError_Result[] | null;
  msdyn_iotproviderinstance_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_iotproviderinstance_msdyn_iotdevice_IoTProviderInstance?: msdyn_iotdevice_Result[] | null;
  msdyn_msdyn_iotproviderinstance_msdyn_iotsettings_DefaultIoTProviderInstance?: msdyn_iotsettings_Result[] | null;
}
interface msdyn_iotproviderinstance extends msdyn_iotproviderinstance_Base, msdyn_iotproviderinstance_Relationships {
  msdyn_IoTProvider_bind$msdyn_iotproviders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iotproviderinstance_Create extends msdyn_iotproviderinstance {
}
interface msdyn_iotproviderinstance_Update extends msdyn_iotproviderinstance {
}
interface msdyn_iotproviderinstance_Select {
  createdby_guid: WebAttribute<msdyn_iotproviderinstance_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iotproviderinstance_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iotproviderinstance_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iotproviderinstance_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iotproviderinstance_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iotproviderinstance_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iotproviderinstance_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_iotprovider_guid: WebAttribute<msdyn_iotproviderinstance_Select, { msdyn_iotprovider_guid: string | null }, { msdyn_iotprovider_formatted?: string }>;
  msdyn_iotproviderinstanceid: WebAttribute<msdyn_iotproviderinstance_Select, { msdyn_iotproviderinstanceid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_iotproviderinstance_Select, { msdyn_name: string | null }, {  }>;
  msdyn_providerinstanceid: WebAttribute<msdyn_iotproviderinstance_Select, { msdyn_providerinstanceid: string | null }, {  }>;
  msdyn_timeseriesinsightsurl: WebAttribute<msdyn_iotproviderinstance_Select, { msdyn_timeseriesinsightsurl: string | null }, {  }>;
  msdyn_url: WebAttribute<msdyn_iotproviderinstance_Select, { msdyn_url: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_iotproviderinstance_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iotproviderinstance_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iotproviderinstance_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iotproviderinstance_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iotproviderinstance_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_iotproviderinstance_Select, { statecode: msdyn_iotproviderinstance_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iotproviderinstance_Select, { statuscode: msdyn_iotproviderinstance_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iotproviderinstance_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iotproviderinstance_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotproviderinstance_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotproviderinstance_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_iotprovider_guid: XQW.Guid;
  msdyn_iotproviderinstanceid: XQW.Guid;
  msdyn_name: string;
  msdyn_providerinstanceid: string;
  msdyn_timeseriesinsightsurl: string;
  msdyn_url: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_iotproviderinstance_statecode;
  statuscode: msdyn_iotproviderinstance_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iotproviderinstance_Expand {
  createdby: WebExpand<msdyn_iotproviderinstance_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iotproviderinstance_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iotproviderinstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iotproviderinstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_IoTProvider: WebExpand<msdyn_iotproviderinstance_Expand, msdyn_iotprovider_Select, msdyn_iotprovider_Filter, { msdyn_IoTProvider: msdyn_iotprovider_Result }>;
  msdyn_iotproviderinstance_AsyncOperations: WebExpand<msdyn_iotproviderinstance_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iotproviderinstance_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iotproviderinstance_BulkDeleteFailures: WebExpand<msdyn_iotproviderinstance_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iotproviderinstance_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iotproviderinstance_DuplicateBaseRecord: WebExpand<msdyn_iotproviderinstance_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotproviderinstance_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iotproviderinstance_DuplicateMatchingRecord: WebExpand<msdyn_iotproviderinstance_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotproviderinstance_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iotproviderinstance_MailboxTrackingFolders: WebExpand<msdyn_iotproviderinstance_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iotproviderinstance_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iotproviderinstance_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iotproviderinstance_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iotproviderinstance_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iotproviderinstance_ProcessSession: WebExpand<msdyn_iotproviderinstance_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iotproviderinstance_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iotproviderinstance_SyncErrors: WebExpand<msdyn_iotproviderinstance_Expand, SyncError_Select, SyncError_Filter, { msdyn_iotproviderinstance_SyncErrors: SyncError_Result[] }>;
  msdyn_iotproviderinstance_UserEntityInstanceDatas: WebExpand<msdyn_iotproviderinstance_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iotproviderinstance_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_iotproviderinstance_msdyn_iotdevice_IoTProviderInstance: WebExpand<msdyn_iotproviderinstance_Expand, msdyn_iotdevice_Select, msdyn_iotdevice_Filter, { msdyn_msdyn_iotproviderinstance_msdyn_iotdevice_IoTProviderInstance: msdyn_iotdevice_Result[] }>;
  msdyn_msdyn_iotproviderinstance_msdyn_iotsettings_DefaultIoTProviderInstance: WebExpand<msdyn_iotproviderinstance_Expand, msdyn_iotsettings_Select, msdyn_iotsettings_Filter, { msdyn_msdyn_iotproviderinstance_msdyn_iotsettings_DefaultIoTProviderInstance: msdyn_iotsettings_Result[] }>;
  ownerid: WebExpand<msdyn_iotproviderinstance_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iotproviderinstance_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iotproviderinstance_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iotproviderinstance_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iotproviderinstance_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_iotprovider_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iotproviderinstance_Result extends msdyn_iotproviderinstance_Base, msdyn_iotproviderinstance_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_iotprovider_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_iotproviderinstance_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_IoTProvider: WebMappingRetrieve<msdyn_iotprovider_Select,msdyn_iotprovider_Expand,msdyn_iotprovider_Filter,msdyn_iotprovider_Fixed,msdyn_iotprovider_Result,msdyn_iotprovider_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iotproviderinstance_RelatedMany {
  msdyn_iotproviderinstance_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iotproviderinstance_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iotproviderinstance_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotproviderinstance_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotproviderinstance_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iotproviderinstance_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iotproviderinstance_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iotproviderinstance_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iotproviderinstance_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_iotproviderinstance_msdyn_iotdevice_IoTProviderInstance: WebMappingRetrieve<msdyn_iotdevice_Select,msdyn_iotdevice_Expand,msdyn_iotdevice_Filter,msdyn_iotdevice_Fixed,msdyn_iotdevice_Result,msdyn_iotdevice_FormattedResult>;
  msdyn_msdyn_iotproviderinstance_msdyn_iotsettings_DefaultIoTProviderInstance: WebMappingRetrieve<msdyn_iotsettings_Select,msdyn_iotsettings_Expand,msdyn_iotsettings_Filter,msdyn_iotsettings_Fixed,msdyn_iotsettings_Result,msdyn_iotsettings_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotproviderinstances: WebMappingRetrieve<msdyn_iotproviderinstance_Select,msdyn_iotproviderinstance_Expand,msdyn_iotproviderinstance_Filter,msdyn_iotproviderinstance_Fixed,msdyn_iotproviderinstance_Result,msdyn_iotproviderinstance_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotproviderinstances: WebMappingRelated<msdyn_iotproviderinstance_RelatedOne,msdyn_iotproviderinstance_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotproviderinstances: WebMappingCUDA<msdyn_iotproviderinstance_Create,msdyn_iotproviderinstance_Update,msdyn_iotproviderinstance_Select>;
}
