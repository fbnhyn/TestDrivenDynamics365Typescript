interface SemiAnnualFiscalCalendar_Base extends WebEntity {
  createdon?: Date | null;
  effectiveon?: Date | null;
  exchangerate?: number | null;
  firsthalf?: number | null;
  firsthalf_base?: number | null;
  fiscalperiodtype?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  secondhalf?: number | null;
  secondhalf_base?: number | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  userfiscalcalendarid?: string | null;
  utcconversiontimezonecode?: number | null;
}
interface SemiAnnualFiscalCalendar_Relationships {
  SemiAnnualFiscalCalendar_AsyncOperations?: AsyncOperation_Result[] | null;
  SemiAnnualFiscalCalendar_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
}
interface SemiAnnualFiscalCalendar extends SemiAnnualFiscalCalendar_Base, SemiAnnualFiscalCalendar_Relationships {
}
interface SemiAnnualFiscalCalendar_Create extends SemiAnnualFiscalCalendar {
  salespersonid_bind$systemusers?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface SemiAnnualFiscalCalendar_Update extends SemiAnnualFiscalCalendar {
}
interface SemiAnnualFiscalCalendar_Select {
  businessunitid_guid: WebAttribute<SemiAnnualFiscalCalendar_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  createdby_guid: WebAttribute<SemiAnnualFiscalCalendar_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SemiAnnualFiscalCalendar_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SemiAnnualFiscalCalendar_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  effectiveon: WebAttribute<SemiAnnualFiscalCalendar_Select, { effectiveon: Date | null }, { effectiveon_formatted?: string }>;
  exchangerate: WebAttribute<SemiAnnualFiscalCalendar_Select, { exchangerate: number | null }, {  }>;
  firsthalf: WebAttribute<SemiAnnualFiscalCalendar_Select, { firsthalf: number | null; transactioncurrencyid_guid: string | null }, { firsthalf_formatted?: string; transactioncurrencyid_formatted?: string }>;
  firsthalf_base: WebAttribute<SemiAnnualFiscalCalendar_Select, { firsthalf_base: number | null; transactioncurrencyid_guid: string | null }, { firsthalf_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  fiscalperiodtype: WebAttribute<SemiAnnualFiscalCalendar_Select, { fiscalperiodtype: number | null }, {  }>;
  importsequencenumber: WebAttribute<SemiAnnualFiscalCalendar_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<SemiAnnualFiscalCalendar_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SemiAnnualFiscalCalendar_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SemiAnnualFiscalCalendar_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  salespersonid_guid: WebAttribute<SemiAnnualFiscalCalendar_Select, { salespersonid_guid: string | null }, { salespersonid_formatted?: string }>;
  secondhalf: WebAttribute<SemiAnnualFiscalCalendar_Select, { secondhalf: number | null; transactioncurrencyid_guid: string | null }, { secondhalf_formatted?: string; transactioncurrencyid_formatted?: string }>;
  secondhalf_base: WebAttribute<SemiAnnualFiscalCalendar_Select, { secondhalf_base: number | null; transactioncurrencyid_guid: string | null }, { secondhalf_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<SemiAnnualFiscalCalendar_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<SemiAnnualFiscalCalendar_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  userfiscalcalendarid: WebAttribute<SemiAnnualFiscalCalendar_Select, { userfiscalcalendarid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<SemiAnnualFiscalCalendar_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface SemiAnnualFiscalCalendar_Filter {
  businessunitid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  effectiveon: Date;
  exchangerate: any;
  firsthalf: number;
  firsthalf_base: number;
  fiscalperiodtype: number;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  salespersonid_guid: XQW.Guid;
  secondhalf: number;
  secondhalf_base: number;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  userfiscalcalendarid: XQW.Guid;
  utcconversiontimezonecode: number;
}
interface SemiAnnualFiscalCalendar_Expand {
  SemiAnnualFiscalCalendar_AsyncOperations: WebExpand<SemiAnnualFiscalCalendar_Expand, AsyncOperation_Select, AsyncOperation_Filter, { SemiAnnualFiscalCalendar_AsyncOperations: AsyncOperation_Result[] }>;
  SemiAnnualFiscalCalendar_BulkDeleteFailures: WebExpand<SemiAnnualFiscalCalendar_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { SemiAnnualFiscalCalendar_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  createdby: WebExpand<SemiAnnualFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SemiAnnualFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SemiAnnualFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SemiAnnualFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  salespersonid: WebExpand<SemiAnnualFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { salespersonid: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<SemiAnnualFiscalCalendar_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface SemiAnnualFiscalCalendar_FormattedResult {
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  effectiveon_formatted?: string;
  firsthalf_base_formatted?: string;
  firsthalf_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  salespersonid_formatted?: string;
  secondhalf_base_formatted?: string;
  secondhalf_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface SemiAnnualFiscalCalendar_Result extends SemiAnnualFiscalCalendar_Base, SemiAnnualFiscalCalendar_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  salespersonid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface SemiAnnualFiscalCalendar_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  salespersonid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface SemiAnnualFiscalCalendar_RelatedMany {
  SemiAnnualFiscalCalendar_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  SemiAnnualFiscalCalendar_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
}
interface WebEntitiesRetrieve {
  semiannualfiscalcalendars: WebMappingRetrieve<SemiAnnualFiscalCalendar_Select,SemiAnnualFiscalCalendar_Expand,SemiAnnualFiscalCalendar_Filter,SemiAnnualFiscalCalendar_Fixed,SemiAnnualFiscalCalendar_Result,SemiAnnualFiscalCalendar_FormattedResult>;
}
interface WebEntitiesRelated {
  semiannualfiscalcalendars: WebMappingRelated<SemiAnnualFiscalCalendar_RelatedOne,SemiAnnualFiscalCalendar_RelatedMany>;
}
interface WebEntitiesCUDA {
  semiannualfiscalcalendars: WebMappingCUDA<SemiAnnualFiscalCalendar_Create,SemiAnnualFiscalCalendar_Update,SemiAnnualFiscalCalendar_Select>;
}
