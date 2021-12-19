interface CampaignItem_Base extends WebEntity {
  campaignitemid?: string | null;
  entityid?: string | null;
  entitytype?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface CampaignItem_Relationships {
  campaigncampaign_association?: Campaign_Result[] | null;
  campaignitem_AsyncOperations?: AsyncOperation_Result[] | null;
  campaignitem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  campaignitem_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  campaignitem_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  campaignitem_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  campaignlist_association?: List_Result[] | null;
  campaignproduct_association?: Product_Result[] | null;
  campaignsalesliterature_association?: SalesLiterature_Result[] | null;
  userentityinstancedata_campaignitem?: UserEntityInstanceData_Result[] | null;
}
interface CampaignItem extends CampaignItem_Base, CampaignItem_Relationships {
}
interface CampaignItem_Create extends CampaignItem {
}
interface CampaignItem_Update extends CampaignItem {
}
interface CampaignItem_Select {
  campaignid_guid: WebAttribute<CampaignItem_Select, { campaignid_guid: string | null }, { campaignid_formatted?: string }>;
  campaignitemid: WebAttribute<CampaignItem_Select, { campaignitemid: string | null }, {  }>;
  entityid: WebAttribute<CampaignItem_Select, { entityid: string | null }, {  }>;
  entitytype: WebAttribute<CampaignItem_Select, { entitytype: string | null }, {  }>;
  importsequencenumber: WebAttribute<CampaignItem_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<CampaignItem_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<CampaignItem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<CampaignItem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<CampaignItem_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<CampaignItem_Select, { owninguser: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<CampaignItem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CampaignItem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<CampaignItem_Select, { versionnumber: number | null }, {  }>;
}
interface CampaignItem_Filter {
  campaignid_guid: XQW.Guid;
  campaignitemid: XQW.Guid;
  entityid: XQW.Guid;
  entitytype: string;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface CampaignItem_Expand {
  campaigncampaign_association: WebExpand<CampaignItem_Expand, Campaign_Select, Campaign_Filter, { campaigncampaign_association: Campaign_Result[] }>;
  campaignitem_AsyncOperations: WebExpand<CampaignItem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { campaignitem_AsyncOperations: AsyncOperation_Result[] }>;
  campaignitem_BulkDeleteFailures: WebExpand<CampaignItem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { campaignitem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  campaignitem_MailboxTrackingFolders: WebExpand<CampaignItem_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { campaignitem_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  campaignitem_PrincipalObjectAttributeAccesses: WebExpand<CampaignItem_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { campaignitem_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  campaignitem_UserEntityInstanceDatas: WebExpand<CampaignItem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { campaignitem_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  campaignlist_association: WebExpand<CampaignItem_Expand, List_Select, List_Filter, { campaignlist_association: List_Result[] }>;
  campaignproduct_association: WebExpand<CampaignItem_Expand, Product_Select, Product_Filter, { campaignproduct_association: Product_Result[] }>;
  campaignsalesliterature_association: WebExpand<CampaignItem_Expand, SalesLiterature_Select, SalesLiterature_Filter, { campaignsalesliterature_association: SalesLiterature_Result[] }>;
  userentityinstancedata_campaignitem: WebExpand<CampaignItem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_campaignitem: UserEntityInstanceData_Result[] }>;
}
interface CampaignItem_FormattedResult {
  campaignid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
}
interface CampaignItem_Result extends CampaignItem_Base, CampaignItem_Relationships {
  "@odata.etag": string;
  campaignid_guid: string | null;
  ownerid_guid: string | null;
}
interface CampaignItem_RelatedOne {
}
interface CampaignItem_RelatedMany {
  campaigncampaign_association: WebMappingRetrieve<Campaign_Select,Campaign_Expand,Campaign_Filter,Campaign_Fixed,Campaign_Result,Campaign_FormattedResult>;
  campaignitem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  campaignitem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  campaignitem_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  campaignitem_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  campaignitem_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  campaignlist_association: WebMappingRetrieve<List_Select,List_Expand,List_Filter,List_Fixed,List_Result,List_FormattedResult>;
  campaignproduct_association: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  campaignsalesliterature_association: WebMappingRetrieve<SalesLiterature_Select,SalesLiterature_Expand,SalesLiterature_Filter,SalesLiterature_Fixed,SalesLiterature_Result,SalesLiterature_FormattedResult>;
  userentityinstancedata_campaignitem: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  campaignitems: WebMappingRetrieve<CampaignItem_Select,CampaignItem_Expand,CampaignItem_Filter,CampaignItem_Fixed,CampaignItem_Result,CampaignItem_FormattedResult>;
}
interface WebEntitiesRelated {
  campaignitems: WebMappingRelated<CampaignItem_RelatedOne,CampaignItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  campaignitems: WebMappingCUDA<CampaignItem_Create,CampaignItem_Update,CampaignItem_Select>;
}
