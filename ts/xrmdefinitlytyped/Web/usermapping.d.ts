interface UserMapping_Base extends WebEntity {
  claimtype?: string | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  modifiedon?: Date | null;
  partnerapplicationtype?: usermapping_partnerapplicationtype | null;
  systemuserattributename?: string | null;
  timezoneruleversionnumber?: number | null;
  usermappingid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface UserMapping_Relationships {
  usermapping_AsyncOperations?: AsyncOperation_Result[] | null;
  usermapping_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  usermapping_ProcessSession?: ProcessSession_Result[] | null;
  usermapping_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface UserMapping extends UserMapping_Base, UserMapping_Relationships {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface UserMapping_Create extends UserMapping {
}
interface UserMapping_Update extends UserMapping {
}
interface UserMapping_Select {
  claimtype: WebAttribute<UserMapping_Select, { claimtype: string | null }, {  }>;
  createdby_guid: WebAttribute<UserMapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UserMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UserMapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<UserMapping_Select, { exchangerate: number | null }, {  }>;
  modifiedby_guid: WebAttribute<UserMapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UserMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UserMapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<UserMapping_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  partnerapplicationtype: WebAttribute<UserMapping_Select, { partnerapplicationtype: usermapping_partnerapplicationtype | null }, { partnerapplicationtype_formatted?: string }>;
  systemuserattributename: WebAttribute<UserMapping_Select, { systemuserattributename: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<UserMapping_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<UserMapping_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  usermappingid: WebAttribute<UserMapping_Select, { usermappingid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<UserMapping_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<UserMapping_Select, { versionnumber: number | null }, {  }>;
}
interface UserMapping_Filter {
  claimtype: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  partnerapplicationtype: usermapping_partnerapplicationtype;
  systemuserattributename: string;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  usermappingid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface UserMapping_Expand {
  createdby: WebExpand<UserMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UserMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UserMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UserMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<UserMapping_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrencyid: WebExpand<UserMapping_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  usermapping_AsyncOperations: WebExpand<UserMapping_Expand, AsyncOperation_Select, AsyncOperation_Filter, { usermapping_AsyncOperations: AsyncOperation_Result[] }>;
  usermapping_BulkDeleteFailures: WebExpand<UserMapping_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { usermapping_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  usermapping_ProcessSession: WebExpand<UserMapping_Expand, ProcessSession_Select, ProcessSession_Filter, { usermapping_ProcessSession: ProcessSession_Result[] }>;
  usermapping_UserEntityInstanceDatas: WebExpand<UserMapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { usermapping_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface UserMapping_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  partnerapplicationtype_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface UserMapping_Result extends UserMapping_Base, UserMapping_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface UserMapping_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface UserMapping_RelatedMany {
  usermapping_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  usermapping_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  usermapping_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  usermapping_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  usermappings: WebMappingRetrieve<UserMapping_Select,UserMapping_Expand,UserMapping_Filter,UserMapping_Fixed,UserMapping_Result,UserMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  usermappings: WebMappingRelated<UserMapping_RelatedOne,UserMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  usermappings: WebMappingCUDA<UserMapping_Create,UserMapping_Update,UserMapping_Select>;
}
