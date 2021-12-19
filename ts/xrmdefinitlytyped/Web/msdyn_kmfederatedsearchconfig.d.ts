interface msdyn_kmfederatedsearchconfig_Base extends WebEntity {
  connectionid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_kmfederatedsearchconfigid?: string | null;
  msdyn_name?: string | null;
  organization?: string | null;
  overriddencreatedon?: Date | null;
  searchtype?: msdyn_kmfederatedsearchconfig_searchtype | null;
  sharepointurl?: string | null;
  statecode?: msdyn_kmfederatedsearchconfig_statecode | null;
  statuscode?: msdyn_kmfederatedsearchconfig_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_kmfederatedsearchconfig_Relationships {
  IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid?: msdyn_federatedarticle_Result[] | null;
  msdyn_kmfederatedsearchconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_kmfederatedsearchconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_kmfederatedsearchconfig_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_kmfederatedsearchconfig_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_kmfederatedsearchconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_kmfederatedsearchconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_kmfederatedsearchconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_kmfederatedsearchconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_kmfederatedsearchconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_kmfederatedsearchconfig extends msdyn_kmfederatedsearchconfig_Base, msdyn_kmfederatedsearchconfig_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_kmfederatedsearchconfig_Create extends msdyn_kmfederatedsearchconfig {
}
interface msdyn_kmfederatedsearchconfig_Update extends msdyn_kmfederatedsearchconfig {
}
interface msdyn_kmfederatedsearchconfig_Select {
  connectionid: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { connectionid: string | null }, {  }>;
  createdby_guid: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { msdyn_description: string | null }, {  }>;
  msdyn_kmfederatedsearchconfigid: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { msdyn_kmfederatedsearchconfigid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { msdyn_name: string | null }, {  }>;
  organization: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { organization: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  searchtype: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { searchtype: msdyn_kmfederatedsearchconfig_searchtype | null }, { searchtype_formatted?: string }>;
  sharepointurl: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { sharepointurl: string | null }, {  }>;
  statecode: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { statecode: msdyn_kmfederatedsearchconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { statuscode: msdyn_kmfederatedsearchconfig_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_kmfederatedsearchconfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_kmfederatedsearchconfig_Filter {
  connectionid: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_kmfederatedsearchconfigid: XQW.Guid;
  msdyn_name: string;
  organization: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  searchtype: msdyn_kmfederatedsearchconfig_searchtype;
  sharepointurl: string;
  statecode: msdyn_kmfederatedsearchconfig_statecode;
  statuscode: msdyn_kmfederatedsearchconfig_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_kmfederatedsearchconfig_Expand {
  IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid: WebExpand<msdyn_kmfederatedsearchconfig_Expand, msdyn_federatedarticle_Select, msdyn_federatedarticle_Filter, { IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid: msdyn_federatedarticle_Result[] }>;
  createdby: WebExpand<msdyn_kmfederatedsearchconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_kmfederatedsearchconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_kmfederatedsearchconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_kmfederatedsearchconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_kmfederatedsearchconfig_AsyncOperations: WebExpand<msdyn_kmfederatedsearchconfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_kmfederatedsearchconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_kmfederatedsearchconfig_BulkDeleteFailures: WebExpand<msdyn_kmfederatedsearchconfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_kmfederatedsearchconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_kmfederatedsearchconfig_DuplicateBaseRecord: WebExpand<msdyn_kmfederatedsearchconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_kmfederatedsearchconfig_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_kmfederatedsearchconfig_DuplicateMatchingRecord: WebExpand<msdyn_kmfederatedsearchconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_kmfederatedsearchconfig_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_kmfederatedsearchconfig_MailboxTrackingFolders: WebExpand<msdyn_kmfederatedsearchconfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_kmfederatedsearchconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_kmfederatedsearchconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_kmfederatedsearchconfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_kmfederatedsearchconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_kmfederatedsearchconfig_ProcessSession: WebExpand<msdyn_kmfederatedsearchconfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_kmfederatedsearchconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_kmfederatedsearchconfig_SyncErrors: WebExpand<msdyn_kmfederatedsearchconfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_kmfederatedsearchconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_kmfederatedsearchconfig_UserEntityInstanceDatas: WebExpand<msdyn_kmfederatedsearchconfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_kmfederatedsearchconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_kmfederatedsearchconfig_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_kmfederatedsearchconfig_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_kmfederatedsearchconfig_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_kmfederatedsearchconfig_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_kmfederatedsearchconfig_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  searchtype_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_kmfederatedsearchconfig_Result extends msdyn_kmfederatedsearchconfig_Base, msdyn_kmfederatedsearchconfig_Relationships {
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
interface msdyn_kmfederatedsearchconfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_kmfederatedsearchconfig_RelatedMany {
  IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid: WebMappingRetrieve<msdyn_federatedarticle_Select,msdyn_federatedarticle_Expand,msdyn_federatedarticle_Filter,msdyn_federatedarticle_Fixed,msdyn_federatedarticle_Result,msdyn_federatedarticle_FormattedResult>;
  msdyn_kmfederatedsearchconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_kmfederatedsearchconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_kmfederatedsearchconfig_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_kmfederatedsearchconfig_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_kmfederatedsearchconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_kmfederatedsearchconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_kmfederatedsearchconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_kmfederatedsearchconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_kmfederatedsearchconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_kmfederatedsearchconfigs: WebMappingRetrieve<msdyn_kmfederatedsearchconfig_Select,msdyn_kmfederatedsearchconfig_Expand,msdyn_kmfederatedsearchconfig_Filter,msdyn_kmfederatedsearchconfig_Fixed,msdyn_kmfederatedsearchconfig_Result,msdyn_kmfederatedsearchconfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_kmfederatedsearchconfigs: WebMappingRelated<msdyn_kmfederatedsearchconfig_RelatedOne,msdyn_kmfederatedsearchconfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_kmfederatedsearchconfigs: WebMappingCUDA<msdyn_kmfederatedsearchconfig_Create,msdyn_kmfederatedsearchconfig_Update,msdyn_kmfederatedsearchconfig_Select>;
}
