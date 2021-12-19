interface msdyn_processnotes_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_details?: string | null;
  msdyn_entity?: string | null;
  msdyn_entityname?: string | null;
  msdyn_form?: string | null;
  msdyn_message?: string | null;
  msdyn_name?: string | null;
  msdyn_processnotesid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_processnotes_statecode | null;
  statuscode?: msdyn_processnotes_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_processnotes_Relationships {
  msdyn_processnotes_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_processnotes_Annotations?: Annotation_Result[] | null;
  msdyn_processnotes_Appointments?: Appointment_Result[] | null;
  msdyn_processnotes_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_processnotes_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_processnotes_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_processnotes_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_processnotes_Emails?: Email_Result[] | null;
  msdyn_processnotes_Faxes?: Fax_Result[] | null;
  msdyn_processnotes_Letters?: Letter_Result[] | null;
  msdyn_processnotes_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_processnotes_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_processnotes_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_processnotes_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_processnotes_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_processnotes_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_processnotes_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_processnotes_SyncErrors?: SyncError_Result[] | null;
  msdyn_processnotes_Tasks?: Task_Result[] | null;
  msdyn_processnotes_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_processnotes_connections1?: Connection_Result[] | null;
  msdyn_processnotes_connections2?: Connection_Result[] | null;
  msdyn_processnotes_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_processnotes_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_processnotes_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_processnotes_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_processnotes_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_processnotes_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_processnotes_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_processnotes_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_processnotes extends msdyn_processnotes_Base, msdyn_processnotes_Relationships {
}
interface msdyn_processnotes_Create extends msdyn_processnotes {
}
interface msdyn_processnotes_Update extends msdyn_processnotes {
}
interface msdyn_processnotes_Select {
  createdby_guid: WebAttribute<msdyn_processnotes_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_processnotes_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_processnotes_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_processnotes_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_processnotes_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_processnotes_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_processnotes_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_details: WebAttribute<msdyn_processnotes_Select, { msdyn_details: string | null }, {  }>;
  msdyn_entity: WebAttribute<msdyn_processnotes_Select, { msdyn_entity: string | null }, {  }>;
  msdyn_entityname: WebAttribute<msdyn_processnotes_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_form: WebAttribute<msdyn_processnotes_Select, { msdyn_form: string | null }, {  }>;
  msdyn_message: WebAttribute<msdyn_processnotes_Select, { msdyn_message: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_processnotes_Select, { msdyn_name: string | null }, {  }>;
  msdyn_processnotesid: WebAttribute<msdyn_processnotes_Select, { msdyn_processnotesid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_processnotes_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_processnotes_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_processnotes_Select, { statecode: msdyn_processnotes_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_processnotes_Select, { statuscode: msdyn_processnotes_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_processnotes_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_processnotes_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_processnotes_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_processnotes_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_details: string;
  msdyn_entity: string;
  msdyn_entityname: string;
  msdyn_form: string;
  msdyn_message: string;
  msdyn_name: string;
  msdyn_processnotesid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_processnotes_statecode;
  statuscode: msdyn_processnotes_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_processnotes_Expand {
  createdby: WebExpand<msdyn_processnotes_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_processnotes_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_processnotes_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_processnotes_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_processnotes_ActivityPointers: WebExpand<msdyn_processnotes_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_processnotes_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_processnotes_Annotations: WebExpand<msdyn_processnotes_Expand, Annotation_Select, Annotation_Filter, { msdyn_processnotes_Annotations: Annotation_Result[] }>;
  msdyn_processnotes_Appointments: WebExpand<msdyn_processnotes_Expand, Appointment_Select, Appointment_Filter, { msdyn_processnotes_Appointments: Appointment_Result[] }>;
  msdyn_processnotes_AsyncOperations: WebExpand<msdyn_processnotes_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_processnotes_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_processnotes_BulkDeleteFailures: WebExpand<msdyn_processnotes_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_processnotes_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_processnotes_DuplicateBaseRecord: WebExpand<msdyn_processnotes_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_processnotes_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_processnotes_DuplicateMatchingRecord: WebExpand<msdyn_processnotes_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_processnotes_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_processnotes_Emails: WebExpand<msdyn_processnotes_Expand, Email_Select, Email_Filter, { msdyn_processnotes_Emails: Email_Result[] }>;
  msdyn_processnotes_Faxes: WebExpand<msdyn_processnotes_Expand, Fax_Select, Fax_Filter, { msdyn_processnotes_Faxes: Fax_Result[] }>;
  msdyn_processnotes_Letters: WebExpand<msdyn_processnotes_Expand, Letter_Select, Letter_Filter, { msdyn_processnotes_Letters: Letter_Result[] }>;
  msdyn_processnotes_MailboxTrackingFolders: WebExpand<msdyn_processnotes_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_processnotes_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_processnotes_PhoneCalls: WebExpand<msdyn_processnotes_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_processnotes_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_processnotes_PrincipalObjectAttributeAccesses: WebExpand<msdyn_processnotes_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_processnotes_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_processnotes_ProcessSession: WebExpand<msdyn_processnotes_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_processnotes_ProcessSession: ProcessSession_Result[] }>;
  msdyn_processnotes_RecurringAppointmentMasters: WebExpand<msdyn_processnotes_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_processnotes_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_processnotes_ServiceAppointments: WebExpand<msdyn_processnotes_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_processnotes_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_processnotes_SocialActivities: WebExpand<msdyn_processnotes_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_processnotes_SocialActivities: SocialActivity_Result[] }>;
  msdyn_processnotes_SyncErrors: WebExpand<msdyn_processnotes_Expand, SyncError_Select, SyncError_Filter, { msdyn_processnotes_SyncErrors: SyncError_Result[] }>;
  msdyn_processnotes_Tasks: WebExpand<msdyn_processnotes_Expand, Task_Select, Task_Filter, { msdyn_processnotes_Tasks: Task_Result[] }>;
  msdyn_processnotes_UserEntityInstanceDatas: WebExpand<msdyn_processnotes_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_processnotes_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_processnotes_connections1: WebExpand<msdyn_processnotes_Expand, Connection_Select, Connection_Filter, { msdyn_processnotes_connections1: Connection_Result[] }>;
  msdyn_processnotes_connections2: WebExpand<msdyn_processnotes_Expand, Connection_Select, Connection_Filter, { msdyn_processnotes_connections2: Connection_Result[] }>;
  msdyn_processnotes_msdyn_approvals: WebExpand<msdyn_processnotes_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_processnotes_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_processnotes_msdyn_bookingalerts: WebExpand<msdyn_processnotes_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_processnotes_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_processnotes_msdyn_ocliveworkitems: WebExpand<msdyn_processnotes_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_processnotes_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_processnotes_msdyn_ocoutboundmessages: WebExpand<msdyn_processnotes_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_processnotes_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_processnotes_msdyn_ocsessions: WebExpand<msdyn_processnotes_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_processnotes_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_processnotes_msfp_alerts: WebExpand<msdyn_processnotes_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_processnotes_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_processnotes_msfp_surveyinvites: WebExpand<msdyn_processnotes_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_processnotes_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_processnotes_msfp_surveyresponses: WebExpand<msdyn_processnotes_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_processnotes_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  organizationid: WebExpand<msdyn_processnotes_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_processnotes_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_processnotes_Result extends msdyn_processnotes_Base, msdyn_processnotes_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_processnotes_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_processnotes_RelatedMany {
  msdyn_processnotes_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_processnotes_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_processnotes_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_processnotes_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_processnotes_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_processnotes_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_processnotes_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_processnotes_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_processnotes_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_processnotes_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_processnotes_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_processnotes_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_processnotes_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_processnotes_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_processnotes_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_processnotes_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_processnotes_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_processnotes_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_processnotes_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_processnotes_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_processnotes_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_processnotes_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_processnotes_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_processnotes_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_processnotes_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_processnotes_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_processnotes_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_processnotes_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_processnotes_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_processnotes_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_processnoteses: WebMappingRetrieve<msdyn_processnotes_Select,msdyn_processnotes_Expand,msdyn_processnotes_Filter,msdyn_processnotes_Fixed,msdyn_processnotes_Result,msdyn_processnotes_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_processnoteses: WebMappingRelated<msdyn_processnotes_RelatedOne,msdyn_processnotes_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_processnoteses: WebMappingCUDA<msdyn_processnotes_Create,msdyn_processnotes_Update,msdyn_processnotes_Select>;
}
