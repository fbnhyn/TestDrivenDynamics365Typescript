interface ProductSalesLiterature_Base extends WebEntity {
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  productid?: string | null;
  productsalesliteratureid?: string | null;
  salesliteratureid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ProductSalesLiterature_Relationships {
  productsalesliterature_AsyncOperations?: AsyncOperation_Result[] | null;
  productsalesliterature_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  productsalesliterature_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  productsalesliterature_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  productsalesliterature_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  productsalesliterature_association?: SalesLiterature_Result[] | null;
  userentityinstancedata_productsalesliterature?: UserEntityInstanceData_Result[] | null;
}
interface ProductSalesLiterature extends ProductSalesLiterature_Base, ProductSalesLiterature_Relationships {
}
interface ProductSalesLiterature_Create extends ProductSalesLiterature {
}
interface ProductSalesLiterature_Update extends ProductSalesLiterature {
}
interface ProductSalesLiterature_Select {
  importsequencenumber: WebAttribute<ProductSalesLiterature_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<ProductSalesLiterature_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ProductSalesLiterature_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  productid: WebAttribute<ProductSalesLiterature_Select, { productid: string | null }, {  }>;
  productsalesliteratureid: WebAttribute<ProductSalesLiterature_Select, { productsalesliteratureid: string | null }, {  }>;
  salesliteratureid: WebAttribute<ProductSalesLiterature_Select, { salesliteratureid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ProductSalesLiterature_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ProductSalesLiterature_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ProductSalesLiterature_Select, { versionnumber: number | null }, {  }>;
}
interface ProductSalesLiterature_Filter {
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  productid: XQW.Guid;
  productsalesliteratureid: XQW.Guid;
  salesliteratureid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ProductSalesLiterature_Expand {
  productsalesliterature_AsyncOperations: WebExpand<ProductSalesLiterature_Expand, AsyncOperation_Select, AsyncOperation_Filter, { productsalesliterature_AsyncOperations: AsyncOperation_Result[] }>;
  productsalesliterature_BulkDeleteFailures: WebExpand<ProductSalesLiterature_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { productsalesliterature_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  productsalesliterature_MailboxTrackingFolders: WebExpand<ProductSalesLiterature_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { productsalesliterature_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  productsalesliterature_PrincipalObjectAttributeAccesses: WebExpand<ProductSalesLiterature_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { productsalesliterature_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  productsalesliterature_UserEntityInstanceDatas: WebExpand<ProductSalesLiterature_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { productsalesliterature_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  productsalesliterature_association: WebExpand<ProductSalesLiterature_Expand, SalesLiterature_Select, SalesLiterature_Filter, { productsalesliterature_association: SalesLiterature_Result[] }>;
  userentityinstancedata_productsalesliterature: WebExpand<ProductSalesLiterature_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_productsalesliterature: UserEntityInstanceData_Result[] }>;
}
interface ProductSalesLiterature_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface ProductSalesLiterature_Result extends ProductSalesLiterature_Base, ProductSalesLiterature_Relationships {
  "@odata.etag": string;
}
interface ProductSalesLiterature_RelatedOne {
}
interface ProductSalesLiterature_RelatedMany {
  productsalesliterature_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  productsalesliterature_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  productsalesliterature_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  productsalesliterature_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  productsalesliterature_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  productsalesliterature_association: WebMappingRetrieve<SalesLiterature_Select,SalesLiterature_Expand,SalesLiterature_Filter,SalesLiterature_Fixed,SalesLiterature_Result,SalesLiterature_FormattedResult>;
  userentityinstancedata_productsalesliterature: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  productsalesliteratures: WebMappingRetrieve<ProductSalesLiterature_Select,ProductSalesLiterature_Expand,ProductSalesLiterature_Filter,ProductSalesLiterature_Fixed,ProductSalesLiterature_Result,ProductSalesLiterature_FormattedResult>;
}
interface WebEntitiesRelated {
  productsalesliteratures: WebMappingRelated<ProductSalesLiterature_RelatedOne,ProductSalesLiterature_RelatedMany>;
}
interface WebEntitiesCUDA {
  productsalesliteratures: WebMappingCUDA<ProductSalesLiterature_Create,ProductSalesLiterature_Update,ProductSalesLiterature_Select>;
}
