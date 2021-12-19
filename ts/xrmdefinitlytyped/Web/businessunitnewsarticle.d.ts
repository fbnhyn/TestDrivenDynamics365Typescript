interface BusinessUnitNewsArticle_Base extends WebEntity {
  activeon?: Date | null;
  activeuntil?: Date | null;
  articletitle?: string | null;
  articletypecode?: businessunitnewsarticle_articletypecode | null;
  articleurl?: string | null;
  businessunitnewsarticleid?: string | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  newsarticle?: string | null;
  overriddencreatedon?: Date | null;
  showonhomepage?: boolean | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BusinessUnitNewsArticle_Relationships {
  BusinessUnitNewsArticle_AsyncOperations?: AsyncOperation_Result[] | null;
  BusinessUnitNewsArticle_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  BusinessUnitNewsArticle_ProcessSessions?: ProcessSession_Result[] | null;
  userentityinstancedata_businessunitnewsarticle?: UserEntityInstanceData_Result[] | null;
}
interface BusinessUnitNewsArticle extends BusinessUnitNewsArticle_Base, BusinessUnitNewsArticle_Relationships {
}
interface BusinessUnitNewsArticle_Create extends BusinessUnitNewsArticle {
}
interface BusinessUnitNewsArticle_Update extends BusinessUnitNewsArticle {
}
interface BusinessUnitNewsArticle_Select {
  activeon: WebAttribute<BusinessUnitNewsArticle_Select, { activeon: Date | null }, { activeon_formatted?: string }>;
  activeuntil: WebAttribute<BusinessUnitNewsArticle_Select, { activeuntil: Date | null }, { activeuntil_formatted?: string }>;
  articletitle: WebAttribute<BusinessUnitNewsArticle_Select, { articletitle: string | null }, {  }>;
  articletypecode: WebAttribute<BusinessUnitNewsArticle_Select, { articletypecode: businessunitnewsarticle_articletypecode | null }, { articletypecode_formatted?: string }>;
  articleurl: WebAttribute<BusinessUnitNewsArticle_Select, { articleurl: string | null }, {  }>;
  businessunitnewsarticleid: WebAttribute<BusinessUnitNewsArticle_Select, { businessunitnewsarticleid: string | null }, {  }>;
  createdby_guid: WebAttribute<BusinessUnitNewsArticle_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BusinessUnitNewsArticle_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BusinessUnitNewsArticle_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<BusinessUnitNewsArticle_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<BusinessUnitNewsArticle_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BusinessUnitNewsArticle_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BusinessUnitNewsArticle_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  newsarticle: WebAttribute<BusinessUnitNewsArticle_Select, { newsarticle: string | null }, {  }>;
  organizationid_guid: WebAttribute<BusinessUnitNewsArticle_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<BusinessUnitNewsArticle_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  showonhomepage: WebAttribute<BusinessUnitNewsArticle_Select, { showonhomepage: boolean | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<BusinessUnitNewsArticle_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<BusinessUnitNewsArticle_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BusinessUnitNewsArticle_Select, { versionnumber: number | null }, {  }>;
}
interface BusinessUnitNewsArticle_Filter {
  activeon: Date;
  activeuntil: Date;
  articletitle: string;
  articletypecode: businessunitnewsarticle_articletypecode;
  articleurl: string;
  businessunitnewsarticleid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  newsarticle: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  showonhomepage: boolean;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BusinessUnitNewsArticle_Expand {
  BusinessUnitNewsArticle_AsyncOperations: WebExpand<BusinessUnitNewsArticle_Expand, AsyncOperation_Select, AsyncOperation_Filter, { BusinessUnitNewsArticle_AsyncOperations: AsyncOperation_Result[] }>;
  BusinessUnitNewsArticle_BulkDeleteFailures: WebExpand<BusinessUnitNewsArticle_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { BusinessUnitNewsArticle_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  BusinessUnitNewsArticle_ProcessSessions: WebExpand<BusinessUnitNewsArticle_Expand, ProcessSession_Select, ProcessSession_Filter, { BusinessUnitNewsArticle_ProcessSessions: ProcessSession_Result[] }>;
  createdby: WebExpand<BusinessUnitNewsArticle_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<BusinessUnitNewsArticle_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<BusinessUnitNewsArticle_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<BusinessUnitNewsArticle_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<BusinessUnitNewsArticle_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_businessunitnewsarticle: WebExpand<BusinessUnitNewsArticle_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_businessunitnewsarticle: UserEntityInstanceData_Result[] }>;
}
interface BusinessUnitNewsArticle_FormattedResult {
  activeon_formatted?: string;
  activeuntil_formatted?: string;
  articletypecode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
}
interface BusinessUnitNewsArticle_Result extends BusinessUnitNewsArticle_Base, BusinessUnitNewsArticle_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface BusinessUnitNewsArticle_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface BusinessUnitNewsArticle_RelatedMany {
  BusinessUnitNewsArticle_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  BusinessUnitNewsArticle_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  BusinessUnitNewsArticle_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  userentityinstancedata_businessunitnewsarticle: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  businessunitnewsarticles: WebMappingRetrieve<BusinessUnitNewsArticle_Select,BusinessUnitNewsArticle_Expand,BusinessUnitNewsArticle_Filter,BusinessUnitNewsArticle_Fixed,BusinessUnitNewsArticle_Result,BusinessUnitNewsArticle_FormattedResult>;
}
interface WebEntitiesRelated {
  businessunitnewsarticles: WebMappingRelated<BusinessUnitNewsArticle_RelatedOne,BusinessUnitNewsArticle_RelatedMany>;
}
interface WebEntitiesCUDA {
  businessunitnewsarticles: WebMappingCUDA<BusinessUnitNewsArticle_Create,BusinessUnitNewsArticle_Update,BusinessUnitNewsArticle_Select>;
}
