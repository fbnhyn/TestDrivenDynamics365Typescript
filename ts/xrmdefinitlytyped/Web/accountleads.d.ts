interface AccountLeads_Base extends WebEntity {
  accountid?: string | null;
  accountleadid?: string | null;
  importsequencenumber?: number | null;
  leadid?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface AccountLeads_Relationships {
  accountleads_AsyncOperations?: AsyncOperation_Result[] | null;
  accountleads_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  accountleads_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  accountleads_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  accountleads_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  accountleads_association?: Lead_Result[] | null;
}
interface AccountLeads extends AccountLeads_Base, AccountLeads_Relationships {
}
interface AccountLeads_Create extends AccountLeads {
}
interface AccountLeads_Update extends AccountLeads {
}
interface AccountLeads_Select {
  accountid: WebAttribute<AccountLeads_Select, { accountid: string | null }, {  }>;
  accountleadid: WebAttribute<AccountLeads_Select, { accountleadid: string | null }, {  }>;
  importsequencenumber: WebAttribute<AccountLeads_Select, { importsequencenumber: number | null }, {  }>;
  leadid: WebAttribute<AccountLeads_Select, { leadid: string | null }, {  }>;
  name: WebAttribute<AccountLeads_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<AccountLeads_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<AccountLeads_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<AccountLeads_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<AccountLeads_Select, { versionnumber: number | null }, {  }>;
}
interface AccountLeads_Filter {
  accountid: XQW.Guid;
  accountleadid: XQW.Guid;
  importsequencenumber: number;
  leadid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface AccountLeads_Expand {
  accountleads_AsyncOperations: WebExpand<AccountLeads_Expand, AsyncOperation_Select, AsyncOperation_Filter, { accountleads_AsyncOperations: AsyncOperation_Result[] }>;
  accountleads_BulkDeleteFailures: WebExpand<AccountLeads_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { accountleads_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  accountleads_MailboxTrackingFolders: WebExpand<AccountLeads_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { accountleads_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  accountleads_PrincipalObjectAttributeAccesses: WebExpand<AccountLeads_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { accountleads_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  accountleads_UserEntityInstanceDatas: WebExpand<AccountLeads_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { accountleads_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  accountleads_association: WebExpand<AccountLeads_Expand, Lead_Select, Lead_Filter, { accountleads_association: Lead_Result[] }>;
}
interface AccountLeads_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface AccountLeads_Result extends AccountLeads_Base, AccountLeads_Relationships {
  "@odata.etag": string;
}
interface AccountLeads_RelatedOne {
}
interface AccountLeads_RelatedMany {
  accountleads_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  accountleads_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  accountleads_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  accountleads_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  accountleads_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  accountleads_association: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
}
interface WebEntitiesRetrieve {
  accountleadscollection: WebMappingRetrieve<AccountLeads_Select,AccountLeads_Expand,AccountLeads_Filter,AccountLeads_Fixed,AccountLeads_Result,AccountLeads_FormattedResult>;
}
interface WebEntitiesRelated {
  accountleadscollection: WebMappingRelated<AccountLeads_RelatedOne,AccountLeads_RelatedMany>;
}
interface WebEntitiesCUDA {
  accountleadscollection: WebMappingCUDA<AccountLeads_Create,AccountLeads_Update,AccountLeads_Select>;
}
