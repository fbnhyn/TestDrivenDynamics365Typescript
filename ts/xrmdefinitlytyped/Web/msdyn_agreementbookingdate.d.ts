interface msdyn_agreementbookingdate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_agreementbookingdateid?: string | null;
  msdyn_bookingdate?: Date | null;
  msdyn_earliestdate?: Date | null;
  msdyn_internalflags?: string | null;
  msdyn_latestdate?: Date | null;
  msdyn_name?: string | null;
  msdyn_postponegenerationuntil?: Date | null;
  msdyn_processstartedon?: Date | null;
  msdyn_revision?: number | null;
  msdyn_status?: msdyn_agreementbookingstatus | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_agreementbookingdate_statecode | null;
  statuscode?: msdyn_agreementbookingdate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_agreementbookingdate_Relationships {
  msdyn_agreementbookingdate_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_agreementbookingdate_Annotations?: Annotation_Result[] | null;
  msdyn_agreementbookingdate_Appointments?: Appointment_Result[] | null;
  msdyn_agreementbookingdate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_agreementbookingdate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_agreementbookingdate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementbookingdate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementbookingdate_Emails?: Email_Result[] | null;
  msdyn_agreementbookingdate_Faxes?: Fax_Result[] | null;
  msdyn_agreementbookingdate_Letters?: Letter_Result[] | null;
  msdyn_agreementbookingdate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_agreementbookingdate_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_agreementbookingdate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_agreementbookingdate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_agreementbookingdate_QueueItems?: QueueItem_Result[] | null;
  msdyn_agreementbookingdate_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_agreementbookingdate_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_agreementbookingdate_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_agreementbookingdate_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_agreementbookingdate_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_agreementbookingdate_SyncErrors?: SyncError_Result[] | null;
  msdyn_agreementbookingdate_Tasks?: Task_Result[] | null;
  msdyn_agreementbookingdate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_agreementbookingdate_connections1?: Connection_Result[] | null;
  msdyn_agreementbookingdate_connections2?: Connection_Result[] | null;
  msdyn_agreementbookingdate_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_agreementbookingdate_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_agreementbookingdate_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_agreementbookingdate_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_agreementbookingdate_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_agreementbookingdate_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_agreementbookingdate_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_agreementbookingdate_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  msdyn_msdyn_agreementbookingdate_bookableresourcebooking_AgreementBookingDate?: BookableResourceBooking_Result[] | null;
  msdyn_msdyn_agreementbookingdate_msdyn_workorderdetailsgenerationqueue_AgreementBookingDate?: msdyn_workorderdetailsgenerationqueue_Result[] | null;
}
interface msdyn_agreementbookingdate extends msdyn_agreementbookingdate_Base, msdyn_agreementbookingdate_Relationships {
  msdyn_agreement_bind$msdyn_agreements?: string | null;
  msdyn_bookingsetup_bind$msdyn_agreementbookingsetups?: string | null;
  msdyn_resource_bind$bookableresources?: string | null;
  msdyn_workorder_bind$msdyn_workorders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_agreementbookingdate_Create extends msdyn_agreementbookingdate {
}
interface msdyn_agreementbookingdate_Update extends msdyn_agreementbookingdate {
}
interface msdyn_agreementbookingdate_Select {
  createdby_guid: WebAttribute<msdyn_agreementbookingdate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_agreementbookingdate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_agreementbookingdate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_agreementbookingdate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_agreementbookingdate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_agreementbookingdate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_agreementbookingdate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_agreement_guid: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_agreement_guid: string | null }, { msdyn_agreement_formatted?: string }>;
  msdyn_agreementbookingdateid: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_agreementbookingdateid: string | null }, {  }>;
  msdyn_bookingdate: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_bookingdate: Date | null }, { msdyn_bookingdate_formatted?: string }>;
  msdyn_bookingsetup_guid: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_bookingsetup_guid: string | null }, { msdyn_bookingsetup_formatted?: string }>;
  msdyn_earliestdate: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_earliestdate: Date | null }, { msdyn_earliestdate_formatted?: string }>;
  msdyn_internalflags: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_latestdate: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_latestdate: Date | null }, { msdyn_latestdate_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_postponegenerationuntil: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_postponegenerationuntil: Date | null }, { msdyn_postponegenerationuntil_formatted?: string }>;
  msdyn_processstartedon: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_processstartedon: Date | null }, { msdyn_processstartedon_formatted?: string }>;
  msdyn_resource_guid: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_resource_guid: string | null }, { msdyn_resource_formatted?: string }>;
  msdyn_revision: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_revision: number | null }, {  }>;
  msdyn_status: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_status: msdyn_agreementbookingstatus | null }, { msdyn_status_formatted?: string }>;
  msdyn_workorder_guid: WebAttribute<msdyn_agreementbookingdate_Select, { msdyn_workorder_guid: string | null }, { msdyn_workorder_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_agreementbookingdate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_agreementbookingdate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_agreementbookingdate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_agreementbookingdate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_agreementbookingdate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_agreementbookingdate_Select, { statecode: msdyn_agreementbookingdate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_agreementbookingdate_Select, { statuscode: msdyn_agreementbookingdate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_agreementbookingdate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_agreementbookingdate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_agreementbookingdate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_agreementbookingdate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_agreement_guid: XQW.Guid;
  msdyn_agreementbookingdateid: XQW.Guid;
  msdyn_bookingdate: Date;
  msdyn_bookingsetup_guid: XQW.Guid;
  msdyn_earliestdate: Date;
  msdyn_internalflags: string;
  msdyn_latestdate: Date;
  msdyn_name: string;
  msdyn_postponegenerationuntil: Date;
  msdyn_processstartedon: Date;
  msdyn_resource_guid: XQW.Guid;
  msdyn_revision: number;
  msdyn_status: msdyn_agreementbookingstatus;
  msdyn_workorder_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_agreementbookingdate_statecode;
  statuscode: msdyn_agreementbookingdate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_agreementbookingdate_Expand {
  createdby: WebExpand<msdyn_agreementbookingdate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_agreementbookingdate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_agreementbookingdate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_agreementbookingdate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_agreement: WebExpand<msdyn_agreementbookingdate_Expand, msdyn_agreement_Select, msdyn_agreement_Filter, { msdyn_agreement: msdyn_agreement_Result }>;
  msdyn_agreementbookingdate_ActivityPointers: WebExpand<msdyn_agreementbookingdate_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_agreementbookingdate_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_agreementbookingdate_Annotations: WebExpand<msdyn_agreementbookingdate_Expand, Annotation_Select, Annotation_Filter, { msdyn_agreementbookingdate_Annotations: Annotation_Result[] }>;
  msdyn_agreementbookingdate_Appointments: WebExpand<msdyn_agreementbookingdate_Expand, Appointment_Select, Appointment_Filter, { msdyn_agreementbookingdate_Appointments: Appointment_Result[] }>;
  msdyn_agreementbookingdate_AsyncOperations: WebExpand<msdyn_agreementbookingdate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_agreementbookingdate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_agreementbookingdate_BulkDeleteFailures: WebExpand<msdyn_agreementbookingdate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_agreementbookingdate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_agreementbookingdate_DuplicateBaseRecord: WebExpand<msdyn_agreementbookingdate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementbookingdate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementbookingdate_DuplicateMatchingRecord: WebExpand<msdyn_agreementbookingdate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementbookingdate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementbookingdate_Emails: WebExpand<msdyn_agreementbookingdate_Expand, Email_Select, Email_Filter, { msdyn_agreementbookingdate_Emails: Email_Result[] }>;
  msdyn_agreementbookingdate_Faxes: WebExpand<msdyn_agreementbookingdate_Expand, Fax_Select, Fax_Filter, { msdyn_agreementbookingdate_Faxes: Fax_Result[] }>;
  msdyn_agreementbookingdate_Letters: WebExpand<msdyn_agreementbookingdate_Expand, Letter_Select, Letter_Filter, { msdyn_agreementbookingdate_Letters: Letter_Result[] }>;
  msdyn_agreementbookingdate_MailboxTrackingFolders: WebExpand<msdyn_agreementbookingdate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_agreementbookingdate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_agreementbookingdate_PhoneCalls: WebExpand<msdyn_agreementbookingdate_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_agreementbookingdate_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_agreementbookingdate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_agreementbookingdate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_agreementbookingdate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_agreementbookingdate_ProcessSession: WebExpand<msdyn_agreementbookingdate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_agreementbookingdate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_agreementbookingdate_QueueItems: WebExpand<msdyn_agreementbookingdate_Expand, QueueItem_Select, QueueItem_Filter, { msdyn_agreementbookingdate_QueueItems: QueueItem_Result[] }>;
  msdyn_agreementbookingdate_RecurringAppointmentMasters: WebExpand<msdyn_agreementbookingdate_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_agreementbookingdate_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_agreementbookingdate_ServiceAppointments: WebExpand<msdyn_agreementbookingdate_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_agreementbookingdate_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_agreementbookingdate_SharePointDocumentLocations: WebExpand<msdyn_agreementbookingdate_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_agreementbookingdate_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_agreementbookingdate_SharePointDocuments: WebExpand<msdyn_agreementbookingdate_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_agreementbookingdate_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_agreementbookingdate_SocialActivities: WebExpand<msdyn_agreementbookingdate_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_agreementbookingdate_SocialActivities: SocialActivity_Result[] }>;
  msdyn_agreementbookingdate_SyncErrors: WebExpand<msdyn_agreementbookingdate_Expand, SyncError_Select, SyncError_Filter, { msdyn_agreementbookingdate_SyncErrors: SyncError_Result[] }>;
  msdyn_agreementbookingdate_Tasks: WebExpand<msdyn_agreementbookingdate_Expand, Task_Select, Task_Filter, { msdyn_agreementbookingdate_Tasks: Task_Result[] }>;
  msdyn_agreementbookingdate_UserEntityInstanceDatas: WebExpand<msdyn_agreementbookingdate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_agreementbookingdate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_agreementbookingdate_connections1: WebExpand<msdyn_agreementbookingdate_Expand, Connection_Select, Connection_Filter, { msdyn_agreementbookingdate_connections1: Connection_Result[] }>;
  msdyn_agreementbookingdate_connections2: WebExpand<msdyn_agreementbookingdate_Expand, Connection_Select, Connection_Filter, { msdyn_agreementbookingdate_connections2: Connection_Result[] }>;
  msdyn_agreementbookingdate_msdyn_approvals: WebExpand<msdyn_agreementbookingdate_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_agreementbookingdate_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_agreementbookingdate_msdyn_bookingalerts: WebExpand<msdyn_agreementbookingdate_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_agreementbookingdate_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_agreementbookingdate_msdyn_ocliveworkitems: WebExpand<msdyn_agreementbookingdate_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_agreementbookingdate_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_agreementbookingdate_msdyn_ocoutboundmessages: WebExpand<msdyn_agreementbookingdate_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_agreementbookingdate_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_agreementbookingdate_msdyn_ocsessions: WebExpand<msdyn_agreementbookingdate_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_agreementbookingdate_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_agreementbookingdate_msfp_alerts: WebExpand<msdyn_agreementbookingdate_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_agreementbookingdate_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_agreementbookingdate_msfp_surveyinvites: WebExpand<msdyn_agreementbookingdate_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_agreementbookingdate_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_agreementbookingdate_msfp_surveyresponses: WebExpand<msdyn_agreementbookingdate_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_agreementbookingdate_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_bookingsetup: WebExpand<msdyn_agreementbookingdate_Expand, msdyn_agreementbookingsetup_Select, msdyn_agreementbookingsetup_Filter, { msdyn_bookingsetup: msdyn_agreementbookingsetup_Result }>;
  msdyn_msdyn_agreementbookingdate_bookableresourcebooking_AgreementBookingDate: WebExpand<msdyn_agreementbookingdate_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { msdyn_msdyn_agreementbookingdate_bookableresourcebooking_AgreementBookingDate: BookableResourceBooking_Result[] }>;
  msdyn_msdyn_agreementbookingdate_msdyn_workorderdetailsgenerationqueue_AgreementBookingDate: WebExpand<msdyn_agreementbookingdate_Expand, msdyn_workorderdetailsgenerationqueue_Select, msdyn_workorderdetailsgenerationqueue_Filter, { msdyn_msdyn_agreementbookingdate_msdyn_workorderdetailsgenerationqueue_AgreementBookingDate: msdyn_workorderdetailsgenerationqueue_Result[] }>;
  msdyn_resource: WebExpand<msdyn_agreementbookingdate_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_resource: BookableResource_Result }>;
  msdyn_workorder: WebExpand<msdyn_agreementbookingdate_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_workorder: msdyn_workorder_Result }>;
  ownerid: WebExpand<msdyn_agreementbookingdate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_agreementbookingdate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_agreementbookingdate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_agreementbookingdate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_agreementbookingdate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_agreement_formatted?: string;
  msdyn_bookingdate_formatted?: string;
  msdyn_bookingsetup_formatted?: string;
  msdyn_earliestdate_formatted?: string;
  msdyn_latestdate_formatted?: string;
  msdyn_postponegenerationuntil_formatted?: string;
  msdyn_processstartedon_formatted?: string;
  msdyn_resource_formatted?: string;
  msdyn_status_formatted?: string;
  msdyn_workorder_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_agreementbookingdate_Result extends msdyn_agreementbookingdate_Base, msdyn_agreementbookingdate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agreement_guid: string | null;
  msdyn_bookingsetup_guid: string | null;
  msdyn_resource_guid: string | null;
  msdyn_workorder_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_agreementbookingdate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_agreement: WebMappingRetrieve<msdyn_agreement_Select,msdyn_agreement_Expand,msdyn_agreement_Filter,msdyn_agreement_Fixed,msdyn_agreement_Result,msdyn_agreement_FormattedResult>;
  msdyn_bookingsetup: WebMappingRetrieve<msdyn_agreementbookingsetup_Select,msdyn_agreementbookingsetup_Expand,msdyn_agreementbookingsetup_Filter,msdyn_agreementbookingsetup_Fixed,msdyn_agreementbookingsetup_Result,msdyn_agreementbookingsetup_FormattedResult>;
  msdyn_resource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_workorder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_agreementbookingdate_RelatedMany {
  msdyn_agreementbookingdate_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_agreementbookingdate_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_agreementbookingdate_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_agreementbookingdate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_agreementbookingdate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_agreementbookingdate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementbookingdate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementbookingdate_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_agreementbookingdate_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_agreementbookingdate_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_agreementbookingdate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_agreementbookingdate_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_agreementbookingdate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_agreementbookingdate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_agreementbookingdate_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  msdyn_agreementbookingdate_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_agreementbookingdate_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_agreementbookingdate_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_agreementbookingdate_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_agreementbookingdate_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_agreementbookingdate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_agreementbookingdate_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_agreementbookingdate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_agreementbookingdate_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementbookingdate_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementbookingdate_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_agreementbookingdate_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_agreementbookingdate_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_agreementbookingdate_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_agreementbookingdate_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_agreementbookingdate_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_agreementbookingdate_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_agreementbookingdate_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  msdyn_msdyn_agreementbookingdate_bookableresourcebooking_AgreementBookingDate: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  msdyn_msdyn_agreementbookingdate_msdyn_workorderdetailsgenerationqueue_AgreementBookingDate: WebMappingRetrieve<msdyn_workorderdetailsgenerationqueue_Select,msdyn_workorderdetailsgenerationqueue_Expand,msdyn_workorderdetailsgenerationqueue_Filter,msdyn_workorderdetailsgenerationqueue_Fixed,msdyn_workorderdetailsgenerationqueue_Result,msdyn_workorderdetailsgenerationqueue_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_agreementbookingdates: WebMappingRetrieve<msdyn_agreementbookingdate_Select,msdyn_agreementbookingdate_Expand,msdyn_agreementbookingdate_Filter,msdyn_agreementbookingdate_Fixed,msdyn_agreementbookingdate_Result,msdyn_agreementbookingdate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_agreementbookingdates: WebMappingRelated<msdyn_agreementbookingdate_RelatedOne,msdyn_agreementbookingdate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_agreementbookingdates: WebMappingCUDA<msdyn_agreementbookingdate_Create,msdyn_agreementbookingdate_Update,msdyn_agreementbookingdate_Select>;
}
