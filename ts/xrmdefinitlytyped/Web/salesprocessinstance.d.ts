interface SalesProcessInstance_Base extends WebEntity {
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  salesprocessinstanceid?: string | null;
  salesprocessname?: string | null;
  salesstagename?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface SalesProcessInstance_Relationships {
  salesprocessinstance_AsyncOperations?: AsyncOperation_Result[] | null;
  salesprocessinstance_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  salesprocessinstance_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  salesprocessinstance_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  salesprocessinstance_SyncErrors?: SyncError_Result[] | null;
  userentityinstancedata_salesprocessinstance?: UserEntityInstanceData_Result[] | null;
}
interface SalesProcessInstance extends SalesProcessInstance_Base, SalesProcessInstance_Relationships {
}
interface SalesProcessInstance_Create extends SalesProcessInstance {
}
interface SalesProcessInstance_Update extends SalesProcessInstance {
}
interface SalesProcessInstance_Select {
  businessunitid_guid: WebAttribute<SalesProcessInstance_Select, { businessunitid_guid: string | null }, { businessunitid_formatted?: string }>;
  importsequencenumber: WebAttribute<SalesProcessInstance_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<SalesProcessInstance_Select, { name: string | null }, {  }>;
  opportunityid_guid: WebAttribute<SalesProcessInstance_Select, { opportunityid_guid: string | null }, { opportunityid_formatted?: string }>;
  overriddencreatedon: WebAttribute<SalesProcessInstance_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  salesprocessinstanceid: WebAttribute<SalesProcessInstance_Select, { salesprocessinstanceid: string | null }, {  }>;
  salesprocessname: WebAttribute<SalesProcessInstance_Select, { salesprocessname: string | null }, {  }>;
  salesstagename: WebAttribute<SalesProcessInstance_Select, { salesstagename: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<SalesProcessInstance_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<SalesProcessInstance_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<SalesProcessInstance_Select, { versionnumber: number | null }, {  }>;
}
interface SalesProcessInstance_Filter {
  businessunitid_guid: XQW.Guid;
  importsequencenumber: number;
  name: string;
  opportunityid_guid: XQW.Guid;
  overriddencreatedon: Date;
  salesprocessinstanceid: XQW.Guid;
  salesprocessname: string;
  salesstagename: string;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface SalesProcessInstance_Expand {
  businessunitid: WebExpand<SalesProcessInstance_Expand, BusinessUnit_Select, BusinessUnit_Filter, { businessunitid: BusinessUnit_Result }>;
  salesprocessinstance_AsyncOperations: WebExpand<SalesProcessInstance_Expand, AsyncOperation_Select, AsyncOperation_Filter, { salesprocessinstance_AsyncOperations: AsyncOperation_Result[] }>;
  salesprocessinstance_BulkDeleteFailures: WebExpand<SalesProcessInstance_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { salesprocessinstance_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  salesprocessinstance_MailboxTrackingFolders: WebExpand<SalesProcessInstance_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { salesprocessinstance_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  salesprocessinstance_PrincipalObjectAttributeAccesses: WebExpand<SalesProcessInstance_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { salesprocessinstance_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  salesprocessinstance_SyncErrors: WebExpand<SalesProcessInstance_Expand, SyncError_Select, SyncError_Filter, { salesprocessinstance_SyncErrors: SyncError_Result[] }>;
  userentityinstancedata_salesprocessinstance: WebExpand<SalesProcessInstance_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_salesprocessinstance: UserEntityInstanceData_Result[] }>;
}
interface SalesProcessInstance_FormattedResult {
  businessunitid_formatted?: string;
  opportunityid_formatted?: string;
  overriddencreatedon_formatted?: string;
}
interface SalesProcessInstance_Result extends SalesProcessInstance_Base, SalesProcessInstance_Relationships {
  "@odata.etag": string;
  businessunitid_guid: string | null;
  opportunityid_guid: string | null;
}
interface SalesProcessInstance_RelatedOne {
  businessunitid: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
}
interface SalesProcessInstance_RelatedMany {
  salesprocessinstance_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  salesprocessinstance_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  salesprocessinstance_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  salesprocessinstance_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  salesprocessinstance_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_salesprocessinstance: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  salesprocessinstances: WebMappingRetrieve<SalesProcessInstance_Select,SalesProcessInstance_Expand,SalesProcessInstance_Filter,SalesProcessInstance_Fixed,SalesProcessInstance_Result,SalesProcessInstance_FormattedResult>;
}
interface WebEntitiesRelated {
  salesprocessinstances: WebMappingRelated<SalesProcessInstance_RelatedOne,SalesProcessInstance_RelatedMany>;
}
interface WebEntitiesCUDA {
  salesprocessinstances: WebMappingCUDA<SalesProcessInstance_Create,SalesProcessInstance_Update,SalesProcessInstance_Select>;
}
