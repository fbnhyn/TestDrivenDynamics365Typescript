interface DynamicPropertyOptionSetItem_Base extends WebEntity {
  createdon?: Date | null;
  dmtimportstate?: number | null;
  dynamicpropertyoptiondescription?: string | null;
  dynamicpropertyoptionname?: string | null;
  dynamicpropertyoptionsetvalueid?: string | null;
  dynamicpropertyoptionsetvaluesequencenumber?: number | null;
  dynamicpropertyoptionvalue?: number | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface DynamicPropertyOptionSetItem_Relationships {
  DefaultValueOptionSet_DynamicProperty?: DynamicProperty_Result[] | null;
  dynamicpropertyoptionsetitem_AsyncOperations?: AsyncOperation_Result[] | null;
  dynamicpropertyoptionsetitem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  dynamicpropertyoptionsetitem_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  dynamicpropertyoptionsetitem_SyncErrors?: SyncError_Result[] | null;
  dynamicpropertyoptionsetitem_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface DynamicPropertyOptionSetItem extends DynamicPropertyOptionSetItem_Base, DynamicPropertyOptionSetItem_Relationships {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface DynamicPropertyOptionSetItem_Create extends DynamicPropertyOptionSetItem {
  dynamicpropertyid_bind$dynamicproperties?: string | null;
}
interface DynamicPropertyOptionSetItem_Update extends DynamicPropertyOptionSetItem {
}
interface DynamicPropertyOptionSetItem_Select {
  createdby_guid: WebAttribute<DynamicPropertyOptionSetItem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<DynamicPropertyOptionSetItem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<DynamicPropertyOptionSetItem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  dmtimportstate: WebAttribute<DynamicPropertyOptionSetItem_Select, { dmtimportstate: number | null }, {  }>;
  dynamicpropertyid_guid: WebAttribute<DynamicPropertyOptionSetItem_Select, { dynamicpropertyid_guid: string | null }, { dynamicpropertyid_formatted?: string }>;
  dynamicpropertyoptiondescription: WebAttribute<DynamicPropertyOptionSetItem_Select, { dynamicpropertyoptiondescription: string | null }, {  }>;
  dynamicpropertyoptionname: WebAttribute<DynamicPropertyOptionSetItem_Select, { dynamicpropertyoptionname: string | null }, {  }>;
  dynamicpropertyoptionsetvalueid: WebAttribute<DynamicPropertyOptionSetItem_Select, { dynamicpropertyoptionsetvalueid: string | null }, {  }>;
  dynamicpropertyoptionsetvaluesequencenumber: WebAttribute<DynamicPropertyOptionSetItem_Select, { dynamicpropertyoptionsetvaluesequencenumber: number | null }, {  }>;
  dynamicpropertyoptionvalue: WebAttribute<DynamicPropertyOptionSetItem_Select, { dynamicpropertyoptionvalue: number | null }, {  }>;
  exchangerate: WebAttribute<DynamicPropertyOptionSetItem_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<DynamicPropertyOptionSetItem_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<DynamicPropertyOptionSetItem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<DynamicPropertyOptionSetItem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<DynamicPropertyOptionSetItem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<DynamicPropertyOptionSetItem_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<DynamicPropertyOptionSetItem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<DynamicPropertyOptionSetItem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<DynamicPropertyOptionSetItem_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<DynamicPropertyOptionSetItem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<DynamicPropertyOptionSetItem_Select, { versionnumber: number | null }, {  }>;
}
interface DynamicPropertyOptionSetItem_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  dmtimportstate: number;
  dynamicpropertyid_guid: XQW.Guid;
  dynamicpropertyoptiondescription: string;
  dynamicpropertyoptionname: string;
  dynamicpropertyoptionsetvalueid: XQW.Guid;
  dynamicpropertyoptionsetvaluesequencenumber: number;
  dynamicpropertyoptionvalue: number;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface DynamicPropertyOptionSetItem_Expand {
  DefaultValueOptionSet_DynamicProperty: WebExpand<DynamicPropertyOptionSetItem_Expand, DynamicProperty_Select, DynamicProperty_Filter, { DefaultValueOptionSet_DynamicProperty: DynamicProperty_Result[] }>;
  createdby: WebExpand<DynamicPropertyOptionSetItem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<DynamicPropertyOptionSetItem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  dynamicpropertyid: WebExpand<DynamicPropertyOptionSetItem_Expand, DynamicProperty_Select, DynamicProperty_Filter, { dynamicpropertyid: DynamicProperty_Result }>;
  dynamicpropertyoptionsetitem_AsyncOperations: WebExpand<DynamicPropertyOptionSetItem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { dynamicpropertyoptionsetitem_AsyncOperations: AsyncOperation_Result[] }>;
  dynamicpropertyoptionsetitem_BulkDeleteFailures: WebExpand<DynamicPropertyOptionSetItem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { dynamicpropertyoptionsetitem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  dynamicpropertyoptionsetitem_MailboxTrackingFolders: WebExpand<DynamicPropertyOptionSetItem_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { dynamicpropertyoptionsetitem_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses: WebExpand<DynamicPropertyOptionSetItem_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  dynamicpropertyoptionsetitem_SyncErrors: WebExpand<DynamicPropertyOptionSetItem_Expand, SyncError_Select, SyncError_Filter, { dynamicpropertyoptionsetitem_SyncErrors: SyncError_Result[] }>;
  dynamicpropertyoptionsetitem_UserEntityInstanceDatas: WebExpand<DynamicPropertyOptionSetItem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { dynamicpropertyoptionsetitem_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<DynamicPropertyOptionSetItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<DynamicPropertyOptionSetItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<DynamicPropertyOptionSetItem_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrencyid: WebExpand<DynamicPropertyOptionSetItem_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface DynamicPropertyOptionSetItem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  dynamicpropertyid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface DynamicPropertyOptionSetItem_Result extends DynamicPropertyOptionSetItem_Base, DynamicPropertyOptionSetItem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  dynamicpropertyid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface DynamicPropertyOptionSetItem_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  dynamicpropertyid: WebMappingRetrieve<DynamicProperty_Select,DynamicProperty_Expand,DynamicProperty_Filter,DynamicProperty_Fixed,DynamicProperty_Result,DynamicProperty_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface DynamicPropertyOptionSetItem_RelatedMany {
  DefaultValueOptionSet_DynamicProperty: WebMappingRetrieve<DynamicProperty_Select,DynamicProperty_Expand,DynamicProperty_Filter,DynamicProperty_Fixed,DynamicProperty_Result,DynamicProperty_FormattedResult>;
  dynamicpropertyoptionsetitem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  dynamicpropertyoptionsetitem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  dynamicpropertyoptionsetitem_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  dynamicpropertyoptionsetitem_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  dynamicpropertyoptionsetitem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  dynamicpropertyoptionsetitem_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  dynamicpropertyoptionsetitems: WebMappingRetrieve<DynamicPropertyOptionSetItem_Select,DynamicPropertyOptionSetItem_Expand,DynamicPropertyOptionSetItem_Filter,DynamicPropertyOptionSetItem_Fixed,DynamicPropertyOptionSetItem_Result,DynamicPropertyOptionSetItem_FormattedResult>;
}
interface WebEntitiesRelated {
  dynamicpropertyoptionsetitems: WebMappingRelated<DynamicPropertyOptionSetItem_RelatedOne,DynamicPropertyOptionSetItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  dynamicpropertyoptionsetitems: WebMappingCUDA<DynamicPropertyOptionSetItem_Create,DynamicPropertyOptionSetItem_Update,DynamicPropertyOptionSetItem_Select>;
}
