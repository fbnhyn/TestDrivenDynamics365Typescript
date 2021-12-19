interface IndexAttributes_Base extends WebEntity {
  indexattributeid?: string | null;
  indexid?: string | null;
  recordid?: number | null;
  versionnumber?: number | null;
}
interface IndexAttributes_Relationships {
  indexattributes_AsyncOperations?: AsyncOperation_Result[] | null;
  indexattributes_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  indexattributes_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  indexattributes_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  indexattributes_SyncErrors?: SyncError_Result[] | null;
  indexattributes_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface IndexAttributes extends IndexAttributes_Base, IndexAttributes_Relationships {
}
interface IndexAttributes_Create extends IndexAttributes {
}
interface IndexAttributes_Update extends IndexAttributes {
}
interface IndexAttributes_Select {
  indexattributeid: WebAttribute<IndexAttributes_Select, { indexattributeid: string | null }, {  }>;
  indexid: WebAttribute<IndexAttributes_Select, { indexid: string | null }, {  }>;
  recordid: WebAttribute<IndexAttributes_Select, { recordid: number | null }, {  }>;
  versionnumber: WebAttribute<IndexAttributes_Select, { versionnumber: number | null }, {  }>;
}
interface IndexAttributes_Filter {
  indexattributeid: XQW.Guid;
  indexid: XQW.Guid;
  recordid: number;
  versionnumber: number;
}
interface IndexAttributes_Expand {
  indexattributes_AsyncOperations: WebExpand<IndexAttributes_Expand, AsyncOperation_Select, AsyncOperation_Filter, { indexattributes_AsyncOperations: AsyncOperation_Result[] }>;
  indexattributes_BulkDeleteFailures: WebExpand<IndexAttributes_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { indexattributes_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  indexattributes_MailboxTrackingFolders: WebExpand<IndexAttributes_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { indexattributes_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  indexattributes_PrincipalObjectAttributeAccesses: WebExpand<IndexAttributes_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { indexattributes_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  indexattributes_SyncErrors: WebExpand<IndexAttributes_Expand, SyncError_Select, SyncError_Filter, { indexattributes_SyncErrors: SyncError_Result[] }>;
  indexattributes_UserEntityInstanceDatas: WebExpand<IndexAttributes_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { indexattributes_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface IndexAttributes_FormattedResult {
}
interface IndexAttributes_Result extends IndexAttributes_Base, IndexAttributes_Relationships {
  "@odata.etag": string;
}
interface IndexAttributes_RelatedOne {
}
interface IndexAttributes_RelatedMany {
  indexattributes_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  indexattributes_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  indexattributes_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  indexattributes_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  indexattributes_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  indexattributes_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  indexattributes: WebMappingRetrieve<IndexAttributes_Select,IndexAttributes_Expand,IndexAttributes_Filter,IndexAttributes_Fixed,IndexAttributes_Result,IndexAttributes_FormattedResult>;
}
interface WebEntitiesRelated {
  indexattributes: WebMappingRelated<IndexAttributes_RelatedOne,IndexAttributes_RelatedMany>;
}
interface WebEntitiesCUDA {
  indexattributes: WebMappingCUDA<IndexAttributes_Create,IndexAttributes_Update,IndexAttributes_Select>;
}
