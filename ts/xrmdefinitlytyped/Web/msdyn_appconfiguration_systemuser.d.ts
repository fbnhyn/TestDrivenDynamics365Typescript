interface msdyn_appconfiguration_systemuser_Base extends WebEntity {
  msdyn_appconfiguration_systemuserid?: string | null;
  msdyn_appconfigurationid?: string | null;
  systemuserid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_appconfiguration_systemuser_Relationships {
  msdyn_appconfiguration_systemuser?: SystemUser_Result[] | null;
}
interface msdyn_appconfiguration_systemuser extends msdyn_appconfiguration_systemuser_Base, msdyn_appconfiguration_systemuser_Relationships {
}
interface msdyn_appconfiguration_systemuser_Create extends msdyn_appconfiguration_systemuser {
}
interface msdyn_appconfiguration_systemuser_Update extends msdyn_appconfiguration_systemuser {
}
interface msdyn_appconfiguration_systemuser_Select {
  msdyn_appconfiguration_systemuserid: WebAttribute<msdyn_appconfiguration_systemuser_Select, { msdyn_appconfiguration_systemuserid: string | null }, {  }>;
  msdyn_appconfigurationid: WebAttribute<msdyn_appconfiguration_systemuser_Select, { msdyn_appconfigurationid: string | null }, {  }>;
  systemuserid: WebAttribute<msdyn_appconfiguration_systemuser_Select, { systemuserid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_appconfiguration_systemuser_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_appconfiguration_systemuser_Filter {
  msdyn_appconfiguration_systemuserid: XQW.Guid;
  msdyn_appconfigurationid: XQW.Guid;
  systemuserid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_appconfiguration_systemuser_Expand {
  msdyn_appconfiguration_systemuser: WebExpand<msdyn_appconfiguration_systemuser_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_appconfiguration_systemuser: SystemUser_Result[] }>;
}
interface msdyn_appconfiguration_systemuser_FormattedResult {
}
interface msdyn_appconfiguration_systemuser_Result extends msdyn_appconfiguration_systemuser_Base, msdyn_appconfiguration_systemuser_Relationships {
  "@odata.etag": string;
}
interface msdyn_appconfiguration_systemuser_RelatedOne {
}
interface msdyn_appconfiguration_systemuser_RelatedMany {
  msdyn_appconfiguration_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_appconfiguration_systemuserset: WebMappingRetrieve<msdyn_appconfiguration_systemuser_Select,msdyn_appconfiguration_systemuser_Expand,msdyn_appconfiguration_systemuser_Filter,msdyn_appconfiguration_systemuser_Fixed,msdyn_appconfiguration_systemuser_Result,msdyn_appconfiguration_systemuser_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_appconfiguration_systemuserset: WebMappingRelated<msdyn_appconfiguration_systemuser_RelatedOne,msdyn_appconfiguration_systemuser_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_appconfiguration_systemuserset: WebMappingCUDA<msdyn_appconfiguration_systemuser_Create,msdyn_appconfiguration_systemuser_Update,msdyn_appconfiguration_systemuser_Select>;
}
