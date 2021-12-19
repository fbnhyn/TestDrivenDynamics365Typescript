interface msdyn_wallsavedqueryusersettings_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_data?: string | null;
  msdyn_default?: number | null;
  msdyn_entitydisplayname?: string | null;
  msdyn_entityname?: string | null;
  msdyn_includewallinresponse?: boolean | null;
  msdyn_isfollowing?: boolean | null;
  msdyn_isvirtual?: boolean | null;
  msdyn_isvisible?: boolean | null;
  msdyn_isvisiblebit?: number | null;
  msdyn_otc?: number | null;
  msdyn_savedqueryname?: string | null;
  msdyn_sortorder?: number | null;
  msdyn_type?: number | null;
  msdyn_wallsavedqueryusersettingsid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_wallsavedqueryusersettings_statecode | null;
  statuscode?: msdyn_wallsavedqueryusersettings_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_wallsavedqueryusersettings_Relationships {
  msdyn_wallsavedqueryusersettings_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_wallsavedqueryusersettings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_wallsavedqueryusersettings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_wallsavedqueryusersettings_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_wallsavedqueryusersettings_SyncErrors?: SyncError_Result[] | null;
  msdyn_wallsavedqueryusersettings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_wallsavedqueryusersettings extends msdyn_wallsavedqueryusersettings_Base, msdyn_wallsavedqueryusersettings_Relationships {
  msdyn_userid_bind$systemusers?: string | null;
  msdyn_wallsavedqueryid_bind$msdyn_wallsavedqueries?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_wallsavedqueryusersettings_Create extends msdyn_wallsavedqueryusersettings {
}
interface msdyn_wallsavedqueryusersettings_Update extends msdyn_wallsavedqueryusersettings {
}
interface msdyn_wallsavedqueryusersettings_Select {
  createdby_guid: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_data: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_data: string | null }, {  }>;
  msdyn_default: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_default: number | null }, {  }>;
  msdyn_entitydisplayname: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_entitydisplayname: string | null }, {  }>;
  msdyn_entityname: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_includewallinresponse: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_includewallinresponse: boolean | null }, {  }>;
  msdyn_isfollowing: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_isfollowing: boolean | null }, {  }>;
  msdyn_isvirtual: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_isvirtual: boolean | null }, {  }>;
  msdyn_isvisible: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_isvisible: boolean | null }, {  }>;
  msdyn_isvisiblebit: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_isvisiblebit: number | null }, {  }>;
  msdyn_otc: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_otc: number | null }, {  }>;
  msdyn_savedqueryname: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_savedqueryname: string | null }, {  }>;
  msdyn_sortorder: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_sortorder: number | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_type: number | null }, {  }>;
  msdyn_userid_guid: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_userid_guid: string | null }, { msdyn_userid_formatted?: string }>;
  msdyn_wallsavedqueryid_guid: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_wallsavedqueryid_guid: string | null }, { msdyn_wallsavedqueryid_formatted?: string }>;
  msdyn_wallsavedqueryusersettingsid: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { msdyn_wallsavedqueryusersettingsid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { statecode: msdyn_wallsavedqueryusersettings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { statuscode: msdyn_wallsavedqueryusersettings_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_wallsavedqueryusersettings_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_wallsavedqueryusersettings_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_data: string;
  msdyn_default: number;
  msdyn_entitydisplayname: string;
  msdyn_entityname: string;
  msdyn_includewallinresponse: boolean;
  msdyn_isfollowing: boolean;
  msdyn_isvirtual: boolean;
  msdyn_isvisible: boolean;
  msdyn_isvisiblebit: number;
  msdyn_otc: number;
  msdyn_savedqueryname: string;
  msdyn_sortorder: number;
  msdyn_type: number;
  msdyn_userid_guid: XQW.Guid;
  msdyn_wallsavedqueryid_guid: XQW.Guid;
  msdyn_wallsavedqueryusersettingsid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_wallsavedqueryusersettings_statecode;
  statuscode: msdyn_wallsavedqueryusersettings_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_wallsavedqueryusersettings_Expand {
  createdby: WebExpand<msdyn_wallsavedqueryusersettings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_wallsavedqueryusersettings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_wallsavedqueryusersettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_wallsavedqueryusersettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_userid: WebExpand<msdyn_wallsavedqueryusersettings_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_userid: SystemUser_Result }>;
  msdyn_wallsavedqueryid: WebExpand<msdyn_wallsavedqueryusersettings_Expand, msdyn_wallsavedquery_Select, msdyn_wallsavedquery_Filter, { msdyn_wallsavedqueryid: msdyn_wallsavedquery_Result }>;
  msdyn_wallsavedqueryusersettings_AsyncOperations: WebExpand<msdyn_wallsavedqueryusersettings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_wallsavedqueryusersettings_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_wallsavedqueryusersettings_BulkDeleteFailures: WebExpand<msdyn_wallsavedqueryusersettings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_wallsavedqueryusersettings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_wallsavedqueryusersettings_MailboxTrackingFolders: WebExpand<msdyn_wallsavedqueryusersettings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_wallsavedqueryusersettings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses: WebExpand<msdyn_wallsavedqueryusersettings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_wallsavedqueryusersettings_ProcessSession: WebExpand<msdyn_wallsavedqueryusersettings_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_wallsavedqueryusersettings_ProcessSession: ProcessSession_Result[] }>;
  msdyn_wallsavedqueryusersettings_SyncErrors: WebExpand<msdyn_wallsavedqueryusersettings_Expand, SyncError_Select, SyncError_Filter, { msdyn_wallsavedqueryusersettings_SyncErrors: SyncError_Result[] }>;
  msdyn_wallsavedqueryusersettings_UserEntityInstanceDatas: WebExpand<msdyn_wallsavedqueryusersettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_wallsavedqueryusersettings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_wallsavedqueryusersettings_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_wallsavedqueryusersettings_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_wallsavedqueryusersettings_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_wallsavedqueryusersettings_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_wallsavedqueryusersettings_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_userid_formatted?: string;
  msdyn_wallsavedqueryid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_wallsavedqueryusersettings_Result extends msdyn_wallsavedqueryusersettings_Base, msdyn_wallsavedqueryusersettings_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_userid_guid: string | null;
  msdyn_wallsavedqueryid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_wallsavedqueryusersettings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_userid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_wallsavedqueryid: WebMappingRetrieve<msdyn_wallsavedquery_Select,msdyn_wallsavedquery_Expand,msdyn_wallsavedquery_Filter,msdyn_wallsavedquery_Fixed,msdyn_wallsavedquery_Result,msdyn_wallsavedquery_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_wallsavedqueryusersettings_RelatedMany {
  msdyn_wallsavedqueryusersettings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_wallsavedqueryusersettings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_wallsavedqueryusersettings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_wallsavedqueryusersettings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_wallsavedqueryusersettings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_wallsavedqueryusersettings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_wallsavedqueryusersettings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_wallsavedqueryusersettingses: WebMappingRetrieve<msdyn_wallsavedqueryusersettings_Select,msdyn_wallsavedqueryusersettings_Expand,msdyn_wallsavedqueryusersettings_Filter,msdyn_wallsavedqueryusersettings_Fixed,msdyn_wallsavedqueryusersettings_Result,msdyn_wallsavedqueryusersettings_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_wallsavedqueryusersettingses: WebMappingRelated<msdyn_wallsavedqueryusersettings_RelatedOne,msdyn_wallsavedqueryusersettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_wallsavedqueryusersettingses: WebMappingCUDA<msdyn_wallsavedqueryusersettings_Create,msdyn_wallsavedqueryusersettings_Update,msdyn_wallsavedqueryusersettings_Select>;
}
