interface msdyusd_toolbarstrip_uii_hostedapplication_Base extends WebEntity {
  msdyusd_toolbarstrip_uii_hostedapplicationid?: string | null;
  msdyusd_toolbarstripid?: string | null;
  uii_hostedapplicationid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Relationships {
  msdyusd_toolbarstrip_uii_hostedapplication?: UII_hostedapplication_Result[] | null;
}
interface msdyusd_toolbarstrip_uii_hostedapplication extends msdyusd_toolbarstrip_uii_hostedapplication_Base, msdyusd_toolbarstrip_uii_hostedapplication_Relationships {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Create extends msdyusd_toolbarstrip_uii_hostedapplication {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Update extends msdyusd_toolbarstrip_uii_hostedapplication {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Select {
  msdyusd_toolbarstrip_uii_hostedapplicationid: WebAttribute<msdyusd_toolbarstrip_uii_hostedapplication_Select, { msdyusd_toolbarstrip_uii_hostedapplicationid: string | null }, {  }>;
  msdyusd_toolbarstripid: WebAttribute<msdyusd_toolbarstrip_uii_hostedapplication_Select, { msdyusd_toolbarstripid: string | null }, {  }>;
  uii_hostedapplicationid: WebAttribute<msdyusd_toolbarstrip_uii_hostedapplication_Select, { uii_hostedapplicationid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_toolbarstrip_uii_hostedapplication_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Filter {
  msdyusd_toolbarstrip_uii_hostedapplicationid: XQW.Guid;
  msdyusd_toolbarstripid: XQW.Guid;
  uii_hostedapplicationid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Expand {
  msdyusd_toolbarstrip_uii_hostedapplication: WebExpand<msdyusd_toolbarstrip_uii_hostedapplication_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_toolbarstrip_uii_hostedapplication: UII_hostedapplication_Result[] }>;
}
interface msdyusd_toolbarstrip_uii_hostedapplication_FormattedResult {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Result extends msdyusd_toolbarstrip_uii_hostedapplication_Base, msdyusd_toolbarstrip_uii_hostedapplication_Relationships {
  "@odata.etag": string;
}
interface msdyusd_toolbarstrip_uii_hostedapplication_RelatedOne {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_RelatedMany {
  msdyusd_toolbarstrip_uii_hostedapplication: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_toolbarstrip_uii_hostedapplicationset: WebMappingRetrieve<msdyusd_toolbarstrip_uii_hostedapplication_Select,msdyusd_toolbarstrip_uii_hostedapplication_Expand,msdyusd_toolbarstrip_uii_hostedapplication_Filter,msdyusd_toolbarstrip_uii_hostedapplication_Fixed,msdyusd_toolbarstrip_uii_hostedapplication_Result,msdyusd_toolbarstrip_uii_hostedapplication_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_toolbarstrip_uii_hostedapplicationset: WebMappingRelated<msdyusd_toolbarstrip_uii_hostedapplication_RelatedOne,msdyusd_toolbarstrip_uii_hostedapplication_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_toolbarstrip_uii_hostedapplicationset: WebMappingCUDA<msdyusd_toolbarstrip_uii_hostedapplication_Create,msdyusd_toolbarstrip_uii_hostedapplication_Update,msdyusd_toolbarstrip_uii_hostedapplication_Select>;
}
