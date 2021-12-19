interface RelationshipRole_Base extends WebEntity {
  createdon?: Date | null;
  description?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  relationshiproleid?: string | null;
  statecode?: relationshiprole_statecode | null;
  statuscode?: relationshiprole_statuscode | null;
  versionnumber?: number | null;
}
interface RelationshipRole_Relationships {
  RelationshipRole_AsyncOperations?: AsyncOperation_Result[] | null;
  RelationshipRole_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  RelationshipRole_ProcessSessions?: ProcessSession_Result[] | null;
  relationship_role_customer_opportunity_roles?: CustomerOpportunityRole_Result[] | null;
  relationship_role_customer_role?: CustomerRelationship_Result[] | null;
  relationship_role_partner_role?: CustomerRelationship_Result[] | null;
  relationship_role_relationship_role_map?: RelationshipRoleMap_Result[] | null;
  userentityinstancedata_relationshiprole?: UserEntityInstanceData_Result[] | null;
}
interface RelationshipRole extends RelationshipRole_Base, RelationshipRole_Relationships {
}
interface RelationshipRole_Create extends RelationshipRole {
}
interface RelationshipRole_Update extends RelationshipRole {
}
interface RelationshipRole_Select {
  createdby_guid: WebAttribute<RelationshipRole_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<RelationshipRole_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<RelationshipRole_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<RelationshipRole_Select, { description: string | null }, {  }>;
  importsequencenumber: WebAttribute<RelationshipRole_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<RelationshipRole_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<RelationshipRole_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<RelationshipRole_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<RelationshipRole_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<RelationshipRole_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  relationshiproleid: WebAttribute<RelationshipRole_Select, { relationshiproleid: string | null }, {  }>;
  statecode: WebAttribute<RelationshipRole_Select, { statecode: relationshiprole_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<RelationshipRole_Select, { statuscode: relationshiprole_statuscode | null }, { statuscode_formatted?: string }>;
  versionnumber: WebAttribute<RelationshipRole_Select, { versionnumber: number | null }, {  }>;
}
interface RelationshipRole_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  relationshiproleid: XQW.Guid;
  statecode: relationshiprole_statecode;
  statuscode: relationshiprole_statuscode;
  versionnumber: number;
}
interface RelationshipRole_Expand {
  RelationshipRole_AsyncOperations: WebExpand<RelationshipRole_Expand, AsyncOperation_Select, AsyncOperation_Filter, { RelationshipRole_AsyncOperations: AsyncOperation_Result[] }>;
  RelationshipRole_BulkDeleteFailures: WebExpand<RelationshipRole_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { RelationshipRole_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  RelationshipRole_ProcessSessions: WebExpand<RelationshipRole_Expand, ProcessSession_Select, ProcessSession_Filter, { RelationshipRole_ProcessSessions: ProcessSession_Result[] }>;
  createdby: WebExpand<RelationshipRole_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<RelationshipRole_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<RelationshipRole_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<RelationshipRole_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<RelationshipRole_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  relationship_role_customer_opportunity_roles: WebExpand<RelationshipRole_Expand, CustomerOpportunityRole_Select, CustomerOpportunityRole_Filter, { relationship_role_customer_opportunity_roles: CustomerOpportunityRole_Result[] }>;
  relationship_role_customer_role: WebExpand<RelationshipRole_Expand, CustomerRelationship_Select, CustomerRelationship_Filter, { relationship_role_customer_role: CustomerRelationship_Result[] }>;
  relationship_role_partner_role: WebExpand<RelationshipRole_Expand, CustomerRelationship_Select, CustomerRelationship_Filter, { relationship_role_partner_role: CustomerRelationship_Result[] }>;
  relationship_role_relationship_role_map: WebExpand<RelationshipRole_Expand, RelationshipRoleMap_Select, RelationshipRoleMap_Filter, { relationship_role_relationship_role_map: RelationshipRoleMap_Result[] }>;
  userentityinstancedata_relationshiprole: WebExpand<RelationshipRole_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_relationshiprole: UserEntityInstanceData_Result[] }>;
}
interface RelationshipRole_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface RelationshipRole_Result extends RelationshipRole_Base, RelationshipRole_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface RelationshipRole_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface RelationshipRole_RelatedMany {
  RelationshipRole_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  RelationshipRole_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  RelationshipRole_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  relationship_role_customer_opportunity_roles: WebMappingRetrieve<CustomerOpportunityRole_Select,CustomerOpportunityRole_Expand,CustomerOpportunityRole_Filter,CustomerOpportunityRole_Fixed,CustomerOpportunityRole_Result,CustomerOpportunityRole_FormattedResult>;
  relationship_role_customer_role: WebMappingRetrieve<CustomerRelationship_Select,CustomerRelationship_Expand,CustomerRelationship_Filter,CustomerRelationship_Fixed,CustomerRelationship_Result,CustomerRelationship_FormattedResult>;
  relationship_role_partner_role: WebMappingRetrieve<CustomerRelationship_Select,CustomerRelationship_Expand,CustomerRelationship_Filter,CustomerRelationship_Fixed,CustomerRelationship_Result,CustomerRelationship_FormattedResult>;
  relationship_role_relationship_role_map: WebMappingRetrieve<RelationshipRoleMap_Select,RelationshipRoleMap_Expand,RelationshipRoleMap_Filter,RelationshipRoleMap_Fixed,RelationshipRoleMap_Result,RelationshipRoleMap_FormattedResult>;
  userentityinstancedata_relationshiprole: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  relationshiproles: WebMappingRetrieve<RelationshipRole_Select,RelationshipRole_Expand,RelationshipRole_Filter,RelationshipRole_Fixed,RelationshipRole_Result,RelationshipRole_FormattedResult>;
}
interface WebEntitiesRelated {
  relationshiproles: WebMappingRelated<RelationshipRole_RelatedOne,RelationshipRole_RelatedMany>;
}
interface WebEntitiesCUDA {
  relationshiproles: WebMappingCUDA<RelationshipRole_Create,RelationshipRole_Update,RelationshipRole_Select>;
}
