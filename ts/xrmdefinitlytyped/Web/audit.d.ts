interface Audit_Base extends WebEntity {
  action?: audit_action | null;
  attributemask?: string | null;
  auditid?: string | null;
  changedata?: string | null;
  createdon?: Date | null;
  operation?: audit_operation | null;
  transactionid?: string | null;
  useradditionalinfo?: string | null;
}
interface Audit_Relationships {
  userentityinstancedata_audit?: UserEntityInstanceData_Result[] | null;
}
interface Audit extends Audit_Base, Audit_Relationships {
}
interface Audit_Create extends Audit {
}
interface Audit_Update extends Audit {
}
interface Audit_Select {
  action: WebAttribute<Audit_Select, { action: audit_action | null }, { action_formatted?: string }>;
  attributemask: WebAttribute<Audit_Select, { attributemask: string | null }, {  }>;
  auditid: WebAttribute<Audit_Select, { auditid: string | null }, {  }>;
  callinguserid_guid: WebAttribute<Audit_Select, { callinguserid_guid: string | null }, { callinguserid_formatted?: string }>;
  changedata: WebAttribute<Audit_Select, { changedata: string | null }, {  }>;
  createdon: WebAttribute<Audit_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  objectid_guid: WebAttribute<Audit_Select, { objectid_guid: string | null }, { objectid_formatted?: string }>;
  operation: WebAttribute<Audit_Select, { operation: audit_operation | null }, { operation_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<Audit_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  transactionid: WebAttribute<Audit_Select, { transactionid: string | null }, {  }>;
  useradditionalinfo: WebAttribute<Audit_Select, { useradditionalinfo: string | null }, {  }>;
  userid_guid: WebAttribute<Audit_Select, { userid_guid: string | null }, { userid_formatted?: string }>;
}
interface Audit_Filter {
  action: audit_action;
  attributemask: string;
  auditid: XQW.Guid;
  callinguserid_guid: XQW.Guid;
  changedata: string;
  createdon: Date;
  objectid_guid: XQW.Guid;
  operation: audit_operation;
  regardingobjectid_guid: XQW.Guid;
  transactionid: XQW.Guid;
  useradditionalinfo: string;
  userid_guid: XQW.Guid;
}
interface Audit_Expand {
  callinguserid: WebExpand<Audit_Expand, SystemUser_Select, SystemUser_Filter, { callinguserid: SystemUser_Result }>;
  userentityinstancedata_audit: WebExpand<Audit_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_audit: UserEntityInstanceData_Result[] }>;
  userid: WebExpand<Audit_Expand, SystemUser_Select, SystemUser_Filter, { userid: SystemUser_Result }>;
}
interface Audit_FormattedResult {
  action_formatted?: string;
  callinguserid_formatted?: string;
  createdon_formatted?: string;
  objectid_formatted?: string;
  operation_formatted?: string;
  regardingobjectid_formatted?: string;
  userid_formatted?: string;
}
interface Audit_Result extends Audit_Base, Audit_Relationships {
  "@odata.etag": string;
  callinguserid_guid: string | null;
  objectid_guid: string | null;
  regardingobjectid_guid: string | null;
  userid_guid: string | null;
}
interface Audit_RelatedOne {
  callinguserid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  userid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface Audit_RelatedMany {
  userentityinstancedata_audit: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  audits: WebMappingRetrieve<Audit_Select,Audit_Expand,Audit_Filter,Audit_Fixed,Audit_Result,Audit_FormattedResult>;
}
interface WebEntitiesRelated {
  audits: WebMappingRelated<Audit_RelatedOne,Audit_RelatedMany>;
}
interface WebEntitiesCUDA {
  audits: WebMappingCUDA<Audit_Create,Audit_Update,Audit_Select>;
}
