interface msdyn_incidenttyperecommendationresult_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_incidenttypeid?: string | null;
  msdyn_incidenttypeidformerge?: string | null;
  msdyn_incidenttyperecommendationresultid?: string | null;
  msdyn_name?: string | null;
  msdyn_occurrencetimes?: number | null;
  msdyn_productserviceid?: string | null;
  msdyn_recommendationdescription?: string | null;
  msdyn_recommendationtype?: msdyn_incidenttyperecommendationresult_msdyn_recommendationtype | null;
  msdyn_runid?: string | null;
  msdyn_scoreranking?: number | null;
  msdyn_suggestedvalue?: number | null;
  msdyn_totaloccurrencetimes?: number | null;
  msdyn_unitid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_incidenttyperecommendationresult_statecode | null;
  statuscode?: msdyn_incidenttyperecommendationresult_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_incidenttyperecommendationresult_Relationships {
  msdyn_IncidentType?: msdyn_incidenttype_Result | null;
  msdyn_IncidentTypeForMerge?: msdyn_incidenttype_Result | null;
  msdyn_ProductService?: Product_Result | null;
  msdyn_RunHistoryId?: msdyn_incidenttyperecommendationrunhistory_Result | null;
  msdyn_Unit?: UoM_Result | null;
  msdyn_incidenttyperecommendationresult_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_incidenttyperecommendationresult_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_incidenttyperecommendationresult_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttyperecommendationresult_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_incidenttyperecommendationresult_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_incidenttyperecommendationresult_SyncErrors?: SyncError_Result[] | null;
  msdyn_incidenttyperecommendationresult_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult?: msdyn_incidenttypeproduct_Result[] | null;
  msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult?: msdyn_incidenttypeservice_Result[] | null;
}
interface msdyn_incidenttyperecommendationresult extends msdyn_incidenttyperecommendationresult_Base, msdyn_incidenttyperecommendationresult_Relationships {
  msdyn_IncidentTypeForMerge_bind$msdyn_incidenttypes?: string | null;
  msdyn_IncidentType_bind$msdyn_incidenttypes?: string | null;
  msdyn_ProductService_bind$products?: string | null;
  msdyn_RunHistoryId_bind$msdyn_incidenttyperecommendationrunhistories?: string | null;
  msdyn_Unit_bind$uoms?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_incidenttyperecommendationresult_Create extends msdyn_incidenttyperecommendationresult {
}
interface msdyn_incidenttyperecommendationresult_Update extends msdyn_incidenttyperecommendationresult {
}
interface msdyn_incidenttyperecommendationresult_Select {
  createdby_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_incidenttype_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_incidenttype_guid: string | null }, { msdyn_incidenttype_formatted?: string }>;
  msdyn_incidenttypeformerge_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_incidenttypeformerge_guid: string | null }, { msdyn_incidenttypeformerge_formatted?: string }>;
  msdyn_incidenttypeid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_incidenttypeid: string | null }, {  }>;
  msdyn_incidenttypeidformerge: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_incidenttypeidformerge: string | null }, {  }>;
  msdyn_incidenttyperecommendationresultid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_incidenttyperecommendationresultid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_name: string | null }, {  }>;
  msdyn_occurrencetimes: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_occurrencetimes: number | null }, {  }>;
  msdyn_productservice_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_productservice_guid: string | null }, { msdyn_productservice_formatted?: string }>;
  msdyn_productserviceid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_productserviceid: string | null }, {  }>;
  msdyn_recommendationdescription: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_recommendationdescription: string | null }, {  }>;
  msdyn_recommendationtype: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_recommendationtype: msdyn_incidenttyperecommendationresult_msdyn_recommendationtype | null }, { msdyn_recommendationtype_formatted?: string }>;
  msdyn_runhistoryid_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_runhistoryid_guid: string | null }, { msdyn_runhistoryid_formatted?: string }>;
  msdyn_runid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_runid: string | null }, {  }>;
  msdyn_scoreranking: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_scoreranking: number | null }, {  }>;
  msdyn_suggestedvalue: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_suggestedvalue: number | null }, {  }>;
  msdyn_totaloccurrencetimes: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_totaloccurrencetimes: number | null }, {  }>;
  msdyn_unit_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_unitid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { msdyn_unitid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { statecode: msdyn_incidenttyperecommendationresult_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { statuscode: msdyn_incidenttyperecommendationresult_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_incidenttyperecommendationresult_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_incidenttyperecommendationresult_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_incidenttype_guid: XQW.Guid;
  msdyn_incidenttypeformerge_guid: XQW.Guid;
  msdyn_incidenttypeid: string;
  msdyn_incidenttypeidformerge: string;
  msdyn_incidenttyperecommendationresultid: XQW.Guid;
  msdyn_name: string;
  msdyn_occurrencetimes: number;
  msdyn_productservice_guid: XQW.Guid;
  msdyn_productserviceid: string;
  msdyn_recommendationdescription: string;
  msdyn_recommendationtype: msdyn_incidenttyperecommendationresult_msdyn_recommendationtype;
  msdyn_runhistoryid_guid: XQW.Guid;
  msdyn_runid: string;
  msdyn_scoreranking: number;
  msdyn_suggestedvalue: number;
  msdyn_totaloccurrencetimes: number;
  msdyn_unit_guid: XQW.Guid;
  msdyn_unitid: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_incidenttyperecommendationresult_statecode;
  statuscode: msdyn_incidenttyperecommendationresult_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_incidenttyperecommendationresult_Expand {
  createdby: WebExpand<msdyn_incidenttyperecommendationresult_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_incidenttyperecommendationresult_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_incidenttyperecommendationresult_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_incidenttyperecommendationresult_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_IncidentType: WebExpand<msdyn_incidenttyperecommendationresult_Expand, msdyn_incidenttype_Select, msdyn_incidenttype_Filter, { msdyn_IncidentType: msdyn_incidenttype_Result }>;
  msdyn_IncidentTypeForMerge: WebExpand<msdyn_incidenttyperecommendationresult_Expand, msdyn_incidenttype_Select, msdyn_incidenttype_Filter, { msdyn_IncidentTypeForMerge: msdyn_incidenttype_Result }>;
  msdyn_ProductService: WebExpand<msdyn_incidenttyperecommendationresult_Expand, Product_Select, Product_Filter, { msdyn_ProductService: Product_Result }>;
  msdyn_RunHistoryId: WebExpand<msdyn_incidenttyperecommendationresult_Expand, msdyn_incidenttyperecommendationrunhistory_Select, msdyn_incidenttyperecommendationrunhistory_Filter, { msdyn_RunHistoryId: msdyn_incidenttyperecommendationrunhistory_Result }>;
  msdyn_Unit: WebExpand<msdyn_incidenttyperecommendationresult_Expand, UoM_Select, UoM_Filter, { msdyn_Unit: UoM_Result }>;
  msdyn_incidenttyperecommendationresult_AsyncOperations: WebExpand<msdyn_incidenttyperecommendationresult_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_incidenttyperecommendationresult_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_incidenttyperecommendationresult_BulkDeleteFailures: WebExpand<msdyn_incidenttyperecommendationresult_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_incidenttyperecommendationresult_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_incidenttyperecommendationresult_DuplicateBaseRecord: WebExpand<msdyn_incidenttyperecommendationresult_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttyperecommendationresult_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord: WebExpand<msdyn_incidenttyperecommendationresult_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttyperecommendationresult_MailboxTrackingFolders: WebExpand<msdyn_incidenttyperecommendationresult_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_incidenttyperecommendationresult_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses: WebExpand<msdyn_incidenttyperecommendationresult_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_incidenttyperecommendationresult_ProcessSession: WebExpand<msdyn_incidenttyperecommendationresult_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_incidenttyperecommendationresult_ProcessSession: ProcessSession_Result[] }>;
  msdyn_incidenttyperecommendationresult_SyncErrors: WebExpand<msdyn_incidenttyperecommendationresult_Expand, SyncError_Select, SyncError_Filter, { msdyn_incidenttyperecommendationresult_SyncErrors: SyncError_Result[] }>;
  msdyn_incidenttyperecommendationresult_UserEntityInstanceDatas: WebExpand<msdyn_incidenttyperecommendationresult_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_incidenttyperecommendationresult_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult: WebExpand<msdyn_incidenttyperecommendationresult_Expand, msdyn_incidenttypeproduct_Select, msdyn_incidenttypeproduct_Filter, { msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult: msdyn_incidenttypeproduct_Result[] }>;
  msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult: WebExpand<msdyn_incidenttyperecommendationresult_Expand, msdyn_incidenttypeservice_Select, msdyn_incidenttypeservice_Filter, { msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult: msdyn_incidenttypeservice_Result[] }>;
  ownerid: WebExpand<msdyn_incidenttyperecommendationresult_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_incidenttyperecommendationresult_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_incidenttyperecommendationresult_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_incidenttyperecommendationresult_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_incidenttyperecommendationresult_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_incidenttype_formatted?: string;
  msdyn_incidenttypeformerge_formatted?: string;
  msdyn_productservice_formatted?: string;
  msdyn_recommendationtype_formatted?: string;
  msdyn_runhistoryid_formatted?: string;
  msdyn_unit_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_incidenttyperecommendationresult_Result extends msdyn_incidenttyperecommendationresult_Base, msdyn_incidenttyperecommendationresult_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_incidenttype_guid: string | null;
  msdyn_incidenttypeformerge_guid: string | null;
  msdyn_productservice_guid: string | null;
  msdyn_runhistoryid_guid: string | null;
  msdyn_unit_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_incidenttyperecommendationresult_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_IncidentType: WebMappingRetrieve<msdyn_incidenttype_Select,msdyn_incidenttype_Expand,msdyn_incidenttype_Filter,msdyn_incidenttype_Fixed,msdyn_incidenttype_Result,msdyn_incidenttype_FormattedResult>;
  msdyn_IncidentTypeForMerge: WebMappingRetrieve<msdyn_incidenttype_Select,msdyn_incidenttype_Expand,msdyn_incidenttype_Filter,msdyn_incidenttype_Fixed,msdyn_incidenttype_Result,msdyn_incidenttype_FormattedResult>;
  msdyn_ProductService: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  msdyn_RunHistoryId: WebMappingRetrieve<msdyn_incidenttyperecommendationrunhistory_Select,msdyn_incidenttyperecommendationrunhistory_Expand,msdyn_incidenttyperecommendationrunhistory_Filter,msdyn_incidenttyperecommendationrunhistory_Fixed,msdyn_incidenttyperecommendationrunhistory_Result,msdyn_incidenttyperecommendationrunhistory_FormattedResult>;
  msdyn_Unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_incidenttyperecommendationresult_RelatedMany {
  msdyn_incidenttyperecommendationresult_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_incidenttyperecommendationresult_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_incidenttyperecommendationresult_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttyperecommendationresult_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttyperecommendationresult_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_incidenttyperecommendationresult_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_incidenttyperecommendationresult_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_incidenttyperecommendationresult_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_incidenttyperecommendationresult_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeproduct_AppliedSuggestionResult: WebMappingRetrieve<msdyn_incidenttypeproduct_Select,msdyn_incidenttypeproduct_Expand,msdyn_incidenttypeproduct_Filter,msdyn_incidenttypeproduct_Fixed,msdyn_incidenttypeproduct_Result,msdyn_incidenttypeproduct_FormattedResult>;
  msdyn_msdyn_incidenttyperecommendationresult_msdyn_incidenttypeservice_AppliedSuggestionResult: WebMappingRetrieve<msdyn_incidenttypeservice_Select,msdyn_incidenttypeservice_Expand,msdyn_incidenttypeservice_Filter,msdyn_incidenttypeservice_Fixed,msdyn_incidenttypeservice_Result,msdyn_incidenttypeservice_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_incidenttyperecommendationresults: WebMappingRetrieve<msdyn_incidenttyperecommendationresult_Select,msdyn_incidenttyperecommendationresult_Expand,msdyn_incidenttyperecommendationresult_Filter,msdyn_incidenttyperecommendationresult_Fixed,msdyn_incidenttyperecommendationresult_Result,msdyn_incidenttyperecommendationresult_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_incidenttyperecommendationresults: WebMappingRelated<msdyn_incidenttyperecommendationresult_RelatedOne,msdyn_incidenttyperecommendationresult_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_incidenttyperecommendationresults: WebMappingCUDA<msdyn_incidenttyperecommendationresult_Create,msdyn_incidenttyperecommendationresult_Update,msdyn_incidenttyperecommendationresult_Select>;
}
