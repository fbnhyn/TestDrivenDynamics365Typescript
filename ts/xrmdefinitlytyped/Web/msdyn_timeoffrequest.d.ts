interface msdyn_timeoffrequest_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_duration?: number | null;
  msdyn_endtime?: Date | null;
  msdyn_internalflags?: string | null;
  msdyn_name?: string | null;
  msdyn_starttime?: Date | null;
  msdyn_timeoffrequestid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_timeoffrequest_statecode | null;
  statuscode?: msdyn_timeoffrequest_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_timeoffrequest_Relationships {
  msdyn_msdyn_timeoffrequest_msdyn_timeentry?: msdyn_timeentry_Result[] | null;
  msdyn_timeoffrequest_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_timeoffrequest_Annotations?: Annotation_Result[] | null;
  msdyn_timeoffrequest_Appointments?: Appointment_Result[] | null;
  msdyn_timeoffrequest_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_timeoffrequest_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_timeoffrequest_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_timeoffrequest_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_timeoffrequest_Emails?: Email_Result[] | null;
  msdyn_timeoffrequest_Faxes?: Fax_Result[] | null;
  msdyn_timeoffrequest_Letters?: Letter_Result[] | null;
  msdyn_timeoffrequest_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_timeoffrequest_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_timeoffrequest_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_timeoffrequest_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_timeoffrequest_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_timeoffrequest_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_timeoffrequest_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_timeoffrequest_SyncErrors?: SyncError_Result[] | null;
  msdyn_timeoffrequest_Tasks?: Task_Result[] | null;
  msdyn_timeoffrequest_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_timeoffrequest_connections1?: Connection_Result[] | null;
  msdyn_timeoffrequest_connections2?: Connection_Result[] | null;
  msdyn_timeoffrequest_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_timeoffrequest_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_timeoffrequest_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_timeoffrequest_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_timeoffrequest_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_timeoffrequest_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_timeoffrequest_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_timeoffrequest_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_timeoffrequest extends msdyn_timeoffrequest_Base, msdyn_timeoffrequest_Relationships {
  msdyn_approvedby_bind$systemusers?: string | null;
  msdyn_resource_bind$bookableresources?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_timeoffrequest_Create extends msdyn_timeoffrequest {
}
interface msdyn_timeoffrequest_Update extends msdyn_timeoffrequest {
}
interface msdyn_timeoffrequest_Select {
  createdby_guid: WebAttribute<msdyn_timeoffrequest_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_timeoffrequest_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_timeoffrequest_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_timeoffrequest_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_timeoffrequest_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_timeoffrequest_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_timeoffrequest_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_approvedby_guid: WebAttribute<msdyn_timeoffrequest_Select, { msdyn_approvedby_guid: string | null }, { msdyn_approvedby_formatted?: string }>;
  msdyn_duration: WebAttribute<msdyn_timeoffrequest_Select, { msdyn_duration: number | null }, {  }>;
  msdyn_endtime: WebAttribute<msdyn_timeoffrequest_Select, { msdyn_endtime: Date | null }, { msdyn_endtime_formatted?: string }>;
  msdyn_internalflags: WebAttribute<msdyn_timeoffrequest_Select, { msdyn_internalflags: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_timeoffrequest_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resource_guid: WebAttribute<msdyn_timeoffrequest_Select, { msdyn_resource_guid: string | null }, { msdyn_resource_formatted?: string }>;
  msdyn_starttime: WebAttribute<msdyn_timeoffrequest_Select, { msdyn_starttime: Date | null }, { msdyn_starttime_formatted?: string }>;
  msdyn_timeoffrequestid: WebAttribute<msdyn_timeoffrequest_Select, { msdyn_timeoffrequestid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_timeoffrequest_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_timeoffrequest_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_timeoffrequest_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_timeoffrequest_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_timeoffrequest_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_timeoffrequest_Select, { statecode: msdyn_timeoffrequest_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_timeoffrequest_Select, { statuscode: msdyn_timeoffrequest_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_timeoffrequest_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_timeoffrequest_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_timeoffrequest_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_timeoffrequest_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_approvedby_guid: XQW.Guid;
  msdyn_duration: number;
  msdyn_endtime: Date;
  msdyn_internalflags: string;
  msdyn_name: string;
  msdyn_resource_guid: XQW.Guid;
  msdyn_starttime: Date;
  msdyn_timeoffrequestid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_timeoffrequest_statecode;
  statuscode: msdyn_timeoffrequest_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_timeoffrequest_Expand {
  createdby: WebExpand<msdyn_timeoffrequest_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_timeoffrequest_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_timeoffrequest_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_timeoffrequest_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_approvedby: WebExpand<msdyn_timeoffrequest_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_approvedby: SystemUser_Result }>;
  msdyn_msdyn_timeoffrequest_msdyn_timeentry: WebExpand<msdyn_timeoffrequest_Expand, msdyn_timeentry_Select, msdyn_timeentry_Filter, { msdyn_msdyn_timeoffrequest_msdyn_timeentry: msdyn_timeentry_Result[] }>;
  msdyn_resource: WebExpand<msdyn_timeoffrequest_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_resource: BookableResource_Result }>;
  msdyn_timeoffrequest_ActivityPointers: WebExpand<msdyn_timeoffrequest_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_timeoffrequest_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_timeoffrequest_Annotations: WebExpand<msdyn_timeoffrequest_Expand, Annotation_Select, Annotation_Filter, { msdyn_timeoffrequest_Annotations: Annotation_Result[] }>;
  msdyn_timeoffrequest_Appointments: WebExpand<msdyn_timeoffrequest_Expand, Appointment_Select, Appointment_Filter, { msdyn_timeoffrequest_Appointments: Appointment_Result[] }>;
  msdyn_timeoffrequest_AsyncOperations: WebExpand<msdyn_timeoffrequest_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_timeoffrequest_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_timeoffrequest_BulkDeleteFailures: WebExpand<msdyn_timeoffrequest_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_timeoffrequest_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_timeoffrequest_DuplicateBaseRecord: WebExpand<msdyn_timeoffrequest_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_timeoffrequest_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_timeoffrequest_DuplicateMatchingRecord: WebExpand<msdyn_timeoffrequest_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_timeoffrequest_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_timeoffrequest_Emails: WebExpand<msdyn_timeoffrequest_Expand, Email_Select, Email_Filter, { msdyn_timeoffrequest_Emails: Email_Result[] }>;
  msdyn_timeoffrequest_Faxes: WebExpand<msdyn_timeoffrequest_Expand, Fax_Select, Fax_Filter, { msdyn_timeoffrequest_Faxes: Fax_Result[] }>;
  msdyn_timeoffrequest_Letters: WebExpand<msdyn_timeoffrequest_Expand, Letter_Select, Letter_Filter, { msdyn_timeoffrequest_Letters: Letter_Result[] }>;
  msdyn_timeoffrequest_MailboxTrackingFolders: WebExpand<msdyn_timeoffrequest_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_timeoffrequest_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_timeoffrequest_PhoneCalls: WebExpand<msdyn_timeoffrequest_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_timeoffrequest_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_timeoffrequest_PrincipalObjectAttributeAccesses: WebExpand<msdyn_timeoffrequest_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_timeoffrequest_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_timeoffrequest_ProcessSession: WebExpand<msdyn_timeoffrequest_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_timeoffrequest_ProcessSession: ProcessSession_Result[] }>;
  msdyn_timeoffrequest_RecurringAppointmentMasters: WebExpand<msdyn_timeoffrequest_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_timeoffrequest_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_timeoffrequest_ServiceAppointments: WebExpand<msdyn_timeoffrequest_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_timeoffrequest_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_timeoffrequest_SocialActivities: WebExpand<msdyn_timeoffrequest_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_timeoffrequest_SocialActivities: SocialActivity_Result[] }>;
  msdyn_timeoffrequest_SyncErrors: WebExpand<msdyn_timeoffrequest_Expand, SyncError_Select, SyncError_Filter, { msdyn_timeoffrequest_SyncErrors: SyncError_Result[] }>;
  msdyn_timeoffrequest_Tasks: WebExpand<msdyn_timeoffrequest_Expand, Task_Select, Task_Filter, { msdyn_timeoffrequest_Tasks: Task_Result[] }>;
  msdyn_timeoffrequest_UserEntityInstanceDatas: WebExpand<msdyn_timeoffrequest_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_timeoffrequest_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_timeoffrequest_connections1: WebExpand<msdyn_timeoffrequest_Expand, Connection_Select, Connection_Filter, { msdyn_timeoffrequest_connections1: Connection_Result[] }>;
  msdyn_timeoffrequest_connections2: WebExpand<msdyn_timeoffrequest_Expand, Connection_Select, Connection_Filter, { msdyn_timeoffrequest_connections2: Connection_Result[] }>;
  msdyn_timeoffrequest_msdyn_approvals: WebExpand<msdyn_timeoffrequest_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_timeoffrequest_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_timeoffrequest_msdyn_bookingalerts: WebExpand<msdyn_timeoffrequest_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_timeoffrequest_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_timeoffrequest_msdyn_ocliveworkitems: WebExpand<msdyn_timeoffrequest_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_timeoffrequest_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_timeoffrequest_msdyn_ocoutboundmessages: WebExpand<msdyn_timeoffrequest_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_timeoffrequest_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_timeoffrequest_msdyn_ocsessions: WebExpand<msdyn_timeoffrequest_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_timeoffrequest_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_timeoffrequest_msfp_alerts: WebExpand<msdyn_timeoffrequest_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_timeoffrequest_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_timeoffrequest_msfp_surveyinvites: WebExpand<msdyn_timeoffrequest_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_timeoffrequest_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_timeoffrequest_msfp_surveyresponses: WebExpand<msdyn_timeoffrequest_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_timeoffrequest_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  ownerid: WebExpand<msdyn_timeoffrequest_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_timeoffrequest_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_timeoffrequest_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_timeoffrequest_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_timeoffrequest_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_approvedby_formatted?: string;
  msdyn_endtime_formatted?: string;
  msdyn_resource_formatted?: string;
  msdyn_starttime_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_timeoffrequest_Result extends msdyn_timeoffrequest_Base, msdyn_timeoffrequest_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_approvedby_guid: string | null;
  msdyn_resource_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_timeoffrequest_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_approvedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_resource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_timeoffrequest_RelatedMany {
  msdyn_msdyn_timeoffrequest_msdyn_timeentry: WebMappingRetrieve<msdyn_timeentry_Select,msdyn_timeentry_Expand,msdyn_timeentry_Filter,msdyn_timeentry_Fixed,msdyn_timeentry_Result,msdyn_timeentry_FormattedResult>;
  msdyn_timeoffrequest_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_timeoffrequest_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_timeoffrequest_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_timeoffrequest_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_timeoffrequest_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_timeoffrequest_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_timeoffrequest_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_timeoffrequest_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_timeoffrequest_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_timeoffrequest_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_timeoffrequest_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_timeoffrequest_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_timeoffrequest_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_timeoffrequest_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_timeoffrequest_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_timeoffrequest_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_timeoffrequest_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_timeoffrequest_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_timeoffrequest_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_timeoffrequest_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_timeoffrequest_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_timeoffrequest_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_timeoffrequest_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_timeoffrequest_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_timeoffrequest_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_timeoffrequest_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_timeoffrequest_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_timeoffrequest_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_timeoffrequest_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_timeoffrequest_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_timeoffrequests: WebMappingRetrieve<msdyn_timeoffrequest_Select,msdyn_timeoffrequest_Expand,msdyn_timeoffrequest_Filter,msdyn_timeoffrequest_Fixed,msdyn_timeoffrequest_Result,msdyn_timeoffrequest_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_timeoffrequests: WebMappingRelated<msdyn_timeoffrequest_RelatedOne,msdyn_timeoffrequest_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_timeoffrequests: WebMappingCUDA<msdyn_timeoffrequest_Create,msdyn_timeoffrequest_Update,msdyn_timeoffrequest_Select>;
}
