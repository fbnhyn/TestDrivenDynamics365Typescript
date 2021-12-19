interface ActivityParty_Base extends WebEntity {
  activitypartyid?: string | null;
  addressused?: string | null;
  addressusedemailcolumnnumber?: number | null;
  donotemail?: boolean | null;
  donotfax?: boolean | null;
  donotphone?: boolean | null;
  donotpostalmail?: boolean | null;
  effort?: number | null;
  exchangeentryid?: string | null;
  instancetypecode?: activityparty_instancetypecode | null;
  ispartydeleted?: boolean | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  participationtypemask?: activityparty_participationtypemask | null;
  scheduledend?: Date | null;
  scheduledstart?: Date | null;
  versionnumber?: number | null;
}
interface ActivityParty_Relationships {
  ActivityParty_SyncErrors?: SyncError_Result[] | null;
  activityid_activitypointer?: ActivityPointer_Result | null;
  activityid_appointment?: Appointment_Result | null;
  activityid_campaignactivity?: CampaignActivity_Result | null;
  activityid_campaignresponse?: CampaignResponse_Result | null;
  activityid_email?: Email_Result | null;
  activityid_fax?: Fax_Result | null;
  activityid_incidentresolution?: IncidentResolution_Result | null;
  activityid_letter?: Letter_Result | null;
  activityid_msdyn_approval_activityparty?: msdyn_approval_Result | null;
  activityid_msdyn_bookingalert_activityparty?: msdyn_bookingalert_Result | null;
  activityid_msdyn_ocliveworkitem_activityparty?: msdyn_ocliveworkitem_Result | null;
  activityid_msdyn_ocoutboundmessage_activityparty?: msdyn_ocoutboundmessage_Result | null;
  activityid_msdyn_ocsession_activityparty?: msdyn_ocsession_Result | null;
  activityid_msfp_alert_activityparty?: msfp_alert_Result | null;
  activityid_msfp_surveyinvite_activityparty?: msfp_surveyinvite_Result | null;
  activityid_msfp_surveyresponse_activityparty?: msfp_surveyresponse_Result | null;
  activityid_opportunityclose?: OpportunityClose_Result | null;
  activityid_orderclose?: OrderClose_Result | null;
  activityid_phonecall?: PhoneCall_Result | null;
  activityid_quoteclose?: QuoteClose_Result | null;
  activityid_recurringappointmentmaster?: RecurringAppointmentMaster_Result | null;
  activityid_serviceappointment?: ServiceAppointment_Result | null;
  activityid_socialactivity?: SocialActivity_Result | null;
  activityid_task?: Task_Result | null;
  partyid_account?: Account_Result | null;
  partyid_bulkoperation?: BulkOperation_Result | null;
  partyid_campaign?: Campaign_Result | null;
  partyid_campaignactivity?: CampaignActivity_Result | null;
  partyid_contact?: Contact_Result | null;
  partyid_contract?: Contract_Result | null;
  partyid_entitlement?: Entitlement_Result | null;
  partyid_equipment?: Equipment_Result | null;
  partyid_incident?: Incident_Result | null;
  partyid_invoice?: Invoice_Result | null;
  partyid_knowledgearticle?: KnowledgeArticle_Result | null;
  partyid_lead?: Lead_Result | null;
  partyid_opportunity?: Opportunity_Result | null;
  partyid_queue?: Queue_Result | null;
  partyid_quote?: Quote_Result | null;
  partyid_salesorder?: SalesOrder_Result | null;
  partyid_systemuser?: SystemUser_Result | null;
  userentityinstancedata_activityparty?: UserEntityInstanceData_Result[] | null;
}
interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
  activityid_activitypointer_bind$activitypointers?: string | null;
  activityid_appointment_bind$appointments?: string | null;
  activityid_campaignactivity_bind$campaignactivities?: string | null;
  activityid_campaignresponse_bind$campaignresponses?: string | null;
  activityid_email_bind$emails?: string | null;
  activityid_fax_bind$faxes?: string | null;
  activityid_incidentresolution_bind$incidentresolutions?: string | null;
  activityid_letter_bind$letters?: string | null;
  activityid_msdyn_approval_activityparty_bind$msdyn_approvals?: string | null;
  activityid_msdyn_bookingalert_activityparty_bind$msdyn_bookingalerts?: string | null;
  activityid_msdyn_ocliveworkitem_activityparty_bind$msdyn_ocliveworkitems?: string | null;
  activityid_msdyn_ocoutboundmessage_activityparty_bind$msdyn_ocoutboundmessages?: string | null;
  activityid_msdyn_ocsession_activityparty_bind$msdyn_ocsessions?: string | null;
  activityid_msfp_alert_activityparty_bind$msfp_alerts?: string | null;
  activityid_msfp_surveyinvite_activityparty_bind$msfp_surveyinvites?: string | null;
  activityid_msfp_surveyresponse_activityparty_bind$msfp_surveyresponses?: string | null;
  activityid_opportunityclose_bind$opportunitycloses?: string | null;
  activityid_orderclose_bind$ordercloses?: string | null;
  activityid_phonecall_bind$phonecalls?: string | null;
  activityid_quoteclose_bind$quotecloses?: string | null;
  activityid_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  activityid_serviceappointment_bind$serviceappointments?: string | null;
  activityid_socialactivity_bind$socialactivities?: string | null;
  activityid_task_bind$tasks?: string | null;
  partyid_account_bind$accounts?: string | null;
  partyid_bulkoperation_bind$bulkoperations?: string | null;
  partyid_campaign_bind$campaigns?: string | null;
  partyid_campaignactivity_bind$campaignactivities?: string | null;
  partyid_contact_bind$contacts?: string | null;
  partyid_contract_bind$contracts?: string | null;
  partyid_entitlement_bind$entitlements?: string | null;
  partyid_equipment_bind$equipments?: string | null;
  partyid_incident_bind$incidents?: string | null;
  partyid_invoice_bind$invoices?: string | null;
  partyid_knowledgearticle_bind$knowledgearticles?: string | null;
  partyid_lead_bind$leads?: string | null;
  partyid_opportunity_bind$opportunities?: string | null;
  partyid_queue_bind$queues?: string | null;
  partyid_quote_bind$quotes?: string | null;
  partyid_salesorder_bind$salesorders?: string | null;
  partyid_systemuser_bind$systemusers?: string | null;
  resourcespecid_bind$resourcespecs?: string | null;
}
interface ActivityParty_Create extends ActivityParty {
}
interface ActivityParty_Update extends ActivityParty {
}
interface ActivityParty_Select {
  activityid_guid: WebAttribute<ActivityParty_Select, { activityid_guid: string | null }, { activityid_formatted?: string }>;
  activitypartyid: WebAttribute<ActivityParty_Select, { activitypartyid: string | null }, {  }>;
  addressused: WebAttribute<ActivityParty_Select, { addressused: string | null }, {  }>;
  addressusedemailcolumnnumber: WebAttribute<ActivityParty_Select, { addressusedemailcolumnnumber: number | null }, {  }>;
  donotemail: WebAttribute<ActivityParty_Select, { donotemail: boolean | null }, {  }>;
  donotfax: WebAttribute<ActivityParty_Select, { donotfax: boolean | null }, {  }>;
  donotphone: WebAttribute<ActivityParty_Select, { donotphone: boolean | null }, {  }>;
  donotpostalmail: WebAttribute<ActivityParty_Select, { donotpostalmail: boolean | null }, {  }>;
  effort: WebAttribute<ActivityParty_Select, { effort: number | null }, {  }>;
  exchangeentryid: WebAttribute<ActivityParty_Select, { exchangeentryid: string | null }, {  }>;
  instancetypecode: WebAttribute<ActivityParty_Select, { instancetypecode: activityparty_instancetypecode | null }, { instancetypecode_formatted?: string }>;
  ispartydeleted: WebAttribute<ActivityParty_Select, { ispartydeleted: boolean | null }, {  }>;
  ownerid_guid: WebAttribute<ActivityParty_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<ActivityParty_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<ActivityParty_Select, { owninguser: string | null }, {  }>;
  participationtypemask: WebAttribute<ActivityParty_Select, { participationtypemask: activityparty_participationtypemask | null }, { participationtypemask_formatted?: string }>;
  partyid_guid: WebAttribute<ActivityParty_Select, { partyid_guid: string | null }, { partyid_formatted?: string }>;
  resourcespecid_guid: WebAttribute<ActivityParty_Select, { resourcespecid_guid: string | null }, { resourcespecid_formatted?: string }>;
  scheduledend: WebAttribute<ActivityParty_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
  scheduledstart: WebAttribute<ActivityParty_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
  versionnumber: WebAttribute<ActivityParty_Select, { versionnumber: number | null }, {  }>;
}
interface ActivityParty_Filter {
  activityid_guid: XQW.Guid;
  activitypartyid: XQW.Guid;
  addressused: string;
  addressusedemailcolumnnumber: number;
  donotemail: boolean;
  donotfax: boolean;
  donotphone: boolean;
  donotpostalmail: boolean;
  effort: number;
  exchangeentryid: string;
  instancetypecode: activityparty_instancetypecode;
  ispartydeleted: boolean;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  participationtypemask: activityparty_participationtypemask;
  partyid_guid: XQW.Guid;
  resourcespecid_guid: XQW.Guid;
  scheduledend: Date;
  scheduledstart: Date;
  versionnumber: number;
}
interface ActivityParty_Expand {
  ActivityParty_SyncErrors: WebExpand<ActivityParty_Expand, SyncError_Select, SyncError_Filter, { ActivityParty_SyncErrors: SyncError_Result[] }>;
  activityid_activitypointer: WebExpand<ActivityParty_Expand, ActivityPointer_Select, ActivityPointer_Filter, { activityid_activitypointer: ActivityPointer_Result }>;
  activityid_appointment: WebExpand<ActivityParty_Expand, Appointment_Select, Appointment_Filter, { activityid_appointment: Appointment_Result }>;
  activityid_campaignactivity: WebExpand<ActivityParty_Expand, CampaignActivity_Select, CampaignActivity_Filter, { activityid_campaignactivity: CampaignActivity_Result }>;
  activityid_campaignresponse: WebExpand<ActivityParty_Expand, CampaignResponse_Select, CampaignResponse_Filter, { activityid_campaignresponse: CampaignResponse_Result }>;
  activityid_email: WebExpand<ActivityParty_Expand, Email_Select, Email_Filter, { activityid_email: Email_Result }>;
  activityid_fax: WebExpand<ActivityParty_Expand, Fax_Select, Fax_Filter, { activityid_fax: Fax_Result }>;
  activityid_incidentresolution: WebExpand<ActivityParty_Expand, IncidentResolution_Select, IncidentResolution_Filter, { activityid_incidentresolution: IncidentResolution_Result }>;
  activityid_letter: WebExpand<ActivityParty_Expand, Letter_Select, Letter_Filter, { activityid_letter: Letter_Result }>;
  activityid_msdyn_approval_activityparty: WebExpand<ActivityParty_Expand, msdyn_approval_Select, msdyn_approval_Filter, { activityid_msdyn_approval_activityparty: msdyn_approval_Result }>;
  activityid_msdyn_bookingalert_activityparty: WebExpand<ActivityParty_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { activityid_msdyn_bookingalert_activityparty: msdyn_bookingalert_Result }>;
  activityid_msdyn_ocliveworkitem_activityparty: WebExpand<ActivityParty_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { activityid_msdyn_ocliveworkitem_activityparty: msdyn_ocliveworkitem_Result }>;
  activityid_msdyn_ocoutboundmessage_activityparty: WebExpand<ActivityParty_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { activityid_msdyn_ocoutboundmessage_activityparty: msdyn_ocoutboundmessage_Result }>;
  activityid_msdyn_ocsession_activityparty: WebExpand<ActivityParty_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { activityid_msdyn_ocsession_activityparty: msdyn_ocsession_Result }>;
  activityid_msfp_alert_activityparty: WebExpand<ActivityParty_Expand, msfp_alert_Select, msfp_alert_Filter, { activityid_msfp_alert_activityparty: msfp_alert_Result }>;
  activityid_msfp_surveyinvite_activityparty: WebExpand<ActivityParty_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { activityid_msfp_surveyinvite_activityparty: msfp_surveyinvite_Result }>;
  activityid_msfp_surveyresponse_activityparty: WebExpand<ActivityParty_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { activityid_msfp_surveyresponse_activityparty: msfp_surveyresponse_Result }>;
  activityid_opportunityclose: WebExpand<ActivityParty_Expand, OpportunityClose_Select, OpportunityClose_Filter, { activityid_opportunityclose: OpportunityClose_Result }>;
  activityid_orderclose: WebExpand<ActivityParty_Expand, OrderClose_Select, OrderClose_Filter, { activityid_orderclose: OrderClose_Result }>;
  activityid_phonecall: WebExpand<ActivityParty_Expand, PhoneCall_Select, PhoneCall_Filter, { activityid_phonecall: PhoneCall_Result }>;
  activityid_quoteclose: WebExpand<ActivityParty_Expand, QuoteClose_Select, QuoteClose_Filter, { activityid_quoteclose: QuoteClose_Result }>;
  activityid_recurringappointmentmaster: WebExpand<ActivityParty_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { activityid_recurringappointmentmaster: RecurringAppointmentMaster_Result }>;
  activityid_serviceappointment: WebExpand<ActivityParty_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { activityid_serviceappointment: ServiceAppointment_Result }>;
  activityid_socialactivity: WebExpand<ActivityParty_Expand, SocialActivity_Select, SocialActivity_Filter, { activityid_socialactivity: SocialActivity_Result }>;
  activityid_task: WebExpand<ActivityParty_Expand, Task_Select, Task_Filter, { activityid_task: Task_Result }>;
  partyid_account: WebExpand<ActivityParty_Expand, Account_Select, Account_Filter, { partyid_account: Account_Result }>;
  partyid_bulkoperation: WebExpand<ActivityParty_Expand, BulkOperation_Select, BulkOperation_Filter, { partyid_bulkoperation: BulkOperation_Result }>;
  partyid_campaign: WebExpand<ActivityParty_Expand, Campaign_Select, Campaign_Filter, { partyid_campaign: Campaign_Result }>;
  partyid_campaignactivity: WebExpand<ActivityParty_Expand, CampaignActivity_Select, CampaignActivity_Filter, { partyid_campaignactivity: CampaignActivity_Result }>;
  partyid_contact: WebExpand<ActivityParty_Expand, Contact_Select, Contact_Filter, { partyid_contact: Contact_Result }>;
  partyid_contract: WebExpand<ActivityParty_Expand, Contract_Select, Contract_Filter, { partyid_contract: Contract_Result }>;
  partyid_entitlement: WebExpand<ActivityParty_Expand, Entitlement_Select, Entitlement_Filter, { partyid_entitlement: Entitlement_Result }>;
  partyid_equipment: WebExpand<ActivityParty_Expand, Equipment_Select, Equipment_Filter, { partyid_equipment: Equipment_Result }>;
  partyid_incident: WebExpand<ActivityParty_Expand, Incident_Select, Incident_Filter, { partyid_incident: Incident_Result }>;
  partyid_invoice: WebExpand<ActivityParty_Expand, Invoice_Select, Invoice_Filter, { partyid_invoice: Invoice_Result }>;
  partyid_knowledgearticle: WebExpand<ActivityParty_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { partyid_knowledgearticle: KnowledgeArticle_Result }>;
  partyid_lead: WebExpand<ActivityParty_Expand, Lead_Select, Lead_Filter, { partyid_lead: Lead_Result }>;
  partyid_opportunity: WebExpand<ActivityParty_Expand, Opportunity_Select, Opportunity_Filter, { partyid_opportunity: Opportunity_Result }>;
  partyid_queue: WebExpand<ActivityParty_Expand, Queue_Select, Queue_Filter, { partyid_queue: Queue_Result }>;
  partyid_quote: WebExpand<ActivityParty_Expand, Quote_Select, Quote_Filter, { partyid_quote: Quote_Result }>;
  partyid_salesorder: WebExpand<ActivityParty_Expand, SalesOrder_Select, SalesOrder_Filter, { partyid_salesorder: SalesOrder_Result }>;
  partyid_systemuser: WebExpand<ActivityParty_Expand, SystemUser_Select, SystemUser_Filter, { partyid_systemuser: SystemUser_Result }>;
  resourcespecid: WebExpand<ActivityParty_Expand, ResourceSpec_Select, ResourceSpec_Filter, { resourcespecid: ResourceSpec_Result }>;
  userentityinstancedata_activityparty: WebExpand<ActivityParty_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_activityparty: UserEntityInstanceData_Result[] }>;
}
interface ActivityParty_FormattedResult {
  activityid_formatted?: string;
  instancetypecode_formatted?: string;
  ownerid_formatted?: string;
  participationtypemask_formatted?: string;
  partyid_formatted?: string;
  resourcespecid_formatted?: string;
  scheduledend_formatted?: string;
  scheduledstart_formatted?: string;
}
interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
  "@odata.etag": string;
  activityid_guid: string | null;
  ownerid_guid: string | null;
  partyid_guid: string | null;
  resourcespecid_guid: string | null;
}
interface ActivityParty_RelatedOne {
  activityid_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  activityid_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  activityid_campaignactivity: WebMappingRetrieve<CampaignActivity_Select,CampaignActivity_Expand,CampaignActivity_Filter,CampaignActivity_Fixed,CampaignActivity_Result,CampaignActivity_FormattedResult>;
  activityid_campaignresponse: WebMappingRetrieve<CampaignResponse_Select,CampaignResponse_Expand,CampaignResponse_Filter,CampaignResponse_Fixed,CampaignResponse_Result,CampaignResponse_FormattedResult>;
  activityid_email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  activityid_fax: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  activityid_incidentresolution: WebMappingRetrieve<IncidentResolution_Select,IncidentResolution_Expand,IncidentResolution_Filter,IncidentResolution_Fixed,IncidentResolution_Result,IncidentResolution_FormattedResult>;
  activityid_letter: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  activityid_msdyn_approval_activityparty: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  activityid_msdyn_bookingalert_activityparty: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  activityid_msdyn_ocliveworkitem_activityparty: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  activityid_msdyn_ocoutboundmessage_activityparty: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  activityid_msdyn_ocsession_activityparty: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  activityid_msfp_alert_activityparty: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  activityid_msfp_surveyinvite_activityparty: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  activityid_msfp_surveyresponse_activityparty: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  activityid_opportunityclose: WebMappingRetrieve<OpportunityClose_Select,OpportunityClose_Expand,OpportunityClose_Filter,OpportunityClose_Fixed,OpportunityClose_Result,OpportunityClose_FormattedResult>;
  activityid_orderclose: WebMappingRetrieve<OrderClose_Select,OrderClose_Expand,OrderClose_Filter,OrderClose_Fixed,OrderClose_Result,OrderClose_FormattedResult>;
  activityid_phonecall: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  activityid_quoteclose: WebMappingRetrieve<QuoteClose_Select,QuoteClose_Expand,QuoteClose_Filter,QuoteClose_Fixed,QuoteClose_Result,QuoteClose_FormattedResult>;
  activityid_recurringappointmentmaster: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  activityid_serviceappointment: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  activityid_socialactivity: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  activityid_task: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  partyid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  partyid_bulkoperation: WebMappingRetrieve<BulkOperation_Select,BulkOperation_Expand,BulkOperation_Filter,BulkOperation_Fixed,BulkOperation_Result,BulkOperation_FormattedResult>;
  partyid_campaign: WebMappingRetrieve<Campaign_Select,Campaign_Expand,Campaign_Filter,Campaign_Fixed,Campaign_Result,Campaign_FormattedResult>;
  partyid_campaignactivity: WebMappingRetrieve<CampaignActivity_Select,CampaignActivity_Expand,CampaignActivity_Filter,CampaignActivity_Fixed,CampaignActivity_Result,CampaignActivity_FormattedResult>;
  partyid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  partyid_contract: WebMappingRetrieve<Contract_Select,Contract_Expand,Contract_Filter,Contract_Fixed,Contract_Result,Contract_FormattedResult>;
  partyid_entitlement: WebMappingRetrieve<Entitlement_Select,Entitlement_Expand,Entitlement_Filter,Entitlement_Fixed,Entitlement_Result,Entitlement_FormattedResult>;
  partyid_equipment: WebMappingRetrieve<Equipment_Select,Equipment_Expand,Equipment_Filter,Equipment_Fixed,Equipment_Result,Equipment_FormattedResult>;
  partyid_incident: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  partyid_invoice: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  partyid_knowledgearticle: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  partyid_lead: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  partyid_opportunity: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  partyid_queue: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  partyid_quote: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  partyid_salesorder: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  partyid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  resourcespecid: WebMappingRetrieve<ResourceSpec_Select,ResourceSpec_Expand,ResourceSpec_Filter,ResourceSpec_Fixed,ResourceSpec_Result,ResourceSpec_FormattedResult>;
}
interface ActivityParty_RelatedMany {
  ActivityParty_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_activityparty: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  activityparties: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
}
interface WebEntitiesRelated {
  activityparties: WebMappingRelated<ActivityParty_RelatedOne,ActivityParty_RelatedMany>;
}
interface WebEntitiesCUDA {
  activityparties: WebMappingCUDA<ActivityParty_Create,ActivityParty_Update,ActivityParty_Select>;
}
