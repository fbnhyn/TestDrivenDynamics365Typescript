interface ContactInvoices_Base extends WebEntity {
  contactid?: string | null;
  contactinvoiceid?: string | null;
  importsequencenumber?: number | null;
  invoiceid?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ContactInvoices_Relationships {
  contactinvoices_AsyncOperations?: AsyncOperation_Result[] | null;
  contactinvoices_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  contactinvoices_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  contactinvoices_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  contactinvoices_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  contactinvoices_association?: Contact_Result[] | null;
}
interface ContactInvoices extends ContactInvoices_Base, ContactInvoices_Relationships {
}
interface ContactInvoices_Create extends ContactInvoices {
}
interface ContactInvoices_Update extends ContactInvoices {
}
interface ContactInvoices_Select {
  contactid: WebAttribute<ContactInvoices_Select, { contactid: string | null }, {  }>;
  contactinvoiceid: WebAttribute<ContactInvoices_Select, { contactinvoiceid: string | null }, {  }>;
  importsequencenumber: WebAttribute<ContactInvoices_Select, { importsequencenumber: number | null }, {  }>;
  invoiceid: WebAttribute<ContactInvoices_Select, { invoiceid: string | null }, {  }>;
  name: WebAttribute<ContactInvoices_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ContactInvoices_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<ContactInvoices_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ContactInvoices_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ContactInvoices_Select, { versionnumber: number | null }, {  }>;
}
interface ContactInvoices_Filter {
  contactid: XQW.Guid;
  contactinvoiceid: XQW.Guid;
  importsequencenumber: number;
  invoiceid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ContactInvoices_Expand {
  contactinvoices_AsyncOperations: WebExpand<ContactInvoices_Expand, AsyncOperation_Select, AsyncOperation_Filter, { contactinvoices_AsyncOperations: AsyncOperation_Result[] }>;
  contactinvoices_BulkDeleteFailures: WebExpand<ContactInvoices_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { contactinvoices_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  contactinvoices_MailboxTrackingFolders: WebExpand<ContactInvoices_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { contactinvoices_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  contactinvoices_PrincipalObjectAttributeAccesses: WebExpand<ContactInvoices_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { contactinvoices_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  contactinvoices_UserEntityInstanceDatas: WebExpand<ContactInvoices_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { contactinvoices_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  contactinvoices_association: WebExpand<ContactInvoices_Expand, Contact_Select, Contact_Filter, { contactinvoices_association: Contact_Result[] }>;
}
interface ContactInvoices_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface ContactInvoices_Result extends ContactInvoices_Base, ContactInvoices_Relationships {
  "@odata.etag": string;
}
interface ContactInvoices_RelatedOne {
}
interface ContactInvoices_RelatedMany {
  contactinvoices_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  contactinvoices_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  contactinvoices_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  contactinvoices_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  contactinvoices_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  contactinvoices_association: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface WebEntitiesRetrieve {
  contactinvoicescollection: WebMappingRetrieve<ContactInvoices_Select,ContactInvoices_Expand,ContactInvoices_Filter,ContactInvoices_Fixed,ContactInvoices_Result,ContactInvoices_FormattedResult>;
}
interface WebEntitiesRelated {
  contactinvoicescollection: WebMappingRelated<ContactInvoices_RelatedOne,ContactInvoices_RelatedMany>;
}
interface WebEntitiesCUDA {
  contactinvoicescollection: WebMappingCUDA<ContactInvoices_Create,ContactInvoices_Update,ContactInvoices_Select>;
}
