interface msfp_questionresponse_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msfp_keyphrases?: string | null;
  msfp_name?: string | null;
  msfp_otherproperties?: string | null;
  msfp_questionresponseid?: string | null;
  msfp_response?: string | null;
  msfp_sentimentvalue?: number | null;
  msfp_sourcequestionidentifier?: string | null;
  msfp_sourceresponseidentifier?: string | null;
  msfp_sourcesurveyidentifier?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msfp_questionresponse_statecode | null;
  statuscode?: msfp_questionresponse_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msfp_questionresponse_Relationships {
  msfp_questionresponse_AsyncOperations?: AsyncOperation_Result[] | null;
  msfp_questionresponse_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msfp_questionresponse_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msfp_questionresponse_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msfp_questionresponse_ProcessSession?: ProcessSession_Result[] | null;
  msfp_questionresponse_SyncErrors?: SyncError_Result[] | null;
  msfp_questionresponse_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msfp_questionresponse extends msfp_questionresponse_Base, msfp_questionresponse_Relationships {
  msfp_questionid_bind$msfp_questions?: string | null;
  msfp_surveyresponseid_bind$msfp_surveyresponses?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msfp_questionresponse_Create extends msfp_questionresponse {
}
interface msfp_questionresponse_Update extends msfp_questionresponse {
}
interface msfp_questionresponse_Select {
  createdby_guid: WebAttribute<msfp_questionresponse_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msfp_questionresponse_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msfp_questionresponse_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msfp_questionresponse_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msfp_questionresponse_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msfp_questionresponse_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msfp_questionresponse_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msfp_keyphrases: WebAttribute<msfp_questionresponse_Select, { msfp_keyphrases: string | null }, {  }>;
  msfp_name: WebAttribute<msfp_questionresponse_Select, { msfp_name: string | null }, {  }>;
  msfp_otherproperties: WebAttribute<msfp_questionresponse_Select, { msfp_otherproperties: string | null }, {  }>;
  msfp_questionid_guid: WebAttribute<msfp_questionresponse_Select, { msfp_questionid_guid: string | null }, { msfp_questionid_formatted?: string }>;
  msfp_questionresponseid: WebAttribute<msfp_questionresponse_Select, { msfp_questionresponseid: string | null }, {  }>;
  msfp_response: WebAttribute<msfp_questionresponse_Select, { msfp_response: string | null }, {  }>;
  msfp_sentimentvalue: WebAttribute<msfp_questionresponse_Select, { msfp_sentimentvalue: number | null }, {  }>;
  msfp_sourcequestionidentifier: WebAttribute<msfp_questionresponse_Select, { msfp_sourcequestionidentifier: string | null }, {  }>;
  msfp_sourceresponseidentifier: WebAttribute<msfp_questionresponse_Select, { msfp_sourceresponseidentifier: string | null }, {  }>;
  msfp_sourcesurveyidentifier: WebAttribute<msfp_questionresponse_Select, { msfp_sourcesurveyidentifier: string | null }, {  }>;
  msfp_surveyresponseid_guid: WebAttribute<msfp_questionresponse_Select, { msfp_surveyresponseid_guid: string | null }, { msfp_surveyresponseid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msfp_questionresponse_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msfp_questionresponse_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msfp_questionresponse_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msfp_questionresponse_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msfp_questionresponse_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msfp_questionresponse_Select, { statecode: msfp_questionresponse_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msfp_questionresponse_Select, { statuscode: msfp_questionresponse_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msfp_questionresponse_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msfp_questionresponse_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msfp_questionresponse_Select, { versionnumber: number | null }, {  }>;
}
interface msfp_questionresponse_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msfp_keyphrases: string;
  msfp_name: string;
  msfp_otherproperties: string;
  msfp_questionid_guid: XQW.Guid;
  msfp_questionresponseid: XQW.Guid;
  msfp_response: string;
  msfp_sentimentvalue: any;
  msfp_sourcequestionidentifier: string;
  msfp_sourceresponseidentifier: string;
  msfp_sourcesurveyidentifier: string;
  msfp_surveyresponseid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msfp_questionresponse_statecode;
  statuscode: msfp_questionresponse_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msfp_questionresponse_Expand {
  createdby: WebExpand<msfp_questionresponse_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msfp_questionresponse_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msfp_questionresponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msfp_questionresponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msfp_questionid: WebExpand<msfp_questionresponse_Expand, msfp_question_Select, msfp_question_Filter, { msfp_questionid: msfp_question_Result }>;
  msfp_questionresponse_AsyncOperations: WebExpand<msfp_questionresponse_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msfp_questionresponse_AsyncOperations: AsyncOperation_Result[] }>;
  msfp_questionresponse_BulkDeleteFailures: WebExpand<msfp_questionresponse_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msfp_questionresponse_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msfp_questionresponse_MailboxTrackingFolders: WebExpand<msfp_questionresponse_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msfp_questionresponse_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msfp_questionresponse_PrincipalObjectAttributeAccesses: WebExpand<msfp_questionresponse_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msfp_questionresponse_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msfp_questionresponse_ProcessSession: WebExpand<msfp_questionresponse_Expand, ProcessSession_Select, ProcessSession_Filter, { msfp_questionresponse_ProcessSession: ProcessSession_Result[] }>;
  msfp_questionresponse_SyncErrors: WebExpand<msfp_questionresponse_Expand, SyncError_Select, SyncError_Filter, { msfp_questionresponse_SyncErrors: SyncError_Result[] }>;
  msfp_questionresponse_UserEntityInstanceDatas: WebExpand<msfp_questionresponse_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msfp_questionresponse_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msfp_surveyresponseid: WebExpand<msfp_questionresponse_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msfp_surveyresponseid: msfp_surveyresponse_Result }>;
  ownerid: WebExpand<msfp_questionresponse_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msfp_questionresponse_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msfp_questionresponse_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msfp_questionresponse_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msfp_questionresponse_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msfp_questionid_formatted?: string;
  msfp_surveyresponseid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msfp_questionresponse_Result extends msfp_questionresponse_Base, msfp_questionresponse_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msfp_questionid_guid: string | null;
  msfp_surveyresponseid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msfp_questionresponse_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msfp_questionid: WebMappingRetrieve<msfp_question_Select,msfp_question_Expand,msfp_question_Filter,msfp_question_Fixed,msfp_question_Result,msfp_question_FormattedResult>;
  msfp_surveyresponseid: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msfp_questionresponse_RelatedMany {
  msfp_questionresponse_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msfp_questionresponse_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msfp_questionresponse_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msfp_questionresponse_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msfp_questionresponse_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msfp_questionresponse_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msfp_questionresponse_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msfp_questionresponses: WebMappingRetrieve<msfp_questionresponse_Select,msfp_questionresponse_Expand,msfp_questionresponse_Filter,msfp_questionresponse_Fixed,msfp_questionresponse_Result,msfp_questionresponse_FormattedResult>;
}
interface WebEntitiesRelated {
  msfp_questionresponses: WebMappingRelated<msfp_questionresponse_RelatedOne,msfp_questionresponse_RelatedMany>;
}
interface WebEntitiesCUDA {
  msfp_questionresponses: WebMappingCUDA<msfp_questionresponse_Create,msfp_questionresponse_Update,msfp_questionresponse_Select>;
}
