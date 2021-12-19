interface msdyn_resourcerequirement_systemuser_Base extends WebEntity {
  msdyn_resourcerequirement_systemuserid?: string | null;
  msdyn_resourcerequirementid?: string | null;
  systemuserid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_resourcerequirement_systemuser_Relationships {
  msdyn_resourcerequirement_systemuser?: SystemUser_Result[] | null;
}
interface msdyn_resourcerequirement_systemuser extends msdyn_resourcerequirement_systemuser_Base, msdyn_resourcerequirement_systemuser_Relationships {
}
interface msdyn_resourcerequirement_systemuser_Create extends msdyn_resourcerequirement_systemuser {
}
interface msdyn_resourcerequirement_systemuser_Update extends msdyn_resourcerequirement_systemuser {
}
interface msdyn_resourcerequirement_systemuser_Select {
  msdyn_resourcerequirement_systemuserid: WebAttribute<msdyn_resourcerequirement_systemuser_Select, { msdyn_resourcerequirement_systemuserid: string | null }, {  }>;
  msdyn_resourcerequirementid: WebAttribute<msdyn_resourcerequirement_systemuser_Select, { msdyn_resourcerequirementid: string | null }, {  }>;
  systemuserid: WebAttribute<msdyn_resourcerequirement_systemuser_Select, { systemuserid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_resourcerequirement_systemuser_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_resourcerequirement_systemuser_Filter {
  msdyn_resourcerequirement_systemuserid: XQW.Guid;
  msdyn_resourcerequirementid: XQW.Guid;
  systemuserid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_resourcerequirement_systemuser_Expand {
  msdyn_resourcerequirement_systemuser: WebExpand<msdyn_resourcerequirement_systemuser_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_resourcerequirement_systemuser: SystemUser_Result[] }>;
}
interface msdyn_resourcerequirement_systemuser_FormattedResult {
}
interface msdyn_resourcerequirement_systemuser_Result extends msdyn_resourcerequirement_systemuser_Base, msdyn_resourcerequirement_systemuser_Relationships {
  "@odata.etag": string;
}
interface msdyn_resourcerequirement_systemuser_RelatedOne {
}
interface msdyn_resourcerequirement_systemuser_RelatedMany {
  msdyn_resourcerequirement_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_resourcerequirement_systemuserset: WebMappingRetrieve<msdyn_resourcerequirement_systemuser_Select,msdyn_resourcerequirement_systemuser_Expand,msdyn_resourcerequirement_systemuser_Filter,msdyn_resourcerequirement_systemuser_Fixed,msdyn_resourcerequirement_systemuser_Result,msdyn_resourcerequirement_systemuser_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_resourcerequirement_systemuserset: WebMappingRelated<msdyn_resourcerequirement_systemuser_RelatedOne,msdyn_resourcerequirement_systemuser_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_resourcerequirement_systemuserset: WebMappingCUDA<msdyn_resourcerequirement_systemuser_Create,msdyn_resourcerequirement_systemuser_Update,msdyn_resourcerequirement_systemuser_Select>;
}
