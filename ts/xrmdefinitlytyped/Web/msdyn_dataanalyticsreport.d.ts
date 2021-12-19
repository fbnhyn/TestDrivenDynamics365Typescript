interface msdyn_dataanalyticsreport_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_analyticschecksum?: number | null;
  msdyn_dataanalyticsreportid?: string | null;
  msdyn_displayorder?: number | null;
  msdyn_isenabled?: boolean | null;
  msdyn_name?: string | null;
  msdyn_provisionstatus?: boolean | null;
  msdyn_reportentityname?: string | null;
  msdyn_reportgroup?: string | null;
  msdyn_reportid?: string | null;
  msdyn_reportpage?: string | null;
  msdyn_reporttemplateid?: string | null;
  msdyn_workspaceid?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_dataanalyticsreport_statecode | null;
  statuscode?: msdyn_dataanalyticsreport_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_dataanalyticsreport_Relationships {
  msdyn_dataanalyticsreport_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_dataanalyticsreport_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_dataanalyticsreport_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_dataanalyticsreport_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_dataanalyticsreport_SyncErrors?: SyncError_Result[] | null;
  msdyn_dataanalyticsreport_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_datainsightsandanalyticsfeatureId?: msdyn_datainsightsandanalyticsfeature_Result | null;
}
interface msdyn_dataanalyticsreport extends msdyn_dataanalyticsreport_Base, msdyn_dataanalyticsreport_Relationships {
  msdyn_datainsightsandanalyticsfeatureId_bind$msdyn_datainsightsandanalyticsfeatures?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_dataanalyticsreport_Create extends msdyn_dataanalyticsreport {
}
interface msdyn_dataanalyticsreport_Update extends msdyn_dataanalyticsreport {
}
interface msdyn_dataanalyticsreport_Select {
  componentidunique: WebAttribute<msdyn_dataanalyticsreport_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_dataanalyticsreport_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_dataanalyticsreport_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_dataanalyticsreport_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_dataanalyticsreport_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_dataanalyticsreport_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_dataanalyticsreport_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_dataanalyticsreport_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_dataanalyticsreport_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_dataanalyticsreport_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_dataanalyticsreport_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_analyticschecksum: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_analyticschecksum: number | null }, {  }>;
  msdyn_dataanalyticsreportid: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_dataanalyticsreportid: string | null }, {  }>;
  msdyn_datainsightsandanalyticsfeatureid_guid: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_datainsightsandanalyticsfeatureid_guid: string | null }, { msdyn_datainsightsandanalyticsfeatureid_formatted?: string }>;
  msdyn_displayorder: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_displayorder: number | null }, {  }>;
  msdyn_isenabled: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_isenabled: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_name: string | null }, {  }>;
  msdyn_provisionstatus: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_provisionstatus: boolean | null }, {  }>;
  msdyn_reportentityname: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_reportentityname: string | null }, {  }>;
  msdyn_reportgroup: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_reportgroup: string | null }, {  }>;
  msdyn_reportid: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_reportid: string | null }, {  }>;
  msdyn_reportpage: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_reportpage: string | null }, {  }>;
  msdyn_reporttemplateid: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_reporttemplateid: string | null }, {  }>;
  msdyn_workspaceid: WebAttribute<msdyn_dataanalyticsreport_Select, { msdyn_workspaceid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_dataanalyticsreport_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_dataanalyticsreport_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_dataanalyticsreport_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_dataanalyticsreport_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_dataanalyticsreport_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_dataanalyticsreport_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_dataanalyticsreport_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_dataanalyticsreport_Select, { statecode: msdyn_dataanalyticsreport_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_dataanalyticsreport_Select, { statuscode: msdyn_dataanalyticsreport_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_dataanalyticsreport_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_dataanalyticsreport_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_dataanalyticsreport_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_dataanalyticsreport_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_dataanalyticsreport_Filter {
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
  msdyn_dataanalyticsreportid: XQW.Guid;
  msdyn_datainsightsandanalyticsfeatureid_guid: XQW.Guid;
  msdyn_displayorder: number;
  msdyn_isenabled: boolean;
  msdyn_name: string;
  msdyn_provisionstatus: boolean;
  msdyn_reportentityname: string;
  msdyn_reportgroup: string;
  msdyn_reportid: string;
  msdyn_reportpage: string;
  msdyn_reporttemplateid: string;
  msdyn_workspaceid: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_dataanalyticsreport_statecode;
  statuscode: msdyn_dataanalyticsreport_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_dataanalyticsreport_Expand {
  createdby: WebExpand<msdyn_dataanalyticsreport_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_dataanalyticsreport_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_dataanalyticsreport_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_dataanalyticsreport_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_dataanalyticsreport_AsyncOperations: WebExpand<msdyn_dataanalyticsreport_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_dataanalyticsreport_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_dataanalyticsreport_BulkDeleteFailures: WebExpand<msdyn_dataanalyticsreport_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_dataanalyticsreport_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_dataanalyticsreport_MailboxTrackingFolders: WebExpand<msdyn_dataanalyticsreport_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_dataanalyticsreport_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses: WebExpand<msdyn_dataanalyticsreport_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_dataanalyticsreport_ProcessSession: WebExpand<msdyn_dataanalyticsreport_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_dataanalyticsreport_ProcessSession: ProcessSession_Result[] }>;
  msdyn_dataanalyticsreport_SyncErrors: WebExpand<msdyn_dataanalyticsreport_Expand, SyncError_Select, SyncError_Filter, { msdyn_dataanalyticsreport_SyncErrors: SyncError_Result[] }>;
  msdyn_dataanalyticsreport_UserEntityInstanceDatas: WebExpand<msdyn_dataanalyticsreport_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_dataanalyticsreport_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_datainsightsandanalyticsfeatureId: WebExpand<msdyn_dataanalyticsreport_Expand, msdyn_datainsightsandanalyticsfeature_Select, msdyn_datainsightsandanalyticsfeature_Filter, { msdyn_datainsightsandanalyticsfeatureId: msdyn_datainsightsandanalyticsfeature_Result }>;
  ownerid: WebExpand<msdyn_dataanalyticsreport_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_dataanalyticsreport_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_dataanalyticsreport_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_dataanalyticsreport_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_dataanalyticsreport_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_datainsightsandanalyticsfeatureid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_dataanalyticsreport_Result extends msdyn_dataanalyticsreport_Base, msdyn_dataanalyticsreport_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_datainsightsandanalyticsfeatureid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_dataanalyticsreport_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_datainsightsandanalyticsfeatureId: WebMappingRetrieve<msdyn_datainsightsandanalyticsfeature_Select,msdyn_datainsightsandanalyticsfeature_Expand,msdyn_datainsightsandanalyticsfeature_Filter,msdyn_datainsightsandanalyticsfeature_Fixed,msdyn_datainsightsandanalyticsfeature_Result,msdyn_datainsightsandanalyticsfeature_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_dataanalyticsreport_RelatedMany {
  msdyn_dataanalyticsreport_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_dataanalyticsreport_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_dataanalyticsreport_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_dataanalyticsreport_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_dataanalyticsreport_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_dataanalyticsreport_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_dataanalyticsreport_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_dataanalyticsreports: WebMappingRetrieve<msdyn_dataanalyticsreport_Select,msdyn_dataanalyticsreport_Expand,msdyn_dataanalyticsreport_Filter,msdyn_dataanalyticsreport_Fixed,msdyn_dataanalyticsreport_Result,msdyn_dataanalyticsreport_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_dataanalyticsreports: WebMappingRelated<msdyn_dataanalyticsreport_RelatedOne,msdyn_dataanalyticsreport_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_dataanalyticsreports: WebMappingCUDA<msdyn_dataanalyticsreport_Create,msdyn_dataanalyticsreport_Update,msdyn_dataanalyticsreport_Select>;
}
