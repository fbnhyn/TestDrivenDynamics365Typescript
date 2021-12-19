interface msdyn_federatedarticle_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_federatedarticleid?: string | null;
  msdyn_searchproviderarticleid?: string | null;
  msdyn_title?: string | null;
  msdyn_url?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_federatedarticle_statecode | null;
  statuscode?: msdyn_federatedarticle_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_federatedarticle_Relationships {
  msdyn_federatedarticle_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_federatedarticle_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_federatedarticle_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_federatedarticle_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_federatedarticle_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_federatedarticle_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_federatedarticle_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_federatedarticle_SyncErrors?: SyncError_Result[] | null;
  msdyn_federatedarticle_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId?: msdyn_federatedarticleincident_Result[] | null;
}
interface msdyn_federatedarticle extends msdyn_federatedarticle_Base, msdyn_federatedarticle_Relationships {
  msdyn_searchproviderid_bind$msdyn_kmfederatedsearchconfigs?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_federatedarticle_Create extends msdyn_federatedarticle {
}
interface msdyn_federatedarticle_Update extends msdyn_federatedarticle {
}
interface msdyn_federatedarticle_Select {
  createdby_guid: WebAttribute<msdyn_federatedarticle_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_federatedarticle_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_federatedarticle_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_federatedarticle_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_federatedarticle_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_federatedarticle_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_federatedarticle_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_federatedarticleid: WebAttribute<msdyn_federatedarticle_Select, { msdyn_federatedarticleid: string | null }, {  }>;
  msdyn_searchproviderarticleid: WebAttribute<msdyn_federatedarticle_Select, { msdyn_searchproviderarticleid: string | null }, {  }>;
  msdyn_searchproviderid_guid: WebAttribute<msdyn_federatedarticle_Select, { msdyn_searchproviderid_guid: string | null }, { msdyn_searchproviderid_formatted?: string }>;
  msdyn_title: WebAttribute<msdyn_federatedarticle_Select, { msdyn_title: string | null }, {  }>;
  msdyn_url: WebAttribute<msdyn_federatedarticle_Select, { msdyn_url: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_federatedarticle_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_federatedarticle_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_federatedarticle_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_federatedarticle_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_federatedarticle_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_federatedarticle_Select, { statecode: msdyn_federatedarticle_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_federatedarticle_Select, { statuscode: msdyn_federatedarticle_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_federatedarticle_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_federatedarticle_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_federatedarticle_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_federatedarticle_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_federatedarticleid: XQW.Guid;
  msdyn_searchproviderarticleid: string;
  msdyn_searchproviderid_guid: XQW.Guid;
  msdyn_title: string;
  msdyn_url: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_federatedarticle_statecode;
  statuscode: msdyn_federatedarticle_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_federatedarticle_Expand {
  createdby: WebExpand<msdyn_federatedarticle_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_federatedarticle_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_federatedarticle_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_federatedarticle_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_federatedarticle_AsyncOperations: WebExpand<msdyn_federatedarticle_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_federatedarticle_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_federatedarticle_BulkDeleteFailures: WebExpand<msdyn_federatedarticle_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_federatedarticle_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_federatedarticle_DuplicateBaseRecord: WebExpand<msdyn_federatedarticle_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_federatedarticle_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_federatedarticle_DuplicateMatchingRecord: WebExpand<msdyn_federatedarticle_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_federatedarticle_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_federatedarticle_MailboxTrackingFolders: WebExpand<msdyn_federatedarticle_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_federatedarticle_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_federatedarticle_PrincipalObjectAttributeAccesses: WebExpand<msdyn_federatedarticle_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_federatedarticle_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_federatedarticle_ProcessSession: WebExpand<msdyn_federatedarticle_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_federatedarticle_ProcessSession: ProcessSession_Result[] }>;
  msdyn_federatedarticle_SyncErrors: WebExpand<msdyn_federatedarticle_Expand, SyncError_Select, SyncError_Filter, { msdyn_federatedarticle_SyncErrors: SyncError_Result[] }>;
  msdyn_federatedarticle_UserEntityInstanceDatas: WebExpand<msdyn_federatedarticle_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_federatedarticle_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId: WebExpand<msdyn_federatedarticle_Expand, msdyn_federatedarticleincident_Select, msdyn_federatedarticleincident_Filter, { msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId: msdyn_federatedarticleincident_Result[] }>;
  msdyn_searchproviderid: WebExpand<msdyn_federatedarticle_Expand, msdyn_kmfederatedsearchconfig_Select, msdyn_kmfederatedsearchconfig_Filter, { msdyn_searchproviderid: msdyn_kmfederatedsearchconfig_Result }>;
  ownerid: WebExpand<msdyn_federatedarticle_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_federatedarticle_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_federatedarticle_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_federatedarticle_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_federatedarticle_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_searchproviderid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_federatedarticle_Result extends msdyn_federatedarticle_Base, msdyn_federatedarticle_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_searchproviderid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_federatedarticle_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_searchproviderid: WebMappingRetrieve<msdyn_kmfederatedsearchconfig_Select,msdyn_kmfederatedsearchconfig_Expand,msdyn_kmfederatedsearchconfig_Filter,msdyn_kmfederatedsearchconfig_Fixed,msdyn_kmfederatedsearchconfig_Result,msdyn_kmfederatedsearchconfig_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_federatedarticle_RelatedMany {
  msdyn_federatedarticle_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_federatedarticle_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_federatedarticle_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_federatedarticle_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_federatedarticle_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_federatedarticle_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_federatedarticle_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_federatedarticle_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_federatedarticle_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId: WebMappingRetrieve<msdyn_federatedarticleincident_Select,msdyn_federatedarticleincident_Expand,msdyn_federatedarticleincident_Filter,msdyn_federatedarticleincident_Fixed,msdyn_federatedarticleincident_Result,msdyn_federatedarticleincident_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_federatedarticles: WebMappingRetrieve<msdyn_federatedarticle_Select,msdyn_federatedarticle_Expand,msdyn_federatedarticle_Filter,msdyn_federatedarticle_Fixed,msdyn_federatedarticle_Result,msdyn_federatedarticle_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_federatedarticles: WebMappingRelated<msdyn_federatedarticle_RelatedOne,msdyn_federatedarticle_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_federatedarticles: WebMappingCUDA<msdyn_federatedarticle_Create,msdyn_federatedarticle_Update,msdyn_federatedarticle_Select>;
}
