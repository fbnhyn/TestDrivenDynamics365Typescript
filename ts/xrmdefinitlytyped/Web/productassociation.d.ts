interface ProductAssociation_Base extends WebEntity {
  createdon?: Date | null;
  dmtimportstate?: number | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  productassociationid?: string | null;
  productisrequired?: productassociate_productisrequired | null;
  propertycustomizationstatus?: productassociation_propertiescustomizationstatus | null;
  quantity?: number | null;
  statecode?: productassociate_statecode | null;
  statuscode?: productassociate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ProductAssociation_Relationships {
  ProductAssociation_AsyncOperations?: AsyncOperation_Result[] | null;
  ProductAssociation_DynamicProperty?: DynamicProperty_Result[] | null;
  ProductAssociation_DynamicPropertyAssociation?: DynamicPropertyAssociation_Result[] | null;
  ProductAssociation_PrincipalObjectAttributeAccess?: PrincipalObjectAttributeAccess_Result[] | null;
  ProductAssociation_ProcessSessions?: ProcessSession_Result[] | null;
  ProductAssociation_SyncErrors?: SyncError_Result[] | null;
  productAssociation_invoice_details?: InvoiceDetail_Result[] | null;
  productAssociation_opportunity_product?: OpportunityProduct_Result[] | null;
  productAssociation_quote_details?: QuoteDetail_Result[] | null;
  productAssociation_salesorder_details?: SalesOrderDetail_Result[] | null;
  productassociation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  productassociation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  userentityinstancedata_productassociation?: UserEntityInstanceData_Result[] | null;
}
interface ProductAssociation extends ProductAssociation_Base, ProductAssociation_Relationships {
  associatedproduct_bind$products?: string | null;
  productid_bind$products?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
  uomid_bind$uoms?: string | null;
}
interface ProductAssociation_Create extends ProductAssociation {
}
interface ProductAssociation_Update extends ProductAssociation {
}
interface ProductAssociation_Select {
  associatedproduct_guid: WebAttribute<ProductAssociation_Select, { associatedproduct_guid: string | null }, { associatedproduct_formatted?: string }>;
  createdby_guid: WebAttribute<ProductAssociation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ProductAssociation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ProductAssociation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  dmtimportstate: WebAttribute<ProductAssociation_Select, { dmtimportstate: number | null }, {  }>;
  exchangerate: WebAttribute<ProductAssociation_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<ProductAssociation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ProductAssociation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ProductAssociation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ProductAssociation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<ProductAssociation_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ProductAssociation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  productassociationid: WebAttribute<ProductAssociation_Select, { productassociationid: string | null }, {  }>;
  productid_guid: WebAttribute<ProductAssociation_Select, { productid_guid: string | null }, { productid_formatted?: string }>;
  productisrequired: WebAttribute<ProductAssociation_Select, { productisrequired: productassociate_productisrequired | null }, { productisrequired_formatted?: string }>;
  propertycustomizationstatus: WebAttribute<ProductAssociation_Select, { propertycustomizationstatus: productassociation_propertiescustomizationstatus | null }, { propertycustomizationstatus_formatted?: string }>;
  quantity: WebAttribute<ProductAssociation_Select, { quantity: number | null }, {  }>;
  statecode: WebAttribute<ProductAssociation_Select, { statecode: productassociate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ProductAssociation_Select, { statuscode: productassociate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ProductAssociation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ProductAssociation_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  uomid_guid: WebAttribute<ProductAssociation_Select, { uomid_guid: string | null }, { uomid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ProductAssociation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ProductAssociation_Select, { versionnumber: number | null }, {  }>;
}
interface ProductAssociation_Filter {
  associatedproduct_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  dmtimportstate: number;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  productassociationid: XQW.Guid;
  productid_guid: XQW.Guid;
  productisrequired: productassociate_productisrequired;
  propertycustomizationstatus: productassociation_propertiescustomizationstatus;
  quantity: any;
  statecode: productassociate_statecode;
  statuscode: productassociate_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  uomid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ProductAssociation_Expand {
  ProductAssociation_AsyncOperations: WebExpand<ProductAssociation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ProductAssociation_AsyncOperations: AsyncOperation_Result[] }>;
  ProductAssociation_DynamicProperty: WebExpand<ProductAssociation_Expand, DynamicProperty_Select, DynamicProperty_Filter, { ProductAssociation_DynamicProperty: DynamicProperty_Result[] }>;
  ProductAssociation_DynamicPropertyAssociation: WebExpand<ProductAssociation_Expand, DynamicPropertyAssociation_Select, DynamicPropertyAssociation_Filter, { ProductAssociation_DynamicPropertyAssociation: DynamicPropertyAssociation_Result[] }>;
  ProductAssociation_PrincipalObjectAttributeAccess: WebExpand<ProductAssociation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { ProductAssociation_PrincipalObjectAttributeAccess: PrincipalObjectAttributeAccess_Result[] }>;
  ProductAssociation_ProcessSessions: WebExpand<ProductAssociation_Expand, ProcessSession_Select, ProcessSession_Filter, { ProductAssociation_ProcessSessions: ProcessSession_Result[] }>;
  ProductAssociation_SyncErrors: WebExpand<ProductAssociation_Expand, SyncError_Select, SyncError_Filter, { ProductAssociation_SyncErrors: SyncError_Result[] }>;
  associatedproduct: WebExpand<ProductAssociation_Expand, Product_Select, Product_Filter, { associatedproduct: Product_Result }>;
  createdby: WebExpand<ProductAssociation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ProductAssociation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ProductAssociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ProductAssociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ProductAssociation_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  productAssociation_invoice_details: WebExpand<ProductAssociation_Expand, InvoiceDetail_Select, InvoiceDetail_Filter, { productAssociation_invoice_details: InvoiceDetail_Result[] }>;
  productAssociation_opportunity_product: WebExpand<ProductAssociation_Expand, OpportunityProduct_Select, OpportunityProduct_Filter, { productAssociation_opportunity_product: OpportunityProduct_Result[] }>;
  productAssociation_quote_details: WebExpand<ProductAssociation_Expand, QuoteDetail_Select, QuoteDetail_Filter, { productAssociation_quote_details: QuoteDetail_Result[] }>;
  productAssociation_salesorder_details: WebExpand<ProductAssociation_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { productAssociation_salesorder_details: SalesOrderDetail_Result[] }>;
  productassociation_BulkDeleteFailures: WebExpand<ProductAssociation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { productassociation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  productassociation_MailboxTrackingFolders: WebExpand<ProductAssociation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { productassociation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  productid: WebExpand<ProductAssociation_Expand, Product_Select, Product_Filter, { productid: Product_Result }>;
  transactioncurrencyid: WebExpand<ProductAssociation_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  uomid: WebExpand<ProductAssociation_Expand, UoM_Select, UoM_Filter, { uomid: UoM_Result }>;
  userentityinstancedata_productassociation: WebExpand<ProductAssociation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_productassociation: UserEntityInstanceData_Result[] }>;
}
interface ProductAssociation_FormattedResult {
  associatedproduct_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  productid_formatted?: string;
  productisrequired_formatted?: string;
  propertycustomizationstatus_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  uomid_formatted?: string;
}
interface ProductAssociation_Result extends ProductAssociation_Base, ProductAssociation_Relationships {
  "@odata.etag": string;
  associatedproduct_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  productid_guid: string | null;
  transactioncurrencyid_guid: string | null;
  uomid_guid: string | null;
}
interface ProductAssociation_RelatedOne {
  associatedproduct: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  productid: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  uomid: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
}
interface ProductAssociation_RelatedMany {
  ProductAssociation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ProductAssociation_DynamicProperty: WebMappingRetrieve<DynamicProperty_Select,DynamicProperty_Expand,DynamicProperty_Filter,DynamicProperty_Fixed,DynamicProperty_Result,DynamicProperty_FormattedResult>;
  ProductAssociation_DynamicPropertyAssociation: WebMappingRetrieve<DynamicPropertyAssociation_Select,DynamicPropertyAssociation_Expand,DynamicPropertyAssociation_Filter,DynamicPropertyAssociation_Fixed,DynamicPropertyAssociation_Result,DynamicPropertyAssociation_FormattedResult>;
  ProductAssociation_PrincipalObjectAttributeAccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  ProductAssociation_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  ProductAssociation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  productAssociation_invoice_details: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
  productAssociation_opportunity_product: WebMappingRetrieve<OpportunityProduct_Select,OpportunityProduct_Expand,OpportunityProduct_Filter,OpportunityProduct_Fixed,OpportunityProduct_Result,OpportunityProduct_FormattedResult>;
  productAssociation_quote_details: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  productAssociation_salesorder_details: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
  productassociation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  productassociation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  userentityinstancedata_productassociation: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  productassociations: WebMappingRetrieve<ProductAssociation_Select,ProductAssociation_Expand,ProductAssociation_Filter,ProductAssociation_Fixed,ProductAssociation_Result,ProductAssociation_FormattedResult>;
}
interface WebEntitiesRelated {
  productassociations: WebMappingRelated<ProductAssociation_RelatedOne,ProductAssociation_RelatedMany>;
}
interface WebEntitiesCUDA {
  productassociations: WebMappingCUDA<ProductAssociation_Create,ProductAssociation_Update,ProductAssociation_Select>;
}
