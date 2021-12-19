interface EntityKey_Base extends WebEntity {
  componentstate?: componentstate | null;
  entitykeyid?: string | null;
  issecondarykey?: boolean | null;
  logicalname?: string | null;
  name?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
}
interface EntityKey_Relationships {
}
interface EntityKey extends EntityKey_Base, EntityKey_Relationships {
}
interface EntityKey_Create extends EntityKey {
}
interface EntityKey_Update extends EntityKey {
}
interface EntityKey_Select {
  componentstate: WebAttribute<EntityKey_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  entitykeyid: WebAttribute<EntityKey_Select, { entitykeyid: string | null }, {  }>;
  issecondarykey: WebAttribute<EntityKey_Select, { issecondarykey: boolean | null }, {  }>;
  logicalname: WebAttribute<EntityKey_Select, { logicalname: string | null }, {  }>;
  name: WebAttribute<EntityKey_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<EntityKey_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<EntityKey_Select, { solutionid: string | null }, {  }>;
}
interface EntityKey_Filter {
  componentstate: componentstate;
  entitykeyid: XQW.Guid;
  issecondarykey: boolean;
  logicalname: string;
  name: string;
  overwritetime: Date;
  solutionid: XQW.Guid;
}
interface EntityKey_Expand {
}
interface EntityKey_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface EntityKey_Result extends EntityKey_Base, EntityKey_Relationships {
  "@odata.etag": string;
}
interface EntityKey_RelatedOne {
}
interface EntityKey_RelatedMany {
}
interface WebEntitiesRetrieve {
  entitykeys: WebMappingRetrieve<EntityKey_Select,EntityKey_Expand,EntityKey_Filter,EntityKey_Fixed,EntityKey_Result,EntityKey_FormattedResult>;
}
interface WebEntitiesRelated {
  entitykeys: WebMappingRelated<EntityKey_RelatedOne,EntityKey_RelatedMany>;
}
interface WebEntitiesCUDA {
  entitykeys: WebMappingCUDA<EntityKey_Create,EntityKey_Update,EntityKey_Select>;
}
