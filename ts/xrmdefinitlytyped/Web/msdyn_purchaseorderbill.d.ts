interface msdyn_purchaseorderbill_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billdate?: Date | null;
  msdyn_name?: string | null;
  msdyn_note?: string | null;
  msdyn_purchaseorderbillid?: string | null;
  msdyn_shippingamount?: number | null;
  msdyn_shippingamount_base?: number | null;
  msdyn_subtotal?: number | null;
  msdyn_subtotal_base?: number | null;
  msdyn_taxamount?: number | null;
  msdyn_taxamount_base?: number | null;
  msdyn_totalamount?: number | null;
  msdyn_totalamount_base?: number | null;
  msdyn_vendorinvoicenumber?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: msdyn_purchaseorderbill_statecode | null;
  statuscode?: msdyn_purchaseorderbill_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_purchaseorderbill_Relationships {
  bpf_msdyn_purchaseorderbill_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799?: msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Result[] | null;
  msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill?: msdyn_purchaseorderreceiptproduct_Result[] | null;
  msdyn_purchaseorderbill_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_purchaseorderbill_Annotations?: Annotation_Result[] | null;
  msdyn_purchaseorderbill_Appointments?: Appointment_Result[] | null;
  msdyn_purchaseorderbill_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_purchaseorderbill_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_purchaseorderbill_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_purchaseorderbill_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_purchaseorderbill_Emails?: Email_Result[] | null;
  msdyn_purchaseorderbill_Faxes?: Fax_Result[] | null;
  msdyn_purchaseorderbill_Letters?: Letter_Result[] | null;
  msdyn_purchaseorderbill_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_purchaseorderbill_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_purchaseorderbill_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_purchaseorderbill_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_purchaseorderbill_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_purchaseorderbill_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_purchaseorderbill_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_purchaseorderbill_SyncErrors?: SyncError_Result[] | null;
  msdyn_purchaseorderbill_Tasks?: Task_Result[] | null;
  msdyn_purchaseorderbill_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_purchaseorderbill_connections1?: Connection_Result[] | null;
  msdyn_purchaseorderbill_connections2?: Connection_Result[] | null;
  msdyn_purchaseorderbill_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_purchaseorderbill_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_purchaseorderbill_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_purchaseorderbill_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_purchaseorderbill_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_purchaseorderbill_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_purchaseorderbill_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_purchaseorderbill_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_purchaseorderbill extends msdyn_purchaseorderbill_Base, msdyn_purchaseorderbill_Relationships {
  msdyn_paymentterm_bind$msdyn_paymentterms?: string | null;
  msdyn_purchaseorder_bind$msdyn_purchaseorders?: string | null;
  msdyn_taxcode_bind$msdyn_taxcodes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_purchaseorderbill_Create extends msdyn_purchaseorderbill {
}
interface msdyn_purchaseorderbill_Update extends msdyn_purchaseorderbill {
}
interface msdyn_purchaseorderbill_Select {
  createdby_guid: WebAttribute<msdyn_purchaseorderbill_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_purchaseorderbill_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_purchaseorderbill_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_purchaseorderbill_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_purchaseorderbill_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_purchaseorderbill_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_purchaseorderbill_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_purchaseorderbill_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billdate: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_billdate: Date | null }, { msdyn_billdate_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_name: string | null }, {  }>;
  msdyn_note: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_note: string | null }, {  }>;
  msdyn_paymentterm_guid: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_paymentterm_guid: string | null }, { msdyn_paymentterm_formatted?: string }>;
  msdyn_purchaseorder_guid: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_purchaseorder_guid: string | null }, { msdyn_purchaseorder_formatted?: string }>;
  msdyn_purchaseorderbillid: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_purchaseorderbillid: string | null }, {  }>;
  msdyn_shippingamount: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_shippingamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_shippingamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_shippingamount_base: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_shippingamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_shippingamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_subtotal: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_subtotal: number | null; transactioncurrencyid_guid: string | null }, { msdyn_subtotal_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_subtotal_base: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_subtotal_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_subtotal_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_taxamount: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_taxamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_taxamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_taxamount_base: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_taxamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_taxamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_taxcode_guid: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_taxcode_guid: string | null }, { msdyn_taxcode_formatted?: string }>;
  msdyn_totalamount: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_totalamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_totalamount_base: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_totalamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_vendorinvoicenumber: WebAttribute<msdyn_purchaseorderbill_Select, { msdyn_vendorinvoicenumber: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_purchaseorderbill_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_purchaseorderbill_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_purchaseorderbill_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_purchaseorderbill_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_purchaseorderbill_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<msdyn_purchaseorderbill_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<msdyn_purchaseorderbill_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_purchaseorderbill_Select, { statecode: msdyn_purchaseorderbill_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_purchaseorderbill_Select, { statuscode: msdyn_purchaseorderbill_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_purchaseorderbill_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_purchaseorderbill_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<msdyn_purchaseorderbill_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_purchaseorderbill_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_purchaseorderbill_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_purchaseorderbill_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_billdate: Date;
  msdyn_name: string;
  msdyn_note: string;
  msdyn_paymentterm_guid: XQW.Guid;
  msdyn_purchaseorder_guid: XQW.Guid;
  msdyn_purchaseorderbillid: XQW.Guid;
  msdyn_shippingamount: number;
  msdyn_shippingamount_base: number;
  msdyn_subtotal: number;
  msdyn_subtotal_base: number;
  msdyn_taxamount: number;
  msdyn_taxamount_base: number;
  msdyn_taxcode_guid: XQW.Guid;
  msdyn_totalamount: number;
  msdyn_totalamount_base: number;
  msdyn_vendorinvoicenumber: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: msdyn_purchaseorderbill_statecode;
  statuscode: msdyn_purchaseorderbill_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_purchaseorderbill_Expand {
  bpf_msdyn_purchaseorderbill_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: WebExpand<msdyn_purchaseorderbill_Expand, msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Select, msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Filter, { bpf_msdyn_purchaseorderbill_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Result[] }>;
  createdby: WebExpand<msdyn_purchaseorderbill_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_purchaseorderbill_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_purchaseorderbill_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_purchaseorderbill_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill: WebExpand<msdyn_purchaseorderbill_Expand, msdyn_purchaseorderreceiptproduct_Select, msdyn_purchaseorderreceiptproduct_Filter, { msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill: msdyn_purchaseorderreceiptproduct_Result[] }>;
  msdyn_paymentterm: WebExpand<msdyn_purchaseorderbill_Expand, msdyn_paymentterm_Select, msdyn_paymentterm_Filter, { msdyn_paymentterm: msdyn_paymentterm_Result }>;
  msdyn_purchaseorder: WebExpand<msdyn_purchaseorderbill_Expand, msdyn_purchaseorder_Select, msdyn_purchaseorder_Filter, { msdyn_purchaseorder: msdyn_purchaseorder_Result }>;
  msdyn_purchaseorderbill_ActivityPointers: WebExpand<msdyn_purchaseorderbill_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_purchaseorderbill_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_purchaseorderbill_Annotations: WebExpand<msdyn_purchaseorderbill_Expand, Annotation_Select, Annotation_Filter, { msdyn_purchaseorderbill_Annotations: Annotation_Result[] }>;
  msdyn_purchaseorderbill_Appointments: WebExpand<msdyn_purchaseorderbill_Expand, Appointment_Select, Appointment_Filter, { msdyn_purchaseorderbill_Appointments: Appointment_Result[] }>;
  msdyn_purchaseorderbill_AsyncOperations: WebExpand<msdyn_purchaseorderbill_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_purchaseorderbill_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_purchaseorderbill_BulkDeleteFailures: WebExpand<msdyn_purchaseorderbill_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_purchaseorderbill_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_purchaseorderbill_DuplicateBaseRecord: WebExpand<msdyn_purchaseorderbill_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_purchaseorderbill_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_purchaseorderbill_DuplicateMatchingRecord: WebExpand<msdyn_purchaseorderbill_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_purchaseorderbill_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_purchaseorderbill_Emails: WebExpand<msdyn_purchaseorderbill_Expand, Email_Select, Email_Filter, { msdyn_purchaseorderbill_Emails: Email_Result[] }>;
  msdyn_purchaseorderbill_Faxes: WebExpand<msdyn_purchaseorderbill_Expand, Fax_Select, Fax_Filter, { msdyn_purchaseorderbill_Faxes: Fax_Result[] }>;
  msdyn_purchaseorderbill_Letters: WebExpand<msdyn_purchaseorderbill_Expand, Letter_Select, Letter_Filter, { msdyn_purchaseorderbill_Letters: Letter_Result[] }>;
  msdyn_purchaseorderbill_MailboxTrackingFolders: WebExpand<msdyn_purchaseorderbill_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_purchaseorderbill_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_purchaseorderbill_PhoneCalls: WebExpand<msdyn_purchaseorderbill_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_purchaseorderbill_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_purchaseorderbill_PrincipalObjectAttributeAccesses: WebExpand<msdyn_purchaseorderbill_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_purchaseorderbill_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_purchaseorderbill_ProcessSession: WebExpand<msdyn_purchaseorderbill_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_purchaseorderbill_ProcessSession: ProcessSession_Result[] }>;
  msdyn_purchaseorderbill_RecurringAppointmentMasters: WebExpand<msdyn_purchaseorderbill_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_purchaseorderbill_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_purchaseorderbill_ServiceAppointments: WebExpand<msdyn_purchaseorderbill_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_purchaseorderbill_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_purchaseorderbill_SocialActivities: WebExpand<msdyn_purchaseorderbill_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_purchaseorderbill_SocialActivities: SocialActivity_Result[] }>;
  msdyn_purchaseorderbill_SyncErrors: WebExpand<msdyn_purchaseorderbill_Expand, SyncError_Select, SyncError_Filter, { msdyn_purchaseorderbill_SyncErrors: SyncError_Result[] }>;
  msdyn_purchaseorderbill_Tasks: WebExpand<msdyn_purchaseorderbill_Expand, Task_Select, Task_Filter, { msdyn_purchaseorderbill_Tasks: Task_Result[] }>;
  msdyn_purchaseorderbill_UserEntityInstanceDatas: WebExpand<msdyn_purchaseorderbill_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_purchaseorderbill_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_purchaseorderbill_connections1: WebExpand<msdyn_purchaseorderbill_Expand, Connection_Select, Connection_Filter, { msdyn_purchaseorderbill_connections1: Connection_Result[] }>;
  msdyn_purchaseorderbill_connections2: WebExpand<msdyn_purchaseorderbill_Expand, Connection_Select, Connection_Filter, { msdyn_purchaseorderbill_connections2: Connection_Result[] }>;
  msdyn_purchaseorderbill_msdyn_approvals: WebExpand<msdyn_purchaseorderbill_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_purchaseorderbill_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_purchaseorderbill_msdyn_bookingalerts: WebExpand<msdyn_purchaseorderbill_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_purchaseorderbill_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_purchaseorderbill_msdyn_ocliveworkitems: WebExpand<msdyn_purchaseorderbill_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_purchaseorderbill_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_purchaseorderbill_msdyn_ocoutboundmessages: WebExpand<msdyn_purchaseorderbill_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_purchaseorderbill_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_purchaseorderbill_msdyn_ocsessions: WebExpand<msdyn_purchaseorderbill_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_purchaseorderbill_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_purchaseorderbill_msfp_alerts: WebExpand<msdyn_purchaseorderbill_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_purchaseorderbill_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_purchaseorderbill_msfp_surveyinvites: WebExpand<msdyn_purchaseorderbill_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_purchaseorderbill_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_purchaseorderbill_msfp_surveyresponses: WebExpand<msdyn_purchaseorderbill_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_purchaseorderbill_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_taxcode: WebExpand<msdyn_purchaseorderbill_Expand, msdyn_taxcode_Select, msdyn_taxcode_Filter, { msdyn_taxcode: msdyn_taxcode_Result }>;
  ownerid: WebExpand<msdyn_purchaseorderbill_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_purchaseorderbill_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_purchaseorderbill_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_purchaseorderbill_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<msdyn_purchaseorderbill_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
  transactioncurrencyid: WebExpand<msdyn_purchaseorderbill_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_purchaseorderbill_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billdate_formatted?: string;
  msdyn_paymentterm_formatted?: string;
  msdyn_purchaseorder_formatted?: string;
  msdyn_shippingamount_base_formatted?: string;
  msdyn_shippingamount_formatted?: string;
  msdyn_subtotal_base_formatted?: string;
  msdyn_subtotal_formatted?: string;
  msdyn_taxamount_base_formatted?: string;
  msdyn_taxamount_formatted?: string;
  msdyn_taxcode_formatted?: string;
  msdyn_totalamount_base_formatted?: string;
  msdyn_totalamount_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_purchaseorderbill_Result extends msdyn_purchaseorderbill_Base, msdyn_purchaseorderbill_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_paymentterm_guid: string | null;
  msdyn_purchaseorder_guid: string | null;
  msdyn_taxcode_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_purchaseorderbill_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_paymentterm: WebMappingRetrieve<msdyn_paymentterm_Select,msdyn_paymentterm_Expand,msdyn_paymentterm_Filter,msdyn_paymentterm_Fixed,msdyn_paymentterm_Result,msdyn_paymentterm_FormattedResult>;
  msdyn_purchaseorder: WebMappingRetrieve<msdyn_purchaseorder_Select,msdyn_purchaseorder_Expand,msdyn_purchaseorder_Filter,msdyn_purchaseorder_Fixed,msdyn_purchaseorder_Result,msdyn_purchaseorder_FormattedResult>;
  msdyn_taxcode: WebMappingRetrieve<msdyn_taxcode_Select,msdyn_taxcode_Expand,msdyn_taxcode_Filter,msdyn_taxcode_Fixed,msdyn_taxcode_Result,msdyn_taxcode_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_purchaseorderbill_RelatedMany {
  bpf_msdyn_purchaseorderbill_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: WebMappingRetrieve<msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Select,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Expand,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Filter,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Fixed,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Result,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_FormattedResult>;
  msdyn_msdyn_purchaseorderbill_msdyn_purchaseorderreceiptproduct_PurchaseOrderBill: WebMappingRetrieve<msdyn_purchaseorderreceiptproduct_Select,msdyn_purchaseorderreceiptproduct_Expand,msdyn_purchaseorderreceiptproduct_Filter,msdyn_purchaseorderreceiptproduct_Fixed,msdyn_purchaseorderreceiptproduct_Result,msdyn_purchaseorderreceiptproduct_FormattedResult>;
  msdyn_purchaseorderbill_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_purchaseorderbill_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_purchaseorderbill_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_purchaseorderbill_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_purchaseorderbill_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_purchaseorderbill_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_purchaseorderbill_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_purchaseorderbill_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_purchaseorderbill_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_purchaseorderbill_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_purchaseorderbill_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_purchaseorderbill_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_purchaseorderbill_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_purchaseorderbill_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_purchaseorderbill_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_purchaseorderbill_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_purchaseorderbill_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_purchaseorderbill_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_purchaseorderbill_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_purchaseorderbill_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_purchaseorderbill_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_purchaseorderbill_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_purchaseorderbill_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_purchaseorderbill_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_purchaseorderbill_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_purchaseorderbill_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_purchaseorderbill_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_purchaseorderbill_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_purchaseorderbill_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_purchaseorderbill_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_purchaseorderbills: WebMappingRetrieve<msdyn_purchaseorderbill_Select,msdyn_purchaseorderbill_Expand,msdyn_purchaseorderbill_Filter,msdyn_purchaseorderbill_Fixed,msdyn_purchaseorderbill_Result,msdyn_purchaseorderbill_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_purchaseorderbills: WebMappingRelated<msdyn_purchaseorderbill_RelatedOne,msdyn_purchaseorderbill_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_purchaseorderbills: WebMappingCUDA<msdyn_purchaseorderbill_Create,msdyn_purchaseorderbill_Update,msdyn_purchaseorderbill_Select>;
}
