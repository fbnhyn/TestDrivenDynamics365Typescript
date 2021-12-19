interface msdyusd_configuration_toolbar_Base extends WebEntity {
  msdyusd_configuration_toolbarid?: string | null;
  msdyusd_configurationid?: string | null;
  msdyusd_toolbarstripid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_toolbar_Relationships {
  msdyusd_configuration_toolbar?: msdyusd_toolbarstrip_Result[] | null;
}
interface msdyusd_configuration_toolbar extends msdyusd_configuration_toolbar_Base, msdyusd_configuration_toolbar_Relationships {
}
interface msdyusd_configuration_toolbar_Create extends msdyusd_configuration_toolbar {
}
interface msdyusd_configuration_toolbar_Update extends msdyusd_configuration_toolbar {
}
interface msdyusd_configuration_toolbar_Select {
  msdyusd_configuration_toolbarid: WebAttribute<msdyusd_configuration_toolbar_Select, { msdyusd_configuration_toolbarid: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_toolbar_Select, { msdyusd_configurationid: string | null }, {  }>;
  msdyusd_toolbarstripid: WebAttribute<msdyusd_configuration_toolbar_Select, { msdyusd_toolbarstripid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_toolbar_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_toolbar_Filter {
  msdyusd_configuration_toolbarid: XQW.Guid;
  msdyusd_configurationid: XQW.Guid;
  msdyusd_toolbarstripid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_configuration_toolbar_Expand {
  msdyusd_configuration_toolbar: WebExpand<msdyusd_configuration_toolbar_Expand, msdyusd_toolbarstrip_Select, msdyusd_toolbarstrip_Filter, { msdyusd_configuration_toolbar: msdyusd_toolbarstrip_Result[] }>;
}
interface msdyusd_configuration_toolbar_FormattedResult {
}
interface msdyusd_configuration_toolbar_Result extends msdyusd_configuration_toolbar_Base, msdyusd_configuration_toolbar_Relationships {
  "@odata.etag": string;
}
interface msdyusd_configuration_toolbar_RelatedOne {
}
interface msdyusd_configuration_toolbar_RelatedMany {
  msdyusd_configuration_toolbar: WebMappingRetrieve<msdyusd_toolbarstrip_Select,msdyusd_toolbarstrip_Expand,msdyusd_toolbarstrip_Filter,msdyusd_toolbarstrip_Fixed,msdyusd_toolbarstrip_Result,msdyusd_toolbarstrip_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configuration_toolbarset: WebMappingRetrieve<msdyusd_configuration_toolbar_Select,msdyusd_configuration_toolbar_Expand,msdyusd_configuration_toolbar_Filter,msdyusd_configuration_toolbar_Fixed,msdyusd_configuration_toolbar_Result,msdyusd_configuration_toolbar_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configuration_toolbarset: WebMappingRelated<msdyusd_configuration_toolbar_RelatedOne,msdyusd_configuration_toolbar_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configuration_toolbarset: WebMappingCUDA<msdyusd_configuration_toolbar_Create,msdyusd_configuration_toolbar_Update,msdyusd_configuration_toolbar_Select>;
}
