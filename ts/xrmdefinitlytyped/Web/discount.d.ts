interface Discount_Base extends WebEntity {
  amount?: number | null;
  amount_base?: number | null;
  createdon?: Date | null;
  discountid?: string | null;
  exchangerate?: number | null;
  highquantity?: number | null;
  importsequencenumber?: number | null;
  isamounttype?: boolean | null;
  lowquantity?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  organizationid?: string | null;
  overriddencreatedon?: Date | null;
  percentage?: number | null;
  statuscode?: discount_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Discount_Relationships {
  Discount_AsyncOperations?: AsyncOperation_Result[] | null;
  Discount_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Discount_ProcessSessions?: ProcessSession_Result[] | null;
  Discount_SyncErrors?: SyncError_Result[] | null;
  discount_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  discount_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_discount?: UserEntityInstanceData_Result[] | null;
}
interface Discount extends Discount_Base, Discount_Relationships {
  discounttypeid_bind$discounttypes?: string | null;
}
interface Discount_Create extends Discount {
}
interface Discount_Update extends Discount {
}
interface Discount_Select {
  amount: WebAttribute<Discount_Select, { amount: number | null; transactioncurrencyid_guid: string | null }, { amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  amount_base: WebAttribute<Discount_Select, { amount_base: number | null; transactioncurrencyid_guid: string | null }, { amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  createdby_guid: WebAttribute<Discount_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Discount_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Discount_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  discountid: WebAttribute<Discount_Select, { discountid: string | null }, {  }>;
  discounttypeid_guid: WebAttribute<Discount_Select, { discounttypeid_guid: string | null }, { discounttypeid_formatted?: string }>;
  exchangerate: WebAttribute<Discount_Select, { exchangerate: number | null }, {  }>;
  highquantity: WebAttribute<Discount_Select, { highquantity: number | null }, {  }>;
  importsequencenumber: WebAttribute<Discount_Select, { importsequencenumber: number | null }, {  }>;
  isamounttype: WebAttribute<Discount_Select, { isamounttype: boolean | null }, {  }>;
  lowquantity: WebAttribute<Discount_Select, { lowquantity: number | null }, {  }>;
  modifiedby_guid: WebAttribute<Discount_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Discount_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Discount_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Discount_Select, { name: string | null }, {  }>;
  organizationid: WebAttribute<Discount_Select, { organizationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Discount_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  percentage: WebAttribute<Discount_Select, { percentage: number | null }, {  }>;
  statuscode: WebAttribute<Discount_Select, { statuscode: discount_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<Discount_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Discount_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<Discount_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Discount_Select, { versionnumber: number | null }, {  }>;
}
interface Discount_Filter {
  amount: number;
  amount_base: number;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  discountid: XQW.Guid;
  discounttypeid_guid: XQW.Guid;
  exchangerate: any;
  highquantity: any;
  importsequencenumber: number;
  isamounttype: boolean;
  lowquantity: any;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid: XQW.Guid;
  overriddencreatedon: Date;
  percentage: any;
  statuscode: discount_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Discount_Expand {
  Discount_AsyncOperations: WebExpand<Discount_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Discount_AsyncOperations: AsyncOperation_Result[] }>;
  Discount_BulkDeleteFailures: WebExpand<Discount_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Discount_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Discount_ProcessSessions: WebExpand<Discount_Expand, ProcessSession_Select, ProcessSession_Filter, { Discount_ProcessSessions: ProcessSession_Result[] }>;
  Discount_SyncErrors: WebExpand<Discount_Expand, SyncError_Select, SyncError_Filter, { Discount_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<Discount_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Discount_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  discount_MailboxTrackingFolders: WebExpand<Discount_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { discount_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  discount_PrincipalObjectAttributeAccesses: WebExpand<Discount_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { discount_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  discounttypeid: WebExpand<Discount_Expand, DiscountType_Select, DiscountType_Filter, { discounttypeid: DiscountType_Result }>;
  modifiedby: WebExpand<Discount_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Discount_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<Discount_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_discount: WebExpand<Discount_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_discount: UserEntityInstanceData_Result[] }>;
}
interface Discount_FormattedResult {
  amount_base_formatted?: string;
  amount_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  discounttypeid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Discount_Result extends Discount_Base, Discount_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  discounttypeid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Discount_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  discounttypeid: WebMappingRetrieve<DiscountType_Select,DiscountType_Expand,DiscountType_Filter,DiscountType_Fixed,DiscountType_Result,DiscountType_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Discount_RelatedMany {
  Discount_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Discount_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Discount_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Discount_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  discount_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  discount_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_discount: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  discounts: WebMappingRetrieve<Discount_Select,Discount_Expand,Discount_Filter,Discount_Fixed,Discount_Result,Discount_FormattedResult>;
}
interface WebEntitiesRelated {
  discounts: WebMappingRelated<Discount_RelatedOne,Discount_RelatedMany>;
}
interface WebEntitiesCUDA {
  discounts: WebMappingCUDA<Discount_Create,Discount_Update,Discount_Select>;
}
