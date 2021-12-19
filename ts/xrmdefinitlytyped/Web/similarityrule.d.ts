interface SimilarityRule_Base extends WebEntity {
  activerulefetchxml?: string | null;
  baseentityname?: string | null;
  baseentitytypecode?: similarityrule_baseentitytypecode | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  excludeinactiverecords?: boolean | null;
  fetchxmllist?: string | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  matchingentityname?: string | null;
  matchingentitytypecode?: similarityrule_matchingentitytypecode | null;
  maxkeywords?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  ngramsize?: number | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  ruleconditionxml?: string | null;
  similarityruleid?: string | null;
  similarityruleidunique?: string | null;
  solutionid?: string | null;
  statecode?: similarityrule_statecode | null;
  statuscode?: similarityrule_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface SimilarityRule_Relationships {
  similarityrule_AsyncOperations?: AsyncOperation_Result[] | null;
  similarityrule_textanalyticsentitymapping?: TextAnalyticsEntityMapping_Result[] | null;
}
interface SimilarityRule extends SimilarityRule_Base, SimilarityRule_Relationships {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface SimilarityRule_Create extends SimilarityRule {
}
interface SimilarityRule_Update extends SimilarityRule {
}
interface SimilarityRule_Select {
  activerulefetchxml: WebAttribute<SimilarityRule_Select, { activerulefetchxml: string | null }, {  }>;
  baseentityname: WebAttribute<SimilarityRule_Select, { baseentityname: string | null }, {  }>;
  baseentitytypecode: WebAttribute<SimilarityRule_Select, { baseentitytypecode: similarityrule_baseentitytypecode | null }, { baseentitytypecode_formatted?: string }>;
  componentstate: WebAttribute<SimilarityRule_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdon: WebAttribute<SimilarityRule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SimilarityRule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<SimilarityRule_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<SimilarityRule_Select, { exchangerate: number | null }, {  }>;
  excludeinactiverecords: WebAttribute<SimilarityRule_Select, { excludeinactiverecords: boolean | null }, {  }>;
  fetchxmllist: WebAttribute<SimilarityRule_Select, { fetchxmllist: string | null }, {  }>;
  importsequencenumber: WebAttribute<SimilarityRule_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<SimilarityRule_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<SimilarityRule_Select, { ismanaged: boolean | null }, {  }>;
  matchingentityname: WebAttribute<SimilarityRule_Select, { matchingentityname: string | null }, {  }>;
  matchingentitytypecode: WebAttribute<SimilarityRule_Select, { matchingentitytypecode: similarityrule_matchingentitytypecode | null }, { matchingentitytypecode_formatted?: string }>;
  maxkeywords: WebAttribute<SimilarityRule_Select, { maxkeywords: number | null }, {  }>;
  modifiedon: WebAttribute<SimilarityRule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SimilarityRule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SimilarityRule_Select, { name: string | null }, {  }>;
  ngramsize: WebAttribute<SimilarityRule_Select, { ngramsize: number | null }, {  }>;
  organizationid_guid: WebAttribute<SimilarityRule_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<SimilarityRule_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<SimilarityRule_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ruleconditionxml: WebAttribute<SimilarityRule_Select, { ruleconditionxml: string | null }, {  }>;
  similarityruleid: WebAttribute<SimilarityRule_Select, { similarityruleid: string | null }, {  }>;
  similarityruleidunique: WebAttribute<SimilarityRule_Select, { similarityruleidunique: string | null }, {  }>;
  solutionid: WebAttribute<SimilarityRule_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<SimilarityRule_Select, { statecode: similarityrule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<SimilarityRule_Select, { statuscode: similarityrule_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<SimilarityRule_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<SimilarityRule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<SimilarityRule_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<SimilarityRule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<SimilarityRule_Select, { versionnumber: number | null }, {  }>;
}
interface SimilarityRule_Filter {
  activerulefetchxml: string;
  baseentityname: string;
  baseentitytypecode: similarityrule_baseentitytypecode;
  componentstate: componentstate;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  excludeinactiverecords: boolean;
  fetchxmllist: string;
  importsequencenumber: number;
  introducedversion: string;
  ismanaged: boolean;
  matchingentityname: string;
  matchingentitytypecode: similarityrule_matchingentitytypecode;
  maxkeywords: number;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  ngramsize: number;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  ruleconditionxml: string;
  similarityruleid: XQW.Guid;
  similarityruleidunique: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: similarityrule_statecode;
  statuscode: similarityrule_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface SimilarityRule_Expand {
  createdonbehalfby: WebExpand<SimilarityRule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SimilarityRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SimilarityRule_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  similarityrule_AsyncOperations: WebExpand<SimilarityRule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { similarityrule_AsyncOperations: AsyncOperation_Result[] }>;
  similarityrule_textanalyticsentitymapping: WebExpand<SimilarityRule_Expand, TextAnalyticsEntityMapping_Select, TextAnalyticsEntityMapping_Filter, { similarityrule_textanalyticsentitymapping: TextAnalyticsEntityMapping_Result[] }>;
  transactioncurrencyid: WebExpand<SimilarityRule_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface SimilarityRule_FormattedResult {
  baseentitytypecode_formatted?: string;
  componentstate_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  matchingentitytypecode_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface SimilarityRule_Result extends SimilarityRule_Base, SimilarityRule_Relationships {
  "@odata.etag": string;
  createdonbehalfby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface SimilarityRule_RelatedOne {
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface SimilarityRule_RelatedMany {
  similarityrule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  similarityrule_textanalyticsentitymapping: WebMappingRetrieve<TextAnalyticsEntityMapping_Select,TextAnalyticsEntityMapping_Expand,TextAnalyticsEntityMapping_Filter,TextAnalyticsEntityMapping_Fixed,TextAnalyticsEntityMapping_Result,TextAnalyticsEntityMapping_FormattedResult>;
}
interface WebEntitiesRetrieve {
  similarityrules: WebMappingRetrieve<SimilarityRule_Select,SimilarityRule_Expand,SimilarityRule_Filter,SimilarityRule_Fixed,SimilarityRule_Result,SimilarityRule_FormattedResult>;
}
interface WebEntitiesRelated {
  similarityrules: WebMappingRelated<SimilarityRule_RelatedOne,SimilarityRule_RelatedMany>;
}
interface WebEntitiesCUDA {
  similarityrules: WebMappingCUDA<SimilarityRule_Create,SimilarityRule_Update,SimilarityRule_Select>;
}
