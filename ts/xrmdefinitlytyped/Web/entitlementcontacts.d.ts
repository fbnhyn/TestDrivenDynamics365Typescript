interface EntitlementContacts_Base extends WebEntity {
  contactid?: string | null;
  entitlementcontactid?: string | null;
  entitlementid?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface EntitlementContacts_Relationships {
  entitlementcontacts_AsyncOperations?: AsyncOperation_Result[] | null;
  entitlementcontacts_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  entitlementcontacts_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  entitlementcontacts_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  entitlementcontacts_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  entitlementcontacts_association?: Entitlement_Result[] | null;
}
interface EntitlementContacts extends EntitlementContacts_Base, EntitlementContacts_Relationships {
}
interface EntitlementContacts_Create extends EntitlementContacts {
}
interface EntitlementContacts_Update extends EntitlementContacts {
}
interface EntitlementContacts_Select {
  contactid: WebAttribute<EntitlementContacts_Select, { contactid: string | null }, {  }>;
  entitlementcontactid: WebAttribute<EntitlementContacts_Select, { entitlementcontactid: string | null }, {  }>;
  entitlementid: WebAttribute<EntitlementContacts_Select, { entitlementid: string | null }, {  }>;
  importsequencenumber: WebAttribute<EntitlementContacts_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<EntitlementContacts_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<EntitlementContacts_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<EntitlementContacts_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<EntitlementContacts_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<EntitlementContacts_Select, { versionnumber: number | null }, {  }>;
}
interface EntitlementContacts_Filter {
  contactid: XQW.Guid;
  entitlementcontactid: XQW.Guid;
  entitlementid: XQW.Guid;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface EntitlementContacts_Expand {
  entitlementcontacts_AsyncOperations: WebExpand<EntitlementContacts_Expand, AsyncOperation_Select, AsyncOperation_Filter, { entitlementcontacts_AsyncOperations: AsyncOperation_Result[] }>;
  entitlementcontacts_BulkDeleteFailures: WebExpand<EntitlementContacts_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { entitlementcontacts_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  entitlementcontacts_MailboxTrackingFolders: WebExpand<EntitlementContacts_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { entitlementcontacts_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  entitlementcontacts_PrincipalObjectAttributeAccesses: WebExpand<EntitlementContacts_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { entitlementcontacts_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  entitlementcontacts_UserEntityInstanceDatas: WebExpand<EntitlementContacts_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { entitlementcontacts_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  entitlementcontacts_association: WebExpand<EntitlementContacts_Expand, Entitlement_Select, Entitlement_Filter, { entitlementcontacts_association: Entitlement_Result[] }>;
}
interface EntitlementContacts_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface EntitlementContacts_Result extends EntitlementContacts_Base, EntitlementContacts_Relationships {
  "@odata.etag": string;
}
interface EntitlementContacts_RelatedOne {
}
interface EntitlementContacts_RelatedMany {
  entitlementcontacts_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  entitlementcontacts_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  entitlementcontacts_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  entitlementcontacts_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  entitlementcontacts_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  entitlementcontacts_association: WebMappingRetrieve<Entitlement_Select,Entitlement_Expand,Entitlement_Filter,Entitlement_Fixed,Entitlement_Result,Entitlement_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entitlementcontactscollection: WebMappingRetrieve<EntitlementContacts_Select,EntitlementContacts_Expand,EntitlementContacts_Filter,EntitlementContacts_Fixed,EntitlementContacts_Result,EntitlementContacts_FormattedResult>;
}
interface WebEntitiesRelated {
  entitlementcontactscollection: WebMappingRelated<EntitlementContacts_RelatedOne,EntitlementContacts_RelatedMany>;
}
interface WebEntitiesCUDA {
  entitlementcontactscollection: WebMappingCUDA<EntitlementContacts_Create,EntitlementContacts_Update,EntitlementContacts_Select>;
}
