interface BulkOperationLog_Base extends WebEntity {
  additionalinfo?: string | null;
  bulkoperationlogid?: string | null;
  errordescriptionformatted?: string | null;
  errornumber?: number | null;
  errornumberformatted?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BulkOperationLog_Relationships {
  BulkOperationLog_AsyncOperations?: AsyncOperation_Result[] | null;
  BulkOperationLog_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  BulkOperation_Logs_Accounts?: Account_Result[] | null;
  BulkOperation_Logs_Contacts?: Contact_Result[] | null;
  BulkOperation_Logs_Leads?: Lead_Result[] | null;
  CampaignActivityId_Logs?: CampaignActivity_Result | null;
  CampaignActivity_Logs_Accounts?: Account_Result[] | null;
  CampaignActivity_Logs_Contacts?: Contact_Result[] | null;
  CampaignActivity_Logs_Leads?: Lead_Result[] | null;
  bulkoperationid_activitypointer?: ActivityPointer_Result | null;
  bulkoperationlog_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  bulkoperationlog_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  bulkoperationlog_SyncErrors?: SyncError_Result[] | null;
  createdobjectid_account?: Account_Result | null;
  createdobjectid_activitypointer?: ActivityPointer_Result | null;
  createdobjectid_contact?: Contact_Result | null;
  createdobjectid_lead?: Lead_Result | null;
  createdobjectid_opportunity?: Opportunity_Result | null;
  regardingobjectid_account?: Account_Result | null;
  regardingobjectid_contact?: Contact_Result | null;
  regardingobjectid_lead?: Lead_Result | null;
  userentityinstancedata_bulkoperationlog?: UserEntityInstanceData_Result[] | null;
}
interface BulkOperationLog extends BulkOperationLog_Base, BulkOperationLog_Relationships {
}
interface BulkOperationLog_Create extends BulkOperationLog {
  CampaignActivityId_Logs_bind$campaignactivities?: string | null;
  bulkoperationid_activitypointer_bind$activitypointers?: string | null;
  bulkoperationid_bind$bulkoperations?: string | null;
  createdobjectid_account_bind$accounts?: string | null;
  createdobjectid_activitypointer_bind$activitypointers?: string | null;
  createdobjectid_contact_bind$contacts?: string | null;
  createdobjectid_lead_bind$leads?: string | null;
  createdobjectid_opportunity_bind$opportunities?: string | null;
  regardingobjectid_account_bind$accounts?: string | null;
  regardingobjectid_contact_bind$contacts?: string | null;
  regardingobjectid_lead_bind$leads?: string | null;
}
interface BulkOperationLog_Update extends BulkOperationLog {
}
interface BulkOperationLog_Select {
  additionalinfo: WebAttribute<BulkOperationLog_Select, { additionalinfo: string | null }, {  }>;
  bulkoperationid_guid: WebAttribute<BulkOperationLog_Select, { bulkoperationid_guid: string | null }, { bulkoperationid_formatted?: string }>;
  bulkoperationlogid: WebAttribute<BulkOperationLog_Select, { bulkoperationlogid: string | null }, {  }>;
  campaignactivityid_guid: WebAttribute<BulkOperationLog_Select, { campaignactivityid_guid: string | null }, { campaignactivityid_formatted?: string }>;
  createdobjectid_guid: WebAttribute<BulkOperationLog_Select, { createdobjectid_guid: string | null }, { createdobjectid_formatted?: string }>;
  errordescriptionformatted: WebAttribute<BulkOperationLog_Select, { errordescriptionformatted: string | null }, {  }>;
  errornumber: WebAttribute<BulkOperationLog_Select, { errornumber: number | null }, {  }>;
  errornumberformatted: WebAttribute<BulkOperationLog_Select, { errornumberformatted: string | null }, {  }>;
  importsequencenumber: WebAttribute<BulkOperationLog_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<BulkOperationLog_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BulkOperationLog_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BulkOperationLog_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BulkOperationLog_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BulkOperationLog_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BulkOperationLog_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<BulkOperationLog_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<BulkOperationLog_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<BulkOperationLog_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BulkOperationLog_Select, { versionnumber: number | null }, {  }>;
}
interface BulkOperationLog_Filter {
  additionalinfo: string;
  bulkoperationid_guid: XQW.Guid;
  bulkoperationlogid: XQW.Guid;
  campaignactivityid_guid: XQW.Guid;
  createdobjectid_guid: XQW.Guid;
  errordescriptionformatted: string;
  errornumber: number;
  errornumberformatted: string;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BulkOperationLog_Expand {
  BulkOperationLog_AsyncOperations: WebExpand<BulkOperationLog_Expand, AsyncOperation_Select, AsyncOperation_Filter, { BulkOperationLog_AsyncOperations: AsyncOperation_Result[] }>;
  BulkOperationLog_BulkDeleteFailures: WebExpand<BulkOperationLog_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { BulkOperationLog_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  BulkOperation_Logs_Accounts: WebExpand<BulkOperationLog_Expand, Account_Select, Account_Filter, { BulkOperation_Logs_Accounts: Account_Result[] }>;
  BulkOperation_Logs_Contacts: WebExpand<BulkOperationLog_Expand, Contact_Select, Contact_Filter, { BulkOperation_Logs_Contacts: Contact_Result[] }>;
  BulkOperation_Logs_Leads: WebExpand<BulkOperationLog_Expand, Lead_Select, Lead_Filter, { BulkOperation_Logs_Leads: Lead_Result[] }>;
  CampaignActivityId_Logs: WebExpand<BulkOperationLog_Expand, CampaignActivity_Select, CampaignActivity_Filter, { CampaignActivityId_Logs: CampaignActivity_Result }>;
  CampaignActivity_Logs_Accounts: WebExpand<BulkOperationLog_Expand, Account_Select, Account_Filter, { CampaignActivity_Logs_Accounts: Account_Result[] }>;
  CampaignActivity_Logs_Contacts: WebExpand<BulkOperationLog_Expand, Contact_Select, Contact_Filter, { CampaignActivity_Logs_Contacts: Contact_Result[] }>;
  CampaignActivity_Logs_Leads: WebExpand<BulkOperationLog_Expand, Lead_Select, Lead_Filter, { CampaignActivity_Logs_Leads: Lead_Result[] }>;
  bulkoperationid: WebExpand<BulkOperationLog_Expand, BulkOperation_Select, BulkOperation_Filter, { bulkoperationid: BulkOperation_Result }>;
  bulkoperationid_activitypointer: WebExpand<BulkOperationLog_Expand, ActivityPointer_Select, ActivityPointer_Filter, { bulkoperationid_activitypointer: ActivityPointer_Result }>;
  bulkoperationlog_MailboxTrackingFolders: WebExpand<BulkOperationLog_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { bulkoperationlog_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  bulkoperationlog_PrincipalObjectAttributeAccesses: WebExpand<BulkOperationLog_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { bulkoperationlog_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  bulkoperationlog_SyncErrors: WebExpand<BulkOperationLog_Expand, SyncError_Select, SyncError_Filter, { bulkoperationlog_SyncErrors: SyncError_Result[] }>;
  createdobjectid_account: WebExpand<BulkOperationLog_Expand, Account_Select, Account_Filter, { createdobjectid_account: Account_Result }>;
  createdobjectid_activitypointer: WebExpand<BulkOperationLog_Expand, ActivityPointer_Select, ActivityPointer_Filter, { createdobjectid_activitypointer: ActivityPointer_Result }>;
  createdobjectid_contact: WebExpand<BulkOperationLog_Expand, Contact_Select, Contact_Filter, { createdobjectid_contact: Contact_Result }>;
  createdobjectid_lead: WebExpand<BulkOperationLog_Expand, Lead_Select, Lead_Filter, { createdobjectid_lead: Lead_Result }>;
  createdobjectid_opportunity: WebExpand<BulkOperationLog_Expand, Opportunity_Select, Opportunity_Filter, { createdobjectid_opportunity: Opportunity_Result }>;
  owningteam: WebExpand<BulkOperationLog_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<BulkOperationLog_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  regardingobjectid_account: WebExpand<BulkOperationLog_Expand, Account_Select, Account_Filter, { regardingobjectid_account: Account_Result }>;
  regardingobjectid_contact: WebExpand<BulkOperationLog_Expand, Contact_Select, Contact_Filter, { regardingobjectid_contact: Contact_Result }>;
  regardingobjectid_lead: WebExpand<BulkOperationLog_Expand, Lead_Select, Lead_Filter, { regardingobjectid_lead: Lead_Result }>;
  userentityinstancedata_bulkoperationlog: WebExpand<BulkOperationLog_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_bulkoperationlog: UserEntityInstanceData_Result[] }>;
}
interface BulkOperationLog_FormattedResult {
  bulkoperationid_formatted?: string;
  campaignactivityid_formatted?: string;
  createdobjectid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  regardingobjectid_formatted?: string;
}
interface BulkOperationLog_Result extends BulkOperationLog_Base, BulkOperationLog_Relationships {
  "@odata.etag": string;
  bulkoperationid_guid: string | null;
  campaignactivityid_guid: string | null;
  createdobjectid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface BulkOperationLog_RelatedOne {
  CampaignActivityId_Logs: WebMappingRetrieve<CampaignActivity_Select,CampaignActivity_Expand,CampaignActivity_Filter,CampaignActivity_Fixed,CampaignActivity_Result,CampaignActivity_FormattedResult>;
  bulkoperationid: WebMappingRetrieve<BulkOperation_Select,BulkOperation_Expand,BulkOperation_Filter,BulkOperation_Fixed,BulkOperation_Result,BulkOperation_FormattedResult>;
  bulkoperationid_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  createdobjectid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  createdobjectid_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  createdobjectid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  createdobjectid_lead: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  createdobjectid_opportunity: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  regardingobjectid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  regardingobjectid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  regardingobjectid_lead: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
}
interface BulkOperationLog_RelatedMany {
  BulkOperationLog_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  BulkOperationLog_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  BulkOperation_Logs_Accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  BulkOperation_Logs_Contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  BulkOperation_Logs_Leads: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  CampaignActivity_Logs_Accounts: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  CampaignActivity_Logs_Contacts: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  CampaignActivity_Logs_Leads: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  bulkoperationlog_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  bulkoperationlog_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  bulkoperationlog_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_bulkoperationlog: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bulkoperationlogs: WebMappingRetrieve<BulkOperationLog_Select,BulkOperationLog_Expand,BulkOperationLog_Filter,BulkOperationLog_Fixed,BulkOperationLog_Result,BulkOperationLog_FormattedResult>;
}
interface WebEntitiesRelated {
  bulkoperationlogs: WebMappingRelated<BulkOperationLog_RelatedOne,BulkOperationLog_RelatedMany>;
}
interface WebEntitiesCUDA {
  bulkoperationlogs: WebMappingCUDA<BulkOperationLog_Create,BulkOperationLog_Update,BulkOperationLog_Select>;
}
