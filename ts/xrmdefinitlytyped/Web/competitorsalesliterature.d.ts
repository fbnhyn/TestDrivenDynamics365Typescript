interface CompetitorSalesLiterature_Base extends WebEntity {
  competitorid?: string | null;
  competitorsalesliteratureid?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  salesliteratureid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface CompetitorSalesLiterature_Relationships {
  competitorsalesliterature_AsyncOperations?: AsyncOperation_Result[] | null;
  competitorsalesliterature_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  competitorsalesliterature_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  competitorsalesliterature_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  competitorsalesliterature_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  competitorsalesliterature_association?: Competitor_Result[] | null;
  userentityinstancedata_competitorsalesliterature?: UserEntityInstanceData_Result[] | null;
}
interface CompetitorSalesLiterature extends CompetitorSalesLiterature_Base, CompetitorSalesLiterature_Relationships {
}
interface CompetitorSalesLiterature_Create extends CompetitorSalesLiterature {
}
interface CompetitorSalesLiterature_Update extends CompetitorSalesLiterature {
}
interface CompetitorSalesLiterature_Select {
  competitorid: WebAttribute<CompetitorSalesLiterature_Select, { competitorid: string | null }, {  }>;
  competitorsalesliteratureid: WebAttribute<CompetitorSalesLiterature_Select, { competitorsalesliteratureid: string | null }, {  }>;
  importsequencenumber: WebAttribute<CompetitorSalesLiterature_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<CompetitorSalesLiterature_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<CompetitorSalesLiterature_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  salesliteratureid: WebAttribute<CompetitorSalesLiterature_Select, { salesliteratureid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<CompetitorSalesLiterature_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CompetitorSalesLiterature_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<CompetitorSalesLiterature_Select, { versionnumber: number | null }, {  }>;
}
interface CompetitorSalesLiterature_Filter {
  competitorid: XQW.Guid;
  competitorsalesliteratureid: XQW.Guid;
  importsequencenumber: number;
  name: string;
  overriddencreatedon: Date;
  salesliteratureid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface CompetitorSalesLiterature_Expand {
  competitorsalesliterature_AsyncOperations: WebExpand<CompetitorSalesLiterature_Expand, AsyncOperation_Select, AsyncOperation_Filter, { competitorsalesliterature_AsyncOperations: AsyncOperation_Result[] }>;
  competitorsalesliterature_BulkDeleteFailures: WebExpand<CompetitorSalesLiterature_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { competitorsalesliterature_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  competitorsalesliterature_MailboxTrackingFolders: WebExpand<CompetitorSalesLiterature_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { competitorsalesliterature_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  competitorsalesliterature_PrincipalObjectAttributeAccesses: WebExpand<CompetitorSalesLiterature_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { competitorsalesliterature_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  competitorsalesliterature_UserEntityInstanceDatas: WebExpand<CompetitorSalesLiterature_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { competitorsalesliterature_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  competitorsalesliterature_association: WebExpand<CompetitorSalesLiterature_Expand, Competitor_Select, Competitor_Filter, { competitorsalesliterature_association: Competitor_Result[] }>;
  userentityinstancedata_competitorsalesliterature: WebExpand<CompetitorSalesLiterature_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_competitorsalesliterature: UserEntityInstanceData_Result[] }>;
}
interface CompetitorSalesLiterature_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface CompetitorSalesLiterature_Result extends CompetitorSalesLiterature_Base, CompetitorSalesLiterature_Relationships {
  "@odata.etag": string;
}
interface CompetitorSalesLiterature_RelatedOne {
}
interface CompetitorSalesLiterature_RelatedMany {
  competitorsalesliterature_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  competitorsalesliterature_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  competitorsalesliterature_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  competitorsalesliterature_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  competitorsalesliterature_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  competitorsalesliterature_association: WebMappingRetrieve<Competitor_Select,Competitor_Expand,Competitor_Filter,Competitor_Fixed,Competitor_Result,Competitor_FormattedResult>;
  userentityinstancedata_competitorsalesliterature: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  competitorsalesliteratures: WebMappingRetrieve<CompetitorSalesLiterature_Select,CompetitorSalesLiterature_Expand,CompetitorSalesLiterature_Filter,CompetitorSalesLiterature_Fixed,CompetitorSalesLiterature_Result,CompetitorSalesLiterature_FormattedResult>;
}
interface WebEntitiesRelated {
  competitorsalesliteratures: WebMappingRelated<CompetitorSalesLiterature_RelatedOne,CompetitorSalesLiterature_RelatedMany>;
}
interface WebEntitiesCUDA {
  competitorsalesliteratures: WebMappingCUDA<CompetitorSalesLiterature_Create,CompetitorSalesLiterature_Update,CompetitorSalesLiterature_Select>;
}
