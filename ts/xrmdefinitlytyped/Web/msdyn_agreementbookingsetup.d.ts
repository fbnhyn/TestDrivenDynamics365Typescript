interface msdyn_agreementbookingsetup_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_agreementbookingsetupid?: string | null;
  msdyn_autogeneratebooking?: boolean | null;
  msdyn_autogeneratewo?: boolean | null;
  msdyn_description?: string | null;
  msdyn_estimatedduration?: number | null;
  msdyn_generatewodaysinadvance?: number | null;
  msdyn_internalflags?: string | null;
  msdyn_latitude?: number | null;
  msdyn_longitude?: number | null;
  msdyn_name?: string | null;
  msdyn_postbookingflexibility?: number | null;
  msdyn_postponegenerationuntil?: Date | null;
  msdyn_prebookingflexibility?: number | null;
  msdyn_preferredstarttime?: Date | null;
  msdyn_processstartedon?: Date | null;
  msdyn_recurrencesettings?: string | null;
  msdyn_revision?: number | null;
  msdyn_timewindowend?: Date | null;
  msdyn_timewindowstart?: Date | null;
  msdyn_worklocation?: msdyn_worklocation | null;
  msdyn_workordersummary?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: msdyn_agreementbookingsetup_statecode | null;
  statuscode?: msdyn_agreementbookingsetup_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_agreementbookingsetup_Relationships {
  bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3?: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result[] | null;
  msdyn_agreementbookingsetup_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_agreementbookingsetup_Annotations?: Annotation_Result[] | null;
  msdyn_agreementbookingsetup_Appointments?: Appointment_Result[] | null;
  msdyn_agreementbookingsetup_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_agreementbookingsetup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_agreementbookingsetup_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementbookingsetup_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementbookingsetup_Emails?: Email_Result[] | null;
  msdyn_agreementbookingsetup_Faxes?: Fax_Result[] | null;
  msdyn_agreementbookingsetup_Letters?: Letter_Result[] | null;
  msdyn_agreementbookingsetup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_agreementbookingsetup_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_agreementbookingsetup_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_agreementbookingsetup_QueueItems?: QueueItem_Result[] | null;
  msdyn_agreementbookingsetup_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_agreementbookingsetup_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_agreementbookingsetup_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_agreementbookingsetup_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_agreementbookingsetup_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_agreementbookingsetup_SyncErrors?: SyncError_Result[] | null;
  msdyn_agreementbookingsetup_Tasks?: Task_Result[] | null;
  msdyn_agreementbookingsetup_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_agreementbookingsetup_connections1?: Connection_Result[] | null;
  msdyn_agreementbookingsetup_connections2?: Connection_Result[] | null;
  msdyn_agreementbookingsetup_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_agreementbookingsetup_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_agreementbookingsetup_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_agreementbookingsetup_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_agreementbookingsetup_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_agreementbookingsetup_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_agreementbookingsetup_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_agreementbookingsetup_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup?: msdyn_agreementbookingdate_Result[] | null;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup?: msdyn_agreementbookingincident_Result[] | null;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup?: msdyn_agreementbookingproduct_Result[] | null;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup?: msdyn_agreementbookingservice_Result[] | null;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup?: msdyn_agreementbookingservicetask_Result[] | null;
}
interface msdyn_agreementbookingsetup extends msdyn_agreementbookingsetup_Base, msdyn_agreementbookingsetup_Relationships {
  msdyn_agreement_bind$msdyn_agreements?: string | null;
  msdyn_preferredresource_bind$bookableresources?: string | null;
  msdyn_priority_bind$msdyn_priorities?: string | null;
  msdyn_workordertype_bind$msdyn_workordertypes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
}
interface msdyn_agreementbookingsetup_Create extends msdyn_agreementbookingsetup {
}
interface msdyn_agreementbookingsetup_Update extends msdyn_agreementbookingsetup {
}
interface msdyn_agreementbookingsetup_Select {
  createdby_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_agreementbookingsetup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_agreementbookingsetup_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_agreementbookingsetup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_agreement_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_agreement_guid: string | null }, { msdyn_agreement_formatted?: string }>;
  msdyn_agreementbookingsetupid: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_agreementbookingsetupid: string | null }, {  }>;
  msdyn_autogeneratebooking: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_autogeneratebooking: boolean | null }, {  }>;
  msdyn_autogeneratewo: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_autogeneratewo: boolean | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_description: string | null }, {  }>;
  msdyn_estimatedduration: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_estimatedduration: number | null }, {  }>;
  msdyn_generatewodaysinadvance: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_generatewodaysinadvance: number | null }, {  }>;
  msdyn_internalflags: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_latitude: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_latitude: number | null }, {  }>;
  msdyn_longitude: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_longitude: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_name: string | null }, {  }>;
  msdyn_postbookingflexibility: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_postbookingflexibility: number | null }, {  }>;
  msdyn_postponegenerationuntil: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_postponegenerationuntil: Date | null }, { msdyn_postponegenerationuntil_formatted?: string }>;
  msdyn_prebookingflexibility: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_prebookingflexibility: number | null }, {  }>;
  msdyn_preferredresource_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_preferredresource_guid: string | null }, { msdyn_preferredresource_formatted?: string }>;
  msdyn_preferredstarttime: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_preferredstarttime: Date | null }, { msdyn_preferredstarttime_formatted?: string }>;
  msdyn_priority_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_priority_guid: string | null }, { msdyn_priority_formatted?: string }>;
  msdyn_processstartedon: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_processstartedon: Date | null }, { msdyn_processstartedon_formatted?: string }>;
  msdyn_recurrencesettings: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_recurrencesettings: string | null }, {  }>;
  msdyn_revision: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_revision: number | null }, {  }>;
  msdyn_timewindowend: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_timewindowend: Date | null }, { msdyn_timewindowend_formatted?: string }>;
  msdyn_timewindowstart: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_timewindowstart: Date | null }, { msdyn_timewindowstart_formatted?: string }>;
  msdyn_worklocation: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_worklocation: msdyn_worklocation | null }, { msdyn_worklocation_formatted?: string }>;
  msdyn_workordersummary: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_workordersummary: string | null }, {  }>;
  msdyn_workordertype_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { msdyn_workordertype_guid: string | null }, { msdyn_workordertype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_agreementbookingsetup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_agreementbookingsetup_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<msdyn_agreementbookingsetup_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<msdyn_agreementbookingsetup_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_agreementbookingsetup_Select, { statecode: msdyn_agreementbookingsetup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_agreementbookingsetup_Select, { statuscode: msdyn_agreementbookingsetup_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_agreementbookingsetup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<msdyn_agreementbookingsetup_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_agreementbookingsetup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_agreementbookingsetup_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_agreementbookingsetup_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_agreement_guid: XQW.Guid;
  msdyn_agreementbookingsetupid: XQW.Guid;
  msdyn_autogeneratebooking: boolean;
  msdyn_autogeneratewo: boolean;
  msdyn_description: string;
  msdyn_estimatedduration: number;
  msdyn_generatewodaysinadvance: number;
  msdyn_internalflags: string;
  msdyn_latitude: number;
  msdyn_longitude: number;
  msdyn_name: string;
  msdyn_postbookingflexibility: number;
  msdyn_postponegenerationuntil: Date;
  msdyn_prebookingflexibility: number;
  msdyn_preferredresource_guid: XQW.Guid;
  msdyn_preferredstarttime: Date;
  msdyn_priority_guid: XQW.Guid;
  msdyn_processstartedon: Date;
  msdyn_recurrencesettings: string;
  msdyn_revision: number;
  msdyn_timewindowend: Date;
  msdyn_timewindowstart: Date;
  msdyn_worklocation: msdyn_worklocation;
  msdyn_workordersummary: string;
  msdyn_workordertype_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: msdyn_agreementbookingsetup_statecode;
  statuscode: msdyn_agreementbookingsetup_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_agreementbookingsetup_Expand {
  bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Filter, { bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result[] }>;
  createdby: WebExpand<msdyn_agreementbookingsetup_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_agreementbookingsetup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_agreementbookingsetup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_agreementbookingsetup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_agreement: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_agreement_Select, msdyn_agreement_Filter, { msdyn_agreement: msdyn_agreement_Result }>;
  msdyn_agreementbookingsetup_ActivityPointers: WebExpand<msdyn_agreementbookingsetup_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_agreementbookingsetup_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_agreementbookingsetup_Annotations: WebExpand<msdyn_agreementbookingsetup_Expand, Annotation_Select, Annotation_Filter, { msdyn_agreementbookingsetup_Annotations: Annotation_Result[] }>;
  msdyn_agreementbookingsetup_Appointments: WebExpand<msdyn_agreementbookingsetup_Expand, Appointment_Select, Appointment_Filter, { msdyn_agreementbookingsetup_Appointments: Appointment_Result[] }>;
  msdyn_agreementbookingsetup_AsyncOperations: WebExpand<msdyn_agreementbookingsetup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_agreementbookingsetup_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_agreementbookingsetup_BulkDeleteFailures: WebExpand<msdyn_agreementbookingsetup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_agreementbookingsetup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_agreementbookingsetup_DuplicateBaseRecord: WebExpand<msdyn_agreementbookingsetup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementbookingsetup_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementbookingsetup_DuplicateMatchingRecord: WebExpand<msdyn_agreementbookingsetup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementbookingsetup_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementbookingsetup_Emails: WebExpand<msdyn_agreementbookingsetup_Expand, Email_Select, Email_Filter, { msdyn_agreementbookingsetup_Emails: Email_Result[] }>;
  msdyn_agreementbookingsetup_Faxes: WebExpand<msdyn_agreementbookingsetup_Expand, Fax_Select, Fax_Filter, { msdyn_agreementbookingsetup_Faxes: Fax_Result[] }>;
  msdyn_agreementbookingsetup_Letters: WebExpand<msdyn_agreementbookingsetup_Expand, Letter_Select, Letter_Filter, { msdyn_agreementbookingsetup_Letters: Letter_Result[] }>;
  msdyn_agreementbookingsetup_MailboxTrackingFolders: WebExpand<msdyn_agreementbookingsetup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_agreementbookingsetup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_agreementbookingsetup_PhoneCalls: WebExpand<msdyn_agreementbookingsetup_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_agreementbookingsetup_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses: WebExpand<msdyn_agreementbookingsetup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_agreementbookingsetup_ProcessSession: WebExpand<msdyn_agreementbookingsetup_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_agreementbookingsetup_ProcessSession: ProcessSession_Result[] }>;
  msdyn_agreementbookingsetup_QueueItems: WebExpand<msdyn_agreementbookingsetup_Expand, QueueItem_Select, QueueItem_Filter, { msdyn_agreementbookingsetup_QueueItems: QueueItem_Result[] }>;
  msdyn_agreementbookingsetup_RecurringAppointmentMasters: WebExpand<msdyn_agreementbookingsetup_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_agreementbookingsetup_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_agreementbookingsetup_ServiceAppointments: WebExpand<msdyn_agreementbookingsetup_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_agreementbookingsetup_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_agreementbookingsetup_SharePointDocumentLocations: WebExpand<msdyn_agreementbookingsetup_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_agreementbookingsetup_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_agreementbookingsetup_SharePointDocuments: WebExpand<msdyn_agreementbookingsetup_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_agreementbookingsetup_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_agreementbookingsetup_SocialActivities: WebExpand<msdyn_agreementbookingsetup_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_agreementbookingsetup_SocialActivities: SocialActivity_Result[] }>;
  msdyn_agreementbookingsetup_SyncErrors: WebExpand<msdyn_agreementbookingsetup_Expand, SyncError_Select, SyncError_Filter, { msdyn_agreementbookingsetup_SyncErrors: SyncError_Result[] }>;
  msdyn_agreementbookingsetup_Tasks: WebExpand<msdyn_agreementbookingsetup_Expand, Task_Select, Task_Filter, { msdyn_agreementbookingsetup_Tasks: Task_Result[] }>;
  msdyn_agreementbookingsetup_UserEntityInstanceDatas: WebExpand<msdyn_agreementbookingsetup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_agreementbookingsetup_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_agreementbookingsetup_connections1: WebExpand<msdyn_agreementbookingsetup_Expand, Connection_Select, Connection_Filter, { msdyn_agreementbookingsetup_connections1: Connection_Result[] }>;
  msdyn_agreementbookingsetup_connections2: WebExpand<msdyn_agreementbookingsetup_Expand, Connection_Select, Connection_Filter, { msdyn_agreementbookingsetup_connections2: Connection_Result[] }>;
  msdyn_agreementbookingsetup_msdyn_approvals: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_agreementbookingsetup_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_agreementbookingsetup_msdyn_bookingalerts: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_agreementbookingsetup_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_agreementbookingsetup_msdyn_ocliveworkitems: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_agreementbookingsetup_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_agreementbookingsetup_msdyn_ocoutboundmessages: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_agreementbookingsetup_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_agreementbookingsetup_msdyn_ocsessions: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_agreementbookingsetup_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_agreementbookingsetup_msfp_alerts: WebExpand<msdyn_agreementbookingsetup_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_agreementbookingsetup_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_agreementbookingsetup_msfp_surveyinvites: WebExpand<msdyn_agreementbookingsetup_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_agreementbookingsetup_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_agreementbookingsetup_msfp_surveyresponses: WebExpand<msdyn_agreementbookingsetup_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_agreementbookingsetup_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_agreementbookingdate_Select, msdyn_agreementbookingdate_Filter, { msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup: msdyn_agreementbookingdate_Result[] }>;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_agreementbookingincident_Select, msdyn_agreementbookingincident_Filter, { msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup: msdyn_agreementbookingincident_Result[] }>;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_agreementbookingproduct_Select, msdyn_agreementbookingproduct_Filter, { msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup: msdyn_agreementbookingproduct_Result[] }>;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_agreementbookingservice_Select, msdyn_agreementbookingservice_Filter, { msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup: msdyn_agreementbookingservice_Result[] }>;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_agreementbookingservicetask_Select, msdyn_agreementbookingservicetask_Filter, { msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup: msdyn_agreementbookingservicetask_Result[] }>;
  msdyn_preferredresource: WebExpand<msdyn_agreementbookingsetup_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_preferredresource: BookableResource_Result }>;
  msdyn_priority: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_priority_Select, msdyn_priority_Filter, { msdyn_priority: msdyn_priority_Result }>;
  msdyn_workordertype: WebExpand<msdyn_agreementbookingsetup_Expand, msdyn_workordertype_Select, msdyn_workordertype_Filter, { msdyn_workordertype: msdyn_workordertype_Result }>;
  ownerid: WebExpand<msdyn_agreementbookingsetup_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_agreementbookingsetup_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_agreementbookingsetup_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_agreementbookingsetup_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<msdyn_agreementbookingsetup_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
}
interface msdyn_agreementbookingsetup_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_agreement_formatted?: string;
  msdyn_postponegenerationuntil_formatted?: string;
  msdyn_preferredresource_formatted?: string;
  msdyn_preferredstarttime_formatted?: string;
  msdyn_priority_formatted?: string;
  msdyn_processstartedon_formatted?: string;
  msdyn_timewindowend_formatted?: string;
  msdyn_timewindowstart_formatted?: string;
  msdyn_worklocation_formatted?: string;
  msdyn_workordertype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_agreementbookingsetup_Result extends msdyn_agreementbookingsetup_Base, msdyn_agreementbookingsetup_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agreement_guid: string | null;
  msdyn_preferredresource_guid: string | null;
  msdyn_priority_guid: string | null;
  msdyn_workordertype_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_agreementbookingsetup_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_agreement: WebMappingRetrieve<msdyn_agreement_Select,msdyn_agreement_Expand,msdyn_agreement_Filter,msdyn_agreement_Fixed,msdyn_agreement_Result,msdyn_agreement_FormattedResult>;
  msdyn_preferredresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_priority: WebMappingRetrieve<msdyn_priority_Select,msdyn_priority_Expand,msdyn_priority_Filter,msdyn_priority_Fixed,msdyn_priority_Result,msdyn_priority_FormattedResult>;
  msdyn_workordertype: WebMappingRetrieve<msdyn_workordertype_Select,msdyn_workordertype_Expand,msdyn_workordertype_Filter,msdyn_workordertype_Fixed,msdyn_workordertype_Result,msdyn_workordertype_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
}
interface msdyn_agreementbookingsetup_RelatedMany {
  bpf_msdyn_agreementbookingsetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: WebMappingRetrieve<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Filter,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Fixed,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_FormattedResult>;
  msdyn_agreementbookingsetup_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_agreementbookingsetup_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_agreementbookingsetup_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_agreementbookingsetup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_agreementbookingsetup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_agreementbookingsetup_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementbookingsetup_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementbookingsetup_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_agreementbookingsetup_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_agreementbookingsetup_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_agreementbookingsetup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_agreementbookingsetup_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_agreementbookingsetup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_agreementbookingsetup_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_agreementbookingsetup_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  msdyn_agreementbookingsetup_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_agreementbookingsetup_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_agreementbookingsetup_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_agreementbookingsetup_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_agreementbookingsetup_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_agreementbookingsetup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_agreementbookingsetup_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_agreementbookingsetup_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_agreementbookingsetup_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementbookingsetup_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementbookingsetup_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_agreementbookingsetup_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_agreementbookingsetup_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_agreementbookingsetup_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_agreementbookingsetup_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_agreementbookingsetup_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_agreementbookingsetup_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_agreementbookingsetup_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingdate_BookingSetup: WebMappingRetrieve<msdyn_agreementbookingdate_Select,msdyn_agreementbookingdate_Expand,msdyn_agreementbookingdate_Filter,msdyn_agreementbookingdate_Fixed,msdyn_agreementbookingdate_Result,msdyn_agreementbookingdate_FormattedResult>;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingincident_AgreementBookingSetup: WebMappingRetrieve<msdyn_agreementbookingincident_Select,msdyn_agreementbookingincident_Expand,msdyn_agreementbookingincident_Filter,msdyn_agreementbookingincident_Fixed,msdyn_agreementbookingincident_Result,msdyn_agreementbookingincident_FormattedResult>;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingproduct_AgreementBookingSetup: WebMappingRetrieve<msdyn_agreementbookingproduct_Select,msdyn_agreementbookingproduct_Expand,msdyn_agreementbookingproduct_Filter,msdyn_agreementbookingproduct_Fixed,msdyn_agreementbookingproduct_Result,msdyn_agreementbookingproduct_FormattedResult>;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservice_AgreementBookingSetup: WebMappingRetrieve<msdyn_agreementbookingservice_Select,msdyn_agreementbookingservice_Expand,msdyn_agreementbookingservice_Filter,msdyn_agreementbookingservice_Fixed,msdyn_agreementbookingservice_Result,msdyn_agreementbookingservice_FormattedResult>;
  msdyn_msdyn_agreementbookingsetup_msdyn_agreementbookingservicetask_AgreementBookingSetup: WebMappingRetrieve<msdyn_agreementbookingservicetask_Select,msdyn_agreementbookingservicetask_Expand,msdyn_agreementbookingservicetask_Filter,msdyn_agreementbookingservicetask_Fixed,msdyn_agreementbookingservicetask_Result,msdyn_agreementbookingservicetask_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_agreementbookingsetups: WebMappingRetrieve<msdyn_agreementbookingsetup_Select,msdyn_agreementbookingsetup_Expand,msdyn_agreementbookingsetup_Filter,msdyn_agreementbookingsetup_Fixed,msdyn_agreementbookingsetup_Result,msdyn_agreementbookingsetup_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_agreementbookingsetups: WebMappingRelated<msdyn_agreementbookingsetup_RelatedOne,msdyn_agreementbookingsetup_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_agreementbookingsetups: WebMappingCUDA<msdyn_agreementbookingsetup_Create,msdyn_agreementbookingsetup_Update,msdyn_agreementbookingsetup_Select>;
}
