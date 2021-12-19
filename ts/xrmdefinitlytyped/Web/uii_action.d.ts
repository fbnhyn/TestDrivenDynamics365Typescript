interface UII_action_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_help?: string | null;
  msdyusd_unifiedservicedeskcreated?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: uii_action_statecode | null;
  statuscode?: uii_action_statuscode | null;
  timezoneruleversionnumber?: number | null;
  uii_actionid?: string | null;
  uii_automationmode?: uii_action_uii_automationmode | null;
  uii_extensionsxml?: string | null;
  uii_isdefault?: boolean | null;
  uii_isfocussedapplication?: boolean | null;
  uii_isrunmodeasynchronous?: boolean | null;
  uii_method?: uii_action_uii_method | null;
  uii_name?: string | null;
  uii_querystring?: string | null;
  uii_scriptfilepathtorun?: string | null;
  uii_url?: string | null;
  uii_workflowassemblytype?: string | null;
  uii_workflowrules?: string | null;
  uii_workflowxaml?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface UII_action_Relationships {
  msdyusd_action_msdyusd_agentscriptaction_Action?: msdyusd_agentscriptaction_Result[] | null;
  uii_action_ActivityPointers?: ActivityPointer_Result[] | null;
  uii_action_Annotations?: Annotation_Result[] | null;
  uii_action_Appointments?: Appointment_Result[] | null;
  uii_action_AsyncOperations?: AsyncOperation_Result[] | null;
  uii_action_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  uii_action_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  uii_action_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  uii_action_Emails?: Email_Result[] | null;
  uii_action_Faxes?: Fax_Result[] | null;
  uii_action_Letters?: Letter_Result[] | null;
  uii_action_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  uii_action_PhoneCalls?: PhoneCall_Result[] | null;
  uii_action_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  uii_action_ProcessSession?: ProcessSession_Result[] | null;
  uii_action_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  uii_action_ServiceAppointments?: ServiceAppointment_Result[] | null;
  uii_action_SocialActivities?: SocialActivity_Result[] | null;
  uii_action_SyncErrors?: SyncError_Result[] | null;
  uii_action_Tasks?: Task_Result[] | null;
  uii_action_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  uii_action_msdyn_approvals?: msdyn_approval_Result[] | null;
  uii_action_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  uii_action_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  uii_action_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  uii_action_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  uii_action_msfp_alerts?: msfp_alert_Result[] | null;
  uii_action_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  uii_action_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  uii_uii_action_uii_workflowstep?: UII_workflowstep_Result[] | null;
}
interface UII_action extends UII_action_Base, UII_action_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  uii_hostedapplicationid_bind$uii_hostedapplications?: string | null;
}
interface UII_action_Create extends UII_action {
}
interface UII_action_Update extends UII_action {
}
interface UII_action_Select {
  createdby_guid: WebAttribute<UII_action_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UII_action_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UII_action_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<UII_action_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<UII_action_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UII_action_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UII_action_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_help: WebAttribute<UII_action_Select, { msdyusd_help: string | null }, {  }>;
  msdyusd_unifiedservicedeskcreated: WebAttribute<UII_action_Select, { msdyusd_unifiedservicedeskcreated: boolean | null }, {  }>;
  overriddencreatedon: WebAttribute<UII_action_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<UII_action_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UII_action_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UII_action_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UII_action_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<UII_action_Select, { statecode: uii_action_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<UII_action_Select, { statuscode: uii_action_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<UII_action_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uii_actionid: WebAttribute<UII_action_Select, { uii_actionid: string | null }, {  }>;
  uii_automationmode: WebAttribute<UII_action_Select, { uii_automationmode: uii_action_uii_automationmode | null }, { uii_automationmode_formatted?: string }>;
  uii_extensionsxml: WebAttribute<UII_action_Select, { uii_extensionsxml: string | null }, {  }>;
  uii_hostedapplicationid_guid: WebAttribute<UII_action_Select, { uii_hostedapplicationid_guid: string | null }, { uii_hostedapplicationid_formatted?: string }>;
  uii_isdefault: WebAttribute<UII_action_Select, { uii_isdefault: boolean | null }, {  }>;
  uii_isfocussedapplication: WebAttribute<UII_action_Select, { uii_isfocussedapplication: boolean | null }, {  }>;
  uii_isrunmodeasynchronous: WebAttribute<UII_action_Select, { uii_isrunmodeasynchronous: boolean | null }, {  }>;
  uii_method: WebAttribute<UII_action_Select, { uii_method: uii_action_uii_method | null }, { uii_method_formatted?: string }>;
  uii_name: WebAttribute<UII_action_Select, { uii_name: string | null }, {  }>;
  uii_querystring: WebAttribute<UII_action_Select, { uii_querystring: string | null }, {  }>;
  uii_scriptfilepathtorun: WebAttribute<UII_action_Select, { uii_scriptfilepathtorun: string | null }, {  }>;
  uii_url: WebAttribute<UII_action_Select, { uii_url: string | null }, {  }>;
  uii_workflowassemblytype: WebAttribute<UII_action_Select, { uii_workflowassemblytype: string | null }, {  }>;
  uii_workflowrules: WebAttribute<UII_action_Select, { uii_workflowrules: string | null }, {  }>;
  uii_workflowxaml: WebAttribute<UII_action_Select, { uii_workflowxaml: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<UII_action_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<UII_action_Select, { versionnumber: number | null }, {  }>;
}
interface UII_action_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_help: string;
  msdyusd_unifiedservicedeskcreated: boolean;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: uii_action_statecode;
  statuscode: uii_action_statuscode;
  timezoneruleversionnumber: number;
  uii_actionid: XQW.Guid;
  uii_automationmode: uii_action_uii_automationmode;
  uii_extensionsxml: string;
  uii_hostedapplicationid_guid: XQW.Guid;
  uii_isdefault: boolean;
  uii_isfocussedapplication: boolean;
  uii_isrunmodeasynchronous: boolean;
  uii_method: uii_action_uii_method;
  uii_name: string;
  uii_querystring: string;
  uii_scriptfilepathtorun: string;
  uii_url: string;
  uii_workflowassemblytype: string;
  uii_workflowrules: string;
  uii_workflowxaml: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface UII_action_Expand {
  createdby: WebExpand<UII_action_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UII_action_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UII_action_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UII_action_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_action_msdyusd_agentscriptaction_Action: WebExpand<UII_action_Expand, msdyusd_agentscriptaction_Select, msdyusd_agentscriptaction_Filter, { msdyusd_action_msdyusd_agentscriptaction_Action: msdyusd_agentscriptaction_Result[] }>;
  ownerid: WebExpand<UII_action_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UII_action_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<UII_action_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<UII_action_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  uii_action_ActivityPointers: WebExpand<UII_action_Expand, ActivityPointer_Select, ActivityPointer_Filter, { uii_action_ActivityPointers: ActivityPointer_Result[] }>;
  uii_action_Annotations: WebExpand<UII_action_Expand, Annotation_Select, Annotation_Filter, { uii_action_Annotations: Annotation_Result[] }>;
  uii_action_Appointments: WebExpand<UII_action_Expand, Appointment_Select, Appointment_Filter, { uii_action_Appointments: Appointment_Result[] }>;
  uii_action_AsyncOperations: WebExpand<UII_action_Expand, AsyncOperation_Select, AsyncOperation_Filter, { uii_action_AsyncOperations: AsyncOperation_Result[] }>;
  uii_action_BulkDeleteFailures: WebExpand<UII_action_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { uii_action_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  uii_action_DuplicateBaseRecord: WebExpand<UII_action_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_action_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  uii_action_DuplicateMatchingRecord: WebExpand<UII_action_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_action_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  uii_action_Emails: WebExpand<UII_action_Expand, Email_Select, Email_Filter, { uii_action_Emails: Email_Result[] }>;
  uii_action_Faxes: WebExpand<UII_action_Expand, Fax_Select, Fax_Filter, { uii_action_Faxes: Fax_Result[] }>;
  uii_action_Letters: WebExpand<UII_action_Expand, Letter_Select, Letter_Filter, { uii_action_Letters: Letter_Result[] }>;
  uii_action_MailboxTrackingFolders: WebExpand<UII_action_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { uii_action_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  uii_action_PhoneCalls: WebExpand<UII_action_Expand, PhoneCall_Select, PhoneCall_Filter, { uii_action_PhoneCalls: PhoneCall_Result[] }>;
  uii_action_PrincipalObjectAttributeAccesses: WebExpand<UII_action_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { uii_action_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  uii_action_ProcessSession: WebExpand<UII_action_Expand, ProcessSession_Select, ProcessSession_Filter, { uii_action_ProcessSession: ProcessSession_Result[] }>;
  uii_action_RecurringAppointmentMasters: WebExpand<UII_action_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { uii_action_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  uii_action_ServiceAppointments: WebExpand<UII_action_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { uii_action_ServiceAppointments: ServiceAppointment_Result[] }>;
  uii_action_SocialActivities: WebExpand<UII_action_Expand, SocialActivity_Select, SocialActivity_Filter, { uii_action_SocialActivities: SocialActivity_Result[] }>;
  uii_action_SyncErrors: WebExpand<UII_action_Expand, SyncError_Select, SyncError_Filter, { uii_action_SyncErrors: SyncError_Result[] }>;
  uii_action_Tasks: WebExpand<UII_action_Expand, Task_Select, Task_Filter, { uii_action_Tasks: Task_Result[] }>;
  uii_action_UserEntityInstanceDatas: WebExpand<UII_action_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { uii_action_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  uii_action_msdyn_approvals: WebExpand<UII_action_Expand, msdyn_approval_Select, msdyn_approval_Filter, { uii_action_msdyn_approvals: msdyn_approval_Result[] }>;
  uii_action_msdyn_bookingalerts: WebExpand<UII_action_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { uii_action_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  uii_action_msdyn_ocliveworkitems: WebExpand<UII_action_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { uii_action_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  uii_action_msdyn_ocoutboundmessages: WebExpand<UII_action_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { uii_action_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  uii_action_msdyn_ocsessions: WebExpand<UII_action_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { uii_action_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  uii_action_msfp_alerts: WebExpand<UII_action_Expand, msfp_alert_Select, msfp_alert_Filter, { uii_action_msfp_alerts: msfp_alert_Result[] }>;
  uii_action_msfp_surveyinvites: WebExpand<UII_action_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { uii_action_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  uii_action_msfp_surveyresponses: WebExpand<UII_action_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { uii_action_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  uii_hostedapplicationid: WebExpand<UII_action_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { uii_hostedapplicationid: UII_hostedapplication_Result }>;
  uii_uii_action_uii_workflowstep: WebExpand<UII_action_Expand, UII_workflowstep_Select, UII_workflowstep_Filter, { uii_uii_action_uii_workflowstep: UII_workflowstep_Result[] }>;
}
interface UII_action_FormattedResult {
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
  uii_automationmode_formatted?: string;
  uii_hostedapplicationid_formatted?: string;
  uii_method_formatted?: string;
}
interface UII_action_Result extends UII_action_Base, UII_action_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  uii_hostedapplicationid_guid: string | null;
}
interface UII_action_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  uii_hostedapplicationid: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
}
interface UII_action_RelatedMany {
  msdyusd_action_msdyusd_agentscriptaction_Action: WebMappingRetrieve<msdyusd_agentscriptaction_Select,msdyusd_agentscriptaction_Expand,msdyusd_agentscriptaction_Filter,msdyusd_agentscriptaction_Fixed,msdyusd_agentscriptaction_Result,msdyusd_agentscriptaction_FormattedResult>;
  uii_action_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  uii_action_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  uii_action_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  uii_action_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  uii_action_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  uii_action_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_action_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_action_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  uii_action_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  uii_action_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  uii_action_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  uii_action_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  uii_action_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  uii_action_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  uii_action_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  uii_action_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  uii_action_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  uii_action_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  uii_action_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  uii_action_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  uii_action_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  uii_action_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  uii_action_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  uii_action_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  uii_action_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  uii_action_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  uii_action_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  uii_action_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  uii_uii_action_uii_workflowstep: WebMappingRetrieve<UII_workflowstep_Select,UII_workflowstep_Expand,UII_workflowstep_Filter,UII_workflowstep_Fixed,UII_workflowstep_Result,UII_workflowstep_FormattedResult>;
}
interface WebEntitiesRetrieve {
  uii_actions: WebMappingRetrieve<UII_action_Select,UII_action_Expand,UII_action_Filter,UII_action_Fixed,UII_action_Result,UII_action_FormattedResult>;
}
interface WebEntitiesRelated {
  uii_actions: WebMappingRelated<UII_action_RelatedOne,UII_action_RelatedMany>;
}
interface WebEntitiesCUDA {
  uii_actions: WebMappingCUDA<UII_action_Create,UII_action_Update,UII_action_Select>;
}
