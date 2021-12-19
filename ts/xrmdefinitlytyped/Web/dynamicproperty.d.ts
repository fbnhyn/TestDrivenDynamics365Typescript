interface DynamicProperty_Base extends WebEntity {
  createdon?: Date | null;
  datatype?: dynamicproperty_datatypecode | null;
  defaultattributevalue?: string | null;
  defaultvaluedecimal?: number | null;
  defaultvaluedouble?: number | null;
  defaultvalueinteger?: number | null;
  defaultvaluestring?: string | null;
  description?: string | null;
  dmtimportstate?: number | null;
  dynamicpropertyid?: string | null;
  importsequencenumber?: number | null;
  ishidden?: boolean | null;
  isreadonly?: boolean | null;
  isrequired?: boolean | null;
  maxlengthstring?: number | null;
  maxvaluedecimal?: number | null;
  maxvaluedouble?: number | null;
  maxvalueinteger?: number | null;
  minvaluedecimal?: number | null;
  minvaluedouble?: number | null;
  minvalueinteger?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwrittendynamicpropertyid?: string | null;
  precision?: number | null;
  rootdynamicpropertyid?: string | null;
  statecode?: dynamicproperty_statecode | null;
  statuscode?: dynamicproperty_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface DynamicProperty_Relationships {
  DynamicProperty_DynamicPropertyInstance?: DynamicPropertyInstance_Result[] | null;
  DynamicProperty_DynamicPropertyOptionSetItem?: DynamicPropertyOptionSetItem_Result[] | null;
  Dynamicproperty_DynamicPropertyAssociation?: DynamicPropertyAssociation_Result[] | null;
  dynamicproperty_AsyncOperations?: AsyncOperation_Result[] | null;
  dynamicproperty_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  dynamicproperty_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  dynamicproperty_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  dynamicproperty_SyncErrors?: SyncError_Result[] | null;
  dynamicproperty_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  dynamicproperty_base_dynamicproperty?: DynamicProperty_Result[] | null;
  dynamicpropertyoptionsetvalueid?: DynamicPropertyOptionSetItem_Result | null;
  msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId?: msdyn_fieldcomputation_Result[] | null;
  regardingobjectid_product?: Product_Result | null;
  regardingobjectid_productassociation?: ProductAssociation_Result | null;
}
interface DynamicProperty extends DynamicProperty_Base, DynamicProperty_Relationships {
  dynamicpropertyoptionsetvalueid_bind$dynamicpropertyoptionsetitems?: string | null;
}
interface DynamicProperty_Create extends DynamicProperty {
  basedynamicpropertyid_bind$dynamicproperties?: string | null;
  regardingobjectid_product_bind$products?: string | null;
  regardingobjectid_productassociation_bind$productassociations?: string | null;
}
interface DynamicProperty_Update extends DynamicProperty {
}
interface DynamicProperty_Select {
  basedynamicpropertyid_guid: WebAttribute<DynamicProperty_Select, { basedynamicpropertyid_guid: string | null }, { basedynamicpropertyid_formatted?: string }>;
  createdby_guid: WebAttribute<DynamicProperty_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<DynamicProperty_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<DynamicProperty_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  datatype: WebAttribute<DynamicProperty_Select, { datatype: dynamicproperty_datatypecode | null }, { datatype_formatted?: string }>;
  defaultattributevalue: WebAttribute<DynamicProperty_Select, { defaultattributevalue: string | null }, {  }>;
  defaultvaluedecimal: WebAttribute<DynamicProperty_Select, { defaultvaluedecimal: number | null }, {  }>;
  defaultvaluedouble: WebAttribute<DynamicProperty_Select, { defaultvaluedouble: number | null }, {  }>;
  defaultvalueinteger: WebAttribute<DynamicProperty_Select, { defaultvalueinteger: number | null }, {  }>;
  defaultvalueoptionset_guid: WebAttribute<DynamicProperty_Select, { defaultvalueoptionset_guid: string | null }, { defaultvalueoptionset_formatted?: string }>;
  defaultvaluestring: WebAttribute<DynamicProperty_Select, { defaultvaluestring: string | null }, {  }>;
  description: WebAttribute<DynamicProperty_Select, { description: string | null }, {  }>;
  dmtimportstate: WebAttribute<DynamicProperty_Select, { dmtimportstate: number | null }, {  }>;
  dynamicpropertyid: WebAttribute<DynamicProperty_Select, { dynamicpropertyid: string | null }, {  }>;
  importsequencenumber: WebAttribute<DynamicProperty_Select, { importsequencenumber: number | null }, {  }>;
  ishidden: WebAttribute<DynamicProperty_Select, { ishidden: boolean | null }, {  }>;
  isreadonly: WebAttribute<DynamicProperty_Select, { isreadonly: boolean | null }, {  }>;
  isrequired: WebAttribute<DynamicProperty_Select, { isrequired: boolean | null }, {  }>;
  maxlengthstring: WebAttribute<DynamicProperty_Select, { maxlengthstring: number | null }, {  }>;
  maxvaluedecimal: WebAttribute<DynamicProperty_Select, { maxvaluedecimal: number | null }, {  }>;
  maxvaluedouble: WebAttribute<DynamicProperty_Select, { maxvaluedouble: number | null }, {  }>;
  maxvalueinteger: WebAttribute<DynamicProperty_Select, { maxvalueinteger: number | null }, {  }>;
  minvaluedecimal: WebAttribute<DynamicProperty_Select, { minvaluedecimal: number | null }, {  }>;
  minvaluedouble: WebAttribute<DynamicProperty_Select, { minvaluedouble: number | null }, {  }>;
  minvalueinteger: WebAttribute<DynamicProperty_Select, { minvalueinteger: number | null }, {  }>;
  modifiedby_guid: WebAttribute<DynamicProperty_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<DynamicProperty_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<DynamicProperty_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<DynamicProperty_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<DynamicProperty_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<DynamicProperty_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwrittendynamicpropertyid: WebAttribute<DynamicProperty_Select, { overwrittendynamicpropertyid: string | null }, {  }>;
  precision: WebAttribute<DynamicProperty_Select, { precision: number | null }, {  }>;
  regardingobjectid_guid: WebAttribute<DynamicProperty_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  rootdynamicpropertyid: WebAttribute<DynamicProperty_Select, { rootdynamicpropertyid: string | null }, {  }>;
  statecode: WebAttribute<DynamicProperty_Select, { statecode: dynamicproperty_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<DynamicProperty_Select, { statuscode: dynamicproperty_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<DynamicProperty_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<DynamicProperty_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<DynamicProperty_Select, { versionnumber: number | null }, {  }>;
}
interface DynamicProperty_Filter {
  basedynamicpropertyid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  datatype: dynamicproperty_datatypecode;
  defaultattributevalue: string;
  defaultvaluedecimal: any;
  defaultvaluedouble: number;
  defaultvalueinteger: number;
  defaultvalueoptionset_guid: XQW.Guid;
  defaultvaluestring: string;
  description: string;
  dmtimportstate: number;
  dynamicpropertyid: XQW.Guid;
  importsequencenumber: number;
  ishidden: boolean;
  isreadonly: boolean;
  isrequired: boolean;
  maxlengthstring: number;
  maxvaluedecimal: any;
  maxvaluedouble: number;
  maxvalueinteger: number;
  minvaluedecimal: any;
  minvaluedouble: number;
  minvalueinteger: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwrittendynamicpropertyid: XQW.Guid;
  precision: number;
  regardingobjectid_guid: XQW.Guid;
  rootdynamicpropertyid: XQW.Guid;
  statecode: dynamicproperty_statecode;
  statuscode: dynamicproperty_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface DynamicProperty_Expand {
  DynamicProperty_DynamicPropertyInstance: WebExpand<DynamicProperty_Expand, DynamicPropertyInstance_Select, DynamicPropertyInstance_Filter, { DynamicProperty_DynamicPropertyInstance: DynamicPropertyInstance_Result[] }>;
  DynamicProperty_DynamicPropertyOptionSetItem: WebExpand<DynamicProperty_Expand, DynamicPropertyOptionSetItem_Select, DynamicPropertyOptionSetItem_Filter, { DynamicProperty_DynamicPropertyOptionSetItem: DynamicPropertyOptionSetItem_Result[] }>;
  Dynamicproperty_DynamicPropertyAssociation: WebExpand<DynamicProperty_Expand, DynamicPropertyAssociation_Select, DynamicPropertyAssociation_Filter, { Dynamicproperty_DynamicPropertyAssociation: DynamicPropertyAssociation_Result[] }>;
  basedynamicpropertyid: WebExpand<DynamicProperty_Expand, DynamicProperty_Select, DynamicProperty_Filter, { basedynamicpropertyid: DynamicProperty_Result }>;
  createdby: WebExpand<DynamicProperty_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<DynamicProperty_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  dynamicproperty_AsyncOperations: WebExpand<DynamicProperty_Expand, AsyncOperation_Select, AsyncOperation_Filter, { dynamicproperty_AsyncOperations: AsyncOperation_Result[] }>;
  dynamicproperty_BulkDeleteFailures: WebExpand<DynamicProperty_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { dynamicproperty_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  dynamicproperty_MailboxTrackingFolders: WebExpand<DynamicProperty_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { dynamicproperty_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  dynamicproperty_PrincipalObjectAttributeAccesses: WebExpand<DynamicProperty_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { dynamicproperty_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  dynamicproperty_SyncErrors: WebExpand<DynamicProperty_Expand, SyncError_Select, SyncError_Filter, { dynamicproperty_SyncErrors: SyncError_Result[] }>;
  dynamicproperty_UserEntityInstanceDatas: WebExpand<DynamicProperty_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { dynamicproperty_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  dynamicproperty_base_dynamicproperty: WebExpand<DynamicProperty_Expand, DynamicProperty_Select, DynamicProperty_Filter, { dynamicproperty_base_dynamicproperty: DynamicProperty_Result[] }>;
  dynamicpropertyoptionsetvalueid: WebExpand<DynamicProperty_Expand, DynamicPropertyOptionSetItem_Select, DynamicPropertyOptionSetItem_Filter, { dynamicpropertyoptionsetvalueid: DynamicPropertyOptionSetItem_Result }>;
  modifiedby: WebExpand<DynamicProperty_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<DynamicProperty_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId: WebExpand<DynamicProperty_Expand, msdyn_fieldcomputation_Select, msdyn_fieldcomputation_Filter, { msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId: msdyn_fieldcomputation_Result[] }>;
  organizationid: WebExpand<DynamicProperty_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  regardingobjectid_product: WebExpand<DynamicProperty_Expand, Product_Select, Product_Filter, { regardingobjectid_product: Product_Result }>;
  regardingobjectid_productassociation: WebExpand<DynamicProperty_Expand, ProductAssociation_Select, ProductAssociation_Filter, { regardingobjectid_productassociation: ProductAssociation_Result }>;
}
interface DynamicProperty_FormattedResult {
  basedynamicpropertyid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  datatype_formatted?: string;
  defaultvalueoptionset_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  regardingobjectid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface DynamicProperty_Result extends DynamicProperty_Base, DynamicProperty_Relationships {
  "@odata.etag": string;
  basedynamicpropertyid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  defaultvalueoptionset_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface DynamicProperty_RelatedOne {
  basedynamicpropertyid: WebMappingRetrieve<DynamicProperty_Select,DynamicProperty_Expand,DynamicProperty_Filter,DynamicProperty_Fixed,DynamicProperty_Result,DynamicProperty_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  dynamicpropertyoptionsetvalueid: WebMappingRetrieve<DynamicPropertyOptionSetItem_Select,DynamicPropertyOptionSetItem_Expand,DynamicPropertyOptionSetItem_Filter,DynamicPropertyOptionSetItem_Fixed,DynamicPropertyOptionSetItem_Result,DynamicPropertyOptionSetItem_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  regardingobjectid_product: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  regardingobjectid_productassociation: WebMappingRetrieve<ProductAssociation_Select,ProductAssociation_Expand,ProductAssociation_Filter,ProductAssociation_Fixed,ProductAssociation_Result,ProductAssociation_FormattedResult>;
}
interface DynamicProperty_RelatedMany {
  DynamicProperty_DynamicPropertyInstance: WebMappingRetrieve<DynamicPropertyInstance_Select,DynamicPropertyInstance_Expand,DynamicPropertyInstance_Filter,DynamicPropertyInstance_Fixed,DynamicPropertyInstance_Result,DynamicPropertyInstance_FormattedResult>;
  DynamicProperty_DynamicPropertyOptionSetItem: WebMappingRetrieve<DynamicPropertyOptionSetItem_Select,DynamicPropertyOptionSetItem_Expand,DynamicPropertyOptionSetItem_Filter,DynamicPropertyOptionSetItem_Fixed,DynamicPropertyOptionSetItem_Result,DynamicPropertyOptionSetItem_FormattedResult>;
  Dynamicproperty_DynamicPropertyAssociation: WebMappingRetrieve<DynamicPropertyAssociation_Select,DynamicPropertyAssociation_Expand,DynamicPropertyAssociation_Filter,DynamicPropertyAssociation_Fixed,DynamicPropertyAssociation_Result,DynamicPropertyAssociation_FormattedResult>;
  dynamicproperty_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  dynamicproperty_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  dynamicproperty_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  dynamicproperty_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  dynamicproperty_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  dynamicproperty_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  dynamicproperty_base_dynamicproperty: WebMappingRetrieve<DynamicProperty_Select,DynamicProperty_Expand,DynamicProperty_Filter,DynamicProperty_Fixed,DynamicProperty_Result,DynamicProperty_FormattedResult>;
  msdyn_dynamicproperty_msdyn_fieldcomputation_PropertyId: WebMappingRetrieve<msdyn_fieldcomputation_Select,msdyn_fieldcomputation_Expand,msdyn_fieldcomputation_Filter,msdyn_fieldcomputation_Fixed,msdyn_fieldcomputation_Result,msdyn_fieldcomputation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  dynamicproperties: WebMappingRetrieve<DynamicProperty_Select,DynamicProperty_Expand,DynamicProperty_Filter,DynamicProperty_Fixed,DynamicProperty_Result,DynamicProperty_FormattedResult>;
}
interface WebEntitiesRelated {
  dynamicproperties: WebMappingRelated<DynamicProperty_RelatedOne,DynamicProperty_RelatedMany>;
}
interface WebEntitiesCUDA {
  dynamicproperties: WebMappingCUDA<DynamicProperty_Create,DynamicProperty_Update,DynamicProperty_Select>;
}
