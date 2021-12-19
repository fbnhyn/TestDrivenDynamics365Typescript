interface SLAKPIInstance_Base extends WebEntity {
  applicablefromvalue?: Date | null;
  computedfailuretime?: Date | null;
  computedwarningtime?: Date | null;
  createdon?: Date | null;
  description?: string | null;
  elapsedtime?: number | null;
  exchangerate?: number | null;
  failuretime?: Date | null;
  lastresumetime?: Date | null;
  modifiedon?: Date | null;
  msdyn_actionexecutionstatus?: msdyn_slakpiinstance_msdyn_actionexecutionstatus | null;
  msdyn_calendarid?: string | null;
  msdyn_prevslakpiinstanceid?: string | null;
  name?: string | null;
  pausedon?: Date | null;
  regardingentityid?: string | null;
  slakpiinstanceid?: string | null;
  status?: slakpiinstance_status | null;
  succeededon?: Date | null;
  successcheckedat?: Date | null;
  terminalstatereached?: boolean | null;
  terminalstatetime?: Date | null;
  versionnumber?: number | null;
  warningtime?: Date | null;
  warningtimereached?: slakpiinstance_warningtimereached | null;
}
interface SLAKPIInstance_Relationships {
  SLAKPIInstance_SyncErrors?: SyncError_Result[] | null;
  msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi?: msdyn_workorder_Result[] | null;
  msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid?: msdyn_workorder_Result[] | null;
  regarding_account?: Account_Result | null;
  regarding_activitypointer?: ActivityPointer_Result | null;
  regarding_appointment?: Appointment_Result | null;
  regarding_contact?: Contact_Result | null;
  regarding_email?: Email_Result | null;
  regarding_fax?: Fax_Result | null;
  regarding_invoice?: Invoice_Result | null;
  regarding_lead?: Lead_Result | null;
  regarding_letter?: Letter_Result | null;
  regarding_opportunity?: Opportunity_Result | null;
  regarding_phonecall?: PhoneCall_Result | null;
  regarding_quote?: Quote_Result | null;
  regarding_salesorder?: SalesOrder_Result | null;
  regarding_serviceappointment?: ServiceAppointment_Result | null;
  regarding_socialactivity?: SocialActivity_Result | null;
  regarding_task?: Task_Result | null;
  slakpiinstance_incident_firstresponsebykpi?: Incident_Result[] | null;
  slakpiinstance_incident_resolvebykpi?: Incident_Result[] | null;
}
interface SLAKPIInstance extends SLAKPIInstance_Base, SLAKPIInstance_Relationships {
  msdyn_slaitemid_bind$slaitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  owningbusinessunit_bind$businessunits?: string | null;
  regarding_account_bind$accounts?: string | null;
  regarding_activitypointer_bind$activitypointers?: string | null;
  regarding_appointment_bind$appointments?: string | null;
  regarding_bind$incidents?: string | null;
  regarding_contact_bind$contacts?: string | null;
  regarding_email_bind$emails?: string | null;
  regarding_fax_bind$faxes?: string | null;
  regarding_invoice_bind$invoices?: string | null;
  regarding_lead_bind$leads?: string | null;
  regarding_letter_bind$letters?: string | null;
  regarding_opportunity_bind$opportunities?: string | null;
  regarding_phonecall_bind$phonecalls?: string | null;
  regarding_quote_bind$quotes?: string | null;
  regarding_salesorder_bind$salesorders?: string | null;
  regarding_serviceappointment_bind$serviceappointments?: string | null;
  regarding_socialactivity_bind$socialactivities?: string | null;
  regarding_task_bind$tasks?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface SLAKPIInstance_Create extends SLAKPIInstance {
}
interface SLAKPIInstance_Update extends SLAKPIInstance {
}
interface SLAKPIInstance_Select {
  applicablefromvalue: WebAttribute<SLAKPIInstance_Select, { applicablefromvalue: Date | null }, { applicablefromvalue_formatted?: string }>;
  computedfailuretime: WebAttribute<SLAKPIInstance_Select, { computedfailuretime: Date | null }, { computedfailuretime_formatted?: string }>;
  computedwarningtime: WebAttribute<SLAKPIInstance_Select, { computedwarningtime: Date | null }, { computedwarningtime_formatted?: string }>;
  createdby_guid: WebAttribute<SLAKPIInstance_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SLAKPIInstance_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SLAKPIInstance_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<SLAKPIInstance_Select, { description: string | null }, {  }>;
  elapsedtime: WebAttribute<SLAKPIInstance_Select, { elapsedtime: number | null }, {  }>;
  exchangerate: WebAttribute<SLAKPIInstance_Select, { exchangerate: number | null }, {  }>;
  failuretime: WebAttribute<SLAKPIInstance_Select, { failuretime: Date | null }, { failuretime_formatted?: string }>;
  lastresumetime: WebAttribute<SLAKPIInstance_Select, { lastresumetime: Date | null }, { lastresumetime_formatted?: string }>;
  modifiedby_guid: WebAttribute<SLAKPIInstance_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SLAKPIInstance_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SLAKPIInstance_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actionexecutionstatus: WebAttribute<SLAKPIInstance_Select, { msdyn_actionexecutionstatus: msdyn_slakpiinstance_msdyn_actionexecutionstatus | null }, { msdyn_actionexecutionstatus_formatted?: string }>;
  msdyn_calendarid: WebAttribute<SLAKPIInstance_Select, { msdyn_calendarid: string | null }, {  }>;
  msdyn_prevslakpiinstanceid: WebAttribute<SLAKPIInstance_Select, { msdyn_prevslakpiinstanceid: string | null }, {  }>;
  msdyn_slaitemid_guid: WebAttribute<SLAKPIInstance_Select, { msdyn_slaitemid_guid: string | null }, { msdyn_slaitemid_formatted?: string }>;
  name: WebAttribute<SLAKPIInstance_Select, { name: string | null }, {  }>;
  ownerid_guid: WebAttribute<SLAKPIInstance_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<SLAKPIInstance_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<SLAKPIInstance_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<SLAKPIInstance_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  pausedon: WebAttribute<SLAKPIInstance_Select, { pausedon: Date | null }, { pausedon_formatted?: string }>;
  regarding_guid: WebAttribute<SLAKPIInstance_Select, { regarding_guid: string | null }, { regarding_formatted?: string }>;
  regardingentityid: WebAttribute<SLAKPIInstance_Select, { regardingentityid: string | null }, {  }>;
  slakpiinstanceid: WebAttribute<SLAKPIInstance_Select, { slakpiinstanceid: string | null }, {  }>;
  status: WebAttribute<SLAKPIInstance_Select, { status: slakpiinstance_status | null }, { status_formatted?: string }>;
  succeededon: WebAttribute<SLAKPIInstance_Select, { succeededon: Date | null }, { succeededon_formatted?: string }>;
  successcheckedat: WebAttribute<SLAKPIInstance_Select, { successcheckedat: Date | null }, { successcheckedat_formatted?: string }>;
  terminalstatereached: WebAttribute<SLAKPIInstance_Select, { terminalstatereached: boolean | null }, {  }>;
  terminalstatetime: WebAttribute<SLAKPIInstance_Select, { terminalstatetime: Date | null }, { terminalstatetime_formatted?: string }>;
  transactioncurrencyid_guid: WebAttribute<SLAKPIInstance_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<SLAKPIInstance_Select, { versionnumber: number | null }, {  }>;
  warningtime: WebAttribute<SLAKPIInstance_Select, { warningtime: Date | null }, { warningtime_formatted?: string }>;
  warningtimereached: WebAttribute<SLAKPIInstance_Select, { warningtimereached: slakpiinstance_warningtimereached | null }, { warningtimereached_formatted?: string }>;
}
interface SLAKPIInstance_Filter {
  applicablefromvalue: Date;
  computedfailuretime: Date;
  computedwarningtime: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  elapsedtime: number;
  exchangerate: any;
  failuretime: Date;
  lastresumetime: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_actionexecutionstatus: msdyn_slakpiinstance_msdyn_actionexecutionstatus;
  msdyn_calendarid: string;
  msdyn_prevslakpiinstanceid: string;
  msdyn_slaitemid_guid: XQW.Guid;
  name: string;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  pausedon: Date;
  regarding_guid: XQW.Guid;
  regardingentityid: string;
  slakpiinstanceid: XQW.Guid;
  status: slakpiinstance_status;
  succeededon: Date;
  successcheckedat: Date;
  terminalstatereached: boolean;
  terminalstatetime: Date;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
  warningtime: Date;
  warningtimereached: slakpiinstance_warningtimereached;
}
interface SLAKPIInstance_Expand {
  SLAKPIInstance_SyncErrors: WebExpand<SLAKPIInstance_Expand, SyncError_Select, SyncError_Filter, { SLAKPIInstance_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<SLAKPIInstance_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SLAKPIInstance_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SLAKPIInstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SLAKPIInstance_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_slaitemid: WebExpand<SLAKPIInstance_Expand, SLAItem_Select, SLAItem_Filter, { msdyn_slaitemid: SLAItem_Result }>;
  msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi: WebExpand<SLAKPIInstance_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi: msdyn_workorder_Result[] }>;
  msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid: WebExpand<SLAKPIInstance_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid: msdyn_workorder_Result[] }>;
  ownerid: WebExpand<SLAKPIInstance_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<SLAKPIInstance_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  regarding: WebExpand<SLAKPIInstance_Expand, Incident_Select, Incident_Filter, { regarding: Incident_Result }>;
  regarding_account: WebExpand<SLAKPIInstance_Expand, Account_Select, Account_Filter, { regarding_account: Account_Result }>;
  regarding_activitypointer: WebExpand<SLAKPIInstance_Expand, ActivityPointer_Select, ActivityPointer_Filter, { regarding_activitypointer: ActivityPointer_Result }>;
  regarding_appointment: WebExpand<SLAKPIInstance_Expand, Appointment_Select, Appointment_Filter, { regarding_appointment: Appointment_Result }>;
  regarding_contact: WebExpand<SLAKPIInstance_Expand, Contact_Select, Contact_Filter, { regarding_contact: Contact_Result }>;
  regarding_email: WebExpand<SLAKPIInstance_Expand, Email_Select, Email_Filter, { regarding_email: Email_Result }>;
  regarding_fax: WebExpand<SLAKPIInstance_Expand, Fax_Select, Fax_Filter, { regarding_fax: Fax_Result }>;
  regarding_invoice: WebExpand<SLAKPIInstance_Expand, Invoice_Select, Invoice_Filter, { regarding_invoice: Invoice_Result }>;
  regarding_lead: WebExpand<SLAKPIInstance_Expand, Lead_Select, Lead_Filter, { regarding_lead: Lead_Result }>;
  regarding_letter: WebExpand<SLAKPIInstance_Expand, Letter_Select, Letter_Filter, { regarding_letter: Letter_Result }>;
  regarding_opportunity: WebExpand<SLAKPIInstance_Expand, Opportunity_Select, Opportunity_Filter, { regarding_opportunity: Opportunity_Result }>;
  regarding_phonecall: WebExpand<SLAKPIInstance_Expand, PhoneCall_Select, PhoneCall_Filter, { regarding_phonecall: PhoneCall_Result }>;
  regarding_quote: WebExpand<SLAKPIInstance_Expand, Quote_Select, Quote_Filter, { regarding_quote: Quote_Result }>;
  regarding_salesorder: WebExpand<SLAKPIInstance_Expand, SalesOrder_Select, SalesOrder_Filter, { regarding_salesorder: SalesOrder_Result }>;
  regarding_serviceappointment: WebExpand<SLAKPIInstance_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { regarding_serviceappointment: ServiceAppointment_Result }>;
  regarding_socialactivity: WebExpand<SLAKPIInstance_Expand, SocialActivity_Select, SocialActivity_Filter, { regarding_socialactivity: SocialActivity_Result }>;
  regarding_task: WebExpand<SLAKPIInstance_Expand, Task_Select, Task_Filter, { regarding_task: Task_Result }>;
  slakpiinstance_incident_firstresponsebykpi: WebExpand<SLAKPIInstance_Expand, Incident_Select, Incident_Filter, { slakpiinstance_incident_firstresponsebykpi: Incident_Result[] }>;
  slakpiinstance_incident_resolvebykpi: WebExpand<SLAKPIInstance_Expand, Incident_Select, Incident_Filter, { slakpiinstance_incident_resolvebykpi: Incident_Result[] }>;
  transactioncurrencyid: WebExpand<SLAKPIInstance_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface SLAKPIInstance_FormattedResult {
  applicablefromvalue_formatted?: string;
  computedfailuretime_formatted?: string;
  computedwarningtime_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  failuretime_formatted?: string;
  lastresumetime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_actionexecutionstatus_formatted?: string;
  msdyn_slaitemid_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  pausedon_formatted?: string;
  regarding_formatted?: string;
  status_formatted?: string;
  succeededon_formatted?: string;
  successcheckedat_formatted?: string;
  terminalstatetime_formatted?: string;
  transactioncurrencyid_formatted?: string;
  warningtime_formatted?: string;
  warningtimereached_formatted?: string;
}
interface SLAKPIInstance_Result extends SLAKPIInstance_Base, SLAKPIInstance_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_slaitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regarding_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface SLAKPIInstance_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_slaitemid: WebMappingRetrieve<SLAItem_Select,SLAItem_Expand,SLAItem_Filter,SLAItem_Fixed,SLAItem_Result,SLAItem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  regarding: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  regarding_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regarding_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  regarding_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  regarding_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regarding_email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  regarding_fax: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  regarding_invoice: WebMappingRetrieve<Invoice_Select,Invoice_Expand,Invoice_Filter,Invoice_Fixed,Invoice_Result,Invoice_FormattedResult>;
  regarding_lead: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  regarding_letter: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  regarding_opportunity: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  regarding_phonecall: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  regarding_quote: WebMappingRetrieve<Quote_Select,Quote_Expand,Quote_Filter,Quote_Fixed,Quote_Result,Quote_FormattedResult>;
  regarding_salesorder: WebMappingRetrieve<SalesOrder_Select,SalesOrder_Expand,SalesOrder_Filter,SalesOrder_Fixed,SalesOrder_Result,SalesOrder_FormattedResult>;
  regarding_serviceappointment: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  regarding_socialactivity: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  regarding_task: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface SLAKPIInstance_RelatedMany {
  SLAKPIInstance_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_slakpiinstance_msdyn_workorder_arrival_timekpi: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_slakpiinstance_msdyn_workorder_resolutionkpiid: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  slakpiinstance_incident_firstresponsebykpi: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  slakpiinstance_incident_resolvebykpi: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
}
interface WebEntitiesRetrieve {
  slakpiinstances: WebMappingRetrieve<SLAKPIInstance_Select,SLAKPIInstance_Expand,SLAKPIInstance_Filter,SLAKPIInstance_Fixed,SLAKPIInstance_Result,SLAKPIInstance_FormattedResult>;
}
interface WebEntitiesRelated {
  slakpiinstances: WebMappingRelated<SLAKPIInstance_RelatedOne,SLAKPIInstance_RelatedMany>;
}
interface WebEntitiesCUDA {
  slakpiinstances: WebMappingCUDA<SLAKPIInstance_Create,SLAKPIInstance_Update,SLAKPIInstance_Select>;
}
