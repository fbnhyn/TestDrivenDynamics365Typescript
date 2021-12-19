interface msdyn_contractlinescheduleofvalue_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_amount?: number | null;
  msdyn_amount_after_tax?: number | null;
  msdyn_amount_after_tax_base?: number | null;
  msdyn_amount_base?: number | null;
  msdyn_contractline?: string | null;
  msdyn_contractlinedescription?: string | null;
  msdyn_contractlinescheduleofvalueid?: string | null;
  msdyn_description?: string | null;
  msdyn_externaldescription?: string | null;
  msdyn_invoicedate?: Date | null;
  msdyn_invoicestatus?: msdyn_invoicestatus | null;
  msdyn_name?: string | null;
  msdyn_price?: number | null;
  msdyn_price_base?: number | null;
  msdyn_startdatetime?: Date | null;
  msdyn_tax?: number | null;
  msdyn_tax_base?: number | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  msdyn_transactiontypecode?: msdyn_transactiontypecode | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_contractlinescheduleofvalue_statecode | null;
  statuscode?: msdyn_contractlinescheduleofvalue_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_contractlinescheduleofvalue_Relationships {
  msdyn_ContractLineId?: SalesOrderDetail_Result | null;
  msdyn_contractlinescheduleofvalue_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_contractlinescheduleofvalue_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_contractlinescheduleofvalue_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_contractlinescheduleofvalue_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_contractlinescheduleofvalue_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_contractlinescheduleofvalue_SyncErrors?: SyncError_Result[] | null;
  msdyn_contractlinescheduleofvalue_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule?: msdyn_contractlineinvoiceschedule_Result[] | null;
}
interface msdyn_contractlinescheduleofvalue extends msdyn_contractlinescheduleofvalue_Base, msdyn_contractlinescheduleofvalue_Relationships {
  msdyn_ContractLineId_bind$salesorderdetails?: string | null;
  msdyn_contract_bind$salesorders?: string | null;
  msdyn_project_bind$msdyn_projects?: string | null;
  msdyn_projecttask_bind$msdyn_projecttasks?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_contractlinescheduleofvalue_Create extends msdyn_contractlinescheduleofvalue {
}
interface msdyn_contractlinescheduleofvalue_Update extends msdyn_contractlinescheduleofvalue {
}
interface msdyn_contractlinescheduleofvalue_Select {
  createdby_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_amount: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_amount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_after_tax: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_amount_after_tax: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_after_tax_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_after_tax_base: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_amount_after_tax_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_after_tax_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_base: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_amount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_contract_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_contract_guid: string | null }, { msdyn_contract_formatted?: string }>;
  msdyn_contractline: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_contractline: string | null }, {  }>;
  msdyn_contractlinedescription: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_contractlinedescription: string | null }, {  }>;
  msdyn_contractlineid_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_contractlineid_guid: string | null }, { msdyn_contractlineid_formatted?: string }>;
  msdyn_contractlinescheduleofvalueid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_contractlinescheduleofvalueid: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_description: string | null }, {  }>;
  msdyn_externaldescription: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_externaldescription: string | null }, {  }>;
  msdyn_invoicedate: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_invoicedate: Date | null }, { msdyn_invoicedate_formatted?: string }>;
  msdyn_invoicestatus: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_invoicestatus: msdyn_invoicestatus | null }, { msdyn_invoicestatus_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_name: string | null }, {  }>;
  msdyn_price: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_price: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_price_base: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_price_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_project_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_project_guid: string | null }, { msdyn_project_formatted?: string }>;
  msdyn_projecttask_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_projecttask_guid: string | null }, { msdyn_projecttask_formatted?: string }>;
  msdyn_startdatetime: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_startdatetime: Date | null }, { msdyn_startdatetime_formatted?: string }>;
  msdyn_tax: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_tax: number | null; transactioncurrencyid_guid: string | null }, { msdyn_tax_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_tax_base: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_tax_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_tax_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_transactionclassification: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  msdyn_transactiontypecode: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { msdyn_transactiontypecode: msdyn_transactiontypecode | null }, { msdyn_transactiontypecode_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { statecode: msdyn_contractlinescheduleofvalue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { statuscode: msdyn_contractlinescheduleofvalue_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_contractlinescheduleofvalue_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_contractlinescheduleofvalue_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_amount: number;
  msdyn_amount_after_tax: number;
  msdyn_amount_after_tax_base: number;
  msdyn_amount_base: number;
  msdyn_contract_guid: XQW.Guid;
  msdyn_contractline: string;
  msdyn_contractlinedescription: string;
  msdyn_contractlineid_guid: XQW.Guid;
  msdyn_contractlinescheduleofvalueid: XQW.Guid;
  msdyn_description: string;
  msdyn_externaldescription: string;
  msdyn_invoicedate: Date;
  msdyn_invoicestatus: msdyn_invoicestatus;
  msdyn_name: string;
  msdyn_price: number;
  msdyn_price_base: number;
  msdyn_project_guid: XQW.Guid;
  msdyn_projecttask_guid: XQW.Guid;
  msdyn_startdatetime: Date;
  msdyn_tax: number;
  msdyn_tax_base: number;
  msdyn_transactionclassification: msdyn_transactionclassification;
  msdyn_transactiontypecode: msdyn_transactiontypecode;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_contractlinescheduleofvalue_statecode;
  statuscode: msdyn_contractlinescheduleofvalue_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_contractlinescheduleofvalue_Expand {
  createdby: WebExpand<msdyn_contractlinescheduleofvalue_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_contractlinescheduleofvalue_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_contractlinescheduleofvalue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_contractlinescheduleofvalue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ContractLineId: WebExpand<msdyn_contractlinescheduleofvalue_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { msdyn_ContractLineId: SalesOrderDetail_Result }>;
  msdyn_contract: WebExpand<msdyn_contractlinescheduleofvalue_Expand, SalesOrder_Select, SalesOrder_Filter, { msdyn_contract: SalesOrder_Result }>;
  msdyn_contractlinescheduleofvalue_AsyncOperations: WebExpand<msdyn_contractlinescheduleofvalue_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_contractlinescheduleofvalue_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_contractlinescheduleofvalue_BulkDeleteFailures: WebExpand<msdyn_contractlinescheduleofvalue_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_contractlinescheduleofvalue_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_contractlinescheduleofvalue_DuplicateBaseRecord: WebExpand<msdyn_contractlinescheduleofvalue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_contractlinescheduleofvalue_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord: WebExpand<msdyn_contractlinescheduleofvalue_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_contractlinescheduleofvalue_MailboxTrackingFolders: WebExpand<msdyn_contractlinescheduleofvalue_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_contractlinescheduleofvalue_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses: WebExpand<msdyn_contractlinescheduleofvalue_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_contractlinescheduleofvalue_ProcessSession: WebExpand<msdyn_contractlinescheduleofvalue_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_contractlinescheduleofvalue_ProcessSession: ProcessSession_Result[] }>;
  msdyn_contractlinescheduleofvalue_SyncErrors: WebExpand<msdyn_contractlinescheduleofvalue_Expand, SyncError_Select, SyncError_Filter, { msdyn_contractlinescheduleofvalue_SyncErrors: SyncError_Result[] }>;
  msdyn_contractlinescheduleofvalue_UserEntityInstanceDatas: WebExpand<msdyn_contractlinescheduleofvalue_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_contractlinescheduleofvalue_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule: WebExpand<msdyn_contractlinescheduleofvalue_Expand, msdyn_contractlineinvoiceschedule_Select, msdyn_contractlineinvoiceschedule_Filter, { msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule: msdyn_contractlineinvoiceschedule_Result[] }>;
  msdyn_project: WebExpand<msdyn_contractlinescheduleofvalue_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_project: msdyn_project_Result }>;
  msdyn_projecttask: WebExpand<msdyn_contractlinescheduleofvalue_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_projecttask: msdyn_projecttask_Result }>;
  ownerid: WebExpand<msdyn_contractlinescheduleofvalue_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_contractlinescheduleofvalue_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_contractlinescheduleofvalue_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_contractlinescheduleofvalue_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_contractlinescheduleofvalue_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_contractlinescheduleofvalue_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_amount_after_tax_base_formatted?: string;
  msdyn_amount_after_tax_formatted?: string;
  msdyn_amount_base_formatted?: string;
  msdyn_amount_formatted?: string;
  msdyn_contract_formatted?: string;
  msdyn_contractlineid_formatted?: string;
  msdyn_invoicedate_formatted?: string;
  msdyn_invoicestatus_formatted?: string;
  msdyn_price_base_formatted?: string;
  msdyn_price_formatted?: string;
  msdyn_project_formatted?: string;
  msdyn_projecttask_formatted?: string;
  msdyn_startdatetime_formatted?: string;
  msdyn_tax_base_formatted?: string;
  msdyn_tax_formatted?: string;
  msdyn_transactionclassification_formatted?: string;
  msdyn_transactiontypecode_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_contractlinescheduleofvalue_Result extends msdyn_contractlinescheduleofvalue_Base, msdyn_contractlinescheduleofvalue_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_contract_guid: string | null;
  msdyn_contractlineid_guid: string | null;
  msdyn_project_guid: string | null;
  msdyn_projecttask_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_contractlinescheduleofvalue_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ContractLineId: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
  msdyn_contract: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  msdyn_project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_projecttask: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_contractlinescheduleofvalue_RelatedMany {
  msdyn_contractlinescheduleofvalue_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_contractlinescheduleofvalue_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_contractlinescheduleofvalue_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_contractlinescheduleofvalue_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_contractlinescheduleofvalue_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_contractlinescheduleofvalue_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_contractlinescheduleofvalue_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule: WebMappingRetrieve<msdyn_contractlineinvoiceschedule_Select,msdyn_contractlineinvoiceschedule_Expand,msdyn_contractlineinvoiceschedule_Filter,msdyn_contractlineinvoiceschedule_Fixed,msdyn_contractlineinvoiceschedule_Result,msdyn_contractlineinvoiceschedule_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_contractlinescheduleofvalues: WebMappingRetrieve<msdyn_contractlinescheduleofvalue_Select,msdyn_contractlinescheduleofvalue_Expand,msdyn_contractlinescheduleofvalue_Filter,msdyn_contractlinescheduleofvalue_Fixed,msdyn_contractlinescheduleofvalue_Result,msdyn_contractlinescheduleofvalue_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_contractlinescheduleofvalues: WebMappingRelated<msdyn_contractlinescheduleofvalue_RelatedOne,msdyn_contractlinescheduleofvalue_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_contractlinescheduleofvalues: WebMappingCUDA<msdyn_contractlinescheduleofvalue_Create,msdyn_contractlinescheduleofvalue_Update,msdyn_contractlinescheduleofvalue_Select>;
}
