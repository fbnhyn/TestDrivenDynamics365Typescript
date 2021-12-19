interface msdyn_routingrulesetsetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_ismultipleactiveroutingrulesetallowed?: boolean | null;
  msdyn_name?: string | null;
  msdyn_routingrulesetsettingid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_routingrulesetsetting_statecode | null;
  statuscode?: msdyn_routingrulesetsetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_routingrulesetsetting_Relationships {
  msdyn_routingrulesetsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_routingrulesetsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_routingrulesetsetting_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_routingrulesetsetting_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_routingrulesetsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_routingrulesetsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_routingrulesetsetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_routingrulesetsetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_routingrulesetsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_routingrulesetsetting extends msdyn_routingrulesetsetting_Base, msdyn_routingrulesetsetting_Relationships {
}
interface msdyn_routingrulesetsetting_Create extends msdyn_routingrulesetsetting {
}
interface msdyn_routingrulesetsetting_Update extends msdyn_routingrulesetsetting {
}
interface msdyn_routingrulesetsetting_Select {
  createdby_guid: WebAttribute<msdyn_routingrulesetsetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_routingrulesetsetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_routingrulesetsetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_routingrulesetsetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_routingrulesetsetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_routingrulesetsetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_routingrulesetsetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_ismultipleactiveroutingrulesetallowed: WebAttribute<msdyn_routingrulesetsetting_Select, { msdyn_ismultipleactiveroutingrulesetallowed: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_routingrulesetsetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_routingrulesetsettingid: WebAttribute<msdyn_routingrulesetsetting_Select, { msdyn_routingrulesetsettingid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_routingrulesetsetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_routingrulesetsetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_routingrulesetsetting_Select, { statecode: msdyn_routingrulesetsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_routingrulesetsetting_Select, { statuscode: msdyn_routingrulesetsetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_routingrulesetsetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_routingrulesetsetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_routingrulesetsetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_routingrulesetsetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_ismultipleactiveroutingrulesetallowed: boolean;
  msdyn_name: string;
  msdyn_routingrulesetsettingid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_routingrulesetsetting_statecode;
  statuscode: msdyn_routingrulesetsetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_routingrulesetsetting_Expand {
  createdby: WebExpand<msdyn_routingrulesetsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_routingrulesetsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_routingrulesetsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_routingrulesetsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_routingrulesetsetting_AsyncOperations: WebExpand<msdyn_routingrulesetsetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_routingrulesetsetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_routingrulesetsetting_BulkDeleteFailures: WebExpand<msdyn_routingrulesetsetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_routingrulesetsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_routingrulesetsetting_DuplicateBaseRecord: WebExpand<msdyn_routingrulesetsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_routingrulesetsetting_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_routingrulesetsetting_DuplicateMatchingRecord: WebExpand<msdyn_routingrulesetsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_routingrulesetsetting_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_routingrulesetsetting_MailboxTrackingFolders: WebExpand<msdyn_routingrulesetsetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_routingrulesetsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_routingrulesetsetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_routingrulesetsetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_routingrulesetsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_routingrulesetsetting_ProcessSession: WebExpand<msdyn_routingrulesetsetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_routingrulesetsetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_routingrulesetsetting_SyncErrors: WebExpand<msdyn_routingrulesetsetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_routingrulesetsetting_SyncErrors: SyncError_Result[] }>;
  msdyn_routingrulesetsetting_UserEntityInstanceDatas: WebExpand<msdyn_routingrulesetsetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_routingrulesetsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_routingrulesetsetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_routingrulesetsetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_routingrulesetsetting_Result extends msdyn_routingrulesetsetting_Base, msdyn_routingrulesetsetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_routingrulesetsetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_routingrulesetsetting_RelatedMany {
  msdyn_routingrulesetsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_routingrulesetsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_routingrulesetsetting_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_routingrulesetsetting_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_routingrulesetsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_routingrulesetsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_routingrulesetsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_routingrulesetsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_routingrulesetsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_routingrulesetsettings: WebMappingRetrieve<msdyn_routingrulesetsetting_Select,msdyn_routingrulesetsetting_Expand,msdyn_routingrulesetsetting_Filter,msdyn_routingrulesetsetting_Fixed,msdyn_routingrulesetsetting_Result,msdyn_routingrulesetsetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_routingrulesetsettings: WebMappingRelated<msdyn_routingrulesetsetting_RelatedOne,msdyn_routingrulesetsetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_routingrulesetsettings: WebMappingCUDA<msdyn_routingrulesetsetting_Create,msdyn_routingrulesetsetting_Update,msdyn_routingrulesetsetting_Select>;
}
