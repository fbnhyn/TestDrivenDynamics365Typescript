interface UserFiscalCalendar_Base extends WebEntity {
  businessunitid?: string | null;
  createdon?: Date | null;
  effectiveon?: Date | null;
  exchangerate?: number | null;
  fiscalperiodtype?: number | null;
  importsequencenumber?: number | null;
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
interface UserFiscalCalendar_Relationships {
  businessunitid_businessunit?: BusinessUnit_Result | null;
  userentityinstancedata_userfiscalcalendar?: UserEntityInstanceData_Result[] | null;
}
interface UserFiscalCalendar extends UserFiscalCalendar_Base, UserFiscalCalendar_Relationships {
  salespersonid_bind$systemusers?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface UserFiscalCalendar_Create extends UserFiscalCalendar {
}
interface UserFiscalCalendar_Update extends UserFiscalCalendar {
}
interface UserFiscalCalendar_Select {
  businessunitid: WebAttribute<UserFiscalCalendar_Select, { businessunitid: string | null }, {  }>;
  createdby_guid: WebAttribute<UserFiscalCalendar_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UserFiscalCalendar_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UserFiscalCalendar_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  effectiveon: WebAttribute<UserFiscalCalendar_Select, { effectiveon: Date | null }, { effectiveon_formatted?: string }>;
  exchangerate: WebAttribute<UserFiscalCalendar_Select, { exchangerate: number | null }, {  }>;
  fiscalperiodtype: WebAttribute<UserFiscalCalendar_Select, { fiscalperiodtype: number | null }, {  }>;
  importsequencenumber: WebAttribute<UserFiscalCalendar_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<UserFiscalCalendar_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UserFiscalCalendar_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UserFiscalCalendar_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  period1: WebAttribute<UserFiscalCalendar_Select, { period1: number | null; transactioncurrencyid_guid: string | null }, { period1_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period10: WebAttribute<UserFiscalCalendar_Select, { period10: number | null; transactioncurrencyid_guid: string | null }, { period10_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period10_base: WebAttribute<UserFiscalCalendar_Select, { period10_base: number | null; transactioncurrencyid_guid: string | null }, { period10_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period11: WebAttribute<UserFiscalCalendar_Select, { period11: number | null; transactioncurrencyid_guid: string | null }, { period11_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period11_base: WebAttribute<UserFiscalCalendar_Select, { period11_base: number | null; transactioncurrencyid_guid: string | null }, { period11_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period12: WebAttribute<UserFiscalCalendar_Select, { period12: number | null; transactioncurrencyid_guid: string | null }, { period12_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period12_base: WebAttribute<UserFiscalCalendar_Select, { period12_base: number | null; transactioncurrencyid_guid: string | null }, { period12_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period13: WebAttribute<UserFiscalCalendar_Select, { period13: number | null; transactioncurrencyid_guid: string | null }, { period13_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period13_base: WebAttribute<UserFiscalCalendar_Select, { period13_base: number | null; transactioncurrencyid_guid: string | null }, { period13_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period1_base: WebAttribute<UserFiscalCalendar_Select, { period1_base: number | null; transactioncurrencyid_guid: string | null }, { period1_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period2: WebAttribute<UserFiscalCalendar_Select, { period2: number | null; transactioncurrencyid_guid: string | null }, { period2_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period2_base: WebAttribute<UserFiscalCalendar_Select, { period2_base: number | null; transactioncurrencyid_guid: string | null }, { period2_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period3: WebAttribute<UserFiscalCalendar_Select, { period3: number | null; transactioncurrencyid_guid: string | null }, { period3_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period3_base: WebAttribute<UserFiscalCalendar_Select, { period3_base: number | null; transactioncurrencyid_guid: string | null }, { period3_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period4: WebAttribute<UserFiscalCalendar_Select, { period4: number | null; transactioncurrencyid_guid: string | null }, { period4_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period4_base: WebAttribute<UserFiscalCalendar_Select, { period4_base: number | null; transactioncurrencyid_guid: string | null }, { period4_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period5: WebAttribute<UserFiscalCalendar_Select, { period5: number | null; transactioncurrencyid_guid: string | null }, { period5_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period5_base: WebAttribute<UserFiscalCalendar_Select, { period5_base: number | null; transactioncurrencyid_guid: string | null }, { period5_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period6: WebAttribute<UserFiscalCalendar_Select, { period6: number | null; transactioncurrencyid_guid: string | null }, { period6_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period6_base: WebAttribute<UserFiscalCalendar_Select, { period6_base: number | null; transactioncurrencyid_guid: string | null }, { period6_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period7: WebAttribute<UserFiscalCalendar_Select, { period7: number | null; transactioncurrencyid_guid: string | null }, { period7_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period7_base: WebAttribute<UserFiscalCalendar_Select, { period7_base: number | null; transactioncurrencyid_guid: string | null }, { period7_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period8: WebAttribute<UserFiscalCalendar_Select, { period8: number | null; transactioncurrencyid_guid: string | null }, { period8_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period8_base: WebAttribute<UserFiscalCalendar_Select, { period8_base: number | null; transactioncurrencyid_guid: string | null }, { period8_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period9: WebAttribute<UserFiscalCalendar_Select, { period9: number | null; transactioncurrencyid_guid: string | null }, { period9_formatted?: string; transactioncurrencyid_formatted?: string }>;
  period9_base: WebAttribute<UserFiscalCalendar_Select, { period9_base: number | null; transactioncurrencyid_guid: string | null }, { period9_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  salespersonid_guid: WebAttribute<UserFiscalCalendar_Select, { salespersonid_guid: string | null }, { salespersonid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<UserFiscalCalendar_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<UserFiscalCalendar_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  userfiscalcalendarid: WebAttribute<UserFiscalCalendar_Select, { userfiscalcalendarid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<UserFiscalCalendar_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface UserFiscalCalendar_Filter {
  businessunitid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  effectiveon: Date;
  exchangerate: any;
  fiscalperiodtype: number;
  importsequencenumber: number;
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
interface UserFiscalCalendar_Expand {
  businessunitid_businessunit: WebExpand<UserFiscalCalendar_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid_businessunit: BusinessUnit_Result }>;
  createdby: WebExpand<UserFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UserFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UserFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UserFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  salespersonid: WebExpand<UserFiscalCalendar_Expand, SystemUser_Select, SystemUser_Filter, { salespersonid: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<UserFiscalCalendar_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_userfiscalcalendar: WebExpand<UserFiscalCalendar_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_userfiscalcalendar: UserEntityInstanceData_Result[] }>;
}
interface UserFiscalCalendar_FormattedResult {
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
interface UserFiscalCalendar_Result extends UserFiscalCalendar_Base, UserFiscalCalendar_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  salespersonid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface UserFiscalCalendar_RelatedOne {
  businessunitid_businessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  salespersonid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface UserFiscalCalendar_RelatedMany {
  userentityinstancedata_userfiscalcalendar: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  userfiscalcalendars: WebMappingRetrieve<UserFiscalCalendar_Select,UserFiscalCalendar_Expand,UserFiscalCalendar_Filter,UserFiscalCalendar_Fixed,UserFiscalCalendar_Result,UserFiscalCalendar_FormattedResult>;
}
interface WebEntitiesRelated {
  userfiscalcalendars: WebMappingRelated<UserFiscalCalendar_RelatedOne,UserFiscalCalendar_RelatedMany>;
}
interface WebEntitiesCUDA {
  userfiscalcalendars: WebMappingCUDA<UserFiscalCalendar_Create,UserFiscalCalendar_Update,UserFiscalCalendar_Select>;
}
