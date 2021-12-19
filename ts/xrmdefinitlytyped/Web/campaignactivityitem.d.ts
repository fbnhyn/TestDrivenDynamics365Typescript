interface CampaignActivityItem_Base extends WebEntity {
  campaignactivityitemid?: string | null;
  importsequencenumber?: number | null;
  itemid?: string | null;
  itemobjecttypecode?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface CampaignActivityItem_Relationships {
  campaignactivityitem_AsyncOperations?: AsyncOperation_Result[] | null;
  campaignactivityitem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  campaignactivityitem_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  campaignactivityitem_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  campaignactivityitem_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  campaignactivitylist_association?: List_Result[] | null;
  campaignactivitysalesliterature_association?: SalesLiterature_Result[] | null;
  userentityinstancedata_campaignactivityitem?: UserEntityInstanceData_Result[] | null;
}
interface CampaignActivityItem extends CampaignActivityItem_Base, CampaignActivityItem_Relationships {
  campaignactivityid_bind$activitypointers?: string | null;
}
interface CampaignActivityItem_Create extends CampaignActivityItem {
}
interface CampaignActivityItem_Update extends CampaignActivityItem {
}
interface CampaignActivityItem_Select {
  campaignactivityid_guid: WebAttribute<CampaignActivityItem_Select, { campaignactivityid_guid: string | null }, { campaignactivityid_formatted?: string }>;
  campaignactivityitemid: WebAttribute<CampaignActivityItem_Select, { campaignactivityitemid: string | null }, {  }>;
  importsequencenumber: WebAttribute<CampaignActivityItem_Select, { importsequencenumber: number | null }, {  }>;
  itemid: WebAttribute<CampaignActivityItem_Select, { itemid: string | null }, {  }>;
  itemobjecttypecode: WebAttribute<CampaignActivityItem_Select, { itemobjecttypecode: string | null }, {  }>;
  name: WebAttribute<CampaignActivityItem_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<CampaignActivityItem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<CampaignActivityItem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<CampaignActivityItem_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<CampaignActivityItem_Select, { owninguser: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<CampaignActivityItem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CampaignActivityItem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<CampaignActivityItem_Select, { versionnumber: number | null }, {  }>;
}
interface CampaignActivityItem_Filter {
  campaignactivityid_guid: XQW.Guid;
  campaignactivityitemid: XQW.Guid;
  importsequencenumber: number;
  itemid: XQW.Guid;
  itemobjecttypecode: string;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface CampaignActivityItem_Expand {
  campaignactivityid: WebExpand<CampaignActivityItem_Expand, ActivityPointer_Select, ActivityPointer_Filter, { campaignactivityid: ActivityPointer_Result }>;
  campaignactivityitem_AsyncOperations: WebExpand<CampaignActivityItem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { campaignactivityitem_AsyncOperations: AsyncOperation_Result[] }>;
  campaignactivityitem_BulkDeleteFailures: WebExpand<CampaignActivityItem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { campaignactivityitem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  campaignactivityitem_MailboxTrackingFolders: WebExpand<CampaignActivityItem_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { campaignactivityitem_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  campaignactivityitem_PrincipalObjectAttributeAccesses: WebExpand<CampaignActivityItem_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { campaignactivityitem_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  campaignactivityitem_UserEntityInstanceDatas: WebExpand<CampaignActivityItem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { campaignactivityitem_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  campaignactivitylist_association: WebExpand<CampaignActivityItem_Expand, List_Select, List_Filter, { campaignactivitylist_association: List_Result[] }>;
  campaignactivitysalesliterature_association: WebExpand<CampaignActivityItem_Expand, SalesLiterature_Select, SalesLiterature_Filter, { campaignactivitysalesliterature_association: SalesLiterature_Result[] }>;
  userentityinstancedata_campaignactivityitem: WebExpand<CampaignActivityItem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_campaignactivityitem: UserEntityInstanceData_Result[] }>;
}
interface CampaignActivityItem_FormattedResult {
  campaignactivityid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
}
interface CampaignActivityItem_Result extends CampaignActivityItem_Base, CampaignActivityItem_Relationships {
  "@odata.etag": string;
  campaignactivityid_guid: string | null;
  ownerid_guid: string | null;
}
interface CampaignActivityItem_RelatedOne {
  campaignactivityid: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
}
interface CampaignActivityItem_RelatedMany {
  campaignactivityitem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  campaignactivityitem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  campaignactivityitem_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  campaignactivityitem_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  campaignactivityitem_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  campaignactivitylist_association: WebMappingRetrieve<List_Select,List_Expand,List_Filter,List_Fixed,List_Result,List_FormattedResult>;
  campaignactivitysalesliterature_association: WebMappingRetrieve<SalesLiterature_Select,SalesLiterature_Expand,SalesLiterature_Filter,SalesLiterature_Fixed,SalesLiterature_Result,SalesLiterature_FormattedResult>;
  userentityinstancedata_campaignactivityitem: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  campaignactivityitems: WebMappingRetrieve<CampaignActivityItem_Select,CampaignActivityItem_Expand,CampaignActivityItem_Filter,CampaignActivityItem_Fixed,CampaignActivityItem_Result,CampaignActivityItem_FormattedResult>;
}
interface WebEntitiesRelated {
  campaignactivityitems: WebMappingRelated<CampaignActivityItem_RelatedOne,CampaignActivityItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  campaignactivityitems: WebMappingCUDA<CampaignActivityItem_Create,CampaignActivityItem_Update,CampaignActivityItem_Select>;
}
