interface DiscountType_Base extends WebEntity {
  createdon?: Date | null;
  description?: string | null;
  discounttypeid?: string | null;
  importsequencenumber?: number | null;
  isamounttype?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: discounttype_statecode | null;
  statuscode?: discounttype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface DiscountType_Relationships {
  DiscountType_AsyncOperations?: AsyncOperation_Result[] | null;
  DiscountType_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  DiscountType_ProcessSessions?: ProcessSession_Result[] | null;
  DiscountType_SyncErrors?: SyncError_Result[] | null;
  discount_type_discounts?: Discount_Result[] | null;
  discount_type_product_price_levels?: ProductPriceLevel_Result[] | null;
  discounttype_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  discounttype_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_discounttype?: UserEntityInstanceData_Result[] | null;
}
interface DiscountType extends DiscountType_Base, DiscountType_Relationships {
}
interface DiscountType_Create extends DiscountType {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface DiscountType_Update extends DiscountType {
}
interface DiscountType_Select {
  createdby_guid: WebAttribute<DiscountType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<DiscountType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<DiscountType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<DiscountType_Select, { description: string | null }, {  }>;
  discounttypeid: WebAttribute<DiscountType_Select, { discounttypeid: string | null }, {  }>;
  importsequencenumber: WebAttribute<DiscountType_Select, { importsequencenumber: number | null }, {  }>;
  isamounttype: WebAttribute<DiscountType_Select, { isamounttype: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<DiscountType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<DiscountType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<DiscountType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<DiscountType_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<DiscountType_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<DiscountType_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<DiscountType_Select, { statecode: discounttype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<DiscountType_Select, { statuscode: discounttype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<DiscountType_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<DiscountType_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<DiscountType_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<DiscountType_Select, { versionnumber: number | null }, {  }>;
}
interface DiscountType_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  discounttypeid: XQW.Guid;
  importsequencenumber: number;
  isamounttype: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: discounttype_statecode;
  statuscode: discounttype_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface DiscountType_Expand {
  DiscountType_AsyncOperations: WebExpand<DiscountType_Expand, AsyncOperation_Select, AsyncOperation_Filter, { DiscountType_AsyncOperations: AsyncOperation_Result[] }>;
  DiscountType_BulkDeleteFailures: WebExpand<DiscountType_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { DiscountType_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  DiscountType_ProcessSessions: WebExpand<DiscountType_Expand, ProcessSession_Select, ProcessSession_Filter, { DiscountType_ProcessSessions: ProcessSession_Result[] }>;
  DiscountType_SyncErrors: WebExpand<DiscountType_Expand, SyncError_Select, SyncError_Filter, { DiscountType_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<DiscountType_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<DiscountType_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  discount_type_discounts: WebExpand<DiscountType_Expand, Discount_Select, Discount_Filter, { discount_type_discounts: Discount_Result[] }>;
  discount_type_product_price_levels: WebExpand<DiscountType_Expand, ProductPriceLevel_Select, ProductPriceLevel_Filter, { discount_type_product_price_levels: ProductPriceLevel_Result[] }>;
  discounttype_MailboxTrackingFolders: WebExpand<DiscountType_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { discounttype_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  discounttype_PrincipalObjectAttributeAccesses: WebExpand<DiscountType_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { discounttype_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  modifiedby: WebExpand<DiscountType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<DiscountType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<DiscountType_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrencyid: WebExpand<DiscountType_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_discounttype: WebExpand<DiscountType_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_discounttype: UserEntityInstanceData_Result[] }>;
}
interface DiscountType_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface DiscountType_Result extends DiscountType_Base, DiscountType_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface DiscountType_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface DiscountType_RelatedMany {
  DiscountType_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  DiscountType_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  DiscountType_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  DiscountType_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  discount_type_discounts: WebMappingRetrieve<Discount_Select,Discount_Expand,Discount_Filter,Discount_Fixed,Discount_Result,Discount_FormattedResult>;
  discount_type_product_price_levels: WebMappingRetrieve<ProductPriceLevel_Select,ProductPriceLevel_Expand,ProductPriceLevel_Filter,ProductPriceLevel_Fixed,ProductPriceLevel_Result,ProductPriceLevel_FormattedResult>;
  discounttype_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  discounttype_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_discounttype: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  discounttypes: WebMappingRetrieve<DiscountType_Select,DiscountType_Expand,DiscountType_Filter,DiscountType_Fixed,DiscountType_Result,DiscountType_FormattedResult>;
}
interface WebEntitiesRelated {
  discounttypes: WebMappingRelated<DiscountType_RelatedOne,DiscountType_RelatedMany>;
}
interface WebEntitiesCUDA {
  discounttypes: WebMappingCUDA<DiscountType_Create,DiscountType_Update,DiscountType_Select>;
}
