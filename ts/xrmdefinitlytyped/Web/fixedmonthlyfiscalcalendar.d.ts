interface FixedMonthlyFiscalCalendar_Base extends WebEntity {
  createdon?: Date | null;
  effectiveon?: Date | null;
  exchangerate?: number | null;
  fiscalperiodtype?: number | null;
  modifiedon?: Date | null;
  period1?: number | null;
  period10?: number | null;
  period10_base?: number | null;
  period11?: number | null;
  period11_base?: number | null;
  period12?: number | null;
  period12_base?: number | null;
  period13?: number | null;
  period13_base?: number | null;
  period1_base?: number | null;
  period2?: number | null;
  period2_base?: number | null;
  period3?: number | null;
  period3_base?: number | null;
  period4?: number | null;
  period4_base?: number | null;
  period5?: number | null;
  period5_base?: number | null;
  period6?: number | null;
  period6_base?: number | null;
  period7?: number | null;
  period7_base?: number | null;
  period8?: number | null;
  period8_base?: number | null;
  period9?: number | null;
  period9_base?: number | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  userfiscalcalendarid?: string | null;
  utcconversiontimezonecode?: number | null;
}
interface FixedMonthlyFiscalCalendar_Relationships {
  FixedMonthlyFiscalCalendar_AsyncOperations?: AsyncOperation_Result[] | null;
  FixedMonthlyFiscalCalendar_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
}
interface FixedMonthlyFiscalCalendar extends FixedMonthlyFiscalCalendar_Base, FixedMonthlyFiscalCalendar_Relationships {
}
interface FixedMonthlyFiscalCalendar_Create extends FixedMonthlyFiscalCalendar {
  salespersonid_bind$systemusers?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface FixedMonthlyFiscalCalendar_Update extends FixedMonthlyFiscalCalendar {
}
interface FixedMonthlyFiscalCalendar_Select {
  businessunitid_guid: WebAttribute<FixedMonthlyFiscalCalendar_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  createdby_guid: WebAttribute<FixedMonthlyFiscalCalendar_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<FixedMonthlyFiscalCalendar_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<FixedMonthlyFiscalCalendar_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  effectiveon: WebAttribute<FixedMonthlyFiscalCalendar_Select, { effectiveon: Date | null }, { effectiveon_formatted?: string }>;
  exchangerate: WebAttribute<FixedMonthlyFiscalCalendar_Select, { exchangerate: number | null }, {  }>;
  fiscalperiodtype: WebAttribute<FixedMonthlyFiscalCalendar_Select, { fiscalperiodtype: number | null }, {  }>;
  modifiedby_guid: WebAttribute<FixedMonthlyFiscalCalendar_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<FixedMonthlyFiscalCalendar_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<FixedMonthlyFiscalCalendar_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  period1: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period1: number | null; transactioncurrencyid_guid: string | null }, { period1_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period10: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period10: number | null; transactioncurrencyid_guid: string | null }, { period10_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period10_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period10_base: number | null; transactioncurrencyid_guid: string | null }, { period10_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period11: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period11: number | null; transactioncurrencyid_guid: string | null }, { period11_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period11_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period11_base: number | null; transactioncurrencyid_guid: string | null }, { period11_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period12: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period12: number | null; transactioncurrencyid_guid: string | null }, { period12_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period12_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period12_base: number | null; transactioncurrencyid_guid: string | null }, { period12_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period13: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period13: number | null; transactioncurrencyid_guid: string | null }, { period13_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period13_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period13_base: number | null; transactioncurrencyid_guid: string | null }, { period13_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period1_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period1_base: number | null; transactioncurrencyid_guid: string | null }, { period1_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period2: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period2: number | null; transactioncurrencyid_guid: string | null }, { period2_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period2_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period2_base: number | null; transactioncurrencyid_guid: string | null }, { period2_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period3: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period3: number | null; transactioncurrencyid_guid: string | null }, { period3_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period3_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period3_base: number | null; transactioncurrencyid_guid: string | null }, { period3_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period4: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period4: number | null; transactioncurrencyid_guid: string | null }, { period4_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period4_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period4_base: number | null; transactioncurrencyid_guid: string | null }, { period4_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period5: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period5: number | null; transactioncurrencyid_guid: string | null }, { period5_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period5_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period5_base: number | null; transactioncurrencyid_guid: string | null }, { period5_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period6: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period6: number | null; transactioncurrencyid_guid: string | null }, { period6_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period6_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period6_base: number | null; transactioncurrencyid_guid: string | null }, { period6_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period7: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period7: number | null; transactioncurrencyid_guid: string | null }, { period7_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period7_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period7_base: number | null; transactioncurrencyid_guid: string | null }, { period7_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period8: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period8: number | null; transactioncurrencyid_guid: string | null }, { period8_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period8_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period8_base: number | null; transactioncurrencyid_guid: string | null }, { period8_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period9: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period9: number | null; transactioncurrencyid_guid: string | null }, { period9_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period9_base: WebAttribute<FixedMonthlyFiscalCalendar_Select, { period9_base: number | null; transactioncurrencyid_guid: string | null }, { period9_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  salespersonid_guid: WebAttribute<FixedMonthlyFiscalCalendar_Select, { salespersonid_guid: string | null }, { salespersonid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<FixedMonthlyFiscalCalendar_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<FixedMonthlyFiscalCalendar_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  userfiscalcalendarid: WebAttribute<FixedMonthlyFiscalCalendar_Select, { userfiscalcalendarid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<FixedMonthlyFiscalCalendar_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface FixedMonthlyFiscalCalendar_Filter {
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
  period1: number;
  period10: number;
  period10_base: number;
  period11: number;
  period11_base: number;
  period12: number;
  period12_base: number;
  period13: number;
  period13_base: number;
  period1_base: number;
  period2: number;
  period2_base: number;
  period3: number;
  period3_base: number;
  period4: number;
  period4_base: number;
  period5: number;
  period5_base: number;
  period6: number;
  period6_base: number;
  period7: number;
  period7_base: number;
  period8: number;
  period8_base: number;
  period9: number;
  period9_base: number;
  salespersonid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  userfiscalcalendarid: XQW.Guid;
  utcconversiontimezonecode: number;
}
interface FixedMonthlyFiscalCalendar_Expand {
  FixedMonthlyFiscalCalendar_AsyncOperations: WebExpand<FixedMonthlyFiscalCalendar_Expand, AsyncOperation_Select, AsyncOperation_Filter, { FixedMonthlyFiscalCalendar_AsyncOperations: AsyncOperation_Result[] }>;
  FixedMonthlyFiscalCalendar_BulkDeleteFailures: WebExpand<FixedMonthlyFiscalCalendar_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { FixedMonthlyFiscalCalendar_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  createdby: WebExpand<FixedMonthlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<FixedMonthlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<FixedMonthlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<FixedMonthlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  salespersonid: WebExpand<FixedMonthlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { salespersonid: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<FixedMonthlyFiscalCalendar_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface FixedMonthlyFiscalCalendar_FormattedResult {
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  effectiveon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  period10_base_formatted?: string;
  period10_formatted?: string;
  period11_base_formatted?: string;
  period11_formatted?: string;
  period12_base_formatted?: string;
  period12_formatted?: string;
  period13_base_formatted?: string;
  period13_formatted?: string;
  period1_base_formatted?: string;
  period1_formatted?: string;
  period2_base_formatted?: string;
  period2_formatted?: string;
  period3_base_formatted?: string;
  period3_formatted?: string;
  period4_base_formatted?: string;
  period4_formatted?: string;
  period5_base_formatted?: string;
  period5_formatted?: string;
  period6_base_formatted?: string;
  period6_formatted?: string;
  period7_base_formatted?: string;
  period7_formatted?: string;
  period8_base_formatted?: string;
  period8_formatted?: string;
  period9_base_formatted?: string;
  period9_formatted?: string;
  salespersonid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface FixedMonthlyFiscalCalendar_Result extends FixedMonthlyFiscalCalendar_Base, FixedMonthlyFiscalCalendar_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  salespersonid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface FixedMonthlyFiscalCalendar_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  salespersonid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface FixedMonthlyFiscalCalendar_RelatedMany {
  FixedMonthlyFiscalCalendar_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  FixedMonthlyFiscalCalendar_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
}
interface WebEntitiesRetrieve {
  fixedmonthlyfiscalcalendars: WebMappingRetrieve<FixedMonthlyFiscalCalendar_Select,FixedMonthlyFiscalCalendar_Expand,FixedMonthlyFiscalCalendar_Filter,FixedMonthlyFiscalCalendar_Fixed,FixedMonthlyFiscalCalendar_Result,FixedMonthlyFiscalCalendar_FormattedResult>;
}
interface WebEntitiesRelated {
  fixedmonthlyfiscalcalendars: WebMappingRelated<FixedMonthlyFiscalCalendar_RelatedOne,FixedMonthlyFiscalCalendar_RelatedMany>;
}
interface WebEntitiesCUDA {
  fixedmonthlyfiscalcalendars: WebMappingCUDA<FixedMonthlyFiscalCalendar_Create,FixedMonthlyFiscalCalendar_Update,FixedMonthlyFiscalCalendar_Select>;
}
