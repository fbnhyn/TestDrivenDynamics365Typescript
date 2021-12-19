interface Report_Base extends WebEntity {
  bodybinary?: string | null;
  bodytext?: string | null;
  bodyurl?: string | null;
  componentstate?: componentstate | null;
  createdinmajorversion?: number | null;
  createdon?: Date | null;
  customreportxml?: string | null;
  defaultfilter?: string | null;
  description?: string | null;
  filename?: string | null;
  filesize?: number | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  iscustomreport?: boolean | null;
  ismanaged?: boolean | null;
  ispersonal?: boolean | null;
  isscheduledreport?: boolean | null;
  languagecode?: number | null;
  mimetype?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  originalbodytext?: string | null;
  overwritetime?: Date | null;
  queryinfo?: string | null;
  rdlhash?: number | null;
  reportid?: string | null;
  reportidunique?: string | null;
  reportnameonsrs?: string | null;
  reporttypecode?: report_reporttypecode | null;
  schedulexml?: string | null;
  signaturedate?: Date | null;
  signatureid?: string | null;
  signaturelcid?: number | null;
  signaturemajorversion?: number | null;
  signatureminorversion?: number | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Report_Relationships {
  Report_AsyncOperations?: AsyncOperation_Result[] | null;
  Report_ProcessSessions?: ProcessSession_Result[] | null;
  Report_SyncErrors?: SyncError_Result[] | null;
  replicationbacklog_target_report?: ReplicationBacklog_Result[] | null;
  report_parent_report?: Report_Result[] | null;
  report_reportcategories?: ReportCategory_Result[] | null;
  report_reportentities?: ReportEntity_Result[] | null;
  report_reportlink?: ReportLink_Result[] | null;
  report_reportlink_sub?: ReportLink_Result[] | null;
  report_reportvisibility?: ReportVisibility_Result[] | null;
  userentityinstancedata_report?: UserEntityInstanceData_Result[] | null;
}
interface Report extends Report_Base, Report_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  parentreportid_bind$reports?: string | null;
}
interface Report_Create extends Report {
}
interface Report_Update extends Report {
}
interface Report_Select {
  bodybinary: WebAttribute<Report_Select, { bodybinary: string | null }, {  }>;
  bodytext: WebAttribute<Report_Select, { bodytext: string | null }, {  }>;
  bodyurl: WebAttribute<Report_Select, { bodyurl: string | null }, {  }>;
  componentstate: WebAttribute<Report_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<Report_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdinmajorversion: WebAttribute<Report_Select, { createdinmajorversion: number | null }, {  }>;
  createdon: WebAttribute<Report_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Report_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customreportxml: WebAttribute<Report_Select, { customreportxml: string | null }, {  }>;
  defaultfilter: WebAttribute<Report_Select, { defaultfilter: string | null }, {  }>;
  description: WebAttribute<Report_Select, { description: string | null }, {  }>;
  filename: WebAttribute<Report_Select, { filename: string | null }, {  }>;
  filesize: WebAttribute<Report_Select, { filesize: number | null }, {  }>;
  introducedversion: WebAttribute<Report_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<Report_Select, { iscustomizable: any | null }, {  }>;
  iscustomreport: WebAttribute<Report_Select, { iscustomreport: boolean | null }, {  }>;
  ismanaged: WebAttribute<Report_Select, { ismanaged: boolean | null }, {  }>;
  ispersonal: WebAttribute<Report_Select, { ispersonal: boolean | null }, {  }>;
  isscheduledreport: WebAttribute<Report_Select, { isscheduledreport: boolean | null }, {  }>;
  languagecode: WebAttribute<Report_Select, { languagecode: number | null }, {  }>;
  mimetype: WebAttribute<Report_Select, { mimetype: string | null }, {  }>;
  modifiedby_guid: WebAttribute<Report_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Report_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Report_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Report_Select, { name: string | null }, {  }>;
  originalbodytext: WebAttribute<Report_Select, { originalbodytext: string | null }, {  }>;
  overwritetime: WebAttribute<Report_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<Report_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Report_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Report_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Report_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentreportid_guid: WebAttribute<Report_Select, { parentreportid_guid: string | null }, { parentreportid_formatted?: string }>;
  queryinfo: WebAttribute<Report_Select, { queryinfo: string | null }, {  }>;
  rdlhash: WebAttribute<Report_Select, { rdlhash: number | null }, {  }>;
  reportid: WebAttribute<Report_Select, { reportid: string | null }, {  }>;
  reportidunique: WebAttribute<Report_Select, { reportidunique: string | null }, {  }>;
  reportnameonsrs: WebAttribute<Report_Select, { reportnameonsrs: string | null }, {  }>;
  reporttypecode: WebAttribute<Report_Select, { reporttypecode: report_reporttypecode | null }, { reporttypecode_formatted?: string }>;
  schedulexml: WebAttribute<Report_Select, { schedulexml: string | null }, {  }>;
  signaturedate: WebAttribute<Report_Select, { signaturedate: Date | null }, { signaturedate_formatted?: string }>;
  signatureid: WebAttribute<Report_Select, { signatureid: string | null }, {  }>;
  signaturelcid: WebAttribute<Report_Select, { signaturelcid: number | null }, {  }>;
  signaturemajorversion: WebAttribute<Report_Select, { signaturemajorversion: number | null }, {  }>;
  signatureminorversion: WebAttribute<Report_Select, { signatureminorversion: number | null }, {  }>;
  solutionid: WebAttribute<Report_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<Report_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<Report_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Report_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Report_Select, { versionnumber: number | null }, {  }>;
}
interface Report_Filter {
  bodybinary: string;
  bodytext: string;
  bodyurl: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdinmajorversion: number;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customreportxml: string;
  defaultfilter: string;
  description: string;
  filename: string;
  filesize: number;
  introducedversion: string;
  iscustomizable: any;
  iscustomreport: boolean;
  ismanaged: boolean;
  ispersonal: boolean;
  isscheduledreport: boolean;
  languagecode: number;
  mimetype: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  originalbodytext: string;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentreportid_guid: XQW.Guid;
  queryinfo: string;
  rdlhash: number;
  reportid: XQW.Guid;
  reportidunique: XQW.Guid;
  reportnameonsrs: string;
  reporttypecode: report_reporttypecode;
  schedulexml: string;
  signaturedate: Date;
  signatureid: XQW.Guid;
  signaturelcid: number;
  signaturemajorversion: number;
  signatureminorversion: number;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Report_Expand {
  Report_AsyncOperations: WebExpand<Report_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Report_AsyncOperations: AsyncOperation_Result[] }>;
  Report_ProcessSessions: WebExpand<Report_Expand, ProcessSession_Select, ProcessSession_Filter, { Report_ProcessSessions: ProcessSession_Result[] }>;
  Report_SyncErrors: WebExpand<Report_Expand, SyncError_Select, SyncError_Filter, { Report_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<Report_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Report_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Report_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Report_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<Report_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Report_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  parentreportid: WebExpand<Report_Expand, Report_Select, Report_Filter, { parentreportid: Report_Result }>;
  replicationbacklog_target_report: WebExpand<Report_Expand, ReplicationBacklog_Select, ReplicationBacklog_Filter, { replicationbacklog_target_report: ReplicationBacklog_Result[] }>;
  report_parent_report: WebExpand<Report_Expand, Report_Select, Report_Filter, { report_parent_report: Report_Result[] }>;
  report_reportcategories: WebExpand<Report_Expand, ReportCategory_Select, ReportCategory_Filter, { report_reportcategories: ReportCategory_Result[] }>;
  report_reportentities: WebExpand<Report_Expand, ReportEntity_Select, ReportEntity_Filter, { report_reportentities: ReportEntity_Result[] }>;
  report_reportlink: WebExpand<Report_Expand, ReportLink_Select, ReportLink_Filter, { report_reportlink: ReportLink_Result[] }>;
  report_reportlink_sub: WebExpand<Report_Expand, ReportLink_Select, ReportLink_Filter, { report_reportlink_sub: ReportLink_Result[] }>;
  report_reportvisibility: WebExpand<Report_Expand, ReportVisibility_Select, ReportVisibility_Filter, { report_reportvisibility: ReportVisibility_Result[] }>;
  userentityinstancedata_report: WebExpand<Report_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_report: UserEntityInstanceData_Result[] }>;
}
interface Report_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentreportid_formatted?: string;
  reporttypecode_formatted?: string;
  signaturedate_formatted?: string;
}
interface Report_Result extends Report_Base, Report_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentreportid_guid: string | null;
}
interface Report_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  parentreportid: WebMappingRetrieve<Report_Select,Report_Expand,Report_Filter,Report_Fixed,Report_Result,Report_FormattedResult>;
}
interface Report_RelatedMany {
  Report_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Report_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  Report_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  replicationbacklog_target_report: WebMappingRetrieve<ReplicationBacklog_Select,ReplicationBacklog_Expand,ReplicationBacklog_Filter,ReplicationBacklog_Fixed,ReplicationBacklog_Result,ReplicationBacklog_FormattedResult>;
  report_parent_report: WebMappingRetrieve<Report_Select,Report_Expand,Report_Filter,Report_Fixed,Report_Result,Report_FormattedResult>;
  report_reportcategories: WebMappingRetrieve<ReportCategory_Select,ReportCategory_Expand,ReportCategory_Filter,ReportCategory_Fixed,ReportCategory_Result,ReportCategory_FormattedResult>;
  report_reportentities: WebMappingRetrieve<ReportEntity_Select,ReportEntity_Expand,ReportEntity_Filter,ReportEntity_Fixed,ReportEntity_Result,ReportEntity_FormattedResult>;
  report_reportlink: WebMappingRetrieve<ReportLink_Select,ReportLink_Expand,ReportLink_Filter,ReportLink_Fixed,ReportLink_Result,ReportLink_FormattedResult>;
  report_reportlink_sub: WebMappingRetrieve<ReportLink_Select,ReportLink_Expand,ReportLink_Filter,ReportLink_Fixed,ReportLink_Result,ReportLink_FormattedResult>;
  report_reportvisibility: WebMappingRetrieve<ReportVisibility_Select,ReportVisibility_Expand,ReportVisibility_Filter,ReportVisibility_Fixed,ReportVisibility_Result,ReportVisibility_FormattedResult>;
  userentityinstancedata_report: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  reports: WebMappingRetrieve<Report_Select,Report_Expand,Report_Filter,Report_Fixed,Report_Result,Report_FormattedResult>;
}
interface WebEntitiesRelated {
  reports: WebMappingRelated<Report_RelatedOne,Report_RelatedMany>;
}
interface WebEntitiesCUDA {
  reports: WebMappingCUDA<Report_Create,Report_Update,Report_Select>;
}
