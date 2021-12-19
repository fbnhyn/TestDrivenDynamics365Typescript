interface UII_savedsession_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: uii_savedsession_statecode | null;
  statuscode?: uii_savedsession_statuscode | null;
  timezoneruleversionnumber?: number | null;
  uii_name?: string | null;
  uii_savedsessionid?: string | null;
  uii_sessionstate?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface UII_savedsession_Relationships {
  uii_savedsession_ActivityPointers?: ActivityPointer_Result[] | null;
  uii_savedsession_Appointments?: Appointment_Result[] | null;
  uii_savedsession_AsyncOperations?: AsyncOperation_Result[] | null;
  uii_savedsession_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  uii_savedsession_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  uii_savedsession_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  uii_savedsession_Emails?: Email_Result[] | null;
  uii_savedsession_Faxes?: Fax_Result[] | null;
  uii_savedsession_Letters?: Letter_Result[] | null;
  uii_savedsession_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  uii_savedsession_PhoneCalls?: PhoneCall_Result[] | null;
  uii_savedsession_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  uii_savedsession_ProcessSession?: ProcessSession_Result[] | null;
  uii_savedsession_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  uii_savedsession_ServiceAppointments?: ServiceAppointment_Result[] | null;
  uii_savedsession_SocialActivities?: SocialActivity_Result[] | null;
  uii_savedsession_SyncErrors?: SyncError_Result[] | null;
  uii_savedsession_Tasks?: Task_Result[] | null;
  uii_savedsession_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  uii_savedsession_msdyn_approvals?: msdyn_approval_Result[] | null;
  uii_savedsession_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  uii_savedsession_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  uii_savedsession_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  uii_savedsession_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  uii_savedsession_msfp_alerts?: msfp_alert_Result[] | null;
  uii_savedsession_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  uii_savedsession_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface UII_savedsession extends UII_savedsession_Base, UII_savedsession_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface UII_savedsession_Create extends UII_savedsession {
}
interface UII_savedsession_Update extends UII_savedsession {
}
interface UII_savedsession_Select {
  createdby_guid: WebAttribute<UII_savedsession_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UII_savedsession_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UII_savedsession_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<UII_savedsession_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<UII_savedsession_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UII_savedsession_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UII_savedsession_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<UII_savedsession_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<UII_savedsession_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UII_savedsession_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UII_savedsession_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UII_savedsession_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<UII_savedsession_Select, { statecode: uii_savedsession_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<UII_savedsession_Select, { statuscode: uii_savedsession_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<UII_savedsession_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uii_name: WebAttribute<UII_savedsession_Select, { uii_name: string | null }, {  }>;
  uii_savedsessionid: WebAttribute<UII_savedsession_Select, { uii_savedsessionid: string | null }, {  }>;
  uii_sessionstate: WebAttribute<UII_savedsession_Select, { uii_sessionstate: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<UII_savedsession_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<UII_savedsession_Select, { versionnumber: number | null }, {  }>;
}
interface UII_savedsession_Filter {
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
  statecode: uii_savedsession_statecode;
  statuscode: uii_savedsession_statuscode;
  timezoneruleversionnumber: number;
  uii_name: string;
  uii_savedsessionid: XQW.Guid;
  uii_sessionstate: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface UII_savedsession_Expand {
  createdby: WebExpand<UII_savedsession_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UII_savedsession_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UII_savedsession_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UII_savedsession_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<UII_savedsession_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UII_savedsession_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<UII_savedsession_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<UII_savedsession_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  uii_savedsession_ActivityPointers: WebExpand<UII_savedsession_Expand, ActivityPointer_Select, ActivityPointer_Filter, { uii_savedsession_ActivityPointers: ActivityPointer_Result[] }>;
  uii_savedsession_Appointments: WebExpand<UII_savedsession_Expand, Appointment_Select, Appointment_Filter, { uii_savedsession_Appointments: Appointment_Result[] }>;
  uii_savedsession_AsyncOperations: WebExpand<UII_savedsession_Expand, AsyncOperation_Select, AsyncOperation_Filter, { uii_savedsession_AsyncOperations: AsyncOperation_Result[] }>;
  uii_savedsession_BulkDeleteFailures: WebExpand<UII_savedsession_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { uii_savedsession_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  uii_savedsession_DuplicateBaseRecord: WebExpand<UII_savedsession_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_savedsession_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  uii_savedsession_DuplicateMatchingRecord: WebExpand<UII_savedsession_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_savedsession_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  uii_savedsession_Emails: WebExpand<UII_savedsession_Expand, Email_Select, Email_Filter, { uii_savedsession_Emails: Email_Result[] }>;
  uii_savedsession_Faxes: WebExpand<UII_savedsession_Expand, Fax_Select, Fax_Filter, { uii_savedsession_Faxes: Fax_Result[] }>;
  uii_savedsession_Letters: WebExpand<UII_savedsession_Expand, Letter_Select, Letter_Filter, { uii_savedsession_Letters: Letter_Result[] }>;
  uii_savedsession_MailboxTrackingFolders: WebExpand<UII_savedsession_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { uii_savedsession_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  uii_savedsession_PhoneCalls: WebExpand<UII_savedsession_Expand, PhoneCall_Select, PhoneCall_Filter, { uii_savedsession_PhoneCalls: PhoneCall_Result[] }>;
  uii_savedsession_PrincipalObjectAttributeAccesses: WebExpand<UII_savedsession_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { uii_savedsession_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  uii_savedsession_ProcessSession: WebExpand<UII_savedsession_Expand, ProcessSession_Select, ProcessSession_Filter, { uii_savedsession_ProcessSession: ProcessSession_Result[] }>;
  uii_savedsession_RecurringAppointmentMasters: WebExpand<UII_savedsession_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { uii_savedsession_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  uii_savedsession_ServiceAppointments: WebExpand<UII_savedsession_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { uii_savedsession_ServiceAppointments: ServiceAppointment_Result[] }>;
  uii_savedsession_SocialActivities: WebExpand<UII_savedsession_Expand, SocialActivity_Select, SocialActivity_Filter, { uii_savedsession_SocialActivities: SocialActivity_Result[] }>;
  uii_savedsession_SyncErrors: WebExpand<UII_savedsession_Expand, SyncError_Select, SyncError_Filter, { uii_savedsession_SyncErrors: SyncError_Result[] }>;
  uii_savedsession_Tasks: WebExpand<UII_savedsession_Expand, Task_Select, Task_Filter, { uii_savedsession_Tasks: Task_Result[] }>;
  uii_savedsession_UserEntityInstanceDatas: WebExpand<UII_savedsession_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { uii_savedsession_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  uii_savedsession_msdyn_approvals: WebExpand<UII_savedsession_Expand, msdyn_approval_Select, msdyn_approval_Filter, { uii_savedsession_msdyn_approvals: msdyn_approval_Result[] }>;
  uii_savedsession_msdyn_bookingalerts: WebExpand<UII_savedsession_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { uii_savedsession_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  uii_savedsession_msdyn_ocliveworkitems: WebExpand<UII_savedsession_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { uii_savedsession_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  uii_savedsession_msdyn_ocoutboundmessages: WebExpand<UII_savedsession_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { uii_savedsession_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  uii_savedsession_msdyn_ocsessions: WebExpand<UII_savedsession_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { uii_savedsession_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  uii_savedsession_msfp_alerts: WebExpand<UII_savedsession_Expand, msfp_alert_Select, msfp_alert_Filter, { uii_savedsession_msfp_alerts: msfp_alert_Result[] }>;
  uii_savedsession_msfp_surveyinvites: WebExpand<UII_savedsession_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { uii_savedsession_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  uii_savedsession_msfp_surveyresponses: WebExpand<UII_savedsession_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { uii_savedsession_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
}
interface UII_savedsession_FormattedResult {
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
interface UII_savedsession_Result extends UII_savedsession_Base, UII_savedsession_Relationships {
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
interface UII_savedsession_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface UII_savedsession_RelatedMany {
  uii_savedsession_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  uii_savedsession_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  uii_savedsession_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  uii_savedsession_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  uii_savedsession_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_savedsession_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_savedsession_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  uii_savedsession_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  uii_savedsession_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  uii_savedsession_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  uii_savedsession_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  uii_savedsession_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  uii_savedsession_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  uii_savedsession_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  uii_savedsession_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  uii_savedsession_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  uii_savedsession_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  uii_savedsession_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  uii_savedsession_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  uii_savedsession_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  uii_savedsession_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  uii_savedsession_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  uii_savedsession_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  uii_savedsession_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  uii_savedsession_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  uii_savedsession_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  uii_savedsession_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  uii_savedsessions: WebMappingRetrieve<UII_savedsession_Select,UII_savedsession_Expand,UII_savedsession_Filter,UII_savedsession_Fixed,UII_savedsession_Result,UII_savedsession_FormattedResult>;
}
interface WebEntitiesRelated {
  uii_savedsessions: WebMappingRelated<UII_savedsession_RelatedOne,UII_savedsession_RelatedMany>;
}
interface WebEntitiesCUDA {
  uii_savedsessions: WebMappingCUDA<UII_savedsession_Create,UII_savedsession_Update,UII_savedsession_Select>;
}
