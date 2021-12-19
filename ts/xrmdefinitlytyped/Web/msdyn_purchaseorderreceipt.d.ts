interface msdyn_purchaseorderreceipt_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_datereceived?: Date | null;
  msdyn_name?: string | null;
  msdyn_note?: string | null;
  msdyn_purchaseorderreceiptid?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: msdyn_purchaseorderreceipt_statecode | null;
  statuscode?: msdyn_purchaseorderreceipt_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_purchaseorderreceipt_Relationships {
  bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799?: msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Result[] | null;
  msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt?: msdyn_purchaseorderreceiptproduct_Result[] | null;
  msdyn_purchaseorderreceipt_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_purchaseorderreceipt_Annotations?: Annotation_Result[] | null;
  msdyn_purchaseorderreceipt_Appointments?: Appointment_Result[] | null;
  msdyn_purchaseorderreceipt_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_purchaseorderreceipt_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_purchaseorderreceipt_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_purchaseorderreceipt_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_purchaseorderreceipt_Emails?: Email_Result[] | null;
  msdyn_purchaseorderreceipt_Faxes?: Fax_Result[] | null;
  msdyn_purchaseorderreceipt_Letters?: Letter_Result[] | null;
  msdyn_purchaseorderreceipt_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_purchaseorderreceipt_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_purchaseorderreceipt_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_purchaseorderreceipt_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_purchaseorderreceipt_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_purchaseorderreceipt_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_purchaseorderreceipt_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_purchaseorderreceipt_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_purchaseorderreceipt_SyncErrors?: SyncError_Result[] | null;
  msdyn_purchaseorderreceipt_Tasks?: Task_Result[] | null;
  msdyn_purchaseorderreceipt_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_purchaseorderreceipt_connections1?: Connection_Result[] | null;
  msdyn_purchaseorderreceipt_connections2?: Connection_Result[] | null;
  msdyn_purchaseorderreceipt_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_purchaseorderreceipt_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_purchaseorderreceipt_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_purchaseorderreceipt_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_purchaseorderreceipt_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_purchaseorderreceipt_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_purchaseorderreceipt_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_purchaseorderreceipt extends msdyn_purchaseorderreceipt_Base, msdyn_purchaseorderreceipt_Relationships {
  msdyn_purchaseorder_bind$msdyn_purchaseorders?: string | null;
  msdyn_receivedby_bind$systemusers?: string | null;
  msdyn_shipvia_bind$msdyn_shipvias?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
}
interface msdyn_purchaseorderreceipt_Create extends msdyn_purchaseorderreceipt {
}
interface msdyn_purchaseorderreceipt_Update extends msdyn_purchaseorderreceipt {
}
interface msdyn_purchaseorderreceipt_Select {
  createdby_guid: WebAttribute<msdyn_purchaseorderreceipt_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_purchaseorderreceipt_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_purchaseorderreceipt_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_purchaseorderreceipt_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_purchaseorderreceipt_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_purchaseorderreceipt_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_purchaseorderreceipt_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_datereceived: WebAttribute<msdyn_purchaseorderreceipt_Select, { msdyn_datereceived: Date | null }, { msdyn_datereceived_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_purchaseorderreceipt_Select, { msdyn_name: string | null }, {  }>;
  msdyn_note: WebAttribute<msdyn_purchaseorderreceipt_Select, { msdyn_note: string | null }, {  }>;
  msdyn_purchaseorder_guid: WebAttribute<msdyn_purchaseorderreceipt_Select, { msdyn_purchaseorder_guid: string | null }, { msdyn_purchaseorder_formatted?: string }>;
  msdyn_purchaseorderreceiptid: WebAttribute<msdyn_purchaseorderreceipt_Select, { msdyn_purchaseorderreceiptid: string | null }, {  }>;
  msdyn_receivedby_guid: WebAttribute<msdyn_purchaseorderreceipt_Select, { msdyn_receivedby_guid: string | null }, { msdyn_receivedby_formatted?: string }>;
  msdyn_shipvia_guid: WebAttribute<msdyn_purchaseorderreceipt_Select, { msdyn_shipvia_guid: string | null }, { msdyn_shipvia_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_purchaseorderreceipt_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_purchaseorderreceipt_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_purchaseorderreceipt_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_purchaseorderreceipt_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_purchaseorderreceipt_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<msdyn_purchaseorderreceipt_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<msdyn_purchaseorderreceipt_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_purchaseorderreceipt_Select, { statecode: msdyn_purchaseorderreceipt_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_purchaseorderreceipt_Select, { statuscode: msdyn_purchaseorderreceipt_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_purchaseorderreceipt_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<msdyn_purchaseorderreceipt_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_purchaseorderreceipt_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_purchaseorderreceipt_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_purchaseorderreceipt_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_datereceived: Date;
  msdyn_name: string;
  msdyn_note: string;
  msdyn_purchaseorder_guid: XQW.Guid;
  msdyn_purchaseorderreceiptid: XQW.Guid;
  msdyn_receivedby_guid: XQW.Guid;
  msdyn_shipvia_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: msdyn_purchaseorderreceipt_statecode;
  statuscode: msdyn_purchaseorderreceipt_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_purchaseorderreceipt_Expand {
  bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: WebExpand<msdyn_purchaseorderreceipt_Expand, msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Select, msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Filter, { bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Result[] }>;
  createdby: WebExpand<msdyn_purchaseorderreceipt_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_purchaseorderreceipt_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_purchaseorderreceipt_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_purchaseorderreceipt_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt: WebExpand<msdyn_purchaseorderreceipt_Expand, msdyn_purchaseorderreceiptproduct_Select, msdyn_purchaseorderreceiptproduct_Filter, { msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt: msdyn_purchaseorderreceiptproduct_Result[] }>;
  msdyn_purchaseorder: WebExpand<msdyn_purchaseorderreceipt_Expand, msdyn_purchaseorder_Select, msdyn_purchaseorder_Filter, { msdyn_purchaseorder: msdyn_purchaseorder_Result }>;
  msdyn_purchaseorderreceipt_ActivityPointers: WebExpand<msdyn_purchaseorderreceipt_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_purchaseorderreceipt_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_purchaseorderreceipt_Annotations: WebExpand<msdyn_purchaseorderreceipt_Expand, Annotation_Select, Annotation_Filter, { msdyn_purchaseorderreceipt_Annotations: Annotation_Result[] }>;
  msdyn_purchaseorderreceipt_Appointments: WebExpand<msdyn_purchaseorderreceipt_Expand, Appointment_Select, Appointment_Filter, { msdyn_purchaseorderreceipt_Appointments: Appointment_Result[] }>;
  msdyn_purchaseorderreceipt_AsyncOperations: WebExpand<msdyn_purchaseorderreceipt_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_purchaseorderreceipt_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_purchaseorderreceipt_BulkDeleteFailures: WebExpand<msdyn_purchaseorderreceipt_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_purchaseorderreceipt_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_purchaseorderreceipt_DuplicateBaseRecord: WebExpand<msdyn_purchaseorderreceipt_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_purchaseorderreceipt_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_purchaseorderreceipt_DuplicateMatchingRecord: WebExpand<msdyn_purchaseorderreceipt_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_purchaseorderreceipt_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_purchaseorderreceipt_Emails: WebExpand<msdyn_purchaseorderreceipt_Expand, Email_Select, Email_Filter, { msdyn_purchaseorderreceipt_Emails: Email_Result[] }>;
  msdyn_purchaseorderreceipt_Faxes: WebExpand<msdyn_purchaseorderreceipt_Expand, Fax_Select, Fax_Filter, { msdyn_purchaseorderreceipt_Faxes: Fax_Result[] }>;
  msdyn_purchaseorderreceipt_Letters: WebExpand<msdyn_purchaseorderreceipt_Expand, Letter_Select, Letter_Filter, { msdyn_purchaseorderreceipt_Letters: Letter_Result[] }>;
  msdyn_purchaseorderreceipt_MailboxTrackingFolders: WebExpand<msdyn_purchaseorderreceipt_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_purchaseorderreceipt_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_purchaseorderreceipt_PhoneCalls: WebExpand<msdyn_purchaseorderreceipt_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_purchaseorderreceipt_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses: WebExpand<msdyn_purchaseorderreceipt_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_purchaseorderreceipt_ProcessSession: WebExpand<msdyn_purchaseorderreceipt_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_purchaseorderreceipt_ProcessSession: ProcessSession_Result[] }>;
  msdyn_purchaseorderreceipt_RecurringAppointmentMasters: WebExpand<msdyn_purchaseorderreceipt_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_purchaseorderreceipt_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_purchaseorderreceipt_ServiceAppointments: WebExpand<msdyn_purchaseorderreceipt_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_purchaseorderreceipt_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_purchaseorderreceipt_SharePointDocumentLocations: WebExpand<msdyn_purchaseorderreceipt_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_purchaseorderreceipt_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_purchaseorderreceipt_SharePointDocuments: WebExpand<msdyn_purchaseorderreceipt_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_purchaseorderreceipt_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_purchaseorderreceipt_SocialActivities: WebExpand<msdyn_purchaseorderreceipt_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_purchaseorderreceipt_SocialActivities: SocialActivity_Result[] }>;
  msdyn_purchaseorderreceipt_SyncErrors: WebExpand<msdyn_purchaseorderreceipt_Expand, SyncError_Select, SyncError_Filter, { msdyn_purchaseorderreceipt_SyncErrors: SyncError_Result[] }>;
  msdyn_purchaseorderreceipt_Tasks: WebExpand<msdyn_purchaseorderreceipt_Expand, Task_Select, Task_Filter, { msdyn_purchaseorderreceipt_Tasks: Task_Result[] }>;
  msdyn_purchaseorderreceipt_UserEntityInstanceDatas: WebExpand<msdyn_purchaseorderreceipt_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_purchaseorderreceipt_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_purchaseorderreceipt_connections1: WebExpand<msdyn_purchaseorderreceipt_Expand, Connection_Select, Connection_Filter, { msdyn_purchaseorderreceipt_connections1: Connection_Result[] }>;
  msdyn_purchaseorderreceipt_connections2: WebExpand<msdyn_purchaseorderreceipt_Expand, Connection_Select, Connection_Filter, { msdyn_purchaseorderreceipt_connections2: Connection_Result[] }>;
  msdyn_purchaseorderreceipt_msdyn_approvals: WebExpand<msdyn_purchaseorderreceipt_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_purchaseorderreceipt_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_purchaseorderreceipt_msdyn_bookingalerts: WebExpand<msdyn_purchaseorderreceipt_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_purchaseorderreceipt_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_purchaseorderreceipt_msdyn_ocliveworkitems: WebExpand<msdyn_purchaseorderreceipt_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_purchaseorderreceipt_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages: WebExpand<msdyn_purchaseorderreceipt_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_purchaseorderreceipt_msdyn_ocsessions: WebExpand<msdyn_purchaseorderreceipt_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_purchaseorderreceipt_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_purchaseorderreceipt_msfp_alerts: WebExpand<msdyn_purchaseorderreceipt_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_purchaseorderreceipt_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_purchaseorderreceipt_msfp_surveyinvites: WebExpand<msdyn_purchaseorderreceipt_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_purchaseorderreceipt_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_purchaseorderreceipt_msfp_surveyresponses: WebExpand<msdyn_purchaseorderreceipt_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_purchaseorderreceipt_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_receivedby: WebExpand<msdyn_purchaseorderreceipt_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_receivedby: SystemUser_Result }>;
  msdyn_shipvia: WebExpand<msdyn_purchaseorderreceipt_Expand, msdyn_shipvia_Select, msdyn_shipvia_Filter, { msdyn_shipvia: msdyn_shipvia_Result }>;
  ownerid: WebExpand<msdyn_purchaseorderreceipt_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_purchaseorderreceipt_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_purchaseorderreceipt_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_purchaseorderreceipt_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<msdyn_purchaseorderreceipt_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
}
interface msdyn_purchaseorderreceipt_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_datereceived_formatted?: string;
  msdyn_purchaseorder_formatted?: string;
  msdyn_receivedby_formatted?: string;
  msdyn_shipvia_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_purchaseorderreceipt_Result extends msdyn_purchaseorderreceipt_Base, msdyn_purchaseorderreceipt_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_purchaseorder_guid: string | null;
  msdyn_receivedby_guid: string | null;
  msdyn_shipvia_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_purchaseorderreceipt_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_purchaseorder: WebMappingRetrieve<msdyn_purchaseorder_Select,msdyn_purchaseorder_Expand,msdyn_purchaseorder_Filter,msdyn_purchaseorder_Fixed,msdyn_purchaseorder_Result,msdyn_purchaseorder_FormattedResult>;
  msdyn_receivedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_shipvia: WebMappingRetrieve<msdyn_shipvia_Select,msdyn_shipvia_Expand,msdyn_shipvia_Filter,msdyn_shipvia_Fixed,msdyn_shipvia_Result,msdyn_shipvia_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
}
interface msdyn_purchaseorderreceipt_RelatedMany {
  bpf_msdyn_purchaseorderreceipt_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: WebMappingRetrieve<msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Select,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Expand,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Filter,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Fixed,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Result,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_FormattedResult>;
  msdyn_msdyn_purchaseorderreceipt_msdyn_purchaseorderreceiptproduct_PurchaseOrderReceipt: WebMappingRetrieve<msdyn_purchaseorderreceiptproduct_Select,msdyn_purchaseorderreceiptproduct_Expand,msdyn_purchaseorderreceiptproduct_Filter,msdyn_purchaseorderreceiptproduct_Fixed,msdyn_purchaseorderreceiptproduct_Result,msdyn_purchaseorderreceiptproduct_FormattedResult>;
  msdyn_purchaseorderreceipt_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_purchaseorderreceipt_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_purchaseorderreceipt_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_purchaseorderreceipt_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_purchaseorderreceipt_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_purchaseorderreceipt_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_purchaseorderreceipt_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_purchaseorderreceipt_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_purchaseorderreceipt_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_purchaseorderreceipt_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_purchaseorderreceipt_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_purchaseorderreceipt_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_purchaseorderreceipt_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_purchaseorderreceipt_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_purchaseorderreceipt_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_purchaseorderreceipt_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_purchaseorderreceipt_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_purchaseorderreceipt_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_purchaseorderreceipt_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_purchaseorderreceipt_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_purchaseorderreceipt_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_purchaseorderreceipt_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_purchaseorderreceipt_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_purchaseorderreceipt_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_purchaseorderreceipt_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_purchaseorderreceipt_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_purchaseorderreceipt_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_purchaseorderreceipt_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_purchaseorderreceipt_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_purchaseorderreceipt_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_purchaseorderreceipt_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_purchaseorderreceipt_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_purchaseorderreceipts: WebMappingRetrieve<msdyn_purchaseorderreceipt_Select,msdyn_purchaseorderreceipt_Expand,msdyn_purchaseorderreceipt_Filter,msdyn_purchaseorderreceipt_Fixed,msdyn_purchaseorderreceipt_Result,msdyn_purchaseorderreceipt_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_purchaseorderreceipts: WebMappingRelated<msdyn_purchaseorderreceipt_RelatedOne,msdyn_purchaseorderreceipt_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_purchaseorderreceipts: WebMappingCUDA<msdyn_purchaseorderreceipt_Create,msdyn_purchaseorderreceipt_Update,msdyn_purchaseorderreceipt_Select>;
}
