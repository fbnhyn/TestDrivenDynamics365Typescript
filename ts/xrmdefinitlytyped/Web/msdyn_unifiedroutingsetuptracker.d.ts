interface msdyn_unifiedroutingsetuptracker_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_enableunifiedrouting?: boolean | null;
  msdyn_errorcode?: number | null;
  msdyn_errormessage?: string | null;
  msdyn_executionstatus?: msdyn_unifiedroutingsetuptracker_msdyn_executionstatus | null;
  msdyn_issuccessnotificationdisplayed?: boolean | null;
  msdyn_isteachingbubbledisplayed?: boolean | null;
  msdyn_name?: string | null;
  msdyn_servicerequestid?: string | null;
  msdyn_token?: string | null;
  msdyn_transactionid?: string | null;
  msdyn_unifiedroutingsetuptrackerid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_unifiedroutingsetuptracker_statecode | null;
  statuscode?: msdyn_unifiedroutingsetuptracker_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_unifiedroutingsetuptracker_Relationships {
  msdyn_unifiedroutingsetuptracker_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_unifiedroutingsetuptracker_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_unifiedroutingsetuptracker_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_unifiedroutingsetuptracker_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_unifiedroutingsetuptracker_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_unifiedroutingsetuptracker_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_unifiedroutingsetuptracker_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_unifiedroutingsetuptracker_SyncErrors?: SyncError_Result[] | null;
  msdyn_unifiedroutingsetuptracker_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_unifiedroutingsetuptracker extends msdyn_unifiedroutingsetuptracker_Base, msdyn_unifiedroutingsetuptracker_Relationships {
}
interface msdyn_unifiedroutingsetuptracker_Create extends msdyn_unifiedroutingsetuptracker {
}
interface msdyn_unifiedroutingsetuptracker_Update extends msdyn_unifiedroutingsetuptracker {
}
interface msdyn_unifiedroutingsetuptracker_Select {
  createdby_guid: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_enableunifiedrouting: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { msdyn_enableunifiedrouting: boolean | null }, {  }>;
  msdyn_errorcode: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { msdyn_errorcode: number | null }, {  }>;
  msdyn_errormessage: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { msdyn_errormessage: string | null }, {  }>;
  msdyn_executionstatus: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { msdyn_executionstatus: msdyn_unifiedroutingsetuptracker_msdyn_executionstatus | null }, { msdyn_executionstatus_formatted?: string }>;
  msdyn_issuccessnotificationdisplayed: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { msdyn_issuccessnotificationdisplayed: boolean | null }, {  }>;
  msdyn_isteachingbubbledisplayed: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { msdyn_isteachingbubbledisplayed: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { msdyn_name: string | null }, {  }>;
  msdyn_servicerequestid: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { msdyn_servicerequestid: string | null }, {  }>;
  msdyn_token: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { msdyn_token: string | null }, {  }>;
  msdyn_transactionid: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { msdyn_transactionid: string | null }, {  }>;
  msdyn_unifiedroutingsetuptrackerid: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { msdyn_unifiedroutingsetuptrackerid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { statecode: msdyn_unifiedroutingsetuptracker_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { statuscode: msdyn_unifiedroutingsetuptracker_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_unifiedroutingsetuptracker_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_unifiedroutingsetuptracker_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_enableunifiedrouting: boolean;
  msdyn_errorcode: number;
  msdyn_errormessage: string;
  msdyn_executionstatus: msdyn_unifiedroutingsetuptracker_msdyn_executionstatus;
  msdyn_issuccessnotificationdisplayed: boolean;
  msdyn_isteachingbubbledisplayed: boolean;
  msdyn_name: string;
  msdyn_servicerequestid: string;
  msdyn_token: string;
  msdyn_transactionid: string;
  msdyn_unifiedroutingsetuptrackerid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_unifiedroutingsetuptracker_statecode;
  statuscode: msdyn_unifiedroutingsetuptracker_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_unifiedroutingsetuptracker_Expand {
  createdby: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_unifiedroutingsetuptracker_AsyncOperations: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_unifiedroutingsetuptracker_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_unifiedroutingsetuptracker_BulkDeleteFailures: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_unifiedroutingsetuptracker_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_unifiedroutingsetuptracker_DuplicateBaseRecord: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_unifiedroutingsetuptracker_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_unifiedroutingsetuptracker_DuplicateMatchingRecord: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_unifiedroutingsetuptracker_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_unifiedroutingsetuptracker_MailboxTrackingFolders: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_unifiedroutingsetuptracker_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_unifiedroutingsetuptracker_PrincipalObjectAttributeAccesses: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_unifiedroutingsetuptracker_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_unifiedroutingsetuptracker_ProcessSession: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_unifiedroutingsetuptracker_ProcessSession: ProcessSession_Result[] }>;
  msdyn_unifiedroutingsetuptracker_SyncErrors: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, SyncError_Select, SyncError_Filter, { msdyn_unifiedroutingsetuptracker_SyncErrors: SyncError_Result[] }>;
  msdyn_unifiedroutingsetuptracker_UserEntityInstanceDatas: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_unifiedroutingsetuptracker_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_unifiedroutingsetuptracker_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_unifiedroutingsetuptracker_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_executionstatus_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_unifiedroutingsetuptracker_Result extends msdyn_unifiedroutingsetuptracker_Base, msdyn_unifiedroutingsetuptracker_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_unifiedroutingsetuptracker_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_unifiedroutingsetuptracker_RelatedMany {
  msdyn_unifiedroutingsetuptracker_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_unifiedroutingsetuptracker_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_unifiedroutingsetuptracker_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_unifiedroutingsetuptracker_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_unifiedroutingsetuptracker_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_unifiedroutingsetuptracker_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_unifiedroutingsetuptracker_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_unifiedroutingsetuptracker_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_unifiedroutingsetuptracker_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_unifiedroutingsetuptrackers: WebMappingRetrieve<msdyn_unifiedroutingsetuptracker_Select,msdyn_unifiedroutingsetuptracker_Expand,msdyn_unifiedroutingsetuptracker_Filter,msdyn_unifiedroutingsetuptracker_Fixed,msdyn_unifiedroutingsetuptracker_Result,msdyn_unifiedroutingsetuptracker_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_unifiedroutingsetuptrackers: WebMappingRelated<msdyn_unifiedroutingsetuptracker_RelatedOne,msdyn_unifiedroutingsetuptracker_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_unifiedroutingsetuptrackers: WebMappingCUDA<msdyn_unifiedroutingsetuptracker_Create,msdyn_unifiedroutingsetuptracker_Update,msdyn_unifiedroutingsetuptracker_Select>;
}
