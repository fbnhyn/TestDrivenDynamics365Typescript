interface PostFollow_Base extends WebEntity {
  createdon?: Date | null;
  postfollowid?: string | null;
  posttoyammer?: boolean | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  yammerpoststate?: number | null;
  yammerretrycount?: number | null;
}
interface PostFollow_Relationships {
  PostFollow_AsyncOperations?: AsyncOperation_Result[] | null;
  PostFollow_SyncErrors?: SyncError_Result[] | null;
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
}
interface PostFollow extends PostFollow_Base, PostFollow_Relationships {
}
interface PostFollow_Create extends PostFollow {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
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
}
interface PostFollow_Update extends PostFollow {
}
interface PostFollow_Select {
  createdby_guid: WebAttribute<PostFollow_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PostFollow_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PostFollow_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  ownerid_guid: WebAttribute<PostFollow_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<PostFollow_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<PostFollow_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<PostFollow_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  postfollowid: WebAttribute<PostFollow_Select, { postfollowid: string | null }, {  }>;
  posttoyammer: WebAttribute<PostFollow_Select, { posttoyammer: boolean | null }, {  }>;
  regardingobjectid_guid: WebAttribute<PostFollow_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<PostFollow_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<PostFollow_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<PostFollow_Select, { versionnumber: number | null }, {  }>;
  yammerpoststate: WebAttribute<PostFollow_Select, { yammerpoststate: number | null }, {  }>;
  yammerretrycount: WebAttribute<PostFollow_Select, { yammerretrycount: number | null }, {  }>;
}
interface PostFollow_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  postfollowid: XQW.Guid;
  posttoyammer: boolean;
  regardingobjectid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
  yammerpoststate: number;
  yammerretrycount: number;
}
interface PostFollow_Expand {
  PostFollow_AsyncOperations: WebExpand<PostFollow_Expand, AsyncOperation_Select, AsyncOperation_Filter, { PostFollow_AsyncOperations: AsyncOperation_Result[] }>;
  PostFollow_SyncErrors: WebExpand<PostFollow_Expand, SyncError_Select, SyncError_Filter, { PostFollow_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<PostFollow_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PostFollow_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<PostFollow_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<PostFollow_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<PostFollow_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<PostFollow_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  regardingobjectid_account: WebExpand<PostFollow_Expand, Account_Select, Account_Filter, { regardingobjectid_account: Account_Result }>;
  regardingobjectid_appointment: WebExpand<PostFollow_Expand, Appointment_Select, Appointment_Filter, { regardingobjectid_appointment: Appointment_Result }>;
  regardingobjectid_competitor: WebExpand<PostFollow_Expand, Competitor_Select, Competitor_Filter, { regardingobjectid_competitor: Competitor_Result }>;
  regardingobjectid_contact: WebExpand<PostFollow_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact: Contact_Result }>;
  regardingobjectid_incident: WebExpand<PostFollow_Expand, Incident_Select, Incident_Filter, { regardingobjectid_incident: Incident_Result }>;
  regardingobjectid_knowledgearticle: WebExpand<PostFollow_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { regardingobjectid_knowledgearticle: KnowledgeArticle_Result }>;
  regardingobjectid_lead: WebExpand<PostFollow_Expand, Lead_Select, Lead_Filter, { regardingobjectid_lead: Lead_Result }>;
  regardingobjectid_opportunity: WebExpand<PostFollow_Expand, Opportunity_Select, Opportunity_Filter, { regardingobjectid_opportunity: Opportunity_Result }>;
  regardingobjectid_phonecall: WebExpand<PostFollow_Expand, PhoneCall_Select, PhoneCall_Filter, { regardingobjectid_phonecall: PhoneCall_Result }>;
  regardingobjectid_processsession: WebExpand<PostFollow_Expand, ProcessSession_Select, ProcessSession_Filter, { regardingobjectid_processsession: ProcessSession_Result }>;
  regardingobjectid_queue: WebExpand<PostFollow_Expand, Queue_Select, Queue_Filter, { regardingobjectid_queue: Queue_Result }>;
  regardingobjectid_recurringappointmentmaster: WebExpand<PostFollow_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { regardingobjectid_recurringappointmentmaster: RecurringAppointmentMaster_Result }>;
  regardingobjectid_systemuser: WebExpand<PostFollow_Expand, SystemUser_Select, SystemUser_Filter, { regardingobjectid_systemuser: SystemUser_Result }>;
  regardingobjectid_task: WebExpand<PostFollow_Expand, Task_Select, Task_Filter, { regardingobjectid_task: Task_Result }>;
}
interface PostFollow_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  regardingobjectid_formatted?: string;
}
interface PostFollow_Result extends PostFollow_Base, PostFollow_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface PostFollow_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
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
}
interface PostFollow_RelatedMany {
  PostFollow_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  PostFollow_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
}
interface WebEntitiesRetrieve {
  postfollows: WebMappingRetrieve<PostFollow_Select,PostFollow_Expand,PostFollow_Filter,PostFollow_Fixed,PostFollow_Result,PostFollow_FormattedResult>;
}
interface WebEntitiesRelated {
  postfollows: WebMappingRelated<PostFollow_RelatedOne,PostFollow_RelatedMany>;
}
interface WebEntitiesCUDA {
  postfollows: WebMappingCUDA<PostFollow_Create,PostFollow_Update,PostFollow_Select>;
}
