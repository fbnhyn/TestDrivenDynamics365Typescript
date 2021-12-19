interface msdyn_conversationaction_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_conversationactionid?: string | null;
  msdyn_eventname?: msdyn_conversationaction_msdyn_eventname | null;
  msdyn_eventparameter?: string | null;
  msdyn_functionname?: string | null;
  msdyn_icon?: string | null;
  msdyn_name?: string | null;
  msdyn_order?: number | null;
  msdyn_webresource?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_conversationaction_statecode | null;
  statuscode?: msdyn_conversationaction_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_conversationaction_Relationships {
  msdyn_conversationaction_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_conversationaction_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_conversationaction_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_conversationaction_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_conversationaction_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_conversationaction_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_conversationaction_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_conversationaction_SyncErrors?: SyncError_Result[] | null;
  msdyn_conversationaction_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_conversationaction_msdyn_channelcapability_ConversationAction?: msdyn_channelcapability_Result[] | null;
  msdyn_msdyn_conversationaction_msdyn_conversationactionlocale_CAkey?: msdyn_conversationactionlocale_Result[] | null;
}
interface msdyn_conversationaction extends msdyn_conversationaction_Base, msdyn_conversationaction_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_conversationaction_Create extends msdyn_conversationaction {
}
interface msdyn_conversationaction_Update extends msdyn_conversationaction {
}
interface msdyn_conversationaction_Select {
  createdby_guid: WebAttribute<msdyn_conversationaction_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_conversationaction_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_conversationaction_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_conversationaction_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_conversationaction_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_conversationaction_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_conversationaction_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_conversationactionid: WebAttribute<msdyn_conversationaction_Select, { msdyn_conversationactionid: string | null }, {  }>;
  msdyn_eventname: WebAttribute<msdyn_conversationaction_Select, { msdyn_eventname: msdyn_conversationaction_msdyn_eventname | null }, { msdyn_eventname_formatted?: string }>;
  msdyn_eventparameter: WebAttribute<msdyn_conversationaction_Select, { msdyn_eventparameter: string | null }, {  }>;
  msdyn_functionname: WebAttribute<msdyn_conversationaction_Select, { msdyn_functionname: string | null }, {  }>;
  msdyn_icon: WebAttribute<msdyn_conversationaction_Select, { msdyn_icon: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_conversationaction_Select, { msdyn_name: string | null }, {  }>;
  msdyn_order: WebAttribute<msdyn_conversationaction_Select, { msdyn_order: number | null }, {  }>;
  msdyn_webresource: WebAttribute<msdyn_conversationaction_Select, { msdyn_webresource: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_conversationaction_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_conversationaction_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_conversationaction_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_conversationaction_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_conversationaction_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_conversationaction_Select, { statecode: msdyn_conversationaction_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_conversationaction_Select, { statuscode: msdyn_conversationaction_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_conversationaction_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_conversationaction_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_conversationaction_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_conversationaction_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_conversationactionid: XQW.Guid;
  msdyn_eventname: msdyn_conversationaction_msdyn_eventname;
  msdyn_eventparameter: string;
  msdyn_functionname: string;
  msdyn_icon: string;
  msdyn_name: string;
  msdyn_order: number;
  msdyn_webresource: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_conversationaction_statecode;
  statuscode: msdyn_conversationaction_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_conversationaction_Expand {
  createdby: WebExpand<msdyn_conversationaction_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_conversationaction_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_conversationaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_conversationaction_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_conversationaction_AsyncOperations: WebExpand<msdyn_conversationaction_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_conversationaction_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_conversationaction_BulkDeleteFailures: WebExpand<msdyn_conversationaction_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_conversationaction_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_conversationaction_DuplicateBaseRecord: WebExpand<msdyn_conversationaction_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_conversationaction_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_conversationaction_DuplicateMatchingRecord: WebExpand<msdyn_conversationaction_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_conversationaction_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_conversationaction_MailboxTrackingFolders: WebExpand<msdyn_conversationaction_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_conversationaction_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_conversationaction_PrincipalObjectAttributeAccesses: WebExpand<msdyn_conversationaction_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_conversationaction_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_conversationaction_ProcessSession: WebExpand<msdyn_conversationaction_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_conversationaction_ProcessSession: ProcessSession_Result[] }>;
  msdyn_conversationaction_SyncErrors: WebExpand<msdyn_conversationaction_Expand, SyncError_Select, SyncError_Filter, { msdyn_conversationaction_SyncErrors: SyncError_Result[] }>;
  msdyn_conversationaction_UserEntityInstanceDatas: WebExpand<msdyn_conversationaction_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_conversationaction_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_conversationaction_msdyn_channelcapability_ConversationAction: WebExpand<msdyn_conversationaction_Expand, msdyn_channelcapability_Select, msdyn_channelcapability_Filter, { msdyn_msdyn_conversationaction_msdyn_channelcapability_ConversationAction: msdyn_channelcapability_Result[] }>;
  msdyn_msdyn_conversationaction_msdyn_conversationactionlocale_CAkey: WebExpand<msdyn_conversationaction_Expand, msdyn_conversationactionlocale_Select, msdyn_conversationactionlocale_Filter, { msdyn_msdyn_conversationaction_msdyn_conversationactionlocale_CAkey: msdyn_conversationactionlocale_Result[] }>;
  ownerid: WebExpand<msdyn_conversationaction_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_conversationaction_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_conversationaction_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_conversationaction_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_conversationaction_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_eventname_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_conversationaction_Result extends msdyn_conversationaction_Base, msdyn_conversationaction_Relationships {
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
interface msdyn_conversationaction_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_conversationaction_RelatedMany {
  msdyn_conversationaction_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_conversationaction_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_conversationaction_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_conversationaction_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_conversationaction_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_conversationaction_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_conversationaction_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_conversationaction_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_conversationaction_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_conversationaction_msdyn_channelcapability_ConversationAction: WebMappingRetrieve<msdyn_channelcapability_Select,msdyn_channelcapability_Expand,msdyn_channelcapability_Filter,msdyn_channelcapability_Fixed,msdyn_channelcapability_Result,msdyn_channelcapability_FormattedResult>;
  msdyn_msdyn_conversationaction_msdyn_conversationactionlocale_CAkey: WebMappingRetrieve<msdyn_conversationactionlocale_Select,msdyn_conversationactionlocale_Expand,msdyn_conversationactionlocale_Filter,msdyn_conversationactionlocale_Fixed,msdyn_conversationactionlocale_Result,msdyn_conversationactionlocale_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_conversationactions: WebMappingRetrieve<msdyn_conversationaction_Select,msdyn_conversationaction_Expand,msdyn_conversationaction_Filter,msdyn_conversationaction_Fixed,msdyn_conversationaction_Result,msdyn_conversationaction_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_conversationactions: WebMappingRelated<msdyn_conversationaction_RelatedOne,msdyn_conversationaction_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_conversationactions: WebMappingCUDA<msdyn_conversationaction_Create,msdyn_conversationaction_Update,msdyn_conversationaction_Select>;
}
