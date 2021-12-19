interface msdyn_inventoryjournal_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_internalflags?: string | null;
  msdyn_inventoryjournalid?: string | null;
  msdyn_journaltype?: msdyn_inventoryjournaltype | null;
  msdyn_name?: string | null;
  msdyn_quantity?: number | null;
  msdyn_reversal?: boolean | null;
  msdyn_transactiontype?: msdyn_inventorytransactiontype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_inventoryjournal_statecode | null;
  statuscode?: msdyn_inventoryjournal_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_inventoryjournal_Relationships {
  msdyn_inventoryjournal_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_inventoryjournal_Annotations?: Annotation_Result[] | null;
  msdyn_inventoryjournal_Appointments?: Appointment_Result[] | null;
  msdyn_inventoryjournal_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_inventoryjournal_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_inventoryjournal_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_inventoryjournal_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_inventoryjournal_Emails?: Email_Result[] | null;
  msdyn_inventoryjournal_Faxes?: Fax_Result[] | null;
  msdyn_inventoryjournal_Letters?: Letter_Result[] | null;
  msdyn_inventoryjournal_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_inventoryjournal_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_inventoryjournal_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_inventoryjournal_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_inventoryjournal_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_inventoryjournal_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_inventoryjournal_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_inventoryjournal_SyncErrors?: SyncError_Result[] | null;
  msdyn_inventoryjournal_Tasks?: Task_Result[] | null;
  msdyn_inventoryjournal_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_inventoryjournal_connections1?: Connection_Result[] | null;
  msdyn_inventoryjournal_connections2?: Connection_Result[] | null;
  msdyn_inventoryjournal_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_inventoryjournal_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_inventoryjournal_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_inventoryjournal_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_inventoryjournal_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_inventoryjournal_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_inventoryjournal_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_inventoryjournal_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal?: msdyn_inventoryjournal_Result[] | null;
  msdyn_originatingjournal_msdyn_inventoryjournal?: msdyn_inventoryjournal_Result | null;
}
interface msdyn_inventoryjournal extends msdyn_inventoryjournal_Base, msdyn_inventoryjournal_Relationships {
  msdyn_allocatedtoworkorder_bind$msdyn_workorders?: string | null;
  msdyn_inventoryadjustmentproduct_bind$msdyn_inventoryadjustmentproducts?: string | null;
  msdyn_originatingjournal_msdyn_inventoryjournal_bind$msdyn_inventoryjournals?: string | null;
  msdyn_product_bind$products?: string | null;
  msdyn_purchaseorderproduct_bind$msdyn_purchaseorderproducts?: string | null;
  msdyn_purchaseorderreceiptproduct_bind$msdyn_purchaseorderreceiptproducts?: string | null;
  msdyn_rmareceiptproduct_bind$msdyn_rmareceiptproducts?: string | null;
  msdyn_unit_bind$uoms?: string | null;
  msdyn_warehouse_bind$msdyn_warehouses?: string | null;
  msdyn_workorderproduct_bind$msdyn_workorderproducts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_inventoryjournal_Create extends msdyn_inventoryjournal {
}
interface msdyn_inventoryjournal_Update extends msdyn_inventoryjournal {
}
interface msdyn_inventoryjournal_Select {
  createdby_guid: WebAttribute<msdyn_inventoryjournal_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_inventoryjournal_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_inventoryjournal_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_inventoryjournal_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_inventoryjournal_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_inventoryjournal_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_inventoryjournal_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_allocatedtoworkorder_guid: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_allocatedtoworkorder_guid: string | null }, { msdyn_allocatedtoworkorder_formatted?: string }>;
  msdyn_internalflags: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_inventoryadjustmentproduct_guid: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_inventoryadjustmentproduct_guid: string | null }, { msdyn_inventoryadjustmentproduct_formatted?: string }>;
  msdyn_inventoryjournalid: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_inventoryjournalid: string | null }, {  }>;
  msdyn_journaltype: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_journaltype: msdyn_inventoryjournaltype | null }, { msdyn_journaltype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_name: string | null }, {  }>;
  msdyn_originatingjournal_guid: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_originatingjournal_guid: string | null }, { msdyn_originatingjournal_formatted?: string }>;
  msdyn_product_guid: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_product_guid: string | null }, { msdyn_product_formatted?: string }>;
  msdyn_purchaseorderproduct_guid: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_purchaseorderproduct_guid: string | null }, { msdyn_purchaseorderproduct_formatted?: string }>;
  msdyn_purchaseorderreceiptproduct_guid: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_purchaseorderreceiptproduct_guid: string | null }, { msdyn_purchaseorderreceiptproduct_formatted?: string }>;
  msdyn_quantity: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_quantity: number | null }, {  }>;
  msdyn_reversal: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_reversal: boolean | null }, {  }>;
  msdyn_rmareceiptproduct_guid: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_rmareceiptproduct_guid: string | null }, { msdyn_rmareceiptproduct_formatted?: string }>;
  msdyn_transactiontype: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_transactiontype: msdyn_inventorytransactiontype | null }, { msdyn_transactiontype_formatted?: string }>;
  msdyn_unit_guid: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_warehouse_guid: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_warehouse_guid: string | null }, { msdyn_warehouse_formatted?: string }>;
  msdyn_workorderproduct_guid: WebAttribute<msdyn_inventoryjournal_Select, { msdyn_workorderproduct_guid: string | null }, { msdyn_workorderproduct_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_inventoryjournal_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_inventoryjournal_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_inventoryjournal_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_inventoryjournal_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_inventoryjournal_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_inventoryjournal_Select, { statecode: msdyn_inventoryjournal_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_inventoryjournal_Select, { statuscode: msdyn_inventoryjournal_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_inventoryjournal_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_inventoryjournal_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_inventoryjournal_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_inventoryjournal_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_allocatedtoworkorder_guid: XQW.Guid;
  msdyn_internalflags: string;
  msdyn_inventoryadjustmentproduct_guid: XQW.Guid;
  msdyn_inventoryjournalid: XQW.Guid;
  msdyn_journaltype: msdyn_inventoryjournaltype;
  msdyn_name: string;
  msdyn_originatingjournal_guid: XQW.Guid;
  msdyn_product_guid: XQW.Guid;
  msdyn_purchaseorderproduct_guid: XQW.Guid;
  msdyn_purchaseorderreceiptproduct_guid: XQW.Guid;
  msdyn_quantity: number;
  msdyn_reversal: boolean;
  msdyn_rmareceiptproduct_guid: XQW.Guid;
  msdyn_transactiontype: msdyn_inventorytransactiontype;
  msdyn_unit_guid: XQW.Guid;
  msdyn_warehouse_guid: XQW.Guid;
  msdyn_workorderproduct_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_inventoryjournal_statecode;
  statuscode: msdyn_inventoryjournal_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_inventoryjournal_Expand {
  createdby: WebExpand<msdyn_inventoryjournal_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_inventoryjournal_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_inventoryjournal_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_inventoryjournal_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_allocatedtoworkorder: WebExpand<msdyn_inventoryjournal_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_allocatedtoworkorder: msdyn_workorder_Result }>;
  msdyn_inventoryadjustmentproduct: WebExpand<msdyn_inventoryjournal_Expand, msdyn_inventoryadjustmentproduct_Select, msdyn_inventoryadjustmentproduct_Filter, { msdyn_inventoryadjustmentproduct: msdyn_inventoryadjustmentproduct_Result }>;
  msdyn_inventoryjournal_ActivityPointers: WebExpand<msdyn_inventoryjournal_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_inventoryjournal_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_inventoryjournal_Annotations: WebExpand<msdyn_inventoryjournal_Expand, Annotation_Select, Annotation_Filter, { msdyn_inventoryjournal_Annotations: Annotation_Result[] }>;
  msdyn_inventoryjournal_Appointments: WebExpand<msdyn_inventoryjournal_Expand, Appointment_Select, Appointment_Filter, { msdyn_inventoryjournal_Appointments: Appointment_Result[] }>;
  msdyn_inventoryjournal_AsyncOperations: WebExpand<msdyn_inventoryjournal_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_inventoryjournal_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_inventoryjournal_BulkDeleteFailures: WebExpand<msdyn_inventoryjournal_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_inventoryjournal_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_inventoryjournal_DuplicateBaseRecord: WebExpand<msdyn_inventoryjournal_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inventoryjournal_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_inventoryjournal_DuplicateMatchingRecord: WebExpand<msdyn_inventoryjournal_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_inventoryjournal_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_inventoryjournal_Emails: WebExpand<msdyn_inventoryjournal_Expand, Email_Select, Email_Filter, { msdyn_inventoryjournal_Emails: Email_Result[] }>;
  msdyn_inventoryjournal_Faxes: WebExpand<msdyn_inventoryjournal_Expand, Fax_Select, Fax_Filter, { msdyn_inventoryjournal_Faxes: Fax_Result[] }>;
  msdyn_inventoryjournal_Letters: WebExpand<msdyn_inventoryjournal_Expand, Letter_Select, Letter_Filter, { msdyn_inventoryjournal_Letters: Letter_Result[] }>;
  msdyn_inventoryjournal_MailboxTrackingFolders: WebExpand<msdyn_inventoryjournal_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_inventoryjournal_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_inventoryjournal_PhoneCalls: WebExpand<msdyn_inventoryjournal_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_inventoryjournal_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_inventoryjournal_PrincipalObjectAttributeAccesses: WebExpand<msdyn_inventoryjournal_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_inventoryjournal_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_inventoryjournal_ProcessSession: WebExpand<msdyn_inventoryjournal_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_inventoryjournal_ProcessSession: ProcessSession_Result[] }>;
  msdyn_inventoryjournal_RecurringAppointmentMasters: WebExpand<msdyn_inventoryjournal_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_inventoryjournal_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_inventoryjournal_ServiceAppointments: WebExpand<msdyn_inventoryjournal_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_inventoryjournal_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_inventoryjournal_SocialActivities: WebExpand<msdyn_inventoryjournal_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_inventoryjournal_SocialActivities: SocialActivity_Result[] }>;
  msdyn_inventoryjournal_SyncErrors: WebExpand<msdyn_inventoryjournal_Expand, SyncError_Select, SyncError_Filter, { msdyn_inventoryjournal_SyncErrors: SyncError_Result[] }>;
  msdyn_inventoryjournal_Tasks: WebExpand<msdyn_inventoryjournal_Expand, Task_Select, Task_Filter, { msdyn_inventoryjournal_Tasks: Task_Result[] }>;
  msdyn_inventoryjournal_UserEntityInstanceDatas: WebExpand<msdyn_inventoryjournal_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_inventoryjournal_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_inventoryjournal_connections1: WebExpand<msdyn_inventoryjournal_Expand, Connection_Select, Connection_Filter, { msdyn_inventoryjournal_connections1: Connection_Result[] }>;
  msdyn_inventoryjournal_connections2: WebExpand<msdyn_inventoryjournal_Expand, Connection_Select, Connection_Filter, { msdyn_inventoryjournal_connections2: Connection_Result[] }>;
  msdyn_inventoryjournal_msdyn_approvals: WebExpand<msdyn_inventoryjournal_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_inventoryjournal_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_inventoryjournal_msdyn_bookingalerts: WebExpand<msdyn_inventoryjournal_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_inventoryjournal_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_inventoryjournal_msdyn_ocliveworkitems: WebExpand<msdyn_inventoryjournal_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_inventoryjournal_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_inventoryjournal_msdyn_ocoutboundmessages: WebExpand<msdyn_inventoryjournal_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_inventoryjournal_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_inventoryjournal_msdyn_ocsessions: WebExpand<msdyn_inventoryjournal_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_inventoryjournal_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_inventoryjournal_msfp_alerts: WebExpand<msdyn_inventoryjournal_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_inventoryjournal_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_inventoryjournal_msfp_surveyinvites: WebExpand<msdyn_inventoryjournal_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_inventoryjournal_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_inventoryjournal_msfp_surveyresponses: WebExpand<msdyn_inventoryjournal_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_inventoryjournal_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal: WebExpand<msdyn_inventoryjournal_Expand, msdyn_inventoryjournal_Select, msdyn_inventoryjournal_Filter, { msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal: msdyn_inventoryjournal_Result[] }>;
  msdyn_originatingjournal_msdyn_inventoryjournal: WebExpand<msdyn_inventoryjournal_Expand, msdyn_inventoryjournal_Select, msdyn_inventoryjournal_Filter, { msdyn_originatingjournal_msdyn_inventoryjournal: msdyn_inventoryjournal_Result }>;
  msdyn_product: WebExpand<msdyn_inventoryjournal_Expand, Product_Select, Product_Filter, { msdyn_product: Product_Result }>;
  msdyn_purchaseorderproduct: WebExpand<msdyn_inventoryjournal_Expand, msdyn_purchaseorderproduct_Select, msdyn_purchaseorderproduct_Filter, { msdyn_purchaseorderproduct: msdyn_purchaseorderproduct_Result }>;
  msdyn_purchaseorderreceiptproduct: WebExpand<msdyn_inventoryjournal_Expand, msdyn_purchaseorderreceiptproduct_Select, msdyn_purchaseorderreceiptproduct_Filter, { msdyn_purchaseorderreceiptproduct: msdyn_purchaseorderreceiptproduct_Result }>;
  msdyn_rmareceiptproduct: WebExpand<msdyn_inventoryjournal_Expand, msdyn_rmareceiptproduct_Select, msdyn_rmareceiptproduct_Filter, { msdyn_rmareceiptproduct: msdyn_rmareceiptproduct_Result }>;
  msdyn_unit: WebExpand<msdyn_inventoryjournal_Expand, UoM_Select, UoM_Filter, { msdyn_unit: UoM_Result }>;
  msdyn_warehouse: WebExpand<msdyn_inventoryjournal_Expand, msdyn_warehouse_Select, msdyn_warehouse_Filter, { msdyn_warehouse: msdyn_warehouse_Result }>;
  msdyn_workorderproduct: WebExpand<msdyn_inventoryjournal_Expand, msdyn_workorderproduct_Select, msdyn_workorderproduct_Filter, { msdyn_workorderproduct: msdyn_workorderproduct_Result }>;
  ownerid: WebExpand<msdyn_inventoryjournal_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_inventoryjournal_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_inventoryjournal_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_inventoryjournal_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_inventoryjournal_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_allocatedtoworkorder_formatted?: string;
  msdyn_inventoryadjustmentproduct_formatted?: string;
  msdyn_journaltype_formatted?: string;
  msdyn_originatingjournal_formatted?: string;
  msdyn_product_formatted?: string;
  msdyn_purchaseorderproduct_formatted?: string;
  msdyn_purchaseorderreceiptproduct_formatted?: string;
  msdyn_rmareceiptproduct_formatted?: string;
  msdyn_transactiontype_formatted?: string;
  msdyn_unit_formatted?: string;
  msdyn_warehouse_formatted?: string;
  msdyn_workorderproduct_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_inventoryjournal_Result extends msdyn_inventoryjournal_Base, msdyn_inventoryjournal_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_allocatedtoworkorder_guid: string | null;
  msdyn_inventoryadjustmentproduct_guid: string | null;
  msdyn_originatingjournal_guid: string | null;
  msdyn_product_guid: string | null;
  msdyn_purchaseorderproduct_guid: string | null;
  msdyn_purchaseorderreceiptproduct_guid: string | null;
  msdyn_rmareceiptproduct_guid: string | null;
  msdyn_unit_guid: string | null;
  msdyn_warehouse_guid: string | null;
  msdyn_workorderproduct_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_inventoryjournal_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_allocatedtoworkorder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_inventoryadjustmentproduct: WebMappingRetrieve<msdyn_inventoryadjustmentproduct_Select,msdyn_inventoryadjustmentproduct_Expand,msdyn_inventoryadjustmentproduct_Filter,msdyn_inventoryadjustmentproduct_Fixed,msdyn_inventoryadjustmentproduct_Result,msdyn_inventoryadjustmentproduct_FormattedResult>;
  msdyn_originatingjournal_msdyn_inventoryjournal: WebMappingRetrieve<msdyn_inventoryjournal_Select,msdyn_inventoryjournal_Expand,msdyn_inventoryjournal_Filter,msdyn_inventoryjournal_Fixed,msdyn_inventoryjournal_Result,msdyn_inventoryjournal_FormattedResult>;
  msdyn_product: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  msdyn_purchaseorderproduct: WebMappingRetrieve<msdyn_purchaseorderproduct_Select,msdyn_purchaseorderproduct_Expand,msdyn_purchaseorderproduct_Filter,msdyn_purchaseorderproduct_Fixed,msdyn_purchaseorderproduct_Result,msdyn_purchaseorderproduct_FormattedResult>;
  msdyn_purchaseorderreceiptproduct: WebMappingRetrieve<msdyn_purchaseorderreceiptproduct_Select,msdyn_purchaseorderreceiptproduct_Expand,msdyn_purchaseorderreceiptproduct_Filter,msdyn_purchaseorderreceiptproduct_Fixed,msdyn_purchaseorderreceiptproduct_Result,msdyn_purchaseorderreceiptproduct_FormattedResult>;
  msdyn_rmareceiptproduct: WebMappingRetrieve<msdyn_rmareceiptproduct_Select,msdyn_rmareceiptproduct_Expand,msdyn_rmareceiptproduct_Filter,msdyn_rmareceiptproduct_Fixed,msdyn_rmareceiptproduct_Result,msdyn_rmareceiptproduct_FormattedResult>;
  msdyn_unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  msdyn_warehouse: WebMappingRetrieve<msdyn_warehouse_Select,msdyn_warehouse_Expand,msdyn_warehouse_Filter,msdyn_warehouse_Fixed,msdyn_warehouse_Result,msdyn_warehouse_FormattedResult>;
  msdyn_workorderproduct: WebMappingRetrieve<msdyn_workorderproduct_Select,msdyn_workorderproduct_Expand,msdyn_workorderproduct_Filter,msdyn_workorderproduct_Fixed,msdyn_workorderproduct_Result,msdyn_workorderproduct_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_inventoryjournal_RelatedMany {
  msdyn_inventoryjournal_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_inventoryjournal_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_inventoryjournal_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_inventoryjournal_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_inventoryjournal_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_inventoryjournal_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inventoryjournal_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_inventoryjournal_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_inventoryjournal_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_inventoryjournal_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_inventoryjournal_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_inventoryjournal_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_inventoryjournal_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_inventoryjournal_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_inventoryjournal_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_inventoryjournal_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_inventoryjournal_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_inventoryjournal_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_inventoryjournal_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_inventoryjournal_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_inventoryjournal_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_inventoryjournal_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_inventoryjournal_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_inventoryjournal_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_inventoryjournal_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_inventoryjournal_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_inventoryjournal_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_inventoryjournal_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_inventoryjournal_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_inventoryjournal_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  msdyn_msdyn_inventoryjournal_msdyn_inventoryjournal_OriginatingJournal: WebMappingRetrieve<msdyn_inventoryjournal_Select,msdyn_inventoryjournal_Expand,msdyn_inventoryjournal_Filter,msdyn_inventoryjournal_Fixed,msdyn_inventoryjournal_Result,msdyn_inventoryjournal_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_inventoryjournals: WebMappingRetrieve<msdyn_inventoryjournal_Select,msdyn_inventoryjournal_Expand,msdyn_inventoryjournal_Filter,msdyn_inventoryjournal_Fixed,msdyn_inventoryjournal_Result,msdyn_inventoryjournal_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_inventoryjournals: WebMappingRelated<msdyn_inventoryjournal_RelatedOne,msdyn_inventoryjournal_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_inventoryjournals: WebMappingCUDA<msdyn_inventoryjournal_Create,msdyn_inventoryjournal_Update,msdyn_inventoryjournal_Select>;
}
