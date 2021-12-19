interface msdyn_payment_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_amount?: number | null;
  msdyn_amount_base?: number | null;
  msdyn_checknumber?: string | null;
  msdyn_date?: Date | null;
  msdyn_name?: string | null;
  msdyn_paymentid?: string | null;
  msdyn_paymenttype?: msdyn_paymenttype | null;
  msdyn_unappliedamount?: number | null;
  msdyn_unappliedamount_base?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_payment_statecode | null;
  statuscode?: msdyn_payment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_payment_Relationships {
  msdyn_msdyn_payment_msdyn_paymentdetail_Payment?: msdyn_paymentdetail_Result[] | null;
  msdyn_payment_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_payment_Annotations?: Annotation_Result[] | null;
  msdyn_payment_Appointments?: Appointment_Result[] | null;
  msdyn_payment_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_payment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_payment_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_payment_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_payment_Emails?: Email_Result[] | null;
  msdyn_payment_Faxes?: Fax_Result[] | null;
  msdyn_payment_Letters?: Letter_Result[] | null;
  msdyn_payment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_payment_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_payment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_payment_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_payment_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_payment_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_payment_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_payment_SyncErrors?: SyncError_Result[] | null;
  msdyn_payment_Tasks?: Task_Result[] | null;
  msdyn_payment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_payment_connections1?: Connection_Result[] | null;
  msdyn_payment_connections2?: Connection_Result[] | null;
  msdyn_payment_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_payment_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_payment_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_payment_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_payment_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_payment_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_payment_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_payment_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_payment extends msdyn_payment_Base, msdyn_payment_Relationships {
  msdyn_account_bind$accounts?: string | null;
  msdyn_paymentmethod_bind$msdyn_paymentmethods?: string | null;
  msdyn_workorder_bind$msdyn_workorders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_payment_Create extends msdyn_payment {
}
interface msdyn_payment_Update extends msdyn_payment {
}
interface msdyn_payment_Select {
  createdby_guid: WebAttribute<msdyn_payment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_payment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_payment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_payment_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_payment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_payment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_payment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_payment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_account_guid: WebAttribute<msdyn_payment_Select, { msdyn_account_guid: string | null }, { msdyn_account_formatted?: string }>;
  msdyn_amount: WebAttribute<msdyn_payment_Select, { msdyn_amount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_amount_base: WebAttribute<msdyn_payment_Select, { msdyn_amount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_amount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_checknumber: WebAttribute<msdyn_payment_Select, { msdyn_checknumber: string | null }, {  }>;
  msdyn_date: WebAttribute<msdyn_payment_Select, { msdyn_date: Date | null }, { msdyn_date_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_payment_Select, { msdyn_name: string | null }, {  }>;
  msdyn_paymentid: WebAttribute<msdyn_payment_Select, { msdyn_paymentid: string | null }, {  }>;
  msdyn_paymentmethod_guid: WebAttribute<msdyn_payment_Select, { msdyn_paymentmethod_guid: string | null }, { msdyn_paymentmethod_formatted?: string }>;
  msdyn_paymenttype: WebAttribute<msdyn_payment_Select, { msdyn_paymenttype: msdyn_paymenttype | null }, { msdyn_paymenttype_formatted?: string }>;
  msdyn_unappliedamount: WebAttribute<msdyn_payment_Select, { msdyn_unappliedamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unappliedamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_unappliedamount_base: WebAttribute<msdyn_payment_Select, { msdyn_unappliedamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unappliedamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_workorder_guid: WebAttribute<msdyn_payment_Select, { msdyn_workorder_guid: string | null }, { msdyn_workorder_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_payment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_payment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_payment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_payment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_payment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_payment_Select, { statecode: msdyn_payment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_payment_Select, { statuscode: msdyn_payment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_payment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_payment_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_payment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_payment_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_payment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_account_guid: XQW.Guid;
  msdyn_amount: number;
  msdyn_amount_base: number;
  msdyn_checknumber: string;
  msdyn_date: Date;
  msdyn_name: string;
  msdyn_paymentid: XQW.Guid;
  msdyn_paymentmethod_guid: XQW.Guid;
  msdyn_paymenttype: msdyn_paymenttype;
  msdyn_unappliedamount: number;
  msdyn_unappliedamount_base: number;
  msdyn_workorder_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_payment_statecode;
  statuscode: msdyn_payment_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_payment_Expand {
  createdby: WebExpand<msdyn_payment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_payment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_payment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_payment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_account: WebExpand<msdyn_payment_Expand, Account_Select, Account_Filter, { msdyn_account: Account_Result }>;
  msdyn_msdyn_payment_msdyn_paymentdetail_Payment: WebExpand<msdyn_payment_Expand, msdyn_paymentdetail_Select, msdyn_paymentdetail_Filter, { msdyn_msdyn_payment_msdyn_paymentdetail_Payment: msdyn_paymentdetail_Result[] }>;
  msdyn_payment_ActivityPointers: WebExpand<msdyn_payment_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_payment_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_payment_Annotations: WebExpand<msdyn_payment_Expand, Annotation_Select, Annotation_Filter, { msdyn_payment_Annotations: Annotation_Result[] }>;
  msdyn_payment_Appointments: WebExpand<msdyn_payment_Expand, Appointment_Select, Appointment_Filter, { msdyn_payment_Appointments: Appointment_Result[] }>;
  msdyn_payment_AsyncOperations: WebExpand<msdyn_payment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_payment_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_payment_BulkDeleteFailures: WebExpand<msdyn_payment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_payment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_payment_DuplicateBaseRecord: WebExpand<msdyn_payment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_payment_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_payment_DuplicateMatchingRecord: WebExpand<msdyn_payment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_payment_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_payment_Emails: WebExpand<msdyn_payment_Expand, Email_Select, Email_Filter, { msdyn_payment_Emails: Email_Result[] }>;
  msdyn_payment_Faxes: WebExpand<msdyn_payment_Expand, Fax_Select, Fax_Filter, { msdyn_payment_Faxes: Fax_Result[] }>;
  msdyn_payment_Letters: WebExpand<msdyn_payment_Expand, Letter_Select, Letter_Filter, { msdyn_payment_Letters: Letter_Result[] }>;
  msdyn_payment_MailboxTrackingFolders: WebExpand<msdyn_payment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_payment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_payment_PhoneCalls: WebExpand<msdyn_payment_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_payment_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_payment_PrincipalObjectAttributeAccesses: WebExpand<msdyn_payment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_payment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_payment_ProcessSession: WebExpand<msdyn_payment_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_payment_ProcessSession: ProcessSession_Result[] }>;
  msdyn_payment_RecurringAppointmentMasters: WebExpand<msdyn_payment_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_payment_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_payment_ServiceAppointments: WebExpand<msdyn_payment_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_payment_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_payment_SocialActivities: WebExpand<msdyn_payment_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_payment_SocialActivities: SocialActivity_Result[] }>;
  msdyn_payment_SyncErrors: WebExpand<msdyn_payment_Expand, SyncError_Select, SyncError_Filter, { msdyn_payment_SyncErrors: SyncError_Result[] }>;
  msdyn_payment_Tasks: WebExpand<msdyn_payment_Expand, Task_Select, Task_Filter, { msdyn_payment_Tasks: Task_Result[] }>;
  msdyn_payment_UserEntityInstanceDatas: WebExpand<msdyn_payment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_payment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_payment_connections1: WebExpand<msdyn_payment_Expand, Connection_Select, Connection_Filter, { msdyn_payment_connections1: Connection_Result[] }>;
  msdyn_payment_connections2: WebExpand<msdyn_payment_Expand, Connection_Select, Connection_Filter, { msdyn_payment_connections2: Connection_Result[] }>;
  msdyn_payment_msdyn_approvals: WebExpand<msdyn_payment_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_payment_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_payment_msdyn_bookingalerts: WebExpand<msdyn_payment_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_payment_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_payment_msdyn_ocliveworkitems: WebExpand<msdyn_payment_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_payment_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_payment_msdyn_ocoutboundmessages: WebExpand<msdyn_payment_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_payment_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_payment_msdyn_ocsessions: WebExpand<msdyn_payment_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_payment_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_payment_msfp_alerts: WebExpand<msdyn_payment_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_payment_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_payment_msfp_surveyinvites: WebExpand<msdyn_payment_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_payment_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_payment_msfp_surveyresponses: WebExpand<msdyn_payment_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_payment_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_paymentmethod: WebExpand<msdyn_payment_Expand, msdyn_paymentmethod_Select, msdyn_paymentmethod_Filter, { msdyn_paymentmethod: msdyn_paymentmethod_Result }>;
  msdyn_workorder: WebExpand<msdyn_payment_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_workorder: msdyn_workorder_Result }>;
  ownerid: WebExpand<msdyn_payment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_payment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_payment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_payment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_payment_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_payment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_account_formatted?: string;
  msdyn_amount_base_formatted?: string;
  msdyn_amount_formatted?: string;
  msdyn_date_formatted?: string;
  msdyn_paymentmethod_formatted?: string;
  msdyn_paymenttype_formatted?: string;
  msdyn_unappliedamount_base_formatted?: string;
  msdyn_unappliedamount_formatted?: string;
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
interface msdyn_payment_Result extends msdyn_payment_Base, msdyn_payment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_account_guid: string | null;
  msdyn_paymentmethod_guid: string | null;
  msdyn_workorder_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_payment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_paymentmethod: WebMappingRetrieve<msdyn_paymentmethod_Select,msdyn_paymentmethod_Expand,msdyn_paymentmethod_Filter,msdyn_paymentmethod_Fixed,msdyn_paymentmethod_Result,msdyn_paymentmethod_FormattedResult>;
  msdyn_workorder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_payment_RelatedMany {
  msdyn_msdyn_payment_msdyn_paymentdetail_Payment: WebMappingRetrieve<msdyn_paymentdetail_Select,msdyn_paymentdetail_Expand,msdyn_paymentdetail_Filter,msdyn_paymentdetail_Fixed,msdyn_paymentdetail_Result,msdyn_paymentdetail_FormattedResult>;
  msdyn_payment_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_payment_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_payment_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_payment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_payment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_payment_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_payment_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_payment_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_payment_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_payment_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_payment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_payment_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_payment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_payment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_payment_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_payment_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_payment_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_payment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_payment_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_payment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_payment_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_payment_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_payment_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_payment_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_payment_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_payment_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_payment_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_payment_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_payment_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_payment_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_payments: WebMappingRetrieve<msdyn_payment_Select,msdyn_payment_Expand,msdyn_payment_Filter,msdyn_payment_Fixed,msdyn_payment_Result,msdyn_payment_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_payments: WebMappingRelated<msdyn_payment_RelatedOne,msdyn_payment_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_payments: WebMappingCUDA<msdyn_payment_Create,msdyn_payment_Update,msdyn_payment_Select>;
}
