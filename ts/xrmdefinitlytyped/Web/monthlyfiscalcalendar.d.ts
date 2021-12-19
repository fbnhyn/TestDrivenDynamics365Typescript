interface MonthlyFiscalCalendar_Base extends WebEntity {
  createdon?: Date | null;
  effectiveon?: Date | null;
  exchangerate?: number | null;
  fiscalperiodtype?: number | null;
  modifiedon?: Date | null;
  month1?: number | null;
  month10?: number | null;
  month10_base?: number | null;
  month11?: number | null;
  month11_base?: number | null;
  month12?: number | null;
  month12_base?: number | null;
  month1_base?: number | null;
  month2?: number | null;
  month2_base?: number | null;
  month3?: number | null;
  month3_base?: number | null;
  month4?: number | null;
  month4_base?: number | null;
  month5?: number | null;
  month5_base?: number | null;
  month6?: number | null;
  month6_base?: number | null;
  month7?: number | null;
  month7_base?: number | null;
  month8?: number | null;
  month8_base?: number | null;
  month9?: number | null;
  month9_base?: number | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  userfiscalcalendarid?: string | null;
  utcconversiontimezonecode?: number | null;
}
interface MonthlyFiscalCalendar_Relationships {
  MonthlyFiscalCalendar_AsyncOperations?: AsyncOperation_Result[] | null;
  MonthlyFiscalCalendar_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
}
interface MonthlyFiscalCalendar extends MonthlyFiscalCalendar_Base, MonthlyFiscalCalendar_Relationships {
}
interface MonthlyFiscalCalendar_Create extends MonthlyFiscalCalendar {
  salespersonid_bind$systemusers?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface MonthlyFiscalCalendar_Update extends MonthlyFiscalCalendar {
}
interface MonthlyFiscalCalendar_Select {
  businessunitid_guid: WebAttribute<MonthlyFiscalCalendar_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  createdby_guid: WebAttribute<MonthlyFiscalCalendar_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<MonthlyFiscalCalendar_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<MonthlyFiscalCalendar_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  effectiveon: WebAttribute<MonthlyFiscalCalendar_Select, { effectiveon: Date | null }, { effectiveon_formatted?: string }>;
  exchangerate: WebAttribute<MonthlyFiscalCalendar_Select, { exchangerate: number | null }, {  }>;
  fiscalperiodtype: WebAttribute<MonthlyFiscalCalendar_Select, { fiscalperiodtype: number | null }, {  }>;
  modifiedby_guid: WebAttribute<MonthlyFiscalCalendar_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<MonthlyFiscalCalendar_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<MonthlyFiscalCalendar_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  month1: WebAttribute<MonthlyFiscalCalendar_Select, { month1: number | null; transactioncurrencyid_guid: string | null }, { month1_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month10: WebAttribute<MonthlyFiscalCalendar_Select, { month10: number | null; transactioncurrencyid_guid: string | null }, { month10_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month10_base: WebAttribute<MonthlyFiscalCalendar_Select, { month10_base: number | null; transactioncurrencyid_guid: string | null }, { month10_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month11: WebAttribute<MonthlyFiscalCalendar_Select, { month11: number | null; transactioncurrencyid_guid: string | null }, { month11_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month11_base: WebAttribute<MonthlyFiscalCalendar_Select, { month11_base: number | null; transactioncurrencyid_guid: string | null }, { month11_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month12: WebAttribute<MonthlyFiscalCalendar_Select, { month12: number | null; transactioncurrencyid_guid: string | null }, { month12_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month12_base: WebAttribute<MonthlyFiscalCalendar_Select, { month12_base: number | null; transactioncurrencyid_guid: string | null }, { month12_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month1_base: WebAttribute<MonthlyFiscalCalendar_Select, { month1_base: number | null; transactioncurrencyid_guid: string | null }, { month1_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month2: WebAttribute<MonthlyFiscalCalendar_Select, { month2: number | null; transactioncurrencyid_guid: string | null }, { month2_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month2_base: WebAttribute<MonthlyFiscalCalendar_Select, { month2_base: number | null; transactioncurrencyid_guid: string | null }, { month2_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month3: WebAttribute<MonthlyFiscalCalendar_Select, { month3: number | null; transactioncurrencyid_guid: string | null }, { month3_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month3_base: WebAttribute<MonthlyFiscalCalendar_Select, { month3_base: number | null; transactioncurrencyid_guid: string | null }, { month3_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month4: WebAttribute<MonthlyFiscalCalendar_Select, { month4: number | null; transactioncurrencyid_guid: string | null }, { month4_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month4_base: WebAttribute<MonthlyFiscalCalendar_Select, { month4_base: number | null; transactioncurrencyid_guid: string | null }, { month4_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month5: WebAttribute<MonthlyFiscalCalendar_Select, { month5: number | null; transactioncurrencyid_guid: string | null }, { month5_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month5_base: WebAttribute<MonthlyFiscalCalendar_Select, { month5_base: number | null; transactioncurrencyid_guid: string | null }, { month5_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month6: WebAttribute<MonthlyFiscalCalendar_Select, { month6: number | null; transactioncurrencyid_guid: string | null }, { month6_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month6_base: WebAttribute<MonthlyFiscalCalendar_Select, { month6_base: number | null; transactioncurrencyid_guid: string | null }, { month6_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month7: WebAttribute<MonthlyFiscalCalendar_Select, { month7: number | null; transactioncurrencyid_guid: string | null }, { month7_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month7_base: WebAttribute<MonthlyFiscalCalendar_Select, { month7_base: number | null; transactioncurrencyid_guid: string | null }, { month7_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month8: WebAttribute<MonthlyFiscalCalendar_Select, { month8: number | null; transactioncurrencyid_guid: string | null }, { month8_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month8_base: WebAttribute<MonthlyFiscalCalendar_Select, { month8_base: number | null; transactioncurrencyid_guid: string | null }, { month8_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month9: WebAttribute<MonthlyFiscalCalendar_Select, { month9: number | null; transactioncurrencyid_guid: string | null }, { month9_formatted?: string; transactioncurrencyid_formatted?: string }>;
  month9_base: WebAttribute<MonthlyFiscalCalendar_Select, { month9_base: number | null; transactioncurrencyid_guid: string | null }, { month9_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  salespersonid_guid: WebAttribute<MonthlyFiscalCalendar_Select, { salespersonid_guid: string | null }, { salespersonid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<MonthlyFiscalCalendar_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<MonthlyFiscalCalendar_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  userfiscalcalendarid: WebAttribute<MonthlyFiscalCalendar_Select, { userfiscalcalendarid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<MonthlyFiscalCalendar_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface MonthlyFiscalCalendar_Filter {
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
  month1: number;
  month10: number;
  month10_base: number;
  month11: number;
  month11_base: number;
  month12: number;
  month12_base: number;
  month1_base: number;
  month2: number;
  month2_base: number;
  month3: number;
  month3_base: number;
  month4: number;
  month4_base: number;
  month5: number;
  month5_base: number;
  month6: number;
  month6_base: number;
  month7: number;
  month7_base: number;
  month8: number;
  month8_base: number;
  month9: number;
  month9_base: number;
  salespersonid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  userfiscalcalendarid: XQW.Guid;
  utcconversiontimezonecode: number;
}
interface MonthlyFiscalCalendar_Expand {
  MonthlyFiscalCalendar_AsyncOperations: WebExpand<MonthlyFiscalCalendar_Expand, AsyncOperation_Select, AsyncOperation_Filter, { MonthlyFiscalCalendar_AsyncOperations: AsyncOperation_Result[] }>;
  MonthlyFiscalCalendar_BulkDeleteFailures: WebExpand<MonthlyFiscalCalendar_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { MonthlyFiscalCalendar_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  createdby: WebExpand<MonthlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<MonthlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<MonthlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<MonthlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  salespersonid: WebExpand<MonthlyFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { salespersonid: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<MonthlyFiscalCalendar_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface MonthlyFiscalCalendar_FormattedResult {
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  effectiveon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  month10_base_formatted?: string;
  month10_formatted?: string;
  month11_base_formatted?: string;
  month11_formatted?: string;
  month12_base_formatted?: string;
  month12_formatted?: string;
  month1_base_formatted?: string;
  month1_formatted?: string;
  month2_base_formatted?: string;
  month2_formatted?: string;
  month3_base_formatted?: string;
  month3_formatted?: string;
  month4_base_formatted?: string;
  month4_formatted?: string;
  month5_base_formatted?: string;
  month5_formatted?: string;
  month6_base_formatted?: string;
  month6_formatted?: string;
  month7_base_formatted?: string;
  month7_formatted?: string;
  month8_base_formatted?: string;
  month8_formatted?: string;
  month9_base_formatted?: string;
  month9_formatted?: string;
  salespersonid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface MonthlyFiscalCalendar_Result extends MonthlyFiscalCalendar_Base, MonthlyFiscalCalendar_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  salespersonid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface MonthlyFiscalCalendar_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  salespersonid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface MonthlyFiscalCalendar_RelatedMany {
  MonthlyFiscalCalendar_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  MonthlyFiscalCalendar_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
}
interface WebEntitiesRetrieve {
  monthlyfiscalcalendars: WebMappingRetrieve<MonthlyFiscalCalendar_Select,MonthlyFiscalCalendar_Expand,MonthlyFiscalCalendar_Filter,MonthlyFiscalCalendar_Fixed,MonthlyFiscalCalendar_Result,MonthlyFiscalCalendar_FormattedResult>;
}
interface WebEntitiesRelated {
  monthlyfiscalcalendars: WebMappingRelated<MonthlyFiscalCalendar_RelatedOne,MonthlyFiscalCalendar_RelatedMany>;
}
interface WebEntitiesCUDA {
  monthlyfiscalcalendars: WebMappingCUDA<MonthlyFiscalCalendar_Create,MonthlyFiscalCalendar_Update,MonthlyFiscalCalendar_Select>;
}
