interface msdyn_quotebookingincident_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_estimatedduration?: number | null;
  msdyn_incidentitemscopied?: boolean | null;
  msdyn_internalflags?: string | null;
  msdyn_name?: string | null;
  msdyn_quotebookingincidentid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_quotebookingincident_statecode | null;
  statuscode?: msdyn_quotebookingincident_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_quotebookingincident_Relationships {
  msdyn_Quote?: Quote_Result | null;
  msdyn_msdyn_quotebookingincident_msdyn_quotebookingproduct_QuoteBookingIncident?: msdyn_quotebookingproduct_Result[] | null;
  msdyn_msdyn_quotebookingincident_msdyn_quotebookingservice_QuoteBookingIncident?: msdyn_quotebookingservice_Result[] | null;
  msdyn_msdyn_quotebookingincident_msdyn_quotebookingservicetask_QuoteBookingIncident?: msdyn_quotebookingservicetask_Result[] | null;
  msdyn_quotebookingincident_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_quotebookingincident_Annotations?: Annotation_Result[] | null;
  msdyn_quotebookingincident_Appointments?: Appointment_Result[] | null;
  msdyn_quotebookingincident_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_quotebookingincident_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_quotebookingincident_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotebookingincident_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotebookingincident_Emails?: Email_Result[] | null;
  msdyn_quotebookingincident_Faxes?: Fax_Result[] | null;
  msdyn_quotebookingincident_Letters?: Letter_Result[] | null;
  msdyn_quotebookingincident_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_quotebookingincident_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_quotebookingincident_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_quotebookingincident_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_quotebookingincident_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_quotebookingincident_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_quotebookingincident_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_quotebookingincident_SyncErrors?: SyncError_Result[] | null;
  msdyn_quotebookingincident_Tasks?: Task_Result[] | null;
  msdyn_quotebookingincident_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_quotebookingincident_connections1?: Connection_Result[] | null;
  msdyn_quotebookingincident_connections2?: Connection_Result[] | null;
  msdyn_quotebookingincident_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_quotebookingincident_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_quotebookingincident_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_quotebookingincident_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_quotebookingincident_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_quotebookingincident_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_quotebookingincident_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_quotebookingincident_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_quotebookingincident extends msdyn_quotebookingincident_Base, msdyn_quotebookingincident_Relationships {
  msdyn_Quote_bind$quotes?: string | null;
  msdyn_customerasset_bind$msdyn_customerassets?: string | null;
  msdyn_incidenttype_bind$msdyn_incidenttypes?: string | null;
  msdyn_quotebookingsetup_bind$msdyn_quotebookingsetups?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_quotebookingincident_Create extends msdyn_quotebookingincident {
}
interface msdyn_quotebookingincident_Update extends msdyn_quotebookingincident {
}
interface msdyn_quotebookingincident_Select {
  createdby_guid: WebAttribute<msdyn_quotebookingincident_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_quotebookingincident_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_quotebookingincident_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_quotebookingincident_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_quotebookingincident_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_quotebookingincident_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_quotebookingincident_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_customerasset_guid: WebAttribute<msdyn_quotebookingincident_Select, { msdyn_customerasset_guid: string | null }, { msdyn_customerasset_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_quotebookingincident_Select, { msdyn_description: string | null }, {  }>;
  msdyn_estimatedduration: WebAttribute<msdyn_quotebookingincident_Select, { msdyn_estimatedduration: number | null }, {  }>;
  msdyn_incidentitemscopied: WebAttribute<msdyn_quotebookingincident_Select, { msdyn_incidentitemscopied: boolean | null }, {  }>;
  msdyn_incidenttype_guid: WebAttribute<msdyn_quotebookingincident_Select, { msdyn_incidenttype_guid: string | null }, { msdyn_incidenttype_formatted?: string }>;
  msdyn_internalflags: WebAttribute<msdyn_quotebookingincident_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_quotebookingincident_Select, { msdyn_name: string | null }, {  }>;
  msdyn_quote_guid: WebAttribute<msdyn_quotebookingincident_Select, { msdyn_quote_guid: string | null }, { msdyn_quote_formatted?: string }>;
  msdyn_quotebookingincidentid: WebAttribute<msdyn_quotebookingincident_Select, { msdyn_quotebookingincidentid: string | null }, {  }>;
  msdyn_quotebookingsetup_guid: WebAttribute<msdyn_quotebookingincident_Select, { msdyn_quotebookingsetup_guid: string | null }, { msdyn_quotebookingsetup_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_quotebookingincident_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_quotebookingincident_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_quotebookingincident_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_quotebookingincident_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_quotebookingincident_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_quotebookingincident_Select, { statecode: msdyn_quotebookingincident_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_quotebookingincident_Select, { statuscode: msdyn_quotebookingincident_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_quotebookingincident_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_quotebookingincident_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_quotebookingincident_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_quotebookingincident_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_customerasset_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_estimatedduration: number;
  msdyn_incidentitemscopied: boolean;
  msdyn_incidenttype_guid: XQW.Guid;
  msdyn_internalflags: string;
  msdyn_name: string;
  msdyn_quote_guid: XQW.Guid;
  msdyn_quotebookingincidentid: XQW.Guid;
  msdyn_quotebookingsetup_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_quotebookingincident_statecode;
  statuscode: msdyn_quotebookingincident_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_quotebookingincident_Expand {
  createdby: WebExpand<msdyn_quotebookingincident_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_quotebookingincident_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_quotebookingincident_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_quotebookingincident_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Quote: WebExpand<msdyn_quotebookingincident_Expand, Quote_Select, Quote_Filter, { msdyn_Quote: Quote_Result }>;
  msdyn_customerasset: WebExpand<msdyn_quotebookingincident_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_customerasset: msdyn_customerasset_Result }>;
  msdyn_incidenttype: WebExpand<msdyn_quotebookingincident_Expand, msdyn_incidenttype_Select, msdyn_incidenttype_Filter, { msdyn_incidenttype: msdyn_incidenttype_Result }>;
  msdyn_msdyn_quotebookingincident_msdyn_quotebookingproduct_QuoteBookingIncident: WebExpand<msdyn_quotebookingincident_Expand, msdyn_quotebookingproduct_Select, msdyn_quotebookingproduct_Filter, { msdyn_msdyn_quotebookingincident_msdyn_quotebookingproduct_QuoteBookingIncident: msdyn_quotebookingproduct_Result[] }>;
  msdyn_msdyn_quotebookingincident_msdyn_quotebookingservice_QuoteBookingIncident: WebExpand<msdyn_quotebookingincident_Expand, msdyn_quotebookingservice_Select, msdyn_quotebookingservice_Filter, { msdyn_msdyn_quotebookingincident_msdyn_quotebookingservice_QuoteBookingIncident: msdyn_quotebookingservice_Result[] }>;
  msdyn_msdyn_quotebookingincident_msdyn_quotebookingservicetask_QuoteBookingIncident: WebExpand<msdyn_quotebookingincident_Expand, msdyn_quotebookingservicetask_Select, msdyn_quotebookingservicetask_Filter, { msdyn_msdyn_quotebookingincident_msdyn_quotebookingservicetask_QuoteBookingIncident: msdyn_quotebookingservicetask_Result[] }>;
  msdyn_quotebookingincident_ActivityPointers: WebExpand<msdyn_quotebookingincident_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_quotebookingincident_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_quotebookingincident_Annotations: WebExpand<msdyn_quotebookingincident_Expand, Annotation_Select, Annotation_Filter, { msdyn_quotebookingincident_Annotations: Annotation_Result[] }>;
  msdyn_quotebookingincident_Appointments: WebExpand<msdyn_quotebookingincident_Expand, Appointment_Select, Appointment_Filter, { msdyn_quotebookingincident_Appointments: Appointment_Result[] }>;
  msdyn_quotebookingincident_AsyncOperations: WebExpand<msdyn_quotebookingincident_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_quotebookingincident_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_quotebookingincident_BulkDeleteFailures: WebExpand<msdyn_quotebookingincident_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_quotebookingincident_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_quotebookingincident_DuplicateBaseRecord: WebExpand<msdyn_quotebookingincident_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotebookingincident_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_quotebookingincident_DuplicateMatchingRecord: WebExpand<msdyn_quotebookingincident_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotebookingincident_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_quotebookingincident_Emails: WebExpand<msdyn_quotebookingincident_Expand, Email_Select, Email_Filter, { msdyn_quotebookingincident_Emails: Email_Result[] }>;
  msdyn_quotebookingincident_Faxes: WebExpand<msdyn_quotebookingincident_Expand, Fax_Select, Fax_Filter, { msdyn_quotebookingincident_Faxes: Fax_Result[] }>;
  msdyn_quotebookingincident_Letters: WebExpand<msdyn_quotebookingincident_Expand, Letter_Select, Letter_Filter, { msdyn_quotebookingincident_Letters: Letter_Result[] }>;
  msdyn_quotebookingincident_MailboxTrackingFolders: WebExpand<msdyn_quotebookingincident_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_quotebookingincident_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_quotebookingincident_PhoneCalls: WebExpand<msdyn_quotebookingincident_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_quotebookingincident_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_quotebookingincident_PrincipalObjectAttributeAccesses: WebExpand<msdyn_quotebookingincident_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_quotebookingincident_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_quotebookingincident_ProcessSession: WebExpand<msdyn_quotebookingincident_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_quotebookingincident_ProcessSession: ProcessSession_Result[] }>;
  msdyn_quotebookingincident_RecurringAppointmentMasters: WebExpand<msdyn_quotebookingincident_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_quotebookingincident_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_quotebookingincident_ServiceAppointments: WebExpand<msdyn_quotebookingincident_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_quotebookingincident_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_quotebookingincident_SocialActivities: WebExpand<msdyn_quotebookingincident_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_quotebookingincident_SocialActivities: SocialActivity_Result[] }>;
  msdyn_quotebookingincident_SyncErrors: WebExpand<msdyn_quotebookingincident_Expand, SyncError_Select, SyncError_Filter, { msdyn_quotebookingincident_SyncErrors: SyncError_Result[] }>;
  msdyn_quotebookingincident_Tasks: WebExpand<msdyn_quotebookingincident_Expand, Task_Select, Task_Filter, { msdyn_quotebookingincident_Tasks: Task_Result[] }>;
  msdyn_quotebookingincident_UserEntityInstanceDatas: WebExpand<msdyn_quotebookingincident_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_quotebookingincident_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_quotebookingincident_connections1: WebExpand<msdyn_quotebookingincident_Expand, Connection_Select, Connection_Filter, { msdyn_quotebookingincident_connections1: Connection_Result[] }>;
  msdyn_quotebookingincident_connections2: WebExpand<msdyn_quotebookingincident_Expand, Connection_Select, Connection_Filter, { msdyn_quotebookingincident_connections2: Connection_Result[] }>;
  msdyn_quotebookingincident_msdyn_approvals: WebExpand<msdyn_quotebookingincident_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_quotebookingincident_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_quotebookingincident_msdyn_bookingalerts: WebExpand<msdyn_quotebookingincident_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_quotebookingincident_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_quotebookingincident_msdyn_ocliveworkitems: WebExpand<msdyn_quotebookingincident_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_quotebookingincident_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_quotebookingincident_msdyn_ocoutboundmessages: WebExpand<msdyn_quotebookingincident_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_quotebookingincident_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_quotebookingincident_msdyn_ocsessions: WebExpand<msdyn_quotebookingincident_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_quotebookingincident_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_quotebookingincident_msfp_alerts: WebExpand<msdyn_quotebookingincident_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_quotebookingincident_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_quotebookingincident_msfp_surveyinvites: WebExpand<msdyn_quotebookingincident_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_quotebookingincident_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_quotebookingincident_msfp_surveyresponses: WebExpand<msdyn_quotebookingincident_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_quotebookingincident_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_quotebookingsetup: WebExpand<msdyn_quotebookingincident_Expand, msdyn_quotebookingsetup_Select, msdyn_quotebookingsetup_Filter, { msdyn_quotebookingsetup: msdyn_quotebookingsetup_Result }>;
  ownerid: WebExpand<msdyn_quotebookingincident_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_quotebookingincident_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_quotebookingincident_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_quotebookingincident_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_quotebookingincident_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_customerasset_formatted?: string;
  msdyn_incidenttype_formatted?: string;
  msdyn_quote_formatted?: string;
  msdyn_quotebookingsetup_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_quotebookingincident_Result extends msdyn_quotebookingincident_Base, msdyn_quotebookingincident_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_customerasset_guid: string | null;
  msdyn_incidenttype_guid: string | null;
  msdyn_quote_guid: string | null;
  msdyn_quotebookingsetup_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_quotebookingincident_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Quote: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  msdyn_customerasset: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  msdyn_incidenttype: WebMappingRetrieve<msdyn_incidenttype_Select,msdyn_incidenttype_Expand,msdyn_incidenttype_Filter,msdyn_incidenttype_Fixed,msdyn_incidenttype_Result,msdyn_incidenttype_FormattedResult>;
  msdyn_quotebookingsetup: WebMappingRetrieve<msdyn_quotebookingsetup_Select,msdyn_quotebookingsetup_Expand,msdyn_quotebookingsetup_Filter,msdyn_quotebookingsetup_Fixed,msdyn_quotebookingsetup_Result,msdyn_quotebookingsetup_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_quotebookingincident_RelatedMany {
  msdyn_msdyn_quotebookingincident_msdyn_quotebookingproduct_QuoteBookingIncident: WebMappingRetrieve<msdyn_quotebookingproduct_Select,msdyn_quotebookingproduct_Expand,msdyn_quotebookingproduct_Filter,msdyn_quotebookingproduct_Fixed,msdyn_quotebookingproduct_Result,msdyn_quotebookingproduct_FormattedResult>;
  msdyn_msdyn_quotebookingincident_msdyn_quotebookingservice_QuoteBookingIncident: WebMappingRetrieve<msdyn_quotebookingservice_Select,msdyn_quotebookingservice_Expand,msdyn_quotebookingservice_Filter,msdyn_quotebookingservice_Fixed,msdyn_quotebookingservice_Result,msdyn_quotebookingservice_FormattedResult>;
  msdyn_msdyn_quotebookingincident_msdyn_quotebookingservicetask_QuoteBookingIncident: WebMappingRetrieve<msdyn_quotebookingservicetask_Select,msdyn_quotebookingservicetask_Expand,msdyn_quotebookingservicetask_Filter,msdyn_quotebookingservicetask_Fixed,msdyn_quotebookingservicetask_Result,msdyn_quotebookingservicetask_FormattedResult>;
  msdyn_quotebookingincident_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_quotebookingincident_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_quotebookingincident_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_quotebookingincident_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_quotebookingincident_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_quotebookingincident_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotebookingincident_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotebookingincident_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_quotebookingincident_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_quotebookingincident_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_quotebookingincident_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_quotebookingincident_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_quotebookingincident_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_quotebookingincident_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_quotebookingincident_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_quotebookingincident_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_quotebookingincident_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_quotebookingincident_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_quotebookingincident_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_quotebookingincident_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_quotebookingincident_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_quotebookingincident_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_quotebookingincident_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_quotebookingincident_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_quotebookingincident_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_quotebookingincident_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_quotebookingincident_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_quotebookingincident_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_quotebookingincident_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_quotebookingincident_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_quotebookingincidents: WebMappingRetrieve<msdyn_quotebookingincident_Select,msdyn_quotebookingincident_Expand,msdyn_quotebookingincident_Filter,msdyn_quotebookingincident_Fixed,msdyn_quotebookingincident_Result,msdyn_quotebookingincident_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_quotebookingincidents: WebMappingRelated<msdyn_quotebookingincident_RelatedOne,msdyn_quotebookingincident_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_quotebookingincidents: WebMappingCUDA<msdyn_quotebookingincident_Create,msdyn_quotebookingincident_Update,msdyn_quotebookingincident_Select>;
}
