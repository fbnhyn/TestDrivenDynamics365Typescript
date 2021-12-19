interface CompetitorProduct_Base extends WebEntity {
  competitorid?: string | null;
  competitorproductid?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  productid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface CompetitorProduct_Relationships {
  competitorproduct_AsyncOperations?: AsyncOperation_Result[] | null;
  competitorproduct_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  competitorproduct_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  competitorproduct_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  competitorproduct_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  competitorproduct_association?: Product_Result[] | null;
  userentityinstancedata_competitorproduct?: UserEntityInstanceData_Result[] | null;
}
interface CompetitorProduct extends CompetitorProduct_Base, CompetitorProduct_Relationships {
}
interface CompetitorProduct_Create extends CompetitorProduct {
}
interface CompetitorProduct_Update extends CompetitorProduct {
}
interface CompetitorProduct_Select {
  competitorid: WebAttribute<CompetitorProduct_Select, { competitorid: string | null }, {  }>;
  competitorproductid: WebAttribute<CompetitorProduct_Select, { competitorproductid: string | null }, {  }>;
  importsequencenumber: WebAttribute<CompetitorProduct_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<CompetitorProduct_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<CompetitorProduct_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  productid: WebAttribute<CompetitorProduct_Select, { productid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<CompetitorProduct_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CompetitorProduct_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<CompetitorProduct_Select, { versionnumber: number | null }, {  }>;
}
interface CompetitorProduct_Filter {
  competitorid: XQW.Guid;
  competitorproductid: XQW.Guid;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  productid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface CompetitorProduct_Expand {
  competitorproduct_AsyncOperations: WebExpand<CompetitorProduct_Expand, AsyncOperation_Select, AsyncOperation_Filter, { competitorproduct_AsyncOperations: AsyncOperation_Result[] }>;
  competitorproduct_BulkDeleteFailures: WebExpand<CompetitorProduct_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { competitorproduct_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  competitorproduct_MailboxTrackingFolders: WebExpand<CompetitorProduct_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { competitorproduct_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  competitorproduct_PrincipalObjectAttributeAccesses: WebExpand<CompetitorProduct_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { competitorproduct_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  competitorproduct_UserEntityInstanceDatas: WebExpand<CompetitorProduct_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { competitorproduct_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  competitorproduct_association: WebExpand<CompetitorProduct_Expand, Product_Select, Product_Filter, { competitorproduct_association: Product_Result[] }>;
  userentityinstancedata_competitorproduct: WebExpand<CompetitorProduct_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_competitorproduct: UserEntityInstanceData_Result[] }>;
}
interface CompetitorProduct_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface CompetitorProduct_Result extends CompetitorProduct_Base, CompetitorProduct_Relationships {
  "@odata.etag": string;
}
interface CompetitorProduct_RelatedOne {
}
interface CompetitorProduct_RelatedMany {
  competitorproduct_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  competitorproduct_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  competitorproduct_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  competitorproduct_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  competitorproduct_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  competitorproduct_association: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  userentityinstancedata_competitorproduct: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  competitorproducts: WebMappingRetrieve<CompetitorProduct_Select,CompetitorProduct_Expand,CompetitorProduct_Filter,CompetitorProduct_Fixed,CompetitorProduct_Result,CompetitorProduct_FormattedResult>;
}
interface WebEntitiesRelated {
  competitorproducts: WebMappingRelated<CompetitorProduct_RelatedOne,CompetitorProduct_RelatedMany>;
}
interface WebEntitiesCUDA {
  competitorproducts: WebMappingCUDA<CompetitorProduct_Create,CompetitorProduct_Update,CompetitorProduct_Select>;
}
