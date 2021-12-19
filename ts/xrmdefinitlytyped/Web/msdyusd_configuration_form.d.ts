interface msdyusd_configuration_form_Base extends WebEntity {
  msdyusd_configuration_formid?: string | null;
  msdyusd_configurationid?: string | null;
  msdyusd_formid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_form_Relationships {
  msdyusd_configuration_form?: msdyusd_form_Result[] | null;
}
interface msdyusd_configuration_form extends msdyusd_configuration_form_Base, msdyusd_configuration_form_Relationships {
}
interface msdyusd_configuration_form_Create extends msdyusd_configuration_form {
}
interface msdyusd_configuration_form_Update extends msdyusd_configuration_form {
}
interface msdyusd_configuration_form_Select {
  msdyusd_configuration_formid: WebAttribute<msdyusd_configuration_form_Select, { msdyusd_configuration_formid: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_form_Select, { msdyusd_configurationid: string | null }, {  }>;
  msdyusd_formid: WebAttribute<msdyusd_configuration_form_Select, { msdyusd_formid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_form_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_form_Filter {
  msdyusd_configuration_formid: XQW.Guid;
  msdyusd_configurationid: XQW.Guid;
  msdyusd_formid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_configuration_form_Expand {
  msdyusd_configuration_form: WebExpand<msdyusd_configuration_form_Expand, msdyusd_form_Select, msdyusd_form_Filter, { msdyusd_configuration_form: msdyusd_form_Result[] }>;
}
interface msdyusd_configuration_form_FormattedResult {
}
interface msdyusd_configuration_form_Result extends msdyusd_configuration_form_Base, msdyusd_configuration_form_Relationships {
  "@odata.etag": string;
}
interface msdyusd_configuration_form_RelatedOne {
}
interface msdyusd_configuration_form_RelatedMany {
  msdyusd_configuration_form: WebMappingRetrieve<msdyusd_form_Select,msdyusd_form_Expand,msdyusd_form_Filter,msdyusd_form_Fixed,msdyusd_form_Result,msdyusd_form_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configuration_formset: WebMappingRetrieve<msdyusd_configuration_form_Select,msdyusd_configuration_form_Expand,msdyusd_configuration_form_Filter,msdyusd_configuration_form_Fixed,msdyusd_configuration_form_Result,msdyusd_configuration_form_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configuration_formset: WebMappingRelated<msdyusd_configuration_form_RelatedOne,msdyusd_configuration_form_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configuration_formset: WebMappingCUDA<msdyusd_configuration_form_Create,msdyusd_configuration_form_Update,msdyusd_configuration_form_Select>;
}
