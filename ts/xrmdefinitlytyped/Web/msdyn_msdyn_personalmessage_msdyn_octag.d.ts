interface msdyn_msdyn_personalmessage_msdyn_octag_Base extends WebEntity {
  msdyn_msdyn_personalmessage_msdyn_octagid?: string | null;
  msdyn_octagid?: string | null;
  msdyn_personalmessageid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Relationships {
  msdyn_msdyn_personalmessage_msdyn_octag?: msdyn_octag_Result[] | null;
}
interface msdyn_msdyn_personalmessage_msdyn_octag extends msdyn_msdyn_personalmessage_msdyn_octag_Base, msdyn_msdyn_personalmessage_msdyn_octag_Relationships {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Create extends msdyn_msdyn_personalmessage_msdyn_octag {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Update extends msdyn_msdyn_personalmessage_msdyn_octag {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Select {
  msdyn_msdyn_personalmessage_msdyn_octagid: WebAttribute<msdyn_msdyn_personalmessage_msdyn_octag_Select, { msdyn_msdyn_personalmessage_msdyn_octagid: string | null }, {  }>;
  msdyn_octagid: WebAttribute<msdyn_msdyn_personalmessage_msdyn_octag_Select, { msdyn_octagid: string | null }, {  }>;
  msdyn_personalmessageid: WebAttribute<msdyn_msdyn_personalmessage_msdyn_octag_Select, { msdyn_personalmessageid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_personalmessage_msdyn_octag_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Filter {
  msdyn_msdyn_personalmessage_msdyn_octagid: XQW.Guid;
  msdyn_octagid: XQW.Guid;
  msdyn_personalmessageid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Expand {
  msdyn_msdyn_personalmessage_msdyn_octag: WebExpand<msdyn_msdyn_personalmessage_msdyn_octag_Expand, msdyn_octag_Select, msdyn_octag_Filter, { msdyn_msdyn_personalmessage_msdyn_octag: msdyn_octag_Result[] }>;
}
interface msdyn_msdyn_personalmessage_msdyn_octag_FormattedResult {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Result extends msdyn_msdyn_personalmessage_msdyn_octag_Base, msdyn_msdyn_personalmessage_msdyn_octag_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_personalmessage_msdyn_octag_RelatedOne {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_RelatedMany {
  msdyn_msdyn_personalmessage_msdyn_octag: WebMappingRetrieve<msdyn_octag_Select,msdyn_octag_Expand,msdyn_octag_Filter,msdyn_octag_Fixed,msdyn_octag_Result,msdyn_octag_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_personalmessage_msdyn_octagset: WebMappingRetrieve<msdyn_msdyn_personalmessage_msdyn_octag_Select,msdyn_msdyn_personalmessage_msdyn_octag_Expand,msdyn_msdyn_personalmessage_msdyn_octag_Filter,msdyn_msdyn_personalmessage_msdyn_octag_Fixed,msdyn_msdyn_personalmessage_msdyn_octag_Result,msdyn_msdyn_personalmessage_msdyn_octag_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_personalmessage_msdyn_octagset: WebMappingRelated<msdyn_msdyn_personalmessage_msdyn_octag_RelatedOne,msdyn_msdyn_personalmessage_msdyn_octag_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_personalmessage_msdyn_octagset: WebMappingCUDA<msdyn_msdyn_personalmessage_msdyn_octag_Create,msdyn_msdyn_personalmessage_msdyn_octag_Update,msdyn_msdyn_personalmessage_msdyn_octag_Select>;
}
