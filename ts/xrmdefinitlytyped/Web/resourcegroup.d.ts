interface ResourceGroup_Base extends WebEntity {
  grouptypecode?: resourcegroup_grouptypecode | null;
  importsequencenumber?: number | null;
  name?: string | null;
  objecttypecode?: string | null;
  overriddencreatedon?: Date | null;
  resourcegroupid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ResourceGroup_Relationships {
  ResourceGroup_AsyncOperations?: AsyncOperation_Result[] | null;
  ResourceGroup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ResourceGroup_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  ResourceGroup_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  ResourceGroup_SyncErrors?: SyncError_Result[] | null;
  resourcegroup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  resourcegroup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  resourcegroup_connections1?: Connection_Result[] | null;
  resourcegroup_connections2?: Connection_Result[] | null;
  resourcegroupid_constraintbasedgroup?: ConstraintBasedGroup_Result | null;
  resourcegroupid_team?: Team_Result | null;
  userentityinstancedata_resourcegroup?: UserEntityInstanceData_Result[] | null;
}
interface ResourceGroup extends ResourceGroup_Base, ResourceGroup_Relationships {
  businessunitid_bind$businessunits?: string | null;
}
interface ResourceGroup_Create extends ResourceGroup {
  resourcegroupid_constraintbasedgroup_bind$constraintbasedgroups?: string | null;
  resourcegroupid_team_bind$teams?: string | null;
}
interface ResourceGroup_Update extends ResourceGroup {
}
interface ResourceGroup_Select {
  businessunitid_guid: WebAttribute<ResourceGroup_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  grouptypecode: WebAttribute<ResourceGroup_Select, { grouptypecode: resourcegroup_grouptypecode | null }, { grouptypecode_formatted?: string }>;
  importsequencenumber: WebAttribute<ResourceGroup_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<ResourceGroup_Select, { name: string | null }, {  }>;
  objecttypecode: WebAttribute<ResourceGroup_Select, { objecttypecode: string | null }, {  }>;
  organizationid_guid: WebAttribute<ResourceGroup_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ResourceGroup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  resourcegroupid: WebAttribute<ResourceGroup_Select, { resourcegroupid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ResourceGroup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ResourceGroup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ResourceGroup_Select, { versionnumber: number | null }, {  }>;
}
interface ResourceGroup_Filter {
  businessunitid_guid: XQW.Guid;
  grouptypecode: resourcegroup_grouptypecode;
  importsequencenumber: number;
  name: string;
  objecttypecode: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  resourcegroupid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ResourceGroup_Expand {
  ResourceGroup_AsyncOperations: WebExpand<ResourceGroup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ResourceGroup_AsyncOperations: AsyncOperation_Result[] }>;
  ResourceGroup_BulkDeleteFailures: WebExpand<ResourceGroup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ResourceGroup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ResourceGroup_DuplicateBaseRecord: WebExpand<ResourceGroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { ResourceGroup_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  ResourceGroup_DuplicateMatchingRecord: WebExpand<ResourceGroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { ResourceGroup_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  ResourceGroup_SyncErrors: WebExpand<ResourceGroup_Expand, SyncError_Select, SyncError_Filter, { ResourceGroup_SyncErrors: SyncError_Result[] }>;
  businessunitid: WebExpand<ResourceGroup_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid: BusinessUnit_Result }>;
  organizationid: WebExpand<ResourceGroup_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  resourcegroup_MailboxTrackingFolders: WebExpand<ResourceGroup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { resourcegroup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  resourcegroup_PrincipalObjectAttributeAccesses: WebExpand<ResourceGroup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { resourcegroup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  resourcegroup_connections1: WebExpand<ResourceGroup_Expand, Connection_Select, Connection_Filter, { resourcegroup_connections1: Connection_Result[] }>;
  resourcegroup_connections2: WebExpand<ResourceGroup_Expand, Connection_Select, Connection_Filter, { resourcegroup_connections2: Connection_Result[] }>;
  resourcegroupid_constraintbasedgroup: WebExpand<ResourceGroup_Expand, ConstraintBasedGroup_Select, ConstraintBasedGroup_Filter, { resourcegroupid_constraintbasedgroup: ConstraintBasedGroup_Result }>;
  resourcegroupid_team: WebExpand<ResourceGroup_Expand, Team_Select, Team_Filter, { resourcegroupid_team: Team_Result }>;
  userentityinstancedata_resourcegroup: WebExpand<ResourceGroup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_resourcegroup: UserEntityInstanceData_Result[] }>;
}
interface ResourceGroup_FormattedResult {
  businessunitid_formatted?: string;
  grouptypecode_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
}
interface ResourceGroup_Result extends ResourceGroup_Base, ResourceGroup_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  organizationid_guid: string | null;
}
interface ResourceGroup_RelatedOne {
  businessunitid: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  resourcegroupid_constraintbasedgroup: WebMappingRetrieve<ConstraintBasedGroup_Select,ConstraintBasedGroup_Expand,ConstraintBasedGroup_Filter,ConstraintBasedGroup_Fixed,ConstraintBasedGroup_Result,ConstraintBasedGroup_FormattedResult>;
  resourcegroupid_team: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface ResourceGroup_RelatedMany {
  ResourceGroup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ResourceGroup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ResourceGroup_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  ResourceGroup_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  ResourceGroup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  resourcegroup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  resourcegroup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  resourcegroup_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  resourcegroup_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  userentityinstancedata_resourcegroup: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  resourcegroups: WebMappingRetrieve<ResourceGroup_Select,ResourceGroup_Expand,ResourceGroup_Filter,ResourceGroup_Fixed,ResourceGroup_Result,ResourceGroup_FormattedResult>;
}
interface WebEntitiesRelated {
  resourcegroups: WebMappingRelated<ResourceGroup_RelatedOne,ResourceGroup_RelatedMany>;
}
interface WebEntitiesCUDA {
  resourcegroups: WebMappingCUDA<ResourceGroup_Create,ResourceGroup_Update,ResourceGroup_Select>;
}
