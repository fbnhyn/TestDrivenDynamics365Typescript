interface SuggestionCardTemplate_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  structuredlayout?: string | null;
  suggestioncardtemplateid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
}
interface SuggestionCardTemplate_Relationships {
  transactioncurrency_suggestioncardtemplate?: TransactionCurrency_Result | null;
}
interface SuggestionCardTemplate extends SuggestionCardTemplate_Base, SuggestionCardTemplate_Relationships {
  transactioncurrency_suggestioncardtemplate_bind$transactioncurrencies?: string | null;
}
interface SuggestionCardTemplate_Create extends SuggestionCardTemplate {
}
interface SuggestionCardTemplate_Update extends SuggestionCardTemplate {
}
interface SuggestionCardTemplate_Select {
  createdby_guid: WebAttribute<SuggestionCardTemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SuggestionCardTemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SuggestionCardTemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<SuggestionCardTemplate_Select, { exchangerate: number | null }, {  }>;
  modifiedby_guid: WebAttribute<SuggestionCardTemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SuggestionCardTemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SuggestionCardTemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SuggestionCardTemplate_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<SuggestionCardTemplate_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  structuredlayout: WebAttribute<SuggestionCardTemplate_Select, { structuredlayout: string | null }, {  }>;
  suggestioncardtemplateid: WebAttribute<SuggestionCardTemplate_Select, { suggestioncardtemplateid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<SuggestionCardTemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<SuggestionCardTemplate_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<SuggestionCardTemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface SuggestionCardTemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  structuredlayout: string;
  suggestioncardtemplateid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
}
interface SuggestionCardTemplate_Expand {
  createdby: WebExpand<SuggestionCardTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SuggestionCardTemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SuggestionCardTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SuggestionCardTemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SuggestionCardTemplate_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrency_suggestioncardtemplate: WebExpand<SuggestionCardTemplate_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrency_suggestioncardtemplate: TransactionCurrency_Result }>;
}
interface SuggestionCardTemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface SuggestionCardTemplate_Result extends SuggestionCardTemplate_Base, SuggestionCardTemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface SuggestionCardTemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrency_suggestioncardtemplate: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface SuggestionCardTemplate_RelatedMany {
}
interface WebEntitiesRetrieve {
  suggestioncardtemplates: WebMappingRetrieve<SuggestionCardTemplate_Select,SuggestionCardTemplate_Expand,SuggestionCardTemplate_Filter,SuggestionCardTemplate_Fixed,SuggestionCardTemplate_Result,SuggestionCardTemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  suggestioncardtemplates: WebMappingRelated<SuggestionCardTemplate_RelatedOne,SuggestionCardTemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  suggestioncardtemplates: WebMappingCUDA<SuggestionCardTemplate_Create,SuggestionCardTemplate_Update,SuggestionCardTemplate_Select>;
}
