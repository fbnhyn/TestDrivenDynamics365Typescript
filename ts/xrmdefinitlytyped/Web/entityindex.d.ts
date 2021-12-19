interface EntityIndex_Base extends WebEntity {
  componentstate?: componentstate | null;
  indexid?: string | null;
  name?: string | null;
  overwritetime?: Date | null;
  recordid?: number | null;
  solutionid?: string | null;
  versionnumber?: number | null;
}
interface EntityIndex_Relationships {
  entityindex_AsyncOperations?: AsyncOperation_Result[] | null;
  entityindex_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  entityindex_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  entityindex_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  entityindex_SyncErrors?: SyncError_Result[] | null;
  entityindex_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface EntityIndex extends EntityIndex_Base, EntityIndex_Relationships {
}
interface EntityIndex_Create extends EntityIndex {
}
interface EntityIndex_Update extends EntityIndex {
}
interface EntityIndex_Select {
  componentstate: WebAttribute<EntityIndex_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  indexid: WebAttribute<EntityIndex_Select, { indexid: string | null }, {  }>;
  name: WebAttribute<EntityIndex_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<EntityIndex_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  recordid: WebAttribute<EntityIndex_Select, { recordid: number | null }, {  }>;
  solutionid: WebAttribute<EntityIndex_Select, { solutionid: string | null }, {  }>;
  versionnumber: WebAttribute<EntityIndex_Select, { versionnumber: number | null }, {  }>;
}
interface EntityIndex_Filter {
  componentstate: componentstate;
  indexid: XQW.Guid;
  name: string;
  overwritetime: Date;
  recordid: number;
  solutionid: XQW.Guid;
  versionnumber: number;
}
interface EntityIndex_Expand {
  entityindex_AsyncOperations: WebExpand<EntityIndex_Expand, AsyncOperation_Select, AsyncOperation_Filter, { entityindex_AsyncOperations: AsyncOperation_Result[] }>;
  entityindex_BulkDeleteFailures: WebExpand<EntityIndex_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { entityindex_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  entityindex_MailboxTrackingFolders: WebExpand<EntityIndex_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { entityindex_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  entityindex_PrincipalObjectAttributeAccesses: WebExpand<EntityIndex_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { entityindex_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  entityindex_SyncErrors: WebExpand<EntityIndex_Expand, SyncError_Select, SyncError_Filter, { entityindex_SyncErrors: SyncError_Result[] }>;
  entityindex_UserEntityInstanceDatas: WebExpand<EntityIndex_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { entityindex_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface EntityIndex_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface EntityIndex_Result extends EntityIndex_Base, EntityIndex_Relationships {
  "@odata.etag": string;
}
interface EntityIndex_RelatedOne {
}
interface EntityIndex_RelatedMany {
  entityindex_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  entityindex_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  entityindex_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  entityindex_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  entityindex_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  entityindex_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entityindexes: WebMappingRetrieve<EntityIndex_Select,EntityIndex_Expand,EntityIndex_Filter,EntityIndex_Fixed,EntityIndex_Result,EntityIndex_FormattedResult>;
}
interface WebEntitiesRelated {
  entityindexes: WebMappingRelated<EntityIndex_RelatedOne,EntityIndex_RelatedMany>;
}
interface WebEntitiesCUDA {
  entityindexes: WebMappingCUDA<EntityIndex_Create,EntityIndex_Update,EntityIndex_Select>;
}
