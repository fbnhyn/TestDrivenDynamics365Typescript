interface msdyn_timegroupdetail_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_endtime?: Date | null;
  msdyn_name?: string | null;
  msdyn_starttime?: Date | null;
  msdyn_timegroupdetailid?: string | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: msdyn_timegroupdetail_statecode | null;
  statuscode?: msdyn_timegroupdetail_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_timegroupdetail_Relationships {
  msdyn_msdyn_timegroupdetail_bookableresourcebooking_TimeGroupDetailSelected?: BookableResourceBooking_Result[] | null;
  msdyn_msdyn_timegroupdetail_msdyn_workorder_TimeGroupDetailSelected?: msdyn_workorder_Result[] | null;
  msdyn_timegroupdetail_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_timegroupdetail_Annotations?: Annotation_Result[] | null;
  msdyn_timegroupdetail_Appointments?: Appointment_Result[] | null;
  msdyn_timegroupdetail_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_timegroupdetail_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_timegroupdetail_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_timegroupdetail_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_timegroupdetail_Emails?: Email_Result[] | null;
  msdyn_timegroupdetail_Faxes?: Fax_Result[] | null;
  msdyn_timegroupdetail_Letters?: Letter_Result[] | null;
  msdyn_timegroupdetail_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_timegroupdetail_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_timegroupdetail_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_timegroupdetail_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_timegroupdetail_QueueItems?: QueueItem_Result[] | null;
  msdyn_timegroupdetail_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_timegroupdetail_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_timegroupdetail_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_timegroupdetail_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_timegroupdetail_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_timegroupdetail_SyncErrors?: SyncError_Result[] | null;
  msdyn_timegroupdetail_Tasks?: Task_Result[] | null;
  msdyn_timegroupdetail_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_timegroupdetail_connections1?: Connection_Result[] | null;
  msdyn_timegroupdetail_connections2?: Connection_Result[] | null;
  msdyn_timegroupdetail_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_timegroupdetail_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_timegroupdetail_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_timegroupdetail_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_timegroupdetail_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_timegroupdetail_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_timegroupdetail_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_timegroupdetail_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_timegroupdetail extends msdyn_timegroupdetail_Base, msdyn_timegroupdetail_Relationships {
  msdyn_timegroupid_bind$msdyn_timegroups?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
}
interface msdyn_timegroupdetail_Create extends msdyn_timegroupdetail {
}
interface msdyn_timegroupdetail_Update extends msdyn_timegroupdetail {
}
interface msdyn_timegroupdetail_Select {
  createdby_guid: WebAttribute<msdyn_timegroupdetail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_timegroupdetail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_timegroupdetail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_timegroupdetail_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_timegroupdetail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_timegroupdetail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_timegroupdetail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_endtime: WebAttribute<msdyn_timegroupdetail_Select, { msdyn_endtime: Date | null }, { msdyn_endtime_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_timegroupdetail_Select, { msdyn_name: string | null }, {  }>;
  msdyn_starttime: WebAttribute<msdyn_timegroupdetail_Select, { msdyn_starttime: Date | null }, { msdyn_starttime_formatted?: string }>;
  msdyn_timegroupdetailid: WebAttribute<msdyn_timegroupdetail_Select, { msdyn_timegroupdetailid: string | null }, {  }>;
  msdyn_timegroupid_guid: WebAttribute<msdyn_timegroupdetail_Select, { msdyn_timegroupid_guid: string | null }, { msdyn_timegroupid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_timegroupdetail_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_timegroupdetail_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_timegroupdetail_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_timegroupdetail_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_timegroupdetail_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<msdyn_timegroupdetail_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<msdyn_timegroupdetail_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_timegroupdetail_Select, { statecode: msdyn_timegroupdetail_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_timegroupdetail_Select, { statuscode: msdyn_timegroupdetail_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_timegroupdetail_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<msdyn_timegroupdetail_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_timegroupdetail_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_timegroupdetail_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_timegroupdetail_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_endtime: Date;
  msdyn_name: string;
  msdyn_starttime: Date;
  msdyn_timegroupdetailid: XQW.Guid;
  msdyn_timegroupid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: msdyn_timegroupdetail_statecode;
  statuscode: msdyn_timegroupdetail_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_timegroupdetail_Expand {
  createdby: WebExpand<msdyn_timegroupdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_timegroupdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_timegroupdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_timegroupdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_timegroupdetail_bookableresourcebooking_TimeGroupDetailSelected: WebExpand<msdyn_timegroupdetail_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { msdyn_msdyn_timegroupdetail_bookableresourcebooking_TimeGroupDetailSelected: BookableResourceBooking_Result[] }>;
  msdyn_msdyn_timegroupdetail_msdyn_workorder_TimeGroupDetailSelected: WebExpand<msdyn_timegroupdetail_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_msdyn_timegroupdetail_msdyn_workorder_TimeGroupDetailSelected: msdyn_workorder_Result[] }>;
  msdyn_timegroupdetail_ActivityPointers: WebExpand<msdyn_timegroupdetail_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_timegroupdetail_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_timegroupdetail_Annotations: WebExpand<msdyn_timegroupdetail_Expand, Annotation_Select, Annotation_Filter, { msdyn_timegroupdetail_Annotations: Annotation_Result[] }>;
  msdyn_timegroupdetail_Appointments: WebExpand<msdyn_timegroupdetail_Expand, Appointment_Select, Appointment_Filter, { msdyn_timegroupdetail_Appointments: Appointment_Result[] }>;
  msdyn_timegroupdetail_AsyncOperations: WebExpand<msdyn_timegroupdetail_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_timegroupdetail_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_timegroupdetail_BulkDeleteFailures: WebExpand<msdyn_timegroupdetail_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_timegroupdetail_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_timegroupdetail_DuplicateBaseRecord: WebExpand<msdyn_timegroupdetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_timegroupdetail_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_timegroupdetail_DuplicateMatchingRecord: WebExpand<msdyn_timegroupdetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_timegroupdetail_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_timegroupdetail_Emails: WebExpand<msdyn_timegroupdetail_Expand, Email_Select, Email_Filter, { msdyn_timegroupdetail_Emails: Email_Result[] }>;
  msdyn_timegroupdetail_Faxes: WebExpand<msdyn_timegroupdetail_Expand, Fax_Select, Fax_Filter, { msdyn_timegroupdetail_Faxes: Fax_Result[] }>;
  msdyn_timegroupdetail_Letters: WebExpand<msdyn_timegroupdetail_Expand, Letter_Select, Letter_Filter, { msdyn_timegroupdetail_Letters: Letter_Result[] }>;
  msdyn_timegroupdetail_MailboxTrackingFolders: WebExpand<msdyn_timegroupdetail_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_timegroupdetail_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_timegroupdetail_PhoneCalls: WebExpand<msdyn_timegroupdetail_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_timegroupdetail_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_timegroupdetail_PrincipalObjectAttributeAccesses: WebExpand<msdyn_timegroupdetail_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_timegroupdetail_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_timegroupdetail_ProcessSession: WebExpand<msdyn_timegroupdetail_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_timegroupdetail_ProcessSession: ProcessSession_Result[] }>;
  msdyn_timegroupdetail_QueueItems: WebExpand<msdyn_timegroupdetail_Expand, QueueItem_Select, QueueItem_Filter, { msdyn_timegroupdetail_QueueItems: QueueItem_Result[] }>;
  msdyn_timegroupdetail_RecurringAppointmentMasters: WebExpand<msdyn_timegroupdetail_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_timegroupdetail_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_timegroupdetail_ServiceAppointments: WebExpand<msdyn_timegroupdetail_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_timegroupdetail_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_timegroupdetail_SharePointDocumentLocations: WebExpand<msdyn_timegroupdetail_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_timegroupdetail_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_timegroupdetail_SharePointDocuments: WebExpand<msdyn_timegroupdetail_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_timegroupdetail_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_timegroupdetail_SocialActivities: WebExpand<msdyn_timegroupdetail_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_timegroupdetail_SocialActivities: SocialActivity_Result[] }>;
  msdyn_timegroupdetail_SyncErrors: WebExpand<msdyn_timegroupdetail_Expand, SyncError_Select, SyncError_Filter, { msdyn_timegroupdetail_SyncErrors: SyncError_Result[] }>;
  msdyn_timegroupdetail_Tasks: WebExpand<msdyn_timegroupdetail_Expand, Task_Select, Task_Filter, { msdyn_timegroupdetail_Tasks: Task_Result[] }>;
  msdyn_timegroupdetail_UserEntityInstanceDatas: WebExpand<msdyn_timegroupdetail_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_timegroupdetail_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_timegroupdetail_connections1: WebExpand<msdyn_timegroupdetail_Expand, Connection_Select, Connection_Filter, { msdyn_timegroupdetail_connections1: Connection_Result[] }>;
  msdyn_timegroupdetail_connections2: WebExpand<msdyn_timegroupdetail_Expand, Connection_Select, Connection_Filter, { msdyn_timegroupdetail_connections2: Connection_Result[] }>;
  msdyn_timegroupdetail_msdyn_approvals: WebExpand<msdyn_timegroupdetail_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_timegroupdetail_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_timegroupdetail_msdyn_bookingalerts: WebExpand<msdyn_timegroupdetail_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_timegroupdetail_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_timegroupdetail_msdyn_ocliveworkitems: WebExpand<msdyn_timegroupdetail_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_timegroupdetail_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_timegroupdetail_msdyn_ocoutboundmessages: WebExpand<msdyn_timegroupdetail_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_timegroupdetail_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_timegroupdetail_msdyn_ocsessions: WebExpand<msdyn_timegroupdetail_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_timegroupdetail_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_timegroupdetail_msfp_alerts: WebExpand<msdyn_timegroupdetail_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_timegroupdetail_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_timegroupdetail_msfp_surveyinvites: WebExpand<msdyn_timegroupdetail_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_timegroupdetail_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_timegroupdetail_msfp_surveyresponses: WebExpand<msdyn_timegroupdetail_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_timegroupdetail_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_timegroupid: WebExpand<msdyn_timegroupdetail_Expand, msdyn_timegroup_Select, msdyn_timegroup_Filter, { msdyn_timegroupid: msdyn_timegroup_Result }>;
  ownerid: WebExpand<msdyn_timegroupdetail_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_timegroupdetail_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_timegroupdetail_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_timegroupdetail_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<msdyn_timegroupdetail_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
}
interface msdyn_timegroupdetail_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_endtime_formatted?: string;
  msdyn_starttime_formatted?: string;
  msdyn_timegroupid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_timegroupdetail_Result extends msdyn_timegroupdetail_Base, msdyn_timegroupdetail_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_timegroupid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_timegroupdetail_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_timegroupid: WebMappingRetrieve<msdyn_timegroup_Select,msdyn_timegroup_Expand,msdyn_timegroup_Filter,msdyn_timegroup_Fixed,msdyn_timegroup_Result,msdyn_timegroup_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
}
interface msdyn_timegroupdetail_RelatedMany {
  msdyn_msdyn_timegroupdetail_bookableresourcebooking_TimeGroupDetailSelected: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  msdyn_msdyn_timegroupdetail_msdyn_workorder_TimeGroupDetailSelected: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_timegroupdetail_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_timegroupdetail_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_timegroupdetail_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_timegroupdetail_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_timegroupdetail_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_timegroupdetail_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_timegroupdetail_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_timegroupdetail_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_timegroupdetail_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_timegroupdetail_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_timegroupdetail_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_timegroupdetail_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_timegroupdetail_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_timegroupdetail_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_timegroupdetail_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  msdyn_timegroupdetail_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_timegroupdetail_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_timegroupdetail_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_timegroupdetail_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_timegroupdetail_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_timegroupdetail_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_timegroupdetail_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_timegroupdetail_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_timegroupdetail_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_timegroupdetail_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_timegroupdetail_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_timegroupdetail_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_timegroupdetail_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_timegroupdetail_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_timegroupdetail_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_timegroupdetail_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_timegroupdetail_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_timegroupdetail_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_timegroupdetails: WebMappingRetrieve<msdyn_timegroupdetail_Select,msdyn_timegroupdetail_Expand,msdyn_timegroupdetail_Filter,msdyn_timegroupdetail_Fixed,msdyn_timegroupdetail_Result,msdyn_timegroupdetail_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_timegroupdetails: WebMappingRelated<msdyn_timegroupdetail_RelatedOne,msdyn_timegroupdetail_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_timegroupdetails: WebMappingCUDA<msdyn_timegroupdetail_Create,msdyn_timegroupdetail_Update,msdyn_timegroupdetail_Select>;
}
