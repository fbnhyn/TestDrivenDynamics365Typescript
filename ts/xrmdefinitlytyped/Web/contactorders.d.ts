interface ContactOrders_Base extends WebEntity {
  contactid?: string | null;
  contactorderid?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  salesorderid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ContactOrders_Relationships {
  contactorders_AsyncOperations?: AsyncOperation_Result[] | null;
  contactorders_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  contactorders_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  contactorders_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  contactorders_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  contactorders_association?: Contact_Result[] | null;
}
interface ContactOrders extends ContactOrders_Base, ContactOrders_Relationships {
}
interface ContactOrders_Create extends ContactOrders {
}
interface ContactOrders_Update extends ContactOrders {
}
interface ContactOrders_Select {
  contactid: WebAttribute<ContactOrders_Select, { contactid: string | null }, {  }>;
  contactorderid: WebAttribute<ContactOrders_Select, { contactorderid: string | null }, {  }>;
  importsequencenumber: WebAttribute<ContactOrders_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<ContactOrders_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ContactOrders_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  salesorderid: WebAttribute<ContactOrders_Select, { salesorderid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ContactOrders_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ContactOrders_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ContactOrders_Select, { versionnumber: number | null }, {  }>;
}
interface ContactOrders_Filter {
  contactid: XQW.Guid;
  contactorderid: XQW.Guid;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  salesorderid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ContactOrders_Expand {
  contactorders_AsyncOperations: WebExpand<ContactOrders_Expand, AsyncOperation_Select, AsyncOperation_Filter, { contactorders_AsyncOperations: AsyncOperation_Result[] }>;
  contactorders_BulkDeleteFailures: WebExpand<ContactOrders_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { contactorders_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  contactorders_MailboxTrackingFolders: WebExpand<ContactOrders_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { contactorders_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  contactorders_PrincipalObjectAttributeAccesses: WebExpand<ContactOrders_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { contactorders_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  contactorders_UserEntityInstanceDatas: WebExpand<ContactOrders_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { contactorders_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  contactorders_association: WebExpand<ContactOrders_Expand, Contact_Select, Contact_Filter, { contactorders_association: Contact_Result[] }>;
}
interface ContactOrders_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface ContactOrders_Result extends ContactOrders_Base, ContactOrders_Relationships {
  "@odata.etag": string;
}
interface ContactOrders_RelatedOne {
}
interface ContactOrders_RelatedMany {
  contactorders_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  contactorders_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  contactorders_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  contactorders_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  contactorders_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  contactorders_association: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
}
interface WebEntitiesRetrieve {
  contactorderscollection: WebMappingRetrieve<ContactOrders_Select,ContactOrders_Expand,ContactOrders_Filter,ContactOrders_Fixed,ContactOrders_Result,ContactOrders_FormattedResult>;
}
interface WebEntitiesRelated {
  contactorderscollection: WebMappingRelated<ContactOrders_RelatedOne,ContactOrders_RelatedMany>;
}
interface WebEntitiesCUDA {
  contactorderscollection: WebMappingCUDA<ContactOrders_Create,ContactOrders_Update,ContactOrders_Select>;
}
