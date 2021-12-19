interface msdyn_quotelinescheduleofvalue_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_amount?: number | null;
  msdyn_amount_after_tax?: number | null;
  msdyn_amount_after_tax_base?: number | null;
  msdyn_amount_base?: number | null;
  msdyn_invoicedate?: Date | null;
  msdyn_invoicestatus?: msdyn_invoicestatus | null;
  msdyn_isdataimport?: boolean | null;
  msdyn_name?: string | null;
  msdyn_quoteline?: string | null;
  msdyn_quotelinescheduleofvalueid?: string | null;
  msdyn_tax?: number | null;
  msdyn_tax_base?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_quotelinescheduleofvalue_statecode | null;
  statuscode?: msdyn_quotelinescheduleofvalue_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_quotelinescheduleofvalue_Relationships {
  msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue?: msdyn_quotelineanalyticsbreakdown_Result[] | null;
  msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue?: msdyn_quotelineinvoiceschedule_Result[] | null;
  msdyn_quotelinescheduleofvalue_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_quotelinescheduleofvalue_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_quotelinescheduleofvalue_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelinescheduleofvalue_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_quotelinescheduleofvalue_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_quotelinescheduleofvalue_SyncErrors?: SyncError_Result[] | null;
  msdyn_quotelinescheduleofvalue_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_quotelinescheduleofvalue extends msdyn_quotelinescheduleofvalue_Base, msdyn_quotelinescheduleofvalue_Relationships {
  msdyn_projecttask_bind$msdyn_projecttasks?: string | null;
  msdyn_quotelineid_bind$quotedetails?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_quotelinescheduleofvalue_Create extends msdyn_quotelinescheduleofvalue {
}
interface msdyn_quotelinescheduleofvalue_Update extends msdyn_quotelinescheduleofvalue {
}
interface msdyn_quotelinescheduleofvalue_Select {
  createdby_guid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_amount: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_amount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_after_tax: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_amount_after_tax: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_after_tax_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_after_tax_base: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_amount_after_tax_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_after_tax_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_base: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_amount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_invoicedate: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_invoicedate: Date | null }, { msdyn_invoicedate_formatted?: string }>;
  msdyn_invoicestatus: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_invoicestatus: msdyn_invoicestatus | null }, { msdyn_invoicestatus_formatted?: string }>;
  msdyn_isdataimport: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_isdataimport: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_name: string | null }, {  }>;
  msdyn_projecttask_guid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_projecttask_guid: string | null }, { msdyn_projecttask_formatted?: string }>;
  msdyn_quoteline: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_quoteline: string | null }, {  }>;
  msdyn_quotelineid_guid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_quotelineid_guid: string | null }, { msdyn_quotelineid_formatted?: string }>;
  msdyn_quotelinescheduleofvalueid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_quotelinescheduleofvalueid: string | null }, {  }>;
  msdyn_tax: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_tax: number | null; transactioncurrencyid_guid: string | null }, { msdyn_tax_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_tax_base: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { msdyn_tax_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_tax_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { statecode: msdyn_quotelinescheduleofvalue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { statuscode: msdyn_quotelinescheduleofvalue_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_quotelinescheduleofvalue_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_quotelinescheduleofvalue_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_amount: number;
  msdyn_amount_after_tax: number;
  msdyn_amount_after_tax_base: number;
  msdyn_amount_base: number;
  msdyn_invoicedate: Date;
  msdyn_invoicestatus: msdyn_invoicestatus;
  msdyn_isdataimport: boolean;
  msdyn_name: string;
  msdyn_projecttask_guid: XQW.Guid;
  msdyn_quoteline: string;
  msdyn_quotelineid_guid: XQW.Guid;
  msdyn_quotelinescheduleofvalueid: XQW.Guid;
  msdyn_tax: number;
  msdyn_tax_base: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_quotelinescheduleofvalue_statecode;
  statuscode: msdyn_quotelinescheduleofvalue_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_quotelinescheduleofvalue_Expand {
  createdby: WebExpand<msdyn_quotelinescheduleofvalue_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_quotelinescheduleofvalue_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_quotelinescheduleofvalue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_quotelinescheduleofvalue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue: WebExpand<msdyn_quotelinescheduleofvalue_Expand, msdyn_quotelineanalyticsbreakdown_Select, msdyn_quotelineanalyticsbreakdown_Filter, { msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue: msdyn_quotelineanalyticsbreakdown_Result[] }>;
  msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue: WebExpand<msdyn_quotelinescheduleofvalue_Expand, msdyn_quotelineinvoiceschedule_Select, msdyn_quotelineinvoiceschedule_Filter, { msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue: msdyn_quotelineinvoiceschedule_Result[] }>;
  msdyn_projecttask: WebExpand<msdyn_quotelinescheduleofvalue_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_projecttask: msdyn_projecttask_Result }>;
  msdyn_quotelineid: WebExpand<msdyn_quotelinescheduleofvalue_Expand, QuoteDetail_Select, QuoteDetail_Filter, { msdyn_quotelineid: QuoteDetail_Result }>;
  msdyn_quotelinescheduleofvalue_AsyncOperations: WebExpand<msdyn_quotelinescheduleofvalue_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_quotelinescheduleofvalue_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_quotelinescheduleofvalue_BulkDeleteFailures: WebExpand<msdyn_quotelinescheduleofvalue_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_quotelinescheduleofvalue_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_quotelinescheduleofvalue_DuplicateBaseRecord: WebExpand<msdyn_quotelinescheduleofvalue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelinescheduleofvalue_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord: WebExpand<msdyn_quotelinescheduleofvalue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelinescheduleofvalue_MailboxTrackingFolders: WebExpand<msdyn_quotelinescheduleofvalue_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_quotelinescheduleofvalue_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses: WebExpand<msdyn_quotelinescheduleofvalue_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_quotelinescheduleofvalue_ProcessSession: WebExpand<msdyn_quotelinescheduleofvalue_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_quotelinescheduleofvalue_ProcessSession: ProcessSession_Result[] }>;
  msdyn_quotelinescheduleofvalue_SyncErrors: WebExpand<msdyn_quotelinescheduleofvalue_Expand, SyncError_Select, SyncError_Filter, { msdyn_quotelinescheduleofvalue_SyncErrors: SyncError_Result[] }>;
  msdyn_quotelinescheduleofvalue_UserEntityInstanceDatas: WebExpand<msdyn_quotelinescheduleofvalue_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_quotelinescheduleofvalue_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_quotelinescheduleofvalue_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_quotelinescheduleofvalue_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_quotelinescheduleofvalue_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_quotelinescheduleofvalue_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_quotelinescheduleofvalue_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_quotelinescheduleofvalue_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_amount_after_tax_base_formatted?: string;
  msdyn_amount_after_tax_formatted?: string;
  msdyn_amount_base_formatted?: string;
  msdyn_amount_formatted?: string;
  msdyn_invoicedate_formatted?: string;
  msdyn_invoicestatus_formatted?: string;
  msdyn_projecttask_formatted?: string;
  msdyn_quotelineid_formatted?: string;
  msdyn_tax_base_formatted?: string;
  msdyn_tax_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_quotelinescheduleofvalue_Result extends msdyn_quotelinescheduleofvalue_Base, msdyn_quotelinescheduleofvalue_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_projecttask_guid: string | null;
  msdyn_quotelineid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_quotelinescheduleofvalue_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_projecttask: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  msdyn_quotelineid: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_quotelinescheduleofvalue_RelatedMany {
  msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue: WebMappingRetrieve<msdyn_quotelineanalyticsbreakdown_Select,msdyn_quotelineanalyticsbreakdown_Expand,msdyn_quotelineanalyticsbreakdown_Filter,msdyn_quotelineanalyticsbreakdown_Fixed,msdyn_quotelineanalyticsbreakdown_Result,msdyn_quotelineanalyticsbreakdown_FormattedResult>;
  msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue: WebMappingRetrieve<msdyn_quotelineinvoiceschedule_Select,msdyn_quotelineinvoiceschedule_Expand,msdyn_quotelineinvoiceschedule_Filter,msdyn_quotelineinvoiceschedule_Fixed,msdyn_quotelineinvoiceschedule_Result,msdyn_quotelineinvoiceschedule_FormattedResult>;
  msdyn_quotelinescheduleofvalue_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_quotelinescheduleofvalue_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_quotelinescheduleofvalue_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelinescheduleofvalue_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_quotelinescheduleofvalue_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_quotelinescheduleofvalue_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_quotelinescheduleofvalue_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_quotelinescheduleofvalues: WebMappingRetrieve<msdyn_quotelinescheduleofvalue_Select,msdyn_quotelinescheduleofvalue_Expand,msdyn_quotelinescheduleofvalue_Filter,msdyn_quotelinescheduleofvalue_Fixed,msdyn_quotelinescheduleofvalue_Result,msdyn_quotelinescheduleofvalue_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_quotelinescheduleofvalues: WebMappingRelated<msdyn_quotelinescheduleofvalue_RelatedOne,msdyn_quotelinescheduleofvalue_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_quotelinescheduleofvalues: WebMappingCUDA<msdyn_quotelinescheduleofvalue_Create,msdyn_quotelinescheduleofvalue_Update,msdyn_quotelinescheduleofvalue_Select>;
}
