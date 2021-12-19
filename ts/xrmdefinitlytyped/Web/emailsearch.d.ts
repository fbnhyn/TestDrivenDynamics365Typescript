interface EmailSearch_Base extends WebEntity {
  emailaddress?: string | null;
  emailsearchid?: string | null;
  versionnumber?: number | null;
}
interface EmailSearch_Relationships {
  userentityinstancedata_emailsearch?: UserEntityInstanceData_Result[] | null;
}
interface EmailSearch extends EmailSearch_Base, EmailSearch_Relationships {
}
interface EmailSearch_Create extends EmailSearch {
}
interface EmailSearch_Update extends EmailSearch {
}
interface EmailSearch_Select {
  emailaddress: WebAttribute<EmailSearch_Select, { emailaddress: string | null }, {  }>;
  emailsearchid: WebAttribute<EmailSearch_Select, { emailsearchid: string | null }, {  }>;
  parentobjectid_guid: WebAttribute<EmailSearch_Select, { parentobjectid_guid: string | null }, { parentobjectid_formatted?: string }>;
  versionnumber: WebAttribute<EmailSearch_Select, { versionnumber: number | null }, {  }>;
}
interface EmailSearch_Filter {
  emailaddress: string;
  emailsearchid: XQW.Guid;
  parentobjectid_guid: XQW.Guid;
  versionnumber: number;
}
interface EmailSearch_Expand {
  userentityinstancedata_emailsearch: WebExpand<EmailSearch_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_emailsearch: UserEntityInstanceData_Result[] }>;
}
interface EmailSearch_FormattedResult {
  parentobjectid_formatted?: string;
}
interface EmailSearch_Result extends EmailSearch_Base, EmailSearch_Relationships {
  "@odata.etag": string;
  parentobjectid_guid: string | null;
}
interface EmailSearch_RelatedOne {
}
interface EmailSearch_RelatedMany {
  userentityinstancedata_emailsearch: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  emailsearches: WebMappingRetrieve<EmailSearch_Select,EmailSearch_Expand,EmailSearch_Filter,EmailSearch_Fixed,EmailSearch_Result,EmailSearch_FormattedResult>;
}
interface WebEntitiesRelated {
  emailsearches: WebMappingRelated<EmailSearch_RelatedOne,EmailSearch_RelatedMany>;
}
interface WebEntitiesCUDA {
  emailsearches: WebMappingCUDA<EmailSearch_Create,EmailSearch_Update,EmailSearch_Select>;
}
