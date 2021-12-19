interface msdyusd_configuration_hostedcontrol_Base extends WebEntity {
  msdyusd_configuration_hostedcontrolid?: string | null;
  msdyusd_configurationid?: string | null;
  uii_hostedapplicationid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_configuration_hostedcontrol_Relationships {
  msdyusd_configuration_hostedcontrol?: UII_hostedapplication_Result[] | null;
}
interface msdyusd_configuration_hostedcontrol extends msdyusd_configuration_hostedcontrol_Base, msdyusd_configuration_hostedcontrol_Relationships {
}
interface msdyusd_configuration_hostedcontrol_Create extends msdyusd_configuration_hostedcontrol {
}
interface msdyusd_configuration_hostedcontrol_Update extends msdyusd_configuration_hostedcontrol {
}
interface msdyusd_configuration_hostedcontrol_Select {
  msdyusd_configuration_hostedcontrolid: WebAttribute<msdyusd_configuration_hostedcontrol_Select, { msdyusd_configuration_hostedcontrolid: string | null }, {  }>;
  msdyusd_configurationid: WebAttribute<msdyusd_configuration_hostedcontrol_Select, { msdyusd_configurationid: string | null }, {  }>;
  uii_hostedapplicationid: WebAttribute<msdyusd_configuration_hostedcontrol_Select, { uii_hostedapplicationid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_configuration_hostedcontrol_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_configuration_hostedcontrol_Filter {
  msdyusd_configuration_hostedcontrolid: XQW.Guid;
  msdyusd_configurationid: XQW.Guid;
  uii_hostedapplicationid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_configuration_hostedcontrol_Expand {
  msdyusd_configuration_hostedcontrol: WebExpand<msdyusd_configuration_hostedcontrol_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_configuration_hostedcontrol: UII_hostedapplication_Result[] }>;
}
interface msdyusd_configuration_hostedcontrol_FormattedResult {
}
interface msdyusd_configuration_hostedcontrol_Result extends msdyusd_configuration_hostedcontrol_Base, msdyusd_configuration_hostedcontrol_Relationships {
  "@odata.etag": string;
}
interface msdyusd_configuration_hostedcontrol_RelatedOne {
}
interface msdyusd_configuration_hostedcontrol_RelatedMany {
  msdyusd_configuration_hostedcontrol: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_configuration_hostedcontrolset: WebMappingRetrieve<msdyusd_configuration_hostedcontrol_Select,msdyusd_configuration_hostedcontrol_Expand,msdyusd_configuration_hostedcontrol_Filter,msdyusd_configuration_hostedcontrol_Fixed,msdyusd_configuration_hostedcontrol_Result,msdyusd_configuration_hostedcontrol_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_configuration_hostedcontrolset: WebMappingRelated<msdyusd_configuration_hostedcontrol_RelatedOne,msdyusd_configuration_hostedcontrol_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_configuration_hostedcontrolset: WebMappingCUDA<msdyusd_configuration_hostedcontrol_Create,msdyusd_configuration_hostedcontrol_Update,msdyusd_configuration_hostedcontrol_Select>;
}
