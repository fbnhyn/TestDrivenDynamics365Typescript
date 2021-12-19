interface msdyn_orderinvoicingsetupdate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_invoicedate?: Date | null;
  msdyn_invoicestatus?: msdyn_agreementinvoicestatus | null;
  msdyn_name?: string | null;
  msdyn_orderinvoicingsetupdateid?: string | null;
  msdyn_postponegenerationuntil?: Date | null;
  msdyn_previousinvoicedate?: Date | null;
  msdyn_revision?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_orderinvoicingsetupdate_statecode | null;
  statuscode?: msdyn_orderinvoicingsetupdate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_orderinvoicingsetupdate_Relationships {
  msdyn_Invoice?: Invoice_Result | null;
  msdyn_InvoiceSetup?: msdyn_orderinvoicingsetup_Result | null;
  msdyn_Order?: SalesOrder_Result | null;
  msdyn_OrderInvoicingDate?: msdyn_orderinvoicingdate_Result | null;
  msdyn_orderinvoicingsetupdate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_orderinvoicingsetupdate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_orderinvoicingsetupdate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderinvoicingsetupdate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_orderinvoicingsetupdate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_orderinvoicingsetupdate_SyncErrors?: SyncError_Result[] | null;
  msdyn_orderinvoicingsetupdate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_orderinvoicingsetupdate extends msdyn_orderinvoicingsetupdate_Base, msdyn_orderinvoicingsetupdate_Relationships {
  msdyn_InvoiceSetup_bind$msdyn_orderinvoicingsetups?: string | null;
  msdyn_Invoice_bind$invoices?: string | null;
  msdyn_OrderInvoicingDate_bind$msdyn_orderinvoicingdates?: string | null;
  msdyn_Order_bind$salesorders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_orderinvoicingsetupdate_Create extends msdyn_orderinvoicingsetupdate {
}
interface msdyn_orderinvoicingsetupdate_Update extends msdyn_orderinvoicingsetupdate {
}
interface msdyn_orderinvoicingsetupdate_Select {
  createdby_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_invoice_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { msdyn_invoice_guid: string | null }, { msdyn_invoice_formatted?: string }>;
  msdyn_invoicedate: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { msdyn_invoicedate: Date | null }, { msdyn_invoicedate_formatted?: string }>;
  msdyn_invoicesetup_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { msdyn_invoicesetup_guid: string | null }, { msdyn_invoicesetup_formatted?: string }>;
  msdyn_invoicestatus: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { msdyn_invoicestatus: msdyn_agreementinvoicestatus | null }, { msdyn_invoicestatus_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_order_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { msdyn_order_guid: string | null }, { msdyn_order_formatted?: string }>;
  msdyn_orderinvoicingdate_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { msdyn_orderinvoicingdate_guid: string | null }, { msdyn_orderinvoicingdate_formatted?: string }>;
  msdyn_orderinvoicingsetupdateid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { msdyn_orderinvoicingsetupdateid: string | null }, {  }>;
  msdyn_postponegenerationuntil: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { msdyn_postponegenerationuntil: Date | null }, { msdyn_postponegenerationuntil_formatted?: string }>;
  msdyn_previousinvoicedate: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { msdyn_previousinvoicedate: Date | null }, { msdyn_previousinvoicedate_formatted?: string }>;
  msdyn_revision: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { msdyn_revision: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { statecode: msdyn_orderinvoicingsetupdate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { statuscode: msdyn_orderinvoicingsetupdate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_orderinvoicingsetupdate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_orderinvoicingsetupdate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_invoice_guid: XQW.Guid;
  msdyn_invoicedate: Date;
  msdyn_invoicesetup_guid: XQW.Guid;
  msdyn_invoicestatus: msdyn_agreementinvoicestatus;
  msdyn_name: string;
  msdyn_order_guid: XQW.Guid;
  msdyn_orderinvoicingdate_guid: XQW.Guid;
  msdyn_orderinvoicingsetupdateid: XQW.Guid;
  msdyn_postponegenerationuntil: Date;
  msdyn_previousinvoicedate: Date;
  msdyn_revision: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_orderinvoicingsetupdate_statecode;
  statuscode: msdyn_orderinvoicingsetupdate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_orderinvoicingsetupdate_Expand {
  createdby: WebExpand<msdyn_orderinvoicingsetupdate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_orderinvoicingsetupdate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_orderinvoicingsetupdate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_orderinvoicingsetupdate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Invoice: WebExpand<msdyn_orderinvoicingsetupdate_Expand, Invoice_Select, Invoice_Filter, { msdyn_Invoice: Invoice_Result }>;
  msdyn_InvoiceSetup: WebExpand<msdyn_orderinvoicingsetupdate_Expand, msdyn_orderinvoicingsetup_Select, msdyn_orderinvoicingsetup_Filter, { msdyn_InvoiceSetup: msdyn_orderinvoicingsetup_Result }>;
  msdyn_Order: WebExpand<msdyn_orderinvoicingsetupdate_Expand, SalesOrder_Select, SalesOrder_Filter, { msdyn_Order: SalesOrder_Result }>;
  msdyn_OrderInvoicingDate: WebExpand<msdyn_orderinvoicingsetupdate_Expand, msdyn_orderinvoicingdate_Select, msdyn_orderinvoicingdate_Filter, { msdyn_OrderInvoicingDate: msdyn_orderinvoicingdate_Result }>;
  msdyn_orderinvoicingsetupdate_AsyncOperations: WebExpand<msdyn_orderinvoicingsetupdate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_orderinvoicingsetupdate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_orderinvoicingsetupdate_BulkDeleteFailures: WebExpand<msdyn_orderinvoicingsetupdate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_orderinvoicingsetupdate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_orderinvoicingsetupdate_DuplicateBaseRecord: WebExpand<msdyn_orderinvoicingsetupdate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderinvoicingsetupdate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord: WebExpand<msdyn_orderinvoicingsetupdate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_orderinvoicingsetupdate_MailboxTrackingFolders: WebExpand<msdyn_orderinvoicingsetupdate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_orderinvoicingsetupdate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_orderinvoicingsetupdate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_orderinvoicingsetupdate_ProcessSession: WebExpand<msdyn_orderinvoicingsetupdate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_orderinvoicingsetupdate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_orderinvoicingsetupdate_SyncErrors: WebExpand<msdyn_orderinvoicingsetupdate_Expand, SyncError_Select, SyncError_Filter, { msdyn_orderinvoicingsetupdate_SyncErrors: SyncError_Result[] }>;
  msdyn_orderinvoicingsetupdate_UserEntityInstanceDatas: WebExpand<msdyn_orderinvoicingsetupdate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_orderinvoicingsetupdate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_orderinvoicingsetupdate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_orderinvoicingsetupdate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_orderinvoicingsetupdate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_orderinvoicingsetupdate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_orderinvoicingsetupdate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_invoice_formatted?: string;
  msdyn_invoicedate_formatted?: string;
  msdyn_invoicesetup_formatted?: string;
  msdyn_invoicestatus_formatted?: string;
  msdyn_order_formatted?: string;
  msdyn_orderinvoicingdate_formatted?: string;
  msdyn_postponegenerationuntil_formatted?: string;
  msdyn_previousinvoicedate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_orderinvoicingsetupdate_Result extends msdyn_orderinvoicingsetupdate_Base, msdyn_orderinvoicingsetupdate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_invoice_guid: string | null;
  msdyn_invoicesetup_guid: string | null;
  msdyn_order_guid: string | null;
  msdyn_orderinvoicingdate_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_orderinvoicingsetupdate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Invoice: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  msdyn_InvoiceSetup: WebMappingRetrieve<msdyn_orderinvoicingsetup_Select,msdyn_orderinvoicingsetup_Expand,msdyn_orderinvoicingsetup_Filter,msdyn_orderinvoicingsetup_Fixed,msdyn_orderinvoicingsetup_Result,msdyn_orderinvoicingsetup_FormattedResult>;
  msdyn_Order: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  msdyn_OrderInvoicingDate: WebMappingRetrieve<msdyn_orderinvoicingdate_Select,msdyn_orderinvoicingdate_Expand,msdyn_orderinvoicingdate_Filter,msdyn_orderinvoicingdate_Fixed,msdyn_orderinvoicingdate_Result,msdyn_orderinvoicingdate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_orderinvoicingsetupdate_RelatedMany {
  msdyn_orderinvoicingsetupdate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_orderinvoicingsetupdate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_orderinvoicingsetupdate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderinvoicingsetupdate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderinvoicingsetupdate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_orderinvoicingsetupdate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_orderinvoicingsetupdate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_orderinvoicingsetupdate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_orderinvoicingsetupdate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_orderinvoicingsetupdates: WebMappingRetrieve<msdyn_orderinvoicingsetupdate_Select,msdyn_orderinvoicingsetupdate_Expand,msdyn_orderinvoicingsetupdate_Filter,msdyn_orderinvoicingsetupdate_Fixed,msdyn_orderinvoicingsetupdate_Result,msdyn_orderinvoicingsetupdate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_orderinvoicingsetupdates: WebMappingRelated<msdyn_orderinvoicingsetupdate_RelatedOne,msdyn_orderinvoicingsetupdate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_orderinvoicingsetupdates: WebMappingCUDA<msdyn_orderinvoicingsetupdate_Create,msdyn_orderinvoicingsetupdate_Update,msdyn_orderinvoicingsetupdate_Select>;
}
