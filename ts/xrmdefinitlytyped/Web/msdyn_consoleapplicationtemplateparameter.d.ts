interface msdyn_consoleapplicationtemplateparameter_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_consoleapplicationtemplateparameterid?: string | null;
  msdyn_isruntime?: boolean | null;
  msdyn_name?: string | null;
  msdyn_parametername?: string | null;
  msdyn_runtimetype?: msdyn_consoleapplicationparameterruntimetype | null;
  msdyn_value?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_consoleapplicationtemplateparameter_statecode | null;
  statuscode?: msdyn_consoleapplicationtemplateparameter_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_consoleapplicationtemplateparameter_Relationships {
  msdyn_consoleapplicationtemplateparameter_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_consoleapplicationtemplateparameter_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_consoleapplicationtemplateparameter_SyncErrors?: SyncError_Result[] | null;
  msdyn_consoleapplicationtemplateparameter_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_consoleapplicationtemplate_msdyn_co?: msdyn_consoleapplicationtemplate_Result[] | null;
}
interface msdyn_consoleapplicationtemplateparameter extends msdyn_consoleapplicationtemplateparameter_Base, msdyn_consoleapplicationtemplateparameter_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_consoleapplicationtemplateparameter_Create extends msdyn_consoleapplicationtemplateparameter {
}
interface msdyn_consoleapplicationtemplateparameter_Update extends msdyn_consoleapplicationtemplateparameter {
}
interface msdyn_consoleapplicationtemplateparameter_Select {
  createdby_guid: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_consoleapplicationtemplateparameterid: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { msdyn_consoleapplicationtemplateparameterid: string | null }, {  }>;
  msdyn_isruntime: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { msdyn_isruntime: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { msdyn_name: string | null }, {  }>;
  msdyn_parametername: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { msdyn_parametername: string | null }, {  }>;
  msdyn_runtimetype: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { msdyn_runtimetype: msdyn_consoleapplicationparameterruntimetype | null }, { msdyn_runtimetype_formatted?: string }>;
  msdyn_value: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { msdyn_value: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { statecode: msdyn_consoleapplicationtemplateparameter_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { statuscode: msdyn_consoleapplicationtemplateparameter_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_consoleapplicationtemplateparameter_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_consoleapplicationtemplateparameter_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_consoleapplicationtemplateparameterid: XQW.Guid;
  msdyn_isruntime: boolean;
  msdyn_name: string;
  msdyn_parametername: string;
  msdyn_runtimetype: msdyn_consoleapplicationparameterruntimetype;
  msdyn_value: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_consoleapplicationtemplateparameter_statecode;
  statuscode: msdyn_consoleapplicationtemplateparameter_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_consoleapplicationtemplateparameter_Expand {
  createdby: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_consoleapplicationtemplateparameter_AsyncOperations: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_consoleapplicationtemplateparameter_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_consoleapplicationtemplateparameter_ProcessSession: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_consoleapplicationtemplateparameter_ProcessSession: ProcessSession_Result[] }>;
  msdyn_consoleapplicationtemplateparameter_SyncErrors: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, SyncError_Select, SyncError_Filter, { msdyn_consoleapplicationtemplateparameter_SyncErrors: SyncError_Result[] }>;
  msdyn_consoleapplicationtemplateparameter_UserEntityInstanceDatas: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_consoleapplicationtemplateparameter_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_consoleapplicationtemplate_msdyn_co: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, msdyn_consoleapplicationtemplate_Select, msdyn_consoleapplicationtemplate_Filter, { msdyn_msdyn_consoleapplicationtemplate_msdyn_co: msdyn_consoleapplicationtemplate_Result[] }>;
  ownerid: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_consoleapplicationtemplateparameter_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_consoleapplicationtemplateparameter_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_runtimetype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_consoleapplicationtemplateparameter_Result extends msdyn_consoleapplicationtemplateparameter_Base, msdyn_consoleapplicationtemplateparameter_Relationships {
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
interface msdyn_consoleapplicationtemplateparameter_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_consoleapplicationtemplateparameter_RelatedMany {
  msdyn_consoleapplicationtemplateparameter_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_consoleapplicationtemplateparameter_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_consoleapplicationtemplateparameter_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationtemplateparameter_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_consoleapplicationtemplateparameter_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_consoleapplicationtemplateparameter_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_consoleapplicationtemplateparameter_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_consoleapplicationtemplateparameter_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_consoleapplicationtemplateparameter_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_consoleapplicationtemplate_msdyn_co: WebMappingRetrieve<msdyn_consoleapplicationtemplate_Select,msdyn_consoleapplicationtemplate_Expand,msdyn_consoleapplicationtemplate_Filter,msdyn_consoleapplicationtemplate_Fixed,msdyn_consoleapplicationtemplate_Result,msdyn_consoleapplicationtemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_consoleapplicationtemplateparameters: WebMappingRetrieve<msdyn_consoleapplicationtemplateparameter_Select,msdyn_consoleapplicationtemplateparameter_Expand,msdyn_consoleapplicationtemplateparameter_Filter,msdyn_consoleapplicationtemplateparameter_Fixed,msdyn_consoleapplicationtemplateparameter_Result,msdyn_consoleapplicationtemplateparameter_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_consoleapplicationtemplateparameters: WebMappingRelated<msdyn_consoleapplicationtemplateparameter_RelatedOne,msdyn_consoleapplicationtemplateparameter_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_consoleapplicationtemplateparameters: WebMappingCUDA<msdyn_consoleapplicationtemplateparameter_Create,msdyn_consoleapplicationtemplateparameter_Update,msdyn_consoleapplicationtemplateparameter_Select>;
}
