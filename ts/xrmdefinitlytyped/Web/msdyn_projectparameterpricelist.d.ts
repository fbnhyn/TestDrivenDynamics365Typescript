interface msdyn_projectparameterpricelist_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_projectparameterpricelistid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_projectparameterpricelist_statecode | null;
  statuscode?: msdyn_projectparameterpricelist_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_projectparameterpricelist_Relationships {
  msdyn_PriceList?: PriceLevel_Result | null;
  msdyn_ProjectParameter?: msdyn_projectparameter_Result | null;
  msdyn_projectparameterpricelist_Annotations?: Annotation_Result[] | null;
  msdyn_projectparameterpricelist_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_projectparameterpricelist_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_projectparameterpricelist_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_projectparameterpricelist_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_projectparameterpricelist_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_projectparameterpricelist_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_projectparameterpricelist_SyncErrors?: SyncError_Result[] | null;
  msdyn_projectparameterpricelist_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_projectparameterpricelist extends msdyn_projectparameterpricelist_Base, msdyn_projectparameterpricelist_Relationships {
  msdyn_ProjectParameter_bind$msdyn_projectparameters?: string | null;
}
interface msdyn_projectparameterpricelist_Create extends msdyn_projectparameterpricelist {
  msdyn_PriceList_bind$pricelevels?: string | null;
}
interface msdyn_projectparameterpricelist_Update extends msdyn_projectparameterpricelist {
}
interface msdyn_projectparameterpricelist_Select {
  createdby_guid: WebAttribute<msdyn_projectparameterpricelist_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_projectparameterpricelist_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_projectparameterpricelist_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_projectparameterpricelist_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_projectparameterpricelist_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_projectparameterpricelist_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_projectparameterpricelist_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_projectparameterpricelist_Select, { msdyn_description: string | null }, {  }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_projectparameterpricelist_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_projectparameter_guid: WebAttribute<msdyn_projectparameterpricelist_Select, { msdyn_projectparameter_guid: string | null }, { msdyn_projectparameter_formatted?: string }>;
  msdyn_projectparameterpricelistid: WebAttribute<msdyn_projectparameterpricelist_Select, { msdyn_projectparameterpricelistid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_projectparameterpricelist_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_projectparameterpricelist_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_projectparameterpricelist_Select, { statecode: msdyn_projectparameterpricelist_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_projectparameterpricelist_Select, { statuscode: msdyn_projectparameterpricelist_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_projectparameterpricelist_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_projectparameterpricelist_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_projectparameterpricelist_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_projectparameterpricelist_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_projectparameter_guid: XQW.Guid;
  msdyn_projectparameterpricelistid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_projectparameterpricelist_statecode;
  statuscode: msdyn_projectparameterpricelist_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_projectparameterpricelist_Expand {
  createdby: WebExpand<msdyn_projectparameterpricelist_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_projectparameterpricelist_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_projectparameterpricelist_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_projectparameterpricelist_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_PriceList: WebExpand<msdyn_projectparameterpricelist_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_PriceList: PriceLevel_Result }>;
  msdyn_ProjectParameter: WebExpand<msdyn_projectparameterpricelist_Expand, msdyn_projectparameter_Select, msdyn_projectparameter_Filter, { msdyn_ProjectParameter: msdyn_projectparameter_Result }>;
  msdyn_projectparameterpricelist_Annotations: WebExpand<msdyn_projectparameterpricelist_Expand, Annotation_Select, Annotation_Filter, { msdyn_projectparameterpricelist_Annotations: Annotation_Result[] }>;
  msdyn_projectparameterpricelist_AsyncOperations: WebExpand<msdyn_projectparameterpricelist_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_projectparameterpricelist_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_projectparameterpricelist_BulkDeleteFailures: WebExpand<msdyn_projectparameterpricelist_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_projectparameterpricelist_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_projectparameterpricelist_DuplicateBaseRecord: WebExpand<msdyn_projectparameterpricelist_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projectparameterpricelist_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_projectparameterpricelist_DuplicateMatchingRecord: WebExpand<msdyn_projectparameterpricelist_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projectparameterpricelist_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_projectparameterpricelist_MailboxTrackingFolders: WebExpand<msdyn_projectparameterpricelist_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_projectparameterpricelist_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses: WebExpand<msdyn_projectparameterpricelist_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_projectparameterpricelist_ProcessSession: WebExpand<msdyn_projectparameterpricelist_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_projectparameterpricelist_ProcessSession: ProcessSession_Result[] }>;
  msdyn_projectparameterpricelist_SyncErrors: WebExpand<msdyn_projectparameterpricelist_Expand, SyncError_Select, SyncError_Filter, { msdyn_projectparameterpricelist_SyncErrors: SyncError_Result[] }>;
  msdyn_projectparameterpricelist_UserEntityInstanceDatas: WebExpand<msdyn_projectparameterpricelist_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_projectparameterpricelist_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_projectparameterpricelist_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_projectparameterpricelist_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_pricelist_formatted?: string;
  msdyn_projectparameter_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_projectparameterpricelist_Result extends msdyn_projectparameterpricelist_Base, msdyn_projectparameterpricelist_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_pricelist_guid: string | null;
  msdyn_projectparameter_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_projectparameterpricelist_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_PriceList: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  msdyn_ProjectParameter: WebMappingRetrieve<msdyn_projectparameter_Select,msdyn_projectparameter_Expand,msdyn_projectparameter_Filter,msdyn_projectparameter_Fixed,msdyn_projectparameter_Result,msdyn_projectparameter_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_projectparameterpricelist_RelatedMany {
  msdyn_projectparameterpricelist_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_projectparameterpricelist_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_projectparameterpricelist_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_projectparameterpricelist_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projectparameterpricelist_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projectparameterpricelist_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_projectparameterpricelist_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_projectparameterpricelist_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_projectparameterpricelist_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_projectparameterpricelist_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_projectparameterpricelists: WebMappingRetrieve<msdyn_projectparameterpricelist_Select,msdyn_projectparameterpricelist_Expand,msdyn_projectparameterpricelist_Filter,msdyn_projectparameterpricelist_Fixed,msdyn_projectparameterpricelist_Result,msdyn_projectparameterpricelist_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_projectparameterpricelists: WebMappingRelated<msdyn_projectparameterpricelist_RelatedOne,msdyn_projectparameterpricelist_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_projectparameterpricelists: WebMappingCUDA<msdyn_projectparameterpricelist_Create,msdyn_projectparameterpricelist_Update,msdyn_projectparameterpricelist_Select>;
}
