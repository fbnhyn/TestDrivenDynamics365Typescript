interface DynamicPropertyInstance_Base extends WebEntity {
  createdon?: Date | null;
  dmtimportstate?: number | null;
  dynamicpropertyinstanceid?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  validationstatus?: boolean | null;
  valuedecimal?: number | null;
  valuedouble?: number | null;
  valueinteger?: number | null;
  valuestring?: string | null;
  versionnumber?: number | null;
}
interface DynamicPropertyInstance_Relationships {
  dynamicpropertyinstance_AsyncOperations?: AsyncOperation_Result[] | null;
  dynamicpropertyinstance_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  dynamicpropertyinstance_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  dynamicpropertyinstance_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  dynamicpropertyinstance_SyncErrors?: SyncError_Result[] | null;
  dynamicpropertyinstance_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  regardingobjectid_invoicedetail?: InvoiceDetail_Result | null;
  regardingobjectid_opportunityproduct?: OpportunityProduct_Result | null;
  regardingobjectid_quotedetail?: QuoteDetail_Result | null;
  regardingobjectid_salesorderdetail?: SalesOrderDetail_Result | null;
}
interface DynamicPropertyInstance extends DynamicPropertyInstance_Base, DynamicPropertyInstance_Relationships {
  dynamicpropertyid_bind$dynamicproperties?: string | null;
  regardingobjectid_invoicedetail_bind$invoicedetails?: string | null;
  regardingobjectid_opportunityproduct_bind$opportunityproducts?: string | null;
  regardingobjectid_quotedetail_bind$quotedetails?: string | null;
  regardingobjectid_salesorderdetail_bind$salesorderdetails?: string | null;
}
interface DynamicPropertyInstance_Create extends DynamicPropertyInstance {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  owninguser_bind$systemusers?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface DynamicPropertyInstance_Update extends DynamicPropertyInstance {
}
interface DynamicPropertyInstance_Select {
  createdby_guid: WebAttribute<DynamicPropertyInstance_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<DynamicPropertyInstance_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<DynamicPropertyInstance_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  dmtimportstate: WebAttribute<DynamicPropertyInstance_Select, { dmtimportstate: number | null }, {  }>;
  dynamicpropertyid_guid: WebAttribute<DynamicPropertyInstance_Select, { dynamicpropertyid_guid: string | null }, { dynamicpropertyid_formatted?: string }>;
  dynamicpropertyinstanceid: WebAttribute<DynamicPropertyInstance_Select, { dynamicpropertyinstanceid: string | null }, {  }>;
  exchangerate: WebAttribute<DynamicPropertyInstance_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<DynamicPropertyInstance_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<DynamicPropertyInstance_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<DynamicPropertyInstance_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<DynamicPropertyInstance_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<DynamicPropertyInstance_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<DynamicPropertyInstance_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<DynamicPropertyInstance_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<DynamicPropertyInstance_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<DynamicPropertyInstance_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<DynamicPropertyInstance_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<DynamicPropertyInstance_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<DynamicPropertyInstance_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<DynamicPropertyInstance_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<DynamicPropertyInstance_Select, { utcconversiontimezonecode: number | null }, {  }>;
  validationstatus: WebAttribute<DynamicPropertyInstance_Select, { validationstatus: boolean | null }, {  }>;
  valuedecimal: WebAttribute<DynamicPropertyInstance_Select, { valuedecimal: number | null }, {  }>;
  valuedouble: WebAttribute<DynamicPropertyInstance_Select, { valuedouble: number | null }, {  }>;
  valueinteger: WebAttribute<DynamicPropertyInstance_Select, { valueinteger: number | null }, {  }>;
  valuestring: WebAttribute<DynamicPropertyInstance_Select, { valuestring: string | null }, {  }>;
  versionnumber: WebAttribute<DynamicPropertyInstance_Select, { versionnumber: number | null }, {  }>;
}
interface DynamicPropertyInstance_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  dmtimportstate: number;
  dynamicpropertyid_guid: XQW.Guid;
  dynamicpropertyinstanceid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  validationstatus: boolean;
  valuedecimal: any;
  valuedouble: number;
  valueinteger: number;
  valuestring: string;
  versionnumber: number;
}
interface DynamicPropertyInstance_Expand {
  createdby: WebExpand<DynamicPropertyInstance_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<DynamicPropertyInstance_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  dynamicpropertyid: WebExpand<DynamicPropertyInstance_Expand, DynamicProperty_Select, DynamicProperty_Filter, { dynamicpropertyid: DynamicProperty_Result }>;
  dynamicpropertyinstance_AsyncOperations: WebExpand<DynamicPropertyInstance_Expand, AsyncOperation_Select, AsyncOperation_Filter, { dynamicpropertyinstance_AsyncOperations: AsyncOperation_Result[] }>;
  dynamicpropertyinstance_BulkDeleteFailures: WebExpand<DynamicPropertyInstance_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { dynamicpropertyinstance_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  dynamicpropertyinstance_MailboxTrackingFolders: WebExpand<DynamicPropertyInstance_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { dynamicpropertyinstance_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  dynamicpropertyinstance_PrincipalObjectAttributeAccesses: WebExpand<DynamicPropertyInstance_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { dynamicpropertyinstance_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  dynamicpropertyinstance_SyncErrors: WebExpand<DynamicPropertyInstance_Expand, SyncError_Select, SyncError_Filter, { dynamicpropertyinstance_SyncErrors: SyncError_Result[] }>;
  dynamicpropertyinstance_UserEntityInstanceDatas: WebExpand<DynamicPropertyInstance_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { dynamicpropertyinstance_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<DynamicPropertyInstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<DynamicPropertyInstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<DynamicPropertyInstance_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<DynamicPropertyInstance_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<DynamicPropertyInstance_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<DynamicPropertyInstance_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  regardingobjectid_invoicedetail: WebExpand<DynamicPropertyInstance_Expand, InvoiceDetail_Select, InvoiceDetail_Filter, { regardingobjectid_invoicedetail: InvoiceDetail_Result }>;
  regardingobjectid_opportunityproduct: WebExpand<DynamicPropertyInstance_Expand, OpportunityProduct_Select, OpportunityProduct_Filter, { regardingobjectid_opportunityproduct: OpportunityProduct_Result }>;
  regardingobjectid_quotedetail: WebExpand<DynamicPropertyInstance_Expand, QuoteDetail_Select, QuoteDetail_Filter, { regardingobjectid_quotedetail: QuoteDetail_Result }>;
  regardingobjectid_salesorderdetail: WebExpand<DynamicPropertyInstance_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { regardingobjectid_salesorderdetail: SalesOrderDetail_Result }>;
  transactioncurrencyid: WebExpand<DynamicPropertyInstance_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface DynamicPropertyInstance_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  dynamicpropertyid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  regardingobjectid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface DynamicPropertyInstance_Result extends DynamicPropertyInstance_Base, DynamicPropertyInstance_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  dynamicpropertyid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface DynamicPropertyInstance_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  dynamicpropertyid: WebMappingRetrieve<DynamicProperty_Select,DynamicProperty_Expand,DynamicProperty_Filter,DynamicProperty_Fixed,DynamicProperty_Result,DynamicProperty_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  regardingobjectid_invoicedetail: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
  regardingobjectid_opportunityproduct: WebMappingRetrieve<OpportunityProduct_Select,OpportunityProduct_Expand,OpportunityProduct_Filter,OpportunityProduct_Fixed,OpportunityProduct_Result,OpportunityProduct_FormattedResult>;
  regardingobjectid_quotedetail: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  regardingobjectid_salesorderdetail: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface DynamicPropertyInstance_RelatedMany {
  dynamicpropertyinstance_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  dynamicpropertyinstance_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  dynamicpropertyinstance_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  dynamicpropertyinstance_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  dynamicpropertyinstance_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  dynamicpropertyinstance_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  dynamicpropertyinstances: WebMappingRetrieve<DynamicPropertyInstance_Select,DynamicPropertyInstance_Expand,DynamicPropertyInstance_Filter,DynamicPropertyInstance_Fixed,DynamicPropertyInstance_Result,DynamicPropertyInstance_FormattedResult>;
}
interface WebEntitiesRelated {
  dynamicpropertyinstances: WebMappingRelated<DynamicPropertyInstance_RelatedOne,DynamicPropertyInstance_RelatedMany>;
}
interface WebEntitiesCUDA {
  dynamicpropertyinstances: WebMappingCUDA<DynamicPropertyInstance_Create,DynamicPropertyInstance_Update,DynamicPropertyInstance_Select>;
}
