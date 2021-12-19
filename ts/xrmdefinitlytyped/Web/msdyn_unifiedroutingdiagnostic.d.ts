interface msdyn_unifiedroutingdiagnostic_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_completedon?: Date | null;
  msdyn_evaluation?: string | null;
  msdyn_inputdata?: string | null;
  msdyn_name?: string | null;
  msdyn_outputdata?: string | null;
  msdyn_ruletype?: msdyn_unifiedroutingdiagnostic_msdyn_ruletype | null;
  msdyn_sequencenumber?: number | null;
  msdyn_startedon?: Date | null;
  msdyn_unifiedroutingdiagnosticid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_unifiedroutingdiagnostic_statecode | null;
  statuscode?: msdyn_unifiedroutingdiagnostic_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_unifiedroutingdiagnostic_Relationships {
  msdyn_targetobject_msdyn_ocliveworkitem?: msdyn_ocliveworkitem_Result | null;
  msdyn_targetobject_queueitem?: QueueItem_Result | null;
  msdyn_unifiedroutingdiagnostic_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_unifiedroutingdiagnostic_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_unifiedroutingdiagnostic_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_unifiedroutingdiagnostic_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_unifiedroutingdiagnostic_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_unifiedroutingdiagnostic_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_unifiedroutingdiagnostic_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_unifiedroutingdiagnostic_SyncErrors?: SyncError_Result[] | null;
  msdyn_unifiedroutingdiagnostic_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_unifiedroutingdiagnostic extends msdyn_unifiedroutingdiagnostic_Base, msdyn_unifiedroutingdiagnostic_Relationships {
  msdyn_decisionrulesetid_bind$msdyn_decisionrulesets?: string | null;
  msdyn_ocliveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  msdyn_targetobject_msdyn_ocliveworkitem_bind$msdyn_ocliveworkitems?: string | null;
  msdyn_targetobject_queueitem_bind$queueitems?: string | null;
  msdyn_unifiedroutingrunid_bind$msdyn_unifiedroutingruns?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_unifiedroutingdiagnostic_Create extends msdyn_unifiedroutingdiagnostic {
}
interface msdyn_unifiedroutingdiagnostic_Update extends msdyn_unifiedroutingdiagnostic {
}
interface msdyn_unifiedroutingdiagnostic_Select {
  createdby_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_completedon: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_completedon: Date | null }, { msdyn_completedon_formatted?: string }>;
  msdyn_decisionrulesetid_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_decisionrulesetid_guid: string | null }, { msdyn_decisionrulesetid_formatted?: string }>;
  msdyn_evaluation: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_evaluation: string | null }, {  }>;
  msdyn_inputdata: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_inputdata: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocliveworkitemid_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_ocliveworkitemid_guid: string | null }, { msdyn_ocliveworkitemid_formatted?: string }>;
  msdyn_outputdata: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_outputdata: string | null }, {  }>;
  msdyn_ruletype: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_ruletype: msdyn_unifiedroutingdiagnostic_msdyn_ruletype | null }, { msdyn_ruletype_formatted?: string }>;
  msdyn_sequencenumber: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_sequencenumber: number | null }, {  }>;
  msdyn_startedon: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_startedon: Date | null }, { msdyn_startedon_formatted?: string }>;
  msdyn_targetobject_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_targetobject_guid: string | null }, { msdyn_targetobject_formatted?: string }>;
  msdyn_unifiedroutingdiagnosticid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_unifiedroutingdiagnosticid: string | null }, {  }>;
  msdyn_unifiedroutingrunid_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { msdyn_unifiedroutingrunid_guid: string | null }, { msdyn_unifiedroutingrunid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { statecode: msdyn_unifiedroutingdiagnostic_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { statuscode: msdyn_unifiedroutingdiagnostic_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_unifiedroutingdiagnostic_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_unifiedroutingdiagnostic_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_completedon: Date;
  msdyn_decisionrulesetid_guid: XQW.Guid;
  msdyn_evaluation: string;
  msdyn_inputdata: string;
  msdyn_name: string;
  msdyn_ocliveworkitemid_guid: XQW.Guid;
  msdyn_outputdata: string;
  msdyn_ruletype: msdyn_unifiedroutingdiagnostic_msdyn_ruletype;
  msdyn_sequencenumber: number;
  msdyn_startedon: Date;
  msdyn_targetobject_guid: XQW.Guid;
  msdyn_unifiedroutingdiagnosticid: XQW.Guid;
  msdyn_unifiedroutingrunid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_unifiedroutingdiagnostic_statecode;
  statuscode: msdyn_unifiedroutingdiagnostic_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_unifiedroutingdiagnostic_Expand {
  createdby: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_decisionrulesetid: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, msdyn_decisionruleset_Select, msdyn_decisionruleset_Filter, { msdyn_decisionrulesetid: msdyn_decisionruleset_Result }>;
  msdyn_ocliveworkitemid: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_ocliveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_targetobject_msdyn_ocliveworkitem: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_targetobject_msdyn_ocliveworkitem: msdyn_ocliveworkitem_Result }>;
  msdyn_targetobject_queueitem: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, QueueItem_Select, QueueItem_Filter, { msdyn_targetobject_queueitem: QueueItem_Result }>;
  msdyn_unifiedroutingdiagnostic_AsyncOperations: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_unifiedroutingdiagnostic_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_unifiedroutingdiagnostic_BulkDeleteFailures: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_unifiedroutingdiagnostic_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_unifiedroutingdiagnostic_DuplicateBaseRecord: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_unifiedroutingdiagnostic_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_unifiedroutingdiagnostic_DuplicateMatchingRecord: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_unifiedroutingdiagnostic_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_unifiedroutingdiagnostic_MailboxTrackingFolders: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_unifiedroutingdiagnostic_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_unifiedroutingdiagnostic_PrincipalObjectAttributeAccesses: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_unifiedroutingdiagnostic_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_unifiedroutingdiagnostic_ProcessSession: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_unifiedroutingdiagnostic_ProcessSession: ProcessSession_Result[] }>;
  msdyn_unifiedroutingdiagnostic_SyncErrors: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, SyncError_Select, SyncError_Filter, { msdyn_unifiedroutingdiagnostic_SyncErrors: SyncError_Result[] }>;
  msdyn_unifiedroutingdiagnostic_UserEntityInstanceDatas: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_unifiedroutingdiagnostic_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_unifiedroutingrunid: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, msdyn_unifiedroutingrun_Select, msdyn_unifiedroutingrun_Filter, { msdyn_unifiedroutingrunid: msdyn_unifiedroutingrun_Result }>;
  ownerid: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_unifiedroutingdiagnostic_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_unifiedroutingdiagnostic_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_completedon_formatted?: string;
  msdyn_decisionrulesetid_formatted?: string;
  msdyn_ocliveworkitemid_formatted?: string;
  msdyn_ruletype_formatted?: string;
  msdyn_startedon_formatted?: string;
  msdyn_targetobject_formatted?: string;
  msdyn_unifiedroutingrunid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_unifiedroutingdiagnostic_Result extends msdyn_unifiedroutingdiagnostic_Base, msdyn_unifiedroutingdiagnostic_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_decisionrulesetid_guid: string | null;
  msdyn_ocliveworkitemid_guid: string | null;
  msdyn_targetobject_guid: string | null;
  msdyn_unifiedroutingrunid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_unifiedroutingdiagnostic_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_decisionrulesetid: WebMappingRetrieve<msdyn_decisionruleset_Select,msdyn_decisionruleset_Expand,msdyn_decisionruleset_Filter,msdyn_decisionruleset_Fixed,msdyn_decisionruleset_Result,msdyn_decisionruleset_FormattedResult>;
  msdyn_ocliveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_targetobject_msdyn_ocliveworkitem: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_targetobject_queueitem: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  msdyn_unifiedroutingrunid: WebMappingRetrieve<msdyn_unifiedroutingrun_Select,msdyn_unifiedroutingrun_Expand,msdyn_unifiedroutingrun_Filter,msdyn_unifiedroutingrun_Fixed,msdyn_unifiedroutingrun_Result,msdyn_unifiedroutingrun_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_unifiedroutingdiagnostic_RelatedMany {
  msdyn_unifiedroutingdiagnostic_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_unifiedroutingdiagnostic_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_unifiedroutingdiagnostic_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_unifiedroutingdiagnostic_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_unifiedroutingdiagnostic_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_unifiedroutingdiagnostic_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_unifiedroutingdiagnostic_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_unifiedroutingdiagnostic_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_unifiedroutingdiagnostic_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_unifiedroutingdiagnostics: WebMappingRetrieve<msdyn_unifiedroutingdiagnostic_Select,msdyn_unifiedroutingdiagnostic_Expand,msdyn_unifiedroutingdiagnostic_Filter,msdyn_unifiedroutingdiagnostic_Fixed,msdyn_unifiedroutingdiagnostic_Result,msdyn_unifiedroutingdiagnostic_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_unifiedroutingdiagnostics: WebMappingRelated<msdyn_unifiedroutingdiagnostic_RelatedOne,msdyn_unifiedroutingdiagnostic_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_unifiedroutingdiagnostics: WebMappingCUDA<msdyn_unifiedroutingdiagnostic_Create,msdyn_unifiedroutingdiagnostic_Update,msdyn_unifiedroutingdiagnostic_Select>;
}
