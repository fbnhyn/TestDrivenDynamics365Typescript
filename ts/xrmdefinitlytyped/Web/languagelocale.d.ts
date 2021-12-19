interface LanguageLocale_Base extends WebEntity {
  code?: string | null;
  language?: string | null;
  languagelocaleid?: string | null;
  localeid?: number | null;
  name?: string | null;
  region?: string | null;
  statecode?: languagelocale_statecode | null;
  statuscode?: languagelocale_statuscode | null;
  versionnumber?: number | null;
}
interface LanguageLocale_Relationships {
  knowledgearticle_languagelocaleid?: KnowledgeArticle_Result[] | null;
}
interface LanguageLocale extends LanguageLocale_Base, LanguageLocale_Relationships {
}
interface LanguageLocale_Create extends LanguageLocale {
}
interface LanguageLocale_Update extends LanguageLocale {
}
interface LanguageLocale_Select {
  code: WebAttribute<LanguageLocale_Select, { code: string | null }, {  }>;
  language: WebAttribute<LanguageLocale_Select, { language: string | null }, {  }>;
  languagelocaleid: WebAttribute<LanguageLocale_Select, { languagelocaleid: string | null }, {  }>;
  localeid: WebAttribute<LanguageLocale_Select, { localeid: number | null }, {  }>;
  name: WebAttribute<LanguageLocale_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<LanguageLocale_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  region: WebAttribute<LanguageLocale_Select, { region: string | null }, {  }>;
  statecode: WebAttribute<LanguageLocale_Select, { statecode: languagelocale_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<LanguageLocale_Select, { statuscode: languagelocale_statuscode | null }, { statuscode_formatted?: string }>;
  versionnumber: WebAttribute<LanguageLocale_Select, { versionnumber: number | null }, {  }>;
}
interface LanguageLocale_Filter {
  code: string;
  language: string;
  languagelocaleid: XQW.Guid;
  localeid: number;
  name: string;
  organizationid_guid: XQW.Guid;
  region: string;
  statecode: languagelocale_statecode;
  statuscode: languagelocale_statuscode;
  versionnumber: number;
}
interface LanguageLocale_Expand {
  knowledgearticle_languagelocaleid: WebExpand<LanguageLocale_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { knowledgearticle_languagelocaleid: KnowledgeArticle_Result[] }>;
  organizationid: WebExpand<LanguageLocale_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface LanguageLocale_FormattedResult {
  organizationid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface LanguageLocale_Result extends LanguageLocale_Base, LanguageLocale_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
}
interface LanguageLocale_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface LanguageLocale_RelatedMany {
  knowledgearticle_languagelocaleid: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
}
interface WebEntitiesRetrieve {
  languagelocale: WebMappingRetrieve<LanguageLocale_Select,LanguageLocale_Expand,LanguageLocale_Filter,LanguageLocale_Fixed,LanguageLocale_Result,LanguageLocale_FormattedResult>;
}
interface WebEntitiesRelated {
  languagelocale: WebMappingRelated<LanguageLocale_RelatedOne,LanguageLocale_RelatedMany>;
}
interface WebEntitiesCUDA {
  languagelocale: WebMappingCUDA<LanguageLocale_Create,LanguageLocale_Update,LanguageLocale_Select>;
}
