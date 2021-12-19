interface msdyn_agreementbookingservicetask_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_agreementbookingservicetaskid?: string | null;
  msdyn_description?: string | null;
  msdyn_estimatedduration?: number | null;
  msdyn_inspectionenabled?: boolean | null;
  msdyn_internalflags?: string | null;
  msdyn_iscopied?: boolean | null;
  msdyn_lineorder?: number | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_agreementbookingservicetask_statecode | null;
  statuscode?: msdyn_agreementbookingservicetask_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_agreementbookingservicetask_Relationships {
  msdyn_Inspection?: msdyn_inspection_Result | null;
  msdyn_agreementbookingservicetask_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_agreementbookingservicetask_Annotations?: Annotation_Result[] | null;
  msdyn_agreementbookingservicetask_Appointments?: Appointment_Result[] | null;
  msdyn_agreementbookingservicetask_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_agreementbookingservicetask_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_agreementbookingservicetask_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementbookingservicetask_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementbookingservicetask_Emails?: Email_Result[] | null;
  msdyn_agreementbookingservicetask_Faxes?: Fax_Result[] | null;
  msdyn_agreementbookingservicetask_Letters?: Letter_Result[] | null;
  msdyn_agreementbookingservicetask_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_agreementbookingservicetask_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_agreementbookingservicetask_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_agreementbookingservicetask_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_agreementbookingservicetask_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_agreementbookingservicetask_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_agreementbookingservicetask_SyncErrors?: SyncError_Result[] | null;
  msdyn_agreementbookingservicetask_Tasks?: Task_Result[] | null;
  msdyn_agreementbookingservicetask_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_agreementbookingservicetask_connections1?: Connection_Result[] | null;
  msdyn_agreementbookingservicetask_connections2?: Connection_Result[] | null;
  msdyn_agreementbookingservicetask_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_agreementbookingservicetask_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_agreementbookingservicetask_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_agreementbookingservicetask_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_agreementbookingservicetask_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_agreementbookingservicetask_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_agreementbookingservicetask_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask?: msdyn_workorderservicetask_Result[] | null;
}
interface msdyn_agreementbookingservicetask extends msdyn_agreementbookingservicetask_Base, msdyn_agreementbookingservicetask_Relationships {
  msdyn_Inspection_bind$msdyn_inspections?: string | null;
  msdyn_agreement_bind$msdyn_agreements?: string | null;
  msdyn_agreementbookingincident_bind$msdyn_agreementbookingincidents?: string | null;
  msdyn_agreementbookingsetup_bind$msdyn_agreementbookingsetups?: string | null;
  msdyn_customerasset_bind$msdyn_customerassets?: string | null;
  msdyn_tasktype_bind$msdyn_servicetasktypes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_agreementbookingservicetask_Create extends msdyn_agreementbookingservicetask {
}
interface msdyn_agreementbookingservicetask_Update extends msdyn_agreementbookingservicetask {
}
interface msdyn_agreementbookingservicetask_Select {
  createdby_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_agreementbookingservicetask_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_agreementbookingservicetask_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_agreementbookingservicetask_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_agreement_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_agreement_guid: string | null }, { msdyn_agreement_formatted?: string }>;
  msdyn_agreementbookingincident_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_agreementbookingincident_guid: string | null }, { msdyn_agreementbookingincident_formatted?: string }>;
  msdyn_agreementbookingservicetaskid: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_agreementbookingservicetaskid: string | null }, {  }>;
  msdyn_agreementbookingsetup_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_agreementbookingsetup_guid: string | null }, { msdyn_agreementbookingsetup_formatted?: string }>;
  msdyn_customerasset_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_customerasset_guid: string | null }, { msdyn_customerasset_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_description: string | null }, {  }>;
  msdyn_estimatedduration: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_estimatedduration: number | null }, {  }>;
  msdyn_inspection_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_inspection_guid: string | null }, { msdyn_inspection_formatted?: string }>;
  msdyn_inspectionenabled: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_inspectionenabled: boolean | null }, {  }>;
  msdyn_internalflags: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_iscopied: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_iscopied: boolean | null }, {  }>;
  msdyn_lineorder: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_lineorder: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_name: string | null }, {  }>;
  msdyn_tasktype_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { msdyn_tasktype_guid: string | null }, { msdyn_tasktype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_agreementbookingservicetask_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_agreementbookingservicetask_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_agreementbookingservicetask_Select, { statecode: msdyn_agreementbookingservicetask_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_agreementbookingservicetask_Select, { statuscode: msdyn_agreementbookingservicetask_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_agreementbookingservicetask_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_agreementbookingservicetask_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_agreementbookingservicetask_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_agreementbookingservicetask_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_agreement_guid: XQW.Guid;
  msdyn_agreementbookingincident_guid: XQW.Guid;
  msdyn_agreementbookingservicetaskid: XQW.Guid;
  msdyn_agreementbookingsetup_guid: XQW.Guid;
  msdyn_customerasset_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_estimatedduration: number;
  msdyn_inspection_guid: XQW.Guid;
  msdyn_inspectionenabled: boolean;
  msdyn_internalflags: string;
  msdyn_iscopied: boolean;
  msdyn_lineorder: number;
  msdyn_name: string;
  msdyn_tasktype_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_agreementbookingservicetask_statecode;
  statuscode: msdyn_agreementbookingservicetask_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_agreementbookingservicetask_Expand {
  createdby: WebExpand<msdyn_agreementbookingservicetask_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_agreementbookingservicetask_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_agreementbookingservicetask_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_agreementbookingservicetask_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Inspection: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_inspection_Select, msdyn_inspection_Filter, { msdyn_Inspection: msdyn_inspection_Result }>;
  msdyn_agreement: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_agreement_Select, msdyn_agreement_Filter, { msdyn_agreement: msdyn_agreement_Result }>;
  msdyn_agreementbookingincident: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_agreementbookingincident_Select, msdyn_agreementbookingincident_Filter, { msdyn_agreementbookingincident: msdyn_agreementbookingincident_Result }>;
  msdyn_agreementbookingservicetask_ActivityPointers: WebExpand<msdyn_agreementbookingservicetask_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_agreementbookingservicetask_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_agreementbookingservicetask_Annotations: WebExpand<msdyn_agreementbookingservicetask_Expand, Annotation_Select, Annotation_Filter, { msdyn_agreementbookingservicetask_Annotations: Annotation_Result[] }>;
  msdyn_agreementbookingservicetask_Appointments: WebExpand<msdyn_agreementbookingservicetask_Expand, Appointment_Select, Appointment_Filter, { msdyn_agreementbookingservicetask_Appointments: Appointment_Result[] }>;
  msdyn_agreementbookingservicetask_AsyncOperations: WebExpand<msdyn_agreementbookingservicetask_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_agreementbookingservicetask_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_agreementbookingservicetask_BulkDeleteFailures: WebExpand<msdyn_agreementbookingservicetask_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_agreementbookingservicetask_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_agreementbookingservicetask_DuplicateBaseRecord: WebExpand<msdyn_agreementbookingservicetask_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementbookingservicetask_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementbookingservicetask_DuplicateMatchingRecord: WebExpand<msdyn_agreementbookingservicetask_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementbookingservicetask_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementbookingservicetask_Emails: WebExpand<msdyn_agreementbookingservicetask_Expand, Email_Select, Email_Filter, { msdyn_agreementbookingservicetask_Emails: Email_Result[] }>;
  msdyn_agreementbookingservicetask_Faxes: WebExpand<msdyn_agreementbookingservicetask_Expand, Fax_Select, Fax_Filter, { msdyn_agreementbookingservicetask_Faxes: Fax_Result[] }>;
  msdyn_agreementbookingservicetask_Letters: WebExpand<msdyn_agreementbookingservicetask_Expand, Letter_Select, Letter_Filter, { msdyn_agreementbookingservicetask_Letters: Letter_Result[] }>;
  msdyn_agreementbookingservicetask_MailboxTrackingFolders: WebExpand<msdyn_agreementbookingservicetask_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_agreementbookingservicetask_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_agreementbookingservicetask_PhoneCalls: WebExpand<msdyn_agreementbookingservicetask_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_agreementbookingservicetask_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses: WebExpand<msdyn_agreementbookingservicetask_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_agreementbookingservicetask_ProcessSession: WebExpand<msdyn_agreementbookingservicetask_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_agreementbookingservicetask_ProcessSession: ProcessSession_Result[] }>;
  msdyn_agreementbookingservicetask_RecurringAppointmentMasters: WebExpand<msdyn_agreementbookingservicetask_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_agreementbookingservicetask_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_agreementbookingservicetask_ServiceAppointments: WebExpand<msdyn_agreementbookingservicetask_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_agreementbookingservicetask_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_agreementbookingservicetask_SocialActivities: WebExpand<msdyn_agreementbookingservicetask_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_agreementbookingservicetask_SocialActivities: SocialActivity_Result[] }>;
  msdyn_agreementbookingservicetask_SyncErrors: WebExpand<msdyn_agreementbookingservicetask_Expand, SyncError_Select, SyncError_Filter, { msdyn_agreementbookingservicetask_SyncErrors: SyncError_Result[] }>;
  msdyn_agreementbookingservicetask_Tasks: WebExpand<msdyn_agreementbookingservicetask_Expand, Task_Select, Task_Filter, { msdyn_agreementbookingservicetask_Tasks: Task_Result[] }>;
  msdyn_agreementbookingservicetask_UserEntityInstanceDatas: WebExpand<msdyn_agreementbookingservicetask_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_agreementbookingservicetask_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_agreementbookingservicetask_connections1: WebExpand<msdyn_agreementbookingservicetask_Expand, Connection_Select, Connection_Filter, { msdyn_agreementbookingservicetask_connections1: Connection_Result[] }>;
  msdyn_agreementbookingservicetask_connections2: WebExpand<msdyn_agreementbookingservicetask_Expand, Connection_Select, Connection_Filter, { msdyn_agreementbookingservicetask_connections2: Connection_Result[] }>;
  msdyn_agreementbookingservicetask_msdyn_approvals: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_agreementbookingservicetask_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_agreementbookingservicetask_msdyn_bookingalerts: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_agreementbookingservicetask_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_agreementbookingservicetask_msdyn_ocliveworkitems: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_agreementbookingservicetask_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_agreementbookingservicetask_msdyn_ocsessions: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_agreementbookingservicetask_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_agreementbookingservicetask_msfp_alerts: WebExpand<msdyn_agreementbookingservicetask_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_agreementbookingservicetask_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_agreementbookingservicetask_msfp_surveyinvites: WebExpand<msdyn_agreementbookingservicetask_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_agreementbookingservicetask_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_agreementbookingservicetask_msfp_surveyresponses: WebExpand<msdyn_agreementbookingservicetask_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_agreementbookingservicetask_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_agreementbookingsetup: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_agreementbookingsetup_Select, msdyn_agreementbookingsetup_Filter, { msdyn_agreementbookingsetup: msdyn_agreementbookingsetup_Result }>;
  msdyn_customerasset: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_customerasset: msdyn_customerasset_Result }>;
  msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask: msdyn_workorderservicetask_Result[] }>;
  msdyn_tasktype: WebExpand<msdyn_agreementbookingservicetask_Expand, msdyn_servicetasktype_Select, msdyn_servicetasktype_Filter, { msdyn_tasktype: msdyn_servicetasktype_Result }>;
  ownerid: WebExpand<msdyn_agreementbookingservicetask_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_agreementbookingservicetask_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_agreementbookingservicetask_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_agreementbookingservicetask_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_agreementbookingservicetask_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_agreement_formatted?: string;
  msdyn_agreementbookingincident_formatted?: string;
  msdyn_agreementbookingsetup_formatted?: string;
  msdyn_customerasset_formatted?: string;
  msdyn_inspection_formatted?: string;
  msdyn_tasktype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_agreementbookingservicetask_Result extends msdyn_agreementbookingservicetask_Base, msdyn_agreementbookingservicetask_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agreement_guid: string | null;
  msdyn_agreementbookingincident_guid: string | null;
  msdyn_agreementbookingsetup_guid: string | null;
  msdyn_customerasset_guid: string | null;
  msdyn_inspection_guid: string | null;
  msdyn_tasktype_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_agreementbookingservicetask_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Inspection: WebMappingRetrieve<msdyn_inspection_Select,msdyn_inspection_Expand,msdyn_inspection_Filter,msdyn_inspection_Fixed,msdyn_inspection_Result,msdyn_inspection_FormattedResult>;
  msdyn_agreement: WebMappingRetrieve<msdyn_agreement_Select,msdyn_agreement_Expand,msdyn_agreement_Filter,msdyn_agreement_Fixed,msdyn_agreement_Result,msdyn_agreement_FormattedResult>;
  msdyn_agreementbookingincident: WebMappingRetrieve<msdyn_agreementbookingincident_Select,msdyn_agreementbookingincident_Expand,msdyn_agreementbookingincident_Filter,msdyn_agreementbookingincident_Fixed,msdyn_agreementbookingincident_Result,msdyn_agreementbookingincident_FormattedResult>;
  msdyn_agreementbookingsetup: WebMappingRetrieve<msdyn_agreementbookingsetup_Select,msdyn_agreementbookingsetup_Expand,msdyn_agreementbookingsetup_Filter,msdyn_agreementbookingsetup_Fixed,msdyn_agreementbookingsetup_Result,msdyn_agreementbookingsetup_FormattedResult>;
  msdyn_customerasset: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  msdyn_tasktype: WebMappingRetrieve<msdyn_servicetasktype_Select,msdyn_servicetasktype_Expand,msdyn_servicetasktype_Filter,msdyn_servicetasktype_Fixed,msdyn_servicetasktype_Result,msdyn_servicetasktype_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_agreementbookingservicetask_RelatedMany {
  msdyn_agreementbookingservicetask_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_agreementbookingservicetask_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_agreementbookingservicetask_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_agreementbookingservicetask_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_agreementbookingservicetask_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_agreementbookingservicetask_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementbookingservicetask_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementbookingservicetask_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_agreementbookingservicetask_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_agreementbookingservicetask_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_agreementbookingservicetask_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_agreementbookingservicetask_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_agreementbookingservicetask_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_agreementbookingservicetask_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_agreementbookingservicetask_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_agreementbookingservicetask_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_agreementbookingservicetask_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_agreementbookingservicetask_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_agreementbookingservicetask_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_agreementbookingservicetask_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_agreementbookingservicetask_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementbookingservicetask_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementbookingservicetask_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_agreementbookingservicetask_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_agreementbookingservicetask_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_agreementbookingservicetask_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_agreementbookingservicetask_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_agreementbookingservicetask_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_agreementbookingservicetask_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_agreementbookingservicetask_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  msdyn_msdyn_agreementbookingservicetask_msdyn_workorderservicetask_AgreementBookingServiceTask: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_agreementbookingservicetasks: WebMappingRetrieve<msdyn_agreementbookingservicetask_Select,msdyn_agreementbookingservicetask_Expand,msdyn_agreementbookingservicetask_Filter,msdyn_agreementbookingservicetask_Fixed,msdyn_agreementbookingservicetask_Result,msdyn_agreementbookingservicetask_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_agreementbookingservicetasks: WebMappingRelated<msdyn_agreementbookingservicetask_RelatedOne,msdyn_agreementbookingservicetask_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_agreementbookingservicetasks: WebMappingCUDA<msdyn_agreementbookingservicetask_Create,msdyn_agreementbookingservicetask_Update,msdyn_agreementbookingservicetask_Select>;
}
