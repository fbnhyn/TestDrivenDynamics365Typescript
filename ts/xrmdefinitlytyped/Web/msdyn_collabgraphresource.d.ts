interface msdyn_CollabGraphResource_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_collabgraphresourceid?: string | null;
  msdyn_graphresourceid?: string | null;
  msdyn_graphresourcename?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_collabgraphresource_statecode | null;
  statuscode?: msdyn_collabgraphresource_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_CollabGraphResource_Relationships {
  msdyn_collabgraphresource_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_collabgraphresource_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_collabgraphresource_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_collabgraphresource_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_collabgraphresource_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_collabgraphresource_SyncErrors?: SyncError_Result[] | null;
  msdyn_collabgraphresource_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_CollabGraphResource extends msdyn_CollabGraphResource_Base, msdyn_CollabGraphResource_Relationships {
}
interface msdyn_CollabGraphResource_Create extends msdyn_CollabGraphResource {
}
interface msdyn_CollabGraphResource_Update extends msdyn_CollabGraphResource {
}
interface msdyn_CollabGraphResource_Select {
  createdby_guid: WebAttribute<msdyn_CollabGraphResource_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_CollabGraphResource_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_CollabGraphResource_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_CollabGraphResource_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_CollabGraphResource_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_CollabGraphResource_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_CollabGraphResource_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_collabgraphresourceid: WebAttribute<msdyn_CollabGraphResource_Select, { msdyn_collabgraphresourceid: string | null }, {  }>;
  msdyn_graphresourceid: WebAttribute<msdyn_CollabGraphResource_Select, { msdyn_graphresourceid: string | null }, {  }>;
  msdyn_graphresourcename: WebAttribute<msdyn_CollabGraphResource_Select, { msdyn_graphresourcename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_CollabGraphResource_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_CollabGraphResource_Select, { statecode: msdyn_collabgraphresource_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_CollabGraphResource_Select, { statuscode: msdyn_collabgraphresource_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_CollabGraphResource_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_CollabGraphResource_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_CollabGraphResource_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_CollabGraphResource_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_collabgraphresourceid: XQW.Guid;
  msdyn_graphresourceid: XQW.Guid;
  msdyn_graphresourcename: string;
  overriddencreatedon: Date;
  statecode: msdyn_collabgraphresource_statecode;
  statuscode: msdyn_collabgraphresource_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_CollabGraphResource_Expand {
  createdby: WebExpand<msdyn_CollabGraphResource_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_CollabGraphResource_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_CollabGraphResource_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_CollabGraphResource_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_collabgraphresource_AsyncOperations: WebExpand<msdyn_CollabGraphResource_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_collabgraphresource_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_collabgraphresource_BulkDeleteFailures: WebExpand<msdyn_CollabGraphResource_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_collabgraphresource_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_collabgraphresource_MailboxTrackingFolders: WebExpand<msdyn_CollabGraphResource_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_collabgraphresource_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_collabgraphresource_PrincipalObjectAttributeAccesses: WebExpand<msdyn_CollabGraphResource_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_collabgraphresource_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_collabgraphresource_ProcessSession: WebExpand<msdyn_CollabGraphResource_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_collabgraphresource_ProcessSession: ProcessSession_Result[] }>;
  msdyn_collabgraphresource_SyncErrors: WebExpand<msdyn_CollabGraphResource_Expand, SyncError_Select, SyncError_Filter, { msdyn_collabgraphresource_SyncErrors: SyncError_Result[] }>;
  msdyn_collabgraphresource_UserEntityInstanceDatas: WebExpand<msdyn_CollabGraphResource_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_collabgraphresource_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface msdyn_CollabGraphResource_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_CollabGraphResource_Result extends msdyn_CollabGraphResource_Base, msdyn_CollabGraphResource_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface msdyn_CollabGraphResource_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_CollabGraphResource_RelatedMany {
  msdyn_collabgraphresource_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_collabgraphresource_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_collabgraphresource_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_collabgraphresource_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_collabgraphresource_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_collabgraphresource_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_collabgraphresource_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_collabgraphresource: WebMappingRetrieve<msdyn_CollabGraphResource_Select,msdyn_CollabGraphResource_Expand,msdyn_CollabGraphResource_Filter,msdyn_CollabGraphResource_Fixed,msdyn_CollabGraphResource_Result,msdyn_CollabGraphResource_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_collabgraphresource: WebMappingRelated<msdyn_CollabGraphResource_RelatedOne,msdyn_CollabGraphResource_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_collabgraphresource: WebMappingCUDA<msdyn_CollabGraphResource_Create,msdyn_CollabGraphResource_Update,msdyn_CollabGraphResource_Select>;
}
