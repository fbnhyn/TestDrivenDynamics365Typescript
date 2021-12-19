interface EntitlementProducts_Base extends WebEntity {
  entitlementid?: string | null;
  entitlementproductid?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  productid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface EntitlementProducts_Relationships {
  entitlementproducts_AsyncOperations?: AsyncOperation_Result[] | null;
  entitlementproducts_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  entitlementproducts_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  entitlementproducts_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  entitlementproducts_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  product_entitlement_association?: Entitlement_Result[] | null;
}
interface EntitlementProducts extends EntitlementProducts_Base, EntitlementProducts_Relationships {
}
interface EntitlementProducts_Create extends EntitlementProducts {
}
interface EntitlementProducts_Update extends EntitlementProducts {
}
interface EntitlementProducts_Select {
  entitlementid: WebAttribute<EntitlementProducts_Select, { entitlementid: string | null }, {  }>;
  entitlementproductid: WebAttribute<EntitlementProducts_Select, { entitlementproductid: string | null }, {  }>;
  importsequencenumber: WebAttribute<EntitlementProducts_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<EntitlementProducts_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<EntitlementProducts_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  productid: WebAttribute<EntitlementProducts_Select, { productid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<EntitlementProducts_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<EntitlementProducts_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<EntitlementProducts_Select, { versionnumber: number | null }, {  }>;
}
interface EntitlementProducts_Filter {
  entitlementid: XQW.Guid;
  entitlementproductid: XQW.Guid;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  productid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface EntitlementProducts_Expand {
  entitlementproducts_AsyncOperations: WebExpand<EntitlementProducts_Expand, AsyncOperation_Select, AsyncOperation_Filter, { entitlementproducts_AsyncOperations: AsyncOperation_Result[] }>;
  entitlementproducts_BulkDeleteFailures: WebExpand<EntitlementProducts_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { entitlementproducts_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  entitlementproducts_MailboxTrackingFolders: WebExpand<EntitlementProducts_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { entitlementproducts_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  entitlementproducts_PrincipalObjectAttributeAccesses: WebExpand<EntitlementProducts_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { entitlementproducts_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  entitlementproducts_UserEntityInstanceDatas: WebExpand<EntitlementProducts_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { entitlementproducts_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  product_entitlement_association: WebExpand<EntitlementProducts_Expand, Entitlement_Select, Entitlement_Filter, { product_entitlement_association: Entitlement_Result[] }>;
}
interface EntitlementProducts_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface EntitlementProducts_Result extends EntitlementProducts_Base, EntitlementProducts_Relationships {
  "@odata.etag": string;
}
interface EntitlementProducts_RelatedOne {
}
interface EntitlementProducts_RelatedMany {
  entitlementproducts_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  entitlementproducts_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  entitlementproducts_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  entitlementproducts_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  entitlementproducts_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  product_entitlement_association: WebMappingRetrieve<Entitlement_Select,Entitlement_Expand,Entitlement_Filter,Entitlement_Fixed,Entitlement_Result,Entitlement_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entitlementproductscollection: WebMappingRetrieve<EntitlementProducts_Select,EntitlementProducts_Expand,EntitlementProducts_Filter,EntitlementProducts_Fixed,EntitlementProducts_Result,EntitlementProducts_FormattedResult>;
}
interface WebEntitiesRelated {
  entitlementproductscollection: WebMappingRelated<EntitlementProducts_RelatedOne,EntitlementProducts_RelatedMany>;
}
interface WebEntitiesCUDA {
  entitlementproductscollection: WebMappingCUDA<EntitlementProducts_Create,EntitlementProducts_Update,EntitlementProducts_Select>;
}
