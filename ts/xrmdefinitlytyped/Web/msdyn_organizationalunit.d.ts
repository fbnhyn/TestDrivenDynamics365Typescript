interface msdyn_organizationalunit_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_latitude?: number | null;
  msdyn_longitude?: number | null;
  msdyn_name?: string | null;
  msdyn_organizationalunitid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_organizationalunit_statecode | null;
  statuscode?: msdyn_organizationalunit_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_organizationalunit_Relationships {
  msdyn_msdyn_organizationalunit_bookableresource_organizationalunit?: BookableResource_Result[] | null;
  msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId?: msdyn_actual_Result[] | null;
  msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId?: msdyn_invoicelinetransaction_Result[] | null;
  msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId?: msdyn_journalline_Result[] | null;
  msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit?: msdyn_projectteam_Result[] | null;
  msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit?: msdyn_resourcecategorymarkuppricelevel_Result[] | null;
  msdyn_organizationalunit_Annotations?: Annotation_Result[] | null;
  msdyn_organizationalunit_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_organizationalunit_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_organizationalunit_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_organizationalunit_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_organizationalunit_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_organizationalunit_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_organizationalunit_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_organizationalunit_SyncErrors?: SyncError_Result[] | null;
  msdyn_organizationalunit_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_organizationalunit_actual?: msdyn_actual_Result[] | null;
  msdyn_organizationalunit_equipment?: Equipment_Result[] | null;
  msdyn_organizationalunit_estimateline?: msdyn_estimateline_Result[] | null;
  msdyn_organizationalunit_expense?: msdyn_expense_Result[] | null;
  msdyn_organizationalunit_invoicelinetransaction?: msdyn_invoicelinetransaction_Result[] | null;
  msdyn_organizationalunit_journalline?: msdyn_journalline_Result[] | null;
  msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension?: msdyn_projecttask_Result[] | null;
  msdyn_organizationalunit_opportunity?: Opportunity_Result[] | null;
  msdyn_organizationalunit_opportunitylinedetail?: msdyn_opportunitylinetransaction_Result[] | null;
  msdyn_organizationalunit_orderlinetransaction?: msdyn_orderlinetransaction_Result[] | null;
  msdyn_organizationalunit_pricelevel?: PriceLevel_Result[] | null;
  msdyn_organizationalunit_project?: msdyn_project_Result[] | null;
  msdyn_organizationalunit_projecttask?: msdyn_projecttask_Result[] | null;
  msdyn_organizationalunit_quote?: Quote_Result[] | null;
  msdyn_organizationalunit_quotelinetransaction?: msdyn_quotelinetransaction_Result[] | null;
  msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit?: msdyn_requirementorganizationunit_Result[] | null;
  msdyn_organizationalunit_salesorder?: SalesOrder_Result[] | null;
  msdyn_organizationalunit_serviceappointment?: ServiceAppointment_Result[] | null;
  msdyn_organizationalunit_timeentry?: msdyn_timeentry_Result[] | null;
  msdyn_projectparameter_defaultorganizationalunit?: msdyn_projectparameter_Result[] | null;
  msdyn_resourcecategorypricelevel_organizationalunit?: msdyn_resourcecategorypricelevel_Result[] | null;
}
interface msdyn_organizationalunit extends msdyn_organizationalunit_Base, msdyn_organizationalunit_Relationships {
}
interface msdyn_organizationalunit_Create extends msdyn_organizationalunit {
  msdyn_currency_bind$transactioncurrencies?: string | null;
}
interface msdyn_organizationalunit_Update extends msdyn_organizationalunit {
}
interface msdyn_organizationalunit_Select {
  createdby_guid: WebAttribute<msdyn_organizationalunit_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_organizationalunit_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_organizationalunit_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_organizationalunit_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_organizationalunit_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_organizationalunit_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_organizationalunit_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_currency_guid: WebAttribute<msdyn_organizationalunit_Select, { msdyn_currency_guid: string | null }, { msdyn_currency_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_organizationalunit_Select, { msdyn_description: string | null }, {  }>;
  msdyn_latitude: WebAttribute<msdyn_organizationalunit_Select, { msdyn_latitude: number | null }, {  }>;
  msdyn_longitude: WebAttribute<msdyn_organizationalunit_Select, { msdyn_longitude: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_organizationalunit_Select, { msdyn_name: string | null }, {  }>;
  msdyn_organizationalunitid: WebAttribute<msdyn_organizationalunit_Select, { msdyn_organizationalunitid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_organizationalunit_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_organizationalunit_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_organizationalunit_Select, { statecode: msdyn_organizationalunit_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_organizationalunit_Select, { statuscode: msdyn_organizationalunit_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_organizationalunit_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_organizationalunit_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_organizationalunit_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_organizationalunit_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_currency_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_latitude: number;
  msdyn_longitude: number;
  msdyn_name: string;
  msdyn_organizationalunitid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_organizationalunit_statecode;
  statuscode: msdyn_organizationalunit_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_organizationalunit_Expand {
  createdby: WebExpand<msdyn_organizationalunit_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_organizationalunit_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_organizationalunit_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_organizationalunit_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_currency: WebExpand<msdyn_organizationalunit_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { msdyn_currency: TransactionCurrency_Result }>;
  msdyn_msdyn_organizationalunit_bookableresource_organizationalunit: WebExpand<msdyn_organizationalunit_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_msdyn_organizationalunit_bookableresource_organizationalunit: BookableResource_Result[] }>;
  msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId: WebExpand<msdyn_organizationalunit_Expand, msdyn_actual_Select, msdyn_actual_Filter, { msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId: msdyn_actual_Result[] }>;
  msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId: WebExpand<msdyn_organizationalunit_Expand, msdyn_invoicelinetransaction_Select, msdyn_invoicelinetransaction_Filter, { msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId: msdyn_invoicelinetransaction_Result[] }>;
  msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId: WebExpand<msdyn_organizationalunit_Expand, msdyn_journalline_Select, msdyn_journalline_Filter, { msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId: msdyn_journalline_Result[] }>;
  msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit: WebExpand<msdyn_organizationalunit_Expand, msdyn_projectteam_Select, msdyn_projectteam_Filter, { msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit: msdyn_projectteam_Result[] }>;
  msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit: WebExpand<msdyn_organizationalunit_Expand, msdyn_resourcecategorymarkuppricelevel_Select, msdyn_resourcecategorymarkuppricelevel_Filter, { msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit: msdyn_resourcecategorymarkuppricelevel_Result[] }>;
  msdyn_organizationalunit_Annotations: WebExpand<msdyn_organizationalunit_Expand, Annotation_Select, Annotation_Filter, { msdyn_organizationalunit_Annotations: Annotation_Result[] }>;
  msdyn_organizationalunit_AsyncOperations: WebExpand<msdyn_organizationalunit_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_organizationalunit_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_organizationalunit_BulkDeleteFailures: WebExpand<msdyn_organizationalunit_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_organizationalunit_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_organizationalunit_DuplicateBaseRecord: WebExpand<msdyn_organizationalunit_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_organizationalunit_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_organizationalunit_DuplicateMatchingRecord: WebExpand<msdyn_organizationalunit_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_organizationalunit_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_organizationalunit_MailboxTrackingFolders: WebExpand<msdyn_organizationalunit_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_organizationalunit_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_organizationalunit_PrincipalObjectAttributeAccesses: WebExpand<msdyn_organizationalunit_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_organizationalunit_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_organizationalunit_ProcessSession: WebExpand<msdyn_organizationalunit_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_organizationalunit_ProcessSession: ProcessSession_Result[] }>;
  msdyn_organizationalunit_SyncErrors: WebExpand<msdyn_organizationalunit_Expand, SyncError_Select, SyncError_Filter, { msdyn_organizationalunit_SyncErrors: SyncError_Result[] }>;
  msdyn_organizationalunit_UserEntityInstanceDatas: WebExpand<msdyn_organizationalunit_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_organizationalunit_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_organizationalunit_actual: WebExpand<msdyn_organizationalunit_Expand, msdyn_actual_Select, msdyn_actual_Filter, { msdyn_organizationalunit_actual: msdyn_actual_Result[] }>;
  msdyn_organizationalunit_equipment: WebExpand<msdyn_organizationalunit_Expand, Equipment_Select, Equipment_Filter, { msdyn_organizationalunit_equipment: Equipment_Result[] }>;
  msdyn_organizationalunit_estimateline: WebExpand<msdyn_organizationalunit_Expand, msdyn_estimateline_Select, msdyn_estimateline_Filter, { msdyn_organizationalunit_estimateline: msdyn_estimateline_Result[] }>;
  msdyn_organizationalunit_expense: WebExpand<msdyn_organizationalunit_Expand, msdyn_expense_Select, msdyn_expense_Filter, { msdyn_organizationalunit_expense: msdyn_expense_Result[] }>;
  msdyn_organizationalunit_invoicelinetransaction: WebExpand<msdyn_organizationalunit_Expand, msdyn_invoicelinetransaction_Select, msdyn_invoicelinetransaction_Filter, { msdyn_organizationalunit_invoicelinetransaction: msdyn_invoicelinetransaction_Result[] }>;
  msdyn_organizationalunit_journalline: WebExpand<msdyn_organizationalunit_Expand, msdyn_journalline_Select, msdyn_journalline_Filter, { msdyn_organizationalunit_journalline: msdyn_journalline_Result[] }>;
  msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension: WebExpand<msdyn_organizationalunit_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension: msdyn_projecttask_Result[] }>;
  msdyn_organizationalunit_opportunity: WebExpand<msdyn_organizationalunit_Expand, Opportunity_Select, Opportunity_Filter, { msdyn_organizationalunit_opportunity: Opportunity_Result[] }>;
  msdyn_organizationalunit_opportunitylinedetail: WebExpand<msdyn_organizationalunit_Expand, msdyn_opportunitylinetransaction_Select, msdyn_opportunitylinetransaction_Filter, { msdyn_organizationalunit_opportunitylinedetail: msdyn_opportunitylinetransaction_Result[] }>;
  msdyn_organizationalunit_orderlinetransaction: WebExpand<msdyn_organizationalunit_Expand, msdyn_orderlinetransaction_Select, msdyn_orderlinetransaction_Filter, { msdyn_organizationalunit_orderlinetransaction: msdyn_orderlinetransaction_Result[] }>;
  msdyn_organizationalunit_pricelevel: WebExpand<msdyn_organizationalunit_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_organizationalunit_pricelevel: PriceLevel_Result[] }>;
  msdyn_organizationalunit_project: WebExpand<msdyn_organizationalunit_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_organizationalunit_project: msdyn_project_Result[] }>;
  msdyn_organizationalunit_projecttask: WebExpand<msdyn_organizationalunit_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_organizationalunit_projecttask: msdyn_projecttask_Result[] }>;
  msdyn_organizationalunit_quote: WebExpand<msdyn_organizationalunit_Expand, Quote_Select, Quote_Filter, { msdyn_organizationalunit_quote: Quote_Result[] }>;
  msdyn_organizationalunit_quotelinetransaction: WebExpand<msdyn_organizationalunit_Expand, msdyn_quotelinetransaction_Select, msdyn_quotelinetransaction_Filter, { msdyn_organizationalunit_quotelinetransaction: msdyn_quotelinetransaction_Result[] }>;
  msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit: WebExpand<msdyn_organizationalunit_Expand, msdyn_requirementorganizationunit_Select, msdyn_requirementorganizationunit_Filter, { msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit: msdyn_requirementorganizationunit_Result[] }>;
  msdyn_organizationalunit_salesorder: WebExpand<msdyn_organizationalunit_Expand, SalesOrder_Select, SalesOrder_Filter, { msdyn_organizationalunit_salesorder: SalesOrder_Result[] }>;
  msdyn_organizationalunit_serviceappointment: WebExpand<msdyn_organizationalunit_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_organizationalunit_serviceappointment: ServiceAppointment_Result[] }>;
  msdyn_organizationalunit_timeentry: WebExpand<msdyn_organizationalunit_Expand, msdyn_timeentry_Select, msdyn_timeentry_Filter, { msdyn_organizationalunit_timeentry: msdyn_timeentry_Result[] }>;
  msdyn_projectparameter_defaultorganizationalunit: WebExpand<msdyn_organizationalunit_Expand, msdyn_projectparameter_Select, msdyn_projectparameter_Filter, { msdyn_projectparameter_defaultorganizationalunit: msdyn_projectparameter_Result[] }>;
  msdyn_resourcecategorypricelevel_organizationalunit: WebExpand<msdyn_organizationalunit_Expand, msdyn_resourcecategorypricelevel_Select, msdyn_resourcecategorypricelevel_Filter, { msdyn_resourcecategorypricelevel_organizationalunit: msdyn_resourcecategorypricelevel_Result[] }>;
  organizationid: WebExpand<msdyn_organizationalunit_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_organizationalunit_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_currency_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_organizationalunit_Result extends msdyn_organizationalunit_Base, msdyn_organizationalunit_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_currency_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_organizationalunit_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_currency: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_organizationalunit_RelatedMany {
  msdyn_msdyn_organizationalunit_bookableresource_organizationalunit: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_msdyn_organizationalunit_msdyn_actual_ContractOrganizationalUnitId: WebMappingRetrieve<msdyn_actual_Select,msdyn_actual_Expand,msdyn_actual_Filter,msdyn_actual_Fixed,msdyn_actual_Result,msdyn_actual_FormattedResult>;
  msdyn_msdyn_organizationalunit_msdyn_invoicelinetransaction_ContractOrganizationalUnitId: WebMappingRetrieve<msdyn_invoicelinetransaction_Select,msdyn_invoicelinetransaction_Expand,msdyn_invoicelinetransaction_Filter,msdyn_invoicelinetransaction_Fixed,msdyn_invoicelinetransaction_Result,msdyn_invoicelinetransaction_FormattedResult>;
  msdyn_msdyn_organizationalunit_msdyn_journalline_ContractOrganizationalUnitId: WebMappingRetrieve<msdyn_journalline_Select,msdyn_journalline_Expand,msdyn_journalline_Filter,msdyn_journalline_Fixed,msdyn_journalline_Result,msdyn_journalline_FormattedResult>;
  msdyn_msdyn_organizationalunit_msdyn_projectteam_organizationalunit: WebMappingRetrieve<msdyn_projectteam_Select,msdyn_projectteam_Expand,msdyn_projectteam_Filter,msdyn_projectteam_Fixed,msdyn_projectteam_Result,msdyn_projectteam_FormattedResult>;
  msdyn_msdyn_organizationalunit_msdyn_resourcecategorymarkuppricelevel_organizationalunit: WebMappingRetrieve<msdyn_resourcecategorymarkuppricelevel_Select,msdyn_resourcecategorymarkuppricelevel_Expand,msdyn_resourcecategorymarkuppricelevel_Filter,msdyn_resourcecategorymarkuppricelevel_Fixed,msdyn_resourcecategorymarkuppricelevel_Result,msdyn_resourcecategorymarkuppricelevel_FormattedResult>;
  msdyn_organizationalunit_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_organizationalunit_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_organizationalunit_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_organizationalunit_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_organizationalunit_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_organizationalunit_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_organizationalunit_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_organizationalunit_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_organizationalunit_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_organizationalunit_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_organizationalunit_actual: WebMappingRetrieve<msdyn_actual_Select,msdyn_actual_Expand,msdyn_actual_Filter,msdyn_actual_Fixed,msdyn_actual_Result,msdyn_actual_FormattedResult>;
  msdyn_organizationalunit_equipment: WebMappingRetrieve<Equipment_Select,Equipment_Expand,Equipment_Filter,Equipment_Fixed,Equipment_Result,Equipment_FormattedResult>;
  msdyn_organizationalunit_estimateline: WebMappingRetrieve<msdyn_estimateline_Select,msdyn_estimateline_Expand,msdyn_estimateline_Filter,msdyn_estimateline_Fixed,msdyn_estimateline_Result,msdyn_estimateline_FormattedResult>;
  msdyn_organizationalunit_expense: WebMappingRetrieve<msdyn_expense_Select,msdyn_expense_Expand,msdyn_expense_Filter,msdyn_expense_Fixed,msdyn_expense_Result,msdyn_expense_FormattedResult>;
  msdyn_organizationalunit_invoicelinetransaction: WebMappingRetrieve<msdyn_invoicelinetransaction_Select,msdyn_invoicelinetransaction_Expand,msdyn_invoicelinetransaction_Filter,msdyn_invoicelinetransaction_Fixed,msdyn_invoicelinetransaction_Result,msdyn_invoicelinetransaction_FormattedResult>;
  msdyn_organizationalunit_journalline: WebMappingRetrieve<msdyn_journalline_Select,msdyn_journalline_Expand,msdyn_journalline_Filter,msdyn_journalline_Fixed,msdyn_journalline_Result,msdyn_journalline_FormattedResult>;
  msdyn_organizationalunit_msdyn_projecttask_OrganizationalUnitPricingDimension: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  msdyn_organizationalunit_opportunity: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  msdyn_organizationalunit_opportunitylinedetail: WebMappingRetrieve<msdyn_opportunitylinetransaction_Select,msdyn_opportunitylinetransaction_Expand,msdyn_opportunitylinetransaction_Filter,msdyn_opportunitylinetransaction_Fixed,msdyn_opportunitylinetransaction_Result,msdyn_opportunitylinetransaction_FormattedResult>;
  msdyn_organizationalunit_orderlinetransaction: WebMappingRetrieve<msdyn_orderlinetransaction_Select,msdyn_orderlinetransaction_Expand,msdyn_orderlinetransaction_Filter,msdyn_orderlinetransaction_Fixed,msdyn_orderlinetransaction_Result,msdyn_orderlinetransaction_FormattedResult>;
  msdyn_organizationalunit_pricelevel: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  msdyn_organizationalunit_project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_organizationalunit_projecttask: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  msdyn_organizationalunit_quote: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  msdyn_organizationalunit_quotelinetransaction: WebMappingRetrieve<msdyn_quotelinetransaction_Select,msdyn_quotelinetransaction_Expand,msdyn_quotelinetransaction_Filter,msdyn_quotelinetransaction_Fixed,msdyn_quotelinetransaction_Result,msdyn_quotelinetransaction_FormattedResult>;
  msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit: WebMappingRetrieve<msdyn_requirementorganizationunit_Select,msdyn_requirementorganizationunit_Expand,msdyn_requirementorganizationunit_Filter,msdyn_requirementorganizationunit_Fixed,msdyn_requirementorganizationunit_Result,msdyn_requirementorganizationunit_FormattedResult>;
  msdyn_organizationalunit_salesorder: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  msdyn_organizationalunit_serviceappointment: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_organizationalunit_timeentry: WebMappingRetrieve<msdyn_timeentry_Select,msdyn_timeentry_Expand,msdyn_timeentry_Filter,msdyn_timeentry_Fixed,msdyn_timeentry_Result,msdyn_timeentry_FormattedResult>;
  msdyn_projectparameter_defaultorganizationalunit: WebMappingRetrieve<msdyn_projectparameter_Select,msdyn_projectparameter_Expand,msdyn_projectparameter_Filter,msdyn_projectparameter_Fixed,msdyn_projectparameter_Result,msdyn_projectparameter_FormattedResult>;
  msdyn_resourcecategorypricelevel_organizationalunit: WebMappingRetrieve<msdyn_resourcecategorypricelevel_Select,msdyn_resourcecategorypricelevel_Expand,msdyn_resourcecategorypricelevel_Filter,msdyn_resourcecategorypricelevel_Fixed,msdyn_resourcecategorypricelevel_Result,msdyn_resourcecategorypricelevel_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_organizationalunits: WebMappingRetrieve<msdyn_organizationalunit_Select,msdyn_organizationalunit_Expand,msdyn_organizationalunit_Filter,msdyn_organizationalunit_Fixed,msdyn_organizationalunit_Result,msdyn_organizationalunit_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_organizationalunits: WebMappingRelated<msdyn_organizationalunit_RelatedOne,msdyn_organizationalunit_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_organizationalunits: WebMappingCUDA<msdyn_organizationalunit_Create,msdyn_organizationalunit_Update,msdyn_organizationalunit_Select>;
}
