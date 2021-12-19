interface msdyn_agreementbookingincident_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_agreementbookingincidentid?: string | null;
  msdyn_description?: string | null;
  msdyn_estimatedduration?: number | null;
  msdyn_incidentitemscopied?: boolean | null;
  msdyn_internalflags?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_agreementbookingincident_statecode | null;
  statuscode?: msdyn_agreementbookingincident_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_agreementbookingincident_Relationships {
  msdyn_FunctionalLocation?: msdyn_FunctionalLocation_Result | null;
  msdyn_agreementbookingincident_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_agreementbookingincident_Annotations?: Annotation_Result[] | null;
  msdyn_agreementbookingincident_Appointments?: Appointment_Result[] | null;
  msdyn_agreementbookingincident_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_agreementbookingincident_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_agreementbookingincident_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementbookingincident_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementbookingincident_Emails?: Email_Result[] | null;
  msdyn_agreementbookingincident_Faxes?: Fax_Result[] | null;
  msdyn_agreementbookingincident_Letters?: Letter_Result[] | null;
  msdyn_agreementbookingincident_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_agreementbookingincident_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_agreementbookingincident_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_agreementbookingincident_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_agreementbookingincident_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_agreementbookingincident_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_agreementbookingincident_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_agreementbookingincident_SyncErrors?: SyncError_Result[] | null;
  msdyn_agreementbookingincident_Tasks?: Task_Result[] | null;
  msdyn_agreementbookingincident_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_agreementbookingincident_connections1?: Connection_Result[] | null;
  msdyn_agreementbookingincident_connections2?: Connection_Result[] | null;
  msdyn_agreementbookingincident_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_agreementbookingincident_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_agreementbookingincident_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_agreementbookingincident_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_agreementbookingincident_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_agreementbookingincident_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_agreementbookingincident_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_agreementbookingincident_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingproduct_AgreementBookingIncident?: msdyn_agreementbookingproduct_Result[] | null;
  msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservice_AgreementBookingIncident?: msdyn_agreementbookingservice_Result[] | null;
  msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservicetask_AgreementBookingIncident?: msdyn_agreementbookingservicetask_Result[] | null;
  msdyn_msdyn_agreementbookingincident_msdyn_workorderincident_AgreementBookingIncident?: msdyn_workorderincident_Result[] | null;
}
interface msdyn_agreementbookingincident extends msdyn_agreementbookingincident_Base, msdyn_agreementbookingincident_Relationships {
  msdyn_FunctionalLocation_bind$msdyn_functionallocations?: string | null;
  msdyn_agreement_bind$msdyn_agreements?: string | null;
  msdyn_agreementbookingsetup_bind$msdyn_agreementbookingsetups?: string | null;
  msdyn_customerasset_bind$msdyn_customerassets?: string | null;
  msdyn_incidenttype_bind$msdyn_incidenttypes?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_agreementbookingincident_Create extends msdyn_agreementbookingincident {
}
interface msdyn_agreementbookingincident_Update extends msdyn_agreementbookingincident {
}
interface msdyn_agreementbookingincident_Select {
  createdby_guid: WebAttribute<msdyn_agreementbookingincident_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_agreementbookingincident_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_agreementbookingincident_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_agreementbookingincident_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_agreementbookingincident_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_agreementbookingincident_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_agreementbookingincident_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_agreement_guid: WebAttribute<msdyn_agreementbookingincident_Select, { msdyn_agreement_guid: string | null }, { msdyn_agreement_formatted?: string }>;
  msdyn_agreementbookingincidentid: WebAttribute<msdyn_agreementbookingincident_Select, { msdyn_agreementbookingincidentid: string | null }, {  }>;
  msdyn_agreementbookingsetup_guid: WebAttribute<msdyn_agreementbookingincident_Select, { msdyn_agreementbookingsetup_guid: string | null }, { msdyn_agreementbookingsetup_formatted?: string }>;
  msdyn_customerasset_guid: WebAttribute<msdyn_agreementbookingincident_Select, { msdyn_customerasset_guid: string | null }, { msdyn_customerasset_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_agreementbookingincident_Select, { msdyn_description: string | null }, {  }>;
  msdyn_estimatedduration: WebAttribute<msdyn_agreementbookingincident_Select, { msdyn_estimatedduration: number | null }, {  }>;
  msdyn_functionallocation_guid: WebAttribute<msdyn_agreementbookingincident_Select, { msdyn_functionallocation_guid: string | null }, { msdyn_functionallocation_formatted?: string }>;
  msdyn_incidentitemscopied: WebAttribute<msdyn_agreementbookingincident_Select, { msdyn_incidentitemscopied: boolean | null }, {  }>;
  msdyn_incidenttype_guid: WebAttribute<msdyn_agreementbookingincident_Select, { msdyn_incidenttype_guid: string | null }, { msdyn_incidenttype_formatted?: string }>;
  msdyn_internalflags: WebAttribute<msdyn_agreementbookingincident_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_agreementbookingincident_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_agreementbookingincident_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_agreementbookingincident_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_agreementbookingincident_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_agreementbookingincident_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_agreementbookingincident_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_agreementbookingincident_Select, { statecode: msdyn_agreementbookingincident_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_agreementbookingincident_Select, { statuscode: msdyn_agreementbookingincident_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_agreementbookingincident_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_agreementbookingincident_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_agreementbookingincident_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_agreementbookingincident_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_agreement_guid: XQW.Guid;
  msdyn_agreementbookingincidentid: XQW.Guid;
  msdyn_agreementbookingsetup_guid: XQW.Guid;
  msdyn_customerasset_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_estimatedduration: number;
  msdyn_functionallocation_guid: XQW.Guid;
  msdyn_incidentitemscopied: boolean;
  msdyn_incidenttype_guid: XQW.Guid;
  msdyn_internalflags: string;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_agreementbookingincident_statecode;
  statuscode: msdyn_agreementbookingincident_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_agreementbookingincident_Expand {
  createdby: WebExpand<msdyn_agreementbookingincident_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_agreementbookingincident_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_agreementbookingincident_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_agreementbookingincident_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_FunctionalLocation: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_FunctionalLocation_Select, msdyn_FunctionalLocation_Filter, { msdyn_FunctionalLocation: msdyn_FunctionalLocation_Result }>;
  msdyn_agreement: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_agreement_Select, msdyn_agreement_Filter, { msdyn_agreement: msdyn_agreement_Result }>;
  msdyn_agreementbookingincident_ActivityPointers: WebExpand<msdyn_agreementbookingincident_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_agreementbookingincident_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_agreementbookingincident_Annotations: WebExpand<msdyn_agreementbookingincident_Expand, Annotation_Select, Annotation_Filter, { msdyn_agreementbookingincident_Annotations: Annotation_Result[] }>;
  msdyn_agreementbookingincident_Appointments: WebExpand<msdyn_agreementbookingincident_Expand, Appointment_Select, Appointment_Filter, { msdyn_agreementbookingincident_Appointments: Appointment_Result[] }>;
  msdyn_agreementbookingincident_AsyncOperations: WebExpand<msdyn_agreementbookingincident_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_agreementbookingincident_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_agreementbookingincident_BulkDeleteFailures: WebExpand<msdyn_agreementbookingincident_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_agreementbookingincident_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_agreementbookingincident_DuplicateBaseRecord: WebExpand<msdyn_agreementbookingincident_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementbookingincident_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementbookingincident_DuplicateMatchingRecord: WebExpand<msdyn_agreementbookingincident_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementbookingincident_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementbookingincident_Emails: WebExpand<msdyn_agreementbookingincident_Expand, Email_Select, Email_Filter, { msdyn_agreementbookingincident_Emails: Email_Result[] }>;
  msdyn_agreementbookingincident_Faxes: WebExpand<msdyn_agreementbookingincident_Expand, Fax_Select, Fax_Filter, { msdyn_agreementbookingincident_Faxes: Fax_Result[] }>;
  msdyn_agreementbookingincident_Letters: WebExpand<msdyn_agreementbookingincident_Expand, Letter_Select, Letter_Filter, { msdyn_agreementbookingincident_Letters: Letter_Result[] }>;
  msdyn_agreementbookingincident_MailboxTrackingFolders: WebExpand<msdyn_agreementbookingincident_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_agreementbookingincident_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_agreementbookingincident_PhoneCalls: WebExpand<msdyn_agreementbookingincident_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_agreementbookingincident_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_agreementbookingincident_PrincipalObjectAttributeAccesses: WebExpand<msdyn_agreementbookingincident_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_agreementbookingincident_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_agreementbookingincident_ProcessSession: WebExpand<msdyn_agreementbookingincident_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_agreementbookingincident_ProcessSession: ProcessSession_Result[] }>;
  msdyn_agreementbookingincident_RecurringAppointmentMasters: WebExpand<msdyn_agreementbookingincident_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_agreementbookingincident_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_agreementbookingincident_ServiceAppointments: WebExpand<msdyn_agreementbookingincident_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_agreementbookingincident_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_agreementbookingincident_SocialActivities: WebExpand<msdyn_agreementbookingincident_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_agreementbookingincident_SocialActivities: SocialActivity_Result[] }>;
  msdyn_agreementbookingincident_SyncErrors: WebExpand<msdyn_agreementbookingincident_Expand, SyncError_Select, SyncError_Filter, { msdyn_agreementbookingincident_SyncErrors: SyncError_Result[] }>;
  msdyn_agreementbookingincident_Tasks: WebExpand<msdyn_agreementbookingincident_Expand, Task_Select, Task_Filter, { msdyn_agreementbookingincident_Tasks: Task_Result[] }>;
  msdyn_agreementbookingincident_UserEntityInstanceDatas: WebExpand<msdyn_agreementbookingincident_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_agreementbookingincident_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_agreementbookingincident_connections1: WebExpand<msdyn_agreementbookingincident_Expand, Connection_Select, Connection_Filter, { msdyn_agreementbookingincident_connections1: Connection_Result[] }>;
  msdyn_agreementbookingincident_connections2: WebExpand<msdyn_agreementbookingincident_Expand, Connection_Select, Connection_Filter, { msdyn_agreementbookingincident_connections2: Connection_Result[] }>;
  msdyn_agreementbookingincident_msdyn_approvals: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_agreementbookingincident_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_agreementbookingincident_msdyn_bookingalerts: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_agreementbookingincident_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_agreementbookingincident_msdyn_ocliveworkitems: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_agreementbookingincident_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_agreementbookingincident_msdyn_ocoutboundmessages: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_agreementbookingincident_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_agreementbookingincident_msdyn_ocsessions: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_agreementbookingincident_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_agreementbookingincident_msfp_alerts: WebExpand<msdyn_agreementbookingincident_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_agreementbookingincident_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_agreementbookingincident_msfp_surveyinvites: WebExpand<msdyn_agreementbookingincident_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_agreementbookingincident_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_agreementbookingincident_msfp_surveyresponses: WebExpand<msdyn_agreementbookingincident_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_agreementbookingincident_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_agreementbookingsetup: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_agreementbookingsetup_Select, msdyn_agreementbookingsetup_Filter, { msdyn_agreementbookingsetup: msdyn_agreementbookingsetup_Result }>;
  msdyn_customerasset: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_customerasset: msdyn_customerasset_Result }>;
  msdyn_incidenttype: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_incidenttype_Select, msdyn_incidenttype_Filter, { msdyn_incidenttype: msdyn_incidenttype_Result }>;
  msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingproduct_AgreementBookingIncident: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_agreementbookingproduct_Select, msdyn_agreementbookingproduct_Filter, { msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingproduct_AgreementBookingIncident: msdyn_agreementbookingproduct_Result[] }>;
  msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservice_AgreementBookingIncident: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_agreementbookingservice_Select, msdyn_agreementbookingservice_Filter, { msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservice_AgreementBookingIncident: msdyn_agreementbookingservice_Result[] }>;
  msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservicetask_AgreementBookingIncident: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_agreementbookingservicetask_Select, msdyn_agreementbookingservicetask_Filter, { msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservicetask_AgreementBookingIncident: msdyn_agreementbookingservicetask_Result[] }>;
  msdyn_msdyn_agreementbookingincident_msdyn_workorderincident_AgreementBookingIncident: WebExpand<msdyn_agreementbookingincident_Expand, msdyn_workorderincident_Select, msdyn_workorderincident_Filter, { msdyn_msdyn_agreementbookingincident_msdyn_workorderincident_AgreementBookingIncident: msdyn_workorderincident_Result[] }>;
  ownerid: WebExpand<msdyn_agreementbookingincident_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_agreementbookingincident_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_agreementbookingincident_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_agreementbookingincident_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_agreementbookingincident_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_agreement_formatted?: string;
  msdyn_agreementbookingsetup_formatted?: string;
  msdyn_customerasset_formatted?: string;
  msdyn_functionallocation_formatted?: string;
  msdyn_incidenttype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_agreementbookingincident_Result extends msdyn_agreementbookingincident_Base, msdyn_agreementbookingincident_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agreement_guid: string | null;
  msdyn_agreementbookingsetup_guid: string | null;
  msdyn_customerasset_guid: string | null;
  msdyn_functionallocation_guid: string | null;
  msdyn_incidenttype_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_agreementbookingincident_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_FunctionalLocation: WebMappingRetrieve<msdyn_FunctionalLocation_Select,msdyn_FunctionalLocation_Expand,msdyn_FunctionalLocation_Filter,msdyn_FunctionalLocation_Fixed,msdyn_FunctionalLocation_Result,msdyn_FunctionalLocation_FormattedResult>;
  msdyn_agreement: WebMappingRetrieve<msdyn_agreement_Select,msdyn_agreement_Expand,msdyn_agreement_Filter,msdyn_agreement_Fixed,msdyn_agreement_Result,msdyn_agreement_FormattedResult>;
  msdyn_agreementbookingsetup: WebMappingRetrieve<msdyn_agreementbookingsetup_Select,msdyn_agreementbookingsetup_Expand,msdyn_agreementbookingsetup_Filter,msdyn_agreementbookingsetup_Fixed,msdyn_agreementbookingsetup_Result,msdyn_agreementbookingsetup_FormattedResult>;
  msdyn_customerasset: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  msdyn_incidenttype: WebMappingRetrieve<msdyn_incidenttype_Select,msdyn_incidenttype_Expand,msdyn_incidenttype_Filter,msdyn_incidenttype_Fixed,msdyn_incidenttype_Result,msdyn_incidenttype_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_agreementbookingincident_RelatedMany {
  msdyn_agreementbookingincident_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_agreementbookingincident_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_agreementbookingincident_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_agreementbookingincident_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_agreementbookingincident_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_agreementbookingincident_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementbookingincident_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementbookingincident_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_agreementbookingincident_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_agreementbookingincident_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_agreementbookingincident_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_agreementbookingincident_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_agreementbookingincident_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_agreementbookingincident_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_agreementbookingincident_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_agreementbookingincident_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_agreementbookingincident_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_agreementbookingincident_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_agreementbookingincident_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_agreementbookingincident_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_agreementbookingincident_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementbookingincident_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementbookingincident_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_agreementbookingincident_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_agreementbookingincident_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_agreementbookingincident_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_agreementbookingincident_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_agreementbookingincident_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_agreementbookingincident_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_agreementbookingincident_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingproduct_AgreementBookingIncident: WebMappingRetrieve<msdyn_agreementbookingproduct_Select,msdyn_agreementbookingproduct_Expand,msdyn_agreementbookingproduct_Filter,msdyn_agreementbookingproduct_Fixed,msdyn_agreementbookingproduct_Result,msdyn_agreementbookingproduct_FormattedResult>;
  msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservice_AgreementBookingIncident: WebMappingRetrieve<msdyn_agreementbookingservice_Select,msdyn_agreementbookingservice_Expand,msdyn_agreementbookingservice_Filter,msdyn_agreementbookingservice_Fixed,msdyn_agreementbookingservice_Result,msdyn_agreementbookingservice_FormattedResult>;
  msdyn_msdyn_agreementbookingincident_msdyn_agreementbookingservicetask_AgreementBookingIncident: WebMappingRetrieve<msdyn_agreementbookingservicetask_Select,msdyn_agreementbookingservicetask_Expand,msdyn_agreementbookingservicetask_Filter,msdyn_agreementbookingservicetask_Fixed,msdyn_agreementbookingservicetask_Result,msdyn_agreementbookingservicetask_FormattedResult>;
  msdyn_msdyn_agreementbookingincident_msdyn_workorderincident_AgreementBookingIncident: WebMappingRetrieve<msdyn_workorderincident_Select,msdyn_workorderincident_Expand,msdyn_workorderincident_Filter,msdyn_workorderincident_Fixed,msdyn_workorderincident_Result,msdyn_workorderincident_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_agreementbookingincidents: WebMappingRetrieve<msdyn_agreementbookingincident_Select,msdyn_agreementbookingincident_Expand,msdyn_agreementbookingincident_Filter,msdyn_agreementbookingincident_Fixed,msdyn_agreementbookingincident_Result,msdyn_agreementbookingincident_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_agreementbookingincidents: WebMappingRelated<msdyn_agreementbookingincident_RelatedOne,msdyn_agreementbookingincident_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_agreementbookingincidents: WebMappingCUDA<msdyn_agreementbookingincident_Create,msdyn_agreementbookingincident_Update,msdyn_agreementbookingincident_Select>;
}
