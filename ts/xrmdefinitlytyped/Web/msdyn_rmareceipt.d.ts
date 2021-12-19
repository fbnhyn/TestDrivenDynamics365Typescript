interface msdyn_rmareceipt_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_datereceived?: Date | null;
  msdyn_name?: string | null;
  msdyn_note?: string | null;
  msdyn_rmareceiptid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_rmareceipt_statecode | null;
  statuscode?: msdyn_rmareceipt_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_rmareceipt_Relationships {
  msdyn_msdyn_rmareceipt_msdyn_rmareceiptproduct_RMAReceipt?: msdyn_rmareceiptproduct_Result[] | null;
  msdyn_rmareceipt_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_rmareceipt_Annotations?: Annotation_Result[] | null;
  msdyn_rmareceipt_Appointments?: Appointment_Result[] | null;
  msdyn_rmareceipt_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_rmareceipt_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_rmareceipt_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_rmareceipt_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_rmareceipt_Emails?: Email_Result[] | null;
  msdyn_rmareceipt_Faxes?: Fax_Result[] | null;
  msdyn_rmareceipt_Letters?: Letter_Result[] | null;
  msdyn_rmareceipt_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_rmareceipt_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_rmareceipt_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_rmareceipt_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_rmareceipt_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_rmareceipt_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_rmareceipt_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_rmareceipt_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_rmareceipt_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_rmareceipt_SyncErrors?: SyncError_Result[] | null;
  msdyn_rmareceipt_Tasks?: Task_Result[] | null;
  msdyn_rmareceipt_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_rmareceipt_connections1?: Connection_Result[] | null;
  msdyn_rmareceipt_connections2?: Connection_Result[] | null;
  msdyn_rmareceipt_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_rmareceipt_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_rmareceipt_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_rmareceipt_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_rmareceipt_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_rmareceipt_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_rmareceipt_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_rmareceipt_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_rmareceipt extends msdyn_rmareceipt_Base, msdyn_rmareceipt_Relationships {
  msdyn_receivedby_bind$systemusers?: string | null;
  msdyn_rma_bind$msdyn_rmas?: string | null;
  msdyn_shipvia_bind$msdyn_shipvias?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_rmareceipt_Create extends msdyn_rmareceipt {
}
interface msdyn_rmareceipt_Update extends msdyn_rmareceipt {
}
interface msdyn_rmareceipt_Select {
  createdby_guid: WebAttribute<msdyn_rmareceipt_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_rmareceipt_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_rmareceipt_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_rmareceipt_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_rmareceipt_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_rmareceipt_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_rmareceipt_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_datereceived: WebAttribute<msdyn_rmareceipt_Select, { msdyn_datereceived: Date | null }, { msdyn_datereceived_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_rmareceipt_Select, { msdyn_name: string | null }, {  }>;
  msdyn_note: WebAttribute<msdyn_rmareceipt_Select, { msdyn_note: string | null }, {  }>;
  msdyn_receivedby_guid: WebAttribute<msdyn_rmareceipt_Select, { msdyn_receivedby_guid: string | null }, { msdyn_receivedby_formatted?: string }>;
  msdyn_rma_guid: WebAttribute<msdyn_rmareceipt_Select, { msdyn_rma_guid: string | null }, { msdyn_rma_formatted?: string }>;
  msdyn_rmareceiptid: WebAttribute<msdyn_rmareceipt_Select, { msdyn_rmareceiptid: string | null }, {  }>;
  msdyn_shipvia_guid: WebAttribute<msdyn_rmareceipt_Select, { msdyn_shipvia_guid: string | null }, { msdyn_shipvia_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_rmareceipt_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_rmareceipt_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_rmareceipt_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_rmareceipt_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_rmareceipt_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_rmareceipt_Select, { statecode: msdyn_rmareceipt_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_rmareceipt_Select, { statuscode: msdyn_rmareceipt_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_rmareceipt_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_rmareceipt_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_rmareceipt_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_rmareceipt_Filter {
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
  msdyn_receivedby_guid: XQW.Guid;
  msdyn_rma_guid: XQW.Guid;
  msdyn_rmareceiptid: XQW.Guid;
  msdyn_shipvia_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_rmareceipt_statecode;
  statuscode: msdyn_rmareceipt_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_rmareceipt_Expand {
  createdby: WebExpand<msdyn_rmareceipt_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_rmareceipt_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_rmareceipt_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_rmareceipt_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_rmareceipt_msdyn_rmareceiptproduct_RMAReceipt: WebExpand<msdyn_rmareceipt_Expand, msdyn_rmareceiptproduct_Select, msdyn_rmareceiptproduct_Filter, { msdyn_msdyn_rmareceipt_msdyn_rmareceiptproduct_RMAReceipt: msdyn_rmareceiptproduct_Result[] }>;
  msdyn_receivedby: WebExpand<msdyn_rmareceipt_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_receivedby: SystemUser_Result }>;
  msdyn_rma: WebExpand<msdyn_rmareceipt_Expand, msdyn_rma_Select, msdyn_rma_Filter, { msdyn_rma: msdyn_rma_Result }>;
  msdyn_rmareceipt_ActivityPointers: WebExpand<msdyn_rmareceipt_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_rmareceipt_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_rmareceipt_Annotations: WebExpand<msdyn_rmareceipt_Expand, Annotation_Select, Annotation_Filter, { msdyn_rmareceipt_Annotations: Annotation_Result[] }>;
  msdyn_rmareceipt_Appointments: WebExpand<msdyn_rmareceipt_Expand, Appointment_Select, Appointment_Filter, { msdyn_rmareceipt_Appointments: Appointment_Result[] }>;
  msdyn_rmareceipt_AsyncOperations: WebExpand<msdyn_rmareceipt_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_rmareceipt_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_rmareceipt_BulkDeleteFailures: WebExpand<msdyn_rmareceipt_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_rmareceipt_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_rmareceipt_DuplicateBaseRecord: WebExpand<msdyn_rmareceipt_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_rmareceipt_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_rmareceipt_DuplicateMatchingRecord: WebExpand<msdyn_rmareceipt_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_rmareceipt_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_rmareceipt_Emails: WebExpand<msdyn_rmareceipt_Expand, Email_Select, Email_Filter, { msdyn_rmareceipt_Emails: Email_Result[] }>;
  msdyn_rmareceipt_Faxes: WebExpand<msdyn_rmareceipt_Expand, Fax_Select, Fax_Filter, { msdyn_rmareceipt_Faxes: Fax_Result[] }>;
  msdyn_rmareceipt_Letters: WebExpand<msdyn_rmareceipt_Expand, Letter_Select, Letter_Filter, { msdyn_rmareceipt_Letters: Letter_Result[] }>;
  msdyn_rmareceipt_MailboxTrackingFolders: WebExpand<msdyn_rmareceipt_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_rmareceipt_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_rmareceipt_PhoneCalls: WebExpand<msdyn_rmareceipt_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_rmareceipt_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_rmareceipt_PrincipalObjectAttributeAccesses: WebExpand<msdyn_rmareceipt_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_rmareceipt_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_rmareceipt_ProcessSession: WebExpand<msdyn_rmareceipt_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_rmareceipt_ProcessSession: ProcessSession_Result[] }>;
  msdyn_rmareceipt_RecurringAppointmentMasters: WebExpand<msdyn_rmareceipt_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_rmareceipt_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_rmareceipt_ServiceAppointments: WebExpand<msdyn_rmareceipt_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_rmareceipt_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_rmareceipt_SharePointDocumentLocations: WebExpand<msdyn_rmareceipt_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_rmareceipt_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_rmareceipt_SharePointDocuments: WebExpand<msdyn_rmareceipt_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_rmareceipt_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_rmareceipt_SocialActivities: WebExpand<msdyn_rmareceipt_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_rmareceipt_SocialActivities: SocialActivity_Result[] }>;
  msdyn_rmareceipt_SyncErrors: WebExpand<msdyn_rmareceipt_Expand, SyncError_Select, SyncError_Filter, { msdyn_rmareceipt_SyncErrors: SyncError_Result[] }>;
  msdyn_rmareceipt_Tasks: WebExpand<msdyn_rmareceipt_Expand, Task_Select, Task_Filter, { msdyn_rmareceipt_Tasks: Task_Result[] }>;
  msdyn_rmareceipt_UserEntityInstanceDatas: WebExpand<msdyn_rmareceipt_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_rmareceipt_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_rmareceipt_connections1: WebExpand<msdyn_rmareceipt_Expand, Connection_Select, Connection_Filter, { msdyn_rmareceipt_connections1: Connection_Result[] }>;
  msdyn_rmareceipt_connections2: WebExpand<msdyn_rmareceipt_Expand, Connection_Select, Connection_Filter, { msdyn_rmareceipt_connections2: Connection_Result[] }>;
  msdyn_rmareceipt_msdyn_approvals: WebExpand<msdyn_rmareceipt_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_rmareceipt_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_rmareceipt_msdyn_bookingalerts: WebExpand<msdyn_rmareceipt_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_rmareceipt_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_rmareceipt_msdyn_ocliveworkitems: WebExpand<msdyn_rmareceipt_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_rmareceipt_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_rmareceipt_msdyn_ocoutboundmessages: WebExpand<msdyn_rmareceipt_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_rmareceipt_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_rmareceipt_msdyn_ocsessions: WebExpand<msdyn_rmareceipt_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_rmareceipt_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_rmareceipt_msfp_alerts: WebExpand<msdyn_rmareceipt_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_rmareceipt_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_rmareceipt_msfp_surveyinvites: WebExpand<msdyn_rmareceipt_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_rmareceipt_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_rmareceipt_msfp_surveyresponses: WebExpand<msdyn_rmareceipt_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_rmareceipt_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_shipvia: WebExpand<msdyn_rmareceipt_Expand, msdyn_shipvia_Select, msdyn_shipvia_Filter, { msdyn_shipvia: msdyn_shipvia_Result }>;
  ownerid: WebExpand<msdyn_rmareceipt_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_rmareceipt_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_rmareceipt_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_rmareceipt_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_rmareceipt_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_datereceived_formatted?: string;
  msdyn_receivedby_formatted?: string;
  msdyn_rma_formatted?: string;
  msdyn_shipvia_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_rmareceipt_Result extends msdyn_rmareceipt_Base, msdyn_rmareceipt_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_receivedby_guid: string | null;
  msdyn_rma_guid: string | null;
  msdyn_shipvia_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_rmareceipt_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_receivedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_rma: WebMappingRetrieve<msdyn_rma_Select,msdyn_rma_Expand,msdyn_rma_Filter,msdyn_rma_Fixed,msdyn_rma_Result,msdyn_rma_FormattedResult>;
  msdyn_shipvia: WebMappingRetrieve<msdyn_shipvia_Select,msdyn_shipvia_Expand,msdyn_shipvia_Filter,msdyn_shipvia_Fixed,msdyn_shipvia_Result,msdyn_shipvia_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_rmareceipt_RelatedMany {
  msdyn_msdyn_rmareceipt_msdyn_rmareceiptproduct_RMAReceipt: WebMappingRetrieve<msdyn_rmareceiptproduct_Select,msdyn_rmareceiptproduct_Expand,msdyn_rmareceiptproduct_Filter,msdyn_rmareceiptproduct_Fixed,msdyn_rmareceiptproduct_Result,msdyn_rmareceiptproduct_FormattedResult>;
  msdyn_rmareceipt_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_rmareceipt_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_rmareceipt_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_rmareceipt_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_rmareceipt_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_rmareceipt_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_rmareceipt_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_rmareceipt_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_rmareceipt_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_rmareceipt_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_rmareceipt_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_rmareceipt_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_rmareceipt_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_rmareceipt_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_rmareceipt_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_rmareceipt_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_rmareceipt_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_rmareceipt_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_rmareceipt_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_rmareceipt_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_rmareceipt_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_rmareceipt_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_rmareceipt_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_rmareceipt_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_rmareceipt_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_rmareceipt_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_rmareceipt_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_rmareceipt_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_rmareceipt_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_rmareceipt_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_rmareceipt_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_rmareceipt_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_rmareceipts: WebMappingRetrieve<msdyn_rmareceipt_Select,msdyn_rmareceipt_Expand,msdyn_rmareceipt_Filter,msdyn_rmareceipt_Fixed,msdyn_rmareceipt_Result,msdyn_rmareceipt_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_rmareceipts: WebMappingRelated<msdyn_rmareceipt_RelatedOne,msdyn_rmareceipt_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_rmareceipts: WebMappingCUDA<msdyn_rmareceipt_Create,msdyn_rmareceipt_Update,msdyn_rmareceipt_Select>;
}
