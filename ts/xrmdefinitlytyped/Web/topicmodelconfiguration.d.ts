interface TopicModelConfiguration_Base extends WebEntity {
  componentstate?: componentstate | null;
  datafilter?: string | null;
  description?: string | null;
  fetchxmllist?: string | null;
  importsequencenumber?: number | null;
  ismanaged?: boolean | null;
  minrelevancescore?: number | null;
  name?: string | null;
  ngramsize?: number | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  sourceentity?: string | null;
  stopwords?: string | null;
  supportingsolutionid?: string | null;
  timefilter?: topicmodelconfiguration_timefilter | null;
  timefilterduration?: number | null;
  timezoneruleversionnumber?: number | null;
  topicmodelconfigurationid?: string | null;
  topicmodelconfigurationidunique?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface TopicModelConfiguration_Relationships {
  topicmodelconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  topicmodelconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  topicmodelconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  topicmodelconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  topicmodelconfiguration_SyncErrors?: SyncError_Result[] | null;
  topicmodelconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  topicmodelconfiguration_textanalyticsentitymapping?: TextAnalyticsEntityMapping_Result[] | null;
  topicmodelconfiguration_topicmodel?: TopicModel_Result[] | null;
  topicmodelconfiguration_topicmodelexecutionhistory?: TopicModelExecutionHistory_Result[] | null;
}
interface TopicModelConfiguration extends TopicModelConfiguration_Base, TopicModelConfiguration_Relationships {
  topicmodelid_bind$topicmodels?: string | null;
}
interface TopicModelConfiguration_Create extends TopicModelConfiguration {
}
interface TopicModelConfiguration_Update extends TopicModelConfiguration {
}
interface TopicModelConfiguration_Select {
  componentstate: WebAttribute<TopicModelConfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  datafilter: WebAttribute<TopicModelConfiguration_Select, { datafilter: string | null }, {  }>;
  description: WebAttribute<TopicModelConfiguration_Select, { description: string | null }, {  }>;
  fetchxmllist: WebAttribute<TopicModelConfiguration_Select, { fetchxmllist: string | null }, {  }>;
  importsequencenumber: WebAttribute<TopicModelConfiguration_Select, { importsequencenumber: number | null }, {  }>;
  ismanaged: WebAttribute<TopicModelConfiguration_Select, { ismanaged: boolean | null }, {  }>;
  minrelevancescore: WebAttribute<TopicModelConfiguration_Select, { minrelevancescore: number | null }, {  }>;
  name: WebAttribute<TopicModelConfiguration_Select, { name: string | null }, {  }>;
  ngramsize: WebAttribute<TopicModelConfiguration_Select, { ngramsize: number | null }, {  }>;
  organizationid_guid: WebAttribute<TopicModelConfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<TopicModelConfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<TopicModelConfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<TopicModelConfiguration_Select, { solutionid: string | null }, {  }>;
  sourceentity: WebAttribute<TopicModelConfiguration_Select, { sourceentity: string | null }, {  }>;
  stopwords: WebAttribute<TopicModelConfiguration_Select, { stopwords: string | null }, {  }>;
  supportingsolutionid: WebAttribute<TopicModelConfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timefilter: WebAttribute<TopicModelConfiguration_Select, { timefilter: topicmodelconfiguration_timefilter | null }, { timefilter_formatted?: string }>;
  timefilterduration: WebAttribute<TopicModelConfiguration_Select, { timefilterduration: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<TopicModelConfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  topicmodelconfigurationid: WebAttribute<TopicModelConfiguration_Select, { topicmodelconfigurationid: string | null }, {  }>;
  topicmodelconfigurationidunique: WebAttribute<TopicModelConfiguration_Select, { topicmodelconfigurationidunique: string | null }, {  }>;
  topicmodelid_guid: WebAttribute<TopicModelConfiguration_Select, { topicmodelid_guid: string | null }, { topicmodelid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<TopicModelConfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<TopicModelConfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface TopicModelConfiguration_Filter {
  componentstate: componentstate;
  datafilter: string;
  description: string;
  fetchxmllist: string;
  importsequencenumber: number;
  ismanaged: boolean;
  minrelevancescore: any;
  name: string;
  ngramsize: number;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  sourceentity: string;
  stopwords: string;
  supportingsolutionid: XQW.Guid;
  timefilter: topicmodelconfiguration_timefilter;
  timefilterduration: number;
  timezoneruleversionnumber: number;
  topicmodelconfigurationid: XQW.Guid;
  topicmodelconfigurationidunique: XQW.Guid;
  topicmodelid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface TopicModelConfiguration_Expand {
  organizationid: WebExpand<TopicModelConfiguration_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  topicmodelconfiguration_AsyncOperations: WebExpand<TopicModelConfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { topicmodelconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  topicmodelconfiguration_BulkDeleteFailures: WebExpand<TopicModelConfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { topicmodelconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  topicmodelconfiguration_MailboxTrackingFolders: WebExpand<TopicModelConfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { topicmodelconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  topicmodelconfiguration_PrincipalObjectAttributeAccesses: WebExpand<TopicModelConfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { topicmodelconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  topicmodelconfiguration_SyncErrors: WebExpand<TopicModelConfiguration_Expand, SyncError_Select, SyncError_Filter, { topicmodelconfiguration_SyncErrors: SyncError_Result[] }>;
  topicmodelconfiguration_UserEntityInstanceDatas: WebExpand<TopicModelConfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { topicmodelconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  topicmodelconfiguration_textanalyticsentitymapping: WebExpand<TopicModelConfiguration_Expand, TextAnalyticsEntityMapping_Select, TextAnalyticsEntityMapping_Filter, { topicmodelconfiguration_textanalyticsentitymapping: TextAnalyticsEntityMapping_Result[] }>;
  topicmodelconfiguration_topicmodel: WebExpand<TopicModelConfiguration_Expand, TopicModel_Select, TopicModel_Filter, { topicmodelconfiguration_topicmodel: TopicModel_Result[] }>;
  topicmodelconfiguration_topicmodelexecutionhistory: WebExpand<TopicModelConfiguration_Expand, TopicModelExecutionHistory_Select, TopicModelExecutionHistory_Filter, { topicmodelconfiguration_topicmodelexecutionhistory: TopicModelExecutionHistory_Result[] }>;
  topicmodelid: WebExpand<TopicModelConfiguration_Expand, TopicModel_Select, TopicModel_Filter, { topicmodelid: TopicModel_Result }>;
}
interface TopicModelConfiguration_FormattedResult {
  componentstate_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  timefilter_formatted?: string;
  topicmodelid_formatted?: string;
}
interface TopicModelConfiguration_Result extends TopicModelConfiguration_Base, TopicModelConfiguration_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
  topicmodelid_guid: string | null;
}
interface TopicModelConfiguration_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  topicmodelid: WebMappingRetrieve<TopicModel_Select,TopicModel_Expand,TopicModel_Filter,TopicModel_Fixed,TopicModel_Result,TopicModel_FormattedResult>;
}
interface TopicModelConfiguration_RelatedMany {
  topicmodelconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  topicmodelconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  topicmodelconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  topicmodelconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  topicmodelconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  topicmodelconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  topicmodelconfiguration_textanalyticsentitymapping: WebMappingRetrieve<TextAnalyticsEntityMapping_Select,TextAnalyticsEntityMapping_Expand,TextAnalyticsEntityMapping_Filter,TextAnalyticsEntityMapping_Fixed,TextAnalyticsEntityMapping_Result,TextAnalyticsEntityMapping_FormattedResult>;
  topicmodelconfiguration_topicmodel: WebMappingRetrieve<TopicModel_Select,TopicModel_Expand,TopicModel_Filter,TopicModel_Fixed,TopicModel_Result,TopicModel_FormattedResult>;
  topicmodelconfiguration_topicmodelexecutionhistory: WebMappingRetrieve<TopicModelExecutionHistory_Select,TopicModelExecutionHistory_Expand,TopicModelExecutionHistory_Filter,TopicModelExecutionHistory_Fixed,TopicModelExecutionHistory_Result,TopicModelExecutionHistory_FormattedResult>;
}
interface WebEntitiesRetrieve {
  topicmodelconfigurations: WebMappingRetrieve<TopicModelConfiguration_Select,TopicModelConfiguration_Expand,TopicModelConfiguration_Filter,TopicModelConfiguration_Fixed,TopicModelConfiguration_Result,TopicModelConfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  topicmodelconfigurations: WebMappingRelated<TopicModelConfiguration_RelatedOne,TopicModelConfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  topicmodelconfigurations: WebMappingCUDA<TopicModelConfiguration_Create,TopicModelConfiguration_Update,TopicModelConfiguration_Select>;
}
