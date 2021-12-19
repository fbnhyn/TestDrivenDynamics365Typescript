interface AnnualFiscalCalendar_Base extends WebEntity {
  annual?: number | null;
  annual_base?: number | null;
  createdon?: Date | null;
  effectiveon?: Date | null;
  exchangerate?: number | null;
  fiscalperiodtype?: number | null;
  modifiedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  userfiscalcalendarid?: string | null;
  utcconversiontimezonecode?: number | null;
}
interface AnnualFiscalCalendar_Relationships {
  AnnualFiscalCalendar_AsyncOperations?: AsyncOperation_Result[] | null;
  AnnualFiscalCalendar_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
}
interface AnnualFiscalCalendar extends AnnualFiscalCalendar_Base, AnnualFiscalCalendar_Relationships {
}
interface AnnualFiscalCalendar_Create extends AnnualFiscalCalendar {
  salespersonid_bind$systemusers?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface AnnualFiscalCalendar_Update extends AnnualFiscalCalendar {
}
interface AnnualFiscalCalendar_Select {
  annual: WebAttribute<AnnualFiscalCalendar_Select, { annual: number | null; transactioncurrencyid_guid: string | null }, { annual_formatted?: string; transactioncurrencyid_formatted?: string }>;
  annual_base: WebAttribute<AnnualFiscalCalendar_Select, { annual_base: number | null; transactioncurrencyid_guid: string | null }, { annual_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  businessunitid_guid: WebAttribute<AnnualFiscalCalendar_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  createdby_guid: WebAttribute<AnnualFiscalCalendar_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AnnualFiscalCalendar_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AnnualFiscalCalendar_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  effectiveon: WebAttribute<AnnualFiscalCalendar_Select, { effectiveon: Date | null }, { effectiveon_formatted?: string }>;
  exchangerate: WebAttribute<AnnualFiscalCalendar_Select, { exchangerate: number | null }, {  }>;
  fiscalperiodtype: WebAttribute<AnnualFiscalCalendar_Select, { fiscalperiodtype: number | null }, {  }>;
  modifiedby_guid: WebAttribute<AnnualFiscalCalendar_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AnnualFiscalCalendar_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AnnualFiscalCalendar_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  salespersonid_guid: WebAttribute<AnnualFiscalCalendar_Select, { salespersonid_guid: string | null }, { salespersonid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<AnnualFiscalCalendar_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<AnnualFiscalCalendar_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  userfiscalcalendarid: WebAttribute<AnnualFiscalCalendar_Select, { userfiscalcalendarid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<AnnualFiscalCalendar_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface AnnualFiscalCalendar_Filter {
  annual: number;
  annual_base: number;
  businessunitid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  effectiveon: Date;
  exchangerate: any;
  fiscalperiodtype: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  salespersonid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  userfiscalcalendarid: XQW.Guid;
  utcconversiontimezonecode: number;
}
interface AnnualFiscalCalendar_Expand {
  AnnualFiscalCalendar_AsyncOperations: WebExpand<AnnualFiscalCalendar_Expand, AsyncOperation_Select, AsyncOperation_Filter, { AnnualFiscalCalendar_AsyncOperations: AsyncOperation_Result[] }>;
  AnnualFiscalCalendar_BulkDeleteFailures: WebExpand<AnnualFiscalCalendar_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { AnnualFiscalCalendar_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  createdby: WebExpand<AnnualFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<AnnualFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<AnnualFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<AnnualFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  salespersonid: WebExpand<AnnualFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { salespersonid: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<AnnualFiscalCalendar_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface AnnualFiscalCalendar_FormattedResult {
  annual_base_formatted?: string;
  annual_formatted?: string;
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  effectiveon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  salespersonid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface AnnualFiscalCalendar_Result extends AnnualFiscalCalendar_Base, AnnualFiscalCalendar_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  salespersonid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface AnnualFiscalCalendar_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  salespersonid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface AnnualFiscalCalendar_RelatedMany {
  AnnualFiscalCalendar_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  AnnualFiscalCalendar_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
}
interface WebEntitiesRetrieve {
  annualfiscalcalendars: WebMappingRetrieve<AnnualFiscalCalendar_Select,AnnualFiscalCalendar_Expand,AnnualFiscalCalendar_Filter,AnnualFiscalCalendar_Fixed,AnnualFiscalCalendar_Result,AnnualFiscalCalendar_FormattedResult>;
}
interface WebEntitiesRelated {
  annualfiscalcalendars: WebMappingRelated<AnnualFiscalCalendar_RelatedOne,AnnualFiscalCalendar_RelatedMany>;
}
interface WebEntitiesCUDA {
  annualfiscalcalendars: WebMappingCUDA<AnnualFiscalCalendar_Create,AnnualFiscalCalendar_Update,AnnualFiscalCalendar_Select>;
}
