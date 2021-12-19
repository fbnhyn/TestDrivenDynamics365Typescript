interface msdyn_ocsentimentdailytopickeyword_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_keywords?: string | null;
  msdyn_name?: string | null;
  msdyn_ocsentimentdailytopickeywordid?: string | null;
  msdyn_weeklyid?: string | null;
  msdyn_weeklytopicid?: string | null;
  msdyn_weeklytopicname?: string | null;
  msdyn_wordfrequency?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocsentimentdailytopickeyword_statecode | null;
  statuscode?: msdyn_ocsentimentdailytopickeyword_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocsentimentdailytopickeyword_Relationships {
  msdyn_ocsentimentdailytopickeyword_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocsentimentdailytopickeyword_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocsentimentdailytopickeyword_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsentimentdailytopickeyword_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsentimentdailytopickeyword_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocsentimentdailytopickeyword_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocsentimentdailytopickeyword_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocsentimentdailytopickeyword_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocsentimentdailytopickeyword_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocsentimentdailytopickeyword extends msdyn_ocsentimentdailytopickeyword_Base, msdyn_ocsentimentdailytopickeyword_Relationships {
  msdyn_dailytopicid_bind$msdyn_ocsentimentdailytopics?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocsentimentdailytopickeyword_Create extends msdyn_ocsentimentdailytopickeyword {
}
interface msdyn_ocsentimentdailytopickeyword_Update extends msdyn_ocsentimentdailytopickeyword {
}
interface msdyn_ocsentimentdailytopickeyword_Select {
  createdby_guid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_dailytopicid_guid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { msdyn_dailytopicid_guid: string | null }, { msdyn_dailytopicid_formatted?: string }>;
  msdyn_keywords: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { msdyn_keywords: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocsentimentdailytopickeywordid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { msdyn_ocsentimentdailytopickeywordid: string | null }, {  }>;
  msdyn_weeklyid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { msdyn_weeklyid: string | null }, {  }>;
  msdyn_weeklytopicid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { msdyn_weeklytopicid: string | null }, {  }>;
  msdyn_weeklytopicname: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { msdyn_weeklytopicname: string | null }, {  }>;
  msdyn_wordfrequency: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { msdyn_wordfrequency: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { statecode: msdyn_ocsentimentdailytopickeyword_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { statuscode: msdyn_ocsentimentdailytopickeyword_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocsentimentdailytopickeyword_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocsentimentdailytopickeyword_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_dailytopicid_guid: XQW.Guid;
  msdyn_keywords: string;
  msdyn_name: string;
  msdyn_ocsentimentdailytopickeywordid: XQW.Guid;
  msdyn_weeklyid: string;
  msdyn_weeklytopicid: string;
  msdyn_weeklytopicname: string;
  msdyn_wordfrequency: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocsentimentdailytopickeyword_statecode;
  statuscode: msdyn_ocsentimentdailytopickeyword_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocsentimentdailytopickeyword_Expand {
  createdby: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_dailytopicid: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, msdyn_ocsentimentdailytopic_Select, msdyn_ocsentimentdailytopic_Filter, { msdyn_dailytopicid: msdyn_ocsentimentdailytopic_Result }>;
  msdyn_ocsentimentdailytopickeyword_AsyncOperations: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocsentimentdailytopickeyword_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocsentimentdailytopickeyword_BulkDeleteFailures: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocsentimentdailytopickeyword_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocsentimentdailytopickeyword_DuplicateBaseRecord: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsentimentdailytopickeyword_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsentimentdailytopickeyword_DuplicateMatchingRecord: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsentimentdailytopickeyword_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsentimentdailytopickeyword_MailboxTrackingFolders: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocsentimentdailytopickeyword_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocsentimentdailytopickeyword_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocsentimentdailytopickeyword_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocsentimentdailytopickeyword_ProcessSession: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocsentimentdailytopickeyword_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocsentimentdailytopickeyword_SyncErrors: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocsentimentdailytopickeyword_SyncErrors: SyncError_Result[] }>;
  msdyn_ocsentimentdailytopickeyword_UserEntityInstanceDatas: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocsentimentdailytopickeyword_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocsentimentdailytopickeyword_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocsentimentdailytopickeyword_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_dailytopicid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocsentimentdailytopickeyword_Result extends msdyn_ocsentimentdailytopickeyword_Base, msdyn_ocsentimentdailytopickeyword_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_dailytopicid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocsentimentdailytopickeyword_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_dailytopicid: WebMappingRetrieve<msdyn_ocsentimentdailytopic_Select,msdyn_ocsentimentdailytopic_Expand,msdyn_ocsentimentdailytopic_Filter,msdyn_ocsentimentdailytopic_Fixed,msdyn_ocsentimentdailytopic_Result,msdyn_ocsentimentdailytopic_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocsentimentdailytopickeyword_RelatedMany {
  msdyn_ocsentimentdailytopickeyword_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocsentimentdailytopickeyword_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocsentimentdailytopickeyword_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsentimentdailytopickeyword_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsentimentdailytopickeyword_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocsentimentdailytopickeyword_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocsentimentdailytopickeyword_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocsentimentdailytopickeyword_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocsentimentdailytopickeyword_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocsentimentdailytopickeywords: WebMappingRetrieve<msdyn_ocsentimentdailytopickeyword_Select,msdyn_ocsentimentdailytopickeyword_Expand,msdyn_ocsentimentdailytopickeyword_Filter,msdyn_ocsentimentdailytopickeyword_Fixed,msdyn_ocsentimentdailytopickeyword_Result,msdyn_ocsentimentdailytopickeyword_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocsentimentdailytopickeywords: WebMappingRelated<msdyn_ocsentimentdailytopickeyword_RelatedOne,msdyn_ocsentimentdailytopickeyword_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocsentimentdailytopickeywords: WebMappingCUDA<msdyn_ocsentimentdailytopickeyword_Create,msdyn_ocsentimentdailytopickeyword_Update,msdyn_ocsentimentdailytopickeyword_Select>;
}
