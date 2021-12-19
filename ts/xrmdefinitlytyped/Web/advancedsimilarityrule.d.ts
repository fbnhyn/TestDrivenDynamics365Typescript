interface AdvancedSimilarityRule_Base extends WebEntity {
  advancedsimilarityruleid?: string | null;
  advancedsimilarityruleidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  entity?: string | null;
  exactmatchlist?: string | null;
  fetchxmllist?: string | null;
  filterresultbystatus?: advancedsimilarityrule_filterresultbystatus | null;
  filterresultbystatusdisplayname?: string | null;
  isazuremlrequired?: boolean | null;
  ismanaged?: boolean | null;
  maxnumberkeyphrases?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  ngramsize?: number | null;
  noisekeyphraseslist?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  sourceentity?: string | null;
  statecode?: advancedsimilarityrule_statecode | null;
  statuscode?: advancedsimilarityrule_statuscode | null;
  supportingsolutionid?: string | null;
}
interface AdvancedSimilarityRule_Relationships {
  advancedsimilarityrule_textanalyticsentitymapping?: TextAnalyticsEntityMapping_Result[] | null;
}
interface AdvancedSimilarityRule extends AdvancedSimilarityRule_Base, AdvancedSimilarityRule_Relationships {
  azureserviceconnectionid_bind$azureserviceconnections?: string | null;
}
interface AdvancedSimilarityRule_Create extends AdvancedSimilarityRule {
}
interface AdvancedSimilarityRule_Update extends AdvancedSimilarityRule {
}
interface AdvancedSimilarityRule_Select {
  advancedsimilarityruleid: WebAttribute<AdvancedSimilarityRule_Select, { advancedsimilarityruleid: string | null }, {  }>;
  advancedsimilarityruleidunique: WebAttribute<AdvancedSimilarityRule_Select, { advancedsimilarityruleidunique: string | null }, {  }>;
  azureserviceconnectionid_guid: WebAttribute<AdvancedSimilarityRule_Select, { azureserviceconnectionid_guid: string | null }, { azureserviceconnectionid_formatted?: string }>;
  componentstate: WebAttribute<AdvancedSimilarityRule_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<AdvancedSimilarityRule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AdvancedSimilarityRule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AdvancedSimilarityRule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<AdvancedSimilarityRule_Select, { description: string | null }, {  }>;
  entity: WebAttribute<AdvancedSimilarityRule_Select, { entity: string | null }, {  }>;
  exactmatchlist: WebAttribute<AdvancedSimilarityRule_Select, { exactmatchlist: string | null }, {  }>;
  fetchxmllist: WebAttribute<AdvancedSimilarityRule_Select, { fetchxmllist: string | null }, {  }>;
  filterresultbystatus: WebAttribute<AdvancedSimilarityRule_Select, { filterresultbystatus: advancedsimilarityrule_filterresultbystatus | null }, { filterresultbystatus_formatted?: string }>;
  filterresultbystatusdisplayname: WebAttribute<AdvancedSimilarityRule_Select, { filterresultbystatusdisplayname: string | null }, {  }>;
  isazuremlrequired: WebAttribute<AdvancedSimilarityRule_Select, { isazuremlrequired: boolean | null }, {  }>;
  ismanaged: WebAttribute<AdvancedSimilarityRule_Select, { ismanaged: boolean | null }, {  }>;
  maxnumberkeyphrases: WebAttribute<AdvancedSimilarityRule_Select, { maxnumberkeyphrases: number | null }, {  }>;
  modifiedby_guid: WebAttribute<AdvancedSimilarityRule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AdvancedSimilarityRule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AdvancedSimilarityRule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<AdvancedSimilarityRule_Select, { name: string | null }, {  }>;
  ngramsize: WebAttribute<AdvancedSimilarityRule_Select, { ngramsize: number | null }, {  }>;
  noisekeyphraseslist: WebAttribute<AdvancedSimilarityRule_Select, { noisekeyphraseslist: string | null }, {  }>;
  organizationid_guid: WebAttribute<AdvancedSimilarityRule_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<AdvancedSimilarityRule_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<AdvancedSimilarityRule_Select, { solutionid: string | null }, {  }>;
  sourceentity: WebAttribute<AdvancedSimilarityRule_Select, { sourceentity: string | null }, {  }>;
  statecode: WebAttribute<AdvancedSimilarityRule_Select, { statecode: advancedsimilarityrule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<AdvancedSimilarityRule_Select, { statuscode: advancedsimilarityrule_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<AdvancedSimilarityRule_Select, { supportingsolutionid: string | null }, {  }>;
}
interface AdvancedSimilarityRule_Filter {
  advancedsimilarityruleid: XQW.Guid;
  advancedsimilarityruleidunique: XQW.Guid;
  azureserviceconnectionid_guid: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  entity: string;
  exactmatchlist: string;
  fetchxmllist: string;
  filterresultbystatus: advancedsimilarityrule_filterresultbystatus;
  filterresultbystatusdisplayname: string;
  isazuremlrequired: boolean;
  ismanaged: boolean;
  maxnumberkeyphrases: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  ngramsize: number;
  noisekeyphraseslist: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  sourceentity: string;
  statecode: advancedsimilarityrule_statecode;
  statuscode: advancedsimilarityrule_statuscode;
  supportingsolutionid: XQW.Guid;
}
interface AdvancedSimilarityRule_Expand {
  advancedsimilarityrule_textanalyticsentitymapping: WebExpand<AdvancedSimilarityRule_Expand, TextAnalyticsEntityMapping_Select, TextAnalyticsEntityMapping_Filter, { advancedsimilarityrule_textanalyticsentitymapping: TextAnalyticsEntityMapping_Result[] }>;
  azureserviceconnectionid: WebExpand<AdvancedSimilarityRule_Expand, AzureServiceConnection_Select, AzureServiceConnection_Filter, { azureserviceconnectionid: AzureServiceConnection_Result }>;
  createdby: WebExpand<AdvancedSimilarityRule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<AdvancedSimilarityRule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<AdvancedSimilarityRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<AdvancedSimilarityRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<AdvancedSimilarityRule_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface AdvancedSimilarityRule_FormattedResult {
  azureserviceconnectionid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  filterresultbystatus_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface AdvancedSimilarityRule_Result extends AdvancedSimilarityRule_Base, AdvancedSimilarityRule_Relationships {
  "@odata.etag": string;
  azureserviceconnectionid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface AdvancedSimilarityRule_RelatedOne {
  azureserviceconnectionid: WebMappingRetrieve<AzureServiceConnection_Select,AzureServiceConnection_Expand,AzureServiceConnection_Filter,AzureServiceConnection_Fixed,AzureServiceConnection_Result,AzureServiceConnection_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface AdvancedSimilarityRule_RelatedMany {
  advancedsimilarityrule_textanalyticsentitymapping: WebMappingRetrieve<TextAnalyticsEntityMapping_Select,TextAnalyticsEntityMapping_Expand,TextAnalyticsEntityMapping_Filter,TextAnalyticsEntityMapping_Fixed,TextAnalyticsEntityMapping_Result,TextAnalyticsEntityMapping_FormattedResult>;
}
interface WebEntitiesRetrieve {
  advancedsimilarityrules: WebMappingRetrieve<AdvancedSimilarityRule_Select,AdvancedSimilarityRule_Expand,AdvancedSimilarityRule_Filter,AdvancedSimilarityRule_Fixed,AdvancedSimilarityRule_Result,AdvancedSimilarityRule_FormattedResult>;
}
interface WebEntitiesRelated {
  advancedsimilarityrules: WebMappingRelated<AdvancedSimilarityRule_RelatedOne,AdvancedSimilarityRule_RelatedMany>;
}
interface WebEntitiesCUDA {
  advancedsimilarityrules: WebMappingCUDA<AdvancedSimilarityRule_Create,AdvancedSimilarityRule_Update,AdvancedSimilarityRule_Select>;
}
