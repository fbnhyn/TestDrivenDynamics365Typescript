interface msdyusd_form_hostedapplication_Base extends WebEntity {
  msdyusd_form_hostedapplicationid?: string | null;
  msdyusd_formid?: string | null;
  uii_hostedapplicationid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_form_hostedapplication_Relationships {
  msdyusd_form_hostedapplication?: UII_hostedapplication_Result[] | null;
}
interface msdyusd_form_hostedapplication extends msdyusd_form_hostedapplication_Base, msdyusd_form_hostedapplication_Relationships {
}
interface msdyusd_form_hostedapplication_Create extends msdyusd_form_hostedapplication {
}
interface msdyusd_form_hostedapplication_Update extends msdyusd_form_hostedapplication {
}
interface msdyusd_form_hostedapplication_Select {
  msdyusd_form_hostedapplicationid: WebAttribute<msdyusd_form_hostedapplication_Select, { msdyusd_form_hostedapplicationid: string | null }, {  }>;
  msdyusd_formid: WebAttribute<msdyusd_form_hostedapplication_Select, { msdyusd_formid: string | null }, {  }>;
  uii_hostedapplicationid: WebAttribute<msdyusd_form_hostedapplication_Select, { uii_hostedapplicationid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_form_hostedapplication_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_form_hostedapplication_Filter {
  msdyusd_form_hostedapplicationid: XQW.Guid;
  msdyusd_formid: XQW.Guid;
  uii_hostedapplicationid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_form_hostedapplication_Expand {
  msdyusd_form_hostedapplication: WebExpand<msdyusd_form_hostedapplication_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_form_hostedapplication: UII_hostedapplication_Result[] }>;
}
interface msdyusd_form_hostedapplication_FormattedResult {
}
interface msdyusd_form_hostedapplication_Result extends msdyusd_form_hostedapplication_Base, msdyusd_form_hostedapplication_Relationships {
  "@odata.etag": string;
}
interface msdyusd_form_hostedapplication_RelatedOne {
}
interface msdyusd_form_hostedapplication_RelatedMany {
  msdyusd_form_hostedapplication: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_form_hostedapplicationset: WebMappingRetrieve<msdyusd_form_hostedapplication_Select,msdyusd_form_hostedapplication_Expand,msdyusd_form_hostedapplication_Filter,msdyusd_form_hostedapplication_Fixed,msdyusd_form_hostedapplication_Result,msdyusd_form_hostedapplication_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_form_hostedapplicationset: WebMappingRelated<msdyusd_form_hostedapplication_RelatedOne,msdyusd_form_hostedapplication_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_form_hostedapplicationset: WebMappingCUDA<msdyusd_form_hostedapplication_Create,msdyusd_form_hostedapplication_Update,msdyusd_form_hostedapplication_Select>;
}
