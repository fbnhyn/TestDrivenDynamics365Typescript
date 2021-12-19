interface msdyn_fieldservicesystemjob_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_conditioncode?: number | null;
  msdyn_exceptionmessage?: string | null;
  msdyn_exceptiontrace?: string | null;
  msdyn_fieldservicesystemjobid?: string | null;
  msdyn_inputparameter?: string | null;
  msdyn_inputparametertype?: msdyn_parametertype | null;
  msdyn_jobname?: string | null;
  msdyn_jobstatus?: msdyn_jobstatus | null;
  msdyn_jobtype?: number | null;
  msdyn_outputparameter?: string | null;
  msdyn_outputparametertype?: msdyn_parametertype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_fieldservicesystemjob_statecode | null;
  statuscode?: msdyn_fieldservicesystemjob_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_fieldservicesystemjob_Relationships {
  msdyn_fieldservicesystemjob_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_fieldservicesystemjob_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_fieldservicesystemjob_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_fieldservicesystemjob_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_fieldservicesystemjob_SyncErrors?: SyncError_Result[] | null;
  msdyn_fieldservicesystemjob_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_fieldservicesystemjob extends msdyn_fieldservicesystemjob_Base, msdyn_fieldservicesystemjob_Relationships {
  msdyn_ownerid_bind$systemusers?: string | null;
}
interface msdyn_fieldservicesystemjob_Create extends msdyn_fieldservicesystemjob {
}
interface msdyn_fieldservicesystemjob_Update extends msdyn_fieldservicesystemjob {
}
interface msdyn_fieldservicesystemjob_Select {
  createdby_guid: WebAttribute<msdyn_fieldservicesystemjob_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_fieldservicesystemjob_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_fieldservicesystemjob_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_fieldservicesystemjob_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_fieldservicesystemjob_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_fieldservicesystemjob_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_fieldservicesystemjob_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_conditioncode: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_conditioncode: number | null }, {  }>;
  msdyn_exceptionmessage: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_exceptionmessage: string | null }, {  }>;
  msdyn_exceptiontrace: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_exceptiontrace: string | null }, {  }>;
  msdyn_fieldservicesystemjobid: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_fieldservicesystemjobid: string | null }, {  }>;
  msdyn_inputparameter: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_inputparameter: string | null }, {  }>;
  msdyn_inputparametertype: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_inputparametertype: msdyn_parametertype | null }, { msdyn_inputparametertype_formatted?: string }>;
  msdyn_jobname: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_jobname: string | null }, {  }>;
  msdyn_jobstatus: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_jobstatus: msdyn_jobstatus | null }, { msdyn_jobstatus_formatted?: string }>;
  msdyn_jobtype: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_jobtype: number | null }, {  }>;
  msdyn_outputparameter: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_outputparameter: string | null }, {  }>;
  msdyn_outputparametertype: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_outputparametertype: msdyn_parametertype | null }, { msdyn_outputparametertype_formatted?: string }>;
  msdyn_ownerid_guid: WebAttribute<msdyn_fieldservicesystemjob_Select, { msdyn_ownerid_guid: string | null }, { msdyn_ownerid_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_fieldservicesystemjob_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_fieldservicesystemjob_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_fieldservicesystemjob_Select, { statecode: msdyn_fieldservicesystemjob_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_fieldservicesystemjob_Select, { statuscode: msdyn_fieldservicesystemjob_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_fieldservicesystemjob_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_fieldservicesystemjob_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_fieldservicesystemjob_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_fieldservicesystemjob_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_conditioncode: number;
  msdyn_exceptionmessage: string;
  msdyn_exceptiontrace: string;
  msdyn_fieldservicesystemjobid: XQW.Guid;
  msdyn_inputparameter: string;
  msdyn_inputparametertype: msdyn_parametertype;
  msdyn_jobname: string;
  msdyn_jobstatus: msdyn_jobstatus;
  msdyn_jobtype: number;
  msdyn_outputparameter: string;
  msdyn_outputparametertype: msdyn_parametertype;
  msdyn_ownerid_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_fieldservicesystemjob_statecode;
  statuscode: msdyn_fieldservicesystemjob_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_fieldservicesystemjob_Expand {
  createdby: WebExpand<msdyn_fieldservicesystemjob_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_fieldservicesystemjob_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_fieldservicesystemjob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_fieldservicesystemjob_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_fieldservicesystemjob_AsyncOperations: WebExpand<msdyn_fieldservicesystemjob_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_fieldservicesystemjob_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_fieldservicesystemjob_BulkDeleteFailures: WebExpand<msdyn_fieldservicesystemjob_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_fieldservicesystemjob_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_fieldservicesystemjob_MailboxTrackingFolders: WebExpand<msdyn_fieldservicesystemjob_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_fieldservicesystemjob_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses: WebExpand<msdyn_fieldservicesystemjob_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_fieldservicesystemjob_ProcessSession: WebExpand<msdyn_fieldservicesystemjob_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_fieldservicesystemjob_ProcessSession: ProcessSession_Result[] }>;
  msdyn_fieldservicesystemjob_SyncErrors: WebExpand<msdyn_fieldservicesystemjob_Expand, SyncError_Select, SyncError_Filter, { msdyn_fieldservicesystemjob_SyncErrors: SyncError_Result[] }>;
  msdyn_fieldservicesystemjob_UserEntityInstanceDatas: WebExpand<msdyn_fieldservicesystemjob_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_fieldservicesystemjob_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ownerid: WebExpand<msdyn_fieldservicesystemjob_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_ownerid: SystemUser_Result }>;
  organizationid: WebExpand<msdyn_fieldservicesystemjob_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_fieldservicesystemjob_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_inputparametertype_formatted?: string;
  msdyn_jobstatus_formatted?: string;
  msdyn_outputparametertype_formatted?: string;
  msdyn_ownerid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_fieldservicesystemjob_Result extends msdyn_fieldservicesystemjob_Base, msdyn_fieldservicesystemjob_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_ownerid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_fieldservicesystemjob_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_fieldservicesystemjob_RelatedMany {
  msdyn_fieldservicesystemjob_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_fieldservicesystemjob_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_fieldservicesystemjob_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_fieldservicesystemjob_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_fieldservicesystemjob_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_fieldservicesystemjob_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_fieldservicesystemjob_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_fieldservicesystemjobs: WebMappingRetrieve<msdyn_fieldservicesystemjob_Select,msdyn_fieldservicesystemjob_Expand,msdyn_fieldservicesystemjob_Filter,msdyn_fieldservicesystemjob_Fixed,msdyn_fieldservicesystemjob_Result,msdyn_fieldservicesystemjob_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_fieldservicesystemjobs: WebMappingRelated<msdyn_fieldservicesystemjob_RelatedOne,msdyn_fieldservicesystemjob_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_fieldservicesystemjobs: WebMappingCUDA<msdyn_fieldservicesystemjob_Create,msdyn_fieldservicesystemjob_Update,msdyn_fieldservicesystemjob_Select>;
}
