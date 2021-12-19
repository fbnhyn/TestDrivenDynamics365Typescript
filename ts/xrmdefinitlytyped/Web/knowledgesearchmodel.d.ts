interface KnowledgeSearchModel_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  entity?: string | null;
  fetchxmllist?: string | null;
  ismanaged?: boolean | null;
  knowledgesearchmodelid?: string | null;
  knowledgesearchmodelidunique?: string | null;
  maxkeywords?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  ngramsize?: number | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  sourceentity?: string | null;
  statecode?: knowledgesearchmodel_statecode | null;
  statuscode?: knowledgesearchmodel_statuscode | null;
  supportingsolutionid?: string | null;
}
interface KnowledgeSearchModel_Relationships {
  knowledgesearchmodel_textanalyticsentitymapping?: TextAnalyticsEntityMapping_Result[] | null;
}
interface KnowledgeSearchModel extends KnowledgeSearchModel_Base, KnowledgeSearchModel_Relationships {
  azureserviceconnectionid_bind$azureserviceconnections?: string | null;
}
interface KnowledgeSearchModel_Create extends KnowledgeSearchModel {
}
interface KnowledgeSearchModel_Update extends KnowledgeSearchModel {
}
interface KnowledgeSearchModel_Select {
  azureserviceconnectionid_guid: WebAttribute<KnowledgeSearchModel_Select, { azureserviceconnectionid_guid: string | null }, { azureserviceconnectionid_formatted?: string }>;
  componentstate: WebAttribute<KnowledgeSearchModel_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<KnowledgeSearchModel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<KnowledgeSearchModel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<KnowledgeSearchModel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<KnowledgeSearchModel_Select, { description: string | null }, {  }>;
  entity: WebAttribute<KnowledgeSearchModel_Select, { entity: string | null }, {  }>;
  fetchxmllist: WebAttribute<KnowledgeSearchModel_Select, { fetchxmllist: string | null }, {  }>;
  ismanaged: WebAttribute<KnowledgeSearchModel_Select, { ismanaged: boolean | null }, {  }>;
  knowledgesearchmodelid: WebAttribute<KnowledgeSearchModel_Select, { knowledgesearchmodelid: string | null }, {  }>;
  knowledgesearchmodelidunique: WebAttribute<KnowledgeSearchModel_Select, { knowledgesearchmodelidunique: string | null }, {  }>;
  maxkeywords: WebAttribute<KnowledgeSearchModel_Select, { maxkeywords: number | null }, {  }>;
  modifiedby_guid: WebAttribute<KnowledgeSearchModel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<KnowledgeSearchModel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<KnowledgeSearchModel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<KnowledgeSearchModel_Select, { name: string | null }, {  }>;
  ngramsize: WebAttribute<KnowledgeSearchModel_Select, { ngramsize: number | null }, {  }>;
  organizationid_guid: WebAttribute<KnowledgeSearchModel_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<KnowledgeSearchModel_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<KnowledgeSearchModel_Select, { solutionid: string | null }, {  }>;
  sourceentity: WebAttribute<KnowledgeSearchModel_Select, { sourceentity: string | null }, {  }>;
  statecode: WebAttribute<KnowledgeSearchModel_Select, { statecode: knowledgesearchmodel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<KnowledgeSearchModel_Select, { statuscode: knowledgesearchmodel_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<KnowledgeSearchModel_Select, { supportingsolutionid: string | null }, {  }>;
}
interface KnowledgeSearchModel_Filter {
  azureserviceconnectionid_guid: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  entity: string;
  fetchxmllist: string;
  ismanaged: boolean;
  knowledgesearchmodelid: XQW.Guid;
  knowledgesearchmodelidunique: XQW.Guid;
  maxkeywords: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  ngramsize: number;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  sourceentity: string;
  statecode: knowledgesearchmodel_statecode;
  statuscode: knowledgesearchmodel_statuscode;
  supportingsolutionid: XQW.Guid;
}
interface KnowledgeSearchModel_Expand {
  azureserviceconnectionid: WebExpand<KnowledgeSearchModel_Expand, AzureServiceConnection_Select, AzureServiceConnection_Filter, { azureserviceconnectionid: AzureServiceConnection_Result }>;
  createdby: WebExpand<KnowledgeSearchModel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<KnowledgeSearchModel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  knowledgesearchmodel_textanalyticsentitymapping: WebExpand<KnowledgeSearchModel_Expand, TextAnalyticsEntityMapping_Select, TextAnalyticsEntityMapping_Filter, { knowledgesearchmodel_textanalyticsentitymapping: TextAnalyticsEntityMapping_Result[] }>;
  modifiedby: WebExpand<KnowledgeSearchModel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<KnowledgeSearchModel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<KnowledgeSearchModel_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface KnowledgeSearchModel_FormattedResult {
  azureserviceconnectionid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface KnowledgeSearchModel_Result extends KnowledgeSearchModel_Base, KnowledgeSearchModel_Relationships {
  "@odata.etag": string;
  azureserviceconnectionid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface KnowledgeSearchModel_RelatedOne {
  azureserviceconnectionid: WebMappingRetrieve<AzureServiceConnection_Select,AzureServiceConnection_Expand,AzureServiceConnection_Filter,AzureServiceConnection_Fixed,AzureServiceConnection_Result,AzureServiceConnection_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface KnowledgeSearchModel_RelatedMany {
  knowledgesearchmodel_textanalyticsentitymapping: WebMappingRetrieve<TextAnalyticsEntityMapping_Select,TextAnalyticsEntityMapping_Expand,TextAnalyticsEntityMapping_Filter,TextAnalyticsEntityMapping_Fixed,TextAnalyticsEntityMapping_Result,TextAnalyticsEntityMapping_FormattedResult>;
}
interface WebEntitiesRetrieve {
  knowledgesearchmodels: WebMappingRetrieve<KnowledgeSearchModel_Select,KnowledgeSearchModel_Expand,KnowledgeSearchModel_Filter,KnowledgeSearchModel_Fixed,KnowledgeSearchModel_Result,KnowledgeSearchModel_FormattedResult>;
}
interface WebEntitiesRelated {
  knowledgesearchmodels: WebMappingRelated<KnowledgeSearchModel_RelatedOne,KnowledgeSearchModel_RelatedMany>;
}
interface WebEntitiesCUDA {
  knowledgesearchmodels: WebMappingCUDA<KnowledgeSearchModel_Create,KnowledgeSearchModel_Update,KnowledgeSearchModel_Select>;
}
