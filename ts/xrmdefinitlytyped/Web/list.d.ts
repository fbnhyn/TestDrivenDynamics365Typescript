interface List_Base extends WebEntity {
  cost?: number | null;
  cost_base?: number | null;
  createdfromcode?: list_createdfromcode | null;
  createdon?: Date | null;
  description?: string | null;
  donotsendonoptout?: boolean | null;
  exchangerate?: number | null;
  ignoreinactivelistmembers?: boolean | null;
  importsequencenumber?: number | null;
  lastusedon?: Date | null;
  listid?: string | null;
  listname?: string | null;
  lockstatus?: boolean | null;
  membercount?: number | null;
  membertype?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  processedmembercount?: number | null;
  processfetchxml?: string | null;
  processid?: string | null;
  purpose?: string | null;
  query?: string | null;
  source?: string | null;
  stageid?: string | null;
  statecode?: list_statecode | null;
  statuscode?: list_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  traversedpath?: string | null;
  type?: boolean | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface List_Relationships {
  List_Annotation?: Annotation_Result[] | null;
  List_AsyncOperations?: AsyncOperation_Result[] | null;
  List_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  List_BulkOperations?: BulkOperation_Result[] | null;
  List_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  List_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  List_ProcessSessions?: ProcessSession_Result[] | null;
  List_SyncErrors?: SyncError_Result[] | null;
  campaignactivitylist_association?: CampaignActivity_Result[] | null;
  campaignlist_association?: Campaign_Result[] | null;
  list_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  list_connections1?: Connection_Result[] | null;
  list_connections2?: Connection_Result[] | null;
  list_listoperation_ListId?: listoperation_Result[] | null;
  list_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  listaccount_association?: Account_Result[] | null;
  listcontact_association?: Contact_Result[] | null;
  listlead_association?: Lead_Result[] | null;
  stageid_processstage?: ProcessStage_Result | null;
  userentityinstancedata_list?: UserEntityInstanceData_Result[] | null;
}
interface List extends List_Base, List_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_processstage_bind$processstages?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface List_Create extends List {
}
interface List_Update extends List {
}
interface List_Select {
  cost: WebAttribute<List_Select, { cost: number | null; transactioncurrencyid_guid: string | null }, { cost_formatted?: string; transactioncurrencyid_formatted?: string }>;
  cost_base: WebAttribute<List_Select, { cost_base: number | null; transactioncurrencyid_guid: string | null }, { cost_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  createdby_guid: WebAttribute<List_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdfromcode: WebAttribute<List_Select, { createdfromcode: list_createdfromcode | null }, { createdfromcode_formatted?: string }>;
  createdon: WebAttribute<List_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<List_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<List_Select, { description: string | null }, {  }>;
  donotsendonoptout: WebAttribute<List_Select, { donotsendonoptout: boolean | null }, {  }>;
  exchangerate: WebAttribute<List_Select, { exchangerate: number | null }, {  }>;
  ignoreinactivelistmembers: WebAttribute<List_Select, { ignoreinactivelistmembers: boolean | null }, {  }>;
  importsequencenumber: WebAttribute<List_Select, { importsequencenumber: number | null }, {  }>;
  lastusedon: WebAttribute<List_Select, { lastusedon: Date | null }, { lastusedon_formatted?: string }>;
  listid: WebAttribute<List_Select, { listid: string | null }, {  }>;
  listname: WebAttribute<List_Select, { listname: string | null }, {  }>;
  lockstatus: WebAttribute<List_Select, { lockstatus: boolean | null }, {  }>;
  membercount: WebAttribute<List_Select, { membercount: number | null }, {  }>;
  membertype: WebAttribute<List_Select, { membertype: number | null }, {  }>;
  modifiedby_guid: WebAttribute<List_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<List_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<List_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<List_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<List_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<List_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<List_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<List_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processedmembercount: WebAttribute<List_Select, { processedmembercount: number | null }, {  }>;
  processfetchxml: WebAttribute<List_Select, { processfetchxml: string | null }, {  }>;
  processid: WebAttribute<List_Select, { processid: string | null }, {  }>;
  purpose: WebAttribute<List_Select, { purpose: string | null }, {  }>;
  query: WebAttribute<List_Select, { query: string | null }, {  }>;
  source: WebAttribute<List_Select, { source: string | null }, {  }>;
  stageid: WebAttribute<List_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<List_Select, { statecode: list_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<List_Select, { statuscode: list_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<List_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<List_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  traversedpath: WebAttribute<List_Select, { traversedpath: string | null }, {  }>;
  type: WebAttribute<List_Select, { type: boolean | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<List_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<List_Select, { versionnumber: number | null }, {  }>;
}
interface List_Filter {
  cost: number;
  cost_base: number;
  createdby_guid: XQW.Guid;
  createdfromcode: list_createdfromcode;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  donotsendonoptout: boolean;
  exchangerate: any;
  ignoreinactivelistmembers: boolean;
  importsequencenumber: number;
  lastusedon: Date;
  listid: XQW.Guid;
  listname: string;
  lockstatus: boolean;
  membercount: number;
  membertype: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processedmembercount: number;
  processfetchxml: string;
  processid: XQW.Guid;
  purpose: string;
  query: string;
  source: string;
  stageid: XQW.Guid;
  statecode: list_statecode;
  statuscode: list_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  traversedpath: string;
  type: boolean;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface List_Expand {
  List_Annotation: WebExpand<List_Expand, Annotation_Select, Annotation_Filter, { List_Annotation: Annotation_Result[] }>;
  List_AsyncOperations: WebExpand<List_Expand, AsyncOperation_Select, AsyncOperation_Filter, { List_AsyncOperations: AsyncOperation_Result[] }>;
  List_BulkDeleteFailures: WebExpand<List_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { List_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  List_BulkOperations: WebExpand<List_Expand, BulkOperation_Select, BulkOperation_Filter, { List_BulkOperations: BulkOperation_Result[] }>;
  List_DuplicateBaseRecord: WebExpand<List_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { List_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  List_DuplicateMatchingRecord: WebExpand<List_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { List_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  List_ProcessSessions: WebExpand<List_Expand, ProcessSession_Select, ProcessSession_Filter, { List_ProcessSessions: ProcessSession_Result[] }>;
  List_SyncErrors: WebExpand<List_Expand, SyncError_Select, SyncError_Filter, { List_SyncErrors: SyncError_Result[] }>;
  campaignactivitylist_association: WebExpand<List_Expand, CampaignActivity_Select, CampaignActivity_Filter, { campaignactivitylist_association: CampaignActivity_Result[] }>;
  campaignlist_association: WebExpand<List_Expand, Campaign_Select, Campaign_Filter, { campaignlist_association: Campaign_Result[] }>;
  createdby: WebExpand<List_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<List_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  list_MailboxTrackingFolders: WebExpand<List_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { list_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  list_connections1: WebExpand<List_Expand, Connection_Select, Connection_Filter, { list_connections1: Connection_Result[] }>;
  list_connections2: WebExpand<List_Expand, Connection_Select, Connection_Filter, { list_connections2: Connection_Result[] }>;
  list_listoperation_ListId: WebExpand<List_Expand, listoperation_Select, listoperation_Filter, { list_listoperation_ListId: listoperation_Result[] }>;
  list_principalobjectattributeaccess: WebExpand<List_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { list_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  listaccount_association: WebExpand<List_Expand, Account_Select, Account_Filter, { listaccount_association: Account_Result[] }>;
  listcontact_association: WebExpand<List_Expand, Contact_Select, Contact_Filter, { listcontact_association: Contact_Result[] }>;
  listlead_association: WebExpand<List_Expand, Lead_Select, Lead_Filter, { listlead_association: Lead_Result[] }>;
  modifiedby: WebExpand<List_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<List_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<List_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<List_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<List_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<List_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid_processstage: WebExpand<List_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid_processstage: ProcessStage_Result }>;
  transactioncurrencyid: WebExpand<List_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_list: WebExpand<List_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_list: UserEntityInstanceData_Result[] }>;
}
interface List_FormattedResult {
  cost_base_formatted?: string;
  cost_formatted?: string;
  createdby_formatted?: string;
  createdfromcode_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  lastusedon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface List_Result extends List_Base, List_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface List_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid_processstage: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface List_RelatedMany {
  List_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  List_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  List_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  List_BulkOperations: WebMappingRetrieve<BulkOperation_Select,BulkOperation_Expand,BulkOperation_Filter,BulkOperation_Fixed,BulkOperation_Result,BulkOperation_FormattedResult>;
  List_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  List_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  List_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  List_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  campaignactivitylist_association: WebMappingRetrieve<CampaignActivity_Select,CampaignActivity_Expand,CampaignActivity_Filter,CampaignActivity_Fixed,CampaignActivity_Result,CampaignActivity_FormattedResult>;
  campaignlist_association: WebMappingRetrieve<Campaign_Select,Campaign_Expand,Campaign_Filter,Campaign_Fixed,Campaign_Result,Campaign_FormattedResult>;
  list_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  list_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  list_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  list_listoperation_ListId: WebMappingRetrieve<listoperation_Select,listoperation_Expand,listoperation_Filter,listoperation_Fixed,listoperation_Result,listoperation_FormattedResult>;
  list_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  listaccount_association: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  listcontact_association: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  listlead_association: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  userentityinstancedata_list: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  lists: WebMappingRetrieve<List_Select,List_Expand,List_Filter,List_Fixed,List_Result,List_FormattedResult>;
}
interface WebEntitiesRelated {
  lists: WebMappingRelated<List_RelatedOne,List_RelatedMany>;
}
interface WebEntitiesCUDA {
  lists: WebMappingCUDA<List_Create,List_Update,List_Select>;
}
