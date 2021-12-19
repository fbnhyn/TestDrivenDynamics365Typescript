interface msdyn_iotdevicedatahistory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_connectionstate?: boolean | null;
  msdyn_connectionstateupdatedtime?: Date | null;
  msdyn_devicereportedproperties?: string | null;
  msdyn_iotdevicedatahistoryid?: string | null;
  msdyn_iothubdeviceid?: string | null;
  msdyn_lastactivitytime?: Date | null;
  msdyn_name?: string | null;
  msdyn_status?: msdyn_iotdevicedatahistory_msdyn_status | null;
  msdyn_statusreason?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_iotdevicedatahistory_statecode | null;
  statuscode?: msdyn_iotdevicedatahistory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iotdevicedatahistory_Relationships {
  msdyn_Device?: msdyn_iotdevice_Result | null;
  msdyn_iotdevicedatahistory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iotdevicedatahistory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iotdevicedatahistory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdevicedatahistory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdevicedatahistory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iotdevicedatahistory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iotdevicedatahistory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iotdevicedatahistory_SyncErrors?: SyncError_Result[] | null;
  msdyn_iotdevicedatahistory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_iotdevicedatahistory extends msdyn_iotdevicedatahistory_Base, msdyn_iotdevicedatahistory_Relationships {
  msdyn_Device_bind$msdyn_iotdevices?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iotdevicedatahistory_Create extends msdyn_iotdevicedatahistory {
}
interface msdyn_iotdevicedatahistory_Update extends msdyn_iotdevicedatahistory {
}
interface msdyn_iotdevicedatahistory_Select {
  createdby_guid: WebAttribute<msdyn_iotdevicedatahistory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iotdevicedatahistory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iotdevicedatahistory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iotdevicedatahistory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iotdevicedatahistory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iotdevicedatahistory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iotdevicedatahistory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_connectionstate: WebAttribute<msdyn_iotdevicedatahistory_Select, { msdyn_connectionstate: boolean | null }, {  }>;
  msdyn_connectionstateupdatedtime: WebAttribute<msdyn_iotdevicedatahistory_Select, { msdyn_connectionstateupdatedtime: Date | null }, { msdyn_connectionstateupdatedtime_formatted?: string }>;
  msdyn_device_guid: WebAttribute<msdyn_iotdevicedatahistory_Select, { msdyn_device_guid: string | null }, { msdyn_device_formatted?: string }>;
  msdyn_devicereportedproperties: WebAttribute<msdyn_iotdevicedatahistory_Select, { msdyn_devicereportedproperties: string | null }, {  }>;
  msdyn_iotdevicedatahistoryid: WebAttribute<msdyn_iotdevicedatahistory_Select, { msdyn_iotdevicedatahistoryid: string | null }, {  }>;
  msdyn_iothubdeviceid: WebAttribute<msdyn_iotdevicedatahistory_Select, { msdyn_iothubdeviceid: string | null }, {  }>;
  msdyn_lastactivitytime: WebAttribute<msdyn_iotdevicedatahistory_Select, { msdyn_lastactivitytime: Date | null }, { msdyn_lastactivitytime_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_iotdevicedatahistory_Select, { msdyn_name: string | null }, {  }>;
  msdyn_status: WebAttribute<msdyn_iotdevicedatahistory_Select, { msdyn_status: msdyn_iotdevicedatahistory_msdyn_status | null }, { msdyn_status_formatted?: string }>;
  msdyn_statusreason: WebAttribute<msdyn_iotdevicedatahistory_Select, { msdyn_statusreason: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_iotdevicedatahistory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iotdevicedatahistory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iotdevicedatahistory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iotdevicedatahistory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iotdevicedatahistory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_iotdevicedatahistory_Select, { statecode: msdyn_iotdevicedatahistory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iotdevicedatahistory_Select, { statuscode: msdyn_iotdevicedatahistory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iotdevicedatahistory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iotdevicedatahistory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotdevicedatahistory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotdevicedatahistory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_connectionstate: boolean;
  msdyn_connectionstateupdatedtime: Date;
  msdyn_device_guid: XQW.Guid;
  msdyn_devicereportedproperties: string;
  msdyn_iotdevicedatahistoryid: XQW.Guid;
  msdyn_iothubdeviceid: string;
  msdyn_lastactivitytime: Date;
  msdyn_name: string;
  msdyn_status: msdyn_iotdevicedatahistory_msdyn_status;
  msdyn_statusreason: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_iotdevicedatahistory_statecode;
  statuscode: msdyn_iotdevicedatahistory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iotdevicedatahistory_Expand {
  createdby: WebExpand<msdyn_iotdevicedatahistory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iotdevicedatahistory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iotdevicedatahistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iotdevicedatahistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Device: WebExpand<msdyn_iotdevicedatahistory_Expand, msdyn_iotdevice_Select, msdyn_iotdevice_Filter, { msdyn_Device: msdyn_iotdevice_Result }>;
  msdyn_iotdevicedatahistory_AsyncOperations: WebExpand<msdyn_iotdevicedatahistory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iotdevicedatahistory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iotdevicedatahistory_BulkDeleteFailures: WebExpand<msdyn_iotdevicedatahistory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iotdevicedatahistory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iotdevicedatahistory_DuplicateBaseRecord: WebExpand<msdyn_iotdevicedatahistory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdevicedatahistory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdevicedatahistory_DuplicateMatchingRecord: WebExpand<msdyn_iotdevicedatahistory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdevicedatahistory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdevicedatahistory_MailboxTrackingFolders: WebExpand<msdyn_iotdevicedatahistory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iotdevicedatahistory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iotdevicedatahistory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iotdevicedatahistory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iotdevicedatahistory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iotdevicedatahistory_ProcessSession: WebExpand<msdyn_iotdevicedatahistory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iotdevicedatahistory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iotdevicedatahistory_SyncErrors: WebExpand<msdyn_iotdevicedatahistory_Expand, SyncError_Select, SyncError_Filter, { msdyn_iotdevicedatahistory_SyncErrors: SyncError_Result[] }>;
  msdyn_iotdevicedatahistory_UserEntityInstanceDatas: WebExpand<msdyn_iotdevicedatahistory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iotdevicedatahistory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_iotdevicedatahistory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iotdevicedatahistory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iotdevicedatahistory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iotdevicedatahistory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iotdevicedatahistory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_connectionstateupdatedtime_formatted?: string;
  msdyn_device_formatted?: string;
  msdyn_lastactivitytime_formatted?: string;
  msdyn_status_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iotdevicedatahistory_Result extends msdyn_iotdevicedatahistory_Base, msdyn_iotdevicedatahistory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_device_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_iotdevicedatahistory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Device: WebMappingRetrieve<msdyn_iotdevice_Select,msdyn_iotdevice_Expand,msdyn_iotdevice_Filter,msdyn_iotdevice_Fixed,msdyn_iotdevice_Result,msdyn_iotdevice_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iotdevicedatahistory_RelatedMany {
  msdyn_iotdevicedatahistory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iotdevicedatahistory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iotdevicedatahistory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdevicedatahistory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdevicedatahistory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iotdevicedatahistory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iotdevicedatahistory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iotdevicedatahistory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iotdevicedatahistory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotdevicedatahistory: WebMappingRetrieve<msdyn_iotdevicedatahistory_Select,msdyn_iotdevicedatahistory_Expand,msdyn_iotdevicedatahistory_Filter,msdyn_iotdevicedatahistory_Fixed,msdyn_iotdevicedatahistory_Result,msdyn_iotdevicedatahistory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotdevicedatahistory: WebMappingRelated<msdyn_iotdevicedatahistory_RelatedOne,msdyn_iotdevicedatahistory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotdevicedatahistory: WebMappingCUDA<msdyn_iotdevicedatahistory_Create,msdyn_iotdevicedatahistory_Update,msdyn_iotdevicedatahistory_Select>;
}
