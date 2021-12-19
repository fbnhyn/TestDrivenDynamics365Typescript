interface msdyn_knowledgesearchinsight_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_applicationname?: string | null;
  msdyn_correlationid?: string | null;
  msdyn_customcontrolid?: string | null;
  msdyn_entityrecordid?: string | null;
  msdyn_entitytype?: string | null;
  msdyn_filters?: string | null;
  msdyn_initiatedby?: string | null;
  msdyn_knowledgesearchinsightid?: string | null;
  msdyn_responsetime?: number | null;
  msdyn_resultcount?: number | null;
  msdyn_searchproviderid?: string | null;
  msdyn_searchprovidername?: string | null;
  msdyn_searchterm?: string | null;
  msdyn_searchtype?: string | null;
  msdyn_sortby?: string | null;
  msdyn_timestamp?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_knowledgesearchinsight_statecode | null;
  statuscode?: msdyn_knowledgesearchinsight_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_knowledgesearchinsight_Relationships {
  msdyn_knowledgesearchinsight_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_knowledgesearchinsight_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_knowledgesearchinsight_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgesearchinsight_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgesearchinsight_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_knowledgesearchinsight_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_knowledgesearchinsight_SyncErrors?: SyncError_Result[] | null;
  msdyn_knowledgesearchinsight_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_knowledgesearchinsight extends msdyn_knowledgesearchinsight_Base, msdyn_knowledgesearchinsight_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_knowledgesearchinsight_Create extends msdyn_knowledgesearchinsight {
}
interface msdyn_knowledgesearchinsight_Update extends msdyn_knowledgesearchinsight {
}
interface msdyn_knowledgesearchinsight_Select {
  createdby_guid: WebAttribute<msdyn_knowledgesearchinsight_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_knowledgesearchinsight_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_knowledgesearchinsight_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_knowledgesearchinsight_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_knowledgesearchinsight_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_knowledgesearchinsight_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_knowledgesearchinsight_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_applicationname: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_applicationname: string | null }, {  }>;
  msdyn_correlationid: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_correlationid: string | null }, {  }>;
  msdyn_customcontrolid: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_customcontrolid: string | null }, {  }>;
  msdyn_entityrecordid: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_entityrecordid: string | null }, {  }>;
  msdyn_entitytype: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_entitytype: string | null }, {  }>;
  msdyn_filters: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_filters: string | null }, {  }>;
  msdyn_initiatedby: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_initiatedby: string | null }, {  }>;
  msdyn_knowledgesearchinsightid: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_knowledgesearchinsightid: string | null }, {  }>;
  msdyn_responsetime: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_responsetime: number | null }, {  }>;
  msdyn_resultcount: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_resultcount: number | null }, {  }>;
  msdyn_searchproviderid: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_searchproviderid: string | null }, {  }>;
  msdyn_searchprovidername: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_searchprovidername: string | null }, {  }>;
  msdyn_searchterm: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_searchterm: string | null }, {  }>;
  msdyn_searchtype: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_searchtype: string | null }, {  }>;
  msdyn_sortby: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_sortby: string | null }, {  }>;
  msdyn_timestamp: WebAttribute<msdyn_knowledgesearchinsight_Select, { msdyn_timestamp: Date | null }, { msdyn_timestamp_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_knowledgesearchinsight_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_knowledgesearchinsight_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_knowledgesearchinsight_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_knowledgesearchinsight_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_knowledgesearchinsight_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_knowledgesearchinsight_Select, { statecode: msdyn_knowledgesearchinsight_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_knowledgesearchinsight_Select, { statuscode: msdyn_knowledgesearchinsight_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_knowledgesearchinsight_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_knowledgesearchinsight_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_knowledgesearchinsight_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_knowledgesearchinsight_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_applicationname: string;
  msdyn_correlationid: string;
  msdyn_customcontrolid: string;
  msdyn_entityrecordid: string;
  msdyn_entitytype: string;
  msdyn_filters: string;
  msdyn_initiatedby: string;
  msdyn_knowledgesearchinsightid: XQW.Guid;
  msdyn_responsetime: number;
  msdyn_resultcount: number;
  msdyn_searchproviderid: string;
  msdyn_searchprovidername: string;
  msdyn_searchterm: string;
  msdyn_searchtype: string;
  msdyn_sortby: string;
  msdyn_timestamp: Date;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_knowledgesearchinsight_statecode;
  statuscode: msdyn_knowledgesearchinsight_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_knowledgesearchinsight_Expand {
  createdby: WebExpand<msdyn_knowledgesearchinsight_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_knowledgesearchinsight_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_knowledgesearchinsight_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_knowledgesearchinsight_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_knowledgesearchinsight_AsyncOperations: WebExpand<msdyn_knowledgesearchinsight_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_knowledgesearchinsight_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_knowledgesearchinsight_BulkDeleteFailures: WebExpand<msdyn_knowledgesearchinsight_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_knowledgesearchinsight_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_knowledgesearchinsight_DuplicateBaseRecord: WebExpand<msdyn_knowledgesearchinsight_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgesearchinsight_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgesearchinsight_DuplicateMatchingRecord: WebExpand<msdyn_knowledgesearchinsight_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgesearchinsight_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgesearchinsight_MailboxTrackingFolders: WebExpand<msdyn_knowledgesearchinsight_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_knowledgesearchinsight_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses: WebExpand<msdyn_knowledgesearchinsight_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_knowledgesearchinsight_ProcessSession: WebExpand<msdyn_knowledgesearchinsight_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_knowledgesearchinsight_ProcessSession: ProcessSession_Result[] }>;
  msdyn_knowledgesearchinsight_SyncErrors: WebExpand<msdyn_knowledgesearchinsight_Expand, SyncError_Select, SyncError_Filter, { msdyn_knowledgesearchinsight_SyncErrors: SyncError_Result[] }>;
  msdyn_knowledgesearchinsight_UserEntityInstanceDatas: WebExpand<msdyn_knowledgesearchinsight_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_knowledgesearchinsight_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_knowledgesearchinsight_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_knowledgesearchinsight_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_knowledgesearchinsight_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_knowledgesearchinsight_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_knowledgesearchinsight_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_timestamp_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_knowledgesearchinsight_Result extends msdyn_knowledgesearchinsight_Base, msdyn_knowledgesearchinsight_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_knowledgesearchinsight_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_knowledgesearchinsight_RelatedMany {
  msdyn_knowledgesearchinsight_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_knowledgesearchinsight_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_knowledgesearchinsight_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgesearchinsight_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgesearchinsight_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_knowledgesearchinsight_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_knowledgesearchinsight_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_knowledgesearchinsight_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_knowledgesearchinsight_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_knowledgesearchinsights: WebMappingRetrieve<msdyn_knowledgesearchinsight_Select,msdyn_knowledgesearchinsight_Expand,msdyn_knowledgesearchinsight_Filter,msdyn_knowledgesearchinsight_Fixed,msdyn_knowledgesearchinsight_Result,msdyn_knowledgesearchinsight_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_knowledgesearchinsights: WebMappingRelated<msdyn_knowledgesearchinsight_RelatedOne,msdyn_knowledgesearchinsight_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_knowledgesearchinsights: WebMappingCUDA<msdyn_knowledgesearchinsight_Create,msdyn_knowledgesearchinsight_Update,msdyn_knowledgesearchinsight_Select>;
}
