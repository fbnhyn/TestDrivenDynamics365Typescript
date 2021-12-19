interface msdyn_chatansweroption_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_chatansweroptionid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_chatansweroption_statecode | null;
  statuscode?: msdyn_chatansweroption_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_chatansweroption_Relationships {
  msdyn_AnswerOptionsId?: msdyn_surveyquestion_Result | null;
  msdyn_chatansweroption_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_chatansweroption_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_chatansweroption_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_chatansweroption_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_chatansweroption_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_chatansweroption_SyncErrors?: SyncError_Result[] | null;
  msdyn_chatansweroption_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_chatansweroption_msdyn_chatquestionnaireresponseitem?: msdyn_chatquestionnaireresponseitem_Result[] | null;
}
interface msdyn_chatansweroption extends msdyn_chatansweroption_Base, msdyn_chatansweroption_Relationships {
  msdyn_AnswerOptionsId_bind$msdyn_surveyquestions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_chatansweroption_Create extends msdyn_chatansweroption {
}
interface msdyn_chatansweroption_Update extends msdyn_chatansweroption {
}
interface msdyn_chatansweroption_Select {
  createdby_guid: WebAttribute<msdyn_chatansweroption_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_chatansweroption_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_chatansweroption_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_chatansweroption_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_chatansweroption_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_chatansweroption_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_chatansweroption_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_answeroptionsid_guid: WebAttribute<msdyn_chatansweroption_Select, { msdyn_answeroptionsid_guid: string | null }, { msdyn_answeroptionsid_formatted?: string }>;
  msdyn_chatansweroptionid: WebAttribute<msdyn_chatansweroption_Select, { msdyn_chatansweroptionid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_chatansweroption_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_chatansweroption_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_chatansweroption_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_chatansweroption_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_chatansweroption_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_chatansweroption_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_chatansweroption_Select, { statecode: msdyn_chatansweroption_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_chatansweroption_Select, { statuscode: msdyn_chatansweroption_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_chatansweroption_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_chatansweroption_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_chatansweroption_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_chatansweroption_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_answeroptionsid_guid: XQW.Guid;
  msdyn_chatansweroptionid: XQW.Guid;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_chatansweroption_statecode;
  statuscode: msdyn_chatansweroption_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_chatansweroption_Expand {
  createdby: WebExpand<msdyn_chatansweroption_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_chatansweroption_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_chatansweroption_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_chatansweroption_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AnswerOptionsId: WebExpand<msdyn_chatansweroption_Expand, msdyn_surveyquestion_Select, msdyn_surveyquestion_Filter, { msdyn_AnswerOptionsId: msdyn_surveyquestion_Result }>;
  msdyn_chatansweroption_AsyncOperations: WebExpand<msdyn_chatansweroption_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_chatansweroption_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_chatansweroption_BulkDeleteFailures: WebExpand<msdyn_chatansweroption_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_chatansweroption_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_chatansweroption_MailboxTrackingFolders: WebExpand<msdyn_chatansweroption_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_chatansweroption_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_chatansweroption_PrincipalObjectAttributeAccesses: WebExpand<msdyn_chatansweroption_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_chatansweroption_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_chatansweroption_ProcessSession: WebExpand<msdyn_chatansweroption_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_chatansweroption_ProcessSession: ProcessSession_Result[] }>;
  msdyn_chatansweroption_SyncErrors: WebExpand<msdyn_chatansweroption_Expand, SyncError_Select, SyncError_Filter, { msdyn_chatansweroption_SyncErrors: SyncError_Result[] }>;
  msdyn_chatansweroption_UserEntityInstanceDatas: WebExpand<msdyn_chatansweroption_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_chatansweroption_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_chatansweroption_msdyn_chatquestionnaireresponseitem: WebExpand<msdyn_chatansweroption_Expand, msdyn_chatquestionnaireresponseitem_Select, msdyn_chatquestionnaireresponseitem_Filter, { msdyn_msdyn_chatansweroption_msdyn_chatquestionnaireresponseitem: msdyn_chatquestionnaireresponseitem_Result[] }>;
  ownerid: WebExpand<msdyn_chatansweroption_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_chatansweroption_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_chatansweroption_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_chatansweroption_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_chatansweroption_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_answeroptionsid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_chatansweroption_Result extends msdyn_chatansweroption_Base, msdyn_chatansweroption_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_answeroptionsid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_chatansweroption_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AnswerOptionsId: WebMappingRetrieve<msdyn_surveyquestion_Select,msdyn_surveyquestion_Expand,msdyn_surveyquestion_Filter,msdyn_surveyquestion_Fixed,msdyn_surveyquestion_Result,msdyn_surveyquestion_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_chatansweroption_RelatedMany {
  msdyn_chatansweroption_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_chatansweroption_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_chatansweroption_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_chatansweroption_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_chatansweroption_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_chatansweroption_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_chatansweroption_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_chatansweroption_msdyn_chatquestionnaireresponseitem: WebMappingRetrieve<msdyn_chatquestionnaireresponseitem_Select,msdyn_chatquestionnaireresponseitem_Expand,msdyn_chatquestionnaireresponseitem_Filter,msdyn_chatquestionnaireresponseitem_Fixed,msdyn_chatquestionnaireresponseitem_Result,msdyn_chatquestionnaireresponseitem_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_chatansweroptions: WebMappingRetrieve<msdyn_chatansweroption_Select,msdyn_chatansweroption_Expand,msdyn_chatansweroption_Filter,msdyn_chatansweroption_Fixed,msdyn_chatansweroption_Result,msdyn_chatansweroption_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_chatansweroptions: WebMappingRelated<msdyn_chatansweroption_RelatedOne,msdyn_chatansweroption_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_chatansweroptions: WebMappingCUDA<msdyn_chatansweroption_Create,msdyn_chatansweroption_Update,msdyn_chatansweroption_Select>;
}
