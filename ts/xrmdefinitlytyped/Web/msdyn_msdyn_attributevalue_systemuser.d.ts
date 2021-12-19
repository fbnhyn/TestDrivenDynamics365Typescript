interface msdyn_msdyn_attributevalue_systemuser_Base extends WebEntity {
  msdyn_attributevalueid?: string | null;
  msdyn_msdyn_attributevalue_systemuserid?: string | null;
  systemuserid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_attributevalue_systemuser_Relationships {
  msdyn_msdyn_attributevalue_systemuser?: SystemUser_Result[] | null;
}
interface msdyn_msdyn_attributevalue_systemuser extends msdyn_msdyn_attributevalue_systemuser_Base, msdyn_msdyn_attributevalue_systemuser_Relationships {
}
interface msdyn_msdyn_attributevalue_systemuser_Create extends msdyn_msdyn_attributevalue_systemuser {
}
interface msdyn_msdyn_attributevalue_systemuser_Update extends msdyn_msdyn_attributevalue_systemuser {
}
interface msdyn_msdyn_attributevalue_systemuser_Select {
  msdyn_attributevalueid: WebAttribute<msdyn_msdyn_attributevalue_systemuser_Select, { msdyn_attributevalueid: string | null }, {  }>;
  msdyn_msdyn_attributevalue_systemuserid: WebAttribute<msdyn_msdyn_attributevalue_systemuser_Select, { msdyn_msdyn_attributevalue_systemuserid: string | null }, {  }>;
  systemuserid: WebAttribute<msdyn_msdyn_attributevalue_systemuser_Select, { systemuserid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_attributevalue_systemuser_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_attributevalue_systemuser_Filter {
  msdyn_attributevalueid: XQW.Guid;
  msdyn_msdyn_attributevalue_systemuserid: XQW.Guid;
  systemuserid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_attributevalue_systemuser_Expand {
  msdyn_msdyn_attributevalue_systemuser: WebExpand<msdyn_msdyn_attributevalue_systemuser_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_msdyn_attributevalue_systemuser: SystemUser_Result[] }>;
}
interface msdyn_msdyn_attributevalue_systemuser_FormattedResult {
}
interface msdyn_msdyn_attributevalue_systemuser_Result extends msdyn_msdyn_attributevalue_systemuser_Base, msdyn_msdyn_attributevalue_systemuser_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_attributevalue_systemuser_RelatedOne {
}
interface msdyn_msdyn_attributevalue_systemuser_RelatedMany {
  msdyn_msdyn_attributevalue_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_attributevalue_systemuserset: WebMappingRetrieve<msdyn_msdyn_attributevalue_systemuser_Select,msdyn_msdyn_attributevalue_systemuser_Expand,msdyn_msdyn_attributevalue_systemuser_Filter,msdyn_msdyn_attributevalue_systemuser_Fixed,msdyn_msdyn_attributevalue_systemuser_Result,msdyn_msdyn_attributevalue_systemuser_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_attributevalue_systemuserset: WebMappingRelated<msdyn_msdyn_attributevalue_systemuser_RelatedOne,msdyn_msdyn_attributevalue_systemuser_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_attributevalue_systemuserset: WebMappingCUDA<msdyn_msdyn_attributevalue_systemuser_Create,msdyn_msdyn_attributevalue_systemuser_Update,msdyn_msdyn_attributevalue_systemuser_Select>;
}
