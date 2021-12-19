interface Topic_Base extends WebEntity {
  importsequencenumber?: number | null;
  keyphrase?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  score?: number | null;
  timezoneruleversionnumber?: number | null;
  topicid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Topic_Relationships {
  topic_AsyncOperations?: AsyncOperation_Result[] | null;
  topic_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  topic_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  topic_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  topic_SyncErrors?: SyncError_Result[] | null;
  topic_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface Topic extends Topic_Base, Topic_Relationships {
}
interface Topic_Create extends Topic {
  incidentid_bind$incidents?: string | null;
}
interface Topic_Update extends Topic {
}
interface Topic_Select {
  importsequencenumber: WebAttribute<Topic_Select, { importsequencenumber: number | null }, {  }>;
  incidentid_guid: WebAttribute<Topic_Select, { incidentid_guid: string | null }, { incidentid_formatted?: string }>;
  keyphrase: WebAttribute<Topic_Select, { keyphrase: string | null }, {  }>;
  name: WebAttribute<Topic_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<Topic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  score: WebAttribute<Topic_Select, { score: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Topic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  topicid: WebAttribute<Topic_Select, { topicid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Topic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Topic_Select, { versionnumber: number | null }, {  }>;
}
interface Topic_Filter {
  importsequencenumber: number;
  incidentid_guid: XQW.Guid;
  keyphrase: string;
  name: string;
  overriddencreatedon: Date;
  score: number;
  timezoneruleversionnumber: number;
  topicid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Topic_Expand {
  incidentid: WebExpand<Topic_Expand, Incident_Select, Incident_Filter, { incidentid: Incident_Result }>;
  topic_AsyncOperations: WebExpand<Topic_Expand, AsyncOperation_Select, AsyncOperation_Filter, { topic_AsyncOperations: AsyncOperation_Result[] }>;
  topic_BulkDeleteFailures: WebExpand<Topic_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { topic_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  topic_MailboxTrackingFolders: WebExpand<Topic_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { topic_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  topic_PrincipalObjectAttributeAccesses: WebExpand<Topic_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { topic_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  topic_SyncErrors: WebExpand<Topic_Expand, SyncError_Select, SyncError_Filter, { topic_SyncErrors: SyncError_Result[] }>;
  topic_UserEntityInstanceDatas: WebExpand<Topic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { topic_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface Topic_FormattedResult {
  incidentid_formatted?: string;
  overriddencreatedon_formatted?: string;
}
interface Topic_Result extends Topic_Base, Topic_Relationships {
  "@odata.etag": string;
  incidentid_guid: string | null;
}
interface Topic_RelatedOne {
  incidentid: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
}
interface Topic_RelatedMany {
  topic_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  topic_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  topic_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  topic_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  topic_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  topic_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  topics: WebMappingRetrieve<Topic_Select,Topic_Expand,Topic_Filter,Topic_Fixed,Topic_Result,Topic_FormattedResult>;
}
interface WebEntitiesRelated {
  topics: WebMappingRelated<Topic_RelatedOne,Topic_RelatedMany>;
}
interface WebEntitiesCUDA {
  topics: WebMappingCUDA<Topic_Create,Topic_Update,Topic_Select>;
}
