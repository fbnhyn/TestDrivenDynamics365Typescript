interface OpportunityCompetitors_Base extends WebEntity {
  competitorid?: string | null;
  importsequencenumber?: number | null;
  name?: string | null;
  opportunitycompetitorid?: string | null;
  opportunityid?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface OpportunityCompetitors_Relationships {
  opportunitycompetitors_AsyncOperations?: AsyncOperation_Result[] | null;
  opportunitycompetitors_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  opportunitycompetitors_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  opportunitycompetitors_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  opportunitycompetitors_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  opportunitycompetitors_association?: Competitor_Result[] | null;
}
interface OpportunityCompetitors extends OpportunityCompetitors_Base, OpportunityCompetitors_Relationships {
}
interface OpportunityCompetitors_Create extends OpportunityCompetitors {
}
interface OpportunityCompetitors_Update extends OpportunityCompetitors {
}
interface OpportunityCompetitors_Select {
  competitorid: WebAttribute<OpportunityCompetitors_Select, { competitorid: string | null }, {  }>;
  importsequencenumber: WebAttribute<OpportunityCompetitors_Select, { importsequencenumber: number | null }, {  }>;
  name: WebAttribute<OpportunityCompetitors_Select, { name: string | null }, {  }>;
  opportunitycompetitorid: WebAttribute<OpportunityCompetitors_Select, { opportunitycompetitorid: string | null }, {  }>;
  opportunityid: WebAttribute<OpportunityCompetitors_Select, { opportunityid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<OpportunityCompetitors_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<OpportunityCompetitors_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<OpportunityCompetitors_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<OpportunityCompetitors_Select, { versionnumber: number | null }, {  }>;
}
interface OpportunityCompetitors_Filter {
  competitorid: XQW.Guid;
  importsequencenumber: number;
  name: string;
  opportunitycompetitorid: XQW.Guid;
  opportunityid: XQW.Guid;
  overriddencreatedon: Date;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface OpportunityCompetitors_Expand {
  opportunitycompetitors_AsyncOperations: WebExpand<OpportunityCompetitors_Expand, AsyncOperation_Select, AsyncOperation_Filter, { opportunitycompetitors_AsyncOperations: AsyncOperation_Result[] }>;
  opportunitycompetitors_BulkDeleteFailures: WebExpand<OpportunityCompetitors_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { opportunitycompetitors_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  opportunitycompetitors_MailboxTrackingFolders: WebExpand<OpportunityCompetitors_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { opportunitycompetitors_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  opportunitycompetitors_PrincipalObjectAttributeAccesses: WebExpand<OpportunityCompetitors_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { opportunitycompetitors_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  opportunitycompetitors_UserEntityInstanceDatas: WebExpand<OpportunityCompetitors_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { opportunitycompetitors_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  opportunitycompetitors_association: WebExpand<OpportunityCompetitors_Expand, Competitor_Select, Competitor_Filter, { opportunitycompetitors_association: Competitor_Result[] }>;
}
interface OpportunityCompetitors_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface OpportunityCompetitors_Result extends OpportunityCompetitors_Base, OpportunityCompetitors_Relationships {
  "@odata.etag": string;
}
interface OpportunityCompetitors_RelatedOne {
}
interface OpportunityCompetitors_RelatedMany {
  opportunitycompetitors_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  opportunitycompetitors_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  opportunitycompetitors_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  opportunitycompetitors_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  opportunitycompetitors_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  opportunitycompetitors_association: WebMappingRetrieve<Competitor_Select,Competitor_Expand,Competitor_Filter,Competitor_Fixed,Competitor_Result,Competitor_FormattedResult>;
}
interface WebEntitiesRetrieve {
  opportunitycompetitorscollection: WebMappingRetrieve<OpportunityCompetitors_Select,OpportunityCompetitors_Expand,OpportunityCompetitors_Filter,OpportunityCompetitors_Fixed,OpportunityCompetitors_Result,OpportunityCompetitors_FormattedResult>;
}
interface WebEntitiesRelated {
  opportunitycompetitorscollection: WebMappingRelated<OpportunityCompetitors_RelatedOne,OpportunityCompetitors_RelatedMany>;
}
interface WebEntitiesCUDA {
  opportunitycompetitorscollection: WebMappingCUDA<OpportunityCompetitors_Create,OpportunityCompetitors_Update,OpportunityCompetitors_Select>;
}
