interface msdyn_contractlineinvoiceschedule_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_contractline?: string | null;
  msdyn_contractlineinvoicescheduleid?: string | null;
  msdyn_invoicerundate?: Date | null;
  msdyn_invoicerunstatus?: msdyn_invoicerunstatus | null;
  msdyn_name?: string | null;
  msdyn_transactioncutoffdate?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_contractlineinvoiceschedule_statecode | null;
  statuscode?: msdyn_contractlineinvoiceschedule_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_contractlineinvoiceschedule_Relationships {
  msdyn_ContractLineId?: SalesOrderDetail_Result | null;
  msdyn_ContractLineScheduleOfValue?: msdyn_contractlinescheduleofvalue_Result | null;
  msdyn_Invoice?: Invoice_Result | null;
  msdyn_contractlineinvoiceschedule_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_contractlineinvoiceschedule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_contractlineinvoiceschedule_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_contractlineinvoiceschedule_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_contractlineinvoiceschedule_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_contractlineinvoiceschedule_SyncErrors?: SyncError_Result[] | null;
  msdyn_contractlineinvoiceschedule_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_contractlineinvoiceschedule extends msdyn_contractlineinvoiceschedule_Base, msdyn_contractlineinvoiceschedule_Relationships {
  msdyn_ContractLineId_bind$salesorderdetails?: string | null;
  msdyn_ContractLineScheduleOfValue_bind$msdyn_contractlinescheduleofvalues?: string | null;
  msdyn_Invoice_bind$invoices?: string | null;
}
interface msdyn_contractlineinvoiceschedule_Create extends msdyn_contractlineinvoiceschedule {
}
interface msdyn_contractlineinvoiceschedule_Update extends msdyn_contractlineinvoiceschedule {
}
interface msdyn_contractlineinvoiceschedule_Select {
  createdby_guid: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_contractline: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { msdyn_contractline: string | null }, {  }>;
  msdyn_contractlineid_guid: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { msdyn_contractlineid_guid: string | null }, { msdyn_contractlineid_formatted?: string }>;
  msdyn_contractlineinvoicescheduleid: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { msdyn_contractlineinvoicescheduleid: string | null }, {  }>;
  msdyn_contractlinescheduleofvalue_guid: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { msdyn_contractlinescheduleofvalue_guid: string | null }, { msdyn_contractlinescheduleofvalue_formatted?: string }>;
  msdyn_invoice_guid: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { msdyn_invoice_guid: string | null }, { msdyn_invoice_formatted?: string }>;
  msdyn_invoicerundate: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { msdyn_invoicerundate: Date | null }, { msdyn_invoicerundate_formatted?: string }>;
  msdyn_invoicerunstatus: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { msdyn_invoicerunstatus: msdyn_invoicerunstatus | null }, { msdyn_invoicerunstatus_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { msdyn_name: string | null }, {  }>;
  msdyn_transactioncutoffdate: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { msdyn_transactioncutoffdate: Date | null }, { msdyn_transactioncutoffdate_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { statecode: msdyn_contractlineinvoiceschedule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { statuscode: msdyn_contractlineinvoiceschedule_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_contractlineinvoiceschedule_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_contractlineinvoiceschedule_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_contractline: string;
  msdyn_contractlineid_guid: XQW.Guid;
  msdyn_contractlineinvoicescheduleid: XQW.Guid;
  msdyn_contractlinescheduleofvalue_guid: XQW.Guid;
  msdyn_invoice_guid: XQW.Guid;
  msdyn_invoicerundate: Date;
  msdyn_invoicerunstatus: msdyn_invoicerunstatus;
  msdyn_name: string;
  msdyn_transactioncutoffdate: Date;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_contractlineinvoiceschedule_statecode;
  statuscode: msdyn_contractlineinvoiceschedule_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_contractlineinvoiceschedule_Expand {
  createdby: WebExpand<msdyn_contractlineinvoiceschedule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_contractlineinvoiceschedule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_contractlineinvoiceschedule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_contractlineinvoiceschedule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ContractLineId: WebExpand<msdyn_contractlineinvoiceschedule_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { msdyn_ContractLineId: SalesOrderDetail_Result }>;
  msdyn_ContractLineScheduleOfValue: WebExpand<msdyn_contractlineinvoiceschedule_Expand, msdyn_contractlinescheduleofvalue_Select, msdyn_contractlinescheduleofvalue_Filter, { msdyn_ContractLineScheduleOfValue: msdyn_contractlinescheduleofvalue_Result }>;
  msdyn_Invoice: WebExpand<msdyn_contractlineinvoiceschedule_Expand, Invoice_Select, Invoice_Filter, { msdyn_Invoice: Invoice_Result }>;
  msdyn_contractlineinvoiceschedule_AsyncOperations: WebExpand<msdyn_contractlineinvoiceschedule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_contractlineinvoiceschedule_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_contractlineinvoiceschedule_BulkDeleteFailures: WebExpand<msdyn_contractlineinvoiceschedule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_contractlineinvoiceschedule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_contractlineinvoiceschedule_DuplicateBaseRecord: WebExpand<msdyn_contractlineinvoiceschedule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_contractlineinvoiceschedule_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord: WebExpand<msdyn_contractlineinvoiceschedule_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_contractlineinvoiceschedule_MailboxTrackingFolders: WebExpand<msdyn_contractlineinvoiceschedule_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_contractlineinvoiceschedule_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses: WebExpand<msdyn_contractlineinvoiceschedule_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_contractlineinvoiceschedule_ProcessSession: WebExpand<msdyn_contractlineinvoiceschedule_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_contractlineinvoiceschedule_ProcessSession: ProcessSession_Result[] }>;
  msdyn_contractlineinvoiceschedule_SyncErrors: WebExpand<msdyn_contractlineinvoiceschedule_Expand, SyncError_Select, SyncError_Filter, { msdyn_contractlineinvoiceschedule_SyncErrors: SyncError_Result[] }>;
  msdyn_contractlineinvoiceschedule_UserEntityInstanceDatas: WebExpand<msdyn_contractlineinvoiceschedule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_contractlineinvoiceschedule_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_contractlineinvoiceschedule_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_contractlineinvoiceschedule_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_contractlineid_formatted?: string;
  msdyn_contractlinescheduleofvalue_formatted?: string;
  msdyn_invoice_formatted?: string;
  msdyn_invoicerundate_formatted?: string;
  msdyn_invoicerunstatus_formatted?: string;
  msdyn_transactioncutoffdate_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_contractlineinvoiceschedule_Result extends msdyn_contractlineinvoiceschedule_Base, msdyn_contractlineinvoiceschedule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_contractlineid_guid: string | null;
  msdyn_contractlinescheduleofvalue_guid: string | null;
  msdyn_invoice_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_contractlineinvoiceschedule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ContractLineId: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
  msdyn_ContractLineScheduleOfValue: WebMappingRetrieve<msdyn_contractlinescheduleofvalue_Select,msdyn_contractlinescheduleofvalue_Expand,msdyn_contractlinescheduleofvalue_Filter,msdyn_contractlinescheduleofvalue_Fixed,msdyn_contractlinescheduleofvalue_Result,msdyn_contractlinescheduleofvalue_FormattedResult>;
  msdyn_Invoice: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_contractlineinvoiceschedule_RelatedMany {
  msdyn_contractlineinvoiceschedule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_contractlineinvoiceschedule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_contractlineinvoiceschedule_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_contractlineinvoiceschedule_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_contractlineinvoiceschedule_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_contractlineinvoiceschedule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_contractlineinvoiceschedule_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_contractlineinvoiceschedules: WebMappingRetrieve<msdyn_contractlineinvoiceschedule_Select,msdyn_contractlineinvoiceschedule_Expand,msdyn_contractlineinvoiceschedule_Filter,msdyn_contractlineinvoiceschedule_Fixed,msdyn_contractlineinvoiceschedule_Result,msdyn_contractlineinvoiceschedule_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_contractlineinvoiceschedules: WebMappingRelated<msdyn_contractlineinvoiceschedule_RelatedOne,msdyn_contractlineinvoiceschedule_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_contractlineinvoiceschedules: WebMappingCUDA<msdyn_contractlineinvoiceschedule_Create,msdyn_contractlineinvoiceschedule_Update,msdyn_contractlineinvoiceschedule_Select>;
}
