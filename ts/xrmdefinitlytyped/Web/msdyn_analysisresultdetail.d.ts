interface msdyn_analysisresultdetail_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_analysisresultdetailid?: string | null;
  msdyn_canopenentityrecord?: boolean | null;
  msdyn_entityname?: string | null;
  msdyn_message?: string | null;
  msdyn_name?: string | null;
  msdyn_resultentityid?: string | null;
  msdyn_resultentitylogicalname?: string | null;
  msdyn_resultentityprimarykey?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_analysisresultdetail_statecode | null;
  statuscode?: msdyn_analysisresultdetail_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_analysisresultdetail_Relationships {
  msdyn_AnalysisResult?: msdyn_analysisresult_Result | null;
  msdyn_analysisresultdetail_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_analysisresultdetail_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_analysisresultdetail_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_analysisresultdetail_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_analysisresultdetail_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_analysisresultdetail_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_analysisresultdetail_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_analysisresultdetail_SyncErrors?: SyncError_Result[] | null;
  msdyn_analysisresultdetail_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_analysisresultdetail extends msdyn_analysisresultdetail_Base, msdyn_analysisresultdetail_Relationships {
  msdyn_AnalysisResult_bind$msdyn_analysisresults?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_analysisresultdetail_Create extends msdyn_analysisresultdetail {
}
interface msdyn_analysisresultdetail_Update extends msdyn_analysisresultdetail {
}
interface msdyn_analysisresultdetail_Select {
  createdby_guid: WebAttribute<msdyn_analysisresultdetail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_analysisresultdetail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_analysisresultdetail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_analysisresultdetail_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_analysisresultdetail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_analysisresultdetail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_analysisresultdetail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_analysisresult_guid: WebAttribute<msdyn_analysisresultdetail_Select, { msdyn_analysisresult_guid: string | null }, { msdyn_analysisresult_formatted?: string }>;
  msdyn_analysisresultdetailid: WebAttribute<msdyn_analysisresultdetail_Select, { msdyn_analysisresultdetailid: string | null }, {  }>;
  msdyn_canopenentityrecord: WebAttribute<msdyn_analysisresultdetail_Select, { msdyn_canopenentityrecord: boolean | null }, {  }>;
  msdyn_entityname: WebAttribute<msdyn_analysisresultdetail_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_message: WebAttribute<msdyn_analysisresultdetail_Select, { msdyn_message: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_analysisresultdetail_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resultentityid: WebAttribute<msdyn_analysisresultdetail_Select, { msdyn_resultentityid: string | null }, {  }>;
  msdyn_resultentitylogicalname: WebAttribute<msdyn_analysisresultdetail_Select, { msdyn_resultentitylogicalname: string | null }, {  }>;
  msdyn_resultentityprimarykey: WebAttribute<msdyn_analysisresultdetail_Select, { msdyn_resultentityprimarykey: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_analysisresultdetail_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_analysisresultdetail_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_analysisresultdetail_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_analysisresultdetail_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_analysisresultdetail_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_analysisresultdetail_Select, { statecode: msdyn_analysisresultdetail_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_analysisresultdetail_Select, { statuscode: msdyn_analysisresultdetail_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_analysisresultdetail_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_analysisresultdetail_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_analysisresultdetail_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_analysisresultdetail_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_analysisresult_guid: XQW.Guid;
  msdyn_analysisresultdetailid: XQW.Guid;
  msdyn_canopenentityrecord: boolean;
  msdyn_entityname: string;
  msdyn_message: string;
  msdyn_name: string;
  msdyn_resultentityid: string;
  msdyn_resultentitylogicalname: string;
  msdyn_resultentityprimarykey: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_analysisresultdetail_statecode;
  statuscode: msdyn_analysisresultdetail_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_analysisresultdetail_Expand {
  createdby: WebExpand<msdyn_analysisresultdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_analysisresultdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_analysisresultdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_analysisresultdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AnalysisResult: WebExpand<msdyn_analysisresultdetail_Expand, msdyn_analysisresult_Select, msdyn_analysisresult_Filter, { msdyn_AnalysisResult: msdyn_analysisresult_Result }>;
  msdyn_analysisresultdetail_AsyncOperations: WebExpand<msdyn_analysisresultdetail_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_analysisresultdetail_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_analysisresultdetail_BulkDeleteFailures: WebExpand<msdyn_analysisresultdetail_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_analysisresultdetail_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_analysisresultdetail_DuplicateBaseRecord: WebExpand<msdyn_analysisresultdetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_analysisresultdetail_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_analysisresultdetail_DuplicateMatchingRecord: WebExpand<msdyn_analysisresultdetail_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_analysisresultdetail_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_analysisresultdetail_MailboxTrackingFolders: WebExpand<msdyn_analysisresultdetail_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_analysisresultdetail_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_analysisresultdetail_PrincipalObjectAttributeAccesses: WebExpand<msdyn_analysisresultdetail_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_analysisresultdetail_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_analysisresultdetail_ProcessSession: WebExpand<msdyn_analysisresultdetail_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_analysisresultdetail_ProcessSession: ProcessSession_Result[] }>;
  msdyn_analysisresultdetail_SyncErrors: WebExpand<msdyn_analysisresultdetail_Expand, SyncError_Select, SyncError_Filter, { msdyn_analysisresultdetail_SyncErrors: SyncError_Result[] }>;
  msdyn_analysisresultdetail_UserEntityInstanceDatas: WebExpand<msdyn_analysisresultdetail_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_analysisresultdetail_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_analysisresultdetail_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_analysisresultdetail_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_analysisresultdetail_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_analysisresultdetail_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_analysisresultdetail_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_analysisresult_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_analysisresultdetail_Result extends msdyn_analysisresultdetail_Base, msdyn_analysisresultdetail_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_analysisresult_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_analysisresultdetail_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AnalysisResult: WebMappingRetrieve<msdyn_analysisresult_Select,msdyn_analysisresult_Expand,msdyn_analysisresult_Filter,msdyn_analysisresult_Fixed,msdyn_analysisresult_Result,msdyn_analysisresult_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_analysisresultdetail_RelatedMany {
  msdyn_analysisresultdetail_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_analysisresultdetail_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_analysisresultdetail_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_analysisresultdetail_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_analysisresultdetail_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_analysisresultdetail_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_analysisresultdetail_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_analysisresultdetail_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_analysisresultdetail_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_analysisresultdetails: WebMappingRetrieve<msdyn_analysisresultdetail_Select,msdyn_analysisresultdetail_Expand,msdyn_analysisresultdetail_Filter,msdyn_analysisresultdetail_Fixed,msdyn_analysisresultdetail_Result,msdyn_analysisresultdetail_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_analysisresultdetails: WebMappingRelated<msdyn_analysisresultdetail_RelatedOne,msdyn_analysisresultdetail_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_analysisresultdetails: WebMappingCUDA<msdyn_analysisresultdetail_Create,msdyn_analysisresultdetail_Update,msdyn_analysisresultdetail_Select>;
}
