interface msdyn_msdyn_cannedmessage_liveworkstream_Base extends WebEntity {
  msdyn_cannedmessageid?: string | null;
  msdyn_liveworkstreamid?: string | null;
  msdyn_msdyn_cannedmessage_liveworkstreamid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Relationships {
  msdyn_msdyn_cannedmessage_liveworkstream?: msdyn_liveworkstream_Result[] | null;
}
interface msdyn_msdyn_cannedmessage_liveworkstream extends msdyn_msdyn_cannedmessage_liveworkstream_Base, msdyn_msdyn_cannedmessage_liveworkstream_Relationships {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Create extends msdyn_msdyn_cannedmessage_liveworkstream {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Update extends msdyn_msdyn_cannedmessage_liveworkstream {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Select {
  msdyn_cannedmessageid: WebAttribute<msdyn_msdyn_cannedmessage_liveworkstream_Select, { msdyn_cannedmessageid: string | null }, {  }>;
  msdyn_liveworkstreamid: WebAttribute<msdyn_msdyn_cannedmessage_liveworkstream_Select, { msdyn_liveworkstreamid: string | null }, {  }>;
  msdyn_msdyn_cannedmessage_liveworkstreamid: WebAttribute<msdyn_msdyn_cannedmessage_liveworkstream_Select, { msdyn_msdyn_cannedmessage_liveworkstreamid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_cannedmessage_liveworkstream_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Filter {
  msdyn_cannedmessageid: XQW.Guid;
  msdyn_liveworkstreamid: XQW.Guid;
  msdyn_msdyn_cannedmessage_liveworkstreamid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Expand {
  msdyn_msdyn_cannedmessage_liveworkstream: WebExpand<msdyn_msdyn_cannedmessage_liveworkstream_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_msdyn_cannedmessage_liveworkstream: msdyn_liveworkstream_Result[] }>;
}
interface msdyn_msdyn_cannedmessage_liveworkstream_FormattedResult {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Result extends msdyn_msdyn_cannedmessage_liveworkstream_Base, msdyn_msdyn_cannedmessage_liveworkstream_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_cannedmessage_liveworkstream_RelatedOne {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_RelatedMany {
  msdyn_msdyn_cannedmessage_liveworkstream: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_cannedmessage_liveworkstreamset: WebMappingRetrieve<msdyn_msdyn_cannedmessage_liveworkstream_Select,msdyn_msdyn_cannedmessage_liveworkstream_Expand,msdyn_msdyn_cannedmessage_liveworkstream_Filter,msdyn_msdyn_cannedmessage_liveworkstream_Fixed,msdyn_msdyn_cannedmessage_liveworkstream_Result,msdyn_msdyn_cannedmessage_liveworkstream_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_cannedmessage_liveworkstreamset: WebMappingRelated<msdyn_msdyn_cannedmessage_liveworkstream_RelatedOne,msdyn_msdyn_cannedmessage_liveworkstream_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_cannedmessage_liveworkstreamset: WebMappingCUDA<msdyn_msdyn_cannedmessage_liveworkstream_Create,msdyn_msdyn_cannedmessage_liveworkstream_Update,msdyn_msdyn_cannedmessage_liveworkstream_Select>;
}
