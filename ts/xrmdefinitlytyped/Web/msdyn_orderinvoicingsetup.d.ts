interface msdyn_orderinvoicingsetup_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_internalflags?: string | null;
  msdyn_name?: string | null;
  msdyn_orderinvoicingsetupid?: string | null;
  msdyn_postponegenerationuntil?: Date | null;
  msdyn_processstartedon?: Date | null;
  msdyn_recurrencesettings?: string | null;
  msdyn_revision?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_orderinvoicingsetup_statecode | null;
  statuscode?: msdyn_orderinvoicingsetup_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_orderinvoicingsetup_Relationships {
  msdyn_Order?: SalesOrder_Result | null;
  msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingproduct_OrderInvoicingSetup?: msdyn_orderinvoicingproduct_Result[] | null;
  msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingsetupdate_InvoiceSetup?: msdyn_orderinvoicingsetupdate_Result[] | null;
  msdyn_orderinvoicingsetup_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_orderinvoicingsetup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_orderinvoicingsetup_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderinvoicingsetup_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderinvoicingsetup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_orderinvoicingsetup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_orderinvoicingsetup_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_orderinvoicingsetup_SyncErrors?: SyncError_Result[] | null;
  msdyn_orderinvoicingsetup_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_orderinvoicingsetup extends msdyn_orderinvoicingsetup_Base, msdyn_orderinvoicingsetup_Relationships {
  msdyn_Order_bind$salesorders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_orderinvoicingsetup_Create extends msdyn_orderinvoicingsetup {
}
interface msdyn_orderinvoicingsetup_Update extends msdyn_orderinvoicingsetup {
}
interface msdyn_orderinvoicingsetup_Select {
  createdby_guid: WebAttribute<msdyn_orderinvoicingsetup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_orderinvoicingsetup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_orderinvoicingsetup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_orderinvoicingsetup_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_orderinvoicingsetup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_orderinvoicingsetup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_orderinvoicingsetup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_orderinvoicingsetup_Select, { msdyn_description: string | null }, {  }>;
  msdyn_internalflags: WebAttribute<msdyn_orderinvoicingsetup_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_orderinvoicingsetup_Select, { msdyn_name: string | null }, {  }>;
  msdyn_order_guid: WebAttribute<msdyn_orderinvoicingsetup_Select, { msdyn_order_guid: string | null }, { msdyn_order_formatted?: string }>;
  msdyn_orderinvoicingsetupid: WebAttribute<msdyn_orderinvoicingsetup_Select, { msdyn_orderinvoicingsetupid: string | null }, {  }>;
  msdyn_postponegenerationuntil: WebAttribute<msdyn_orderinvoicingsetup_Select, { msdyn_postponegenerationuntil: Date | null }, { msdyn_postponegenerationuntil_formatted?: string }>;
  msdyn_processstartedon: WebAttribute<msdyn_orderinvoicingsetup_Select, { msdyn_processstartedon: Date | null }, { msdyn_processstartedon_formatted?: string }>;
  msdyn_recurrencesettings: WebAttribute<msdyn_orderinvoicingsetup_Select, { msdyn_recurrencesettings: string | null }, {  }>;
  msdyn_revision: WebAttribute<msdyn_orderinvoicingsetup_Select, { msdyn_revision: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_orderinvoicingsetup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_orderinvoicingsetup_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_orderinvoicingsetup_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_orderinvoicingsetup_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_orderinvoicingsetup_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_orderinvoicingsetup_Select, { statecode: msdyn_orderinvoicingsetup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_orderinvoicingsetup_Select, { statuscode: msdyn_orderinvoicingsetup_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_orderinvoicingsetup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_orderinvoicingsetup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_orderinvoicingsetup_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_orderinvoicingsetup_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_internalflags: string;
  msdyn_name: string;
  msdyn_order_guid: XQW.Guid;
  msdyn_orderinvoicingsetupid: XQW.Guid;
  msdyn_postponegenerationuntil: Date;
  msdyn_processstartedon: Date;
  msdyn_recurrencesettings: string;
  msdyn_revision: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_orderinvoicingsetup_statecode;
  statuscode: msdyn_orderinvoicingsetup_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_orderinvoicingsetup_Expand {
  createdby: WebExpand<msdyn_orderinvoicingsetup_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_orderinvoicingsetup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_orderinvoicingsetup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_orderinvoicingsetup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Order: WebExpand<msdyn_orderinvoicingsetup_Expand, SalesOrder_Select, SalesOrder_Filter, { msdyn_Order: SalesOrder_Result }>;
  msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingproduct_OrderInvoicingSetup: WebExpand<msdyn_orderinvoicingsetup_Expand, msdyn_orderinvoicingproduct_Select, msdyn_orderinvoicingproduct_Filter, { msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingproduct_OrderInvoicingSetup: msdyn_orderinvoicingproduct_Result[] }>;
  msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingsetupdate_InvoiceSetup: WebExpand<msdyn_orderinvoicingsetup_Expand, msdyn_orderinvoicingsetupdate_Select, msdyn_orderinvoicingsetupdate_Filter, { msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingsetupdate_InvoiceSetup: msdyn_orderinvoicingsetupdate_Result[] }>;
  msdyn_orderinvoicingsetup_AsyncOperations: WebExpand<msdyn_orderinvoicingsetup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_orderinvoicingsetup_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_orderinvoicingsetup_BulkDeleteFailures: WebExpand<msdyn_orderinvoicingsetup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_orderinvoicingsetup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_orderinvoicingsetup_DuplicateBaseRecord: WebExpand<msdyn_orderinvoicingsetup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderinvoicingsetup_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_orderinvoicingsetup_DuplicateMatchingRecord: WebExpand<msdyn_orderinvoicingsetup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderinvoicingsetup_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_orderinvoicingsetup_MailboxTrackingFolders: WebExpand<msdyn_orderinvoicingsetup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_orderinvoicingsetup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_orderinvoicingsetup_PrincipalObjectAttributeAccesses: WebExpand<msdyn_orderinvoicingsetup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_orderinvoicingsetup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_orderinvoicingsetup_ProcessSession: WebExpand<msdyn_orderinvoicingsetup_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_orderinvoicingsetup_ProcessSession: ProcessSession_Result[] }>;
  msdyn_orderinvoicingsetup_SyncErrors: WebExpand<msdyn_orderinvoicingsetup_Expand, SyncError_Select, SyncError_Filter, { msdyn_orderinvoicingsetup_SyncErrors: SyncError_Result[] }>;
  msdyn_orderinvoicingsetup_UserEntityInstanceDatas: WebExpand<msdyn_orderinvoicingsetup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_orderinvoicingsetup_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_orderinvoicingsetup_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_orderinvoicingsetup_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_orderinvoicingsetup_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_orderinvoicingsetup_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_orderinvoicingsetup_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
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
interface msdyn_orderinvoicingsetup_Result extends msdyn_orderinvoicingsetup_Base, msdyn_orderinvoicingsetup_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_order_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_orderinvoicingsetup_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Order: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_orderinvoicingsetup_RelatedMany {
  msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingproduct_OrderInvoicingSetup: WebMappingRetrieve<msdyn_orderinvoicingproduct_Select,msdyn_orderinvoicingproduct_Expand,msdyn_orderinvoicingproduct_Filter,msdyn_orderinvoicingproduct_Fixed,msdyn_orderinvoicingproduct_Result,msdyn_orderinvoicingproduct_FormattedResult>;
  msdyn_msdyn_orderinvoicingsetup_msdyn_orderinvoicingsetupdate_InvoiceSetup: WebMappingRetrieve<msdyn_orderinvoicingsetupdate_Select,msdyn_orderinvoicingsetupdate_Expand,msdyn_orderinvoicingsetupdate_Filter,msdyn_orderinvoicingsetupdate_Fixed,msdyn_orderinvoicingsetupdate_Result,msdyn_orderinvoicingsetupdate_FormattedResult>;
  msdyn_orderinvoicingsetup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_orderinvoicingsetup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_orderinvoicingsetup_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderinvoicingsetup_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderinvoicingsetup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_orderinvoicingsetup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_orderinvoicingsetup_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_orderinvoicingsetup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_orderinvoicingsetup_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_orderinvoicingsetups: WebMappingRetrieve<msdyn_orderinvoicingsetup_Select,msdyn_orderinvoicingsetup_Expand,msdyn_orderinvoicingsetup_Filter,msdyn_orderinvoicingsetup_Fixed,msdyn_orderinvoicingsetup_Result,msdyn_orderinvoicingsetup_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_orderinvoicingsetups: WebMappingRelated<msdyn_orderinvoicingsetup_RelatedOne,msdyn_orderinvoicingsetup_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_orderinvoicingsetups: WebMappingCUDA<msdyn_orderinvoicingsetup_Create,msdyn_orderinvoicingsetup_Update,msdyn_orderinvoicingsetup_Select>;
}
