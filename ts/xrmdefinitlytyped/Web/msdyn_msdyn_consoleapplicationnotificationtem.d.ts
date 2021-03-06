interface msdyn_msdyn_consoleapplicationnotificationtem_Base extends WebEntity {
  msdyn_consoleapplicationnotificationfieldid?: string | null;
  msdyn_consoleapplicationnotificationtemplateid?: string | null;
  msdyn_msdyn_consoleapplicationnotificationtemid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Relationships {
  msdyn_msdyn_consoleapplicationnotificationtempl?: msdyn_consoleapplicationnotificationfield_Result[] | null;
}
interface msdyn_msdyn_consoleapplicationnotificationtem extends msdyn_msdyn_consoleapplicationnotificationtem_Base, msdyn_msdyn_consoleapplicationnotificationtem_Relationships {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Create extends msdyn_msdyn_consoleapplicationnotificationtem {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Update extends msdyn_msdyn_consoleapplicationnotificationtem {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Select {
  msdyn_consoleapplicationnotificationfieldid: WebAttribute<msdyn_msdyn_consoleapplicationnotificationtem_Select, { msdyn_consoleapplicationnotificationfieldid: string | null }, {  }>;
  msdyn_consoleapplicationnotificationtemplateid: WebAttribute<msdyn_msdyn_consoleapplicationnotificationtem_Select, { msdyn_consoleapplicationnotificationtemplateid: string | null }, {  }>;
  msdyn_msdyn_consoleapplicationnotificationtemid: WebAttribute<msdyn_msdyn_consoleapplicationnotificationtem_Select, { msdyn_msdyn_consoleapplicationnotificationtemid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_consoleapplicationnotificationtem_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Filter {
  msdyn_consoleapplicationnotificationfieldid: XQW.Guid;
  msdyn_consoleapplicationnotificationtemplateid: XQW.Guid;
  msdyn_msdyn_consoleapplicationnotificationtemid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Expand {
  msdyn_msdyn_consoleapplicationnotificationtempl: WebExpand<msdyn_msdyn_consoleapplicationnotificationtem_Expand, msdyn_consoleapplicationnotificationfield_Select, msdyn_consoleapplicationnotificationfield_Filter, { msdyn_msdyn_consoleapplicationnotificationtempl: msdyn_consoleapplicationnotificationfield_Result[] }>;
}
interface msdyn_msdyn_consoleapplicationnotificationtem_FormattedResult {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Result extends msdyn_msdyn_consoleapplicationnotificationtem_Base, msdyn_msdyn_consoleapplicationnotificationtem_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_consoleapplicationnotificationtem_RelatedOne {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_RelatedMany {
  msdyn_msdyn_consoleapplicationnotificationtempl: WebMappingRetrieve<msdyn_consoleapplicationnotificationfield_Select,msdyn_consoleapplicationnotificationfield_Expand,msdyn_consoleapplicationnotificationfield_Filter,msdyn_consoleapplicationnotificationfield_Fixed,msdyn_consoleapplicationnotificationfield_Result,msdyn_consoleapplicationnotificationfield_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_consoleapplicationnotificationtemset: WebMappingRetrieve<msdyn_msdyn_consoleapplicationnotificationtem_Select,msdyn_msdyn_consoleapplicationnotificationtem_Expand,msdyn_msdyn_consoleapplicationnotificationtem_Filter,msdyn_msdyn_consoleapplicationnotificationtem_Fixed,msdyn_msdyn_consoleapplicationnotificationtem_Result,msdyn_msdyn_consoleapplicationnotificationtem_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_consoleapplicationnotificationtemset: WebMappingRelated<msdyn_msdyn_consoleapplicationnotificationtem_RelatedOne,msdyn_msdyn_consoleapplicationnotificationtem_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_consoleapplicationnotificationtemset: WebMappingCUDA<msdyn_msdyn_consoleapplicationnotificationtem_Create,msdyn_msdyn_consoleapplicationnotificationtem_Update,msdyn_msdyn_consoleapplicationnotificationtem_Select>;
}
