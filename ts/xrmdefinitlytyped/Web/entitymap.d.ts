interface EntityMap_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  entitymapid?: string | null;
  entitymapidunique?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  sourceentityname?: string | null;
  supportingsolutionid?: string | null;
  targetentityname?: string | null;
  versionnumber?: number | null;
}
interface EntityMap_Relationships {
  EntityMap_AsyncOperations?: AsyncOperation_Result[] | null;
  EntityMap_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  entity_map_attribute_maps?: AttributeMap_Result[] | null;
  userentityinstancedata_entitymap?: UserEntityInstanceData_Result[] | null;
}
interface EntityMap extends EntityMap_Base, EntityMap_Relationships {
}
interface EntityMap_Create extends EntityMap {
}
interface EntityMap_Update extends EntityMap {
}
interface EntityMap_Select {
  componentstate: WebAttribute<EntityMap_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<EntityMap_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<EntityMap_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<EntityMap_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entitymapid: WebAttribute<EntityMap_Select, { entitymapid: string | null }, {  }>;
  entitymapidunique: WebAttribute<EntityMap_Select, { entitymapidunique: string | null }, {  }>;
  ismanaged: WebAttribute<EntityMap_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<EntityMap_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<EntityMap_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<EntityMap_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<EntityMap_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<EntityMap_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<EntityMap_Select, { solutionid: string | null }, {  }>;
  sourceentityname: WebAttribute<EntityMap_Select, { sourceentityname: string | null }, {  }>;
  supportingsolutionid: WebAttribute<EntityMap_Select, { supportingsolutionid: string | null }, {  }>;
  targetentityname: WebAttribute<EntityMap_Select, { targetentityname: string | null }, {  }>;
  versionnumber: WebAttribute<EntityMap_Select, { versionnumber: number | null }, {  }>;
}
interface EntityMap_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entitymapid: XQW.Guid;
  entitymapidunique: XQW.Guid;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  sourceentityname: string;
  supportingsolutionid: XQW.Guid;
  targetentityname: string;
  versionnumber: number;
}
interface EntityMap_Expand {
  EntityMap_AsyncOperations: WebExpand<EntityMap_Expand, AsyncOperation_Select, AsyncOperation_Filter, { EntityMap_AsyncOperations: AsyncOperation_Result[] }>;
  EntityMap_BulkDeleteFailures: WebExpand<EntityMap_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { EntityMap_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  createdby: WebExpand<EntityMap_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<EntityMap_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entity_map_attribute_maps: WebExpand<EntityMap_Expand, AttributeMap_Select, AttributeMap_Filter, { entity_map_attribute_maps: AttributeMap_Result[] }>;
  modifiedby: WebExpand<EntityMap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<EntityMap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<EntityMap_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_entitymap: WebExpand<EntityMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_entitymap: UserEntityInstanceData_Result[] }>;
}
interface EntityMap_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
}
interface EntityMap_Result extends EntityMap_Base, EntityMap_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface EntityMap_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface EntityMap_RelatedMany {
  EntityMap_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  EntityMap_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  entity_map_attribute_maps: WebMappingRetrieve<AttributeMap_Select,AttributeMap_Expand,AttributeMap_Filter,AttributeMap_Fixed,AttributeMap_Result,AttributeMap_FormattedResult>;
  userentityinstancedata_entitymap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entitymaps: WebMappingRetrieve<EntityMap_Select,EntityMap_Expand,EntityMap_Filter,EntityMap_Fixed,EntityMap_Result,EntityMap_FormattedResult>;
}
interface WebEntitiesRelated {
  entitymaps: WebMappingRelated<EntityMap_RelatedOne,EntityMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  entitymaps: WebMappingCUDA<EntityMap_Create,EntityMap_Update,EntityMap_Select>;
}
