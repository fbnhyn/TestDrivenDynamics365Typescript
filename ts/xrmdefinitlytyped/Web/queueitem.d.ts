interface QueueItem_Base extends WebEntity {
  createdon?: Date | null;
  enteredon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  objecttypecode?: queueitem_objecttypecode | null;
  overriddencreatedon?: Date | null;
  priority?: number | null;
  queueitemid?: string | null;
  sender?: string | null;
  state?: number | null;
  statecode?: queueitem_statecode | null;
  status?: number | null;
  statuscode?: queueitem_statuscode | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  torecipients?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  workeridmodifiedon?: Date | null;
}
interface QueueItem_Relationships {
  QueueItem_AsyncOperations?: AsyncOperation_Result[] | null;
  QueueItem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  QueueItem_ProcessSessions?: ProcessSession_Result[] | null;
  QueueItem_SyncErrors?: SyncError_Result[] | null;
  msdyn_queueitem_msdyn_ocliveworkitem_queueitemid?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_queueitem_msdyn_unifiedroutingdiagnostic_targetobject?: msdyn_unifiedroutingdiagnostic_Result[] | null;
  objectid_activitypointer?: ActivityPointer_Result | null;
  objectid_appointment?: Appointment_Result | null;
  objectid_bulkoperation?: BulkOperation_Result | null;
  objectid_campaignactivity?: CampaignActivity_Result | null;
  objectid_campaignresponse?: CampaignResponse_Result | null;
  objectid_email?: Email_Result | null;
  objectid_fax?: Fax_Result | null;
  objectid_incident?: Incident_Result | null;
  objectid_knowledgearticle?: KnowledgeArticle_Result | null;
  objectid_letter?: Letter_Result | null;
  objectid_msdyn_agreementbookingdate?: msdyn_agreementbookingdate_Result | null;
  objectid_msdyn_agreementbookingsetup?: msdyn_agreementbookingsetup_Result | null;
  objectid_msdyn_agreementinvoicedate?: msdyn_agreementinvoicedate_Result | null;
  objectid_msdyn_agreementinvoicesetup?: msdyn_agreementinvoicesetup_Result | null;
  objectid_msdyn_approval?: msdyn_approval_Result | null;
  objectid_msdyn_bookingalert?: msdyn_bookingalert_Result | null;
  objectid_msdyn_inventoryadjustment?: msdyn_inventoryadjustment_Result | null;
  objectid_msdyn_inventorytransfer?: msdyn_inventorytransfer_Result | null;
  objectid_msdyn_iotalert?: msdyn_iotalert_Result | null;
  objectid_msdyn_knowledgearticletemplate?: msdyn_knowledgearticletemplate_Result | null;
  objectid_msdyn_liveconversation?: msdyn_liveconversation_Result | null;
  objectid_msdyn_ocliveworkitem?: msdyn_ocliveworkitem_Result | null;
  objectid_msdyn_ocoutboundmessage?: msdyn_ocoutboundmessage_Result | null;
  objectid_msdyn_ocsession?: msdyn_ocsession_Result | null;
  objectid_msdyn_overflowactionconfig?: msdyn_overflowactionconfig_Result | null;
  objectid_msdyn_project?: msdyn_project_Result | null;
  objectid_msdyn_projecttask?: msdyn_projecttask_Result | null;
  objectid_msdyn_resourcerequest?: msdyn_resourcerequest_Result | null;
  objectid_msdyn_timegroup?: msdyn_timegroup_Result | null;
  objectid_msdyn_timegroupdetail?: msdyn_timegroupdetail_Result | null;
  objectid_msdyn_workorder?: msdyn_workorder_Result | null;
  objectid_msdyn_workorderincident?: msdyn_workorderincident_Result | null;
  objectid_msdyn_workorderservice?: msdyn_workorderservice_Result | null;
  objectid_msdyn_workorderservicetask?: msdyn_workorderservicetask_Result | null;
  objectid_msfp_alert?: msfp_alert_Result | null;
  objectid_msfp_surveyinvite?: msfp_surveyinvite_Result | null;
  objectid_msfp_surveyresponse?: msfp_surveyresponse_Result | null;
  objectid_phonecall?: PhoneCall_Result | null;
  objectid_recurringappointmentmaster?: RecurringAppointmentMaster_Result | null;
  objectid_serviceappointment?: ServiceAppointment_Result | null;
  objectid_socialactivity?: SocialActivity_Result | null;
  objectid_task?: Task_Result | null;
  queueitem_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_queueitem?: UserEntityInstanceData_Result[] | null;
  workerid_systemuser?: SystemUser_Result | null;
  workerid_team?: Team_Result | null;
}
interface QueueItem extends QueueItem_Base, QueueItem_Relationships {
  msdyn_liveworkstreamid_bind$msdyn_liveworkstreams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
  workerid_systemuser_bind$systemusers?: string | null;
  workerid_team_bind$teams?: string | null;
}
interface QueueItem_Create extends QueueItem {
  objectid_activitypointer_bind$activitypointers?: string | null;
  objectid_appointment_bind$appointments?: string | null;
  objectid_bulkoperation_bind$bulkoperations?: string | null;
  objectid_campaignactivity_bind$campaignactivities?: string | null;
  objectid_campaignresponse_bind$campaignresponses?: string | null;
  objectid_email_bind$emails?: string | null;
  objectid_fax_bind$faxes?: string | null;
  objectid_incident_bind$incidents?: string | null;
  objectid_knowledgearticle_bind$knowledgearticles?: string | null;
  objectid_letter_bind$letters?: string | null;
  objectid_msdyn_agreementbookingdate_bind$msdyn_agreementbookingdates?: string | null;
  objectid_msdyn_agreementbookingsetup_bind$msdyn_agreementbookingsetups?: string | null;
  objectid_msdyn_agreementinvoicedate_bind$msdyn_agreementinvoicedates?: string | null;
  objectid_msdyn_agreementinvoicesetup_bind$msdyn_agreementinvoicesetups?: string | null;
  objectid_msdyn_approval_bind$msdyn_approvals?: string | null;
  objectid_msdyn_bookingalert_bind$msdyn_bookingalerts?: string | null;
  objectid_msdyn_inventoryadjustment_bind$msdyn_inventoryadjustments?: string | null;
  objectid_msdyn_inventorytransfer_bind$msdyn_inventorytransfers?: string | null;
  objectid_msdyn_iotalert_bind$msdyn_iotalerts?: string | null;
  objectid_msdyn_knowledgearticletemplate_bind$msdyn_knowledgearticletemplates?: string | null;
  objectid_msdyn_liveconversation_bind$msdyn_liveconversations?: string | null;
  objectid_msdyn_ocliveworkitem_bind$msdyn_ocliveworkitems?: string | null;
  objectid_msdyn_ocoutboundmessage_bind$msdyn_ocoutboundmessages?: string | null;
  objectid_msdyn_ocsession_bind$msdyn_ocsessions?: string | null;
  objectid_msdyn_overflowactionconfig_bind$msdyn_overflowactionconfigs?: string | null;
  objectid_msdyn_project_bind$msdyn_projects?: string | null;
  objectid_msdyn_projecttask_bind$msdyn_projecttasks?: string | null;
  objectid_msdyn_resourcerequest_bind$msdyn_resourcerequests?: string | null;
  objectid_msdyn_timegroup_bind$msdyn_timegroups?: string | null;
  objectid_msdyn_timegroupdetail_bind$msdyn_timegroupdetails?: string | null;
  objectid_msdyn_workorder_bind$msdyn_workorders?: string | null;
  objectid_msdyn_workorderincident_bind$msdyn_workorderincidents?: string | null;
  objectid_msdyn_workorderservice_bind$msdyn_workorderservices?: string | null;
  objectid_msdyn_workorderservicetask_bind$msdyn_workorderservicetasks?: string | null;
  objectid_msfp_alert_bind$msfp_alerts?: string | null;
  objectid_msfp_surveyinvite_bind$msfp_surveyinvites?: string | null;
  objectid_msfp_surveyresponse_bind$msfp_surveyresponses?: string | null;
  objectid_phonecall_bind$phonecalls?: string | null;
  objectid_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  objectid_serviceappointment_bind$serviceappointments?: string | null;
  objectid_socialactivity_bind$socialactivities?: string | null;
  objectid_task_bind$tasks?: string | null;
  queueid_bind$queues?: string | null;
}
interface QueueItem_Update extends QueueItem {
}
interface QueueItem_Select {
  createdby_guid: WebAttribute<QueueItem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<QueueItem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<QueueItem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  enteredon: WebAttribute<QueueItem_Select, { enteredon: Date | null }, { enteredon_formatted?: string }>;
  exchangerate: WebAttribute<QueueItem_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<QueueItem_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<QueueItem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<QueueItem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<QueueItem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_liveworkstreamid_guid: WebAttribute<QueueItem_Select, { msdyn_liveworkstreamid_guid: string | null }, { msdyn_liveworkstreamid_formatted?: string }>;
  objectid_guid: WebAttribute<QueueItem_Select, { objectid_guid: string | null }, { objectid_formatted?: string }>;
  objecttypecode: WebAttribute<QueueItem_Select, { objecttypecode: queueitem_objecttypecode | null }, { objecttypecode_formatted?: string }>;
  organizationid_guid: WebAttribute<QueueItem_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<QueueItem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<QueueItem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<QueueItem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<QueueItem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  priority: WebAttribute<QueueItem_Select, { priority: number | null }, {  }>;
  queueid_guid: WebAttribute<QueueItem_Select, { queueid_guid: string | null }, { queueid_formatted?: string }>;
  queueitemid: WebAttribute<QueueItem_Select, { queueitemid: string | null }, {  }>;
  sender: WebAttribute<QueueItem_Select, { sender: string | null }, {  }>;
  state: WebAttribute<QueueItem_Select, { state: number | null }, {  }>;
  statecode: WebAttribute<QueueItem_Select, { statecode: queueitem_statecode | null }, { statecode_formatted?: string }>;
  status: WebAttribute<QueueItem_Select, { status: number | null }, {  }>;
  statuscode: WebAttribute<QueueItem_Select, { statuscode: queueitem_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<QueueItem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<QueueItem_Select, { title: string | null }, {  }>;
  torecipients: WebAttribute<QueueItem_Select, { torecipients: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<QueueItem_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<QueueItem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<QueueItem_Select, { versionnumber: number | null }, {  }>;
  workerid_guid: WebAttribute<QueueItem_Select, { workerid_guid: string | null }, { workerid_formatted?: string }>;
  workeridmodifiedon: WebAttribute<QueueItem_Select, { workeridmodifiedon: Date | null }, { workeridmodifiedon_formatted?: string }>;
}
interface QueueItem_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  enteredon: Date;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_liveworkstreamid_guid: XQW.Guid;
  objectid_guid: XQW.Guid;
  objecttypecode: queueitem_objecttypecode;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  priority: number;
  queueid_guid: XQW.Guid;
  queueitemid: XQW.Guid;
  sender: string;
  state: number;
  statecode: queueitem_statecode;
  status: number;
  statuscode: queueitem_statuscode;
  timezoneruleversionnumber: number;
  title: string;
  torecipients: string;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
  workerid_guid: XQW.Guid;
  workeridmodifiedon: Date;
}
interface QueueItem_Expand {
  QueueItem_AsyncOperations: WebExpand<QueueItem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { QueueItem_AsyncOperations: AsyncOperation_Result[] }>;
  QueueItem_BulkDeleteFailures: WebExpand<QueueItem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { QueueItem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  QueueItem_ProcessSessions: WebExpand<QueueItem_Expand, ProcessSession_Select, ProcessSession_Filter, { QueueItem_ProcessSessions: ProcessSession_Result[] }>;
  QueueItem_SyncErrors: WebExpand<QueueItem_Expand, SyncError_Select, SyncError_Filter, { QueueItem_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_liveworkstreamid: WebExpand<QueueItem_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_liveworkstreamid: msdyn_liveworkstream_Result }>;
  msdyn_queueitem_msdyn_ocliveworkitem_queueitemid: WebExpand<QueueItem_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_queueitem_msdyn_ocliveworkitem_queueitemid: msdyn_ocliveworkitem_Result[] }>;
  msdyn_queueitem_msdyn_unifiedroutingdiagnostic_targetobject: WebExpand<QueueItem_Expand, msdyn_unifiedroutingdiagnostic_Select, msdyn_unifiedroutingdiagnostic_Filter, { msdyn_queueitem_msdyn_unifiedroutingdiagnostic_targetobject: msdyn_unifiedroutingdiagnostic_Result[] }>;
  objectid_activitypointer: WebExpand<QueueItem_Expand, ActivityPointer_Select, ActivityPointer_Filter, { objectid_activitypointer: ActivityPointer_Result }>;
  objectid_appointment: WebExpand<QueueItem_Expand, Appointment_Select, Appointment_Filter, { objectid_appointment: Appointment_Result }>;
  objectid_bulkoperation: WebExpand<QueueItem_Expand, BulkOperation_Select, BulkOperation_Filter, { objectid_bulkoperation: BulkOperation_Result }>;
  objectid_campaignactivity: WebExpand<QueueItem_Expand, CampaignActivity_Select, CampaignActivity_Filter, { objectid_campaignactivity: CampaignActivity_Result }>;
  objectid_campaignresponse: WebExpand<QueueItem_Expand, CampaignResponse_Select, CampaignResponse_Filter, { objectid_campaignresponse: CampaignResponse_Result }>;
  objectid_email: WebExpand<QueueItem_Expand, Email_Select, Email_Filter, { objectid_email: Email_Result }>;
  objectid_fax: WebExpand<QueueItem_Expand, Fax_Select, Fax_Filter, { objectid_fax: Fax_Result }>;
  objectid_incident: WebExpand<QueueItem_Expand, Incident_Select, Incident_Filter, { objectid_incident: Incident_Result }>;
  objectid_knowledgearticle: WebExpand<QueueItem_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { objectid_knowledgearticle: KnowledgeArticle_Result }>;
  objectid_letter: WebExpand<QueueItem_Expand, Letter_Select, Letter_Filter, { objectid_letter: Letter_Result }>;
  objectid_msdyn_agreementbookingdate: WebExpand<QueueItem_Expand, msdyn_agreementbookingdate_Select, msdyn_agreementbookingdate_Filter, { objectid_msdyn_agreementbookingdate: msdyn_agreementbookingdate_Result }>;
  objectid_msdyn_agreementbookingsetup: WebExpand<QueueItem_Expand, msdyn_agreementbookingsetup_Select, msdyn_agreementbookingsetup_Filter, { objectid_msdyn_agreementbookingsetup: msdyn_agreementbookingsetup_Result }>;
  objectid_msdyn_agreementinvoicedate: WebExpand<QueueItem_Expand, msdyn_agreementinvoicedate_Select, msdyn_agreementinvoicedate_Filter, { objectid_msdyn_agreementinvoicedate: msdyn_agreementinvoicedate_Result }>;
  objectid_msdyn_agreementinvoicesetup: WebExpand<QueueItem_Expand, msdyn_agreementinvoicesetup_Select, msdyn_agreementinvoicesetup_Filter, { objectid_msdyn_agreementinvoicesetup: msdyn_agreementinvoicesetup_Result }>;
  objectid_msdyn_approval: WebExpand<QueueItem_Expand, msdyn_approval_Select, msdyn_approval_Filter, { objectid_msdyn_approval: msdyn_approval_Result }>;
  objectid_msdyn_bookingalert: WebExpand<QueueItem_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { objectid_msdyn_bookingalert: msdyn_bookingalert_Result }>;
  objectid_msdyn_inventoryadjustment: WebExpand<QueueItem_Expand, msdyn_inventoryadjustment_Select, msdyn_inventoryadjustment_Filter, { objectid_msdyn_inventoryadjustment: msdyn_inventoryadjustment_Result }>;
  objectid_msdyn_inventorytransfer: WebExpand<QueueItem_Expand, msdyn_inventorytransfer_Select, msdyn_inventorytransfer_Filter, { objectid_msdyn_inventorytransfer: msdyn_inventorytransfer_Result }>;
  objectid_msdyn_iotalert: WebExpand<QueueItem_Expand, msdyn_iotalert_Select, msdyn_iotalert_Filter, { objectid_msdyn_iotalert: msdyn_iotalert_Result }>;
  objectid_msdyn_knowledgearticletemplate: WebExpand<QueueItem_Expand, msdyn_knowledgearticletemplate_Select, msdyn_knowledgearticletemplate_Filter, { objectid_msdyn_knowledgearticletemplate: msdyn_knowledgearticletemplate_Result }>;
  objectid_msdyn_liveconversation: WebExpand<QueueItem_Expand, msdyn_liveconversation_Select, msdyn_liveconversation_Filter, { objectid_msdyn_liveconversation: msdyn_liveconversation_Result }>;
  objectid_msdyn_ocliveworkitem: WebExpand<QueueItem_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { objectid_msdyn_ocliveworkitem: msdyn_ocliveworkitem_Result }>;
  objectid_msdyn_ocoutboundmessage: WebExpand<QueueItem_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { objectid_msdyn_ocoutboundmessage: msdyn_ocoutboundmessage_Result }>;
  objectid_msdyn_ocsession: WebExpand<QueueItem_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { objectid_msdyn_ocsession: msdyn_ocsession_Result }>;
  objectid_msdyn_overflowactionconfig: WebExpand<QueueItem_Expand, msdyn_overflowactionconfig_Select, msdyn_overflowactionconfig_Filter, { objectid_msdyn_overflowactionconfig: msdyn_overflowactionconfig_Result }>;
  objectid_msdyn_project: WebExpand<QueueItem_Expand, msdyn_project_Select, msdyn_project_Filter, { objectid_msdyn_project: msdyn_project_Result }>;
  objectid_msdyn_projecttask: WebExpand<QueueItem_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { objectid_msdyn_projecttask: msdyn_projecttask_Result }>;
  objectid_msdyn_resourcerequest: WebExpand<QueueItem_Expand, msdyn_resourcerequest_Select, msdyn_resourcerequest_Filter, { objectid_msdyn_resourcerequest: msdyn_resourcerequest_Result }>;
  objectid_msdyn_timegroup: WebExpand<QueueItem_Expand, msdyn_timegroup_Select, msdyn_timegroup_Filter, { objectid_msdyn_timegroup: msdyn_timegroup_Result }>;
  objectid_msdyn_timegroupdetail: WebExpand<QueueItem_Expand, msdyn_timegroupdetail_Select, msdyn_timegroupdetail_Filter, { objectid_msdyn_timegroupdetail: msdyn_timegroupdetail_Result }>;
  objectid_msdyn_workorder: WebExpand<QueueItem_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { objectid_msdyn_workorder: msdyn_workorder_Result }>;
  objectid_msdyn_workorderincident: WebExpand<QueueItem_Expand, msdyn_workorderincident_Select, msdyn_workorderincident_Filter, { objectid_msdyn_workorderincident: msdyn_workorderincident_Result }>;
  objectid_msdyn_workorderservice: WebExpand<QueueItem_Expand, msdyn_workorderservice_Select, msdyn_workorderservice_Filter, { objectid_msdyn_workorderservice: msdyn_workorderservice_Result }>;
  objectid_msdyn_workorderservicetask: WebExpand<QueueItem_Expand, msdyn_workorderservicetask_Select, msdyn_workorderservicetask_Filter, { objectid_msdyn_workorderservicetask: msdyn_workorderservicetask_Result }>;
  objectid_msfp_alert: WebExpand<QueueItem_Expand, msfp_alert_Select, msfp_alert_Filter, { objectid_msfp_alert: msfp_alert_Result }>;
  objectid_msfp_surveyinvite: WebExpand<QueueItem_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { objectid_msfp_surveyinvite: msfp_surveyinvite_Result }>;
  objectid_msfp_surveyresponse: WebExpand<QueueItem_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { objectid_msfp_surveyresponse: msfp_surveyresponse_Result }>;
  objectid_phonecall: WebExpand<QueueItem_Expand, PhoneCall_Select, PhoneCall_Filter, { objectid_phonecall: PhoneCall_Result }>;
  objectid_recurringappointmentmaster: WebExpand<QueueItem_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { objectid_recurringappointmentmaster: RecurringAppointmentMaster_Result }>;
  objectid_serviceappointment: WebExpand<QueueItem_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { objectid_serviceappointment: ServiceAppointment_Result }>;
  objectid_socialactivity: WebExpand<QueueItem_Expand, SocialActivity_Select, SocialActivity_Filter, { objectid_socialactivity: SocialActivity_Result }>;
  objectid_task: WebExpand<QueueItem_Expand, Task_Select, Task_Filter, { objectid_task: Task_Result }>;
  organizationid: WebExpand<QueueItem_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  queueid: WebExpand<QueueItem_Expand, Queue_Select, Queue_Filter, { queueid: Queue_Result }>;
  queueitem_principalobjectattributeaccess: WebExpand<QueueItem_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { queueitem_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  transactioncurrencyid: WebExpand<QueueItem_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_queueitem: WebExpand<QueueItem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_queueitem: UserEntityInstanceData_Result[] }>;
  workerid_systemuser: WebExpand<QueueItem_Expand, SystemUser_Select, SystemUser_Filter, { workerid_systemuser: SystemUser_Result }>;
  workerid_team: WebExpand<QueueItem_Expand, Team_Select, Team_Filter, { workerid_team: Team_Result }>;
}
interface QueueItem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  enteredon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkstreamid_formatted?: string;
  objectid_formatted?: string;
  objecttypecode_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
  queueid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  workerid_formatted?: string;
  workeridmodifiedon_formatted?: string;
}
interface QueueItem_Result extends QueueItem_Base, QueueItem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkstreamid_guid: string | null;
  objectid_guid: string | null;
  organizationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
  queueid_guid: string | null;
  transactioncurrencyid_guid: string | null;
  workerid_guid: string | null;
}
interface QueueItem_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_liveworkstreamid: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  objectid_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  objectid_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  objectid_bulkoperation: WebMappingRetrieve<BulkOperation_Select,BulkOperation_Expand,BulkOperation_Filter,BulkOperation_Fixed,BulkOperation_Result,BulkOperation_FormattedResult>;
  objectid_campaignactivity: WebMappingRetrieve<CampaignActivity_Select,CampaignActivity_Expand,CampaignActivity_Filter,CampaignActivity_Fixed,CampaignActivity_Result,CampaignActivity_FormattedResult>;
  objectid_campaignresponse: WebMappingRetrieve<CampaignResponse_Select,CampaignResponse_Expand,CampaignResponse_Filter,CampaignResponse_Fixed,CampaignResponse_Result,CampaignResponse_FormattedResult>;
  objectid_email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  objectid_fax: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  objectid_incident: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  objectid_knowledgearticle: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  objectid_letter: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  objectid_msdyn_agreementbookingdate: WebMappingRetrieve<msdyn_agreementbookingdate_Select,msdyn_agreementbookingdate_Expand,msdyn_agreementbookingdate_Filter,msdyn_agreementbookingdate_Fixed,msdyn_agreementbookingdate_Result,msdyn_agreementbookingdate_FormattedResult>;
  objectid_msdyn_agreementbookingsetup: WebMappingRetrieve<msdyn_agreementbookingsetup_Select,msdyn_agreementbookingsetup_Expand,msdyn_agreementbookingsetup_Filter,msdyn_agreementbookingsetup_Fixed,msdyn_agreementbookingsetup_Result,msdyn_agreementbookingsetup_FormattedResult>;
  objectid_msdyn_agreementinvoicedate: WebMappingRetrieve<msdyn_agreementinvoicedate_Select,msdyn_agreementinvoicedate_Expand,msdyn_agreementinvoicedate_Filter,msdyn_agreementinvoicedate_Fixed,msdyn_agreementinvoicedate_Result,msdyn_agreementinvoicedate_FormattedResult>;
  objectid_msdyn_agreementinvoicesetup: WebMappingRetrieve<msdyn_agreementinvoicesetup_Select,msdyn_agreementinvoicesetup_Expand,msdyn_agreementinvoicesetup_Filter,msdyn_agreementinvoicesetup_Fixed,msdyn_agreementinvoicesetup_Result,msdyn_agreementinvoicesetup_FormattedResult>;
  objectid_msdyn_approval: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  objectid_msdyn_bookingalert: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  objectid_msdyn_inventoryadjustment: WebMappingRetrieve<msdyn_inventoryadjustment_Select,msdyn_inventoryadjustment_Expand,msdyn_inventoryadjustment_Filter,msdyn_inventoryadjustment_Fixed,msdyn_inventoryadjustment_Result,msdyn_inventoryadjustment_FormattedResult>;
  objectid_msdyn_inventorytransfer: WebMappingRetrieve<msdyn_inventorytransfer_Select,msdyn_inventorytransfer_Expand,msdyn_inventorytransfer_Filter,msdyn_inventorytransfer_Fixed,msdyn_inventorytransfer_Result,msdyn_inventorytransfer_FormattedResult>;
  objectid_msdyn_iotalert: WebMappingRetrieve<msdyn_iotalert_Select,msdyn_iotalert_Expand,msdyn_iotalert_Filter,msdyn_iotalert_Fixed,msdyn_iotalert_Result,msdyn_iotalert_FormattedResult>;
  objectid_msdyn_knowledgearticletemplate: WebMappingRetrieve<msdyn_knowledgearticletemplate_Select,msdyn_knowledgearticletemplate_Expand,msdyn_knowledgearticletemplate_Filter,msdyn_knowledgearticletemplate_Fixed,msdyn_knowledgearticletemplate_Result,msdyn_knowledgearticletemplate_FormattedResult>;
  objectid_msdyn_liveconversation: WebMappingRetrieve<msdyn_liveconversation_Select,msdyn_liveconversation_Expand,msdyn_liveconversation_Filter,msdyn_liveconversation_Fixed,msdyn_liveconversation_Result,msdyn_liveconversation_FormattedResult>;
  objectid_msdyn_ocliveworkitem: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  objectid_msdyn_ocoutboundmessage: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  objectid_msdyn_ocsession: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  objectid_msdyn_overflowactionconfig: WebMappingRetrieve<msdyn_overflowactionconfig_Select,msdyn_overflowactionconfig_Expand,msdyn_overflowactionconfig_Filter,msdyn_overflowactionconfig_Fixed,msdyn_overflowactionconfig_Result,msdyn_overflowactionconfig_FormattedResult>;
  objectid_msdyn_project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  objectid_msdyn_projecttask: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  objectid_msdyn_resourcerequest: WebMappingRetrieve<msdyn_resourcerequest_Select,msdyn_resourcerequest_Expand,msdyn_resourcerequest_Filter,msdyn_resourcerequest_Fixed,msdyn_resourcerequest_Result,msdyn_resourcerequest_FormattedResult>;
  objectid_msdyn_timegroup: WebMappingRetrieve<msdyn_timegroup_Select,msdyn_timegroup_Expand,msdyn_timegroup_Filter,msdyn_timegroup_Fixed,msdyn_timegroup_Result,msdyn_timegroup_FormattedResult>;
  objectid_msdyn_timegroupdetail: WebMappingRetrieve<msdyn_timegroupdetail_Select,msdyn_timegroupdetail_Expand,msdyn_timegroupdetail_Filter,msdyn_timegroupdetail_Fixed,msdyn_timegroupdetail_Result,msdyn_timegroupdetail_FormattedResult>;
  objectid_msdyn_workorder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  objectid_msdyn_workorderincident: WebMappingRetrieve<msdyn_workorderincident_Select,msdyn_workorderincident_Expand,msdyn_workorderincident_Filter,msdyn_workorderincident_Fixed,msdyn_workorderincident_Result,msdyn_workorderincident_FormattedResult>;
  objectid_msdyn_workorderservice: WebMappingRetrieve<msdyn_workorderservice_Select,msdyn_workorderservice_Expand,msdyn_workorderservice_Filter,msdyn_workorderservice_Fixed,msdyn_workorderservice_Result,msdyn_workorderservice_FormattedResult>;
  objectid_msdyn_workorderservicetask: WebMappingRetrieve<msdyn_workorderservicetask_Select,msdyn_workorderservicetask_Expand,msdyn_workorderservicetask_Filter,msdyn_workorderservicetask_Fixed,msdyn_workorderservicetask_Result,msdyn_workorderservicetask_FormattedResult>;
  objectid_msfp_alert: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  objectid_msfp_surveyinvite: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  objectid_msfp_surveyresponse: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  objectid_phonecall: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  objectid_recurringappointmentmaster: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  objectid_serviceappointment: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  objectid_socialactivity: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  objectid_task: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  queueid: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  workerid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  workerid_team: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface QueueItem_RelatedMany {
  QueueItem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  QueueItem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  QueueItem_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  QueueItem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_queueitem_msdyn_ocliveworkitem_queueitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_queueitem_msdyn_unifiedroutingdiagnostic_targetobject: WebMappingRetrieve<msdyn_unifiedroutingdiagnostic_Select,msdyn_unifiedroutingdiagnostic_Expand,msdyn_unifiedroutingdiagnostic_Filter,msdyn_unifiedroutingdiagnostic_Fixed,msdyn_unifiedroutingdiagnostic_Result,msdyn_unifiedroutingdiagnostic_FormattedResult>;
  queueitem_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_queueitem: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  queueitems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
}
interface WebEntitiesRelated {
  queueitems: WebMappingRelated<QueueItem_RelatedOne,QueueItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  queueitems: WebMappingCUDA<QueueItem_Create,QueueItem_Update,QueueItem_Select>;
}
