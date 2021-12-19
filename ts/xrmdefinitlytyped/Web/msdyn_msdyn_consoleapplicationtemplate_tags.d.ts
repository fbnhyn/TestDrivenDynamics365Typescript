interface msdyn_msdyn_consoleapplicationtemplate_tags_Base extends WebEntity {
  msdyn_consoleapplicationtemplateid?: string | null;
  msdyn_msdyn_consoleapplicationtemplate_tagsid?: string | null;
  msdyn_templatetagsid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Relationships {
  msdyn_msdyn_consoleapplicationtemplate_tags?: msdyn_templatetags_Result[] | null;
}
interface msdyn_msdyn_consoleapplicationtemplate_tags extends msdyn_msdyn_consoleapplicationtemplate_tags_Base, msdyn_msdyn_consoleapplicationtemplate_tags_Relationships {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Create extends msdyn_msdyn_consoleapplicationtemplate_tags {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Update extends msdyn_msdyn_consoleapplicationtemplate_tags {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Select {
  msdyn_consoleapplicationtemplateid: WebAttribute<msdyn_msdyn_consoleapplicationtemplate_tags_Select, { msdyn_consoleapplicationtemplateid: string | null }, {  }>;
  msdyn_msdyn_consoleapplicationtemplate_tagsid: WebAttribute<msdyn_msdyn_consoleapplicationtemplate_tags_Select, { msdyn_msdyn_consoleapplicationtemplate_tagsid: string | null }, {  }>;
  msdyn_templatetagsid: WebAttribute<msdyn_msdyn_consoleapplicationtemplate_tags_Select, { msdyn_templatetagsid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_consoleapplicationtemplate_tags_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Filter {
  msdyn_consoleapplicationtemplateid: XQW.Guid;
  msdyn_msdyn_consoleapplicationtemplate_tagsid: XQW.Guid;
  msdyn_templatetagsid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Expand {
  msdyn_msdyn_consoleapplicationtemplate_tags: WebExpand<msdyn_msdyn_consoleapplicationtemplate_tags_Expand, msdyn_templatetags_Select, msdyn_templatetags_Filter, { msdyn_msdyn_consoleapplicationtemplate_tags: msdyn_templatetags_Result[] }>;
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_FormattedResult {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Result extends msdyn_msdyn_consoleapplicationtemplate_tags_Base, msdyn_msdyn_consoleapplicationtemplate_tags_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_RelatedOne {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_RelatedMany {
  msdyn_msdyn_consoleapplicationtemplate_tags: WebMappingRetrieve<msdyn_templatetags_Select,msdyn_templatetags_Expand,msdyn_templatetags_Filter,msdyn_templatetags_Fixed,msdyn_templatetags_Result,msdyn_templatetags_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_consoleapplicationtemplate_tagsset: WebMappingRetrieve<msdyn_msdyn_consoleapplicationtemplate_tags_Select,msdyn_msdyn_consoleapplicationtemplate_tags_Expand,msdyn_msdyn_consoleapplicationtemplate_tags_Filter,msdyn_msdyn_consoleapplicationtemplate_tags_Fixed,msdyn_msdyn_consoleapplicationtemplate_tags_Result,msdyn_msdyn_consoleapplicationtemplate_tags_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_consoleapplicationtemplate_tagsset: WebMappingRelated<msdyn_msdyn_consoleapplicationtemplate_tags_RelatedOne,msdyn_msdyn_consoleapplicationtemplate_tags_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_consoleapplicationtemplate_tagsset: WebMappingCUDA<msdyn_msdyn_consoleapplicationtemplate_tags_Create,msdyn_msdyn_consoleapplicationtemplate_tags_Update,msdyn_msdyn_consoleapplicationtemplate_tags_Select>;
}
