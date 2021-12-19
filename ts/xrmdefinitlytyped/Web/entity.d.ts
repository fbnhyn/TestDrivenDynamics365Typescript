interface Entity_Base extends WebEntity {
  addresstablename?: string | null;
  basetablename?: string | null;
  collectionname?: string | null;
  componentstate?: componentstate | null;
  entityid?: string | null;
  entitysetname?: string | null;
  extensiontablename?: string | null;
  externalcollectionname?: string | null;
  externalname?: string | null;
  logicalcollectionname?: string | null;
  logicalname?: string | null;
  name?: string | null;
  originallocalizedcollectionname?: string | null;
  originallocalizedname?: string | null;
  overwritetime?: Date | null;
  parentcontrollingattributename?: string | null;
  physicalname?: string | null;
  reportviewname?: string | null;
  solutionid?: string | null;
  versionnumber?: number | null;
}
interface Entity_Relationships {
  CatalogAssignments?: CatalogAssignment_Result[] | null;
  entity_appaction_ContextEntity?: appaction_Result[] | null;
  entity_entityanalyticsconfig?: EntityAnalyticsConfig_Result[] | null;
  entity_serviceplanmapping?: ServicePlanMapping_Result[] | null;
  entity_solutioncomponentbatchconfiguration_PrimaryEntity?: solutioncomponentbatchconfiguration_Result[] | null;
  entity_solutioncomponentbatchconfiguration_RelatedEntity?: solutioncomponentbatchconfiguration_Result[] | null;
  entity_solutioncomponentconfiguration?: solutioncomponentconfiguration_Result[] | null;
  msdyn_entity_msdyn_contactsuggestionruleset_entitytype?: msdyn_contactsuggestionruleset_Result[] | null;
  msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype?: msdyn_entitylinkchatconfiguration_Result[] | null;
  virtualentitymetadata_extensionofrecordid?: VirtualEntityMetadata_Result[] | null;
}
interface Entity extends Entity_Base, Entity_Relationships {
}
interface Entity_Create extends Entity {
}
interface Entity_Update extends Entity {
}
interface Entity_Select {
  addresstablename: WebAttribute<Entity_Select, { addresstablename: string | null }, {  }>;
  basetablename: WebAttribute<Entity_Select, { basetablename: string | null }, {  }>;
  collectionname: WebAttribute<Entity_Select, { collectionname: string | null }, {  }>;
  componentstate: WebAttribute<Entity_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  entityid: WebAttribute<Entity_Select, { entityid: string | null }, {  }>;
  entitysetname: WebAttribute<Entity_Select, { entitysetname: string | null }, {  }>;
  extensiontablename: WebAttribute<Entity_Select, { extensiontablename: string | null }, {  }>;
  externalcollectionname: WebAttribute<Entity_Select, { externalcollectionname: string | null }, {  }>;
  externalname: WebAttribute<Entity_Select, { externalname: string | null }, {  }>;
  logicalcollectionname: WebAttribute<Entity_Select, { logicalcollectionname: string | null }, {  }>;
  logicalname: WebAttribute<Entity_Select, { logicalname: string | null }, {  }>;
  name: WebAttribute<Entity_Select, { name: string | null }, {  }>;
  originallocalizedcollectionname: WebAttribute<Entity_Select, { originallocalizedcollectionname: string | null }, {  }>;
  originallocalizedname: WebAttribute<Entity_Select, { originallocalizedname: string | null }, {  }>;
  overwritetime: WebAttribute<Entity_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parentcontrollingattributename: WebAttribute<Entity_Select, { parentcontrollingattributename: string | null }, {  }>;
  physicalname: WebAttribute<Entity_Select, { physicalname: string | null }, {  }>;
  reportviewname: WebAttribute<Entity_Select, { reportviewname: string | null }, {  }>;
  solutionid: WebAttribute<Entity_Select, { solutionid: string | null }, {  }>;
  versionnumber: WebAttribute<Entity_Select, { versionnumber: number | null }, {  }>;
}
interface Entity_Filter {
  addresstablename: string;
  basetablename: string;
  collectionname: string;
  componentstate: componentstate;
  entityid: XQW.Guid;
  entitysetname: string;
  extensiontablename: string;
  externalcollectionname: string;
  externalname: string;
  logicalcollectionname: string;
  logicalname: string;
  name: string;
  originallocalizedcollectionname: string;
  originallocalizedname: string;
  overwritetime: Date;
  parentcontrollingattributename: string;
  physicalname: string;
  reportviewname: string;
  solutionid: XQW.Guid;
  versionnumber: number;
}
interface Entity_Expand {
  CatalogAssignments: WebExpand<Entity_Expand, CatalogAssignment_Select, CatalogAssignment_Filter, { CatalogAssignments: CatalogAssignment_Result[] }>;
  entity_appaction_ContextEntity: WebExpand<Entity_Expand, appaction_Select, appaction_Filter, { entity_appaction_ContextEntity: appaction_Result[] }>;
  entity_entityanalyticsconfig: WebExpand<Entity_Expand, EntityAnalyticsConfig_Select, EntityAnalyticsConfig_Filter, { entity_entityanalyticsconfig: EntityAnalyticsConfig_Result[] }>;
  entity_serviceplanmapping: WebExpand<Entity_Expand, ServicePlanMapping_Select, ServicePlanMapping_Filter, { entity_serviceplanmapping: ServicePlanMapping_Result[] }>;
  entity_solutioncomponentbatchconfiguration_PrimaryEntity: WebExpand<Entity_Expand, solutioncomponentbatchconfiguration_Select, solutioncomponentbatchconfiguration_Filter, { entity_solutioncomponentbatchconfiguration_PrimaryEntity: solutioncomponentbatchconfiguration_Result[] }>;
  entity_solutioncomponentbatchconfiguration_RelatedEntity: WebExpand<Entity_Expand, solutioncomponentbatchconfiguration_Select, solutioncomponentbatchconfiguration_Filter, { entity_solutioncomponentbatchconfiguration_RelatedEntity: solutioncomponentbatchconfiguration_Result[] }>;
  entity_solutioncomponentconfiguration: WebExpand<Entity_Expand, solutioncomponentconfiguration_Select, solutioncomponentconfiguration_Filter, { entity_solutioncomponentconfiguration: solutioncomponentconfiguration_Result[] }>;
  msdyn_entity_msdyn_contactsuggestionruleset_entitytype: WebExpand<Entity_Expand, msdyn_contactsuggestionruleset_Select, msdyn_contactsuggestionruleset_Filter, { msdyn_entity_msdyn_contactsuggestionruleset_entitytype: msdyn_contactsuggestionruleset_Result[] }>;
  msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype: WebExpand<Entity_Expand, msdyn_entitylinkchatconfiguration_Select, msdyn_entitylinkchatconfiguration_Filter, { msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype: msdyn_entitylinkchatconfiguration_Result[] }>;
  virtualentitymetadata_extensionofrecordid: WebExpand<Entity_Expand, VirtualEntityMetadata_Select, VirtualEntityMetadata_Filter, { virtualentitymetadata_extensionofrecordid: VirtualEntityMetadata_Result[] }>;
}
interface Entity_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface Entity_Result extends Entity_Base, Entity_Relationships {
  "@odata.etag": string;
}
interface Entity_RelatedOne {
}
interface Entity_RelatedMany {
  CatalogAssignments: WebMappingRetrieve<CatalogAssignment_Select,CatalogAssignment_Expand,CatalogAssignment_Filter,CatalogAssignment_Fixed,CatalogAssignment_Result,CatalogAssignment_FormattedResult>;
  entity_appaction_ContextEntity: WebMappingRetrieve<appaction_Select,appaction_Expand,appaction_Filter,appaction_Fixed,appaction_Result,appaction_FormattedResult>;
  entity_entityanalyticsconfig: WebMappingRetrieve<EntityAnalyticsConfig_Select,EntityAnalyticsConfig_Expand,EntityAnalyticsConfig_Filter,EntityAnalyticsConfig_Fixed,EntityAnalyticsConfig_Result,EntityAnalyticsConfig_FormattedResult>;
  entity_serviceplanmapping: WebMappingRetrieve<ServicePlanMapping_Select,ServicePlanMapping_Expand,ServicePlanMapping_Filter,ServicePlanMapping_Fixed,ServicePlanMapping_Result,ServicePlanMapping_FormattedResult>;
  entity_solutioncomponentbatchconfiguration_PrimaryEntity: WebMappingRetrieve<solutioncomponentbatchconfiguration_Select,solutioncomponentbatchconfiguration_Expand,solutioncomponentbatchconfiguration_Filter,solutioncomponentbatchconfiguration_Fixed,solutioncomponentbatchconfiguration_Result,solutioncomponentbatchconfiguration_FormattedResult>;
  entity_solutioncomponentbatchconfiguration_RelatedEntity: WebMappingRetrieve<solutioncomponentbatchconfiguration_Select,solutioncomponentbatchconfiguration_Expand,solutioncomponentbatchconfiguration_Filter,solutioncomponentbatchconfiguration_Fixed,solutioncomponentbatchconfiguration_Result,solutioncomponentbatchconfiguration_FormattedResult>;
  entity_solutioncomponentconfiguration: WebMappingRetrieve<solutioncomponentconfiguration_Select,solutioncomponentconfiguration_Expand,solutioncomponentconfiguration_Filter,solutioncomponentconfiguration_Fixed,solutioncomponentconfiguration_Result,solutioncomponentconfiguration_FormattedResult>;
  msdyn_entity_msdyn_contactsuggestionruleset_entitytype: WebMappingRetrieve<msdyn_contactsuggestionruleset_Select,msdyn_contactsuggestionruleset_Expand,msdyn_contactsuggestionruleset_Filter,msdyn_contactsuggestionruleset_Fixed,msdyn_contactsuggestionruleset_Result,msdyn_contactsuggestionruleset_FormattedResult>;
  msdyn_entity_msdyn_entitylinkchatconfiguration_entitytype: WebMappingRetrieve<msdyn_entitylinkchatconfiguration_Select,msdyn_entitylinkchatconfiguration_Expand,msdyn_entitylinkchatconfiguration_Filter,msdyn_entitylinkchatconfiguration_Fixed,msdyn_entitylinkchatconfiguration_Result,msdyn_entitylinkchatconfiguration_FormattedResult>;
  virtualentitymetadata_extensionofrecordid: WebMappingRetrieve<VirtualEntityMetadata_Select,VirtualEntityMetadata_Expand,VirtualEntityMetadata_Filter,VirtualEntityMetadata_Fixed,VirtualEntityMetadata_Result,VirtualEntityMetadata_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entities: WebMappingRetrieve<Entity_Select,Entity_Expand,Entity_Filter,Entity_Fixed,Entity_Result,Entity_FormattedResult>;
}
interface WebEntitiesRelated {
  entities: WebMappingRelated<Entity_RelatedOne,Entity_RelatedMany>;
}
interface WebEntitiesCUDA {
  entities: WebMappingCUDA<Entity_Create,Entity_Update,Entity_Select>;
}
