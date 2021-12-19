interface UII_workflow_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: uii_workflow_statecode | null;
  statuscode?: uii_workflow_statuscode | null;
  timezoneruleversionnumber?: number | null;
  uii_description?: string | null;
  uii_isforcedworkflow?: boolean | null;
  uii_name?: string | null;
  uii_workflowid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface UII_workflow_Relationships {
  uii_uii_workflow_uii_audit?: UII_audit_Result[] | null;
  uii_workflow_ActivityPointers?: ActivityPointer_Result[] | null;
  uii_workflow_Annotations?: Annotation_Result[] | null;
  uii_workflow_Appointments?: Appointment_Result[] | null;
  uii_workflow_AsyncOperations?: AsyncOperation_Result[] | null;
  uii_workflow_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  uii_workflow_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  uii_workflow_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  uii_workflow_Emails?: Email_Result[] | null;
  uii_workflow_Faxes?: Fax_Result[] | null;
  uii_workflow_Letters?: Letter_Result[] | null;
  uii_workflow_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  uii_workflow_PhoneCalls?: PhoneCall_Result[] | null;
  uii_workflow_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  uii_workflow_ProcessSession?: ProcessSession_Result[] | null;
  uii_workflow_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  uii_workflow_ServiceAppointments?: ServiceAppointment_Result[] | null;
  uii_workflow_SocialActivities?: SocialActivity_Result[] | null;
  uii_workflow_SyncErrors?: SyncError_Result[] | null;
  uii_workflow_Tasks?: Task_Result[] | null;
  uii_workflow_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  uii_workflow_msdyn_approvals?: msdyn_approval_Result[] | null;
  uii_workflow_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  uii_workflow_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  uii_workflow_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  uii_workflow_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  uii_workflow_msfp_alerts?: msfp_alert_Result[] | null;
  uii_workflow_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  uii_workflow_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  uii_workflows_mapping?: UII_workflow_workflowstep_mapping_Result[] | null;
}
interface UII_workflow extends UII_workflow_Base, UII_workflow_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface UII_workflow_Create extends UII_workflow {
}
interface UII_workflow_Update extends UII_workflow {
}
interface UII_workflow_Select {
  createdby_guid: WebAttribute<UII_workflow_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UII_workflow_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UII_workflow_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<UII_workflow_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<UII_workflow_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UII_workflow_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UII_workflow_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<UII_workflow_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<UII_workflow_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UII_workflow_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<UII_workflow_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<UII_workflow_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<UII_workflow_Select, { statecode: uii_workflow_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<UII_workflow_Select, { statuscode: uii_workflow_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<UII_workflow_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uii_description: WebAttribute<UII_workflow_Select, { uii_description: string | null }, {  }>;
  uii_isforcedworkflow: WebAttribute<UII_workflow_Select, { uii_isforcedworkflow: boolean | null }, {  }>;
  uii_name: WebAttribute<UII_workflow_Select, { uii_name: string | null }, {  }>;
  uii_workflowid: WebAttribute<UII_workflow_Select, { uii_workflowid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<UII_workflow_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<UII_workflow_Select, { versionnumber: number | null }, {  }>;
}
interface UII_workflow_Filter {
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
  statecode: uii_workflow_statecode;
  statuscode: uii_workflow_statuscode;
  timezoneruleversionnumber: number;
  uii_description: string;
  uii_isforcedworkflow: boolean;
  uii_name: string;
  uii_workflowid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface UII_workflow_Expand {
  createdby: WebExpand<UII_workflow_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UII_workflow_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UII_workflow_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UII_workflow_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<UII_workflow_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UII_workflow_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<UII_workflow_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<UII_workflow_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  uii_uii_workflow_uii_audit: WebExpand<UII_workflow_Expand, UII_audit_Select, UII_audit_Filter, { uii_uii_workflow_uii_audit: UII_audit_Result[] }>;
  uii_workflow_ActivityPointers: WebExpand<UII_workflow_Expand, ActivityPointer_Select, ActivityPointer_Filter, { uii_workflow_ActivityPointers: ActivityPointer_Result[] }>;
  uii_workflow_Annotations: WebExpand<UII_workflow_Expand, Annotation_Select, Annotation_Filter, { uii_workflow_Annotations: Annotation_Result[] }>;
  uii_workflow_Appointments: WebExpand<UII_workflow_Expand, Appointment_Select, Appointment_Filter, { uii_workflow_Appointments: Appointment_Result[] }>;
  uii_workflow_AsyncOperations: WebExpand<UII_workflow_Expand, AsyncOperation_Select, AsyncOperation_Filter, { uii_workflow_AsyncOperations: AsyncOperation_Result[] }>;
  uii_workflow_BulkDeleteFailures: WebExpand<UII_workflow_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { uii_workflow_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  uii_workflow_DuplicateBaseRecord: WebExpand<UII_workflow_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_workflow_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  uii_workflow_DuplicateMatchingRecord: WebExpand<UII_workflow_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { uii_workflow_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  uii_workflow_Emails: WebExpand<UII_workflow_Expand, Email_Select, Email_Filter, { uii_workflow_Emails: Email_Result[] }>;
  uii_workflow_Faxes: WebExpand<UII_workflow_Expand, Fax_Select, Fax_Filter, { uii_workflow_Faxes: Fax_Result[] }>;
  uii_workflow_Letters: WebExpand<UII_workflow_Expand, Letter_Select, Letter_Filter, { uii_workflow_Letters: Letter_Result[] }>;
  uii_workflow_MailboxTrackingFolders: WebExpand<UII_workflow_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { uii_workflow_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  uii_workflow_PhoneCalls: WebExpand<UII_workflow_Expand, PhoneCall_Select, PhoneCall_Filter, { uii_workflow_PhoneCalls: PhoneCall_Result[] }>;
  uii_workflow_PrincipalObjectAttributeAccesses: WebExpand<UII_workflow_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { uii_workflow_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  uii_workflow_ProcessSession: WebExpand<UII_workflow_Expand, ProcessSession_Select, ProcessSession_Filter, { uii_workflow_ProcessSession: ProcessSession_Result[] }>;
  uii_workflow_RecurringAppointmentMasters: WebExpand<UII_workflow_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { uii_workflow_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  uii_workflow_ServiceAppointments: WebExpand<UII_workflow_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { uii_workflow_ServiceAppointments: ServiceAppointment_Result[] }>;
  uii_workflow_SocialActivities: WebExpand<UII_workflow_Expand, SocialActivity_Select, SocialActivity_Filter, { uii_workflow_SocialActivities: SocialActivity_Result[] }>;
  uii_workflow_SyncErrors: WebExpand<UII_workflow_Expand, SyncError_Select, SyncError_Filter, { uii_workflow_SyncErrors: SyncError_Result[] }>;
  uii_workflow_Tasks: WebExpand<UII_workflow_Expand, Task_Select, Task_Filter, { uii_workflow_Tasks: Task_Result[] }>;
  uii_workflow_UserEntityInstanceDatas: WebExpand<UII_workflow_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { uii_workflow_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  uii_workflow_msdyn_approvals: WebExpand<UII_workflow_Expand, msdyn_approval_Select, msdyn_approval_Filter, { uii_workflow_msdyn_approvals: msdyn_approval_Result[] }>;
  uii_workflow_msdyn_bookingalerts: WebExpand<UII_workflow_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { uii_workflow_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  uii_workflow_msdyn_ocliveworkitems: WebExpand<UII_workflow_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { uii_workflow_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  uii_workflow_msdyn_ocoutboundmessages: WebExpand<UII_workflow_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { uii_workflow_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  uii_workflow_msdyn_ocsessions: WebExpand<UII_workflow_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { uii_workflow_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  uii_workflow_msfp_alerts: WebExpand<UII_workflow_Expand, msfp_alert_Select, msfp_alert_Filter, { uii_workflow_msfp_alerts: msfp_alert_Result[] }>;
  uii_workflow_msfp_surveyinvites: WebExpand<UII_workflow_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { uii_workflow_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  uii_workflow_msfp_surveyresponses: WebExpand<UII_workflow_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { uii_workflow_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  uii_workflows_mapping: WebExpand<UII_workflow_Expand, UII_workflow_workflowstep_mapping_Select, UII_workflow_workflowstep_mapping_Filter, { uii_workflows_mapping: UII_workflow_workflowstep_mapping_Result[] }>;
}
interface UII_workflow_FormattedResult {
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
interface UII_workflow_Result extends UII_workflow_Base, UII_workflow_Relationships {
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
interface UII_workflow_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface UII_workflow_RelatedMany {
  uii_uii_workflow_uii_audit: WebMappingRetrieve<UII_audit_Select,UII_audit_Expand,UII_audit_Filter,UII_audit_Fixed,UII_audit_Result,UII_audit_FormattedResult>;
  uii_workflow_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  uii_workflow_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  uii_workflow_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  uii_workflow_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  uii_workflow_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  uii_workflow_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_workflow_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  uii_workflow_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  uii_workflow_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  uii_workflow_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  uii_workflow_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  uii_workflow_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  uii_workflow_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  uii_workflow_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  uii_workflow_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  uii_workflow_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  uii_workflow_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  uii_workflow_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  uii_workflow_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  uii_workflow_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  uii_workflow_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  uii_workflow_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  uii_workflow_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  uii_workflow_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  uii_workflow_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  uii_workflow_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  uii_workflow_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  uii_workflow_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  uii_workflows_mapping: WebMappingRetrieve<UII_workflow_workflowstep_mapping_Select,UII_workflow_workflowstep_mapping_Expand,UII_workflow_workflowstep_mapping_Filter,UII_workflow_workflowstep_mapping_Fixed,UII_workflow_workflowstep_mapping_Result,UII_workflow_workflowstep_mapping_FormattedResult>;
}
interface WebEntitiesRetrieve {
  uii_workflows: WebMappingRetrieve<UII_workflow_Select,UII_workflow_Expand,UII_workflow_Filter,UII_workflow_Fixed,UII_workflow_Result,UII_workflow_FormattedResult>;
}
interface WebEntitiesRelated {
  uii_workflows: WebMappingRelated<UII_workflow_RelatedOne,UII_workflow_RelatedMany>;
}
interface WebEntitiesCUDA {
  uii_workflows: WebMappingCUDA<UII_workflow_Create,UII_workflow_Update,UII_workflow_Select>;
}
