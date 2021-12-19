interface EntitlementTemplateProducts_Base extends WebEntity {
  entitlementtemplateid?: string | null;
  entitlementtemplateproductid?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  productid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface EntitlementTemplateProducts_Relationships {
  entitlementtemplateproducts_AsyncOperations?: AsyncOperation_Result[] | null;
  entitlementtemplateproducts_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  entitlementtemplateproducts_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  entitlementtemplateproducts_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  entitlementtemplateproducts_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  product_entitlementtemplate_association?: EntitlementTemplate_Result[] | null;
}
interface EntitlementTemplateProducts extends EntitlementTemplateProducts_Base, EntitlementTemplateProducts_Relationships {
}
interface EntitlementTemplateProducts_Create extends EntitlementTemplateProducts {
}
interface EntitlementTemplateProducts_Update extends EntitlementTemplateProducts {
}
interface EntitlementTemplateProducts_Select {
  entitlementtemplateid: WebAttribute<EntitlementTemplateProducts_Select, { entitlementtemplateid: string | null }, {  }>;
  entitlementtemplateproductid: WebAttribute<EntitlementTemplateProducts_Select, { entitlementtemplateproductid: string | null }, {  }>;
  importsequencenumber: WebAttribute<EntitlementTemplateProducts_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<EntitlementTemplateProducts_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<EntitlementTemplateProducts_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  productid: WebAttribute<EntitlementTemplateProducts_Select, { productid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<EntitlementTemplateProducts_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<EntitlementTemplateProducts_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<EntitlementTemplateProducts_Select, { versionnumber: number | null }, {  }>;
}
interface EntitlementTemplateProducts_Filter {
  entitlementtemplateid: XQW.Guid;
  entitlementtemplateproductid: XQW.Guid;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  productid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface EntitlementTemplateProducts_Expand {
  entitlementtemplateproducts_AsyncOperations: WebExpand<EntitlementTemplateProducts_Expand, AsyncOperation_Select, AsyncOperation_Filter, { entitlementtemplateproducts_AsyncOperations: AsyncOperation_Result[] }>;
  entitlementtemplateproducts_BulkDeleteFailures: WebExpand<EntitlementTemplateProducts_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { entitlementtemplateproducts_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  entitlementtemplateproducts_MailboxTrackingFolders: WebExpand<EntitlementTemplateProducts_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { entitlementtemplateproducts_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  entitlementtemplateproducts_PrincipalObjectAttributeAccesses: WebExpand<EntitlementTemplateProducts_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { entitlementtemplateproducts_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  entitlementtemplateproducts_UserEntityInstanceDatas: WebExpand<EntitlementTemplateProducts_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { entitlementtemplateproducts_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  product_entitlementtemplate_association: WebExpand<EntitlementTemplateProducts_Expand, EntitlementTemplate_Select, EntitlementTemplate_Filter, { product_entitlementtemplate_association: EntitlementTemplate_Result[] }>;
}
interface EntitlementTemplateProducts_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface EntitlementTemplateProducts_Result extends EntitlementTemplateProducts_Base, EntitlementTemplateProducts_Relationships {
  "@odata.etag": string;
}
interface EntitlementTemplateProducts_RelatedOne {
}
interface EntitlementTemplateProducts_RelatedMany {
  entitlementtemplateproducts_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  entitlementtemplateproducts_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  entitlementtemplateproducts_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  entitlementtemplateproducts_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  entitlementtemplateproducts_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  product_entitlementtemplate_association: WebMappingRetrieve<EntitlementTemplate_Select,EntitlementTemplate_Expand,EntitlementTemplate_Filter,EntitlementTemplate_Fixed,EntitlementTemplate_Result,EntitlementTemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entitlementtemplateproductscollection: WebMappingRetrieve<EntitlementTemplateProducts_Select,EntitlementTemplateProducts_Expand,EntitlementTemplateProducts_Filter,EntitlementTemplateProducts_Fixed,EntitlementTemplateProducts_Result,EntitlementTemplateProducts_FormattedResult>;
}
interface WebEntitiesRelated {
  entitlementtemplateproductscollection: WebMappingRelated<EntitlementTemplateProducts_RelatedOne,EntitlementTemplateProducts_RelatedMany>;
}
interface WebEntitiesCUDA {
  entitlementtemplateproductscollection: WebMappingCUDA<EntitlementTemplateProducts_Create,EntitlementTemplateProducts_Update,EntitlementTemplateProducts_Select>;
}
