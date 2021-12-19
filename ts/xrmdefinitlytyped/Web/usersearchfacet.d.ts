interface UserSearchFacet_Base extends WebEntity {
  attributename?: string | null;
  entityname?: string | null;
  facetorder?: number | null;
  systemuserid?: string | null;
  usersearchfacetid?: string | null;
}
interface UserSearchFacet_Relationships {
}
interface UserSearchFacet extends UserSearchFacet_Base, UserSearchFacet_Relationships {
}
interface UserSearchFacet_Create extends UserSearchFacet {
}
interface UserSearchFacet_Update extends UserSearchFacet {
}
interface UserSearchFacet_Select {
  attributename: WebAttribute<UserSearchFacet_Select, { attributename: string | null }, {  }>;
  entityname: WebAttribute<UserSearchFacet_Select, { entityname: string | null }, {  }>;
  facetorder: WebAttribute<UserSearchFacet_Select, { facetorder: number | null }, {  }>;
  systemuserid: WebAttribute<UserSearchFacet_Select, { systemuserid: string | null }, {  }>;
  usersearchfacetid: WebAttribute<UserSearchFacet_Select, { usersearchfacetid: string | null }, {  }>;
}
interface UserSearchFacet_Filter {
  attributename: string;
  entityname: string;
  facetorder: number;
  systemuserid: XQW.Guid;
  usersearchfacetid: XQW.Guid;
}
interface UserSearchFacet_Expand {
}
interface UserSearchFacet_FormattedResult {
}
interface UserSearchFacet_Result extends UserSearchFacet_Base, UserSearchFacet_Relationships {
  "@odata.etag": string;
}
interface UserSearchFacet_RelatedOne {
}
interface UserSearchFacet_RelatedMany {
}
interface WebEntitiesRetrieve {
  usersearchfacets: WebMappingRetrieve<UserSearchFacet_Select,UserSearchFacet_Expand,UserSearchFacet_Filter,UserSearchFacet_Fixed,UserSearchFacet_Result,UserSearchFacet_FormattedResult>;
}
interface WebEntitiesRelated {
  usersearchfacets: WebMappingRelated<UserSearchFacet_RelatedOne,UserSearchFacet_RelatedMany>;
}
interface WebEntitiesCUDA {
  usersearchfacets: WebMappingCUDA<UserSearchFacet_Create,UserSearchFacet_Update,UserSearchFacet_Select>;
}
