interface msdyn_conversationtopicsummary_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_conversationcount?: number | null;
  msdyn_conversationcoveragepercentage?: number | null;
  msdyn_conversationtopicsummaryid?: string | null;
  msdyn_name?: string | null;
  msdyn_refreshtime?: Date | null;
  msdyn_topiccount?: number | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_conversationtopicsummary_statecode | null;
  statuscode?: msdyn_conversationtopicsummary_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_conversationtopicsummary_Relationships {
  msdyn_conversationtopicsummary_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_conversationtopicsummary_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_conversationtopicsummary_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_conversationtopicsummary_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_conversationtopicsummary_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_conversationtopicsummary_SyncErrors?: SyncError_Result[] | null;
  msdyn_conversationtopicsummary_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_conversationtopicsummary extends msdyn_conversationtopicsummary_Base, msdyn_conversationtopicsummary_Relationships {
}
interface msdyn_conversationtopicsummary_Create extends msdyn_conversationtopicsummary {
}
interface msdyn_conversationtopicsummary_Update extends msdyn_conversationtopicsummary {
}
interface msdyn_conversationtopicsummary_Select {
  componentidunique: WebAttribute<msdyn_conversationtopicsummary_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_conversationtopicsummary_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_conversationtopicsummary_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_conversationtopicsummary_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_conversationtopicsummary_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_conversationtopicsummary_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_conversationtopicsummary_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_conversationtopicsummary_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_conversationtopicsummary_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_conversationtopicsummary_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_conversationtopicsummary_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_conversationcount: WebAttribute<msdyn_conversationtopicsummary_Select, { msdyn_conversationcount: number | null }, {  }>;
  msdyn_conversationcoveragepercentage: WebAttribute<msdyn_conversationtopicsummary_Select, { msdyn_conversationcoveragepercentage: number | null }, {  }>;
  msdyn_conversationtopicsummaryid: WebAttribute<msdyn_conversationtopicsummary_Select, { msdyn_conversationtopicsummaryid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_conversationtopicsummary_Select, { msdyn_name: string | null }, {  }>;
  msdyn_refreshtime: WebAttribute<msdyn_conversationtopicsummary_Select, { msdyn_refreshtime: Date | null }, { msdyn_refreshtime_formatted?: string }>;
  msdyn_topiccount: WebAttribute<msdyn_conversationtopicsummary_Select, { msdyn_topiccount: number | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_conversationtopicsummary_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_conversationtopicsummary_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_conversationtopicsummary_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_conversationtopicsummary_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_conversationtopicsummary_Select, { statecode: msdyn_conversationtopicsummary_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_conversationtopicsummary_Select, { statuscode: msdyn_conversationtopicsummary_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_conversationtopicsummary_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_conversationtopicsummary_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_conversationtopicsummary_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_conversationtopicsummary_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_conversationtopicsummary_Filter {
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
  msdyn_conversationcount: number;
  msdyn_conversationcoveragepercentage: any;
  msdyn_conversationtopicsummaryid: XQW.Guid;
  msdyn_name: string;
  msdyn_refreshtime: Date;
  msdyn_topiccount: number;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_conversationtopicsummary_statecode;
  statuscode: msdyn_conversationtopicsummary_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_conversationtopicsummary_Expand {
  createdby: WebExpand<msdyn_conversationtopicsummary_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_conversationtopicsummary_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_conversationtopicsummary_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_conversationtopicsummary_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_conversationtopicsummary_AsyncOperations: WebExpand<msdyn_conversationtopicsummary_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_conversationtopicsummary_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_conversationtopicsummary_BulkDeleteFailures: WebExpand<msdyn_conversationtopicsummary_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_conversationtopicsummary_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_conversationtopicsummary_MailboxTrackingFolders: WebExpand<msdyn_conversationtopicsummary_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_conversationtopicsummary_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_conversationtopicsummary_PrincipalObjectAttributeAccesses: WebExpand<msdyn_conversationtopicsummary_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_conversationtopicsummary_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_conversationtopicsummary_ProcessSession: WebExpand<msdyn_conversationtopicsummary_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_conversationtopicsummary_ProcessSession: ProcessSession_Result[] }>;
  msdyn_conversationtopicsummary_SyncErrors: WebExpand<msdyn_conversationtopicsummary_Expand, SyncError_Select, SyncError_Filter, { msdyn_conversationtopicsummary_SyncErrors: SyncError_Result[] }>;
  msdyn_conversationtopicsummary_UserEntityInstanceDatas: WebExpand<msdyn_conversationtopicsummary_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_conversationtopicsummary_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_conversationtopicsummary_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_conversationtopicsummary_FormattedResult {
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
interface msdyn_conversationtopicsummary_Result extends msdyn_conversationtopicsummary_Base, msdyn_conversationtopicsummary_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_conversationtopicsummary_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_conversationtopicsummary_RelatedMany {
  msdyn_conversationtopicsummary_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_conversationtopicsummary_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_conversationtopicsummary_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_conversationtopicsummary_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_conversationtopicsummary_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_conversationtopicsummary_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_conversationtopicsummary_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_conversationtopicsummaries: WebMappingRetrieve<msdyn_conversationtopicsummary_Select,msdyn_conversationtopicsummary_Expand,msdyn_conversationtopicsummary_Filter,msdyn_conversationtopicsummary_Fixed,msdyn_conversationtopicsummary_Result,msdyn_conversationtopicsummary_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_conversationtopicsummaries: WebMappingRelated<msdyn_conversationtopicsummary_RelatedOne,msdyn_conversationtopicsummary_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_conversationtopicsummaries: WebMappingCUDA<msdyn_conversationtopicsummary_Create,msdyn_conversationtopicsummary_Update,msdyn_conversationtopicsummary_Select>;
}
