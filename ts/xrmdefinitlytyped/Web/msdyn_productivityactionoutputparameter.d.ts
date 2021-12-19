interface msdyn_productivityactionoutputparameter_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_productivityactionoutputparameterid?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_productivityactionoutputparameter_statecode | null;
  statuscode?: msdyn_productivityactionoutputparameter_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_productivityactionoutputparameter_Relationships {
  msdyn_msdyn_prod_actionoutputparameter_msdyn_pa?: msdyn_productivityparameterdefinition_Result[] | null;
  msdyn_productivityactionoutputparameter_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_productivityactionoutputparameter_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_productivityactionoutputparameter_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivityactionoutputparameter_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivityactionoutputparameter_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_productivityactionoutputparameter_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_productivityactionoutputparameter_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_productivityactionoutputparameter_SyncErrors?: SyncError_Result[] | null;
  msdyn_productivityactionoutputparameter_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_productivityactionoutputparameter extends msdyn_productivityactionoutputparameter_Base, msdyn_productivityactionoutputparameter_Relationships {
  msdyn_actiontemplateoutputparameterid_bind$msdyn_productivitymacroactiontemplates?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_productivityactionoutputparameter_Create extends msdyn_productivityactionoutputparameter {
}
interface msdyn_productivityactionoutputparameter_Update extends msdyn_productivityactionoutputparameter {
}
interface msdyn_productivityactionoutputparameter_Select {
  componentidunique: WebAttribute<msdyn_productivityactionoutputparameter_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_productivityactionoutputparameter_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_productivityactionoutputparameter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_productivityactionoutputparameter_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_productivityactionoutputparameter_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_productivityactionoutputparameter_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_productivityactionoutputparameter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actiontemplateoutputparameterid_guid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { msdyn_actiontemplateoutputparameterid_guid: string | null }, { msdyn_actiontemplateoutputparameterid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_productivityactionoutputparameter_Select, { msdyn_name: string | null }, {  }>;
  msdyn_productivityactionoutputparameterid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { msdyn_productivityactionoutputparameterid: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_productivityactionoutputparameter_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_productivityactionoutputparameter_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_productivityactionoutputparameter_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_productivityactionoutputparameter_Select, { statecode: msdyn_productivityactionoutputparameter_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_productivityactionoutputparameter_Select, { statuscode: msdyn_productivityactionoutputparameter_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_productivityactionoutputparameter_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_productivityactionoutputparameter_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_productivityactionoutputparameter_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_productivityactionoutputparameter_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_productivityactionoutputparameter_Filter {
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
  msdyn_actiontemplateoutputparameterid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_productivityactionoutputparameterid: XQW.Guid;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_productivityactionoutputparameter_statecode;
  statuscode: msdyn_productivityactionoutputparameter_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_productivityactionoutputparameter_Expand {
  createdby: WebExpand<msdyn_productivityactionoutputparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_productivityactionoutputparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_productivityactionoutputparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_productivityactionoutputparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_actiontemplateoutputparameterid: WebExpand<msdyn_productivityactionoutputparameter_Expand, msdyn_productivitymacroactiontemplate_Select, msdyn_productivitymacroactiontemplate_Filter, { msdyn_actiontemplateoutputparameterid: msdyn_productivitymacroactiontemplate_Result }>;
  msdyn_msdyn_prod_actionoutputparameter_msdyn_pa: WebExpand<msdyn_productivityactionoutputparameter_Expand, msdyn_productivityparameterdefinition_Select, msdyn_productivityparameterdefinition_Filter, { msdyn_msdyn_prod_actionoutputparameter_msdyn_pa: msdyn_productivityparameterdefinition_Result[] }>;
  msdyn_productivityactionoutputparameter_AsyncOperations: WebExpand<msdyn_productivityactionoutputparameter_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_productivityactionoutputparameter_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_productivityactionoutputparameter_BulkDeleteFailures: WebExpand<msdyn_productivityactionoutputparameter_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_productivityactionoutputparameter_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_productivityactionoutputparameter_DuplicateBaseRecord: WebExpand<msdyn_productivityactionoutputparameter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivityactionoutputparameter_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_productivityactionoutputparameter_DuplicateMatchingRecord: WebExpand<msdyn_productivityactionoutputparameter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivityactionoutputparameter_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_productivityactionoutputparameter_MailboxTrackingFolders: WebExpand<msdyn_productivityactionoutputparameter_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_productivityactionoutputparameter_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_productivityactionoutputparameter_PrincipalObjectAttributeAccesses: WebExpand<msdyn_productivityactionoutputparameter_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_productivityactionoutputparameter_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_productivityactionoutputparameter_ProcessSession: WebExpand<msdyn_productivityactionoutputparameter_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_productivityactionoutputparameter_ProcessSession: ProcessSession_Result[] }>;
  msdyn_productivityactionoutputparameter_SyncErrors: WebExpand<msdyn_productivityactionoutputparameter_Expand, SyncError_Select, SyncError_Filter, { msdyn_productivityactionoutputparameter_SyncErrors: SyncError_Result[] }>;
  msdyn_productivityactionoutputparameter_UserEntityInstanceDatas: WebExpand<msdyn_productivityactionoutputparameter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_productivityactionoutputparameter_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_productivityactionoutputparameter_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_productivityactionoutputparameter_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_productivityactionoutputparameter_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_productivityactionoutputparameter_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_productivityactionoutputparameter_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_actiontemplateoutputparameterid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_productivityactionoutputparameter_Result extends msdyn_productivityactionoutputparameter_Base, msdyn_productivityactionoutputparameter_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_actiontemplateoutputparameterid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_productivityactionoutputparameter_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_actiontemplateoutputparameterid: WebMappingRetrieve<msdyn_productivitymacroactiontemplate_Select,msdyn_productivitymacroactiontemplate_Expand,msdyn_productivitymacroactiontemplate_Filter,msdyn_productivitymacroactiontemplate_Fixed,msdyn_productivitymacroactiontemplate_Result,msdyn_productivitymacroactiontemplate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_productivityactionoutputparameter_RelatedMany {
  msdyn_msdyn_prod_actionoutputparameter_msdyn_pa: WebMappingRetrieve<msdyn_productivityparameterdefinition_Select,msdyn_productivityparameterdefinition_Expand,msdyn_productivityparameterdefinition_Filter,msdyn_productivityparameterdefinition_Fixed,msdyn_productivityparameterdefinition_Result,msdyn_productivityparameterdefinition_FormattedResult>;
  msdyn_productivityactionoutputparameter_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_productivityactionoutputparameter_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_productivityactionoutputparameter_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivityactionoutputparameter_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivityactionoutputparameter_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_productivityactionoutputparameter_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_productivityactionoutputparameter_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_productivityactionoutputparameter_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_productivityactionoutputparameter_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_productivityactionoutputparameters: WebMappingRetrieve<msdyn_productivityactionoutputparameter_Select,msdyn_productivityactionoutputparameter_Expand,msdyn_productivityactionoutputparameter_Filter,msdyn_productivityactionoutputparameter_Fixed,msdyn_productivityactionoutputparameter_Result,msdyn_productivityactionoutputparameter_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_productivityactionoutputparameters: WebMappingRelated<msdyn_productivityactionoutputparameter_RelatedOne,msdyn_productivityactionoutputparameter_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_productivityactionoutputparameters: WebMappingCUDA<msdyn_productivityactionoutputparameter_Create,msdyn_productivityactionoutputparameter_Update,msdyn_productivityactionoutputparameter_Select>;
}
