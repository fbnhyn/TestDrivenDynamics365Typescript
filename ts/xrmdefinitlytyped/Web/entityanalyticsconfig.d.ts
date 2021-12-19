interface EntityAnalyticsConfig_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  entityanalyticsconfigid?: string | null;
  isenabledforadls?: boolean | null;
  isenabledfortimeseries?: boolean | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  parententitylogicalname?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface EntityAnalyticsConfig_Relationships {
  entityanalyticsconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  entityanalyticsconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  entityanalyticsconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  entityanalyticsconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  entityanalyticsconfig_SyncErrors?: SyncError_Result[] | null;
  entityanalyticsconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface EntityAnalyticsConfig extends EntityAnalyticsConfig_Base, EntityAnalyticsConfig_Relationships {
}
interface EntityAnalyticsConfig_Create extends EntityAnalyticsConfig {
  parententityid_bind$entities?: string | null;
}
interface EntityAnalyticsConfig_Update extends EntityAnalyticsConfig {
}
interface EntityAnalyticsConfig_Select {
  componentidunique: WebAttribute<EntityAnalyticsConfig_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<EntityAnalyticsConfig_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdon: WebAttribute<EntityAnalyticsConfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  entityanalyticsconfigid: WebAttribute<EntityAnalyticsConfig_Select, { entityanalyticsconfigid: string | null }, {  }>;
  isenabledforadls: WebAttribute<EntityAnalyticsConfig_Select, { isenabledforadls: boolean | null }, {  }>;
  isenabledfortimeseries: WebAttribute<EntityAnalyticsConfig_Select, { isenabledfortimeseries: boolean | null }, {  }>;
  ismanaged: WebAttribute<EntityAnalyticsConfig_Select, { ismanaged: boolean | null }, {  }>;
  modifiedon: WebAttribute<EntityAnalyticsConfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  organizationid_guid: WebAttribute<EntityAnalyticsConfig_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<EntityAnalyticsConfig_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parententityid_guid: WebAttribute<EntityAnalyticsConfig_Select, { parententityid_guid: string | null }, { parententityid_formatted?: string }>;
  parententitylogicalname: WebAttribute<EntityAnalyticsConfig_Select, { parententitylogicalname: string | null }, {  }>;
  solutionid: WebAttribute<EntityAnalyticsConfig_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<EntityAnalyticsConfig_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<EntityAnalyticsConfig_Select, { versionnumber: number | null }, {  }>;
}
interface EntityAnalyticsConfig_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdon: Date;
  entityanalyticsconfigid: XQW.Guid;
  isenabledforadls: boolean;
  isenabledfortimeseries: boolean;
  ismanaged: boolean;
  modifiedon: Date;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  parententityid_guid: XQW.Guid;
  parententitylogicalname: string;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface EntityAnalyticsConfig_Expand {
  entityanalyticsconfig_AsyncOperations: WebExpand<EntityAnalyticsConfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { entityanalyticsconfig_AsyncOperations: AsyncOperation_Result[] }>;
  entityanalyticsconfig_BulkDeleteFailures: WebExpand<EntityAnalyticsConfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { entityanalyticsconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  entityanalyticsconfig_MailboxTrackingFolders: WebExpand<EntityAnalyticsConfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { entityanalyticsconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  entityanalyticsconfig_PrincipalObjectAttributeAccesses: WebExpand<EntityAnalyticsConfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { entityanalyticsconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  entityanalyticsconfig_SyncErrors: WebExpand<EntityAnalyticsConfig_Expand, SyncError_Select, SyncError_Filter, { entityanalyticsconfig_SyncErrors: SyncError_Result[] }>;
  entityanalyticsconfig_UserEntityInstanceDatas: WebExpand<EntityAnalyticsConfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { entityanalyticsconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<EntityAnalyticsConfig_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  parententityid: WebExpand<EntityAnalyticsConfig_Expand, Entity_Select, Entity_Filter, { parententityid: Entity_Result }>;
}
interface EntityAnalyticsConfig_FormattedResult {
  componentstate_formatted?: string;
  createdon_formatted?: string;
  modifiedon_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  parententityid_formatted?: string;
}
interface EntityAnalyticsConfig_Result extends EntityAnalyticsConfig_Base, EntityAnalyticsConfig_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
  parententityid_guid: string | null;
}
interface EntityAnalyticsConfig_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  parententityid: WebMappingRetrieve<Entity_Select,Entity_Expand,Entity_Filter,Entity_Fixed,Entity_Result,Entity_FormattedResult>;
}
interface EntityAnalyticsConfig_RelatedMany {
  entityanalyticsconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  entityanalyticsconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  entityanalyticsconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  entityanalyticsconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  entityanalyticsconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  entityanalyticsconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entityanalyticsconfigs: WebMappingRetrieve<EntityAnalyticsConfig_Select,EntityAnalyticsConfig_Expand,EntityAnalyticsConfig_Filter,EntityAnalyticsConfig_Fixed,EntityAnalyticsConfig_Result,EntityAnalyticsConfig_FormattedResult>;
}
interface WebEntitiesRelated {
  entityanalyticsconfigs: WebMappingRelated<EntityAnalyticsConfig_RelatedOne,EntityAnalyticsConfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  entityanalyticsconfigs: WebMappingCUDA<EntityAnalyticsConfig_Create,EntityAnalyticsConfig_Update,EntityAnalyticsConfig_Select>;
}
