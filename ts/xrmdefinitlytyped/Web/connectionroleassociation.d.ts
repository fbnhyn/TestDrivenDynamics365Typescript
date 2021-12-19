interface ConnectionRoleAssociation_Base extends WebEntity {
  associatedconnectionroleid?: string | null;
  connectionroleassociationid?: string | null;
  connectionroleid?: string | null;
  versionnumber?: number | null;
}
interface ConnectionRoleAssociation_Relationships {
  connectionroleassociation_association?: ConnectionRole_Result[] | null;
  userentityinstancedata_connectionroleassociation?: UserEntityInstanceData_Result[] | null;
}
interface ConnectionRoleAssociation extends ConnectionRoleAssociation_Base, ConnectionRoleAssociation_Relationships {
}
interface ConnectionRoleAssociation_Create extends ConnectionRoleAssociation {
}
interface ConnectionRoleAssociation_Update extends ConnectionRoleAssociation {
}
interface ConnectionRoleAssociation_Select {
  associatedconnectionroleid: WebAttribute<ConnectionRoleAssociation_Select, { associatedconnectionroleid: string | null }, {  }>;
  connectionroleassociationid: WebAttribute<ConnectionRoleAssociation_Select, { connectionroleassociationid: string | null }, {  }>;
  connectionroleid: WebAttribute<ConnectionRoleAssociation_Select, { connectionroleid: string | null }, {  }>;
  versionnumber: WebAttribute<ConnectionRoleAssociation_Select, { versionnumber: number | null }, {  }>;
}
interface ConnectionRoleAssociation_Filter {
  associatedconnectionroleid: XQW.Guid;
  connectionroleassociationid: XQW.Guid;
  connectionroleid: XQW.Guid;
  versionnumber: number;
}
interface ConnectionRoleAssociation_Expand {
  connectionroleassociation_association: WebExpand<ConnectionRoleAssociation_Expand, ConnectionRole_Select, ConnectionRole_Filter, { connectionroleassociation_association: ConnectionRole_Result[] }>;
  userentityinstancedata_connectionroleassociation: WebExpand<ConnectionRoleAssociation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_connectionroleassociation: UserEntityInstanceData_Result[] }>;
}
interface ConnectionRoleAssociation_FormattedResult {
}
interface ConnectionRoleAssociation_Result extends ConnectionRoleAssociation_Base, ConnectionRoleAssociation_Relationships {
  "@odata.etag": string;
}
interface ConnectionRoleAssociation_RelatedOne {
}
interface ConnectionRoleAssociation_RelatedMany {
  connectionroleassociation_association: WebMappingRetrieve<ConnectionRole_Select,ConnectionRole_Expand,ConnectionRole_Filter,ConnectionRole_Fixed,ConnectionRole_Result,ConnectionRole_FormattedResult>;
  userentityinstancedata_connectionroleassociation: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  connectionroleassociations: WebMappingRetrieve<ConnectionRoleAssociation_Select,ConnectionRoleAssociation_Expand,ConnectionRoleAssociation_Filter,ConnectionRoleAssociation_Fixed,ConnectionRoleAssociation_Result,ConnectionRoleAssociation_FormattedResult>;
}
interface WebEntitiesRelated {
  connectionroleassociations: WebMappingRelated<ConnectionRoleAssociation_RelatedOne,ConnectionRoleAssociation_RelatedMany>;
}
interface WebEntitiesCUDA {
  connectionroleassociations: WebMappingCUDA<ConnectionRoleAssociation_Create,ConnectionRoleAssociation_Update,ConnectionRoleAssociation_Select>;
}
