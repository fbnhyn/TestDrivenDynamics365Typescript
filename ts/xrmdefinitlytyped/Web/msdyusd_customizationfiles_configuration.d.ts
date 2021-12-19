interface msdyusd_customizationfiles_configuration_Base extends WebEntity {
  msdyusd_configurationid?: string | null;
  msdyusd_customizationfiles_configurationid?: string | null;
  msdyusd_customizationfilesid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_customizationfiles_configuration_Relationships {
  msdyusd_customizationfiles_configuration?: msdyusd_configuration_Result[] | null;
}
interface msdyusd_customizationfiles_configuration extends msdyusd_customizationfiles_configuration_Base, msdyusd_customizationfiles_configuration_Relationships {
}
interface msdyusd_customizationfiles_configuration_Create extends msdyusd_customizationfiles_configuration {
}
interface msdyusd_customizationfiles_configuration_Update extends msdyusd_customizationfiles_configuration {
}
interface msdyusd_customizationfiles_configuration_Select {
  msdyusd_configurationid: WebAttribute<msdyusd_customizationfiles_configuration_Select, { msdyusd_configurationid: string | null }, {  }>;
  msdyusd_customizationfiles_configurationid: WebAttribute<msdyusd_customizationfiles_configuration_Select, { msdyusd_customizationfiles_configurationid: string | null }, {  }>;
  msdyusd_customizationfilesid: WebAttribute<msdyusd_customizationfiles_configuration_Select, { msdyusd_customizationfilesid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_customizationfiles_configuration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_customizationfiles_configuration_Filter {
  msdyusd_configurationid: XQW.Guid;
  msdyusd_customizationfiles_configurationid: XQW.Guid;
  msdyusd_customizationfilesid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_customizationfiles_configuration_Expand {
  msdyusd_customizationfiles_configuration: WebExpand<msdyusd_customizationfiles_configuration_Expand, msdyusd_configuration_Select, msdyusd_configuration_Filter, { msdyusd_customizationfiles_configuration: msdyusd_configuration_Result[] }>;
}
interface msdyusd_customizationfiles_configuration_FormattedResult {
}
interface msdyusd_customizationfiles_configuration_Result extends msdyusd_customizationfiles_configuration_Base, msdyusd_customizationfiles_configuration_Relationships {
  "@odata.etag": string;
}
interface msdyusd_customizationfiles_configuration_RelatedOne {
}
interface msdyusd_customizationfiles_configuration_RelatedMany {
  msdyusd_customizationfiles_configuration: WebMappingRetrieve<msdyusd_configuration_Select,msdyusd_configuration_Expand,msdyusd_configuration_Filter,msdyusd_configuration_Fixed,msdyusd_configuration_Result,msdyusd_configuration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_customizationfiles_configurationset: WebMappingRetrieve<msdyusd_customizationfiles_configuration_Select,msdyusd_customizationfiles_configuration_Expand,msdyusd_customizationfiles_configuration_Filter,msdyusd_customizationfiles_configuration_Fixed,msdyusd_customizationfiles_configuration_Result,msdyusd_customizationfiles_configuration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_customizationfiles_configurationset: WebMappingRelated<msdyusd_customizationfiles_configuration_RelatedOne,msdyusd_customizationfiles_configuration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_customizationfiles_configurationset: WebMappingCUDA<msdyusd_customizationfiles_configuration_Create,msdyusd_customizationfiles_configuration_Update,msdyusd_customizationfiles_configuration_Select>;
}
