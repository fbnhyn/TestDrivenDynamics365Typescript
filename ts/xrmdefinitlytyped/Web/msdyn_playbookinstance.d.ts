interface msdyn_playbookinstance_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_activitiesassociated?: number | null;
  msdyn_activitiesclosed?: number | null;
  msdyn_estimatedclose?: Date | null;
  msdyn_evaluateactivityclosure?: boolean | null;
  msdyn_name?: string | null;
  msdyn_playbookinstanceid?: string | null;
  msdyn_trackprogress?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_playbookinstance_statecode | null;
  statuscode?: msdyn_playbookinstance_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_playbookinstance_Relationships {
  msdyn_playbookinstance_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_playbookinstance_Annotations?: Annotation_Result[] | null;
  msdyn_playbookinstance_Appointments?: Appointment_Result[] | null;
  msdyn_playbookinstance_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_playbookinstance_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_playbookinstance_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_playbookinstance_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_playbookinstance_Emails?: Email_Result[] | null;
  msdyn_playbookinstance_Faxes?: Fax_Result[] | null;
  msdyn_playbookinstance_Letters?: Letter_Result[] | null;
  msdyn_playbookinstance_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_playbookinstance_OpportunityCloses?: OpportunityClose_Result[] | null;
  msdyn_playbookinstance_OrderCloses?: OrderClose_Result[] | null;
  msdyn_playbookinstance_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_playbookinstance_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_playbookinstance_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_playbookinstance_QuoteCloses?: QuoteClose_Result[] | null;
  msdyn_playbookinstance_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_playbookinstance_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_playbookinstance_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_playbookinstance_SyncErrors?: SyncError_Result[] | null;
  msdyn_playbookinstance_Tasks?: Task_Result[] | null;
  msdyn_playbookinstance_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_playbookinstance_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_playbookinstance_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_playbookinstance_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_playbookinstance_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_playbookinstance_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_playbookinstance_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_playbookinstance_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_playbookinstance_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  regarding_account?: Account_Result | null;
  regarding_contact?: Contact_Result | null;
  regarding_invoice?: Invoice_Result | null;
  regarding_lead?: Lead_Result | null;
  regarding_opportunity?: Opportunity_Result | null;
  regarding_quote?: Quote_Result | null;
  regarding_salesorder?: SalesOrder_Result | null;
}
interface msdyn_playbookinstance extends msdyn_playbookinstance_Base, msdyn_playbookinstance_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  regarding_account_bind$accounts?: string | null;
  regarding_contact_bind$contacts?: string | null;
  regarding_invoice_bind$invoices?: string | null;
  regarding_lead_bind$leads?: string | null;
  regarding_opportunity_bind$opportunities?: string | null;
  regarding_quote_bind$quotes?: string | null;
  regarding_salesorder_bind$salesorders?: string | null;
}
interface msdyn_playbookinstance_Create extends msdyn_playbookinstance {
  msdyn_categoryid_bind$msdyn_playbookcategories?: string | null;
  msdyn_playbooktemplateid_bind$msdyn_playbooktemplates?: string | null;
}
interface msdyn_playbookinstance_Update extends msdyn_playbookinstance {
}
interface msdyn_playbookinstance_Select {
  createdby_guid: WebAttribute<msdyn_playbookinstance_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_playbookinstance_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_playbookinstance_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_playbookinstance_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_playbookinstance_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_playbookinstance_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_playbookinstance_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_activitiesassociated: WebAttribute<msdyn_playbookinstance_Select, { msdyn_activitiesassociated: number | null }, {  }>;
  msdyn_activitiesclosed: WebAttribute<msdyn_playbookinstance_Select, { msdyn_activitiesclosed: number | null }, {  }>;
  msdyn_categoryid_guid: WebAttribute<msdyn_playbookinstance_Select, { msdyn_categoryid_guid: string | null }, { msdyn_categoryid_formatted?: string }>;
  msdyn_estimatedclose: WebAttribute<msdyn_playbookinstance_Select, { msdyn_estimatedclose: Date | null }, { msdyn_estimatedclose_formatted?: string }>;
  msdyn_evaluateactivityclosure: WebAttribute<msdyn_playbookinstance_Select, { msdyn_evaluateactivityclosure: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_playbookinstance_Select, { msdyn_name: string | null }, {  }>;
  msdyn_playbookinstanceid: WebAttribute<msdyn_playbookinstance_Select, { msdyn_playbookinstanceid: string | null }, {  }>;
  msdyn_playbooktemplateid_guid: WebAttribute<msdyn_playbookinstance_Select, { msdyn_playbooktemplateid_guid: string | null }, { msdyn_playbooktemplateid_formatted?: string }>;
  msdyn_trackprogress: WebAttribute<msdyn_playbookinstance_Select, { msdyn_trackprogress: boolean | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_playbookinstance_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_playbookinstance_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_playbookinstance_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_playbookinstance_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_playbookinstance_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  regarding_guid: WebAttribute<msdyn_playbookinstance_Select, { regarding_guid: string | null }, { regarding_formatted?: string }>;
  statecode: WebAttribute<msdyn_playbookinstance_Select, { statecode: msdyn_playbookinstance_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_playbookinstance_Select, { statuscode: msdyn_playbookinstance_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_playbookinstance_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_playbookinstance_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_playbookinstance_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_playbookinstance_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_activitiesassociated: number;
  msdyn_activitiesclosed: number;
  msdyn_categoryid_guid: XQW.Guid;
  msdyn_estimatedclose: Date;
  msdyn_evaluateactivityclosure: boolean;
  msdyn_name: string;
  msdyn_playbookinstanceid: XQW.Guid;
  msdyn_playbooktemplateid_guid: XQW.Guid;
  msdyn_trackprogress: boolean;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  regarding_guid: XQW.Guid;
  statecode: msdyn_playbookinstance_statecode;
  statuscode: msdyn_playbookinstance_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_playbookinstance_Expand {
  createdby: WebExpand<msdyn_playbookinstance_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_playbookinstance_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_playbookinstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_playbookinstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_categoryid: WebExpand<msdyn_playbookinstance_Expand, msdyn_playbookcategory_Select, msdyn_playbookcategory_Filter, { msdyn_categoryid: msdyn_playbookcategory_Result }>;
  msdyn_playbookinstance_ActivityPointers: WebExpand<msdyn_playbookinstance_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_playbookinstance_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_playbookinstance_Annotations: WebExpand<msdyn_playbookinstance_Expand, Annotation_Select, Annotation_Filter, { msdyn_playbookinstance_Annotations: Annotation_Result[] }>;
  msdyn_playbookinstance_Appointments: WebExpand<msdyn_playbookinstance_Expand, Appointment_Select, Appointment_Filter, { msdyn_playbookinstance_Appointments: Appointment_Result[] }>;
  msdyn_playbookinstance_AsyncOperations: WebExpand<msdyn_playbookinstance_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_playbookinstance_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_playbookinstance_BulkDeleteFailures: WebExpand<msdyn_playbookinstance_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_playbookinstance_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_playbookinstance_DuplicateBaseRecord: WebExpand<msdyn_playbookinstance_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_playbookinstance_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_playbookinstance_DuplicateMatchingRecord: WebExpand<msdyn_playbookinstance_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_playbookinstance_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_playbookinstance_Emails: WebExpand<msdyn_playbookinstance_Expand, Email_Select, Email_Filter, { msdyn_playbookinstance_Emails: Email_Result[] }>;
  msdyn_playbookinstance_Faxes: WebExpand<msdyn_playbookinstance_Expand, Fax_Select, Fax_Filter, { msdyn_playbookinstance_Faxes: Fax_Result[] }>;
  msdyn_playbookinstance_Letters: WebExpand<msdyn_playbookinstance_Expand, Letter_Select, Letter_Filter, { msdyn_playbookinstance_Letters: Letter_Result[] }>;
  msdyn_playbookinstance_MailboxTrackingFolders: WebExpand<msdyn_playbookinstance_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_playbookinstance_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_playbookinstance_OpportunityCloses: WebExpand<msdyn_playbookinstance_Expand, OpportunityClose_Select, OpportunityClose_Filter, { msdyn_playbookinstance_OpportunityCloses: OpportunityClose_Result[] }>;
  msdyn_playbookinstance_OrderCloses: WebExpand<msdyn_playbookinstance_Expand, OrderClose_Select, OrderClose_Filter, { msdyn_playbookinstance_OrderCloses: OrderClose_Result[] }>;
  msdyn_playbookinstance_PhoneCalls: WebExpand<msdyn_playbookinstance_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_playbookinstance_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_playbookinstance_PrincipalObjectAttributeAccesses: WebExpand<msdyn_playbookinstance_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_playbookinstance_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_playbookinstance_ProcessSession: WebExpand<msdyn_playbookinstance_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_playbookinstance_ProcessSession: ProcessSession_Result[] }>;
  msdyn_playbookinstance_QuoteCloses: WebExpand<msdyn_playbookinstance_Expand, QuoteClose_Select, QuoteClose_Filter, { msdyn_playbookinstance_QuoteCloses: QuoteClose_Result[] }>;
  msdyn_playbookinstance_RecurringAppointmentMasters: WebExpand<msdyn_playbookinstance_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_playbookinstance_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_playbookinstance_ServiceAppointments: WebExpand<msdyn_playbookinstance_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_playbookinstance_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_playbookinstance_SocialActivities: WebExpand<msdyn_playbookinstance_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_playbookinstance_SocialActivities: SocialActivity_Result[] }>;
  msdyn_playbookinstance_SyncErrors: WebExpand<msdyn_playbookinstance_Expand, SyncError_Select, SyncError_Filter, { msdyn_playbookinstance_SyncErrors: SyncError_Result[] }>;
  msdyn_playbookinstance_Tasks: WebExpand<msdyn_playbookinstance_Expand, Task_Select, Task_Filter, { msdyn_playbookinstance_Tasks: Task_Result[] }>;
  msdyn_playbookinstance_UserEntityInstanceDatas: WebExpand<msdyn_playbookinstance_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_playbookinstance_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_playbookinstance_msdyn_approvals: WebExpand<msdyn_playbookinstance_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_playbookinstance_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_playbookinstance_msdyn_bookingalerts: WebExpand<msdyn_playbookinstance_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_playbookinstance_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_playbookinstance_msdyn_ocliveworkitems: WebExpand<msdyn_playbookinstance_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_playbookinstance_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_playbookinstance_msdyn_ocoutboundmessages: WebExpand<msdyn_playbookinstance_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_playbookinstance_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_playbookinstance_msdyn_ocsessions: WebExpand<msdyn_playbookinstance_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_playbookinstance_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_playbookinstance_msfp_alerts: WebExpand<msdyn_playbookinstance_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_playbookinstance_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_playbookinstance_msfp_surveyinvites: WebExpand<msdyn_playbookinstance_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_playbookinstance_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_playbookinstance_msfp_surveyresponses: WebExpand<msdyn_playbookinstance_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_playbookinstance_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_playbooktemplateid: WebExpand<msdyn_playbookinstance_Expand, msdyn_playbooktemplate_Select, msdyn_playbooktemplate_Filter, { msdyn_playbooktemplateid: msdyn_playbooktemplate_Result }>;
  ownerid: WebExpand<msdyn_playbookinstance_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_playbookinstance_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_playbookinstance_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_playbookinstance_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  regarding_account: WebExpand<msdyn_playbookinstance_Expand, Account_Select, Account_Filter, { regarding_account: Account_Result }>;
  regarding_contact: WebExpand<msdyn_playbookinstance_Expand, Contact_Select, Contact_Filter, { regarding_contact: Contact_Result }>;
  regarding_invoice: WebExpand<msdyn_playbookinstance_Expand, Invoice_Select, Invoice_Filter, { regarding_invoice: Invoice_Result }>;
  regarding_lead: WebExpand<msdyn_playbookinstance_Expand, Lead_Select, Lead_Filter, { regarding_lead: Lead_Result }>;
  regarding_opportunity: WebExpand<msdyn_playbookinstance_Expand, Opportunity_Select, Opportunity_Filter, { regarding_opportunity: Opportunity_Result }>;
  regarding_quote: WebExpand<msdyn_playbookinstance_Expand, Quote_Select, Quote_Filter, { regarding_quote: Quote_Result }>;
  regarding_salesorder: WebExpand<msdyn_playbookinstance_Expand, SalesOrder_Select, SalesOrder_Filter, { regarding_salesorder: SalesOrder_Result }>;
}
interface msdyn_playbookinstance_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_categoryid_formatted?: string;
  msdyn_estimatedclose_formatted?: string;
  msdyn_playbooktemplateid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  regarding_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_playbookinstance_Result extends msdyn_playbookinstance_Base, msdyn_playbookinstance_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_categoryid_guid: string | null;
  msdyn_playbooktemplateid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regarding_guid: string | null;
}
interface msdyn_playbookinstance_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_categoryid: WebMappingRetrieve<msdyn_playbookcategory_Select,msdyn_playbookcategory_Expand,msdyn_playbookcategory_Filter,msdyn_playbookcategory_Fixed,msdyn_playbookcategory_Result,msdyn_playbookcategory_FormattedResult>;
  msdyn_playbooktemplateid: WebMappingRetrieve<msdyn_playbooktemplate_Select,msdyn_playbooktemplate_Expand,msdyn_playbooktemplate_Filter,msdyn_playbooktemplate_Fixed,msdyn_playbooktemplate_Result,msdyn_playbooktemplate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  regarding_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regarding_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regarding_invoice: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  regarding_lead: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  regarding_opportunity: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  regarding_quote: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  regarding_salesorder: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
}
interface msdyn_playbookinstance_RelatedMany {
  msdyn_playbookinstance_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_playbookinstance_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_playbookinstance_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_playbookinstance_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_playbookinstance_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_playbookinstance_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_playbookinstance_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_playbookinstance_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_playbookinstance_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_playbookinstance_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_playbookinstance_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_playbookinstance_OpportunityCloses: WebMappingRetrieve<OpportunityClose_Select,OpportunityClose_Expand,OpportunityClose_Filter,OpportunityClose_Fixed,OpportunityClose_Result,OpportunityClose_FormattedResult>;
  msdyn_playbookinstance_OrderCloses: WebMappingRetrieve<OrderClose_Select,OrderClose_Expand,OrderClose_Filter,OrderClose_Fixed,OrderClose_Result,OrderClose_FormattedResult>;
  msdyn_playbookinstance_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_playbookinstance_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_playbookinstance_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_playbookinstance_QuoteCloses: WebMappingRetrieve<QuoteClose_Select,QuoteClose_Expand,QuoteClose_Filter,QuoteClose_Fixed,QuoteClose_Result,QuoteClose_FormattedResult>;
  msdyn_playbookinstance_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_playbookinstance_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_playbookinstance_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_playbookinstance_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_playbookinstance_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_playbookinstance_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_playbookinstance_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_playbookinstance_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_playbookinstance_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_playbookinstance_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_playbookinstance_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_playbookinstance_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_playbookinstance_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_playbookinstance_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_playbookinstances: WebMappingRetrieve<msdyn_playbookinstance_Select,msdyn_playbookinstance_Expand,msdyn_playbookinstance_Filter,msdyn_playbookinstance_Fixed,msdyn_playbookinstance_Result,msdyn_playbookinstance_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_playbookinstances: WebMappingRelated<msdyn_playbookinstance_RelatedOne,msdyn_playbookinstance_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_playbookinstances: WebMappingCUDA<msdyn_playbookinstance_Create,msdyn_playbookinstance_Update,msdyn_playbookinstance_Select>;
}
