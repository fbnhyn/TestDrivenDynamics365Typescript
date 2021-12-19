interface msdyn_transactioncategoryclassification_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_transactioncategoryclassificationid?: string | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_transactioncategoryclassification_statecode | null;
  statuscode?: msdyn_transactioncategoryclassification_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_transactioncategoryclassification_Relationships {
  msdyn_transactioncategoryclassification_Annotations?: Annotation_Result[] | null;
  msdyn_transactioncategoryclassification_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_transactioncategoryclassification_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_transactioncategoryclassification_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactioncategoryclassification_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactioncategoryclassification_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_transactioncategoryclassification_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_transactioncategoryclassification_SyncErrors?: SyncError_Result[] | null;
  msdyn_transactioncategoryclassification_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_transactioncategoryclassification extends msdyn_transactioncategoryclassification_Base, msdyn_transactioncategoryclassification_Relationships {
  msdyn_transactioncategory_bind$msdyn_transactioncategories?: string | null;
}
interface msdyn_transactioncategoryclassification_Create extends msdyn_transactioncategoryclassification {
}
interface msdyn_transactioncategoryclassification_Update extends msdyn_transactioncategoryclassification {
}
interface msdyn_transactioncategoryclassification_Select {
  createdby_guid: WebAttribute<msdyn_transactioncategoryclassification_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_transactioncategoryclassification_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_transactioncategoryclassification_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_transactioncategoryclassification_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_transactioncategoryclassification_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_transactioncategoryclassification_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_transactioncategoryclassification_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_transactioncategoryclassification_Select, { msdyn_name: string | null }, {  }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_transactioncategoryclassification_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  msdyn_transactioncategoryclassificationid: WebAttribute<msdyn_transactioncategoryclassification_Select, { msdyn_transactioncategoryclassificationid: string | null }, {  }>;
  msdyn_transactionclassification: WebAttribute<msdyn_transactioncategoryclassification_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_transactioncategoryclassification_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_transactioncategoryclassification_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_transactioncategoryclassification_Select, { statecode: msdyn_transactioncategoryclassification_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_transactioncategoryclassification_Select, { statuscode: msdyn_transactioncategoryclassification_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_transactioncategoryclassification_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_transactioncategoryclassification_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_transactioncategoryclassification_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_transactioncategoryclassification_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_transactioncategory_guid: XQW.Guid;
  msdyn_transactioncategoryclassificationid: XQW.Guid;
  msdyn_transactionclassification: msdyn_transactionclassification;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_transactioncategoryclassification_statecode;
  statuscode: msdyn_transactioncategoryclassification_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_transactioncategoryclassification_Expand {
  createdby: WebExpand<msdyn_transactioncategoryclassification_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_transactioncategoryclassification_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_transactioncategoryclassification_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_transactioncategoryclassification_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_transactioncategory: WebExpand<msdyn_transactioncategoryclassification_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_transactioncategory: msdyn_transactioncategory_Result }>;
  msdyn_transactioncategoryclassification_Annotations: WebExpand<msdyn_transactioncategoryclassification_Expand, Annotation_Select, Annotation_Filter, { msdyn_transactioncategoryclassification_Annotations: Annotation_Result[] }>;
  msdyn_transactioncategoryclassification_AsyncOperations: WebExpand<msdyn_transactioncategoryclassification_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_transactioncategoryclassification_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_transactioncategoryclassification_BulkDeleteFailures: WebExpand<msdyn_transactioncategoryclassification_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_transactioncategoryclassification_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_transactioncategoryclassification_DuplicateBaseRecord: WebExpand<msdyn_transactioncategoryclassification_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactioncategoryclassification_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_transactioncategoryclassification_DuplicateMatchingRecord: WebExpand<msdyn_transactioncategoryclassification_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactioncategoryclassification_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_transactioncategoryclassification_MailboxTrackingFolders: WebExpand<msdyn_transactioncategoryclassification_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_transactioncategoryclassification_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses: WebExpand<msdyn_transactioncategoryclassification_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_transactioncategoryclassification_ProcessSession: WebExpand<msdyn_transactioncategoryclassification_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_transactioncategoryclassification_ProcessSession: ProcessSession_Result[] }>;
  msdyn_transactioncategoryclassification_SyncErrors: WebExpand<msdyn_transactioncategoryclassification_Expand, SyncError_Select, SyncError_Filter, { msdyn_transactioncategoryclassification_SyncErrors: SyncError_Result[] }>;
  msdyn_transactioncategoryclassification_UserEntityInstanceDatas: WebExpand<msdyn_transactioncategoryclassification_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_transactioncategoryclassification_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_transactioncategoryclassification_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_transactioncategoryclassification_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_transactioncategory_formatted?: string;
  msdyn_transactionclassification_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_transactioncategoryclassification_Result extends msdyn_transactioncategoryclassification_Base, msdyn_transactioncategoryclassification_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_transactioncategory_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_transactioncategoryclassification_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_transactioncategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_transactioncategoryclassification_RelatedMany {
  msdyn_transactioncategoryclassification_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_transactioncategoryclassification_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_transactioncategoryclassification_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_transactioncategoryclassification_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactioncategoryclassification_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactioncategoryclassification_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_transactioncategoryclassification_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_transactioncategoryclassification_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_transactioncategoryclassification_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_transactioncategoryclassification_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_transactioncategoryclassifications: WebMappingRetrieve<msdyn_transactioncategoryclassification_Select,msdyn_transactioncategoryclassification_Expand,msdyn_transactioncategoryclassification_Filter,msdyn_transactioncategoryclassification_Fixed,msdyn_transactioncategoryclassification_Result,msdyn_transactioncategoryclassification_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_transactioncategoryclassifications: WebMappingRelated<msdyn_transactioncategoryclassification_RelatedOne,msdyn_transactioncategoryclassification_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_transactioncategoryclassifications: WebMappingCUDA<msdyn_transactioncategoryclassification_Create,msdyn_transactioncategoryclassification_Update,msdyn_transactioncategoryclassification_Select>;
}
