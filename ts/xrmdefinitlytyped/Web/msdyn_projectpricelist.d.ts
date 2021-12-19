interface msdyn_projectpricelist_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_projectpricelistid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_projectpricelist_statecode | null;
  statuscode?: msdyn_projectpricelist_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_projectpricelist_Relationships {
  msdyn_PriceList?: PriceLevel_Result | null;
  msdyn_Project?: msdyn_project_Result | null;
  msdyn_projectpricelist_Annotations?: Annotation_Result[] | null;
  msdyn_projectpricelist_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_projectpricelist_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_projectpricelist_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_projectpricelist_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_projectpricelist_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_projectpricelist_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_projectpricelist_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_projectpricelist_SyncErrors?: SyncError_Result[] | null;
  msdyn_projectpricelist_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_projectpricelist extends msdyn_projectpricelist_Base, msdyn_projectpricelist_Relationships {
  msdyn_PriceList_bind$pricelevels?: string | null;
  msdyn_Project_bind$msdyn_projects?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_projectpricelist_Create extends msdyn_projectpricelist {
}
interface msdyn_projectpricelist_Update extends msdyn_projectpricelist {
}
interface msdyn_projectpricelist_Select {
  createdby_guid: WebAttribute<msdyn_projectpricelist_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_projectpricelist_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_projectpricelist_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_projectpricelist_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_projectpricelist_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_projectpricelist_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_projectpricelist_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_projectpricelist_Select, { msdyn_description: string | null }, {  }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_projectpricelist_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_project_guid: WebAttribute<msdyn_projectpricelist_Select, { msdyn_project_guid: string | null }, { msdyn_project_formatted?: string }>;
  msdyn_projectpricelistid: WebAttribute<msdyn_projectpricelist_Select, { msdyn_projectpricelistid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_projectpricelist_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_projectpricelist_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_projectpricelist_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_projectpricelist_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_projectpricelist_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_projectpricelist_Select, { statecode: msdyn_projectpricelist_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_projectpricelist_Select, { statuscode: msdyn_projectpricelist_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_projectpricelist_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_projectpricelist_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_projectpricelist_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_projectpricelist_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_project_guid: XQW.Guid;
  msdyn_projectpricelistid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_projectpricelist_statecode;
  statuscode: msdyn_projectpricelist_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_projectpricelist_Expand {
  createdby: WebExpand<msdyn_projectpricelist_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_projectpricelist_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_projectpricelist_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_projectpricelist_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_PriceList: WebExpand<msdyn_projectpricelist_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_PriceList: PriceLevel_Result }>;
  msdyn_Project: WebExpand<msdyn_projectpricelist_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_Project: msdyn_project_Result }>;
  msdyn_projectpricelist_Annotations: WebExpand<msdyn_projectpricelist_Expand, Annotation_Select, Annotation_Filter, { msdyn_projectpricelist_Annotations: Annotation_Result[] }>;
  msdyn_projectpricelist_AsyncOperations: WebExpand<msdyn_projectpricelist_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_projectpricelist_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_projectpricelist_BulkDeleteFailures: WebExpand<msdyn_projectpricelist_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_projectpricelist_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_projectpricelist_DuplicateBaseRecord: WebExpand<msdyn_projectpricelist_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projectpricelist_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_projectpricelist_DuplicateMatchingRecord: WebExpand<msdyn_projectpricelist_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projectpricelist_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_projectpricelist_MailboxTrackingFolders: WebExpand<msdyn_projectpricelist_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_projectpricelist_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_projectpricelist_PrincipalObjectAttributeAccesses: WebExpand<msdyn_projectpricelist_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_projectpricelist_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_projectpricelist_ProcessSession: WebExpand<msdyn_projectpricelist_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_projectpricelist_ProcessSession: ProcessSession_Result[] }>;
  msdyn_projectpricelist_SyncErrors: WebExpand<msdyn_projectpricelist_Expand, SyncError_Select, SyncError_Filter, { msdyn_projectpricelist_SyncErrors: SyncError_Result[] }>;
  msdyn_projectpricelist_UserEntityInstanceDatas: WebExpand<msdyn_projectpricelist_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_projectpricelist_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_projectpricelist_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_projectpricelist_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_projectpricelist_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_projectpricelist_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_projectpricelist_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_pricelist_formatted?: string;
  msdyn_project_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_projectpricelist_Result extends msdyn_projectpricelist_Base, msdyn_projectpricelist_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_pricelist_guid: string | null;
  msdyn_project_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_projectpricelist_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_PriceList: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  msdyn_Project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_projectpricelist_RelatedMany {
  msdyn_projectpricelist_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_projectpricelist_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_projectpricelist_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_projectpricelist_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projectpricelist_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projectpricelist_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_projectpricelist_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_projectpricelist_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_projectpricelist_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_projectpricelist_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_projectpricelists: WebMappingRetrieve<msdyn_projectpricelist_Select,msdyn_projectpricelist_Expand,msdyn_projectpricelist_Filter,msdyn_projectpricelist_Fixed,msdyn_projectpricelist_Result,msdyn_projectpricelist_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_projectpricelists: WebMappingRelated<msdyn_projectpricelist_RelatedOne,msdyn_projectpricelist_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_projectpricelists: WebMappingCUDA<msdyn_projectpricelist_Create,msdyn_projectpricelist_Update,msdyn_projectpricelist_Select>;
}
