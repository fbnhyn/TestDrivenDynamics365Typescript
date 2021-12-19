interface msdyn_requirementresourcecategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_isprimary?: boolean | null;
  msdyn_name?: string | null;
  msdyn_requirementresourcecategoryid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_requirementresourcecategory_statecode | null;
  statuscode?: msdyn_requirementresourcecategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_requirementresourcecategory_Relationships {
  msdyn_ResourceCategory?: BookableResourceCategory_Result | null;
  msdyn_ResourceRequirement?: msdyn_resourcerequirement_Result | null;
  msdyn_requirementresourcecategory_Annotations?: Annotation_Result[] | null;
  msdyn_requirementresourcecategory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_requirementresourcecategory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_requirementresourcecategory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementresourcecategory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementresourcecategory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_requirementresourcecategory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_requirementresourcecategory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_requirementresourcecategory_SyncErrors?: SyncError_Result[] | null;
  msdyn_requirementresourcecategory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_requirementresourcecategory extends msdyn_requirementresourcecategory_Base, msdyn_requirementresourcecategory_Relationships {
  msdyn_ResourceCategory_bind$bookableresourcecategories?: string | null;
  msdyn_ResourceRequirement_bind$msdyn_resourcerequirements?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_requirementresourcecategory_Create extends msdyn_requirementresourcecategory {
}
interface msdyn_requirementresourcecategory_Update extends msdyn_requirementresourcecategory {
}
interface msdyn_requirementresourcecategory_Select {
  createdby_guid: WebAttribute<msdyn_requirementresourcecategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_requirementresourcecategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_requirementresourcecategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_requirementresourcecategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_requirementresourcecategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_requirementresourcecategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_requirementresourcecategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_isprimary: WebAttribute<msdyn_requirementresourcecategory_Select, { msdyn_isprimary: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_requirementresourcecategory_Select, { msdyn_name: string | null }, {  }>;
  msdyn_requirementresourcecategoryid: WebAttribute<msdyn_requirementresourcecategory_Select, { msdyn_requirementresourcecategoryid: string | null }, {  }>;
  msdyn_resourcecategory_guid: WebAttribute<msdyn_requirementresourcecategory_Select, { msdyn_resourcecategory_guid: string | null }, { msdyn_resourcecategory_formatted?: string }>;
  msdyn_resourcerequirement_guid: WebAttribute<msdyn_requirementresourcecategory_Select, { msdyn_resourcerequirement_guid: string | null }, { msdyn_resourcerequirement_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_requirementresourcecategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_requirementresourcecategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_requirementresourcecategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_requirementresourcecategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_requirementresourcecategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_requirementresourcecategory_Select, { statecode: msdyn_requirementresourcecategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_requirementresourcecategory_Select, { statuscode: msdyn_requirementresourcecategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_requirementresourcecategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_requirementresourcecategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_requirementresourcecategory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_requirementresourcecategory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_isprimary: boolean;
  msdyn_name: string;
  msdyn_requirementresourcecategoryid: XQW.Guid;
  msdyn_resourcecategory_guid: XQW.Guid;
  msdyn_resourcerequirement_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_requirementresourcecategory_statecode;
  statuscode: msdyn_requirementresourcecategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_requirementresourcecategory_Expand {
  createdby: WebExpand<msdyn_requirementresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_requirementresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_requirementresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_requirementresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ResourceCategory: WebExpand<msdyn_requirementresourcecategory_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_ResourceCategory: BookableResourceCategory_Result }>;
  msdyn_ResourceRequirement: WebExpand<msdyn_requirementresourcecategory_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_ResourceRequirement: msdyn_resourcerequirement_Result }>;
  msdyn_requirementresourcecategory_Annotations: WebExpand<msdyn_requirementresourcecategory_Expand, Annotation_Select, Annotation_Filter, { msdyn_requirementresourcecategory_Annotations: Annotation_Result[] }>;
  msdyn_requirementresourcecategory_AsyncOperations: WebExpand<msdyn_requirementresourcecategory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_requirementresourcecategory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_requirementresourcecategory_BulkDeleteFailures: WebExpand<msdyn_requirementresourcecategory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_requirementresourcecategory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_requirementresourcecategory_DuplicateBaseRecord: WebExpand<msdyn_requirementresourcecategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementresourcecategory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementresourcecategory_DuplicateMatchingRecord: WebExpand<msdyn_requirementresourcecategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementresourcecategory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementresourcecategory_MailboxTrackingFolders: WebExpand<msdyn_requirementresourcecategory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_requirementresourcecategory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_requirementresourcecategory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_requirementresourcecategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_requirementresourcecategory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_requirementresourcecategory_ProcessSession: WebExpand<msdyn_requirementresourcecategory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_requirementresourcecategory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_requirementresourcecategory_SyncErrors: WebExpand<msdyn_requirementresourcecategory_Expand, SyncError_Select, SyncError_Filter, { msdyn_requirementresourcecategory_SyncErrors: SyncError_Result[] }>;
  msdyn_requirementresourcecategory_UserEntityInstanceDatas: WebExpand<msdyn_requirementresourcecategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_requirementresourcecategory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_requirementresourcecategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_requirementresourcecategory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_requirementresourcecategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_requirementresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_requirementresourcecategory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_resourcecategory_formatted?: string;
  msdyn_resourcerequirement_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_requirementresourcecategory_Result extends msdyn_requirementresourcecategory_Base, msdyn_requirementresourcecategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_resourcecategory_guid: string | null;
  msdyn_resourcerequirement_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_requirementresourcecategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ResourceCategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  msdyn_ResourceRequirement: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_requirementresourcecategory_RelatedMany {
  msdyn_requirementresourcecategory_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_requirementresourcecategory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_requirementresourcecategory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_requirementresourcecategory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementresourcecategory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementresourcecategory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_requirementresourcecategory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_requirementresourcecategory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_requirementresourcecategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_requirementresourcecategory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_requirementresourcecategories: WebMappingRetrieve<msdyn_requirementresourcecategory_Select,msdyn_requirementresourcecategory_Expand,msdyn_requirementresourcecategory_Filter,msdyn_requirementresourcecategory_Fixed,msdyn_requirementresourcecategory_Result,msdyn_requirementresourcecategory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_requirementresourcecategories: WebMappingRelated<msdyn_requirementresourcecategory_RelatedOne,msdyn_requirementresourcecategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_requirementresourcecategories: WebMappingCUDA<msdyn_requirementresourcecategory_Create,msdyn_requirementresourcecategory_Update,msdyn_requirementresourcecategory_Select>;
}
