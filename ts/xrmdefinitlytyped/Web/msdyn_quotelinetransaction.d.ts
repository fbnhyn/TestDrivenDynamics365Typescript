interface msdyn_quotelinetransaction_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_accountingdate?: Date | null;
  msdyn_amount?: number | null;
  msdyn_amount_after_tax?: number | null;
  msdyn_amount_after_tax_base?: number | null;
  msdyn_amount_base?: number | null;
  msdyn_amountmethod?: msdyn_amountmethod | null;
  msdyn_basisamount?: number | null;
  msdyn_basisamount_base?: number | null;
  msdyn_basisprice?: number | null;
  msdyn_basisprice_base?: number | null;
  msdyn_basisquantity?: number | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_customertype?: msdyn_partytype | null;
  msdyn_description?: string | null;
  msdyn_documentdate?: Date | null;
  msdyn_enddatetime?: Date | null;
  msdyn_exchangeratedate?: Date | null;
  msdyn_isdataimport?: boolean | null;
  msdyn_percent?: number | null;
  msdyn_price?: number | null;
  msdyn_price_base?: number | null;
  msdyn_quantity?: number | null;
  msdyn_quoteline?: string | null;
  msdyn_quotelinetransactionid?: string | null;
  msdyn_startdatetime?: Date | null;
  msdyn_tax?: number | null;
  msdyn_tax_base?: number | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  msdyn_transactiontypecode?: msdyn_transactiontypecode | null;
  msdyn_vendortype?: msdyn_partytype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_quotelinetransaction_statecode | null;
  statuscode?: msdyn_quotelinetransaction_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_quotelinetransaction_Relationships {
  msdyn_AccountCustomer?: Account_Result | null;
  msdyn_AccountVendor?: Account_Result | null;
  msdyn_ContactCustomer?: Contact_Result | null;
  msdyn_ContactVendor?: Contact_Result | null;
  msdyn_Origin?: msdyn_quotelinetransaction_Result | null;
  msdyn_PriceList?: PriceLevel_Result | null;
  msdyn_Product?: Product_Result | null;
  msdyn_Project?: msdyn_project_Result | null;
  msdyn_QuoteId?: Quote_Result | null;
  msdyn_ResourceCategory?: BookableResourceCategory_Result | null;
  msdyn_ResourceOrganizationalUnitId?: msdyn_organizationalunit_Result | null;
  msdyn_Task?: msdyn_projecttask_Result | null;
  msdyn_TransactionCategory?: msdyn_transactioncategory_Result | null;
  msdyn_Unit?: UoM_Result | null;
  msdyn_UnitSchedule?: UoMSchedule_Result | null;
  msdyn_msdyn_quotelinetransaction_msdyn_quotelineanalyticsbreakdown_QuoteLineDetail?: msdyn_quotelineanalyticsbreakdown_Result[] | null;
  msdyn_msdyn_quotelinetransaction_msdyn_quotelinetransaction_Origin?: msdyn_quotelinetransaction_Result[] | null;
  msdyn_quotelinetransaction_Annotations?: Annotation_Result[] | null;
  msdyn_quotelinetransaction_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_quotelinetransaction_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_quotelinetransaction_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelinetransaction_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelinetransaction_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_quotelinetransaction_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_quotelinetransaction_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_quotelinetransaction_SyncErrors?: SyncError_Result[] | null;
  msdyn_quotelinetransaction_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_quotelinetransaction_msdyn_orderlinetransaction?: msdyn_orderlinetransaction_Result[] | null;
}
interface msdyn_quotelinetransaction extends msdyn_quotelinetransaction_Base, msdyn_quotelinetransaction_Relationships {
  msdyn_AccountCustomer_bind$accounts?: string | null;
  msdyn_AccountVendor_bind$accounts?: string | null;
  msdyn_ContactCustomer_bind$contacts?: string | null;
  msdyn_ContactVendor_bind$contacts?: string | null;
  msdyn_PriceList_bind$pricelevels?: string | null;
  msdyn_Product_bind$products?: string | null;
  msdyn_Project_bind$msdyn_projects?: string | null;
  msdyn_QuoteId_bind$quotes?: string | null;
  msdyn_ResourceCategory_bind$bookableresourcecategories?: string | null;
  msdyn_ResourceOrganizationalUnitId_bind$msdyn_organizationalunits?: string | null;
  msdyn_Task_bind$msdyn_projecttasks?: string | null;
  msdyn_TransactionCategory_bind$msdyn_transactioncategories?: string | null;
  msdyn_UnitSchedule_bind$uomschedules?: string | null;
  msdyn_Unit_bind$uoms?: string | null;
  msdyn_bookableresource_bind$bookableresources?: string | null;
  msdyn_quotelineid_bind$quotedetails?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_quotelinetransaction_Create extends msdyn_quotelinetransaction {
  msdyn_Origin_bind$msdyn_quotelinetransactions?: string | null;
}
interface msdyn_quotelinetransaction_Update extends msdyn_quotelinetransaction {
}
interface msdyn_quotelinetransaction_Select {
  createdby_guid: WebAttribute<msdyn_quotelinetransaction_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_quotelinetransaction_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_quotelinetransaction_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_quotelinetransaction_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_quotelinetransaction_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_quotelinetransaction_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_quotelinetransaction_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_quotelinetransaction_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_accountcustomer_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_accountcustomer_guid: string | null }, { msdyn_accountcustomer_formatted?: string }>;
  msdyn_accountingdate: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_accountingdate: Date | null }, { msdyn_accountingdate_formatted?: string }>;
  msdyn_accountvendor_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_accountvendor_guid: string | null }, { msdyn_accountvendor_formatted?: string }>;
  msdyn_amount: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_amount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_after_tax: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_amount_after_tax: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_after_tax_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_after_tax_base: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_amount_after_tax_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_after_tax_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_base: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_amount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amountmethod: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_amountmethod: msdyn_amountmethod | null }, { msdyn_amountmethod_formatted?: string }>;
  msdyn_basisamount: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_basisamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_basisamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_basisamount_base: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_basisamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_basisamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_basisprice: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_basisprice: number | null; transactioncurrencyid_guid: string | null }, { msdyn_basisprice_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_basisprice_base: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_basisprice_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_basisprice_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_basisquantity: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_basisquantity: number | null }, {  }>;
  msdyn_billingtype: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_contactcustomer_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_contactcustomer_guid: string | null }, { msdyn_contactcustomer_formatted?: string }>;
  msdyn_contactvendor_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_contactvendor_guid: string | null }, { msdyn_contactvendor_formatted?: string }>;
  msdyn_customertype: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_customertype: msdyn_partytype | null }, { msdyn_customertype_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_description: string | null }, {  }>;
  msdyn_documentdate: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_documentdate: Date | null }, { msdyn_documentdate_formatted?: string }>;
  msdyn_enddatetime: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_enddatetime: Date | null }, { msdyn_enddatetime_formatted?: string }>;
  msdyn_exchangeratedate: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_exchangeratedate: Date | null }, { msdyn_exchangeratedate_formatted?: string }>;
  msdyn_isdataimport: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_isdataimport: boolean | null }, {  }>;
  msdyn_origin_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_origin_guid: string | null }, { msdyn_origin_formatted?: string }>;
  msdyn_percent: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_percent: number | null }, {  }>;
  msdyn_price: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_price: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_price_base: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_price_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_product_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_product_guid: string | null }, { msdyn_product_formatted?: string }>;
  msdyn_project_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_project_guid: string | null }, { msdyn_project_formatted?: string }>;
  msdyn_quantity: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_quantity: number | null }, {  }>;
  msdyn_quoteid_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_quoteid_guid: string | null }, { msdyn_quoteid_formatted?: string }>;
  msdyn_quoteline: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_quoteline: string | null }, {  }>;
  msdyn_quotelineid_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_quotelineid_guid: string | null }, { msdyn_quotelineid_formatted?: string }>;
  msdyn_quotelinetransactionid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_quotelinetransactionid: string | null }, {  }>;
  msdyn_resourcecategory_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_resourcecategory_guid: string | null }, { msdyn_resourcecategory_formatted?: string }>;
  msdyn_resourceorganizationalunitid_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_resourceorganizationalunitid_guid: string | null }, { msdyn_resourceorganizationalunitid_formatted?: string }>;
  msdyn_startdatetime: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_startdatetime: Date | null }, { msdyn_startdatetime_formatted?: string }>;
  msdyn_task_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_task_guid: string | null }, { msdyn_task_formatted?: string }>;
  msdyn_tax: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_tax: number | null; transactioncurrencyid_guid: string | null }, { msdyn_tax_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_tax_base: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_tax_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_tax_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  msdyn_transactionclassification: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  msdyn_transactiontypecode: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_transactiontypecode: msdyn_transactiontypecode | null }, { msdyn_transactiontypecode_formatted?: string }>;
  msdyn_unit_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_unitschedule_guid: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_unitschedule_guid: string | null }, { msdyn_unitschedule_formatted?: string }>;
  msdyn_vendortype: WebAttribute<msdyn_quotelinetransaction_Select, { msdyn_vendortype: msdyn_partytype | null }, { msdyn_vendortype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_quotelinetransaction_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_quotelinetransaction_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_quotelinetransaction_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_quotelinetransaction_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_quotelinetransaction_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_quotelinetransaction_Select, { statecode: msdyn_quotelinetransaction_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_quotelinetransaction_Select, { statuscode: msdyn_quotelinetransaction_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_quotelinetransaction_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_quotelinetransaction_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_quotelinetransaction_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_quotelinetransaction_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_quotelinetransaction_Filter {
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
  msdyn_amount_after_tax: number;
  msdyn_amount_after_tax_base: number;
  msdyn_amount_base: number;
  msdyn_amountmethod: msdyn_amountmethod;
  msdyn_basisamount: number;
  msdyn_basisamount_base: number;
  msdyn_basisprice: number;
  msdyn_basisprice_base: number;
  msdyn_basisquantity: any;
  msdyn_billingtype: msdyn_billingtype;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_contactcustomer_guid: XQW.Guid;
  msdyn_contactvendor_guid: XQW.Guid;
  msdyn_customertype: msdyn_partytype;
  msdyn_description: string;
  msdyn_documentdate: Date;
  msdyn_enddatetime: Date;
  msdyn_exchangeratedate: Date;
  msdyn_isdataimport: boolean;
  msdyn_origin_guid: XQW.Guid;
  msdyn_percent: any;
  msdyn_price: number;
  msdyn_price_base: number;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_product_guid: XQW.Guid;
  msdyn_project_guid: XQW.Guid;
  msdyn_quantity: any;
  msdyn_quoteid_guid: XQW.Guid;
  msdyn_quoteline: string;
  msdyn_quotelineid_guid: XQW.Guid;
  msdyn_quotelinetransactionid: XQW.Guid;
  msdyn_resourcecategory_guid: XQW.Guid;
  msdyn_resourceorganizationalunitid_guid: XQW.Guid;
  msdyn_startdatetime: Date;
  msdyn_task_guid: XQW.Guid;
  msdyn_tax: number;
  msdyn_tax_base: number;
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
  statecode: msdyn_quotelinetransaction_statecode;
  statuscode: msdyn_quotelinetransaction_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_quotelinetransaction_Expand {
  createdby: WebExpand<msdyn_quotelinetransaction_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_quotelinetransaction_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_quotelinetransaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_quotelinetransaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AccountCustomer: WebExpand<msdyn_quotelinetransaction_Expand, Account_Select, Account_Filter, { msdyn_AccountCustomer: Account_Result }>;
  msdyn_AccountVendor: WebExpand<msdyn_quotelinetransaction_Expand, Account_Select, Account_Filter, { msdyn_AccountVendor: Account_Result }>;
  msdyn_ContactCustomer: WebExpand<msdyn_quotelinetransaction_Expand, Contact_Select, Contact_Filter, { msdyn_ContactCustomer: Contact_Result }>;
  msdyn_ContactVendor: WebExpand<msdyn_quotelinetransaction_Expand, Contact_Select, Contact_Filter, { msdyn_ContactVendor: Contact_Result }>;
  msdyn_Origin: WebExpand<msdyn_quotelinetransaction_Expand, msdyn_quotelinetransaction_Select, msdyn_quotelinetransaction_Filter, { msdyn_Origin: msdyn_quotelinetransaction_Result }>;
  msdyn_PriceList: WebExpand<msdyn_quotelinetransaction_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_PriceList: PriceLevel_Result }>;
  msdyn_Product: WebExpand<msdyn_quotelinetransaction_Expand, Product_Select, Product_Filter, { msdyn_Product: Product_Result }>;
  msdyn_Project: WebExpand<msdyn_quotelinetransaction_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_Project: msdyn_project_Result }>;
  msdyn_QuoteId: WebExpand<msdyn_quotelinetransaction_Expand, Quote_Select, Quote_Filter, { msdyn_QuoteId: Quote_Result }>;
  msdyn_ResourceCategory: WebExpand<msdyn_quotelinetransaction_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_ResourceCategory: BookableResourceCategory_Result }>;
  msdyn_ResourceOrganizationalUnitId: WebExpand<msdyn_quotelinetransaction_Expand, msdyn_organizationalunit_Select, msdyn_organizationalunit_Filter, { msdyn_ResourceOrganizationalUnitId: msdyn_organizationalunit_Result }>;
  msdyn_Task: WebExpand<msdyn_quotelinetransaction_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_Task: msdyn_projecttask_Result }>;
  msdyn_TransactionCategory: WebExpand<msdyn_quotelinetransaction_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_TransactionCategory: msdyn_transactioncategory_Result }>;
  msdyn_Unit: WebExpand<msdyn_quotelinetransaction_Expand, UoM_Select, UoM_Filter, { msdyn_Unit: UoM_Result }>;
  msdyn_UnitSchedule: WebExpand<msdyn_quotelinetransaction_Expand, UoMSchedule_Select, UoMSchedule_Filter, { msdyn_UnitSchedule: UoMSchedule_Result }>;
  msdyn_bookableresource: WebExpand<msdyn_quotelinetransaction_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_bookableresource: BookableResource_Result }>;
  msdyn_msdyn_quotelinetransaction_msdyn_quotelineanalyticsbreakdown_QuoteLineDetail: WebExpand<msdyn_quotelinetransaction_Expand, msdyn_quotelineanalyticsbreakdown_Select, msdyn_quotelineanalyticsbreakdown_Filter, { msdyn_msdyn_quotelinetransaction_msdyn_quotelineanalyticsbreakdown_QuoteLineDetail: msdyn_quotelineanalyticsbreakdown_Result[] }>;
  msdyn_msdyn_quotelinetransaction_msdyn_quotelinetransaction_Origin: WebExpand<msdyn_quotelinetransaction_Expand, msdyn_quotelinetransaction_Select, msdyn_quotelinetransaction_Filter, { msdyn_msdyn_quotelinetransaction_msdyn_quotelinetransaction_Origin: msdyn_quotelinetransaction_Result[] }>;
  msdyn_quotelineid: WebExpand<msdyn_quotelinetransaction_Expand, QuoteDetail_Select, QuoteDetail_Filter, { msdyn_quotelineid: QuoteDetail_Result }>;
  msdyn_quotelinetransaction_Annotations: WebExpand<msdyn_quotelinetransaction_Expand, Annotation_Select, Annotation_Filter, { msdyn_quotelinetransaction_Annotations: Annotation_Result[] }>;
  msdyn_quotelinetransaction_AsyncOperations: WebExpand<msdyn_quotelinetransaction_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_quotelinetransaction_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_quotelinetransaction_BulkDeleteFailures: WebExpand<msdyn_quotelinetransaction_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_quotelinetransaction_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_quotelinetransaction_DuplicateBaseRecord: WebExpand<msdyn_quotelinetransaction_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelinetransaction_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelinetransaction_DuplicateMatchingRecord: WebExpand<msdyn_quotelinetransaction_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelinetransaction_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelinetransaction_MailboxTrackingFolders: WebExpand<msdyn_quotelinetransaction_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_quotelinetransaction_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_quotelinetransaction_PrincipalObjectAttributeAccesses: WebExpand<msdyn_quotelinetransaction_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_quotelinetransaction_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_quotelinetransaction_ProcessSession: WebExpand<msdyn_quotelinetransaction_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_quotelinetransaction_ProcessSession: ProcessSession_Result[] }>;
  msdyn_quotelinetransaction_SyncErrors: WebExpand<msdyn_quotelinetransaction_Expand, SyncError_Select, SyncError_Filter, { msdyn_quotelinetransaction_SyncErrors: SyncError_Result[] }>;
  msdyn_quotelinetransaction_UserEntityInstanceDatas: WebExpand<msdyn_quotelinetransaction_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_quotelinetransaction_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_quotelinetransaction_msdyn_orderlinetransaction: WebExpand<msdyn_quotelinetransaction_Expand, msdyn_orderlinetransaction_Select, msdyn_orderlinetransaction_Filter, { msdyn_quotelinetransaction_msdyn_orderlinetransaction: msdyn_orderlinetransaction_Result[] }>;
  ownerid: WebExpand<msdyn_quotelinetransaction_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_quotelinetransaction_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_quotelinetransaction_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_quotelinetransaction_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_quotelinetransaction_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_quotelinetransaction_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_accountcustomer_formatted?: string;
  msdyn_accountingdate_formatted?: string;
  msdyn_accountvendor_formatted?: string;
  msdyn_amount_after_tax_base_formatted?: string;
  msdyn_amount_after_tax_formatted?: string;
  msdyn_amount_base_formatted?: string;
  msdyn_amount_formatted?: string;
  msdyn_amountmethod_formatted?: string;
  msdyn_basisamount_base_formatted?: string;
  msdyn_basisamount_formatted?: string;
  msdyn_basisprice_base_formatted?: string;
  msdyn_basisprice_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_contactcustomer_formatted?: string;
  msdyn_contactvendor_formatted?: string;
  msdyn_customertype_formatted?: string;
  msdyn_documentdate_formatted?: string;
  msdyn_enddatetime_formatted?: string;
  msdyn_exchangeratedate_formatted?: string;
  msdyn_origin_formatted?: string;
  msdyn_price_base_formatted?: string;
  msdyn_price_formatted?: string;
  msdyn_pricelist_formatted?: string;
  msdyn_product_formatted?: string;
  msdyn_project_formatted?: string;
  msdyn_quoteid_formatted?: string;
  msdyn_quotelineid_formatted?: string;
  msdyn_resourcecategory_formatted?: string;
  msdyn_resourceorganizationalunitid_formatted?: string;
  msdyn_startdatetime_formatted?: string;
  msdyn_task_formatted?: string;
  msdyn_tax_base_formatted?: string;
  msdyn_tax_formatted?: string;
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
interface msdyn_quotelinetransaction_Result extends msdyn_quotelinetransaction_Base, msdyn_quotelinetransaction_Relationships {
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
  msdyn_origin_guid: string | null;
  msdyn_pricelist_guid: string | null;
  msdyn_product_guid: string | null;
  msdyn_project_guid: string | null;
  msdyn_quoteid_guid: string | null;
  msdyn_quotelineid_guid: string | null;
  msdyn_resourcecategory_guid: string | null;
  msdyn_resourceorganizationalunitid_guid: string | null;
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
interface msdyn_quotelinetransaction_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AccountCustomer: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_AccountVendor: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_ContactCustomer: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  msdyn_ContactVendor: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  msdyn_Origin: WebMappingRetrieve<msdyn_quotelinetransaction_Select,msdyn_quotelinetransaction_Expand,msdyn_quotelinetransaction_Filter,msdyn_quotelinetransaction_Fixed,msdyn_quotelinetransaction_Result,msdyn_quotelinetransaction_FormattedResult>;
  msdyn_PriceList: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  msdyn_Product: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  msdyn_Project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_QuoteId: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  msdyn_ResourceCategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  msdyn_ResourceOrganizationalUnitId: WebMappingRetrieve<msdyn_organizationalunit_Select,msdyn_organizationalunit_Expand,msdyn_organizationalunit_Filter,msdyn_organizationalunit_Fixed,msdyn_organizationalunit_Result,msdyn_organizationalunit_FormattedResult>;
  msdyn_Task: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  msdyn_TransactionCategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  msdyn_Unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  msdyn_UnitSchedule: WebMappingRetrieve<UoMSchedule_Select,UoMSchedule_Expand,UoMSchedule_Filter,UoMSchedule_Fixed,UoMSchedule_Result,UoMSchedule_FormattedResult>;
  msdyn_bookableresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_quotelineid: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_quotelinetransaction_RelatedMany {
  msdyn_msdyn_quotelinetransaction_msdyn_quotelineanalyticsbreakdown_QuoteLineDetail: WebMappingRetrieve<msdyn_quotelineanalyticsbreakdown_Select,msdyn_quotelineanalyticsbreakdown_Expand,msdyn_quotelineanalyticsbreakdown_Filter,msdyn_quotelineanalyticsbreakdown_Fixed,msdyn_quotelineanalyticsbreakdown_Result,msdyn_quotelineanalyticsbreakdown_FormattedResult>;
  msdyn_msdyn_quotelinetransaction_msdyn_quotelinetransaction_Origin: WebMappingRetrieve<msdyn_quotelinetransaction_Select,msdyn_quotelinetransaction_Expand,msdyn_quotelinetransaction_Filter,msdyn_quotelinetransaction_Fixed,msdyn_quotelinetransaction_Result,msdyn_quotelinetransaction_FormattedResult>;
  msdyn_quotelinetransaction_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_quotelinetransaction_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_quotelinetransaction_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_quotelinetransaction_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelinetransaction_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelinetransaction_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_quotelinetransaction_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_quotelinetransaction_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_quotelinetransaction_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_quotelinetransaction_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_quotelinetransaction_msdyn_orderlinetransaction: WebMappingRetrieve<msdyn_orderlinetransaction_Select,msdyn_orderlinetransaction_Expand,msdyn_orderlinetransaction_Filter,msdyn_orderlinetransaction_Fixed,msdyn_orderlinetransaction_Result,msdyn_orderlinetransaction_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_quotelinetransactions: WebMappingRetrieve<msdyn_quotelinetransaction_Select,msdyn_quotelinetransaction_Expand,msdyn_quotelinetransaction_Filter,msdyn_quotelinetransaction_Fixed,msdyn_quotelinetransaction_Result,msdyn_quotelinetransaction_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_quotelinetransactions: WebMappingRelated<msdyn_quotelinetransaction_RelatedOne,msdyn_quotelinetransaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_quotelinetransactions: WebMappingCUDA<msdyn_quotelinetransaction_Create,msdyn_quotelinetransaction_Update,msdyn_quotelinetransaction_Select>;
}
