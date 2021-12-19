interface msdyn_sentimentanalysis_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_additionallanguagesenabled?: boolean | null;
  msdyn_agentthreshold?: msdyn_sentimentanalysis_msdyn_agentthreshold | null;
  msdyn_driversenabled?: boolean | null;
  msdyn_enabled?: boolean | null;
  msdyn_enableur?: boolean | null;
  msdyn_name?: string | null;
  msdyn_sentimentanalysisid?: string | null;
  msdyn_supervisorthreshold?: msdyn_sentimentanalysis_msdyn_supervisorthreshold | null;
  msdyn_supervisorthresholdalerttimeoutseconds?: number | null;
  msdyn_thresholdalertsenabled?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_sentimentanalysis_statecode | null;
  statuscode?: msdyn_sentimentanalysis_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_sentimentanalysis_Relationships {
  msdyn_sentimentanalysis_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_sentimentanalysis_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_sentimentanalysis_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_sentimentanalysis_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_sentimentanalysis_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_sentimentanalysis_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_sentimentanalysis_SyncErrors?: SyncError_Result[] | null;
  msdyn_sentimentanalysis_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_sentimentanalysis extends msdyn_sentimentanalysis_Base, msdyn_sentimentanalysis_Relationships {
}
interface msdyn_sentimentanalysis_Create extends msdyn_sentimentanalysis {
}
interface msdyn_sentimentanalysis_Update extends msdyn_sentimentanalysis {
}
interface msdyn_sentimentanalysis_Select {
  createdby_guid: WebAttribute<msdyn_sentimentanalysis_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_sentimentanalysis_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_sentimentanalysis_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_sentimentanalysis_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_sentimentanalysis_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_sentimentanalysis_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_sentimentanalysis_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_additionallanguagesenabled: WebAttribute<msdyn_sentimentanalysis_Select, { msdyn_additionallanguagesenabled: boolean | null }, {  }>;
  msdyn_agentthreshold: WebAttribute<msdyn_sentimentanalysis_Select, { msdyn_agentthreshold: msdyn_sentimentanalysis_msdyn_agentthreshold | null }, { msdyn_agentthreshold_formatted?: string }>;
  msdyn_driversenabled: WebAttribute<msdyn_sentimentanalysis_Select, { msdyn_driversenabled: boolean | null }, {  }>;
  msdyn_enabled: WebAttribute<msdyn_sentimentanalysis_Select, { msdyn_enabled: boolean | null }, {  }>;
  msdyn_enableur: WebAttribute<msdyn_sentimentanalysis_Select, { msdyn_enableur: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_sentimentanalysis_Select, { msdyn_name: string | null }, {  }>;
  msdyn_sentimentanalysisid: WebAttribute<msdyn_sentimentanalysis_Select, { msdyn_sentimentanalysisid: string | null }, {  }>;
  msdyn_supervisorthreshold: WebAttribute<msdyn_sentimentanalysis_Select, { msdyn_supervisorthreshold: msdyn_sentimentanalysis_msdyn_supervisorthreshold | null }, { msdyn_supervisorthreshold_formatted?: string }>;
  msdyn_supervisorthresholdalerttimeoutseconds: WebAttribute<msdyn_sentimentanalysis_Select, { msdyn_supervisorthresholdalerttimeoutseconds: number | null }, {  }>;
  msdyn_thresholdalertsenabled: WebAttribute<msdyn_sentimentanalysis_Select, { msdyn_thresholdalertsenabled: boolean | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_sentimentanalysis_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_sentimentanalysis_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_sentimentanalysis_Select, { statecode: msdyn_sentimentanalysis_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_sentimentanalysis_Select, { statuscode: msdyn_sentimentanalysis_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_sentimentanalysis_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_sentimentanalysis_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_sentimentanalysis_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_sentimentanalysis_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_additionallanguagesenabled: boolean;
  msdyn_agentthreshold: msdyn_sentimentanalysis_msdyn_agentthreshold;
  msdyn_driversenabled: boolean;
  msdyn_enabled: boolean;
  msdyn_enableur: boolean;
  msdyn_name: string;
  msdyn_sentimentanalysisid: XQW.Guid;
  msdyn_supervisorthreshold: msdyn_sentimentanalysis_msdyn_supervisorthreshold;
  msdyn_supervisorthresholdalerttimeoutseconds: number;
  msdyn_thresholdalertsenabled: boolean;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_sentimentanalysis_statecode;
  statuscode: msdyn_sentimentanalysis_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_sentimentanalysis_Expand {
  createdby: WebExpand<msdyn_sentimentanalysis_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_sentimentanalysis_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_sentimentanalysis_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_sentimentanalysis_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_sentimentanalysis_AsyncOperations: WebExpand<msdyn_sentimentanalysis_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_sentimentanalysis_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_sentimentanalysis_BulkDeleteFailures: WebExpand<msdyn_sentimentanalysis_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_sentimentanalysis_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_sentimentanalysis_DuplicateBaseRecord: WebExpand<msdyn_sentimentanalysis_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sentimentanalysis_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_sentimentanalysis_DuplicateMatchingRecord: WebExpand<msdyn_sentimentanalysis_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sentimentanalysis_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_sentimentanalysis_MailboxTrackingFolders: WebExpand<msdyn_sentimentanalysis_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_sentimentanalysis_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses: WebExpand<msdyn_sentimentanalysis_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_sentimentanalysis_ProcessSession: WebExpand<msdyn_sentimentanalysis_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_sentimentanalysis_ProcessSession: ProcessSession_Result[] }>;
  msdyn_sentimentanalysis_SyncErrors: WebExpand<msdyn_sentimentanalysis_Expand, SyncError_Select, SyncError_Filter, { msdyn_sentimentanalysis_SyncErrors: SyncError_Result[] }>;
  msdyn_sentimentanalysis_UserEntityInstanceDatas: WebExpand<msdyn_sentimentanalysis_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_sentimentanalysis_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_sentimentanalysis_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_sentimentanalysis_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_agentthreshold_formatted?: string;
  msdyn_supervisorthreshold_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_sentimentanalysis_Result extends msdyn_sentimentanalysis_Base, msdyn_sentimentanalysis_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_sentimentanalysis_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_sentimentanalysis_RelatedMany {
  msdyn_sentimentanalysis_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_sentimentanalysis_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_sentimentanalysis_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sentimentanalysis_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sentimentanalysis_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_sentimentanalysis_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_sentimentanalysis_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_sentimentanalysis_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_sentimentanalysis_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sentimentanalysises: WebMappingRetrieve<msdyn_sentimentanalysis_Select,msdyn_sentimentanalysis_Expand,msdyn_sentimentanalysis_Filter,msdyn_sentimentanalysis_Fixed,msdyn_sentimentanalysis_Result,msdyn_sentimentanalysis_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sentimentanalysises: WebMappingRelated<msdyn_sentimentanalysis_RelatedOne,msdyn_sentimentanalysis_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sentimentanalysises: WebMappingCUDA<msdyn_sentimentanalysis_Create,msdyn_sentimentanalysis_Update,msdyn_sentimentanalysis_Select>;
}
