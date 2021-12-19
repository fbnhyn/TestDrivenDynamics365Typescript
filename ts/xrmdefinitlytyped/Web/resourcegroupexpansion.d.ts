interface ResourceGroupExpansion_Base extends WebEntity {
  importsequencenumber?: number | null;
  itemid?: string | null;
  methodcode?: resourcegroupexpansion_methodcode | null;
  modifiedon?: Date | null;
  name?: string | null;
  objectid?: string | null;
  overriddencreatedon?: Date | null;
  resourcegroupexpansionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ResourceGroupExpansion_Relationships {
  ResourceGroupExpansion_SyncErrors?: SyncError_Result[] | null;
  resourcegroupexpansion_AsyncOperations?: AsyncOperation_Result[] | null;
  resourcegroupexpansion_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  resourcegroupexpansion_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  resourcegroupexpansion_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_resourcegroupexpansion?: UserEntityInstanceData_Result[] | null;
}
interface ResourceGroupExpansion extends ResourceGroupExpansion_Base, ResourceGroupExpansion_Relationships {
}
interface ResourceGroupExpansion_Create extends ResourceGroupExpansion {
}
interface ResourceGroupExpansion_Update extends ResourceGroupExpansion {
}
interface ResourceGroupExpansion_Select {
  importsequencenumber: WebAttribute<ResourceGroupExpansion_Select, { importsequencenumber: number | null }, {  }>;
  itemid: WebAttribute<ResourceGroupExpansion_Select, { itemid: string | null }, {  }>;
  methodcode: WebAttribute<ResourceGroupExpansion_Select, { methodcode: resourcegroupexpansion_methodcode | null }, { methodcode_formatted?: string }>;
  modifiedon: WebAttribute<ResourceGroupExpansion_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  name: WebAttribute<ResourceGroupExpansion_Select, { name: string | null }, {  }>;
  objectid: WebAttribute<ResourceGroupExpansion_Select, { objectid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ResourceGroupExpansion_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  resourcegroupexpansionid: WebAttribute<ResourceGroupExpansion_Select, { resourcegroupexpansionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ResourceGroupExpansion_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ResourceGroupExpansion_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ResourceGroupExpansion_Select, { versionnumber: number | null }, {  }>;
}
interface ResourceGroupExpansion_Filter {
  importsequencenumber: number;
  itemid: XQW.Guid;
  methodcode: resourcegroupexpansion_methodcode;
  modifiedon: Date;
  name: string;
  objectid: XQW.Guid;
  overriddencreatedon: Date;
  resourcegroupexpansionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ResourceGroupExpansion_Expand {
  ResourceGroupExpansion_SyncErrors: WebExpand<ResourceGroupExpansion_Expand, SyncError_Select, SyncError_Filter, { ResourceGroupExpansion_SyncErrors: SyncError_Result[] }>;
  resourcegroupexpansion_AsyncOperations: WebExpand<ResourceGroupExpansion_Expand, AsyncOperation_Select, AsyncOperation_Filter, { resourcegroupexpansion_AsyncOperations: AsyncOperation_Result[] }>;
  resourcegroupexpansion_BulkDeleteFailures: WebExpand<ResourceGroupExpansion_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { resourcegroupexpansion_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  resourcegroupexpansion_MailboxTrackingFolders: WebExpand<ResourceGroupExpansion_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { resourcegroupexpansion_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  resourcegroupexpansion_PrincipalObjectAttributeAccesses: WebExpand<ResourceGroupExpansion_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { resourcegroupexpansion_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  userentityinstancedata_resourcegroupexpansion: WebExpand<ResourceGroupExpansion_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_resourcegroupexpansion: UserEntityInstanceData_Result[] }>;
}
interface ResourceGroupExpansion_FormattedResult {
  methodcode_formatted?: string;
  modifiedon_formatted?: string;
  overriddencreatedon_formatted?: string;
}
interface ResourceGroupExpansion_Result extends ResourceGroupExpansion_Base, ResourceGroupExpansion_Relationships {
  "@odata.etag": string;
}
interface ResourceGroupExpansion_RelatedOne {
}
interface ResourceGroupExpansion_RelatedMany {
  ResourceGroupExpansion_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  resourcegroupexpansion_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  resourcegroupexpansion_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  resourcegroupexpansion_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  resourcegroupexpansion_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_resourcegroupexpansion: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  resourcegroupexpansions: WebMappingRetrieve<ResourceGroupExpansion_Select,ResourceGroupExpansion_Expand,ResourceGroupExpansion_Filter,ResourceGroupExpansion_Fixed,ResourceGroupExpansion_Result,ResourceGroupExpansion_FormattedResult>;
}
interface WebEntitiesRelated {
  resourcegroupexpansions: WebMappingRelated<ResourceGroupExpansion_RelatedOne,ResourceGroupExpansion_RelatedMany>;
}
interface WebEntitiesCUDA {
  resourcegroupexpansions: WebMappingCUDA<ResourceGroupExpansion_Create,ResourceGroupExpansion_Update,ResourceGroupExpansion_Select>;
}
