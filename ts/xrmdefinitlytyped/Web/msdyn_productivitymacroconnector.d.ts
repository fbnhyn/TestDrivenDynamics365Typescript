interface msdyn_productivitymacroconnector_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_brandcolor?: string | null;
  msdyn_callback?: string | null;
  msdyn_categorykey?: string | null;
  msdyn_categorylabel?: string | null;
  msdyn_description?: string | null;
  msdyn_displayname?: string | null;
  msdyn_icon?: string | null;
  msdyn_name?: string | null;
  msdyn_prefix?: string | null;
  msdyn_productivitymacroconnectorid?: string | null;
  msdyn_title?: string | null;
  msdyn_type?: string | null;
  msdyn_uniquename?: string | null;
  msdyn_webresourcename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_productivitymacroconnector_statecode | null;
  statuscode?: msdyn_productivitymacroconnector_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_productivitymacroconnector_Relationships {
  msdyn_msdyn_Prod_macroconnector_msdyn_macroactiontemplate_macroconnector?: msdyn_productivitymacroactiontemplate_Result[] | null;
  msdyn_productivitymacroconnector_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_productivitymacroconnector_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_productivitymacroconnector_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivitymacroconnector_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivitymacroconnector_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_productivitymacroconnector_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_productivitymacroconnector_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_productivitymacroconnector_SyncErrors?: SyncError_Result[] | null;
  msdyn_productivitymacroconnector_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_productivitymacroconnector extends msdyn_productivitymacroconnector_Base, msdyn_productivitymacroconnector_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_productivitymacroconnector_Create extends msdyn_productivitymacroconnector {
}
interface msdyn_productivitymacroconnector_Update extends msdyn_productivitymacroconnector {
}
interface msdyn_productivitymacroconnector_Select {
  componentidunique: WebAttribute<msdyn_productivitymacroconnector_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_productivitymacroconnector_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_productivitymacroconnector_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_productivitymacroconnector_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_productivitymacroconnector_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_productivitymacroconnector_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_productivitymacroconnector_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_productivitymacroconnector_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_productivitymacroconnector_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_productivitymacroconnector_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_productivitymacroconnector_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_brandcolor: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_brandcolor: string | null }, {  }>;
  msdyn_callback: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_callback: string | null }, {  }>;
  msdyn_categorykey: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_categorykey: string | null }, {  }>;
  msdyn_categorylabel: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_categorylabel: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_description: string | null }, {  }>;
  msdyn_displayname: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_displayname: string | null }, {  }>;
  msdyn_icon: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_icon: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_name: string | null }, {  }>;
  msdyn_prefix: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_prefix: string | null }, {  }>;
  msdyn_productivitymacroconnectorid: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_productivitymacroconnectorid: string | null }, {  }>;
  msdyn_title: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_title: string | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_type: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_uniquename: string | null }, {  }>;
  msdyn_webresourcename: WebAttribute<msdyn_productivitymacroconnector_Select, { msdyn_webresourcename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_productivitymacroconnector_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_productivitymacroconnector_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_productivitymacroconnector_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_productivitymacroconnector_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_productivitymacroconnector_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_productivitymacroconnector_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_productivitymacroconnector_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_productivitymacroconnector_Select, { statecode: msdyn_productivitymacroconnector_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_productivitymacroconnector_Select, { statuscode: msdyn_productivitymacroconnector_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_productivitymacroconnector_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_productivitymacroconnector_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_productivitymacroconnector_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_productivitymacroconnector_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_productivitymacroconnector_Filter {
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
  msdyn_brandcolor: string;
  msdyn_callback: string;
  msdyn_categorykey: string;
  msdyn_categorylabel: string;
  msdyn_description: string;
  msdyn_displayname: string;
  msdyn_icon: string;
  msdyn_name: string;
  msdyn_prefix: string;
  msdyn_productivitymacroconnectorid: XQW.Guid;
  msdyn_title: string;
  msdyn_type: string;
  msdyn_uniquename: string;
  msdyn_webresourcename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_productivitymacroconnector_statecode;
  statuscode: msdyn_productivitymacroconnector_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_productivitymacroconnector_Expand {
  createdby: WebExpand<msdyn_productivitymacroconnector_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_productivitymacroconnector_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_productivitymacroconnector_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_productivitymacroconnector_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_Prod_macroconnector_msdyn_macroactiontemplate_macroconnector: WebExpand<msdyn_productivitymacroconnector_Expand, msdyn_productivitymacroactiontemplate_Select, msdyn_productivitymacroactiontemplate_Filter, { msdyn_msdyn_Prod_macroconnector_msdyn_macroactiontemplate_macroconnector: msdyn_productivitymacroactiontemplate_Result[] }>;
  msdyn_productivitymacroconnector_AsyncOperations: WebExpand<msdyn_productivitymacroconnector_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_productivitymacroconnector_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_productivitymacroconnector_BulkDeleteFailures: WebExpand<msdyn_productivitymacroconnector_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_productivitymacroconnector_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_productivitymacroconnector_DuplicateBaseRecord: WebExpand<msdyn_productivitymacroconnector_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivitymacroconnector_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_productivitymacroconnector_DuplicateMatchingRecord: WebExpand<msdyn_productivitymacroconnector_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivitymacroconnector_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_productivitymacroconnector_MailboxTrackingFolders: WebExpand<msdyn_productivitymacroconnector_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_productivitymacroconnector_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_productivitymacroconnector_PrincipalObjectAttributeAccesses: WebExpand<msdyn_productivitymacroconnector_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_productivitymacroconnector_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_productivitymacroconnector_ProcessSession: WebExpand<msdyn_productivitymacroconnector_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_productivitymacroconnector_ProcessSession: ProcessSession_Result[] }>;
  msdyn_productivitymacroconnector_SyncErrors: WebExpand<msdyn_productivitymacroconnector_Expand, SyncError_Select, SyncError_Filter, { msdyn_productivitymacroconnector_SyncErrors: SyncError_Result[] }>;
  msdyn_productivitymacroconnector_UserEntityInstanceDatas: WebExpand<msdyn_productivitymacroconnector_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_productivitymacroconnector_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_productivitymacroconnector_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_productivitymacroconnector_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_productivitymacroconnector_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_productivitymacroconnector_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_productivitymacroconnector_FormattedResult {
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
interface msdyn_productivitymacroconnector_Result extends msdyn_productivitymacroconnector_Base, msdyn_productivitymacroconnector_Relationships {
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
interface msdyn_productivitymacroconnector_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_productivitymacroconnector_RelatedMany {
  msdyn_msdyn_Prod_macroconnector_msdyn_macroactiontemplate_macroconnector: WebMappingRetrieve<msdyn_productivitymacroactiontemplate_Select,msdyn_productivitymacroactiontemplate_Expand,msdyn_productivitymacroactiontemplate_Filter,msdyn_productivitymacroactiontemplate_Fixed,msdyn_productivitymacroactiontemplate_Result,msdyn_productivitymacroactiontemplate_FormattedResult>;
  msdyn_productivitymacroconnector_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_productivitymacroconnector_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_productivitymacroconnector_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivitymacroconnector_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivitymacroconnector_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_productivitymacroconnector_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_productivitymacroconnector_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_productivitymacroconnector_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_productivitymacroconnector_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_productivitymacroconnectors: WebMappingRetrieve<msdyn_productivitymacroconnector_Select,msdyn_productivitymacroconnector_Expand,msdyn_productivitymacroconnector_Filter,msdyn_productivitymacroconnector_Fixed,msdyn_productivitymacroconnector_Result,msdyn_productivitymacroconnector_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_productivitymacroconnectors: WebMappingRelated<msdyn_productivitymacroconnector_RelatedOne,msdyn_productivitymacroconnector_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_productivitymacroconnectors: WebMappingCUDA<msdyn_productivitymacroconnector_Create,msdyn_productivitymacroconnector_Update,msdyn_productivitymacroconnector_Select>;
}
