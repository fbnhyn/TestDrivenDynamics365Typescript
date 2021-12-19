interface msdyn_orderinvoicingproduct_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_amount?: number | null;
  msdyn_amount_base?: number | null;
  msdyn_internalflags?: string | null;
  msdyn_lineorder?: number | null;
  msdyn_name?: string | null;
  msdyn_orderinvoicingproductid?: string | null;
  msdyn_quantity?: number | null;
  msdyn_unitprice?: number | null;
  msdyn_unitprice_base?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_orderinvoicingproduct_statecode | null;
  statuscode?: msdyn_orderinvoicingproduct_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_orderinvoicingproduct_Relationships {
  msdyn_OrderInvoicingSetup?: msdyn_orderinvoicingsetup_Result | null;
  msdyn_Product?: Product_Result | null;
  msdyn_Unit?: UoM_Result | null;
  msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct?: InvoiceDetail_Result[] | null;
  msdyn_orderinvoicingproduct_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_orderinvoicingproduct_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_orderinvoicingproduct_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderinvoicingproduct_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderinvoicingproduct_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_orderinvoicingproduct_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_orderinvoicingproduct_SyncErrors?: SyncError_Result[] | null;
  msdyn_orderinvoicingproduct_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_orderinvoicingproduct extends msdyn_orderinvoicingproduct_Base, msdyn_orderinvoicingproduct_Relationships {
  msdyn_OrderInvoicingSetup_bind$msdyn_orderinvoicingsetups?: string | null;
  msdyn_Product_bind$products?: string | null;
  msdyn_Unit_bind$uoms?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_orderinvoicingproduct_Create extends msdyn_orderinvoicingproduct {
}
interface msdyn_orderinvoicingproduct_Update extends msdyn_orderinvoicingproduct {
}
interface msdyn_orderinvoicingproduct_Select {
  createdby_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_orderinvoicingproduct_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_orderinvoicingproduct_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_orderinvoicingproduct_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_orderinvoicingproduct_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_amount: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_amount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_base: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_amount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_internalflags: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_lineorder: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_lineorder: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_name: string | null }, {  }>;
  msdyn_orderinvoicingproductid: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_orderinvoicingproductid: string | null }, {  }>;
  msdyn_orderinvoicingsetup_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_orderinvoicingsetup_guid: string | null }, { msdyn_orderinvoicingsetup_formatted?: string }>;
  msdyn_product_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_product_guid: string | null }, { msdyn_product_formatted?: string }>;
  msdyn_quantity: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_quantity: number | null }, {  }>;
  msdyn_unit_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_unitprice: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_unitprice: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitprice_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_unitprice_base: WebAttribute<msdyn_orderinvoicingproduct_Select, { msdyn_unitprice_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitprice_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_orderinvoicingproduct_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_orderinvoicingproduct_Select, { statecode: msdyn_orderinvoicingproduct_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_orderinvoicingproduct_Select, { statuscode: msdyn_orderinvoicingproduct_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_orderinvoicingproduct_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_orderinvoicingproduct_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_orderinvoicingproduct_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_orderinvoicingproduct_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_orderinvoicingproduct_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_amount: number;
  msdyn_amount_base: number;
  msdyn_internalflags: string;
  msdyn_lineorder: number;
  msdyn_name: string;
  msdyn_orderinvoicingproductid: XQW.Guid;
  msdyn_orderinvoicingsetup_guid: XQW.Guid;
  msdyn_product_guid: XQW.Guid;
  msdyn_quantity: any;
  msdyn_unit_guid: XQW.Guid;
  msdyn_unitprice: number;
  msdyn_unitprice_base: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_orderinvoicingproduct_statecode;
  statuscode: msdyn_orderinvoicingproduct_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_orderinvoicingproduct_Expand {
  createdby: WebExpand<msdyn_orderinvoicingproduct_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_orderinvoicingproduct_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_orderinvoicingproduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_orderinvoicingproduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_OrderInvoicingSetup: WebExpand<msdyn_orderinvoicingproduct_Expand, msdyn_orderinvoicingsetup_Select, msdyn_orderinvoicingsetup_Filter, { msdyn_OrderInvoicingSetup: msdyn_orderinvoicingsetup_Result }>;
  msdyn_Product: WebExpand<msdyn_orderinvoicingproduct_Expand, Product_Select, Product_Filter, { msdyn_Product: Product_Result }>;
  msdyn_Unit: WebExpand<msdyn_orderinvoicingproduct_Expand, UoM_Select, UoM_Filter, { msdyn_Unit: UoM_Result }>;
  msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct: WebExpand<msdyn_orderinvoicingproduct_Expand, InvoiceDetail_Select, InvoiceDetail_Filter, { msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct: InvoiceDetail_Result[] }>;
  msdyn_orderinvoicingproduct_AsyncOperations: WebExpand<msdyn_orderinvoicingproduct_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_orderinvoicingproduct_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_orderinvoicingproduct_BulkDeleteFailures: WebExpand<msdyn_orderinvoicingproduct_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_orderinvoicingproduct_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_orderinvoicingproduct_DuplicateBaseRecord: WebExpand<msdyn_orderinvoicingproduct_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderinvoicingproduct_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_orderinvoicingproduct_DuplicateMatchingRecord: WebExpand<msdyn_orderinvoicingproduct_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderinvoicingproduct_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_orderinvoicingproduct_MailboxTrackingFolders: WebExpand<msdyn_orderinvoicingproduct_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_orderinvoicingproduct_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses: WebExpand<msdyn_orderinvoicingproduct_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_orderinvoicingproduct_ProcessSession: WebExpand<msdyn_orderinvoicingproduct_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_orderinvoicingproduct_ProcessSession: ProcessSession_Result[] }>;
  msdyn_orderinvoicingproduct_SyncErrors: WebExpand<msdyn_orderinvoicingproduct_Expand, SyncError_Select, SyncError_Filter, { msdyn_orderinvoicingproduct_SyncErrors: SyncError_Result[] }>;
  msdyn_orderinvoicingproduct_UserEntityInstanceDatas: WebExpand<msdyn_orderinvoicingproduct_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_orderinvoicingproduct_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_orderinvoicingproduct_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_orderinvoicingproduct_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_orderinvoicingproduct_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_orderinvoicingproduct_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_orderinvoicingproduct_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_orderinvoicingproduct_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_amount_base_formatted?: string;
  msdyn_amount_formatted?: string;
  msdyn_orderinvoicingsetup_formatted?: string;
  msdyn_product_formatted?: string;
  msdyn_unit_formatted?: string;
  msdyn_unitprice_base_formatted?: string;
  msdyn_unitprice_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_orderinvoicingproduct_Result extends msdyn_orderinvoicingproduct_Base, msdyn_orderinvoicingproduct_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_orderinvoicingsetup_guid: string | null;
  msdyn_product_guid: string | null;
  msdyn_unit_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_orderinvoicingproduct_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_OrderInvoicingSetup: WebMappingRetrieve<msdyn_orderinvoicingsetup_Select,msdyn_orderinvoicingsetup_Expand,msdyn_orderinvoicingsetup_Filter,msdyn_orderinvoicingsetup_Fixed,msdyn_orderinvoicingsetup_Result,msdyn_orderinvoicingsetup_FormattedResult>;
  msdyn_Product: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  msdyn_Unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_orderinvoicingproduct_RelatedMany {
  msdyn_msdyn_orderinvoicingproduct_invoicedetail_OrderInvoiceProduct: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
  msdyn_orderinvoicingproduct_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_orderinvoicingproduct_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_orderinvoicingproduct_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderinvoicingproduct_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderinvoicingproduct_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_orderinvoicingproduct_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_orderinvoicingproduct_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_orderinvoicingproduct_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_orderinvoicingproduct_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_orderinvoicingproducts: WebMappingRetrieve<msdyn_orderinvoicingproduct_Select,msdyn_orderinvoicingproduct_Expand,msdyn_orderinvoicingproduct_Filter,msdyn_orderinvoicingproduct_Fixed,msdyn_orderinvoicingproduct_Result,msdyn_orderinvoicingproduct_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_orderinvoicingproducts: WebMappingRelated<msdyn_orderinvoicingproduct_RelatedOne,msdyn_orderinvoicingproduct_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_orderinvoicingproducts: WebMappingCUDA<msdyn_orderinvoicingproduct_Create,msdyn_orderinvoicingproduct_Update,msdyn_orderinvoicingproduct_Select>;
}
