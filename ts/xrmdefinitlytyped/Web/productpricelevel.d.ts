interface ProductPriceLevel_Base extends WebEntity {
  amount?: number | null;
  amount_base?: number | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  organizationid?: string | null;
  overriddencreatedon?: Date | null;
  percentage?: number | null;
  pricingmethodcode?: productpricelevel_pricingmethodcode | null;
  processid?: string | null;
  productnumber?: string | null;
  productpricelevelid?: string | null;
  quantitysellingcode?: productpricelevel_quantitysellingcode | null;
  roundingoptionamount?: number | null;
  roundingoptionamount_base?: number | null;
  roundingoptioncode?: productpricelevel_roundingoptioncode | null;
  roundingpolicycode?: productpricelevel_roundingpolicycode | null;
  stageid?: string | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ProductPriceLevel_Relationships {
  ProductPriceLevel_AsyncOperations?: AsyncOperation_Result[] | null;
  ProductPriceLevel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ProductPriceLevel_ProcessSessions?: ProcessSession_Result[] | null;
  ProductPriceLevel_SyncErrors?: SyncError_Result[] | null;
  productpricelevel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  productpricelevel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  stageid_processstage?: ProcessStage_Result | null;
  userentityinstancedata_productpricelevel?: UserEntityInstanceData_Result[] | null;
}
interface ProductPriceLevel extends ProductPriceLevel_Base, ProductPriceLevel_Relationships {
  discounttypeid_bind$discounttypes?: string | null;
  productid_bind$products?: string | null;
  stageid_processstage_bind$processstages?: string | null;
  uomid_bind$uoms?: string | null;
  uomscheduleid_bind$uomschedules?: string | null;
}
interface ProductPriceLevel_Create extends ProductPriceLevel {
  pricelevelid_bind$pricelevels?: string | null;
}
interface ProductPriceLevel_Update extends ProductPriceLevel {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface ProductPriceLevel_Select {
  amount: WebAttribute<ProductPriceLevel_Select, { amount: number | null; transactioncurrencyid_guid: string | null }, { amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  amount_base: WebAttribute<ProductPriceLevel_Select, { amount_base: number | null; transactioncurrencyid_guid: string | null }, { amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  createdby_guid: WebAttribute<ProductPriceLevel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ProductPriceLevel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ProductPriceLevel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  discounttypeid_guid: WebAttribute<ProductPriceLevel_Select, { discounttypeid_guid: string | null }, { discounttypeid_formatted?: string }>;
  exchangerate: WebAttribute<ProductPriceLevel_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<ProductPriceLevel_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ProductPriceLevel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ProductPriceLevel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ProductPriceLevel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid: WebAttribute<ProductPriceLevel_Select, { organizationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ProductPriceLevel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  percentage: WebAttribute<ProductPriceLevel_Select, { percentage: number | null }, {  }>;
  pricelevelid_guid: WebAttribute<ProductPriceLevel_Select, { pricelevelid_guid: string | null }, { pricelevelid_formatted?: string }>;
  pricingmethodcode: WebAttribute<ProductPriceLevel_Select, { pricingmethodcode: productpricelevel_pricingmethodcode | null }, { pricingmethodcode_formatted?: string }>;
  processid: WebAttribute<ProductPriceLevel_Select, { processid: string | null }, {  }>;
  productid_guid: WebAttribute<ProductPriceLevel_Select, { productid_guid: string | null }, { productid_formatted?: string }>;
  productnumber: WebAttribute<ProductPriceLevel_Select, { productnumber: string | null }, {  }>;
  productpricelevelid: WebAttribute<ProductPriceLevel_Select, { productpricelevelid: string | null }, {  }>;
  quantitysellingcode: WebAttribute<ProductPriceLevel_Select, { quantitysellingcode: productpricelevel_quantitysellingcode | null }, { quantitysellingcode_formatted?: string }>;
  roundingoptionamount: WebAttribute<ProductPriceLevel_Select, { roundingoptionamount: number | null; transactioncurrencyid_guid: string | null }, { roundingoptionamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  roundingoptionamount_base: WebAttribute<ProductPriceLevel_Select, { roundingoptionamount_base: number | null; transactioncurrencyid_guid: string | null }, { roundingoptionamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  roundingoptioncode: WebAttribute<ProductPriceLevel_Select, { roundingoptioncode: productpricelevel_roundingoptioncode | null }, { roundingoptioncode_formatted?: string }>;
  roundingpolicycode: WebAttribute<ProductPriceLevel_Select, { roundingpolicycode: productpricelevel_roundingpolicycode | null }, { roundingpolicycode_formatted?: string }>;
  stageid: WebAttribute<ProductPriceLevel_Select, { stageid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ProductPriceLevel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ProductPriceLevel_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<ProductPriceLevel_Select, { traversedpath: string | null }, {  }>;
  uomid_guid: WebAttribute<ProductPriceLevel_Select, { uomid_guid: string | null }, { uomid_formatted?: string }>;
  uomscheduleid_guid: WebAttribute<ProductPriceLevel_Select, { uomscheduleid_guid: string | null }, { uomscheduleid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ProductPriceLevel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ProductPriceLevel_Select, { versionnumber: number | null }, {  }>;
}
interface ProductPriceLevel_Filter {
  amount: number;
  amount_base: number;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  discounttypeid_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid: XQW.Guid;
  overriddencreatedon: Date;
  percentage: any;
  pricelevelid_guid: XQW.Guid;
  pricingmethodcode: productpricelevel_pricingmethodcode;
  processid: XQW.Guid;
  productid_guid: XQW.Guid;
  productnumber: string;
  productpricelevelid: XQW.Guid;
  quantitysellingcode: productpricelevel_quantitysellingcode;
  roundingoptionamount: number;
  roundingoptionamount_base: number;
  roundingoptioncode: productpricelevel_roundingoptioncode;
  roundingpolicycode: productpricelevel_roundingpolicycode;
  stageid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  uomid_guid: XQW.Guid;
  uomscheduleid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ProductPriceLevel_Expand {
  ProductPriceLevel_AsyncOperations: WebExpand<ProductPriceLevel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ProductPriceLevel_AsyncOperations: AsyncOperation_Result[] }>;
  ProductPriceLevel_BulkDeleteFailures: WebExpand<ProductPriceLevel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ProductPriceLevel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ProductPriceLevel_ProcessSessions: WebExpand<ProductPriceLevel_Expand, ProcessSession_Select, ProcessSession_Filter, { ProductPriceLevel_ProcessSessions: ProcessSession_Result[] }>;
  ProductPriceLevel_SyncErrors: WebExpand<ProductPriceLevel_Expand, SyncError_Select, SyncError_Filter, { ProductPriceLevel_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<ProductPriceLevel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ProductPriceLevel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  discounttypeid: WebExpand<ProductPriceLevel_Expand, DiscountType_Select, DiscountType_Filter, { discounttypeid: DiscountType_Result }>;
  modifiedby: WebExpand<ProductPriceLevel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ProductPriceLevel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  pricelevelid: WebExpand<ProductPriceLevel_Expand, PriceLevel_Select, PriceLevel_Filter, { pricelevelid: PriceLevel_Result }>;
  productid: WebExpand<ProductPriceLevel_Expand, Product_Select, Product_Filter, { productid: Product_Result }>;
  productpricelevel_MailboxTrackingFolders: WebExpand<ProductPriceLevel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { productpricelevel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  productpricelevel_PrincipalObjectAttributeAccesses: WebExpand<ProductPriceLevel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { productpricelevel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  stageid_processstage: WebExpand<ProductPriceLevel_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid_processstage: ProcessStage_Result }>;
  transactioncurrencyid: WebExpand<ProductPriceLevel_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  uomid: WebExpand<ProductPriceLevel_Expand, UoM_Select, UoM_Filter, { uomid: UoM_Result }>;
  uomscheduleid: WebExpand<ProductPriceLevel_Expand, UoMSchedule_Select, UoMSchedule_Filter, { uomscheduleid: UoMSchedule_Result }>;
  userentityinstancedata_productpricelevel: WebExpand<ProductPriceLevel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_productpricelevel: UserEntityInstanceData_Result[] }>;
}
interface ProductPriceLevel_FormattedResult {
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
  pricelevelid_formatted?: string;
  pricingmethodcode_formatted?: string;
  productid_formatted?: string;
  quantitysellingcode_formatted?: string;
  roundingoptionamount_base_formatted?: string;
  roundingoptionamount_formatted?: string;
  roundingoptioncode_formatted?: string;
  roundingpolicycode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  uomid_formatted?: string;
  uomscheduleid_formatted?: string;
}
interface ProductPriceLevel_Result extends ProductPriceLevel_Base, ProductPriceLevel_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  discounttypeid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  pricelevelid_guid: string | null;
  productid_guid: string | null;
  transactioncurrencyid_guid: string | null;
  uomid_guid: string | null;
  uomscheduleid_guid: string | null;
}
interface ProductPriceLevel_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  discounttypeid: WebMappingRetrieve<DiscountType_Select,DiscountType_Expand,DiscountType_Filter,DiscountType_Fixed,DiscountType_Result,DiscountType_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  pricelevelid: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  productid: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  stageid_processstage: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  uomid: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  uomscheduleid: WebMappingRetrieve<UoMSchedule_Select,UoMSchedule_Expand,UoMSchedule_Filter,UoMSchedule_Fixed,UoMSchedule_Result,UoMSchedule_FormattedResult>;
}
interface ProductPriceLevel_RelatedMany {
  ProductPriceLevel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ProductPriceLevel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ProductPriceLevel_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  ProductPriceLevel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  productpricelevel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  productpricelevel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_productpricelevel: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  productpricelevels: WebMappingRetrieve<ProductPriceLevel_Select,ProductPriceLevel_Expand,ProductPriceLevel_Filter,ProductPriceLevel_Fixed,ProductPriceLevel_Result,ProductPriceLevel_FormattedResult>;
}
interface WebEntitiesRelated {
  productpricelevels: WebMappingRelated<ProductPriceLevel_RelatedOne,ProductPriceLevel_RelatedMany>;
}
interface WebEntitiesCUDA {
  productpricelevels: WebMappingCUDA<ProductPriceLevel_Create,ProductPriceLevel_Update,ProductPriceLevel_Select>;
}
