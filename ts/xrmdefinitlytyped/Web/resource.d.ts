interface Resource_Base extends WebEntity {
  calendarid?: string | null;
  displayinserviceviews?: boolean | null;
  entityimageid?: string | null;
  importsequencenumber?: number | null;
  isdisabled?: boolean | null;
  name?: string | null;
  objecttypecode?: string | null;
  overriddencreatedon?: Date | null;
  resourceid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Resource_Relationships {
  Resource_AsyncOperations?: AsyncOperation_Result[] | null;
  Resource_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Resource_SyncErrors?: SyncError_Result[] | null;
  entityimageid_imagedescriptor?: ImageDescriptor_Result | null;
  resource_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  resource_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  resourceid_equipment?: Equipment_Result | null;
  resourceid_resourcespec?: ResourceSpec_Result | null;
  resourceid_systemuser?: SystemUser_Result | null;
  userentityinstancedata_resource?: UserEntityInstanceData_Result[] | null;
}
interface Resource extends Resource_Base, Resource_Relationships {
  businessunitid_bind$businessunits?: string | null;
  organizationid_bind$organizations?: string | null;
  siteid_bind$sites?: string | null;
}
interface Resource_Create extends Resource {
  resourceid_equipment_bind$equipments?: string | null;
  resourceid_resourcespec_bind$resourcespecs?: string | null;
  resourceid_systemuser_bind$systemusers?: string | null;
}
interface Resource_Update extends Resource {
}
interface Resource_Select {
  businessunitid_guid: WebAttribute<Resource_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  calendarid: WebAttribute<Resource_Select, { calendarid: string | null }, {  }>;
  displayinserviceviews: WebAttribute<Resource_Select, { displayinserviceviews: boolean | null }, {  }>;
  entityimageid: WebAttribute<Resource_Select, { entityimageid: string | null }, {  }>;
  importsequencenumber: WebAttribute<Resource_Select, { importsequencenumber: number | null }, {  }>;
  isdisabled: WebAttribute<Resource_Select, { isdisabled: boolean | null }, {  }>;
  name: WebAttribute<Resource_Select, { name: string | null }, {  }>;
  objecttypecode: WebAttribute<Resource_Select, { objecttypecode: string | null }, {  }>;
  organizationid_guid: WebAttribute<Resource_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Resource_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  resourceid: WebAttribute<Resource_Select, { resourceid: string | null }, {  }>;
  siteid_guid: WebAttribute<Resource_Select, { siteid_guid: string | null }, { siteid_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<Resource_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Resource_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Resource_Select, { versionnumber: number | null }, {  }>;
}
interface Resource_Filter {
  businessunitid_guid: XQW.Guid;
  calendarid: XQW.Guid;
  displayinserviceviews: boolean;
  entityimageid: XQW.Guid;
  importsequencenumber: number;
  isdisabled: boolean;
  name: string;
  objecttypecode: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  resourceid: XQW.Guid;
  siteid_guid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Resource_Expand {
  Resource_AsyncOperations: WebExpand<Resource_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Resource_AsyncOperations: AsyncOperation_Result[] }>;
  Resource_BulkDeleteFailures: WebExpand<Resource_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Resource_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Resource_SyncErrors: WebExpand<Resource_Expand, SyncError_Select, SyncError_Filter, { Resource_SyncErrors: SyncError_Result[] }>;
  businessunitid: WebExpand<Resource_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid: BusinessUnit_Result }>;
  entityimageid_imagedescriptor: WebExpand<Resource_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageid_imagedescriptor: ImageDescriptor_Result }>;
  organizationid: WebExpand<Resource_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  resource_MailboxTrackingFolders: WebExpand<Resource_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { resource_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  resource_PrincipalObjectAttributeAccesses: WebExpand<Resource_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { resource_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  resourceid_equipment: WebExpand<Resource_Expand, Equipment_Select, Equipment_Filter, { resourceid_equipment: Equipment_Result }>;
  resourceid_resourcespec: WebExpand<Resource_Expand, ResourceSpec_Select, ResourceSpec_Filter, { resourceid_resourcespec: ResourceSpec_Result }>;
  resourceid_systemuser: WebExpand<Resource_Expand, SystemUser_Select, SystemUser_Filter, { resourceid_systemuser: SystemUser_Result }>;
  siteid: WebExpand<Resource_Expand, Site_Select, Site_Filter, { siteid: Site_Result }>;
  userentityinstancedata_resource: WebExpand<Resource_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_resource: UserEntityInstanceData_Result[] }>;
}
interface Resource_FormattedResult {
  businessunitid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  siteid_formatted?: string;
}
interface Resource_Result extends Resource_Base, Resource_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  organizationid_guid: string | null;
  siteid_guid: string | null;
}
interface Resource_RelatedOne {
  businessunitid: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  entityimageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  resourceid_equipment: WebMappingRetrieve<Equipment_Select,Equipment_Expand,Equipment_Filter,Equipment_Fixed,Equipment_Result,Equipment_FormattedResult>;
  resourceid_resourcespec: WebMappingRetrieve<ResourceSpec_Select,ResourceSpec_Expand,ResourceSpec_Filter,ResourceSpec_Fixed,ResourceSpec_Result,ResourceSpec_FormattedResult>;
  resourceid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  siteid: WebMappingRetrieve<Site_Select,Site_Expand,Site_Filter,Site_Fixed,Site_Result,Site_FormattedResult>;
}
interface Resource_RelatedMany {
  Resource_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Resource_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Resource_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  resource_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  resource_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_resource: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  resources: WebMappingRetrieve<Resource_Select,Resource_Expand,Resource_Filter,Resource_Fixed,Resource_Result,Resource_FormattedResult>;
}
interface WebEntitiesRelated {
  resources: WebMappingRelated<Resource_RelatedOne,Resource_RelatedMany>;
}
interface WebEntitiesCUDA {
  resources: WebMappingCUDA<Resource_Create,Resource_Update,Resource_Select>;
}
