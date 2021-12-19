interface AzureServiceConnection_Base extends WebEntity {
  accountkey?: string | null;
  azureserviceconnectionid?: string | null;
  connectiontype?: azureserviceconnection_connectiontype | null;
  createdon?: Date | null;
  description?: string | null;
  lastconnectionstatuscode?: azureserviceconnection_lastconnectionstatuscode | null;
  lastconnectiontime?: Date | null;
  modifiedon?: Date | null;
  name?: string | null;
  serviceuri?: string | null;
  statecode?: azureserviceconnection_statecode | null;
  statuscode?: azureserviceconnection_statuscode | null;
}
interface AzureServiceConnection_Relationships {
  azureserviceconnection_advancedsimilarityrule?: AdvancedSimilarityRule_Result[] | null;
  azureserviceconnection_knowledgesearchmodel?: KnowledgeSearchModel_Result[] | null;
  azureserviceconnection_topicmodel?: TopicModel_Result[] | null;
}
interface AzureServiceConnection extends AzureServiceConnection_Base, AzureServiceConnection_Relationships {
}
interface AzureServiceConnection_Create extends AzureServiceConnection {
}
interface AzureServiceConnection_Update extends AzureServiceConnection {
}
interface AzureServiceConnection_Select {
  accountkey: WebAttribute<AzureServiceConnection_Select, { accountkey: string | null }, {  }>;
  azureserviceconnectionid: WebAttribute<AzureServiceConnection_Select, { azureserviceconnectionid: string | null }, {  }>;
  connectiontype: WebAttribute<AzureServiceConnection_Select, { connectiontype: azureserviceconnection_connectiontype | null }, { connectiontype_formatted?: string }>;
  createdby_guid: WebAttribute<AzureServiceConnection_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AzureServiceConnection_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AzureServiceConnection_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<AzureServiceConnection_Select, { description: string | null }, {  }>;
  lastconnectionstatuscode: WebAttribute<AzureServiceConnection_Select, { lastconnectionstatuscode: azureserviceconnection_lastconnectionstatuscode | null }, { lastconnectionstatuscode_formatted?: string }>;
  lastconnectiontime: WebAttribute<AzureServiceConnection_Select, { lastconnectiontime: Date | null }, { lastconnectiontime_formatted?: string }>;
  modifiedby_guid: WebAttribute<AzureServiceConnection_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AzureServiceConnection_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AzureServiceConnection_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<AzureServiceConnection_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<AzureServiceConnection_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  serviceuri: WebAttribute<AzureServiceConnection_Select, { serviceuri: string | null }, {  }>;
  statecode: WebAttribute<AzureServiceConnection_Select, { statecode: azureserviceconnection_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<AzureServiceConnection_Select, { statuscode: azureserviceconnection_statuscode | null }, { statuscode_formatted?: string }>;
}
interface AzureServiceConnection_Filter {
  accountkey: string;
  azureserviceconnectionid: XQW.Guid;
  connectiontype: azureserviceconnection_connectiontype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  lastconnectionstatuscode: azureserviceconnection_lastconnectionstatuscode;
  lastconnectiontime: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  serviceuri: string;
  statecode: azureserviceconnection_statecode;
  statuscode: azureserviceconnection_statuscode;
}
interface AzureServiceConnection_Expand {
  azureserviceconnection_advancedsimilarityrule: WebExpand<AzureServiceConnection_Expand, AdvancedSimilarityRule_Select, AdvancedSimilarityRule_Filter, { azureserviceconnection_advancedsimilarityrule: AdvancedSimilarityRule_Result[] }>;
  azureserviceconnection_knowledgesearchmodel: WebExpand<AzureServiceConnection_Expand, KnowledgeSearchModel_Select, KnowledgeSearchModel_Filter, { azureserviceconnection_knowledgesearchmodel: KnowledgeSearchModel_Result[] }>;
  azureserviceconnection_topicmodel: WebExpand<AzureServiceConnection_Expand, TopicModel_Select, TopicModel_Filter, { azureserviceconnection_topicmodel: TopicModel_Result[] }>;
  createdby: WebExpand<AzureServiceConnection_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<AzureServiceConnection_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<AzureServiceConnection_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<AzureServiceConnection_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<AzureServiceConnection_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface AzureServiceConnection_FormattedResult {
  connectiontype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  lastconnectionstatuscode_formatted?: string;
  lastconnectiontime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface AzureServiceConnection_Result extends AzureServiceConnection_Base, AzureServiceConnection_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface AzureServiceConnection_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface AzureServiceConnection_RelatedMany {
  azureserviceconnection_advancedsimilarityrule: WebMappingRetrieve<AdvancedSimilarityRule_Select,AdvancedSimilarityRule_Expand,AdvancedSimilarityRule_Filter,AdvancedSimilarityRule_Fixed,AdvancedSimilarityRule_Result,AdvancedSimilarityRule_FormattedResult>;
  azureserviceconnection_knowledgesearchmodel: WebMappingRetrieve<KnowledgeSearchModel_Select,KnowledgeSearchModel_Expand,KnowledgeSearchModel_Filter,KnowledgeSearchModel_Fixed,KnowledgeSearchModel_Result,KnowledgeSearchModel_FormattedResult>;
  azureserviceconnection_topicmodel: WebMappingRetrieve<TopicModel_Select,TopicModel_Expand,TopicModel_Filter,TopicModel_Fixed,TopicModel_Result,TopicModel_FormattedResult>;
}
interface WebEntitiesRetrieve {
  azureserviceconnections: WebMappingRetrieve<AzureServiceConnection_Select,AzureServiceConnection_Expand,AzureServiceConnection_Filter,AzureServiceConnection_Fixed,AzureServiceConnection_Result,AzureServiceConnection_FormattedResult>;
}
interface WebEntitiesRelated {
  azureserviceconnections: WebMappingRelated<AzureServiceConnection_RelatedOne,AzureServiceConnection_RelatedMany>;
}
interface WebEntitiesCUDA {
  azureserviceconnections: WebMappingCUDA<AzureServiceConnection_Create,AzureServiceConnection_Update,AzureServiceConnection_Select>;
}
