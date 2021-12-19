interface msdyusd_tracesourcesetting_hostedcontrol_Base extends WebEntity {
  msdyusd_tracesourcesetting_hostedcontrolid?: string | null;
  msdyusd_tracesourcesettingid?: string | null;
  uii_hostedapplicationid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_tracesourcesetting_hostedcontrol_Relationships {
  msdyusd_tracesourcesetting_hostedcontrol?: UII_hostedapplication_Result[] | null;
}
interface msdyusd_tracesourcesetting_hostedcontrol extends msdyusd_tracesourcesetting_hostedcontrol_Base, msdyusd_tracesourcesetting_hostedcontrol_Relationships {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Create extends msdyusd_tracesourcesetting_hostedcontrol {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Update extends msdyusd_tracesourcesetting_hostedcontrol {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Select {
  msdyusd_tracesourcesetting_hostedcontrolid: WebAttribute<msdyusd_tracesourcesetting_hostedcontrol_Select, { msdyusd_tracesourcesetting_hostedcontrolid: string | null }, {  }>;
  msdyusd_tracesourcesettingid: WebAttribute<msdyusd_tracesourcesetting_hostedcontrol_Select, { msdyusd_tracesourcesettingid: string | null }, {  }>;
  uii_hostedapplicationid: WebAttribute<msdyusd_tracesourcesetting_hostedcontrol_Select, { uii_hostedapplicationid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_tracesourcesetting_hostedcontrol_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_tracesourcesetting_hostedcontrol_Filter {
  msdyusd_tracesourcesetting_hostedcontrolid: XQW.Guid;
  msdyusd_tracesourcesettingid: XQW.Guid;
  uii_hostedapplicationid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_tracesourcesetting_hostedcontrol_Expand {
  msdyusd_tracesourcesetting_hostedcontrol: WebExpand<msdyusd_tracesourcesetting_hostedcontrol_Expand, UII_hostedapplication_Select, UII_hostedapplication_Filter, { msdyusd_tracesourcesetting_hostedcontrol: UII_hostedapplication_Result[] }>;
}
interface msdyusd_tracesourcesetting_hostedcontrol_FormattedResult {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Result extends msdyusd_tracesourcesetting_hostedcontrol_Base, msdyusd_tracesourcesetting_hostedcontrol_Relationships {
  "@odata.etag": string;
}
interface msdyusd_tracesourcesetting_hostedcontrol_RelatedOne {
}
interface msdyusd_tracesourcesetting_hostedcontrol_RelatedMany {
  msdyusd_tracesourcesetting_hostedcontrol: WebMappingRetrieve<UII_hostedapplication_Select,UII_hostedapplication_Expand,UII_hostedapplication_Filter,UII_hostedapplication_Fixed,UII_hostedapplication_Result,UII_hostedapplication_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_tracesourcesetting_hostedcontrolset: WebMappingRetrieve<msdyusd_tracesourcesetting_hostedcontrol_Select,msdyusd_tracesourcesetting_hostedcontrol_Expand,msdyusd_tracesourcesetting_hostedcontrol_Filter,msdyusd_tracesourcesetting_hostedcontrol_Fixed,msdyusd_tracesourcesetting_hostedcontrol_Result,msdyusd_tracesourcesetting_hostedcontrol_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_tracesourcesetting_hostedcontrolset: WebMappingRelated<msdyusd_tracesourcesetting_hostedcontrol_RelatedOne,msdyusd_tracesourcesetting_hostedcontrol_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_tracesourcesetting_hostedcontrolset: WebMappingCUDA<msdyusd_tracesourcesetting_hostedcontrol_Create,msdyusd_tracesourcesetting_hostedcontrol_Update,msdyusd_tracesourcesetting_hostedcontrol_Select>;
}
