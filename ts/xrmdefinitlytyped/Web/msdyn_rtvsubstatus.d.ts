interface msdyn_rtvsubstatus_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_defaultsubstatus?: boolean | null;
  msdyn_name?: string | null;
  msdyn_rtvsubstatusid?: string | null;
  msdyn_systemstatus?: msdyn_rtvsystemstatus | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_rtvsubstatus_statecode | null;
  statuscode?: msdyn_rtvsubstatus_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_rtvsubstatus_Relationships {
  msdyn_msdyn_rtvsubstatus_msdyn_rtv_SubStatus?: msdyn_rtv_Result[] | null;
  msdyn_rtvsubstatus_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_rtvsubstatus_Annotations?: Annotation_Result[] | null;
  msdyn_rtvsubstatus_Appointments?: Appointment_Result[] | null;
  msdyn_rtvsubstatus_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_rtvsubstatus_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_rtvsubstatus_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_rtvsubstatus_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_rtvsubstatus_Emails?: Email_Result[] | null;
  msdyn_rtvsubstatus_Faxes?: Fax_Result[] | null;
  msdyn_rtvsubstatus_Letters?: Letter_Result[] | null;
  msdyn_rtvsubstatus_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_rtvsubstatus_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_rtvsubstatus_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_rtvsubstatus_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_rtvsubstatus_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_rtvsubstatus_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_rtvsubstatus_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_rtvsubstatus_SyncErrors?: SyncError_Result[] | null;
  msdyn_rtvsubstatus_Tasks?: Task_Result[] | null;
  msdyn_rtvsubstatus_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_rtvsubstatus_connections1?: Connection_Result[] | null;
  msdyn_rtvsubstatus_connections2?: Connection_Result[] | null;
  msdyn_rtvsubstatus_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_rtvsubstatus_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_rtvsubstatus_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_rtvsubstatus_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_rtvsubstatus_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_rtvsubstatus_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_rtvsubstatus_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_rtvsubstatus_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_rtvsubstatus extends msdyn_rtvsubstatus_Base, msdyn_rtvsubstatus_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_rtvsubstatus_Create extends msdyn_rtvsubstatus {
}
interface msdyn_rtvsubstatus_Update extends msdyn_rtvsubstatus {
}
interface msdyn_rtvsubstatus_Select {
  createdby_guid: WebAttribute<msdyn_rtvsubstatus_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_rtvsubstatus_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_rtvsubstatus_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_rtvsubstatus_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_rtvsubstatus_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_rtvsubstatus_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_rtvsubstatus_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_defaultsubstatus: WebAttribute<msdyn_rtvsubstatus_Select, { msdyn_defaultsubstatus: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_rtvsubstatus_Select, { msdyn_name: string | null }, {  }>;
  msdyn_rtvsubstatusid: WebAttribute<msdyn_rtvsubstatus_Select, { msdyn_rtvsubstatusid: string | null }, {  }>;
  msdyn_systemstatus: WebAttribute<msdyn_rtvsubstatus_Select, { msdyn_systemstatus: msdyn_rtvsystemstatus | null }, { msdyn_systemstatus_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_rtvsubstatus_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_rtvsubstatus_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_rtvsubstatus_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_rtvsubstatus_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_rtvsubstatus_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_rtvsubstatus_Select, { statecode: msdyn_rtvsubstatus_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_rtvsubstatus_Select, { statuscode: msdyn_rtvsubstatus_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_rtvsubstatus_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_rtvsubstatus_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_rtvsubstatus_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_rtvsubstatus_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_defaultsubstatus: boolean;
  msdyn_name: string;
  msdyn_rtvsubstatusid: XQW.Guid;
  msdyn_systemstatus: msdyn_rtvsystemstatus;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_rtvsubstatus_statecode;
  statuscode: msdyn_rtvsubstatus_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_rtvsubstatus_Expand {
  createdby: WebExpand<msdyn_rtvsubstatus_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_rtvsubstatus_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_rtvsubstatus_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_rtvsubstatus_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_rtvsubstatus_msdyn_rtv_SubStatus: WebExpand<msdyn_rtvsubstatus_Expand, msdyn_rtv_Select, msdyn_rtv_Filter, { msdyn_msdyn_rtvsubstatus_msdyn_rtv_SubStatus: msdyn_rtv_Result[] }>;
  msdyn_rtvsubstatus_ActivityPointers: WebExpand<msdyn_rtvsubstatus_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_rtvsubstatus_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_rtvsubstatus_Annotations: WebExpand<msdyn_rtvsubstatus_Expand, Annotation_Select, Annotation_Filter, { msdyn_rtvsubstatus_Annotations: Annotation_Result[] }>;
  msdyn_rtvsubstatus_Appointments: WebExpand<msdyn_rtvsubstatus_Expand, Appointment_Select, Appointment_Filter, { msdyn_rtvsubstatus_Appointments: Appointment_Result[] }>;
  msdyn_rtvsubstatus_AsyncOperations: WebExpand<msdyn_rtvsubstatus_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_rtvsubstatus_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_rtvsubstatus_BulkDeleteFailures: WebExpand<msdyn_rtvsubstatus_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_rtvsubstatus_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_rtvsubstatus_DuplicateBaseRecord: WebExpand<msdyn_rtvsubstatus_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_rtvsubstatus_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_rtvsubstatus_DuplicateMatchingRecord: WebExpand<msdyn_rtvsubstatus_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_rtvsubstatus_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_rtvsubstatus_Emails: WebExpand<msdyn_rtvsubstatus_Expand, Email_Select, Email_Filter, { msdyn_rtvsubstatus_Emails: Email_Result[] }>;
  msdyn_rtvsubstatus_Faxes: WebExpand<msdyn_rtvsubstatus_Expand, Fax_Select, Fax_Filter, { msdyn_rtvsubstatus_Faxes: Fax_Result[] }>;
  msdyn_rtvsubstatus_Letters: WebExpand<msdyn_rtvsubstatus_Expand, Letter_Select, Letter_Filter, { msdyn_rtvsubstatus_Letters: Letter_Result[] }>;
  msdyn_rtvsubstatus_MailboxTrackingFolders: WebExpand<msdyn_rtvsubstatus_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_rtvsubstatus_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_rtvsubstatus_PhoneCalls: WebExpand<msdyn_rtvsubstatus_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_rtvsubstatus_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_rtvsubstatus_PrincipalObjectAttributeAccesses: WebExpand<msdyn_rtvsubstatus_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_rtvsubstatus_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_rtvsubstatus_ProcessSession: WebExpand<msdyn_rtvsubstatus_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_rtvsubstatus_ProcessSession: ProcessSession_Result[] }>;
  msdyn_rtvsubstatus_RecurringAppointmentMasters: WebExpand<msdyn_rtvsubstatus_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_rtvsubstatus_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_rtvsubstatus_ServiceAppointments: WebExpand<msdyn_rtvsubstatus_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_rtvsubstatus_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_rtvsubstatus_SocialActivities: WebExpand<msdyn_rtvsubstatus_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_rtvsubstatus_SocialActivities: SocialActivity_Result[] }>;
  msdyn_rtvsubstatus_SyncErrors: WebExpand<msdyn_rtvsubstatus_Expand, SyncError_Select, SyncError_Filter, { msdyn_rtvsubstatus_SyncErrors: SyncError_Result[] }>;
  msdyn_rtvsubstatus_Tasks: WebExpand<msdyn_rtvsubstatus_Expand, Task_Select, Task_Filter, { msdyn_rtvsubstatus_Tasks: Task_Result[] }>;
  msdyn_rtvsubstatus_UserEntityInstanceDatas: WebExpand<msdyn_rtvsubstatus_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_rtvsubstatus_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_rtvsubstatus_connections1: WebExpand<msdyn_rtvsubstatus_Expand, Connection_Select, Connection_Filter, { msdyn_rtvsubstatus_connections1: Connection_Result[] }>;
  msdyn_rtvsubstatus_connections2: WebExpand<msdyn_rtvsubstatus_Expand, Connection_Select, Connection_Filter, { msdyn_rtvsubstatus_connections2: Connection_Result[] }>;
  msdyn_rtvsubstatus_msdyn_approvals: WebExpand<msdyn_rtvsubstatus_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_rtvsubstatus_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_rtvsubstatus_msdyn_bookingalerts: WebExpand<msdyn_rtvsubstatus_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_rtvsubstatus_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_rtvsubstatus_msdyn_ocliveworkitems: WebExpand<msdyn_rtvsubstatus_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_rtvsubstatus_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_rtvsubstatus_msdyn_ocoutboundmessages: WebExpand<msdyn_rtvsubstatus_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_rtvsubstatus_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_rtvsubstatus_msdyn_ocsessions: WebExpand<msdyn_rtvsubstatus_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_rtvsubstatus_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_rtvsubstatus_msfp_alerts: WebExpand<msdyn_rtvsubstatus_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_rtvsubstatus_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_rtvsubstatus_msfp_surveyinvites: WebExpand<msdyn_rtvsubstatus_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_rtvsubstatus_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_rtvsubstatus_msfp_surveyresponses: WebExpand<msdyn_rtvsubstatus_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_rtvsubstatus_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  ownerid: WebExpand<msdyn_rtvsubstatus_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_rtvsubstatus_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_rtvsubstatus_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_rtvsubstatus_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_rtvsubstatus_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_systemstatus_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_rtvsubstatus_Result extends msdyn_rtvsubstatus_Base, msdyn_rtvsubstatus_Relationships {
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
interface msdyn_rtvsubstatus_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_rtvsubstatus_RelatedMany {
  msdyn_msdyn_rtvsubstatus_msdyn_rtv_SubStatus: WebMappingRetrieve<msdyn_rtv_Select,msdyn_rtv_Expand,msdyn_rtv_Filter,msdyn_rtv_Fixed,msdyn_rtv_Result,msdyn_rtv_FormattedResult>;
  msdyn_rtvsubstatus_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_rtvsubstatus_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_rtvsubstatus_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_rtvsubstatus_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_rtvsubstatus_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_rtvsubstatus_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_rtvsubstatus_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_rtvsubstatus_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_rtvsubstatus_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_rtvsubstatus_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_rtvsubstatus_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_rtvsubstatus_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_rtvsubstatus_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_rtvsubstatus_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_rtvsubstatus_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_rtvsubstatus_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_rtvsubstatus_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_rtvsubstatus_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_rtvsubstatus_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_rtvsubstatus_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_rtvsubstatus_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_rtvsubstatus_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_rtvsubstatus_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_rtvsubstatus_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_rtvsubstatus_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_rtvsubstatus_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_rtvsubstatus_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_rtvsubstatus_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_rtvsubstatus_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_rtvsubstatus_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_rtvsubstatuses: WebMappingRetrieve<msdyn_rtvsubstatus_Select,msdyn_rtvsubstatus_Expand,msdyn_rtvsubstatus_Filter,msdyn_rtvsubstatus_Fixed,msdyn_rtvsubstatus_Result,msdyn_rtvsubstatus_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_rtvsubstatuses: WebMappingRelated<msdyn_rtvsubstatus_RelatedOne,msdyn_rtvsubstatus_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_rtvsubstatuses: WebMappingCUDA<msdyn_rtvsubstatus_Create,msdyn_rtvsubstatus_Update,msdyn_rtvsubstatus_Select>;
}
