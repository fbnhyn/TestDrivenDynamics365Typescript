interface RibbonMetadataToProcess_Base extends WebEntity {
  completedon?: Date | null;
  createdon?: Date | null;
  entityname?: string | null;
  exceptionmessage?: string | null;
  isdbupdate?: number | null;
  processedon?: Date | null;
  retrycount?: number | null;
  ribbonmetadatarowid?: string | null;
  solutionid?: string | null;
  solutionname?: string | null;
  status?: number | null;
}
interface RibbonMetadataToProcess_Relationships {
}
interface RibbonMetadataToProcess extends RibbonMetadataToProcess_Base, RibbonMetadataToProcess_Relationships {
}
interface RibbonMetadataToProcess_Create extends RibbonMetadataToProcess {
}
interface RibbonMetadataToProcess_Update extends RibbonMetadataToProcess {
}
interface RibbonMetadataToProcess_Select {
  completedon: WebAttribute<RibbonMetadataToProcess_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdon: WebAttribute<RibbonMetadataToProcess_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  entityname: WebAttribute<RibbonMetadataToProcess_Select, { entityname: string | null }, {  }>;
  exceptionmessage: WebAttribute<RibbonMetadataToProcess_Select, { exceptionmessage: string | null }, {  }>;
  isdbupdate: WebAttribute<RibbonMetadataToProcess_Select, { isdbupdate: number | null }, {  }>;
  processedon: WebAttribute<RibbonMetadataToProcess_Select, { processedon: Date | null }, { processedon_formatted?: string }>;
  retrycount: WebAttribute<RibbonMetadataToProcess_Select, { retrycount: number | null }, {  }>;
  ribbonmetadatarowid: WebAttribute<RibbonMetadataToProcess_Select, { ribbonmetadatarowid: string | null }, {  }>;
  solutionid: WebAttribute<RibbonMetadataToProcess_Select, { solutionid: string | null }, {  }>;
  solutionname: WebAttribute<RibbonMetadataToProcess_Select, { solutionname: string | null }, {  }>;
  status: WebAttribute<RibbonMetadataToProcess_Select, { status: number | null }, {  }>;
}
interface RibbonMetadataToProcess_Filter {
  completedon: Date;
  createdon: Date;
  entityname: string;
  exceptionmessage: string;
  isdbupdate: number;
  processedon: Date;
  retrycount: number;
  ribbonmetadatarowid: XQW.Guid;
  solutionid: XQW.Guid;
  solutionname: string;
  status: number;
}
interface RibbonMetadataToProcess_Expand {
}
interface RibbonMetadataToProcess_FormattedResult {
  completedon_formatted?: string;
  createdon_formatted?: string;
  processedon_formatted?: string;
}
interface RibbonMetadataToProcess_Result extends RibbonMetadataToProcess_Base, RibbonMetadataToProcess_Relationships {
  "@odata.etag": string;
}
interface RibbonMetadataToProcess_RelatedOne {
}
interface RibbonMetadataToProcess_RelatedMany {
}
interface WebEntitiesRetrieve {
  RibbonMetadataSetToProcess: WebMappingRetrieve<RibbonMetadataToProcess_Select,RibbonMetadataToProcess_Expand,RibbonMetadataToProcess_Filter,RibbonMetadataToProcess_Fixed,RibbonMetadataToProcess_Result,RibbonMetadataToProcess_FormattedResult>;
}
interface WebEntitiesRelated {
  RibbonMetadataSetToProcess: WebMappingRelated<RibbonMetadataToProcess_RelatedOne,RibbonMetadataToProcess_RelatedMany>;
}
interface WebEntitiesCUDA {
  RibbonMetadataSetToProcess: WebMappingCUDA<RibbonMetadataToProcess_Create,RibbonMetadataToProcess_Update,RibbonMetadataToProcess_Select>;
}
