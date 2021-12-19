interface msdyn_journalline_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_accountingdate?: Date | null;
  msdyn_amount?: number | null;
  msdyn_amount_base?: number | null;
  msdyn_amountmethod?: msdyn_amountmethod | null;
  msdyn_basisamount?: number | null;
  msdyn_basisamount_base?: number | null;
  msdyn_basisprice?: number | null;
  msdyn_basisprice_base?: number | null;
  msdyn_basisquantity?: number | null;
  msdyn_billingstatus?: msdyn_billingstatus | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_customertype?: msdyn_partytype | null;
  msdyn_description?: string | null;
  msdyn_documentdate?: Date | null;
  msdyn_enddatetime?: Date | null;
  msdyn_exchangeratedate?: Date | null;
  msdyn_externaldescription?: string | null;
  msdyn_isposted?: boolean | null;
  msdyn_journallineid?: string | null;
  msdyn_percent?: number | null;
  msdyn_price?: number | null;
  msdyn_price_base?: number | null;
  msdyn_quantity?: number | null;
  msdyn_salescontractline?: string | null;
  msdyn_startdatetime?: Date | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  msdyn_transactiontypecode?: msdyn_transactiontypecode | null;
  msdyn_vendortype?: msdyn_partytype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_journalline_statecode | null;
  statuscode?: msdyn_journalline_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_journalline_Relationships {
  msdyn_AccountCustomer?: Account_Result | null;
  msdyn_AccountVendor?: Account_Result | null;
  msdyn_ContactCustomer?: Contact_Result | null;
  msdyn_ContactVendor?: Contact_Result | null;
  msdyn_Journal?: msdyn_journal_Result | null;
  msdyn_PriceList?: PriceLevel_Result | null;
  msdyn_Product?: Product_Result | null;
  msdyn_Project?: msdyn_project_Result | null;
  msdyn_ResourceCategory?: BookableResourceCategory_Result | null;
  msdyn_ResourceOrganizationalUnitId?: msdyn_organizationalunit_Result | null;
  msdyn_SalesContract?: SalesOrder_Result | null;
  msdyn_SalesContractLineId?: SalesOrderDetail_Result | null;
  msdyn_Task?: msdyn_projecttask_Result | null;
  msdyn_TransactionCategory?: msdyn_transactioncategory_Result | null;
  msdyn_Unit?: UoM_Result | null;
  msdyn_UnitSchedule?: UoMSchedule_Result | null;
  msdyn_journalline_Annotations?: Annotation_Result[] | null;
  msdyn_journalline_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_journalline_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_journalline_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_journalline_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_journalline_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_journalline_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_journalline_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_journalline_SyncErrors?: SyncError_Result[] | null;
  msdyn_journalline_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline?: msdyn_projectapproval_Result[] | null;
}
interface msdyn_journalline extends msdyn_journalline_Base, msdyn_journalline_Relationships {
  msdyn_AccountCustomer_bind$accounts?: string | null;
  msdyn_AccountVendor_bind$accounts?: string | null;
  msdyn_ContactCustomer_bind$contacts?: string | null;
  msdyn_ContactVendor_bind$contacts?: string | null;
  msdyn_Journal_bind$msdyn_journals?: string | null;
  msdyn_PriceList_bind$pricelevels?: string | null;
  msdyn_Product_bind$products?: string | null;
  msdyn_Project_bind$msdyn_projects?: string | null;
  msdyn_ResourceCategory_bind$bookableresourcecategories?: string | null;
  msdyn_ResourceOrganizationalUnitId_bind$msdyn_organizationalunits?: string | null;
  msdyn_SalesContractLineId_bind$salesorderdetails?: string | null;
  msdyn_SalesContract_bind$salesorders?: string | null;
  msdyn_Task_bind$msdyn_projecttasks?: string | null;
  msdyn_TransactionCategory_bind$msdyn_transactioncategories?: string | null;
  msdyn_UnitSchedule_bind$uomschedules?: string | null;
  msdyn_Unit_bind$uoms?: string | null;
  msdyn_bookableresource_bind$bookableresources?: string | null;
  msdyn_contractorganizationalunitid_bind$msdyn_organizationalunits?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_journalline_Create extends msdyn_journalline {
}
interface msdyn_journalline_Update extends msdyn_journalline {
}
interface msdyn_journalline_Select {
  createdby_guid: WebAttribute<msdyn_journalline_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_journalline_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_journalline_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_journalline_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_journalline_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_journalline_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_journalline_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_journalline_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_accountcustomer_guid: WebAttribute<msdyn_journalline_Select, { msdyn_accountcustomer_guid: string | null }, { msdyn_accountcustomer_formatted?: string }>;
  msdyn_accountingdate: WebAttribute<msdyn_journalline_Select, { msdyn_accountingdate: Date | null }, { msdyn_accountingdate_formatted?: string }>;
  msdyn_accountvendor_guid: WebAttribute<msdyn_journalline_Select, { msdyn_accountvendor_guid: string | null }, { msdyn_accountvendor_formatted?: string }>;
  msdyn_amount: WebAttribute<msdyn_journalline_Select, { msdyn_amount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_base: WebAttribute<msdyn_journalline_Select, { msdyn_amount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amountmethod: WebAttribute<msdyn_journalline_Select, { msdyn_amountmethod: msdyn_amountmethod | null }, { msdyn_amountmethod_formatted?: string }>;
  msdyn_basisamount: WebAttribute<msdyn_journalline_Select, { msdyn_basisamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_basisamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_basisamount_base: WebAttribute<msdyn_journalline_Select, { msdyn_basisamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_basisamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_basisprice: WebAttribute<msdyn_journalline_Select, { msdyn_basisprice: number | null; transactioncurrencyid_guid: string | null }, { msdyn_basisprice_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_basisprice_base: WebAttribute<msdyn_journalline_Select, { msdyn_basisprice_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_basisprice_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_basisquantity: WebAttribute<msdyn_journalline_Select, { msdyn_basisquantity: number | null }, {  }>;
  msdyn_billingstatus: WebAttribute<msdyn_journalline_Select, { msdyn_billingstatus: msdyn_billingstatus | null }, { msdyn_billingstatus_formatted?: string }>;
  msdyn_billingtype: WebAttribute<msdyn_journalline_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_journalline_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_contactcustomer_guid: WebAttribute<msdyn_journalline_Select, { msdyn_contactcustomer_guid: string | null }, { msdyn_contactcustomer_formatted?: string }>;
  msdyn_contactvendor_guid: WebAttribute<msdyn_journalline_Select, { msdyn_contactvendor_guid: string | null }, { msdyn_contactvendor_formatted?: string }>;
  msdyn_contractorganizationalunitid_guid: WebAttribute<msdyn_journalline_Select, { msdyn_contractorganizationalunitid_guid: string | null }, { msdyn_contractorganizationalunitid_formatted?: string }>;
  msdyn_customertype: WebAttribute<msdyn_journalline_Select, { msdyn_customertype: msdyn_partytype | null }, { msdyn_customertype_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_journalline_Select, { msdyn_description: string | null }, {  }>;
  msdyn_documentdate: WebAttribute<msdyn_journalline_Select, { msdyn_documentdate: Date | null }, { msdyn_documentdate_formatted?: string }>;
  msdyn_enddatetime: WebAttribute<msdyn_journalline_Select, { msdyn_enddatetime: Date | null }, { msdyn_enddatetime_formatted?: string }>;
  msdyn_exchangeratedate: WebAttribute<msdyn_journalline_Select, { msdyn_exchangeratedate: Date | null }, { msdyn_exchangeratedate_formatted?: string }>;
  msdyn_externaldescription: WebAttribute<msdyn_journalline_Select, { msdyn_externaldescription: string | null }, {  }>;
  msdyn_isposted: WebAttribute<msdyn_journalline_Select, { msdyn_isposted: boolean | null }, {  }>;
  msdyn_journal_guid: WebAttribute<msdyn_journalline_Select, { msdyn_journal_guid: string | null }, { msdyn_journal_formatted?: string }>;
  msdyn_journallineid: WebAttribute<msdyn_journalline_Select, { msdyn_journallineid: string | null }, {  }>;
  msdyn_percent: WebAttribute<msdyn_journalline_Select, { msdyn_percent: number | null }, {  }>;
  msdyn_price: WebAttribute<msdyn_journalline_Select, { msdyn_price: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_price_base: WebAttribute<msdyn_journalline_Select, { msdyn_price_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_journalline_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_product_guid: WebAttribute<msdyn_journalline_Select, { msdyn_product_guid: string | null }, { msdyn_product_formatted?: string }>;
  msdyn_project_guid: WebAttribute<msdyn_journalline_Select, { msdyn_project_guid: string | null }, { msdyn_project_formatted?: string }>;
  msdyn_quantity: WebAttribute<msdyn_journalline_Select, { msdyn_quantity: number | null }, {  }>;
  msdyn_resourcecategory_guid: WebAttribute<msdyn_journalline_Select, { msdyn_resourcecategory_guid: string | null }, { msdyn_resourcecategory_formatted?: string }>;
  msdyn_resourceorganizationalunitid_guid: WebAttribute<msdyn_journalline_Select, { msdyn_resourceorganizationalunitid_guid: string | null }, { msdyn_resourceorganizationalunitid_formatted?: string }>;
  msdyn_salescontract_guid: WebAttribute<msdyn_journalline_Select, { msdyn_salescontract_guid: string | null }, { msdyn_salescontract_formatted?: string }>;
  msdyn_salescontractline: WebAttribute<msdyn_journalline_Select, { msdyn_salescontractline: string | null }, {  }>;
  msdyn_salescontractlineid_guid: WebAttribute<msdyn_journalline_Select, { msdyn_salescontractlineid_guid: string | null }, { msdyn_salescontractlineid_formatted?: string }>;
  msdyn_startdatetime: WebAttribute<msdyn_journalline_Select, { msdyn_startdatetime: Date | null }, { msdyn_startdatetime_formatted?: string }>;
  msdyn_task_guid: WebAttribute<msdyn_journalline_Select, { msdyn_task_guid: string | null }, { msdyn_task_formatted?: string }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_journalline_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  msdyn_transactionclassification: WebAttribute<msdyn_journalline_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  msdyn_transactiontypecode: WebAttribute<msdyn_journalline_Select, { msdyn_transactiontypecode: msdyn_transactiontypecode | null }, { msdyn_transactiontypecode_formatted?: string }>;
  msdyn_unit_guid: WebAttribute<msdyn_journalline_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_unitschedule_guid: WebAttribute<msdyn_journalline_Select, { msdyn_unitschedule_guid: string | null }, { msdyn_unitschedule_formatted?: string }>;
  msdyn_vendortype: WebAttribute<msdyn_journalline_Select, { msdyn_vendortype: msdyn_partytype | null }, { msdyn_vendortype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_journalline_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_journalline_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_journalline_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_journalline_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_journalline_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_journalline_Select, { statecode: msdyn_journalline_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_journalline_Select, { statuscode: msdyn_journalline_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_journalline_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_journalline_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_journalline_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_journalline_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_journalline_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_accountcustomer_guid: XQW.Guid;
  msdyn_accountingdate: Date;
  msdyn_accountvendor_guid: XQW.Guid;
  msdyn_amount: number;
  msdyn_amount_base: number;
  msdyn_amountmethod: msdyn_amountmethod;
  msdyn_basisamount: number;
  msdyn_basisamount_base: number;
  msdyn_basisprice: number;
  msdyn_basisprice_base: number;
  msdyn_basisquantity: any;
  msdyn_billingstatus: msdyn_billingstatus;
  msdyn_billingtype: msdyn_billingtype;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_contactcustomer_guid: XQW.Guid;
  msdyn_contactvendor_guid: XQW.Guid;
  msdyn_contractorganizationalunitid_guid: XQW.Guid;
  msdyn_customertype: msdyn_partytype;
  msdyn_description: string;
  msdyn_documentdate: Date;
  msdyn_enddatetime: Date;
  msdyn_exchangeratedate: Date;
  msdyn_externaldescription: string;
  msdyn_isposted: boolean;
  msdyn_journal_guid: XQW.Guid;
  msdyn_journallineid: XQW.Guid;
  msdyn_percent: any;
  msdyn_price: number;
  msdyn_price_base: number;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_product_guid: XQW.Guid;
  msdyn_project_guid: XQW.Guid;
  msdyn_quantity: any;
  msdyn_resourcecategory_guid: XQW.Guid;
  msdyn_resourceorganizationalunitid_guid: XQW.Guid;
  msdyn_salescontract_guid: XQW.Guid;
  msdyn_salescontractline: string;
  msdyn_salescontractlineid_guid: XQW.Guid;
  msdyn_startdatetime: Date;
  msdyn_task_guid: XQW.Guid;
  msdyn_transactioncategory_guid: XQW.Guid;
  msdyn_transactionclassification: msdyn_transactionclassification;
  msdyn_transactiontypecode: msdyn_transactiontypecode;
  msdyn_unit_guid: XQW.Guid;
  msdyn_unitschedule_guid: XQW.Guid;
  msdyn_vendortype: msdyn_partytype;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_journalline_statecode;
  statuscode: msdyn_journalline_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_journalline_Expand {
  createdby: WebExpand<msdyn_journalline_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_journalline_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_journalline_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_journalline_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AccountCustomer: WebExpand<msdyn_journalline_Expand, Account_Select, Account_Filter, { msdyn_AccountCustomer: Account_Result }>;
  msdyn_AccountVendor: WebExpand<msdyn_journalline_Expand, Account_Select, Account_Filter, { msdyn_AccountVendor: Account_Result }>;
  msdyn_ContactCustomer: WebExpand<msdyn_journalline_Expand, Contact_Select, Contact_Filter, { msdyn_ContactCustomer: Contact_Result }>;
  msdyn_ContactVendor: WebExpand<msdyn_journalline_Expand, Contact_Select, Contact_Filter, { msdyn_ContactVendor: Contact_Result }>;
  msdyn_Journal: WebExpand<msdyn_journalline_Expand, msdyn_journal_Select, msdyn_journal_Filter, { msdyn_Journal: msdyn_journal_Result }>;
  msdyn_PriceList: WebExpand<msdyn_journalline_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_PriceList: PriceLevel_Result }>;
  msdyn_Product: WebExpand<msdyn_journalline_Expand, Product_Select, Product_Filter, { msdyn_Product: Product_Result }>;
  msdyn_Project: WebExpand<msdyn_journalline_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_Project: msdyn_project_Result }>;
  msdyn_ResourceCategory: WebExpand<msdyn_journalline_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_ResourceCategory: BookableResourceCategory_Result }>;
  msdyn_ResourceOrganizationalUnitId: WebExpand<msdyn_journalline_Expand, msdyn_organizationalunit_Select, msdyn_organizationalunit_Filter, { msdyn_ResourceOrganizationalUnitId: msdyn_organizationalunit_Result }>;
  msdyn_SalesContract: WebExpand<msdyn_journalline_Expand, SalesOrder_Select, SalesOrder_Filter, { msdyn_SalesContract: SalesOrder_Result }>;
  msdyn_SalesContractLineId: WebExpand<msdyn_journalline_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { msdyn_SalesContractLineId: SalesOrderDetail_Result }>;
  msdyn_Task: WebExpand<msdyn_journalline_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_Task: msdyn_projecttask_Result }>;
  msdyn_TransactionCategory: WebExpand<msdyn_journalline_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_TransactionCategory: msdyn_transactioncategory_Result }>;
  msdyn_Unit: WebExpand<msdyn_journalline_Expand, UoM_Select, UoM_Filter, { msdyn_Unit: UoM_Result }>;
  msdyn_UnitSchedule: WebExpand<msdyn_journalline_Expand, UoMSchedule_Select, UoMSchedule_Filter, { msdyn_UnitSchedule: UoMSchedule_Result }>;
  msdyn_bookableresource: WebExpand<msdyn_journalline_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_bookableresource: BookableResource_Result }>;
  msdyn_contractorganizationalunitid: WebExpand<msdyn_journalline_Expand, msdyn_organizationalunit_Select, msdyn_organizationalunit_Filter, { msdyn_contractorganizationalunitid: msdyn_organizationalunit_Result }>;
  msdyn_journalline_Annotations: WebExpand<msdyn_journalline_Expand, Annotation_Select, Annotation_Filter, { msdyn_journalline_Annotations: Annotation_Result[] }>;
  msdyn_journalline_AsyncOperations: WebExpand<msdyn_journalline_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_journalline_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_journalline_BulkDeleteFailures: WebExpand<msdyn_journalline_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_journalline_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_journalline_DuplicateBaseRecord: WebExpand<msdyn_journalline_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_journalline_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_journalline_DuplicateMatchingRecord: WebExpand<msdyn_journalline_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_journalline_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_journalline_MailboxTrackingFolders: WebExpand<msdyn_journalline_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_journalline_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_journalline_PrincipalObjectAttributeAccesses: WebExpand<msdyn_journalline_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_journalline_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_journalline_ProcessSession: WebExpand<msdyn_journalline_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_journalline_ProcessSession: ProcessSession_Result[] }>;
  msdyn_journalline_SyncErrors: WebExpand<msdyn_journalline_Expand, SyncError_Select, SyncError_Filter, { msdyn_journalline_SyncErrors: SyncError_Result[] }>;
  msdyn_journalline_UserEntityInstanceDatas: WebExpand<msdyn_journalline_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_journalline_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline: WebExpand<msdyn_journalline_Expand, msdyn_projectapproval_Select, msdyn_projectapproval_Filter, { msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline: msdyn_projectapproval_Result[] }>;
  ownerid: WebExpand<msdyn_journalline_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_journalline_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_journalline_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_journalline_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_journalline_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_journalline_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_accountcustomer_formatted?: string;
  msdyn_accountingdate_formatted?: string;
  msdyn_accountvendor_formatted?: string;
  msdyn_amount_base_formatted?: string;
  msdyn_amount_formatted?: string;
  msdyn_amountmethod_formatted?: string;
  msdyn_basisamount_base_formatted?: string;
  msdyn_basisamount_formatted?: string;
  msdyn_basisprice_base_formatted?: string;
  msdyn_basisprice_formatted?: string;
  msdyn_billingstatus_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_contactcustomer_formatted?: string;
  msdyn_contactvendor_formatted?: string;
  msdyn_contractorganizationalunitid_formatted?: string;
  msdyn_customertype_formatted?: string;
  msdyn_documentdate_formatted?: string;
  msdyn_enddatetime_formatted?: string;
  msdyn_exchangeratedate_formatted?: string;
  msdyn_journal_formatted?: string;
  msdyn_price_base_formatted?: string;
  msdyn_price_formatted?: string;
  msdyn_pricelist_formatted?: string;
  msdyn_product_formatted?: string;
  msdyn_project_formatted?: string;
  msdyn_resourcecategory_formatted?: string;
  msdyn_resourceorganizationalunitid_formatted?: string;
  msdyn_salescontract_formatted?: string;
  msdyn_salescontractlineid_formatted?: string;
  msdyn_startdatetime_formatted?: string;
  msdyn_task_formatted?: string;
  msdyn_transactioncategory_formatted?: string;
  msdyn_transactionclassification_formatted?: string;
  msdyn_transactiontypecode_formatted?: string;
  msdyn_unit_formatted?: string;
  msdyn_unitschedule_formatted?: string;
  msdyn_vendortype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_journalline_Result extends msdyn_journalline_Base, msdyn_journalline_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_accountcustomer_guid: string | null;
  msdyn_accountvendor_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  msdyn_contactcustomer_guid: string | null;
  msdyn_contactvendor_guid: string | null;
  msdyn_contractorganizationalunitid_guid: string | null;
  msdyn_journal_guid: string | null;
  msdyn_pricelist_guid: string | null;
  msdyn_product_guid: string | null;
  msdyn_project_guid: string | null;
  msdyn_resourcecategory_guid: string | null;
  msdyn_resourceorganizationalunitid_guid: string | null;
  msdyn_salescontract_guid: string | null;
  msdyn_salescontractlineid_guid: string | null;
  msdyn_task_guid: string | null;
  msdyn_transactioncategory_guid: string | null;
  msdyn_unit_guid: string | null;
  msdyn_unitschedule_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_journalline_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AccountCustomer: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_AccountVendor: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_ContactCustomer: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  msdyn_ContactVendor: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  msdyn_Journal: WebMappingRetrieve<msdyn_journal_Select,msdyn_journal_Expand,msdyn_journal_Filter,msdyn_journal_Fixed,msdyn_journal_Result,msdyn_journal_FormattedResult>;
  msdyn_PriceList: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  msdyn_Product: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  msdyn_Project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_ResourceCategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  msdyn_ResourceOrganizationalUnitId: WebMappingRetrieve<msdyn_organizationalunit_Select,msdyn_organizationalunit_Expand,msdyn_organizationalunit_Filter,msdyn_organizationalunit_Fixed,msdyn_organizationalunit_Result,msdyn_organizationalunit_FormattedResult>;
  msdyn_SalesContract: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  msdyn_SalesContractLineId: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
  msdyn_Task: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  msdyn_TransactionCategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  msdyn_Unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  msdyn_UnitSchedule: WebMappingRetrieve<UoMSchedule_Select,UoMSchedule_Expand,UoMSchedule_Filter,UoMSchedule_Fixed,UoMSchedule_Result,UoMSchedule_FormattedResult>;
  msdyn_bookableresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_contractorganizationalunitid: WebMappingRetrieve<msdyn_organizationalunit_Select,msdyn_organizationalunit_Expand,msdyn_organizationalunit_Filter,msdyn_organizationalunit_Fixed,msdyn_organizationalunit_Result,msdyn_organizationalunit_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_journalline_RelatedMany {
  msdyn_journalline_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_journalline_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_journalline_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_journalline_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_journalline_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_journalline_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_journalline_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_journalline_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_journalline_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_journalline_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_journalline_msdyn_projectapproval_referencejournalline: WebMappingRetrieve<msdyn_projectapproval_Select,msdyn_projectapproval_Expand,msdyn_projectapproval_Filter,msdyn_projectapproval_Fixed,msdyn_projectapproval_Result,msdyn_projectapproval_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_journallines: WebMappingRetrieve<msdyn_journalline_Select,msdyn_journalline_Expand,msdyn_journalline_Filter,msdyn_journalline_Fixed,msdyn_journalline_Result,msdyn_journalline_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_journallines: WebMappingRelated<msdyn_journalline_RelatedOne,msdyn_journalline_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_journallines: WebMappingCUDA<msdyn_journalline_Create,msdyn_journalline_Update,msdyn_journalline_Select>;
}
