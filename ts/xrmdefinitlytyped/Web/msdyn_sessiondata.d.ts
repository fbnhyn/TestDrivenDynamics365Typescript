interface msdyn_SessionData_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_conversationid?: string | null;
  msdyn_customattribute1?: string | null;
  msdyn_customattribute2?: string | null;
  msdyn_customattribute3?: string | null;
  msdyn_customattribute4?: string | null;
  msdyn_customattribute5?: string | null;
  msdyn_externalcorrelationid?: string | null;
  msdyn_name?: string | null;
  msdyn_providersessionid?: string | null;
  msdyn_queueid?: string | null;
  msdyn_queuename?: string | null;
  msdyn_sessionadditionaldata?: string | null;
  msdyn_sessionagentassignedtimestamp?: Date | null;
  msdyn_sessionchannel?: string | null;
  msdyn_sessioncreatedtimestamp?: Date | null;
  msdyn_sessioncreationreason?: string | null;
  msdyn_sessiondataid?: string | null;
  msdyn_sessionqueueassignedtimestamp?: Date | null;
  msdyn_ucisessionid?: string | null;
  msdyn_ucisessionname?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_sessiondata_statecode | null;
  statuscode?: msdyn_sessiondata_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_SessionData_Relationships {
  msdyn_sessiondata_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_sessiondata_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_sessiondata_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_sessiondata_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_sessiondata_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_sessiondata_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_sessiondata_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_sessiondata_SyncErrors?: SyncError_Result[] | null;
  msdyn_sessiondata_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_SessionData extends msdyn_SessionData_Base, msdyn_SessionData_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_SessionData_Create extends msdyn_SessionData {
}
interface msdyn_SessionData_Update extends msdyn_SessionData {
}
interface msdyn_SessionData_Select {
  createdby_guid: WebAttribute<msdyn_SessionData_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_SessionData_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_SessionData_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_SessionData_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_SessionData_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_SessionData_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_SessionData_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_conversationid: WebAttribute<msdyn_SessionData_Select, { msdyn_conversationid: string | null }, {  }>;
  msdyn_customattribute1: WebAttribute<msdyn_SessionData_Select, { msdyn_customattribute1: string | null }, {  }>;
  msdyn_customattribute2: WebAttribute<msdyn_SessionData_Select, { msdyn_customattribute2: string | null }, {  }>;
  msdyn_customattribute3: WebAttribute<msdyn_SessionData_Select, { msdyn_customattribute3: string | null }, {  }>;
  msdyn_customattribute4: WebAttribute<msdyn_SessionData_Select, { msdyn_customattribute4: string | null }, {  }>;
  msdyn_customattribute5: WebAttribute<msdyn_SessionData_Select, { msdyn_customattribute5: string | null }, {  }>;
  msdyn_externalcorrelationid: WebAttribute<msdyn_SessionData_Select, { msdyn_externalcorrelationid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_SessionData_Select, { msdyn_name: string | null }, {  }>;
  msdyn_providersessionid: WebAttribute<msdyn_SessionData_Select, { msdyn_providersessionid: string | null }, {  }>;
  msdyn_queueid: WebAttribute<msdyn_SessionData_Select, { msdyn_queueid: string | null }, {  }>;
  msdyn_queuename: WebAttribute<msdyn_SessionData_Select, { msdyn_queuename: string | null }, {  }>;
  msdyn_sessionadditionaldata: WebAttribute<msdyn_SessionData_Select, { msdyn_sessionadditionaldata: string | null }, {  }>;
  msdyn_sessionagentassignedtimestamp: WebAttribute<msdyn_SessionData_Select, { msdyn_sessionagentassignedtimestamp: Date | null }, { msdyn_sessionagentassignedtimestamp_formatted?: string }>;
  msdyn_sessionchannel: WebAttribute<msdyn_SessionData_Select, { msdyn_sessionchannel: string | null }, {  }>;
  msdyn_sessioncreatedtimestamp: WebAttribute<msdyn_SessionData_Select, { msdyn_sessioncreatedtimestamp: Date | null }, { msdyn_sessioncreatedtimestamp_formatted?: string }>;
  msdyn_sessioncreationreason: WebAttribute<msdyn_SessionData_Select, { msdyn_sessioncreationreason: string | null }, {  }>;
  msdyn_sessiondataid: WebAttribute<msdyn_SessionData_Select, { msdyn_sessiondataid: string | null }, {  }>;
  msdyn_sessionqueueassignedtimestamp: WebAttribute<msdyn_SessionData_Select, { msdyn_sessionqueueassignedtimestamp: Date | null }, { msdyn_sessionqueueassignedtimestamp_formatted?: string }>;
  msdyn_ucisessionid: WebAttribute<msdyn_SessionData_Select, { msdyn_ucisessionid: string | null }, {  }>;
  msdyn_ucisessionname: WebAttribute<msdyn_SessionData_Select, { msdyn_ucisessionname: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_SessionData_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_SessionData_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_SessionData_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_SessionData_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_SessionData_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_SessionData_Select, { statecode: msdyn_sessiondata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_SessionData_Select, { statuscode: msdyn_sessiondata_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_SessionData_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_SessionData_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_SessionData_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_SessionData_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_conversationid: string;
  msdyn_customattribute1: string;
  msdyn_customattribute2: string;
  msdyn_customattribute3: string;
  msdyn_customattribute4: string;
  msdyn_customattribute5: string;
  msdyn_externalcorrelationid: string;
  msdyn_name: string;
  msdyn_providersessionid: string;
  msdyn_queueid: string;
  msdyn_queuename: string;
  msdyn_sessionadditionaldata: string;
  msdyn_sessionagentassignedtimestamp: Date;
  msdyn_sessionchannel: string;
  msdyn_sessioncreatedtimestamp: Date;
  msdyn_sessioncreationreason: string;
  msdyn_sessiondataid: XQW.Guid;
  msdyn_sessionqueueassignedtimestamp: Date;
  msdyn_ucisessionid: string;
  msdyn_ucisessionname: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_sessiondata_statecode;
  statuscode: msdyn_sessiondata_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_SessionData_Expand {
  createdby: WebExpand<msdyn_SessionData_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_SessionData_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_SessionData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_SessionData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_sessiondata_AsyncOperations: WebExpand<msdyn_SessionData_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_sessiondata_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_sessiondata_BulkDeleteFailures: WebExpand<msdyn_SessionData_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_sessiondata_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_sessiondata_DuplicateBaseRecord: WebExpand<msdyn_SessionData_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sessiondata_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_sessiondata_DuplicateMatchingRecord: WebExpand<msdyn_SessionData_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sessiondata_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_sessiondata_MailboxTrackingFolders: WebExpand<msdyn_SessionData_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_sessiondata_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_sessiondata_PrincipalObjectAttributeAccesses: WebExpand<msdyn_SessionData_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_sessiondata_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_sessiondata_ProcessSession: WebExpand<msdyn_SessionData_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_sessiondata_ProcessSession: ProcessSession_Result[] }>;
  msdyn_sessiondata_SyncErrors: WebExpand<msdyn_SessionData_Expand, SyncError_Select, SyncError_Filter, { msdyn_sessiondata_SyncErrors: SyncError_Result[] }>;
  msdyn_sessiondata_UserEntityInstanceDatas: WebExpand<msdyn_SessionData_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_sessiondata_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_SessionData_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_SessionData_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_SessionData_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_SessionData_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_SessionData_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_sessionagentassignedtimestamp_formatted?: string;
  msdyn_sessioncreatedtimestamp_formatted?: string;
  msdyn_sessionqueueassignedtimestamp_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_SessionData_Result extends msdyn_SessionData_Base, msdyn_SessionData_Relationships {
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
interface msdyn_SessionData_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_SessionData_RelatedMany {
  msdyn_sessiondata_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_sessiondata_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_sessiondata_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sessiondata_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sessiondata_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_sessiondata_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_sessiondata_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_sessiondata_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_sessiondata_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sessionsdata: WebMappingRetrieve<msdyn_SessionData_Select,msdyn_SessionData_Expand,msdyn_SessionData_Filter,msdyn_SessionData_Fixed,msdyn_SessionData_Result,msdyn_SessionData_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sessionsdata: WebMappingRelated<msdyn_SessionData_RelatedOne,msdyn_SessionData_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sessionsdata: WebMappingCUDA<msdyn_SessionData_Create,msdyn_SessionData_Update,msdyn_SessionData_Select>;
}
