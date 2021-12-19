interface RelationshipRoleMap_Base extends WebEntity {
  associateobjecttypecode?: string | null;
  createdon?: Date | null;
  modifiedon?: Date | null;
  organizationid?: string | null;
  primaryobjecttypecode?: string | null;
  relationshiprolemapid?: string | null;
  versionnumber?: number | null;
}
interface RelationshipRoleMap_Relationships {
  RelationshipRoleMap_AsyncOperations?: AsyncOperation_Result[] | null;
  RelationshipRoleMap_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  userentityinstancedata_relationshiprolemap?: UserEntityInstanceData_Result[] | null;
}
interface RelationshipRoleMap extends RelationshipRoleMap_Base, RelationshipRoleMap_Relationships {
  relationshiproleid_bind$relationshiproles?: string | null;
}
interface RelationshipRoleMap_Create extends RelationshipRoleMap {
}
interface RelationshipRoleMap_Update extends RelationshipRoleMap {
}
interface RelationshipRoleMap_Select {
  associateobjecttypecode: WebAttribute<RelationshipRoleMap_Select, { associateobjecttypecode: string | null }, {  }>;
  createdby_guid: WebAttribute<RelationshipRoleMap_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<RelationshipRoleMap_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<RelationshipRoleMap_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  modifiedby_guid: WebAttribute<RelationshipRoleMap_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<RelationshipRoleMap_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<RelationshipRoleMap_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid: WebAttribute<RelationshipRoleMap_Select, { organizationid: string | null }, {  }>;
  primaryobjecttypecode: WebAttribute<RelationshipRoleMap_Select, { primaryobjecttypecode: string | null }, {  }>;
  relationshiproleid_guid: WebAttribute<RelationshipRoleMap_Select, { relationshiproleid_guid: string | null }, { relationshiproleid_formatted?: string }>;
  relationshiprolemapid: WebAttribute<RelationshipRoleMap_Select, { relationshiprolemapid: string | null }, {  }>;
  versionnumber: WebAttribute<RelationshipRoleMap_Select, { versionnumber: number | null }, {  }>;
}
interface RelationshipRoleMap_Filter {
  associateobjecttypecode: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid: XQW.Guid;
  primaryobjecttypecode: string;
  relationshiproleid_guid: XQW.Guid;
  relationshiprolemapid: XQW.Guid;
  versionnumber: number;
}
interface RelationshipRoleMap_Expand {
  RelationshipRoleMap_AsyncOperations: WebExpand<RelationshipRoleMap_Expand, AsyncOperation_Select, AsyncOperation_Filter, { RelationshipRoleMap_AsyncOperations: AsyncOperation_Result[] }>;
  RelationshipRoleMap_BulkDeleteFailures: WebExpand<RelationshipRoleMap_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { RelationshipRoleMap_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  createdby: WebExpand<RelationshipRoleMap_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<RelationshipRoleMap_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<RelationshipRoleMap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<RelationshipRoleMap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  relationshiproleid: WebExpand<RelationshipRoleMap_Expand, RelationshipRole_Select, RelationshipRole_Filter, { relationshiproleid: RelationshipRole_Result }>;
  userentityinstancedata_relationshiprolemap: WebExpand<RelationshipRoleMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_relationshiprolemap: UserEntityInstanceData_Result[] }>;
}
interface RelationshipRoleMap_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  relationshiproleid_formatted?: string;
}
interface RelationshipRoleMap_Result extends RelationshipRoleMap_Base, RelationshipRoleMap_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  relationshiproleid_guid: string | null;
}
interface RelationshipRoleMap_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  relationshiproleid: WebMappingRetrieve<RelationshipRole_Select,RelationshipRole_Expand,RelationshipRole_Filter,RelationshipRole_Fixed,RelationshipRole_Result,RelationshipRole_FormattedResult>;
}
interface RelationshipRoleMap_RelatedMany {
  RelationshipRoleMap_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  RelationshipRoleMap_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  userentityinstancedata_relationshiprolemap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  relationshiprolemaps: WebMappingRetrieve<RelationshipRoleMap_Select,RelationshipRoleMap_Expand,RelationshipRoleMap_Filter,RelationshipRoleMap_Fixed,RelationshipRoleMap_Result,RelationshipRoleMap_FormattedResult>;
}
interface WebEntitiesRelated {
  relationshiprolemaps: WebMappingRelated<RelationshipRoleMap_RelatedOne,RelationshipRoleMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  relationshiprolemaps: WebMappingCUDA<RelationshipRoleMap_Create,RelationshipRoleMap_Update,RelationshipRoleMap_Select>;
}
