interface UnresolvedAddress_Base extends WebEntity {
  emailaddress?: string | null;
  fullname?: string | null;
  telephone?: string | null;
  unresolvedaddressid?: string | null;
  versionnumber?: number | null;
}
interface UnresolvedAddress_Relationships {
  userentityinstancedata_unresolvedaddress?: UserEntityInstanceData_Result[] | null;
}
interface UnresolvedAddress extends UnresolvedAddress_Base, UnresolvedAddress_Relationships {
}
interface UnresolvedAddress_Create extends UnresolvedAddress {
}
interface UnresolvedAddress_Update extends UnresolvedAddress {
}
interface UnresolvedAddress_Select {
  emailaddress: WebAttribute<UnresolvedAddress_Select, { emailaddress: string | null }, {  }>;
  fullname: WebAttribute<UnresolvedAddress_Select, { fullname: string | null }, {  }>;
  telephone: WebAttribute<UnresolvedAddress_Select, { telephone: string | null }, {  }>;
  unresolvedaddressid: WebAttribute<UnresolvedAddress_Select, { unresolvedaddressid: string | null }, {  }>;
  versionnumber: WebAttribute<UnresolvedAddress_Select, { versionnumber: number | null }, {  }>;
}
interface UnresolvedAddress_Filter {
  emailaddress: string;
  fullname: string;
  telephone: string;
  unresolvedaddressid: XQW.Guid;
  versionnumber: number;
}
interface UnresolvedAddress_Expand {
  userentityinstancedata_unresolvedaddress: WebExpand<UnresolvedAddress_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_unresolvedaddress: UserEntityInstanceData_Result[] }>;
}
interface UnresolvedAddress_FormattedResult {
}
interface UnresolvedAddress_Result extends UnresolvedAddress_Base, UnresolvedAddress_Relationships {
  "@odata.etag": string;
}
interface UnresolvedAddress_RelatedOne {
}
interface UnresolvedAddress_RelatedMany {
  userentityinstancedata_unresolvedaddress: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  unresolvedaddresses: WebMappingRetrieve<UnresolvedAddress_Select,UnresolvedAddress_Expand,UnresolvedAddress_Filter,UnresolvedAddress_Fixed,UnresolvedAddress_Result,UnresolvedAddress_FormattedResult>;
}
interface WebEntitiesRelated {
  unresolvedaddresses: WebMappingRelated<UnresolvedAddress_RelatedOne,UnresolvedAddress_RelatedMany>;
}
interface WebEntitiesCUDA {
  unresolvedaddresses: WebMappingCUDA<UnresolvedAddress_Create,UnresolvedAddress_Update,UnresolvedAddress_Select>;
}
