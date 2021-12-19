interface ProvisionLanguageForUser_Base extends WebEntity {
  asyncoperationid?: string | null;
  lcid?: number | null;
  name?: string | null;
  operationstatus?: provisionlanguageforuser_operationstatus | null;
  organizationid?: string | null;
  provisionlanguageforuserid?: string | null;
  userid?: string | null;
}
interface ProvisionLanguageForUser_Relationships {
  provisionlanguageforuser_AsyncOperations?: AsyncOperation_Result[] | null;
  provisionlanguageforuser_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  provisionlanguageforuser_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  provisionlanguageforuser_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  provisionlanguageforuser_ProcessSession?: ProcessSession_Result[] | null;
  provisionlanguageforuser_SyncErrors?: SyncError_Result[] | null;
  provisionlanguageforuser_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface ProvisionLanguageForUser extends ProvisionLanguageForUser_Base, ProvisionLanguageForUser_Relationships {
}
interface ProvisionLanguageForUser_Create extends ProvisionLanguageForUser {
}
interface ProvisionLanguageForUser_Update extends ProvisionLanguageForUser {
}
interface ProvisionLanguageForUser_Select {
  asyncoperationid: WebAttribute<ProvisionLanguageForUser_Select, { asyncoperationid: string | null }, {  }>;
  lcid: WebAttribute<ProvisionLanguageForUser_Select, { lcid: number | null }, {  }>;
  name: WebAttribute<ProvisionLanguageForUser_Select, { name: string | null }, {  }>;
  operationstatus: WebAttribute<ProvisionLanguageForUser_Select, { operationstatus: provisionlanguageforuser_operationstatus | null }, { operationstatus_formatted?: string }>;
  organizationid: WebAttribute<ProvisionLanguageForUser_Select, { organizationid: string | null }, {  }>;
  provisionlanguageforuserid: WebAttribute<ProvisionLanguageForUser_Select, { provisionlanguageforuserid: string | null }, {  }>;
  userid: WebAttribute<ProvisionLanguageForUser_Select, { userid: string | null }, {  }>;
}
interface ProvisionLanguageForUser_Filter {
  asyncoperationid: XQW.Guid;
  lcid: number;
  name: string;
  operationstatus: provisionlanguageforuser_operationstatus;
  organizationid: XQW.Guid;
  provisionlanguageforuserid: XQW.Guid;
  userid: XQW.Guid;
}
interface ProvisionLanguageForUser_Expand {
  provisionlanguageforuser_AsyncOperations: WebExpand<ProvisionLanguageForUser_Expand, AsyncOperation_Select, AsyncOperation_Filter, { provisionlanguageforuser_AsyncOperations: AsyncOperation_Result[] }>;
  provisionlanguageforuser_BulkDeleteFailures: WebExpand<ProvisionLanguageForUser_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { provisionlanguageforuser_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  provisionlanguageforuser_MailboxTrackingFolders: WebExpand<ProvisionLanguageForUser_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { provisionlanguageforuser_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  provisionlanguageforuser_PrincipalObjectAttributeAccesses: WebExpand<ProvisionLanguageForUser_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { provisionlanguageforuser_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  provisionlanguageforuser_ProcessSession: WebExpand<ProvisionLanguageForUser_Expand, ProcessSession_Select, ProcessSession_Filter, { provisionlanguageforuser_ProcessSession: ProcessSession_Result[] }>;
  provisionlanguageforuser_SyncErrors: WebExpand<ProvisionLanguageForUser_Expand, SyncError_Select, SyncError_Filter, { provisionlanguageforuser_SyncErrors: SyncError_Result[] }>;
  provisionlanguageforuser_UserEntityInstanceDatas: WebExpand<ProvisionLanguageForUser_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { provisionlanguageforuser_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface ProvisionLanguageForUser_FormattedResult {
  operationstatus_formatted?: string;
}
interface ProvisionLanguageForUser_Result extends ProvisionLanguageForUser_Base, ProvisionLanguageForUser_Relationships {
  "@odata.etag": string;
}
interface ProvisionLanguageForUser_RelatedOne {
}
interface ProvisionLanguageForUser_RelatedMany {
  provisionlanguageforuser_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  provisionlanguageforuser_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  provisionlanguageforuser_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  provisionlanguageforuser_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  provisionlanguageforuser_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  provisionlanguageforuser_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  provisionlanguageforuser_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  provisionlanguageforusers: WebMappingRetrieve<ProvisionLanguageForUser_Select,ProvisionLanguageForUser_Expand,ProvisionLanguageForUser_Filter,ProvisionLanguageForUser_Fixed,ProvisionLanguageForUser_Result,ProvisionLanguageForUser_FormattedResult>;
}
interface WebEntitiesRelated {
  provisionlanguageforusers: WebMappingRelated<ProvisionLanguageForUser_RelatedOne,ProvisionLanguageForUser_RelatedMany>;
}
interface WebEntitiesCUDA {
  provisionlanguageforusers: WebMappingCUDA<ProvisionLanguageForUser_Create,ProvisionLanguageForUser_Update,ProvisionLanguageForUser_Select>;
}
