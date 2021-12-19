interface msdyn_suggestionssetting_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_casedetailmapping?: string | null;
  msdyn_casedetailmodelmapping?: string | null;
  msdyn_caseisenabled?: boolean | null;
  msdyn_casetitlemapping?: string | null;
  msdyn_casetitlemodelmapping?: string | null;
  msdyn_kbcontentmapping?: string | null;
  msdyn_kbcontentmodelmapping?: string | null;
  msdyn_kbisenabled?: boolean | null;
  msdyn_kbtitlemapping?: string | null;
  msdyn_kbtitlemodelmapping?: string | null;
  msdyn_name?: string | null;
  msdyn_suggestionssettingid?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_suggestionssetting_statecode | null;
  statuscode?: msdyn_suggestionssetting_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_suggestionssetting_Relationships {
  msdyn_suggestionssetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_suggestionssetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_suggestionssetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_suggestionssetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_suggestionssetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_suggestionssetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_suggestionssetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_suggestionssetting extends msdyn_suggestionssetting_Base, msdyn_suggestionssetting_Relationships {
}
interface msdyn_suggestionssetting_Create extends msdyn_suggestionssetting {
}
interface msdyn_suggestionssetting_Update extends msdyn_suggestionssetting {
}
interface msdyn_suggestionssetting_Select {
  componentidunique: WebAttribute<msdyn_suggestionssetting_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_suggestionssetting_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_suggestionssetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_suggestionssetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_suggestionssetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_suggestionssetting_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_suggestionssetting_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_suggestionssetting_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_suggestionssetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_suggestionssetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_suggestionssetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_casedetailmapping: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_casedetailmapping: string | null }, {  }>;
  msdyn_casedetailmodelmapping: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_casedetailmodelmapping: string | null }, {  }>;
  msdyn_caseisenabled: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_caseisenabled: boolean | null }, {  }>;
  msdyn_casetitlemapping: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_casetitlemapping: string | null }, {  }>;
  msdyn_casetitlemodelmapping: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_casetitlemodelmapping: string | null }, {  }>;
  msdyn_kbcontentmapping: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_kbcontentmapping: string | null }, {  }>;
  msdyn_kbcontentmodelmapping: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_kbcontentmodelmapping: string | null }, {  }>;
  msdyn_kbisenabled: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_kbisenabled: boolean | null }, {  }>;
  msdyn_kbtitlemapping: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_kbtitlemapping: string | null }, {  }>;
  msdyn_kbtitlemodelmapping: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_kbtitlemodelmapping: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_suggestionssettingid: WebAttribute<msdyn_suggestionssetting_Select, { msdyn_suggestionssettingid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_suggestionssetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_suggestionssetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_suggestionssetting_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_suggestionssetting_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_suggestionssetting_Select, { statecode: msdyn_suggestionssetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_suggestionssetting_Select, { statuscode: msdyn_suggestionssetting_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_suggestionssetting_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_suggestionssetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_suggestionssetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_suggestionssetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_suggestionssetting_Filter {
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
  msdyn_casedetailmapping: string;
  msdyn_casedetailmodelmapping: string;
  msdyn_caseisenabled: boolean;
  msdyn_casetitlemapping: string;
  msdyn_casetitlemodelmapping: string;
  msdyn_kbcontentmapping: string;
  msdyn_kbcontentmodelmapping: string;
  msdyn_kbisenabled: boolean;
  msdyn_kbtitlemapping: string;
  msdyn_kbtitlemodelmapping: string;
  msdyn_name: string;
  msdyn_suggestionssettingid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_suggestionssetting_statecode;
  statuscode: msdyn_suggestionssetting_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_suggestionssetting_Expand {
  createdby: WebExpand<msdyn_suggestionssetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_suggestionssetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_suggestionssetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_suggestionssetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_suggestionssetting_AsyncOperations: WebExpand<msdyn_suggestionssetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_suggestionssetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_suggestionssetting_BulkDeleteFailures: WebExpand<msdyn_suggestionssetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_suggestionssetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_suggestionssetting_MailboxTrackingFolders: WebExpand<msdyn_suggestionssetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_suggestionssetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_suggestionssetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_suggestionssetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_suggestionssetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_suggestionssetting_ProcessSession: WebExpand<msdyn_suggestionssetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_suggestionssetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_suggestionssetting_SyncErrors: WebExpand<msdyn_suggestionssetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_suggestionssetting_SyncErrors: SyncError_Result[] }>;
  msdyn_suggestionssetting_UserEntityInstanceDatas: WebExpand<msdyn_suggestionssetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_suggestionssetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_suggestionssetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_suggestionssetting_FormattedResult {
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
interface msdyn_suggestionssetting_Result extends msdyn_suggestionssetting_Base, msdyn_suggestionssetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_suggestionssetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_suggestionssetting_RelatedMany {
  msdyn_suggestionssetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_suggestionssetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_suggestionssetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_suggestionssetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_suggestionssetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_suggestionssetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_suggestionssetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_suggestionssettings: WebMappingRetrieve<msdyn_suggestionssetting_Select,msdyn_suggestionssetting_Expand,msdyn_suggestionssetting_Filter,msdyn_suggestionssetting_Fixed,msdyn_suggestionssetting_Result,msdyn_suggestionssetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_suggestionssettings: WebMappingRelated<msdyn_suggestionssetting_RelatedOne,msdyn_suggestionssetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_suggestionssettings: WebMappingCUDA<msdyn_suggestionssetting_Create,msdyn_suggestionssetting_Update,msdyn_suggestionssetting_Select>;
}
