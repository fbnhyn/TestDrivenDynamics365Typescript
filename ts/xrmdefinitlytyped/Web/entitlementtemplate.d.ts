interface EntitlementTemplate_Base extends WebEntity {
  allocationtypecode?: entitlementtemplate_allocationtype | null;
  createdon?: Date | null;
  decreaseremainingon?: entitlementtemplate_decreaseremainingon | null;
  description?: string | null;
  enddate?: Date | null;
  entitlementtemplateid?: string | null;
  entitytype?: entitytype | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  kbaccesslevel?: entitlementtemplate_kbaccesslevel | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  restrictcasecreation?: boolean | null;
  startdate?: Date | null;
  timezoneruleversionnumber?: number | null;
  totalterms?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface EntitlementTemplate_Relationships {
  EntitlementTemplate_MailboxTrackingFolder?: MailboxTrackingFolder_Result[] | null;
  EntitlementTemplate_SyncErrors?: SyncError_Result[] | null;
  entitlementtemplate_ActivityPointers?: ActivityPointer_Result[] | null;
  entitlementtemplate_Annotations?: Annotation_Result[] | null;
  entitlementtemplate_Appointments?: Appointment_Result[] | null;
  entitlementtemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  entitlementtemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  entitlementtemplate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  entitlementtemplate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  entitlementtemplate_Emails?: Email_Result[] | null;
  entitlementtemplate_Faxes?: Fax_Result[] | null;
  entitlementtemplate_IncidentResolutions?: IncidentResolution_Result[] | null;
  entitlementtemplate_Letters?: Letter_Result[] | null;
  entitlementtemplate_OpportunityCloses?: OpportunityClose_Result[] | null;
  entitlementtemplate_OrderCloses?: OrderClose_Result[] | null;
  entitlementtemplate_PhoneCalls?: PhoneCall_Result[] | null;
  entitlementtemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  entitlementtemplate_ProcessSession?: ProcessSession_Result[] | null;
  entitlementtemplate_QuoteCloses?: QuoteClose_Result[] | null;
  entitlementtemplate_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  entitlementtemplate_ServiceAppointments?: ServiceAppointment_Result[] | null;
  entitlementtemplate_SocialActivities?: SocialActivity_Result[] | null;
  entitlementtemplate_Tasks?: Task_Result[] | null;
  entitlementtemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  entitlementtemplate_entitlementchannel_entitlementtemplateid?: EntitlementTemplateChannel_Result[] | null;
  entitlementtemplate_msdyn_approvals?: msdyn_approval_Result[] | null;
  entitlementtemplate_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  entitlementtemplate_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  entitlementtemplate_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  entitlementtemplate_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  entitlementtemplate_msfp_alerts?: msfp_alert_Result[] | null;
  entitlementtemplate_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  entitlementtemplate_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  entitlementtemplateid_RelationShip?: Entitlement_Result[] | null;
  product_entitlementtemplate_association?: Product_Result[] | null;
}
interface EntitlementTemplate extends EntitlementTemplate_Base, EntitlementTemplate_Relationships {
  slaid_bind$slas?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface EntitlementTemplate_Create extends EntitlementTemplate {
}
interface EntitlementTemplate_Update extends EntitlementTemplate {
}
interface EntitlementTemplate_Select {
  allocationtypecode: WebAttribute<EntitlementTemplate_Select, { allocationtypecode: entitlementtemplate_allocationtype | null }, { allocationtypecode_formatted?: string }>;
  createdby_guid: WebAttribute<EntitlementTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<EntitlementTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<EntitlementTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  decreaseremainingon: WebAttribute<EntitlementTemplate_Select, { decreaseremainingon: entitlementtemplate_decreaseremainingon | null }, { decreaseremainingon_formatted?: string }>;
  description: WebAttribute<EntitlementTemplate_Select, { description: string | null }, {  }>;
  enddate: WebAttribute<EntitlementTemplate_Select, { enddate: Date | null }, { enddate_formatted?: string }>;
  entitlementtemplateid: WebAttribute<EntitlementTemplate_Select, { entitlementtemplateid: string | null }, {  }>;
  entitytype: WebAttribute<EntitlementTemplate_Select, { entitytype: entitytype | null }, { entitytype_formatted?: string }>;
  exchangerate: WebAttribute<EntitlementTemplate_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<EntitlementTemplate_Select, { importsequencenumber: number | null }, {  }>;
  kbaccesslevel: WebAttribute<EntitlementTemplate_Select, { kbaccesslevel: entitlementtemplate_kbaccesslevel | null }, { kbaccesslevel_formatted?: string }>;
  modifiedby_guid: WebAttribute<EntitlementTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<EntitlementTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<EntitlementTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<EntitlementTemplate_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<EntitlementTemplate_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<EntitlementTemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  restrictcasecreation: WebAttribute<EntitlementTemplate_Select, { restrictcasecreation: boolean | null }, {  }>;
  slaid_guid: WebAttribute<EntitlementTemplate_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
  startdate: WebAttribute<EntitlementTemplate_Select, { startdate: Date | null }, { startdate_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<EntitlementTemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  totalterms: WebAttribute<EntitlementTemplate_Select, { totalterms: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<EntitlementTemplate_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<EntitlementTemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<EntitlementTemplate_Select, { versionnumber: number | null }, {  }>;
}
interface EntitlementTemplate_Filter {
  allocationtypecode: entitlementtemplate_allocationtype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  decreaseremainingon: entitlementtemplate_decreaseremainingon;
  description: string;
  enddate: Date;
  entitlementtemplateid: XQW.Guid;
  entitytype: entitytype;
  exchangerate: any;
  importsequencenumber: number;
  kbaccesslevel: entitlementtemplate_kbaccesslevel;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  restrictcasecreation: boolean;
  slaid_guid: XQW.Guid;
  startdate: Date;
  timezoneruleversionnumber: number;
  totalterms: any;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface EntitlementTemplate_Expand {
  EntitlementTemplate_MailboxTrackingFolder: WebExpand<EntitlementTemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { EntitlementTemplate_MailboxTrackingFolder: MailboxTrackingFolder_Result[] }>;
  EntitlementTemplate_SyncErrors: WebExpand<EntitlementTemplate_Expand, SyncError_Select, SyncError_Filter, { EntitlementTemplate_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<EntitlementTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<EntitlementTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entitlementtemplate_ActivityPointers: WebExpand<EntitlementTemplate_Expand, ActivityPointer_Select, ActivityPointer_Filter, { entitlementtemplate_ActivityPointers: ActivityPointer_Result[] }>;
  entitlementtemplate_Annotations: WebExpand<EntitlementTemplate_Expand, Annotation_Select, Annotation_Filter, { entitlementtemplate_Annotations: Annotation_Result[] }>;
  entitlementtemplate_Appointments: WebExpand<EntitlementTemplate_Expand, Appointment_Select, Appointment_Filter, { entitlementtemplate_Appointments: Appointment_Result[] }>;
  entitlementtemplate_AsyncOperations: WebExpand<EntitlementTemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { entitlementtemplate_AsyncOperations: AsyncOperation_Result[] }>;
  entitlementtemplate_BulkDeleteFailures: WebExpand<EntitlementTemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { entitlementtemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  entitlementtemplate_DuplicateBaseRecord: WebExpand<EntitlementTemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { entitlementtemplate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  entitlementtemplate_DuplicateMatchingRecord: WebExpand<EntitlementTemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { entitlementtemplate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  entitlementtemplate_Emails: WebExpand<EntitlementTemplate_Expand, Email_Select, Email_Filter, { entitlementtemplate_Emails: Email_Result[] }>;
  entitlementtemplate_Faxes: WebExpand<EntitlementTemplate_Expand, Fax_Select, Fax_Filter, { entitlementtemplate_Faxes: Fax_Result[] }>;
  entitlementtemplate_IncidentResolutions: WebExpand<EntitlementTemplate_Expand, IncidentResolution_Select, IncidentResolution_Filter, { entitlementtemplate_IncidentResolutions: IncidentResolution_Result[] }>;
  entitlementtemplate_Letters: WebExpand<EntitlementTemplate_Expand, Letter_Select, Letter_Filter, { entitlementtemplate_Letters: Letter_Result[] }>;
  entitlementtemplate_OpportunityCloses: WebExpand<EntitlementTemplate_Expand, OpportunityClose_Select, OpportunityClose_Filter, { entitlementtemplate_OpportunityCloses: OpportunityClose_Result[] }>;
  entitlementtemplate_OrderCloses: WebExpand<EntitlementTemplate_Expand, OrderClose_Select, OrderClose_Filter, { entitlementtemplate_OrderCloses: OrderClose_Result[] }>;
  entitlementtemplate_PhoneCalls: WebExpand<EntitlementTemplate_Expand, PhoneCall_Select, PhoneCall_Filter, { entitlementtemplate_PhoneCalls: PhoneCall_Result[] }>;
  entitlementtemplate_PrincipalObjectAttributeAccesses: WebExpand<EntitlementTemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { entitlementtemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  entitlementtemplate_ProcessSession: WebExpand<EntitlementTemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { entitlementtemplate_ProcessSession: ProcessSession_Result[] }>;
  entitlementtemplate_QuoteCloses: WebExpand<EntitlementTemplate_Expand, QuoteClose_Select, QuoteClose_Filter, { entitlementtemplate_QuoteCloses: QuoteClose_Result[] }>;
  entitlementtemplate_RecurringAppointmentMasters: WebExpand<EntitlementTemplate_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { entitlementtemplate_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  entitlementtemplate_ServiceAppointments: WebExpand<EntitlementTemplate_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { entitlementtemplate_ServiceAppointments: ServiceAppointment_Result[] }>;
  entitlementtemplate_SocialActivities: WebExpand<EntitlementTemplate_Expand, SocialActivity_Select, SocialActivity_Filter, { entitlementtemplate_SocialActivities: SocialActivity_Result[] }>;
  entitlementtemplate_Tasks: WebExpand<EntitlementTemplate_Expand, Task_Select, Task_Filter, { entitlementtemplate_Tasks: Task_Result[] }>;
  entitlementtemplate_UserEntityInstanceDatas: WebExpand<EntitlementTemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { entitlementtemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  entitlementtemplate_entitlementchannel_entitlementtemplateid: WebExpand<EntitlementTemplate_Expand, EntitlementTemplateChannel_Select, EntitlementTemplateChannel_Filter, { entitlementtemplate_entitlementchannel_entitlementtemplateid: EntitlementTemplateChannel_Result[] }>;
  entitlementtemplate_msdyn_approvals: WebExpand<EntitlementTemplate_Expand, msdyn_approval_Select, msdyn_approval_Filter, { entitlementtemplate_msdyn_approvals: msdyn_approval_Result[] }>;
  entitlementtemplate_msdyn_bookingalerts: WebExpand<EntitlementTemplate_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { entitlementtemplate_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  entitlementtemplate_msdyn_ocliveworkitems: WebExpand<EntitlementTemplate_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { entitlementtemplate_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  entitlementtemplate_msdyn_ocoutboundmessages: WebExpand<EntitlementTemplate_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { entitlementtemplate_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  entitlementtemplate_msdyn_ocsessions: WebExpand<EntitlementTemplate_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { entitlementtemplate_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  entitlementtemplate_msfp_alerts: WebExpand<EntitlementTemplate_Expand, msfp_alert_Select, msfp_alert_Filter, { entitlementtemplate_msfp_alerts: msfp_alert_Result[] }>;
  entitlementtemplate_msfp_surveyinvites: WebExpand<EntitlementTemplate_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { entitlementtemplate_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  entitlementtemplate_msfp_surveyresponses: WebExpand<EntitlementTemplate_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { entitlementtemplate_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  entitlementtemplateid_RelationShip: WebExpand<EntitlementTemplate_Expand, Entitlement_Select, Entitlement_Filter, { entitlementtemplateid_RelationShip: Entitlement_Result[] }>;
  modifiedby: WebExpand<EntitlementTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<EntitlementTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<EntitlementTemplate_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  product_entitlementtemplate_association: WebExpand<EntitlementTemplate_Expand, Product_Select, Product_Filter, { product_entitlementtemplate_association: Product_Result[] }>;
  slaid: WebExpand<EntitlementTemplate_Expand, SLA_Select, SLA_Filter, { slaid: SLA_Result }>;
  transactioncurrencyid: WebExpand<EntitlementTemplate_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface EntitlementTemplate_FormattedResult {
  allocationtypecode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  decreaseremainingon_formatted?: string;
  enddate_formatted?: string;
  entitytype_formatted?: string;
  kbaccesslevel_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  slaid_formatted?: string;
  startdate_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface EntitlementTemplate_Result extends EntitlementTemplate_Base, EntitlementTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  slaid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface EntitlementTemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  slaid: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface EntitlementTemplate_RelatedMany {
  EntitlementTemplate_MailboxTrackingFolder: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  EntitlementTemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  entitlementtemplate_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  entitlementtemplate_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  entitlementtemplate_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  entitlementtemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  entitlementtemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  entitlementtemplate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  entitlementtemplate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  entitlementtemplate_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  entitlementtemplate_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  entitlementtemplate_IncidentResolutions: WebMappingRetrieve<IncidentResolution_Select,IncidentResolution_Expand,IncidentResolution_Filter,IncidentResolution_Fixed,IncidentResolution_Result,IncidentResolution_FormattedResult>;
  entitlementtemplate_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  entitlementtemplate_OpportunityCloses: WebMappingRetrieve<OpportunityClose_Select,OpportunityClose_Expand,OpportunityClose_Filter,OpportunityClose_Fixed,OpportunityClose_Result,OpportunityClose_FormattedResult>;
  entitlementtemplate_OrderCloses: WebMappingRetrieve<OrderClose_Select,OrderClose_Expand,OrderClose_Filter,OrderClose_Fixed,OrderClose_Result,OrderClose_FormattedResult>;
  entitlementtemplate_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  entitlementtemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  entitlementtemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  entitlementtemplate_QuoteCloses: WebMappingRetrieve<QuoteClose_Select,QuoteClose_Expand,QuoteClose_Filter,QuoteClose_Fixed,QuoteClose_Result,QuoteClose_FormattedResult>;
  entitlementtemplate_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  entitlementtemplate_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  entitlementtemplate_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  entitlementtemplate_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  entitlementtemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  entitlementtemplate_entitlementchannel_entitlementtemplateid: WebMappingRetrieve<EntitlementTemplateChannel_Select,EntitlementTemplateChannel_Expand,EntitlementTemplateChannel_Filter,EntitlementTemplateChannel_Fixed,EntitlementTemplateChannel_Result,EntitlementTemplateChannel_FormattedResult>;
  entitlementtemplate_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  entitlementtemplate_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  entitlementtemplate_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  entitlementtemplate_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  entitlementtemplate_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  entitlementtemplate_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  entitlementtemplate_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  entitlementtemplate_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  entitlementtemplateid_RelationShip: WebMappingRetrieve<Entitlement_Select,Entitlement_Expand,Entitlement_Filter,Entitlement_Fixed,Entitlement_Result,Entitlement_FormattedResult>;
  product_entitlementtemplate_association: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entitlementtemplates: WebMappingRetrieve<EntitlementTemplate_Select,EntitlementTemplate_Expand,EntitlementTemplate_Filter,EntitlementTemplate_Fixed,EntitlementTemplate_Result,EntitlementTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  entitlementtemplates: WebMappingRelated<EntitlementTemplate_RelatedOne,EntitlementTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  entitlementtemplates: WebMappingCUDA<EntitlementTemplate_Create,EntitlementTemplate_Update,EntitlementTemplate_Select>;
}
