interface msdyn_suggestionsmodelsummary_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_caseprocesseddatetime?: Date | null;
  msdyn_caserecordsproccessed?: number | null;
  msdyn_caseretraineddatetime?: Date | null;
  msdyn_iscasetrainingsucceeded?: boolean | null;
  msdyn_iskbtrainingsucceeded?: boolean | null;
  msdyn_kbarticlesprocessed?: number | null;
  msdyn_kbprocesseddatetime?: Date | null;
  msdyn_kbretraineddatetime?: Date | null;
  msdyn_name?: string | null;
  msdyn_suggestionsmodelsummaryid?: string | null;
  msdyn_traineddatetime?: Date | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_suggestionsmodelsummary_statecode | null;
  statuscode?: msdyn_suggestionsmodelsummary_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_suggestionsmodelsummary_Relationships {
  msdyn_suggestionsmodelsummary_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_suggestionsmodelsummary_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_suggestionsmodelsummary_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_suggestionsmodelsummary_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_suggestionsmodelsummary_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_suggestionsmodelsummary_SyncErrors?: SyncError_Result[] | null;
  msdyn_suggestionsmodelsummary_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_suggestionsmodelsummary extends msdyn_suggestionsmodelsummary_Base, msdyn_suggestionsmodelsummary_Relationships {
}
interface msdyn_suggestionsmodelsummary_Create extends msdyn_suggestionsmodelsummary {
}
interface msdyn_suggestionsmodelsummary_Update extends msdyn_suggestionsmodelsummary {
}
interface msdyn_suggestionsmodelsummary_Select {
  componentidunique: WebAttribute<msdyn_suggestionsmodelsummary_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_suggestionsmodelsummary_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_suggestionsmodelsummary_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_suggestionsmodelsummary_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_suggestionsmodelsummary_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_suggestionsmodelsummary_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_suggestionsmodelsummary_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_suggestionsmodelsummary_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_suggestionsmodelsummary_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_suggestionsmodelsummary_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_suggestionsmodelsummary_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_caseprocesseddatetime: WebAttribute<msdyn_suggestionsmodelsummary_Select, { msdyn_caseprocesseddatetime: Date | null }, { msdyn_caseprocesseddatetime_formatted?: string }>;
  msdyn_caserecordsproccessed: WebAttribute<msdyn_suggestionsmodelsummary_Select, { msdyn_caserecordsproccessed: number | null }, {  }>;
  msdyn_caseretraineddatetime: WebAttribute<msdyn_suggestionsmodelsummary_Select, { msdyn_caseretraineddatetime: Date | null }, { msdyn_caseretraineddatetime_formatted?: string }>;
  msdyn_iscasetrainingsucceeded: WebAttribute<msdyn_suggestionsmodelsummary_Select, { msdyn_iscasetrainingsucceeded: boolean | null }, {  }>;
  msdyn_iskbtrainingsucceeded: WebAttribute<msdyn_suggestionsmodelsummary_Select, { msdyn_iskbtrainingsucceeded: boolean | null }, {  }>;
  msdyn_kbarticlesprocessed: WebAttribute<msdyn_suggestionsmodelsummary_Select, { msdyn_kbarticlesprocessed: number | null }, {  }>;
  msdyn_kbprocesseddatetime: WebAttribute<msdyn_suggestionsmodelsummary_Select, { msdyn_kbprocesseddatetime: Date | null }, { msdyn_kbprocesseddatetime_formatted?: string }>;
  msdyn_kbretraineddatetime: WebAttribute<msdyn_suggestionsmodelsummary_Select, { msdyn_kbretraineddatetime: Date | null }, { msdyn_kbretraineddatetime_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_suggestionsmodelsummary_Select, { msdyn_name: string | null }, {  }>;
  msdyn_suggestionsmodelsummaryid: WebAttribute<msdyn_suggestionsmodelsummary_Select, { msdyn_suggestionsmodelsummaryid: string | null }, {  }>;
  msdyn_traineddatetime: WebAttribute<msdyn_suggestionsmodelsummary_Select, { msdyn_traineddatetime: Date | null }, { msdyn_traineddatetime_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_suggestionsmodelsummary_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_suggestionsmodelsummary_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_suggestionsmodelsummary_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_suggestionsmodelsummary_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_suggestionsmodelsummary_Select, { statecode: msdyn_suggestionsmodelsummary_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_suggestionsmodelsummary_Select, { statuscode: msdyn_suggestionsmodelsummary_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_suggestionsmodelsummary_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_suggestionsmodelsummary_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_suggestionsmodelsummary_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_suggestionsmodelsummary_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_suggestionsmodelsummary_Filter {
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
  msdyn_caseprocesseddatetime: Date;
  msdyn_caserecordsproccessed: number;
  msdyn_caseretraineddatetime: Date;
  msdyn_iscasetrainingsucceeded: boolean;
  msdyn_iskbtrainingsucceeded: boolean;
  msdyn_kbarticlesprocessed: number;
  msdyn_kbprocesseddatetime: Date;
  msdyn_kbretraineddatetime: Date;
  msdyn_name: string;
  msdyn_suggestionsmodelsummaryid: XQW.Guid;
  msdyn_traineddatetime: Date;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_suggestionsmodelsummary_statecode;
  statuscode: msdyn_suggestionsmodelsummary_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_suggestionsmodelsummary_Expand {
  createdby: WebExpand<msdyn_suggestionsmodelsummary_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_suggestionsmodelsummary_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_suggestionsmodelsummary_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_suggestionsmodelsummary_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_suggestionsmodelsummary_AsyncOperations: WebExpand<msdyn_suggestionsmodelsummary_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_suggestionsmodelsummary_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_suggestionsmodelsummary_BulkDeleteFailures: WebExpand<msdyn_suggestionsmodelsummary_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_suggestionsmodelsummary_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_suggestionsmodelsummary_MailboxTrackingFolders: WebExpand<msdyn_suggestionsmodelsummary_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_suggestionsmodelsummary_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_suggestionsmodelsummary_PrincipalObjectAttributeAccesses: WebExpand<msdyn_suggestionsmodelsummary_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_suggestionsmodelsummary_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_suggestionsmodelsummary_ProcessSession: WebExpand<msdyn_suggestionsmodelsummary_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_suggestionsmodelsummary_ProcessSession: ProcessSession_Result[] }>;
  msdyn_suggestionsmodelsummary_SyncErrors: WebExpand<msdyn_suggestionsmodelsummary_Expand, SyncError_Select, SyncError_Filter, { msdyn_suggestionsmodelsummary_SyncErrors: SyncError_Result[] }>;
  msdyn_suggestionsmodelsummary_UserEntityInstanceDatas: WebExpand<msdyn_suggestionsmodelsummary_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_suggestionsmodelsummary_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_suggestionsmodelsummary_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_suggestionsmodelsummary_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_caseprocesseddatetime_formatted?: string;
  msdyn_caseretraineddatetime_formatted?: string;
  msdyn_kbprocesseddatetime_formatted?: string;
  msdyn_kbretraineddatetime_formatted?: string;
  msdyn_traineddatetime_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_suggestionsmodelsummary_Result extends msdyn_suggestionsmodelsummary_Base, msdyn_suggestionsmodelsummary_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_suggestionsmodelsummary_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_suggestionsmodelsummary_RelatedMany {
  msdyn_suggestionsmodelsummary_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_suggestionsmodelsummary_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_suggestionsmodelsummary_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_suggestionsmodelsummary_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_suggestionsmodelsummary_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_suggestionsmodelsummary_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_suggestionsmodelsummary_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_suggestionsmodelsummaries: WebMappingRetrieve<msdyn_suggestionsmodelsummary_Select,msdyn_suggestionsmodelsummary_Expand,msdyn_suggestionsmodelsummary_Filter,msdyn_suggestionsmodelsummary_Fixed,msdyn_suggestionsmodelsummary_Result,msdyn_suggestionsmodelsummary_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_suggestionsmodelsummaries: WebMappingRelated<msdyn_suggestionsmodelsummary_RelatedOne,msdyn_suggestionsmodelsummary_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_suggestionsmodelsummaries: WebMappingCUDA<msdyn_suggestionsmodelsummary_Create,msdyn_suggestionsmodelsummary_Update,msdyn_suggestionsmodelsummary_Select>;
}
