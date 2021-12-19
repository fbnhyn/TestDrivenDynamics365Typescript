interface LeadCompetitors_Base extends WebEntity {
  competitorid?: string | null;
  importsequencenumber?: number | null;
  leadcompetitorid?: string | null;
  leadid?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface LeadCompetitors_Relationships {
  leadcompetitors_AsyncOperations?: AsyncOperation_Result[] | null;
  leadcompetitors_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  leadcompetitors_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  leadcompetitors_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  leadcompetitors_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  leadcompetitors_association?: Competitor_Result[] | null;
}
interface LeadCompetitors extends LeadCompetitors_Base, LeadCompetitors_Relationships {
}
interface LeadCompetitors_Create extends LeadCompetitors {
}
interface LeadCompetitors_Update extends LeadCompetitors {
}
interface LeadCompetitors_Select {
  competitorid: WebAttribute<LeadCompetitors_Select, { competitorid: string | null }, {  }>;
  importsequencenumber: WebAttribute<LeadCompetitors_Select, { importsequencenumber: number | null }, {  }>;
  leadcompetitorid: WebAttribute<LeadCompetitors_Select, { leadcompetitorid: string | null }, {  }>;
  leadid: WebAttribute<LeadCompetitors_Select, { leadid: string | null }, {  }>;
  name: WebAttribute<LeadCompetitors_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<LeadCompetitors_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<LeadCompetitors_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<LeadCompetitors_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<LeadCompetitors_Select, { versionnumber: number | null }, {  }>;
}
interface LeadCompetitors_Filter {
  competitorid: XQW.Guid;
  importsequencenumber: number;
  leadcompetitorid: XQW.Guid;
  leadid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface LeadCompetitors_Expand {
  leadcompetitors_AsyncOperations: WebExpand<LeadCompetitors_Expand, AsyncOperation_Select, AsyncOperation_Filter, { leadcompetitors_AsyncOperations: AsyncOperation_Result[] }>;
  leadcompetitors_BulkDeleteFailures: WebExpand<LeadCompetitors_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { leadcompetitors_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  leadcompetitors_MailboxTrackingFolders: WebExpand<LeadCompetitors_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { leadcompetitors_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  leadcompetitors_PrincipalObjectAttributeAccesses: WebExpand<LeadCompetitors_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { leadcompetitors_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  leadcompetitors_UserEntityInstanceDatas: WebExpand<LeadCompetitors_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { leadcompetitors_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  leadcompetitors_association: WebExpand<LeadCompetitors_Expand, Competitor_Select, Competitor_Filter, { leadcompetitors_association: Competitor_Result[] }>;
}
interface LeadCompetitors_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface LeadCompetitors_Result extends LeadCompetitors_Base, LeadCompetitors_Relationships {
  "@odata.etag": string;
}
interface LeadCompetitors_RelatedOne {
}
interface LeadCompetitors_RelatedMany {
  leadcompetitors_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  leadcompetitors_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  leadcompetitors_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  leadcompetitors_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  leadcompetitors_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  leadcompetitors_association: WebMappingRetrieve<Competitor_Select,Competitor_Expand,Competitor_Filter,Competitor_Fixed,Competitor_Result,Competitor_FormattedResult>;
}
interface WebEntitiesRetrieve {
  leadcompetitorscollection: WebMappingRetrieve<LeadCompetitors_Select,LeadCompetitors_Expand,LeadCompetitors_Filter,LeadCompetitors_Fixed,LeadCompetitors_Result,LeadCompetitors_FormattedResult>;
}
interface WebEntitiesRelated {
  leadcompetitorscollection: WebMappingRelated<LeadCompetitors_RelatedOne,LeadCompetitors_RelatedMany>;
}
interface WebEntitiesCUDA {
  leadcompetitorscollection: WebMappingCUDA<LeadCompetitors_Create,LeadCompetitors_Update,LeadCompetitors_Select>;
}
