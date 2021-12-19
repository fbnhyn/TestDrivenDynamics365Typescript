interface TopicHistory_Base extends WebEntity {
  importsequencenumber?: number | null;
  keyphrase?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  topichistoryid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  weight?: number | null;
}
interface TopicHistory_Relationships {
  topichistory_AsyncOperations?: AsyncOperation_Result[] | null;
  topichistory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  topichistory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  topichistory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  topichistory_SyncErrors?: SyncError_Result[] | null;
  topichistory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface TopicHistory extends TopicHistory_Base, TopicHistory_Relationships {
}
interface TopicHistory_Create extends TopicHistory {
  topicmodelexecutionhistoryid_bind$topicmodelexecutionhistories?: string | null;
}
interface TopicHistory_Update extends TopicHistory {
}
interface TopicHistory_Select {
  importsequencenumber: WebAttribute<TopicHistory_Select, { importsequencenumber: number | null }, {  }>;
  keyphrase: WebAttribute<TopicHistory_Select, { keyphrase: string | null }, {  }>;
  name: WebAttribute<TopicHistory_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<TopicHistory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<TopicHistory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  topichistoryid: WebAttribute<TopicHistory_Select, { topichistoryid: string | null }, {  }>;
  topicmodelexecutionhistoryid_guid: WebAttribute<TopicHistory_Select, { topicmodelexecutionhistoryid_guid: string | null }, { topicmodelexecutionhistoryid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<TopicHistory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<TopicHistory_Select, { versionnumber: number | null }, {  }>;
  weight: WebAttribute<TopicHistory_Select, { weight: number | null }, {  }>;
}
interface TopicHistory_Filter {
  importsequencenumber: number;
  keyphrase: string;
  name: string;
  overriddencreatedon: Date;
  timezoneruleversionnumber: number;
  topichistoryid: XQW.Guid;
  topicmodelexecutionhistoryid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
  weight: number;
}
interface TopicHistory_Expand {
  topichistory_AsyncOperations: WebExpand<TopicHistory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { topichistory_AsyncOperations: AsyncOperation_Result[] }>;
  topichistory_BulkDeleteFailures: WebExpand<TopicHistory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { topichistory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  topichistory_MailboxTrackingFolders: WebExpand<TopicHistory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { topichistory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  topichistory_PrincipalObjectAttributeAccesses: WebExpand<TopicHistory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { topichistory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  topichistory_SyncErrors: WebExpand<TopicHistory_Expand, SyncError_Select, SyncError_Filter, { topichistory_SyncErrors: SyncError_Result[] }>;
  topichistory_UserEntityInstanceDatas: WebExpand<TopicHistory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { topichistory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  topicmodelexecutionhistoryid: WebExpand<TopicHistory_Expand, TopicModelExecutionHistory_Select, TopicModelExecutionHistory_Filter, { topicmodelexecutionhistoryid: TopicModelExecutionHistory_Result }>;
}
interface TopicHistory_FormattedResult {
  overriddencreatedon_formatted?: string;
  topicmodelexecutionhistoryid_formatted?: string;
}
interface TopicHistory_Result extends TopicHistory_Base, TopicHistory_Relationships {
  "@odata.etag": string;
  topicmodelexecutionhistoryid_guid: string | null;
}
interface TopicHistory_RelatedOne {
  topicmodelexecutionhistoryid: WebMappingRetrieve<TopicModelExecutionHistory_Select,TopicModelExecutionHistory_Expand,TopicModelExecutionHistory_Filter,TopicModelExecutionHistory_Fixed,TopicModelExecutionHistory_Result,TopicModelExecutionHistory_FormattedResult>;
}
interface TopicHistory_RelatedMany {
  topichistory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  topichistory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  topichistory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  topichistory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  topichistory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  topichistory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  topichistories: WebMappingRetrieve<TopicHistory_Select,TopicHistory_Expand,TopicHistory_Filter,TopicHistory_Fixed,TopicHistory_Result,TopicHistory_FormattedResult>;
}
interface WebEntitiesRelated {
  topichistories: WebMappingRelated<TopicHistory_RelatedOne,TopicHistory_RelatedMany>;
}
interface WebEntitiesCUDA {
  topichistories: WebMappingCUDA<TopicHistory_Create,TopicHistory_Update,TopicHistory_Select>;
}
