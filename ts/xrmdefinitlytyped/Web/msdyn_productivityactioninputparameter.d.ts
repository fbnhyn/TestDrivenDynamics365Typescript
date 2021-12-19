interface msdyn_productivityactioninputparameter_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_parametertype?: boolean | null;
  msdyn_productivityactioninputparameterid?: string | null;
  msdyn_uniquename?: string | null;
  msdyn_visibility?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_productivityactioninputparameter_statecode | null;
  statuscode?: msdyn_productivityactioninputparameter_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_productivityactioninputparameter_Relationships {
  msdyn_msdyn_prod_actioninputparameter_msdyn_par?: msdyn_productivityparameterdefinition_Result[] | null;
  msdyn_productivityactioninputparameter_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_productivityactioninputparameter_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_productivityactioninputparameter_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivityactioninputparameter_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivityactioninputparameter_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_productivityactioninputparameter_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_productivityactioninputparameter_SyncErrors?: SyncError_Result[] | null;
  msdyn_productivityactioninputparameter_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_productivityactioninputparameter extends msdyn_productivityactioninputparameter_Base, msdyn_productivityactioninputparameter_Relationships {
  msdyn_actiontemplateinputparameterid_bind$msdyn_productivitymacroactiontemplates?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_productivityactioninputparameter_Create extends msdyn_productivityactioninputparameter {
}
interface msdyn_productivityactioninputparameter_Update extends msdyn_productivityactioninputparameter {
}
interface msdyn_productivityactioninputparameter_Select {
  componentidunique: WebAttribute<msdyn_productivityactioninputparameter_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_productivityactioninputparameter_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_productivityactioninputparameter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_productivityactioninputparameter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_productivityactioninputparameter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_productivityactioninputparameter_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_productivityactioninputparameter_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_productivityactioninputparameter_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_productivityactioninputparameter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_productivityactioninputparameter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_productivityactioninputparameter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actiontemplateinputparameterid_guid: WebAttribute<msdyn_productivityactioninputparameter_Select, { msdyn_actiontemplateinputparameterid_guid: string | null }, { msdyn_actiontemplateinputparameterid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_productivityactioninputparameter_Select, { msdyn_name: string | null }, {  }>;
  msdyn_parametertype: WebAttribute<msdyn_productivityactioninputparameter_Select, { msdyn_parametertype: boolean | null }, {  }>;
  msdyn_productivityactioninputparameterid: WebAttribute<msdyn_productivityactioninputparameter_Select, { msdyn_productivityactioninputparameterid: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_productivityactioninputparameter_Select, { msdyn_uniquename: string | null }, {  }>;
  msdyn_visibility: WebAttribute<msdyn_productivityactioninputparameter_Select, { msdyn_visibility: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_productivityactioninputparameter_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_productivityactioninputparameter_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_productivityactioninputparameter_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_productivityactioninputparameter_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_productivityactioninputparameter_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_productivityactioninputparameter_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_productivityactioninputparameter_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_productivityactioninputparameter_Select, { statecode: msdyn_productivityactioninputparameter_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_productivityactioninputparameter_Select, { statuscode: msdyn_productivityactioninputparameter_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_productivityactioninputparameter_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_productivityactioninputparameter_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_productivityactioninputparameter_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_productivityactioninputparameter_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_productivityactioninputparameter_Filter {
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
  msdyn_actiontemplateinputparameterid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_parametertype: boolean;
  msdyn_productivityactioninputparameterid: XQW.Guid;
  msdyn_uniquename: string;
  msdyn_visibility: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_productivityactioninputparameter_statecode;
  statuscode: msdyn_productivityactioninputparameter_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_productivityactioninputparameter_Expand {
  createdby: WebExpand<msdyn_productivityactioninputparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_productivityactioninputparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_productivityactioninputparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_productivityactioninputparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_actiontemplateinputparameterid: WebExpand<msdyn_productivityactioninputparameter_Expand, msdyn_productivitymacroactiontemplate_Select, msdyn_productivitymacroactiontemplate_Filter, { msdyn_actiontemplateinputparameterid: msdyn_productivitymacroactiontemplate_Result }>;
  msdyn_msdyn_prod_actioninputparameter_msdyn_par: WebExpand<msdyn_productivityactioninputparameter_Expand, msdyn_productivityparameterdefinition_Select, msdyn_productivityparameterdefinition_Filter, { msdyn_msdyn_prod_actioninputparameter_msdyn_par: msdyn_productivityparameterdefinition_Result[] }>;
  msdyn_productivityactioninputparameter_AsyncOperations: WebExpand<msdyn_productivityactioninputparameter_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_productivityactioninputparameter_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_productivityactioninputparameter_BulkDeleteFailures: WebExpand<msdyn_productivityactioninputparameter_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_productivityactioninputparameter_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_productivityactioninputparameter_DuplicateBaseRecord: WebExpand<msdyn_productivityactioninputparameter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivityactioninputparameter_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_productivityactioninputparameter_DuplicateMatchingRecord: WebExpand<msdyn_productivityactioninputparameter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivityactioninputparameter_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_productivityactioninputparameter_MailboxTrackingFolders: WebExpand<msdyn_productivityactioninputparameter_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_productivityactioninputparameter_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses: WebExpand<msdyn_productivityactioninputparameter_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_productivityactioninputparameter_ProcessSession: WebExpand<msdyn_productivityactioninputparameter_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_productivityactioninputparameter_ProcessSession: ProcessSession_Result[] }>;
  msdyn_productivityactioninputparameter_SyncErrors: WebExpand<msdyn_productivityactioninputparameter_Expand, SyncError_Select, SyncError_Filter, { msdyn_productivityactioninputparameter_SyncErrors: SyncError_Result[] }>;
  msdyn_productivityactioninputparameter_UserEntityInstanceDatas: WebExpand<msdyn_productivityactioninputparameter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_productivityactioninputparameter_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_productivityactioninputparameter_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_productivityactioninputparameter_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_productivityactioninputparameter_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_productivityactioninputparameter_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_productivityactioninputparameter_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_actiontemplateinputparameterid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_productivityactioninputparameter_Result extends msdyn_productivityactioninputparameter_Base, msdyn_productivityactioninputparameter_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_actiontemplateinputparameterid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_productivityactioninputparameter_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_actiontemplateinputparameterid: WebMappingRetrieve<msdyn_productivitymacroactiontemplate_Select,msdyn_productivitymacroactiontemplate_Expand,msdyn_productivitymacroactiontemplate_Filter,msdyn_productivitymacroactiontemplate_Fixed,msdyn_productivitymacroactiontemplate_Result,msdyn_productivitymacroactiontemplate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_productivityactioninputparameter_RelatedMany {
  msdyn_msdyn_prod_actioninputparameter_msdyn_par: WebMappingRetrieve<msdyn_productivityparameterdefinition_Select,msdyn_productivityparameterdefinition_Expand,msdyn_productivityparameterdefinition_Filter,msdyn_productivityparameterdefinition_Fixed,msdyn_productivityparameterdefinition_Result,msdyn_productivityparameterdefinition_FormattedResult>;
  msdyn_productivityactioninputparameter_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_productivityactioninputparameter_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_productivityactioninputparameter_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivityactioninputparameter_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivityactioninputparameter_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_productivityactioninputparameter_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_productivityactioninputparameter_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_productivityactioninputparameter_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_productivityactioninputparameter_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_productivityactioninputparameters: WebMappingRetrieve<msdyn_productivityactioninputparameter_Select,msdyn_productivityactioninputparameter_Expand,msdyn_productivityactioninputparameter_Filter,msdyn_productivityactioninputparameter_Fixed,msdyn_productivityactioninputparameter_Result,msdyn_productivityactioninputparameter_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_productivityactioninputparameters: WebMappingRelated<msdyn_productivityactioninputparameter_RelatedOne,msdyn_productivityactioninputparameter_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_productivityactioninputparameters: WebMappingCUDA<msdyn_productivityactioninputparameter_Create,msdyn_productivityactioninputparameter_Update,msdyn_productivityactioninputparameter_Select>;
}
