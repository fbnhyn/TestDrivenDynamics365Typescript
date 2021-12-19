interface msdyn_dataanalyticsreport_csrmanager_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_dataanalyticsreport_csrmanagerid?: string | null;
  msdyn_dataanalyticsreportid?: string | null;
  msdyn_displayorder?: number | null;
  msdyn_isvisible?: boolean | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_dataanalyticsreport_csrmanager_statecode | null;
  statuscode?: msdyn_dataanalyticsreport_csrmanager_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_dataanalyticsreport_csrmanager_Relationships {
  msdyn_dataanalyticsreport_csrmanager_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_dataanalyticsreport_csrmanager_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_dataanalyticsreport_csrmanager_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_dataanalyticsreport_csrmanager_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_dataanalyticsreport_csrmanager_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_dataanalyticsreport_csrmanager_SyncErrors?: SyncError_Result[] | null;
  msdyn_dataanalyticsreport_csrmanager_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_datainsightsandanalyticsfeatureId?: msdyn_datainsightsandanalyticsfeature_Result | null;
}
interface msdyn_dataanalyticsreport_csrmanager extends msdyn_dataanalyticsreport_csrmanager_Base, msdyn_dataanalyticsreport_csrmanager_Relationships {
  msdyn_datainsightsandanalyticsfeatureId_bind$msdyn_datainsightsandanalyticsfeatures?: string | null;
}
interface msdyn_dataanalyticsreport_csrmanager_Create extends msdyn_dataanalyticsreport_csrmanager {
}
interface msdyn_dataanalyticsreport_csrmanager_Update extends msdyn_dataanalyticsreport_csrmanager {
}
interface msdyn_dataanalyticsreport_csrmanager_Select {
  componentidunique: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_dataanalyticsreport_csrmanagerid: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { msdyn_dataanalyticsreport_csrmanagerid: string | null }, {  }>;
  msdyn_dataanalyticsreportid: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { msdyn_dataanalyticsreportid: string | null }, {  }>;
  msdyn_datainsightsandanalyticsfeatureid_guid: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { msdyn_datainsightsandanalyticsfeatureid_guid: string | null }, { msdyn_datainsightsandanalyticsfeatureid_formatted?: string }>;
  msdyn_displayorder: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { msdyn_displayorder: number | null }, {  }>;
  msdyn_isvisible: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { msdyn_isvisible: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { msdyn_name: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { statecode: msdyn_dataanalyticsreport_csrmanager_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { statuscode: msdyn_dataanalyticsreport_csrmanager_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_dataanalyticsreport_csrmanager_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_dataanalyticsreport_csrmanager_Filter {
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
  msdyn_dataanalyticsreport_csrmanagerid: XQW.Guid;
  msdyn_dataanalyticsreportid: string;
  msdyn_datainsightsandanalyticsfeatureid_guid: XQW.Guid;
  msdyn_displayorder: number;
  msdyn_isvisible: boolean;
  msdyn_name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_dataanalyticsreport_csrmanager_statecode;
  statuscode: msdyn_dataanalyticsreport_csrmanager_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_dataanalyticsreport_csrmanager_Expand {
  createdby: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_dataanalyticsreport_csrmanager_AsyncOperations: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_dataanalyticsreport_csrmanager_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_dataanalyticsreport_csrmanager_BulkDeleteFailures: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_dataanalyticsreport_csrmanager_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_dataanalyticsreport_csrmanager_MailboxTrackingFolders: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_dataanalyticsreport_csrmanager_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_dataanalyticsreport_csrmanager_PrincipalObjectAttributeAccesses: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_dataanalyticsreport_csrmanager_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_dataanalyticsreport_csrmanager_ProcessSession: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_dataanalyticsreport_csrmanager_ProcessSession: ProcessSession_Result[] }>;
  msdyn_dataanalyticsreport_csrmanager_SyncErrors: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, SyncError_Select, SyncError_Filter, { msdyn_dataanalyticsreport_csrmanager_SyncErrors: SyncError_Result[] }>;
  msdyn_dataanalyticsreport_csrmanager_UserEntityInstanceDatas: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_dataanalyticsreport_csrmanager_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_datainsightsandanalyticsfeatureId: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, msdyn_datainsightsandanalyticsfeature_Select, msdyn_datainsightsandanalyticsfeature_Filter, { msdyn_datainsightsandanalyticsfeatureId: msdyn_datainsightsandanalyticsfeature_Result }>;
  organizationid: WebExpand<msdyn_dataanalyticsreport_csrmanager_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_dataanalyticsreport_csrmanager_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_datainsightsandanalyticsfeatureid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_dataanalyticsreport_csrmanager_Result extends msdyn_dataanalyticsreport_csrmanager_Base, msdyn_dataanalyticsreport_csrmanager_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_datainsightsandanalyticsfeatureid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_dataanalyticsreport_csrmanager_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_datainsightsandanalyticsfeatureId: WebMappingRetrieve<msdyn_datainsightsandanalyticsfeature_Select,msdyn_datainsightsandanalyticsfeature_Expand,msdyn_datainsightsandanalyticsfeature_Filter,msdyn_datainsightsandanalyticsfeature_Fixed,msdyn_datainsightsandanalyticsfeature_Result,msdyn_datainsightsandanalyticsfeature_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_dataanalyticsreport_csrmanager_RelatedMany {
  msdyn_dataanalyticsreport_csrmanager_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_dataanalyticsreport_csrmanager_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_dataanalyticsreport_csrmanager_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_dataanalyticsreport_csrmanager_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_dataanalyticsreport_csrmanager_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_dataanalyticsreport_csrmanager_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_dataanalyticsreport_csrmanager_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_dataanalyticsreports_csrmanager: WebMappingRetrieve<msdyn_dataanalyticsreport_csrmanager_Select,msdyn_dataanalyticsreport_csrmanager_Expand,msdyn_dataanalyticsreport_csrmanager_Filter,msdyn_dataanalyticsreport_csrmanager_Fixed,msdyn_dataanalyticsreport_csrmanager_Result,msdyn_dataanalyticsreport_csrmanager_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_dataanalyticsreports_csrmanager: WebMappingRelated<msdyn_dataanalyticsreport_csrmanager_RelatedOne,msdyn_dataanalyticsreport_csrmanager_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_dataanalyticsreports_csrmanager: WebMappingCUDA<msdyn_dataanalyticsreport_csrmanager_Create,msdyn_dataanalyticsreport_csrmanager_Update,msdyn_dataanalyticsreport_csrmanager_Select>;
}
