interface LeadProduct_Base extends WebEntity {
  importsequencenumber?: number | null;
  leadid?: string | null;
  leadproductid?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  productid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface LeadProduct_Relationships {
  leadproduct_AsyncOperations?: AsyncOperation_Result[] | null;
  leadproduct_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  leadproduct_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  leadproduct_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  leadproduct_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  leadproduct_association?: Product_Result[] | null;
  userentityinstancedata_leadproduct?: UserEntityInstanceData_Result[] | null;
}
interface LeadProduct extends LeadProduct_Base, LeadProduct_Relationships {
}
interface LeadProduct_Create extends LeadProduct {
}
interface LeadProduct_Update extends LeadProduct {
}
interface LeadProduct_Select {
  importsequencenumber: WebAttribute<LeadProduct_Select, { importsequencenumber: number | null }, {  }>;
  leadid: WebAttribute<LeadProduct_Select, { leadid: string | null }, {  }>;
  leadproductid: WebAttribute<LeadProduct_Select, { leadproductid: string | null }, {  }>;
  name: WebAttribute<LeadProduct_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<LeadProduct_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  productid: WebAttribute<LeadProduct_Select, { productid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<LeadProduct_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<LeadProduct_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<LeadProduct_Select, { versionnumber: number | null }, {  }>;
}
interface LeadProduct_Filter {
  importsequencenumber: number;
  leadid: XQW.Guid;
  leadproductid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  productid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface LeadProduct_Expand {
  leadproduct_AsyncOperations: WebExpand<LeadProduct_Expand, AsyncOperation_Select, AsyncOperation_Filter, { leadproduct_AsyncOperations: AsyncOperation_Result[] }>;
  leadproduct_BulkDeleteFailures: WebExpand<LeadProduct_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { leadproduct_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  leadproduct_MailboxTrackingFolders: WebExpand<LeadProduct_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { leadproduct_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  leadproduct_PrincipalObjectAttributeAccesses: WebExpand<LeadProduct_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { leadproduct_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  leadproduct_UserEntityInstanceDatas: WebExpand<LeadProduct_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { leadproduct_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  leadproduct_association: WebExpand<LeadProduct_Expand, Product_Select, Product_Filter, { leadproduct_association: Product_Result[] }>;
  userentityinstancedata_leadproduct: WebExpand<LeadProduct_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_leadproduct: UserEntityInstanceData_Result[] }>;
}
interface LeadProduct_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface LeadProduct_Result extends LeadProduct_Base, LeadProduct_Relationships {
  "@odata.etag": string;
}
interface LeadProduct_RelatedOne {
}
interface LeadProduct_RelatedMany {
  leadproduct_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  leadproduct_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  leadproduct_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  leadproduct_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  leadproduct_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  leadproduct_association: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  userentityinstancedata_leadproduct: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  leadproducts: WebMappingRetrieve<LeadProduct_Select,LeadProduct_Expand,LeadProduct_Filter,LeadProduct_Fixed,LeadProduct_Result,LeadProduct_FormattedResult>;
}
interface WebEntitiesRelated {
  leadproducts: WebMappingRelated<LeadProduct_RelatedOne,LeadProduct_RelatedMany>;
}
interface WebEntitiesCUDA {
  leadproducts: WebMappingCUDA<LeadProduct_Create,LeadProduct_Update,LeadProduct_Select>;
}
