interface ProductSubstitute_Base extends WebEntity {
  createdon?: Date | null;
  direction?: productsellingrelationshipdirection | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  productsubstituteid?: string | null;
  salesrelationshiptype?: productsellingrelationshiptype | null;
  statecode?: productsubstitute_statecode | null;
  statuscode?: productsubstitute_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ProductSubstitute_Relationships {
  ProductSubstitute_AsyncOperations?: AsyncOperation_Result[] | null;
  ProductSubstitute_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ProductSubstitute_PrincipalObjectAttributeAccess?: PrincipalObjectAttributeAccess_Result[] | null;
  ProductSubstitute_ProcessSession?: ProcessSession_Result[] | null;
  ProductSubstitute_SyncErrors?: SyncError_Result[] | null;
  productsubstitute_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  productsubstitute_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface ProductSubstitute extends ProductSubstitute_Base, ProductSubstitute_Relationships {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface ProductSubstitute_Create extends ProductSubstitute {
  productid_bind$products?: string | null;
  substitutedproductid_bind$products?: string | null;
}
interface ProductSubstitute_Update extends ProductSubstitute {
}
interface ProductSubstitute_Select {
  createdby_guid: WebAttribute<ProductSubstitute_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ProductSubstitute_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ProductSubstitute_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  direction: WebAttribute<ProductSubstitute_Select, { direction: productsellingrelationshipdirection | null }, { direction_formatted?: string }>;
  exchangerate: WebAttribute<ProductSubstitute_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<ProductSubstitute_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ProductSubstitute_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ProductSubstitute_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ProductSubstitute_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ProductSubstitute_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<ProductSubstitute_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ProductSubstitute_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  productid_guid: WebAttribute<ProductSubstitute_Select, { productid_guid: string | null }, { productid_formatted?: string }>;
  productsubstituteid: WebAttribute<ProductSubstitute_Select, { productsubstituteid: string | null }, {  }>;
  salesrelationshiptype: WebAttribute<ProductSubstitute_Select, { salesrelationshiptype: productsellingrelationshiptype | null }, { salesrelationshiptype_formatted?: string }>;
  statecode: WebAttribute<ProductSubstitute_Select, { statecode: productsubstitute_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ProductSubstitute_Select, { statuscode: productsubstitute_statuscode | null }, { statuscode_formatted?: string }>;
  substitutedproductid_guid: WebAttribute<ProductSubstitute_Select, { substitutedproductid_guid: string | null }, { substitutedproductid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ProductSubstitute_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ProductSubstitute_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ProductSubstitute_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ProductSubstitute_Select, { versionnumber: number | null }, {  }>;
}
interface ProductSubstitute_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  direction: productsellingrelationshipdirection;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  productid_guid: XQW.Guid;
  productsubstituteid: XQW.Guid;
  salesrelationshiptype: productsellingrelationshiptype;
  statecode: productsubstitute_statecode;
  statuscode: productsubstitute_statuscode;
  substitutedproductid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ProductSubstitute_Expand {
  ProductSubstitute_AsyncOperations: WebExpand<ProductSubstitute_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ProductSubstitute_AsyncOperations: AsyncOperation_Result[] }>;
  ProductSubstitute_BulkDeleteFailures: WebExpand<ProductSubstitute_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ProductSubstitute_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ProductSubstitute_PrincipalObjectAttributeAccess: WebExpand<ProductSubstitute_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { ProductSubstitute_PrincipalObjectAttributeAccess: PrincipalObjectAttributeAccess_Result[] }>;
  ProductSubstitute_ProcessSession: WebExpand<ProductSubstitute_Expand, ProcessSession_Select, ProcessSession_Filter, { ProductSubstitute_ProcessSession: ProcessSession_Result[] }>;
  ProductSubstitute_SyncErrors: WebExpand<ProductSubstitute_Expand, SyncError_Select, SyncError_Filter, { ProductSubstitute_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<ProductSubstitute_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ProductSubstitute_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ProductSubstitute_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ProductSubstitute_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ProductSubstitute_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  productid: WebExpand<ProductSubstitute_Expand, Product_Select, Product_Filter, { productid: Product_Result }>;
  productsubstitute_MailboxTrackingFolders: WebExpand<ProductSubstitute_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { productsubstitute_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  productsubstitute_UserEntityInstanceDatas: WebExpand<ProductSubstitute_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { productsubstitute_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  substitutedproductid: WebExpand<ProductSubstitute_Expand, Product_Select, Product_Filter, { substitutedproductid: Product_Result }>;
  transactioncurrencyid: WebExpand<ProductSubstitute_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface ProductSubstitute_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  direction_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  productid_formatted?: string;
  salesrelationshiptype_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  substitutedproductid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface ProductSubstitute_Result extends ProductSubstitute_Base, ProductSubstitute_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  productid_guid: string | null;
  substitutedproductid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface ProductSubstitute_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  productid: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  substitutedproductid: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface ProductSubstitute_RelatedMany {
  ProductSubstitute_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ProductSubstitute_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ProductSubstitute_PrincipalObjectAttributeAccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  ProductSubstitute_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  ProductSubstitute_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  productsubstitute_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  productsubstitute_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  productsubstitutes: WebMappingRetrieve<ProductSubstitute_Select,ProductSubstitute_Expand,ProductSubstitute_Filter,ProductSubstitute_Fixed,ProductSubstitute_Result,ProductSubstitute_FormattedResult>;
}
interface WebEntitiesRelated {
  productsubstitutes: WebMappingRelated<ProductSubstitute_RelatedOne,ProductSubstitute_RelatedMany>;
}
interface WebEntitiesCUDA {
  productsubstitutes: WebMappingCUDA<ProductSubstitute_Create,ProductSubstitute_Update,ProductSubstitute_Select>;
}
