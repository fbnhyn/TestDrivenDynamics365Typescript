interface ActionCard_Base extends WebEntity {
  actioncardid?: string | null;
  cardtype?: number | null;
  createdon?: Date | null;
  data?: string | null;
  description?: string | null;
  exchangerate?: number | null;
  expirydate?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_actioncardregardingid?: string | null;
  msdyn_regardingobjectid?: string | null;
  msdyn_regardingobjectlogicalname?: string | null;
  overriddencreatedon?: Date | null;
  parentregardingobjectiddata?: string | null;
  priority?: number | null;
  recordidobjecttypecode2?: number | null;
  referencetokens?: string | null;
  source?: actioncard_source | null;
  startdate?: Date | null;
  state?: actioncard_state | null;
  title?: string | null;
  versionnumber?: number | null;
  visibility?: boolean | null;
}
interface ActionCard_Relationships {
  ActionCardUserState_ActionCard?: ActionCardUserState_Result[] | null;
  regardingobjectid_account_actioncard?: Account_Result | null;
  regardingobjectid_appointment_actioncard?: Appointment_Result | null;
  regardingobjectid_contact_actioncard?: Contact_Result | null;
  regardingobjectid_email_actioncard?: Email_Result | null;
  regardingobjectid_fax_actioncard?: Fax_Result | null;
  regardingobjectid_incident_actioncard?: Incident_Result | null;
  regardingobjectid_lead_actioncard?: Lead_Result | null;
  regardingobjectid_letter_actioncard?: Letter_Result | null;
  regardingobjectid_msdyn_approval?: msdyn_approval_Result | null;
  regardingobjectid_msdyn_bookingalert?: msdyn_bookingalert_Result | null;
  regardingobjectid_msdyn_ocliveworkitem?: msdyn_ocliveworkitem_Result | null;
  regardingobjectid_msdyn_ocoutboundmessage?: msdyn_ocoutboundmessage_Result | null;
  regardingobjectid_msdyn_ocsession?: msdyn_ocsession_Result | null;
  regardingobjectid_msfp_alert?: msfp_alert_Result | null;
  regardingobjectid_msfp_surveyinvite?: msfp_surveyinvite_Result | null;
  regardingobjectid_msfp_surveyresponse?: msfp_surveyresponse_Result | null;
  regardingobjectid_opportunity_actioncard?: Opportunity_Result | null;
  regardingobjectid_phonecall_actioncard?: PhoneCall_Result | null;
  regardingobjectid_recurringappointmentmaster_actioncard?: RecurringAppointmentMaster_Result | null;
  regardingobjectid_serviceappointment_actioncard?: ServiceAppointment_Result | null;
  regardingobjectid_task_actioncard?: Task_Result | null;
}
interface ActionCard extends ActionCard_Base, ActionCard_Relationships {
  cardtypeid_bind$cardtype?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  regardingobjectid_account_actioncard_bind$accounts?: string | null;
  regardingobjectid_appointment_actioncard_bind$appointments?: string | null;
  regardingobjectid_contact_actioncard_bind$contacts?: string | null;
  regardingobjectid_email_actioncard_bind$emails?: string | null;
  regardingobjectid_fax_actioncard_bind$faxes?: string | null;
  regardingobjectid_incident_actioncard_bind$incidents?: string | null;
  regardingobjectid_lead_actioncard_bind$leads?: string | null;
  regardingobjectid_letter_actioncard_bind$letters?: string | null;
  regardingobjectid_msdyn_approval_bind$msdyn_approvals?: string | null;
  regardingobjectid_msdyn_bookingalert_bind$msdyn_bookingalerts?: string | null;
  regardingobjectid_msdyn_ocliveworkitem_bind$msdyn_ocliveworkitems?: string | null;
  regardingobjectid_msdyn_ocoutboundmessage_bind$msdyn_ocoutboundmessages?: string | null;
  regardingobjectid_msdyn_ocsession_bind$msdyn_ocsessions?: string | null;
  regardingobjectid_msfp_alert_bind$msfp_alerts?: string | null;
  regardingobjectid_msfp_surveyinvite_bind$msfp_surveyinvites?: string | null;
  regardingobjectid_msfp_surveyresponse_bind$msfp_surveyresponses?: string | null;
  regardingobjectid_opportunity_actioncard_bind$opportunities?: string | null;
  regardingobjectid_phonecall_actioncard_bind$phonecalls?: string | null;
  regardingobjectid_recurringappointmentmaster_actioncard_bind$recurringappointmentmasters?: string | null;
  regardingobjectid_serviceappointment_actioncard_bind$serviceappointments?: string | null;
  regardingobjectid_task_actioncard_bind$tasks?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface ActionCard_Create extends ActionCard {
}
interface ActionCard_Update extends ActionCard {
}
interface ActionCard_Select {
  actioncardid: WebAttribute<ActionCard_Select, { actioncardid: string | null }, {  }>;
  cardtype: WebAttribute<ActionCard_Select, { cardtype: number | null }, {  }>;
  cardtypeid_guid: WebAttribute<ActionCard_Select, { cardtypeid_guid: string | null }, { cardtypeid_formatted?: string }>;
  createdby_guid: WebAttribute<ActionCard_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ActionCard_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ActionCard_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  data: WebAttribute<ActionCard_Select, { data: string | null }, {  }>;
  description: WebAttribute<ActionCard_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<ActionCard_Select, { exchangerate: number | null }, {  }>;
  expirydate: WebAttribute<ActionCard_Select, { expirydate: Date | null }, { expirydate_formatted?: string }>;
  importsequencenumber: WebAttribute<ActionCard_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ActionCard_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ActionCard_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ActionCard_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actioncardregardingid: WebAttribute<ActionCard_Select, { msdyn_actioncardregardingid: string | null }, {  }>;
  msdyn_regardingobjectid: WebAttribute<ActionCard_Select, { msdyn_regardingobjectid: string | null }, {  }>;
  msdyn_regardingobjectlogicalname: WebAttribute<ActionCard_Select, { msdyn_regardingobjectlogicalname: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ActionCard_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<ActionCard_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ActionCard_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ActionCard_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ActionCard_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentregardingobjectid_guid: WebAttribute<ActionCard_Select, { parentregardingobjectid_guid: string | null }, { parentregardingobjectid_formatted?: string }>;
  parentregardingobjectiddata: WebAttribute<ActionCard_Select, { parentregardingobjectiddata: string | null }, {  }>;
  priority: WebAttribute<ActionCard_Select, { priority: number | null }, {  }>;
  recordid_guid: WebAttribute<ActionCard_Select, { recordid_guid: string | null }, { recordid_formatted?: string }>;
  recordidobjecttypecode2: WebAttribute<ActionCard_Select, { recordidobjecttypecode2: number | null }, {  }>;
  referencetokens: WebAttribute<ActionCard_Select, { referencetokens: string | null }, {  }>;
  regardingobjectid_guid: WebAttribute<ActionCard_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  source: WebAttribute<ActionCard_Select, { source: actioncard_source | null }, { source_formatted?: string }>;
  startdate: WebAttribute<ActionCard_Select, { startdate: Date | null }, { startdate_formatted?: string }>;
  state: WebAttribute<ActionCard_Select, { state: actioncard_state | null }, { state_formatted?: string }>;
  title: WebAttribute<ActionCard_Select, { title: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ActionCard_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<ActionCard_Select, { versionnumber: number | null }, {  }>;
  visibility: WebAttribute<ActionCard_Select, { visibility: boolean | null }, {  }>;
}
interface ActionCard_Filter {
  actioncardid: XQW.Guid;
  cardtype: number;
  cardtypeid_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  data: string;
  description: string;
  exchangerate: any;
  expirydate: Date;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_actioncardregardingid: string;
  msdyn_regardingobjectid: string;
  msdyn_regardingobjectlogicalname: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentregardingobjectid_guid: XQW.Guid;
  parentregardingobjectiddata: string;
  priority: number;
  recordid_guid: XQW.Guid;
  recordidobjecttypecode2: number;
  referencetokens: string;
  regardingobjectid_guid: XQW.Guid;
  source: actioncard_source;
  startdate: Date;
  state: actioncard_state;
  title: string;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
  visibility: boolean;
}
interface ActionCard_Expand {
  ActionCardUserState_ActionCard: WebExpand<ActionCard_Expand, ActionCardUserState_Select, ActionCardUserState_Filter, { ActionCardUserState_ActionCard: ActionCardUserState_Result[] }>;
  cardtypeid: WebExpand<ActionCard_Expand, CardType_Select, CardType_Filter, { cardtypeid: CardType_Result }>;
  createdby: WebExpand<ActionCard_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ActionCard_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ActionCard_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ActionCard_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<ActionCard_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<ActionCard_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  regardingobjectid_account_actioncard: WebExpand<ActionCard_Expand, Account_Select, Account_Filter, { regardingobjectid_account_actioncard: Account_Result }>;
  regardingobjectid_appointment_actioncard: WebExpand<ActionCard_Expand, Appointment_Select, Appointment_Filter, { regardingobjectid_appointment_actioncard: Appointment_Result }>;
  regardingobjectid_contact_actioncard: WebExpand<ActionCard_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact_actioncard: Contact_Result }>;
  regardingobjectid_email_actioncard: WebExpand<ActionCard_Expand, Email_Select, Email_Filter, { regardingobjectid_email_actioncard: Email_Result }>;
  regardingobjectid_fax_actioncard: WebExpand<ActionCard_Expand, Fax_Select, Fax_Filter, { regardingobjectid_fax_actioncard: Fax_Result }>;
  regardingobjectid_incident_actioncard: WebExpand<ActionCard_Expand, Incident_Select, Incident_Filter, { regardingobjectid_incident_actioncard: Incident_Result }>;
  regardingobjectid_lead_actioncard: WebExpand<ActionCard_Expand, Lead_Select, Lead_Filter, { regardingobjectid_lead_actioncard: Lead_Result }>;
  regardingobjectid_letter_actioncard: WebExpand<ActionCard_Expand, Letter_Select, Letter_Filter, { regardingobjectid_letter_actioncard: Letter_Result }>;
  regardingobjectid_msdyn_approval: WebExpand<ActionCard_Expand, msdyn_approval_Select, msdyn_approval_Filter, { regardingobjectid_msdyn_approval: msdyn_approval_Result }>;
  regardingobjectid_msdyn_bookingalert: WebExpand<ActionCard_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { regardingobjectid_msdyn_bookingalert: msdyn_bookingalert_Result }>;
  regardingobjectid_msdyn_ocliveworkitem: WebExpand<ActionCard_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { regardingobjectid_msdyn_ocliveworkitem: msdyn_ocliveworkitem_Result }>;
  regardingobjectid_msdyn_ocoutboundmessage: WebExpand<ActionCard_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { regardingobjectid_msdyn_ocoutboundmessage: msdyn_ocoutboundmessage_Result }>;
  regardingobjectid_msdyn_ocsession: WebExpand<ActionCard_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { regardingobjectid_msdyn_ocsession: msdyn_ocsession_Result }>;
  regardingobjectid_msfp_alert: WebExpand<ActionCard_Expand, msfp_alert_Select, msfp_alert_Filter, { regardingobjectid_msfp_alert: msfp_alert_Result }>;
  regardingobjectid_msfp_surveyinvite: WebExpand<ActionCard_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { regardingobjectid_msfp_surveyinvite: msfp_surveyinvite_Result }>;
  regardingobjectid_msfp_surveyresponse: WebExpand<ActionCard_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { regardingobjectid_msfp_surveyresponse: msfp_surveyresponse_Result }>;
  regardingobjectid_opportunity_actioncard: WebExpand<ActionCard_Expand, Opportunity_Select, Opportunity_Filter, { regardingobjectid_opportunity_actioncard: Opportunity_Result }>;
  regardingobjectid_phonecall_actioncard: WebExpand<ActionCard_Expand, PhoneCall_Select, PhoneCall_Filter, { regardingobjectid_phonecall_actioncard: PhoneCall_Result }>;
  regardingobjectid_recurringappointmentmaster_actioncard: WebExpand<ActionCard_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { regardingobjectid_recurringappointmentmaster_actioncard: RecurringAppointmentMaster_Result }>;
  regardingobjectid_serviceappointment_actioncard: WebExpand<ActionCard_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { regardingobjectid_serviceappointment_actioncard: ServiceAppointment_Result }>;
  regardingobjectid_task_actioncard: WebExpand<ActionCard_Expand, Task_Select, Task_Filter, { regardingobjectid_task_actioncard: Task_Result }>;
  transactioncurrencyid: WebExpand<ActionCard_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface ActionCard_FormattedResult {
  cardtypeid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  expirydate_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentregardingobjectid_formatted?: string;
  recordid_formatted?: string;
  regardingobjectid_formatted?: string;
  source_formatted?: string;
  startdate_formatted?: string;
  state_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface ActionCard_Result extends ActionCard_Base, ActionCard_Relationships {
  "@odata.etag": string;
  cardtypeid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentregardingobjectid_guid: string | null;
  recordid_guid: string | null;
  regardingobjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface ActionCard_RelatedOne {
  cardtypeid: WebMappingRetrieve<CardType_Select,CardType_Expand,CardType_Filter,CardType_Fixed,CardType_Result,CardType_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  regardingobjectid_account_actioncard: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regardingobjectid_appointment_actioncard: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  regardingobjectid_contact_actioncard: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regardingobjectid_email_actioncard: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  regardingobjectid_fax_actioncard: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  regardingobjectid_incident_actioncard: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  regardingobjectid_lead_actioncard: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  regardingobjectid_letter_actioncard: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  regardingobjectid_msdyn_approval: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  regardingobjectid_msdyn_bookingalert: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  regardingobjectid_msdyn_ocliveworkitem: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  regardingobjectid_msdyn_ocoutboundmessage: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  regardingobjectid_msdyn_ocsession: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  regardingobjectid_msfp_alert: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  regardingobjectid_msfp_surveyinvite: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  regardingobjectid_msfp_surveyresponse: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  regardingobjectid_opportunity_actioncard: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  regardingobjectid_phonecall_actioncard: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  regardingobjectid_recurringappointmentmaster_actioncard: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  regardingobjectid_serviceappointment_actioncard: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  regardingobjectid_task_actioncard: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface ActionCard_RelatedMany {
  ActionCardUserState_ActionCard: WebMappingRetrieve<ActionCardUserState_Select,ActionCardUserState_Expand,ActionCardUserState_Filter,ActionCardUserState_Fixed,ActionCardUserState_Result,ActionCardUserState_FormattedResult>;
}
interface WebEntitiesRetrieve {
  actioncards: WebMappingRetrieve<ActionCard_Select,ActionCard_Expand,ActionCard_Filter,ActionCard_Fixed,ActionCard_Result,ActionCard_FormattedResult>;
}
interface WebEntitiesRelated {
  actioncards: WebMappingRelated<ActionCard_RelatedOne,ActionCard_RelatedMany>;
}
interface WebEntitiesCUDA {
  actioncards: WebMappingCUDA<ActionCard_Create,ActionCard_Update,ActionCard_Select>;
}
