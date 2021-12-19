interface msdyn_AITemplate_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_aitemplateid?: string | null;
  msdyn_aitemplateidunique?: string | null;
  msdyn_databinding?: string | null;
  msdyn_defaultrunschedulingoptions?: string | null;
  msdyn_istrainable?: boolean | null;
  msdyn_resourceinfo?: string | null;
  msdyn_runconfigschema?: string | null;
  msdyn_rundataspecification?: string | null;
  msdyn_templateversion?: number | null;
  msdyn_trainingconfigschema?: string | null;
  msdyn_trainingdataspecification?: string | null;
  msdyn_uniquename?: string | null;
  msdyn_uxconfiguration?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_aitemplate_statecode | null;
  statuscode?: msdyn_aitemplate_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_AITemplate_Relationships {
  msdyn_aitemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_aitemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_aitemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_aitemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_aitemplate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_aitemplate_SyncErrors?: SyncError_Result[] | null;
  msdyn_aitemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_aitemplate_msdyn_aimodel?: msdyn_AIModel_Result[] | null;
}
interface msdyn_AITemplate extends msdyn_AITemplate_Base, msdyn_AITemplate_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_AITemplate_Create extends msdyn_AITemplate {
}
interface msdyn_AITemplate_Update extends msdyn_AITemplate {
}
interface msdyn_AITemplate_Select {
  componentstate: WebAttribute<msdyn_AITemplate_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_AITemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_AITemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_AITemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_AITemplate_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<msdyn_AITemplate_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_AITemplate_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_AITemplate_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_AITemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_AITemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_AITemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_aitemplateid: WebAttribute<msdyn_AITemplate_Select, { msdyn_aitemplateid: string | null }, {  }>;
  msdyn_aitemplateidunique: WebAttribute<msdyn_AITemplate_Select, { msdyn_aitemplateidunique: string | null }, {  }>;
  msdyn_databinding: WebAttribute<msdyn_AITemplate_Select, { msdyn_databinding: string | null }, {  }>;
  msdyn_defaultrunschedulingoptions: WebAttribute<msdyn_AITemplate_Select, { msdyn_defaultrunschedulingoptions: string | null }, {  }>;
  msdyn_istrainable: WebAttribute<msdyn_AITemplate_Select, { msdyn_istrainable: boolean | null }, {  }>;
  msdyn_resourceinfo: WebAttribute<msdyn_AITemplate_Select, { msdyn_resourceinfo: string | null }, {  }>;
  msdyn_runconfigschema: WebAttribute<msdyn_AITemplate_Select, { msdyn_runconfigschema: string | null }, {  }>;
  msdyn_rundataspecification: WebAttribute<msdyn_AITemplate_Select, { msdyn_rundataspecification: string | null }, {  }>;
  msdyn_templateversion: WebAttribute<msdyn_AITemplate_Select, { msdyn_templateversion: number | null }, {  }>;
  msdyn_trainingconfigschema: WebAttribute<msdyn_AITemplate_Select, { msdyn_trainingconfigschema: string | null }, {  }>;
  msdyn_trainingdataspecification: WebAttribute<msdyn_AITemplate_Select, { msdyn_trainingdataspecification: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_AITemplate_Select, { msdyn_uniquename: string | null }, {  }>;
  msdyn_uxconfiguration: WebAttribute<msdyn_AITemplate_Select, { msdyn_uxconfiguration: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_AITemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_AITemplate_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_AITemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_AITemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_AITemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_AITemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_AITemplate_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_AITemplate_Select, { statecode: msdyn_aitemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_AITemplate_Select, { statuscode: msdyn_aitemplate_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_AITemplate_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_AITemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_AITemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_AITemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_AITemplate_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_aitemplateid: XQW.Guid;
  msdyn_aitemplateidunique: XQW.Guid;
  msdyn_databinding: string;
  msdyn_defaultrunschedulingoptions: string;
  msdyn_istrainable: boolean;
  msdyn_resourceinfo: string;
  msdyn_runconfigschema: string;
  msdyn_rundataspecification: string;
  msdyn_templateversion: number;
  msdyn_trainingconfigschema: string;
  msdyn_trainingdataspecification: string;
  msdyn_uniquename: string;
  msdyn_uxconfiguration: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_aitemplate_statecode;
  statuscode: msdyn_aitemplate_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_AITemplate_Expand {
  createdby: WebExpand<msdyn_AITemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_AITemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_AITemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_AITemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_aitemplate_AsyncOperations: WebExpand<msdyn_AITemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_aitemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_aitemplate_BulkDeleteFailures: WebExpand<msdyn_AITemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_aitemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_aitemplate_MailboxTrackingFolders: WebExpand<msdyn_AITemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_aitemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_aitemplate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_AITemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_aitemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_aitemplate_ProcessSession: WebExpand<msdyn_AITemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_aitemplate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_aitemplate_SyncErrors: WebExpand<msdyn_AITemplate_Expand, SyncError_Select, SyncError_Filter, { msdyn_aitemplate_SyncErrors: SyncError_Result[] }>;
  msdyn_aitemplate_UserEntityInstanceDatas: WebExpand<msdyn_AITemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_aitemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_aitemplate_msdyn_aimodel: WebExpand<msdyn_AITemplate_Expand, msdyn_AIModel_Select, msdyn_AIModel_Filter, { msdyn_aitemplate_msdyn_aimodel: msdyn_AIModel_Result[] }>;
  ownerid: WebExpand<msdyn_AITemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_AITemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_AITemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_AITemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_AITemplate_FormattedResult {
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
interface msdyn_AITemplate_Result extends msdyn_AITemplate_Base, msdyn_AITemplate_Relationships {
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
interface msdyn_AITemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_AITemplate_RelatedMany {
  msdyn_aitemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_aitemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_aitemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_aitemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_aitemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_aitemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_aitemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_aitemplate_msdyn_aimodel: WebMappingRetrieve<msdyn_AIModel_Select,msdyn_AIModel_Expand,msdyn_AIModel_Filter,msdyn_AIModel_Fixed,msdyn_AIModel_Result,msdyn_AIModel_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_aitemplates: WebMappingRetrieve<msdyn_AITemplate_Select,msdyn_AITemplate_Expand,msdyn_AITemplate_Filter,msdyn_AITemplate_Fixed,msdyn_AITemplate_Result,msdyn_AITemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_aitemplates: WebMappingRelated<msdyn_AITemplate_RelatedOne,msdyn_AITemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_aitemplates: WebMappingCUDA<msdyn_AITemplate_Create,msdyn_AITemplate_Update,msdyn_AITemplate_Select>;
}
