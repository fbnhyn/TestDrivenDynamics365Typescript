interface SystemUserManagerMap_Base extends WebEntity {
  hierarchylevel?: number | null;
  parentsystemuserid?: string | null;
  systemuserid?: string | null;
  systemusermanagermapid?: string | null;
  versionnumber?: number | null;
}
interface SystemUserManagerMap_Relationships {
}
interface SystemUserManagerMap extends SystemUserManagerMap_Base, SystemUserManagerMap_Relationships {
}
interface SystemUserManagerMap_Create extends SystemUserManagerMap {
}
interface SystemUserManagerMap_Update extends SystemUserManagerMap {
}
interface SystemUserManagerMap_Select {
  hierarchylevel: WebAttribute<SystemUserManagerMap_Select, { hierarchylevel: number | null }, {  }>;
  parentsystemuserid: WebAttribute<SystemUserManagerMap_Select, { parentsystemuserid: string | null }, {  }>;
  systemuserid: WebAttribute<SystemUserManagerMap_Select, { systemuserid: string | null }, {  }>;
  systemusermanagermapid: WebAttribute<SystemUserManagerMap_Select, { systemusermanagermapid: string | null }, {  }>;
  versionnumber: WebAttribute<SystemUserManagerMap_Select, { versionnumber: number | null }, {  }>;
}
interface SystemUserManagerMap_Filter {
  hierarchylevel: number;
  parentsystemuserid: XQW.Guid;
  systemuserid: XQW.Guid;
  systemusermanagermapid: XQW.Guid;
  versionnumber: number;
}
interface SystemUserManagerMap_Expand {
}
interface SystemUserManagerMap_FormattedResult {
}
interface SystemUserManagerMap_Result extends SystemUserManagerMap_Base, SystemUserManagerMap_Relationships {
  "@odata.etag": string;
}
interface SystemUserManagerMap_RelatedOne {
}
interface SystemUserManagerMap_RelatedMany {
}
interface WebEntitiesRetrieve {
  systemusermanagermaps: WebMappingRetrieve<SystemUserManagerMap_Select,SystemUserManagerMap_Expand,SystemUserManagerMap_Filter,SystemUserManagerMap_Fixed,SystemUserManagerMap_Result,SystemUserManagerMap_FormattedResult>;
}
interface WebEntitiesRelated {
  systemusermanagermaps: WebMappingRelated<SystemUserManagerMap_RelatedOne,SystemUserManagerMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  systemusermanagermaps: WebMappingCUDA<SystemUserManagerMap_Create,SystemUserManagerMap_Update,SystemUserManagerMap_Select>;
}
