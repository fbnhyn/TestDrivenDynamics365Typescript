interface msdyn_transactioncategoryhierarchyelement_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_transactioncategoryhierarchyelementid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_transactioncategoryhierarchyelement_statecode | null;
  statuscode?: msdyn_transactioncategoryhierarchyelement_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_transactioncategoryhierarchyelement_Relationships {
  msdyn_ChildCategory?: msdyn_transactioncategory_Result | null;
  msdyn_ParentCategory?: msdyn_transactioncategory_Result | null;
  msdyn_transactioncategoryhierarchyelement_Annotations?: Annotation_Result[] | null;
  msdyn_transactioncategoryhierarchyelement_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_transactioncategoryhierarchyelement_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_transactioncategoryhierarchyelement_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactioncategoryhierarchyelement_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactioncategoryhierarchyelement_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_transactioncategoryhierarchyelement_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_transactioncategoryhierarchyelement_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_transactioncategoryhierarchyelement_SyncErrors?: SyncError_Result[] | null;
  msdyn_transactioncategoryhierarchyelement_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_transactioncategoryhierarchyelement extends msdyn_transactioncategoryhierarchyelement_Base, msdyn_transactioncategoryhierarchyelement_Relationships {
  msdyn_ChildCategory_bind$msdyn_transactioncategories?: string | null;
  msdyn_ParentCategory_bind$msdyn_transactioncategories?: string | null;
}
interface msdyn_transactioncategoryhierarchyelement_Create extends msdyn_transactioncategoryhierarchyelement {
}
interface msdyn_transactioncategoryhierarchyelement_Update extends msdyn_transactioncategoryhierarchyelement {
}
interface msdyn_transactioncategoryhierarchyelement_Select {
  createdby_guid: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_childcategory_guid: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { msdyn_childcategory_guid: string | null }, { msdyn_childcategory_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { msdyn_name: string | null }, {  }>;
  msdyn_parentcategory_guid: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { msdyn_parentcategory_guid: string | null }, { msdyn_parentcategory_formatted?: string }>;
  msdyn_transactioncategoryhierarchyelementid: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { msdyn_transactioncategoryhierarchyelementid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { statecode: msdyn_transactioncategoryhierarchyelement_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { statuscode: msdyn_transactioncategoryhierarchyelement_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_transactioncategoryhierarchyelement_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_transactioncategoryhierarchyelement_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_childcategory_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_parentcategory_guid: XQW.Guid;
  msdyn_transactioncategoryhierarchyelementid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_transactioncategoryhierarchyelement_statecode;
  statuscode: msdyn_transactioncategoryhierarchyelement_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_transactioncategoryhierarchyelement_Expand {
  createdby: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ChildCategory: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_ChildCategory: msdyn_transactioncategory_Result }>;
  msdyn_ParentCategory: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_ParentCategory: msdyn_transactioncategory_Result }>;
  msdyn_transactioncategoryhierarchyelement_Annotations: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, Annotation_Select, Annotation_Filter, { msdyn_transactioncategoryhierarchyelement_Annotations: Annotation_Result[] }>;
  msdyn_transactioncategoryhierarchyelement_AsyncOperations: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_transactioncategoryhierarchyelement_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_transactioncategoryhierarchyelement_BulkDeleteFailures: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_transactioncategoryhierarchyelement_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_transactioncategoryhierarchyelement_DuplicateBaseRecord: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactioncategoryhierarchyelement_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_transactioncategoryhierarchyelement_DuplicateMatchingRecord: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactioncategoryhierarchyelement_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_transactioncategoryhierarchyelement_MailboxTrackingFolders: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_transactioncategoryhierarchyelement_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_transactioncategoryhierarchyelement_PrincipalObjectAttributeAccesses: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_transactioncategoryhierarchyelement_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_transactioncategoryhierarchyelement_ProcessSession: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_transactioncategoryhierarchyelement_ProcessSession: ProcessSession_Result[] }>;
  msdyn_transactioncategoryhierarchyelement_SyncErrors: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, SyncError_Select, SyncError_Filter, { msdyn_transactioncategoryhierarchyelement_SyncErrors: SyncError_Result[] }>;
  msdyn_transactioncategoryhierarchyelement_UserEntityInstanceDatas: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_transactioncategoryhierarchyelement_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_transactioncategoryhierarchyelement_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_transactioncategoryhierarchyelement_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_childcategory_formatted?: string;
  msdyn_parentcategory_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_transactioncategoryhierarchyelement_Result extends msdyn_transactioncategoryhierarchyelement_Base, msdyn_transactioncategoryhierarchyelement_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_childcategory_guid: string | null;
  msdyn_parentcategory_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_transactioncategoryhierarchyelement_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ChildCategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  msdyn_ParentCategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_transactioncategoryhierarchyelement_RelatedMany {
  msdyn_transactioncategoryhierarchyelement_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_transactioncategoryhierarchyelement_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_transactioncategoryhierarchyelement_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_transactioncategoryhierarchyelement_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactioncategoryhierarchyelement_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactioncategoryhierarchyelement_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_transactioncategoryhierarchyelement_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_transactioncategoryhierarchyelement_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_transactioncategoryhierarchyelement_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_transactioncategoryhierarchyelement_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_transactioncategoryhierarchyelements: WebMappingRetrieve<msdyn_transactioncategoryhierarchyelement_Select,msdyn_transactioncategoryhierarchyelement_Expand,msdyn_transactioncategoryhierarchyelement_Filter,msdyn_transactioncategoryhierarchyelement_Fixed,msdyn_transactioncategoryhierarchyelement_Result,msdyn_transactioncategoryhierarchyelement_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_transactioncategoryhierarchyelements: WebMappingRelated<msdyn_transactioncategoryhierarchyelement_RelatedOne,msdyn_transactioncategoryhierarchyelement_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_transactioncategoryhierarchyelements: WebMappingCUDA<msdyn_transactioncategoryhierarchyelement_Create,msdyn_transactioncategoryhierarchyelement_Update,msdyn_transactioncategoryhierarchyelement_Select>;
}
