interface RecommendedDocument_Base extends WebEntity {
  absoluteurl?: string | null;
  associatedrecordname?: string | null;
  author?: string | null;
  contenttype?: string | null;
  createdon?: Date | null;
  editurl?: string | null;
  exchangerate?: number | null;
  externaldocumentid?: string | null;
  externalmodifiedby?: string | null;
  filesize?: number | null;
  filetype?: string | null;
  fullname?: string | null;
  iconclassname?: string | null;
  location?: string | null;
  modifiedon?: Date | null;
  readurl?: string | null;
  recommendeddocumentid?: string | null;
  source?: string | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  utcconversiontimezonecode?: number | null;
  version?: string | null;
  versionnumber?: number | null;
}
interface RecommendedDocument_Relationships {
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  transactioncurrencyidname?: TransactionCurrency_Result | null;
}
interface RecommendedDocument extends RecommendedDocument_Base, RecommendedDocument_Relationships {
  transactioncurrencyidname_bind$transactioncurrencies?: string | null;
}
interface RecommendedDocument_Create extends RecommendedDocument {
}
interface RecommendedDocument_Update extends RecommendedDocument {
}
interface RecommendedDocument_Select {
  absoluteurl: WebAttribute<RecommendedDocument_Select, { absoluteurl: string | null }, {  }>;
  associatedrecordname: WebAttribute<RecommendedDocument_Select, { associatedrecordname: string | null }, {  }>;
  author: WebAttribute<RecommendedDocument_Select, { author: string | null }, {  }>;
  contenttype: WebAttribute<RecommendedDocument_Select, { contenttype: string | null }, {  }>;
  createdby_guid: WebAttribute<RecommendedDocument_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<RecommendedDocument_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<RecommendedDocument_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  editurl: WebAttribute<RecommendedDocument_Select, { editurl: string | null }, {  }>;
  exchangerate: WebAttribute<RecommendedDocument_Select, { exchangerate: number | null }, {  }>;
  externaldocumentid: WebAttribute<RecommendedDocument_Select, { externaldocumentid: string | null }, {  }>;
  externalmodifiedby: WebAttribute<RecommendedDocument_Select, { externalmodifiedby: string | null }, {  }>;
  filesize: WebAttribute<RecommendedDocument_Select, { filesize: number | null }, {  }>;
  filetype: WebAttribute<RecommendedDocument_Select, { filetype: string | null }, {  }>;
  fullname: WebAttribute<RecommendedDocument_Select, { fullname: string | null }, {  }>;
  iconclassname: WebAttribute<RecommendedDocument_Select, { iconclassname: string | null }, {  }>;
  location: WebAttribute<RecommendedDocument_Select, { location: string | null }, {  }>;
  modifiedby_guid: WebAttribute<RecommendedDocument_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<RecommendedDocument_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<RecommendedDocument_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<RecommendedDocument_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  readurl: WebAttribute<RecommendedDocument_Select, { readurl: string | null }, {  }>;
  recommendeddocumentid: WebAttribute<RecommendedDocument_Select, { recommendeddocumentid: string | null }, {  }>;
  regardingobjectid_guid: WebAttribute<RecommendedDocument_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  source: WebAttribute<RecommendedDocument_Select, { source: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<RecommendedDocument_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<RecommendedDocument_Select, { title: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<RecommendedDocument_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<RecommendedDocument_Select, { utcconversiontimezonecode: number | null }, {  }>;
  version: WebAttribute<RecommendedDocument_Select, { version: string | null }, {  }>;
  versionnumber: WebAttribute<RecommendedDocument_Select, { versionnumber: number | null }, {  }>;
}
interface RecommendedDocument_Filter {
  absoluteurl: string;
  associatedrecordname: string;
  author: string;
  contenttype: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  editurl: string;
  exchangerate: any;
  externaldocumentid: string;
  externalmodifiedby: string;
  filesize: number;
  filetype: string;
  fullname: string;
  iconclassname: string;
  location: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  readurl: string;
  recommendeddocumentid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  source: string;
  timezoneruleversionnumber: number;
  title: string;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  version: string;
  versionnumber: number;
}
interface RecommendedDocument_Expand {
  createdbyname: WebExpand<RecommendedDocument_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<RecommendedDocument_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<RecommendedDocument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<RecommendedDocument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  organizationid: WebExpand<RecommendedDocument_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrencyidname: WebExpand<RecommendedDocument_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyidname: TransactionCurrency_Result }>;
}
interface RecommendedDocument_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  regardingobjectid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface RecommendedDocument_Result extends RecommendedDocument_Base, RecommendedDocument_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  regardingobjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface RecommendedDocument_RelatedOne {
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyidname: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface RecommendedDocument_RelatedMany {
}
interface WebEntitiesRetrieve {
  recommendeddocuments: WebMappingRetrieve<RecommendedDocument_Select,RecommendedDocument_Expand,RecommendedDocument_Filter,RecommendedDocument_Fixed,RecommendedDocument_Result,RecommendedDocument_FormattedResult>;
}
interface WebEntitiesRelated {
  recommendeddocuments: WebMappingRelated<RecommendedDocument_RelatedOne,RecommendedDocument_RelatedMany>;
}
interface WebEntitiesCUDA {
  recommendeddocuments: WebMappingCUDA<RecommendedDocument_Create,RecommendedDocument_Update,RecommendedDocument_Select>;
}
