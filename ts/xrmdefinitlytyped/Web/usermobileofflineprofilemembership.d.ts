interface usermobileofflineprofilemembership_Base extends WebEntity {
  createdon?: Date | null;
  hasmobileofflineprofileidconflict?: boolean | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: usermobileofflineprofilemembership_statecode | null;
  statuscode?: usermobileofflineprofilemembership_statuscode | null;
  timezoneruleversionnumber?: number | null;
  usermobileofflineprofilemembershipid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface usermobileofflineprofilemembership_Relationships {
  MobileOfflineProfileId?: MobileOfflineProfile_Result | null;
  SystemUserId?: SystemUser_Result | null;
  usermobileofflineprofilemembership_AsyncOperations?: AsyncOperation_Result[] | null;
  usermobileofflineprofilemembership_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  usermobileofflineprofilemembership_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  usermobileofflineprofilemembership_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  usermobileofflineprofilemembership_ProcessSession?: ProcessSession_Result[] | null;
  usermobileofflineprofilemembership_SyncErrors?: SyncError_Result[] | null;
  usermobileofflineprofilemembership_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface usermobileofflineprofilemembership extends usermobileofflineprofilemembership_Base, usermobileofflineprofilemembership_Relationships {
  MobileOfflineProfileId_bind$mobileofflineprofiles?: string | null;
  SystemUserId_bind$systemusers?: string | null;
}
interface usermobileofflineprofilemembership_Create extends usermobileofflineprofilemembership {
}
interface usermobileofflineprofilemembership_Update extends usermobileofflineprofilemembership {
}
interface usermobileofflineprofilemembership_Select {
  createdby_guid: WebAttribute<usermobileofflineprofilemembership_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<usermobileofflineprofilemembership_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<usermobileofflineprofilemembership_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  hasmobileofflineprofileidconflict: WebAttribute<usermobileofflineprofilemembership_Select, { hasmobileofflineprofileidconflict: boolean | null }, {  }>;
  importsequencenumber: WebAttribute<usermobileofflineprofilemembership_Select, { importsequencenumber: number | null }, {  }>;
  mobileofflineprofileid_guid: WebAttribute<usermobileofflineprofilemembership_Select, { mobileofflineprofileid_guid: string | null }, { mobileofflineprofileid_formatted?: string }>;
  modifiedby_guid: WebAttribute<usermobileofflineprofilemembership_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<usermobileofflineprofilemembership_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<usermobileofflineprofilemembership_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<usermobileofflineprofilemembership_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<usermobileofflineprofilemembership_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<usermobileofflineprofilemembership_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<usermobileofflineprofilemembership_Select, { statecode: usermobileofflineprofilemembership_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<usermobileofflineprofilemembership_Select, { statuscode: usermobileofflineprofilemembership_statuscode | null }, { statuscode_formatted?: string }>;
  systemuserid_guid: WebAttribute<usermobileofflineprofilemembership_Select, { systemuserid_guid: string | null }, { systemuserid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<usermobileofflineprofilemembership_Select, { timezoneruleversionnumber: number | null }, {  }>;
  usermobileofflineprofilemembershipid: WebAttribute<usermobileofflineprofilemembership_Select, { usermobileofflineprofilemembershipid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<usermobileofflineprofilemembership_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<usermobileofflineprofilemembership_Select, { versionnumber: number | null }, {  }>;
}
interface usermobileofflineprofilemembership_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  hasmobileofflineprofileidconflict: boolean;
  importsequencenumber: number;
  mobileofflineprofileid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: usermobileofflineprofilemembership_statecode;
  statuscode: usermobileofflineprofilemembership_statuscode;
  systemuserid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  usermobileofflineprofilemembershipid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface usermobileofflineprofilemembership_Expand {
  MobileOfflineProfileId: WebExpand<usermobileofflineprofilemembership_Expand, MobileOfflineProfile_Select, MobileOfflineProfile_Filter, { MobileOfflineProfileId: MobileOfflineProfile_Result }>;
  SystemUserId: WebExpand<usermobileofflineprofilemembership_Expand, SystemUser_Select, SystemUser_Filter, { SystemUserId: SystemUser_Result }>;
  createdby: WebExpand<usermobileofflineprofilemembership_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<usermobileofflineprofilemembership_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<usermobileofflineprofilemembership_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<usermobileofflineprofilemembership_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<usermobileofflineprofilemembership_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  usermobileofflineprofilemembership_AsyncOperations: WebExpand<usermobileofflineprofilemembership_Expand, AsyncOperation_Select, AsyncOperation_Filter, { usermobileofflineprofilemembership_AsyncOperations: AsyncOperation_Result[] }>;
  usermobileofflineprofilemembership_BulkDeleteFailures: WebExpand<usermobileofflineprofilemembership_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { usermobileofflineprofilemembership_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  usermobileofflineprofilemembership_MailboxTrackingFolders: WebExpand<usermobileofflineprofilemembership_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { usermobileofflineprofilemembership_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  usermobileofflineprofilemembership_PrincipalObjectAttributeAccesses: WebExpand<usermobileofflineprofilemembership_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { usermobileofflineprofilemembership_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  usermobileofflineprofilemembership_ProcessSession: WebExpand<usermobileofflineprofilemembership_Expand, ProcessSession_Select, ProcessSession_Filter, { usermobileofflineprofilemembership_ProcessSession: ProcessSession_Result[] }>;
  usermobileofflineprofilemembership_SyncErrors: WebExpand<usermobileofflineprofilemembership_Expand, SyncError_Select, SyncError_Filter, { usermobileofflineprofilemembership_SyncErrors: SyncError_Result[] }>;
  usermobileofflineprofilemembership_UserEntityInstanceDatas: WebExpand<usermobileofflineprofilemembership_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { usermobileofflineprofilemembership_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface usermobileofflineprofilemembership_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  mobileofflineprofileid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  systemuserid_formatted?: string;
}
interface usermobileofflineprofilemembership_Result extends usermobileofflineprofilemembership_Base, usermobileofflineprofilemembership_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  mobileofflineprofileid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  systemuserid_guid: string | null;
}
interface usermobileofflineprofilemembership_RelatedOne {
  MobileOfflineProfileId: WebMappingRetrieve<MobileOfflineProfile_Select,MobileOfflineProfile_Expand,MobileOfflineProfile_Filter,MobileOfflineProfile_Fixed,MobileOfflineProfile_Result,MobileOfflineProfile_FormattedResult>;
  SystemUserId: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface usermobileofflineprofilemembership_RelatedMany {
  usermobileofflineprofilemembership_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  usermobileofflineprofilemembership_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  usermobileofflineprofilemembership_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  usermobileofflineprofilemembership_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  usermobileofflineprofilemembership_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  usermobileofflineprofilemembership_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  usermobileofflineprofilemembership_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  usermobileofflineprofilememberships: WebMappingRetrieve<usermobileofflineprofilemembership_Select,usermobileofflineprofilemembership_Expand,usermobileofflineprofilemembership_Filter,usermobileofflineprofilemembership_Fixed,usermobileofflineprofilemembership_Result,usermobileofflineprofilemembership_FormattedResult>;
}
interface WebEntitiesRelated {
  usermobileofflineprofilememberships: WebMappingRelated<usermobileofflineprofilemembership_RelatedOne,usermobileofflineprofilemembership_RelatedMany>;
}
interface WebEntitiesCUDA {
  usermobileofflineprofilememberships: WebMappingCUDA<usermobileofflineprofilemembership_Create,usermobileofflineprofilemembership_Update,usermobileofflineprofilemembership_Select>;
}
