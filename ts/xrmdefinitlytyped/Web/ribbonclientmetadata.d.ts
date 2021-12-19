interface RibbonClientMetadata_Base extends WebEntity {
  componentstate?: number | null;
  entitylogicalname?: string | null;
  ribboncontext?: string | null;
  ribbonid?: string | null;
  ribbonidunique?: string | null;
  ribbonjson?: string | null;
  solutionid?: string | null;
  versionnumber?: number | null;
}
interface RibbonClientMetadata_Relationships {
  RibbonJsonFileRef?: FileAttachment_Result | null;
  ribbonclientmetadata_FileAttachments?: FileAttachment_Result[] | null;
}
interface RibbonClientMetadata extends RibbonClientMetadata_Base, RibbonClientMetadata_Relationships {
}
interface RibbonClientMetadata_Create extends RibbonClientMetadata {
}
interface RibbonClientMetadata_Update extends RibbonClientMetadata {
}
interface RibbonClientMetadata_Select {
  componentstate: WebAttribute<RibbonClientMetadata_Select, { componentstate: number | null }, {  }>;
  entitylogicalname: WebAttribute<RibbonClientMetadata_Select, { entitylogicalname: string | null }, {  }>;
  ribboncontext: WebAttribute<RibbonClientMetadata_Select, { ribboncontext: string | null }, {  }>;
  ribbonid: WebAttribute<RibbonClientMetadata_Select, { ribbonid: string | null }, {  }>;
  ribbonidunique: WebAttribute<RibbonClientMetadata_Select, { ribbonidunique: string | null }, {  }>;
  ribbonjson: WebAttribute<RibbonClientMetadata_Select, { ribbonjson: string | null }, {  }>;
  solutionid: WebAttribute<RibbonClientMetadata_Select, { solutionid: string | null }, {  }>;
  versionnumber: WebAttribute<RibbonClientMetadata_Select, { versionnumber: number | null }, {  }>;
}
interface RibbonClientMetadata_Filter {
  componentstate: number;
  entitylogicalname: string;
  ribboncontext: string;
  ribbonid: XQW.Guid;
  ribbonidunique: XQW.Guid;
  ribbonjson: string;
  solutionid: XQW.Guid;
  versionnumber: number;
}
interface RibbonClientMetadata_Expand {
  RibbonJsonFileRef: WebExpand<RibbonClientMetadata_Expand, FileAttachment_Select, FileAttachment_Filter, { RibbonJsonFileRef: FileAttachment_Result }>;
  ribbonclientmetadata_FileAttachments: WebExpand<RibbonClientMetadata_Expand, FileAttachment_Select, FileAttachment_Filter, { ribbonclientmetadata_FileAttachments: FileAttachment_Result[] }>;
}
interface RibbonClientMetadata_FormattedResult {
}
interface RibbonClientMetadata_Result extends RibbonClientMetadata_Base, RibbonClientMetadata_Relationships {
  "@odata.etag": string;
}
interface RibbonClientMetadata_RelatedOne {
  RibbonJsonFileRef: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
}
interface RibbonClientMetadata_RelatedMany {
  ribbonclientmetadata_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
}
interface WebEntitiesRetrieve {
  ribbonclientmetadata: WebMappingRetrieve<RibbonClientMetadata_Select,RibbonClientMetadata_Expand,RibbonClientMetadata_Filter,RibbonClientMetadata_Fixed,RibbonClientMetadata_Result,RibbonClientMetadata_FormattedResult>;
}
interface WebEntitiesRelated {
  ribbonclientmetadata: WebMappingRelated<RibbonClientMetadata_RelatedOne,RibbonClientMetadata_RelatedMany>;
}
interface WebEntitiesCUDA {
  ribbonclientmetadata: WebMappingCUDA<RibbonClientMetadata_Create,RibbonClientMetadata_Update,RibbonClientMetadata_Select>;
}
