interface msdyn_datainsightsandanalyticsfeature_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_analyticschecksum?: number | null;
  msdyn_datainsightsandanalyticsfeatureid?: string | null;
  msdyn_isdemoenabled?: boolean | null;
  msdyn_isenabled?: boolean | null;
  msdyn_lastaccesstime?: Date | null;
  msdyn_lastreportrefreshtime?: Date | null;
  msdyn_name?: string | null;
  msdyn_provisionstatus?: msdyn_datainsightsandanalyticsfeature_msdyn_provisionstatus | null;
  msdyn_templateid?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_datainsightsandanalyticsfeature_statecode | null;
  statuscode?: msdyn_datainsightsandanalyticsfeature_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_datainsightsandanalyticsfeature_Relationships {
  msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId?: msdyn_dataanalyticsreport_csrmanager_Result[] | null;
  msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid?: msdyn_dataanalyticsreport_fs_Result[] | null;
  msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid?: msdyn_dataanalyticsreport_fspredictrs_Result[] | null;
  msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid?: msdyn_dataanalyticsreport_fspredictwhd_Result[] | null;
  msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId?: msdyn_dataanalyticsreport_ksinsights_Result[] | null;
  msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid?: msdyn_dataanalyticsreport_oc_Result[] | null;
  msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid?: msdyn_dataanalyticsreport_ocvoice_Result[] | null;
  msdyn_datainsightsandanalyticsfeature_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_datainsightsandanalyticsfeature_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_datainsightsandanalyticsfeature_SyncErrors?: SyncError_Result[] | null;
  msdyn_datainsightsandanalyticsfeature_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId?: msdyn_dataanalyticsreport_Result[] | null;
}
interface msdyn_datainsightsandanalyticsfeature extends msdyn_datainsightsandanalyticsfeature_Base, msdyn_datainsightsandanalyticsfeature_Relationships {
}
interface msdyn_datainsightsandanalyticsfeature_Create extends msdyn_datainsightsandanalyticsfeature {
}
interface msdyn_datainsightsandanalyticsfeature_Update extends msdyn_datainsightsandanalyticsfeature {
}
interface msdyn_datainsightsandanalyticsfeature_Select {
  componentidunique: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_analyticschecksum: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { msdyn_analyticschecksum: number | null }, {  }>;
  msdyn_datainsightsandanalyticsfeatureid: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { msdyn_datainsightsandanalyticsfeatureid: string | null }, {  }>;
  msdyn_isdemoenabled: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { msdyn_isdemoenabled: boolean | null }, {  }>;
  msdyn_isenabled: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { msdyn_isenabled: boolean | null }, {  }>;
  msdyn_lastaccesstime: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { msdyn_lastaccesstime: Date | null }, { msdyn_lastaccesstime_formatted?: string }>;
  msdyn_lastreportrefreshtime: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { msdyn_lastreportrefreshtime: Date | null }, { msdyn_lastreportrefreshtime_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { msdyn_name: string | null }, {  }>;
  msdyn_provisionstatus: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { msdyn_provisionstatus: msdyn_datainsightsandanalyticsfeature_msdyn_provisionstatus | null }, { msdyn_provisionstatus_formatted?: string }>;
  msdyn_templateid: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { msdyn_templateid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { statecode: msdyn_datainsightsandanalyticsfeature_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { statuscode: msdyn_datainsightsandanalyticsfeature_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_datainsightsandanalyticsfeature_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_datainsightsandanalyticsfeature_Filter {
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
  msdyn_analyticschecksum: number;
  msdyn_datainsightsandanalyticsfeatureid: XQW.Guid;
  msdyn_isdemoenabled: boolean;
  msdyn_isenabled: boolean;
  msdyn_lastaccesstime: Date;
  msdyn_lastreportrefreshtime: Date;
  msdyn_name: string;
  msdyn_provisionstatus: msdyn_datainsightsandanalyticsfeature_msdyn_provisionstatus;
  msdyn_templateid: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_datainsightsandanalyticsfeature_statecode;
  statuscode: msdyn_datainsightsandanalyticsfeature_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_datainsightsandanalyticsfeature_Expand {
  createdby: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, msdyn_dataanalyticsreport_csrmanager_Select, msdyn_dataanalyticsreport_csrmanager_Filter, { msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId: msdyn_dataanalyticsreport_csrmanager_Result[] }>;
  msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, msdyn_dataanalyticsreport_fs_Select, msdyn_dataanalyticsreport_fs_Filter, { msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid: msdyn_dataanalyticsreport_fs_Result[] }>;
  msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, msdyn_dataanalyticsreport_fspredictrs_Select, msdyn_dataanalyticsreport_fspredictrs_Filter, { msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid: msdyn_dataanalyticsreport_fspredictrs_Result[] }>;
  msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, msdyn_dataanalyticsreport_fspredictwhd_Select, msdyn_dataanalyticsreport_fspredictwhd_Filter, { msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid: msdyn_dataanalyticsreport_fspredictwhd_Result[] }>;
  msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, msdyn_dataanalyticsreport_ksinsights_Select, msdyn_dataanalyticsreport_ksinsights_Filter, { msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId: msdyn_dataanalyticsreport_ksinsights_Result[] }>;
  msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, msdyn_dataanalyticsreport_oc_Select, msdyn_dataanalyticsreport_oc_Filter, { msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid: msdyn_dataanalyticsreport_oc_Result[] }>;
  msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, msdyn_dataanalyticsreport_ocvoice_Select, msdyn_dataanalyticsreport_ocvoice_Filter, { msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid: msdyn_dataanalyticsreport_ocvoice_Result[] }>;
  msdyn_datainsightsandanalyticsfeature_AsyncOperations: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_datainsightsandanalyticsfeature_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_datainsightsandanalyticsfeature_ProcessSession: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_datainsightsandanalyticsfeature_ProcessSession: ProcessSession_Result[] }>;
  msdyn_datainsightsandanalyticsfeature_SyncErrors: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, SyncError_Select, SyncError_Filter, { msdyn_datainsightsandanalyticsfeature_SyncErrors: SyncError_Result[] }>;
  msdyn_datainsightsandanalyticsfeature_UserEntityInstanceDatas: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_datainsightsandanalyticsfeature_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, msdyn_dataanalyticsreport_Select, msdyn_dataanalyticsreport_Filter, { msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId: msdyn_dataanalyticsreport_Result[] }>;
  organizationid: WebExpand<msdyn_datainsightsandanalyticsfeature_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_datainsightsandanalyticsfeature_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_lastaccesstime_formatted?: string;
  msdyn_lastreportrefreshtime_formatted?: string;
  msdyn_provisionstatus_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_datainsightsandanalyticsfeature_Result extends msdyn_datainsightsandanalyticsfeature_Base, msdyn_datainsightsandanalyticsfeature_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_datainsightsandanalyticsfeature_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_datainsightsandanalyticsfeature_RelatedMany {
  msdyn_dasfeature_dascsrmanager_datainsightsandanalyticsfeatureId: WebMappingRetrieve<msdyn_dataanalyticsreport_csrmanager_Select,msdyn_dataanalyticsreport_csrmanager_Expand,msdyn_dataanalyticsreport_csrmanager_Filter,msdyn_dataanalyticsreport_csrmanager_Fixed,msdyn_dataanalyticsreport_csrmanager_Result,msdyn_dataanalyticsreport_csrmanager_FormattedResult>;
  msdyn_dasfeature_dasfs_datainsightsandanalyticsfeatureid: WebMappingRetrieve<msdyn_dataanalyticsreport_fs_Select,msdyn_dataanalyticsreport_fs_Expand,msdyn_dataanalyticsreport_fs_Filter,msdyn_dataanalyticsreport_fs_Fixed,msdyn_dataanalyticsreport_fs_Result,msdyn_dataanalyticsreport_fs_FormattedResult>;
  msdyn_dasfeature_dasfspredictrs_datainsightsandanalyticsfeatureid: WebMappingRetrieve<msdyn_dataanalyticsreport_fspredictrs_Select,msdyn_dataanalyticsreport_fspredictrs_Expand,msdyn_dataanalyticsreport_fspredictrs_Filter,msdyn_dataanalyticsreport_fspredictrs_Fixed,msdyn_dataanalyticsreport_fspredictrs_Result,msdyn_dataanalyticsreport_fspredictrs_FormattedResult>;
  msdyn_dasfeature_dasfspredictwhd_datainsightsandanalyticsfeatureid: WebMappingRetrieve<msdyn_dataanalyticsreport_fspredictwhd_Select,msdyn_dataanalyticsreport_fspredictwhd_Expand,msdyn_dataanalyticsreport_fspredictwhd_Filter,msdyn_dataanalyticsreport_fspredictwhd_Fixed,msdyn_dataanalyticsreport_fspredictwhd_Result,msdyn_dataanalyticsreport_fspredictwhd_FormattedResult>;
  msdyn_dasfeature_dasksi_datainsightsandanalyticsfeatureId: WebMappingRetrieve<msdyn_dataanalyticsreport_ksinsights_Select,msdyn_dataanalyticsreport_ksinsights_Expand,msdyn_dataanalyticsreport_ksinsights_Filter,msdyn_dataanalyticsreport_ksinsights_Fixed,msdyn_dataanalyticsreport_ksinsights_Result,msdyn_dataanalyticsreport_ksinsights_FormattedResult>;
  msdyn_dasfeature_dasoc_datainsightsandanalyticsfeatureid: WebMappingRetrieve<msdyn_dataanalyticsreport_oc_Select,msdyn_dataanalyticsreport_oc_Expand,msdyn_dataanalyticsreport_oc_Filter,msdyn_dataanalyticsreport_oc_Fixed,msdyn_dataanalyticsreport_oc_Result,msdyn_dataanalyticsreport_oc_FormattedResult>;
  msdyn_dasfeature_dasocvoice_datainsightsandanalyticsfeatureid: WebMappingRetrieve<msdyn_dataanalyticsreport_ocvoice_Select,msdyn_dataanalyticsreport_ocvoice_Expand,msdyn_dataanalyticsreport_ocvoice_Filter,msdyn_dataanalyticsreport_ocvoice_Fixed,msdyn_dataanalyticsreport_ocvoice_Result,msdyn_dataanalyticsreport_ocvoice_FormattedResult>;
  msdyn_datainsightsandanalyticsfeature_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_datainsightsandanalyticsfeature_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_datainsightsandanalyticsfeature_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_datainsightsandanalyticsfeature_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_datainsightsandanalyticsfeature_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_datainsightsandanalyticsfeature_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_datainsightsandanalyticsfeature_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_datainsightsandanalyticsfeature_dataanalyticsreport_datainsightsandanalyticsfeatureId: WebMappingRetrieve<msdyn_dataanalyticsreport_Select,msdyn_dataanalyticsreport_Expand,msdyn_dataanalyticsreport_Filter,msdyn_dataanalyticsreport_Fixed,msdyn_dataanalyticsreport_Result,msdyn_dataanalyticsreport_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_datainsightsandanalyticsfeatures: WebMappingRetrieve<msdyn_datainsightsandanalyticsfeature_Select,msdyn_datainsightsandanalyticsfeature_Expand,msdyn_datainsightsandanalyticsfeature_Filter,msdyn_datainsightsandanalyticsfeature_Fixed,msdyn_datainsightsandanalyticsfeature_Result,msdyn_datainsightsandanalyticsfeature_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_datainsightsandanalyticsfeatures: WebMappingRelated<msdyn_datainsightsandanalyticsfeature_RelatedOne,msdyn_datainsightsandanalyticsfeature_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_datainsightsandanalyticsfeatures: WebMappingCUDA<msdyn_datainsightsandanalyticsfeature_Create,msdyn_datainsightsandanalyticsfeature_Update,msdyn_datainsightsandanalyticsfeature_Select>;
}
