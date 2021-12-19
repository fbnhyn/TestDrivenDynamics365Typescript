interface CustomerOpportunityRole_Base extends WebEntity {
  createdon?: Date | null;
  customeropportunityroleid?: string | null;
  description?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  opportunitystatecode?: number | null;
  opportunitystatuscode?: number | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  uniquedscid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface CustomerOpportunityRole_Relationships {
  CustomerOpportunityRole_AsyncOperations?: AsyncOperation_Result[] | null;
  CustomerOpportunityRole_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  CustomerOpportunityRole_ProcessSessions?: ProcessSession_Result[] | null;
  CustomerOpportunityRole_SyncErrors?: SyncError_Result[] | null;
  customerid_account?: Account_Result | null;
  customerid_contact?: Contact_Result | null;
  customeropportunityrole_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  customeropportunityrole_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_customeropportunityrole?: UserEntityInstanceData_Result[] | null;
}
interface CustomerOpportunityRole extends CustomerOpportunityRole_Base, CustomerOpportunityRole_Relationships {
  customerid_account_bind$accounts?: string | null;
  customerid_contact_bind$contacts?: string | null;
  opportunityid_bind$opportunities?: string | null;
  opportunityroleid_bind$relationshiproles?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface CustomerOpportunityRole_Create extends CustomerOpportunityRole {
}
interface CustomerOpportunityRole_Update extends CustomerOpportunityRole {
}
interface CustomerOpportunityRole_Select {
  createdby_guid: WebAttribute<CustomerOpportunityRole_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CustomerOpportunityRole_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CustomerOpportunityRole_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customerid_guid: WebAttribute<CustomerOpportunityRole_Select, { customerid_guid: string | null }, { customerid_formatted?: string }>;
  customeropportunityroleid: WebAttribute<CustomerOpportunityRole_Select, { customeropportunityroleid: string | null }, {  }>;
  description: WebAttribute<CustomerOpportunityRole_Select, { description: string | null }, {  }>;
  importsequencenumber: WebAttribute<CustomerOpportunityRole_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<CustomerOpportunityRole_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CustomerOpportunityRole_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CustomerOpportunityRole_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  opportunityid_guid: WebAttribute<CustomerOpportunityRole_Select, { opportunityid_guid: string | null }, { opportunityid_formatted?: string }>;
  opportunityroleid_guid: WebAttribute<CustomerOpportunityRole_Select, { opportunityroleid_guid: string | null }, { opportunityroleid_formatted?: string }>;
  opportunitystatecode: WebAttribute<CustomerOpportunityRole_Select, { opportunitystatecode: number | null }, {  }>;
  opportunitystatuscode: WebAttribute<CustomerOpportunityRole_Select, { opportunitystatuscode: number | null }, {  }>;
  overriddencreatedon: WebAttribute<CustomerOpportunityRole_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<CustomerOpportunityRole_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<CustomerOpportunityRole_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<CustomerOpportunityRole_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<CustomerOpportunityRole_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<CustomerOpportunityRole_Select, { timezoneruleversionnumber: number | null }, {  }>;
  uniquedscid: WebAttribute<CustomerOpportunityRole_Select, { uniquedscid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CustomerOpportunityRole_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<CustomerOpportunityRole_Select, { versionnumber: number | null }, {  }>;
}
interface CustomerOpportunityRole_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customerid_guid: XQW.Guid;
  customeropportunityroleid: XQW.Guid;
  description: string;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  opportunityid_guid: XQW.Guid;
  opportunityroleid_guid: XQW.Guid;
  opportunitystatecode: number;
  opportunitystatuscode: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  uniquedscid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface CustomerOpportunityRole_Expand {
  CustomerOpportunityRole_AsyncOperations: WebExpand<CustomerOpportunityRole_Expand, AsyncOperation_Select, AsyncOperation_Filter, { CustomerOpportunityRole_AsyncOperations: AsyncOperation_Result[] }>;
  CustomerOpportunityRole_BulkDeleteFailures: WebExpand<CustomerOpportunityRole_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { CustomerOpportunityRole_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  CustomerOpportunityRole_ProcessSessions: WebExpand<CustomerOpportunityRole_Expand, ProcessSession_Select, ProcessSession_Filter, { CustomerOpportunityRole_ProcessSessions: ProcessSession_Result[] }>;
  CustomerOpportunityRole_SyncErrors: WebExpand<CustomerOpportunityRole_Expand, SyncError_Select, SyncError_Filter, { CustomerOpportunityRole_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<CustomerOpportunityRole_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CustomerOpportunityRole_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customerid_account: WebExpand<CustomerOpportunityRole_Expand, Account_Select, Account_Filter, { customerid_account: Account_Result }>;
  customerid_contact: WebExpand<CustomerOpportunityRole_Expand, Contact_Select, Contact_Filter, { customerid_contact: Contact_Result }>;
  customeropportunityrole_MailboxTrackingFolders: WebExpand<CustomerOpportunityRole_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { customeropportunityrole_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  customeropportunityrole_PrincipalObjectAttributeAccesses: WebExpand<CustomerOpportunityRole_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { customeropportunityrole_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  modifiedby: WebExpand<CustomerOpportunityRole_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CustomerOpportunityRole_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  opportunityid: WebExpand<CustomerOpportunityRole_Expand, Opportunity_Select, Opportunity_Filter, { opportunityid: Opportunity_Result }>;
  opportunityroleid: WebExpand<CustomerOpportunityRole_Expand, RelationshipRole_Select, RelationshipRole_Filter, { opportunityroleid: RelationshipRole_Result }>;
  ownerid: WebExpand<CustomerOpportunityRole_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<CustomerOpportunityRole_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<CustomerOpportunityRole_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<CustomerOpportunityRole_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  userentityinstancedata_customeropportunityrole: WebExpand<CustomerOpportunityRole_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_customeropportunityrole: UserEntityInstanceData_Result[] }>;
}
interface CustomerOpportunityRole_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  customerid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  opportunityid_formatted?: string;
  opportunityroleid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
}
interface CustomerOpportunityRole_Result extends CustomerOpportunityRole_Base, CustomerOpportunityRole_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  customerid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  opportunityid_guid: string | null;
  opportunityroleid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface CustomerOpportunityRole_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  customerid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  customerid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  opportunityid: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  opportunityroleid: WebMappingRetrieve<RelationshipRole_Select,RelationshipRole_Expand,RelationshipRole_Filter,RelationshipRole_Fixed,RelationshipRole_Result,RelationshipRole_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface CustomerOpportunityRole_RelatedMany {
  CustomerOpportunityRole_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  CustomerOpportunityRole_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  CustomerOpportunityRole_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  CustomerOpportunityRole_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  customeropportunityrole_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  customeropportunityrole_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_customeropportunityrole: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  customeropportunityroles: WebMappingRetrieve<CustomerOpportunityRole_Select,CustomerOpportunityRole_Expand,CustomerOpportunityRole_Filter,CustomerOpportunityRole_Fixed,CustomerOpportunityRole_Result,CustomerOpportunityRole_FormattedResult>;
}
interface WebEntitiesRelated {
  customeropportunityroles: WebMappingRelated<CustomerOpportunityRole_RelatedOne,CustomerOpportunityRole_RelatedMany>;
}
interface WebEntitiesCUDA {
  customeropportunityroles: WebMappingCUDA<CustomerOpportunityRole_Create,CustomerOpportunityRole_Update,CustomerOpportunityRole_Select>;
}
