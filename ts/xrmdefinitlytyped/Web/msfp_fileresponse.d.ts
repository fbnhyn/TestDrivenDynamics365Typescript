interface msfp_fileresponse_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msfp_fileresponseid?: string | null;
  msfp_name?: string | null;
  msfp_otherproperties?: string | null;
  msfp_sourcequestionidentifier?: string | null;
  msfp_sourcesurveyidentifier?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msfp_fileresponse_statecode | null;
  statuscode?: msfp_fileresponse_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msfp_fileresponse_Relationships {
  msfp_file1?: FileAttachment_Result | null;
  msfp_file10?: FileAttachment_Result | null;
  msfp_file2?: FileAttachment_Result | null;
  msfp_file3?: FileAttachment_Result | null;
  msfp_file4?: FileAttachment_Result | null;
  msfp_file5?: FileAttachment_Result | null;
  msfp_file6?: FileAttachment_Result | null;
  msfp_file7?: FileAttachment_Result | null;
  msfp_file8?: FileAttachment_Result | null;
  msfp_file9?: FileAttachment_Result | null;
  msfp_fileresponse_AsyncOperations?: AsyncOperation_Result[] | null;
  msfp_fileresponse_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msfp_fileresponse_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msfp_fileresponse_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msfp_fileresponse_FileAttachments?: FileAttachment_Result[] | null;
  msfp_fileresponse_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msfp_fileresponse_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msfp_fileresponse_ProcessSession?: ProcessSession_Result[] | null;
  msfp_fileresponse_SyncErrors?: SyncError_Result[] | null;
  msfp_fileresponse_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msfp_fileresponse extends msfp_fileresponse_Base, msfp_fileresponse_Relationships {
  msfp_question_bind$msfp_questions?: string | null;
  msfp_survey_bind$msfp_surveies?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msfp_fileresponse_Create extends msfp_fileresponse {
}
interface msfp_fileresponse_Update extends msfp_fileresponse {
}
interface msfp_fileresponse_Select {
  createdby_guid: WebAttribute<msfp_fileresponse_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msfp_fileresponse_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msfp_fileresponse_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msfp_fileresponse_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msfp_fileresponse_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msfp_fileresponse_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msfp_fileresponse_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msfp_fileresponseid: WebAttribute<msfp_fileresponse_Select, { msfp_fileresponseid: string | null }, {  }>;
  msfp_name: WebAttribute<msfp_fileresponse_Select, { msfp_name: string | null }, {  }>;
  msfp_otherproperties: WebAttribute<msfp_fileresponse_Select, { msfp_otherproperties: string | null }, {  }>;
  msfp_question_guid: WebAttribute<msfp_fileresponse_Select, { msfp_question_guid: string | null }, { msfp_question_formatted?: string }>;
  msfp_sourcequestionidentifier: WebAttribute<msfp_fileresponse_Select, { msfp_sourcequestionidentifier: string | null }, {  }>;
  msfp_sourcesurveyidentifier: WebAttribute<msfp_fileresponse_Select, { msfp_sourcesurveyidentifier: string | null }, {  }>;
  msfp_survey_guid: WebAttribute<msfp_fileresponse_Select, { msfp_survey_guid: string | null }, { msfp_survey_formatted?: string }>;
  overriddencreatedon: WebAttribute<msfp_fileresponse_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msfp_fileresponse_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msfp_fileresponse_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msfp_fileresponse_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msfp_fileresponse_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msfp_fileresponse_Select, { statecode: msfp_fileresponse_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msfp_fileresponse_Select, { statuscode: msfp_fileresponse_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msfp_fileresponse_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msfp_fileresponse_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msfp_fileresponse_Select, { versionnumber: number | null }, {  }>;
}
interface msfp_fileresponse_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msfp_fileresponseid: XQW.Guid;
  msfp_name: string;
  msfp_otherproperties: string;
  msfp_question_guid: XQW.Guid;
  msfp_sourcequestionidentifier: string;
  msfp_sourcesurveyidentifier: string;
  msfp_survey_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msfp_fileresponse_statecode;
  statuscode: msfp_fileresponse_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msfp_fileresponse_Expand {
  createdby: WebExpand<msfp_fileresponse_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msfp_fileresponse_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msfp_fileresponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msfp_fileresponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msfp_file1: WebExpand<msfp_fileresponse_Expand, FileAttachment_Select, FileAttachment_Filter, { msfp_file1: FileAttachment_Result }>;
  msfp_file10: WebExpand<msfp_fileresponse_Expand, FileAttachment_Select, FileAttachment_Filter, { msfp_file10: FileAttachment_Result }>;
  msfp_file2: WebExpand<msfp_fileresponse_Expand, FileAttachment_Select, FileAttachment_Filter, { msfp_file2: FileAttachment_Result }>;
  msfp_file3: WebExpand<msfp_fileresponse_Expand, FileAttachment_Select, FileAttachment_Filter, { msfp_file3: FileAttachment_Result }>;
  msfp_file4: WebExpand<msfp_fileresponse_Expand, FileAttachment_Select, FileAttachment_Filter, { msfp_file4: FileAttachment_Result }>;
  msfp_file5: WebExpand<msfp_fileresponse_Expand, FileAttachment_Select, FileAttachment_Filter, { msfp_file5: FileAttachment_Result }>;
  msfp_file6: WebExpand<msfp_fileresponse_Expand, FileAttachment_Select, FileAttachment_Filter, { msfp_file6: FileAttachment_Result }>;
  msfp_file7: WebExpand<msfp_fileresponse_Expand, FileAttachment_Select, FileAttachment_Filter, { msfp_file7: FileAttachment_Result }>;
  msfp_file8: WebExpand<msfp_fileresponse_Expand, FileAttachment_Select, FileAttachment_Filter, { msfp_file8: FileAttachment_Result }>;
  msfp_file9: WebExpand<msfp_fileresponse_Expand, FileAttachment_Select, FileAttachment_Filter, { msfp_file9: FileAttachment_Result }>;
  msfp_fileresponse_AsyncOperations: WebExpand<msfp_fileresponse_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msfp_fileresponse_AsyncOperations: AsyncOperation_Result[] }>;
  msfp_fileresponse_BulkDeleteFailures: WebExpand<msfp_fileresponse_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msfp_fileresponse_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msfp_fileresponse_DuplicateBaseRecord: WebExpand<msfp_fileresponse_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msfp_fileresponse_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msfp_fileresponse_DuplicateMatchingRecord: WebExpand<msfp_fileresponse_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msfp_fileresponse_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msfp_fileresponse_FileAttachments: WebExpand<msfp_fileresponse_Expand, FileAttachment_Select, FileAttachment_Filter, { msfp_fileresponse_FileAttachments: FileAttachment_Result[] }>;
  msfp_fileresponse_MailboxTrackingFolders: WebExpand<msfp_fileresponse_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msfp_fileresponse_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msfp_fileresponse_PrincipalObjectAttributeAccesses: WebExpand<msfp_fileresponse_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msfp_fileresponse_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msfp_fileresponse_ProcessSession: WebExpand<msfp_fileresponse_Expand, ProcessSession_Select, ProcessSession_Filter, { msfp_fileresponse_ProcessSession: ProcessSession_Result[] }>;
  msfp_fileresponse_SyncErrors: WebExpand<msfp_fileresponse_Expand, SyncError_Select, SyncError_Filter, { msfp_fileresponse_SyncErrors: SyncError_Result[] }>;
  msfp_fileresponse_UserEntityInstanceDatas: WebExpand<msfp_fileresponse_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msfp_fileresponse_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msfp_question: WebExpand<msfp_fileresponse_Expand, msfp_question_Select, msfp_question_Filter, { msfp_question: msfp_question_Result }>;
  msfp_survey: WebExpand<msfp_fileresponse_Expand, msfp_survey_Select, msfp_survey_Filter, { msfp_survey: msfp_survey_Result }>;
  ownerid: WebExpand<msfp_fileresponse_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msfp_fileresponse_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msfp_fileresponse_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msfp_fileresponse_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msfp_fileresponse_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msfp_question_formatted?: string;
  msfp_survey_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msfp_fileresponse_Result extends msfp_fileresponse_Base, msfp_fileresponse_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msfp_question_guid: string | null;
  msfp_survey_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msfp_fileresponse_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msfp_file1: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msfp_file10: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msfp_file2: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msfp_file3: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msfp_file4: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msfp_file5: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msfp_file6: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msfp_file7: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msfp_file8: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msfp_file9: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msfp_question: WebMappingRetrieve<msfp_question_Select,msfp_question_Expand,msfp_question_Filter,msfp_question_Fixed,msfp_question_Result,msfp_question_FormattedResult>;
  msfp_survey: WebMappingRetrieve<msfp_survey_Select,msfp_survey_Expand,msfp_survey_Filter,msfp_survey_Fixed,msfp_survey_Result,msfp_survey_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msfp_fileresponse_RelatedMany {
  msfp_fileresponse_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msfp_fileresponse_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msfp_fileresponse_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msfp_fileresponse_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msfp_fileresponse_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msfp_fileresponse_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msfp_fileresponse_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msfp_fileresponse_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msfp_fileresponse_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msfp_fileresponse_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msfp_fileresponses: WebMappingRetrieve<msfp_fileresponse_Select,msfp_fileresponse_Expand,msfp_fileresponse_Filter,msfp_fileresponse_Fixed,msfp_fileresponse_Result,msfp_fileresponse_FormattedResult>;
}
interface WebEntitiesRelated {
  msfp_fileresponses: WebMappingRelated<msfp_fileresponse_RelatedOne,msfp_fileresponse_RelatedMany>;
}
interface WebEntitiesCUDA {
  msfp_fileresponses: WebMappingCUDA<msfp_fileresponse_Create,msfp_fileresponse_Update,msfp_fileresponse_Select>;
}
