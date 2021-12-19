interface msdyn_tour_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_displayname?: string | null;
  msdyn_labelsresource?: string | null;
  msdyn_path?: string | null;
  msdyn_tourdefinition?: string | null;
  msdyn_tourid?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_tour_statecode | null;
  statuscode?: msdyn_tour_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_tour_Relationships {
  msdyn_tour_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_tour_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_tour_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_tour_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_tour_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_tour_SyncErrors?: SyncError_Result[] | null;
  msdyn_tour_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_tour extends msdyn_tour_Base, msdyn_tour_Relationships {
}
interface msdyn_tour_Create extends msdyn_tour {
}
interface msdyn_tour_Update extends msdyn_tour {
}
interface msdyn_tour_Select {
  componentidunique: WebAttribute<msdyn_tour_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_tour_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_tour_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_tour_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_tour_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_tour_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_tour_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_tour_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_tour_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_tour_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_tour_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_displayname: WebAttribute<msdyn_tour_Select, { msdyn_displayname: string | null }, {  }>;
  msdyn_labelsresource: WebAttribute<msdyn_tour_Select, { msdyn_labelsresource: string | null }, {  }>;
  msdyn_path: WebAttribute<msdyn_tour_Select, { msdyn_path: string | null }, {  }>;
  msdyn_tourdefinition: WebAttribute<msdyn_tour_Select, { msdyn_tourdefinition: string | null }, {  }>;
  msdyn_tourid: WebAttribute<msdyn_tour_Select, { msdyn_tourid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_tour_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_tour_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_tour_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_tour_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_tour_Select, { statecode: msdyn_tour_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_tour_Select, { statuscode: msdyn_tour_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_tour_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_tour_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_tour_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_tour_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_tour_Filter {
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
  msdyn_displayname: string;
  msdyn_labelsresource: string;
  msdyn_path: string;
  msdyn_tourdefinition: string;
  msdyn_tourid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_tour_statecode;
  statuscode: msdyn_tour_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_tour_Expand {
  createdby: WebExpand<msdyn_tour_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_tour_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_tour_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_tour_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_tour_AsyncOperations: WebExpand<msdyn_tour_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_tour_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_tour_BulkDeleteFailures: WebExpand<msdyn_tour_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_tour_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_tour_MailboxTrackingFolders: WebExpand<msdyn_tour_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_tour_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_tour_PrincipalObjectAttributeAccesses: WebExpand<msdyn_tour_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_tour_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_tour_ProcessSession: WebExpand<msdyn_tour_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_tour_ProcessSession: ProcessSession_Result[] }>;
  msdyn_tour_SyncErrors: WebExpand<msdyn_tour_Expand, SyncError_Select, SyncError_Filter, { msdyn_tour_SyncErrors: SyncError_Result[] }>;
  msdyn_tour_UserEntityInstanceDatas: WebExpand<msdyn_tour_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_tour_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_tour_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_tour_FormattedResult {
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
interface msdyn_tour_Result extends msdyn_tour_Base, msdyn_tour_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_tour_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_tour_RelatedMany {
  msdyn_tour_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_tour_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_tour_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_tour_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_tour_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_tour_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_tour_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_tours: WebMappingRetrieve<msdyn_tour_Select,msdyn_tour_Expand,msdyn_tour_Filter,msdyn_tour_Fixed,msdyn_tour_Result,msdyn_tour_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_tours: WebMappingRelated<msdyn_tour_RelatedOne,msdyn_tour_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_tours: WebMappingCUDA<msdyn_tour_Create,msdyn_tour_Update,msdyn_tour_Select>;
}
