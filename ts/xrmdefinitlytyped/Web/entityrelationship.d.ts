interface EntityRelationship_Base extends WebEntity {
  componentstate?: componentstate | null;
  entityrelationshipid?: string | null;
  overwritetime?: Date | null;
  schemaname?: string | null;
  solutionid?: string | null;
}
interface EntityRelationship_Relationships {
  entityrelationship_config?: solutioncomponentrelationshipconfiguration_Result[] | null;
}
interface EntityRelationship extends EntityRelationship_Base, EntityRelationship_Relationships {
}
interface EntityRelationship_Create extends EntityRelationship {
}
interface EntityRelationship_Update extends EntityRelationship {
}
interface EntityRelationship_Select {
  componentstate: WebAttribute<EntityRelationship_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  entityrelationshipid: WebAttribute<EntityRelationship_Select, { entityrelationshipid: string | null }, {  }>;
  overwritetime: WebAttribute<EntityRelationship_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  schemaname: WebAttribute<EntityRelationship_Select, { schemaname: string | null }, {  }>;
  solutionid: WebAttribute<EntityRelationship_Select, { solutionid: string | null }, {  }>;
}
interface EntityRelationship_Filter {
  componentstate: componentstate;
  entityrelationshipid: XQW.Guid;
  overwritetime: Date;
  schemaname: string;
  solutionid: XQW.Guid;
}
interface EntityRelationship_Expand {
  entityrelationship_config: WebExpand<EntityRelationship_Expand, solutioncomponentrelationshipconfiguration_Select, solutioncomponentrelationshipconfiguration_Filter, { entityrelationship_config: solutioncomponentrelationshipconfiguration_Result[] }>;
}
interface EntityRelationship_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface EntityRelationship_Result extends EntityRelationship_Base, EntityRelationship_Relationships {
  "@odata.etag": string;
}
interface EntityRelationship_RelatedOne {
}
interface EntityRelationship_RelatedMany {
  entityrelationship_config: WebMappingRetrieve<solutioncomponentrelationshipconfiguration_Select,solutioncomponentrelationshipconfiguration_Expand,solutioncomponentrelationshipconfiguration_Filter,solutioncomponentrelationshipconfiguration_Fixed,solutioncomponentrelationshipconfiguration_Result,solutioncomponentrelationshipconfiguration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entityrelationships: WebMappingRetrieve<EntityRelationship_Select,EntityRelationship_Expand,EntityRelationship_Filter,EntityRelationship_Fixed,EntityRelationship_Result,EntityRelationship_FormattedResult>;
}
interface WebEntitiesRelated {
  entityrelationships: WebMappingRelated<EntityRelationship_RelatedOne,EntityRelationship_RelatedMany>;
}
interface WebEntitiesCUDA {
  entityrelationships: WebMappingCUDA<EntityRelationship_Create,EntityRelationship_Update,EntityRelationship_Select>;
}
