interface msdyn_wallsavedquery_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_entitydisplayname?: string | null;
  msdyn_entityname?: string | null;
  msdyn_isvirtual?: boolean | null;
  msdyn_isvisible?: boolean | null;
  msdyn_isvisiblebit?: number | null;
  msdyn_otc?: number | null;
  msdyn_savedqueryid?: string | null;
  msdyn_savedqueryname?: string | null;
  msdyn_wallsavedqueryid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_wallsavedquery_statecode | null;
  statuscode?: msdyn_wallsavedquery_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_wallsavedquery_Relationships {
  msdyn_wallsavedquery_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_wallsavedquery_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_wallsavedquery_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_wallsavedquery_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_wallsavedquery_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_wallsavedquery_SyncErrors?: SyncError_Result[] | null;
  msdyn_wallsavedquery_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_wallsavedquery_wallsavedqueryusersettings?: msdyn_wallsavedqueryusersettings_Result[] | null;
}
interface msdyn_wallsavedquery extends msdyn_wallsavedquery_Base, msdyn_wallsavedquery_Relationships {
  msdyn_postconfigurationid_bind$msdyn_postconfigs?: string | null;
}
interface msdyn_wallsavedquery_Create extends msdyn_wallsavedquery {
}
interface msdyn_wallsavedquery_Update extends msdyn_wallsavedquery {
}
interface msdyn_wallsavedquery_Select {
  createdby_guid: WebAttribute<msdyn_wallsavedquery_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_wallsavedquery_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_wallsavedquery_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_wallsavedquery_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_wallsavedquery_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_wallsavedquery_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_wallsavedquery_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_entitydisplayname: WebAttribute<msdyn_wallsavedquery_Select, { msdyn_entitydisplayname: string | null }, {  }>;
  msdyn_entityname: WebAttribute<msdyn_wallsavedquery_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_isvirtual: WebAttribute<msdyn_wallsavedquery_Select, { msdyn_isvirtual: boolean | null }, {  }>;
  msdyn_isvisible: WebAttribute<msdyn_wallsavedquery_Select, { msdyn_isvisible: boolean | null }, {  }>;
  msdyn_isvisiblebit: WebAttribute<msdyn_wallsavedquery_Select, { msdyn_isvisiblebit: number | null }, {  }>;
  msdyn_otc: WebAttribute<msdyn_wallsavedquery_Select, { msdyn_otc: number | null }, {  }>;
  msdyn_postconfigurationid_guid: WebAttribute<msdyn_wallsavedquery_Select, { msdyn_postconfigurationid_guid: string | null }, { msdyn_postconfigurationid_formatted?: string }>;
  msdyn_savedqueryid: WebAttribute<msdyn_wallsavedquery_Select, { msdyn_savedqueryid: string | null }, {  }>;
  msdyn_savedqueryname: WebAttribute<msdyn_wallsavedquery_Select, { msdyn_savedqueryname: string | null }, {  }>;
  msdyn_wallsavedqueryid: WebAttribute<msdyn_wallsavedquery_Select, { msdyn_wallsavedqueryid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_wallsavedquery_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_wallsavedquery_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_wallsavedquery_Select, { statecode: msdyn_wallsavedquery_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_wallsavedquery_Select, { statuscode: msdyn_wallsavedquery_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_wallsavedquery_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_wallsavedquery_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_wallsavedquery_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_wallsavedquery_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_entitydisplayname: string;
  msdyn_entityname: string;
  msdyn_isvirtual: boolean;
  msdyn_isvisible: boolean;
  msdyn_isvisiblebit: number;
  msdyn_otc: number;
  msdyn_postconfigurationid_guid: XQW.Guid;
  msdyn_savedqueryid: string;
  msdyn_savedqueryname: string;
  msdyn_wallsavedqueryid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_wallsavedquery_statecode;
  statuscode: msdyn_wallsavedquery_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_wallsavedquery_Expand {
  createdby: WebExpand<msdyn_wallsavedquery_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_wallsavedquery_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_wallsavedquery_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_wallsavedquery_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_postconfigurationid: WebExpand<msdyn_wallsavedquery_Expand, msdyn_PostConfig_Select, msdyn_PostConfig_Filter, { msdyn_postconfigurationid: msdyn_PostConfig_Result }>;
  msdyn_wallsavedquery_AsyncOperations: WebExpand<msdyn_wallsavedquery_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_wallsavedquery_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_wallsavedquery_BulkDeleteFailures: WebExpand<msdyn_wallsavedquery_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_wallsavedquery_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_wallsavedquery_MailboxTrackingFolders: WebExpand<msdyn_wallsavedquery_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_wallsavedquery_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_wallsavedquery_PrincipalObjectAttributeAccesses: WebExpand<msdyn_wallsavedquery_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_wallsavedquery_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_wallsavedquery_ProcessSession: WebExpand<msdyn_wallsavedquery_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_wallsavedquery_ProcessSession: ProcessSession_Result[] }>;
  msdyn_wallsavedquery_SyncErrors: WebExpand<msdyn_wallsavedquery_Expand, SyncError_Select, SyncError_Filter, { msdyn_wallsavedquery_SyncErrors: SyncError_Result[] }>;
  msdyn_wallsavedquery_UserEntityInstanceDatas: WebExpand<msdyn_wallsavedquery_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_wallsavedquery_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_wallsavedquery_wallsavedqueryusersettings: WebExpand<msdyn_wallsavedquery_Expand, msdyn_wallsavedqueryusersettings_Select, msdyn_wallsavedqueryusersettings_Filter, { msdyn_wallsavedquery_wallsavedqueryusersettings: msdyn_wallsavedqueryusersettings_Result[] }>;
  organizationid: WebExpand<msdyn_wallsavedquery_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_wallsavedquery_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_postconfigurationid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_wallsavedquery_Result extends msdyn_wallsavedquery_Base, msdyn_wallsavedquery_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_postconfigurationid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_wallsavedquery_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_postconfigurationid: WebMappingRetrieve<msdyn_PostConfig_Select,msdyn_PostConfig_Expand,msdyn_PostConfig_Filter,msdyn_PostConfig_Fixed,msdyn_PostConfig_Result,msdyn_PostConfig_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_wallsavedquery_RelatedMany {
  msdyn_wallsavedquery_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_wallsavedquery_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_wallsavedquery_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_wallsavedquery_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_wallsavedquery_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_wallsavedquery_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_wallsavedquery_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_wallsavedquery_wallsavedqueryusersettings: WebMappingRetrieve<msdyn_wallsavedqueryusersettings_Select,msdyn_wallsavedqueryusersettings_Expand,msdyn_wallsavedqueryusersettings_Filter,msdyn_wallsavedqueryusersettings_Fixed,msdyn_wallsavedqueryusersettings_Result,msdyn_wallsavedqueryusersettings_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_wallsavedqueries: WebMappingRetrieve<msdyn_wallsavedquery_Select,msdyn_wallsavedquery_Expand,msdyn_wallsavedquery_Filter,msdyn_wallsavedquery_Fixed,msdyn_wallsavedquery_Result,msdyn_wallsavedquery_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_wallsavedqueries: WebMappingRelated<msdyn_wallsavedquery_RelatedOne,msdyn_wallsavedquery_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_wallsavedqueries: WebMappingCUDA<msdyn_wallsavedquery_Create,msdyn_wallsavedquery_Update,msdyn_wallsavedquery_Select>;
}
