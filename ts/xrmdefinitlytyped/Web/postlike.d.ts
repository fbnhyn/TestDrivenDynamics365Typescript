interface PostLike_Base extends WebEntity {
  createdon?: Date | null;
  postlikeid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
}
interface PostLike_Relationships {
}
interface PostLike extends PostLike_Base, PostLike_Relationships {
}
interface PostLike_Create extends PostLike {
  postid_bind$posts?: string | null;
}
interface PostLike_Update extends PostLike {
}
interface PostLike_Select {
  createdby_guid: WebAttribute<PostLike_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PostLike_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PostLike_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<PostLike_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  postid_guid: WebAttribute<PostLike_Select, { postid_guid: string | null }, { postid_formatted?: string }>;
  postlikeid: WebAttribute<PostLike_Select, { postlikeid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<PostLike_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<PostLike_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface PostLike_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  postid_guid: XQW.Guid;
  postlikeid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
}
interface PostLike_Expand {
  createdby: WebExpand<PostLike_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PostLike_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<PostLike_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  postid: WebExpand<PostLike_Expand, Post_Select, Post_Filter, { postid: Post_Result }>;
}
interface PostLike_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  postid_formatted?: string;
}
interface PostLike_Result extends PostLike_Base, PostLike_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  postid_guid: string | null;
}
interface PostLike_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  postid: WebMappingRetrieve<Post_Select,Post_Expand,Post_Filter,Post_Fixed,Post_Result,Post_FormattedResult>;
}
interface PostLike_RelatedMany {
}
interface WebEntitiesRetrieve {
  postlikes: WebMappingRetrieve<PostLike_Select,PostLike_Expand,PostLike_Filter,PostLike_Fixed,PostLike_Result,PostLike_FormattedResult>;
}
interface WebEntitiesRelated {
  postlikes: WebMappingRelated<PostLike_RelatedOne,PostLike_RelatedMany>;
}
interface WebEntitiesCUDA {
  postlikes: WebMappingCUDA<PostLike_Create,PostLike_Update,PostLike_Select>;
}
