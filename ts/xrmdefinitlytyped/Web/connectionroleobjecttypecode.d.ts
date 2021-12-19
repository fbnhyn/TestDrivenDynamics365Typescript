interface ConnectionRoleObjectTypeCode_Base extends WebEntity {
  associatedobjecttypecode?: string | null;
  connectionroleobjecttypecodeid?: string | null;
  organizationid?: string | null;
  versionnumber?: number | null;
}
interface ConnectionRoleObjectTypeCode_Relationships {
  userentityinstancedata_connectionroleobjecttypecode?: UserEntityInstanceData_Result[] | null;
}
interface ConnectionRoleObjectTypeCode extends ConnectionRoleObjectTypeCode_Base, ConnectionRoleObjectTypeCode_Relationships {
}
interface ConnectionRoleObjectTypeCode_Create extends ConnectionRoleObjectTypeCode {
  connectionroleid_bind$connectionroles?: string | null;
}
interface ConnectionRoleObjectTypeCode_Update extends ConnectionRoleObjectTypeCode {
}
interface ConnectionRoleObjectTypeCode_Select {
  associatedobjecttypecode: WebAttribute<ConnectionRoleObjectTypeCode_Select, { associatedobjecttypecode: string | null }, {  }>;
  connectionroleid_guid: WebAttribute<ConnectionRoleObjectTypeCode_Select, { connectionroleid_guid: string | null }, { connectionroleid_formatted?: string }>;
  connectionroleobjecttypecodeid: WebAttribute<ConnectionRoleObjectTypeCode_Select, { connectionroleobjecttypecodeid: string | null }, {  }>;
  organizationid: WebAttribute<ConnectionRoleObjectTypeCode_Select, { organizationid: string | null }, {  }>;
  versionnumber: WebAttribute<ConnectionRoleObjectTypeCode_Select, { versionnumber: number | null }, {  }>;
}
interface ConnectionRoleObjectTypeCode_Filter {
  associatedobjecttypecode: string;
  connectionroleid_guid: XQW.Guid;
  connectionroleobjecttypecodeid: XQW.Guid;
  organizationid: XQW.Guid;
  versionnumber: number;
}
interface ConnectionRoleObjectTypeCode_Expand {
  connectionroleid: WebExpand<ConnectionRoleObjectTypeCode_Expand, ConnectionRole_Select, ConnectionRole_Filter, { connectionroleid: ConnectionRole_Result }>;
  userentityinstancedata_connectionroleobjecttypecode: WebExpand<ConnectionRoleObjectTypeCode_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_connectionroleobjecttypecode: UserEntityInstanceData_Result[] }>;
}
interface ConnectionRoleObjectTypeCode_FormattedResult {
  connectionroleid_formatted?: string;
}
interface ConnectionRoleObjectTypeCode_Result extends ConnectionRoleObjectTypeCode_Base, ConnectionRoleObjectTypeCode_Relationships {
  "@odata.etag": string;
  connectionroleid_guid: string | null;
}
interface ConnectionRoleObjectTypeCode_RelatedOne {
  connectionroleid: WebMappingRetrieve<ConnectionRole_Select,ConnectionRole_Expand,ConnectionRole_Filter,ConnectionRole_Fixed,ConnectionRole_Result,ConnectionRole_FormattedResult>;
}
interface ConnectionRoleObjectTypeCode_RelatedMany {
  userentityinstancedata_connectionroleobjecttypecode: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  connectionroleobjecttypecodes: WebMappingRetrieve<ConnectionRoleObjectTypeCode_Select,ConnectionRoleObjectTypeCode_Expand,ConnectionRoleObjectTypeCode_Filter,ConnectionRoleObjectTypeCode_Fixed,ConnectionRoleObjectTypeCode_Result,ConnectionRoleObjectTypeCode_FormattedResult>;
}
interface WebEntitiesRelated {
  connectionroleobjecttypecodes: WebMappingRelated<ConnectionRoleObjectTypeCode_RelatedOne,ConnectionRoleObjectTypeCode_RelatedMany>;
}
interface WebEntitiesCUDA {
  connectionroleobjecttypecodes: WebMappingCUDA<ConnectionRoleObjectTypeCode_Create,ConnectionRoleObjectTypeCode_Update,ConnectionRoleObjectTypeCode_Select>;
}
