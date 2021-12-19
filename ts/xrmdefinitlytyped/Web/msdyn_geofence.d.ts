interface msdyn_geofence_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_geofenceid?: string | null;
  msdyn_geotrackedrecordstatus?: msdyn_geofence_msdyn_geotrackedrecordstatus | null;
  msdyn_geotrackedrecordstatustimestamp?: Date | null;
  msdyn_name?: string | null;
  msdyn_radius?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_geofence_statecode | null;
  statuscode?: msdyn_geofence_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_geofence_Relationships {
  msdyn_geofence_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_geofence_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_geofence_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_geofence_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_geofence_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_geofence_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_geofence_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_geofence_SyncErrors?: SyncError_Result[] | null;
  msdyn_geofence_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_geofence_msdyn_geofenceevent_geofence?: msdyn_geofenceevent_Result[] | null;
}
interface msdyn_geofence extends msdyn_geofence_Base, msdyn_geofence_Relationships {
  msdyn_account_bind$accounts?: string | null;
  msdyn_bookableresource_bind$bookableresources?: string | null;
  msdyn_bookableresourcebookingid_bind$bookableresourcebookings?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_geofence_Create extends msdyn_geofence {
}
interface msdyn_geofence_Update extends msdyn_geofence {
}
interface msdyn_geofence_Select {
  createdby_guid: WebAttribute<msdyn_geofence_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_geofence_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_geofence_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_geofence_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_geofence_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_geofence_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_geofence_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_account_guid: WebAttribute<msdyn_geofence_Select, { msdyn_account_guid: string | null }, { msdyn_account_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_geofence_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_bookableresourcebookingid_guid: WebAttribute<msdyn_geofence_Select, { msdyn_bookableresourcebookingid_guid: string | null }, { msdyn_bookableresourcebookingid_formatted?: string }>;
  msdyn_geofenceid: WebAttribute<msdyn_geofence_Select, { msdyn_geofenceid: string | null }, {  }>;
  msdyn_geotrackedrecordstatus: WebAttribute<msdyn_geofence_Select, { msdyn_geotrackedrecordstatus: msdyn_geofence_msdyn_geotrackedrecordstatus | null }, { msdyn_geotrackedrecordstatus_formatted?: string }>;
  msdyn_geotrackedrecordstatustimestamp: WebAttribute<msdyn_geofence_Select, { msdyn_geotrackedrecordstatustimestamp: Date | null }, { msdyn_geotrackedrecordstatustimestamp_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_geofence_Select, { msdyn_name: string | null }, {  }>;
  msdyn_radius: WebAttribute<msdyn_geofence_Select, { msdyn_radius: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_geofence_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_geofence_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_geofence_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_geofence_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_geofence_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_geofence_Select, { statecode: msdyn_geofence_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_geofence_Select, { statuscode: msdyn_geofence_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_geofence_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_geofence_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_geofence_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_geofence_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_account_guid: XQW.Guid;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_bookableresourcebookingid_guid: XQW.Guid;
  msdyn_geofenceid: XQW.Guid;
  msdyn_geotrackedrecordstatus: msdyn_geofence_msdyn_geotrackedrecordstatus;
  msdyn_geotrackedrecordstatustimestamp: Date;
  msdyn_name: string;
  msdyn_radius: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_geofence_statecode;
  statuscode: msdyn_geofence_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_geofence_Expand {
  createdby: WebExpand<msdyn_geofence_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_geofence_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_geofence_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_geofence_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_account: WebExpand<msdyn_geofence_Expand, Account_Select, Account_Filter, { msdyn_account: Account_Result }>;
  msdyn_bookableresource: WebExpand<msdyn_geofence_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_bookableresource: BookableResource_Result }>;
  msdyn_bookableresourcebookingid: WebExpand<msdyn_geofence_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { msdyn_bookableresourcebookingid: BookableResourceBooking_Result }>;
  msdyn_geofence_AsyncOperations: WebExpand<msdyn_geofence_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_geofence_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_geofence_BulkDeleteFailures: WebExpand<msdyn_geofence_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_geofence_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_geofence_DuplicateBaseRecord: WebExpand<msdyn_geofence_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_geofence_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_geofence_DuplicateMatchingRecord: WebExpand<msdyn_geofence_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_geofence_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_geofence_MailboxTrackingFolders: WebExpand<msdyn_geofence_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_geofence_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_geofence_PrincipalObjectAttributeAccesses: WebExpand<msdyn_geofence_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_geofence_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_geofence_ProcessSession: WebExpand<msdyn_geofence_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_geofence_ProcessSession: ProcessSession_Result[] }>;
  msdyn_geofence_SyncErrors: WebExpand<msdyn_geofence_Expand, SyncError_Select, SyncError_Filter, { msdyn_geofence_SyncErrors: SyncError_Result[] }>;
  msdyn_geofence_UserEntityInstanceDatas: WebExpand<msdyn_geofence_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_geofence_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_geofence_msdyn_geofenceevent_geofence: WebExpand<msdyn_geofence_Expand, msdyn_geofenceevent_Select, msdyn_geofenceevent_Filter, { msdyn_msdyn_geofence_msdyn_geofenceevent_geofence: msdyn_geofenceevent_Result[] }>;
  ownerid: WebExpand<msdyn_geofence_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_geofence_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_geofence_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_geofence_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_geofence_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_account_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_bookableresourcebookingid_formatted?: string;
  msdyn_geotrackedrecordstatus_formatted?: string;
  msdyn_geotrackedrecordstatustimestamp_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_geofence_Result extends msdyn_geofence_Base, msdyn_geofence_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_account_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  msdyn_bookableresourcebookingid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_geofence_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_bookableresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_bookableresourcebookingid: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_geofence_RelatedMany {
  msdyn_geofence_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_geofence_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_geofence_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_geofence_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_geofence_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_geofence_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_geofence_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_geofence_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_geofence_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_geofence_msdyn_geofenceevent_geofence: WebMappingRetrieve<msdyn_geofenceevent_Select,msdyn_geofenceevent_Expand,msdyn_geofenceevent_Filter,msdyn_geofenceevent_Fixed,msdyn_geofenceevent_Result,msdyn_geofenceevent_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_geofences: WebMappingRetrieve<msdyn_geofence_Select,msdyn_geofence_Expand,msdyn_geofence_Filter,msdyn_geofence_Fixed,msdyn_geofence_Result,msdyn_geofence_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_geofences: WebMappingRelated<msdyn_geofence_RelatedOne,msdyn_geofence_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_geofences: WebMappingCUDA<msdyn_geofence_Create,msdyn_geofence_Update,msdyn_geofence_Select>;
}
