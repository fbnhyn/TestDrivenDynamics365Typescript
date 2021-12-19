interface msdyn_quoteinvoicingsetup_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_amounttotals?: number | null;
  msdyn_amounttotals_base?: number | null;
  msdyn_description?: string | null;
  msdyn_internalflags?: string | null;
  msdyn_name?: string | null;
  msdyn_numberofoccurrences?: number | null;
  msdyn_quoteinvoicingsetupid?: string | null;
  msdyn_recurrencesettings?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_quoteinvoicingsetup_statecode | null;
  statuscode?: msdyn_quoteinvoicingsetup_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_quoteinvoicingsetup_Relationships {
  msdyn_Quote?: Quote_Result | null;
  msdyn_msdyn_quoteinvoicingsetup_msdyn_quoteinvoicingproduct_QuoteInvoicingSetup?: msdyn_quoteinvoicingproduct_Result[] | null;
  msdyn_quoteinvoicingsetup_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_quoteinvoicingsetup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_quoteinvoicingsetup_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_quoteinvoicingsetup_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_quoteinvoicingsetup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_quoteinvoicingsetup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_quoteinvoicingsetup_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_quoteinvoicingsetup_SyncErrors?: SyncError_Result[] | null;
  msdyn_quoteinvoicingsetup_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_quoteinvoicingsetup extends msdyn_quoteinvoicingsetup_Base, msdyn_quoteinvoicingsetup_Relationships {
  msdyn_Quote_bind$quotes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_quoteinvoicingsetup_Create extends msdyn_quoteinvoicingsetup {
}
interface msdyn_quoteinvoicingsetup_Update extends msdyn_quoteinvoicingsetup {
}
interface msdyn_quoteinvoicingsetup_Select {
  createdby_guid: WebAttribute<msdyn_quoteinvoicingsetup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_quoteinvoicingsetup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_quoteinvoicingsetup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_quoteinvoicingsetup_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_quoteinvoicingsetup_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_quoteinvoicingsetup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_quoteinvoicingsetup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_quoteinvoicingsetup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_amounttotals: WebAttribute<msdyn_quoteinvoicingsetup_Select, { msdyn_amounttotals: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amounttotals_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amounttotals_base: WebAttribute<msdyn_quoteinvoicingsetup_Select, { msdyn_amounttotals_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amounttotals_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_quoteinvoicingsetup_Select, { msdyn_description: string | null }, {  }>;
  msdyn_internalflags: WebAttribute<msdyn_quoteinvoicingsetup_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_quoteinvoicingsetup_Select, { msdyn_name: string | null }, {  }>;
  msdyn_numberofoccurrences: WebAttribute<msdyn_quoteinvoicingsetup_Select, { msdyn_numberofoccurrences: number | null }, {  }>;
  msdyn_quote_guid: WebAttribute<msdyn_quoteinvoicingsetup_Select, { msdyn_quote_guid: string | null }, { msdyn_quote_formatted?: string }>;
  msdyn_quoteinvoicingsetupid: WebAttribute<msdyn_quoteinvoicingsetup_Select, { msdyn_quoteinvoicingsetupid: string | null }, {  }>;
  msdyn_recurrencesettings: WebAttribute<msdyn_quoteinvoicingsetup_Select, { msdyn_recurrencesettings: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_quoteinvoicingsetup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_quoteinvoicingsetup_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_quoteinvoicingsetup_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_quoteinvoicingsetup_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_quoteinvoicingsetup_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_quoteinvoicingsetup_Select, { statecode: msdyn_quoteinvoicingsetup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_quoteinvoicingsetup_Select, { statuscode: msdyn_quoteinvoicingsetup_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_quoteinvoicingsetup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_quoteinvoicingsetup_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_quoteinvoicingsetup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_quoteinvoicingsetup_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_quoteinvoicingsetup_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_amounttotals: number;
  msdyn_amounttotals_base: number;
  msdyn_description: string;
  msdyn_internalflags: string;
  msdyn_name: string;
  msdyn_numberofoccurrences: number;
  msdyn_quote_guid: XQW.Guid;
  msdyn_quoteinvoicingsetupid: XQW.Guid;
  msdyn_recurrencesettings: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_quoteinvoicingsetup_statecode;
  statuscode: msdyn_quoteinvoicingsetup_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_quoteinvoicingsetup_Expand {
  createdby: WebExpand<msdyn_quoteinvoicingsetup_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_quoteinvoicingsetup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_quoteinvoicingsetup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_quoteinvoicingsetup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Quote: WebExpand<msdyn_quoteinvoicingsetup_Expand, Quote_Select, Quote_Filter, { msdyn_Quote: Quote_Result }>;
  msdyn_msdyn_quoteinvoicingsetup_msdyn_quoteinvoicingproduct_QuoteInvoicingSetup: WebExpand<msdyn_quoteinvoicingsetup_Expand, msdyn_quoteinvoicingproduct_Select, msdyn_quoteinvoicingproduct_Filter, { msdyn_msdyn_quoteinvoicingsetup_msdyn_quoteinvoicingproduct_QuoteInvoicingSetup: msdyn_quoteinvoicingproduct_Result[] }>;
  msdyn_quoteinvoicingsetup_AsyncOperations: WebExpand<msdyn_quoteinvoicingsetup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_quoteinvoicingsetup_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_quoteinvoicingsetup_BulkDeleteFailures: WebExpand<msdyn_quoteinvoicingsetup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_quoteinvoicingsetup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_quoteinvoicingsetup_DuplicateBaseRecord: WebExpand<msdyn_quoteinvoicingsetup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quoteinvoicingsetup_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_quoteinvoicingsetup_DuplicateMatchingRecord: WebExpand<msdyn_quoteinvoicingsetup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quoteinvoicingsetup_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_quoteinvoicingsetup_MailboxTrackingFolders: WebExpand<msdyn_quoteinvoicingsetup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_quoteinvoicingsetup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_quoteinvoicingsetup_PrincipalObjectAttributeAccesses: WebExpand<msdyn_quoteinvoicingsetup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_quoteinvoicingsetup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_quoteinvoicingsetup_ProcessSession: WebExpand<msdyn_quoteinvoicingsetup_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_quoteinvoicingsetup_ProcessSession: ProcessSession_Result[] }>;
  msdyn_quoteinvoicingsetup_SyncErrors: WebExpand<msdyn_quoteinvoicingsetup_Expand, SyncError_Select, SyncError_Filter, { msdyn_quoteinvoicingsetup_SyncErrors: SyncError_Result[] }>;
  msdyn_quoteinvoicingsetup_UserEntityInstanceDatas: WebExpand<msdyn_quoteinvoicingsetup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_quoteinvoicingsetup_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_quoteinvoicingsetup_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_quoteinvoicingsetup_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_quoteinvoicingsetup_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_quoteinvoicingsetup_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_quoteinvoicingsetup_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_quoteinvoicingsetup_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_amounttotals_base_formatted?: string;
  msdyn_amounttotals_formatted?: string;
  msdyn_quote_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_quoteinvoicingsetup_Result extends msdyn_quoteinvoicingsetup_Base, msdyn_quoteinvoicingsetup_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_quote_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_quoteinvoicingsetup_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Quote: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_quoteinvoicingsetup_RelatedMany {
  msdyn_msdyn_quoteinvoicingsetup_msdyn_quoteinvoicingproduct_QuoteInvoicingSetup: WebMappingRetrieve<msdyn_quoteinvoicingproduct_Select,msdyn_quoteinvoicingproduct_Expand,msdyn_quoteinvoicingproduct_Filter,msdyn_quoteinvoicingproduct_Fixed,msdyn_quoteinvoicingproduct_Result,msdyn_quoteinvoicingproduct_FormattedResult>;
  msdyn_quoteinvoicingsetup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_quoteinvoicingsetup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_quoteinvoicingsetup_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quoteinvoicingsetup_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quoteinvoicingsetup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_quoteinvoicingsetup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_quoteinvoicingsetup_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_quoteinvoicingsetup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_quoteinvoicingsetup_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_quoteinvoicingsetups: WebMappingRetrieve<msdyn_quoteinvoicingsetup_Select,msdyn_quoteinvoicingsetup_Expand,msdyn_quoteinvoicingsetup_Filter,msdyn_quoteinvoicingsetup_Fixed,msdyn_quoteinvoicingsetup_Result,msdyn_quoteinvoicingsetup_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_quoteinvoicingsetups: WebMappingRelated<msdyn_quoteinvoicingsetup_RelatedOne,msdyn_quoteinvoicingsetup_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_quoteinvoicingsetups: WebMappingCUDA<msdyn_quoteinvoicingsetup_Create,msdyn_quoteinvoicingsetup_Update,msdyn_quoteinvoicingsetup_Select>;
}
