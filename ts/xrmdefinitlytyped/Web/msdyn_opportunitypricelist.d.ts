interface msdyn_opportunitypricelist_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_opportunitypricelistid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_opportunitypricelist_statecode | null;
  statuscode?: msdyn_opportunitypricelist_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_opportunitypricelist_Relationships {
  msdyn_Opportunity?: Opportunity_Result | null;
  msdyn_PriceList?: PriceLevel_Result | null;
  msdyn_opportunitypricelist_Annotations?: Annotation_Result[] | null;
  msdyn_opportunitypricelist_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_opportunitypricelist_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_opportunitypricelist_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_opportunitypricelist_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_opportunitypricelist_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_opportunitypricelist_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_opportunitypricelist_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_opportunitypricelist_SyncErrors?: SyncError_Result[] | null;
  msdyn_opportunitypricelist_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_opportunitypricelist extends msdyn_opportunitypricelist_Base, msdyn_opportunitypricelist_Relationships {
  msdyn_Opportunity_bind$opportunities?: string | null;
  msdyn_PriceList_bind$pricelevels?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_opportunitypricelist_Create extends msdyn_opportunitypricelist {
}
interface msdyn_opportunitypricelist_Update extends msdyn_opportunitypricelist {
}
interface msdyn_opportunitypricelist_Select {
  createdby_guid: WebAttribute<msdyn_opportunitypricelist_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_opportunitypricelist_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_opportunitypricelist_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_opportunitypricelist_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_opportunitypricelist_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_opportunitypricelist_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_opportunitypricelist_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_opportunitypricelist_Select, { msdyn_description: string | null }, {  }>;
  msdyn_opportunity_guid: WebAttribute<msdyn_opportunitypricelist_Select, { msdyn_opportunity_guid: string | null }, { msdyn_opportunity_formatted?: string }>;
  msdyn_opportunitypricelistid: WebAttribute<msdyn_opportunitypricelist_Select, { msdyn_opportunitypricelistid: string | null }, {  }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_opportunitypricelist_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_opportunitypricelist_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_opportunitypricelist_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_opportunitypricelist_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_opportunitypricelist_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_opportunitypricelist_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_opportunitypricelist_Select, { statecode: msdyn_opportunitypricelist_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_opportunitypricelist_Select, { statuscode: msdyn_opportunitypricelist_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_opportunitypricelist_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_opportunitypricelist_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_opportunitypricelist_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_opportunitypricelist_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_opportunity_guid: XQW.Guid;
  msdyn_opportunitypricelistid: XQW.Guid;
  msdyn_pricelist_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_opportunitypricelist_statecode;
  statuscode: msdyn_opportunitypricelist_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_opportunitypricelist_Expand {
  createdby: WebExpand<msdyn_opportunitypricelist_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_opportunitypricelist_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_opportunitypricelist_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_opportunitypricelist_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Opportunity: WebExpand<msdyn_opportunitypricelist_Expand, Opportunity_Select, Opportunity_Filter, { msdyn_Opportunity: Opportunity_Result }>;
  msdyn_PriceList: WebExpand<msdyn_opportunitypricelist_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_PriceList: PriceLevel_Result }>;
  msdyn_opportunitypricelist_Annotations: WebExpand<msdyn_opportunitypricelist_Expand, Annotation_Select, Annotation_Filter, { msdyn_opportunitypricelist_Annotations: Annotation_Result[] }>;
  msdyn_opportunitypricelist_AsyncOperations: WebExpand<msdyn_opportunitypricelist_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_opportunitypricelist_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_opportunitypricelist_BulkDeleteFailures: WebExpand<msdyn_opportunitypricelist_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_opportunitypricelist_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_opportunitypricelist_DuplicateBaseRecord: WebExpand<msdyn_opportunitypricelist_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_opportunitypricelist_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_opportunitypricelist_DuplicateMatchingRecord: WebExpand<msdyn_opportunitypricelist_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_opportunitypricelist_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_opportunitypricelist_MailboxTrackingFolders: WebExpand<msdyn_opportunitypricelist_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_opportunitypricelist_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_opportunitypricelist_PrincipalObjectAttributeAccesses: WebExpand<msdyn_opportunitypricelist_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_opportunitypricelist_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_opportunitypricelist_ProcessSession: WebExpand<msdyn_opportunitypricelist_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_opportunitypricelist_ProcessSession: ProcessSession_Result[] }>;
  msdyn_opportunitypricelist_SyncErrors: WebExpand<msdyn_opportunitypricelist_Expand, SyncError_Select, SyncError_Filter, { msdyn_opportunitypricelist_SyncErrors: SyncError_Result[] }>;
  msdyn_opportunitypricelist_UserEntityInstanceDatas: WebExpand<msdyn_opportunitypricelist_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_opportunitypricelist_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_opportunitypricelist_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_opportunitypricelist_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_opportunitypricelist_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_opportunitypricelist_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_opportunitypricelist_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_opportunity_formatted?: string;
  msdyn_pricelist_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_opportunitypricelist_Result extends msdyn_opportunitypricelist_Base, msdyn_opportunitypricelist_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_opportunity_guid: string | null;
  msdyn_pricelist_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_opportunitypricelist_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Opportunity: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  msdyn_PriceList: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_opportunitypricelist_RelatedMany {
  msdyn_opportunitypricelist_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_opportunitypricelist_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_opportunitypricelist_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_opportunitypricelist_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_opportunitypricelist_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_opportunitypricelist_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_opportunitypricelist_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_opportunitypricelist_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_opportunitypricelist_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_opportunitypricelist_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_opportunitypricelists: WebMappingRetrieve<msdyn_opportunitypricelist_Select,msdyn_opportunitypricelist_Expand,msdyn_opportunitypricelist_Filter,msdyn_opportunitypricelist_Fixed,msdyn_opportunitypricelist_Result,msdyn_opportunitypricelist_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_opportunitypricelists: WebMappingRelated<msdyn_opportunitypricelist_RelatedOne,msdyn_opportunitypricelist_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_opportunitypricelists: WebMappingCUDA<msdyn_opportunitypricelist_Create,msdyn_opportunitypricelist_Update,msdyn_opportunitypricelist_Select>;
}
