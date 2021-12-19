interface MetadataDifference_Base extends WebEntity {
  createdon?: Date | null;
  differencexml?: string | null;
  introducedversion?: number | null;
  introducedversionstring?: string | null;
  metadatadifferenceid?: string | null;
  modifiedon?: Date | null;
  solutionid?: string | null;
}
interface MetadataDifference_Relationships {
}
interface MetadataDifference extends MetadataDifference_Base, MetadataDifference_Relationships {
}
interface MetadataDifference_Create extends MetadataDifference {
}
interface MetadataDifference_Update extends MetadataDifference {
}
interface MetadataDifference_Select {
  createdon: WebAttribute<MetadataDifference_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  differencexml: WebAttribute<MetadataDifference_Select, { differencexml: string | null }, {  }>;
  introducedversion: WebAttribute<MetadataDifference_Select, { introducedversion: number | null }, {  }>;
  introducedversionstring: WebAttribute<MetadataDifference_Select, { introducedversionstring: string | null }, {  }>;
  metadatadifferenceid: WebAttribute<MetadataDifference_Select, { metadatadifferenceid: string | null }, {  }>;
  modifiedon: WebAttribute<MetadataDifference_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  solutionid: WebAttribute<MetadataDifference_Select, { solutionid: string | null }, {  }>;
}
interface MetadataDifference_Filter {
  createdon: Date;
  differencexml: string;
  introducedversion: number;
  introducedversionstring: string;
  metadatadifferenceid: XQW.Guid;
  modifiedon: Date;
  solutionid: XQW.Guid;
}
interface MetadataDifference_Expand {
}
interface MetadataDifference_FormattedResult {
  createdon_formatted?: string;
  modifiedon_formatted?: string;
}
interface MetadataDifference_Result extends MetadataDifference_Base, MetadataDifference_Relationships {
  "@odata.etag": string;
}
interface MetadataDifference_RelatedOne {
}
interface MetadataDifference_RelatedMany {
}
interface WebEntitiesRetrieve {
  metadatadifferences: WebMappingRetrieve<MetadataDifference_Select,MetadataDifference_Expand,MetadataDifference_Filter,MetadataDifference_Fixed,MetadataDifference_Result,MetadataDifference_FormattedResult>;
}
interface WebEntitiesRelated {
  metadatadifferences: WebMappingRelated<MetadataDifference_RelatedOne,MetadataDifference_RelatedMany>;
}
interface WebEntitiesCUDA {
  metadatadifferences: WebMappingCUDA<MetadataDifference_Create,MetadataDifference_Update,MetadataDifference_Select>;
}
