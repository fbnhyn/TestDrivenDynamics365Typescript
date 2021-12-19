interface Attribute_Base extends WebEntity {
  attributeid?: string | null;
  attributeof?: string | null;
  attributetypeid?: string | null;
  componentstate?: componentstate | null;
  externalname?: string | null;
  logicalname?: string | null;
  managedpropertylogicalname?: string | null;
  managedpropertyparentattributename?: string | null;
  name?: string | null;
  overwritetime?: Date | null;
  physicalname?: string | null;
  solutionid?: string | null;
  tablecolumnname?: string | null;
  validforreadapi?: boolean | null;
  versionnumber?: number | null;
}
interface Attribute_Relationships {
  attribute_solutioncomponentattrconfig?: solutioncomponentattributeconfiguration_Result[] | null;
  referencedattribute_relationshipattribute?: RelationshipAttribute_Result[] | null;
  referencingdattribute_relationshipattribute?: RelationshipAttribute_Result[] | null;
}
interface Attribute extends Attribute_Base, Attribute_Relationships {
}
interface Attribute_Create extends Attribute {
}
interface Attribute_Update extends Attribute {
}
interface Attribute_Select {
  attributeid: WebAttribute<Attribute_Select, { attributeid: string | null }, {  }>;
  attributeof: WebAttribute<Attribute_Select, { attributeof: string | null }, {  }>;
  attributetypeid: WebAttribute<Attribute_Select, { attributetypeid: string | null }, {  }>;
  componentstate: WebAttribute<Attribute_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  externalname: WebAttribute<Attribute_Select, { externalname: string | null }, {  }>;
  logicalname: WebAttribute<Attribute_Select, { logicalname: string | null }, {  }>;
  managedpropertylogicalname: WebAttribute<Attribute_Select, { managedpropertylogicalname: string | null }, {  }>;
  managedpropertyparentattributename: WebAttribute<Attribute_Select, { managedpropertyparentattributename: string | null }, {  }>;
  name: WebAttribute<Attribute_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<Attribute_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  physicalname: WebAttribute<Attribute_Select, { physicalname: string | null }, {  }>;
  solutionid: WebAttribute<Attribute_Select, { solutionid: string | null }, {  }>;
  tablecolumnname: WebAttribute<Attribute_Select, { tablecolumnname: string | null }, {  }>;
  validforreadapi: WebAttribute<Attribute_Select, { validforreadapi: boolean | null }, {  }>;
  versionnumber: WebAttribute<Attribute_Select, { versionnumber: number | null }, {  }>;
}
interface Attribute_Filter {
  attributeid: XQW.Guid;
  attributeof: XQW.Guid;
  attributetypeid: XQW.Guid;
  componentstate: componentstate;
  externalname: string;
  logicalname: string;
  managedpropertylogicalname: string;
  managedpropertyparentattributename: string;
  name: string;
  overwritetime: Date;
  physicalname: string;
  solutionid: XQW.Guid;
  tablecolumnname: string;
  validforreadapi: boolean;
  versionnumber: number;
}
interface Attribute_Expand {
  attribute_solutioncomponentattrconfig: WebExpand<Attribute_Expand, solutioncomponentattributeconfiguration_Select, solutioncomponentattributeconfiguration_Filter, { attribute_solutioncomponentattrconfig: solutioncomponentattributeconfiguration_Result[] }>;
  referencedattribute_relationshipattribute: WebExpand<Attribute_Expand, RelationshipAttribute_Select, RelationshipAttribute_Filter, { referencedattribute_relationshipattribute: RelationshipAttribute_Result[] }>;
  referencingdattribute_relationshipattribute: WebExpand<Attribute_Expand, RelationshipAttribute_Select, RelationshipAttribute_Filter, { referencingdattribute_relationshipattribute: RelationshipAttribute_Result[] }>;
}
interface Attribute_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface Attribute_Result extends Attribute_Base, Attribute_Relationships {
  "@odata.etag": string;
}
interface Attribute_RelatedOne {
}
interface Attribute_RelatedMany {
  attribute_solutioncomponentattrconfig: WebMappingRetrieve<solutioncomponentattributeconfiguration_Select,solutioncomponentattributeconfiguration_Expand,solutioncomponentattributeconfiguration_Filter,solutioncomponentattributeconfiguration_Fixed,solutioncomponentattributeconfiguration_Result,solutioncomponentattributeconfiguration_FormattedResult>;
  referencedattribute_relationshipattribute: WebMappingRetrieve<RelationshipAttribute_Select,RelationshipAttribute_Expand,RelationshipAttribute_Filter,RelationshipAttribute_Fixed,RelationshipAttribute_Result,RelationshipAttribute_FormattedResult>;
  referencingdattribute_relationshipattribute: WebMappingRetrieve<RelationshipAttribute_Select,RelationshipAttribute_Expand,RelationshipAttribute_Filter,RelationshipAttribute_Fixed,RelationshipAttribute_Result,RelationshipAttribute_FormattedResult>;
}
interface WebEntitiesRetrieve {
  attributes: WebMappingRetrieve<Attribute_Select,Attribute_Expand,Attribute_Filter,Attribute_Fixed,Attribute_Result,Attribute_FormattedResult>;
}
interface WebEntitiesRelated {
  attributes: WebMappingRelated<Attribute_RelatedOne,Attribute_RelatedMany>;
}
interface WebEntitiesCUDA {
  attributes: WebMappingCUDA<Attribute_Create,Attribute_Update,Attribute_Select>;
}
