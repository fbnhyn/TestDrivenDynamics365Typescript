interface PostComment_Base extends WebEntity {
  createdon?: Date | null;
  largetext?: string | null;
  postcommentid?: string | null;
  text?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
}
interface PostComment_Relationships {
  post_comment_activity_file_attachment?: activityfileattachment_Result[] | null;
}
interface PostComment extends PostComment_Base, PostComment_Relationships {
}
interface PostComment_Create extends PostComment {
  postid_bind$posts?: string | null;
}
interface PostComment_Update extends PostComment {
}
interface PostComment_Select {
  createdby_guid: WebAttribute<PostComment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PostComment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PostComment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  largetext: WebAttribute<PostComment_Select, { largetext: string | null }, {  }>;
  organizationid_guid: WebAttribute<PostComment_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  postcommentid: WebAttribute<PostComment_Select, { postcommentid: string | null }, {  }>;
  postid_guid: WebAttribute<PostComment_Select, { postid_guid: string | null }, { postid_formatted?: string }>;
  text: WebAttribute<PostComment_Select, { text: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<PostComment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<PostComment_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface PostComment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  largetext: string;
  organizationid_guid: XQW.Guid;
  postcommentid: XQW.Guid;
  postid_guid: XQW.Guid;
  text: string;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
}
interface PostComment_Expand {
  createdby: WebExpand<PostComment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PostComment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<PostComment_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  post_comment_activity_file_attachment: WebExpand<PostComment_Expand, activityfileattachment_Select, activityfileattachment_Filter, { post_comment_activity_file_attachment: activityfileattachment_Result[] }>;
  postid: WebExpand<PostComment_Expand, Post_Select, Post_Filter, { postid: Post_Result }>;
}
interface PostComment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  postid_formatted?: string;
}
interface PostComment_Result extends PostComment_Base, PostComment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  postid_guid: string | null;
}
interface PostComment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  postid: WebMappingRetrieve<Post_Select,Post_Expand,Post_Filter,Post_Fixed,Post_Result,Post_FormattedResult>;
}
interface PostComment_RelatedMany {
  post_comment_activity_file_attachment: WebMappingRetrieve<activityfileattachment_Select,activityfileattachment_Expand,activityfileattachment_Filter,activityfileattachment_Fixed,activityfileattachment_Result,activityfileattachment_FormattedResult>;
}
interface WebEntitiesRetrieve {
  postcomments: WebMappingRetrieve<PostComment_Select,PostComment_Expand,PostComment_Filter,PostComment_Fixed,PostComment_Result,PostComment_FormattedResult>;
}
interface WebEntitiesRelated {
  postcomments: WebMappingRelated<PostComment_RelatedOne,PostComment_RelatedMany>;
}
interface WebEntitiesCUDA {
  postcomments: WebMappingCUDA<PostComment_Create,PostComment_Update,PostComment_Select>;
}
