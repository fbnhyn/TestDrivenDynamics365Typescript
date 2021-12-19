interface msdyn_SessionParticipantData_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_conversationid?: string | null;
  msdyn_customattribute1?: string | null;
  msdyn_customattribute2?: string | null;
  msdyn_customattribute3?: string | null;
  msdyn_customattribute4?: string | null;
  msdyn_customattribute5?: string | null;
  msdyn_name?: string | null;
  msdyn_participantaddedtimestamp?: Date | null;
  msdyn_participantassignreason?: string | null;
  msdyn_participantid?: string | null;
  msdyn_participantmode?: string | null;
  msdyn_participantname?: string | null;
  msdyn_participanttype?: string | null;
  msdyn_providersessionid?: string | null;
  msdyn_sessionparticipantdataid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_sessionparticipantdata_statecode | null;
  statuscode?: msdyn_sessionparticipantdata_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_SessionParticipantData_Relationships {
  msdyn_sessionparticipantdata_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_sessionparticipantdata_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_sessionparticipantdata_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_sessionparticipantdata_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_sessionparticipantdata_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_sessionparticipantdata_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_sessionparticipantdata_SyncErrors?: SyncError_Result[] | null;
  msdyn_sessionparticipantdata_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_SessionParticipantData extends msdyn_SessionParticipantData_Base, msdyn_SessionParticipantData_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_SessionParticipantData_Create extends msdyn_SessionParticipantData {
}
interface msdyn_SessionParticipantData_Update extends msdyn_SessionParticipantData {
}
interface msdyn_SessionParticipantData_Select {
  createdby_guid: WebAttribute<msdyn_SessionParticipantData_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_SessionParticipantData_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_SessionParticipantData_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_SessionParticipantData_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_SessionParticipantData_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_SessionParticipantData_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_SessionParticipantData_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_conversationid: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_conversationid: string | null }, {  }>;
  msdyn_customattribute1: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_customattribute1: string | null }, {  }>;
  msdyn_customattribute2: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_customattribute2: string | null }, {  }>;
  msdyn_customattribute3: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_customattribute3: string | null }, {  }>;
  msdyn_customattribute4: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_customattribute4: string | null }, {  }>;
  msdyn_customattribute5: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_customattribute5: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_name: string | null }, {  }>;
  msdyn_participantaddedtimestamp: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_participantaddedtimestamp: Date | null }, { msdyn_participantaddedtimestamp_formatted?: string }>;
  msdyn_participantassignreason: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_participantassignreason: string | null }, {  }>;
  msdyn_participantid: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_participantid: string | null }, {  }>;
  msdyn_participantmode: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_participantmode: string | null }, {  }>;
  msdyn_participantname: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_participantname: string | null }, {  }>;
  msdyn_participanttype: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_participanttype: string | null }, {  }>;
  msdyn_providersessionid: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_providersessionid: string | null }, {  }>;
  msdyn_sessionparticipantdataid: WebAttribute<msdyn_SessionParticipantData_Select, { msdyn_sessionparticipantdataid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_SessionParticipantData_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_SessionParticipantData_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_SessionParticipantData_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_SessionParticipantData_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_SessionParticipantData_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_SessionParticipantData_Select, { statecode: msdyn_sessionparticipantdata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_SessionParticipantData_Select, { statuscode: msdyn_sessionparticipantdata_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_SessionParticipantData_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_SessionParticipantData_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_SessionParticipantData_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_SessionParticipantData_Filter {
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
  msdyn_name: string;
  msdyn_participantaddedtimestamp: Date;
  msdyn_participantassignreason: string;
  msdyn_participantid: string;
  msdyn_participantmode: string;
  msdyn_participantname: string;
  msdyn_participanttype: string;
  msdyn_providersessionid: string;
  msdyn_sessionparticipantdataid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_sessionparticipantdata_statecode;
  statuscode: msdyn_sessionparticipantdata_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_SessionParticipantData_Expand {
  createdby: WebExpand<msdyn_SessionParticipantData_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_SessionParticipantData_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_SessionParticipantData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_SessionParticipantData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_sessionparticipantdata_AsyncOperations: WebExpand<msdyn_SessionParticipantData_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_sessionparticipantdata_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_sessionparticipantdata_BulkDeleteFailures: WebExpand<msdyn_SessionParticipantData_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_sessionparticipantdata_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_sessionparticipantdata_DuplicateBaseRecord: WebExpand<msdyn_SessionParticipantData_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sessionparticipantdata_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_sessionparticipantdata_DuplicateMatchingRecord: WebExpand<msdyn_SessionParticipantData_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sessionparticipantdata_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_sessionparticipantdata_MailboxTrackingFolders: WebExpand<msdyn_SessionParticipantData_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_sessionparticipantdata_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses: WebExpand<msdyn_SessionParticipantData_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_sessionparticipantdata_ProcessSession: WebExpand<msdyn_SessionParticipantData_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_sessionparticipantdata_ProcessSession: ProcessSession_Result[] }>;
  msdyn_sessionparticipantdata_SyncErrors: WebExpand<msdyn_SessionParticipantData_Expand, SyncError_Select, SyncError_Filter, { msdyn_sessionparticipantdata_SyncErrors: SyncError_Result[] }>;
  msdyn_sessionparticipantdata_UserEntityInstanceDatas: WebExpand<msdyn_SessionParticipantData_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_sessionparticipantdata_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_SessionParticipantData_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_SessionParticipantData_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_SessionParticipantData_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_SessionParticipantData_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_SessionParticipantData_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_participantaddedtimestamp_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_SessionParticipantData_Result extends msdyn_SessionParticipantData_Base, msdyn_SessionParticipantData_Relationships {
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
interface msdyn_SessionParticipantData_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_SessionParticipantData_RelatedMany {
  msdyn_sessionparticipantdata_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_sessionparticipantdata_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_sessionparticipantdata_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sessionparticipantdata_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sessionparticipantdata_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_sessionparticipantdata_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_sessionparticipantdata_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_sessionparticipantdata_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_sessionparticipantdata_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sessionparticipantsdata: WebMappingRetrieve<msdyn_SessionParticipantData_Select,msdyn_SessionParticipantData_Expand,msdyn_SessionParticipantData_Filter,msdyn_SessionParticipantData_Fixed,msdyn_SessionParticipantData_Result,msdyn_SessionParticipantData_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sessionparticipantsdata: WebMappingRelated<msdyn_SessionParticipantData_RelatedOne,msdyn_SessionParticipantData_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sessionparticipantsdata: WebMappingCUDA<msdyn_SessionParticipantData_Create,msdyn_SessionParticipantData_Update,msdyn_SessionParticipantData_Select>;
}
