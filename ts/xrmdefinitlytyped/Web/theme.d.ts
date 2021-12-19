interface Theme_Base extends WebEntity {
  accentcolor?: string | null;
  backgroundcolor?: string | null;
  controlborder?: string | null;
  controlshade?: string | null;
  createdon?: Date | null;
  defaultcustomentitycolor?: string | null;
  defaultentitycolor?: string | null;
  exchangerate?: number | null;
  globallinkcolor?: string | null;
  headercolor?: string | null;
  hoverlinkeffect?: string | null;
  importsequencenumber?: number | null;
  isdefaulttheme?: boolean | null;
  logotooltip?: string | null;
  maincolor?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  navbarbackgroundcolor?: string | null;
  navbarshelfcolor?: string | null;
  overriddencreatedon?: Date | null;
  pageheaderbackgroundcolor?: string | null;
  panelheaderbackgroundcolor?: string | null;
  processcontrolcolor?: string | null;
  selectedlinkeffect?: string | null;
  statecode?: theme_statecode | null;
  statuscode?: theme_statuscode | null;
  themeid?: string | null;
  timezoneruleversionnumber?: number | null;
  type?: boolean | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Theme_Relationships {
  logoimage?: WebResource_Result | null;
  theme_AsyncOperations?: AsyncOperation_Result[] | null;
  theme_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  theme_ProcessSession?: ProcessSession_Result[] | null;
  theme_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface Theme extends Theme_Base, Theme_Relationships {
  logoimage_bind$webresourceset?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Theme_Create extends Theme {
}
interface Theme_Update extends Theme {
}
interface Theme_Select {
  accentcolor: WebAttribute<Theme_Select, { accentcolor: string | null }, {  }>;
  backgroundcolor: WebAttribute<Theme_Select, { backgroundcolor: string | null }, {  }>;
  controlborder: WebAttribute<Theme_Select, { controlborder: string | null }, {  }>;
  controlshade: WebAttribute<Theme_Select, { controlshade: string | null }, {  }>;
  createdby_guid: WebAttribute<Theme_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Theme_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Theme_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  defaultcustomentitycolor: WebAttribute<Theme_Select, { defaultcustomentitycolor: string | null }, {  }>;
  defaultentitycolor: WebAttribute<Theme_Select, { defaultentitycolor: string | null }, {  }>;
  exchangerate: WebAttribute<Theme_Select, { exchangerate: number | null }, {  }>;
  globallinkcolor: WebAttribute<Theme_Select, { globallinkcolor: string | null }, {  }>;
  headercolor: WebAttribute<Theme_Select, { headercolor: string | null }, {  }>;
  hoverlinkeffect: WebAttribute<Theme_Select, { hoverlinkeffect: string | null }, {  }>;
  importsequencenumber: WebAttribute<Theme_Select, { importsequencenumber: number | null }, {  }>;
  isdefaulttheme: WebAttribute<Theme_Select, { isdefaulttheme: boolean | null }, {  }>;
  logoid_guid: WebAttribute<Theme_Select, { logoid_guid: string | null }, { logoid_formatted?: string }>;
  logotooltip: WebAttribute<Theme_Select, { logotooltip: string | null }, {  }>;
  maincolor: WebAttribute<Theme_Select, { maincolor: string | null }, {  }>;
  modifiedby_guid: WebAttribute<Theme_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Theme_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Theme_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Theme_Select, { name: string | null }, {  }>;
  navbarbackgroundcolor: WebAttribute<Theme_Select, { navbarbackgroundcolor: string | null }, {  }>;
  navbarshelfcolor: WebAttribute<Theme_Select, { navbarshelfcolor: string | null }, {  }>;
  organizationid_guid: WebAttribute<Theme_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Theme_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  pageheaderbackgroundcolor: WebAttribute<Theme_Select, { pageheaderbackgroundcolor: string | null }, {  }>;
  panelheaderbackgroundcolor: WebAttribute<Theme_Select, { panelheaderbackgroundcolor: string | null }, {  }>;
  processcontrolcolor: WebAttribute<Theme_Select, { processcontrolcolor: string | null }, {  }>;
  selectedlinkeffect: WebAttribute<Theme_Select, { selectedlinkeffect: string | null }, {  }>;
  statecode: WebAttribute<Theme_Select, { statecode: theme_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Theme_Select, { statuscode: theme_statuscode | null }, { statuscode_formatted?: string }>;
  themeid: WebAttribute<Theme_Select, { themeid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Theme_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Theme_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  type: WebAttribute<Theme_Select, { type: boolean | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Theme_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Theme_Select, { versionnumber: number | null }, {  }>;
}
interface Theme_Filter {
  accentcolor: string;
  backgroundcolor: string;
  controlborder: string;
  controlshade: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  defaultcustomentitycolor: string;
  defaultentitycolor: string;
  exchangerate: any;
  globallinkcolor: string;
  headercolor: string;
  hoverlinkeffect: string;
  importsequencenumber: number;
  isdefaulttheme: boolean;
  logoid_guid: XQW.Guid;
  logotooltip: string;
  maincolor: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  navbarbackgroundcolor: string;
  navbarshelfcolor: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  pageheaderbackgroundcolor: string;
  panelheaderbackgroundcolor: string;
  processcontrolcolor: string;
  selectedlinkeffect: string;
  statecode: theme_statecode;
  statuscode: theme_statuscode;
  themeid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  type: boolean;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Theme_Expand {
  createdby: WebExpand<Theme_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Theme_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  logoimage: WebExpand<Theme_Expand, WebResource_Select, WebResource_Filter, { logoimage: WebResource_Result }>;
  modifiedby: WebExpand<Theme_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Theme_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<Theme_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  theme_AsyncOperations: WebExpand<Theme_Expand, AsyncOperation_Select, AsyncOperation_Filter, { theme_AsyncOperations: AsyncOperation_Result[] }>;
  theme_BulkDeleteFailures: WebExpand<Theme_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { theme_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  theme_ProcessSession: WebExpand<Theme_Expand, ProcessSession_Select, ProcessSession_Filter, { theme_ProcessSession: ProcessSession_Result[] }>;
  theme_UserEntityInstanceDatas: WebExpand<Theme_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { theme_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  transactioncurrencyid: WebExpand<Theme_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface Theme_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  logoid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Theme_Result extends Theme_Base, Theme_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  logoid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Theme_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  logoimage: WebMappingRetrieve<WebResource_Select,WebResource_Expand,WebResource_Filter,WebResource_Fixed,WebResource_Result,WebResource_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Theme_RelatedMany {
  theme_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  theme_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  theme_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  theme_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  themes: WebMappingRetrieve<Theme_Select,Theme_Expand,Theme_Filter,Theme_Fixed,Theme_Result,Theme_FormattedResult>;
}
interface WebEntitiesRelated {
  themes: WebMappingRelated<Theme_RelatedOne,Theme_RelatedMany>;
}
interface WebEntitiesCUDA {
  themes: WebMappingCUDA<Theme_Create,Theme_Update,Theme_Select>;
}
