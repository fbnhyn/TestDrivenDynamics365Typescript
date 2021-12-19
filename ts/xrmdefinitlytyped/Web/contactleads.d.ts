interface ContactLeads_Base extends WebEntity {
  contactid?: string | null;
  contactleadid?: string | null;
  importsequencenumber?: number | null;
  leadid?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ContactLeads_Relationships {
  contactleads_AsyncOperations?: AsyncOperation_Result[] | null;
  contactleads_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  contactleads_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  contactleads_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  contactleads_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  contactleads_association?: Lead_Result[] | null;
}
interface ContactLeads extends ContactLeads_Base, ContactLeads_Relationships {
}
interface ContactLeads_Create extends ContactLeads {
}
interface ContactLeads_Update extends ContactLeads {
}
interface ContactLeads_Select {
  contactid: WebAttribute<ContactLeads_Select, { contactid: string | null }, {  }>;
  contactleadid: WebAttribute<ContactLeads_Select, { contactleadid: string | null }, {  }>;
  importsequencenumber: WebAttribute<ContactLeads_Select, { importsequencenumber: number | null }, {  }>;
  leadid: WebAttribute<ContactLeads_Select, { leadid: string | null }, {  }>;
  name: WebAttribute<ContactLeads_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ContactLeads_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ContactLeads_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ContactLeads_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ContactLeads_Select, { versionnumber: number | null }, {  }>;
}
interface ContactLeads_Filter {
  contactid: XQW.Guid;
  contactleadid: XQW.Guid;
  importsequencenumber: number;
  leadid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ContactLeads_Expand {
  contactleads_AsyncOperations: WebExpand<ContactLeads_Expand, AsyncOperation_Select, AsyncOperation_Filter, { contactleads_AsyncOperations: AsyncOperation_Result[] }>;
  contactleads_BulkDeleteFailures: WebExpand<ContactLeads_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { contactleads_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  contactleads_MailboxTrackingFolders: WebExpand<ContactLeads_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { contactleads_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  contactleads_PrincipalObjectAttributeAccesses: WebExpand<ContactLeads_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { contactleads_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  contactleads_UserEntityInstanceDatas: WebExpand<ContactLeads_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { contactleads_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  contactleads_association: WebExpand<ContactLeads_Expand, Lead_Select, Lead_Filter, { contactleads_association: Lead_Result[] }>;
}
interface ContactLeads_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface ContactLeads_Result extends ContactLeads_Base, ContactLeads_Relationships {
  "@odata.etag": string;
}
interface ContactLeads_RelatedOne {
}
interface ContactLeads_RelatedMany {
  contactleads_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  contactleads_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  contactleads_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  contactleads_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  contactleads_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  contactleads_association: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
}
interface WebEntitiesRetrieve {
  contactleadscollection: WebMappingRetrieve<ContactLeads_Select,ContactLeads_Expand,ContactLeads_Filter,ContactLeads_Fixed,ContactLeads_Result,ContactLeads_FormattedResult>;
}
interface WebEntitiesRelated {
  contactleadscollection: WebMappingRelated<ContactLeads_RelatedOne,ContactLeads_RelatedMany>;
}
interface WebEntitiesCUDA {
  contactleadscollection: WebMappingCUDA<ContactLeads_Create,ContactLeads_Update,ContactLeads_Select>;
}
