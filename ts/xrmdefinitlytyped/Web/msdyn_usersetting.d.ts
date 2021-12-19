interface msdyn_usersetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_personalsoundenabled?: boolean | null;
  msdyn_soundformcontrol?: string | null;
  msdyn_usersettingid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_usersetting_statecode | null;
  statuscode?: msdyn_usersetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_usersetting_Relationships {
  msdyn_usersetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_usersetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_usersetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_usersetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_usersetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_usersetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_usersetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_usersetting extends msdyn_usersetting_Base, msdyn_usersetting_Relationships {
}
interface msdyn_usersetting_Create extends msdyn_usersetting {
}
interface msdyn_usersetting_Update extends msdyn_usersetting {
}
interface msdyn_usersetting_Select {
  createdby_guid: WebAttribute<msdyn_usersetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_usersetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_usersetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_usersetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_usersetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_usersetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_usersetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_usersetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_personalsoundenabled: WebAttribute<msdyn_usersetting_Select, { msdyn_personalsoundenabled: boolean | null }, {  }>;
  msdyn_soundformcontrol: WebAttribute<msdyn_usersetting_Select, { msdyn_soundformcontrol: string | null }, {  }>;
  msdyn_usersettingid: WebAttribute<msdyn_usersetting_Select, { msdyn_usersettingid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_usersetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_usersetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_usersetting_Select, { statecode: msdyn_usersetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_usersetting_Select, { statuscode: msdyn_usersetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_usersetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_usersetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_usersetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_usersetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_personalsoundenabled: boolean;
  msdyn_soundformcontrol: string;
  msdyn_usersettingid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_usersetting_statecode;
  statuscode: msdyn_usersetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_usersetting_Expand {
  createdby: WebExpand<msdyn_usersetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_usersetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_usersetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_usersetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_usersetting_AsyncOperations: WebExpand<msdyn_usersetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_usersetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_usersetting_BulkDeleteFailures: WebExpand<msdyn_usersetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_usersetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_usersetting_MailboxTrackingFolders: WebExpand<msdyn_usersetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_usersetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_usersetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_usersetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_usersetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_usersetting_ProcessSession: WebExpand<msdyn_usersetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_usersetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_usersetting_SyncErrors: WebExpand<msdyn_usersetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_usersetting_SyncErrors: SyncError_Result[] }>;
  msdyn_usersetting_UserEntityInstanceDatas: WebExpand<msdyn_usersetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_usersetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_usersetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_usersetting_FormattedResult {
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
interface msdyn_usersetting_Result extends msdyn_usersetting_Base, msdyn_usersetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_usersetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_usersetting_RelatedMany {
  msdyn_usersetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_usersetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_usersetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_usersetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_usersetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_usersetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_usersetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_usersettings: WebMappingRetrieve<msdyn_usersetting_Select,msdyn_usersetting_Expand,msdyn_usersetting_Filter,msdyn_usersetting_Fixed,msdyn_usersetting_Result,msdyn_usersetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_usersettings: WebMappingRelated<msdyn_usersetting_RelatedOne,msdyn_usersetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_usersettings: WebMappingCUDA<msdyn_usersetting_Create,msdyn_usersetting_Update,msdyn_usersetting_Select>;
}
