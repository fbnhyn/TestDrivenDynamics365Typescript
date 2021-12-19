interface msdyn_quotelineanalyticsbreakdown_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_amount?: number | null;
  msdyn_amount_base?: number | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_enddatetime?: Date | null;
  msdyn_name?: string | null;
  msdyn_price?: number | null;
  msdyn_price_base?: number | null;
  msdyn_quotelineanalyticsbreakdownid?: string | null;
  msdyn_startdatetime?: Date | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  msdyn_transactiontypecode?: msdyn_transactiontypecode | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_quotelineanalyticsbreakdown_statecode | null;
  statuscode?: msdyn_quotelineanalyticsbreakdown_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_quotelineanalyticsbreakdown_Relationships {
  msdyn_Quote?: Quote_Result | null;
  msdyn_QuoteLineDetail?: msdyn_quotelinetransaction_Result | null;
  msdyn_QuoteLineScheduleOfValue?: msdyn_quotelinescheduleofvalue_Result | null;
  msdyn_ResourceCategory?: BookableResourceCategory_Result | null;
  msdyn_TransactionCategory?: msdyn_transactioncategory_Result | null;
  msdyn_quotelineanalyticsbreakdown_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_quotelineanalyticsbreakdown_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_quotelineanalyticsbreakdown_SyncErrors?: SyncError_Result[] | null;
  msdyn_quotelineanalyticsbreakdown_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_quotelineanalyticsbreakdown extends msdyn_quotelineanalyticsbreakdown_Base, msdyn_quotelineanalyticsbreakdown_Relationships {
  msdyn_QuoteLineDetail_bind$msdyn_quotelinetransactions?: string | null;
  msdyn_QuoteLineScheduleOfValue_bind$msdyn_quotelinescheduleofvalues?: string | null;
  msdyn_Quote_bind$quotes?: string | null;
  msdyn_ResourceCategory_bind$bookableresourcecategories?: string | null;
  msdyn_TransactionCategory_bind$msdyn_transactioncategories?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_quotelineanalyticsbreakdown_Create extends msdyn_quotelineanalyticsbreakdown {
}
interface msdyn_quotelineanalyticsbreakdown_Update extends msdyn_quotelineanalyticsbreakdown {
}
interface msdyn_quotelineanalyticsbreakdown_Select {
  createdby_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_amount: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_amount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_base: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_amount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_billingtype: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_enddatetime: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_enddatetime: Date | null }, { msdyn_enddatetime_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_name: string | null }, {  }>;
  msdyn_price: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_price: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_price_base: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_price_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_quote_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_quote_guid: string | null }, { msdyn_quote_formatted?: string }>;
  msdyn_quotelineanalyticsbreakdownid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_quotelineanalyticsbreakdownid: string | null }, {  }>;
  msdyn_quotelinedetail_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_quotelinedetail_guid: string | null }, { msdyn_quotelinedetail_formatted?: string }>;
  msdyn_quotelinescheduleofvalue_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_quotelinescheduleofvalue_guid: string | null }, { msdyn_quotelinescheduleofvalue_formatted?: string }>;
  msdyn_resourcecategory_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_resourcecategory_guid: string | null }, { msdyn_resourcecategory_formatted?: string }>;
  msdyn_startdatetime: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_startdatetime: Date | null }, { msdyn_startdatetime_formatted?: string }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  msdyn_transactionclassification: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  msdyn_transactiontypecode: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { msdyn_transactiontypecode: msdyn_transactiontypecode | null }, { msdyn_transactiontypecode_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { statecode: msdyn_quotelineanalyticsbreakdown_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { statuscode: msdyn_quotelineanalyticsbreakdown_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_quotelineanalyticsbreakdown_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_quotelineanalyticsbreakdown_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_amount: number;
  msdyn_amount_base: number;
  msdyn_billingtype: msdyn_billingtype;
  msdyn_enddatetime: Date;
  msdyn_name: string;
  msdyn_price: number;
  msdyn_price_base: number;
  msdyn_quote_guid: XQW.Guid;
  msdyn_quotelineanalyticsbreakdownid: XQW.Guid;
  msdyn_quotelinedetail_guid: XQW.Guid;
  msdyn_quotelinescheduleofvalue_guid: XQW.Guid;
  msdyn_resourcecategory_guid: XQW.Guid;
  msdyn_startdatetime: Date;
  msdyn_transactioncategory_guid: XQW.Guid;
  msdyn_transactionclassification: msdyn_transactionclassification;
  msdyn_transactiontypecode: msdyn_transactiontypecode;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_quotelineanalyticsbreakdown_statecode;
  statuscode: msdyn_quotelineanalyticsbreakdown_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_quotelineanalyticsbreakdown_Expand {
  createdby: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Quote: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, Quote_Select, Quote_Filter, { msdyn_Quote: Quote_Result }>;
  msdyn_QuoteLineDetail: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, msdyn_quotelinetransaction_Select, msdyn_quotelinetransaction_Filter, { msdyn_QuoteLineDetail: msdyn_quotelinetransaction_Result }>;
  msdyn_QuoteLineScheduleOfValue: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, msdyn_quotelinescheduleofvalue_Select, msdyn_quotelinescheduleofvalue_Filter, { msdyn_QuoteLineScheduleOfValue: msdyn_quotelinescheduleofvalue_Result }>;
  msdyn_ResourceCategory: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_ResourceCategory: BookableResourceCategory_Result }>;
  msdyn_TransactionCategory: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_TransactionCategory: msdyn_transactioncategory_Result }>;
  msdyn_quotelineanalyticsbreakdown_AsyncOperations: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_quotelineanalyticsbreakdown_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_quotelineanalyticsbreakdown_ProcessSession: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_quotelineanalyticsbreakdown_ProcessSession: ProcessSession_Result[] }>;
  msdyn_quotelineanalyticsbreakdown_SyncErrors: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, SyncError_Select, SyncError_Filter, { msdyn_quotelineanalyticsbreakdown_SyncErrors: SyncError_Result[] }>;
  msdyn_quotelineanalyticsbreakdown_UserEntityInstanceDatas: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_quotelineanalyticsbreakdown_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_quotelineanalyticsbreakdown_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_quotelineanalyticsbreakdown_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_amount_base_formatted?: string;
  msdyn_amount_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_enddatetime_formatted?: string;
  msdyn_price_base_formatted?: string;
  msdyn_price_formatted?: string;
  msdyn_quote_formatted?: string;
  msdyn_quotelinedetail_formatted?: string;
  msdyn_quotelinescheduleofvalue_formatted?: string;
  msdyn_resourcecategory_formatted?: string;
  msdyn_startdatetime_formatted?: string;
  msdyn_transactioncategory_formatted?: string;
  msdyn_transactionclassification_formatted?: string;
  msdyn_transactiontypecode_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_quotelineanalyticsbreakdown_Result extends msdyn_quotelineanalyticsbreakdown_Base, msdyn_quotelineanalyticsbreakdown_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_quote_guid: string | null;
  msdyn_quotelinedetail_guid: string | null;
  msdyn_quotelinescheduleofvalue_guid: string | null;
  msdyn_resourcecategory_guid: string | null;
  msdyn_transactioncategory_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_quotelineanalyticsbreakdown_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Quote: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  msdyn_QuoteLineDetail: WebMappingRetrieve<msdyn_quotelinetransaction_Select,msdyn_quotelinetransaction_Expand,msdyn_quotelinetransaction_Filter,msdyn_quotelinetransaction_Fixed,msdyn_quotelinetransaction_Result,msdyn_quotelinetransaction_FormattedResult>;
  msdyn_QuoteLineScheduleOfValue: WebMappingRetrieve<msdyn_quotelinescheduleofvalue_Select,msdyn_quotelinescheduleofvalue_Expand,msdyn_quotelinescheduleofvalue_Filter,msdyn_quotelinescheduleofvalue_Fixed,msdyn_quotelinescheduleofvalue_Result,msdyn_quotelinescheduleofvalue_FormattedResult>;
  msdyn_ResourceCategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  msdyn_TransactionCategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_quotelineanalyticsbreakdown_RelatedMany {
  msdyn_quotelineanalyticsbreakdown_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_quotelineanalyticsbreakdown_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_quotelineanalyticsbreakdown_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_quotelineanalyticsbreakdown_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_quotelineanalyticsbreakdowns: WebMappingRetrieve<msdyn_quotelineanalyticsbreakdown_Select,msdyn_quotelineanalyticsbreakdown_Expand,msdyn_quotelineanalyticsbreakdown_Filter,msdyn_quotelineanalyticsbreakdown_Fixed,msdyn_quotelineanalyticsbreakdown_Result,msdyn_quotelineanalyticsbreakdown_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_quotelineanalyticsbreakdowns: WebMappingRelated<msdyn_quotelineanalyticsbreakdown_RelatedOne,msdyn_quotelineanalyticsbreakdown_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_quotelineanalyticsbreakdowns: WebMappingCUDA<msdyn_quotelineanalyticsbreakdown_Create,msdyn_quotelineanalyticsbreakdown_Update,msdyn_quotelineanalyticsbreakdown_Select>;
}
