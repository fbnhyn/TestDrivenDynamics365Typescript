interface ResourceSpec_Base extends WebEntity {
  constraints?: string | null;
  createdon?: Date | null;
  description?: string | null;
  effortrequired?: number | null;
  groupobjectid?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  objectiveexpression?: string | null;
  objecttypecode?: string | null;
  overriddencreatedon?: Date | null;
  requiredcount?: number | null;
  resourcespecid?: string | null;
  samesite?: boolean | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ResourceSpec_Relationships {
  ActivityPartyResourceSpec?: ActivityParty_Result[] | null;
  ResourceSpec_Annotation?: Annotation_Result[] | null;
  ResourceSpec_AsyncOperations?: AsyncOperation_Result[] | null;
  ResourceSpec_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  groupobjectid_constraintbasedgroup?: ConstraintBasedGroup_Result | null;
  groupobjectid_team?: Team_Result | null;
  resource_spec_services?: Service_Result[] | null;
  resourcespec_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  resourcespec_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  resourcespec_SyncErrors?: SyncError_Result[] | null;
  resourcespec_resources?: Resource_Result[] | null;
  userentityinstancedata_resourcespec?: UserEntityInstanceData_Result[] | null;
}
interface ResourceSpec extends ResourceSpec_Base, ResourceSpec_Relationships {
  businessunitid_bind$businessunits?: string | null;
  groupobjectid_constraintbasedgroup_bind$constraintbasedgroups?: string | null;
  groupobjectid_team_bind$teams?: string | null;
}
interface ResourceSpec_Create extends ResourceSpec {
}
interface ResourceSpec_Update extends ResourceSpec {
}
interface ResourceSpec_Select {
  businessunitid_guid: WebAttribute<ResourceSpec_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  constraints: WebAttribute<ResourceSpec_Select, { constraints: string | null }, {  }>;
  createdby_guid: WebAttribute<ResourceSpec_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ResourceSpec_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ResourceSpec_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<ResourceSpec_Select, { description: string | null }, {  }>;
  effortrequired: WebAttribute<ResourceSpec_Select, { effortrequired: number | null }, {  }>;
  groupobjectid: WebAttribute<ResourceSpec_Select, { groupobjectid: string | null }, {  }>;
  importsequencenumber: WebAttribute<ResourceSpec_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ResourceSpec_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ResourceSpec_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ResourceSpec_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ResourceSpec_Select, { name: string | null }, {  }>;
  objectiveexpression: WebAttribute<ResourceSpec_Select, { objectiveexpression: string | null }, {  }>;
  objecttypecode: WebAttribute<ResourceSpec_Select, { objecttypecode: string | null }, {  }>;
  organizationid_guid: WebAttribute<ResourceSpec_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ResourceSpec_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  requiredcount: WebAttribute<ResourceSpec_Select, { requiredcount: number | null }, {  }>;
  resourcespecid: WebAttribute<ResourceSpec_Select, { resourcespecid: string | null }, {  }>;
  samesite: WebAttribute<ResourceSpec_Select, { samesite: boolean | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ResourceSpec_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ResourceSpec_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ResourceSpec_Select, { versionnumber: number | null }, {  }>;
}
interface ResourceSpec_Filter {
  businessunitid_guid: XQW.Guid;
  constraints: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  effortrequired: number;
  groupobjectid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  objectiveexpression: string;
  objecttypecode: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  requiredcount: number;
  resourcespecid: XQW.Guid;
  samesite: boolean;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ResourceSpec_Expand {
  ActivityPartyResourceSpec: WebExpand<ResourceSpec_Expand, ActivityParty_Select, ActivityParty_Filter, { ActivityPartyResourceSpec: ActivityParty_Result[] }>;
  ResourceSpec_Annotation: WebExpand<ResourceSpec_Expand, Annotation_Select, Annotation_Filter, { ResourceSpec_Annotation: Annotation_Result[] }>;
  ResourceSpec_AsyncOperations: WebExpand<ResourceSpec_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ResourceSpec_AsyncOperations: AsyncOperation_Result[] }>;
  ResourceSpec_BulkDeleteFailures: WebExpand<ResourceSpec_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ResourceSpec_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  businessunitid: WebExpand<ResourceSpec_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid: BusinessUnit_Result }>;
  createdby: WebExpand<ResourceSpec_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ResourceSpec_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  groupobjectid_constraintbasedgroup: WebExpand<ResourceSpec_Expand, ConstraintBasedGroup_Select, ConstraintBasedGroup_Filter, { groupobjectid_constraintbasedgroup: ConstraintBasedGroup_Result }>;
  groupobjectid_team: WebExpand<ResourceSpec_Expand, Team_Select, Team_Filter, { groupobjectid_team: Team_Result }>;
  modifiedby: WebExpand<ResourceSpec_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ResourceSpec_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ResourceSpec_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  resource_spec_services: WebExpand<ResourceSpec_Expand, Service_Select, Service_Filter, { resource_spec_services: Service_Result[] }>;
  resourcespec_MailboxTrackingFolders: WebExpand<ResourceSpec_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { resourcespec_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  resourcespec_PrincipalObjectAttributeAccesses: WebExpand<ResourceSpec_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { resourcespec_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  resourcespec_SyncErrors: WebExpand<ResourceSpec_Expand, SyncError_Select, SyncError_Filter, { resourcespec_SyncErrors: SyncError_Result[] }>;
  resourcespec_resources: WebExpand<ResourceSpec_Expand, Resource_Select, Resource_Filter, { resourcespec_resources: Resource_Result[] }>;
  userentityinstancedata_resourcespec: WebExpand<ResourceSpec_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_resourcespec: UserEntityInstanceData_Result[] }>;
}
interface ResourceSpec_FormattedResult {
  businessunitid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
}
interface ResourceSpec_Result extends ResourceSpec_Base, ResourceSpec_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface ResourceSpec_RelatedOne {
  businessunitid: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  groupobjectid_constraintbasedgroup: WebMappingRetrieve<ConstraintBasedGroup_Select,ConstraintBasedGroup_Expand,ConstraintBasedGroup_Filter,ConstraintBasedGroup_Fixed,ConstraintBasedGroup_Result,ConstraintBasedGroup_FormattedResult>;
  groupobjectid_team: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ResourceSpec_RelatedMany {
  ActivityPartyResourceSpec: WebMappingRetrieve<ActivityParty_Select,ActivityParty_Expand,ActivityParty_Filter,ActivityParty_Fixed,ActivityParty_Result,ActivityParty_FormattedResult>;
  ResourceSpec_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  ResourceSpec_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ResourceSpec_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  resource_spec_services: WebMappingRetrieve<Service_Select,Service_Expand,Service_Filter,Service_Fixed,Service_Result,Service_FormattedResult>;
  resourcespec_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  resourcespec_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  resourcespec_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  resourcespec_resources: WebMappingRetrieve<Resource_Select,Resource_Expand,Resource_Filter,Resource_Fixed,Resource_Result,Resource_FormattedResult>;
  userentityinstancedata_resourcespec: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  resourcespecs: WebMappingRetrieve<ResourceSpec_Select,ResourceSpec_Expand,ResourceSpec_Filter,ResourceSpec_Fixed,ResourceSpec_Result,ResourceSpec_FormattedResult>;
}
interface WebEntitiesRelated {
  resourcespecs: WebMappingRelated<ResourceSpec_RelatedOne,ResourceSpec_RelatedMany>;
}
interface WebEntitiesCUDA {
  resourcespecs: WebMappingCUDA<ResourceSpec_Create,ResourceSpec_Update,ResourceSpec_Select>;
}
