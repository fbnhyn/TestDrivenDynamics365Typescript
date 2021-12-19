interface msdyn_paymentdetail_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_paymentamount?: number | null;
  msdyn_paymentamount_base?: number | null;
  msdyn_paymentdetailid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_paymentdetail_statecode | null;
  statuscode?: msdyn_paymentdetail_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_paymentdetail_Relationships {
  msdyn_paymentdetail_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_paymentdetail_Annotations?: Annotation_Result[] | null;
  msdyn_paymentdetail_Appointments?: Appointment_Result[] | null;
  msdyn_paymentdetail_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_paymentdetail_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_paymentdetail_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_paymentdetail_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_paymentdetail_Emails?: Email_Result[] | null;
  msdyn_paymentdetail_Faxes?: Fax_Result[] | null;
  msdyn_paymentdetail_Letters?: Letter_Result[] | null;
  msdyn_paymentdetail_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_paymentdetail_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_paymentdetail_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_paymentdetail_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_paymentdetail_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_paymentdetail_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_paymentdetail_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_paymentdetail_SyncErrors?: SyncError_Result[] | null;
  msdyn_paymentdetail_Tasks?: Task_Result[] | null;
  msdyn_paymentdetail_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_paymentdetail_connections1?: Connection_Result[] | null;
  msdyn_paymentdetail_connections2?: Connection_Result[] | null;
  msdyn_paymentdetail_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_paymentdetail_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_paymentdetail_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_paymentdetail_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_paymentdetail_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_paymentdetail_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_paymentdetail_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_paymentdetail_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_paymentdetail extends msdyn_paymentdetail_Base, msdyn_paymentdetail_Relationships {
  msdyn_invoice_bind$invoices?: string | null;
  msdyn_payment_bind$msdyn_payments?: string | null;
  msdyn_workorder_bind$msdyn_workorders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_paymentdetail_Create extends msdyn_paymentdetail {
}
interface msdyn_paymentdetail_Update extends msdyn_paymentdetail {
}
interface msdyn_paymentdetail_Select {
  createdby_guid: WebAttribute<msdyn_paymentdetail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_paymentdetail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_paymentdetail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_paymentdetail_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_paymentdetail_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_paymentdetail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_paymentdetail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_paymentdetail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_invoice_guid: WebAttribute<msdyn_paymentdetail_Select, { msdyn_invoice_guid: string | null }, { msdyn_invoice_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_paymentdetail_Select, { msdyn_name: string | null }, {  }>;
  msdyn_payment_guid: WebAttribute<msdyn_paymentdetail_Select, { msdyn_payment_guid: string | null }, { msdyn_payment_formatted?: string }>;
  msdyn_paymentamount: WebAttribute<msdyn_paymentdetail_Select, { msdyn_paymentamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_paymentamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_paymentamount_base: WebAttribute<msdyn_paymentdetail_Select, { msdyn_paymentamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_paymentamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_paymentdetailid: WebAttribute<msdyn_paymentdetail_Select, { msdyn_paymentdetailid: string | null }, {  }>;
  msdyn_workorder_guid: WebAttribute<msdyn_paymentdetail_Select, { msdyn_workorder_guid: string | null }, { msdyn_workorder_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_paymentdetail_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_paymentdetail_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_paymentdetail_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_paymentdetail_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_paymentdetail_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_paymentdetail_Select, { statecode: msdyn_paymentdetail_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_paymentdetail_Select, { statuscode: msdyn_paymentdetail_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_paymentdetail_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_paymentdetail_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_paymentdetail_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_paymentdetail_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_paymentdetail_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_invoice_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_payment_guid: XQW.Guid;
  msdyn_paymentamount: number;
  msdyn_paymentamount_base: number;
  msdyn_paymentdetailid: XQW.Guid;
  msdyn_workorder_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_paymentdetail_statecode;
  statuscode: msdyn_paymentdetail_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_paymentdetail_Expand {
  createdby: WebExpand<msdyn_paymentdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_paymentdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_paymentdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_paymentdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_invoice: WebExpand<msdyn_paymentdetail_Expand, Invoice_Select, Invoice_Filter, { msdyn_invoice: Invoice_Result }>;
  msdyn_payment: WebExpand<msdyn_paymentdetail_Expand, msdyn_payment_Select, msdyn_payment_Filter, { msdyn_payment: msdyn_payment_Result }>;
  msdyn_paymentdetail_ActivityPointers: WebExpand<msdyn_paymentdetail_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_paymentdetail_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_paymentdetail_Annotations: WebExpand<msdyn_paymentdetail_Expand, Annotation_Select, Annotation_Filter, { msdyn_paymentdetail_Annotations: Annotation_Result[] }>;
  msdyn_paymentdetail_Appointments: WebExpand<msdyn_paymentdetail_Expand, Appointment_Select, Appointment_Filter, { msdyn_paymentdetail_Appointments: Appointment_Result[] }>;
  msdyn_paymentdetail_AsyncOperations: WebExpand<msdyn_paymentdetail_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_paymentdetail_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_paymentdetail_BulkDeleteFailures: WebExpand<msdyn_paymentdetail_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_paymentdetail_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_paymentdetail_DuplicateBaseRecord: WebExpand<msdyn_paymentdetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_paymentdetail_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_paymentdetail_DuplicateMatchingRecord: WebExpand<msdyn_paymentdetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_paymentdetail_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_paymentdetail_Emails: WebExpand<msdyn_paymentdetail_Expand, Email_Select, Email_Filter, { msdyn_paymentdetail_Emails: Email_Result[] }>;
  msdyn_paymentdetail_Faxes: WebExpand<msdyn_paymentdetail_Expand, Fax_Select, Fax_Filter, { msdyn_paymentdetail_Faxes: Fax_Result[] }>;
  msdyn_paymentdetail_Letters: WebExpand<msdyn_paymentdetail_Expand, Letter_Select, Letter_Filter, { msdyn_paymentdetail_Letters: Letter_Result[] }>;
  msdyn_paymentdetail_MailboxTrackingFolders: WebExpand<msdyn_paymentdetail_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_paymentdetail_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_paymentdetail_PhoneCalls: WebExpand<msdyn_paymentdetail_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_paymentdetail_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_paymentdetail_PrincipalObjectAttributeAccesses: WebExpand<msdyn_paymentdetail_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_paymentdetail_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_paymentdetail_ProcessSession: WebExpand<msdyn_paymentdetail_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_paymentdetail_ProcessSession: ProcessSession_Result[] }>;
  msdyn_paymentdetail_RecurringAppointmentMasters: WebExpand<msdyn_paymentdetail_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_paymentdetail_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_paymentdetail_ServiceAppointments: WebExpand<msdyn_paymentdetail_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_paymentdetail_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_paymentdetail_SocialActivities: WebExpand<msdyn_paymentdetail_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_paymentdetail_SocialActivities: SocialActivity_Result[] }>;
  msdyn_paymentdetail_SyncErrors: WebExpand<msdyn_paymentdetail_Expand, SyncError_Select, SyncError_Filter, { msdyn_paymentdetail_SyncErrors: SyncError_Result[] }>;
  msdyn_paymentdetail_Tasks: WebExpand<msdyn_paymentdetail_Expand, Task_Select, Task_Filter, { msdyn_paymentdetail_Tasks: Task_Result[] }>;
  msdyn_paymentdetail_UserEntityInstanceDatas: WebExpand<msdyn_paymentdetail_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_paymentdetail_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_paymentdetail_connections1: WebExpand<msdyn_paymentdetail_Expand, Connection_Select, Connection_Filter, { msdyn_paymentdetail_connections1: Connection_Result[] }>;
  msdyn_paymentdetail_connections2: WebExpand<msdyn_paymentdetail_Expand, Connection_Select, Connection_Filter, { msdyn_paymentdetail_connections2: Connection_Result[] }>;
  msdyn_paymentdetail_msdyn_approvals: WebExpand<msdyn_paymentdetail_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_paymentdetail_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_paymentdetail_msdyn_bookingalerts: WebExpand<msdyn_paymentdetail_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_paymentdetail_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_paymentdetail_msdyn_ocliveworkitems: WebExpand<msdyn_paymentdetail_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_paymentdetail_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_paymentdetail_msdyn_ocoutboundmessages: WebExpand<msdyn_paymentdetail_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_paymentdetail_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_paymentdetail_msdyn_ocsessions: WebExpand<msdyn_paymentdetail_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_paymentdetail_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_paymentdetail_msfp_alerts: WebExpand<msdyn_paymentdetail_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_paymentdetail_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_paymentdetail_msfp_surveyinvites: WebExpand<msdyn_paymentdetail_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_paymentdetail_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_paymentdetail_msfp_surveyresponses: WebExpand<msdyn_paymentdetail_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_paymentdetail_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_workorder: WebExpand<msdyn_paymentdetail_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_workorder: msdyn_workorder_Result }>;
  ownerid: WebExpand<msdyn_paymentdetail_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_paymentdetail_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_paymentdetail_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_paymentdetail_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_paymentdetail_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_paymentdetail_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_invoice_formatted?: string;
  msdyn_payment_formatted?: string;
  msdyn_paymentamount_base_formatted?: string;
  msdyn_paymentamount_formatted?: string;
  msdyn_workorder_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_paymentdetail_Result extends msdyn_paymentdetail_Base, msdyn_paymentdetail_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_invoice_guid: string | null;
  msdyn_payment_guid: string | null;
  msdyn_workorder_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_paymentdetail_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_invoice: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  msdyn_payment: WebMappingRetrieve<msdyn_payment_Select,msdyn_payment_Expand,msdyn_payment_Filter,msdyn_payment_Fixed,msdyn_payment_Result,msdyn_payment_FormattedResult>;
  msdyn_workorder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_paymentdetail_RelatedMany {
  msdyn_paymentdetail_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_paymentdetail_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_paymentdetail_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_paymentdetail_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_paymentdetail_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_paymentdetail_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_paymentdetail_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_paymentdetail_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_paymentdetail_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_paymentdetail_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_paymentdetail_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_paymentdetail_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_paymentdetail_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_paymentdetail_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_paymentdetail_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_paymentdetail_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_paymentdetail_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_paymentdetail_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_paymentdetail_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_paymentdetail_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_paymentdetail_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_paymentdetail_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_paymentdetail_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_paymentdetail_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_paymentdetail_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_paymentdetail_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_paymentdetail_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_paymentdetail_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_paymentdetail_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_paymentdetail_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_paymentdetailes: WebMappingRetrieve<msdyn_paymentdetail_Select,msdyn_paymentdetail_Expand,msdyn_paymentdetail_Filter,msdyn_paymentdetail_Fixed,msdyn_paymentdetail_Result,msdyn_paymentdetail_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_paymentdetailes: WebMappingRelated<msdyn_paymentdetail_RelatedOne,msdyn_paymentdetail_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_paymentdetailes: WebMappingCUDA<msdyn_paymentdetail_Create,msdyn_paymentdetail_Update,msdyn_paymentdetail_Select>;
}
