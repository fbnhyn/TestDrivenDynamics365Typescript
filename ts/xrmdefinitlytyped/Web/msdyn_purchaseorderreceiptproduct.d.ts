interface msdyn_purchaseorderreceiptproduct_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_purchaseorderreceiptproductid?: string | null;
  msdyn_quantity?: number | null;
  msdyn_totalcost?: number | null;
  msdyn_totalcost_base?: number | null;
  msdyn_unitcost?: number | null;
  msdyn_unitcost_base?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_purchaseorderreceiptproduct_statecode | null;
  statuscode?: msdyn_purchaseorderreceiptproduct_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_purchaseorderreceiptproduct_Relationships {
  msdyn_msdyn_purchaseorderreceiptproduct_msdyn_inventoryjournal_PurchaseOrderReceiptProduct?: msdyn_inventoryjournal_Result[] | null;
  msdyn_msdyn_purchaseorderreceiptproduct_msdyn_workorderproduct_PurchaseOrderReceiptProduct?: msdyn_workorderproduct_Result[] | null;
  msdyn_purchaseorderreceiptproduct_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_purchaseorderreceiptproduct_Annotations?: Annotation_Result[] | null;
  msdyn_purchaseorderreceiptproduct_Appointments?: Appointment_Result[] | null;
  msdyn_purchaseorderreceiptproduct_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_purchaseorderreceiptproduct_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_purchaseorderreceiptproduct_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_purchaseorderreceiptproduct_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_purchaseorderreceiptproduct_Emails?: Email_Result[] | null;
  msdyn_purchaseorderreceiptproduct_Faxes?: Fax_Result[] | null;
  msdyn_purchaseorderreceiptproduct_Letters?: Letter_Result[] | null;
  msdyn_purchaseorderreceiptproduct_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_purchaseorderreceiptproduct_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_purchaseorderreceiptproduct_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_purchaseorderreceiptproduct_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_purchaseorderreceiptproduct_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_purchaseorderreceiptproduct_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_purchaseorderreceiptproduct_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_purchaseorderreceiptproduct_SyncErrors?: SyncError_Result[] | null;
  msdyn_purchaseorderreceiptproduct_Tasks?: Task_Result[] | null;
  msdyn_purchaseorderreceiptproduct_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_purchaseorderreceiptproduct_connections1?: Connection_Result[] | null;
  msdyn_purchaseorderreceiptproduct_connections2?: Connection_Result[] | null;
  msdyn_purchaseorderreceiptproduct_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_purchaseorderreceiptproduct_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_purchaseorderreceiptproduct_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_purchaseorderreceiptproduct_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_purchaseorderreceiptproduct_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_purchaseorderreceiptproduct_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_purchaseorderreceiptproduct_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_purchaseorderreceiptproduct_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_purchaseorderreceiptproduct extends msdyn_purchaseorderreceiptproduct_Base, msdyn_purchaseorderreceiptproduct_Relationships {
  msdyn_associatetobooking_bind$bookableresourcebookings?: string | null;
  msdyn_associatetowarehouse_bind$msdyn_warehouses?: string | null;
  msdyn_associatetoworkorder_bind$msdyn_workorders?: string | null;
  msdyn_purchaseorder_bind$msdyn_purchaseorders?: string | null;
  msdyn_purchaseorderbill_bind$msdyn_purchaseorderbills?: string | null;
  msdyn_purchaseorderproduct_bind$msdyn_purchaseorderproducts?: string | null;
  msdyn_purchaseorderreceipt_bind$msdyn_purchaseorderreceipts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_purchaseorderreceiptproduct_Create extends msdyn_purchaseorderreceiptproduct {
}
interface msdyn_purchaseorderreceiptproduct_Update extends msdyn_purchaseorderreceiptproduct {
}
interface msdyn_purchaseorderreceiptproduct_Select {
  createdby_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_associatetobooking_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_associatetobooking_guid: string | null }, { msdyn_associatetobooking_formatted?: string }>;
  msdyn_associatetowarehouse_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_associatetowarehouse_guid: string | null }, { msdyn_associatetowarehouse_formatted?: string }>;
  msdyn_associatetoworkorder_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_associatetoworkorder_guid: string | null }, { msdyn_associatetoworkorder_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_name: string | null }, {  }>;
  msdyn_purchaseorder_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_purchaseorder_guid: string | null }, { msdyn_purchaseorder_formatted?: string }>;
  msdyn_purchaseorderbill_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_purchaseorderbill_guid: string | null }, { msdyn_purchaseorderbill_formatted?: string }>;
  msdyn_purchaseorderproduct_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_purchaseorderproduct_guid: string | null }, { msdyn_purchaseorderproduct_formatted?: string }>;
  msdyn_purchaseorderreceipt_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_purchaseorderreceipt_guid: string | null }, { msdyn_purchaseorderreceipt_formatted?: string }>;
  msdyn_purchaseorderreceiptproductid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_purchaseorderreceiptproductid: string | null }, {  }>;
  msdyn_quantity: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_quantity: number | null }, {  }>;
  msdyn_totalcost: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_totalcost: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalcost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_totalcost_base: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_totalcost_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_totalcost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_unitcost: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_unitcost: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitcost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_unitcost_base: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { msdyn_unitcost_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitcost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { statecode: msdyn_purchaseorderreceiptproduct_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { statuscode: msdyn_purchaseorderreceiptproduct_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_purchaseorderreceiptproduct_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_purchaseorderreceiptproduct_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_associatetobooking_guid: XQW.Guid;
  msdyn_associatetowarehouse_guid: XQW.Guid;
  msdyn_associatetoworkorder_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_purchaseorder_guid: XQW.Guid;
  msdyn_purchaseorderbill_guid: XQW.Guid;
  msdyn_purchaseorderproduct_guid: XQW.Guid;
  msdyn_purchaseorderreceipt_guid: XQW.Guid;
  msdyn_purchaseorderreceiptproductid: XQW.Guid;
  msdyn_quantity: number;
  msdyn_totalcost: number;
  msdyn_totalcost_base: number;
  msdyn_unitcost: number;
  msdyn_unitcost_base: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_purchaseorderreceiptproduct_statecode;
  statuscode: msdyn_purchaseorderreceiptproduct_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_purchaseorderreceiptproduct_Expand {
  createdby: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_associatetobooking: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { msdyn_associatetobooking: BookableResourceBooking_Result }>;
  msdyn_associatetowarehouse: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_warehouse_Select, msdyn_warehouse_Filter, { msdyn_associatetowarehouse: msdyn_warehouse_Result }>;
  msdyn_associatetoworkorder: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_associatetoworkorder: msdyn_workorder_Result }>;
  msdyn_msdyn_purchaseorderreceiptproduct_msdyn_inventoryjournal_PurchaseOrderReceiptProduct: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_inventoryjournal_Select, msdyn_inventoryjournal_Filter, { msdyn_msdyn_purchaseorderreceiptproduct_msdyn_inventoryjournal_PurchaseOrderReceiptProduct: msdyn_inventoryjournal_Result[] }>;
  msdyn_msdyn_purchaseorderreceiptproduct_msdyn_workorderproduct_PurchaseOrderReceiptProduct: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_workorderproduct_Select, msdyn_workorderproduct_Filter, { msdyn_msdyn_purchaseorderreceiptproduct_msdyn_workorderproduct_PurchaseOrderReceiptProduct: msdyn_workorderproduct_Result[] }>;
  msdyn_purchaseorder: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_purchaseorder_Select, msdyn_purchaseorder_Filter, { msdyn_purchaseorder: msdyn_purchaseorder_Result }>;
  msdyn_purchaseorderbill: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_purchaseorderbill_Select, msdyn_purchaseorderbill_Filter, { msdyn_purchaseorderbill: msdyn_purchaseorderbill_Result }>;
  msdyn_purchaseorderproduct: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_purchaseorderproduct_Select, msdyn_purchaseorderproduct_Filter, { msdyn_purchaseorderproduct: msdyn_purchaseorderproduct_Result }>;
  msdyn_purchaseorderreceipt: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_purchaseorderreceipt_Select, msdyn_purchaseorderreceipt_Filter, { msdyn_purchaseorderreceipt: msdyn_purchaseorderreceipt_Result }>;
  msdyn_purchaseorderreceiptproduct_ActivityPointers: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_purchaseorderreceiptproduct_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_purchaseorderreceiptproduct_Annotations: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, Annotation_Select, Annotation_Filter, { msdyn_purchaseorderreceiptproduct_Annotations: Annotation_Result[] }>;
  msdyn_purchaseorderreceiptproduct_Appointments: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, Appointment_Select, Appointment_Filter, { msdyn_purchaseorderreceiptproduct_Appointments: Appointment_Result[] }>;
  msdyn_purchaseorderreceiptproduct_AsyncOperations: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_purchaseorderreceiptproduct_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_purchaseorderreceiptproduct_BulkDeleteFailures: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_purchaseorderreceiptproduct_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_purchaseorderreceiptproduct_DuplicateBaseRecord: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_purchaseorderreceiptproduct_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_purchaseorderreceiptproduct_DuplicateMatchingRecord: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_purchaseorderreceiptproduct_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_purchaseorderreceiptproduct_Emails: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, Email_Select, Email_Filter, { msdyn_purchaseorderreceiptproduct_Emails: Email_Result[] }>;
  msdyn_purchaseorderreceiptproduct_Faxes: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, Fax_Select, Fax_Filter, { msdyn_purchaseorderreceiptproduct_Faxes: Fax_Result[] }>;
  msdyn_purchaseorderreceiptproduct_Letters: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, Letter_Select, Letter_Filter, { msdyn_purchaseorderreceiptproduct_Letters: Letter_Result[] }>;
  msdyn_purchaseorderreceiptproduct_MailboxTrackingFolders: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_purchaseorderreceiptproduct_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_purchaseorderreceiptproduct_PhoneCalls: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_purchaseorderreceiptproduct_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_purchaseorderreceiptproduct_PrincipalObjectAttributeAccesses: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_purchaseorderreceiptproduct_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_purchaseorderreceiptproduct_ProcessSession: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_purchaseorderreceiptproduct_ProcessSession: ProcessSession_Result[] }>;
  msdyn_purchaseorderreceiptproduct_RecurringAppointmentMasters: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_purchaseorderreceiptproduct_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_purchaseorderreceiptproduct_ServiceAppointments: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_purchaseorderreceiptproduct_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_purchaseorderreceiptproduct_SocialActivities: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_purchaseorderreceiptproduct_SocialActivities: SocialActivity_Result[] }>;
  msdyn_purchaseorderreceiptproduct_SyncErrors: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, SyncError_Select, SyncError_Filter, { msdyn_purchaseorderreceiptproduct_SyncErrors: SyncError_Result[] }>;
  msdyn_purchaseorderreceiptproduct_Tasks: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, Task_Select, Task_Filter, { msdyn_purchaseorderreceiptproduct_Tasks: Task_Result[] }>;
  msdyn_purchaseorderreceiptproduct_UserEntityInstanceDatas: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_purchaseorderreceiptproduct_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_purchaseorderreceiptproduct_connections1: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, Connection_Select, Connection_Filter, { msdyn_purchaseorderreceiptproduct_connections1: Connection_Result[] }>;
  msdyn_purchaseorderreceiptproduct_connections2: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, Connection_Select, Connection_Filter, { msdyn_purchaseorderreceiptproduct_connections2: Connection_Result[] }>;
  msdyn_purchaseorderreceiptproduct_msdyn_approvals: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_purchaseorderreceiptproduct_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_purchaseorderreceiptproduct_msdyn_bookingalerts: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_purchaseorderreceiptproduct_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_purchaseorderreceiptproduct_msdyn_ocliveworkitems: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_purchaseorderreceiptproduct_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_purchaseorderreceiptproduct_msdyn_ocoutboundmessages: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_purchaseorderreceiptproduct_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_purchaseorderreceiptproduct_msdyn_ocsessions: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_purchaseorderreceiptproduct_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_purchaseorderreceiptproduct_msfp_alerts: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_purchaseorderreceiptproduct_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_purchaseorderreceiptproduct_msfp_surveyinvites: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_purchaseorderreceiptproduct_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_purchaseorderreceiptproduct_msfp_surveyresponses: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_purchaseorderreceiptproduct_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  ownerid: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_purchaseorderreceiptproduct_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_purchaseorderreceiptproduct_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_associatetobooking_formatted?: string;
  msdyn_associatetowarehouse_formatted?: string;
  msdyn_associatetoworkorder_formatted?: string;
  msdyn_purchaseorder_formatted?: string;
  msdyn_purchaseorderbill_formatted?: string;
  msdyn_purchaseorderproduct_formatted?: string;
  msdyn_purchaseorderreceipt_formatted?: string;
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
interface msdyn_purchaseorderreceiptproduct_Result extends msdyn_purchaseorderreceiptproduct_Base, msdyn_purchaseorderreceiptproduct_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_associatetobooking_guid: string | null;
  msdyn_associatetowarehouse_guid: string | null;
  msdyn_associatetoworkorder_guid: string | null;
  msdyn_purchaseorder_guid: string | null;
  msdyn_purchaseorderbill_guid: string | null;
  msdyn_purchaseorderproduct_guid: string | null;
  msdyn_purchaseorderreceipt_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_purchaseorderreceiptproduct_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_associatetobooking: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  msdyn_associatetowarehouse: WebMappingRetrieve<msdyn_warehouse_Select,msdyn_warehouse_Expand,msdyn_warehouse_Filter,msdyn_warehouse_Fixed,msdyn_warehouse_Result,msdyn_warehouse_FormattedResult>;
  msdyn_associatetoworkorder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_purchaseorder: WebMappingRetrieve<msdyn_purchaseorder_Select,msdyn_purchaseorder_Expand,msdyn_purchaseorder_Filter,msdyn_purchaseorder_Fixed,msdyn_purchaseorder_Result,msdyn_purchaseorder_FormattedResult>;
  msdyn_purchaseorderbill: WebMappingRetrieve<msdyn_purchaseorderbill_Select,msdyn_purchaseorderbill_Expand,msdyn_purchaseorderbill_Filter,msdyn_purchaseorderbill_Fixed,msdyn_purchaseorderbill_Result,msdyn_purchaseorderbill_FormattedResult>;
  msdyn_purchaseorderproduct: WebMappingRetrieve<msdyn_purchaseorderproduct_Select,msdyn_purchaseorderproduct_Expand,msdyn_purchaseorderproduct_Filter,msdyn_purchaseorderproduct_Fixed,msdyn_purchaseorderproduct_Result,msdyn_purchaseorderproduct_FormattedResult>;
  msdyn_purchaseorderreceipt: WebMappingRetrieve<msdyn_purchaseorderreceipt_Select,msdyn_purchaseorderreceipt_Expand,msdyn_purchaseorderreceipt_Filter,msdyn_purchaseorderreceipt_Fixed,msdyn_purchaseorderreceipt_Result,msdyn_purchaseorderreceipt_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_purchaseorderreceiptproduct_RelatedMany {
  msdyn_msdyn_purchaseorderreceiptproduct_msdyn_inventoryjournal_PurchaseOrderReceiptProduct: WebMappingRetrieve<msdyn_inventoryjournal_Select,msdyn_inventoryjournal_Expand,msdyn_inventoryjournal_Filter,msdyn_inventoryjournal_Fixed,msdyn_inventoryjournal_Result,msdyn_inventoryjournal_FormattedResult>;
  msdyn_msdyn_purchaseorderreceiptproduct_msdyn_workorderproduct_PurchaseOrderReceiptProduct: WebMappingRetrieve<msdyn_workorderproduct_Select,msdyn_workorderproduct_Expand,msdyn_workorderproduct_Filter,msdyn_workorderproduct_Fixed,msdyn_workorderproduct_Result,msdyn_workorderproduct_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_purchaseorderreceiptproduct_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_purchaseorderreceiptproducts: WebMappingRetrieve<msdyn_purchaseorderreceiptproduct_Select,msdyn_purchaseorderreceiptproduct_Expand,msdyn_purchaseorderreceiptproduct_Filter,msdyn_purchaseorderreceiptproduct_Fixed,msdyn_purchaseorderreceiptproduct_Result,msdyn_purchaseorderreceiptproduct_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_purchaseorderreceiptproducts: WebMappingRelated<msdyn_purchaseorderreceiptproduct_RelatedOne,msdyn_purchaseorderreceiptproduct_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_purchaseorderreceiptproducts: WebMappingCUDA<msdyn_purchaseorderreceiptproduct_Create,msdyn_purchaseorderreceiptproduct_Update,msdyn_purchaseorderreceiptproduct_Select>;
}
