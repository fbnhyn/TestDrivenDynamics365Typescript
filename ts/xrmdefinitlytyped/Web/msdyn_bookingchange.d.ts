interface msdyn_bookingchange_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_bookingchangeid?: string | null;
  msdyn_changesjson?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_bookingchange_statecode | null;
  statuscode?: msdyn_bookingchange_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_bookingchange_Relationships {
  msdyn_bookingchange_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_bookingchange_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_bookingchange_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_bookingchange_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_bookingchange_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_bookingchange_SyncErrors?: SyncError_Result[] | null;
  msdyn_bookingchange_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_bookingchange extends msdyn_bookingchange_Base, msdyn_bookingchange_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_bookingchange_Create extends msdyn_bookingchange {
}
interface msdyn_bookingchange_Update extends msdyn_bookingchange {
}
interface msdyn_bookingchange_Select {
  createdby_guid: WebAttribute<msdyn_bookingchange_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_bookingchange_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_bookingchange_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_bookingchange_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_bookingchange_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_bookingchange_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_bookingchange_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookingchangeid: WebAttribute<msdyn_bookingchange_Select, { msdyn_bookingchangeid: string | null }, {  }>;
  msdyn_changesjson: WebAttribute<msdyn_bookingchange_Select, { msdyn_changesjson: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_bookingchange_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_bookingchange_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_bookingchange_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_bookingchange_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_bookingchange_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_bookingchange_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_bookingchange_Select, { statecode: msdyn_bookingchange_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_bookingchange_Select, { statuscode: msdyn_bookingchange_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_bookingchange_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_bookingchange_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_bookingchange_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_bookingchange_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookingchangeid: XQW.Guid;
  msdyn_changesjson: string;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_bookingchange_statecode;
  statuscode: msdyn_bookingchange_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_bookingchange_Expand {
  createdby: WebExpand<msdyn_bookingchange_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_bookingchange_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_bookingchange_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_bookingchange_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_bookingchange_AsyncOperations: WebExpand<msdyn_bookingchange_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_bookingchange_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_bookingchange_BulkDeleteFailures: WebExpand<msdyn_bookingchange_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_bookingchange_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_bookingchange_MailboxTrackingFolders: WebExpand<msdyn_bookingchange_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_bookingchange_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_bookingchange_PrincipalObjectAttributeAccesses: WebExpand<msdyn_bookingchange_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_bookingchange_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_bookingchange_ProcessSession: WebExpand<msdyn_bookingchange_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_bookingchange_ProcessSession: ProcessSession_Result[] }>;
  msdyn_bookingchange_SyncErrors: WebExpand<msdyn_bookingchange_Expand, SyncError_Select, SyncError_Filter, { msdyn_bookingchange_SyncErrors: SyncError_Result[] }>;
  msdyn_bookingchange_UserEntityInstanceDatas: WebExpand<msdyn_bookingchange_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_bookingchange_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_bookingchange_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_bookingchange_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_bookingchange_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_bookingchange_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_bookingchange_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_bookingchange_Result extends msdyn_bookingchange_Base, msdyn_bookingchange_Relationships {
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
interface msdyn_bookingchange_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_bookingchange_RelatedMany {
  msdyn_bookingchange_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_bookingchange_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_bookingchange_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_bookingchange_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_bookingchange_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_bookingchange_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_bookingchange_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_bookingchanges: WebMappingRetrieve<msdyn_bookingchange_Select,msdyn_bookingchange_Expand,msdyn_bookingchange_Filter,msdyn_bookingchange_Fixed,msdyn_bookingchange_Result,msdyn_bookingchange_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_bookingchanges: WebMappingRelated<msdyn_bookingchange_RelatedOne,msdyn_bookingchange_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_bookingchanges: WebMappingCUDA<msdyn_bookingchange_Create,msdyn_bookingchange_Update,msdyn_bookingchange_Select>;
}
