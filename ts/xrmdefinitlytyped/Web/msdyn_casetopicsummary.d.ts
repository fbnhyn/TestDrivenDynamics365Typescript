interface msdyn_casetopicsummary_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_casecount?: number | null;
  msdyn_casecoveragepercentage?: number | null;
  msdyn_casetopicsummaryid?: string | null;
  msdyn_name?: string | null;
  msdyn_refreshtime?: Date | null;
  msdyn_topiccount?: number | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_casetopicsummary_statecode | null;
  statuscode?: msdyn_casetopicsummary_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_casetopicsummary_Relationships {
  msdyn_casetopicsummary_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_casetopicsummary_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_casetopicsummary_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_casetopicsummary_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_casetopicsummary_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_casetopicsummary_SyncErrors?: SyncError_Result[] | null;
  msdyn_casetopicsummary_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_casetopicsummary extends msdyn_casetopicsummary_Base, msdyn_casetopicsummary_Relationships {
}
interface msdyn_casetopicsummary_Create extends msdyn_casetopicsummary {
}
interface msdyn_casetopicsummary_Update extends msdyn_casetopicsummary {
}
interface msdyn_casetopicsummary_Select {
  componentidunique: WebAttribute<msdyn_casetopicsummary_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_casetopicsummary_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_casetopicsummary_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_casetopicsummary_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_casetopicsummary_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_casetopicsummary_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_casetopicsummary_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_casetopicsummary_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_casetopicsummary_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_casetopicsummary_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_casetopicsummary_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_casecount: WebAttribute<msdyn_casetopicsummary_Select, { msdyn_casecount: number | null }, {  }>;
  msdyn_casecoveragepercentage: WebAttribute<msdyn_casetopicsummary_Select, { msdyn_casecoveragepercentage: number | null }, {  }>;
  msdyn_casetopicsummaryid: WebAttribute<msdyn_casetopicsummary_Select, { msdyn_casetopicsummaryid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_casetopicsummary_Select, { msdyn_name: string | null }, {  }>;
  msdyn_refreshtime: WebAttribute<msdyn_casetopicsummary_Select, { msdyn_refreshtime: Date | null }, { msdyn_refreshtime_formatted?: string }>;
  msdyn_topiccount: WebAttribute<msdyn_casetopicsummary_Select, { msdyn_topiccount: number | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_casetopicsummary_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_casetopicsummary_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_casetopicsummary_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_casetopicsummary_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_casetopicsummary_Select, { statecode: msdyn_casetopicsummary_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_casetopicsummary_Select, { statuscode: msdyn_casetopicsummary_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_casetopicsummary_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_casetopicsummary_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_casetopicsummary_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_casetopicsummary_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_casetopicsummary_Filter {
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
  msdyn_casecount: number;
  msdyn_casecoveragepercentage: any;
  msdyn_casetopicsummaryid: XQW.Guid;
  msdyn_name: string;
  msdyn_refreshtime: Date;
  msdyn_topiccount: number;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_casetopicsummary_statecode;
  statuscode: msdyn_casetopicsummary_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_casetopicsummary_Expand {
  createdby: WebExpand<msdyn_casetopicsummary_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_casetopicsummary_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_casetopicsummary_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_casetopicsummary_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_casetopicsummary_AsyncOperations: WebExpand<msdyn_casetopicsummary_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_casetopicsummary_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_casetopicsummary_BulkDeleteFailures: WebExpand<msdyn_casetopicsummary_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_casetopicsummary_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_casetopicsummary_MailboxTrackingFolders: WebExpand<msdyn_casetopicsummary_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_casetopicsummary_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_casetopicsummary_PrincipalObjectAttributeAccesses: WebExpand<msdyn_casetopicsummary_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_casetopicsummary_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_casetopicsummary_ProcessSession: WebExpand<msdyn_casetopicsummary_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_casetopicsummary_ProcessSession: ProcessSession_Result[] }>;
  msdyn_casetopicsummary_SyncErrors: WebExpand<msdyn_casetopicsummary_Expand, SyncError_Select, SyncError_Filter, { msdyn_casetopicsummary_SyncErrors: SyncError_Result[] }>;
  msdyn_casetopicsummary_UserEntityInstanceDatas: WebExpand<msdyn_casetopicsummary_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_casetopicsummary_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_casetopicsummary_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_casetopicsummary_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_refreshtime_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_casetopicsummary_Result extends msdyn_casetopicsummary_Base, msdyn_casetopicsummary_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_casetopicsummary_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_casetopicsummary_RelatedMany {
  msdyn_casetopicsummary_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_casetopicsummary_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_casetopicsummary_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_casetopicsummary_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_casetopicsummary_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_casetopicsummary_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_casetopicsummary_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_casetopicsummaries: WebMappingRetrieve<msdyn_casetopicsummary_Select,msdyn_casetopicsummary_Expand,msdyn_casetopicsummary_Filter,msdyn_casetopicsummary_Fixed,msdyn_casetopicsummary_Result,msdyn_casetopicsummary_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_casetopicsummaries: WebMappingRelated<msdyn_casetopicsummary_RelatedOne,msdyn_casetopicsummary_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_casetopicsummaries: WebMappingCUDA<msdyn_casetopicsummary_Create,msdyn_casetopicsummary_Update,msdyn_casetopicsummary_Select>;
}
