interface EntityImageConfig_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  entityimageconfigid?: string | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  parententitylogicalname?: string | null;
  primaryimageattribute?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface EntityImageConfig_Relationships {
  entityimageconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  entityimageconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  entityimageconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  entityimageconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  entityimageconfig_SyncErrors?: SyncError_Result[] | null;
  entityimageconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface EntityImageConfig extends EntityImageConfig_Base, EntityImageConfig_Relationships {
}
interface EntityImageConfig_Create extends EntityImageConfig {
}
interface EntityImageConfig_Update extends EntityImageConfig {
}
interface EntityImageConfig_Select {
  componentidunique: WebAttribute<EntityImageConfig_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<EntityImageConfig_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  entityimageconfigid: WebAttribute<EntityImageConfig_Select, { entityimageconfigid: string | null }, {  }>;
  ismanaged: WebAttribute<EntityImageConfig_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<EntityImageConfig_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parententitylogicalname: WebAttribute<EntityImageConfig_Select, { parententitylogicalname: string | null }, {  }>;
  primaryimageattribute: WebAttribute<EntityImageConfig_Select, { primaryimageattribute: string | null }, {  }>;
  solutionid: WebAttribute<EntityImageConfig_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<EntityImageConfig_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<EntityImageConfig_Select, { versionnumber: number | null }, {  }>;
}
interface EntityImageConfig_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  entityimageconfigid: XQW.Guid;
  ismanaged: boolean;
  overwritetime: Date;
  parententitylogicalname: string;
  primaryimageattribute: string;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface EntityImageConfig_Expand {
  entityimageconfig_AsyncOperations: WebExpand<EntityImageConfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { entityimageconfig_AsyncOperations: AsyncOperation_Result[] }>;
  entityimageconfig_BulkDeleteFailures: WebExpand<EntityImageConfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { entityimageconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  entityimageconfig_MailboxTrackingFolders: WebExpand<EntityImageConfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { entityimageconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  entityimageconfig_PrincipalObjectAttributeAccesses: WebExpand<EntityImageConfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { entityimageconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  entityimageconfig_SyncErrors: WebExpand<EntityImageConfig_Expand, SyncError_Select, SyncError_Filter, { entityimageconfig_SyncErrors: SyncError_Result[] }>;
  entityimageconfig_UserEntityInstanceDatas: WebExpand<EntityImageConfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { entityimageconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface EntityImageConfig_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface EntityImageConfig_Result extends EntityImageConfig_Base, EntityImageConfig_Relationships {
  "@odata.etag": string;
}
interface EntityImageConfig_RelatedOne {
}
interface EntityImageConfig_RelatedMany {
  entityimageconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  entityimageconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  entityimageconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  entityimageconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  entityimageconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  entityimageconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entityimageconfigs: WebMappingRetrieve<EntityImageConfig_Select,EntityImageConfig_Expand,EntityImageConfig_Filter,EntityImageConfig_Fixed,EntityImageConfig_Result,EntityImageConfig_FormattedResult>;
}
interface WebEntitiesRelated {
  entityimageconfigs: WebMappingRelated<EntityImageConfig_RelatedOne,EntityImageConfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  entityimageconfigs: WebMappingCUDA<EntityImageConfig_Create,EntityImageConfig_Update,EntityImageConfig_Select>;
}
