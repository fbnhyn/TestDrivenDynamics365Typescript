interface msdyn_routingrequest_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_entitylogicalname?: string | null;
  msdyn_entityrecordid?: string | null;
  msdyn_entitysetname?: string | null;
  msdyn_queueid?: string | null;
  msdyn_queueitemid?: string | null;
  msdyn_relationshipnamewithliveworkitem?: string | null;
  msdyn_routingrequestid?: string | null;
  msdyn_routingrequesttitle?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_routingrequest_statecode | null;
  statuscode?: msdyn_routingrequest_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_routingrequest_Relationships {
  msdyn_routingrequest_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_routingrequest_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_routingrequest_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_routingrequest_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_routingrequest_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_routingrequest_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_routingrequest_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_routingrequest_SyncErrors?: SyncError_Result[] | null;
  msdyn_routingrequest_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_routingrequest extends msdyn_routingrequest_Base, msdyn_routingrequest_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_routingrequest_Create extends msdyn_routingrequest {
}
interface msdyn_routingrequest_Update extends msdyn_routingrequest {
}
interface msdyn_routingrequest_Select {
  createdby_guid: WebAttribute<msdyn_routingrequest_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_routingrequest_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_routingrequest_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_routingrequest_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_routingrequest_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_routingrequest_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_routingrequest_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_entitylogicalname: WebAttribute<msdyn_routingrequest_Select, { msdyn_entitylogicalname: string | null }, {  }>;
  msdyn_entityrecordid: WebAttribute<msdyn_routingrequest_Select, { msdyn_entityrecordid: string | null }, {  }>;
  msdyn_entitysetname: WebAttribute<msdyn_routingrequest_Select, { msdyn_entitysetname: string | null }, {  }>;
  msdyn_queueid: WebAttribute<msdyn_routingrequest_Select, { msdyn_queueid: string | null }, {  }>;
  msdyn_queueitemid: WebAttribute<msdyn_routingrequest_Select, { msdyn_queueitemid: string | null }, {  }>;
  msdyn_relationshipnamewithliveworkitem: WebAttribute<msdyn_routingrequest_Select, { msdyn_relationshipnamewithliveworkitem: string | null }, {  }>;
  msdyn_routingrequestid: WebAttribute<msdyn_routingrequest_Select, { msdyn_routingrequestid: string | null }, {  }>;
  msdyn_routingrequesttitle: WebAttribute<msdyn_routingrequest_Select, { msdyn_routingrequesttitle: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_routingrequest_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_routingrequest_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_routingrequest_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_routingrequest_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_routingrequest_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_routingrequest_Select, { statecode: msdyn_routingrequest_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_routingrequest_Select, { statuscode: msdyn_routingrequest_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_routingrequest_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_routingrequest_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_routingrequest_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_routingrequest_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_entitylogicalname: string;
  msdyn_entityrecordid: string;
  msdyn_entitysetname: string;
  msdyn_queueid: string;
  msdyn_queueitemid: string;
  msdyn_relationshipnamewithliveworkitem: string;
  msdyn_routingrequestid: XQW.Guid;
  msdyn_routingrequesttitle: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_routingrequest_statecode;
  statuscode: msdyn_routingrequest_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_routingrequest_Expand {
  createdby: WebExpand<msdyn_routingrequest_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_routingrequest_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_routingrequest_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_routingrequest_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_routingrequest_AsyncOperations: WebExpand<msdyn_routingrequest_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_routingrequest_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_routingrequest_BulkDeleteFailures: WebExpand<msdyn_routingrequest_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_routingrequest_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_routingrequest_DuplicateBaseRecord: WebExpand<msdyn_routingrequest_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_routingrequest_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_routingrequest_DuplicateMatchingRecord: WebExpand<msdyn_routingrequest_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_routingrequest_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_routingrequest_MailboxTrackingFolders: WebExpand<msdyn_routingrequest_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_routingrequest_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_routingrequest_PrincipalObjectAttributeAccesses: WebExpand<msdyn_routingrequest_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_routingrequest_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_routingrequest_ProcessSession: WebExpand<msdyn_routingrequest_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_routingrequest_ProcessSession: ProcessSession_Result[] }>;
  msdyn_routingrequest_SyncErrors: WebExpand<msdyn_routingrequest_Expand, SyncError_Select, SyncError_Filter, { msdyn_routingrequest_SyncErrors: SyncError_Result[] }>;
  msdyn_routingrequest_UserEntityInstanceDatas: WebExpand<msdyn_routingrequest_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_routingrequest_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_routingrequest_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_routingrequest_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_routingrequest_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_routingrequest_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_routingrequest_FormattedResult {
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
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_routingrequest_Result extends msdyn_routingrequest_Base, msdyn_routingrequest_Relationships {
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
interface msdyn_routingrequest_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_routingrequest_RelatedMany {
  msdyn_routingrequest_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_routingrequest_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_routingrequest_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_routingrequest_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_routingrequest_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_routingrequest_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_routingrequest_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_routingrequest_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_routingrequest_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_routingrequests: WebMappingRetrieve<msdyn_routingrequest_Select,msdyn_routingrequest_Expand,msdyn_routingrequest_Filter,msdyn_routingrequest_Fixed,msdyn_routingrequest_Result,msdyn_routingrequest_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_routingrequests: WebMappingRelated<msdyn_routingrequest_RelatedOne,msdyn_routingrequest_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_routingrequests: WebMappingCUDA<msdyn_routingrequest_Create,msdyn_routingrequest_Update,msdyn_routingrequest_Select>;
}
