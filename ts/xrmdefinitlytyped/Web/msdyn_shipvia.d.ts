interface msdyn_shipvia_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_shipviaid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_shipvia_statecode | null;
  statuscode?: msdyn_shipvia_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_shipvia_Relationships {
  msdyn_msdyn_shipvia_msdyn_purchaseorder_ShipVia?: msdyn_purchaseorder_Result[] | null;
  msdyn_msdyn_shipvia_msdyn_purchaseorderreceipt_ShipVia?: msdyn_purchaseorderreceipt_Result[] | null;
  msdyn_msdyn_shipvia_msdyn_rma_ShipVia?: msdyn_rma_Result[] | null;
  msdyn_msdyn_shipvia_msdyn_rmareceipt_ShipVia?: msdyn_rmareceipt_Result[] | null;
  msdyn_msdyn_shipvia_msdyn_rtv_ShipVia?: msdyn_rtv_Result[] | null;
  msdyn_shipvia_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_shipvia_Annotations?: Annotation_Result[] | null;
  msdyn_shipvia_Appointments?: Appointment_Result[] | null;
  msdyn_shipvia_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_shipvia_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_shipvia_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_shipvia_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_shipvia_Emails?: Email_Result[] | null;
  msdyn_shipvia_Faxes?: Fax_Result[] | null;
  msdyn_shipvia_Letters?: Letter_Result[] | null;
  msdyn_shipvia_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_shipvia_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_shipvia_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_shipvia_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_shipvia_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_shipvia_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_shipvia_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_shipvia_SyncErrors?: SyncError_Result[] | null;
  msdyn_shipvia_Tasks?: Task_Result[] | null;
  msdyn_shipvia_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_shipvia_connections1?: Connection_Result[] | null;
  msdyn_shipvia_connections2?: Connection_Result[] | null;
  msdyn_shipvia_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_shipvia_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_shipvia_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_shipvia_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_shipvia_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_shipvia_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_shipvia_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_shipvia_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_shipvia extends msdyn_shipvia_Base, msdyn_shipvia_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_shipvia_Create extends msdyn_shipvia {
}
interface msdyn_shipvia_Update extends msdyn_shipvia {
}
interface msdyn_shipvia_Select {
  createdby_guid: WebAttribute<msdyn_shipvia_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_shipvia_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_shipvia_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_shipvia_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_shipvia_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_shipvia_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_shipvia_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_shipvia_Select, { msdyn_name: string | null }, {  }>;
  msdyn_shipviaid: WebAttribute<msdyn_shipvia_Select, { msdyn_shipviaid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_shipvia_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_shipvia_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_shipvia_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_shipvia_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_shipvia_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_shipvia_Select, { statecode: msdyn_shipvia_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_shipvia_Select, { statuscode: msdyn_shipvia_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_shipvia_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_shipvia_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_shipvia_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_shipvia_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_shipviaid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_shipvia_statecode;
  statuscode: msdyn_shipvia_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_shipvia_Expand {
  createdby: WebExpand<msdyn_shipvia_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_shipvia_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_shipvia_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_shipvia_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_shipvia_msdyn_purchaseorder_ShipVia: WebExpand<msdyn_shipvia_Expand, msdyn_purchaseorder_Select, msdyn_purchaseorder_Filter, { msdyn_msdyn_shipvia_msdyn_purchaseorder_ShipVia: msdyn_purchaseorder_Result[] }>;
  msdyn_msdyn_shipvia_msdyn_purchaseorderreceipt_ShipVia: WebExpand<msdyn_shipvia_Expand, msdyn_purchaseorderreceipt_Select, msdyn_purchaseorderreceipt_Filter, { msdyn_msdyn_shipvia_msdyn_purchaseorderreceipt_ShipVia: msdyn_purchaseorderreceipt_Result[] }>;
  msdyn_msdyn_shipvia_msdyn_rma_ShipVia: WebExpand<msdyn_shipvia_Expand, msdyn_rma_Select, msdyn_rma_Filter, { msdyn_msdyn_shipvia_msdyn_rma_ShipVia: msdyn_rma_Result[] }>;
  msdyn_msdyn_shipvia_msdyn_rmareceipt_ShipVia: WebExpand<msdyn_shipvia_Expand, msdyn_rmareceipt_Select, msdyn_rmareceipt_Filter, { msdyn_msdyn_shipvia_msdyn_rmareceipt_ShipVia: msdyn_rmareceipt_Result[] }>;
  msdyn_msdyn_shipvia_msdyn_rtv_ShipVia: WebExpand<msdyn_shipvia_Expand, msdyn_rtv_Select, msdyn_rtv_Filter, { msdyn_msdyn_shipvia_msdyn_rtv_ShipVia: msdyn_rtv_Result[] }>;
  msdyn_shipvia_ActivityPointers: WebExpand<msdyn_shipvia_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_shipvia_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_shipvia_Annotations: WebExpand<msdyn_shipvia_Expand, Annotation_Select, Annotation_Filter, { msdyn_shipvia_Annotations: Annotation_Result[] }>;
  msdyn_shipvia_Appointments: WebExpand<msdyn_shipvia_Expand, Appointment_Select, Appointment_Filter, { msdyn_shipvia_Appointments: Appointment_Result[] }>;
  msdyn_shipvia_AsyncOperations: WebExpand<msdyn_shipvia_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_shipvia_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_shipvia_BulkDeleteFailures: WebExpand<msdyn_shipvia_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_shipvia_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_shipvia_DuplicateBaseRecord: WebExpand<msdyn_shipvia_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_shipvia_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_shipvia_DuplicateMatchingRecord: WebExpand<msdyn_shipvia_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_shipvia_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_shipvia_Emails: WebExpand<msdyn_shipvia_Expand, Email_Select, Email_Filter, { msdyn_shipvia_Emails: Email_Result[] }>;
  msdyn_shipvia_Faxes: WebExpand<msdyn_shipvia_Expand, Fax_Select, Fax_Filter, { msdyn_shipvia_Faxes: Fax_Result[] }>;
  msdyn_shipvia_Letters: WebExpand<msdyn_shipvia_Expand, Letter_Select, Letter_Filter, { msdyn_shipvia_Letters: Letter_Result[] }>;
  msdyn_shipvia_MailboxTrackingFolders: WebExpand<msdyn_shipvia_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_shipvia_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_shipvia_PhoneCalls: WebExpand<msdyn_shipvia_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_shipvia_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_shipvia_PrincipalObjectAttributeAccesses: WebExpand<msdyn_shipvia_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_shipvia_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_shipvia_ProcessSession: WebExpand<msdyn_shipvia_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_shipvia_ProcessSession: ProcessSession_Result[] }>;
  msdyn_shipvia_RecurringAppointmentMasters: WebExpand<msdyn_shipvia_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_shipvia_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_shipvia_ServiceAppointments: WebExpand<msdyn_shipvia_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_shipvia_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_shipvia_SocialActivities: WebExpand<msdyn_shipvia_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_shipvia_SocialActivities: SocialActivity_Result[] }>;
  msdyn_shipvia_SyncErrors: WebExpand<msdyn_shipvia_Expand, SyncError_Select, SyncError_Filter, { msdyn_shipvia_SyncErrors: SyncError_Result[] }>;
  msdyn_shipvia_Tasks: WebExpand<msdyn_shipvia_Expand, Task_Select, Task_Filter, { msdyn_shipvia_Tasks: Task_Result[] }>;
  msdyn_shipvia_UserEntityInstanceDatas: WebExpand<msdyn_shipvia_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_shipvia_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_shipvia_connections1: WebExpand<msdyn_shipvia_Expand, Connection_Select, Connection_Filter, { msdyn_shipvia_connections1: Connection_Result[] }>;
  msdyn_shipvia_connections2: WebExpand<msdyn_shipvia_Expand, Connection_Select, Connection_Filter, { msdyn_shipvia_connections2: Connection_Result[] }>;
  msdyn_shipvia_msdyn_approvals: WebExpand<msdyn_shipvia_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_shipvia_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_shipvia_msdyn_bookingalerts: WebExpand<msdyn_shipvia_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_shipvia_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_shipvia_msdyn_ocliveworkitems: WebExpand<msdyn_shipvia_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_shipvia_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_shipvia_msdyn_ocoutboundmessages: WebExpand<msdyn_shipvia_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_shipvia_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_shipvia_msdyn_ocsessions: WebExpand<msdyn_shipvia_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_shipvia_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_shipvia_msfp_alerts: WebExpand<msdyn_shipvia_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_shipvia_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_shipvia_msfp_surveyinvites: WebExpand<msdyn_shipvia_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_shipvia_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_shipvia_msfp_surveyresponses: WebExpand<msdyn_shipvia_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_shipvia_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  ownerid: WebExpand<msdyn_shipvia_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_shipvia_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_shipvia_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_shipvia_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_shipvia_FormattedResult {
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
interface msdyn_shipvia_Result extends msdyn_shipvia_Base, msdyn_shipvia_Relationships {
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
interface msdyn_shipvia_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_shipvia_RelatedMany {
  msdyn_msdyn_shipvia_msdyn_purchaseorder_ShipVia: WebMappingRetrieve<msdyn_purchaseorder_Select,msdyn_purchaseorder_Expand,msdyn_purchaseorder_Filter,msdyn_purchaseorder_Fixed,msdyn_purchaseorder_Result,msdyn_purchaseorder_FormattedResult>;
  msdyn_msdyn_shipvia_msdyn_purchaseorderreceipt_ShipVia: WebMappingRetrieve<msdyn_purchaseorderreceipt_Select,msdyn_purchaseorderreceipt_Expand,msdyn_purchaseorderreceipt_Filter,msdyn_purchaseorderreceipt_Fixed,msdyn_purchaseorderreceipt_Result,msdyn_purchaseorderreceipt_FormattedResult>;
  msdyn_msdyn_shipvia_msdyn_rma_ShipVia: WebMappingRetrieve<msdyn_rma_Select,msdyn_rma_Expand,msdyn_rma_Filter,msdyn_rma_Fixed,msdyn_rma_Result,msdyn_rma_FormattedResult>;
  msdyn_msdyn_shipvia_msdyn_rmareceipt_ShipVia: WebMappingRetrieve<msdyn_rmareceipt_Select,msdyn_rmareceipt_Expand,msdyn_rmareceipt_Filter,msdyn_rmareceipt_Fixed,msdyn_rmareceipt_Result,msdyn_rmareceipt_FormattedResult>;
  msdyn_msdyn_shipvia_msdyn_rtv_ShipVia: WebMappingRetrieve<msdyn_rtv_Select,msdyn_rtv_Expand,msdyn_rtv_Filter,msdyn_rtv_Fixed,msdyn_rtv_Result,msdyn_rtv_FormattedResult>;
  msdyn_shipvia_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_shipvia_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_shipvia_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_shipvia_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_shipvia_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_shipvia_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_shipvia_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_shipvia_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_shipvia_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_shipvia_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_shipvia_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_shipvia_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_shipvia_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_shipvia_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_shipvia_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_shipvia_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_shipvia_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_shipvia_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_shipvia_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_shipvia_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_shipvia_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_shipvia_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_shipvia_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_shipvia_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_shipvia_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_shipvia_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_shipvia_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_shipvia_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_shipvia_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_shipvia_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_shipvias: WebMappingRetrieve<msdyn_shipvia_Select,msdyn_shipvia_Expand,msdyn_shipvia_Filter,msdyn_shipvia_Fixed,msdyn_shipvia_Result,msdyn_shipvia_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_shipvias: WebMappingRelated<msdyn_shipvia_RelatedOne,msdyn_shipvia_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_shipvias: WebMappingCUDA<msdyn_shipvia_Create,msdyn_shipvia_Update,msdyn_shipvia_Select>;
}
