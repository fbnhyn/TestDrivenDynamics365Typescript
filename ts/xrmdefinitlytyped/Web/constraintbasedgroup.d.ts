interface ConstraintBasedGroup_Base extends WebEntity {
  constraintbasedgroupid?: string | null;
  constraints?: string | null;
  createdon?: Date | null;
  description?: string | null;
  grouptypecode?: constraintbasedgroup_grouptypecode | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ConstraintBasedGroup_Relationships {
  ConstraintBasedGroup_AsyncOperations?: AsyncOperation_Result[] | null;
  ConstraintBasedGroup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ConstraintBasedGroup_ProcessSessions?: ProcessSession_Result[] | null;
  business_map_constraint?: BusinessUnitMap_Result[] | null;
  businessunitid_businessunit?: BusinessUnit_Result | null;
  businessunitid_systemuser?: SystemUser_Result | null;
  constraint_based_group_resource_specs?: ResourceSpec_Result[] | null;
  constraintbasedgroup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  constraintbasedgroup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  constraintbasedgroup_SyncErrors?: SyncError_Result[] | null;
  constraintbasedgroup_connections1?: Connection_Result[] | null;
  constraintbasedgroup_connections2?: Connection_Result[] | null;
  constraintbasedgroup_resource_groups?: ResourceGroup_Result[] | null;
  constraintbasedgroup_virtualresourceg?: virtualresourcegroupresource_Result[] | null;
  userentityinstancedata_constraintbasedgroup?: UserEntityInstanceData_Result[] | null;
}
interface ConstraintBasedGroup extends ConstraintBasedGroup_Base, ConstraintBasedGroup_Relationships {
  businessunitid_businessunit_bind$businessunits?: string | null;
  businessunitid_systemuser_bind$systemusers?: string | null;
}
interface ConstraintBasedGroup_Create extends ConstraintBasedGroup {
}
interface ConstraintBasedGroup_Update extends ConstraintBasedGroup {
}
interface ConstraintBasedGroup_Select {
  businessunitid_guid: WebAttribute<ConstraintBasedGroup_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  constraintbasedgroupid: WebAttribute<ConstraintBasedGroup_Select, { constraintbasedgroupid: string | null }, {  }>;
  constraints: WebAttribute<ConstraintBasedGroup_Select, { constraints: string | null }, {  }>;
  createdby_guid: WebAttribute<ConstraintBasedGroup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ConstraintBasedGroup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ConstraintBasedGroup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<ConstraintBasedGroup_Select, { description: string | null }, {  }>;
  grouptypecode: WebAttribute<ConstraintBasedGroup_Select, { grouptypecode: constraintbasedgroup_grouptypecode | null }, { grouptypecode_formatted?: string }>;
  importsequencenumber: WebAttribute<ConstraintBasedGroup_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ConstraintBasedGroup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ConstraintBasedGroup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ConstraintBasedGroup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ConstraintBasedGroup_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<ConstraintBasedGroup_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ConstraintBasedGroup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ConstraintBasedGroup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ConstraintBasedGroup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ConstraintBasedGroup_Select, { versionnumber: number | null }, {  }>;
}
interface ConstraintBasedGroup_Filter {
  businessunitid_guid: XQW.Guid;
  constraintbasedgroupid: XQW.Guid;
  constraints: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  grouptypecode: constraintbasedgroup_grouptypecode;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ConstraintBasedGroup_Expand {
  ConstraintBasedGroup_AsyncOperations: WebExpand<ConstraintBasedGroup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ConstraintBasedGroup_AsyncOperations: AsyncOperation_Result[] }>;
  ConstraintBasedGroup_BulkDeleteFailures: WebExpand<ConstraintBasedGroup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ConstraintBasedGroup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ConstraintBasedGroup_ProcessSessions: WebExpand<ConstraintBasedGroup_Expand, ProcessSession_Select, ProcessSession_Filter, { ConstraintBasedGroup_ProcessSessions: ProcessSession_Result[] }>;
  business_map_constraint: WebExpand<ConstraintBasedGroup_Expand, BusinessUnitMap_Select, BusinessUnitMap_Filter, { business_map_constraint: BusinessUnitMap_Result[] }>;
  businessunitid_businessunit: WebExpand<ConstraintBasedGroup_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid_businessunit: BusinessUnit_Result }>;
  businessunitid_systemuser: WebExpand<ConstraintBasedGroup_Expand, SystemUser_Select, SystemUser_Filter, { businessunitid_systemuser: SystemUser_Result }>;
  constraint_based_group_resource_specs: WebExpand<ConstraintBasedGroup_Expand, ResourceSpec_Select, ResourceSpec_Filter, { constraint_based_group_resource_specs: ResourceSpec_Result[] }>;
  constraintbasedgroup_MailboxTrackingFolders: WebExpand<ConstraintBasedGroup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { constraintbasedgroup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  constraintbasedgroup_PrincipalObjectAttributeAccesses: WebExpand<ConstraintBasedGroup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { constraintbasedgroup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  constraintbasedgroup_SyncErrors: WebExpand<ConstraintBasedGroup_Expand, SyncError_Select, SyncError_Filter, { constraintbasedgroup_SyncErrors: SyncError_Result[] }>;
  constraintbasedgroup_connections1: WebExpand<ConstraintBasedGroup_Expand, Connection_Select, Connection_Filter, { constraintbasedgroup_connections1: Connection_Result[] }>;
  constraintbasedgroup_connections2: WebExpand<ConstraintBasedGroup_Expand, Connection_Select, Connection_Filter, { constraintbasedgroup_connections2: Connection_Result[] }>;
  constraintbasedgroup_resource_groups: WebExpand<ConstraintBasedGroup_Expand, ResourceGroup_Select, ResourceGroup_Filter, { constraintbasedgroup_resource_groups: ResourceGroup_Result[] }>;
  constraintbasedgroup_virtualresourceg: WebExpand<ConstraintBasedGroup_Expand, virtualresourcegroupresource_Select, virtualresourcegroupresource_Filter, { constraintbasedgroup_virtualresourceg: virtualresourcegroupresource_Result[] }>;
  createdby: WebExpand<ConstraintBasedGroup_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ConstraintBasedGroup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ConstraintBasedGroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ConstraintBasedGroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ConstraintBasedGroup_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_constraintbasedgroup: WebExpand<ConstraintBasedGroup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_constraintbasedgroup: UserEntityInstanceData_Result[] }>;
}
interface ConstraintBasedGroup_FormattedResult {
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  grouptypecode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
}
interface ConstraintBasedGroup_Result extends ConstraintBasedGroup_Base, ConstraintBasedGroup_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface ConstraintBasedGroup_RelatedOne {
  businessunitid_businessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  businessunitid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ConstraintBasedGroup_RelatedMany {
  ConstraintBasedGroup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ConstraintBasedGroup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ConstraintBasedGroup_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  business_map_constraint: WebMappingRetrieve<BusinessUnitMap_Select,BusinessUnitMap_Expand,BusinessUnitMap_Filter,BusinessUnitMap_Fixed,BusinessUnitMap_Result,BusinessUnitMap_FormattedResult>;
  constraint_based_group_resource_specs: WebMappingRetrieve<ResourceSpec_Select,ResourceSpec_Expand,ResourceSpec_Filter,ResourceSpec_Fixed,ResourceSpec_Result,ResourceSpec_FormattedResult>;
  constraintbasedgroup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  constraintbasedgroup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  constraintbasedgroup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  constraintbasedgroup_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  constraintbasedgroup_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  constraintbasedgroup_resource_groups: WebMappingRetrieve<ResourceGroup_Select,ResourceGroup_Expand,ResourceGroup_Filter,ResourceGroup_Fixed,ResourceGroup_Result,ResourceGroup_FormattedResult>;
  constraintbasedgroup_virtualresourceg: WebMappingRetrieve<virtualresourcegroupresource_Select,virtualresourcegroupresource_Expand,virtualresourcegroupresource_Filter,virtualresourcegroupresource_Fixed,virtualresourcegroupresource_Result,virtualresourcegroupresource_FormattedResult>;
  userentityinstancedata_constraintbasedgroup: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  constraintbasedgroups: WebMappingRetrieve<ConstraintBasedGroup_Select,ConstraintBasedGroup_Expand,ConstraintBasedGroup_Filter,ConstraintBasedGroup_Fixed,ConstraintBasedGroup_Result,ConstraintBasedGroup_FormattedResult>;
}
interface WebEntitiesRelated {
  constraintbasedgroups: WebMappingRelated<ConstraintBasedGroup_RelatedOne,ConstraintBasedGroup_RelatedMany>;
}
interface WebEntitiesCUDA {
  constraintbasedgroups: WebMappingCUDA<ConstraintBasedGroup_Create,ConstraintBasedGroup_Update,ConstraintBasedGroup_Select>;
}
