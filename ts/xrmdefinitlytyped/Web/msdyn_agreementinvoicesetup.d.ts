interface msdyn_agreementinvoicesetup_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_agreementinvoicesetupid?: string | null;
  msdyn_description?: string | null;
  msdyn_internalflags?: string | null;
  msdyn_name?: string | null;
  msdyn_postponegenerationuntil?: Date | null;
  msdyn_processstartedon?: Date | null;
  msdyn_recurrencesettings?: string | null;
  msdyn_revision?: number | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: msdyn_agreementinvoicesetup_statecode | null;
  statuscode?: msdyn_agreementinvoicesetup_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_agreementinvoicesetup_Relationships {
  bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3?: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result[] | null;
  msdyn_agreementinvoicesetup_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_agreementinvoicesetup_Annotations?: Annotation_Result[] | null;
  msdyn_agreementinvoicesetup_Appointments?: Appointment_Result[] | null;
  msdyn_agreementinvoicesetup_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_agreementinvoicesetup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_agreementinvoicesetup_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementinvoicesetup_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementinvoicesetup_Emails?: Email_Result[] | null;
  msdyn_agreementinvoicesetup_Faxes?: Fax_Result[] | null;
  msdyn_agreementinvoicesetup_Letters?: Letter_Result[] | null;
  msdyn_agreementinvoicesetup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_agreementinvoicesetup_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_agreementinvoicesetup_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_agreementinvoicesetup_QueueItems?: QueueItem_Result[] | null;
  msdyn_agreementinvoicesetup_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_agreementinvoicesetup_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_agreementinvoicesetup_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_agreementinvoicesetup_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_agreementinvoicesetup_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_agreementinvoicesetup_SyncErrors?: SyncError_Result[] | null;
  msdyn_agreementinvoicesetup_Tasks?: Task_Result[] | null;
  msdyn_agreementinvoicesetup_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_agreementinvoicesetup_connections1?: Connection_Result[] | null;
  msdyn_agreementinvoicesetup_connections2?: Connection_Result[] | null;
  msdyn_agreementinvoicesetup_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_agreementinvoicesetup_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_agreementinvoicesetup_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_agreementinvoicesetup_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_agreementinvoicesetup_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_agreementinvoicesetup_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_agreementinvoicesetup_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup?: msdyn_agreementinvoicedate_Result[] | null;
  msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup?: msdyn_agreementinvoiceproduct_Result[] | null;
}
interface msdyn_agreementinvoicesetup extends msdyn_agreementinvoicesetup_Base, msdyn_agreementinvoicesetup_Relationships {
  msdyn_agreement_bind$msdyn_agreements?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
}
interface msdyn_agreementinvoicesetup_Create extends msdyn_agreementinvoicesetup {
}
interface msdyn_agreementinvoicesetup_Update extends msdyn_agreementinvoicesetup {
}
interface msdyn_agreementinvoicesetup_Select {
  createdby_guid: WebAttribute<msdyn_agreementinvoicesetup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_agreementinvoicesetup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_agreementinvoicesetup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_agreementinvoicesetup_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_agreementinvoicesetup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_agreementinvoicesetup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_agreementinvoicesetup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_agreement_guid: WebAttribute<msdyn_agreementinvoicesetup_Select, { msdyn_agreement_guid: string | null }, { msdyn_agreement_formatted?: string }>;
  msdyn_agreementinvoicesetupid: WebAttribute<msdyn_agreementinvoicesetup_Select, { msdyn_agreementinvoicesetupid: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_agreementinvoicesetup_Select, { msdyn_description: string | null }, {  }>;
  msdyn_internalflags: WebAttribute<msdyn_agreementinvoicesetup_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_agreementinvoicesetup_Select, { msdyn_name: string | null }, {  }>;
  msdyn_postponegenerationuntil: WebAttribute<msdyn_agreementinvoicesetup_Select, { msdyn_postponegenerationuntil: Date | null }, { msdyn_postponegenerationuntil_formatted?: string }>;
  msdyn_processstartedon: WebAttribute<msdyn_agreementinvoicesetup_Select, { msdyn_processstartedon: Date | null }, { msdyn_processstartedon_formatted?: string }>;
  msdyn_recurrencesettings: WebAttribute<msdyn_agreementinvoicesetup_Select, { msdyn_recurrencesettings: string | null }, {  }>;
  msdyn_revision: WebAttribute<msdyn_agreementinvoicesetup_Select, { msdyn_revision: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_agreementinvoicesetup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_agreementinvoicesetup_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_agreementinvoicesetup_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_agreementinvoicesetup_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_agreementinvoicesetup_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<msdyn_agreementinvoicesetup_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<msdyn_agreementinvoicesetup_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_agreementinvoicesetup_Select, { statecode: msdyn_agreementinvoicesetup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_agreementinvoicesetup_Select, { statuscode: msdyn_agreementinvoicesetup_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_agreementinvoicesetup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<msdyn_agreementinvoicesetup_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_agreementinvoicesetup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_agreementinvoicesetup_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_agreementinvoicesetup_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_agreement_guid: XQW.Guid;
  msdyn_agreementinvoicesetupid: XQW.Guid;
  msdyn_description: string;
  msdyn_internalflags: string;
  msdyn_name: string;
  msdyn_postponegenerationuntil: Date;
  msdyn_processstartedon: Date;
  msdyn_recurrencesettings: string;
  msdyn_revision: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: msdyn_agreementinvoicesetup_statecode;
  statuscode: msdyn_agreementinvoicesetup_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_agreementinvoicesetup_Expand {
  bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: WebExpand<msdyn_agreementinvoicesetup_Expand, msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Filter, { bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result[] }>;
  createdby: WebExpand<msdyn_agreementinvoicesetup_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_agreementinvoicesetup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_agreementinvoicesetup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_agreementinvoicesetup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_agreement: WebExpand<msdyn_agreementinvoicesetup_Expand, msdyn_agreement_Select, msdyn_agreement_Filter, { msdyn_agreement: msdyn_agreement_Result }>;
  msdyn_agreementinvoicesetup_ActivityPointers: WebExpand<msdyn_agreementinvoicesetup_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_agreementinvoicesetup_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_agreementinvoicesetup_Annotations: WebExpand<msdyn_agreementinvoicesetup_Expand, Annotation_Select, Annotation_Filter, { msdyn_agreementinvoicesetup_Annotations: Annotation_Result[] }>;
  msdyn_agreementinvoicesetup_Appointments: WebExpand<msdyn_agreementinvoicesetup_Expand, Appointment_Select, Appointment_Filter, { msdyn_agreementinvoicesetup_Appointments: Appointment_Result[] }>;
  msdyn_agreementinvoicesetup_AsyncOperations: WebExpand<msdyn_agreementinvoicesetup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_agreementinvoicesetup_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_agreementinvoicesetup_BulkDeleteFailures: WebExpand<msdyn_agreementinvoicesetup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_agreementinvoicesetup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_agreementinvoicesetup_DuplicateBaseRecord: WebExpand<msdyn_agreementinvoicesetup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementinvoicesetup_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementinvoicesetup_DuplicateMatchingRecord: WebExpand<msdyn_agreementinvoicesetup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementinvoicesetup_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementinvoicesetup_Emails: WebExpand<msdyn_agreementinvoicesetup_Expand, Email_Select, Email_Filter, { msdyn_agreementinvoicesetup_Emails: Email_Result[] }>;
  msdyn_agreementinvoicesetup_Faxes: WebExpand<msdyn_agreementinvoicesetup_Expand, Fax_Select, Fax_Filter, { msdyn_agreementinvoicesetup_Faxes: Fax_Result[] }>;
  msdyn_agreementinvoicesetup_Letters: WebExpand<msdyn_agreementinvoicesetup_Expand, Letter_Select, Letter_Filter, { msdyn_agreementinvoicesetup_Letters: Letter_Result[] }>;
  msdyn_agreementinvoicesetup_MailboxTrackingFolders: WebExpand<msdyn_agreementinvoicesetup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_agreementinvoicesetup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_agreementinvoicesetup_PhoneCalls: WebExpand<msdyn_agreementinvoicesetup_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_agreementinvoicesetup_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses: WebExpand<msdyn_agreementinvoicesetup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_agreementinvoicesetup_ProcessSession: WebExpand<msdyn_agreementinvoicesetup_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_agreementinvoicesetup_ProcessSession: ProcessSession_Result[] }>;
  msdyn_agreementinvoicesetup_QueueItems: WebExpand<msdyn_agreementinvoicesetup_Expand, QueueItem_Select, QueueItem_Filter, { msdyn_agreementinvoicesetup_QueueItems: QueueItem_Result[] }>;
  msdyn_agreementinvoicesetup_RecurringAppointmentMasters: WebExpand<msdyn_agreementinvoicesetup_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_agreementinvoicesetup_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_agreementinvoicesetup_ServiceAppointments: WebExpand<msdyn_agreementinvoicesetup_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_agreementinvoicesetup_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_agreementinvoicesetup_SharePointDocumentLocations: WebExpand<msdyn_agreementinvoicesetup_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_agreementinvoicesetup_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_agreementinvoicesetup_SharePointDocuments: WebExpand<msdyn_agreementinvoicesetup_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_agreementinvoicesetup_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_agreementinvoicesetup_SocialActivities: WebExpand<msdyn_agreementinvoicesetup_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_agreementinvoicesetup_SocialActivities: SocialActivity_Result[] }>;
  msdyn_agreementinvoicesetup_SyncErrors: WebExpand<msdyn_agreementinvoicesetup_Expand, SyncError_Select, SyncError_Filter, { msdyn_agreementinvoicesetup_SyncErrors: SyncError_Result[] }>;
  msdyn_agreementinvoicesetup_Tasks: WebExpand<msdyn_agreementinvoicesetup_Expand, Task_Select, Task_Filter, { msdyn_agreementinvoicesetup_Tasks: Task_Result[] }>;
  msdyn_agreementinvoicesetup_UserEntityInstanceDatas: WebExpand<msdyn_agreementinvoicesetup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_agreementinvoicesetup_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_agreementinvoicesetup_connections1: WebExpand<msdyn_agreementinvoicesetup_Expand, Connection_Select, Connection_Filter, { msdyn_agreementinvoicesetup_connections1: Connection_Result[] }>;
  msdyn_agreementinvoicesetup_connections2: WebExpand<msdyn_agreementinvoicesetup_Expand, Connection_Select, Connection_Filter, { msdyn_agreementinvoicesetup_connections2: Connection_Result[] }>;
  msdyn_agreementinvoicesetup_msdyn_approvals: WebExpand<msdyn_agreementinvoicesetup_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_agreementinvoicesetup_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_agreementinvoicesetup_msdyn_bookingalerts: WebExpand<msdyn_agreementinvoicesetup_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_agreementinvoicesetup_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_agreementinvoicesetup_msdyn_ocliveworkitems: WebExpand<msdyn_agreementinvoicesetup_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_agreementinvoicesetup_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages: WebExpand<msdyn_agreementinvoicesetup_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_agreementinvoicesetup_msdyn_ocsessions: WebExpand<msdyn_agreementinvoicesetup_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_agreementinvoicesetup_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_agreementinvoicesetup_msfp_alerts: WebExpand<msdyn_agreementinvoicesetup_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_agreementinvoicesetup_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_agreementinvoicesetup_msfp_surveyinvites: WebExpand<msdyn_agreementinvoicesetup_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_agreementinvoicesetup_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_agreementinvoicesetup_msfp_surveyresponses: WebExpand<msdyn_agreementinvoicesetup_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_agreementinvoicesetup_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup: WebExpand<msdyn_agreementinvoicesetup_Expand, msdyn_agreementinvoicedate_Select, msdyn_agreementinvoicedate_Filter, { msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup: msdyn_agreementinvoicedate_Result[] }>;
  msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup: WebExpand<msdyn_agreementinvoicesetup_Expand, msdyn_agreementinvoiceproduct_Select, msdyn_agreementinvoiceproduct_Filter, { msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup: msdyn_agreementinvoiceproduct_Result[] }>;
  ownerid: WebExpand<msdyn_agreementinvoicesetup_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_agreementinvoicesetup_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_agreementinvoicesetup_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_agreementinvoicesetup_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<msdyn_agreementinvoicesetup_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
}
interface msdyn_agreementinvoicesetup_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_agreement_formatted?: string;
  msdyn_postponegenerationuntil_formatted?: string;
  msdyn_processstartedon_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_agreementinvoicesetup_Result extends msdyn_agreementinvoicesetup_Base, msdyn_agreementinvoicesetup_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agreement_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_agreementinvoicesetup_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_agreement: WebMappingRetrieve<msdyn_agreement_Select,msdyn_agreement_Expand,msdyn_agreement_Filter,msdyn_agreement_Fixed,msdyn_agreement_Result,msdyn_agreement_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
}
interface msdyn_agreementinvoicesetup_RelatedMany {
  bpf_msdyn_agreementinvoicesetup_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: WebMappingRetrieve<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Filter,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Fixed,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_FormattedResult>;
  msdyn_agreementinvoicesetup_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_agreementinvoicesetup_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_agreementinvoicesetup_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_agreementinvoicesetup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_agreementinvoicesetup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_agreementinvoicesetup_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementinvoicesetup_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementinvoicesetup_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_agreementinvoicesetup_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_agreementinvoicesetup_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_agreementinvoicesetup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_agreementinvoicesetup_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_agreementinvoicesetup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_agreementinvoicesetup_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_agreementinvoicesetup_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  msdyn_agreementinvoicesetup_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_agreementinvoicesetup_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_agreementinvoicesetup_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_agreementinvoicesetup_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_agreementinvoicesetup_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_agreementinvoicesetup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_agreementinvoicesetup_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_agreementinvoicesetup_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_agreementinvoicesetup_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementinvoicesetup_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementinvoicesetup_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_agreementinvoicesetup_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_agreementinvoicesetup_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_agreementinvoicesetup_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_agreementinvoicesetup_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_agreementinvoicesetup_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_agreementinvoicesetup_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_agreementinvoicesetup_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoicedate_InvoiceSetup: WebMappingRetrieve<msdyn_agreementinvoicedate_Select,msdyn_agreementinvoicedate_Expand,msdyn_agreementinvoicedate_Filter,msdyn_agreementinvoicedate_Fixed,msdyn_agreementinvoicedate_Result,msdyn_agreementinvoicedate_FormattedResult>;
  msdyn_msdyn_agreementinvoicesetup_msdyn_agreementinvoiceproduct_AgreementInvoiceSetup: WebMappingRetrieve<msdyn_agreementinvoiceproduct_Select,msdyn_agreementinvoiceproduct_Expand,msdyn_agreementinvoiceproduct_Filter,msdyn_agreementinvoiceproduct_Fixed,msdyn_agreementinvoiceproduct_Result,msdyn_agreementinvoiceproduct_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_agreementinvoicesetups: WebMappingRetrieve<msdyn_agreementinvoicesetup_Select,msdyn_agreementinvoicesetup_Expand,msdyn_agreementinvoicesetup_Filter,msdyn_agreementinvoicesetup_Fixed,msdyn_agreementinvoicesetup_Result,msdyn_agreementinvoicesetup_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_agreementinvoicesetups: WebMappingRelated<msdyn_agreementinvoicesetup_RelatedOne,msdyn_agreementinvoicesetup_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_agreementinvoicesetups: WebMappingCUDA<msdyn_agreementinvoicesetup_Create,msdyn_agreementinvoicesetup_Update,msdyn_agreementinvoicesetup_Select>;
}
