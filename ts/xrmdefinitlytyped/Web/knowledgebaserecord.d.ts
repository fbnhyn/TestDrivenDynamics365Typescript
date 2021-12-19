interface KnowledgeBaseRecord_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  knowledgebaserecordid?: string | null;
  modifiedon?: Date | null;
  privateurl?: string | null;
  publicurl?: string | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  uniqueid?: string | null;
  versionnumber?: number | null;
}
interface KnowledgeBaseRecord_Relationships {
  KnowledgeBaseRecord_ActivityPointers?: ActivityPointer_Result[] | null;
  KnowledgeBaseRecord_Annotations?: Annotation_Result[] | null;
  KnowledgeBaseRecord_Appointments?: Appointment_Result[] | null;
  KnowledgeBaseRecord_AsyncOperations?: AsyncOperation_Result[] | null;
  KnowledgeBaseRecord_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  KnowledgeBaseRecord_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  KnowledgeBaseRecord_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  KnowledgeBaseRecord_Emails?: Email_Result[] | null;
  KnowledgeBaseRecord_Faxes?: Fax_Result[] | null;
  KnowledgeBaseRecord_Incident?: Incident_Result[] | null;
  KnowledgeBaseRecord_Letters?: Letter_Result[] | null;
  KnowledgeBaseRecord_PhoneCalls?: PhoneCall_Result[] | null;
  KnowledgeBaseRecord_PrincipalObjectAttributeAccess?: PrincipalObjectAttributeAccess_Result[] | null;
  KnowledgeBaseRecord_ProcessSession?: ProcessSession_Result[] | null;
  KnowledgeBaseRecord_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  KnowledgeBaseRecord_ServiceAppointments?: ServiceAppointment_Result[] | null;
  KnowledgeBaseRecord_SocialActivities?: SocialActivity_Result[] | null;
  KnowledgeBaseRecord_SyncErrors?: SyncError_Result[] | null;
  KnowledgeBaseRecord_Tasks?: Task_Result[] | null;
  KnowledgeBaseRecord_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  KnowledgeBaseRecord_connections1?: Connection_Result[] | null;
  KnowledgeBaseRecord_connections2?: Connection_Result[] | null;
  knowledgebaserecord_BulkOperations?: BulkOperation_Result[] | null;
  knowledgebaserecord_CampaignResponses?: CampaignResponse_Result[] | null;
  knowledgebaserecord_IncidentResolutions?: IncidentResolution_Result[] | null;
  knowledgebaserecord_OpportunityCloses?: OpportunityClose_Result[] | null;
  knowledgebaserecord_OrderCloses?: OrderClose_Result[] | null;
  knowledgebaserecord_QuoteCloses?: QuoteClose_Result[] | null;
  knowledgebaserecord_msdyn_approvals?: msdyn_approval_Result[] | null;
  knowledgebaserecord_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  knowledgebaserecord_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  knowledgebaserecord_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  knowledgebaserecord_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  knowledgebaserecord_msfp_alerts?: msfp_alert_Result[] | null;
  knowledgebaserecord_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  knowledgebaserecord_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  navigationPropertyNameNotDefined?: msdyn_customerasset_Result[] | null;
  navigationPropertyNameNotDefined1?: Product_Result[] | null;
  navigationPropertyNameNotDefined2?: msdyn_incidenttype_Result[] | null;
  navigationPropertyNameNotDefined3?: msdyn_workorder_Result[] | null;
  navigationPropertyNameNotDefined4?: msdyn_ocliveworkitem_Result[] | null;
}
interface KnowledgeBaseRecord extends KnowledgeBaseRecord_Base, KnowledgeBaseRecord_Relationships {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface KnowledgeBaseRecord_Create extends KnowledgeBaseRecord {
}
interface KnowledgeBaseRecord_Update extends KnowledgeBaseRecord {
}
interface KnowledgeBaseRecord_Select {
  createdby_guid: WebAttribute<KnowledgeBaseRecord_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<KnowledgeBaseRecord_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<KnowledgeBaseRecord_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<KnowledgeBaseRecord_Select, { exchangerate: number | null }, {  }>;
  knowledgebaserecordid: WebAttribute<KnowledgeBaseRecord_Select, { knowledgebaserecordid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<KnowledgeBaseRecord_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<KnowledgeBaseRecord_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<KnowledgeBaseRecord_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<KnowledgeBaseRecord_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  privateurl: WebAttribute<KnowledgeBaseRecord_Select, { privateurl: string | null }, {  }>;
  publicurl: WebAttribute<KnowledgeBaseRecord_Select, { publicurl: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<KnowledgeBaseRecord_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<KnowledgeBaseRecord_Select, { title: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<KnowledgeBaseRecord_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  uniqueid: WebAttribute<KnowledgeBaseRecord_Select, { uniqueid: string | null }, {  }>;
  versionnumber: WebAttribute<KnowledgeBaseRecord_Select, { versionnumber: number | null }, {  }>;
}
interface KnowledgeBaseRecord_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  knowledgebaserecordid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  privateurl: string;
  publicurl: string;
  timezoneruleversionnumber: number;
  title: string;
  transactioncurrencyid_guid: XQW.Guid;
  uniqueid: string;
  versionnumber: number;
}
interface KnowledgeBaseRecord_Expand {
  KnowledgeBaseRecord_ActivityPointers: WebExpand<KnowledgeBaseRecord_Expand, ActivityPointer_Select, ActivityPointer_Filter, { KnowledgeBaseRecord_ActivityPointers: ActivityPointer_Result[] }>;
  KnowledgeBaseRecord_Annotations: WebExpand<KnowledgeBaseRecord_Expand, Annotation_Select, Annotation_Filter, { KnowledgeBaseRecord_Annotations: Annotation_Result[] }>;
  KnowledgeBaseRecord_Appointments: WebExpand<KnowledgeBaseRecord_Expand, Appointment_Select, Appointment_Filter, { KnowledgeBaseRecord_Appointments: Appointment_Result[] }>;
  KnowledgeBaseRecord_AsyncOperations: WebExpand<KnowledgeBaseRecord_Expand, AsyncOperation_Select, AsyncOperation_Filter, { KnowledgeBaseRecord_AsyncOperations: AsyncOperation_Result[] }>;
  KnowledgeBaseRecord_BulkDeleteFailures: WebExpand<KnowledgeBaseRecord_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { KnowledgeBaseRecord_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  KnowledgeBaseRecord_DuplicateBaseRecord: WebExpand<KnowledgeBaseRecord_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { KnowledgeBaseRecord_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  KnowledgeBaseRecord_DuplicateMatchingRecord: WebExpand<KnowledgeBaseRecord_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { KnowledgeBaseRecord_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  KnowledgeBaseRecord_Emails: WebExpand<KnowledgeBaseRecord_Expand, Email_Select, Email_Filter, { KnowledgeBaseRecord_Emails: Email_Result[] }>;
  KnowledgeBaseRecord_Faxes: WebExpand<KnowledgeBaseRecord_Expand, Fax_Select, Fax_Filter, { KnowledgeBaseRecord_Faxes: Fax_Result[] }>;
  KnowledgeBaseRecord_Incident: WebExpand<KnowledgeBaseRecord_Expand, Incident_Select, Incident_Filter, { KnowledgeBaseRecord_Incident: Incident_Result[] }>;
  KnowledgeBaseRecord_Letters: WebExpand<KnowledgeBaseRecord_Expand, Letter_Select, Letter_Filter, { KnowledgeBaseRecord_Letters: Letter_Result[] }>;
  KnowledgeBaseRecord_PhoneCalls: WebExpand<KnowledgeBaseRecord_Expand, PhoneCall_Select, PhoneCall_Filter, { KnowledgeBaseRecord_PhoneCalls: PhoneCall_Result[] }>;
  KnowledgeBaseRecord_PrincipalObjectAttributeAccess: WebExpand<KnowledgeBaseRecord_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { KnowledgeBaseRecord_PrincipalObjectAttributeAccess: PrincipalObjectAttributeAccess_Result[] }>;
  KnowledgeBaseRecord_ProcessSession: WebExpand<KnowledgeBaseRecord_Expand, ProcessSession_Select, ProcessSession_Filter, { KnowledgeBaseRecord_ProcessSession: ProcessSession_Result[] }>;
  KnowledgeBaseRecord_RecurringAppointmentMasters: WebExpand<KnowledgeBaseRecord_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { KnowledgeBaseRecord_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  KnowledgeBaseRecord_ServiceAppointments: WebExpand<KnowledgeBaseRecord_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { KnowledgeBaseRecord_ServiceAppointments: ServiceAppointment_Result[] }>;
  KnowledgeBaseRecord_SocialActivities: WebExpand<KnowledgeBaseRecord_Expand, SocialActivity_Select, SocialActivity_Filter, { KnowledgeBaseRecord_SocialActivities: SocialActivity_Result[] }>;
  KnowledgeBaseRecord_SyncErrors: WebExpand<KnowledgeBaseRecord_Expand, SyncError_Select, SyncError_Filter, { KnowledgeBaseRecord_SyncErrors: SyncError_Result[] }>;
  KnowledgeBaseRecord_Tasks: WebExpand<KnowledgeBaseRecord_Expand, Task_Select, Task_Filter, { KnowledgeBaseRecord_Tasks: Task_Result[] }>;
  KnowledgeBaseRecord_UserEntityInstanceDatas: WebExpand<KnowledgeBaseRecord_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { KnowledgeBaseRecord_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  KnowledgeBaseRecord_connections1: WebExpand<KnowledgeBaseRecord_Expand, Connection_Select, Connection_Filter, { KnowledgeBaseRecord_connections1: Connection_Result[] }>;
  KnowledgeBaseRecord_connections2: WebExpand<KnowledgeBaseRecord_Expand, Connection_Select, Connection_Filter, { KnowledgeBaseRecord_connections2: Connection_Result[] }>;
  createdby: WebExpand<KnowledgeBaseRecord_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<KnowledgeBaseRecord_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  knowledgebaserecord_BulkOperations: WebExpand<KnowledgeBaseRecord_Expand, BulkOperation_Select, BulkOperation_Filter, { knowledgebaserecord_BulkOperations: BulkOperation_Result[] }>;
  knowledgebaserecord_CampaignResponses: WebExpand<KnowledgeBaseRecord_Expand, CampaignResponse_Select, CampaignResponse_Filter, { knowledgebaserecord_CampaignResponses: CampaignResponse_Result[] }>;
  knowledgebaserecord_IncidentResolutions: WebExpand<KnowledgeBaseRecord_Expand, IncidentResolution_Select, IncidentResolution_Filter, { knowledgebaserecord_IncidentResolutions: IncidentResolution_Result[] }>;
  knowledgebaserecord_OpportunityCloses: WebExpand<KnowledgeBaseRecord_Expand, OpportunityClose_Select, OpportunityClose_Filter, { knowledgebaserecord_OpportunityCloses: OpportunityClose_Result[] }>;
  knowledgebaserecord_OrderCloses: WebExpand<KnowledgeBaseRecord_Expand, OrderClose_Select, OrderClose_Filter, { knowledgebaserecord_OrderCloses: OrderClose_Result[] }>;
  knowledgebaserecord_QuoteCloses: WebExpand<KnowledgeBaseRecord_Expand, QuoteClose_Select, QuoteClose_Filter, { knowledgebaserecord_QuoteCloses: QuoteClose_Result[] }>;
  knowledgebaserecord_msdyn_approvals: WebExpand<KnowledgeBaseRecord_Expand, msdyn_approval_Select, msdyn_approval_Filter, { knowledgebaserecord_msdyn_approvals: msdyn_approval_Result[] }>;
  knowledgebaserecord_msdyn_bookingalerts: WebExpand<KnowledgeBaseRecord_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { knowledgebaserecord_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  knowledgebaserecord_msdyn_ocliveworkitems: WebExpand<KnowledgeBaseRecord_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { knowledgebaserecord_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  knowledgebaserecord_msdyn_ocoutboundmessages: WebExpand<KnowledgeBaseRecord_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { knowledgebaserecord_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  knowledgebaserecord_msdyn_ocsessions: WebExpand<KnowledgeBaseRecord_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { knowledgebaserecord_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  knowledgebaserecord_msfp_alerts: WebExpand<KnowledgeBaseRecord_Expand, msfp_alert_Select, msfp_alert_Filter, { knowledgebaserecord_msfp_alerts: msfp_alert_Result[] }>;
  knowledgebaserecord_msfp_surveyinvites: WebExpand<KnowledgeBaseRecord_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { knowledgebaserecord_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  knowledgebaserecord_msfp_surveyresponses: WebExpand<KnowledgeBaseRecord_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { knowledgebaserecord_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  modifiedby: WebExpand<KnowledgeBaseRecord_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<KnowledgeBaseRecord_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  navigationPropertyNameNotDefined: WebExpand<KnowledgeBaseRecord_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { navigationPropertyNameNotDefined: msdyn_customerasset_Result[] }>;
  navigationPropertyNameNotDefined1: WebExpand<KnowledgeBaseRecord_Expand, Product_Select, Product_Filter, { navigationPropertyNameNotDefined: Product_Result[] }>;
  navigationPropertyNameNotDefined2: WebExpand<KnowledgeBaseRecord_Expand, msdyn_incidenttype_Select, msdyn_incidenttype_Filter, { navigationPropertyNameNotDefined: msdyn_incidenttype_Result[] }>;
  navigationPropertyNameNotDefined3: WebExpand<KnowledgeBaseRecord_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { navigationPropertyNameNotDefined: msdyn_workorder_Result[] }>;
  navigationPropertyNameNotDefined4: WebExpand<KnowledgeBaseRecord_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { navigationPropertyNameNotDefined: msdyn_ocliveworkitem_Result[] }>;
  organizationid: WebExpand<KnowledgeBaseRecord_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrencyid: WebExpand<KnowledgeBaseRecord_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface KnowledgeBaseRecord_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface KnowledgeBaseRecord_Result extends KnowledgeBaseRecord_Base, KnowledgeBaseRecord_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface KnowledgeBaseRecord_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface KnowledgeBaseRecord_RelatedMany {
  KnowledgeBaseRecord_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  KnowledgeBaseRecord_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  KnowledgeBaseRecord_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  KnowledgeBaseRecord_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  KnowledgeBaseRecord_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  KnowledgeBaseRecord_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  KnowledgeBaseRecord_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  KnowledgeBaseRecord_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  KnowledgeBaseRecord_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  KnowledgeBaseRecord_Incident: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  KnowledgeBaseRecord_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  KnowledgeBaseRecord_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  KnowledgeBaseRecord_PrincipalObjectAttributeAccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  KnowledgeBaseRecord_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  KnowledgeBaseRecord_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  KnowledgeBaseRecord_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  KnowledgeBaseRecord_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  KnowledgeBaseRecord_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  KnowledgeBaseRecord_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  KnowledgeBaseRecord_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  KnowledgeBaseRecord_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  KnowledgeBaseRecord_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  knowledgebaserecord_BulkOperations: WebMappingRetrieve<BulkOperation_Select,BulkOperation_Expand,BulkOperation_Filter,BulkOperation_Fixed,BulkOperation_Result,BulkOperation_FormattedResult>;
  knowledgebaserecord_CampaignResponses: WebMappingRetrieve<CampaignResponse_Select,CampaignResponse_Expand,CampaignResponse_Filter,CampaignResponse_Fixed,CampaignResponse_Result,CampaignResponse_FormattedResult>;
  knowledgebaserecord_IncidentResolutions: WebMappingRetrieve<IncidentResolution_Select,IncidentResolution_Expand,IncidentResolution_Filter,IncidentResolution_Fixed,IncidentResolution_Result,IncidentResolution_FormattedResult>;
  knowledgebaserecord_OpportunityCloses: WebMappingRetrieve<OpportunityClose_Select,OpportunityClose_Expand,OpportunityClose_Filter,OpportunityClose_Fixed,OpportunityClose_Result,OpportunityClose_FormattedResult>;
  knowledgebaserecord_OrderCloses: WebMappingRetrieve<OrderClose_Select,OrderClose_Expand,OrderClose_Filter,OrderClose_Fixed,OrderClose_Result,OrderClose_FormattedResult>;
  knowledgebaserecord_QuoteCloses: WebMappingRetrieve<QuoteClose_Select,QuoteClose_Expand,QuoteClose_Filter,QuoteClose_Fixed,QuoteClose_Result,QuoteClose_FormattedResult>;
  knowledgebaserecord_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  knowledgebaserecord_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  knowledgebaserecord_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  knowledgebaserecord_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  knowledgebaserecord_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  knowledgebaserecord_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  knowledgebaserecord_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  knowledgebaserecord_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  navigationPropertyNameNotDefined: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  navigationPropertyNameNotDefined1: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  navigationPropertyNameNotDefined2: WebMappingRetrieve<msdyn_incidenttype_Select,msdyn_incidenttype_Expand,msdyn_incidenttype_Filter,msdyn_incidenttype_Fixed,msdyn_incidenttype_Result,msdyn_incidenttype_FormattedResult>;
  navigationPropertyNameNotDefined3: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  navigationPropertyNameNotDefined4: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
}
interface WebEntitiesRetrieve {
  knowledgebaserecords: WebMappingRetrieve<KnowledgeBaseRecord_Select,KnowledgeBaseRecord_Expand,KnowledgeBaseRecord_Filter,KnowledgeBaseRecord_Fixed,KnowledgeBaseRecord_Result,KnowledgeBaseRecord_FormattedResult>;
}
interface WebEntitiesRelated {
  knowledgebaserecords: WebMappingRelated<KnowledgeBaseRecord_RelatedOne,KnowledgeBaseRecord_RelatedMany>;
}
interface WebEntitiesCUDA {
  knowledgebaserecords: WebMappingCUDA<KnowledgeBaseRecord_Create,KnowledgeBaseRecord_Update,KnowledgeBaseRecord_Select>;
}
