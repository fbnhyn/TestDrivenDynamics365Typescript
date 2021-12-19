interface DynamicPropertyAssociation_Base extends WebEntity {
  associationstatus?: dynamicpropertyassociation_associationstatus | null;
  createdon?: Date | null;
  dmtimportstate?: number | null;
  dynamicpropertyassociationid?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  inheritancestate?: dynamicpropertyassociation_inheritancestate | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface DynamicPropertyAssociation_Relationships {
  dynamicpropertyassociation_AsyncOperations?: AsyncOperation_Result[] | null;
  dynamicpropertyassociation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  dynamicpropertyassociation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  dynamicpropertyassociation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  dynamicpropertyassociation_SyncErrors?: SyncError_Result[] | null;
  dynamicpropertyassociation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  regardingobjectid_product?: Product_Result | null;
  regardingobjectid_productassociation?: ProductAssociation_Result | null;
}
interface DynamicPropertyAssociation extends DynamicPropertyAssociation_Base, DynamicPropertyAssociation_Relationships {
  dynamicpropertyid_bind$dynamicproperties?: string | null;
  regardingobjectid_product_bind$products?: string | null;
  regardingobjectid_productassociation_bind$productassociations?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface DynamicPropertyAssociation_Create extends DynamicPropertyAssociation {
}
interface DynamicPropertyAssociation_Update extends DynamicPropertyAssociation {
}
interface DynamicPropertyAssociation_Select {
  associationstatus: WebAttribute<DynamicPropertyAssociation_Select, { associationstatus: dynamicpropertyassociation_associationstatus | null }, { associationstatus_formatted?: string }>;
  createdby_guid: WebAttribute<DynamicPropertyAssociation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<DynamicPropertyAssociation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<DynamicPropertyAssociation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  dmtimportstate: WebAttribute<DynamicPropertyAssociation_Select, { dmtimportstate: number | null }, {  }>;
  dynamicpropertyassociationid: WebAttribute<DynamicPropertyAssociation_Select, { dynamicpropertyassociationid: string | null }, {  }>;
  dynamicpropertyid_guid: WebAttribute<DynamicPropertyAssociation_Select, { dynamicpropertyid_guid: string | null }, { dynamicpropertyid_formatted?: string }>;
  exchangerate: WebAttribute<DynamicPropertyAssociation_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<DynamicPropertyAssociation_Select, { importsequencenumber: number | null }, {  }>;
  inheritancestate: WebAttribute<DynamicPropertyAssociation_Select, { inheritancestate: dynamicpropertyassociation_inheritancestate | null }, { inheritancestate_formatted?: string }>;
  modifiedby_guid: WebAttribute<DynamicPropertyAssociation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<DynamicPropertyAssociation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<DynamicPropertyAssociation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<DynamicPropertyAssociation_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<DynamicPropertyAssociation_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<DynamicPropertyAssociation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<DynamicPropertyAssociation_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<DynamicPropertyAssociation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<DynamicPropertyAssociation_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<DynamicPropertyAssociation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<DynamicPropertyAssociation_Select, { versionnumber: number | null }, {  }>;
}
interface DynamicPropertyAssociation_Filter {
  associationstatus: dynamicpropertyassociation_associationstatus;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  dmtimportstate: number;
  dynamicpropertyassociationid: XQW.Guid;
  dynamicpropertyid_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  inheritancestate: dynamicpropertyassociation_inheritancestate;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  regardingobjectid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface DynamicPropertyAssociation_Expand {
  createdby: WebExpand<DynamicPropertyAssociation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<DynamicPropertyAssociation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  dynamicpropertyassociation_AsyncOperations: WebExpand<DynamicPropertyAssociation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { dynamicpropertyassociation_AsyncOperations: AsyncOperation_Result[] }>;
  dynamicpropertyassociation_BulkDeleteFailures: WebExpand<DynamicPropertyAssociation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { dynamicpropertyassociation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  dynamicpropertyassociation_MailboxTrackingFolders: WebExpand<DynamicPropertyAssociation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { dynamicpropertyassociation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  dynamicpropertyassociation_PrincipalObjectAttributeAccesses: WebExpand<DynamicPropertyAssociation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { dynamicpropertyassociation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  dynamicpropertyassociation_SyncErrors: WebExpand<DynamicPropertyAssociation_Expand, SyncError_Select, SyncError_Filter, { dynamicpropertyassociation_SyncErrors: SyncError_Result[] }>;
  dynamicpropertyassociation_UserEntityInstanceDatas: WebExpand<DynamicPropertyAssociation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { dynamicpropertyassociation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  dynamicpropertyid: WebExpand<DynamicPropertyAssociation_Expand, DynamicProperty_Select, DynamicProperty_Filter, { dynamicpropertyid: DynamicProperty_Result }>;
  modifiedby: WebExpand<DynamicPropertyAssociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<DynamicPropertyAssociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<DynamicPropertyAssociation_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  regardingobjectid_product: WebExpand<DynamicPropertyAssociation_Expand, Product_Select, Product_Filter, { regardingobjectid_product: Product_Result }>;
  regardingobjectid_productassociation: WebExpand<DynamicPropertyAssociation_Expand, ProductAssociation_Select, ProductAssociation_Filter, { regardingobjectid_productassociation: ProductAssociation_Result }>;
  transactioncurrencyid: WebExpand<DynamicPropertyAssociation_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface DynamicPropertyAssociation_FormattedResult {
  associationstatus_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  dynamicpropertyid_formatted?: string;
  inheritancestate_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  regardingobjectid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface DynamicPropertyAssociation_Result extends DynamicPropertyAssociation_Base, DynamicPropertyAssociation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  dynamicpropertyid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  regardingobjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface DynamicPropertyAssociation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  dynamicpropertyid: WebMappingRetrieve<DynamicProperty_Select,DynamicProperty_Expand,DynamicProperty_Filter,DynamicProperty_Fixed,DynamicProperty_Result,DynamicProperty_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  regardingobjectid_product: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  regardingobjectid_productassociation: WebMappingRetrieve<ProductAssociation_Select,ProductAssociation_Expand,ProductAssociation_Filter,ProductAssociation_Fixed,ProductAssociation_Result,ProductAssociation_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface DynamicPropertyAssociation_RelatedMany {
  dynamicpropertyassociation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  dynamicpropertyassociation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  dynamicpropertyassociation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  dynamicpropertyassociation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  dynamicpropertyassociation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  dynamicpropertyassociation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  dynamicpropertyassociations: WebMappingRetrieve<DynamicPropertyAssociation_Select,DynamicPropertyAssociation_Expand,DynamicPropertyAssociation_Filter,DynamicPropertyAssociation_Fixed,DynamicPropertyAssociation_Result,DynamicPropertyAssociation_FormattedResult>;
}
interface WebEntitiesRelated {
  dynamicpropertyassociations: WebMappingRelated<DynamicPropertyAssociation_RelatedOne,DynamicPropertyAssociation_RelatedMany>;
}
interface WebEntitiesCUDA {
  dynamicpropertyassociations: WebMappingCUDA<DynamicPropertyAssociation_Create,DynamicPropertyAssociation_Update,DynamicPropertyAssociation_Select>;
}
