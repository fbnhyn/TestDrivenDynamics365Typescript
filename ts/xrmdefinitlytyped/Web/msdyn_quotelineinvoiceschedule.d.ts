interface msdyn_quotelineinvoiceschedule_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_invoicerundate?: Date | null;
  msdyn_name?: string | null;
  msdyn_quoteline?: string | null;
  msdyn_quotelineinvoicescheduleid?: string | null;
  msdyn_transactioncutoffdate?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_quotelineinvoiceschedule_statecode | null;
  statuscode?: msdyn_quotelineinvoiceschedule_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_quotelineinvoiceschedule_Relationships {
  msdyn_QuoteLineScheduleOfValue?: msdyn_quotelinescheduleofvalue_Result | null;
  msdyn_quotelineinvoiceschedule_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_quotelineinvoiceschedule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_quotelineinvoiceschedule_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelineinvoiceschedule_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_quotelineinvoiceschedule_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_quotelineinvoiceschedule_SyncErrors?: SyncError_Result[] | null;
  msdyn_quotelineinvoiceschedule_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_quotelineinvoiceschedule extends msdyn_quotelineinvoiceschedule_Base, msdyn_quotelineinvoiceschedule_Relationships {
  msdyn_QuoteLineScheduleOfValue_bind$msdyn_quotelinescheduleofvalues?: string | null;
  msdyn_quotelineid_bind$quotedetails?: string | null;
}
interface msdyn_quotelineinvoiceschedule_Create extends msdyn_quotelineinvoiceschedule {
}
interface msdyn_quotelineinvoiceschedule_Update extends msdyn_quotelineinvoiceschedule {
}
interface msdyn_quotelineinvoiceschedule_Select {
  createdby_guid: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_invoicerundate: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { msdyn_invoicerundate: Date | null }, { msdyn_invoicerundate_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { msdyn_name: string | null }, {  }>;
  msdyn_quoteline: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { msdyn_quoteline: string | null }, {  }>;
  msdyn_quotelineid_guid: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { msdyn_quotelineid_guid: string | null }, { msdyn_quotelineid_formatted?: string }>;
  msdyn_quotelineinvoicescheduleid: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { msdyn_quotelineinvoicescheduleid: string | null }, {  }>;
  msdyn_quotelinescheduleofvalue_guid: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { msdyn_quotelinescheduleofvalue_guid: string | null }, { msdyn_quotelinescheduleofvalue_formatted?: string }>;
  msdyn_transactioncutoffdate: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { msdyn_transactioncutoffdate: Date | null }, { msdyn_transactioncutoffdate_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { statecode: msdyn_quotelineinvoiceschedule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { statuscode: msdyn_quotelineinvoiceschedule_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_quotelineinvoiceschedule_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_quotelineinvoiceschedule_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_invoicerundate: Date;
  msdyn_name: string;
  msdyn_quoteline: string;
  msdyn_quotelineid_guid: XQW.Guid;
  msdyn_quotelineinvoicescheduleid: XQW.Guid;
  msdyn_quotelinescheduleofvalue_guid: XQW.Guid;
  msdyn_transactioncutoffdate: Date;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_quotelineinvoiceschedule_statecode;
  statuscode: msdyn_quotelineinvoiceschedule_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_quotelineinvoiceschedule_Expand {
  createdby: WebExpand<msdyn_quotelineinvoiceschedule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_quotelineinvoiceschedule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_quotelineinvoiceschedule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_quotelineinvoiceschedule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_QuoteLineScheduleOfValue: WebExpand<msdyn_quotelineinvoiceschedule_Expand, msdyn_quotelinescheduleofvalue_Select, msdyn_quotelinescheduleofvalue_Filter, { msdyn_QuoteLineScheduleOfValue: msdyn_quotelinescheduleofvalue_Result }>;
  msdyn_quotelineid: WebExpand<msdyn_quotelineinvoiceschedule_Expand, QuoteDetail_Select, QuoteDetail_Filter, { msdyn_quotelineid: QuoteDetail_Result }>;
  msdyn_quotelineinvoiceschedule_AsyncOperations: WebExpand<msdyn_quotelineinvoiceschedule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_quotelineinvoiceschedule_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_quotelineinvoiceschedule_BulkDeleteFailures: WebExpand<msdyn_quotelineinvoiceschedule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_quotelineinvoiceschedule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_quotelineinvoiceschedule_DuplicateBaseRecord: WebExpand<msdyn_quotelineinvoiceschedule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelineinvoiceschedule_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord: WebExpand<msdyn_quotelineinvoiceschedule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelineinvoiceschedule_MailboxTrackingFolders: WebExpand<msdyn_quotelineinvoiceschedule_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_quotelineinvoiceschedule_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses: WebExpand<msdyn_quotelineinvoiceschedule_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_quotelineinvoiceschedule_ProcessSession: WebExpand<msdyn_quotelineinvoiceschedule_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_quotelineinvoiceschedule_ProcessSession: ProcessSession_Result[] }>;
  msdyn_quotelineinvoiceschedule_SyncErrors: WebExpand<msdyn_quotelineinvoiceschedule_Expand, SyncError_Select, SyncError_Filter, { msdyn_quotelineinvoiceschedule_SyncErrors: SyncError_Result[] }>;
  msdyn_quotelineinvoiceschedule_UserEntityInstanceDatas: WebExpand<msdyn_quotelineinvoiceschedule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_quotelineinvoiceschedule_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_quotelineinvoiceschedule_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_quotelineinvoiceschedule_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_invoicerundate_formatted?: string;
  msdyn_quotelineid_formatted?: string;
  msdyn_quotelinescheduleofvalue_formatted?: string;
  msdyn_transactioncutoffdate_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_quotelineinvoiceschedule_Result extends msdyn_quotelineinvoiceschedule_Base, msdyn_quotelineinvoiceschedule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_quotelineid_guid: string | null;
  msdyn_quotelinescheduleofvalue_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_quotelineinvoiceschedule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_QuoteLineScheduleOfValue: WebMappingRetrieve<msdyn_quotelinescheduleofvalue_Select,msdyn_quotelinescheduleofvalue_Expand,msdyn_quotelinescheduleofvalue_Filter,msdyn_quotelinescheduleofvalue_Fixed,msdyn_quotelinescheduleofvalue_Result,msdyn_quotelinescheduleofvalue_FormattedResult>;
  msdyn_quotelineid: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_quotelineinvoiceschedule_RelatedMany {
  msdyn_quotelineinvoiceschedule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_quotelineinvoiceschedule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_quotelineinvoiceschedule_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelineinvoiceschedule_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_quotelineinvoiceschedule_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_quotelineinvoiceschedule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_quotelineinvoiceschedule_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_quotelineinvoiceschedules: WebMappingRetrieve<msdyn_quotelineinvoiceschedule_Select,msdyn_quotelineinvoiceschedule_Expand,msdyn_quotelineinvoiceschedule_Filter,msdyn_quotelineinvoiceschedule_Fixed,msdyn_quotelineinvoiceschedule_Result,msdyn_quotelineinvoiceschedule_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_quotelineinvoiceschedules: WebMappingRelated<msdyn_quotelineinvoiceschedule_RelatedOne,msdyn_quotelineinvoiceschedule_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_quotelineinvoiceschedules: WebMappingCUDA<msdyn_quotelineinvoiceschedule_Create,msdyn_quotelineinvoiceschedule_Update,msdyn_quotelineinvoiceschedule_Select>;
}
