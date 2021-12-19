interface msdyn_iotprovider_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_getaggregateddevicereadingsaction?: string | null;
  msdyn_iotproviderid?: string | null;
  msdyn_iotsource?: msdyn_iotsource | null;
  msdyn_name?: string | null;
  msdyn_pulldevicedataaction?: string | null;
  msdyn_querydevicereadingsaction?: string | null;
  msdyn_registeraction?: string | null;
  msdyn_sendcommandaction?: string | null;
  msdyn_updatedevicedataaction?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_iotprovider_statecode | null;
  statuscode?: msdyn_iotprovider_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iotprovider_Relationships {
  msdyn_iotprovider_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iotprovider_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iotprovider_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotprovider_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotprovider_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iotprovider_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iotprovider_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iotprovider_SyncErrors?: SyncError_Result[] | null;
  msdyn_iotprovider_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_iotprovider_msdyn_iotproviderinstance_IoTProvider?: msdyn_iotproviderinstance_Result[] | null;
}
interface msdyn_iotprovider extends msdyn_iotprovider_Base, msdyn_iotprovider_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iotprovider_Create extends msdyn_iotprovider {
}
interface msdyn_iotprovider_Update extends msdyn_iotprovider {
}
interface msdyn_iotprovider_Select {
  createdby_guid: WebAttribute<msdyn_iotprovider_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iotprovider_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iotprovider_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iotprovider_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iotprovider_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iotprovider_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iotprovider_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_getaggregateddevicereadingsaction: WebAttribute<msdyn_iotprovider_Select, { msdyn_getaggregateddevicereadingsaction: string | null }, {  }>;
  msdyn_iotproviderid: WebAttribute<msdyn_iotprovider_Select, { msdyn_iotproviderid: string | null }, {  }>;
  msdyn_iotsource: WebAttribute<msdyn_iotprovider_Select, { msdyn_iotsource: msdyn_iotsource | null }, { msdyn_iotsource_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_iotprovider_Select, { msdyn_name: string | null }, {  }>;
  msdyn_pulldevicedataaction: WebAttribute<msdyn_iotprovider_Select, { msdyn_pulldevicedataaction: string | null }, {  }>;
  msdyn_querydevicereadingsaction: WebAttribute<msdyn_iotprovider_Select, { msdyn_querydevicereadingsaction: string | null }, {  }>;
  msdyn_registeraction: WebAttribute<msdyn_iotprovider_Select, { msdyn_registeraction: string | null }, {  }>;
  msdyn_sendcommandaction: WebAttribute<msdyn_iotprovider_Select, { msdyn_sendcommandaction: string | null }, {  }>;
  msdyn_updatedevicedataaction: WebAttribute<msdyn_iotprovider_Select, { msdyn_updatedevicedataaction: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_iotprovider_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iotprovider_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iotprovider_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iotprovider_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iotprovider_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_iotprovider_Select, { statecode: msdyn_iotprovider_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iotprovider_Select, { statuscode: msdyn_iotprovider_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iotprovider_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iotprovider_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotprovider_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotprovider_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_getaggregateddevicereadingsaction: string;
  msdyn_iotproviderid: XQW.Guid;
  msdyn_iotsource: msdyn_iotsource;
  msdyn_name: string;
  msdyn_pulldevicedataaction: string;
  msdyn_querydevicereadingsaction: string;
  msdyn_registeraction: string;
  msdyn_sendcommandaction: string;
  msdyn_updatedevicedataaction: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_iotprovider_statecode;
  statuscode: msdyn_iotprovider_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iotprovider_Expand {
  createdby: WebExpand<msdyn_iotprovider_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iotprovider_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iotprovider_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iotprovider_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_iotprovider_AsyncOperations: WebExpand<msdyn_iotprovider_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iotprovider_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iotprovider_BulkDeleteFailures: WebExpand<msdyn_iotprovider_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iotprovider_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iotprovider_DuplicateBaseRecord: WebExpand<msdyn_iotprovider_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotprovider_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iotprovider_DuplicateMatchingRecord: WebExpand<msdyn_iotprovider_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotprovider_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iotprovider_MailboxTrackingFolders: WebExpand<msdyn_iotprovider_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iotprovider_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iotprovider_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iotprovider_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iotprovider_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iotprovider_ProcessSession: WebExpand<msdyn_iotprovider_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iotprovider_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iotprovider_SyncErrors: WebExpand<msdyn_iotprovider_Expand, SyncError_Select, SyncError_Filter, { msdyn_iotprovider_SyncErrors: SyncError_Result[] }>;
  msdyn_iotprovider_UserEntityInstanceDatas: WebExpand<msdyn_iotprovider_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iotprovider_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_iotprovider_msdyn_iotproviderinstance_IoTProvider: WebExpand<msdyn_iotprovider_Expand, msdyn_iotproviderinstance_Select, msdyn_iotproviderinstance_Filter, { msdyn_msdyn_iotprovider_msdyn_iotproviderinstance_IoTProvider: msdyn_iotproviderinstance_Result[] }>;
  ownerid: WebExpand<msdyn_iotprovider_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iotprovider_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iotprovider_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iotprovider_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iotprovider_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_iotsource_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iotprovider_Result extends msdyn_iotprovider_Base, msdyn_iotprovider_Relationships {
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
interface msdyn_iotprovider_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iotprovider_RelatedMany {
  msdyn_iotprovider_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iotprovider_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iotprovider_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotprovider_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotprovider_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iotprovider_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iotprovider_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iotprovider_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iotprovider_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_iotprovider_msdyn_iotproviderinstance_IoTProvider: WebMappingRetrieve<msdyn_iotproviderinstance_Select,msdyn_iotproviderinstance_Expand,msdyn_iotproviderinstance_Filter,msdyn_iotproviderinstance_Fixed,msdyn_iotproviderinstance_Result,msdyn_iotproviderinstance_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotproviders: WebMappingRetrieve<msdyn_iotprovider_Select,msdyn_iotprovider_Expand,msdyn_iotprovider_Filter,msdyn_iotprovider_Fixed,msdyn_iotprovider_Result,msdyn_iotprovider_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotproviders: WebMappingRelated<msdyn_iotprovider_RelatedOne,msdyn_iotprovider_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotproviders: WebMappingCUDA<msdyn_iotprovider_Create,msdyn_iotprovider_Update,msdyn_iotprovider_Select>;
}
