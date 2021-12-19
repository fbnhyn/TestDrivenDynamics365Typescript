interface msdyn_casetopic_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_casetopicid?: string | null;
  msdyn_name?: string | null;
  msdyn_similarityscore?: number | null;
  msdyn_topiccounts?: number | null;
  msdyn_topicdate?: Date | null;
  msdyn_topicpercentage?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_casetopic_statecode | null;
  statuscode?: msdyn_casetopic_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_casetopic_Relationships {
  msdyn_casetopic_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_casetopic_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_casetopic_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_casetopic_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_casetopic_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_casetopic_SyncErrors?: SyncError_Result[] | null;
  msdyn_casetopic_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid?: msdyn_casetopic_incident_Result[] | null;
}
interface msdyn_casetopic extends msdyn_casetopic_Base, msdyn_casetopic_Relationships {
}
interface msdyn_casetopic_Create extends msdyn_casetopic {
}
interface msdyn_casetopic_Update extends msdyn_casetopic {
}
interface msdyn_casetopic_Select {
  createdby_guid: WebAttribute<msdyn_casetopic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_casetopic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_casetopic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_casetopic_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_casetopic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_casetopic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_casetopic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_casetopicid: WebAttribute<msdyn_casetopic_Select, { msdyn_casetopicid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_casetopic_Select, { msdyn_name: string | null }, {  }>;
  msdyn_similarityscore: WebAttribute<msdyn_casetopic_Select, { msdyn_similarityscore: number | null }, {  }>;
  msdyn_topiccounts: WebAttribute<msdyn_casetopic_Select, { msdyn_topiccounts: number | null }, {  }>;
  msdyn_topicdate: WebAttribute<msdyn_casetopic_Select, { msdyn_topicdate: Date | null }, { msdyn_topicdate_formatted?: string }>;
  msdyn_topicpercentage: WebAttribute<msdyn_casetopic_Select, { msdyn_topicpercentage: number | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_casetopic_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_casetopic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_casetopic_Select, { statecode: msdyn_casetopic_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_casetopic_Select, { statuscode: msdyn_casetopic_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_casetopic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_casetopic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_casetopic_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_casetopic_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_casetopicid: XQW.Guid;
  msdyn_name: string;
  msdyn_similarityscore: any;
  msdyn_topiccounts: number;
  msdyn_topicdate: Date;
  msdyn_topicpercentage: any;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_casetopic_statecode;
  statuscode: msdyn_casetopic_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_casetopic_Expand {
  createdby: WebExpand<msdyn_casetopic_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_casetopic_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_casetopic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_casetopic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_casetopic_AsyncOperations: WebExpand<msdyn_casetopic_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_casetopic_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_casetopic_BulkDeleteFailures: WebExpand<msdyn_casetopic_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_casetopic_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_casetopic_MailboxTrackingFolders: WebExpand<msdyn_casetopic_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_casetopic_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_casetopic_PrincipalObjectAttributeAccesses: WebExpand<msdyn_casetopic_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_casetopic_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_casetopic_ProcessSession: WebExpand<msdyn_casetopic_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_casetopic_ProcessSession: ProcessSession_Result[] }>;
  msdyn_casetopic_SyncErrors: WebExpand<msdyn_casetopic_Expand, SyncError_Select, SyncError_Filter, { msdyn_casetopic_SyncErrors: SyncError_Result[] }>;
  msdyn_casetopic_UserEntityInstanceDatas: WebExpand<msdyn_casetopic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_casetopic_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid: WebExpand<msdyn_casetopic_Expand, msdyn_casetopic_incident_Select, msdyn_casetopic_incident_Filter, { msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid: msdyn_casetopic_incident_Result[] }>;
  organizationid: WebExpand<msdyn_casetopic_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_casetopic_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_topicdate_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_casetopic_Result extends msdyn_casetopic_Base, msdyn_casetopic_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_casetopic_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_casetopic_RelatedMany {
  msdyn_casetopic_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_casetopic_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_casetopic_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_casetopic_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_casetopic_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_casetopic_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_casetopic_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_casetopic_msdyn_casetopic_incident_casetopicid: WebMappingRetrieve<msdyn_casetopic_incident_Select,msdyn_casetopic_incident_Expand,msdyn_casetopic_incident_Filter,msdyn_casetopic_incident_Fixed,msdyn_casetopic_incident_Result,msdyn_casetopic_incident_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_casetopics: WebMappingRetrieve<msdyn_casetopic_Select,msdyn_casetopic_Expand,msdyn_casetopic_Filter,msdyn_casetopic_Fixed,msdyn_casetopic_Result,msdyn_casetopic_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_casetopics: WebMappingRelated<msdyn_casetopic_RelatedOne,msdyn_casetopic_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_casetopics: WebMappingCUDA<msdyn_casetopic_Create,msdyn_casetopic_Update,msdyn_casetopic_Select>;
}
