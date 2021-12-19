interface msdyn_ciprovider_systemuser_Base extends WebEntity {
  msdyn_ciprovider_systemuserid?: string | null;
  msdyn_ciproviderid?: string | null;
  systemuserid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_ciprovider_systemuser_Relationships {
  msdyn_ciprovider_systemuser_membership?: SystemUser_Result[] | null;
}
interface msdyn_ciprovider_systemuser extends msdyn_ciprovider_systemuser_Base, msdyn_ciprovider_systemuser_Relationships {
}
interface msdyn_ciprovider_systemuser_Create extends msdyn_ciprovider_systemuser {
}
interface msdyn_ciprovider_systemuser_Update extends msdyn_ciprovider_systemuser {
}
interface msdyn_ciprovider_systemuser_Select {
  msdyn_ciprovider_systemuserid: WebAttribute<msdyn_ciprovider_systemuser_Select, { msdyn_ciprovider_systemuserid: string | null }, {  }>;
  msdyn_ciproviderid: WebAttribute<msdyn_ciprovider_systemuser_Select, { msdyn_ciproviderid: string | null }, {  }>;
  systemuserid: WebAttribute<msdyn_ciprovider_systemuser_Select, { systemuserid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ciprovider_systemuser_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ciprovider_systemuser_Filter {
  msdyn_ciprovider_systemuserid: XQW.Guid;
  msdyn_ciproviderid: XQW.Guid;
  systemuserid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_ciprovider_systemuser_Expand {
  msdyn_ciprovider_systemuser_membership: WebExpand<msdyn_ciprovider_systemuser_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_ciprovider_systemuser_membership: SystemUser_Result[] }>;
}
interface msdyn_ciprovider_systemuser_FormattedResult {
}
interface msdyn_ciprovider_systemuser_Result extends msdyn_ciprovider_systemuser_Base, msdyn_ciprovider_systemuser_Relationships {
  "@odata.etag": string;
}
interface msdyn_ciprovider_systemuser_RelatedOne {
}
interface msdyn_ciprovider_systemuser_RelatedMany {
  msdyn_ciprovider_systemuser_membership: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ciprovider_systemuserset: WebMappingRetrieve<msdyn_ciprovider_systemuser_Select,msdyn_ciprovider_systemuser_Expand,msdyn_ciprovider_systemuser_Filter,msdyn_ciprovider_systemuser_Fixed,msdyn_ciprovider_systemuser_Result,msdyn_ciprovider_systemuser_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ciprovider_systemuserset: WebMappingRelated<msdyn_ciprovider_systemuser_RelatedOne,msdyn_ciprovider_systemuser_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ciprovider_systemuserset: WebMappingCUDA<msdyn_ciprovider_systemuser_Create,msdyn_ciprovider_systemuser_Update,msdyn_ciprovider_systemuser_Select>;
}
