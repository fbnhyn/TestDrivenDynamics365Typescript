interface msdyn_productivityparameterdefinition_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_defaultvalue?: string | null;
  msdyn_description?: string | null;
  msdyn_displayname?: string | null;
  msdyn_jsonobjectstructure?: string | null;
  msdyn_name?: string | null;
  msdyn_parametertype?: string | null;
  msdyn_productivityparameterdefinitionid?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_productivityparameterdefinition_statecode | null;
  statuscode?: msdyn_productivityparameterdefinition_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_productivityparameterdefinition_Relationships {
  msdyn_msdyn_prod_actioninputparameter_msdyn_par?: msdyn_productivityactioninputparameter_Result[] | null;
  msdyn_msdyn_prod_actionoutputparameter_msdyn_pa?: msdyn_productivityactionoutputparameter_Result[] | null;
  msdyn_productivityparameterdefinition_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_productivityparameterdefinition_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_productivityparameterdefinition_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivityparameterdefinition_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivityparameterdefinition_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_productivityparameterdefinition_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_productivityparameterdefinition_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_productivityparameterdefinition_SyncErrors?: SyncError_Result[] | null;
  msdyn_productivityparameterdefinition_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_productivityparameterdefinition extends msdyn_productivityparameterdefinition_Base, msdyn_productivityparameterdefinition_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_productivityparameterdefinition_Create extends msdyn_productivityparameterdefinition {
}
interface msdyn_productivityparameterdefinition_Update extends msdyn_productivityparameterdefinition {
}
interface msdyn_productivityparameterdefinition_Select {
  componentidunique: WebAttribute<msdyn_productivityparameterdefinition_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_productivityparameterdefinition_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_productivityparameterdefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_productivityparameterdefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_productivityparameterdefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_productivityparameterdefinition_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_productivityparameterdefinition_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_productivityparameterdefinition_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_productivityparameterdefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_productivityparameterdefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_productivityparameterdefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_defaultvalue: WebAttribute<msdyn_productivityparameterdefinition_Select, { msdyn_defaultvalue: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_productivityparameterdefinition_Select, { msdyn_description: string | null }, {  }>;
  msdyn_displayname: WebAttribute<msdyn_productivityparameterdefinition_Select, { msdyn_displayname: string | null }, {  }>;
  msdyn_jsonobjectstructure: WebAttribute<msdyn_productivityparameterdefinition_Select, { msdyn_jsonobjectstructure: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_productivityparameterdefinition_Select, { msdyn_name: string | null }, {  }>;
  msdyn_parametertype: WebAttribute<msdyn_productivityparameterdefinition_Select, { msdyn_parametertype: string | null }, {  }>;
  msdyn_productivityparameterdefinitionid: WebAttribute<msdyn_productivityparameterdefinition_Select, { msdyn_productivityparameterdefinitionid: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_productivityparameterdefinition_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_productivityparameterdefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_productivityparameterdefinition_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_productivityparameterdefinition_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_productivityparameterdefinition_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_productivityparameterdefinition_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_productivityparameterdefinition_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_productivityparameterdefinition_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_productivityparameterdefinition_Select, { statecode: msdyn_productivityparameterdefinition_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_productivityparameterdefinition_Select, { statuscode: msdyn_productivityparameterdefinition_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_productivityparameterdefinition_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_productivityparameterdefinition_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_productivityparameterdefinition_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_productivityparameterdefinition_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_productivityparameterdefinition_Filter {
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
  msdyn_defaultvalue: string;
  msdyn_description: string;
  msdyn_displayname: string;
  msdyn_jsonobjectstructure: string;
  msdyn_name: string;
  msdyn_parametertype: string;
  msdyn_productivityparameterdefinitionid: XQW.Guid;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_productivityparameterdefinition_statecode;
  statuscode: msdyn_productivityparameterdefinition_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_productivityparameterdefinition_Expand {
  createdby: WebExpand<msdyn_productivityparameterdefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_productivityparameterdefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_productivityparameterdefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_productivityparameterdefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_prod_actioninputparameter_msdyn_par: WebExpand<msdyn_productivityparameterdefinition_Expand, msdyn_productivityactioninputparameter_Select, msdyn_productivityactioninputparameter_Filter, { msdyn_msdyn_prod_actioninputparameter_msdyn_par: msdyn_productivityactioninputparameter_Result[] }>;
  msdyn_msdyn_prod_actionoutputparameter_msdyn_pa: WebExpand<msdyn_productivityparameterdefinition_Expand, msdyn_productivityactionoutputparameter_Select, msdyn_productivityactionoutputparameter_Filter, { msdyn_msdyn_prod_actionoutputparameter_msdyn_pa: msdyn_productivityactionoutputparameter_Result[] }>;
  msdyn_productivityparameterdefinition_AsyncOperations: WebExpand<msdyn_productivityparameterdefinition_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_productivityparameterdefinition_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_productivityparameterdefinition_BulkDeleteFailures: WebExpand<msdyn_productivityparameterdefinition_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_productivityparameterdefinition_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_productivityparameterdefinition_DuplicateBaseRecord: WebExpand<msdyn_productivityparameterdefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivityparameterdefinition_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_productivityparameterdefinition_DuplicateMatchingRecord: WebExpand<msdyn_productivityparameterdefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivityparameterdefinition_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_productivityparameterdefinition_MailboxTrackingFolders: WebExpand<msdyn_productivityparameterdefinition_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_productivityparameterdefinition_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_productivityparameterdefinition_PrincipalObjectAttributeAccesses: WebExpand<msdyn_productivityparameterdefinition_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_productivityparameterdefinition_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_productivityparameterdefinition_ProcessSession: WebExpand<msdyn_productivityparameterdefinition_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_productivityparameterdefinition_ProcessSession: ProcessSession_Result[] }>;
  msdyn_productivityparameterdefinition_SyncErrors: WebExpand<msdyn_productivityparameterdefinition_Expand, SyncError_Select, SyncError_Filter, { msdyn_productivityparameterdefinition_SyncErrors: SyncError_Result[] }>;
  msdyn_productivityparameterdefinition_UserEntityInstanceDatas: WebExpand<msdyn_productivityparameterdefinition_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_productivityparameterdefinition_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_productivityparameterdefinition_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_productivityparameterdefinition_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_productivityparameterdefinition_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_productivityparameterdefinition_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_productivityparameterdefinition_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_productivityparameterdefinition_Result extends msdyn_productivityparameterdefinition_Base, msdyn_productivityparameterdefinition_Relationships {
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
interface msdyn_productivityparameterdefinition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_productivityparameterdefinition_RelatedMany {
  msdyn_msdyn_prod_actioninputparameter_msdyn_par: WebMappingRetrieve<msdyn_productivityactioninputparameter_Select,msdyn_productivityactioninputparameter_Expand,msdyn_productivityactioninputparameter_Filter,msdyn_productivityactioninputparameter_Fixed,msdyn_productivityactioninputparameter_Result,msdyn_productivityactioninputparameter_FormattedResult>;
  msdyn_msdyn_prod_actionoutputparameter_msdyn_pa: WebMappingRetrieve<msdyn_productivityactionoutputparameter_Select,msdyn_productivityactionoutputparameter_Expand,msdyn_productivityactionoutputparameter_Filter,msdyn_productivityactionoutputparameter_Fixed,msdyn_productivityactionoutputparameter_Result,msdyn_productivityactionoutputparameter_FormattedResult>;
  msdyn_productivityparameterdefinition_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_productivityparameterdefinition_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_productivityparameterdefinition_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivityparameterdefinition_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivityparameterdefinition_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_productivityparameterdefinition_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_productivityparameterdefinition_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_productivityparameterdefinition_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_productivityparameterdefinition_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_productivityparameterdefinitions: WebMappingRetrieve<msdyn_productivityparameterdefinition_Select,msdyn_productivityparameterdefinition_Expand,msdyn_productivityparameterdefinition_Filter,msdyn_productivityparameterdefinition_Fixed,msdyn_productivityparameterdefinition_Result,msdyn_productivityparameterdefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_productivityparameterdefinitions: WebMappingRelated<msdyn_productivityparameterdefinition_RelatedOne,msdyn_productivityparameterdefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_productivityparameterdefinitions: WebMappingCUDA<msdyn_productivityparameterdefinition_Create,msdyn_productivityparameterdefinition_Update,msdyn_productivityparameterdefinition_Select>;
}
