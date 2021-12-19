interface PostRole_Base extends WebEntity {
  postroleid?: string | null;
  type?: postrole_roletype | null;
}
interface PostRole_Relationships {
  regardingobjectid_account?: Account_Result | null;
  regardingobjectid_appointment?: Appointment_Result | null;
  regardingobjectid_competitor?: Competitor_Result | null;
  regardingobjectid_contact?: Contact_Result | null;
  regardingobjectid_incident?: Incident_Result | null;
  regardingobjectid_knowledgearticle?: KnowledgeArticle_Result | null;
  regardingobjectid_lead?: Lead_Result | null;
  regardingobjectid_opportunity?: Opportunity_Result | null;
  regardingobjectid_phonecall?: PhoneCall_Result | null;
  regardingobjectid_processsession?: ProcessSession_Result | null;
  regardingobjectid_queue?: Queue_Result | null;
  regardingobjectid_recurringappointmentmaster?: RecurringAppointmentMaster_Result | null;
  regardingobjectid_systemuser?: SystemUser_Result | null;
  regardingobjectid_task?: Task_Result | null;
  regardingobjectid_team?: Team_Result | null;
}
interface PostRole extends PostRole_Base, PostRole_Relationships {
}
interface PostRole_Create extends PostRole {
  postid_bind$posts?: string | null;
  regardingobjectid_account_bind$accounts?: string | null;
  regardingobjectid_appointment_bind$appointments?: string | null;
  regardingobjectid_competitor_bind$competitors?: string | null;
  regardingobjectid_contact_bind$contacts?: string | null;
  regardingobjectid_incident_bind$incidents?: string | null;
  regardingobjectid_knowledgearticle_bind$knowledgearticles?: string | null;
  regardingobjectid_lead_bind$leads?: string | null;
  regardingobjectid_opportunity_bind$opportunities?: string | null;
  regardingobjectid_phonecall_bind$phonecalls?: string | null;
  regardingobjectid_processsession_bind$processsessions?: string | null;
  regardingobjectid_queue_bind$queues?: string | null;
  regardingobjectid_recurringappointmentmaster_bind$recurringappointmentmasters?: string | null;
  regardingobjectid_systemuser_bind$systemusers?: string | null;
  regardingobjectid_task_bind$tasks?: string | null;
  regardingobjectid_team_bind$teams?: string | null;
}
interface PostRole_Update extends PostRole {
}
interface PostRole_Select {
  organizationid_guid: WebAttribute<PostRole_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  postid_guid: WebAttribute<PostRole_Select, { postid_guid: string | null }, { postid_formatted?: string }>;
  postroleid: WebAttribute<PostRole_Select, { postroleid: string | null }, {  }>;
  regardingobjectid_guid: WebAttribute<PostRole_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  type: WebAttribute<PostRole_Select, { type: postrole_roletype | null }, { type_formatted?: string }>;
}
interface PostRole_Filter {
  organizationid_guid: XQW.Guid;
  postid_guid: XQW.Guid;
  postroleid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  type: postrole_roletype;
}
interface PostRole_Expand {
  organizationid: WebExpand<PostRole_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  postid: WebExpand<PostRole_Expand, Post_Select, Post_Filter, { postid: Post_Result }>;
  regardingobjectid_account: WebExpand<PostRole_Expand, Account_Select, Account_Filter, { regardingobjectid_account: Account_Result }>;
  regardingobjectid_appointment: WebExpand<PostRole_Expand, Appointment_Select, Appointment_Filter, { regardingobjectid_appointment: Appointment_Result }>;
  regardingobjectid_competitor: WebExpand<PostRole_Expand, Competitor_Select, Competitor_Filter, { regardingobjectid_competitor: Competitor_Result }>;
  regardingobjectid_contact: WebExpand<PostRole_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact: Contact_Result }>;
  regardingobjectid_incident: WebExpand<PostRole_Expand, Incident_Select, Incident_Filter, { regardingobjectid_incident: Incident_Result }>;
  regardingobjectid_knowledgearticle: WebExpand<PostRole_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { regardingobjectid_knowledgearticle: KnowledgeArticle_Result }>;
  regardingobjectid_lead: WebExpand<PostRole_Expand, Lead_Select, Lead_Filter, { regardingobjectid_lead: Lead_Result }>;
  regardingobjectid_opportunity: WebExpand<PostRole_Expand, Opportunity_Select, Opportunity_Filter, { regardingobjectid_opportunity: Opportunity_Result }>;
  regardingobjectid_phonecall: WebExpand<PostRole_Expand, PhoneCall_Select, PhoneCall_Filter, { regardingobjectid_phonecall: PhoneCall_Result }>;
  regardingobjectid_processsession: WebExpand<PostRole_Expand, ProcessSession_Select, ProcessSession_Filter, { regardingobjectid_processsession: ProcessSession_Result }>;
  regardingobjectid_queue: WebExpand<PostRole_Expand, Queue_Select, Queue_Filter, { regardingobjectid_queue: Queue_Result }>;
  regardingobjectid_recurringappointmentmaster: WebExpand<PostRole_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { regardingobjectid_recurringappointmentmaster: RecurringAppointmentMaster_Result }>;
  regardingobjectid_systemuser: WebExpand<PostRole_Expand, SystemUser_Select, SystemUser_Filter, { regardingobjectid_systemuser: SystemUser_Result }>;
  regardingobjectid_task: WebExpand<PostRole_Expand, Task_Select, Task_Filter, { regardingobjectid_task: Task_Result }>;
  regardingobjectid_team: WebExpand<PostRole_Expand, Team_Select, Team_Filter, { regardingobjectid_team: Team_Result }>;
}
interface PostRole_FormattedResult {
  organizationid_formatted?: string;
  postid_formatted?: string;
  regardingobjectid_formatted?: string;
  type_formatted?: string;
}
interface PostRole_Result extends PostRole_Base, PostRole_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
  postid_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface PostRole_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  postid: WebMappingRetrieve<Post_Select,Post_Expand,Post_Filter,Post_Fixed,Post_Result,Post_FormattedResult>;
  regardingobjectid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regardingobjectid_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  regardingobjectid_competitor: WebMappingRetrieve<Competitor_Select,Competitor_Expand,Competitor_Filter,Competitor_Fixed,Competitor_Result,Competitor_FormattedResult>;
  regardingobjectid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regardingobjectid_incident: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  regardingobjectid_knowledgearticle: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  regardingobjectid_lead: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  regardingobjectid_opportunity: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  regardingobjectid_phonecall: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  regardingobjectid_processsession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  regardingobjectid_queue: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  regardingobjectid_recurringappointmentmaster: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  regardingobjectid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  regardingobjectid_task: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  regardingobjectid_team: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface PostRole_RelatedMany {
}
interface WebEntitiesRetrieve {
  postroles: WebMappingRetrieve<PostRole_Select,PostRole_Expand,PostRole_Filter,PostRole_Fixed,PostRole_Result,PostRole_FormattedResult>;
}
interface WebEntitiesRelated {
  postroles: WebMappingRelated<PostRole_RelatedOne,PostRole_RelatedMany>;
}
interface WebEntitiesCUDA {
  postroles: WebMappingCUDA<PostRole_Create,PostRole_Update,PostRole_Select>;
}
