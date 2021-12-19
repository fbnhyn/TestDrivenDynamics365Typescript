interface msdyn_conversationtopic_conversation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_conversationtopic_conversationid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_conversationtopic_conversation_statecode | null;
  statuscode?: msdyn_conversationtopic_conversation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_conversationtopic_conversation_Relationships {
  msdyn_conversationtopic_conversation_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_conversationtopic_conversation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_conversationtopic_conversation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_conversationtopic_conversation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_conversationtopic_conversation_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_conversationtopic_conversation_SyncErrors?: SyncError_Result[] | null;
  msdyn_conversationtopic_conversation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_conversationtopic_conversation extends msdyn_conversationtopic_conversation_Base, msdyn_conversationtopic_conversation_Relationships {
  msdyn_conversationid_bind$msdyn_ocliveworkitems?: string | null;
  msdyn_conversationtopicid_bind$msdyn_conversationtopics?: string | null;
}
interface msdyn_conversationtopic_conversation_Create extends msdyn_conversationtopic_conversation {
}
interface msdyn_conversationtopic_conversation_Update extends msdyn_conversationtopic_conversation {
}
interface msdyn_conversationtopic_conversation_Select {
  createdby_guid: WebAttribute<msdyn_conversationtopic_conversation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_conversationtopic_conversation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_conversationtopic_conversation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_conversationtopic_conversation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_conversationtopic_conversation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_conversationtopic_conversation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_conversationtopic_conversation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_conversationid_guid: WebAttribute<msdyn_conversationtopic_conversation_Select, { msdyn_conversationid_guid: string | null }, { msdyn_conversationid_formatted?: string }>;
  msdyn_conversationtopic_conversationid: WebAttribute<msdyn_conversationtopic_conversation_Select, { msdyn_conversationtopic_conversationid: string | null }, {  }>;
  msdyn_conversationtopicid_guid: WebAttribute<msdyn_conversationtopic_conversation_Select, { msdyn_conversationtopicid_guid: string | null }, { msdyn_conversationtopicid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_conversationtopic_conversation_Select, { msdyn_name: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_conversationtopic_conversation_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_conversationtopic_conversation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_conversationtopic_conversation_Select, { statecode: msdyn_conversationtopic_conversation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_conversationtopic_conversation_Select, { statuscode: msdyn_conversationtopic_conversation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_conversationtopic_conversation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_conversationtopic_conversation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_conversationtopic_conversation_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_conversationtopic_conversation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_conversationid_guid: XQW.Guid;
  msdyn_conversationtopic_conversationid: XQW.Guid;
  msdyn_conversationtopicid_guid: XQW.Guid;
  msdyn_name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_conversationtopic_conversation_statecode;
  statuscode: msdyn_conversationtopic_conversation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_conversationtopic_conversation_Expand {
  createdby: WebExpand<msdyn_conversationtopic_conversation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_conversationtopic_conversation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_conversationtopic_conversation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_conversationtopic_conversation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_conversationid: WebExpand<msdyn_conversationtopic_conversation_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_conversationid: msdyn_ocliveworkitem_Result }>;
  msdyn_conversationtopic_conversation_AsyncOperations: WebExpand<msdyn_conversationtopic_conversation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_conversationtopic_conversation_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_conversationtopic_conversation_BulkDeleteFailures: WebExpand<msdyn_conversationtopic_conversation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_conversationtopic_conversation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_conversationtopic_conversation_MailboxTrackingFolders: WebExpand<msdyn_conversationtopic_conversation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_conversationtopic_conversation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_conversationtopic_conversation_PrincipalObjectAttributeAccesses: WebExpand<msdyn_conversationtopic_conversation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_conversationtopic_conversation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_conversationtopic_conversation_ProcessSession: WebExpand<msdyn_conversationtopic_conversation_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_conversationtopic_conversation_ProcessSession: ProcessSession_Result[] }>;
  msdyn_conversationtopic_conversation_SyncErrors: WebExpand<msdyn_conversationtopic_conversation_Expand, SyncError_Select, SyncError_Filter, { msdyn_conversationtopic_conversation_SyncErrors: SyncError_Result[] }>;
  msdyn_conversationtopic_conversation_UserEntityInstanceDatas: WebExpand<msdyn_conversationtopic_conversation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_conversationtopic_conversation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_conversationtopicid: WebExpand<msdyn_conversationtopic_conversation_Expand, msdyn_conversationtopic_Select, msdyn_conversationtopic_Filter, { msdyn_conversationtopicid: msdyn_conversationtopic_Result }>;
  organizationid: WebExpand<msdyn_conversationtopic_conversation_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_conversationtopic_conversation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_conversationid_formatted?: string;
  msdyn_conversationtopicid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_conversationtopic_conversation_Result extends msdyn_conversationtopic_conversation_Base, msdyn_conversationtopic_conversation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_conversationid_guid: string | null;
  msdyn_conversationtopicid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_conversationtopic_conversation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_conversationid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_conversationtopicid: WebMappingRetrieve<msdyn_conversationtopic_Select,msdyn_conversationtopic_Expand,msdyn_conversationtopic_Filter,msdyn_conversationtopic_Fixed,msdyn_conversationtopic_Result,msdyn_conversationtopic_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_conversationtopic_conversation_RelatedMany {
  msdyn_conversationtopic_conversation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_conversationtopic_conversation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_conversationtopic_conversation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_conversationtopic_conversation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_conversationtopic_conversation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_conversationtopic_conversation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_conversationtopic_conversation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_conversationtopic_conversations: WebMappingRetrieve<msdyn_conversationtopic_conversation_Select,msdyn_conversationtopic_conversation_Expand,msdyn_conversationtopic_conversation_Filter,msdyn_conversationtopic_conversation_Fixed,msdyn_conversationtopic_conversation_Result,msdyn_conversationtopic_conversation_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_conversationtopic_conversations: WebMappingRelated<msdyn_conversationtopic_conversation_RelatedOne,msdyn_conversationtopic_conversation_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_conversationtopic_conversations: WebMappingCUDA<msdyn_conversationtopic_conversation_Create,msdyn_conversationtopic_conversation_Update,msdyn_conversationtopic_conversation_Select>;
}
