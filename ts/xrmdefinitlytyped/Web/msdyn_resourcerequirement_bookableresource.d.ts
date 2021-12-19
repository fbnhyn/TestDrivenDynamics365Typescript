interface msdyn_resourcerequirement_bookableresource_Base extends WebEntity {
  bookableresourceid?: string | null;
  msdyn_resourcerequirement_bookableresourceid?: string | null;
  msdyn_resourcerequirementid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_resourcerequirement_bookableresource_Relationships {
  msdyn_resourcerequirement_bookableresource?: BookableResource_Result[] | null;
}
interface msdyn_resourcerequirement_bookableresource extends msdyn_resourcerequirement_bookableresource_Base, msdyn_resourcerequirement_bookableresource_Relationships {
}
interface msdyn_resourcerequirement_bookableresource_Create extends msdyn_resourcerequirement_bookableresource {
}
interface msdyn_resourcerequirement_bookableresource_Update extends msdyn_resourcerequirement_bookableresource {
}
interface msdyn_resourcerequirement_bookableresource_Select {
  bookableresourceid: WebAttribute<msdyn_resourcerequirement_bookableresource_Select, { bookableresourceid: string | null }, {  }>;
  msdyn_resourcerequirement_bookableresourceid: WebAttribute<msdyn_resourcerequirement_bookableresource_Select, { msdyn_resourcerequirement_bookableresourceid: string | null }, {  }>;
  msdyn_resourcerequirementid: WebAttribute<msdyn_resourcerequirement_bookableresource_Select, { msdyn_resourcerequirementid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_resourcerequirement_bookableresource_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_resourcerequirement_bookableresource_Filter {
  bookableresourceid: XQW.Guid;
  msdyn_resourcerequirement_bookableresourceid: XQW.Guid;
  msdyn_resourcerequirementid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_resourcerequirement_bookableresource_Expand {
  msdyn_resourcerequirement_bookableresource: WebExpand<msdyn_resourcerequirement_bookableresource_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_resourcerequirement_bookableresource: BookableResource_Result[] }>;
}
interface msdyn_resourcerequirement_bookableresource_FormattedResult {
}
interface msdyn_resourcerequirement_bookableresource_Result extends msdyn_resourcerequirement_bookableresource_Base, msdyn_resourcerequirement_bookableresource_Relationships {
  "@odata.etag": string;
}
interface msdyn_resourcerequirement_bookableresource_RelatedOne {
}
interface msdyn_resourcerequirement_bookableresource_RelatedMany {
  msdyn_resourcerequirement_bookableresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_resourcerequirement_bookableresourceset: WebMappingRetrieve<msdyn_resourcerequirement_bookableresource_Select,msdyn_resourcerequirement_bookableresource_Expand,msdyn_resourcerequirement_bookableresource_Filter,msdyn_resourcerequirement_bookableresource_Fixed,msdyn_resourcerequirement_bookableresource_Result,msdyn_resourcerequirement_bookableresource_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_resourcerequirement_bookableresourceset: WebMappingRelated<msdyn_resourcerequirement_bookableresource_RelatedOne,msdyn_resourcerequirement_bookableresource_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_resourcerequirement_bookableresourceset: WebMappingCUDA<msdyn_resourcerequirement_bookableresource_Create,msdyn_resourcerequirement_bookableresource_Update,msdyn_resourcerequirement_bookableresource_Select>;
}
