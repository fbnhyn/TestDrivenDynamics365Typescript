interface msdyn_slakpi_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_advancedpauseconfiguration?: boolean | null;
  msdyn_applicablefromdisplayname?: string | null;
  msdyn_applicablefromfield?: string | null;
  msdyn_description?: string | null;
  msdyn_entitydisplayname?: string | null;
  msdyn_entityname?: string | null;
  msdyn_kpifield?: string | null;
  msdyn_name?: string | null;
  msdyn_pauseconfigurationxml?: string | null;
  msdyn_slakpiid?: string | null;
  msdyn_workflowinfo?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_slakpi_statecode | null;
  statuscode?: msdyn_slakpi_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_slakpi_Relationships {
  msdyn_msdyn_slakpi_slaitem?: SLAItem_Result[] | null;
  msdyn_slakpi_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_slakpi_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_slakpi_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_slakpi_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_slakpi_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_slakpi_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_slakpi_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_slakpi_SyncErrors?: SyncError_Result[] | null;
  msdyn_slakpi_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_slakpi extends msdyn_slakpi_Base, msdyn_slakpi_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_slakpi_Create extends msdyn_slakpi {
}
interface msdyn_slakpi_Update extends msdyn_slakpi {
}
interface msdyn_slakpi_Select {
  componentidunique: WebAttribute<msdyn_slakpi_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_slakpi_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_slakpi_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_slakpi_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_slakpi_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_slakpi_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_slakpi_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_slakpi_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_slakpi_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_slakpi_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_slakpi_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_advancedpauseconfiguration: WebAttribute<msdyn_slakpi_Select, { msdyn_advancedpauseconfiguration: boolean | null }, {  }>;
  msdyn_applicablefromdisplayname: WebAttribute<msdyn_slakpi_Select, { msdyn_applicablefromdisplayname: string | null }, {  }>;
  msdyn_applicablefromfield: WebAttribute<msdyn_slakpi_Select, { msdyn_applicablefromfield: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_slakpi_Select, { msdyn_description: string | null }, {  }>;
  msdyn_entitydisplayname: WebAttribute<msdyn_slakpi_Select, { msdyn_entitydisplayname: string | null }, {  }>;
  msdyn_entityname: WebAttribute<msdyn_slakpi_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_kpifield: WebAttribute<msdyn_slakpi_Select, { msdyn_kpifield: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_slakpi_Select, { msdyn_name: string | null }, {  }>;
  msdyn_pauseconfigurationxml: WebAttribute<msdyn_slakpi_Select, { msdyn_pauseconfigurationxml: string | null }, {  }>;
  msdyn_slakpiid: WebAttribute<msdyn_slakpi_Select, { msdyn_slakpiid: string | null }, {  }>;
  msdyn_workflowinfo: WebAttribute<msdyn_slakpi_Select, { msdyn_workflowinfo: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_slakpi_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_slakpi_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_slakpi_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_slakpi_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_slakpi_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_slakpi_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_slakpi_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_slakpi_Select, { statecode: msdyn_slakpi_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_slakpi_Select, { statuscode: msdyn_slakpi_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_slakpi_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_slakpi_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_slakpi_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_slakpi_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_slakpi_Filter {
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
  msdyn_advancedpauseconfiguration: boolean;
  msdyn_applicablefromdisplayname: string;
  msdyn_applicablefromfield: string;
  msdyn_description: string;
  msdyn_entitydisplayname: string;
  msdyn_entityname: string;
  msdyn_kpifield: string;
  msdyn_name: string;
  msdyn_pauseconfigurationxml: string;
  msdyn_slakpiid: XQW.Guid;
  msdyn_workflowinfo: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_slakpi_statecode;
  statuscode: msdyn_slakpi_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_slakpi_Expand {
  createdby: WebExpand<msdyn_slakpi_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_slakpi_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_slakpi_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_slakpi_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_slakpi_slaitem: WebExpand<msdyn_slakpi_Expand, SLAItem_Select, SLAItem_Filter, { msdyn_msdyn_slakpi_slaitem: SLAItem_Result[] }>;
  msdyn_slakpi_AsyncOperations: WebExpand<msdyn_slakpi_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_slakpi_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_slakpi_BulkDeleteFailures: WebExpand<msdyn_slakpi_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_slakpi_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_slakpi_DuplicateBaseRecord: WebExpand<msdyn_slakpi_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_slakpi_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_slakpi_DuplicateMatchingRecord: WebExpand<msdyn_slakpi_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_slakpi_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_slakpi_MailboxTrackingFolders: WebExpand<msdyn_slakpi_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_slakpi_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_slakpi_PrincipalObjectAttributeAccesses: WebExpand<msdyn_slakpi_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_slakpi_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_slakpi_ProcessSession: WebExpand<msdyn_slakpi_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_slakpi_ProcessSession: ProcessSession_Result[] }>;
  msdyn_slakpi_SyncErrors: WebExpand<msdyn_slakpi_Expand, SyncError_Select, SyncError_Filter, { msdyn_slakpi_SyncErrors: SyncError_Result[] }>;
  msdyn_slakpi_UserEntityInstanceDatas: WebExpand<msdyn_slakpi_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_slakpi_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_slakpi_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_slakpi_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_slakpi_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_slakpi_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_slakpi_FormattedResult {
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
interface msdyn_slakpi_Result extends msdyn_slakpi_Base, msdyn_slakpi_Relationships {
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
interface msdyn_slakpi_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_slakpi_RelatedMany {
  msdyn_msdyn_slakpi_slaitem: WebMappingRetrieve<SLAItem_Select,SLAItem_Expand,SLAItem_Filter,SLAItem_Fixed,SLAItem_Result,SLAItem_FormattedResult>;
  msdyn_slakpi_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_slakpi_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_slakpi_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_slakpi_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_slakpi_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_slakpi_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_slakpi_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_slakpi_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_slakpi_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_slakpis: WebMappingRetrieve<msdyn_slakpi_Select,msdyn_slakpi_Expand,msdyn_slakpi_Filter,msdyn_slakpi_Fixed,msdyn_slakpi_Result,msdyn_slakpi_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_slakpis: WebMappingRelated<msdyn_slakpi_RelatedOne,msdyn_slakpi_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_slakpis: WebMappingCUDA<msdyn_slakpi_Create,msdyn_slakpi_Update,msdyn_slakpi_Select>;
}
