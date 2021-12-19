interface SharedObjectsForRead_Base extends WebEntity {
  objectid?: string | null;
  objecttypecode?: number | null;
  sharedobjectsforreadid?: string | null;
  userids?: string | null;
  versionnumber?: number | null;
}
interface SharedObjectsForRead_Relationships {
}
interface SharedObjectsForRead extends SharedObjectsForRead_Base, SharedObjectsForRead_Relationships {
}
interface SharedObjectsForRead_Create extends SharedObjectsForRead {
}
interface SharedObjectsForRead_Update extends SharedObjectsForRead {
}
interface SharedObjectsForRead_Select {
  objectid: WebAttribute<SharedObjectsForRead_Select, { objectid: string | null }, {  }>;
  objecttypecode: WebAttribute<SharedObjectsForRead_Select, { objecttypecode: number | null }, {  }>;
  sharedobjectsforreadid: WebAttribute<SharedObjectsForRead_Select, { sharedobjectsforreadid: string | null }, {  }>;
  userids: WebAttribute<SharedObjectsForRead_Select, { userids: string | null }, {  }>;
  versionnumber: WebAttribute<SharedObjectsForRead_Select, { versionnumber: number | null }, {  }>;
}
interface SharedObjectsForRead_Filter {
  objectid: XQW.Guid;
  objecttypecode: number;
  sharedobjectsforreadid: XQW.Guid;
  userids: string;
  versionnumber: number;
}
interface SharedObjectsForRead_Expand {
}
interface SharedObjectsForRead_FormattedResult {
}
interface SharedObjectsForRead_Result extends SharedObjectsForRead_Base, SharedObjectsForRead_Relationships {
  "@odata.etag": string;
}
interface SharedObjectsForRead_RelatedOne {
}
interface SharedObjectsForRead_RelatedMany {
}
interface WebEntitiesRetrieve {
  sharedobjectsforread: WebMappingRetrieve<SharedObjectsForRead_Select,SharedObjectsForRead_Expand,SharedObjectsForRead_Filter,SharedObjectsForRead_Fixed,SharedObjectsForRead_Result,SharedObjectsForRead_FormattedResult>;
}
interface WebEntitiesRelated {
  sharedobjectsforread: WebMappingRelated<SharedObjectsForRead_RelatedOne,SharedObjectsForRead_RelatedMany>;
}
interface WebEntitiesCUDA {
  sharedobjectsforread: WebMappingCUDA<SharedObjectsForRead_Create,SharedObjectsForRead_Update,SharedObjectsForRead_Select>;
}
