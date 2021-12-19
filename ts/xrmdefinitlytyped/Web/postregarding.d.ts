interface PostRegarding_Base extends WebEntity {
  latestautopostmodifiedon?: Date | null;
  latestmanualpostmodifiedon?: Date | null;
  postregardingid?: string | null;
  regardingobjecttypecodeforsharing?: string | null;
}
interface PostRegarding_Relationships {
  post_PostRegardings?: Post_Result[] | null;
  regardingobjectid_account?: Account_Result | null;
  regardingobjectid_appointment?: Appointment_Result | null;
  regardingobjectid_competitor?: Competitor_Result | null;
  regardingobjectid_contact?: Contact_Result | null;
  regardingobjectid_externalparty?: ExternalParty_Result | null;
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
interface PostRegarding extends PostRegarding_Base, PostRegarding_Relationships {
}
interface PostRegarding_Create extends PostRegarding {
  regardingobjectid_account_bind$accounts?: string | null;
  regardingobjectid_appointment_bind$appointments?: string | null;
  regardingobjectid_competitor_bind$competitors?: string | null;
  regardingobjectid_contact_bind$contacts?: string | null;
  regardingobjectid_externalparty_bind$externalparties?: string | null;
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
interface PostRegarding_Update extends PostRegarding {
}
interface PostRegarding_Select {
  latestautopostmodifiedon: WebAttribute<PostRegarding_Select, { latestautopostmodifiedon: Date | null }, { latestautopostmodifiedon_formatted?: string }>;
  latestmanualpostmodifiedon: WebAttribute<PostRegarding_Select, { latestmanualpostmodifiedon: Date | null }, { latestmanualpostmodifiedon_formatted?: string }>;
  postregardingid: WebAttribute<PostRegarding_Select, { postregardingid: string | null }, {  }>;
  regardingobjectid_guid: WebAttribute<PostRegarding_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  regardingobjectownerid_guid: WebAttribute<PostRegarding_Select, { regardingobjectownerid_guid: string | null }, { regardingobjectownerid_formatted?: string }>;
  regardingobjectowningbusinessunit_guid: WebAttribute<PostRegarding_Select, { regardingobjectowningbusinessunit_guid: string | null }, { regardingobjectowningbusinessunit_formatted?: string }>;
  regardingobjecttypecodeforsharing: WebAttribute<PostRegarding_Select, { regardingobjecttypecodeforsharing: string | null }, {  }>;
}
interface PostRegarding_Filter {
  latestautopostmodifiedon: Date;
  latestmanualpostmodifiedon: Date;
  postregardingid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  regardingobjectownerid_guid: XQW.Guid;
  regardingobjectowningbusinessunit_guid: XQW.Guid;
  regardingobjecttypecodeforsharing: string;
}
interface PostRegarding_Expand {
  post_PostRegardings: WebExpand<PostRegarding_Expand, Post_Select, Post_Filter, { post_PostRegardings: Post_Result[] }>;
  regardingobjectid_account: WebExpand<PostRegarding_Expand, Account_Select, Account_Filter, { regardingobjectid_account: Account_Result }>;
  regardingobjectid_appointment: WebExpand<PostRegarding_Expand, Appointment_Select, Appointment_Filter, { regardingobjectid_appointment: Appointment_Result }>;
  regardingobjectid_competitor: WebExpand<PostRegarding_Expand, Competitor_Select, Competitor_Filter, { regardingobjectid_competitor: Competitor_Result }>;
  regardingobjectid_contact: WebExpand<PostRegarding_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact: Contact_Result }>;
  regardingobjectid_externalparty: WebExpand<PostRegarding_Expand, ExternalParty_Select, ExternalParty_Filter, { regardingobjectid_externalparty: ExternalParty_Result }>;
  regardingobjectid_incident: WebExpand<PostRegarding_Expand, Incident_Select, Incident_Filter, { regardingobjectid_incident: Incident_Result }>;
  regardingobjectid_knowledgearticle: WebExpand<PostRegarding_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { regardingobjectid_knowledgearticle: KnowledgeArticle_Result }>;
  regardingobjectid_lead: WebExpand<PostRegarding_Expand, Lead_Select, Lead_Filter, { regardingobjectid_lead: Lead_Result }>;
  regardingobjectid_opportunity: WebExpand<PostRegarding_Expand, Opportunity_Select, Opportunity_Filter, { regardingobjectid_opportunity: Opportunity_Result }>;
  regardingobjectid_phonecall: WebExpand<PostRegarding_Expand, PhoneCall_Select, PhoneCall_Filter, { regardingobjectid_phonecall: PhoneCall_Result }>;
  regardingobjectid_processsession: WebExpand<PostRegarding_Expand, ProcessSession_Select, ProcessSession_Filter, { regardingobjectid_processsession: ProcessSession_Result }>;
  regardingobjectid_queue: WebExpand<PostRegarding_Expand, Queue_Select, Queue_Filter, { regardingobjectid_queue: Queue_Result }>;
  regardingobjectid_recurringappointmentmaster: WebExpand<PostRegarding_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { regardingobjectid_recurringappointmentmaster: RecurringAppointmentMaster_Result }>;
  regardingobjectid_systemuser: WebExpand<PostRegarding_Expand, SystemUser_Select, SystemUser_Filter, { regardingobjectid_systemuser: SystemUser_Result }>;
  regardingobjectid_task: WebExpand<PostRegarding_Expand, Task_Select, Task_Filter, { regardingobjectid_task: Task_Result }>;
  regardingobjectid_team: WebExpand<PostRegarding_Expand, Team_Select, Team_Filter, { regardingobjectid_team: Team_Result }>;
  regardingobjectowningbusinessunit: WebExpand<PostRegarding_Expand, BusinessUnit_Select, BusinessUnit_Filter, { regardingobjectowningbusinessunit: BusinessUnit_Result }>;
}
interface PostRegarding_FormattedResult {
  latestautopostmodifiedon_formatted?: string;
  latestmanualpostmodifiedon_formatted?: string;
  regardingobjectid_formatted?: string;
  regardingobjectownerid_formatted?: string;
  regardingobjectowningbusinessunit_formatted?: string;
}
interface PostRegarding_Result extends PostRegarding_Base, PostRegarding_Relationships {
  "@odata.etag": string;
  regardingobjectid_guid: string | null;
  regardingobjectownerid_guid: string | null;
  regardingobjectowningbusinessunit_guid: string | null;
}
interface PostRegarding_RelatedOne {
  regardingobjectid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regardingobjectid_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  regardingobjectid_competitor: WebMappingRetrieve<Competitor_Select,Competitor_Expand,Competitor_Filter,Competitor_Fixed,Competitor_Result,Competitor_FormattedResult>;
  regardingobjectid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regardingobjectid_externalparty: WebMappingRetrieve<ExternalParty_Select,ExternalParty_Expand,ExternalParty_Filter,ExternalParty_Fixed,ExternalParty_Result,ExternalParty_FormattedResult>;
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
  regardingobjectowningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
}
interface PostRegarding_RelatedMany {
  post_PostRegardings: WebMappingRetrieve<Post_Select,Post_Expand,Post_Filter,Post_Fixed,Post_Result,Post_FormattedResult>;
}
interface WebEntitiesRetrieve {
  postregardings: WebMappingRetrieve<PostRegarding_Select,PostRegarding_Expand,PostRegarding_Filter,PostRegarding_Fixed,PostRegarding_Result,PostRegarding_FormattedResult>;
}
interface WebEntitiesRelated {
  postregardings: WebMappingRelated<PostRegarding_RelatedOne,PostRegarding_RelatedMany>;
}
interface WebEntitiesCUDA {
  postregardings: WebMappingCUDA<PostRegarding_Create,PostRegarding_Update,PostRegarding_Select>;
}
