interface Service_Base extends WebEntity {
  anchoroffset?: number | null;
  calendarid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  duration?: number | null;
  granularity?: string | null;
  importsequencenumber?: number | null;
  initialstatuscode?: service_initialstatuscode | null;
  isschedulable?: boolean | null;
  isvisible?: boolean | null;
  modifiedon?: Date | null;
  msdyn_SchedulingEngine?: msdyn_service_schedulingengine | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  serviceid?: string | null;
  showresources?: boolean | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Service_Relationships {
  Service_Annotation?: Annotation_Result[] | null;
  Service_AsyncOperations?: AsyncOperation_Result[] | null;
  Service_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Service_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  Service_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  Service_ProcessSessions?: ProcessSession_Result[] | null;
  Service_SyncErrors?: SyncError_Result[] | null;
  calendarid_calendar?: Calendar_Result | null;
  msdyn_approval_service_serviceid?: msdyn_approval_Result[] | null;
  msdyn_bookingalert_service_serviceid?: msdyn_bookingalert_Result[] | null;
  msdyn_ocliveworkitem_service_serviceid?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_ocoutboundmessage_service_serviceid?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_ocsession_service_serviceid?: msdyn_ocsession_Result[] | null;
  msfp_alert_service_serviceid?: msfp_alert_Result[] | null;
  msfp_surveyinvite_service_serviceid?: msfp_surveyinvite_Result[] | null;
  msfp_surveyresponse_service_serviceid?: msfp_surveyresponse_Result[] | null;
  service_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  service_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  service_accounts?: Account_Result[] | null;
  service_activity_pointers?: ActivityPointer_Result[] | null;
  service_appointments?: Appointment_Result[] | null;
  service_calendar_rules?: CalendarRule_Result[] | null;
  service_contacts?: Contact_Result[] | null;
  service_emails?: Email_Result[] | null;
  service_faxes?: Fax_Result[] | null;
  service_incidentresolutions?: IncidentResolution_Result[] | null;
  service_letters?: Letter_Result[] | null;
  service_opportunityclose?: OpportunityClose_Result[] | null;
  service_orderclose?: OrderClose_Result[] | null;
  service_phonecalls?: PhoneCall_Result[] | null;
  service_quoteclose?: QuoteClose_Result[] | null;
  service_recurringappointmentmasters?: RecurringAppointmentMaster_Result[] | null;
  service_service_appointments?: ServiceAppointment_Result[] | null;
  service_socialactivities?: SocialActivity_Result[] | null;
  service_tasks?: Task_Result[] | null;
  userentityinstancedata_service?: UserEntityInstanceData_Result[] | null;
}
interface Service extends Service_Base, Service_Relationships {
  calendarid_calendar_bind$calendars?: string | null;
  msdyn_requirementgroupid_bind$msdyn_requirementgroups?: string | null;
  resourcespecid_bind$resourcespecs?: string | null;
  strategyid_bind$plugintypes?: string | null;
}
interface Service_Create extends Service {
}
interface Service_Update extends Service {
}
interface Service_Select {
  anchoroffset: WebAttribute<Service_Select, { anchoroffset: number | null }, {  }>;
  calendarid: WebAttribute<Service_Select, { calendarid: string | null }, {  }>;
  createdby_guid: WebAttribute<Service_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Service_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Service_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Service_Select, { description: string | null }, {  }>;
  duration: WebAttribute<Service_Select, { duration: number | null }, {  }>;
  granularity: WebAttribute<Service_Select, { granularity: string | null }, {  }>;
  importsequencenumber: WebAttribute<Service_Select, { importsequencenumber: number | null }, {  }>;
  initialstatuscode: WebAttribute<Service_Select, { initialstatuscode: service_initialstatuscode | null }, { initialstatuscode_formatted?: string }>;
  isschedulable: WebAttribute<Service_Select, { isschedulable: boolean | null }, {  }>;
  isvisible: WebAttribute<Service_Select, { isvisible: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Service_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Service_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Service_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_SchedulingEngine: WebAttribute<Service_Select, { msdyn_SchedulingEngine: msdyn_service_schedulingengine | null }, { msdyn_SchedulingEngine_formatted?: string }>;
  msdyn_requirementgroupid_guid: WebAttribute<Service_Select, { msdyn_requirementgroupid_guid: string | null }, { msdyn_requirementgroupid_formatted?: string }>;
  name: WebAttribute<Service_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<Service_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Service_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  resourcespecid_guid: WebAttribute<Service_Select, { resourcespecid_guid: string | null }, { resourcespecid_formatted?: string }>;
  serviceid: WebAttribute<Service_Select, { serviceid: string | null }, {  }>;
  showresources: WebAttribute<Service_Select, { showresources: boolean | null }, {  }>;
  strategyid_guid: WebAttribute<Service_Select, { strategyid_guid: string | null }, { strategyid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<Service_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Service_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Service_Select, { versionnumber: number | null }, {  }>;
}
interface Service_Filter {
  anchoroffset: number;
  calendarid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  duration: number;
  granularity: string;
  importsequencenumber: number;
  initialstatuscode: service_initialstatuscode;
  isschedulable: boolean;
  isvisible: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_SchedulingEngine: msdyn_service_schedulingengine;
  msdyn_requirementgroupid_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  resourcespecid_guid: XQW.Guid;
  serviceid: XQW.Guid;
  showresources: boolean;
  strategyid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Service_Expand {
  Service_Annotation: WebExpand<Service_Expand, Annotation_Select, Annotation_Filter, { Service_Annotation: Annotation_Result[] }>;
  Service_AsyncOperations: WebExpand<Service_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Service_AsyncOperations: AsyncOperation_Result[] }>;
  Service_BulkDeleteFailures: WebExpand<Service_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Service_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Service_DuplicateBaseRecord: WebExpand<Service_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Service_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  Service_DuplicateMatchingRecord: WebExpand<Service_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Service_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  Service_ProcessSessions: WebExpand<Service_Expand, ProcessSession_Select, ProcessSession_Filter, { Service_ProcessSessions: ProcessSession_Result[] }>;
  Service_SyncErrors: WebExpand<Service_Expand, SyncError_Select, SyncError_Filter, { Service_SyncErrors: SyncError_Result[] }>;
  calendarid_calendar: WebExpand<Service_Expand, Calendar_Select, Calendar_Filter, { calendarid_calendar: Calendar_Result }>;
  createdby: WebExpand<Service_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Service_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Service_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Service_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_approval_service_serviceid: WebExpand<Service_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_approval_service_serviceid: msdyn_approval_Result[] }>;
  msdyn_bookingalert_service_serviceid: WebExpand<Service_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_bookingalert_service_serviceid: msdyn_bookingalert_Result[] }>;
  msdyn_ocliveworkitem_service_serviceid: WebExpand<Service_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_ocliveworkitem_service_serviceid: msdyn_ocliveworkitem_Result[] }>;
  msdyn_ocoutboundmessage_service_serviceid: WebExpand<Service_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_ocoutboundmessage_service_serviceid: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_ocsession_service_serviceid: WebExpand<Service_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_ocsession_service_serviceid: msdyn_ocsession_Result[] }>;
  msdyn_requirementgroupid: WebExpand<Service_Expand, msdyn_requirementgroup_Select, msdyn_requirementgroup_Filter, { msdyn_requirementgroupid: msdyn_requirementgroup_Result }>;
  msfp_alert_service_serviceid: WebExpand<Service_Expand, msfp_alert_Select, msfp_alert_Filter, { msfp_alert_service_serviceid: msfp_alert_Result[] }>;
  msfp_surveyinvite_service_serviceid: WebExpand<Service_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msfp_surveyinvite_service_serviceid: msfp_surveyinvite_Result[] }>;
  msfp_surveyresponse_service_serviceid: WebExpand<Service_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msfp_surveyresponse_service_serviceid: msfp_surveyresponse_Result[] }>;
  organizationid: WebExpand<Service_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  resourcespecid: WebExpand<Service_Expand, ResourceSpec_Select, ResourceSpec_Filter, { resourcespecid: ResourceSpec_Result }>;
  service_MailboxTrackingFolders: WebExpand<Service_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { service_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  service_PrincipalObjectAttributeAccesses: WebExpand<Service_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { service_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  service_accounts: WebExpand<Service_Expand, Account_Select, Account_Filter, { service_accounts: Account_Result[] }>;
  service_activity_pointers: WebExpand<Service_Expand, ActivityPointer_Select, ActivityPointer_Filter, { service_activity_pointers: ActivityPointer_Result[] }>;
  service_appointments: WebExpand<Service_Expand, Appointment_Select, Appointment_Filter, { service_appointments: Appointment_Result[] }>;
  service_calendar_rules: WebExpand<Service_Expand, CalendarRule_Select, CalendarRule_Filter, { service_calendar_rules: CalendarRule_Result[] }>;
  service_contacts: WebExpand<Service_Expand, Contact_Select, Contact_Filter, { service_contacts: Contact_Result[] }>;
  service_emails: WebExpand<Service_Expand, Email_Select, Email_Filter, { service_emails: Email_Result[] }>;
  service_faxes: WebExpand<Service_Expand, Fax_Select, Fax_Filter, { service_faxes: Fax_Result[] }>;
  service_incidentresolutions: WebExpand<Service_Expand, IncidentResolution_Select, IncidentResolution_Filter, { service_incidentresolutions: IncidentResolution_Result[] }>;
  service_letters: WebExpand<Service_Expand, Letter_Select, Letter_Filter, { service_letters: Letter_Result[] }>;
  service_opportunityclose: WebExpand<Service_Expand, OpportunityClose_Select, OpportunityClose_Filter, { service_opportunityclose: OpportunityClose_Result[] }>;
  service_orderclose: WebExpand<Service_Expand, OrderClose_Select, OrderClose_Filter, { service_orderclose: OrderClose_Result[] }>;
  service_phonecalls: WebExpand<Service_Expand, PhoneCall_Select, PhoneCall_Filter, { service_phonecalls: PhoneCall_Result[] }>;
  service_quoteclose: WebExpand<Service_Expand, QuoteClose_Select, QuoteClose_Filter, { service_quoteclose: QuoteClose_Result[] }>;
  service_recurringappointmentmasters: WebExpand<Service_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { service_recurringappointmentmasters: RecurringAppointmentMaster_Result[] }>;
  service_service_appointments: WebExpand<Service_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { service_service_appointments: ServiceAppointment_Result[] }>;
  service_socialactivities: WebExpand<Service_Expand, SocialActivity_Select, SocialActivity_Filter, { service_socialactivities: SocialActivity_Result[] }>;
  service_tasks: WebExpand<Service_Expand, Task_Select, Task_Filter, { service_tasks: Task_Result[] }>;
  strategyid: WebExpand<Service_Expand, PluginType_Select, PluginType_Filter, { strategyid: PluginType_Result }>;
  userentityinstancedata_service: WebExpand<Service_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_service: UserEntityInstanceData_Result[] }>;
}
interface Service_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  initialstatuscode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_SchedulingEngine_formatted?: string;
  msdyn_requirementgroupid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  resourcespecid_formatted?: string;
  strategyid_formatted?: string;
}
interface Service_Result extends Service_Base, Service_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_requirementgroupid_guid: string | null;
  organizationid_guid: string | null;
  resourcespecid_guid: string | null;
  strategyid_guid: string | null;
}
interface Service_RelatedOne {
  calendarid_calendar: WebMappingRetrieve<Calendar_Select,Calendar_Expand,Calendar_Filter,Calendar_Fixed,Calendar_Result,Calendar_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_requirementgroupid: WebMappingRetrieve<msdyn_requirementgroup_Select,msdyn_requirementgroup_Expand,msdyn_requirementgroup_Filter,msdyn_requirementgroup_Fixed,msdyn_requirementgroup_Result,msdyn_requirementgroup_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  resourcespecid: WebMappingRetrieve<ResourceSpec_Select,ResourceSpec_Expand,ResourceSpec_Filter,ResourceSpec_Fixed,ResourceSpec_Result,ResourceSpec_FormattedResult>;
  strategyid: WebMappingRetrieve<PluginType_Select,PluginType_Expand,PluginType_Filter,PluginType_Fixed,PluginType_Result,PluginType_FormattedResult>;
}
interface Service_RelatedMany {
  Service_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  Service_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Service_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Service_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Service_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Service_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Service_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_approval_service_serviceid: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_bookingalert_service_serviceid: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_ocliveworkitem_service_serviceid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_ocoutboundmessage_service_serviceid: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_ocsession_service_serviceid: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msfp_alert_service_serviceid: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msfp_surveyinvite_service_serviceid: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msfp_surveyresponse_service_serviceid: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  service_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  service_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  service_accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  service_activity_pointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  service_appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  service_calendar_rules: WebMappingRetrieve<CalendarRule_Select,CalendarRule_Expand,CalendarRule_Filter,CalendarRule_Fixed,CalendarRule_Result,CalendarRule_FormattedResult>;
  service_contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  service_emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  service_faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  service_incidentresolutions: WebMappingRetrieve<IncidentResolution_Select,IncidentResolution_Expand,IncidentResolution_Filter,IncidentResolution_Fixed,IncidentResolution_Result,IncidentResolution_FormattedResult>;
  service_letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  service_opportunityclose: WebMappingRetrieve<OpportunityClose_Select,OpportunityClose_Expand,OpportunityClose_Filter,OpportunityClose_Fixed,OpportunityClose_Result,OpportunityClose_FormattedResult>;
  service_orderclose: WebMappingRetrieve<OrderClose_Select,OrderClose_Expand,OrderClose_Filter,OrderClose_Fixed,OrderClose_Result,OrderClose_FormattedResult>;
  service_phonecalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  service_quoteclose: WebMappingRetrieve<QuoteClose_Select,QuoteClose_Expand,QuoteClose_Filter,QuoteClose_Fixed,QuoteClose_Result,QuoteClose_FormattedResult>;
  service_recurringappointmentmasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  service_service_appointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  service_socialactivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  service_tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  userentityinstancedata_service: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  services: WebMappingRetrieve<Service_Select,Service_Expand,Service_Filter,Service_Fixed,Service_Result,Service_FormattedResult>;
}
interface WebEntitiesRelated {
  services: WebMappingRelated<Service_RelatedOne,Service_RelatedMany>;
}
interface WebEntitiesCUDA {
  services: WebMappingCUDA<Service_Create,Service_Update,Service_Select>;
}
