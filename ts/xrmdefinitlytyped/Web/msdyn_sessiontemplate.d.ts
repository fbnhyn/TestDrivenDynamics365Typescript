interface msdyn_sessiontemplate_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_enablebuildexpression?: boolean | null;
  msdyn_entity?: string | null;
  msdyn_expressiondata?: string | null;
  msdyn_name?: string | null;
  msdyn_panelstate?: msdyn_panelstateoptions | null;
  msdyn_sessiontemplateid?: string | null;
  msdyn_sessiontype?: msdyn_sessiontypeoptions | null;
  msdyn_title?: string | null;
  msdyn_type?: boolean | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_sessiontemplate_statecode | null;
  statuscode?: msdyn_sessiontemplate_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_sessiontemplate_Relationships {
  msdyn_appconfiguration_sessiontemplate?: msdyn_appconfiguration_Result[] | null;
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat?: msdyn_productivityagentscript_Result[] | null;
  msdyn_sessiontemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_sessiontemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_sessiontemplate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_sessiontemplate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_sessiontemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_sessiontemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_sessiontemplate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_sessiontemplate_SyncErrors?: SyncError_Result[] | null;
  msdyn_sessiontemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_sessiontemplate_applicationtab?: msdyn_applicationtabtemplate_Result[] | null;
}
interface msdyn_sessiontemplate extends msdyn_sessiontemplate_Base, msdyn_sessiontemplate_Relationships {
  msdyn_anchortab_bind$msdyn_applicationtabtemplates?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_sessiontemplate_Create extends msdyn_sessiontemplate {
}
interface msdyn_sessiontemplate_Update extends msdyn_sessiontemplate {
}
interface msdyn_sessiontemplate_Select {
  componentidunique: WebAttribute<msdyn_sessiontemplate_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_sessiontemplate_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_sessiontemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_sessiontemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_sessiontemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_sessiontemplate_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_sessiontemplate_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_sessiontemplate_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_sessiontemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_sessiontemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_sessiontemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_anchortab_guid: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_anchortab_guid: string | null }, { msdyn_anchortab_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_description: string | null }, {  }>;
  msdyn_enablebuildexpression: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_enablebuildexpression: boolean | null }, {  }>;
  msdyn_entity: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_entity: string | null }, {  }>;
  msdyn_expressiondata: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_expressiondata: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_panelstate: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_panelstate: msdyn_panelstateoptions | null }, { msdyn_panelstate_formatted?: string }>;
  msdyn_sessiontemplateid: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_sessiontemplateid: string | null }, {  }>;
  msdyn_sessiontype: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_sessiontype: msdyn_sessiontypeoptions | null }, { msdyn_sessiontype_formatted?: string }>;
  msdyn_title: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_title: string | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_type: boolean | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_sessiontemplate_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_sessiontemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_sessiontemplate_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_sessiontemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_sessiontemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_sessiontemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_sessiontemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_sessiontemplate_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_sessiontemplate_Select, { statecode: msdyn_sessiontemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_sessiontemplate_Select, { statuscode: msdyn_sessiontemplate_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_sessiontemplate_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_sessiontemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_sessiontemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_sessiontemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_sessiontemplate_Filter {
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
  msdyn_anchortab_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_enablebuildexpression: boolean;
  msdyn_entity: string;
  msdyn_expressiondata: string;
  msdyn_name: string;
  msdyn_panelstate: msdyn_panelstateoptions;
  msdyn_sessiontemplateid: XQW.Guid;
  msdyn_sessiontype: msdyn_sessiontypeoptions;
  msdyn_title: string;
  msdyn_type: boolean;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_sessiontemplate_statecode;
  statuscode: msdyn_sessiontemplate_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_sessiontemplate_Expand {
  createdby: WebExpand<msdyn_sessiontemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_sessiontemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_sessiontemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_sessiontemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_anchortab: WebExpand<msdyn_sessiontemplate_Expand, msdyn_applicationtabtemplate_Select, msdyn_applicationtabtemplate_Filter, { msdyn_anchortab: msdyn_applicationtabtemplate_Result }>;
  msdyn_appconfiguration_sessiontemplate: WebExpand<msdyn_sessiontemplate_Expand, msdyn_appconfiguration_Select, msdyn_appconfiguration_Filter, { msdyn_appconfiguration_sessiontemplate: msdyn_appconfiguration_Result[] }>;
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat: WebExpand<msdyn_sessiontemplate_Expand, msdyn_productivityagentscript_Select, msdyn_productivityagentscript_Filter, { msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat: msdyn_productivityagentscript_Result[] }>;
  msdyn_sessiontemplate_AsyncOperations: WebExpand<msdyn_sessiontemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_sessiontemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_sessiontemplate_BulkDeleteFailures: WebExpand<msdyn_sessiontemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_sessiontemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_sessiontemplate_DuplicateBaseRecord: WebExpand<msdyn_sessiontemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sessiontemplate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_sessiontemplate_DuplicateMatchingRecord: WebExpand<msdyn_sessiontemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sessiontemplate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_sessiontemplate_MailboxTrackingFolders: WebExpand<msdyn_sessiontemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_sessiontemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_sessiontemplate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_sessiontemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_sessiontemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_sessiontemplate_ProcessSession: WebExpand<msdyn_sessiontemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_sessiontemplate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_sessiontemplate_SyncErrors: WebExpand<msdyn_sessiontemplate_Expand, SyncError_Select, SyncError_Filter, { msdyn_sessiontemplate_SyncErrors: SyncError_Result[] }>;
  msdyn_sessiontemplate_UserEntityInstanceDatas: WebExpand<msdyn_sessiontemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_sessiontemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_sessiontemplate_applicationtab: WebExpand<msdyn_sessiontemplate_Expand, msdyn_applicationtabtemplate_Select, msdyn_applicationtabtemplate_Filter, { msdyn_sessiontemplate_applicationtab: msdyn_applicationtabtemplate_Result[] }>;
  ownerid: WebExpand<msdyn_sessiontemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_sessiontemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_sessiontemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_sessiontemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_sessiontemplate_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_anchortab_formatted?: string;
  msdyn_panelstate_formatted?: string;
  msdyn_sessiontype_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_sessiontemplate_Result extends msdyn_sessiontemplate_Base, msdyn_sessiontemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_anchortab_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_sessiontemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_anchortab: WebMappingRetrieve<msdyn_applicationtabtemplate_Select,msdyn_applicationtabtemplate_Expand,msdyn_applicationtabtemplate_Filter,msdyn_applicationtabtemplate_Fixed,msdyn_applicationtabtemplate_Result,msdyn_applicationtabtemplate_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_sessiontemplate_RelatedMany {
  msdyn_appconfiguration_sessiontemplate: WebMappingRetrieve<msdyn_appconfiguration_Select,msdyn_appconfiguration_Expand,msdyn_appconfiguration_Filter,msdyn_appconfiguration_Fixed,msdyn_appconfiguration_Result,msdyn_appconfiguration_FormattedResult>;
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat: WebMappingRetrieve<msdyn_productivityagentscript_Select,msdyn_productivityagentscript_Expand,msdyn_productivityagentscript_Filter,msdyn_productivityagentscript_Fixed,msdyn_productivityagentscript_Result,msdyn_productivityagentscript_FormattedResult>;
  msdyn_sessiontemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_sessiontemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_sessiontemplate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sessiontemplate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sessiontemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_sessiontemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_sessiontemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_sessiontemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_sessiontemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_sessiontemplate_applicationtab: WebMappingRetrieve<msdyn_applicationtabtemplate_Select,msdyn_applicationtabtemplate_Expand,msdyn_applicationtabtemplate_Filter,msdyn_applicationtabtemplate_Fixed,msdyn_applicationtabtemplate_Result,msdyn_applicationtabtemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sessiontemplates: WebMappingRetrieve<msdyn_sessiontemplate_Select,msdyn_sessiontemplate_Expand,msdyn_sessiontemplate_Filter,msdyn_sessiontemplate_Fixed,msdyn_sessiontemplate_Result,msdyn_sessiontemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sessiontemplates: WebMappingRelated<msdyn_sessiontemplate_RelatedOne,msdyn_sessiontemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sessiontemplates: WebMappingCUDA<msdyn_sessiontemplate_Create,msdyn_sessiontemplate_Update,msdyn_sessiontemplate_Select>;
}
