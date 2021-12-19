interface msdyn_assetsuggestionssetting_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_assetsuggestionssettingid?: string | null;
  msdyn_name?: string | null;
  msdyn_problematicassetbreakfixoptions?: string | null;
  msdyn_problematicassetinstallationfield?: string | null;
  msdyn_problematicassetisenabled?: boolean | null;
  msdyn_problematicassetmaintenanceoptions?: string | null;
  msdyn_problematicassetreplacementfield?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_assetsuggestionssetting_statecode | null;
  statuscode?: msdyn_assetsuggestionssetting_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_assetsuggestionssetting_Relationships {
  msdyn_assetsuggestionssetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_assetsuggestionssetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_assetsuggestionssetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_assetsuggestionssetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_assetsuggestionssetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_assetsuggestionssetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_assetsuggestionssetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_assetsuggestionssetting extends msdyn_assetsuggestionssetting_Base, msdyn_assetsuggestionssetting_Relationships {
}
interface msdyn_assetsuggestionssetting_Create extends msdyn_assetsuggestionssetting {
}
interface msdyn_assetsuggestionssetting_Update extends msdyn_assetsuggestionssetting {
}
interface msdyn_assetsuggestionssetting_Select {
  componentidunique: WebAttribute<msdyn_assetsuggestionssetting_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_assetsuggestionssetting_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_assetsuggestionssetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_assetsuggestionssetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_assetsuggestionssetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_assetsuggestionssetting_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_assetsuggestionssetting_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_assetsuggestionssetting_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_assetsuggestionssetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_assetsuggestionssetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_assetsuggestionssetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_assetsuggestionssettingid: WebAttribute<msdyn_assetsuggestionssetting_Select, { msdyn_assetsuggestionssettingid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_assetsuggestionssetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_problematicassetbreakfixoptions: WebAttribute<msdyn_assetsuggestionssetting_Select, { msdyn_problematicassetbreakfixoptions: string | null }, {  }>;
  msdyn_problematicassetinstallationfield: WebAttribute<msdyn_assetsuggestionssetting_Select, { msdyn_problematicassetinstallationfield: string | null }, {  }>;
  msdyn_problematicassetisenabled: WebAttribute<msdyn_assetsuggestionssetting_Select, { msdyn_problematicassetisenabled: boolean | null }, {  }>;
  msdyn_problematicassetmaintenanceoptions: WebAttribute<msdyn_assetsuggestionssetting_Select, { msdyn_problematicassetmaintenanceoptions: string | null }, {  }>;
  msdyn_problematicassetreplacementfield: WebAttribute<msdyn_assetsuggestionssetting_Select, { msdyn_problematicassetreplacementfield: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_assetsuggestionssetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_assetsuggestionssetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_assetsuggestionssetting_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_assetsuggestionssetting_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_assetsuggestionssetting_Select, { statecode: msdyn_assetsuggestionssetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_assetsuggestionssetting_Select, { statuscode: msdyn_assetsuggestionssetting_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_assetsuggestionssetting_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_assetsuggestionssetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_assetsuggestionssetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_assetsuggestionssetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_assetsuggestionssetting_Filter {
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
  msdyn_assetsuggestionssettingid: XQW.Guid;
  msdyn_name: string;
  msdyn_problematicassetbreakfixoptions: string;
  msdyn_problematicassetinstallationfield: string;
  msdyn_problematicassetisenabled: boolean;
  msdyn_problematicassetmaintenanceoptions: string;
  msdyn_problematicassetreplacementfield: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_assetsuggestionssetting_statecode;
  statuscode: msdyn_assetsuggestionssetting_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_assetsuggestionssetting_Expand {
  createdby: WebExpand<msdyn_assetsuggestionssetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_assetsuggestionssetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_assetsuggestionssetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_assetsuggestionssetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_assetsuggestionssetting_AsyncOperations: WebExpand<msdyn_assetsuggestionssetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_assetsuggestionssetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_assetsuggestionssetting_BulkDeleteFailures: WebExpand<msdyn_assetsuggestionssetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_assetsuggestionssetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_assetsuggestionssetting_MailboxTrackingFolders: WebExpand<msdyn_assetsuggestionssetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_assetsuggestionssetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_assetsuggestionssetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_assetsuggestionssetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_assetsuggestionssetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_assetsuggestionssetting_ProcessSession: WebExpand<msdyn_assetsuggestionssetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_assetsuggestionssetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_assetsuggestionssetting_SyncErrors: WebExpand<msdyn_assetsuggestionssetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_assetsuggestionssetting_SyncErrors: SyncError_Result[] }>;
  msdyn_assetsuggestionssetting_UserEntityInstanceDatas: WebExpand<msdyn_assetsuggestionssetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_assetsuggestionssetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_assetsuggestionssetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_assetsuggestionssetting_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_assetsuggestionssetting_Result extends msdyn_assetsuggestionssetting_Base, msdyn_assetsuggestionssetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_assetsuggestionssetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_assetsuggestionssetting_RelatedMany {
  msdyn_assetsuggestionssetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_assetsuggestionssetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_assetsuggestionssetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_assetsuggestionssetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_assetsuggestionssetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_assetsuggestionssetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_assetsuggestionssetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_assetsuggestionssettings: WebMappingRetrieve<msdyn_assetsuggestionssetting_Select,msdyn_assetsuggestionssetting_Expand,msdyn_assetsuggestionssetting_Filter,msdyn_assetsuggestionssetting_Fixed,msdyn_assetsuggestionssetting_Result,msdyn_assetsuggestionssetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_assetsuggestionssettings: WebMappingRelated<msdyn_assetsuggestionssetting_RelatedOne,msdyn_assetsuggestionssetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_assetsuggestionssettings: WebMappingCUDA<msdyn_assetsuggestionssetting_Create,msdyn_assetsuggestionssetting_Update,msdyn_assetsuggestionssetting_Select>;
}
