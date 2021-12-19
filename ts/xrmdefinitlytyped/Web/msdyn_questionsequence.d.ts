interface msdyn_questionsequence_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_chatquestionnairetype?: msdyn_chatquestionnairetype | null;
  msdyn_name?: string | null;
  msdyn_questionrequired?: boolean | null;
  msdyn_questionsequenceid?: string | null;
  overriddencreatedon?: Date | null;
  sequencenumber?: number | null;
  statecode?: msdyn_questionsequence_statecode | null;
  statuscode?: msdyn_questionsequence_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_questionsequence_Relationships {
  msdyn_ChatEngagementToChatSequenceId?: msdyn_livechatconfig_Result | null;
  msdyn_SurveyQuestion?: msdyn_surveyquestion_Result | null;
  msdyn_questionseq_msdyn_livechatconf_auth?: msdyn_livechatconfig_Result[] | null;
  msdyn_questionseq_msdyn_livechatconf_unauth?: msdyn_livechatconfig_Result[] | null;
  msdyn_questionsequence_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_questionsequence_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_questionsequence_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_questionsequence_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_questionsequence_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_questionsequence_SyncErrors?: SyncError_Result[] | null;
  msdyn_questionsequence_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_questionsequence extends msdyn_questionsequence_Base, msdyn_questionsequence_Relationships {
  msdyn_ChatEngagementToChatSequenceId_bind$msdyn_livechatconfigs?: string | null;
  msdyn_SurveyQuestion_bind$msdyn_surveyquestions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_questionsequence_Create extends msdyn_questionsequence {
}
interface msdyn_questionsequence_Update extends msdyn_questionsequence {
}
interface msdyn_questionsequence_Select {
  createdby_guid: WebAttribute<msdyn_questionsequence_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_questionsequence_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_questionsequence_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_questionsequence_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_questionsequence_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_questionsequence_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_questionsequence_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_chatengagementtochatsequenceid_guid: WebAttribute<msdyn_questionsequence_Select, { msdyn_chatengagementtochatsequenceid_guid: string | null }, { msdyn_chatengagementtochatsequenceid_formatted?: string }>;
  msdyn_chatquestionnairetype: WebAttribute<msdyn_questionsequence_Select, { msdyn_chatquestionnairetype: msdyn_chatquestionnairetype | null }, { msdyn_chatquestionnairetype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_questionsequence_Select, { msdyn_name: string | null }, {  }>;
  msdyn_questionrequired: WebAttribute<msdyn_questionsequence_Select, { msdyn_questionrequired: boolean | null }, {  }>;
  msdyn_questionsequenceid: WebAttribute<msdyn_questionsequence_Select, { msdyn_questionsequenceid: string | null }, {  }>;
  msdyn_surveyquestion_guid: WebAttribute<msdyn_questionsequence_Select, { msdyn_surveyquestion_guid: string | null }, { msdyn_surveyquestion_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_questionsequence_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_questionsequence_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_questionsequence_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_questionsequence_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_questionsequence_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  sequencenumber: WebAttribute<msdyn_questionsequence_Select, { sequencenumber: number | null }, {  }>;
  statecode: WebAttribute<msdyn_questionsequence_Select, { statecode: msdyn_questionsequence_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_questionsequence_Select, { statuscode: msdyn_questionsequence_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_questionsequence_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_questionsequence_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_questionsequence_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_questionsequence_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_chatengagementtochatsequenceid_guid: XQW.Guid;
  msdyn_chatquestionnairetype: msdyn_chatquestionnairetype;
  msdyn_name: string;
  msdyn_questionrequired: boolean;
  msdyn_questionsequenceid: XQW.Guid;
  msdyn_surveyquestion_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  sequencenumber: number;
  statecode: msdyn_questionsequence_statecode;
  statuscode: msdyn_questionsequence_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_questionsequence_Expand {
  createdby: WebExpand<msdyn_questionsequence_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_questionsequence_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_questionsequence_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_questionsequence_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ChatEngagementToChatSequenceId: WebExpand<msdyn_questionsequence_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_ChatEngagementToChatSequenceId: msdyn_livechatconfig_Result }>;
  msdyn_SurveyQuestion: WebExpand<msdyn_questionsequence_Expand, msdyn_surveyquestion_Select, msdyn_surveyquestion_Filter, { msdyn_SurveyQuestion: msdyn_surveyquestion_Result }>;
  msdyn_questionseq_msdyn_livechatconf_auth: WebExpand<msdyn_questionsequence_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_questionseq_msdyn_livechatconf_auth: msdyn_livechatconfig_Result[] }>;
  msdyn_questionseq_msdyn_livechatconf_unauth: WebExpand<msdyn_questionsequence_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_questionseq_msdyn_livechatconf_unauth: msdyn_livechatconfig_Result[] }>;
  msdyn_questionsequence_AsyncOperations: WebExpand<msdyn_questionsequence_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_questionsequence_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_questionsequence_BulkDeleteFailures: WebExpand<msdyn_questionsequence_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_questionsequence_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_questionsequence_MailboxTrackingFolders: WebExpand<msdyn_questionsequence_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_questionsequence_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_questionsequence_PrincipalObjectAttributeAccesses: WebExpand<msdyn_questionsequence_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_questionsequence_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_questionsequence_ProcessSession: WebExpand<msdyn_questionsequence_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_questionsequence_ProcessSession: ProcessSession_Result[] }>;
  msdyn_questionsequence_SyncErrors: WebExpand<msdyn_questionsequence_Expand, SyncError_Select, SyncError_Filter, { msdyn_questionsequence_SyncErrors: SyncError_Result[] }>;
  msdyn_questionsequence_UserEntityInstanceDatas: WebExpand<msdyn_questionsequence_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_questionsequence_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_questionsequence_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_questionsequence_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_questionsequence_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_questionsequence_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_questionsequence_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_chatengagementtochatsequenceid_formatted?: string;
  msdyn_chatquestionnairetype_formatted?: string;
  msdyn_surveyquestion_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_questionsequence_Result extends msdyn_questionsequence_Base, msdyn_questionsequence_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_chatengagementtochatsequenceid_guid: string | null;
  msdyn_surveyquestion_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_questionsequence_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ChatEngagementToChatSequenceId: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
  msdyn_SurveyQuestion: WebMappingRetrieve<msdyn_surveyquestion_Select,msdyn_surveyquestion_Expand,msdyn_surveyquestion_Filter,msdyn_surveyquestion_Fixed,msdyn_surveyquestion_Result,msdyn_surveyquestion_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_questionsequence_RelatedMany {
  msdyn_questionseq_msdyn_livechatconf_auth: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
  msdyn_questionseq_msdyn_livechatconf_unauth: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
  msdyn_questionsequence_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_questionsequence_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_questionsequence_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_questionsequence_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_questionsequence_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_questionsequence_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_questionsequence_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_questionsequences: WebMappingRetrieve<msdyn_questionsequence_Select,msdyn_questionsequence_Expand,msdyn_questionsequence_Filter,msdyn_questionsequence_Fixed,msdyn_questionsequence_Result,msdyn_questionsequence_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_questionsequences: WebMappingRelated<msdyn_questionsequence_RelatedOne,msdyn_questionsequence_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_questionsequences: WebMappingCUDA<msdyn_questionsequence_Create,msdyn_questionsequence_Update,msdyn_questionsequence_Select>;
}
