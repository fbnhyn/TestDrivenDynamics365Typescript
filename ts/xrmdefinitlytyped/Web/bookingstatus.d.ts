interface BookingStatus_Base extends WebEntity {
  bookingstatusid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_committype?: msdyn_committype | null;
  msdyn_fieldservicestatus?: msdyn_bookingsystemstatus | null;
  msdyn_imageurl?: string | null;
  msdyn_internalflags?: string | null;
  msdyn_serviceappointmentstatus?: msdyn_serviceappointmentstatus | null;
  msdyn_statuscolor?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: bookingstatus_statecode | null;
  status?: bookingstatus_status | null;
  statuscode?: bookingstatus_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BookingStatus_Relationships {
  BookingStatus_SyncErrors?: SyncError_Result[] | null;
  bookingstatus_AsyncOperations?: AsyncOperation_Result[] | null;
  bookingstatus_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  bookingstatus_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  bookingstatus_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  bookingstatus_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  bookingstatus_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  bookingstatus_ProcessSession?: ProcessSession_Result[] | null;
  bookingstatus_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  bookingstatus_bookableresourcebooking_BookingStatus?: BookableResourceBooking_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid?: BookableResourceBookingHeader_Result[] | null;
  msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus?: msdyn_bookingsetupmetadata_Result[] | null;
  msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus?: msdyn_bookingsetupmetadata_Result[] | null;
  msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus?: msdyn_bookingtimestamp_Result[] | null;
  msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus?: msdyn_fieldservicesetting_Result[] | null;
  msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus?: msdyn_fieldservicesetting_Result[] | null;
  msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid?: msdyn_resourceassignment_Result[] | null;
  msdyn_bookingstatus_msdyn_timeentry_BookingStatus?: msdyn_timeentry_Result[] | null;
}
interface BookingStatus extends BookingStatus_Base, BookingStatus_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface BookingStatus_Create extends BookingStatus {
}
interface BookingStatus_Update extends BookingStatus {
}
interface BookingStatus_Select {
  bookingstatusid: WebAttribute<BookingStatus_Select, { bookingstatusid: string | null }, {  }>;
  createdby_guid: WebAttribute<BookingStatus_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BookingStatus_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BookingStatus_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<BookingStatus_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<BookingStatus_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<BookingStatus_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<BookingStatus_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BookingStatus_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BookingStatus_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_committype: WebAttribute<BookingStatus_Select, { msdyn_committype: msdyn_committype | null }, { msdyn_committype_formatted?: string }>;
  msdyn_fieldservicestatus: WebAttribute<BookingStatus_Select, { msdyn_fieldservicestatus: msdyn_bookingsystemstatus | null }, { msdyn_fieldservicestatus_formatted?: string }>;
  msdyn_imageurl: WebAttribute<BookingStatus_Select, { msdyn_imageurl: string | null }, {  }>;
  msdyn_internalflags: WebAttribute<BookingStatus_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_serviceappointmentstatus: WebAttribute<BookingStatus_Select, { msdyn_serviceappointmentstatus: msdyn_serviceappointmentstatus | null }, { msdyn_serviceappointmentstatus_formatted?: string }>;
  msdyn_statuscolor: WebAttribute<BookingStatus_Select, { msdyn_statuscolor: string | null }, {  }>;
  name: WebAttribute<BookingStatus_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BookingStatus_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BookingStatus_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BookingStatus_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BookingStatus_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BookingStatus_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<BookingStatus_Select, { statecode: bookingstatus_statecode | null }, { statecode_formatted?: string }>;
  status: WebAttribute<BookingStatus_Select, { status: bookingstatus_status | null }, { status_formatted?: string }>;
  statuscode: WebAttribute<BookingStatus_Select, { statuscode: bookingstatus_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<BookingStatus_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<BookingStatus_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<BookingStatus_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BookingStatus_Select, { versionnumber: number | null }, {  }>;
}
interface BookingStatus_Filter {
  bookingstatusid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_committype: msdyn_committype;
  msdyn_fieldservicestatus: msdyn_bookingsystemstatus;
  msdyn_imageurl: string;
  msdyn_internalflags: string;
  msdyn_serviceappointmentstatus: msdyn_serviceappointmentstatus;
  msdyn_statuscolor: string;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: bookingstatus_statecode;
  status: bookingstatus_status;
  statuscode: bookingstatus_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BookingStatus_Expand {
  BookingStatus_SyncErrors: WebExpand<BookingStatus_Expand, SyncError_Select, SyncError_Filter, { BookingStatus_SyncErrors: SyncError_Result[] }>;
  bookingstatus_AsyncOperations: WebExpand<BookingStatus_Expand, AsyncOperation_Select, AsyncOperation_Filter, { bookingstatus_AsyncOperations: AsyncOperation_Result[] }>;
  bookingstatus_BulkDeleteFailures: WebExpand<BookingStatus_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { bookingstatus_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  bookingstatus_DuplicateBaseRecord: WebExpand<BookingStatus_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookingstatus_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  bookingstatus_DuplicateMatchingRecord: WebExpand<BookingStatus_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookingstatus_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  bookingstatus_MailboxTrackingFolders: WebExpand<BookingStatus_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { bookingstatus_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  bookingstatus_PrincipalObjectAttributeAccesses: WebExpand<BookingStatus_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { bookingstatus_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  bookingstatus_ProcessSession: WebExpand<BookingStatus_Expand, ProcessSession_Select, ProcessSession_Filter, { bookingstatus_ProcessSession: ProcessSession_Result[] }>;
  bookingstatus_UserEntityInstanceDatas: WebExpand<BookingStatus_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { bookingstatus_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  bookingstatus_bookableresourcebooking_BookingStatus: WebExpand<BookingStatus_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { bookingstatus_bookableresourcebooking_BookingStatus: BookableResourceBooking_Result[] }>;
  createdbyname: WebExpand<BookingStatus_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<BookingStatus_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<BookingStatus_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<BookingStatus_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid: WebExpand<BookingStatus_Expand, BookableResourceBookingHeader_Select, BookableResourceBookingHeader_Filter, { msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid: BookableResourceBookingHeader_Result[] }>;
  msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus: WebExpand<BookingStatus_Expand, msdyn_bookingsetupmetadata_Select, msdyn_bookingsetupmetadata_Filter, { msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus: msdyn_bookingsetupmetadata_Result[] }>;
  msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus: WebExpand<BookingStatus_Expand, msdyn_bookingsetupmetadata_Select, msdyn_bookingsetupmetadata_Filter, { msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus: msdyn_bookingsetupmetadata_Result[] }>;
  msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus: WebExpand<BookingStatus_Expand, msdyn_bookingtimestamp_Select, msdyn_bookingtimestamp_Filter, { msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus: msdyn_bookingtimestamp_Result[] }>;
  msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus: WebExpand<BookingStatus_Expand, msdyn_fieldservicesetting_Select, msdyn_fieldservicesetting_Filter, { msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus: msdyn_fieldservicesetting_Result[] }>;
  msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus: WebExpand<BookingStatus_Expand, msdyn_fieldservicesetting_Select, msdyn_fieldservicesetting_Filter, { msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus: msdyn_fieldservicesetting_Result[] }>;
  msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid: WebExpand<BookingStatus_Expand, msdyn_resourceassignment_Select, msdyn_resourceassignment_Filter, { msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid: msdyn_resourceassignment_Result[] }>;
  msdyn_bookingstatus_msdyn_timeentry_BookingStatus: WebExpand<BookingStatus_Expand, msdyn_timeentry_Select, msdyn_timeentry_Filter, { msdyn_bookingstatus_msdyn_timeentry_BookingStatus: msdyn_timeentry_Result[] }>;
  ownerid: WebExpand<BookingStatus_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<BookingStatus_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<BookingStatus_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<BookingStatus_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<BookingStatus_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface BookingStatus_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_committype_formatted?: string;
  msdyn_fieldservicestatus_formatted?: string;
  msdyn_serviceappointmentstatus_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  status_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface BookingStatus_Result extends BookingStatus_Base, BookingStatus_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface BookingStatus_RelatedOne {
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface BookingStatus_RelatedMany {
  BookingStatus_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  bookingstatus_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  bookingstatus_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  bookingstatus_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookingstatus_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookingstatus_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  bookingstatus_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  bookingstatus_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  bookingstatus_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  bookingstatus_bookableresourcebooking_BookingStatus: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid: WebMappingRetrieve<BookableResourceBookingHeader_Select,BookableResourceBookingHeader_Expand,BookableResourceBookingHeader_Filter,BookableResourceBookingHeader_Fixed,BookableResourceBookingHeader_Result,BookableResourceBookingHeader_FormattedResult>;
  msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus: WebMappingRetrieve<msdyn_bookingsetupmetadata_Select,msdyn_bookingsetupmetadata_Expand,msdyn_bookingsetupmetadata_Filter,msdyn_bookingsetupmetadata_Fixed,msdyn_bookingsetupmetadata_Result,msdyn_bookingsetupmetadata_FormattedResult>;
  msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus: WebMappingRetrieve<msdyn_bookingsetupmetadata_Select,msdyn_bookingsetupmetadata_Expand,msdyn_bookingsetupmetadata_Filter,msdyn_bookingsetupmetadata_Fixed,msdyn_bookingsetupmetadata_Result,msdyn_bookingsetupmetadata_FormattedResult>;
  msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus: WebMappingRetrieve<msdyn_bookingtimestamp_Select,msdyn_bookingtimestamp_Expand,msdyn_bookingtimestamp_Filter,msdyn_bookingtimestamp_Fixed,msdyn_bookingtimestamp_Result,msdyn_bookingtimestamp_FormattedResult>;
  msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus: WebMappingRetrieve<msdyn_fieldservicesetting_Select,msdyn_fieldservicesetting_Expand,msdyn_fieldservicesetting_Filter,msdyn_fieldservicesetting_Fixed,msdyn_fieldservicesetting_Result,msdyn_fieldservicesetting_FormattedResult>;
  msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus: WebMappingRetrieve<msdyn_fieldservicesetting_Select,msdyn_fieldservicesetting_Expand,msdyn_fieldservicesetting_Filter,msdyn_fieldservicesetting_Fixed,msdyn_fieldservicesetting_Result,msdyn_fieldservicesetting_FormattedResult>;
  msdyn_bookingstatus_msdyn_resourceassignment_bookingstatusid: WebMappingRetrieve<msdyn_resourceassignment_Select,msdyn_resourceassignment_Expand,msdyn_resourceassignment_Filter,msdyn_resourceassignment_Fixed,msdyn_resourceassignment_Result,msdyn_resourceassignment_FormattedResult>;
  msdyn_bookingstatus_msdyn_timeentry_BookingStatus: WebMappingRetrieve<msdyn_timeentry_Select,msdyn_timeentry_Expand,msdyn_timeentry_Filter,msdyn_timeentry_Fixed,msdyn_timeentry_Result,msdyn_timeentry_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bookingstatuses: WebMappingRetrieve<BookingStatus_Select,BookingStatus_Expand,BookingStatus_Filter,BookingStatus_Fixed,BookingStatus_Result,BookingStatus_FormattedResult>;
}
interface WebEntitiesRelated {
  bookingstatuses: WebMappingRelated<BookingStatus_RelatedOne,BookingStatus_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookingstatuses: WebMappingCUDA<BookingStatus_Create,BookingStatus_Update,BookingStatus_Select>;
}
