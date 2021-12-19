interface ConnectionRole_Base extends WebEntity {
  category?: connectionrole_category | null;
  componentstate?: componentstate | null;
  connectionroleid?: string | null;
  connectionroleidunique?: string | null;
  createdon?: Date | null;
  description?: string | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: connectionrole_statecode | null;
  statuscode?: connectionrole_statuscode | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface ConnectionRole_Relationships {
  ConnectionRole_ProcessSessions?: ProcessSession_Result[] | null;
  ConnectionRole_SyncErrors?: SyncError_Result[] | null;
  Connection_Role_AsyncOperations?: AsyncOperation_Result[] | null;
  connection_role_connection_role_object_type_codes?: ConnectionRoleObjectTypeCode_Result[] | null;
  connection_role_connections1?: Connection_Result[] | null;
  connection_role_connections2?: Connection_Result[] | null;
  connectionroleassociation_association?: ConnectionRole_Result[] | null;
  userentityinstancedata_connectionrole?: UserEntityInstanceData_Result[] | null;
}
interface ConnectionRole extends ConnectionRole_Base, ConnectionRole_Relationships {
}
interface ConnectionRole_Create extends ConnectionRole {
}
interface ConnectionRole_Update extends ConnectionRole {
}
interface ConnectionRole_Select {
  category: WebAttribute<ConnectionRole_Select, { category: connectionrole_category | null }, { category_formatted?: string }>;
  componentstate: WebAttribute<ConnectionRole_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  connectionroleid: WebAttribute<ConnectionRole_Select, { connectionroleid: string | null }, {  }>;
  connectionroleidunique: WebAttribute<ConnectionRole_Select, { connectionroleidunique: string | null }, {  }>;
  createdby_guid: WebAttribute<ConnectionRole_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ConnectionRole_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ConnectionRole_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<ConnectionRole_Select, { description: string | null }, {  }>;
  importsequencenumber: WebAttribute<ConnectionRole_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<ConnectionRole_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<ConnectionRole_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<ConnectionRole_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ConnectionRole_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ConnectionRole_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ConnectionRole_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ConnectionRole_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<ConnectionRole_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<ConnectionRole_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<ConnectionRole_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<ConnectionRole_Select, { statecode: connectionrole_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ConnectionRole_Select, { statuscode: connectionrole_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<ConnectionRole_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<ConnectionRole_Select, { versionnumber: number | null }, {  }>;
}
interface ConnectionRole_Filter {
  category: connectionrole_category;
  componentstate: componentstate;
  connectionroleid: XQW.Guid;
  connectionroleidunique: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  importsequencenumber: number;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: connectionrole_statecode;
  statuscode: connectionrole_statuscode;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface ConnectionRole_Expand {
  ConnectionRole_ProcessSessions: WebExpand<ConnectionRole_Expand, ProcessSession_Select, ProcessSession_Filter, { ConnectionRole_ProcessSessions: ProcessSession_Result[] }>;
  ConnectionRole_SyncErrors: WebExpand<ConnectionRole_Expand, SyncError_Select, SyncError_Filter, { ConnectionRole_SyncErrors: SyncError_Result[] }>;
  Connection_Role_AsyncOperations: WebExpand<ConnectionRole_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Connection_Role_AsyncOperations: AsyncOperation_Result[] }>;
  connection_role_connection_role_object_type_codes: WebExpand<ConnectionRole_Expand, ConnectionRoleObjectTypeCode_Select, ConnectionRoleObjectTypeCode_Filter, { connection_role_connection_role_object_type_codes: ConnectionRoleObjectTypeCode_Result[] }>;
  connection_role_connections1: WebExpand<ConnectionRole_Expand, Connection_Select, Connection_Filter, { connection_role_connections1: Connection_Result[] }>;
  connection_role_connections2: WebExpand<ConnectionRole_Expand, Connection_Select, Connection_Filter, { connection_role_connections2: Connection_Result[] }>;
  connectionroleassociation_association: WebExpand<ConnectionRole_Expand, ConnectionRole_Select, ConnectionRole_Filter, { connectionroleassociation_association: ConnectionRole_Result[] }>;
  createdby: WebExpand<ConnectionRole_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ConnectionRole_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ConnectionRole_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ConnectionRole_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ConnectionRole_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_connectionrole: WebExpand<ConnectionRole_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_connectionrole: UserEntityInstanceData_Result[] }>;
}
interface ConnectionRole_FormattedResult {
  category_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ConnectionRole_Result extends ConnectionRole_Base, ConnectionRole_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface ConnectionRole_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ConnectionRole_RelatedMany {
  ConnectionRole_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  ConnectionRole_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  Connection_Role_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  connection_role_connection_role_object_type_codes: WebMappingRetrieve<ConnectionRoleObjectTypeCode_Select,ConnectionRoleObjectTypeCode_Expand,ConnectionRoleObjectTypeCode_Filter,ConnectionRoleObjectTypeCode_Fixed,ConnectionRoleObjectTypeCode_Result,ConnectionRoleObjectTypeCode_FormattedResult>;
  connection_role_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  connection_role_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  connectionroleassociation_association: WebMappingRetrieve<ConnectionRole_Select,ConnectionRole_Expand,ConnectionRole_Filter,ConnectionRole_Fixed,ConnectionRole_Result,ConnectionRole_FormattedResult>;
  userentityinstancedata_connectionrole: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  connectionroles: WebMappingRetrieve<ConnectionRole_Select,ConnectionRole_Expand,ConnectionRole_Filter,ConnectionRole_Fixed,ConnectionRole_Result,ConnectionRole_FormattedResult>;
}
interface WebEntitiesRelated {
  connectionroles: WebMappingRelated<ConnectionRole_RelatedOne,ConnectionRole_RelatedMany>;
}
interface WebEntitiesCUDA {
  connectionroles: WebMappingCUDA<ConnectionRole_Create,ConnectionRole_Update,ConnectionRole_Select>;
}
