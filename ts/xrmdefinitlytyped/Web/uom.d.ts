interface UoM_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  isschedulebaseuom?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  organizationid?: string | null;
  overriddencreatedon?: Date | null;
  quantity?: number | null;
  timezoneruleversionnumber?: number | null;
  uomid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface UoM_Relationships {
  CreatedByExternalParty?: ExternalParty_Result | null;
  ModifiedByExternalParty?: ExternalParty_Result | null;
  UoM_AsyncOperations?: AsyncOperation_Result[] | null;
  UoM_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  UoM_SyncErrors?: SyncError_Result[] | null;
  msdyn_uom_msdyn_actual_Unit?: msdyn_actual_Result[] | null;
  msdyn_uom_msdyn_agreementbookingproduct_Unit?: msdyn_agreementbookingproduct_Result[] | null;
  msdyn_uom_msdyn_agreementbookingservice_Unit?: msdyn_agreementbookingservice_Result[] | null;
  msdyn_uom_msdyn_agreementinvoiceproduct_Unit?: msdyn_agreementinvoiceproduct_Result[] | null;
  msdyn_uom_msdyn_estimateline_Unit?: msdyn_estimateline_Result[] | null;
  msdyn_uom_msdyn_expense_Unit?: msdyn_expense_Result[] | null;
  msdyn_uom_msdyn_geofencingsettings_DistanceUnit?: msdyn_geofencingsettings_Result[] | null;
  msdyn_uom_msdyn_incidenttypeproduct_Unit?: msdyn_incidenttypeproduct_Result[] | null;
  msdyn_uom_msdyn_incidenttyperecommendationresult_Unit?: msdyn_incidenttyperecommendationresult_Result[] | null;
  msdyn_uom_msdyn_incidenttypeservice_Unit?: msdyn_incidenttypeservice_Result[] | null;
  msdyn_uom_msdyn_inventoryadjustmentproduct_Unit?: msdyn_inventoryadjustmentproduct_Result[] | null;
  msdyn_uom_msdyn_inventoryjournal_Unit?: msdyn_inventoryjournal_Result[] | null;
  msdyn_uom_msdyn_invoicelinetransaction_Unit?: msdyn_invoicelinetransaction_Result[] | null;
  msdyn_uom_msdyn_journalline_Unit?: msdyn_journalline_Result[] | null;
  msdyn_uom_msdyn_opportunitylinetransaction_Unit?: msdyn_opportunitylinetransaction_Result[] | null;
  msdyn_uom_msdyn_orderinvoicingproduct_Unit?: msdyn_orderinvoicingproduct_Result[] | null;
  msdyn_uom_msdyn_orderlinetransaction_Unit?: msdyn_orderlinetransaction_Result[] | null;
  msdyn_uom_msdyn_productinventory_Unit?: msdyn_productinventory_Result[] | null;
  msdyn_uom_msdyn_purchaseorderproduct_Unit?: msdyn_purchaseorderproduct_Result[] | null;
  msdyn_uom_msdyn_quotebookingproduct_Unit?: msdyn_quotebookingproduct_Result[] | null;
  msdyn_uom_msdyn_quotebookingservice_Unit?: msdyn_quotebookingservice_Result[] | null;
  msdyn_uom_msdyn_quoteinvoicingproduct_Unit?: msdyn_quoteinvoicingproduct_Result[] | null;
  msdyn_uom_msdyn_quotelinetransaction_Unit?: msdyn_quotelinetransaction_Result[] | null;
  msdyn_uom_msdyn_resourcecategorypricelevel_PrimaryUnit?: msdyn_resourcecategorypricelevel_Result[] | null;
  msdyn_uom_msdyn_resourcecategorypricelevel_Unit?: msdyn_resourcecategorypricelevel_Result[] | null;
  msdyn_uom_msdyn_rmaproduct_Unit?: msdyn_rmaproduct_Result[] | null;
  msdyn_uom_msdyn_rtvproduct_Unit?: msdyn_rtvproduct_Result[] | null;
  msdyn_uom_msdyn_transactioncategory_DefaultUnit?: msdyn_transactioncategory_Result[] | null;
  msdyn_uom_msdyn_transactioncategorypricelevel_Unit?: msdyn_transactioncategorypricelevel_Result[] | null;
  msdyn_uom_msdyn_transactiontype_DefaultUnit?: msdyn_transactiontype_Result[] | null;
  msdyn_uom_msdyn_workorderproduct_Unit?: msdyn_workorderproduct_Result[] | null;
  msdyn_uom_msdyn_workorderservice_Unit?: msdyn_workorderservice_Result[] | null;
  msdyn_uom_pricelevel_TimeUnit?: PriceLevel_Result[] | null;
  unit_of_measurement_base_unit?: UoM_Result[] | null;
  unit_of_measurement_contract_line_items?: ContractDetail_Result[] | null;
  unit_of_measurement_invoice_details?: InvoiceDetail_Result[] | null;
  unit_of_measurement_opportunity_products?: OpportunityProduct_Result[] | null;
  unit_of_measurement_order_details?: SalesOrderDetail_Result[] | null;
  unit_of_measurement_product_price_levels?: ProductPriceLevel_Result[] | null;
  unit_of_measurement_productassociation?: ProductAssociation_Result[] | null;
  unit_of_measurement_products?: Product_Result[] | null;
  unit_of_measurement_quote_details?: QuoteDetail_Result[] | null;
  uom_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  uom_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_uom?: UserEntityInstanceData_Result[] | null;
}
interface UoM extends UoM_Base, UoM_Relationships {
  baseuom_bind$uoms?: string | null;
}
interface UoM_Create extends UoM {
  uomscheduleid_bind$uomschedules?: string | null;
}
interface UoM_Update extends UoM {
}
interface UoM_Select {
  baseuom_guid: WebAttribute<UoM_Select, { baseuom_guid: string | null }, { baseuom_formatted?: string }>;
  createdby_guid: WebAttribute<UoM_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdbyexternalparty_guid: WebAttribute<UoM_Select, { createdbyexternalparty_guid: string | null }, { createdbyexternalparty_formatted?: string }>;
  createdon: WebAttribute<UoM_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UoM_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<UoM_Select, { importsequencenumber: number | null }, {  }>;
  isschedulebaseuom: WebAttribute<UoM_Select, { isschedulebaseuom: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<UoM_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedbyexternalparty_guid: WebAttribute<UoM_Select, { modifiedbyexternalparty_guid: string | null }, { modifiedbyexternalparty_formatted?: string }>;
  modifiedon: WebAttribute<UoM_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UoM_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<UoM_Select, { name: string | null }, {  }>;
  organizationid: WebAttribute<UoM_Select, { organizationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<UoM_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  quantity: WebAttribute<UoM_Select, { quantity: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<UoM_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uomid: WebAttribute<UoM_Select, { uomid: string | null }, {  }>;
  uomscheduleid_guid: WebAttribute<UoM_Select, { uomscheduleid_guid: string | null }, { uomscheduleid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<UoM_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<UoM_Select, { versionnumber: number | null }, {  }>;
}
interface UoM_Filter {
  baseuom_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdbyexternalparty_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  isschedulebaseuom: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedbyexternalparty_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid: XQW.Guid;
  overriddencreatedon: Date;
  quantity: any;
  timezoneruleversionnumber: number;
  uomid: XQW.Guid;
  uomscheduleid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface UoM_Expand {
  CreatedByExternalParty: WebExpand<UoM_Expand, ExternalParty_Select, ExternalParty_Filter, { CreatedByExternalParty: ExternalParty_Result }>;
  ModifiedByExternalParty: WebExpand<UoM_Expand, ExternalParty_Select, ExternalParty_Filter, { ModifiedByExternalParty: ExternalParty_Result }>;
  UoM_AsyncOperations: WebExpand<UoM_Expand, AsyncOperation_Select, AsyncOperation_Filter, { UoM_AsyncOperations: AsyncOperation_Result[] }>;
  UoM_BulkDeleteFailures: WebExpand<UoM_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { UoM_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  UoM_SyncErrors: WebExpand<UoM_Expand, SyncError_Select, SyncError_Filter, { UoM_SyncErrors: SyncError_Result[] }>;
  baseuom: WebExpand<UoM_Expand, UoM_Select, UoM_Filter, { baseuom: UoM_Result }>;
  createdby: WebExpand<UoM_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UoM_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UoM_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UoM_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_uom_msdyn_actual_Unit: WebExpand<UoM_Expand, msdyn_actual_Select, msdyn_actual_Filter, { msdyn_uom_msdyn_actual_Unit: msdyn_actual_Result[] }>;
  msdyn_uom_msdyn_agreementbookingproduct_Unit: WebExpand<UoM_Expand, msdyn_agreementbookingproduct_Select, msdyn_agreementbookingproduct_Filter, { msdyn_uom_msdyn_agreementbookingproduct_Unit: msdyn_agreementbookingproduct_Result[] }>;
  msdyn_uom_msdyn_agreementbookingservice_Unit: WebExpand<UoM_Expand, msdyn_agreementbookingservice_Select, msdyn_agreementbookingservice_Filter, { msdyn_uom_msdyn_agreementbookingservice_Unit: msdyn_agreementbookingservice_Result[] }>;
  msdyn_uom_msdyn_agreementinvoiceproduct_Unit: WebExpand<UoM_Expand, msdyn_agreementinvoiceproduct_Select, msdyn_agreementinvoiceproduct_Filter, { msdyn_uom_msdyn_agreementinvoiceproduct_Unit: msdyn_agreementinvoiceproduct_Result[] }>;
  msdyn_uom_msdyn_estimateline_Unit: WebExpand<UoM_Expand, msdyn_estimateline_Select, msdyn_estimateline_Filter, { msdyn_uom_msdyn_estimateline_Unit: msdyn_estimateline_Result[] }>;
  msdyn_uom_msdyn_expense_Unit: WebExpand<UoM_Expand, msdyn_expense_Select, msdyn_expense_Filter, { msdyn_uom_msdyn_expense_Unit: msdyn_expense_Result[] }>;
  msdyn_uom_msdyn_geofencingsettings_DistanceUnit: WebExpand<UoM_Expand, msdyn_geofencingsettings_Select, msdyn_geofencingsettings_Filter, { msdyn_uom_msdyn_geofencingsettings_DistanceUnit: msdyn_geofencingsettings_Result[] }>;
  msdyn_uom_msdyn_incidenttypeproduct_Unit: WebExpand<UoM_Expand, msdyn_incidenttypeproduct_Select, msdyn_incidenttypeproduct_Filter, { msdyn_uom_msdyn_incidenttypeproduct_Unit: msdyn_incidenttypeproduct_Result[] }>;
  msdyn_uom_msdyn_incidenttyperecommendationresult_Unit: WebExpand<UoM_Expand, msdyn_incidenttyperecommendationresult_Select, msdyn_incidenttyperecommendationresult_Filter, { msdyn_uom_msdyn_incidenttyperecommendationresult_Unit: msdyn_incidenttyperecommendationresult_Result[] }>;
  msdyn_uom_msdyn_incidenttypeservice_Unit: WebExpand<UoM_Expand, msdyn_incidenttypeservice_Select, msdyn_incidenttypeservice_Filter, { msdyn_uom_msdyn_incidenttypeservice_Unit: msdyn_incidenttypeservice_Result[] }>;
  msdyn_uom_msdyn_inventoryadjustmentproduct_Unit: WebExpand<UoM_Expand, msdyn_inventoryadjustmentproduct_Select, msdyn_inventoryadjustmentproduct_Filter, { msdyn_uom_msdyn_inventoryadjustmentproduct_Unit: msdyn_inventoryadjustmentproduct_Result[] }>;
  msdyn_uom_msdyn_inventoryjournal_Unit: WebExpand<UoM_Expand, msdyn_inventoryjournal_Select, msdyn_inventoryjournal_Filter, { msdyn_uom_msdyn_inventoryjournal_Unit: msdyn_inventoryjournal_Result[] }>;
  msdyn_uom_msdyn_invoicelinetransaction_Unit: WebExpand<UoM_Expand, msdyn_invoicelinetransaction_Select, msdyn_invoicelinetransaction_Filter, { msdyn_uom_msdyn_invoicelinetransaction_Unit: msdyn_invoicelinetransaction_Result[] }>;
  msdyn_uom_msdyn_journalline_Unit: WebExpand<UoM_Expand, msdyn_journalline_Select, msdyn_journalline_Filter, { msdyn_uom_msdyn_journalline_Unit: msdyn_journalline_Result[] }>;
  msdyn_uom_msdyn_opportunitylinetransaction_Unit: WebExpand<UoM_Expand, msdyn_opportunitylinetransaction_Select, msdyn_opportunitylinetransaction_Filter, { msdyn_uom_msdyn_opportunitylinetransaction_Unit: msdyn_opportunitylinetransaction_Result[] }>;
  msdyn_uom_msdyn_orderinvoicingproduct_Unit: WebExpand<UoM_Expand, msdyn_orderinvoicingproduct_Select, msdyn_orderinvoicingproduct_Filter, { msdyn_uom_msdyn_orderinvoicingproduct_Unit: msdyn_orderinvoicingproduct_Result[] }>;
  msdyn_uom_msdyn_orderlinetransaction_Unit: WebExpand<UoM_Expand, msdyn_orderlinetransaction_Select, msdyn_orderlinetransaction_Filter, { msdyn_uom_msdyn_orderlinetransaction_Unit: msdyn_orderlinetransaction_Result[] }>;
  msdyn_uom_msdyn_productinventory_Unit: WebExpand<UoM_Expand, msdyn_productinventory_Select, msdyn_productinventory_Filter, { msdyn_uom_msdyn_productinventory_Unit: msdyn_productinventory_Result[] }>;
  msdyn_uom_msdyn_purchaseorderproduct_Unit: WebExpand<UoM_Expand, msdyn_purchaseorderproduct_Select, msdyn_purchaseorderproduct_Filter, { msdyn_uom_msdyn_purchaseorderproduct_Unit: msdyn_purchaseorderproduct_Result[] }>;
  msdyn_uom_msdyn_quotebookingproduct_Unit: WebExpand<UoM_Expand, msdyn_quotebookingproduct_Select, msdyn_quotebookingproduct_Filter, { msdyn_uom_msdyn_quotebookingproduct_Unit: msdyn_quotebookingproduct_Result[] }>;
  msdyn_uom_msdyn_quotebookingservice_Unit: WebExpand<UoM_Expand, msdyn_quotebookingservice_Select, msdyn_quotebookingservice_Filter, { msdyn_uom_msdyn_quotebookingservice_Unit: msdyn_quotebookingservice_Result[] }>;
  msdyn_uom_msdyn_quoteinvoicingproduct_Unit: WebExpand<UoM_Expand, msdyn_quoteinvoicingproduct_Select, msdyn_quoteinvoicingproduct_Filter, { msdyn_uom_msdyn_quoteinvoicingproduct_Unit: msdyn_quoteinvoicingproduct_Result[] }>;
  msdyn_uom_msdyn_quotelinetransaction_Unit: WebExpand<UoM_Expand, msdyn_quotelinetransaction_Select, msdyn_quotelinetransaction_Filter, { msdyn_uom_msdyn_quotelinetransaction_Unit: msdyn_quotelinetransaction_Result[] }>;
  msdyn_uom_msdyn_resourcecategorypricelevel_PrimaryUnit: WebExpand<UoM_Expand, msdyn_resourcecategorypricelevel_Select, msdyn_resourcecategorypricelevel_Filter, { msdyn_uom_msdyn_resourcecategorypricelevel_PrimaryUnit: msdyn_resourcecategorypricelevel_Result[] }>;
  msdyn_uom_msdyn_resourcecategorypricelevel_Unit: WebExpand<UoM_Expand, msdyn_resourcecategorypricelevel_Select, msdyn_resourcecategorypricelevel_Filter, { msdyn_uom_msdyn_resourcecategorypricelevel_Unit: msdyn_resourcecategorypricelevel_Result[] }>;
  msdyn_uom_msdyn_rmaproduct_Unit: WebExpand<UoM_Expand, msdyn_rmaproduct_Select, msdyn_rmaproduct_Filter, { msdyn_uom_msdyn_rmaproduct_Unit: msdyn_rmaproduct_Result[] }>;
  msdyn_uom_msdyn_rtvproduct_Unit: WebExpand<UoM_Expand, msdyn_rtvproduct_Select, msdyn_rtvproduct_Filter, { msdyn_uom_msdyn_rtvproduct_Unit: msdyn_rtvproduct_Result[] }>;
  msdyn_uom_msdyn_transactioncategory_DefaultUnit: WebExpand<UoM_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_uom_msdyn_transactioncategory_DefaultUnit: msdyn_transactioncategory_Result[] }>;
  msdyn_uom_msdyn_transactioncategorypricelevel_Unit: WebExpand<UoM_Expand, msdyn_transactioncategorypricelevel_Select, msdyn_transactioncategorypricelevel_Filter, { msdyn_uom_msdyn_transactioncategorypricelevel_Unit: msdyn_transactioncategorypricelevel_Result[] }>;
  msdyn_uom_msdyn_transactiontype_DefaultUnit: WebExpand<UoM_Expand, msdyn_transactiontype_Select, msdyn_transactiontype_Filter, { msdyn_uom_msdyn_transactiontype_DefaultUnit: msdyn_transactiontype_Result[] }>;
  msdyn_uom_msdyn_workorderproduct_Unit: WebExpand<UoM_Expand, msdyn_workorderproduct_Select, msdyn_workorderproduct_Filter, { msdyn_uom_msdyn_workorderproduct_Unit: msdyn_workorderproduct_Result[] }>;
  msdyn_uom_msdyn_workorderservice_Unit: WebExpand<UoM_Expand, msdyn_workorderservice_Select, msdyn_workorderservice_Filter, { msdyn_uom_msdyn_workorderservice_Unit: msdyn_workorderservice_Result[] }>;
  msdyn_uom_pricelevel_TimeUnit: WebExpand<UoM_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_uom_pricelevel_TimeUnit: PriceLevel_Result[] }>;
  unit_of_measurement_base_unit: WebExpand<UoM_Expand, UoM_Select, UoM_Filter, { unit_of_measurement_base_unit: UoM_Result[] }>;
  unit_of_measurement_contract_line_items: WebExpand<UoM_Expand, ContractDetail_Select, ContractDetail_Filter, { unit_of_measurement_contract_line_items: ContractDetail_Result[] }>;
  unit_of_measurement_invoice_details: WebExpand<UoM_Expand, InvoiceDetail_Select, InvoiceDetail_Filter, { unit_of_measurement_invoice_details: InvoiceDetail_Result[] }>;
  unit_of_measurement_opportunity_products: WebExpand<UoM_Expand, OpportunityProduct_Select, OpportunityProduct_Filter, { unit_of_measurement_opportunity_products: OpportunityProduct_Result[] }>;
  unit_of_measurement_order_details: WebExpand<UoM_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { unit_of_measurement_order_details: SalesOrderDetail_Result[] }>;
  unit_of_measurement_product_price_levels: WebExpand<UoM_Expand, ProductPriceLevel_Select, ProductPriceLevel_Filter, { unit_of_measurement_product_price_levels: ProductPriceLevel_Result[] }>;
  unit_of_measurement_productassociation: WebExpand<UoM_Expand, ProductAssociation_Select, ProductAssociation_Filter, { unit_of_measurement_productassociation: ProductAssociation_Result[] }>;
  unit_of_measurement_products: WebExpand<UoM_Expand, Product_Select, Product_Filter, { unit_of_measurement_products: Product_Result[] }>;
  unit_of_measurement_quote_details: WebExpand<UoM_Expand, QuoteDetail_Select, QuoteDetail_Filter, { unit_of_measurement_quote_details: QuoteDetail_Result[] }>;
  uom_MailboxTrackingFolders: WebExpand<UoM_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { uom_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  uom_PrincipalObjectAttributeAccesses: WebExpand<UoM_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { uom_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  uomscheduleid: WebExpand<UoM_Expand, UoMSchedule_Select, UoMSchedule_Filter, { uomscheduleid: UoMSchedule_Result }>;
  userentityinstancedata_uom: WebExpand<UoM_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_uom: UserEntityInstanceData_Result[] }>;
}
interface UoM_FormattedResult {
  baseuom_formatted?: string;
  createdby_formatted?: string;
  createdbyexternalparty_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedbyexternalparty_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  uomscheduleid_formatted?: string;
}
interface UoM_Result extends UoM_Base, UoM_Relationships {
  "@odata.etag": string;
  baseuom_guid: string | null;
  createdby_guid: string | null;
  createdbyexternalparty_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedbyexternalparty_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  uomscheduleid_guid: string | null;
}
interface UoM_RelatedOne {
  CreatedByExternalParty: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
  ModifiedByExternalParty: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
  baseuom: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  uomscheduleid: WebMappingRetrieve<UoMSchedule_Select,UoMSchedule_Expand,UoMSchedule_Filter,UoMSchedule_Fixed,UoMSchedule_Result,UoMSchedule_FormattedResult>;
}
interface UoM_RelatedMany {
  UoM_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  UoM_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  UoM_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_uom_msdyn_actual_Unit: WebMappingRetrieve<msdyn_actual_Select,msdyn_actual_Expand,msdyn_actual_Filter,msdyn_actual_Fixed,msdyn_actual_Result,msdyn_actual_FormattedResult>;
  msdyn_uom_msdyn_agreementbookingproduct_Unit: WebMappingRetrieve<msdyn_agreementbookingproduct_Select,msdyn_agreementbookingproduct_Expand,msdyn_agreementbookingproduct_Filter,msdyn_agreementbookingproduct_Fixed,msdyn_agreementbookingproduct_Result,msdyn_agreementbookingproduct_FormattedResult>;
  msdyn_uom_msdyn_agreementbookingservice_Unit: WebMappingRetrieve<msdyn_agreementbookingservice_Select,msdyn_agreementbookingservice_Expand,msdyn_agreementbookingservice_Filter,msdyn_agreementbookingservice_Fixed,msdyn_agreementbookingservice_Result,msdyn_agreementbookingservice_FormattedResult>;
  msdyn_uom_msdyn_agreementinvoiceproduct_Unit: WebMappingRetrieve<msdyn_agreementinvoiceproduct_Select,msdyn_agreementinvoiceproduct_Expand,msdyn_agreementinvoiceproduct_Filter,msdyn_agreementinvoiceproduct_Fixed,msdyn_agreementinvoiceproduct_Result,msdyn_agreementinvoiceproduct_FormattedResult>;
  msdyn_uom_msdyn_estimateline_Unit: WebMappingRetrieve<msdyn_estimateline_Select,msdyn_estimateline_Expand,msdyn_estimateline_Filter,msdyn_estimateline_Fixed,msdyn_estimateline_Result,msdyn_estimateline_FormattedResult>;
  msdyn_uom_msdyn_expense_Unit: WebMappingRetrieve<msdyn_expense_Select,msdyn_expense_Expand,msdyn_expense_Filter,msdyn_expense_Fixed,msdyn_expense_Result,msdyn_expense_FormattedResult>;
  msdyn_uom_msdyn_geofencingsettings_DistanceUnit: WebMappingRetrieve<msdyn_geofencingsettings_Select,msdyn_geofencingsettings_Expand,msdyn_geofencingsettings_Filter,msdyn_geofencingsettings_Fixed,msdyn_geofencingsettings_Result,msdyn_geofencingsettings_FormattedResult>;
  msdyn_uom_msdyn_incidenttypeproduct_Unit: WebMappingRetrieve<msdyn_incidenttypeproduct_Select,msdyn_incidenttypeproduct_Expand,msdyn_incidenttypeproduct_Filter,msdyn_incidenttypeproduct_Fixed,msdyn_incidenttypeproduct_Result,msdyn_incidenttypeproduct_FormattedResult>;
  msdyn_uom_msdyn_incidenttyperecommendationresult_Unit: WebMappingRetrieve<msdyn_incidenttyperecommendationresult_Select,msdyn_incidenttyperecommendationresult_Expand,msdyn_incidenttyperecommendationresult_Filter,msdyn_incidenttyperecommendationresult_Fixed,msdyn_incidenttyperecommendationresult_Result,msdyn_incidenttyperecommendationresult_FormattedResult>;
  msdyn_uom_msdyn_incidenttypeservice_Unit: WebMappingRetrieve<msdyn_incidenttypeservice_Select,msdyn_incidenttypeservice_Expand,msdyn_incidenttypeservice_Filter,msdyn_incidenttypeservice_Fixed,msdyn_incidenttypeservice_Result,msdyn_incidenttypeservice_FormattedResult>;
  msdyn_uom_msdyn_inventoryadjustmentproduct_Unit: WebMappingRetrieve<msdyn_inventoryadjustmentproduct_Select,msdyn_inventoryadjustmentproduct_Expand,msdyn_inventoryadjustmentproduct_Filter,msdyn_inventoryadjustmentproduct_Fixed,msdyn_inventoryadjustmentproduct_Result,msdyn_inventoryadjustmentproduct_FormattedResult>;
  msdyn_uom_msdyn_inventoryjournal_Unit: WebMappingRetrieve<msdyn_inventoryjournal_Select,msdyn_inventoryjournal_Expand,msdyn_inventoryjournal_Filter,msdyn_inventoryjournal_Fixed,msdyn_inventoryjournal_Result,msdyn_inventoryjournal_FormattedResult>;
  msdyn_uom_msdyn_invoicelinetransaction_Unit: WebMappingRetrieve<msdyn_invoicelinetransaction_Select,msdyn_invoicelinetransaction_Expand,msdyn_invoicelinetransaction_Filter,msdyn_invoicelinetransaction_Fixed,msdyn_invoicelinetransaction_Result,msdyn_invoicelinetransaction_FormattedResult>;
  msdyn_uom_msdyn_journalline_Unit: WebMappingRetrieve<msdyn_journalline_Select,msdyn_journalline_Expand,msdyn_journalline_Filter,msdyn_journalline_Fixed,msdyn_journalline_Result,msdyn_journalline_FormattedResult>;
  msdyn_uom_msdyn_opportunitylinetransaction_Unit: WebMappingRetrieve<msdyn_opportunitylinetransaction_Select,msdyn_opportunitylinetransaction_Expand,msdyn_opportunitylinetransaction_Filter,msdyn_opportunitylinetransaction_Fixed,msdyn_opportunitylinetransaction_Result,msdyn_opportunitylinetransaction_FormattedResult>;
  msdyn_uom_msdyn_orderinvoicingproduct_Unit: WebMappingRetrieve<msdyn_orderinvoicingproduct_Select,msdyn_orderinvoicingproduct_Expand,msdyn_orderinvoicingproduct_Filter,msdyn_orderinvoicingproduct_Fixed,msdyn_orderinvoicingproduct_Result,msdyn_orderinvoicingproduct_FormattedResult>;
  msdyn_uom_msdyn_orderlinetransaction_Unit: WebMappingRetrieve<msdyn_orderlinetransaction_Select,msdyn_orderlinetransaction_Expand,msdyn_orderlinetransaction_Filter,msdyn_orderlinetransaction_Fixed,msdyn_orderlinetransaction_Result,msdyn_orderlinetransaction_FormattedResult>;
  msdyn_uom_msdyn_productinventory_Unit: WebMappingRetrieve<msdyn_productinventory_Select,msdyn_productinventory_Expand,msdyn_productinventory_Filter,msdyn_productinventory_Fixed,msdyn_productinventory_Result,msdyn_productinventory_FormattedResult>;
  msdyn_uom_msdyn_purchaseorderproduct_Unit: WebMappingRetrieve<msdyn_purchaseorderproduct_Select,msdyn_purchaseorderproduct_Expand,msdyn_purchaseorderproduct_Filter,msdyn_purchaseorderproduct_Fixed,msdyn_purchaseorderproduct_Result,msdyn_purchaseorderproduct_FormattedResult>;
  msdyn_uom_msdyn_quotebookingproduct_Unit: WebMappingRetrieve<msdyn_quotebookingproduct_Select,msdyn_quotebookingproduct_Expand,msdyn_quotebookingproduct_Filter,msdyn_quotebookingproduct_Fixed,msdyn_quotebookingproduct_Result,msdyn_quotebookingproduct_FormattedResult>;
  msdyn_uom_msdyn_quotebookingservice_Unit: WebMappingRetrieve<msdyn_quotebookingservice_Select,msdyn_quotebookingservice_Expand,msdyn_quotebookingservice_Filter,msdyn_quotebookingservice_Fixed,msdyn_quotebookingservice_Result,msdyn_quotebookingservice_FormattedResult>;
  msdyn_uom_msdyn_quoteinvoicingproduct_Unit: WebMappingRetrieve<msdyn_quoteinvoicingproduct_Select,msdyn_quoteinvoicingproduct_Expand,msdyn_quoteinvoicingproduct_Filter,msdyn_quoteinvoicingproduct_Fixed,msdyn_quoteinvoicingproduct_Result,msdyn_quoteinvoicingproduct_FormattedResult>;
  msdyn_uom_msdyn_quotelinetransaction_Unit: WebMappingRetrieve<msdyn_quotelinetransaction_Select,msdyn_quotelinetransaction_Expand,msdyn_quotelinetransaction_Filter,msdyn_quotelinetransaction_Fixed,msdyn_quotelinetransaction_Result,msdyn_quotelinetransaction_FormattedResult>;
  msdyn_uom_msdyn_resourcecategorypricelevel_PrimaryUnit: WebMappingRetrieve<msdyn_resourcecategorypricelevel_Select,msdyn_resourcecategorypricelevel_Expand,msdyn_resourcecategorypricelevel_Filter,msdyn_resourcecategorypricelevel_Fixed,msdyn_resourcecategorypricelevel_Result,msdyn_resourcecategorypricelevel_FormattedResult>;
  msdyn_uom_msdyn_resourcecategorypricelevel_Unit: WebMappingRetrieve<msdyn_resourcecategorypricelevel_Select,msdyn_resourcecategorypricelevel_Expand,msdyn_resourcecategorypricelevel_Filter,msdyn_resourcecategorypricelevel_Fixed,msdyn_resourcecategorypricelevel_Result,msdyn_resourcecategorypricelevel_FormattedResult>;
  msdyn_uom_msdyn_rmaproduct_Unit: WebMappingRetrieve<msdyn_rmaproduct_Select,msdyn_rmaproduct_Expand,msdyn_rmaproduct_Filter,msdyn_rmaproduct_Fixed,msdyn_rmaproduct_Result,msdyn_rmaproduct_FormattedResult>;
  msdyn_uom_msdyn_rtvproduct_Unit: WebMappingRetrieve<msdyn_rtvproduct_Select,msdyn_rtvproduct_Expand,msdyn_rtvproduct_Filter,msdyn_rtvproduct_Fixed,msdyn_rtvproduct_Result,msdyn_rtvproduct_FormattedResult>;
  msdyn_uom_msdyn_transactioncategory_DefaultUnit: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  msdyn_uom_msdyn_transactioncategorypricelevel_Unit: WebMappingRetrieve<msdyn_transactioncategorypricelevel_Select,msdyn_transactioncategorypricelevel_Expand,msdyn_transactioncategorypricelevel_Filter,msdyn_transactioncategorypricelevel_Fixed,msdyn_transactioncategorypricelevel_Result,msdyn_transactioncategorypricelevel_FormattedResult>;
  msdyn_uom_msdyn_transactiontype_DefaultUnit: WebMappingRetrieve<msdyn_transactiontype_Select,msdyn_transactiontype_Expand,msdyn_transactiontype_Filter,msdyn_transactiontype_Fixed,msdyn_transactiontype_Result,msdyn_transactiontype_FormattedResult>;
  msdyn_uom_msdyn_workorderproduct_Unit: WebMappingRetrieve<msdyn_workorderproduct_Select,msdyn_workorderproduct_Expand,msdyn_workorderproduct_Filter,msdyn_workorderproduct_Fixed,msdyn_workorderproduct_Result,msdyn_workorderproduct_FormattedResult>;
  msdyn_uom_msdyn_workorderservice_Unit: WebMappingRetrieve<msdyn_workorderservice_Select,msdyn_workorderservice_Expand,msdyn_workorderservice_Filter,msdyn_workorderservice_Fixed,msdyn_workorderservice_Result,msdyn_workorderservice_FormattedResult>;
  msdyn_uom_pricelevel_TimeUnit: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  unit_of_measurement_base_unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  unit_of_measurement_contract_line_items: WebMappingRetrieve<ContractDetail_Select,ContractDetail_Expand,ContractDetail_Filter,ContractDetail_Fixed,ContractDetail_Result,ContractDetail_FormattedResult>;
  unit_of_measurement_invoice_details: WebMappingRetrieve<InvoiceDetail_Select,InvoiceDetail_Expand,InvoiceDetail_Filter,InvoiceDetail_Fixed,InvoiceDetail_Result,InvoiceDetail_FormattedResult>;
  unit_of_measurement_opportunity_products: WebMappingRetrieve<OpportunityProduct_Select,OpportunityProduct_Expand,OpportunityProduct_Filter,OpportunityProduct_Fixed,OpportunityProduct_Result,OpportunityProduct_FormattedResult>;
  unit_of_measurement_order_details: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
  unit_of_measurement_product_price_levels: WebMappingRetrieve<ProductPriceLevel_Select,ProductPriceLevel_Expand,ProductPriceLevel_Filter,ProductPriceLevel_Fixed,ProductPriceLevel_Result,ProductPriceLevel_FormattedResult>;
  unit_of_measurement_productassociation: WebMappingRetrieve<ProductAssociation_Select,ProductAssociation_Expand,ProductAssociation_Filter,ProductAssociation_Fixed,ProductAssociation_Result,ProductAssociation_FormattedResult>;
  unit_of_measurement_products: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  unit_of_measurement_quote_details: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  uom_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  uom_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_uom: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  uoms: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
}
interface WebEntitiesRelated {
  uoms: WebMappingRelated<UoM_RelatedOne,UoM_RelatedMany>;
}
interface WebEntitiesCUDA {
  uoms: WebMappingCUDA<UoM_Create,UoM_Update,UoM_Select>;
}
