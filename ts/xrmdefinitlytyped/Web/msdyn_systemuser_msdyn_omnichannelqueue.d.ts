interface msdyn_systemuser_msdyn_omnichannelqueue_Base extends WebEntity {
  msdyn_omnichannelqueueid?: string | null;
  msdyn_systemuser_msdyn_omnichannelqueueid?: string | null;
  systemuserid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Relationships {
  msdyn_systemuser_msdyn_omnichannelqueue?: msdyn_omnichannelqueue_Result[] | null;
}
interface msdyn_systemuser_msdyn_omnichannelqueue extends msdyn_systemuser_msdyn_omnichannelqueue_Base, msdyn_systemuser_msdyn_omnichannelqueue_Relationships {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Create extends msdyn_systemuser_msdyn_omnichannelqueue {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Update extends msdyn_systemuser_msdyn_omnichannelqueue {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Select {
  msdyn_omnichannelqueueid: WebAttribute<msdyn_systemuser_msdyn_omnichannelqueue_Select, { msdyn_omnichannelqueueid: string | null }, {  }>;
  msdyn_systemuser_msdyn_omnichannelqueueid: WebAttribute<msdyn_systemuser_msdyn_omnichannelqueue_Select, { msdyn_systemuser_msdyn_omnichannelqueueid: string | null }, {  }>;
  systemuserid: WebAttribute<msdyn_systemuser_msdyn_omnichannelqueue_Select, { systemuserid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_systemuser_msdyn_omnichannelqueue_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Filter {
  msdyn_omnichannelqueueid: XQW.Guid;
  msdyn_systemuser_msdyn_omnichannelqueueid: XQW.Guid;
  systemuserid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Expand {
  msdyn_systemuser_msdyn_omnichannelqueue: WebExpand<msdyn_systemuser_msdyn_omnichannelqueue_Expand, msdyn_omnichannelqueue_Select, msdyn_omnichannelqueue_Filter, { msdyn_systemuser_msdyn_omnichannelqueue: msdyn_omnichannelqueue_Result[] }>;
}
interface msdyn_systemuser_msdyn_omnichannelqueue_FormattedResult {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Result extends msdyn_systemuser_msdyn_omnichannelqueue_Base, msdyn_systemuser_msdyn_omnichannelqueue_Relationships {
  "@odata.etag": string;
}
interface msdyn_systemuser_msdyn_omnichannelqueue_RelatedOne {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_RelatedMany {
  msdyn_systemuser_msdyn_omnichannelqueue: WebMappingRetrieve<msdyn_omnichannelqueue_Select,msdyn_omnichannelqueue_Expand,msdyn_omnichannelqueue_Filter,msdyn_omnichannelqueue_Fixed,msdyn_omnichannelqueue_Result,msdyn_omnichannelqueue_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_systemuser_msdyn_omnichannelqueueset: WebMappingRetrieve<msdyn_systemuser_msdyn_omnichannelqueue_Select,msdyn_systemuser_msdyn_omnichannelqueue_Expand,msdyn_systemuser_msdyn_omnichannelqueue_Filter,msdyn_systemuser_msdyn_omnichannelqueue_Fixed,msdyn_systemuser_msdyn_omnichannelqueue_Result,msdyn_systemuser_msdyn_omnichannelqueue_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_systemuser_msdyn_omnichannelqueueset: WebMappingRelated<msdyn_systemuser_msdyn_omnichannelqueue_RelatedOne,msdyn_systemuser_msdyn_omnichannelqueue_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_systemuser_msdyn_omnichannelqueueset: WebMappingCUDA<msdyn_systemuser_msdyn_omnichannelqueue_Create,msdyn_systemuser_msdyn_omnichannelqueue_Update,msdyn_systemuser_msdyn_omnichannelqueue_Select>;
}
