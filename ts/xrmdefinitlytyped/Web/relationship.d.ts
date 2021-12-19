interface Relationship_Base extends WebEntity {
  componentstate?: componentstate | null;
  entitykeyid?: string | null;
  isrelationshipattributedenormalized?: boolean | null;
  name?: string | null;
  overwritetime?: Date | null;
  relationshipid?: string | null;
  solutionid?: string | null;
  versionnumber?: number | null;
}
interface Relationship_Relationships {
  relationship_relationshipattribute?: RelationshipAttribute_Result[] | null;
}
interface Relationship extends Relationship_Base, Relationship_Relationships {
}
interface Relationship_Create extends Relationship {
}
interface Relationship_Update extends Relationship {
}
interface Relationship_Select {
  componentstate: WebAttribute<Relationship_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  entitykeyid: WebAttribute<Relationship_Select, { entitykeyid: string | null }, {  }>;
  isrelationshipattributedenormalized: WebAttribute<Relationship_Select, { isrelationshipattributedenormalized: boolean | null }, {  }>;
  name: WebAttribute<Relationship_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<Relationship_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  relationshipid: WebAttribute<Relationship_Select, { relationshipid: string | null }, {  }>;
  solutionid: WebAttribute<Relationship_Select, { solutionid: string | null }, {  }>;
  versionnumber: WebAttribute<Relationship_Select, { versionnumber: number | null }, {  }>;
}
interface Relationship_Filter {
  componentstate: componentstate;
  entitykeyid: XQW.Guid;
  isrelationshipattributedenormalized: boolean;
  name: string;
  overwritetime: Date;
  relationshipid: XQW.Guid;
  solutionid: XQW.Guid;
  versionnumber: number;
}
interface Relationship_Expand {
  relationship_relationshipattribute: WebExpand<Relationship_Expand, RelationshipAttribute_Select, RelationshipAttribute_Filter, { relationship_relationshipattribute: RelationshipAttribute_Result[] }>;
}
interface Relationship_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface Relationship_Result extends Relationship_Base, Relationship_Relationships {
  "@odata.etag": string;
}
interface Relationship_RelatedOne {
}
interface Relationship_RelatedMany {
  relationship_relationshipattribute: WebMappingRetrieve<RelationshipAttribute_Select,RelationshipAttribute_Expand,RelationshipAttribute_Filter,RelationshipAttribute_Fixed,RelationshipAttribute_Result,RelationshipAttribute_FormattedResult>;
}
interface WebEntitiesRetrieve {
  relationships: WebMappingRetrieve<Relationship_Select,Relationship_Expand,Relationship_Filter,Relationship_Fixed,Relationship_Result,Relationship_FormattedResult>;
}
interface WebEntitiesRelated {
  relationships: WebMappingRelated<Relationship_RelatedOne,Relationship_RelatedMany>;
}
interface WebEntitiesCUDA {
  relationships: WebMappingCUDA<Relationship_Create,Relationship_Update,Relationship_Select>;
}
