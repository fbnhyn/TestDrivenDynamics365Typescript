interface uii_option_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_globaloption?: msdyusd_globaloption | null;
  overriddencreatedon?: Date | null;
  statecode?: uii_option_statecode | null;
  statuscode?: uii_option_statuscode | null;
  timezoneruleversionnumber?: number | null;
  uii_name?: string | null;
  uii_optionid?: string | null;
  uii_value?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface uii_option_Relationships {
  msdyusd_configuration_option?: msdyusd_configuration_Result[] | null;
  uii_option_ActivityPointers?: ActivityPointer_Result[] | null;
  uii_option_Annotations?: Annotation_Result[] | null;
  uii_option_Appointments?: Appointment_Result[] | null;
  uii_option_AsyncOperations?: AsyncOperation_Result[] | null;
  uii_option_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  uii_option_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  uii_option_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  uii_option_Emails?: Email_Result[] | null;
  uii_option_Faxes?: Fax_Result[] | null;
  uii_option_Letters?: Letter_Result[] | null;
  uii_option_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  uii_option_PhoneCalls?: PhoneCall_Result[] | null;
  uii_option_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  uii_option_ProcessSession?: ProcessSession_Result[] | null;
  uii_option_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  uii_option_ServiceAppointments?: ServiceAppointment_Result[] | null;
  uii_option_SocialActivities?: SocialActivity_Result[] | null;
  uii_option_SyncErrors?: SyncError_Result[] | null;
  uii_option_Tasks?: Task_Result[] | null;
  uii_option_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  uii_option_connections1?: Connection_Result[] | null;
  uii_option_connections2?: Connection_Result[] | null;
  uii_option_msdyn_approvals?: msdyn_approval_Result[] | null;
  uii_option_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  uii_option_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  uii_option_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  uii_option_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  uii_option_msfp_alerts?: msfp_alert_Result[] | null;
  uii_option_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  uii_option_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface uii_option extends uii_option_Base, uii_option_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface uii_option_Create extends uii_option {
}
interface uii_option_Update extends uii_option {
}
interface uii_option_Select {
  createdby_guid: WebAttribute<uii_option_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<uii_option_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<uii_option_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<uii_option_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<uii_option_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<uii_option_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<uii_option_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_globaloption: WebAttribute<uii_option_Select, { msdyusd_globaloption: msdyusd_globaloption | null }, { msdyusd_globaloption_formatted?: string }>;
  overriddencreatedon: WebAttribute<uii_option_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<uii_option_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<uii_option_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<uii_option_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<uii_option_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<uii_option_Select, { statecode: uii_option_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<uii_option_Select, { statuscode: uii_option_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<uii_option_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uii_name: WebAttribute<uii_option_Select, { uii_name: string | null }, {  }>;
  uii_optionid: WebAttribute<uii_option_Select, { uii_optionid: string | null }, {  }>;
  uii_value: WebAttribute<uii_option_Select, { uii_value: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<uii_option_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<uii_option_Select, { versionnumber: number | null }, {  }>;
}
interface uii_option_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_globaloption: msdyusd_globaloption;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: uii_option_statecode;
  statuscode: uii_option_statuscode;
  timezoneruleversionnumber: number;
  uii_name: string;
  uii_optionid: XQW.Guid;
  uii_value: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface uii_option_Expand {
  createdby: WebExpand<uii_option_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<uii_option_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<uii_option_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<uii_option_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_configuration_option: WebExpand<uii_option_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_configuration_option: msdyusd_configuration_Result[] }>;
  ownerid: WebExpand<uii_option_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<uii_option_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<uii_option_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<uii_option_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  uii_option_ActivityPointers: WebExpand<uii_option_Expand, ActivityPointer_Select, ActivityPointer_Filter, { uii_option_ActivityPointers: ActivityPointer_Result[] }>;
  uii_option_Annotations: WebExpand<uii_option_Expand, Annotation_Select, Annotation_Filter, { uii_option_Annotations: Annotation_Result[] }>;
  uii_option_Appointments: WebExpand<uii_option_Expand, Appointment_Select, Appointment_Filter, { uii_option_Appointments: Appointment_Result[] }>;
  uii_option_AsyncOperations: WebExpand<uii_option_Expand, AsyncOperation_Select, AsyncOperation_Filter, { uii_option_AsyncOperations: AsyncOperation_Result[] }>;
  uii_option_BulkDeleteFailures: WebExpand<uii_option_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { uii_option_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  uii_option_DuplicateBaseRecord: WebExpand<uii_option_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_option_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  uii_option_DuplicateMatchingRecord: WebExpand<uii_option_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_option_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  uii_option_Emails: WebExpand<uii_option_Expand, Email_Select, Email_Filter, { uii_option_Emails: Email_Result[] }>;
  uii_option_Faxes: WebExpand<uii_option_Expand, Fax_Select, Fax_Filter, { uii_option_Faxes: Fax_Result[] }>;
  uii_option_Letters: WebExpand<uii_option_Expand, Letter_Select, Letter_Filter, { uii_option_Letters: Letter_Result[] }>;
  uii_option_MailboxTrackingFolders: WebExpand<uii_option_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { uii_option_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  uii_option_PhoneCalls: WebExpand<uii_option_Expand, PhoneCall_Select, PhoneCall_Filter, { uii_option_PhoneCalls: PhoneCall_Result[] }>;
  uii_option_PrincipalObjectAttributeAccesses: WebExpand<uii_option_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { uii_option_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  uii_option_ProcessSession: WebExpand<uii_option_Expand, ProcessSession_Select, ProcessSession_Filter, { uii_option_ProcessSession: ProcessSession_Result[] }>;
  uii_option_RecurringAppointmentMasters: WebExpand<uii_option_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { uii_option_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  uii_option_ServiceAppointments: WebExpand<uii_option_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { uii_option_ServiceAppointments: ServiceAppointment_Result[] }>;
  uii_option_SocialActivities: WebExpand<uii_option_Expand, SocialActivity_Select, SocialActivity_Filter, { uii_option_SocialActivities: SocialActivity_Result[] }>;
  uii_option_SyncErrors: WebExpand<uii_option_Expand, SyncError_Select, SyncError_Filter, { uii_option_SyncErrors: SyncError_Result[] }>;
  uii_option_Tasks: WebExpand<uii_option_Expand, Task_Select, Task_Filter, { uii_option_Tasks: Task_Result[] }>;
  uii_option_UserEntityInstanceDatas: WebExpand<uii_option_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { uii_option_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  uii_option_connections1: WebExpand<uii_option_Expand, Connection_Select, Connection_Filter, { uii_option_connections1: Connection_Result[] }>;
  uii_option_connections2: WebExpand<uii_option_Expand, Connection_Select, Connection_Filter, { uii_option_connections2: Connection_Result[] }>;
  uii_option_msdyn_approvals: WebExpand<uii_option_Expand, msdyn_approval_Select, msdyn_approval_Filter, { uii_option_msdyn_approvals: msdyn_approval_Result[] }>;
  uii_option_msdyn_bookingalerts: WebExpand<uii_option_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { uii_option_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  uii_option_msdyn_ocliveworkitems: WebExpand<uii_option_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { uii_option_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  uii_option_msdyn_ocoutboundmessages: WebExpand<uii_option_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { uii_option_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  uii_option_msdyn_ocsessions: WebExpand<uii_option_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { uii_option_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  uii_option_msfp_alerts: WebExpand<uii_option_Expand, msfp_alert_Select, msfp_alert_Filter, { uii_option_msfp_alerts: msfp_alert_Result[] }>;
  uii_option_msfp_surveyinvites: WebExpand<uii_option_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { uii_option_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  uii_option_msfp_surveyresponses: WebExpand<uii_option_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { uii_option_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
}
interface uii_option_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_globaloption_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface uii_option_Result extends uii_option_Base, uii_option_Relationships {
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
interface uii_option_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface uii_option_RelatedMany {
  msdyusd_configuration_option: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
  uii_option_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  uii_option_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  uii_option_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  uii_option_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  uii_option_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  uii_option_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_option_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_option_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  uii_option_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  uii_option_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  uii_option_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  uii_option_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  uii_option_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  uii_option_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  uii_option_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  uii_option_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  uii_option_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  uii_option_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  uii_option_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  uii_option_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  uii_option_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  uii_option_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  uii_option_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  uii_option_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  uii_option_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  uii_option_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  uii_option_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  uii_option_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  uii_option_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  uii_option_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  uii_options: WebMappingRetrieve<uii_option_Select,uii_option_Expand,uii_option_Filter,uii_option_Fixed,uii_option_Result,uii_option_FormattedResult>;
}
interface WebEntitiesRelated {
  uii_options: WebMappingRelated<uii_option_RelatedOne,uii_option_RelatedMany>;
}
interface WebEntitiesCUDA {
  uii_options: WebMappingCUDA<uii_option_Create,uii_option_Update,uii_option_Select>;
}
