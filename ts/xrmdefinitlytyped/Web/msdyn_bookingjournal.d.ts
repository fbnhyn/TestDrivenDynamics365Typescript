interface msdyn_bookingjournal_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_additionalcost?: number | null;
  msdyn_additionalcost_base?: number | null;
  msdyn_billable?: boolean | null;
  msdyn_bookingjournalid?: string | null;
  msdyn_duration?: number | null;
  msdyn_endtime?: Date | null;
  msdyn_journaltype?: msdyn_bookingjournaltype | null;
  msdyn_name?: string | null;
  msdyn_starttime?: Date | null;
  msdyn_totalcost?: number | null;
  msdyn_totalcost_base?: number | null;
  msdyn_unitcost?: number | null;
  msdyn_unitcost_base?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_bookingjournal_statecode | null;
  statuscode?: msdyn_bookingjournal_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_bookingjournal_Relationships {
  msdyn_bookingjournal_Annotations?: Annotation_Result[] | null;
  msdyn_bookingjournal_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_bookingjournal_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_bookingjournal_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_bookingjournal_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_bookingjournal_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_bookingjournal_SyncErrors?: SyncError_Result[] | null;
  msdyn_bookingjournal_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_bookingjournal extends msdyn_bookingjournal_Base, msdyn_bookingjournal_Relationships {
  msdyn_booking_bind$bookableresourcebookings?: string | null;
  msdyn_paytype_bind$msdyn_resourcepaytypes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_bookingjournal_Create extends msdyn_bookingjournal {
}
interface msdyn_bookingjournal_Update extends msdyn_bookingjournal {
}
interface msdyn_bookingjournal_Select {
  createdby_guid: WebAttribute<msdyn_bookingjournal_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_bookingjournal_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_bookingjournal_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_bookingjournal_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_bookingjournal_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_bookingjournal_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_bookingjournal_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_bookingjournal_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_additionalcost: WebAttribute<msdyn_bookingjournal_Select, { msdyn_additionalcost: number | null; transactioncurrencyid_guid: string | null }, { msdyn_additionalcost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_additionalcost_base: WebAttribute<msdyn_bookingjournal_Select, { msdyn_additionalcost_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_additionalcost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_billable: WebAttribute<msdyn_bookingjournal_Select, { msdyn_billable: boolean | null }, {  }>;
  msdyn_booking_guid: WebAttribute<msdyn_bookingjournal_Select, { msdyn_booking_guid: string | null }, { msdyn_booking_formatted?: string }>;
  msdyn_bookingjournalid: WebAttribute<msdyn_bookingjournal_Select, { msdyn_bookingjournalid: string | null }, {  }>;
  msdyn_duration: WebAttribute<msdyn_bookingjournal_Select, { msdyn_duration: number | null }, {  }>;
  msdyn_endtime: WebAttribute<msdyn_bookingjournal_Select, { msdyn_endtime: Date | null }, { msdyn_endtime_formatted?: string }>;
  msdyn_journaltype: WebAttribute<msdyn_bookingjournal_Select, { msdyn_journaltype: msdyn_bookingjournaltype | null }, { msdyn_journaltype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_bookingjournal_Select, { msdyn_name: string | null }, {  }>;
  msdyn_paytype_guid: WebAttribute<msdyn_bookingjournal_Select, { msdyn_paytype_guid: string | null }, { msdyn_paytype_formatted?: string }>;
  msdyn_starttime: WebAttribute<msdyn_bookingjournal_Select, { msdyn_starttime: Date | null }, { msdyn_starttime_formatted?: string }>;
  msdyn_totalcost: WebAttribute<msdyn_bookingjournal_Select, { msdyn_totalcost: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalcost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_totalcost_base: WebAttribute<msdyn_bookingjournal_Select, { msdyn_totalcost_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalcost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_unitcost: WebAttribute<msdyn_bookingjournal_Select, { msdyn_unitcost: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitcost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_unitcost_base: WebAttribute<msdyn_bookingjournal_Select, { msdyn_unitcost_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitcost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_bookingjournal_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_bookingjournal_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_bookingjournal_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_bookingjournal_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_bookingjournal_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_bookingjournal_Select, { statecode: msdyn_bookingjournal_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_bookingjournal_Select, { statuscode: msdyn_bookingjournal_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_bookingjournal_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_bookingjournal_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_bookingjournal_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_bookingjournal_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_bookingjournal_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_additionalcost: number;
  msdyn_additionalcost_base: number;
  msdyn_billable: boolean;
  msdyn_booking_guid: XQW.Guid;
  msdyn_bookingjournalid: XQW.Guid;
  msdyn_duration: number;
  msdyn_endtime: Date;
  msdyn_journaltype: msdyn_bookingjournaltype;
  msdyn_name: string;
  msdyn_paytype_guid: XQW.Guid;
  msdyn_starttime: Date;
  msdyn_totalcost: number;
  msdyn_totalcost_base: number;
  msdyn_unitcost: number;
  msdyn_unitcost_base: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_bookingjournal_statecode;
  statuscode: msdyn_bookingjournal_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_bookingjournal_Expand {
  createdby: WebExpand<msdyn_bookingjournal_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_bookingjournal_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_bookingjournal_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_bookingjournal_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_booking: WebExpand<msdyn_bookingjournal_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { msdyn_booking: BookableResourceBooking_Result }>;
  msdyn_bookingjournal_Annotations: WebExpand<msdyn_bookingjournal_Expand, Annotation_Select, Annotation_Filter, { msdyn_bookingjournal_Annotations: Annotation_Result[] }>;
  msdyn_bookingjournal_AsyncOperations: WebExpand<msdyn_bookingjournal_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_bookingjournal_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_bookingjournal_BulkDeleteFailures: WebExpand<msdyn_bookingjournal_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_bookingjournal_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_bookingjournal_MailboxTrackingFolders: WebExpand<msdyn_bookingjournal_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_bookingjournal_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_bookingjournal_PrincipalObjectAttributeAccesses: WebExpand<msdyn_bookingjournal_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_bookingjournal_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_bookingjournal_ProcessSession: WebExpand<msdyn_bookingjournal_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_bookingjournal_ProcessSession: ProcessSession_Result[] }>;
  msdyn_bookingjournal_SyncErrors: WebExpand<msdyn_bookingjournal_Expand, SyncError_Select, SyncError_Filter, { msdyn_bookingjournal_SyncErrors: SyncError_Result[] }>;
  msdyn_bookingjournal_UserEntityInstanceDatas: WebExpand<msdyn_bookingjournal_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_bookingjournal_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_paytype: WebExpand<msdyn_bookingjournal_Expand, msdyn_resourcepaytype_Select, msdyn_resourcepaytype_Filter, { msdyn_paytype: msdyn_resourcepaytype_Result }>;
  ownerid: WebExpand<msdyn_bookingjournal_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_bookingjournal_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_bookingjournal_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_bookingjournal_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_bookingjournal_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_bookingjournal_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_additionalcost_base_formatted?: string;
  msdyn_additionalcost_formatted?: string;
  msdyn_booking_formatted?: string;
  msdyn_endtime_formatted?: string;
  msdyn_journaltype_formatted?: string;
  msdyn_paytype_formatted?: string;
  msdyn_starttime_formatted?: string;
  msdyn_totalcost_base_formatted?: string;
  msdyn_totalcost_formatted?: string;
  msdyn_unitcost_base_formatted?: string;
  msdyn_unitcost_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_bookingjournal_Result extends msdyn_bookingjournal_Base, msdyn_bookingjournal_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_booking_guid: string | null;
  msdyn_paytype_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_bookingjournal_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_booking: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  msdyn_paytype: WebMappingRetrieve<msdyn_resourcepaytype_Select,msdyn_resourcepaytype_Expand,msdyn_resourcepaytype_Filter,msdyn_resourcepaytype_Fixed,msdyn_resourcepaytype_Result,msdyn_resourcepaytype_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_bookingjournal_RelatedMany {
  msdyn_bookingjournal_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_bookingjournal_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_bookingjournal_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_bookingjournal_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_bookingjournal_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_bookingjournal_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_bookingjournal_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_bookingjournal_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_bookingjournals: WebMappingRetrieve<msdyn_bookingjournal_Select,msdyn_bookingjournal_Expand,msdyn_bookingjournal_Filter,msdyn_bookingjournal_Fixed,msdyn_bookingjournal_Result,msdyn_bookingjournal_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_bookingjournals: WebMappingRelated<msdyn_bookingjournal_RelatedOne,msdyn_bookingjournal_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_bookingjournals: WebMappingCUDA<msdyn_bookingjournal_Create,msdyn_bookingjournal_Update,msdyn_bookingjournal_Select>;
}
