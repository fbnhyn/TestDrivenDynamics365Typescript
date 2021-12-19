interface msdyn_pminferredtask_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_automationdata?: string | null;
  msdyn_automationstatus?: msdyn_pminferredtask_msdyn_automationstatus | null;
  msdyn_description?: string | null;
  msdyn_inputdatabinding?: string | null;
  msdyn_isreportavailable?: boolean | null;
  msdyn_iterationid?: string | null;
  msdyn_lasterrors?: string | null;
  msdyn_lastreportrefreshdate?: Date | null;
  msdyn_name?: string | null;
  msdyn_outputdata?: string | null;
  msdyn_pminferredtaskid?: string | null;
  msdyn_reportdata?: string | null;
  msdyn_reportprovisioningstatus?: msdyn_pminferredtask_msdyn_reportprovisioningstatus | null;
  msdyn_sharedrecordingmetadata?: string | null;
  msdyn_source?: msdyn_pminferredtask_msdyn_source | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_pminferredtask_statecode | null;
  statuscode?: msdyn_pminferredtask_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_pminferredtask_Relationships {
  msdyn_lasterrorsreport?: FileAttachment_Result | null;
  msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask?: msdyn_pmrecording_Result[] | null;
  msdyn_pminferredtask_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_pminferredtask_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_pminferredtask_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_pminferredtask_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_pminferredtask_FileAttachments?: FileAttachment_Result[] | null;
  msdyn_pminferredtask_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_pminferredtask_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_pminferredtask_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_pminferredtask_SyncErrors?: SyncError_Result[] | null;
  msdyn_pminferredtask_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_pminferredtask extends msdyn_pminferredtask_Base, msdyn_pminferredtask_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_pminferredtask_Create extends msdyn_pminferredtask {
}
interface msdyn_pminferredtask_Update extends msdyn_pminferredtask {
}
interface msdyn_pminferredtask_Select {
  componentidunique: WebAttribute<msdyn_pminferredtask_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_pminferredtask_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_pminferredtask_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_pminferredtask_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_pminferredtask_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_pminferredtask_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_pminferredtask_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_pminferredtask_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_pminferredtask_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_pminferredtask_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_pminferredtask_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_automationdata: WebAttribute<msdyn_pminferredtask_Select, { msdyn_automationdata: string | null }, {  }>;
  msdyn_automationstatus: WebAttribute<msdyn_pminferredtask_Select, { msdyn_automationstatus: msdyn_pminferredtask_msdyn_automationstatus | null }, { msdyn_automationstatus_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_pminferredtask_Select, { msdyn_description: string | null }, {  }>;
  msdyn_inputdatabinding: WebAttribute<msdyn_pminferredtask_Select, { msdyn_inputdatabinding: string | null }, {  }>;
  msdyn_isreportavailable: WebAttribute<msdyn_pminferredtask_Select, { msdyn_isreportavailable: boolean | null }, {  }>;
  msdyn_iterationid: WebAttribute<msdyn_pminferredtask_Select, { msdyn_iterationid: string | null }, {  }>;
  msdyn_lasterrors: WebAttribute<msdyn_pminferredtask_Select, { msdyn_lasterrors: string | null }, {  }>;
  msdyn_lastreportrefreshdate: WebAttribute<msdyn_pminferredtask_Select, { msdyn_lastreportrefreshdate: Date | null }, { msdyn_lastreportrefreshdate_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_pminferredtask_Select, { msdyn_name: string | null }, {  }>;
  msdyn_outputdata: WebAttribute<msdyn_pminferredtask_Select, { msdyn_outputdata: string | null }, {  }>;
  msdyn_pminferredtaskid: WebAttribute<msdyn_pminferredtask_Select, { msdyn_pminferredtaskid: string | null }, {  }>;
  msdyn_reportdata: WebAttribute<msdyn_pminferredtask_Select, { msdyn_reportdata: string | null }, {  }>;
  msdyn_reportprovisioningstatus: WebAttribute<msdyn_pminferredtask_Select, { msdyn_reportprovisioningstatus: msdyn_pminferredtask_msdyn_reportprovisioningstatus | null }, { msdyn_reportprovisioningstatus_formatted?: string }>;
  msdyn_sharedrecordingmetadata: WebAttribute<msdyn_pminferredtask_Select, { msdyn_sharedrecordingmetadata: string | null }, {  }>;
  msdyn_source: WebAttribute<msdyn_pminferredtask_Select, { msdyn_source: msdyn_pminferredtask_msdyn_source | null }, { msdyn_source_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_pminferredtask_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_pminferredtask_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_pminferredtask_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_pminferredtask_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_pminferredtask_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_pminferredtask_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_pminferredtask_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_pminferredtask_Select, { statecode: msdyn_pminferredtask_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_pminferredtask_Select, { statuscode: msdyn_pminferredtask_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_pminferredtask_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_pminferredtask_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_pminferredtask_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_pminferredtask_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_pminferredtask_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_automationdata: string;
  msdyn_automationstatus: msdyn_pminferredtask_msdyn_automationstatus;
  msdyn_description: string;
  msdyn_inputdatabinding: string;
  msdyn_isreportavailable: boolean;
  msdyn_iterationid: string;
  msdyn_lasterrors: string;
  msdyn_lastreportrefreshdate: Date;
  msdyn_name: string;
  msdyn_outputdata: string;
  msdyn_pminferredtaskid: XQW.Guid;
  msdyn_reportdata: string;
  msdyn_reportprovisioningstatus: msdyn_pminferredtask_msdyn_reportprovisioningstatus;
  msdyn_sharedrecordingmetadata: string;
  msdyn_source: msdyn_pminferredtask_msdyn_source;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_pminferredtask_statecode;
  statuscode: msdyn_pminferredtask_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_pminferredtask_Expand {
  createdby: WebExpand<msdyn_pminferredtask_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_pminferredtask_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_pminferredtask_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_pminferredtask_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_lasterrorsreport: WebExpand<msdyn_pminferredtask_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_lasterrorsreport: FileAttachment_Result }>;
  msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask: WebExpand<msdyn_pminferredtask_Expand, msdyn_pmrecording_Select, msdyn_pmrecording_Filter, { msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask: msdyn_pmrecording_Result[] }>;
  msdyn_pminferredtask_AsyncOperations: WebExpand<msdyn_pminferredtask_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_pminferredtask_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_pminferredtask_BulkDeleteFailures: WebExpand<msdyn_pminferredtask_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_pminferredtask_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_pminferredtask_DuplicateBaseRecord: WebExpand<msdyn_pminferredtask_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_pminferredtask_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_pminferredtask_DuplicateMatchingRecord: WebExpand<msdyn_pminferredtask_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_pminferredtask_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_pminferredtask_FileAttachments: WebExpand<msdyn_pminferredtask_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_pminferredtask_FileAttachments: FileAttachment_Result[] }>;
  msdyn_pminferredtask_MailboxTrackingFolders: WebExpand<msdyn_pminferredtask_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_pminferredtask_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_pminferredtask_PrincipalObjectAttributeAccesses: WebExpand<msdyn_pminferredtask_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_pminferredtask_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_pminferredtask_ProcessSession: WebExpand<msdyn_pminferredtask_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_pminferredtask_ProcessSession: ProcessSession_Result[] }>;
  msdyn_pminferredtask_SyncErrors: WebExpand<msdyn_pminferredtask_Expand, SyncError_Select, SyncError_Filter, { msdyn_pminferredtask_SyncErrors: SyncError_Result[] }>;
  msdyn_pminferredtask_UserEntityInstanceDatas: WebExpand<msdyn_pminferredtask_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_pminferredtask_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_pminferredtask_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_pminferredtask_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_pminferredtask_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_pminferredtask_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_pminferredtask_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_automationstatus_formatted?: string;
  msdyn_lastreportrefreshdate_formatted?: string;
  msdyn_reportprovisioningstatus_formatted?: string;
  msdyn_source_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_pminferredtask_Result extends msdyn_pminferredtask_Base, msdyn_pminferredtask_Relationships {
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
interface msdyn_pminferredtask_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_lasterrorsreport: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_pminferredtask_RelatedMany {
  msdyn_msdyn_pminferredtask_msdyn_pmrecording_parenttask: WebMappingRetrieve<msdyn_pmrecording_Select,msdyn_pmrecording_Expand,msdyn_pmrecording_Filter,msdyn_pmrecording_Fixed,msdyn_pmrecording_Result,msdyn_pmrecording_FormattedResult>;
  msdyn_pminferredtask_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_pminferredtask_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_pminferredtask_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_pminferredtask_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_pminferredtask_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_pminferredtask_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_pminferredtask_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_pminferredtask_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_pminferredtask_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_pminferredtask_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_pminferredtasks: WebMappingRetrieve<msdyn_pminferredtask_Select,msdyn_pminferredtask_Expand,msdyn_pminferredtask_Filter,msdyn_pminferredtask_Fixed,msdyn_pminferredtask_Result,msdyn_pminferredtask_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_pminferredtasks: WebMappingRelated<msdyn_pminferredtask_RelatedOne,msdyn_pminferredtask_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_pminferredtasks: WebMappingCUDA<msdyn_pminferredtask_Create,msdyn_pminferredtask_Update,msdyn_pminferredtask_Select>;
}
