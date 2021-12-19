interface ContactQuotes_Base extends WebEntity {
  contactid?: string | null;
  contactquoteid?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  quoteid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ContactQuotes_Relationships {
  contactquotes_AsyncOperations?: AsyncOperation_Result[] | null;
  contactquotes_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  contactquotes_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  contactquotes_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  contactquotes_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  contactquotes_association?: Contact_Result[] | null;
}
interface ContactQuotes extends ContactQuotes_Base, ContactQuotes_Relationships {
}
interface ContactQuotes_Create extends ContactQuotes {
}
interface ContactQuotes_Update extends ContactQuotes {
}
interface ContactQuotes_Select {
  contactid: WebAttribute<ContactQuotes_Select, { contactid: string | null }, {  }>;
  contactquoteid: WebAttribute<ContactQuotes_Select, { contactquoteid: string | null }, {  }>;
  importsequencenumber: WebAttribute<ContactQuotes_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<ContactQuotes_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ContactQuotes_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  quoteid: WebAttribute<ContactQuotes_Select, { quoteid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ContactQuotes_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ContactQuotes_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ContactQuotes_Select, { versionnumber: number | null }, {  }>;
}
interface ContactQuotes_Filter {
  contactid: XQW.Guid;
  contactquoteid: XQW.Guid;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  quoteid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ContactQuotes_Expand {
  contactquotes_AsyncOperations: WebExpand<ContactQuotes_Expand, AsyncOperation_Select, AsyncOperation_Filter, { contactquotes_AsyncOperations: AsyncOperation_Result[] }>;
  contactquotes_BulkDeleteFailures: WebExpand<ContactQuotes_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { contactquotes_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  contactquotes_MailboxTrackingFolders: WebExpand<ContactQuotes_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { contactquotes_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  contactquotes_PrincipalObjectAttributeAccesses: WebExpand<ContactQuotes_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { contactquotes_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  contactquotes_UserEntityInstanceDatas: WebExpand<ContactQuotes_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { contactquotes_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  contactquotes_association: WebExpand<ContactQuotes_Expand, Contact_Select, Contact_Filter, { contactquotes_association: Contact_Result[] }>;
}
interface ContactQuotes_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface ContactQuotes_Result extends ContactQuotes_Base, ContactQuotes_Relationships {
  "@odata.etag": string;
}
interface ContactQuotes_RelatedOne {
}
interface ContactQuotes_RelatedMany {
  contactquotes_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  contactquotes_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  contactquotes_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  contactquotes_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  contactquotes_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  contactquotes_association: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface WebEntitiesRetrieve {
  contactquotescollection: WebMappingRetrieve<ContactQuotes_Select,ContactQuotes_Expand,ContactQuotes_Filter,ContactQuotes_Fixed,ContactQuotes_Result,ContactQuotes_FormattedResult>;
}
interface WebEntitiesRelated {
  contactquotescollection: WebMappingRelated<ContactQuotes_RelatedOne,ContactQuotes_RelatedMany>;
}
interface WebEntitiesCUDA {
  contactquotescollection: WebMappingCUDA<ContactQuotes_Create,ContactQuotes_Update,ContactQuotes_Select>;
}
