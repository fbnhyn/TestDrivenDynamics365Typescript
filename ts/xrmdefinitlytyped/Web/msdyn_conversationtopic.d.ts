interface msdyn_conversationtopic_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_conversationtopicid?: string | null;
  msdyn_name?: string | null;
  msdyn_similarityscore?: number | null;
  msdyn_topiccounts?: number | null;
  msdyn_topicdate?: Date | null;
  msdyn_topicpercentage?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_conversationtopic_statecode | null;
  statuscode?: msdyn_conversationtopic_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_conversationtopic_Relationships {
  msdyn_conversationtopic_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_conversationtopic_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_conversationtopic_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_conversationtopic_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_conversationtopic_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_conversationtopic_SyncErrors?: SyncError_Result[] | null;
  msdyn_conversationtopic_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_conversationtopic_msdyn_conversationtopic_conversation_conversationtopicid?: msdyn_conversationtopic_conversation_Result[] | null;
}
interface msdyn_conversationtopic extends msdyn_conversationtopic_Base, msdyn_conversationtopic_Relationships {
}
interface msdyn_conversationtopic_Create extends msdyn_conversationtopic {
}
interface msdyn_conversationtopic_Update extends msdyn_conversationtopic {
}
interface msdyn_conversationtopic_Select {
  createdby_guid: WebAttribute<msdyn_conversationtopic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_conversationtopic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_conversationtopic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_conversationtopic_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_conversationtopic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_conversationtopic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_conversationtopic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_conversationtopicid: WebAttribute<msdyn_conversationtopic_Select, { msdyn_conversationtopicid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_conversationtopic_Select, { msdyn_name: string | null }, {  }>;
  msdyn_similarityscore: WebAttribute<msdyn_conversationtopic_Select, { msdyn_similarityscore: number | null }, {  }>;
  msdyn_topiccounts: WebAttribute<msdyn_conversationtopic_Select, { msdyn_topiccounts: number | null }, {  }>;
  msdyn_topicdate: WebAttribute<msdyn_conversationtopic_Select, { msdyn_topicdate: Date | null }, { msdyn_topicdate_formatted?: string }>;
  msdyn_topicpercentage: WebAttribute<msdyn_conversationtopic_Select, { msdyn_topicpercentage: number | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_conversationtopic_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_conversationtopic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_conversationtopic_Select, { statecode: msdyn_conversationtopic_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_conversationtopic_Select, { statuscode: msdyn_conversationtopic_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_conversationtopic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_conversationtopic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_conversationtopic_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_conversationtopic_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_conversationtopicid: XQW.Guid;
  msdyn_name: string;
  msdyn_similarityscore: any;
  msdyn_topiccounts: number;
  msdyn_topicdate: Date;
  msdyn_topicpercentage: any;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_conversationtopic_statecode;
  statuscode: msdyn_conversationtopic_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_conversationtopic_Expand {
  createdby: WebExpand<msdyn_conversationtopic_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_conversationtopic_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_conversationtopic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_conversationtopic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_conversationtopic_AsyncOperations: WebExpand<msdyn_conversationtopic_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_conversationtopic_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_conversationtopic_BulkDeleteFailures: WebExpand<msdyn_conversationtopic_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_conversationtopic_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_conversationtopic_MailboxTrackingFolders: WebExpand<msdyn_conversationtopic_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_conversationtopic_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_conversationtopic_PrincipalObjectAttributeAccesses: WebExpand<msdyn_conversationtopic_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_conversationtopic_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_conversationtopic_ProcessSession: WebExpand<msdyn_conversationtopic_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_conversationtopic_ProcessSession: ProcessSession_Result[] }>;
  msdyn_conversationtopic_SyncErrors: WebExpand<msdyn_conversationtopic_Expand, SyncError_Select, SyncError_Filter, { msdyn_conversationtopic_SyncErrors: SyncError_Result[] }>;
  msdyn_conversationtopic_UserEntityInstanceDatas: WebExpand<msdyn_conversationtopic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_conversationtopic_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_conversationtopic_msdyn_conversationtopic_conversation_conversationtopicid: WebExpand<msdyn_conversationtopic_Expand, msdyn_conversationtopic_conversation_Select, msdyn_conversationtopic_conversation_Filter, { msdyn_msdyn_conversationtopic_msdyn_conversationtopic_conversation_conversationtopicid: msdyn_conversationtopic_conversation_Result[] }>;
  organizationid: WebExpand<msdyn_conversationtopic_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_conversationtopic_FormattedResult {
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
interface msdyn_conversationtopic_Result extends msdyn_conversationtopic_Base, msdyn_conversationtopic_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_conversationtopic_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_conversationtopic_RelatedMany {
  msdyn_conversationtopic_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_conversationtopic_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_conversationtopic_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_conversationtopic_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_conversationtopic_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_conversationtopic_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_conversationtopic_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_conversationtopic_msdyn_conversationtopic_conversation_conversationtopicid: WebMappingRetrieve<msdyn_conversationtopic_conversation_Select,msdyn_conversationtopic_conversation_Expand,msdyn_conversationtopic_conversation_Filter,msdyn_conversationtopic_conversation_Fixed,msdyn_conversationtopic_conversation_Result,msdyn_conversationtopic_conversation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_conversationtopics: WebMappingRetrieve<msdyn_conversationtopic_Select,msdyn_conversationtopic_Expand,msdyn_conversationtopic_Filter,msdyn_conversationtopic_Fixed,msdyn_conversationtopic_Result,msdyn_conversationtopic_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_conversationtopics: WebMappingRelated<msdyn_conversationtopic_RelatedOne,msdyn_conversationtopic_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_conversationtopics: WebMappingCUDA<msdyn_conversationtopic_Create,msdyn_conversationtopic_Update,msdyn_conversationtopic_Select>;
}
