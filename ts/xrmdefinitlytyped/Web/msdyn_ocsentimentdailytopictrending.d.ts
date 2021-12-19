interface msdyn_ocsentimentdailytopictrending_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_ocsentimentdailytopictrendingid?: string | null;
  msdyn_similarityscore?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocsentimentdailytopictrending_statecode | null;
  statuscode?: msdyn_ocsentimentdailytopictrending_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocsentimentdailytopictrending_Relationships {
  msdyn_ocsentimentdailytopictrending_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocsentimentdailytopictrending_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocsentimentdailytopictrending_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsentimentdailytopictrending_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsentimentdailytopictrending_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocsentimentdailytopictrending_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocsentimentdailytopictrending_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocsentimentdailytopictrending_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocsentimentdailytopictrending_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocsentimentdailytopictrending extends msdyn_ocsentimentdailytopictrending_Base, msdyn_ocsentimentdailytopictrending_Relationships {
  msdyn_basetopicid_bind$msdyn_ocsentimentdailytopics?: string | null;
  msdyn_dailytopicid_bind$msdyn_ocsentimentdailytopics?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocsentimentdailytopictrending_Create extends msdyn_ocsentimentdailytopictrending {
}
interface msdyn_ocsentimentdailytopictrending_Update extends msdyn_ocsentimentdailytopictrending {
}
interface msdyn_ocsentimentdailytopictrending_Select {
  createdby_guid: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_basetopicid_guid: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { msdyn_basetopicid_guid: string | null }, { msdyn_basetopicid_formatted?: string }>;
  msdyn_dailytopicid_guid: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { msdyn_dailytopicid_guid: string | null }, { msdyn_dailytopicid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocsentimentdailytopictrendingid: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { msdyn_ocsentimentdailytopictrendingid: string | null }, {  }>;
  msdyn_similarityscore: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { msdyn_similarityscore: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { statecode: msdyn_ocsentimentdailytopictrending_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { statuscode: msdyn_ocsentimentdailytopictrending_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocsentimentdailytopictrending_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocsentimentdailytopictrending_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_basetopicid_guid: XQW.Guid;
  msdyn_dailytopicid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocsentimentdailytopictrendingid: XQW.Guid;
  msdyn_similarityscore: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocsentimentdailytopictrending_statecode;
  statuscode: msdyn_ocsentimentdailytopictrending_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocsentimentdailytopictrending_Expand {
  createdby: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_basetopicid: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, msdyn_ocsentimentdailytopic_Select, msdyn_ocsentimentdailytopic_Filter, { msdyn_basetopicid: msdyn_ocsentimentdailytopic_Result }>;
  msdyn_dailytopicid: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, msdyn_ocsentimentdailytopic_Select, msdyn_ocsentimentdailytopic_Filter, { msdyn_dailytopicid: msdyn_ocsentimentdailytopic_Result }>;
  msdyn_ocsentimentdailytopictrending_AsyncOperations: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocsentimentdailytopictrending_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocsentimentdailytopictrending_BulkDeleteFailures: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocsentimentdailytopictrending_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocsentimentdailytopictrending_DuplicateBaseRecord: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsentimentdailytopictrending_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsentimentdailytopictrending_DuplicateMatchingRecord: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsentimentdailytopictrending_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsentimentdailytopictrending_MailboxTrackingFolders: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocsentimentdailytopictrending_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocsentimentdailytopictrending_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocsentimentdailytopictrending_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocsentimentdailytopictrending_ProcessSession: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocsentimentdailytopictrending_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocsentimentdailytopictrending_SyncErrors: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocsentimentdailytopictrending_SyncErrors: SyncError_Result[] }>;
  msdyn_ocsentimentdailytopictrending_UserEntityInstanceDatas: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocsentimentdailytopictrending_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocsentimentdailytopictrending_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocsentimentdailytopictrending_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_basetopicid_formatted?: string;
  msdyn_dailytopicid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocsentimentdailytopictrending_Result extends msdyn_ocsentimentdailytopictrending_Base, msdyn_ocsentimentdailytopictrending_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_basetopicid_guid: string | null;
  msdyn_dailytopicid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocsentimentdailytopictrending_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_basetopicid: WebMappingRetrieve<msdyn_ocsentimentdailytopic_Select,msdyn_ocsentimentdailytopic_Expand,msdyn_ocsentimentdailytopic_Filter,msdyn_ocsentimentdailytopic_Fixed,msdyn_ocsentimentdailytopic_Result,msdyn_ocsentimentdailytopic_FormattedResult>;
  msdyn_dailytopicid: WebMappingRetrieve<msdyn_ocsentimentdailytopic_Select,msdyn_ocsentimentdailytopic_Expand,msdyn_ocsentimentdailytopic_Filter,msdyn_ocsentimentdailytopic_Fixed,msdyn_ocsentimentdailytopic_Result,msdyn_ocsentimentdailytopic_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocsentimentdailytopictrending_RelatedMany {
  msdyn_ocsentimentdailytopictrending_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocsentimentdailytopictrending_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocsentimentdailytopictrending_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsentimentdailytopictrending_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsentimentdailytopictrending_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocsentimentdailytopictrending_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocsentimentdailytopictrending_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocsentimentdailytopictrending_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocsentimentdailytopictrending_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocsentimentdailytopictrendings: WebMappingRetrieve<msdyn_ocsentimentdailytopictrending_Select,msdyn_ocsentimentdailytopictrending_Expand,msdyn_ocsentimentdailytopictrending_Filter,msdyn_ocsentimentdailytopictrending_Fixed,msdyn_ocsentimentdailytopictrending_Result,msdyn_ocsentimentdailytopictrending_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocsentimentdailytopictrendings: WebMappingRelated<msdyn_ocsentimentdailytopictrending_RelatedOne,msdyn_ocsentimentdailytopictrending_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocsentimentdailytopictrendings: WebMappingCUDA<msdyn_ocsentimentdailytopictrending_Create,msdyn_ocsentimentdailytopictrending_Update,msdyn_ocsentimentdailytopictrending_Select>;
}
