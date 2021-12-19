interface msdyn_orderinvoicingdate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_invoicedate?: Date | null;
  msdyn_invoicestatus?: msdyn_agreementinvoicestatus | null;
  msdyn_name?: string | null;
  msdyn_orderinvoicingdateid?: string | null;
  msdyn_postponegenerationuntil?: Date | null;
  msdyn_processstartedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_orderinvoicingdate_statecode | null;
  statuscode?: msdyn_orderinvoicingdate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_orderinvoicingdate_Relationships {
  msdyn_Invoice?: Invoice_Result | null;
  msdyn_Order?: SalesOrder_Result | null;
  msdyn_msdyn_orderinvoicingdate_msdyn_orderinvoicingsetupdate_OrderInvoicingDate?: msdyn_orderinvoicingsetupdate_Result[] | null;
  msdyn_orderinvoicingdate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_orderinvoicingdate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_orderinvoicingdate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderinvoicingdate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderinvoicingdate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_orderinvoicingdate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_orderinvoicingdate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_orderinvoicingdate_SyncErrors?: SyncError_Result[] | null;
  msdyn_orderinvoicingdate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_orderinvoicingdate extends msdyn_orderinvoicingdate_Base, msdyn_orderinvoicingdate_Relationships {
  msdyn_Invoice_bind$invoices?: string | null;
  msdyn_Order_bind$salesorders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_orderinvoicingdate_Create extends msdyn_orderinvoicingdate {
}
interface msdyn_orderinvoicingdate_Update extends msdyn_orderinvoicingdate {
}
interface msdyn_orderinvoicingdate_Select {
  createdby_guid: WebAttribute<msdyn_orderinvoicingdate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_orderinvoicingdate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_orderinvoicingdate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_orderinvoicingdate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_orderinvoicingdate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_orderinvoicingdate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_orderinvoicingdate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_invoice_guid: WebAttribute<msdyn_orderinvoicingdate_Select, { msdyn_invoice_guid: string | null }, { msdyn_invoice_formatted?: string }>;
  msdyn_invoicedate: WebAttribute<msdyn_orderinvoicingdate_Select, { msdyn_invoicedate: Date | null }, { msdyn_invoicedate_formatted?: string }>;
  msdyn_invoicestatus: WebAttribute<msdyn_orderinvoicingdate_Select, { msdyn_invoicestatus: msdyn_agreementinvoicestatus | null }, { msdyn_invoicestatus_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_orderinvoicingdate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_order_guid: WebAttribute<msdyn_orderinvoicingdate_Select, { msdyn_order_guid: string | null }, { msdyn_order_formatted?: string }>;
  msdyn_orderinvoicingdateid: WebAttribute<msdyn_orderinvoicingdate_Select, { msdyn_orderinvoicingdateid: string | null }, {  }>;
  msdyn_postponegenerationuntil: WebAttribute<msdyn_orderinvoicingdate_Select, { msdyn_postponegenerationuntil: Date | null }, { msdyn_postponegenerationuntil_formatted?: string }>;
  msdyn_processstartedon: WebAttribute<msdyn_orderinvoicingdate_Select, { msdyn_processstartedon: Date | null }, { msdyn_processstartedon_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_orderinvoicingdate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_orderinvoicingdate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_orderinvoicingdate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_orderinvoicingdate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_orderinvoicingdate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_orderinvoicingdate_Select, { statecode: msdyn_orderinvoicingdate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_orderinvoicingdate_Select, { statuscode: msdyn_orderinvoicingdate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_orderinvoicingdate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_orderinvoicingdate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_orderinvoicingdate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_orderinvoicingdate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_invoice_guid: XQW.Guid;
  msdyn_invoicedate: Date;
  msdyn_invoicestatus: msdyn_agreementinvoicestatus;
  msdyn_name: string;
  msdyn_order_guid: XQW.Guid;
  msdyn_orderinvoicingdateid: XQW.Guid;
  msdyn_postponegenerationuntil: Date;
  msdyn_processstartedon: Date;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_orderinvoicingdate_statecode;
  statuscode: msdyn_orderinvoicingdate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_orderinvoicingdate_Expand {
  createdby: WebExpand<msdyn_orderinvoicingdate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_orderinvoicingdate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_orderinvoicingdate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_orderinvoicingdate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Invoice: WebExpand<msdyn_orderinvoicingdate_Expand, Invoice_Select, Invoice_Filter, { msdyn_Invoice: Invoice_Result }>;
  msdyn_Order: WebExpand<msdyn_orderinvoicingdate_Expand, SalesOrder_Select, SalesOrder_Filter, { msdyn_Order: SalesOrder_Result }>;
  msdyn_msdyn_orderinvoicingdate_msdyn_orderinvoicingsetupdate_OrderInvoicingDate: WebExpand<msdyn_orderinvoicingdate_Expand, msdyn_orderinvoicingsetupdate_Select, msdyn_orderinvoicingsetupdate_Filter, { msdyn_msdyn_orderinvoicingdate_msdyn_orderinvoicingsetupdate_OrderInvoicingDate: msdyn_orderinvoicingsetupdate_Result[] }>;
  msdyn_orderinvoicingdate_AsyncOperations: WebExpand<msdyn_orderinvoicingdate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_orderinvoicingdate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_orderinvoicingdate_BulkDeleteFailures: WebExpand<msdyn_orderinvoicingdate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_orderinvoicingdate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_orderinvoicingdate_DuplicateBaseRecord: WebExpand<msdyn_orderinvoicingdate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderinvoicingdate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_orderinvoicingdate_DuplicateMatchingRecord: WebExpand<msdyn_orderinvoicingdate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderinvoicingdate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_orderinvoicingdate_MailboxTrackingFolders: WebExpand<msdyn_orderinvoicingdate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_orderinvoicingdate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_orderinvoicingdate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_orderinvoicingdate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_orderinvoicingdate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_orderinvoicingdate_ProcessSession: WebExpand<msdyn_orderinvoicingdate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_orderinvoicingdate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_orderinvoicingdate_SyncErrors: WebExpand<msdyn_orderinvoicingdate_Expand, SyncError_Select, SyncError_Filter, { msdyn_orderinvoicingdate_SyncErrors: SyncError_Result[] }>;
  msdyn_orderinvoicingdate_UserEntityInstanceDatas: WebExpand<msdyn_orderinvoicingdate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_orderinvoicingdate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_orderinvoicingdate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_orderinvoicingdate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_orderinvoicingdate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_orderinvoicingdate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_orderinvoicingdate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_invoice_formatted?: string;
  msdyn_invoicedate_formatted?: string;
  msdyn_invoicestatus_formatted?: string;
  msdyn_order_formatted?: string;
  msdyn_postponegenerationuntil_formatted?: string;
  msdyn_processstartedon_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_orderinvoicingdate_Result extends msdyn_orderinvoicingdate_Base, msdyn_orderinvoicingdate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_invoice_guid: string | null;
  msdyn_order_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_orderinvoicingdate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Invoice: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  msdyn_Order: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_orderinvoicingdate_RelatedMany {
  msdyn_msdyn_orderinvoicingdate_msdyn_orderinvoicingsetupdate_OrderInvoicingDate: WebMappingRetrieve<msdyn_orderinvoicingsetupdate_Select,msdyn_orderinvoicingsetupdate_Expand,msdyn_orderinvoicingsetupdate_Filter,msdyn_orderinvoicingsetupdate_Fixed,msdyn_orderinvoicingsetupdate_Result,msdyn_orderinvoicingsetupdate_FormattedResult>;
  msdyn_orderinvoicingdate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_orderinvoicingdate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_orderinvoicingdate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderinvoicingdate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderinvoicingdate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_orderinvoicingdate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_orderinvoicingdate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_orderinvoicingdate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_orderinvoicingdate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_orderinvoicingdates: WebMappingRetrieve<msdyn_orderinvoicingdate_Select,msdyn_orderinvoicingdate_Expand,msdyn_orderinvoicingdate_Filter,msdyn_orderinvoicingdate_Fixed,msdyn_orderinvoicingdate_Result,msdyn_orderinvoicingdate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_orderinvoicingdates: WebMappingRelated<msdyn_orderinvoicingdate_RelatedOne,msdyn_orderinvoicingdate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_orderinvoicingdates: WebMappingCUDA<msdyn_orderinvoicingdate_Create,msdyn_orderinvoicingdate_Update,msdyn_orderinvoicingdate_Select>;
}
