interface msdyn_effortpredictionresult_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_effortconfidencescore?: number | null;
  msdyn_effortpredictionresultid?: string | null;
  msdyn_name?: string | null;
  msdyn_predictedeffort?: number | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_effortpredictionresult_statecode | null;
  statuscode?: msdyn_effortpredictionresult_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_effortpredictionresult_Relationships {
  msdyn_effortpredictionresult_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_effortpredictionresult_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_effortpredictionresult_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_effortpredictionresult_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_effortpredictionresult_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_effortpredictionresult_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_effortpredictionresult_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_effortpredictionresult_SyncErrors?: SyncError_Result[] | null;
  msdyn_effortpredictionresult_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_effortpredictionresult_msdyn_ocliveworkitem_effortpredictionresult?: msdyn_ocliveworkitem_Result[] | null;
}
interface msdyn_effortpredictionresult extends msdyn_effortpredictionresult_Base, msdyn_effortpredictionresult_Relationships {
  msdyn_aimodelid_bind$msdyn_aimodels?: string | null;
  msdyn_liveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_effortpredictionresult_Create extends msdyn_effortpredictionresult {
}
interface msdyn_effortpredictionresult_Update extends msdyn_effortpredictionresult {
}
interface msdyn_effortpredictionresult_Select {
  componentidunique: WebAttribute<msdyn_effortpredictionresult_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_effortpredictionresult_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_effortpredictionresult_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_effortpredictionresult_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_effortpredictionresult_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_effortpredictionresult_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_effortpredictionresult_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_effortpredictionresult_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_effortpredictionresult_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_effortpredictionresult_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_effortpredictionresult_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aimodelid_guid: WebAttribute<msdyn_effortpredictionresult_Select, { msdyn_aimodelid_guid: string | null }, { msdyn_aimodelid_formatted?: string }>;
  msdyn_effortconfidencescore: WebAttribute<msdyn_effortpredictionresult_Select, { msdyn_effortconfidencescore: number | null }, {  }>;
  msdyn_effortpredictionresultid: WebAttribute<msdyn_effortpredictionresult_Select, { msdyn_effortpredictionresultid: string | null }, {  }>;
  msdyn_liveworkitemid_guid: WebAttribute<msdyn_effortpredictionresult_Select, { msdyn_liveworkitemid_guid: string | null }, { msdyn_liveworkitemid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_effortpredictionresult_Select, { msdyn_name: string | null }, {  }>;
  msdyn_predictedeffort: WebAttribute<msdyn_effortpredictionresult_Select, { msdyn_predictedeffort: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_effortpredictionresult_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_effortpredictionresult_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_effortpredictionresult_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_effortpredictionresult_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_effortpredictionresult_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_effortpredictionresult_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_effortpredictionresult_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_effortpredictionresult_Select, { statecode: msdyn_effortpredictionresult_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_effortpredictionresult_Select, { statuscode: msdyn_effortpredictionresult_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_effortpredictionresult_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_effortpredictionresult_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_effortpredictionresult_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_effortpredictionresult_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_effortpredictionresult_Filter {
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
  msdyn_aimodelid_guid: XQW.Guid;
  msdyn_effortconfidencescore: any;
  msdyn_effortpredictionresultid: XQW.Guid;
  msdyn_liveworkitemid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_predictedeffort: number;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_effortpredictionresult_statecode;
  statuscode: msdyn_effortpredictionresult_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_effortpredictionresult_Expand {
  createdby: WebExpand<msdyn_effortpredictionresult_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_effortpredictionresult_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_effortpredictionresult_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_effortpredictionresult_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_aimodelid: WebExpand<msdyn_effortpredictionresult_Expand, msdyn_AIModel_Select, msdyn_AIModel_Filter, { msdyn_aimodelid: msdyn_AIModel_Result }>;
  msdyn_effortpredictionresult_AsyncOperations: WebExpand<msdyn_effortpredictionresult_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_effortpredictionresult_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_effortpredictionresult_BulkDeleteFailures: WebExpand<msdyn_effortpredictionresult_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_effortpredictionresult_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_effortpredictionresult_DuplicateBaseRecord: WebExpand<msdyn_effortpredictionresult_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_effortpredictionresult_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_effortpredictionresult_DuplicateMatchingRecord: WebExpand<msdyn_effortpredictionresult_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_effortpredictionresult_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_effortpredictionresult_MailboxTrackingFolders: WebExpand<msdyn_effortpredictionresult_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_effortpredictionresult_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_effortpredictionresult_PrincipalObjectAttributeAccesses: WebExpand<msdyn_effortpredictionresult_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_effortpredictionresult_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_effortpredictionresult_ProcessSession: WebExpand<msdyn_effortpredictionresult_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_effortpredictionresult_ProcessSession: ProcessSession_Result[] }>;
  msdyn_effortpredictionresult_SyncErrors: WebExpand<msdyn_effortpredictionresult_Expand, SyncError_Select, SyncError_Filter, { msdyn_effortpredictionresult_SyncErrors: SyncError_Result[] }>;
  msdyn_effortpredictionresult_UserEntityInstanceDatas: WebExpand<msdyn_effortpredictionresult_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_effortpredictionresult_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_liveworkitemid: WebExpand<msdyn_effortpredictionresult_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_liveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_msdyn_effortpredictionresult_msdyn_ocliveworkitem_effortpredictionresult: WebExpand<msdyn_effortpredictionresult_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_msdyn_effortpredictionresult_msdyn_ocliveworkitem_effortpredictionresult: msdyn_ocliveworkitem_Result[] }>;
  ownerid: WebExpand<msdyn_effortpredictionresult_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_effortpredictionresult_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_effortpredictionresult_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_effortpredictionresult_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_effortpredictionresult_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aimodelid_formatted?: string;
  msdyn_liveworkitemid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_effortpredictionresult_Result extends msdyn_effortpredictionresult_Base, msdyn_effortpredictionresult_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_aimodelid_guid: string | null;
  msdyn_liveworkitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_effortpredictionresult_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_aimodelid: WebMappingRetrieve<msdyn_AIModel_Select,msdyn_AIModel_Expand,msdyn_AIModel_Filter,msdyn_AIModel_Fixed,msdyn_AIModel_Result,msdyn_AIModel_FormattedResult>;
  msdyn_liveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_effortpredictionresult_RelatedMany {
  msdyn_effortpredictionresult_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_effortpredictionresult_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_effortpredictionresult_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_effortpredictionresult_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_effortpredictionresult_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_effortpredictionresult_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_effortpredictionresult_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_effortpredictionresult_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_effortpredictionresult_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_effortpredictionresult_msdyn_ocliveworkitem_effortpredictionresult: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_effortpredictionresults: WebMappingRetrieve<msdyn_effortpredictionresult_Select,msdyn_effortpredictionresult_Expand,msdyn_effortpredictionresult_Filter,msdyn_effortpredictionresult_Fixed,msdyn_effortpredictionresult_Result,msdyn_effortpredictionresult_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_effortpredictionresults: WebMappingRelated<msdyn_effortpredictionresult_RelatedOne,msdyn_effortpredictionresult_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_effortpredictionresults: WebMappingCUDA<msdyn_effortpredictionresult_Create,msdyn_effortpredictionresult_Update,msdyn_effortpredictionresult_Select>;
}
