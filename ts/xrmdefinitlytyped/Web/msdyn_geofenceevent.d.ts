interface msdyn_geofenceevent_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_geofenceeventid?: string | null;
  msdyn_geofencestatus?: msdyn_geofenceevent_geofencestatus | null;
  msdyn_geofencestatustimestamp?: Date | null;
  msdyn_geotrackedentity?: string | null;
  msdyn_geotrackedrecord?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_geofenceevent_statecode | null;
  statuscode?: msdyn_geofenceevent_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_geofenceevent_Relationships {
  msdyn_Geofence?: msdyn_geofence_Result | null;
  msdyn_geofenceevent_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_geofenceevent_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_geofenceevent_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_geofenceevent_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_geofenceevent_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_geofenceevent_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_geofenceevent_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_geofenceevent_SyncErrors?: SyncError_Result[] | null;
  msdyn_geofenceevent_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_geofenceevent extends msdyn_geofenceevent_Base, msdyn_geofenceevent_Relationships {
  msdyn_Geofence_bind$msdyn_geofences?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_geofenceevent_Create extends msdyn_geofenceevent {
}
interface msdyn_geofenceevent_Update extends msdyn_geofenceevent {
}
interface msdyn_geofenceevent_Select {
  createdby_guid: WebAttribute<msdyn_geofenceevent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_geofenceevent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_geofenceevent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_geofenceevent_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_geofenceevent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_geofenceevent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_geofenceevent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_geofence_guid: WebAttribute<msdyn_geofenceevent_Select, { msdyn_geofence_guid: string | null }, { msdyn_geofence_formatted?: string }>;
  msdyn_geofenceeventid: WebAttribute<msdyn_geofenceevent_Select, { msdyn_geofenceeventid: string | null }, {  }>;
  msdyn_geofencestatus: WebAttribute<msdyn_geofenceevent_Select, { msdyn_geofencestatus: msdyn_geofenceevent_geofencestatus | null }, { msdyn_geofencestatus_formatted?: string }>;
  msdyn_geofencestatustimestamp: WebAttribute<msdyn_geofenceevent_Select, { msdyn_geofencestatustimestamp: Date | null }, { msdyn_geofencestatustimestamp_formatted?: string }>;
  msdyn_geotrackedentity: WebAttribute<msdyn_geofenceevent_Select, { msdyn_geotrackedentity: string | null }, {  }>;
  msdyn_geotrackedrecord: WebAttribute<msdyn_geofenceevent_Select, { msdyn_geotrackedrecord: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_geofenceevent_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_geofenceevent_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_geofenceevent_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_geofenceevent_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_geofenceevent_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_geofenceevent_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_geofenceevent_Select, { statecode: msdyn_geofenceevent_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_geofenceevent_Select, { statuscode: msdyn_geofenceevent_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_geofenceevent_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_geofenceevent_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_geofenceevent_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_geofenceevent_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_geofence_guid: XQW.Guid;
  msdyn_geofenceeventid: XQW.Guid;
  msdyn_geofencestatus: msdyn_geofenceevent_geofencestatus;
  msdyn_geofencestatustimestamp: Date;
  msdyn_geotrackedentity: string;
  msdyn_geotrackedrecord: string;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_geofenceevent_statecode;
  statuscode: msdyn_geofenceevent_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_geofenceevent_Expand {
  createdby: WebExpand<msdyn_geofenceevent_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_geofenceevent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_geofenceevent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_geofenceevent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Geofence: WebExpand<msdyn_geofenceevent_Expand, msdyn_geofence_Select, msdyn_geofence_Filter, { msdyn_Geofence: msdyn_geofence_Result }>;
  msdyn_geofenceevent_AsyncOperations: WebExpand<msdyn_geofenceevent_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_geofenceevent_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_geofenceevent_BulkDeleteFailures: WebExpand<msdyn_geofenceevent_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_geofenceevent_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_geofenceevent_DuplicateBaseRecord: WebExpand<msdyn_geofenceevent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_geofenceevent_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_geofenceevent_DuplicateMatchingRecord: WebExpand<msdyn_geofenceevent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_geofenceevent_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_geofenceevent_MailboxTrackingFolders: WebExpand<msdyn_geofenceevent_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_geofenceevent_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_geofenceevent_PrincipalObjectAttributeAccesses: WebExpand<msdyn_geofenceevent_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_geofenceevent_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_geofenceevent_ProcessSession: WebExpand<msdyn_geofenceevent_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_geofenceevent_ProcessSession: ProcessSession_Result[] }>;
  msdyn_geofenceevent_SyncErrors: WebExpand<msdyn_geofenceevent_Expand, SyncError_Select, SyncError_Filter, { msdyn_geofenceevent_SyncErrors: SyncError_Result[] }>;
  msdyn_geofenceevent_UserEntityInstanceDatas: WebExpand<msdyn_geofenceevent_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_geofenceevent_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_geofenceevent_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_geofenceevent_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_geofenceevent_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_geofenceevent_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_geofenceevent_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_geofence_formatted?: string;
  msdyn_geofencestatus_formatted?: string;
  msdyn_geofencestatustimestamp_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_geofenceevent_Result extends msdyn_geofenceevent_Base, msdyn_geofenceevent_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_geofence_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_geofenceevent_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Geofence: WebMappingRetrieve<msdyn_geofence_Select,msdyn_geofence_Expand,msdyn_geofence_Filter,msdyn_geofence_Fixed,msdyn_geofence_Result,msdyn_geofence_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_geofenceevent_RelatedMany {
  msdyn_geofenceevent_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_geofenceevent_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_geofenceevent_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_geofenceevent_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_geofenceevent_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_geofenceevent_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_geofenceevent_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_geofenceevent_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_geofenceevent_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_geofenceevents: WebMappingRetrieve<msdyn_geofenceevent_Select,msdyn_geofenceevent_Expand,msdyn_geofenceevent_Filter,msdyn_geofenceevent_Fixed,msdyn_geofenceevent_Result,msdyn_geofenceevent_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_geofenceevents: WebMappingRelated<msdyn_geofenceevent_RelatedOne,msdyn_geofenceevent_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_geofenceevents: WebMappingCUDA<msdyn_geofenceevent_Create,msdyn_geofenceevent_Update,msdyn_geofenceevent_Select>;
}
