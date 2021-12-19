interface TopicModel_Base extends WebEntity {
  avgnumberoftopics?: number | null;
  azureschedulerjobname?: string | null;
  azureschedulerondemandjobname?: string | null;
  azureschedulertestjobname?: string | null;
  buildrecurrence?: string | null;
  createdon?: Date | null;
  description?: string | null;
  endtime?: Date | null;
  importsequencenumber?: number | null;
  maxnumberoftopics?: number | null;
  maxtopics?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  sourceentity?: string | null;
  starttime?: Date | null;
  statecode?: topicmodel_statecode | null;
  statuscode?: topicmodel_statuscode | null;
  timezoneruleversionnumber?: number | null;
  topicmodelid?: string | null;
  topicslastcreatedon?: Date | null;
  totaltopicsfound?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface TopicModel_Relationships {
  topicmodel_AsyncOperations?: AsyncOperation_Result[] | null;
  topicmodel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  topicmodel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  topicmodel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  topicmodel_SyncErrors?: SyncError_Result[] | null;
  topicmodel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  topicmodel_topicmodelconfiguration?: TopicModelConfiguration_Result[] | null;
  topicmodel_topicmodelexecutionhistory?: TopicModelExecutionHistory_Result[] | null;
  topicmodelconfigurationid?: TopicModelConfiguration_Result | null;
}
interface TopicModel extends TopicModel_Base, TopicModel_Relationships {
  azureserviceconnectionid_bind$azureserviceconnections?: string | null;
}
interface TopicModel_Create extends TopicModel {
}
interface TopicModel_Update extends TopicModel {
  topicmodelconfigurationid_bind$topicmodelconfigurations?: string | null;
}
interface TopicModel_Select {
  avgnumberoftopics: WebAttribute<TopicModel_Select, { avgnumberoftopics: number | null }, {  }>;
  azureschedulerjobname: WebAttribute<TopicModel_Select, { azureschedulerjobname: string | null }, {  }>;
  azureschedulerondemandjobname: WebAttribute<TopicModel_Select, { azureschedulerondemandjobname: string | null }, {  }>;
  azureschedulertestjobname: WebAttribute<TopicModel_Select, { azureschedulertestjobname: string | null }, {  }>;
  azureserviceconnectionid_guid: WebAttribute<TopicModel_Select, { azureserviceconnectionid_guid: string | null }, { azureserviceconnectionid_formatted?: string }>;
  buildrecurrence: WebAttribute<TopicModel_Select, { buildrecurrence: string | null }, {  }>;
  configurationused_guid: WebAttribute<TopicModel_Select, { configurationused_guid: string | null }, { configurationused_formatted?: string }>;
  createdby_guid: WebAttribute<TopicModel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<TopicModel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<TopicModel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<TopicModel_Select, { description: string | null }, {  }>;
  endtime: WebAttribute<TopicModel_Select, { endtime: Date | null }, { endtime_formatted?: string }>;
  importsequencenumber: WebAttribute<TopicModel_Select, { importsequencenumber: number | null }, {  }>;
  maxnumberoftopics: WebAttribute<TopicModel_Select, { maxnumberoftopics: number | null }, {  }>;
  maxtopics: WebAttribute<TopicModel_Select, { maxtopics: number | null }, {  }>;
  modifiedby_guid: WebAttribute<TopicModel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<TopicModel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<TopicModel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<TopicModel_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<TopicModel_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<TopicModel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  sourceentity: WebAttribute<TopicModel_Select, { sourceentity: string | null }, {  }>;
  starttime: WebAttribute<TopicModel_Select, { starttime: Date | null }, { starttime_formatted?: string }>;
  statecode: WebAttribute<TopicModel_Select, { statecode: topicmodel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<TopicModel_Select, { statuscode: topicmodel_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<TopicModel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  topicmodelid: WebAttribute<TopicModel_Select, { topicmodelid: string | null }, {  }>;
  topicslastcreatedon: WebAttribute<TopicModel_Select, { topicslastcreatedon: Date | null }, { topicslastcreatedon_formatted?: string }>;
  totaltopicsfound: WebAttribute<TopicModel_Select, { totaltopicsfound: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<TopicModel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<TopicModel_Select, { versionnumber: number | null }, {  }>;
}
interface TopicModel_Filter {
  avgnumberoftopics: number;
  azureschedulerjobname: string;
  azureschedulerondemandjobname: string;
  azureschedulertestjobname: string;
  azureserviceconnectionid_guid: XQW.Guid;
  buildrecurrence: string;
  configurationused_guid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  endtime: Date;
  importsequencenumber: number;
  maxnumberoftopics: number;
  maxtopics: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  sourceentity: string;
  starttime: Date;
  statecode: topicmodel_statecode;
  statuscode: topicmodel_statuscode;
  timezoneruleversionnumber: number;
  topicmodelid: XQW.Guid;
  topicslastcreatedon: Date;
  totaltopicsfound: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface TopicModel_Expand {
  azureserviceconnectionid: WebExpand<TopicModel_Expand, AzureServiceConnection_Select, AzureServiceConnection_Filter, { azureserviceconnectionid: AzureServiceConnection_Result }>;
  createdby: WebExpand<TopicModel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<TopicModel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<TopicModel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<TopicModel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<TopicModel_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  topicmodel_AsyncOperations: WebExpand<TopicModel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { topicmodel_AsyncOperations: AsyncOperation_Result[] }>;
  topicmodel_BulkDeleteFailures: WebExpand<TopicModel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { topicmodel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  topicmodel_MailboxTrackingFolders: WebExpand<TopicModel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { topicmodel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  topicmodel_PrincipalObjectAttributeAccesses: WebExpand<TopicModel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { topicmodel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  topicmodel_SyncErrors: WebExpand<TopicModel_Expand, SyncError_Select, SyncError_Filter, { topicmodel_SyncErrors: SyncError_Result[] }>;
  topicmodel_UserEntityInstanceDatas: WebExpand<TopicModel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { topicmodel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  topicmodel_topicmodelconfiguration: WebExpand<TopicModel_Expand, TopicModelConfiguration_Select, TopicModelConfiguration_Filter, { topicmodel_topicmodelconfiguration: TopicModelConfiguration_Result[] }>;
  topicmodel_topicmodelexecutionhistory: WebExpand<TopicModel_Expand, TopicModelExecutionHistory_Select, TopicModelExecutionHistory_Filter, { topicmodel_topicmodelexecutionhistory: TopicModelExecutionHistory_Result[] }>;
  topicmodelconfigurationid: WebExpand<TopicModel_Expand, TopicModelConfiguration_Select, TopicModelConfiguration_Filter, { topicmodelconfigurationid: TopicModelConfiguration_Result }>;
}
interface TopicModel_FormattedResult {
  azureserviceconnectionid_formatted?: string;
  configurationused_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  endtime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  starttime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  topicslastcreatedon_formatted?: string;
}
interface TopicModel_Result extends TopicModel_Base, TopicModel_Relationships {
  "@odata.etag": string;
  azureserviceconnectionid_guid: string | null;
  configurationused_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface TopicModel_RelatedOne {
  azureserviceconnectionid: WebMappingRetrieve<AzureServiceConnection_Select,AzureServiceConnection_Expand,AzureServiceConnection_Filter,AzureServiceConnection_Fixed,AzureServiceConnection_Result,AzureServiceConnection_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  topicmodelconfigurationid: WebMappingRetrieve<TopicModelConfiguration_Select,TopicModelConfiguration_Expand,TopicModelConfiguration_Filter,TopicModelConfiguration_Fixed,TopicModelConfiguration_Result,TopicModelConfiguration_FormattedResult>;
}
interface TopicModel_RelatedMany {
  topicmodel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  topicmodel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  topicmodel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  topicmodel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  topicmodel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  topicmodel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  topicmodel_topicmodelconfiguration: WebMappingRetrieve<TopicModelConfiguration_Select,TopicModelConfiguration_Expand,TopicModelConfiguration_Filter,TopicModelConfiguration_Fixed,TopicModelConfiguration_Result,TopicModelConfiguration_FormattedResult>;
  topicmodel_topicmodelexecutionhistory: WebMappingRetrieve<TopicModelExecutionHistory_Select,TopicModelExecutionHistory_Expand,TopicModelExecutionHistory_Filter,TopicModelExecutionHistory_Fixed,TopicModelExecutionHistory_Result,TopicModelExecutionHistory_FormattedResult>;
}
interface WebEntitiesRetrieve {
  topicmodels: WebMappingRetrieve<TopicModel_Select,TopicModel_Expand,TopicModel_Filter,TopicModel_Fixed,TopicModel_Result,TopicModel_FormattedResult>;
}
interface WebEntitiesRelated {
  topicmodels: WebMappingRelated<TopicModel_RelatedOne,TopicModel_RelatedMany>;
}
interface WebEntitiesCUDA {
  topicmodels: WebMappingCUDA<TopicModel_Create,TopicModel_Update,TopicModel_Select>;
}
