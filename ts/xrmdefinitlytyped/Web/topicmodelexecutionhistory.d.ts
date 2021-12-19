interface TopicModelExecutionHistory_Base extends WebEntity {
  azuresyncerrormessage?: string | null;
  createdon?: Date | null;
  fetchxmllist?: string | null;
  importsequencenumber?: number | null;
  istestexecution?: boolean | null;
  maxtopics?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  numberoftopicsfound?: number | null;
  overriddencreatedon?: Date | null;
  recordcorrelationid?: string | null;
  recordsprocessed?: number | null;
  starttime?: Date | null;
  status?: topicmodelexecutionhistory_status | null;
  statusreason?: topicmodelexecutionhistory_statusreason | null;
  timezoneruleversionnumber?: number | null;
  topicmodelexecutionhistoryid?: string | null;
  totaltime?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface TopicModelExecutionHistory_Relationships {
  topicmodelexecutionhistory_AsyncOperations?: AsyncOperation_Result[] | null;
  topicmodelexecutionhistory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  topicmodelexecutionhistory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  topicmodelexecutionhistory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  topicmodelexecutionhistory_SyncErrors?: SyncError_Result[] | null;
  topicmodelexecutionhistory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  topicmodelexecutionhistory_topichistory?: TopicHistory_Result[] | null;
}
interface TopicModelExecutionHistory extends TopicModelExecutionHistory_Base, TopicModelExecutionHistory_Relationships {
}
interface TopicModelExecutionHistory_Create extends TopicModelExecutionHistory {
  topicmodelconfigurationid_bind$topicmodelconfigurations?: string | null;
  topicmodelid_bind$topicmodels?: string | null;
}
interface TopicModelExecutionHistory_Update extends TopicModelExecutionHistory {
}
interface TopicModelExecutionHistory_Select {
  azuresyncerrormessage: WebAttribute<TopicModelExecutionHistory_Select, { azuresyncerrormessage: string | null }, {  }>;
  createdby_guid: WebAttribute<TopicModelExecutionHistory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<TopicModelExecutionHistory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<TopicModelExecutionHistory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  fetchxmllist: WebAttribute<TopicModelExecutionHistory_Select, { fetchxmllist: string | null }, {  }>;
  importsequencenumber: WebAttribute<TopicModelExecutionHistory_Select, { importsequencenumber: number | null }, {  }>;
  istestexecution: WebAttribute<TopicModelExecutionHistory_Select, { istestexecution: boolean | null }, {  }>;
  maxtopics: WebAttribute<TopicModelExecutionHistory_Select, { maxtopics: number | null }, {  }>;
  modifiedby_guid: WebAttribute<TopicModelExecutionHistory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<TopicModelExecutionHistory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<TopicModelExecutionHistory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<TopicModelExecutionHistory_Select, { name: string | null }, {  }>;
  numberoftopicsfound: WebAttribute<TopicModelExecutionHistory_Select, { numberoftopicsfound: number | null }, {  }>;
  organizationid_guid: WebAttribute<TopicModelExecutionHistory_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<TopicModelExecutionHistory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  recordcorrelationid: WebAttribute<TopicModelExecutionHistory_Select, { recordcorrelationid: string | null }, {  }>;
  recordsprocessed: WebAttribute<TopicModelExecutionHistory_Select, { recordsprocessed: number | null }, {  }>;
  starttime: WebAttribute<TopicModelExecutionHistory_Select, { starttime: Date | null }, { starttime_formatted?: string }>;
  status: WebAttribute<TopicModelExecutionHistory_Select, { status: topicmodelexecutionhistory_status | null }, { status_formatted?: string }>;
  statusreason: WebAttribute<TopicModelExecutionHistory_Select, { statusreason: topicmodelexecutionhistory_statusreason | null }, { statusreason_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<TopicModelExecutionHistory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  topicmodelconfigurationid_guid: WebAttribute<TopicModelExecutionHistory_Select, { topicmodelconfigurationid_guid: string | null }, { topicmodelconfigurationid_formatted?: string }>;
  topicmodelexecutionhistoryid: WebAttribute<TopicModelExecutionHistory_Select, { topicmodelexecutionhistoryid: string | null }, {  }>;
  topicmodelid_guid: WebAttribute<TopicModelExecutionHistory_Select, { topicmodelid_guid: string | null }, { topicmodelid_formatted?: string }>;
  totaltime: WebAttribute<TopicModelExecutionHistory_Select, { totaltime: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<TopicModelExecutionHistory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<TopicModelExecutionHistory_Select, { versionnumber: number | null }, {  }>;
}
interface TopicModelExecutionHistory_Filter {
  azuresyncerrormessage: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  fetchxmllist: string;
  importsequencenumber: number;
  istestexecution: boolean;
  maxtopics: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  numberoftopicsfound: number;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  recordcorrelationid: string;
  recordsprocessed: number;
  starttime: Date;
  status: topicmodelexecutionhistory_status;
  statusreason: topicmodelexecutionhistory_statusreason;
  timezoneruleversionnumber: number;
  topicmodelconfigurationid_guid: XQW.Guid;
  topicmodelexecutionhistoryid: XQW.Guid;
  topicmodelid_guid: XQW.Guid;
  totaltime: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface TopicModelExecutionHistory_Expand {
  createdby: WebExpand<TopicModelExecutionHistory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<TopicModelExecutionHistory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<TopicModelExecutionHistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<TopicModelExecutionHistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<TopicModelExecutionHistory_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  topicmodelconfigurationid: WebExpand<TopicModelExecutionHistory_Expand, TopicModelConfiguration_Select, TopicModelConfiguration_Filter, { topicmodelconfigurationid: TopicModelConfiguration_Result }>;
  topicmodelexecutionhistory_AsyncOperations: WebExpand<TopicModelExecutionHistory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { topicmodelexecutionhistory_AsyncOperations: AsyncOperation_Result[] }>;
  topicmodelexecutionhistory_BulkDeleteFailures: WebExpand<TopicModelExecutionHistory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { topicmodelexecutionhistory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  topicmodelexecutionhistory_MailboxTrackingFolders: WebExpand<TopicModelExecutionHistory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { topicmodelexecutionhistory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  topicmodelexecutionhistory_PrincipalObjectAttributeAccesses: WebExpand<TopicModelExecutionHistory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { topicmodelexecutionhistory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  topicmodelexecutionhistory_SyncErrors: WebExpand<TopicModelExecutionHistory_Expand, SyncError_Select, SyncError_Filter, { topicmodelexecutionhistory_SyncErrors: SyncError_Result[] }>;
  topicmodelexecutionhistory_UserEntityInstanceDatas: WebExpand<TopicModelExecutionHistory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { topicmodelexecutionhistory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  topicmodelexecutionhistory_topichistory: WebExpand<TopicModelExecutionHistory_Expand, TopicHistory_Select, TopicHistory_Filter, { topicmodelexecutionhistory_topichistory: TopicHistory_Result[] }>;
  topicmodelid: WebExpand<TopicModelExecutionHistory_Expand, TopicModel_Select, TopicModel_Filter, { topicmodelid: TopicModel_Result }>;
}
interface TopicModelExecutionHistory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  starttime_formatted?: string;
  status_formatted?: string;
  statusreason_formatted?: string;
  topicmodelconfigurationid_formatted?: string;
  topicmodelid_formatted?: string;
}
interface TopicModelExecutionHistory_Result extends TopicModelExecutionHistory_Base, TopicModelExecutionHistory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  topicmodelconfigurationid_guid: string | null;
  topicmodelid_guid: string | null;
}
interface TopicModelExecutionHistory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  topicmodelconfigurationid: WebMappingRetrieve<TopicModelConfiguration_Select,TopicModelConfiguration_Expand,TopicModelConfiguration_Filter,TopicModelConfiguration_Fixed,TopicModelConfiguration_Result,TopicModelConfiguration_FormattedResult>;
  topicmodelid: WebMappingRetrieve<TopicModel_Select,TopicModel_Expand,TopicModel_Filter,TopicModel_Fixed,TopicModel_Result,TopicModel_FormattedResult>;
}
interface TopicModelExecutionHistory_RelatedMany {
  topicmodelexecutionhistory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  topicmodelexecutionhistory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  topicmodelexecutionhistory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  topicmodelexecutionhistory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  topicmodelexecutionhistory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  topicmodelexecutionhistory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  topicmodelexecutionhistory_topichistory: WebMappingRetrieve<TopicHistory_Select,TopicHistory_Expand,TopicHistory_Filter,TopicHistory_Fixed,TopicHistory_Result,TopicHistory_FormattedResult>;
}
interface WebEntitiesRetrieve {
  topicmodelexecutionhistories: WebMappingRetrieve<TopicModelExecutionHistory_Select,TopicModelExecutionHistory_Expand,TopicModelExecutionHistory_Filter,TopicModelExecutionHistory_Fixed,TopicModelExecutionHistory_Result,TopicModelExecutionHistory_FormattedResult>;
}
interface WebEntitiesRelated {
  topicmodelexecutionhistories: WebMappingRelated<TopicModelExecutionHistory_RelatedOne,TopicModelExecutionHistory_RelatedMany>;
}
interface WebEntitiesCUDA {
  topicmodelexecutionhistories: WebMappingCUDA<TopicModelExecutionHistory_Create,TopicModelExecutionHistory_Update,TopicModelExecutionHistory_Select>;
}
