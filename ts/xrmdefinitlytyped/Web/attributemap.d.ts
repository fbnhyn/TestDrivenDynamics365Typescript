interface AttributeMap_Base extends WebEntity {
  attributemapid?: string | null;
  attributemapidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  ismanaged?: boolean | null;
  issystem?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  sourceattributename?: string | null;
  supportingsolutionid?: string | null;
  targetattributename?: string | null;
  versionnumber?: number | null;
}
interface AttributeMap_Relationships {
  AttributeMap_AsyncOperations?: AsyncOperation_Result[] | null;
  AttributeMap_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  attribute_map_attribute_maps?: AttributeMap_Result[] | null;
  userentityinstancedata_attributemap?: UserEntityInstanceData_Result[] | null;
}
interface AttributeMap extends AttributeMap_Base, AttributeMap_Relationships {
}
interface AttributeMap_Create extends AttributeMap {
  entitymapid_bind$entitymaps?: string | null;
  parentattributemapid_bind$attributemaps?: string | null;
}
interface AttributeMap_Update extends AttributeMap {
}
interface AttributeMap_Select {
  attributemapid: WebAttribute<AttributeMap_Select, { attributemapid: string | null }, {  }>;
  attributemapidunique: WebAttribute<AttributeMap_Select, { attributemapidunique: string | null }, {  }>;
  componentstate: WebAttribute<AttributeMap_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<AttributeMap_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AttributeMap_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AttributeMap_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entitymapid_guid: WebAttribute<AttributeMap_Select, { entitymapid_guid: string | null }, { entitymapid_formatted?: string }>;
  ismanaged: WebAttribute<AttributeMap_Select, { ismanaged: boolean | null }, {  }>;
  issystem: WebAttribute<AttributeMap_Select, { issystem: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<AttributeMap_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AttributeMap_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AttributeMap_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<AttributeMap_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<AttributeMap_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parentattributemapid_guid: WebAttribute<AttributeMap_Select, { parentattributemapid_guid: string | null }, { parentattributemapid_formatted?: string }>;
  solutionid: WebAttribute<AttributeMap_Select, { solutionid: string | null }, {  }>;
  sourceattributename: WebAttribute<AttributeMap_Select, { sourceattributename: string | null }, {  }>;
  supportingsolutionid: WebAttribute<AttributeMap_Select, { supportingsolutionid: string | null }, {  }>;
  targetattributename: WebAttribute<AttributeMap_Select, { targetattributename: string | null }, {  }>;
  versionnumber: WebAttribute<AttributeMap_Select, { versionnumber: number | null }, {  }>;
}
interface AttributeMap_Filter {
  attributemapid: XQW.Guid;
  attributemapidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entitymapid_guid: XQW.Guid;
  ismanaged: boolean;
  issystem: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  parentattributemapid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  sourceattributename: string;
  supportingsolutionid: XQW.Guid;
  targetattributename: string;
  versionnumber: number;
}
interface AttributeMap_Expand {
  AttributeMap_AsyncOperations: WebExpand<AttributeMap_Expand, AsyncOperation_Select, AsyncOperation_Filter, { AttributeMap_AsyncOperations: AsyncOperation_Result[] }>;
  AttributeMap_BulkDeleteFailures: WebExpand<AttributeMap_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { AttributeMap_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  attribute_map_attribute_maps: WebExpand<AttributeMap_Expand, AttributeMap_Select, AttributeMap_Filter, { attribute_map_attribute_maps: AttributeMap_Result[] }>;
  createdby: WebExpand<AttributeMap_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<AttributeMap_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entitymapid: WebExpand<AttributeMap_Expand, EntityMap_Select, EntityMap_Filter, { entitymapid: EntityMap_Result }>;
  modifiedby: WebExpand<AttributeMap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<AttributeMap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<AttributeMap_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  parentattributemapid: WebExpand<AttributeMap_Expand, AttributeMap_Select, AttributeMap_Filter, { parentattributemapid: AttributeMap_Result }>;
  userentityinstancedata_attributemap: WebExpand<AttributeMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_attributemap: UserEntityInstanceData_Result[] }>;
}
interface AttributeMap_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  entitymapid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  parentattributemapid_formatted?: string;
}
interface AttributeMap_Result extends AttributeMap_Base, AttributeMap_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  entitymapid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  parentattributemapid_guid: string | null;
}
interface AttributeMap_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  entitymapid: WebMappingRetrieve<EntityMap_Select,EntityMap_Expand,EntityMap_Filter,EntityMap_Fixed,EntityMap_Result,EntityMap_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  parentattributemapid: WebMappingRetrieve<AttributeMap_Select,AttributeMap_Expand,AttributeMap_Filter,AttributeMap_Fixed,AttributeMap_Result,AttributeMap_FormattedResult>;
}
interface AttributeMap_RelatedMany {
  AttributeMap_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  AttributeMap_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  attribute_map_attribute_maps: WebMappingRetrieve<AttributeMap_Select,AttributeMap_Expand,AttributeMap_Filter,AttributeMap_Fixed,AttributeMap_Result,AttributeMap_FormattedResult>;
  userentityinstancedata_attributemap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  attributemaps: WebMappingRetrieve<AttributeMap_Select,AttributeMap_Expand,AttributeMap_Filter,AttributeMap_Fixed,AttributeMap_Result,AttributeMap_FormattedResult>;
}
interface WebEntitiesRelated {
  attributemaps: WebMappingRelated<AttributeMap_RelatedOne,AttributeMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  attributemaps: WebMappingCUDA<AttributeMap_Create,AttributeMap_Update,AttributeMap_Select>;
}
