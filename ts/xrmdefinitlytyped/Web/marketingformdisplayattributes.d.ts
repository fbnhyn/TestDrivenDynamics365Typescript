interface marketingformdisplayattributes_Base extends WebEntity {
  createdon?: Date | null;
  displayattributelist?: string | null;
  entitylogicalname?: string | null;
  importsequencenumber?: number | null;
  marketingformdisplayattributesid?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: marketingformdisplayattributes_statecode | null;
  statuscode?: marketingformdisplayattributes_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface marketingformdisplayattributes_Relationships {
  marketingformdisplayattributes_AsyncOperations?: AsyncOperation_Result[] | null;
  marketingformdisplayattributes_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  marketingformdisplayattributes_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  marketingformdisplayattributes_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  marketingformdisplayattributes_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  marketingformdisplayattributes_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  marketingformdisplayattributes_ProcessSession?: ProcessSession_Result[] | null;
  marketingformdisplayattributes_SyncErrors?: SyncError_Result[] | null;
  marketingformdisplayattributes_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface marketingformdisplayattributes extends marketingformdisplayattributes_Base, marketingformdisplayattributes_Relationships {
}
interface marketingformdisplayattributes_Create extends marketingformdisplayattributes {
}
interface marketingformdisplayattributes_Update extends marketingformdisplayattributes {
}
interface marketingformdisplayattributes_Select {
  createdby_guid: WebAttribute<marketingformdisplayattributes_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<marketingformdisplayattributes_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<marketingformdisplayattributes_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  displayattributelist: WebAttribute<marketingformdisplayattributes_Select, { displayattributelist: string | null }, {  }>;
  entitylogicalname: WebAttribute<marketingformdisplayattributes_Select, { entitylogicalname: string | null }, {  }>;
  importsequencenumber: WebAttribute<marketingformdisplayattributes_Select, { importsequencenumber: number | null }, {  }>;
  marketingformdisplayattributesid: WebAttribute<marketingformdisplayattributes_Select, { marketingformdisplayattributesid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<marketingformdisplayattributes_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<marketingformdisplayattributes_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<marketingformdisplayattributes_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<marketingformdisplayattributes_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<marketingformdisplayattributes_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<marketingformdisplayattributes_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<marketingformdisplayattributes_Select, { statecode: marketingformdisplayattributes_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<marketingformdisplayattributes_Select, { statuscode: marketingformdisplayattributes_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<marketingformdisplayattributes_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<marketingformdisplayattributes_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<marketingformdisplayattributes_Select, { versionnumber: number | null }, {  }>;
}
interface marketingformdisplayattributes_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  displayattributelist: string;
  entitylogicalname: string;
  importsequencenumber: number;
  marketingformdisplayattributesid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: marketingformdisplayattributes_statecode;
  statuscode: marketingformdisplayattributes_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface marketingformdisplayattributes_Expand {
  createdby: WebExpand<marketingformdisplayattributes_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<marketingformdisplayattributes_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  marketingformdisplayattributes_AsyncOperations: WebExpand<marketingformdisplayattributes_Expand, AsyncOperation_Select, AsyncOperation_Filter, { marketingformdisplayattributes_AsyncOperations: AsyncOperation_Result[] }>;
  marketingformdisplayattributes_BulkDeleteFailures: WebExpand<marketingformdisplayattributes_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { marketingformdisplayattributes_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  marketingformdisplayattributes_DuplicateBaseRecord: WebExpand<marketingformdisplayattributes_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { marketingformdisplayattributes_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  marketingformdisplayattributes_DuplicateMatchingRecord: WebExpand<marketingformdisplayattributes_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { marketingformdisplayattributes_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  marketingformdisplayattributes_MailboxTrackingFolders: WebExpand<marketingformdisplayattributes_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { marketingformdisplayattributes_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  marketingformdisplayattributes_PrincipalObjectAttributeAccesses: WebExpand<marketingformdisplayattributes_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { marketingformdisplayattributes_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  marketingformdisplayattributes_ProcessSession: WebExpand<marketingformdisplayattributes_Expand, ProcessSession_Select, ProcessSession_Filter, { marketingformdisplayattributes_ProcessSession: ProcessSession_Result[] }>;
  marketingformdisplayattributes_SyncErrors: WebExpand<marketingformdisplayattributes_Expand, SyncError_Select, SyncError_Filter, { marketingformdisplayattributes_SyncErrors: SyncError_Result[] }>;
  marketingformdisplayattributes_UserEntityInstanceDatas: WebExpand<marketingformdisplayattributes_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { marketingformdisplayattributes_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  modifiedby: WebExpand<marketingformdisplayattributes_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<marketingformdisplayattributes_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<marketingformdisplayattributes_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface marketingformdisplayattributes_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface marketingformdisplayattributes_Result extends marketingformdisplayattributes_Base, marketingformdisplayattributes_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface marketingformdisplayattributes_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface marketingformdisplayattributes_RelatedMany {
  marketingformdisplayattributes_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  marketingformdisplayattributes_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  marketingformdisplayattributes_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  marketingformdisplayattributes_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  marketingformdisplayattributes_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  marketingformdisplayattributes_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  marketingformdisplayattributes_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  marketingformdisplayattributes_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  marketingformdisplayattributes_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  marketingformdisplayattributesset: WebMappingRetrieve<marketingformdisplayattributes_Select,marketingformdisplayattributes_Expand,marketingformdisplayattributes_Filter,marketingformdisplayattributes_Fixed,marketingformdisplayattributes_Result,marketingformdisplayattributes_FormattedResult>;
}
interface WebEntitiesRelated {
  marketingformdisplayattributesset: WebMappingRelated<marketingformdisplayattributes_RelatedOne,marketingformdisplayattributes_RelatedMany>;
}
interface WebEntitiesCUDA {
  marketingformdisplayattributesset: WebMappingCUDA<marketingformdisplayattributes_Create,marketingformdisplayattributes_Update,marketingformdisplayattributes_Select>;
}
