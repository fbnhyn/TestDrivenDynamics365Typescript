interface msdyn_geolocationtracking_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_date?: Date | null;
  msdyn_geolocationtrackingid?: string | null;
  msdyn_latitude?: number | null;
  msdyn_longitude?: number | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_geolocationtracking_statecode | null;
  statuscode?: msdyn_geolocationtracking_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_geolocationtracking_Relationships {
  msdyn_UserId?: SystemUser_Result | null;
  msdyn_geolocationtracking_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_geolocationtracking_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_geolocationtracking_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_geolocationtracking_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_geolocationtracking_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_geolocationtracking_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_geolocationtracking_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_geolocationtracking_SyncErrors?: SyncError_Result[] | null;
  msdyn_geolocationtracking_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_geolocationtracking extends msdyn_geolocationtracking_Base, msdyn_geolocationtracking_Relationships {
  msdyn_UserId_bind$systemusers?: string | null;
}
interface msdyn_geolocationtracking_Create extends msdyn_geolocationtracking {
}
interface msdyn_geolocationtracking_Update extends msdyn_geolocationtracking {
}
interface msdyn_geolocationtracking_Select {
  createdby_guid: WebAttribute<msdyn_geolocationtracking_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_geolocationtracking_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_geolocationtracking_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_geolocationtracking_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_geolocationtracking_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_geolocationtracking_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_geolocationtracking_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_date: WebAttribute<msdyn_geolocationtracking_Select, { msdyn_date: Date | null }, { msdyn_date_formatted?: string }>;
  msdyn_geolocationtrackingid: WebAttribute<msdyn_geolocationtracking_Select, { msdyn_geolocationtrackingid: string | null }, {  }>;
  msdyn_latitude: WebAttribute<msdyn_geolocationtracking_Select, { msdyn_latitude: number | null }, {  }>;
  msdyn_longitude: WebAttribute<msdyn_geolocationtracking_Select, { msdyn_longitude: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_geolocationtracking_Select, { msdyn_name: string | null }, {  }>;
  msdyn_userid_guid: WebAttribute<msdyn_geolocationtracking_Select, { msdyn_userid_guid: string | null }, { msdyn_userid_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_geolocationtracking_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_geolocationtracking_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_geolocationtracking_Select, { statecode: msdyn_geolocationtracking_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_geolocationtracking_Select, { statuscode: msdyn_geolocationtracking_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_geolocationtracking_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_geolocationtracking_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_geolocationtracking_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_geolocationtracking_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_date: Date;
  msdyn_geolocationtrackingid: XQW.Guid;
  msdyn_latitude: any;
  msdyn_longitude: any;
  msdyn_name: string;
  msdyn_userid_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_geolocationtracking_statecode;
  statuscode: msdyn_geolocationtracking_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_geolocationtracking_Expand {
  createdby: WebExpand<msdyn_geolocationtracking_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_geolocationtracking_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_geolocationtracking_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_geolocationtracking_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_UserId: WebExpand<msdyn_geolocationtracking_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_UserId: SystemUser_Result }>;
  msdyn_geolocationtracking_AsyncOperations: WebExpand<msdyn_geolocationtracking_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_geolocationtracking_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_geolocationtracking_BulkDeleteFailures: WebExpand<msdyn_geolocationtracking_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_geolocationtracking_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_geolocationtracking_DuplicateBaseRecord: WebExpand<msdyn_geolocationtracking_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_geolocationtracking_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_geolocationtracking_DuplicateMatchingRecord: WebExpand<msdyn_geolocationtracking_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_geolocationtracking_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_geolocationtracking_MailboxTrackingFolders: WebExpand<msdyn_geolocationtracking_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_geolocationtracking_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_geolocationtracking_PrincipalObjectAttributeAccesses: WebExpand<msdyn_geolocationtracking_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_geolocationtracking_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_geolocationtracking_ProcessSession: WebExpand<msdyn_geolocationtracking_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_geolocationtracking_ProcessSession: ProcessSession_Result[] }>;
  msdyn_geolocationtracking_SyncErrors: WebExpand<msdyn_geolocationtracking_Expand, SyncError_Select, SyncError_Filter, { msdyn_geolocationtracking_SyncErrors: SyncError_Result[] }>;
  msdyn_geolocationtracking_UserEntityInstanceDatas: WebExpand<msdyn_geolocationtracking_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_geolocationtracking_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_geolocationtracking_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_geolocationtracking_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_date_formatted?: string;
  msdyn_userid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_geolocationtracking_Result extends msdyn_geolocationtracking_Base, msdyn_geolocationtracking_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_userid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_geolocationtracking_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_UserId: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_geolocationtracking_RelatedMany {
  msdyn_geolocationtracking_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_geolocationtracking_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_geolocationtracking_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_geolocationtracking_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_geolocationtracking_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_geolocationtracking_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_geolocationtracking_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_geolocationtracking_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_geolocationtracking_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_geolocationtrackings: WebMappingRetrieve<msdyn_geolocationtracking_Select,msdyn_geolocationtracking_Expand,msdyn_geolocationtracking_Filter,msdyn_geolocationtracking_Fixed,msdyn_geolocationtracking_Result,msdyn_geolocationtracking_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_geolocationtrackings: WebMappingRelated<msdyn_geolocationtracking_RelatedOne,msdyn_geolocationtracking_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_geolocationtrackings: WebMappingCUDA<msdyn_geolocationtracking_Create,msdyn_geolocationtracking_Update,msdyn_geolocationtracking_Select>;
}
