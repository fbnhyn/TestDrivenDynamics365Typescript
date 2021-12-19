interface msdyn_resourcerequirement_bookingheader_Base extends WebEntity {
  bookableresourcebookingheaderid?: string | null;
  msdyn_resourcerequirement_bookingheaderid?: string | null;
  msdyn_resourcerequirementid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_resourcerequirement_bookingheader_Relationships {
  msdyn_resourcerequirement_bookingheader?: BookableResourceBookingHeader_Result[] | null;
}
interface msdyn_resourcerequirement_bookingheader extends msdyn_resourcerequirement_bookingheader_Base, msdyn_resourcerequirement_bookingheader_Relationships {
}
interface msdyn_resourcerequirement_bookingheader_Create extends msdyn_resourcerequirement_bookingheader {
}
interface msdyn_resourcerequirement_bookingheader_Update extends msdyn_resourcerequirement_bookingheader {
}
interface msdyn_resourcerequirement_bookingheader_Select {
  bookableresourcebookingheaderid: WebAttribute<msdyn_resourcerequirement_bookingheader_Select, { bookableresourcebookingheaderid: string | null }, {  }>;
  msdyn_resourcerequirement_bookingheaderid: WebAttribute<msdyn_resourcerequirement_bookingheader_Select, { msdyn_resourcerequirement_bookingheaderid: string | null }, {  }>;
  msdyn_resourcerequirementid: WebAttribute<msdyn_resourcerequirement_bookingheader_Select, { msdyn_resourcerequirementid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_resourcerequirement_bookingheader_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_resourcerequirement_bookingheader_Filter {
  bookableresourcebookingheaderid: XQW.Guid;
  msdyn_resourcerequirement_bookingheaderid: XQW.Guid;
  msdyn_resourcerequirementid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_resourcerequirement_bookingheader_Expand {
  msdyn_resourcerequirement_bookingheader: WebExpand<msdyn_resourcerequirement_bookingheader_Expand, BookableResourceBookingHeader_Select, BookableResourceBookingHeader_Filter, { msdyn_resourcerequirement_bookingheader: BookableResourceBookingHeader_Result[] }>;
}
interface msdyn_resourcerequirement_bookingheader_FormattedResult {
}
interface msdyn_resourcerequirement_bookingheader_Result extends msdyn_resourcerequirement_bookingheader_Base, msdyn_resourcerequirement_bookingheader_Relationships {
  "@odata.etag": string;
}
interface msdyn_resourcerequirement_bookingheader_RelatedOne {
}
interface msdyn_resourcerequirement_bookingheader_RelatedMany {
  msdyn_resourcerequirement_bookingheader: WebMappingRetrieve<BookableResourceBookingHeader_Select,BookableResourceBookingHeader_Expand,BookableResourceBookingHeader_Filter,BookableResourceBookingHeader_Fixed,BookableResourceBookingHeader_Result,BookableResourceBookingHeader_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_resourcerequirement_bookingheaderset: WebMappingRetrieve<msdyn_resourcerequirement_bookingheader_Select,msdyn_resourcerequirement_bookingheader_Expand,msdyn_resourcerequirement_bookingheader_Filter,msdyn_resourcerequirement_bookingheader_Fixed,msdyn_resourcerequirement_bookingheader_Result,msdyn_resourcerequirement_bookingheader_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_resourcerequirement_bookingheaderset: WebMappingRelated<msdyn_resourcerequirement_bookingheader_RelatedOne,msdyn_resourcerequirement_bookingheader_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_resourcerequirement_bookingheaderset: WebMappingCUDA<msdyn_resourcerequirement_bookingheader_Create,msdyn_resourcerequirement_bookingheader_Update,msdyn_resourcerequirement_bookingheader_Select>;
}
