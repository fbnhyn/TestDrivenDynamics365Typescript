interface teammobileofflineprofilemembership_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: teammobileofflineprofilemembership_statecode | null;
  statuscode?: teammobileofflineprofilemembership_statuscode | null;
  teammobileofflineprofilemembershipid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface teammobileofflineprofilemembership_Relationships {
  MobileOfflineProfileId?: MobileOfflineProfile_Result | null;
  TeamId?: Team_Result | null;
  teammobileofflineprofilemembership_AsyncOperations?: AsyncOperation_Result[] | null;
  teammobileofflineprofilemembership_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  teammobileofflineprofilemembership_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  teammobileofflineprofilemembership_ProcessSession?: ProcessSession_Result[] | null;
  teammobileofflineprofilemembership_SyncErrors?: SyncError_Result[] | null;
  teammobileofflineprofilemembership_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface teammobileofflineprofilemembership extends teammobileofflineprofilemembership_Base, teammobileofflineprofilemembership_Relationships {
  MobileOfflineProfileId_bind$mobileofflineprofiles?: string | null;
  TeamId_bind$teams?: string | null;
}
interface teammobileofflineprofilemembership_Create extends teammobileofflineprofilemembership {
}
interface teammobileofflineprofilemembership_Update extends teammobileofflineprofilemembership {
}
interface teammobileofflineprofilemembership_Select {
  createdby_guid: WebAttribute<teammobileofflineprofilemembership_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<teammobileofflineprofilemembership_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<teammobileofflineprofilemembership_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<teammobileofflineprofilemembership_Select, { importsequencenumber: number | null }, {  }>;
  mobileofflineprofileid_guid: WebAttribute<teammobileofflineprofilemembership_Select, { mobileofflineprofileid_guid: string | null }, { mobileofflineprofileid_formatted?: string }>;
  modifiedby_guid: WebAttribute<teammobileofflineprofilemembership_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<teammobileofflineprofilemembership_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<teammobileofflineprofilemembership_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<teammobileofflineprofilemembership_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<teammobileofflineprofilemembership_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<teammobileofflineprofilemembership_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<teammobileofflineprofilemembership_Select, { statecode: teammobileofflineprofilemembership_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<teammobileofflineprofilemembership_Select, { statuscode: teammobileofflineprofilemembership_statuscode | null }, { statuscode_formatted?: string }>;
  teamid_guid: WebAttribute<teammobileofflineprofilemembership_Select, { teamid_guid: string | null }, { teamid_formatted?: string }>;
  teammobileofflineprofilemembershipid: WebAttribute<teammobileofflineprofilemembership_Select, { teammobileofflineprofilemembershipid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<teammobileofflineprofilemembership_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<teammobileofflineprofilemembership_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<teammobileofflineprofilemembership_Select, { versionnumber: number | null }, {  }>;
}
interface teammobileofflineprofilemembership_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  mobileofflineprofileid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: teammobileofflineprofilemembership_statecode;
  statuscode: teammobileofflineprofilemembership_statuscode;
  teamid_guid: XQW.Guid;
  teammobileofflineprofilemembershipid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface teammobileofflineprofilemembership_Expand {
  MobileOfflineProfileId: WebExpand<teammobileofflineprofilemembership_Expand, MobileOfflineProfile_Select, MobileOfflineProfile_Filter, { MobileOfflineProfileId: MobileOfflineProfile_Result }>;
  TeamId: WebExpand<teammobileofflineprofilemembership_Expand, Team_Select, Team_Filter, { TeamId: Team_Result }>;
  createdby: WebExpand<teammobileofflineprofilemembership_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<teammobileofflineprofilemembership_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<teammobileofflineprofilemembership_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<teammobileofflineprofilemembership_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<teammobileofflineprofilemembership_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  teammobileofflineprofilemembership_AsyncOperations: WebExpand<teammobileofflineprofilemembership_Expand, AsyncOperation_Select, AsyncOperation_Filter, { teammobileofflineprofilemembership_AsyncOperations: AsyncOperation_Result[] }>;
  teammobileofflineprofilemembership_BulkDeleteFailures: WebExpand<teammobileofflineprofilemembership_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { teammobileofflineprofilemembership_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  teammobileofflineprofilemembership_MailboxTrackingFolders: WebExpand<teammobileofflineprofilemembership_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { teammobileofflineprofilemembership_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses: WebExpand<teammobileofflineprofilemembership_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  teammobileofflineprofilemembership_ProcessSession: WebExpand<teammobileofflineprofilemembership_Expand, ProcessSession_Select, ProcessSession_Filter, { teammobileofflineprofilemembership_ProcessSession: ProcessSession_Result[] }>;
  teammobileofflineprofilemembership_SyncErrors: WebExpand<teammobileofflineprofilemembership_Expand, SyncError_Select, SyncError_Filter, { teammobileofflineprofilemembership_SyncErrors: SyncError_Result[] }>;
  teammobileofflineprofilemembership_UserEntityInstanceDatas: WebExpand<teammobileofflineprofilemembership_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { teammobileofflineprofilemembership_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface teammobileofflineprofilemembership_FormattedResult {
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
  teamid_formatted?: string;
}
interface teammobileofflineprofilemembership_Result extends teammobileofflineprofilemembership_Base, teammobileofflineprofilemembership_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  mobileofflineprofileid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  teamid_guid: string | null;
}
interface teammobileofflineprofilemembership_RelatedOne {
  MobileOfflineProfileId: WebMappingRetrieve<MobileOfflineProfile_Select,MobileOfflineProfile_Expand,MobileOfflineProfile_Filter,MobileOfflineProfile_Fixed,MobileOfflineProfile_Result,MobileOfflineProfile_FormattedResult>;
  TeamId: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface teammobileofflineprofilemembership_RelatedMany {
  teammobileofflineprofilemembership_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  teammobileofflineprofilemembership_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  teammobileofflineprofilemembership_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  teammobileofflineprofilemembership_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  teammobileofflineprofilemembership_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  teammobileofflineprofilemembership_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  teammobileofflineprofilemembership_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  teammobileofflineprofilememberships: WebMappingRetrieve<teammobileofflineprofilemembership_Select,teammobileofflineprofilemembership_Expand,teammobileofflineprofilemembership_Filter,teammobileofflineprofilemembership_Fixed,teammobileofflineprofilemembership_Result,teammobileofflineprofilemembership_FormattedResult>;
}
interface WebEntitiesRelated {
  teammobileofflineprofilememberships: WebMappingRelated<teammobileofflineprofilemembership_RelatedOne,teammobileofflineprofilemembership_RelatedMany>;
}
interface WebEntitiesCUDA {
  teammobileofflineprofilememberships: WebMappingCUDA<teammobileofflineprofilemembership_Create,teammobileofflineprofilemembership_Update,teammobileofflineprofilemembership_Select>;
}
