interface msdyn_casetopic_incident_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_casetopic_incidentid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_casetopic_incident_statecode | null;
  statuscode?: msdyn_casetopic_incident_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_casetopic_incident_Relationships {
  msdyn_casetopic_incident_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_casetopic_incident_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_casetopic_incident_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_casetopic_incident_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_casetopic_incident_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_casetopic_incident_SyncErrors?: SyncError_Result[] | null;
  msdyn_casetopic_incident_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_casetopic_incident extends msdyn_casetopic_incident_Base, msdyn_casetopic_incident_Relationships {
  msdyn_casetopicid_bind$msdyn_casetopics?: string | null;
  msdyn_incidentid_bind$incidents?: string | null;
}
interface msdyn_casetopic_incident_Create extends msdyn_casetopic_incident {
}
interface msdyn_casetopic_incident_Update extends msdyn_casetopic_incident {
}
interface msdyn_casetopic_incident_Select {
  createdby_guid: WebAttribute<msdyn_casetopic_incident_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_casetopic_incident_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_casetopic_incident_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_casetopic_incident_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_casetopic_incident_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_casetopic_incident_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_casetopic_incident_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_casetopic_incidentid: WebAttribute<msdyn_casetopic_incident_Select, { msdyn_casetopic_incidentid: string | null }, {  }>;
  msdyn_casetopicid_guid: WebAttribute<msdyn_casetopic_incident_Select, { msdyn_casetopicid_guid: string | null }, { msdyn_casetopicid_formatted?: string }>;
  msdyn_incidentid_guid: WebAttribute<msdyn_casetopic_incident_Select, { msdyn_incidentid_guid: string | null }, { msdyn_incidentid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_casetopic_incident_Select, { msdyn_name: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_casetopic_incident_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_casetopic_incident_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_casetopic_incident_Select, { statecode: msdyn_casetopic_incident_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_casetopic_incident_Select, { statuscode: msdyn_casetopic_incident_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_casetopic_incident_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_casetopic_incident_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_casetopic_incident_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_casetopic_incident_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_casetopic_incidentid: XQW.Guid;
  msdyn_casetopicid_guid: XQW.Guid;
  msdyn_incidentid_guid: XQW.Guid;
  msdyn_name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_casetopic_incident_statecode;
  statuscode: msdyn_casetopic_incident_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_casetopic_incident_Expand {
  createdby: WebExpand<msdyn_casetopic_incident_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_casetopic_incident_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_casetopic_incident_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_casetopic_incident_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_casetopic_incident_AsyncOperations: WebExpand<msdyn_casetopic_incident_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_casetopic_incident_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_casetopic_incident_BulkDeleteFailures: WebExpand<msdyn_casetopic_incident_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_casetopic_incident_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_casetopic_incident_MailboxTrackingFolders: WebExpand<msdyn_casetopic_incident_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_casetopic_incident_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_casetopic_incident_PrincipalObjectAttributeAccesses: WebExpand<msdyn_casetopic_incident_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_casetopic_incident_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_casetopic_incident_ProcessSession: WebExpand<msdyn_casetopic_incident_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_casetopic_incident_ProcessSession: ProcessSession_Result[] }>;
  msdyn_casetopic_incident_SyncErrors: WebExpand<msdyn_casetopic_incident_Expand, SyncError_Select, SyncError_Filter, { msdyn_casetopic_incident_SyncErrors: SyncError_Result[] }>;
  msdyn_casetopic_incident_UserEntityInstanceDatas: WebExpand<msdyn_casetopic_incident_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_casetopic_incident_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_casetopicid: WebExpand<msdyn_casetopic_incident_Expand, msdyn_casetopic_Select, msdyn_casetopic_Filter, { msdyn_casetopicid: msdyn_casetopic_Result }>;
  msdyn_incidentid: WebExpand<msdyn_casetopic_incident_Expand, Incident_Select, Incident_Filter, { msdyn_incidentid: Incident_Result }>;
  organizationid: WebExpand<msdyn_casetopic_incident_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_casetopic_incident_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_casetopicid_formatted?: string;
  msdyn_incidentid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_casetopic_incident_Result extends msdyn_casetopic_incident_Base, msdyn_casetopic_incident_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_casetopicid_guid: string | null;
  msdyn_incidentid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_casetopic_incident_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_casetopicid: WebMappingRetrieve<msdyn_casetopic_Select,msdyn_casetopic_Expand,msdyn_casetopic_Filter,msdyn_casetopic_Fixed,msdyn_casetopic_Result,msdyn_casetopic_FormattedResult>;
  msdyn_incidentid: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_casetopic_incident_RelatedMany {
  msdyn_casetopic_incident_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_casetopic_incident_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_casetopic_incident_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_casetopic_incident_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_casetopic_incident_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_casetopic_incident_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_casetopic_incident_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_casetopic_incidents: WebMappingRetrieve<msdyn_casetopic_incident_Select,msdyn_casetopic_incident_Expand,msdyn_casetopic_incident_Filter,msdyn_casetopic_incident_Fixed,msdyn_casetopic_incident_Result,msdyn_casetopic_incident_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_casetopic_incidents: WebMappingRelated<msdyn_casetopic_incident_RelatedOne,msdyn_casetopic_incident_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_casetopic_incidents: WebMappingCUDA<msdyn_casetopic_incident_Create,msdyn_casetopic_incident_Update,msdyn_casetopic_incident_Select>;
}
