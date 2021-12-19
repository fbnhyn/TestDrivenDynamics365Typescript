interface msdyn_kbkeywordsdescsuggestionsetting_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_isenabled?: boolean | null;
  msdyn_kbcontentmapping?: string | null;
  msdyn_kbkeywordsdescsuggestionsettingid?: string | null;
  msdyn_kbtitlemapping?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_kbkeywordsdescsuggestionsetting_statecode | null;
  statuscode?: msdyn_kbkeywordsdescsuggestionsetting_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_kbkeywordsdescsuggestionsetting_Relationships {
  msdyn_kbkeywordsdescsuggestionsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_kbkeywordsdescsuggestionsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_kbkeywordsdescsuggestionsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_kbkeywordsdescsuggestionsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_kbkeywordsdescsuggestionsetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_kbkeywordsdescsuggestionsetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_kbkeywordsdescsuggestionsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_kbkeywordsdescsuggestionsetting extends msdyn_kbkeywordsdescsuggestionsetting_Base, msdyn_kbkeywordsdescsuggestionsetting_Relationships {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Create extends msdyn_kbkeywordsdescsuggestionsetting {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Update extends msdyn_kbkeywordsdescsuggestionsetting {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Select {
  componentidunique: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_isenabled: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { msdyn_isenabled: boolean | null }, {  }>;
  msdyn_kbcontentmapping: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { msdyn_kbcontentmapping: string | null }, {  }>;
  msdyn_kbkeywordsdescsuggestionsettingid: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { msdyn_kbkeywordsdescsuggestionsettingid: string | null }, {  }>;
  msdyn_kbtitlemapping: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { msdyn_kbtitlemapping: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { msdyn_name: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { statecode: msdyn_kbkeywordsdescsuggestionsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { statuscode: msdyn_kbkeywordsdescsuggestionsetting_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_kbkeywordsdescsuggestionsetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_kbkeywordsdescsuggestionsetting_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_isenabled: boolean;
  msdyn_kbcontentmapping: string;
  msdyn_kbkeywordsdescsuggestionsettingid: XQW.Guid;
  msdyn_kbtitlemapping: string;
  msdyn_name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_kbkeywordsdescsuggestionsetting_statecode;
  statuscode: msdyn_kbkeywordsdescsuggestionsetting_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_kbkeywordsdescsuggestionsetting_Expand {
  createdby: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_kbkeywordsdescsuggestionsetting_AsyncOperations: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_kbkeywordsdescsuggestionsetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_kbkeywordsdescsuggestionsetting_BulkDeleteFailures: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_kbkeywordsdescsuggestionsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_kbkeywordsdescsuggestionsetting_MailboxTrackingFolders: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_kbkeywordsdescsuggestionsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_kbkeywordsdescsuggestionsetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_kbkeywordsdescsuggestionsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_kbkeywordsdescsuggestionsetting_ProcessSession: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_kbkeywordsdescsuggestionsetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_kbkeywordsdescsuggestionsetting_SyncErrors: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_kbkeywordsdescsuggestionsetting_SyncErrors: SyncError_Result[] }>;
  msdyn_kbkeywordsdescsuggestionsetting_UserEntityInstanceDatas: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_kbkeywordsdescsuggestionsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_kbkeywordsdescsuggestionsetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_kbkeywordsdescsuggestionsetting_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_kbkeywordsdescsuggestionsetting_Result extends msdyn_kbkeywordsdescsuggestionsetting_Base, msdyn_kbkeywordsdescsuggestionsetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_kbkeywordsdescsuggestionsetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_kbkeywordsdescsuggestionsetting_RelatedMany {
  msdyn_kbkeywordsdescsuggestionsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_kbkeywordsdescsuggestionsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_kbkeywordsdescsuggestionsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_kbkeywordsdescsuggestionsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_kbkeywordsdescsuggestionsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_kbkeywordsdescsuggestionsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_kbkeywordsdescsuggestionsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_kbkeywordsdescsuggestionsettings: WebMappingRetrieve<msdyn_kbkeywordsdescsuggestionsetting_Select,msdyn_kbkeywordsdescsuggestionsetting_Expand,msdyn_kbkeywordsdescsuggestionsetting_Filter,msdyn_kbkeywordsdescsuggestionsetting_Fixed,msdyn_kbkeywordsdescsuggestionsetting_Result,msdyn_kbkeywordsdescsuggestionsetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_kbkeywordsdescsuggestionsettings: WebMappingRelated<msdyn_kbkeywordsdescsuggestionsetting_RelatedOne,msdyn_kbkeywordsdescsuggestionsetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_kbkeywordsdescsuggestionsettings: WebMappingCUDA<msdyn_kbkeywordsdescsuggestionsetting_Create,msdyn_kbkeywordsdescsuggestionsetting_Update,msdyn_kbkeywordsdescsuggestionsetting_Select>;
}
