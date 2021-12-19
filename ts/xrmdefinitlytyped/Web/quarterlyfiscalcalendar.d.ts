interface QuarterlyFiscalCalendar_Base extends WebEntity {
  createdon?: Date | null;
  effectiveon?: Date | null;
  exchangerate?: number | null;
  fiscalperiodtype?: number | null;
  modifiedon?: Date | null;
  quarter1?: number | null;
  quarter1_base?: number | null;
  quarter2?: number | null;
  quarter2_base?: number | null;
  quarter3?: number | null;
  quarter3_base?: number | null;
  quarter4?: number | null;
  quarter4_base?: number | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  userfiscalcalendarid?: string | null;
  utcconversiontimezonecode?: number | null;
}
interface QuarterlyFiscalCalendar_Relationships {
  QuarterlyFiscalCalendar_AsyncOperations?: AsyncOperation_Result[] | null;
  QuarterlyFiscalCalendar_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
}
interface QuarterlyFiscalCalendar extends QuarterlyFiscalCalendar_Base, QuarterlyFiscalCalendar_Relationships {
}
interface QuarterlyFiscalCalendar_Create extends QuarterlyFiscalCalendar {
  salespersonid_bind$systemusers?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface QuarterlyFiscalCalendar_Update extends QuarterlyFiscalCalendar {
}
interface QuarterlyFiscalCalendar_Select {
  businessunitid_guid: WebAttribute<QuarterlyFiscalCalendar_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  createdby_guid: WebAttribute<QuarterlyFiscalCalendar_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<QuarterlyFiscalCalendar_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<QuarterlyFiscalCalendar_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  effectiveon: WebAttribute<QuarterlyFiscalCalendar_Select, { effectiveon: Date | null }, { effectiveon_formatted?: string }>;
  exchangerate: WebAttribute<QuarterlyFiscalCalendar_Select, { exchangerate: number | null }, {  }>;
  fiscalperiodtype: WebAttribute<QuarterlyFiscalCalendar_Select, { fiscalperiodtype: number | null }, {  }>;
  modifiedby_guid: WebAttribute<QuarterlyFiscalCalendar_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<QuarterlyFiscalCalendar_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<QuarterlyFiscalCalendar_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  quarter1: WebAttribute<QuarterlyFiscalCalendar_Select, { quarter1: number | null; transactioncurrencyid_guid: string | null }, { quarter1_formatted?: string; transactioncurrencyid_formatted?: string }>;
  quarter1_base: WebAttribute<QuarterlyFiscalCalendar_Select, { quarter1_base: number | null; transactioncurrencyid_guid: string | null }, { quarter1_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  quarter2: WebAttribute<QuarterlyFiscalCalendar_Select, { quarter2: number | null; transactioncurrencyid_guid: string | null }, { quarter2_formatted?: string; transactioncurrencyid_formatted?: string }>;
  quarter2_base: WebAttribute<QuarterlyFiscalCalendar_Select, { quarter2_base: number | null; transactioncurrencyid_guid: string | null }, { quarter2_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  quarter3: WebAttribute<QuarterlyFiscalCalendar_Select, { quarter3: number | null; transactioncurrencyid_guid: string | null }, { quarter3_formatted?: string; transactioncurrencyid_formatted?: string }>;
  quarter3_base: WebAttribute<QuarterlyFiscalCalendar_Select, { quarter3_base: number | null; transactioncurrencyid_guid: string | null }, { quarter3_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  quarter4: WebAttribute<QuarterlyFiscalCalendar_Select, { quarter4: number | null; transactioncurrencyid_guid: string | null }, { quarter4_formatted?: string; transactioncurrencyid_formatted?: string }>;
  quarter4_base: WebAttribute<QuarterlyFiscalCalendar_Select, { quarter4_base: number | null; transactioncurrencyid_guid: string | null }, { quarter4_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  salespersonid_guid: WebAttribute<QuarterlyFiscalCalendar_Select, { salespersonid_guid: string | null }, { salespersonid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<QuarterlyFiscalCalendar_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<QuarterlyFiscalCalendar_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  userfiscalcalendarid: WebAttribute<QuarterlyFiscalCalendar_Select, { userfiscalcalendarid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<QuarterlyFiscalCalendar_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface QuarterlyFiscalCalendar_Filter {
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
  quarter1: number;
  quarter1_base: number;
  quarter2: number;
  quarter2_base: number;
  quarter3: number;
  quarter3_base: number;
  quarter4: number;
  quarter4_base: number;
  salespersonid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  userfiscalcalendarid: XQW.Guid;
  utcconversiontimezonecode: number;
}
interface QuarterlyFiscalCalendar_Expand {
  QuarterlyFiscalCalendar_AsyncOperations: WebExpand<QuarterlyFiscalCalendar_Expand, AsyncOperation_Select, AsyncOperation_Filter, { QuarterlyFiscalCalendar_AsyncOperations: AsyncOperation_Result[] }>;
  QuarterlyFiscalCalendar_BulkDeleteFailures: WebExpand<QuarterlyFiscalCalendar_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { QuarterlyFiscalCalendar_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  createdby: WebExpand<QuarterlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<QuarterlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<QuarterlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<QuarterlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  salespersonid: WebExpand<QuarterlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { salespersonid: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<QuarterlyFiscalCalendar_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface QuarterlyFiscalCalendar_FormattedResult {
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  effectiveon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  quarter1_base_formatted?: string;
  quarter1_formatted?: string;
  quarter2_base_formatted?: string;
  quarter2_formatted?: string;
  quarter3_base_formatted?: string;
  quarter3_formatted?: string;
  quarter4_base_formatted?: string;
  quarter4_formatted?: string;
  salespersonid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface QuarterlyFiscalCalendar_Result extends QuarterlyFiscalCalendar_Base, QuarterlyFiscalCalendar_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  salespersonid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface QuarterlyFiscalCalendar_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  salespersonid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface QuarterlyFiscalCalendar_RelatedMany {
  QuarterlyFiscalCalendar_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  QuarterlyFiscalCalendar_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
}
interface WebEntitiesRetrieve {
  quarterlyfiscalcalendars: WebMappingRetrieve<QuarterlyFiscalCalendar_Select,QuarterlyFiscalCalendar_Expand,QuarterlyFiscalCalendar_Filter,QuarterlyFiscalCalendar_Fixed,QuarterlyFiscalCalendar_Result,QuarterlyFiscalCalendar_FormattedResult>;
}
interface WebEntitiesRelated {
  quarterlyfiscalcalendars: WebMappingRelated<QuarterlyFiscalCalendar_RelatedOne,QuarterlyFiscalCalendar_RelatedMany>;
}
interface WebEntitiesCUDA {
  quarterlyfiscalcalendars: WebMappingCUDA<QuarterlyFiscalCalendar_Create,QuarterlyFiscalCalendar_Update,QuarterlyFiscalCalendar_Select>;
}
