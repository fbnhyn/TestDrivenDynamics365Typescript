interface msdyn_teamsdialeradminsettings_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_appmodules?: string | null;
  msdyn_layoutschema?: string | null;
  msdyn_name?: string | null;
  msdyn_recordingsecurityroles?: string | null;
  msdyn_securityroles?: string | null;
  msdyn_teamsdialeradminsettingsid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_teamsdialeradminsettings_statecode | null;
  statuscode?: msdyn_teamsdialeradminsettings_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_teamsdialeradminsettings_Relationships {
  msdyn_teamsdialeradminsettings_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_teamsdialeradminsettings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_teamsdialeradminsettings_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_teamsdialeradminsettings_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_teamsdialeradminsettings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_teamsdialeradminsettings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_teamsdialeradminsettings_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_teamsdialeradminsettings_SyncErrors?: SyncError_Result[] | null;
  msdyn_teamsdialeradminsettings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_teamsdialeradminsettings extends msdyn_teamsdialeradminsettings_Base, msdyn_teamsdialeradminsettings_Relationships {
}
interface msdyn_teamsdialeradminsettings_Create extends msdyn_teamsdialeradminsettings {
}
interface msdyn_teamsdialeradminsettings_Update extends msdyn_teamsdialeradminsettings {
}
interface msdyn_teamsdialeradminsettings_Select {
  createdby_guid: WebAttribute<msdyn_teamsdialeradminsettings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_teamsdialeradminsettings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_teamsdialeradminsettings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_teamsdialeradminsettings_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_teamsdialeradminsettings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_teamsdialeradminsettings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_teamsdialeradminsettings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_appmodules: WebAttribute<msdyn_teamsdialeradminsettings_Select, { msdyn_appmodules: string | null }, {  }>;
  msdyn_layoutschema: WebAttribute<msdyn_teamsdialeradminsettings_Select, { msdyn_layoutschema: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_teamsdialeradminsettings_Select, { msdyn_name: string | null }, {  }>;
  msdyn_recordingsecurityroles: WebAttribute<msdyn_teamsdialeradminsettings_Select, { msdyn_recordingsecurityroles: string | null }, {  }>;
  msdyn_securityroles: WebAttribute<msdyn_teamsdialeradminsettings_Select, { msdyn_securityroles: string | null }, {  }>;
  msdyn_teamsdialeradminsettingsid: WebAttribute<msdyn_teamsdialeradminsettings_Select, { msdyn_teamsdialeradminsettingsid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_teamsdialeradminsettings_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_teamsdialeradminsettings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_teamsdialeradminsettings_Select, { statecode: msdyn_teamsdialeradminsettings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_teamsdialeradminsettings_Select, { statuscode: msdyn_teamsdialeradminsettings_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_teamsdialeradminsettings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_teamsdialeradminsettings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_teamsdialeradminsettings_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_teamsdialeradminsettings_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_appmodules: string;
  msdyn_layoutschema: string;
  msdyn_name: string;
  msdyn_recordingsecurityroles: string;
  msdyn_securityroles: string;
  msdyn_teamsdialeradminsettingsid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_teamsdialeradminsettings_statecode;
  statuscode: msdyn_teamsdialeradminsettings_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_teamsdialeradminsettings_Expand {
  createdby: WebExpand<msdyn_teamsdialeradminsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_teamsdialeradminsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_teamsdialeradminsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_teamsdialeradminsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_teamsdialeradminsettings_AsyncOperations: WebExpand<msdyn_teamsdialeradminsettings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_teamsdialeradminsettings_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_teamsdialeradminsettings_BulkDeleteFailures: WebExpand<msdyn_teamsdialeradminsettings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_teamsdialeradminsettings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_teamsdialeradminsettings_DuplicateBaseRecord: WebExpand<msdyn_teamsdialeradminsettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_teamsdialeradminsettings_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_teamsdialeradminsettings_DuplicateMatchingRecord: WebExpand<msdyn_teamsdialeradminsettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_teamsdialeradminsettings_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_teamsdialeradminsettings_MailboxTrackingFolders: WebExpand<msdyn_teamsdialeradminsettings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_teamsdialeradminsettings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_teamsdialeradminsettings_PrincipalObjectAttributeAccesses: WebExpand<msdyn_teamsdialeradminsettings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_teamsdialeradminsettings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_teamsdialeradminsettings_ProcessSession: WebExpand<msdyn_teamsdialeradminsettings_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_teamsdialeradminsettings_ProcessSession: ProcessSession_Result[] }>;
  msdyn_teamsdialeradminsettings_SyncErrors: WebExpand<msdyn_teamsdialeradminsettings_Expand, SyncError_Select, SyncError_Filter, { msdyn_teamsdialeradminsettings_SyncErrors: SyncError_Result[] }>;
  msdyn_teamsdialeradminsettings_UserEntityInstanceDatas: WebExpand<msdyn_teamsdialeradminsettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_teamsdialeradminsettings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_teamsdialeradminsettings_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_teamsdialeradminsettings_FormattedResult {
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
interface msdyn_teamsdialeradminsettings_Result extends msdyn_teamsdialeradminsettings_Base, msdyn_teamsdialeradminsettings_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_teamsdialeradminsettings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_teamsdialeradminsettings_RelatedMany {
  msdyn_teamsdialeradminsettings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_teamsdialeradminsettings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_teamsdialeradminsettings_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_teamsdialeradminsettings_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_teamsdialeradminsettings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_teamsdialeradminsettings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_teamsdialeradminsettings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_teamsdialeradminsettings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_teamsdialeradminsettings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_teamsdialeradminsettingset: WebMappingRetrieve<msdyn_teamsdialeradminsettings_Select,msdyn_teamsdialeradminsettings_Expand,msdyn_teamsdialeradminsettings_Filter,msdyn_teamsdialeradminsettings_Fixed,msdyn_teamsdialeradminsettings_Result,msdyn_teamsdialeradminsettings_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_teamsdialeradminsettingset: WebMappingRelated<msdyn_teamsdialeradminsettings_RelatedOne,msdyn_teamsdialeradminsettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_teamsdialeradminsettingset: WebMappingCUDA<msdyn_teamsdialeradminsettings_Create,msdyn_teamsdialeradminsettings_Update,msdyn_teamsdialeradminsettings_Select>;
}
