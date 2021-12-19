interface UII_nonhostedapplication_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: uii_nonhostedapplication_statecode | null;
  statuscode?: uii_nonhostedapplication_statuscode | null;
  timezoneruleversionnumber?: number | null;
  uii_commandline?: string | null;
  uii_defaultapplication?: boolean | null;
  uii_name?: string | null;
  uii_nonhostedapplicationid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface UII_nonhostedapplication_Relationships {
  uii_nonhostedapplication_ActivityPointers?: ActivityPointer_Result[] | null;
  uii_nonhostedapplication_Annotations?: Annotation_Result[] | null;
  uii_nonhostedapplication_Appointments?: Appointment_Result[] | null;
  uii_nonhostedapplication_AsyncOperations?: AsyncOperation_Result[] | null;
  uii_nonhostedapplication_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  uii_nonhostedapplication_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  uii_nonhostedapplication_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  uii_nonhostedapplication_Emails?: Email_Result[] | null;
  uii_nonhostedapplication_Faxes?: Fax_Result[] | null;
  uii_nonhostedapplication_Letters?: Letter_Result[] | null;
  uii_nonhostedapplication_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  uii_nonhostedapplication_PhoneCalls?: PhoneCall_Result[] | null;
  uii_nonhostedapplication_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  uii_nonhostedapplication_ProcessSession?: ProcessSession_Result[] | null;
  uii_nonhostedapplication_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  uii_nonhostedapplication_ServiceAppointments?: ServiceAppointment_Result[] | null;
  uii_nonhostedapplication_SocialActivities?: SocialActivity_Result[] | null;
  uii_nonhostedapplication_SyncErrors?: SyncError_Result[] | null;
  uii_nonhostedapplication_Tasks?: Task_Result[] | null;
  uii_nonhostedapplication_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  uii_nonhostedapplication_msdyn_approvals?: msdyn_approval_Result[] | null;
  uii_nonhostedapplication_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  uii_nonhostedapplication_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  uii_nonhostedapplication_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  uii_nonhostedapplication_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  uii_nonhostedapplication_msfp_alerts?: msfp_alert_Result[] | null;
  uii_nonhostedapplication_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  uii_nonhostedapplication_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface UII_nonhostedapplication extends UII_nonhostedapplication_Base, UII_nonhostedapplication_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface UII_nonhostedapplication_Create extends UII_nonhostedapplication {
}
interface UII_nonhostedapplication_Update extends UII_nonhostedapplication {
}
interface UII_nonhostedapplication_Select {
  createdby_guid: WebAttribute<UII_nonhostedapplication_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UII_nonhostedapplication_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UII_nonhostedapplication_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<UII_nonhostedapplication_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<UII_nonhostedapplication_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UII_nonhostedapplication_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UII_nonhostedapplication_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<UII_nonhostedapplication_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<UII_nonhostedapplication_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UII_nonhostedapplication_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UII_nonhostedapplication_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UII_nonhostedapplication_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<UII_nonhostedapplication_Select, { statecode: uii_nonhostedapplication_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<UII_nonhostedapplication_Select, { statuscode: uii_nonhostedapplication_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<UII_nonhostedapplication_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uii_commandline: WebAttribute<UII_nonhostedapplication_Select, { uii_commandline: string | null }, {  }>;
  uii_defaultapplication: WebAttribute<UII_nonhostedapplication_Select, { uii_defaultapplication: boolean | null }, {  }>;
  uii_name: WebAttribute<UII_nonhostedapplication_Select, { uii_name: string | null }, {  }>;
  uii_nonhostedapplicationid: WebAttribute<UII_nonhostedapplication_Select, { uii_nonhostedapplicationid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<UII_nonhostedapplication_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<UII_nonhostedapplication_Select, { versionnumber: number | null }, {  }>;
}
interface UII_nonhostedapplication_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: uii_nonhostedapplication_statecode;
  statuscode: uii_nonhostedapplication_statuscode;
  timezoneruleversionnumber: number;
  uii_commandline: string;
  uii_defaultapplication: boolean;
  uii_name: string;
  uii_nonhostedapplicationid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface UII_nonhostedapplication_Expand {
  createdby: WebExpand<UII_nonhostedapplication_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UII_nonhostedapplication_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UII_nonhostedapplication_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UII_nonhostedapplication_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<UII_nonhostedapplication_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UII_nonhostedapplication_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<UII_nonhostedapplication_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<UII_nonhostedapplication_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  uii_nonhostedapplication_ActivityPointers: WebExpand<UII_nonhostedapplication_Expand, ActivityPointer_Select, ActivityPointer_Filter, { uii_nonhostedapplication_ActivityPointers: ActivityPointer_Result[] }>;
  uii_nonhostedapplication_Annotations: WebExpand<UII_nonhostedapplication_Expand, Annotation_Select, Annotation_Filter, { uii_nonhostedapplication_Annotations: Annotation_Result[] }>;
  uii_nonhostedapplication_Appointments: WebExpand<UII_nonhostedapplication_Expand, Appointment_Select, Appointment_Filter, { uii_nonhostedapplication_Appointments: Appointment_Result[] }>;
  uii_nonhostedapplication_AsyncOperations: WebExpand<UII_nonhostedapplication_Expand, AsyncOperation_Select, AsyncOperation_Filter, { uii_nonhostedapplication_AsyncOperations: AsyncOperation_Result[] }>;
  uii_nonhostedapplication_BulkDeleteFailures: WebExpand<UII_nonhostedapplication_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { uii_nonhostedapplication_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  uii_nonhostedapplication_DuplicateBaseRecord: WebExpand<UII_nonhostedapplication_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_nonhostedapplication_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  uii_nonhostedapplication_DuplicateMatchingRecord: WebExpand<UII_nonhostedapplication_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_nonhostedapplication_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  uii_nonhostedapplication_Emails: WebExpand<UII_nonhostedapplication_Expand, Email_Select, Email_Filter, { uii_nonhostedapplication_Emails: Email_Result[] }>;
  uii_nonhostedapplication_Faxes: WebExpand<UII_nonhostedapplication_Expand, Fax_Select, Fax_Filter, { uii_nonhostedapplication_Faxes: Fax_Result[] }>;
  uii_nonhostedapplication_Letters: WebExpand<UII_nonhostedapplication_Expand, Letter_Select, Letter_Filter, { uii_nonhostedapplication_Letters: Letter_Result[] }>;
  uii_nonhostedapplication_MailboxTrackingFolders: WebExpand<UII_nonhostedapplication_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { uii_nonhostedapplication_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  uii_nonhostedapplication_PhoneCalls: WebExpand<UII_nonhostedapplication_Expand, PhoneCall_Select, PhoneCall_Filter, { uii_nonhostedapplication_PhoneCalls: PhoneCall_Result[] }>;
  uii_nonhostedapplication_PrincipalObjectAttributeAccesses: WebExpand<UII_nonhostedapplication_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { uii_nonhostedapplication_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  uii_nonhostedapplication_ProcessSession: WebExpand<UII_nonhostedapplication_Expand, ProcessSession_Select, ProcessSession_Filter, { uii_nonhostedapplication_ProcessSession: ProcessSession_Result[] }>;
  uii_nonhostedapplication_RecurringAppointmentMasters: WebExpand<UII_nonhostedapplication_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { uii_nonhostedapplication_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  uii_nonhostedapplication_ServiceAppointments: WebExpand<UII_nonhostedapplication_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { uii_nonhostedapplication_ServiceAppointments: ServiceAppointment_Result[] }>;
  uii_nonhostedapplication_SocialActivities: WebExpand<UII_nonhostedapplication_Expand, SocialActivity_Select, SocialActivity_Filter, { uii_nonhostedapplication_SocialActivities: SocialActivity_Result[] }>;
  uii_nonhostedapplication_SyncErrors: WebExpand<UII_nonhostedapplication_Expand, SyncError_Select, SyncError_Filter, { uii_nonhostedapplication_SyncErrors: SyncError_Result[] }>;
  uii_nonhostedapplication_Tasks: WebExpand<UII_nonhostedapplication_Expand, Task_Select, Task_Filter, { uii_nonhostedapplication_Tasks: Task_Result[] }>;
  uii_nonhostedapplication_UserEntityInstanceDatas: WebExpand<UII_nonhostedapplication_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { uii_nonhostedapplication_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  uii_nonhostedapplication_msdyn_approvals: WebExpand<UII_nonhostedapplication_Expand, msdyn_approval_Select, msdyn_approval_Filter, { uii_nonhostedapplication_msdyn_approvals: msdyn_approval_Result[] }>;
  uii_nonhostedapplication_msdyn_bookingalerts: WebExpand<UII_nonhostedapplication_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { uii_nonhostedapplication_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  uii_nonhostedapplication_msdyn_ocliveworkitems: WebExpand<UII_nonhostedapplication_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { uii_nonhostedapplication_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  uii_nonhostedapplication_msdyn_ocoutboundmessages: WebExpand<UII_nonhostedapplication_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { uii_nonhostedapplication_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  uii_nonhostedapplication_msdyn_ocsessions: WebExpand<UII_nonhostedapplication_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { uii_nonhostedapplication_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  uii_nonhostedapplication_msfp_alerts: WebExpand<UII_nonhostedapplication_Expand, msfp_alert_Select, msfp_alert_Filter, { uii_nonhostedapplication_msfp_alerts: msfp_alert_Result[] }>;
  uii_nonhostedapplication_msfp_surveyinvites: WebExpand<UII_nonhostedapplication_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { uii_nonhostedapplication_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  uii_nonhostedapplication_msfp_surveyresponses: WebExpand<UII_nonhostedapplication_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { uii_nonhostedapplication_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
}
interface UII_nonhostedapplication_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface UII_nonhostedapplication_Result extends UII_nonhostedapplication_Base, UII_nonhostedapplication_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface UII_nonhostedapplication_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface UII_nonhostedapplication_RelatedMany {
  uii_nonhostedapplication_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  uii_nonhostedapplication_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  uii_nonhostedapplication_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  uii_nonhostedapplication_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  uii_nonhostedapplication_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  uii_nonhostedapplication_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_nonhostedapplication_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_nonhostedapplication_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  uii_nonhostedapplication_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  uii_nonhostedapplication_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  uii_nonhostedapplication_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  uii_nonhostedapplication_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  uii_nonhostedapplication_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  uii_nonhostedapplication_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  uii_nonhostedapplication_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  uii_nonhostedapplication_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  uii_nonhostedapplication_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  uii_nonhostedapplication_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  uii_nonhostedapplication_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  uii_nonhostedapplication_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  uii_nonhostedapplication_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  uii_nonhostedapplication_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  uii_nonhostedapplication_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  uii_nonhostedapplication_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  uii_nonhostedapplication_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  uii_nonhostedapplication_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  uii_nonhostedapplication_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  uii_nonhostedapplication_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  uii_nonhostedapplications: WebMappingRetrieve<UII_nonhostedapplication_Select,UII_nonhostedapplication_Expand,UII_nonhostedapplication_Filter,UII_nonhostedapplication_Fixed,UII_nonhostedapplication_Result,UII_nonhostedapplication_FormattedResult>;
}
interface WebEntitiesRelated {
  uii_nonhostedapplications: WebMappingRelated<UII_nonhostedapplication_RelatedOne,UII_nonhostedapplication_RelatedMany>;
}
interface WebEntitiesCUDA {
  uii_nonhostedapplications: WebMappingCUDA<UII_nonhostedapplication_Create,UII_nonhostedapplication_Update,UII_nonhostedapplication_Select>;
}
