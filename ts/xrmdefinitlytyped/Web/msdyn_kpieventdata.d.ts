interface msdyn_KPIEventData_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_ProviderId?: string | null;
  msdyn_additionaldata?: string | null;
  msdyn_cifSessionId?: string | null;
  msdyn_clientsessionid?: string | null;
  msdyn_conversationid?: string | null;
  msdyn_customattribute1?: string | null;
  msdyn_customattribute2?: string | null;
  msdyn_customattribute3?: string | null;
  msdyn_customattribute4?: string | null;
  msdyn_customattribute5?: string | null;
  msdyn_eventtimestamp?: Date | null;
  msdyn_externalcorrelationid?: string | null;
  msdyn_kpieventdataid?: string | null;
  msdyn_kpieventid?: string | null;
  msdyn_kpieventname?: string | null;
  msdyn_kpieventreason?: string | null;
  msdyn_name?: string | null;
  msdyn_participantid?: string | null;
  msdyn_providersessionid?: string | null;
  msdyn_sessionId?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_kpieventdata_statecode | null;
  statuscode?: msdyn_kpieventdata_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_KPIEventData_Relationships {
  msdyn_kpieventdata_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_kpieventdata_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_kpieventdata_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_kpieventdata_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_kpieventdata_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_kpieventdata_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_kpieventdata_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_kpieventdata_SyncErrors?: SyncError_Result[] | null;
  msdyn_kpieventdata_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_KPIEventData extends msdyn_KPIEventData_Base, msdyn_KPIEventData_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_KPIEventData_Create extends msdyn_KPIEventData {
}
interface msdyn_KPIEventData_Update extends msdyn_KPIEventData {
}
interface msdyn_KPIEventData_Select {
  createdby_guid: WebAttribute<msdyn_KPIEventData_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_KPIEventData_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_KPIEventData_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_KPIEventData_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_KPIEventData_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_KPIEventData_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_KPIEventData_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_ProviderId: WebAttribute<msdyn_KPIEventData_Select, { msdyn_ProviderId: string | null }, {  }>;
  msdyn_additionaldata: WebAttribute<msdyn_KPIEventData_Select, { msdyn_additionaldata: string | null }, {  }>;
  msdyn_cifSessionId: WebAttribute<msdyn_KPIEventData_Select, { msdyn_cifSessionId: string | null }, {  }>;
  msdyn_clientsessionid: WebAttribute<msdyn_KPIEventData_Select, { msdyn_clientsessionid: string | null }, {  }>;
  msdyn_conversationid: WebAttribute<msdyn_KPIEventData_Select, { msdyn_conversationid: string | null }, {  }>;
  msdyn_customattribute1: WebAttribute<msdyn_KPIEventData_Select, { msdyn_customattribute1: string | null }, {  }>;
  msdyn_customattribute2: WebAttribute<msdyn_KPIEventData_Select, { msdyn_customattribute2: string | null }, {  }>;
  msdyn_customattribute3: WebAttribute<msdyn_KPIEventData_Select, { msdyn_customattribute3: string | null }, {  }>;
  msdyn_customattribute4: WebAttribute<msdyn_KPIEventData_Select, { msdyn_customattribute4: string | null }, {  }>;
  msdyn_customattribute5: WebAttribute<msdyn_KPIEventData_Select, { msdyn_customattribute5: string | null }, {  }>;
  msdyn_eventtimestamp: WebAttribute<msdyn_KPIEventData_Select, { msdyn_eventtimestamp: Date | null }, { msdyn_eventtimestamp_formatted?: string }>;
  msdyn_externalcorrelationid: WebAttribute<msdyn_KPIEventData_Select, { msdyn_externalcorrelationid: string | null }, {  }>;
  msdyn_kpieventdataid: WebAttribute<msdyn_KPIEventData_Select, { msdyn_kpieventdataid: string | null }, {  }>;
  msdyn_kpieventid: WebAttribute<msdyn_KPIEventData_Select, { msdyn_kpieventid: string | null }, {  }>;
  msdyn_kpieventname: WebAttribute<msdyn_KPIEventData_Select, { msdyn_kpieventname: string | null }, {  }>;
  msdyn_kpieventreason: WebAttribute<msdyn_KPIEventData_Select, { msdyn_kpieventreason: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_KPIEventData_Select, { msdyn_name: string | null }, {  }>;
  msdyn_participantid: WebAttribute<msdyn_KPIEventData_Select, { msdyn_participantid: string | null }, {  }>;
  msdyn_providersessionid: WebAttribute<msdyn_KPIEventData_Select, { msdyn_providersessionid: string | null }, {  }>;
  msdyn_sessionId: WebAttribute<msdyn_KPIEventData_Select, { msdyn_sessionId: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_KPIEventData_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_KPIEventData_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_KPIEventData_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_KPIEventData_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_KPIEventData_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_KPIEventData_Select, { statecode: msdyn_kpieventdata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_KPIEventData_Select, { statuscode: msdyn_kpieventdata_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_KPIEventData_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_KPIEventData_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_KPIEventData_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_KPIEventData_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_ProviderId: string;
  msdyn_additionaldata: string;
  msdyn_cifSessionId: string;
  msdyn_clientsessionid: string;
  msdyn_conversationid: string;
  msdyn_customattribute1: string;
  msdyn_customattribute2: string;
  msdyn_customattribute3: string;
  msdyn_customattribute4: string;
  msdyn_customattribute5: string;
  msdyn_eventtimestamp: Date;
  msdyn_externalcorrelationid: string;
  msdyn_kpieventdataid: XQW.Guid;
  msdyn_kpieventid: string;
  msdyn_kpieventname: string;
  msdyn_kpieventreason: string;
  msdyn_name: string;
  msdyn_participantid: string;
  msdyn_providersessionid: string;
  msdyn_sessionId: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_kpieventdata_statecode;
  statuscode: msdyn_kpieventdata_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_KPIEventData_Expand {
  createdby: WebExpand<msdyn_KPIEventData_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_KPIEventData_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_KPIEventData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_KPIEventData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_kpieventdata_AsyncOperations: WebExpand<msdyn_KPIEventData_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_kpieventdata_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_kpieventdata_BulkDeleteFailures: WebExpand<msdyn_KPIEventData_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_kpieventdata_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_kpieventdata_DuplicateBaseRecord: WebExpand<msdyn_KPIEventData_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_kpieventdata_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_kpieventdata_DuplicateMatchingRecord: WebExpand<msdyn_KPIEventData_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_kpieventdata_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_kpieventdata_MailboxTrackingFolders: WebExpand<msdyn_KPIEventData_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_kpieventdata_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_kpieventdata_PrincipalObjectAttributeAccesses: WebExpand<msdyn_KPIEventData_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_kpieventdata_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_kpieventdata_ProcessSession: WebExpand<msdyn_KPIEventData_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_kpieventdata_ProcessSession: ProcessSession_Result[] }>;
  msdyn_kpieventdata_SyncErrors: WebExpand<msdyn_KPIEventData_Expand, SyncError_Select, SyncError_Filter, { msdyn_kpieventdata_SyncErrors: SyncError_Result[] }>;
  msdyn_kpieventdata_UserEntityInstanceDatas: WebExpand<msdyn_KPIEventData_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_kpieventdata_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_KPIEventData_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_KPIEventData_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_KPIEventData_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_KPIEventData_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_KPIEventData_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_eventtimestamp_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_KPIEventData_Result extends msdyn_KPIEventData_Base, msdyn_KPIEventData_Relationships {
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
interface msdyn_KPIEventData_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_KPIEventData_RelatedMany {
  msdyn_kpieventdata_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_kpieventdata_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_kpieventdata_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_kpieventdata_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_kpieventdata_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_kpieventdata_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_kpieventdata_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_kpieventdata_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_kpieventdata_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_kpieventsdata: WebMappingRetrieve<msdyn_KPIEventData_Select,msdyn_KPIEventData_Expand,msdyn_KPIEventData_Filter,msdyn_KPIEventData_Fixed,msdyn_KPIEventData_Result,msdyn_KPIEventData_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_kpieventsdata: WebMappingRelated<msdyn_KPIEventData_RelatedOne,msdyn_KPIEventData_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_kpieventsdata: WebMappingCUDA<msdyn_KPIEventData_Create,msdyn_KPIEventData_Update,msdyn_KPIEventData_Select>;
}
